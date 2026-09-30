import React, { useState, useEffect } from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { Language } from '../types';
import { WifiOff, Wifi, Check, X, ShieldAlert } from 'lucide-react';

interface OfflineIndicatorProps {
  language: Language;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ language }) => {
  const isOnline = useOnlineStatus();
  const [showRestored, setShowRestored] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      setDismissed(false);
    } else {
      // Internet just came back online
      setShowRestored(true);
      const timer = setTimeout(() => {
        setShowRestored(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOnline]);

  if (showRestored) {
    return (
      <div className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-3 duration-300">
        <div className="flex items-center gap-3 bg-emerald-800 text-white px-4 py-3 rounded-2xl shadow-xl border border-emerald-600/70">
          <div className="w-8 h-8 rounded-xl bg-emerald-700 flex items-center justify-center flex-shrink-0">
            <Wifi className="w-4 h-4 text-emerald-200" />
          </div>
          <div className="text-xs">
            <div className="font-bold">
              {language === 'en' ? 'Back Online' : 'ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕ ಪುನಃಸ್ಥಾಪಿಸಲಾಗಿದೆ'}
            </div>
            <div className="text-emerald-100 mt-0.5">
              {language === 'en'
                ? 'Live mandi rates & weather sync enabled.'
                : 'ನೇರ ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಹವಾಮಾನ ಸಿಂಕ್ ಸಕ್ರಿಯವಾಗಿದೆ.'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isOnline || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-3 duration-300">
      <div className="bg-amber-600 text-white p-3.5 rounded-2xl shadow-xl border border-amber-500/80 flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-700/80 flex items-center justify-center flex-shrink-0 mt-0.5">
            <WifiOff className="w-4 h-4 text-amber-200" />
          </div>
          <div>
            <div className="text-xs font-bold flex items-center gap-1.5">
              <span>{language === 'en' ? 'Working in Offline Mode' : 'ಆಫ್‌ಲೈನ್ ಮೋಡ್‌ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ'}</span>
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
            <p className="text-[11px] text-amber-100 mt-1 leading-relaxed">
              {language === 'en'
                ? 'Intermittent connection detected. All farm calculators, soil health, fertilizer dosage, crop calendar & cached data work offline.'
                : 'ಇಂಟರ್ನೆಟ್ ಇಲ್ಲದಿದ್ದರೂ ಮಣ್ಣಿನ ಪರೀಕ್ಷೆ, ಗೊಬ್ಬರ ಪ್ರಮಾಣ, ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್ ಹಾಗೂ ಲೆಕ್ಕಾಚಾರಗಳು ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿ ಲಭ್ಯವಿವೆ.'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="text-amber-200 hover:text-white p-1 rounded-lg hover:bg-amber-700/50 transition -mr-1 -mt-1"
          aria-label="Dismiss offline notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
