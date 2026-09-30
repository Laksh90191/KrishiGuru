import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { Wheat, Sparkles, CheckCircle2, Info } from 'lucide-react';
import { CROPS_DATA } from '../data/agriculturalData';

interface CropRecommendationScreenProps {
  language: Language;
}

const SOILS = ['Black', 'Red', 'Clay', 'Sandy', 'Alluvial'];
const SEASONS = ['Kharif', 'Rabi', 'Summer'];

export const CropRecommendationScreen: React.FC<CropRecommendationScreenProps> = ({ language }) => {
  const t = translations[language];

  const [soilType, setSoilType] = useState<string>('Black');
  const [season, setSeason] = useState<string>('Kharif');
  const [result, setResult] = useState<string>('');
  const [cropKey, setCropKey] = useState<string | null>(null);

  const recommendCrop = () => {
    let res = '';
    let key: string | null = null;

    if (soilType === 'Black' && season === 'Kharif') {
      res = '🌱 Cotton';
      key = 'Cotton';
    } else if (soilType === 'Clay' && season === 'Kharif') {
      res = '🌾 Rice';
      key = 'Rice';
    } else if (soilType === 'Alluvial' && season === 'Rabi') {
      res = '🌾 Wheat';
      key = 'Wheat';
    } else if (soilType === 'Red' && season === 'Kharif') {
      res = '🌽 Maize';
      key = 'Maize';
    } else if (soilType === 'Sandy') {
      res = '🥜 Groundnut';
      key = 'Groundnut';
    } else {
      res = '🌿 No recommendation found';
      key = null;
    }

    setResult(res);
    setCropKey(key);
  };

  const detailedCrop = cropKey ? CROPS_DATA.find((c) => c.name.toLowerCase() === cropKey.toLowerCase()) : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-emerald-800 text-white p-5 rounded-2xl shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <span>🌾</span> {t.cropRecommendation}
          </h2>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1">
            {language === 'en'
              ? 'Find optimal crops tailored to soil texture and agricultural season'
              : 'ಮಣ್ಣಿನ ಸ್ವರೂಪ ಮತ್ತು ಹಂಗಾಮಿಗೆ ಅನುಗುಣವಾಗಿ ಉತ್ತಮ ಬೆಳೆ ಆಯ್ಕೆ'}
          </p>
        </div>
      </div>

      {/* Selectors */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase mb-1.5">
              {t.selectSoil}
            </label>
            <select
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800 font-semibold text-sm cursor-pointer"
            >
              {SOILS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase mb-1.5">
              {t.selectSeason}
            </label>
            <select
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800 font-semibold text-sm cursor-pointer"
            >
              {SEASONS.map((sea) => (
                <option key={sea} value={sea}>
                  {sea}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={recommendCrop}
          className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-base transition shadow-sm flex items-center justify-center gap-2"
        >
          <Wheat className="w-5 h-5" />
          <span>{language === 'en' ? 'Recommend Crop' : 'ಬೆಳೆ ಶಿಫಾರಸು ಪಡೆಯಿರಿ'}</span>
        </button>
      </div>

      {/* Recommendation Output */}
      {result && (
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-5 text-center animate-in fade-in duration-200">
          <div className="text-xs uppercase tracking-wider text-stone-400 font-bold">
            {language === 'en' ? 'Recommended Crop for Your Land' : 'ನಿಮ್ಮ ಜಮೀನಿಗೆ ಶಿಫಾರಸು ಮಾಡಿದ ಬೆಳೆ'}
          </div>

          <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700 py-2">
            {result}
          </div>

          {/* Detailed Crop Fact Sheet from crops.json */}
          {detailedCrop && (
            <div className="mt-4 p-4 bg-stone-50 rounded-xl border border-stone-200 text-left space-y-3">
              <div className="flex items-center gap-2 text-stone-800 font-bold text-sm border-b border-stone-200 pb-2">
                <Info className="w-4 h-4 text-emerald-600" />
                <span>
                  {language === 'en' ? `${detailedCrop.name} Cultivation Guide` : `${detailedCrop.nameKn || detailedCrop.name} ಬೇಸಾಯ ಮಾಹಿತಿ`}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-stone-400 font-medium block">Sowing Period</span>
                  <span className="font-bold text-stone-800">{detailedCrop.sowing}</span>
                </div>
                <div>
                  <span className="text-stone-400 font-medium block">Harvest Time</span>
                  <span className="font-bold text-stone-800">{detailedCrop.harvest}</span>
                </div>
                <div>
                  <span className="text-stone-400 font-medium block">Water Need</span>
                  <span className="font-bold text-stone-800">{detailedCrop.water}</span>
                </div>
                <div className="col-span-2 sm:col-span-3">
                  <span className="text-stone-400 font-medium block">Standard Fertilizer Formula</span>
                  <span className="font-bold text-emerald-800">{detailedCrop.fertilizer}</span>
                </div>
                <div className="col-span-2 sm:col-span-3">
                  <span className="text-stone-400 font-medium block">Common Pests to Watch</span>
                  <span className="font-bold text-rose-700">{detailedCrop.pests}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
