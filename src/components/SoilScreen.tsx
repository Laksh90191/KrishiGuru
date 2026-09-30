import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { Sprout, CheckCircle2, AlertTriangle, Sparkles, RefreshCw } from 'lucide-react';

interface SoilScreenProps {
  language: Language;
}

export const SoilScreen: React.FC<SoilScreenProps> = ({ language }) => {
  const t = translations[language];

  const [ph, setPh] = useState('');
  const [nitrogen, setNitrogen] = useState('');
  const [phosphorus, setPhosphorus] = useState('');
  const [potassium, setPotassium] = useState('');

  const [result, setResult] = useState<string>('');
  const [analyzed, setAnalyzed] = useState(false);

  const checkSoil = () => {
    const phVal = parseFloat(ph) || 0;
    const n = parseInt(nitrogen) || 0;
    const p = parseInt(phosphorus) || 0;
    const k = parseInt(potassium) || 0;

    let advice = '';

    if (phVal < 6) {
      advice += '⚠ Soil is acidic.\n';
    } else if (phVal > 7.5) {
      advice += '⚠ Soil is alkaline.\n';
    } else {
      advice += '✅ Soil pH is good.\n';
    }

    if (n < 50) advice += '🌱 Nitrogen is low.\n';
    if (p < 30) advice += '🧪 Phosphorus is low.\n';
    if (k < 30) advice += '🌾 Potassium is low.\n';

    if (advice.trim() === '✅ Soil pH is good.' && n >= 50 && p >= 30 && k >= 30) {
      advice = '✅ Soil is healthy.';
    }

    setResult(advice);
    setAnalyzed(true);
  };

  const handleReset = () => {
    setPh('');
    setNitrogen('');
    setPhosphorus('');
    setPotassium('');
    setResult('');
    setAnalyzed(false);
  };

  const loadSample = (type: 'healthy' | 'acidic' | 'deficient') => {
    if (type === 'healthy') {
      setPh('6.8');
      setNitrogen('65');
      setPhosphorus('42');
      setPotassium('45');
    } else if (type === 'acidic') {
      setPh('5.2');
      setNitrogen('35');
      setPhosphorus('20');
      setPotassium('25');
    } else {
      setPh('8.1');
      setNitrogen('40');
      setPhosphorus('22');
      setPotassium('50');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-emerald-800 text-white p-5 rounded-2xl shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <span>🌱</span> {t.soilHealth}
          </h2>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1">{t.soilSubtitle}</p>
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-stone-800 text-base">
            {language === 'en' ? 'Enter Soil Test Values' : 'ಮಣ್ಣು ಪರೀಕ್ಷಾ ವಿವರಗಳು'}
          </h3>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-stone-400 font-medium">{language === 'en' ? 'Quick preset:' : 'ಉದಾಹರಣೆ:'}</span>
            <button
              onClick={() => loadSample('healthy')}
              className="text-emerald-700 hover:underline font-semibold"
            >
              {language === 'en' ? 'Balanced' : 'ಸಮತೋಲನ'}
            </button>
            <span className="text-stone-300">|</span>
            <button
              onClick={() => loadSample('acidic')}
              className="text-amber-700 hover:underline font-semibold"
            >
              {language === 'en' ? 'Acidic/Low' : 'ಆಮ್ಲೀಯ'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase mb-1.5">
              {t.phLabel}
            </label>
            <input
              type="number"
              step="0.1"
              value={ph}
              onChange={(e) => setPh(e.target.value)}
              placeholder="e.g. 6.5"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800 font-semibold text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase mb-1.5">
              {t.nitrogenLabel}
            </label>
            <input
              type="number"
              value={nitrogen}
              onChange={(e) => setNitrogen(e.target.value)}
              placeholder="e.g. 55"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800 font-semibold text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase mb-1.5">
              {t.phosphorusLabel}
            </label>
            <input
              type="number"
              value={phosphorus}
              onChange={(e) => setPhosphorus(e.target.value)}
              placeholder="e.g. 35"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800 font-semibold text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase mb-1.5">
              {t.potassiumLabel}
            </label>
            <input
              type="number"
              value={potassium}
              onChange={(e) => setPotassium(e.target.value)}
              placeholder="e.g. 40"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800 font-semibold text-sm"
            />
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            onClick={checkSoil}
            className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm transition shadow-sm flex items-center justify-center gap-2"
          >
            <Sprout className="w-4 h-4" />
            <span>{t.analyze}</span>
          </button>
          {analyzed && (
            <button
              onClick={handleReset}
              className="px-4 py-3 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl font-semibold text-sm transition"
              title="Reset"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Analysis Result Card */}
      {result && (
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧪</span>
            <h4 className="font-bold text-stone-800 text-base">
              {language === 'en' ? 'Soil Health Analysis Result' : 'ಮಣ್ಣಿನ ಆರೋಗ್ಯ ವಿಶ್ಲೇಷಣೆ ಫಲಿತಾಂಶ'}
            </h4>
          </div>

          <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-xl">
            <pre className="font-sans whitespace-pre-wrap text-base font-bold text-emerald-800 leading-relaxed">
              {result}
            </pre>
          </div>

          {/* Actionable Remedies Guide */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-2">
            <div className="font-bold text-stone-700 uppercase tracking-wider text-[11px]">
              {language === 'en' ? 'Remediation Guidelines:' : 'ಪರಿಹಾರ ಮಾರ್ಗಸೂಚಿಗಳು:'}
            </div>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                <strong>Acidic Soil (pH &lt; 6.0):</strong> Apply agricultural lime (calcium carbonate) or dolomite to raise pH.
              </li>
              <li>
                <strong>Alkaline Soil (pH &gt; 7.5):</strong> Incorporate gypsum or organic compost/farmyard manure.
              </li>
              <li>
                <strong>Low Nitrogen (N &lt; 50):</strong> Apply Urea or enriched compost/cow dung manure.
              </li>
              <li>
                <strong>Low Phosphorus (P &lt; 30):</strong> Apply DAP (Diammonium Phosphate) or Single Super Phosphate (SSP).
              </li>
              <li>
                <strong>Low Potassium (K &lt; 30):</strong> Apply Muriate of Potash (MOP) or wood ash.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
