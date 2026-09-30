import React, { useState } from 'react';
import { ScreenId, Language } from './types';
import { Navbar } from './components/Navbar';
import { HomeScreen } from './components/HomeScreen';
import { WeatherScreen } from './components/WeatherScreen';
import { SoilScreen } from './components/SoilScreen';
import { FertilizerScreen } from './components/FertilizerScreen';
import { CropRecommendationScreen } from './components/CropRecommendationScreen';
import { CropCalendarScreen } from './components/CropCalendarScreen';
import { DiseaseScreen } from './components/DiseaseScreen';
import { MarketScreen } from './components/MarketScreen';
import { PesticidesScreen } from './components/PesticidesScreen';
import { YieldProfitScreen } from './components/YieldProfitScreen';
import { IndiaStatesScreen } from './components/IndiaStatesScreen';
import { KarnatakaDistrictsScreen } from './components/KarnatakaDistrictsScreen';
import { SchemesScreen } from './components/SchemesScreen';
import { OfflineIndicator } from './components/OfflineIndicator';
import { translations } from './i18n/translations';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [language, setLanguage] = useState<Language>('en');
  const [weatherTargetCity, setWeatherTargetCity] = useState<string>('Bengaluru');

  const t = translations[language];

  const handleSelectWeatherCity = (city: string) => {
    setWeatherTargetCity(city);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} language={language} />;
      case 'karnataka_districts':
        return (
          <KarnatakaDistrictsScreen
            language={language}
            onSelectWeatherCity={handleSelectWeatherCity}
            onNavigate={setCurrentScreen}
          />
        );
      case 'india_states':
        return (
          <IndiaStatesScreen
            language={language}
            onSelectWeatherCity={handleSelectWeatherCity}
            onNavigate={setCurrentScreen}
          />
        );
      case 'schemes':
      case 'karnataka_schemes':
        return <SchemesScreen language={language} />;
      case 'weather':
        return <WeatherScreen language={language} initialCity={weatherTargetCity} />;
      case 'soil':
        return <SoilScreen language={language} />;
      case 'fertilizer':
        return <FertilizerScreen language={language} />;
      case 'crop_recommendation':
        return <CropRecommendationScreen language={language} />;
      case 'crop_calendar':
        return <CropCalendarScreen language={language} />;
      case 'disease':
        return <DiseaseScreen language={language} />;
      case 'market':
        return <MarketScreen language={language} />;
      case 'pesticides':
        return <PesticidesScreen language={language} />;
      case 'yield_profit':
        return <YieldProfitScreen language={language} />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} language={language} />;
    }
  };

  return (
    <div
      lang={language}
      className={`min-h-screen bg-stone-100 flex flex-col text-stone-900 ${
        language === 'kn' ? 'font-kannada' : language === 'hi' ? 'font-hindi' : ''
      }`}
    >
      <Navbar
        currentScreen={currentScreen}
        onNavigate={setCurrentScreen}
        language={language}
        onLanguageChange={setLanguage}
      />

      <main className="flex-1 pb-16">
        {renderScreen()}
      </main>

      {/* Offline connectivity indicator for rural/farm operations */}
      <OfflineIndicator language={language} />

      {/* Professional Indian Agritech Footer */}
      <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 py-6 px-4 text-xs">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-stone-100 font-bold text-sm">
            <span className="text-xl">🌾</span>
            <span>{t.appTitle}</span>
            <span className="text-stone-500 font-normal">|</span>
            <span className="text-stone-400 font-medium text-xs">
              {language === 'en'
                ? 'All-India & Karnataka Precision Farming Portal'
                : language === 'hi'
                ? 'अखिल भारतीय एवं कर्नाटक डिजिटल कृषि पोर्टल'
                : 'ಅಖಿಲ ಭಾರತ ಮತ್ತು ಕರ್ನಾಟಕ ಡಿಜಿಟಲ್ ಕೃಷಿ ವೇದಿಕೆ'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-stone-400 text-xs">
            <span>31 Karnataka Districts</span>
            <span>•</span>
            <span>15 National Agro Zones</span>
            <span>•</span>
            <span>Kisan Call: 1800-180-1551</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
