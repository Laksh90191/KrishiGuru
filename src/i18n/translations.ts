import { Language } from '../types';

export interface Translations {
  appTitle: string;
  appSubtitle: string;
  weather: string;
  soilHealth: string;
  fertilizer: string;
  cropRecommendation: string;
  cropCalendar: string;
  diseaseDetection: string;
  marketPrices: string;
  pesticides: string;
  yieldProfit: string;
  indiaStates: string;
  karnatakaDistricts: string;
  schemes: string;
  language: string;
  backToHome: string;
  search: string;
  submit: string;
  calculate: string;
  clear: string;
  recommend: string;
  analyze: string;
  selectCrop: string;
  selectSoil: string;
  selectSeason: string;
  loading: string;
  error: string;
  results: string;
  // Specific screen strings
  weatherSubtitle: string;
  enterCity: string;
  getWeather: string;
  weatherInfo: string;
  temperature: string;
  humidity: string;
  condition: string;
  farmerAdvice: string;
  recommendedCrops: string;
  forecast: string;
  soilSubtitle: string;
  phLabel: string;
  nitrogenLabel: string;
  phosphorusLabel: string;
  potassiumLabel: string;
  soilHealthy: string;
  fertilizerSubtitle: string;
  getRecommendation: string;
  recommendationTitle: string;
  perAcreDosage: string;
  diseaseSubtitle: string;
  takePhoto: string;
  chooseGallery: string;
  orTrySample: string;
  detectedDisease: string;
  treatment: string;
  marketSubtitle: string;
  searchCropPlaceholder: string;
  allMarkets: string;
  pricePerQuintal: string;
  pesticidesSubtitle: string;
  searchPesticidesPlaceholder: string;
  pest: string;
  dose: string;
  application: string;
  safety: string;
  yieldSubtitle: string;
  landArea: string;
  expectedYield: string;
  marketPrice: string;
  totalProduction: string;
  estimatedIncome: string;
  quintals: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    appTitle: 'KrishiGuru India',
    appSubtitle: 'Pan-India & Karnataka Smart Agricultural Advisory & Mandi Platform',
    weather: 'Weather & Alerts',
    soilHealth: 'Soil Health',
    fertilizer: 'Fertilizer Guide',
    cropRecommendation: 'Crop Advisory',
    cropCalendar: 'Crop Calendar',
    diseaseDetection: 'Disease Diagnosis',
    marketPrices: 'APMC Mandi Rates',
    pesticides: 'Pesticides & Safety',
    yieldProfit: 'Yield & Profit',
    indiaStates: 'All-India States',
    karnatakaDistricts: '31 Karnataka Districts',
    schemes: 'Govt Schemes & Helplines',
    language: 'Language',
    backToHome: 'Back to Home',
    search: 'Search',
    submit: 'Submit',
    calculate: 'Calculate',
    clear: 'Clear',
    recommend: 'Get Recommendation',
    analyze: 'Analyze Soil',
    selectCrop: 'Select Crop',
    selectSoil: 'Select Soil Type',
    selectSeason: 'Select Season',
    loading: 'Loading...',
    error: 'Something went wrong',
    results: 'Results',
    weatherSubtitle: 'Live Weather, Rain Warning Alerts & Agricultural Advisories',
    enterCity: 'Enter City / District (e.g. Mandya, Ludhiana, Nashik, Kolar)',
    getWeather: 'Get Weather',
    weatherInfo: 'Weather Information',
    temperature: 'Temperature',
    humidity: 'Humidity',
    condition: 'Condition',
    farmerAdvice: 'Scientific Farmer Advice',
    recommendedCrops: 'Recommended Crops',
    forecast: '5-Day / Multi-Hour Forecast',
    soilSubtitle: 'Analyze Soil NPK & pH for Balanced Crop Nutrition',
    phLabel: 'pH Level (Optimal: 6.0 - 7.5)',
    nitrogenLabel: 'Nitrogen (N) in kg/ha (Min: 50)',
    phosphorusLabel: 'Phosphorus (P) in kg/ha (Min: 30)',
    potassiumLabel: 'Potassium (K) in kg/ha (Min: 30)',
    soilHealthy: 'Soil is balanced and healthy for cultivation.',
    fertilizerSubtitle: 'Tailored NPK & Micronutrient Dosage per Acre for Your Farm',
    getRecommendation: 'Get Recommendation',
    recommendationTitle: 'Fertilizer Recommendation',
    perAcreDosage: 'Recommended Dosage (per Acre)',
    diseaseSubtitle: 'Visual Crop Leaf Disease Identifier & Remediation Guide',
    takePhoto: 'Take Photo',
    chooseGallery: 'Upload Leaf Image',
    orTrySample: 'Or Select a Sample Crop Leaf',
    detectedDisease: 'Detected Disease',
    treatment: 'Recommended Treatment & Remediation',
    marketSubtitle: 'Real-Time APMC Mandi Rates Across Karnataka & All-India Centers',
    searchCropPlaceholder: 'Search by crop, commodity, or mandi name...',
    allMarkets: 'All Mandis',
    pricePerQuintal: 'Price / Quintal',
    pesticidesSubtitle: 'Safe Chemical Pest Management, Dosages & Spray Precautions',
    searchPesticidesPlaceholder: 'Search by crop, pest, or pesticide...',
    pest: 'Target Pest',
    dose: 'Standard Dose',
    application: 'Application Method',
    safety: 'Safety Precautions',
    yieldSubtitle: 'Estimate Harvest Output, Gross Income & Financial Margin',
    landArea: 'Land Area (Acres)',
    expectedYield: 'Expected Yield (Quintals / Acre)',
    marketPrice: 'Market Price (₹ / Quintal)',
    totalProduction: 'Total Estimated Production',
    estimatedIncome: 'Estimated Gross Revenue',
    quintals: 'Quintals',
  },
  kn: {
    appTitle: 'ಕೃಷಿಗುರು ಭಾರತ',
    appSubtitle: 'ಕರ್ನಾಟಕ ಮತ್ತು ಅಖಿಲ ಭಾರತ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಸಲಹೆಗಾರ & ಮಂಡಿ ವೇದಿಕೆ',
    weather: 'ಹವಾಮಾನ ಮತ್ತು ಎಚ್ಚರಿಕೆ',
    soilHealth: 'ಮಣ್ಣಿನ ಆರೋಗ್ಯ',
    fertilizer: 'ರಸಗೊಬ್ಬರ ಪ್ರಮಾಣ',
    cropRecommendation: 'ಬೆಳೆ ಶಿಫಾರಸು',
    cropCalendar: 'ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್',
    diseaseDetection: 'ರೋಗ ಪತ್ತೆ & ಚಿಕಿತ್ಸೆ',
    marketPrices: 'APMC ಮಾರುಕಟ್ಟೆ ಧಾರಣೆ',
    pesticides: 'ಕೀಟನಾಶಕಗಳ ಮಾರ್ಗದರ್ಶಿ',
    yieldProfit: 'ಇಳುವರಿ & ಲಾಭದ ಲೆಕ್ಕ',
    indiaStates: 'ಭಾರತದ ರಾಜ್ಯಗಳು',
    karnatakaDistricts: 'ಕರ್ನಾಟಕದ 31 ಜಿಲ್ಲೆಗಳು',
    schemes: 'ಸರ್ಕಾರಿ ಯೋಜನೆ & ಸಹಾಯವಾಣಿ',
    language: 'ಭಾಷೆ',
    backToHome: 'ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ',
    search: 'ಹುಡುಕಿ',
    submit: 'ಸಲ್ಲಿಸಿ',
    calculate: 'ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ',
    clear: 'ತೆರವುಗೊಳಿಸಿ',
    recommend: 'ಶಿಫಾರಸು ಪಡೆಯಿರಿ',
    analyze: 'ಮಣ್ಣು ವಿಶ್ಲೇಷಣೆ',
    selectCrop: 'ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    selectSoil: 'ಮಣ್ಣಿನ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    selectSeason: 'ಋತುವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    loading: 'ಲೋಡ್ ಆಗುತ್ತಿದೆ...',
    error: 'ದೋಷ ಸಂಭವಿಸಿದೆ',
    results: 'ಫಲಿತಾಂಶಗಳು',
    weatherSubtitle: 'ಲೈವ್ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ, ಮಳೆ ಎಚ್ಚರಿಕೆ ಮತ್ತು ರೈತ ಸಲಹೆ',
    enterCity: 'ನಗರ / ಜಿಲ್ಲೆಯ ಹೆಸರು ನಮೂದಿಸಿ (ಉದಾ: ಮಂಡ್ಯ, ಬೆಳಗಾವಿ, ಕಲಬುರಗಿ)',
    getWeather: 'ಹವಾಮಾನ ಪರಿಶೀಲಿಸಿ',
    weatherInfo: 'ಹವಾಮಾನ ಮಾಹಿತಿ',
    temperature: 'ತಾಪಮಾನ',
    humidity: 'ತೇವಾಂಶ',
    condition: 'ಸ್ಥಿತಿ',
    farmerAdvice: 'ವೈಜ್ಞಾನಿಕ ರೈತ ಸಲಹೆ',
    recommendedCrops: 'ಶಿಫಾರಸು ಮಾಡಿದ ಬೆಳೆಗಳು',
    forecast: 'ಮುಂದಿನ ದಿನಗಳ ಮುನ್ಸೂಚನೆ',
    soilSubtitle: 'ಮಣ್ಣಿನ pH ಮತ್ತು NPK ಪೋಷಕಾಂಶಗಳ ಸಮಗ್ರ ಪರಿಶೀಲನೆ',
    phLabel: 'pH ಮಟ್ಟ (ಸೂಕ್ತ: 6.0 - 7.5)',
    nitrogenLabel: 'ಸಾರಜನಕ - Nitrogen (N) (ಕನಿಷ್ಠ: 50)',
    phosphorusLabel: 'ರಂಜಕ - Phosphorus (P) (ಕನಿಷ್ಠ: 30)',
    potassiumLabel: 'ಪೊಟ್ಯಾಶ್ - Potassium (K) (ಕನಿಷ್ಠ: 30)',
    soilHealthy: 'ಮಣ್ಣು ಆರೋಗ್ಯಕರವಾಗಿದೆ ಮತ್ತು ಕೃಷಿಗೆ ಯೋಗ್ಯವಾಗಿದೆ.',
    fertilizerSubtitle: 'ಪ್ರತಿ ಎಕರೆಗೆ ನಿಖರವಾದ ರಸಗೊಬ್ಬರ ಪ್ರಮಾಣದ ವಿವರಣೆ',
    getRecommendation: 'ಶಿಫಾರಸು ಪಡೆಯಿರಿ',
    recommendationTitle: 'ರಸಗೊಬ್ಬರ ಶಿಫಾರಸು',
    perAcreDosage: 'ಶಿಫಾರಸು ಮಾಡಿದ ಡೋಸ್ (ಪ್ರತಿ ಎಕರೆಗೆ)',
    diseaseSubtitle: 'ಬೆಳೆ ಎಲೆ ರೋಗ ಪತ್ತೆ ಮತ್ತು ಸೂಕ್ತ ಚಿಕಿತ್ಸಾ ಕ್ರಮಗಳು',
    takePhoto: 'ಫೋಟೋ ತೆಗೆಯಿರಿ',
    chooseGallery: 'ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    orTrySample: 'ಅಥವಾ ಮಾದರಿ ಎಲೆ ಚಿತ್ರ ಆರಿಸಿ',
    detectedDisease: 'ಪತ್ತೆಯಾದ ರೋಗ',
    treatment: 'ಚಿಕಿತ್ಸೆ ಮತ್ತು ನಿವಾರಣಾ ಕ್ರಮ',
    marketSubtitle: 'ಕರ್ನಾಟಕದ 31 ಜಿಲ್ಲೆಗಳು ಮತ್ತು ರಾಷ್ಟ್ರೀಯ APMC ಮಂಡಿ ಧಾರಣೆ',
    searchCropPlaceholder: 'ಬೆಳೆ ಅಥವಾ ಮಾರುಕಟ್ಟೆ ಹೆಸರು ಹುಡುಕಿ...',
    allMarkets: 'ಎಲ್ಲಾ ಮಾರುಕಟ್ಟೆಗಳು',
    pricePerQuintal: 'ಬೆಲೆ / ಕ್ವಿಂಟಾಲ್‌ಗೆ',
    pesticidesSubtitle: 'ಕೀಟ ನಿಯಂತ್ರಣ, ಔಷಧ ಪ್ರಮಾಣ ಮತ್ತು ಸುರಕ್ಷತಾ ಮುನ್ನೆಚ್ಚರಿಕೆ',
    searchPesticidesPlaceholder: 'ಬೆಳೆ, ಕೀಟ ಅಥವಾ ಕೀಟನಾಶಕ ಹುಡುಕಿ...',
    pest: 'ಕೀಟದ ಹೆಸರು',
    dose: 'ಔಷಧ ಪ್ರಮಾಣ',
    application: 'ಸಿಂಪಡಿಸುವ ವಿಧಾನ',
    safety: 'ಸುರಕ್ಷತಾ ಕ್ರಮಗಳು',
    yieldSubtitle: 'ಅಂದಾಜು ಉತ್ಪಾದನೆ, ಮಾರುಕಟ್ಟೆ ಆದಾಯ ಮತ್ತು ಲಾಭದ ಲೆಕ್ಕಾಚಾರ',
    landArea: 'ಭೂಮಿ ವಿಸ್ತೀರ್ಣ (ಎಕರೆ)',
    expectedYield: 'ಅಂದಾಜು ಇಳುವರಿ (ಕ್ವಿಂಟಾಲ್ / ಎಕರೆ)',
    marketPrice: 'ಮಾರುಕಟ್ಟೆ ದರ (₹ / ಕ್ವಿಂಟಾಲ್)',
    totalProduction: 'ಒಟ್ಟು ಅಂದಾಜು ಇಳುವರಿ',
    estimatedIncome: 'ಅಂದಾಜು ಒಟ್ಟು ಆದಾಯ',
    quintals: 'ಕ್ವಿಂಟಾಲ್‌ಗಳು',
  },
  hi: {
    appTitle: 'कृषिगुरु भारत',
    appSubtitle: 'अखिल भारतीय एवं कर्नाटक स्मार्ट कृषि सलाहकार एवं मंडी मूल्य मंच',
    weather: 'मौसम और चेतावनी',
    soilHealth: 'मृदा स्वास्थ्य',
    fertilizer: 'उर्वरक मात्रा',
    cropRecommendation: 'फसल सलाह',
    cropCalendar: 'फसल कैलेंडर',
    diseaseDetection: 'रोग पहचान एवं उपचार',
    marketPrices: 'APMC मंडी भाव',
    pesticides: 'कीटनाशक व सुरक्षा',
    yieldProfit: 'उपज और लाभ',
    indiaStates: 'भारत के राज्य',
    karnatakaDistricts: 'कर्नाटक के 31 जिले',
    schemes: 'सरकारी योजनाएं व हेल्पलाइन',
    language: 'भाषा',
    backToHome: 'होमपेज पर जाएं',
    search: 'खोजें',
    submit: 'जमा करें',
    calculate: 'गणना करें',
    clear: 'साफ़ करें',
    recommend: 'सलाह प्राप्त करें',
    analyze: 'मिट्टी की जांच करें',
    selectCrop: 'फसल चुनें',
    selectSoil: 'मिट्टी का प्रकार चुनें',
    selectSeason: 'मौसम / ऋतु चुनें',
    loading: 'लोड हो रहा है...',
    error: 'त्रुटि हुई',
    results: 'परिणाम',
    weatherSubtitle: 'लाइव मौसम, वर्षा चेतावनी और कृषि सलाह',
    enterCity: 'शहर / जिले का नाम दर्ज करें (उदा. नासिक, इंदौर, लुधियाना, करनाल)',
    getWeather: 'मौसम देखें',
    weatherInfo: 'मौसम की जानकारी',
    temperature: 'तापमान',
    humidity: 'आर्द्रता (नमी)',
    condition: 'स्थिति',
    farmerAdvice: 'वैज्ञानिक किसान सलाह',
    recommendedCrops: 'अनुशंसित फसलें',
    forecast: '5 दिवसीय मौसम पूर्वानुमान',
    soilSubtitle: 'संतुलित पोषण हेतु मिट्टी के NPK और pH की वैज्ञानिक जांच',
    phLabel: 'pH स्तर (उपयुक्त: 6.0 - 7.5)',
    nitrogenLabel: 'नाइट्रोजन (N) किग्रा/हेक्टेयर (न्यूनतम: 50)',
    phosphorusLabel: 'फास्फोरस (P) किग्रा/हेक्टेयर (न्यूनतम: 30)',
    potassiumLabel: 'पोटाश (K) किग्रा/हेक्टेयर (न्यूनतम: 30)',
    soilHealthy: 'मृदा संतुलित और खेती के लिए पूर्णतः स्वस्थ है।',
    fertilizerSubtitle: 'प्रत्येक फसल हेतु प्रति एकड़ सही उर्वरक व खाद की मात्रा',
    getRecommendation: 'उर्वरक सलाह लें',
    recommendationTitle: 'उर्वरक अनु अनुशंसा',
    perAcreDosage: 'अनुशंसित मात्रा (प्रति एकड़)',
    diseaseSubtitle: 'फसल पत्ती रोग पहचान एवं निवारण मार्गदर्शिका',
    takePhoto: 'फोटो खींचें',
    chooseGallery: 'तस्वीर अपलोड करें',
    orTrySample: 'या नमूना पत्ती चुनें',
    detectedDisease: 'पहचाना गया रोग',
    treatment: 'उपचार और दवा छिड़काव',
    marketSubtitle: 'कर्नाटक एवं देश की प्रमुख APMC मंडियों के दैनिक ताज़ा भाव',
    searchCropPlaceholder: 'फसल, अनाज या मंडी का नाम खोजें...',
    allMarkets: 'सभी मंडियां',
    pricePerQuintal: 'भाव / क्विंटल',
    pesticidesSubtitle: 'सुरक्षित कीट नियंत्रण, सही खुराक और छिड़काव सावधानियां',
    searchPesticidesPlaceholder: 'फसल, कीट या कीटनाशक खोजें...',
    pest: 'हानिकारक कीट',
    dose: 'मानक खुराक',
    application: 'छिड़काव की विधि',
    safety: 'सुरक्षा सावधानियां',
    yieldSubtitle: 'कुल उत्पादन, अनुमानित बिक्री आय और शुद्ध लाभ की गणना',
    landArea: 'जमीन का क्षेत्रफल (एकड़)',
    expectedYield: 'अनुमानित उपज (क्विंटल / एकड़)',
    marketPrice: 'मंडी भाव (₹ / क्विंटल)',
    totalProduction: 'कुल अनुमानित उत्पादन',
    estimatedIncome: 'अनुमानित सकल आय',
    quintals: 'क्विंटल',
  },
};
