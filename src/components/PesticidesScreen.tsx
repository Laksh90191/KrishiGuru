import React, { useState } from 'react';
import { Language, PesticideItem } from '../types';
import { translations } from '../i18n/translations';
import { Search, ShieldAlert, Droplets, Bug, AlertTriangle, Sparkles, Flower2 } from 'lucide-react';
import { PESTICIDES_DATA } from '../data/agriculturalData';

interface PesticidesScreenProps {
  language: Language;
}

export const PesticidesScreen: React.FC<PesticidesScreenProps> = ({ language }) => {
  const t = translations[language];

  const [searchTerm, setSearchTerm] = useState('');

  const filtered = PESTICIDES_DATA.filter((item) => {
    const q = searchTerm.toLowerCase();
    return (
      item.crop.toLowerCase().includes(q) ||
      item.pest.toLowerCase().includes(q) ||
      item.pesticide.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-emerald-800 text-white p-5 rounded-2xl shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <span>🛡️</span> {t.pesticides}
          </h2>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1">{t.pesticidesSubtitle}</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t.searchPesticidesPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800 font-medium text-sm"
          />
        </div>
      </div>

      {/* Pesticides List */}
      <div className="space-y-3.5">
        {filtered.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl border border-stone-200 text-center text-stone-500 text-sm">
            {language === 'en'
              ? 'No pesticide records matching your query.'
              : 'ಯಾವುದೇ ಕೀಟನಾಶಕ ವಿವರಗಳು ಕಂಡುಬಂದಿಲ್ಲ.'}
          </div>
        ) : (
          filtered.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:border-emerald-300 transition p-5 space-y-3"
            >
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
                    🌾
                  </div>
                  <div>
                    <h3 className="font-extrabold text-stone-900 text-base">{item.crop}</h3>
                    <div className="text-xs text-rose-600 font-semibold flex items-center gap-1">
                      <Bug className="w-3.5 h-3.5" />
                      <span>{t.pest}: {item.pest}</span>
                    </div>
                  </div>
                </div>

                <span className="text-xs px-2.5 py-1 bg-stone-100 text-stone-700 font-bold rounded-lg border border-stone-200">
                  {item.application}
                </span>
              </div>

              {/* Pesticide & Dose */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <span className="text-stone-400 font-bold uppercase tracking-wider block text-[10px]">
                    Chemical Formulation
                  </span>
                  <span className="text-stone-900 font-bold text-sm mt-0.5 block">
                    {item.pesticide}
                  </span>
                </div>

                <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
                  <span className="text-emerald-700 font-bold uppercase tracking-wider block text-[10px]">
                    Recommended Dosage
                  </span>
                  <span className="text-emerald-900 font-extrabold text-sm mt-0.5 block flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-emerald-600" />
                    <span>{item.dose}</span>
                  </span>
                </div>
              </div>

              {/* Safety Precaution matching Flutter */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">{t.safety}:</strong> {item.safety}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
