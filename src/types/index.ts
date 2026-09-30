export type Language = 'en' | 'kn' | 'hi';

export type ScreenId =
  | 'home'
  | 'weather'
  | 'soil'
  | 'fertilizer'
  | 'crop_recommendation'
  | 'crop_calendar'
  | 'disease'
  | 'market'
  | 'pesticides'
  | 'yield_profit'
  | 'karnataka_districts'
  | 'india_states'
  | 'schemes'
  | 'karnataka_schemes';

export interface IndiaState {
  id: string;
  name: string;
  nameHi: string;
  nameKn: string;
  capital: string;
  region: 'North' | 'South' | 'West' | 'East' | 'Central' | 'North-East';
  regionHi: string;
  regionKn: string;
  agroZone: string;
  primaryCrops: string[];
  primaryCropsHi: string[];
  primaryCropsKn: string[];
  soilTypes: string[];
  majorMandis: string[];
  specialty: string;
  specialtyHi: string;
  specialtyKn: string;
  weatherCity: string;
  avgTemp: number;
  avgHumidity: number;
  condition: string;
}

export interface KarnatakaDistrict {
  id: string;
  name: string;
  nameKn: string;
  division: 'Bengaluru' | 'Mysuru' | 'Belagavi' | 'Kalaburagi';
  divisionKn: string;
  agroZone: string;
  agroZoneKn: string;
  soilTypes: string[];
  soilTypesKn: string[];
  annualRainfall: string;
  primaryCrops: string[];
  primaryCropsKn: string[];
  majorMandis: string[];
  specialFeature: string;
  specialFeatureKn: string;
  weatherCity: string;
  temperature: number;
  humidity: number;
  condition: string;
}

export interface KarnatakaScheme {
  id: string;
  title: string;
  titleKn: string;
  department: string;
  departmentKn: string;
  subsidy: string;
  subsidyKn: string;
  eligibility: string;
  eligibilityKn: string;
  description: string;
  descriptionKn: string;
  actionUrl?: string;
  helpline: string;
}

export interface WeatherData {
  city: string;
  temperature: number;
  humidity: number;
  condition: string;
  advice: string;
  crops: string[];
  rainAlert: string;
  forecast: ForecastItem[];
}

export interface ForecastItem {
  dt_txt: string;
  temp: number;
  condition: string;
  description: string;
}

export interface SoilAnalysisResult {
  phStatus: 'acidic' | 'alkaline' | 'good';
  nitrogenStatus: 'low' | 'adequate';
  phosphorusStatus: 'low' | 'adequate';
  potassiumStatus: 'low' | 'adequate';
  adviceLines: string[];
  isHealthy: boolean;
}

export interface FertilizerRecommendation {
  crop: string;
  soil: string;
  dosages: { name: string; amount: string }[];
  note?: string;
}

export interface CropInfo {
  name: string;
  nameKn?: string;
  season: string;
  sowing: string;
  harvest: string;
  water: string;
  fertilizer: string;
  pests: string;
}

export interface MarketPriceItem {
  crop: string;
  market: string;
  district?: string;
  price: string;
  numericPrice: number;
  trend?: 'up' | 'down' | 'stable';
}

export interface PesticideItem {
  crop: string;
  pest: string;
  pesticide: string;
  dose: string;
  application: string;
  safety: string;
}

export interface CalendarMonthStage {
  month: string;
  stage: string;
  icon: string;
}

export interface CropCalendarSchedule {
  crop: string;
  stages: CalendarMonthStage[];
}

export interface DiseaseDetectionResult {
  disease: string;
  treatment: string;
  symptoms?: string[];
  prevention?: string[];
}
