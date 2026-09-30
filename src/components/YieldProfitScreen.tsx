import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';
import { Calculator, IndianRupee, TrendingUp, Scale, Sparkles, PieChart, Coins } from 'lucide-react';

interface YieldProfitScreenProps {
  language: Language;
}

export const YieldProfitScreen: React.FC<YieldProfitScreenProps> = ({ language }) => {
  const t = translations[language];

  const [area, setArea] = useState<string>('2');
  const [yieldPerAcre, setYieldPerAcre] = useState<string>('25');
  const [price, setPrice] = useState<string>('2400');
  const [costPerAcre, setCostPerAcre] = useState<string>('15000');

  const [production, setProduction] = useState<number>(0);
  const [income, setIncome] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [netProfit, setNetProfit] = useState<number>(0);
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  const calculate = () => {
    const a = parseFloat(area) || 0;
    const y = parseFloat(yieldPerAcre) || 0;
    const p = parseFloat(price) || 0;
    const c = parseFloat(costPerAcre) || 0;

    const prod = a * y;
    const inc = prod * p;
    const totalExpenses = a * c;
    const net = inc - totalExpenses;

    setProduction(prod);
    setIncome(inc);
    setTotalCost(totalExpenses);
    setNetProfit(net);
    setHasCalculated(true);
  };

  const loadPreset = (presetArea: string, presetYield: string, presetPrice: string, presetCost: string) => {
    setArea(presetArea);
    setYieldPerAcre(presetYield);
    setPrice(presetPrice);
    setCostPerAcre(presetCost);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-emerald-800 text-white p-5 rounded-2xl shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <span>🧮</span> {t.yieldProfit}
          </h2>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1">{t.yieldSubtitle}</p>
        </div>
      </div>

      {/* Calculator Form */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-stone-800 text-base">
            {language === 'en' ? 'Harvest & Financial Inputs' : 'ಇಳುವರಿ ಮತ್ತು ದರದ ವಿವರಗಳು'}
          </h3>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-stone-400 font-medium">{language === 'en' ? 'Presets:' : 'ಮಾದರಿ:'}</span>
            <button
              onClick={() => loadPreset('2', '25', '2400', '16000')}
              className="text-emerald-700 hover:underline font-semibold"
            >
              Paddy (Rice)
            </button>
            <span className="text-stone-300">|</span>
            <button
              onClick={() => loadPreset('3', '30', '2100', '14000')}
              className="text-emerald-700 hover:underline font-semibold"
            >
              Maize
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase mb-1.5">
              {t.landArea}
            </label>
            <input
              type="number"
              step="0.1"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="e.g. 2.5"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800 font-semibold text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase mb-1.5">
              {t.expectedYield}
            </label>
            <input
              type="number"
              step="0.1"
              value={yieldPerAcre}
              onChange={(e) => setYieldPerAcre(e.target.value)}
              placeholder="e.g. 20"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800 font-semibold text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase mb-1.5">
              {t.marketPrice}
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="e.g. 2400"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800 font-semibold text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-600 uppercase mb-1.5 flex items-center justify-between">
              <span>{language === 'en' ? 'Estimated Cultivation Cost (₹ / Acre)' : 'ಅಂದಾಜು ಬೇಸಾಯ ವೆಚ್ಚ (₹ / ಎಕರೆ)'}</span>
              <span className="text-stone-400 font-normal text-[11px]">(Optional for net profit)</span>
            </label>
            <input
              type="number"
              value={costPerAcre}
              onChange={(e) => setCostPerAcre(e.target.value)}
              placeholder="e.g. 15000"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800 font-semibold text-sm"
            />
          </div>
        </div>

        <button
          onClick={calculate}
          className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-base transition shadow-sm flex items-center justify-center gap-2"
        >
          <Calculator className="w-5 h-5" />
          <span>{t.calculate}</span>
        </button>
      </div>

      {/* Output Results Card matching Flutter UI */}
      {hasCalculated && (
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-6 animate-in fade-in duration-200">
          <div className="text-center pb-3 border-b border-stone-100">
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">
              {t.results}
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Total Production matching Flutter */}
            <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-center space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-stone-600 font-bold text-sm">
                <Scale className="w-4 h-4 text-emerald-600" />
                <span>{t.totalProduction}</span>
              </div>
              <div className="text-3xl font-extrabold text-emerald-700">
                {production.toFixed(2)} {t.quintals}
              </div>
              <div className="text-xs text-stone-500 font-medium">
                ({(production * 100).toLocaleString()} kg)
              </div>
            </div>

            {/* Estimated Income matching Flutter */}
            <div className="p-5 bg-blue-50/70 border border-blue-200 rounded-2xl text-center space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-stone-600 font-bold text-sm">
                <IndianRupee className="w-4 h-4 text-blue-600" />
                <span>{t.estimatedIncome}</span>
              </div>
              <div className="text-3xl font-extrabold text-blue-700">
                ₹ {income.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <div className="text-xs text-stone-500 font-medium">
                {language === 'en' ? 'Gross Market Return' : 'ಒಟ್ಟು ಮಾರುಕಟ್ಟೆ ಆದಾಯ'}
              </div>
            </div>
          </div>

          {/* Net Profit & Expenses Breakdown */}
          {totalCost > 0 && (
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-stone-600">
                <span>Total Cultivation Expenditure ({area} Acres):</span>
                <span>₹ {totalCost.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex items-center justify-between border-t border-stone-200 pt-2">
                <span className="text-sm font-bold text-stone-800 flex items-center gap-1.5">
                  <Coins className="w-4 h-4 text-amber-500" />
                  <span>{language === 'en' ? 'Net Farmer Profit (Margin):' : 'ನಿವ್ವಳ ಲಾಭ:'}</span>
                </span>
                <span
                  className={`text-lg font-extrabold ${
                    netProfit >= 0 ? 'text-emerald-700' : 'text-rose-600'
                  }`}
                >
                  ₹ {netProfit.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
