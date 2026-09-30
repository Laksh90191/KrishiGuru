import React, { useState } from 'react';
import { Language, IndiaState, ScreenId } from '../types';
import { translations } from '../i18n/translations';
import { INDIA_STATES } from '../data/indiaData';
import { Search, MapPin, Wheat, Cloud, ArrowRight, Sparkles, Filter, ChevronRight, Check } from 'lucide-react';

interface IndiaStatesScreenProps {
  language: Language;
  onSelectWeatherCity: (city: string) => void;
  onNavigate: (screen: ScreenId) => void;
}

const REGIONS = ['All', 'South', 'North', 'West', 'Central', 'East', 'North-East'];

export const IndiaStatesScreen: React.FC<IndiaStatesScreenProps> = ({
  language,
  onSelectWeatherCity,
  onNavigate,
}) => {
  const t = translations[language];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [activeState, setActiveState] = useState<IndiaState>(INDIA_STATES[0]);

  const filteredStates = INDIA_STATES.filter((s) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      s.name.toLowerCase().includes(q) ||
      s.nameHi.toLowerCase().includes(q) ||
      s.nameKn.toLowerCase().includes(q) ||
      s.primaryCrops.some((c) => c.toLowerCase().includes(q)) ||
      s.capital.toLowerCase().includes(q);
    const matchesRegion = selectedRegion === 'All' || s.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const getLocalizedName = (state: IndiaState) => {
    if (language === 'hi') return state.nameHi;
    if (language === 'kn') return state.nameKn;
    return state.name;
  };

  const getLocalizedCrops = (state: IndiaState) => {
    if (language === 'hi') return state.primaryCropsHi;
    if (language === 'kn') return state.primaryCropsKn;
    return state.primaryCrops;
  };

  const getLocalizedSpecialty = (state: IndiaState) => {
    if (language === 'hi') return state.specialtyHi;
    if (language === 'kn') return state.specialtyKn;
    return state.specialty;
  };

  const handleCheckWeather = (city: string) => {
    onSelectWeatherCity(city);
    onNavigate('weather');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white p-6 rounded-2xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-xs font-semibold text-emerald-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>
              {language === 'en'
                ? 'Pan-India Agro-Climatic Intelligence'
                : language === 'hi'
                ? 'अखिल भारतीय कृषि-जलवायु मंच'
                : 'ಅಖಿಲ ಭಾರತ ಕೃಷಿ-ಹವಾಮಾನ ವೇದಿಕೆ'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {t.indiaStates}
          </h2>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1 max-w-xl">
            {language === 'en'
              ? 'Comprehensive agricultural profiles, cash crops, agro-climatic zones, and mandis across all major Indian farming states.'
              : language === 'hi'
              ? 'भारत के सभी प्रमुख कृषि राज्यों की फसलें, मृदा प्रकार, जलवायु क्षेत्र और प्रमुख मंडियों की विस्तृत जानकारी।'
              : 'ಭಾರತದ ಪ್ರಮುಖ ಕೃಷಿ ರಾಜ್ಯಗಳ ವಾರ್ಷಿಕ ಬೆಳೆಗಳು, ಮಣ್ಣಿನ ವಿಧಗಳು, ಹವಾಮಾನ ವಲಯಗಳು ಮತ್ತು ಪ್ರಮುಖ ಮಂಡಿಗಳ ವಿವರಣೆ.'}
          </p>
        </div>

        <div className="flex sm:flex-col gap-2 text-right">
          <span className="text-xs bg-emerald-700/80 px-3 py-1.5 rounded-lg border border-emerald-600/50 font-bold whitespace-nowrap">
            🌾 15 Agro-Climatic Zones
          </span>
          <span className="text-xs bg-emerald-700/80 px-3 py-1.5 rounded-lg border border-emerald-600/50 font-bold whitespace-nowrap">
            🇮🇳 All-India Mandis
          </span>
        </div>
      </div>

      {/* Search & Region Filters */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm space-y-3">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={
              language === 'en'
                ? 'Search state, crop (e.g. Wheat, Basmati, Cotton, Jeera, Coffee)...'
                : language === 'hi'
                ? 'राज्य या फसल खोजें (उदा. गेहूं, कपास, जीरा, सरसों, मक्का)...'
                : 'ರಾಜ್ಯ ಅಥವಾ ಬೆಳೆ ಹುಡುಕಿ (ಉದಾ: ಗೋಧಿ, ಹತ್ತಿ, ಜೀರಿಗೆ, ರಾಗಿ)...'
            }
            className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800 font-medium text-sm"
          />
        </div>

        {/* Region Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
          <span className="text-stone-400 font-medium whitespace-nowrap mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Region:' : language === 'hi' ? 'क्षेत्र:' : 'ವಲಯ:'}</span>
          </span>
          {REGIONS.map((r) => (
            <button
              key={r}
              onClick={() => setSelectedRegion(r)}
              className={`px-3 py-1 rounded-lg font-semibold whitespace-nowrap transition ${
                selectedRegion === r
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {r === 'All' ? (language === 'en' ? 'All India' : language === 'hi' ? 'संपूर्ण भारत' : 'ಅಖಿಲ ಭಾರತ') : r}
            </button>
          ))}
        </div>
      </div>

      {/* Layout: Master List + Detailed Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* State Selection Cards */}
        <div className="lg:col-span-5 space-y-2.5 max-h-[750px] overflow-y-auto pr-1">
          {filteredStates.length === 0 ? (
            <div className="bg-white p-8 rounded-2xl border border-stone-200 text-center text-stone-500 text-sm">
              {language === 'en'
                ? 'No states found matching your search.'
                : language === 'hi'
                ? 'आपकी खोज के अनुसार कोई राज्य नहीं मिला।'
                : 'ಯಾವುದೇ ರಾಜ್ಯಗಳು ಕಂಡುಬಂದಿಲ್ಲ.'}
            </div>
          ) : (
            filteredStates.map((st) => {
              const isSelected = activeState.id === st.id;
              return (
                <div
                  key={st.id}
                  onClick={() => setActiveState(st)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-50/80 border-emerald-500 shadow-sm ring-1 ring-emerald-500'
                      : 'bg-white border-stone-200 hover:border-emerald-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-extrabold text-stone-900 text-base">
                          {getLocalizedName(st)}
                        </h4>
                        {st.id === 'karnataka' && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">
                            Home State
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-500 font-medium mt-0.5">
                        {st.capital} &bull; {st.region} India
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold px-2 py-0.5 bg-stone-100 text-stone-700 rounded-md">
                        {st.avgTemp}°C
                      </span>
                    </div>
                  </div>

                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {getLocalizedCrops(st).slice(0, 4).map((c, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-stone-100/90 text-stone-700"
                      >
                        {c}
                      </span>
                    ))}
                    {getLocalizedCrops(st).length > 4 && (
                      <span className="text-[11px] text-stone-400 font-medium">
                        +{getLocalizedCrops(st).length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Detailed State Profile Card */}
        {activeState && (
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-6 sticky top-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
              <div>
                <span className="text-xs uppercase font-extrabold text-emerald-700 tracking-wider">
                  {activeState.region} India Region
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-0.5 flex items-center gap-2">
                  <span>{getLocalizedName(activeState)}</span>
                  <span className="text-sm font-normal text-stone-400">({activeState.capital})</span>
                </h3>
              </div>

              <button
                onClick={() => handleCheckWeather(activeState.weatherCity)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-xs whitespace-nowrap"
              >
                <Cloud className="w-3.5 h-3.5" />
                <span>
                  {language === 'en'
                    ? `Live Weather (${activeState.weatherCity})`
                    : language === 'hi'
                    ? `मौसम जांचें (${activeState.weatherCity})`
                    : `ಹವಾಮಾನ ಪರಿಶೀಲಿಸಿ (${activeState.weatherCity})`}
                </span>
              </button>
            </div>

            {/* Special Feature Quote */}
            <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100">
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                {language === 'en' ? 'Agricultural Significance' : language === 'hi' ? 'कृषि महत्व' : 'ಕೃಷಿ ಪ್ರಾಮುಖ್ಯತೆ'}
              </span>
              <p className="text-sm font-semibold text-stone-800 leading-relaxed">
                {getLocalizedSpecialty(activeState)}
              </p>
            </div>

            {/* Agro-Climatic Zone & Soil Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-stone-400 font-bold uppercase tracking-wider block mb-1">
                  Agro-Climatic Zone
                </span>
                <span className="font-extrabold text-stone-800 text-sm block">
                  {activeState.agroZone}
                </span>
              </div>

              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-stone-400 font-bold uppercase tracking-wider block mb-1">
                  Dominant Soil Types
                </span>
                <span className="font-extrabold text-stone-800 text-sm block">
                  {activeState.soilTypes.join(', ')}
                </span>
              </div>
            </div>

            {/* Primary Cash & Food Crops */}
            <div>
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Wheat className="w-4 h-4 text-emerald-600" />
                <span>
                  {language === 'en'
                    ? 'Major Cash & Staple Crops'
                    : language === 'hi'
                    ? 'प्रमुख नकदी और खाद्यान्न फसलें'
                    : 'ಪ್ರಮುಖ ವಾಣಿಜ್ಯ ಮತ್ತು ಆಹಾರ ಬೆಳೆಗಳು'}
                </span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {getLocalizedCrops(activeState).map((crop, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs font-bold text-stone-800 shadow-2xs"
                  >
                    🌾 {crop}
                  </span>
                ))}
              </div>
            </div>

            {/* Major APMC Mandis */}
            <div>
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>
                  {language === 'en'
                    ? 'Prominent APMC Trading Mandis'
                    : language === 'hi'
                    ? 'प्रमुख APMC व्यापारिक मंडियां'
                    : 'ಪ್ರಮುಖ ಕೃಷಿ ಉತ್ಪನ್ನ ಮಾರುಕಟ್ಟೆಗಳು (APMC)'}
                </span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeState.majorMandis.map((mandi, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-stone-50/70 border border-stone-200 rounded-lg font-semibold text-stone-700 flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-600 flex-shrink-0" />
                    <span>{mandi}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shortcut for Karnataka specific portal */}
            {activeState.id === 'karnataka' && (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-amber-900 text-xs">
                    {language === 'en'
                      ? 'Looking for deep Karnataka district details?'
                      : language === 'hi'
                      ? 'क्या आप कर्नाटक के 31 जिलों का विवरण देखना चाहते हैं?'
                      : 'ಕರ್ನಾಟಕದ ಎಲ್ಲಾ 31 ಜಿಲ್ಲೆಗಳ ಸಮಗ್ರ ವಿವರ ಬೇಕೆ?'}
                  </h5>
                  <p className="text-[11px] text-amber-800 mt-0.5">
                    {language === 'en'
                      ? 'Access all 31 districts across Bengaluru, Mysuru, Belagavi, and Kalaburagi divisions.'
                      : 'ಬೆಂಗಳೂರು, ಮೈಸೂರು, ಬೆಳಗಾವಿ, ಕಲಬುರಗಿ ವಿಭಾಗಗಳ 31 ಜಿಲ್ಲೆಗಳ ಪೋರ್ಟಲ್ ತೆರೆಯಿರಿ.'}
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('karnataka_districts')}
                  className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition flex items-center gap-1 shadow-xs whitespace-nowrap"
                >
                  <span>Open 31 Districts</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
