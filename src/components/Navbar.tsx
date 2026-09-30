import React, { useState } from 'react';
import { Language, ScreenId } from '../types';
import { translations } from '../i18n/translations';
import { ArrowLeft, Globe, ChevronDown, Check } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  language,
  onLanguageChange,
}) => {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const t = translations[language];

  return (
    <header className="sticky top-0 z-40 bg-emerald-700 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {currentScreen !== 'home' && (
            <button
              onClick={() => onNavigate('home')}
              className="p-2 -ml-2 rounded-full hover:bg-emerald-800 transition text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              title={t.backToHome}
              aria-label={t.backToHome}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-800/80 flex items-center justify-center text-xl shadow-inner group-hover:scale-105 transition-transform">
              🌾
            </div>
            <div>
              <h1 className="font-bold text-lg sm:text-xl tracking-tight flex items-center gap-1.5">
                <span>{t.appTitle}</span>
              </h1>
              <p className="text-[11px] text-emerald-100 hidden sm:block -mt-0.5 opacity-90 font-medium">
                {language === 'en' ? 'Smart Agri Advisor' : 'ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಸಲಹೆಗಾರ'}
              </p>
            </div>
          </div>
        </div>

        {/* Right action bar: PWA Install & Language switcher */}
        <div className="flex items-center gap-2">
          <PWAInstallButton language={language} variant="navbar" />

          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 border border-emerald-600/60 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-expanded={langMenuOpen}
            >
              <Globe className="w-4 h-4 text-emerald-200" />
              <span>{language === 'en' ? 'English' : language === 'hi' ? 'हिन्दी' : 'ಕನ್ನಡ'}</span>
              <ChevronDown className="w-3.5 h-3.5 text-emerald-300" />
            </button>

            {langMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-44 bg-white text-stone-800 rounded-xl shadow-xl border border-stone-200 py-1 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                  <button
                    onClick={() => {
                      onLanguageChange('en');
                      setLangMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between hover:bg-emerald-50 transition ${
                      language === 'en' ? 'font-semibold text-emerald-700 bg-emerald-50/50' : ''
                    }`}
                  >
                    <span>English</span>
                    {language === 'en' && <Check className="w-4 h-4 text-emerald-600" />}
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange('kn');
                      setLangMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between hover:bg-emerald-50 transition font-kannada ${
                      language === 'kn' ? 'font-semibold text-emerald-700 bg-emerald-50/50' : ''
                    }`}
                  >
                    <span>ಕನ್ನಡ (Kannada)</span>
                    {language === 'kn' && <Check className="w-4 h-4 text-emerald-600" />}
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange('hi');
                      setLangMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between hover:bg-emerald-50 transition font-hindi ${
                      language === 'hi' ? 'font-semibold text-emerald-700 bg-emerald-50/50' : ''
                    }`}
                  >
                    <span>हिन्दी (Hindi)</span>
                    {language === 'hi' && <Check className="w-4 h-4 text-emerald-600" />}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
