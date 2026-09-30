import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { FlaskConical, AlertCircle, CheckCircle, Droplets, Sparkles, Scale } from 'lucide-react';
import { FERTILIZER_DOSAGES } from '../data/agriculturalData';

interface FertilizerScreenProps {
  language: Language;
}

const CROPS = ['Rice', 'Maize', 'Wheat', 'Cotton', 'Groundnut', 'Sugarcane'];
const SOILS = ['Black Soil', 'Red Soil', 'Clay Soil', 'Sandy Soil', 'Loamy Soil'];

export const FertilizerScreen: React.FC<FertilizerScreenProps> = ({ language }) => {
  const t = translations[language];

  const [selectedCrop, setSelectedCrop] = useState<string>('Rice');
  const [selectedSoil, setSelectedSoil] = useState<string>('Black Soil');
  const [acres, setAcres] = useState<number>(1);
  const [recommendation, setRecommendation] = useState<string>('');
  const [calculated, setCalculated] = useState(false);

  const recommendFertilizer = () => {
    if (!selectedCrop || !selectedSoil) {
      setRecommendation('⚠ Please select both Crop and Soil Type.');
      setCalculated(false);
      return;
    }

    let rec = '';
    if (selectedCrop === 'Rice') {
      rec = `🌾 Crop: Rice (${selectedSoil})\n\n✅ Urea - 50 kg/acre\n✅ DAP - 25 kg/acre\n✅ MOP - 20 kg/acre\n\n💧 Apply after irrigation.`;
    } else if (selectedCrop === 'Maize') {
      rec = `🌽 Crop: Maize (${selectedSoil})\n\n✅ Urea - 45 kg/acre\n✅ DAP - 20 kg/acre\n✅ Potash - 15 kg/acre\n\n💧 Split Urea into 2 doses.`;
    } else if (selectedCrop === 'Wheat') {
      rec = `🌾 Crop: Wheat (${selectedSoil})\n\n✅ Urea - 40 kg/acre\n✅ DAP - 20 kg/acre\n\n💧 Apply DAP at sowing, Urea at 1st irrigation.`;
    } else if (selectedCrop === 'Cotton') {
      rec = `🌿 Crop: Cotton (${selectedSoil})\n\n✅ Urea - 35 kg/acre\n✅ Potash - 25 kg/acre\n\n💧 Apply during flowering to avoid boll drop.`;
    } else if (selectedCrop === 'Groundnut') {
      rec = `🥜 Crop: Groundnut (${selectedSoil})\n\n✅ Gypsum - 200 kg/acre\n✅ SSP - 25 kg/acre\n\n💧 Apply Gypsum at 45 days (flowering stage).`;
    } else if (selectedCrop === 'Sugarcane') {
      rec = `🌱 Crop: Sugarcane (${selectedSoil})\n\n✅ Urea - 75 kg/acre\n✅ DAP - 30 kg/acre\n✅ Potash - 25 kg/acre\n\n💧 Heavy feeder: split Urea into 4 stages.`;
    }

    setRecommendation(rec);
    setCalculated(true);
  };

  const currentDoseInfo = selectedCrop ? FERTILIZER_DOSAGES[selectedCrop] : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-emerald-800 text-white p-5 rounded-2xl shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <span>🧪</span> {t.fertilizer}
          </h2>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1">{t.fertilizerSubtitle}</p>
        </div>
      </div>

      {/* Selectors Form */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase mb-1.5">
              {t.selectCrop}
            </label>
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800 font-semibold text-sm cursor-pointer"
            >
              <option value="">-- {t.selectCrop} --</option>
              {CROPS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase mb-1.5">
              {t.selectSoil}
            </label>
            <select
              value={selectedSoil}
              onChange={(e) => setSelectedSoil(e.target.value)}
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800 font-semibold text-sm cursor-pointer"
            >
              <option value="">-- {t.selectSoil} --</option>
              {SOILS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Acreage adjustment */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold text-stone-600 uppercase flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-emerald-600" />
              <span>{language === 'en' ? 'Farm Size (Acres)' : 'ಭೂಮಿ ವಿಸ್ತೀರ್ಣ (ಎಕರೆ)'}</span>
            </label>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
              {acres} {acres === 1 ? 'Acre' : 'Acres'}
            </span>
          </div>
          <input
            type="range"
            min={0.5}
            max={25}
            step={0.5}
            value={acres}
            onChange={(e) => setAcres(parseFloat(e.target.value))}
            className="w-full accent-emerald-600 cursor-pointer"
          />
        </div>

        <button
          onClick={recommendFertilizer}
          className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm transition shadow-sm flex items-center justify-center gap-2"
        >
          <FlaskConical className="w-4 h-4" />
          <span>{t.getRecommendation}</span>
        </button>
      </div>

      {/* Result Card */}
      {recommendation && (
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm space-y-5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h4 className="font-bold text-stone-800 text-base flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>{t.recommendationTitle}</span>
            </h4>
            <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-lg">
              {selectedCrop} &bull; {selectedSoil}
            </span>
          </div>

          {/* Formatted Flutter Output */}
          <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-xl">
            <pre className="font-sans whitespace-pre-wrap text-base font-bold text-emerald-800 leading-relaxed">
              {recommendation}
            </pre>
          </div>

          {/* Multiplied Totals for user's acreage */}
          {calculated && currentDoseInfo && (
            <div className="space-y-3 pt-1">
              <h5 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                {language === 'en'
                  ? `Total Quantity Required for ${acres} Acre(s):`
                  : `${acres} ಎಕರೆಗೆ ಅಗತ್ಯವಿರುವ ಒಟ್ಟು ರಸಗೊಬ್ಬರ:`}
              </h5>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {currentDoseInfo.nutrients.map((n, i) => {
                  const baseNum = parseFloat(n.amount) || 0;
                  const totalKg = Math.round(baseNum * acres * 10) / 10;
                  const bags50kg = (totalKg / 50).toFixed(1);
                  return (
                    <div key={i} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-center">
                      <div className="text-xl mb-1">{n.icon}</div>
                      <div className="text-xs font-semibold text-stone-600">{n.name}</div>
                      <div className="text-base font-extrabold text-stone-800 mt-0.5">{totalKg} kg</div>
                      <div className="text-[11px] text-stone-400 mt-0.5">~{bags50kg} bags (50kg)</div>
                    </div>
                  );
                })}
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                <Droplets className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>{currentDoseInfo.instructions}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
