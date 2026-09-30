import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { CalendarDays, CheckCircle2, ChevronRight, Clock } from 'lucide-react';
import { CROP_CALENDAR_DATA } from '../data/agriculturalData';

interface CropCalendarScreenProps {
  language: Language;
}

const CROPS = ['Rice', 'Maize', 'Wheat', 'Cotton', 'Groundnut', 'Sugarcane'];

export const CropCalendarScreen: React.FC<CropCalendarScreenProps> = ({ language }) => {
  const t = translations[language];

  const [selectedCrop, setSelectedCrop] = useState<string>('Rice');
  const [calendarText, setCalendarText] = useState<string>('');

  const showCalendar = () => {
    if (!selectedCrop) {
      setCalendarText('⚠ Please select a crop.');
      return;
    }

    let cal = '';
    switch (selectedCrop) {
      case 'Rice':
        cal = `🌾 Rice Crop Calendar\n\n🌱 June - Nursery Preparation\n🌾 July - Transplanting\n💧 August - Irrigation\n🌿 September - Fertilizer Application\n🌾 October - Harvest`;
        break;
      case 'Maize':
        cal = `🌽 Maize Crop Calendar\n\n🌱 June - Sowing\n💧 July - Irrigation\n🌿 August - Fertilizer\n🌾 September - Harvest`;
        break;
      case 'Wheat':
        cal = `🌾 Wheat Crop Calendar\n\n🌱 November - Sowing\n💧 December - Irrigation\n🌿 January - Fertilizer\n🌾 March - Harvest`;
        break;
      case 'Cotton':
        cal = `🌿 Cotton Crop Calendar\n\n🌱 June - Sowing\n💧 July - Irrigation\n🌿 August - Fertilizer\n🌾 November - Harvest`;
        break;
      case 'Groundnut':
        cal = `🥜 Groundnut Crop Calendar\n\n🌱 June - Sowing\n💧 July - Irrigation\n🌿 August - Gypsum Application\n🌾 October - Harvest`;
        break;
      case 'Sugarcane':
        cal = `🌱 Sugarcane Crop Calendar\n\n🌱 January - Planting\n💧 February - Irrigation\n🌿 March - Fertilizer\n🌾 December - Harvest`;
        break;
    }

    setCalendarText(cal);
  };

  const schedule = selectedCrop ? CROP_CALENDAR_DATA[selectedCrop] : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-emerald-800 text-white p-5 rounded-2xl shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <span>📅</span> {t.cropCalendar}
          </h2>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1">
            {language === 'en'
              ? 'Complete lifecycle roadmap from sowing to harvesting'
              : 'ಬಿತ್ತನೆಯಿಂದ ಕಟಾವಿನವರೆಗೆ ಹಂತ-ಹಂತದ ಕಾಲಸೂಚಿ'}
          </p>
        </div>
      </div>

      {/* Selector */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
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

        <button
          onClick={showCalendar}
          className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm transition shadow-sm flex items-center justify-center gap-2"
        >
          <CalendarDays className="w-4 h-4" />
          <span>{language === 'en' ? 'Show Calendar' : 'ಕ್ಯಾಲೆಂಡರ್ ವೀಕ್ಷಿಸಿ'}</span>
        </button>
      </div>

      {/* Calendar Card */}
      {calendarText && (
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm space-y-5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h4 className="font-bold text-stone-800 text-base flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-600" />
              <span>{selectedCrop} {language === 'en' ? 'Timeline' : 'ವೇಳಾಪಟ್ಟಿ'}</span>
            </h4>
            <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-lg">
              {schedule?.stages.length || 0} {language === 'en' ? 'Key Stages' : 'ಮುಖ್ಯ ಹಂತಗಳು'}
            </span>
          </div>

          {/* Flutter Raw Text Output */}
          <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-xl">
            <pre className="font-sans whitespace-pre-wrap text-base font-bold text-emerald-800 leading-relaxed">
              {calendarText}
            </pre>
          </div>

          {/* Visual Timeline Steps */}
          {schedule && (
            <div className="pt-2">
              <h5 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
                {language === 'en' ? 'Visual Growth Roadmap' : 'ಬೆಳವಣಿಗೆಯ ಹಂತಗಳು'}
              </h5>

              <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-200">
                {schedule.stages.map((st, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold ring-4 ring-white shadow-xs">
                      {i + 1}
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 group-hover:border-emerald-300 transition">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                          {st.month}
                        </span>
                        <span className="text-lg">{st.icon}</span>
                      </div>
                      <div className="text-sm font-bold text-stone-800 mt-0.5">
                        {st.stage}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
