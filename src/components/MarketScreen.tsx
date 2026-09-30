import React, { useState } from 'react';
import { Language, MarketPriceItem } from '../types';
import { translations } from '../i18n/translations';
import { Search, Wheat, TrendingUp, TrendingDown, Minus, MapPin, Filter, Sparkles, Building2 } from 'lucide-react';
import { KARNATAKA_MARKET_DATA } from '../data/karnatakaData';
import { PAN_INDIA_MARKET_DATA } from '../data/indiaData';

interface MarketScreenProps {
  language: Language;
}

export const MarketScreen: React.FC<MarketScreenProps> = ({ language }) => {
  const t = translations[language];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedScope, setSelectedScope] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price_high' | 'price_low'>('default');

  // Merge unique mandis
  const combinedMarketData: MarketPriceItem[] = [
    ...KARNATAKA_MARKET_DATA,
    ...PAN_INDIA_MARKET_DATA.filter(
      (pm) => !KARNATAKA_MARKET_DATA.some((km) => km.crop === pm.crop && km.market === pm.market)
    ),
  ];

  const filtered = combinedMarketData.filter((item) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      item.crop.toLowerCase().includes(q) ||
      item.market.toLowerCase().includes(q) ||
      (item.district && item.district.toLowerCase().includes(q));

    let matchesScope = true;
    if (selectedScope === 'karnataka') {
      matchesScope = KARNATAKA_MARKET_DATA.some(
        (km) => km.market === item.market && km.crop === item.crop
      );
    } else if (selectedScope === 'north') {
      matchesScope = ['Punjab', 'Haryana', 'Uttar Pradesh', 'Rajasthan', 'Himachal Pradesh'].includes(item.district || '');
    } else if (selectedScope === 'west_central') {
      matchesScope = ['Maharashtra', 'Gujarat', 'Madhya Pradesh'].includes(item.district || '');
    } else if (selectedScope === 'south') {
      matchesScope = ['Karnataka', 'Tamil Nadu', 'Andhra Pradesh', 'Kerala', 'Telangana'].includes(item.district || '') ||
        KARNATAKA_MARKET_DATA.some((km) => km.market === item.market);
    } else if (selectedScope === 'east') {
      matchesScope = ['Bihar', 'West Bengal', 'Assam'].includes(item.district || '');
    }

    return matchesSearch && matchesScope;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price_high') return b.numericPrice - a.numericPrice;
    if (sortBy === 'price_low') return a.numericPrice - b.numericPrice;
    return 0;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white p-6 rounded-2xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-xs font-semibold text-emerald-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>
              {language === 'en'
                ? 'Pan-India & Karnataka e-Mandi Rates'
                : language === 'hi'
                ? 'अखिल भारतीय एवं कर्नाटक मंडी भाव'
                : 'ಅಖಿಲ ಭಾರತ ಮತ್ತು ಕರ್ನಾಟಕ APMC ಮಂಡಿ ದರಗಳು'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {t.marketPrices}
          </h2>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1 max-w-xl">
            {t.marketSubtitle}
          </p>
        </div>

        <div className="text-left sm:text-right">
          <span className="text-xs bg-emerald-700/80 px-3 py-1.5 rounded-lg border border-emerald-600/50 font-bold block sm:inline-block">
            {sorted.length} Active Mandi Commodities
          </span>
        </div>
      </div>

      {/* Search, Scope Filters & Sort */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.searchCropPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800 font-medium text-sm"
            />
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-bold text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
          >
            <option value="default">Sort: Default</option>
            <option value="price_high">Price: High to Low</option>
            <option value="price_low">Price: Low to High</option>
          </select>
        </div>

        {/* Scope Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
          <button
            onClick={() => setSelectedScope('all')}
            className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${
              selectedScope === 'all'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            All India ({combinedMarketData.length})
          </button>
          <button
            onClick={() => setSelectedScope('karnataka')}
            className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${
              selectedScope === 'karnataka'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            🌾 Karnataka APMC ({KARNATAKA_MARKET_DATA.length})
          </button>
          <button
            onClick={() => setSelectedScope('north')}
            className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${
              selectedScope === 'north'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            North (Punjab, Haryana, UP, Raj)
          </button>
          <button
            onClick={() => setSelectedScope('west_central')}
            className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${
              selectedScope === 'west_central'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            West & Central (MH, GJ, MP)
          </button>
          <button
            onClick={() => setSelectedScope('south')}
            className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${
              selectedScope === 'south'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            South India (KA, TN, AP, KL)
          </button>
          <button
            onClick={() => setSelectedScope('east')}
            className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition ${
              selectedScope === 'east'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            East & North-East (WB, BR, AS)
          </button>
        </div>
      </div>

      {/* List of Mandi Commodity Prices */}
      <div className="space-y-3">
        {sorted.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl border border-stone-200 text-center text-stone-500 text-sm">
            {language === 'en'
              ? 'No mandi rates found matching your query.'
              : language === 'hi'
              ? 'आपकी खोज के अनुसार कोई मंडी भाव नहीं मिला।'
              : 'ಯಾವುದೇ ಮಾರುಕಟ್ಟೆ ದರಗಳು ಕಂಡುಬಂದಿಲ್ಲ.'}
          </div>
        ) : (
          sorted.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-xs hover:border-emerald-300 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 transition flex items-center justify-center text-emerald-700 text-xl font-bold flex-shrink-0">
                  🌾
                </div>
                <div>
                  <h4 className="font-extrabold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                    <span>{item.crop}</span>
                    {item.trend === 'up' && (
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded font-bold flex items-center">
                        <TrendingUp className="w-3 h-3 mr-0.5" /> High Demand
                      </span>
                    )}
                    {item.trend === 'down' && (
                      <span className="text-[10px] text-rose-700 bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded font-bold flex items-center">
                        <TrendingDown className="w-3 h-3 mr-0.5" /> High Arrival
                      </span>
                    )}
                  </h4>

                  <p className="text-xs text-stone-500 font-medium flex items-center gap-1.5 mt-0.5">
                    <Building2 className="w-3.5 h-3.5 text-stone-400" />
                    <span className="font-semibold text-stone-700">{item.market}</span>
                    {item.district && item.district !== item.market && (
                      <span className="text-stone-400">({item.district})</span>
                    )}
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-stone-100">
                <div className="text-xl sm:text-2xl font-black text-emerald-800 tracking-tight">
                  {item.price}
                </div>
                <div className="text-[11px] text-stone-400 font-medium">
                  {language === 'en' ? 'Today APMC Standard' : language === 'hi' ? 'दैनिक प्रमाणित भाव' : 'ಇಂದಿನ ಪ್ರಮಾಣೀಕೃತ ಧಾರಣೆ'}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
