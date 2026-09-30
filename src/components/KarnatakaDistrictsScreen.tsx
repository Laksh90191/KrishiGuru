import React, { useState } from 'react';
import { Language, KarnatakaDistrict, ScreenId } from '../types';
import { translations } from '../i18n/translations';
import { KARNATAKA_DISTRICTS } from '../data/karnatakaData';
import { Search, MapPin, Wheat, Cloud, Sparkles, Filter, Droplets, Info } from 'lucide-react';

interface KarnatakaDistrictsScreenProps {
  language: Language;
  onSelectWeatherCity: (city: string) => void;
  onNavigate: (screen: ScreenId) => void;
}

const DIVISIONS = ['All', 'Bengaluru', 'Mysuru', 'Belagavi', 'Kalaburagi'];

export const KarnatakaDistrictsScreen: React.FC<KarnatakaDistrictsScreenProps> = ({
  language,
  onSelectWeatherCity,
  onNavigate,
}) => {
  const t = translations[language];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('All');
  const [activeDistrict, setActiveDistrict] = useState<KarnatakaDistrict>(KARNATAKA_DISTRICTS[0]);

  const filteredDistricts = KARNATAKA_DISTRICTS.filter((d) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      d.name.toLowerCase().includes(q) ||
      d.nameKn.includes(q) ||
      d.primaryCrops.some((c) => c.toLowerCase().includes(q)) ||
      d.primaryCropsKn.some((c) => c.includes(q));
    const matchesDivision = selectedDivision === 'All' || d.division === selectedDivision;
    return matchesSearch && matchesDivision;
  });

  const getDistrictName = (d: KarnatakaDistrict) => (language === 'en' ? d.name : d.nameKn);
  const getCrops = (d: KarnatakaDistrict) => (language === 'en' ? d.primaryCrops : d.primaryCropsKn);
  const getAgroZone = (d: KarnatakaDistrict) => (language === 'en' ? d.agroZone : d.agroZoneKn);
  const getSoil = (d: KarnatakaDistrict) => (language === 'en' ? d.soilTypes.join(', ') : d.soilTypesKn.join(', '));
  const getSpecialty = (d: KarnatakaDistrict) => (language === 'en' ? d.specialFeature : d.specialFeatureKn);

  const handleCheckWeather = (city: string) => {
    onSelectWeatherCity(city);
    onNavigate('weather');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-green-800 to-emerald-900 text-white p-6 rounded-2xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-xs font-semibold text-emerald-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>
              {language === 'en'
                ? 'Karnataka 31 Districts Agri Hub'
                : language === 'hi'
                ? 'कर्नाटक के 31 जिले कृषि पोर्टल'
                : 'ಕರ್ನಾಟಕದ 31 ಜಿಲ್ಲೆಗಳ ಸಮಗ್ರ ಕೃಷಿ ವೇದಿಕೆ'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {t.karnatakaDistricts}
          </h2>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1 max-w-xl">
            {language === 'en'
              ? 'Complete agro-climatic zones, soils, rainfall, cash crops, and local APMC trading mandis across all 31 districts of Karnataka.'
              : language === 'hi'
              ? 'कर्नाटक के सभी 31 जिलों के कृषि क्षेत्र, मिट्टी, वर्षा और प्रमुख मंडियों की विस्तृत जानकारी।'
              : 'ಬೆಂಗಳೂರು, ಮೈಸೂರು, ಬೆಳಗಾವಿ ಹಾಗೂ ಕಲಬುರಗಿ ವಿಭಾಗಗಳ 31 ಜಿಲ್ಲೆಗಳ ಕೃಷಿ-ಹವಾಮಾನ ವಲಯಗಳು, ಮಣ್ಣು ಮತ್ತು ಎಪಿಎಂಸಿ ಮಂಡಿಗಳು.'}
          </p>
        </div>

        <div className="flex sm:flex-col gap-2 text-right">
          <span className="text-xs bg-emerald-700/80 px-3 py-1.5 rounded-lg border border-emerald-600/50 font-bold whitespace-nowrap">
            🌾 10 Agro-Climatic Zones
          </span>
          <span className="text-xs bg-emerald-700/80 px-3 py-1.5 rounded-lg border border-emerald-600/50 font-bold whitespace-nowrap">
            📍 4 Revenue Divisions
          </span>
        </div>
      </div>

      {/* Search & Division Filters */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm space-y-3">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={
              language === 'en'
                ? 'Search district (e.g. Mandya, Kalaburagi, Haveri, Shivamogga, Kolar)...'
                : 'ಜಿಲ್ಲೆ ಅಥವಾ ಬೆಳೆ ಹುಡುಕಿ (ಉದಾ: ಮಂಡ್ಯ, ಕಲಬುರಗಿ, ಹಾವೇರಿ, ಶಿವಮೊಗ್ಗ, ಕೋಲಾರ)...'
            }
            className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800 font-medium text-sm"
          />
        </div>

        {/* Division Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
          <span className="text-stone-400 font-medium whitespace-nowrap mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Division:' : 'ವಿಭಾಗ:'}</span>
          </span>
          {DIVISIONS.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDivision(d)}
              className={`px-3 py-1 rounded-lg font-semibold whitespace-nowrap transition ${
                selectedDivision === d
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {d === 'All' ? (language === 'en' ? 'All 31 Districts' : 'ಎಲ್ಲಾ 31 ಜಿಲ್ಲೆಗಳು') : `${d} Division`}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of 31 Districts + Detail Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* District list */}
        <div className="lg:col-span-5 space-y-2.5 max-h-[750px] overflow-y-auto pr-1">
          {filteredDistricts.length === 0 ? (
            <div className="bg-white p-8 rounded-2xl border border-stone-200 text-center text-stone-500 text-sm">
              {language === 'en'
                ? 'No Karnataka district matches your search.'
                : 'ಯಾವುದೇ ಜಿಲ್ಲೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ.'}
            </div>
          ) : (
            filteredDistricts.map((dist) => {
              const isSelected = activeDistrict.id === dist.id;
              return (
                <div
                  key={dist.id}
                  onClick={() => setActiveDistrict(dist)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-50/80 border-emerald-500 shadow-sm ring-1 ring-emerald-500'
                      : 'bg-white border-stone-200 hover:border-emerald-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-extrabold text-stone-900 text-base">
                        {getDistrictName(dist)}
                      </h4>
                      <p className="text-xs text-stone-500 font-medium mt-0.5">
                        {dist.division} Division &bull; {dist.annualRainfall}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold px-2 py-0.5 bg-stone-100 text-stone-700 rounded-md">
                        {dist.temperature}°C
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-1">
                    {getCrops(dist).slice(0, 3).map((c, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-stone-100 text-stone-700"
                      >
                        {c}
                      </span>
                    ))}
                    {getCrops(dist).length > 3 && (
                      <span className="text-[11px] text-stone-400 font-medium">
                        +{getCrops(dist).length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* District Detail View */}
        {activeDistrict && (
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 shadow-sm p-6 space-y-6 sticky top-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
              <div>
                <span className="text-xs uppercase font-extrabold text-emerald-700 tracking-wider">
                  {activeDistrict.division} Division, Karnataka
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-0.5 flex items-center gap-2">
                  <span>{getDistrictName(activeDistrict)}</span>
                  {language === 'en' && (
                    <span className="text-base font-normal text-stone-500 font-kannada">
                      ({activeDistrict.nameKn})
                    </span>
                  )}
                </h3>
              </div>

              <button
                onClick={() => handleCheckWeather(activeDistrict.weatherCity)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-xs whitespace-nowrap"
              >
                <Cloud className="w-3.5 h-3.5" />
                <span>
                  {language === 'en'
                    ? `Live Weather (${activeDistrict.weatherCity})`
                    : `ಹವಾಮಾನ ನೋಡಿ (${activeDistrict.weatherCity})`}
                </span>
              </button>
            </div>

            {/* Special Highlight */}
            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-100">
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                {language === 'en' ? 'District Agricultural Landmark' : 'ಜಿಲ್ಲೆಯ ಕೃಷಿ ವೈಶಿಷ್ಟ್ಯ'}
              </span>
              <p className="text-sm font-semibold text-stone-800 leading-relaxed">
                {getSpecialty(activeDistrict)}
              </p>
            </div>

            {/* Zone & Rain Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-stone-400 font-bold uppercase tracking-wider block mb-1">
                  Agro-Climatic Zone
                </span>
                <span className="font-extrabold text-stone-800 text-sm block">
                  {getAgroZone(activeDistrict)}
                </span>
              </div>

              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-stone-400 font-bold uppercase tracking-wider block mb-1 flex items-center gap-1">
                  <Droplets className="w-3.5 h-3.5 text-sky-500" />
                  <span>Annual Rainfall</span>
                </span>
                <span className="font-extrabold text-stone-800 text-sm block">
                  {activeDistrict.annualRainfall}
                </span>
              </div>

              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 sm:col-span-2">
                <span className="text-stone-400 font-bold uppercase tracking-wider block mb-1">
                  Soil Types
                </span>
                <span className="font-bold text-stone-800 text-sm block">
                  {getSoil(activeDistrict)}
                </span>
              </div>
            </div>

            {/* Primary Crops */}
            <div>
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Wheat className="w-4 h-4 text-emerald-600" />
                <span>
                  {language === 'en' ? 'Major Crops Grown' : 'ಪ್ರಮುಖವಾಗಿ ಬೆಳೆಯುವ ಬೆಳೆಗಳು'}
                </span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {getCrops(activeDistrict).map((crop, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs font-bold text-stone-800 shadow-2xs"
                  >
                    🌾 {crop}
                  </span>
                ))}
              </div>
            </div>

            {/* Major Mandis */}
            <div>
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>
                  {language === 'en' ? 'Key APMC Mandis & Markets' : 'ಪ್ರಮುಖ APMC ಮಾರುಕಟ್ಟೆಗಳು'}
                </span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeDistrict.majorMandis.map((mandi, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg font-semibold text-stone-700 flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-600 flex-shrink-0" />
                    <span>{mandi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
