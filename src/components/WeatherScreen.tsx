import React, { useState, useEffect } from 'react';
import { Language, WeatherData } from '../types';
import { translations } from '../i18n/translations';
import { fetchWeatherData } from '../services/weatherService';
import {
  Cloud,
  CloudRain,
  Sun,
  Search,
  Droplets,
  Thermometer,
  Wind,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Sparkles,
  Loader2,
} from 'lucide-react';

interface WeatherScreenProps {
  language: Language;
  initialCity?: string;
}

const QUICK_CITIES = ['Bengaluru', 'Mandya', 'Kalaburagi', 'Shivamogga', 'Belagavi', 'Kolar', 'Nashik', 'Ludhiana', 'Indore', 'Guntur', 'Delhi'];

export const WeatherScreen: React.FC<WeatherScreenProps> = ({ language, initialCity = 'Bengaluru' }) => {
  const t = translations[language];
  const [cityInput, setCityInput] = useState(initialCity);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<WeatherData | null>(null);

  const handleSearch = async (targetCity?: string) => {
    const query = (targetCity ?? cityInput).trim();
    if (!query) {
      setError(language === 'en' ? 'Please enter a city' : 'ದಯವಿಟ್ಟು ನಗರದ ಹೆಸರು ನಮೂದಿಸಿ');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetchWeatherData(query);
      setData(res);
      setCityInput(res.city);
    } catch (err: any) {
      setError(err?.message || (language === 'en' ? 'Unable to load weather' : 'ಹವಾಮಾನ ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಿಲ್ಲ'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch(initialCity);
  }, [initialCity]);

  const isRain = data?.condition.toLowerCase().includes('rain') || false;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-emerald-800 text-white p-5 rounded-2xl shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <span>🌦️</span> {t.weather}
          </h2>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1">{t.weatherSubtitle}</p>
        </div>
      </div>

      {/* City Input & Quick Selectors */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm space-y-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="flex flex-col sm:flex-row gap-2"
        >
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              placeholder={t.enterCity}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800 font-medium text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2 shadow-sm"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
            <span>{t.getWeather}</span>
          </button>
        </form>

        {/* Quick Suggestion Pills */}
        <div className="flex items-center gap-2 flex-wrap pt-1 text-xs">
          <span className="text-stone-400 font-medium">{language === 'en' ? 'Quick search:' : 'ತ್ವರಿತ ನಗರಗಳು:'}</span>
          {QUICK_CITIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setCityInput(c);
                handleSearch(c);
              }}
              className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-emerald-50 hover:text-emerald-700 text-stone-600 transition font-medium"
            >
              {c}
            </button>
          ))}
        </div>

        {error && (
          <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-sm flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>

      {/* Main Weather Information Display */}
      {data && (
        <div className="space-y-5">
          {/* Current Condition Card */}
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5 sm:p-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-stone-400 font-bold">
                  {language === 'en' ? 'Location' : 'ಸ್ಥಳ'}
                </span>
                <h3 className="text-2xl font-bold text-stone-800 flex items-center gap-2">
                  <span>{data.city}</span>
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-4xl font-extrabold text-stone-800 tracking-tight">
                    {data.temperature}°C
                  </div>
                  <div className="text-xs font-medium text-stone-500 capitalize">
                    {data.condition}
                  </div>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700 text-2xl">
                  {data.condition.toLowerCase().includes('rain') ? '🌧️' : data.condition.toLowerCase().includes('cloud') ? '☁️' : '☀️'}
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-100 flex items-center gap-3">
                <Thermometer className="w-5 h-5 text-amber-500" />
                <div>
                  <div className="text-xs text-stone-500 font-medium">{t.temperature}</div>
                  <div className="text-base font-bold text-stone-800">{data.temperature} °C</div>
                </div>
              </div>

              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-100 flex items-center gap-3">
                <Droplets className="w-5 h-5 text-sky-500" />
                <div>
                  <div className="text-xs text-stone-500 font-medium">{t.humidity}</div>
                  <div className="text-base font-bold text-stone-800">{data.humidity} %</div>
                </div>
              </div>

              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-100 flex items-center gap-3 col-span-2 sm:col-span-1">
                <Wind className="w-5 h-5 text-emerald-600" />
                <div>
                  <div className="text-xs text-stone-500 font-medium">{t.condition}</div>
                  <div className="text-base font-bold text-stone-800">{data.condition}</div>
                </div>
              </div>
            </div>

            {/* Rain Alert Banner matching Flutter logic */}
            <div
              className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                isRain
                  ? 'bg-rose-50 border-rose-200 text-rose-800'
                  : 'bg-emerald-50 border-emerald-200 text-emerald-900'
              }`}
            >
              {isRain ? (
                <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <h4 className="font-bold text-sm">
                  {language === 'en' ? 'Rain Alert Assessment' : 'ಮಳೆ ಎಚ್ಚರಿಕೆ ಪರಿಶೀಲನೆ'}
                </h4>
                <p className="text-sm mt-0.5 font-medium leading-relaxed">{data.rainAlert}</p>
              </div>
            </div>

            {/* Farmer Advice */}
            <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100">
              <h4 className="text-sm font-bold text-emerald-800 flex items-center gap-2 mb-1.5">
                <span>👨‍🌾</span> {t.farmerAdvice}
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed font-medium">{data.advice}</p>
            </div>

            {/* Recommended Crops */}
            <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-100">
              <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-2">
                <span>🌾</span> {t.recommendedCrops}
              </h4>
              <div className="flex flex-wrap gap-2">
                {data.crops.map((c, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white border border-amber-200/80 rounded-lg text-xs font-semibold text-stone-800 shadow-2xs"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Multi-Hour / 7-Day Forecast */}
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5 sm:p-6 space-y-4">
            <h4 className="text-base font-bold text-stone-800 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-600" />
              <span>{t.forecast}</span>
            </h4>

            <div className="divide-y divide-stone-100">
              {data.forecast.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3 flex items-center justify-between hover:bg-stone-50/60 px-2 rounded-lg transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600">
                      {item.condition.toLowerCase().includes('rain') ? (
                        <CloudRain className="w-4 h-4 text-sky-600" />
                      ) : item.condition.toLowerCase().includes('cloud') ? (
                        <Cloud className="w-4 h-4 text-stone-500" />
                      ) : (
                        <Sun className="w-4 h-4 text-amber-500" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-stone-800">{item.dt_txt}</div>
                      <div className="text-xs text-stone-400 capitalize">{item.condition}</div>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-stone-800">{item.temp} °C</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
