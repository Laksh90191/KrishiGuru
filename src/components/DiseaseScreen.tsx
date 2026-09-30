import React, { useState, useRef } from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { Camera, Image as ImageIcon, Sparkles, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SAMPLE_DISEASES } from '../data/agriculturalData';

interface DiseaseScreenProps {
  language: Language;
}

export const DiseaseScreen: React.FC<DiseaseScreenProps> = ({ language }) => {
  const t = translations[language];

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [disease, setDisease] = useState<string>('');
  const [treatment, setTreatment] = useState<string>('');
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [prevention, setPrevention] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleCameraCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);

      // Matches Flutter pickFromCamera logic
      setDisease('Leaf Blight');
      setTreatment('Spray Mancozeb fungicide.\nRemove infected leaves.\nAvoid overwatering.');
      setSymptoms(['Water-soaked lesions on leaf blades', 'Margins turn straw-colored and dry']);
      setPrevention('Use certified seeds and treat with Carbendazim before sowing.');
    }
  };

  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);

      // Matches Flutter pickFromGallery logic
      setDisease('Leaf Spot');
      setTreatment('Use Copper Oxychloride.\nMaintain field hygiene.\nImprove drainage.');
      setSymptoms(['Circular dark brown spots with yellow margins', 'Premature leaf shedding']);
      setPrevention('Practice crop rotation and avoid overhead sprinkling.');
    }
  };

  const selectSample = (sample: typeof SAMPLE_DISEASES[0]) => {
    setImagePreview(sample.image);
    setDisease(sample.name);
    setTreatment(sample.treatment);
    setSymptoms(sample.symptoms);
    setPrevention(sample.prevention);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-emerald-800 text-white p-5 rounded-2xl shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <span>🐛</span> {t.diseaseDetection}
          </h2>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1">{t.diseaseSubtitle}</p>
        </div>
      </div>

      {/* Hidden file inputs for Camera and Gallery */}
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleCameraCapture}
        className="hidden"
      />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleGalleryUpload}
        className="hidden"
      />

      {/* Image Preview Box */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm space-y-5">
        <div className="relative aspect-video sm:aspect-21/9 w-full rounded-xl overflow-hidden bg-stone-100 border border-stone-200 flex items-center justify-center">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Crop Leaf"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-stone-400 p-6 text-center">
              <ImageIcon className="w-16 h-16 stroke-1 text-stone-300 mb-2" />
              <p className="text-sm font-medium">
                {language === 'en'
                  ? 'No image captured yet. Take a photo or upload leaf image.'
                  : 'ಯಾವುದೇ ಚಿತ್ರ ಆಯ್ಕೆ ಮಾಡಿಲ್ಲ. ಕ್ಯಾಮರಾ ಅಥವಾ ಗ್ಯಾಲರಿಯಿಂದ ಚಿತ್ರ ಆರಿಸಿ.'}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons matching Flutter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => cameraInputRef.current?.click()}
            className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm transition shadow-sm flex items-center justify-center gap-2"
          >
            <Camera className="w-4 h-4" />
            <span>{t.takePhoto}</span>
          </button>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 border border-stone-300"
          >
            <ImageIcon className="w-4 h-4 text-stone-600" />
            <span>{t.chooseGallery}</span>
          </button>
        </div>

        {/* Quick Sample Leaves for Testing in Web */}
        <div className="pt-2 border-t border-stone-100">
          <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.orTrySample}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {SAMPLE_DISEASES.map((s) => (
              <button
                key={s.id}
                onClick={() => selectSample(s)}
                className="p-2 bg-stone-50 hover:bg-emerald-50 hover:border-emerald-300 border border-stone-200 rounded-xl transition text-left group"
              >
                <div className="aspect-square w-full rounded-lg overflow-hidden mb-1.5 bg-stone-200">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="text-xs font-bold text-stone-800 truncate">{s.name}</div>
                <div className="text-[10px] text-stone-400 truncate">{s.crop}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Disease Detection Result Card matching Flutter UI */}
      {disease && (
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4 animate-in fade-in duration-200">
          <div className="text-center pb-2 border-b border-stone-100">
            <h4 className="text-xl sm:text-2xl font-bold text-rose-600 tracking-tight">
              {t.detectedDisease}
            </h4>
            <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
              {disease}
            </div>
          </div>

          {/* Treatment Block */}
          <div className="space-y-2">
            <h5 className="text-lg font-bold text-emerald-700 flex items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>{t.treatment}</span>
            </h5>
            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl text-center">
              <pre className="font-sans whitespace-pre-wrap text-base font-semibold text-stone-800 leading-relaxed">
                {treatment}
              </pre>
            </div>
          </div>

          {/* Extra symptoms & prevention */}
          {symptoms.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-700 block mb-1">Identified Symptoms:</span>
                <ul className="list-disc pl-4 space-y-1 text-stone-600">
                  {symptoms.map((sym, idx) => (
                    <li key={idx}>{sym}</li>
                  ))}
                </ul>
              </div>

              {prevention && (
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="font-bold text-stone-700 block mb-1">Preventive Practices:</span>
                  <p className="text-stone-600">{prevention}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
