import React from 'react';
import { ScreenId, Language } from '../types';
import { translations } from '../i18n/translations';
import {
  Cloud,
  Sprout,
  FlaskConical,
  Wheat,
  CalendarDays,
  Bug,
  TrendingUp,
  Flower2,
  Calculator,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  MapPin,
  Building,
  Landmark,
  PhoneCall,
} from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
  language: Language;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, language }) => {
  const t = translations[language];

  const primaryModules = [
    {
      id: 'karnataka_districts' as ScreenId,
      title: t.karnatakaDistricts,
      badge: 'Karnataka Focus',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      icon: MapPin,
      iconColor: 'text-emerald-700',
      bgColor: 'bg-emerald-50 group-hover:bg-emerald-100',
      borderColor: 'group-hover:border-emerald-400',
      description:
        language === 'en'
          ? 'All 31 districts, agro-climatic zones, soils, rainfall & local mandis'
          : language === 'hi'
          ? 'कर्नाटक के सभी 31 जिले, कृषि जलवायु क्षेत्र, मिट्टी व स्थानीय मंडियां'
          : '31 ಜಿಲ್ಲೆಗಳು, ಕೃಷಿ-ಹವಾಮಾನ ವಲಯಗಳು, ಮಣ್ಣಿನ ಗುಣ ಮತ್ತು ಮಂಡಿಗಳು',
    },
    {
      id: 'india_states' as ScreenId,
      title: t.indiaStates,
      badge: 'Pan-India',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
      icon: Building,
      iconColor: 'text-blue-700',
      bgColor: 'bg-blue-50 group-hover:bg-blue-100',
      borderColor: 'group-hover:border-blue-400',
      description:
        language === 'en'
          ? 'Major Indian agricultural states, 15 agro zones, cash crops & mandis'
          : language === 'hi'
          ? 'भारत के प्रमुख कृषि राज्य, 15 कृषि क्षेत्र, नकदी फसलें और प्रमुख मंडियां'
          : 'ಭಾರತದ ಪ್ರಮುಖ ಕೃಷಿ ರಾಜ್ಯಗಳು, 15 ಕೃಷಿ ವಲಯಗಳು, ಬೆಳೆಗಳು ಮತ್ತು ಮಂಡಿಗಳು',
    },
    {
      id: 'market' as ScreenId,
      title: t.marketPrices,
      badge: 'Live APMC Rates',
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
      icon: TrendingUp,
      iconColor: 'text-teal-700',
      bgColor: 'bg-teal-50 group-hover:bg-teal-100',
      borderColor: 'group-hover:border-teal-400',
      description:
        language === 'en'
          ? 'Daily prices across 31 Karnataka APMCs and Pan-India e-NAM mandis'
          : language === 'hi'
          ? 'कर्नाटक एवं देश की प्रमुख कृषि मंडियों के दैनिक ताज़ा भाव'
          : 'ಕರ್ನಾಟಕ ಮತ್ತು ದೇಶದ ಎಲ್ಲಾ ಪ್ರಮುಖ APMC ಮಂಡಿಗಳ ದೈನಂದಿನ ಧಾರಣೆ',
    },
    {
      id: 'schemes' as ScreenId,
      title: t.schemes,
      badge: 'Subsidies & Helplines',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      icon: Landmark,
      iconColor: 'text-amber-700',
      bgColor: 'bg-amber-50 group-hover:bg-amber-100',
      borderColor: 'group-hover:border-amber-400',
      description:
        language === 'en'
          ? 'PM-KISAN, PMFBY, Raitha Siri, Ganga Kalyana & 24x7 Kisan Call Centre'
          : language === 'hi'
          ? 'पीएम-किसान, फसल बीमा, मृदा स्वास्थ्य कार्ड और निःशुल्क किसान हेल्पलाइन'
          : 'ರೈತ ಸಿರಿ, ಗಂಗಾ ಕಲ್ಯಾಣ, ಬೆಳೆ ವಿಮೆ ಮತ್ತು 24x7 ಕಿಸಾನ್ ಕಾಲ್ ಸೆಂಟರ್',
    },
  ];

  const agronomicModules = [
    {
      id: 'weather' as ScreenId,
      title: t.weather,
      icon: Cloud,
      iconColor: 'text-sky-600',
      bgColor: 'bg-sky-50 group-hover:bg-sky-100',
      borderColor: 'group-hover:border-sky-300',
      description:
        language === 'en'
          ? 'Live forecasts, rain warnings & farmer advisories'
          : language === 'hi'
          ? 'लाइव मौसम, वर्षा चेतावनी और कृषि सलाह'
          : 'ಹವಾಮಾನ, ಮಳೆ ಮುನ್ಸೂಚನೆ ಮತ್ತು ರೈತ ಸಲಹೆಗಳು',
    },
    {
      id: 'soil' as ScreenId,
      title: t.soilHealth,
      icon: Sprout,
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50 group-hover:bg-emerald-100',
      borderColor: 'group-hover:border-emerald-300',
      description:
        language === 'en'
          ? 'Soil pH and NPK nutrient balance test'
          : language === 'hi'
          ? 'मृदा pH और NPK पोषक तत्वों की वैज्ञानिक जांच'
          : 'ಮಣ್ಣಿನ pH ಮತ್ತು NPK ಪೋಷಕಾಂಶಗಳ ಪರೀಕ್ಷೆ',
    },
    {
      id: 'fertilizer' as ScreenId,
      title: t.fertilizer,
      icon: FlaskConical,
      iconColor: 'text-amber-600',
      bgColor: 'bg-amber-50 group-hover:bg-amber-100',
      borderColor: 'group-hover:border-amber-300',
      description:
        language === 'en'
          ? 'Accurate NPK dosage per acre for crops'
          : language === 'hi'
          ? 'प्रत्येक फसल हेतु प्रति एकड़ सही उर्वरक मात्रा'
          : 'ಬೆಳೆಗಳಿಗೆ ಎಕರೆವಾರು ರಸಗೊಬ್ಬರ ಡೋಸ್ ಶಿಫಾರಸು',
    },
    {
      id: 'crop_recommendation' as ScreenId,
      title: t.cropRecommendation,
      icon: Wheat,
      iconColor: 'text-green-700',
      bgColor: 'bg-green-50 group-hover:bg-green-100',
      borderColor: 'group-hover:border-green-300',
      description:
        language === 'en'
          ? 'Best suited crops by soil & season'
          : language === 'hi'
          ? 'मिट्टी और मौसम के अनुसार सर्वोत्तम फसल'
          : 'ಮಣ್ಣು ಮತ್ತು ಋತುವಿಗೆ ತಕ್ಕಂತೆ ಸೂಕ್ತ ಬೆಳೆ ಆಯ್ಕೆ',
    },
    {
      id: 'crop_calendar' as ScreenId,
      title: t.cropCalendar,
      icon: CalendarDays,
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50 group-hover:bg-indigo-100',
      borderColor: 'group-hover:border-indigo-300',
      description:
        language === 'en'
          ? 'Month-by-month sowing to harvest schedule'
          : language === 'hi'
          ? 'बुवाई से कटाई तक मासिक फसल कैलेंडर'
          : 'ಬಿತ್ತನೆಯಿಂದ ಕೊಯ್ಲಿನವರೆಗಿನ ಹಂತ ಹಂತದ ಕ್ಯಾಲೆಂಡರ್',
    },
    {
      id: 'disease' as ScreenId,
      title: t.diseaseDetection,
      icon: Bug,
      iconColor: 'text-rose-600',
      bgColor: 'bg-rose-50 group-hover:bg-rose-100',
      borderColor: 'group-hover:border-rose-300',
      description:
        language === 'en'
          ? 'Leaf disease identification & spray remedy'
          : language === 'hi'
          ? 'पत्ती रोग पहचान एवं उपयुक्त कीटनाशक छिड़काव'
          : 'ಎಲೆ ರೋಗ ಪತ್ತೆ ಮತ್ತು ಸೂಕ್ತ ಔಷಧಿ ಚಿಕಿತ್ಸೆ',
    },
    {
      id: 'pesticides' as ScreenId,
      title: t.pesticides,
      icon: Flower2,
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-50 group-hover:bg-orange-100',
      borderColor: 'group-hover:border-orange-300',
      description:
        language === 'en'
          ? 'Pest management, safe dosage & precautions'
          : language === 'hi'
          ? 'सुरक्षित कीट नियंत्रण, सही खुराक व सावधानियां'
          : 'ಕೀಟ ನಿಯಂತ್ರಣ, ಸುರಕ್ಷಿತ ಡೋಸ್ ಮತ್ತು ಸಿಂಪಡಣೆ',
    },
    {
      id: 'yield_profit' as ScreenId,
      title: t.yieldProfit,
      icon: Calculator,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50 group-hover:bg-blue-100',
      borderColor: 'group-hover:border-blue-300',
      description:
        language === 'en'
          ? 'Production, revenue & net profit estimator'
          : language === 'hi'
          ? 'कुल उत्पादन, मंडी आय और शुद्ध लाभ की गणना'
          : 'ಒಟ್ಟು ಉತ್ಪಾದನೆ ಮತ್ತು ಆದಾಯದ ಲೆಕ್ಕಾಚಾರ',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8 space-y-7">
      {/* Welcome Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-green-800 text-white p-6 sm:p-9 shadow-xl border border-emerald-700/50">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-xs font-bold text-emerald-200 mb-3 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>
              {language === 'en'
                ? 'KrishiGuru Agricultural Suite • All-India & Karnataka'
                : language === 'hi'
                ? 'कृषिगुरु भारत • अखिल भारतीय एवं कर्नाटक कृषि सेवा'
                : 'ಕೃಷಿಗುರು ಭಾರತ • ಅಖಿಲ ಭಾರತ ಮತ್ತು ಕರ್ನಾಟಕ ಡಿಜಿಟಲ್ ಕೃಷಿ ವೇದಿಕೆ'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            {language === 'en'
              ? 'Namaste, Farmer Friend!'
              : language === 'hi'
              ? 'नमस्ते, किसान मित्र!'
              : 'ನಮಸ್ಕಾರ, ರೈತ ಮಿತ್ರರೇ!'}
          </h2>

          <p className="mt-2 text-emerald-100 text-sm sm:text-base leading-relaxed font-medium">
            {t.appSubtitle}
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="flex items-center gap-1.5 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-600/40 text-emerald-100 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>31 Karnataka Districts</span>
            </span>
            <span className="flex items-center gap-1.5 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-600/40 text-emerald-100 font-semibold">
              🇮🇳 15 Agro-Climatic Zones
            </span>
            <span className="flex items-center gap-1.5 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-600/40 text-emerald-100 font-semibold">
              📈 Live APMC Mandis
            </span>
            <span className="flex items-center gap-1.5 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-600/40 text-emerald-100 font-semibold">
              <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
              <span>24x7 Kisan Call: 1800-180-1551</span>
            </span>
          </div>
        </div>

        <div className="absolute right-4 -bottom-10 opacity-15 select-none pointer-events-none text-9xl">
          🚜
        </div>
      </div>

      {/* PWA Offline Installation Banner for Farmers */}
      <PWAInstallButton language={language} variant="banner" />

      {/* Featured National & Karnataka State Pillars */}
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-stone-900 flex items-center gap-2">
              <span>🏛️</span>
              <span>
                {language === 'en'
                  ? 'All-India & Karnataka Agriculture Portals'
                  : language === 'hi'
                  ? 'अखिल भारतीय एवं कर्नाटक कृषि पोर्टल'
                  : 'ಅಖಿಲ ಭಾರತ ಮತ್ತು ಕರ್ನಾಟಕ ಕೃಷಿ ಪೋರ್ಟಲ್'}
              </span>
            </h3>
            <p className="text-xs text-stone-500 font-medium mt-0.5">
              {language === 'en'
                ? 'Regional districts, national states, mandi pricing & government subsidies'
                : language === 'hi'
                ? 'राज्य, जिले, मंडी भाव एवं सरकारी योजनाएं'
                : 'ರಾಜ್ಯ, ಜಿಲ್ಲೆಗಳು, ಮಂಡಿ ಧಾರಣೆ ಹಾಗೂ ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿಗಳು'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {primaryModules.map((m) => {
            const Icon = m.icon;
            return (
              <button
                key={m.id}
                onClick={() => onNavigate(m.id)}
                className={`group text-left bg-white p-5 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-emerald-500 ${m.borderColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${m.bgColor}`}>
                      <Icon className={`w-6 h-6 ${m.iconColor}`} />
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${m.badgeColor}`}>
                      {m.badge}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-stone-900 text-base group-hover:text-emerald-700 transition-colors">
                    {m.title}
                  </h4>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed line-clamp-2">
                    {m.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                  <span>{language === 'en' ? 'Explore Portal' : language === 'hi' ? 'खोलें' : 'ವೀಕ್ಷಿಸಿ'}</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Core Agronomic Tools Grid */}
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-stone-900 flex items-center gap-2">
              <span>🌾</span>
              <span>
                {language === 'en'
                  ? 'Core Farm Advisory & Scientific Calculators'
                  : language === 'hi'
                  ? 'मूल कृषि सलाह एवं वैज्ञानिक कैलकुलेटर'
                  : 'ಕೃಷಿ ಸಲಹೆ ಮತ್ತು ವೈಜ್ಞಾನಿಕ ಪರಿಕರಗಳು'}
              </span>
            </h3>
            <p className="text-xs text-stone-500 font-medium mt-0.5">
              {language === 'en'
                ? 'Precision nutrition, diagnostics, schedules & economics'
                : language === 'hi'
                ? 'पोषण, रोग पहचान, फसल कैलेंडर एवं लाभ अनुमान'
                : 'ಪೋಷಕಾಂಶ, ರೋಗ ಪತ್ತೆ, ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್ ಹಾಗೂ ಲಾಭದ ಲೆಕ್ಕ'}
            </p>
          </div>
          <span className="text-xs font-bold text-stone-500 hidden sm:block">
            8 Precision Tools
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
          {agronomicModules.map((m) => {
            const Icon = m.icon;
            return (
              <button
                key={m.id}
                onClick={() => onNavigate(m.id)}
                className={`group text-left bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-emerald-500 ${m.borderColor}`}
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-colors ${m.bgColor}`}>
                    <Icon className={`w-5 h-5 ${m.iconColor}`} />
                  </div>
                  <h4 className="font-bold text-stone-800 text-sm sm:text-base group-hover:text-emerald-700 transition-colors line-clamp-1">
                    {m.title}
                  </h4>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                    {m.description}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-600 group-hover:text-emerald-700">
                  <span>{language === 'en' ? 'Open' : language === 'hi' ? 'खोलें' : 'ತೆರೆಯಿರಿ'}</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
