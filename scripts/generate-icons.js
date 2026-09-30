import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function createPNG(width, height, colorR, colorG, colorB, addEmblem = true, isMaskable = false) {
  // RGBA buffer: 4 bytes per pixel + 1 filter byte per scanline
  const rowStride = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowStride);

  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(width, height) * (isMaskable ? 0.38 : 0.44);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowStride;
    rawData[rowOffset] = 0; // Filter type 0 (None)

    for (let x = 0; x < width; x++) {
      const pixelOffset = rowOffset + 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let r = colorR;
      let g = colorG;
      let b = colorB;
      let a = 255;

      // Darker border gradient
      const normY = y / height;
      r = Math.max(0, Math.min(255, Math.round(r * (1.1 - normY * 0.25))));
      g = Math.max(0, Math.min(255, Math.round(g * (1.1 - normY * 0.25))));
      b = Math.max(0, Math.min(255, Math.round(b * (1.1 - normY * 0.25))));

      if (addEmblem) {
        // Inner circle glow
        if (dist < radius * 0.7) {
          r = Math.min(255, r + 20);
          g = Math.min(255, g + 35);
          b = Math.min(255, b + 20);
        }

        // Draw stylized rice sheaf in gold and green
        const sheafDistX = Math.abs(dx);
        // Central stalk
        if (sheafDistX < width * 0.015 && dy > -radius * 0.7 && dy < radius * 0.6) {
          r = 254; g = 240; b = 138;
        }

        // Golden grain clusters
        for (let i = -3; i <= 3; i++) {
          const grainY = cy + i * (radius * 0.16) - radius * 0.1;
          const grainXOffset = ((i % 2 === 0 ? 1 : -1) * radius * 0.22);
          const gdx = x - (cx + grainXOffset);
          const gdy = y - grainY;
          if ((gdx * gdx) / 1.8 + gdy * gdy < (radius * 0.09) * (radius * 0.09)) {
            r = 250; g = 204; b = 21; // Bright Amber Gold
          }
        }

        // Green leaves at bottom
        if (dy > radius * 0.15 && dy < radius * 0.65) {
          const leafCurve = (radius * 0.65 - dy) * 0.8;
          if (sheafDistX < leafCurve && sheafDistX > width * 0.02) {
            r = 34; g = 197; b = 94; // Lush Leaf Green
          }
        }
      }

      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a;
    }
  }

  const compressed = zlib.deflateSync(rawData);

  // PNG Signature
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR Chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8 bits per channel
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  const ihdrChunk = createChunk('IHDR', ihdrData);

  // IDAT Chunk
  const idatChunk = createChunk('IDAT', compressed);

  // IEND Chunk
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function createChunk(type, data) {
  const length = data.length;
  const buffer = Buffer.alloc(8 + length + 4);
  buffer.writeUInt32BE(length, 0);
  buffer.write(type, 4, 4, 'ascii');
  data.copy(buffer, 8);

  const crc = crc32(buffer.subarray(4, 8 + length));
  buffer.writeUInt32BE(crc, 8 + length);
  return buffer;
}

// Standard CRC32 table
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate Emerald #047857 theme PNG icons
console.log('Generating PWA icons...');
const png192 = createPNG(192, 192, 4, 120, 87, true, false);
fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), png192);

const png512 = createPNG(512, 512, 4, 120, 87, true, false);
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), png512);

const pngMaskable = createPNG(512, 512, 4, 120, 87, true, true);
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), pngMaskable);

const appleTouch = createPNG(180, 180, 4, 120, 87, true, false);
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleTouch);

const favicon = createPNG(64, 64, 4, 120, 87, true, false);
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), favicon);

console.log('PWA icons created successfully in /public');
