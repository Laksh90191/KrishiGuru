import React, { useState } from 'react';
import { Language, KarnatakaScheme } from '../types';
import { translations } from '../i18n/translations';
import { NATIONAL_GOVT_SCHEMES, PAN_INDIA_HELPLINES } from '../data/indiaData';
import { KARNATAKA_GOVT_SCHEMES, KARNATAKA_HELPLINES } from '../data/karnatakaData';
import { ShieldCheck, PhoneCall, Sparkles, CheckCircle2, Coins, Search, ExternalLink, HelpCircle } from 'lucide-react';

interface SchemesScreenProps {
  language: Language;
}

export const SchemesScreen: React.FC<SchemesScreenProps> = ({ language }) => {
  const t = translations[language];
  const [filter, setFilter] = useState<'all' | 'national' | 'karnataka'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allSchemes: (KarnatakaScheme & { scope: 'National' | 'Karnataka' })[] = [
    ...NATIONAL_GOVT_SCHEMES.map((s) => ({ ...s, scope: 'National' as const })),
    ...KARNATAKA_GOVT_SCHEMES.map((s) => ({ ...s, scope: 'Karnataka' as const })),
  ];

  const filteredSchemes = allSchemes.filter((s) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      s.title.toLowerCase().includes(q) ||
      s.titleKn.includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.descriptionKn.includes(q);
    const matchesScope =
      filter === 'all' ||
      (filter === 'national' && s.scope === 'National') ||
      (filter === 'karnataka' && s.scope === 'Karnataka');
    return matchesSearch && matchesScope;
  });

  const getTitle = (s: KarnatakaScheme) => (language === 'en' ? s.title : s.titleKn);
  const getDept = (s: KarnatakaScheme) => (language === 'en' ? s.department : s.departmentKn);
  const getSubsidy = (s: KarnatakaScheme) => (language === 'en' ? s.subsidy : s.subsidyKn);
  const getEligibility = (s: KarnatakaScheme) => (language === 'en' ? s.eligibility : s.eligibilityKn);
  const getDesc = (s: KarnatakaScheme) => (language === 'en' ? s.description : s.descriptionKn);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white p-6 rounded-2xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-xs font-semibold text-emerald-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>
              {language === 'en'
                ? 'Farmer Welfare & Subsidies Portal'
                : language === 'hi'
                ? 'किसान कल्याण व सरकारी योजनाएं'
                : 'ರೈತ ಕಲ್ಯಾಣ ಮತ್ತು ಸಬ್ಸಿಡಿ ಯೋಜನೆಗಳು'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {t.schemes}
          </h2>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1 max-w-xl">
            {language === 'en'
              ? 'Official Central & Karnataka State agricultural subsidies, DBT direct cash assistance, crop insurance, and 24x7 Kisan Call Centre helplines.'
              : language === 'hi'
              ? 'केंद्र और राज्य सरकार की प्रमुख कृषि योजनाएं, सब्सिडी, डीबीटी अनुदान और निःशुल्क किसान हेल्पलाइन।'
              : 'ಕೇಂದ್ರ ಮತ್ತು ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಪ್ರಮುಖ ಕೃಷಿ ಸಬ್ಸಿಡಿಗಳು, ಬೆಳೆ ವಿಮೆ, ಡಿಬಿಟಿ ಧನಸಹಾಯ ಮತ್ತು 24x7 ಕಿಸಾನ್ ಕಾಲ್ ಸೆಂಟರ್ ಸಹಾಯವಾಣಿಗಳು.'}
          </p>
        </div>

        <div className="flex sm:flex-col gap-2 text-right">
          <span className="text-xs bg-emerald-700/80 px-3 py-1.5 rounded-lg border border-emerald-600/50 font-bold whitespace-nowrap">
            🏛️ Central & State Subsidies
          </span>
          <span className="text-xs bg-emerald-700/80 px-3 py-1.5 rounded-lg border border-emerald-600/50 font-bold whitespace-nowrap">
            📞 24x7 Free Kisan Helplines
          </span>
        </div>
      </div>

      {/* 24x7 Helpline Direct Contact Strip */}
      <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-stone-800 flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-emerald-600" />
            <span>
              {language === 'en'
                ? '24x7 Free Agricultural Scientist Helplines'
                : language === 'hi'
                ? '24x7 निःशुल्क कृषि वैज्ञानिक हेल्पलाइन'
                : '24x7 ಉಚಿತ ಕೃಷಿ ವಿಜ್ಞಾನಿಗಳ ಸಹಾಯವಾಣಿಗಳು'}
            </span>
          </h3>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
            Toll-Free Numbers
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
          {PAN_INDIA_HELPLINES.map((hl, idx) => (
            <div
              key={idx}
              className="p-3 bg-stone-50 rounded-xl border border-stone-200 hover:border-emerald-300 transition"
            >
              <div className="text-xs font-bold text-stone-800 line-clamp-1">
                {language === 'hi' ? hl.nameHi : language === 'kn' ? hl.nameKn : hl.name}
              </div>
              <div className="text-base font-extrabold text-emerald-700 mt-1">
                {hl.phone}
              </div>
              <div className="text-[10px] text-stone-500 mt-0.5 line-clamp-1">{hl.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Search & Filter Buttons */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-96">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={
              language === 'en'
                ? 'Search scheme (e.g. PM-KISAN, Insurance, Borewell, Seeds)...'
                : 'ಯೋಜನೆ ಹುಡುಕಿ (ಉದಾ: ಕಿಸಾನ್, ಬೆಳೆ ವಿಮೆ, ಕೊಳವೆಬಾವಿ, ಬೀಜ)...'
            }
            className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800 font-medium text-xs"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto">
          <button
            onClick={() => setFilter('all')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              filter === 'all'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            All Schemes ({allSchemes.length})
          </button>
          <button
            onClick={() => setFilter('national')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              filter === 'national'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            🇮🇳 National ({NATIONAL_GOVT_SCHEMES.length})
          </button>
          <button
            onClick={() => setFilter('karnataka')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              filter === 'karnataka'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            🌾 Karnataka ({KARNATAKA_GOVT_SCHEMES.length})
          </button>
        </div>
      </div>

      {/* Schemes Cards Grid */}
      <div className="space-y-4">
        {filteredSchemes.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:border-emerald-300 transition p-5 sm:p-6 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                      s.scope === 'National'
                        ? 'bg-blue-100 text-blue-800 border border-blue-200'
                        : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    }`}
                  >
                    {s.scope === 'National' ? '🇮🇳 Central Govt' : '🌾 Karnataka Govt'}
                  </span>
                  <span className="text-xs text-stone-400 font-medium">{getDept(s)}</span>
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold text-stone-900 mt-1">
                  {getTitle(s)}
                </h4>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
                  Support / Helpline
                </span>
                <span className="text-xs font-extrabold text-emerald-700">{s.helpline}</span>
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed font-medium">{getDesc(s)}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100">
                <span className="font-extrabold text-emerald-900 block mb-0.5 flex items-center gap-1">
                  <Coins className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Financial Benefit / Subsidy:</span>
                </span>
                <p className="text-stone-800 font-semibold">{getSubsidy(s)}</p>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="font-extrabold text-stone-800 block mb-0.5 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Farmer Eligibility:</span>
                </span>
                <p className="text-stone-600">{getEligibility(s)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
