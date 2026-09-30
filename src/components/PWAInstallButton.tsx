import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Language } from '../types';
import { Download, Smartphone, X, Check, Share2, PlusSquare } from 'lucide-react';

interface PWAInstallButtonProps {
  language: Language;
  variant?: 'navbar' | 'banner';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  language,
  variant = 'navbar',
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  // If already running in standalone PWA window, hide button
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    setIsInstalling(true);
    await install();
    setIsInstalling(false);
  };

  // Chromium / Android / Desktop Install Flow
  if (isInstallable) {
    if (variant === 'banner') {
      return (
        <div className="bg-emerald-900/50 border border-emerald-500/30 rounded-xl p-3 flex items-center justify-between gap-3 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-4 h-4 text-emerald-100" />
            </div>
            <div className="text-xs">
              <span className="font-bold block">
                {language === 'en' ? 'Install KrishiGuru App' : 'ಕೃಷಿಗುರು ಅಪ್ಲಿಕೇಶನ್ ಸ್ಥಾಪಿಸಿ'}
              </span>
              <span className="text-emerald-200 text-[11px]">
                {language === 'en' ? 'Works fully offline in the farm field' : 'ಗದ್ದೆ-ತೋಟಗಳಲ್ಲಿ ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ'}
              </span>
            </div>
          </div>
          <button
            onClick={handleInstallClick}
            disabled={isInstalling}
            className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-600 active:scale-95 text-stone-900 rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-sm whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Install' : 'ಸ್ಥಾಪಿಸಿ'}</span>
          </button>
        </div>
      );
    }

    return (
      <button
        onClick={handleInstallClick}
        disabled={isInstalling}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 border border-emerald-600/70 text-xs font-semibold text-white transition focus:outline-none focus:ring-2 focus:ring-white/40 shadow-xs active:scale-95"
        title={language === 'en' ? 'Install App on Phone' : 'ಮೊಬೈಲ್‌ನಲ್ಲಿ ಆ್ಯಪ್ ಸ್ಥಾಪಿಸಿ'}
      >
        <Download className="w-3.5 h-3.5 text-amber-300 animate-bounce" />
        <span className="hidden sm:inline">
          {language === 'en' ? 'Install App' : 'ಆ್ಯಪ್ ಸ್ಥಾಪಿಸಿ'}
        </span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 border border-emerald-600/70 text-xs font-semibold text-white transition focus:outline-none focus:ring-2 focus:ring-white/40 shadow-xs"
        >
          <Smartphone className="w-3.5 h-3.5 text-emerald-200" />
          <span className="hidden sm:inline">
            {language === 'en' ? 'Add to Home Screen' : 'ಆ್ಯಪ್ ಸೇರಿಸಿ'}
          </span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-stone-200 text-stone-900 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌾</span>
                  <h3 className="text-base font-bold">
                    {language === 'en' ? 'Install on iPhone / iPad' : 'iPhone / iPad ನಲ್ಲಿ ಸ್ಥಾಪಿಸಿ'}
                  </h3>
                </div>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs text-stone-700">
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="w-6 h-6 rounded-md bg-stone-200 flex items-center justify-center font-bold text-stone-700 flex-shrink-0">
                    1
                  </div>
                  <div>
                    {language === 'en' ? (
                      <>
                        Tap the <strong>Share</strong> button <Share2 className="w-3.5 h-3.5 inline mx-0.5 text-blue-600" /> at the bottom of Safari.
                      </>
                    ) : (
                      <>
                        Safari ಕೆಳಗಿರುವ <strong>Share</strong> ಬಟನ್ <Share2 className="w-3.5 h-3.5 inline mx-0.5 text-blue-600" /> ಒತ್ತಿರಿ.
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="w-6 h-6 rounded-md bg-stone-200 flex items-center justify-center font-bold text-stone-700 flex-shrink-0">
                    2
                  </div>
                  <div>
                    {language === 'en' ? (
                      <>
                        Scroll down and select <strong>Add to Home Screen</strong> <PlusSquare className="w-3.5 h-3.5 inline mx-0.5 text-stone-700" />.
                      </>
                    ) : (
                      <>
                        ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ <strong>Add to Home Screen</strong> <PlusSquare className="w-3.5 h-3.5 inline mx-0.5 text-stone-700" /> ಆಯ್ಕೆಮಾಡಿ.
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="w-6 h-6 rounded-md bg-stone-200 flex items-center justify-center font-bold text-stone-700 flex-shrink-0">
                    3
                  </div>
                  <div>
                    {language === 'en' ? (
                      <>
                        Tap <strong>Add</strong> in the top right corner. KrishiGuru is now available offline directly from your home screen!
                      </>
                    ) : (
                      <>
                        ಮೇಲ್ಭಾಗದಲ್ಲಿರುವ <strong>Add</strong> ಒತ್ತಿರಿ. ಕೃಷಿಗುರು ನಿಮ್ಮ ಮೊಬೈಲ್ ಪರದೆಯಲ್ಲಿ ಲಭ್ಯವಾಗುತ್ತದೆ!
                      </>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition"
              >
                {language === 'en' ? 'Got It' : 'ತಿಳಿದಿದೆ'}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
