import { CropInfo, MarketPriceItem, PesticideItem, CropCalendarSchedule } from '../types';

export const CROPS_DATA: CropInfo[] = [
  {
    name: "Rice",
    nameKn: "ಭತ್ತ (Rice)",
    season: "Kharif",
    sowing: "June-July",
    harvest: "October-November",
    water: "High",
    fertilizer: "NPK 120:60:40",
    pests: "Stem Borer, Leaf Folder"
  },
  {
    name: "Ragi",
    nameKn: "ರಾಗಿ (Ragi)",
    season: "Kharif",
    sowing: "June-July",
    harvest: "October",
    water: "Medium",
    fertilizer: "NPK 50:40:25",
    pests: "Shoot Fly"
  },
  {
    name: "Maize",
    nameKn: "ಮೆಕ್ಕೆಜೋಳ (Maize)",
    season: "Kharif/Rabi",
    sowing: "June, October",
    harvest: "September, January",
    water: "Medium",
    fertilizer: "NPK 150:75:40",
    pests: "Fall Armyworm"
  },
  {
    name: "Cotton",
    nameKn: "ಹತ್ತಿ (Cotton)",
    season: "Kharif",
    sowing: "May-June",
    harvest: "October-January",
    water: "Medium",
    fertilizer: "NPK 100:50:50",
    pests: "Pink Bollworm"
  },
  {
    name: "Sugarcane",
    nameKn: "ಕಬ್ಬು (Sugarcane)",
    season: "Annual",
    sowing: "January-March",
    harvest: "12 Months",
    water: "High",
    fertilizer: "NPK 250:100:125",
    pests: "Early Shoot Borer"
  },
  {
    name: "Wheat",
    nameKn: "ಗೋಧಿ (Wheat)",
    season: "Rabi",
    sowing: "October-November",
    harvest: "March-April",
    water: "Medium",
    fertilizer: "NPK 120:60:40",
    pests: "Aphids, Rust"
  },
  {
    name: "Groundnut",
    nameKn: "ಕಡಲೆಕಾಯಿ (Groundnut)",
    season: "Kharif",
    sowing: "June-July",
    harvest: "October-November",
    water: "Low to Medium",
    fertilizer: "NPK 25:50:0 + Gypsum",
    pests: "Leaf Miner, Tikka Disease"
  }
];

export const PESTICIDES_DATA: PesticideItem[] = [
  {
    crop: "Rice",
    pest: "Brown Planthopper",
    pesticide: "Imidacloprid 17.8 SL",
    dose: "0.3 ml/L water",
    application: "Foliar Spray",
    safety: "Wear gloves while spraying."
  },
  {
    crop: "Rice",
    pest: "Stem Borer",
    pesticide: "Chlorantraniliprole 18.5 SC",
    dose: "0.4 ml/L water",
    application: "Foliar Spray",
    safety: "Avoid spraying during strong winds."
  },
  {
    crop: "Wheat",
    pest: "Aphids",
    pesticide: "Thiamethoxam 25 WG",
    dose: "0.25 g/L water",
    application: "Foliar Spray",
    safety: "Use protective clothing."
  },
  {
    crop: "Cotton",
    pest: "Pink Bollworm",
    pesticide: "Emamectin Benzoate 5 SG",
    dose: "0.4 g/L water",
    application: "Foliar Spray",
    safety: "Wear a face mask while spraying."
  },
  {
    crop: "Tomato",
    pest: "Fruit Borer",
    pesticide: "Spinosad 45 SC",
    dose: "0.3 ml/L water",
    application: "Foliar Spray",
    safety: "Keep away from children."
  },
  {
    crop: "Chilli",
    pest: "Thrips",
    pesticide: "Fipronil 5 SC",
    dose: "1 ml/L water",
    application: "Foliar Spray",
    safety: "Avoid skin contact."
  },
  {
    crop: "Sugarcane",
    pest: "Early Shoot Borer",
    pesticide: "Chlorpyrifos 20 EC",
    dose: "2 ml/L water",
    application: "Root Zone Application",
    safety: "Do not contaminate water bodies."
  },
  {
    crop: "Maize",
    pest: "Fall Armyworm",
    pesticide: "Chlorantraniliprole 18.5 SC",
    dose: "0.4 ml/L water",
    application: "Foliar Spray",
    safety: "Spray in the early morning or evening."
  },
  {
    crop: "Groundnut",
    pest: "Leaf Miner",
    pesticide: "Lambda-cyhalothrin 5 EC",
    dose: "0.5 ml/L water",
    application: "Foliar Spray",
    safety: "Wear gloves."
  },
  {
    crop: "Soybean",
    pest: "Girdle Beetle",
    pesticide: "Quinalphos 25 EC",
    dose: "2 ml/L water",
    application: "Foliar Spray",
    safety: "Avoid inhaling the spray."
  }
];

export const MARKET_DATA: MarketPriceItem[] = [
  {
    crop: "Tomato",
    market: "Yeshwanthpur APMC",
    district: "Bengaluru Urban",
    price: "₹1800 / Quintal",
    numericPrice: 1800,
    trend: 'stable'
  },
  {
    crop: "Rice",
    market: "Mysuru APMC",
    district: "Mysuru",
    price: "₹2400 / Quintal",
    numericPrice: 2400,
    trend: 'up'
  },
  {
    crop: "Sugarcane",
    market: "Mandya APMC",
    district: "Mandya",
    price: "₹350 / Quintal",
    numericPrice: 350,
    trend: 'stable'
  },
  {
    crop: "Rice",
    market: "Chennai APMC",
    district: "Chennai",
    price: "₹2400 / Quintal",
    numericPrice: 2400,
    trend: 'stable'
  },
  {
    crop: "Wheat",
    market: "Delhi Mandi",
    district: "Delhi",
    price: "₹2600 / Quintal",
    numericPrice: 2600,
    trend: 'up'
  },
  {
    crop: "Cotton",
    market: "Coimbatore Cotton Market",
    district: "Coimbatore",
    price: "₹7200 / Quintal",
    numericPrice: 7200,
    trend: 'up'
  },
  {
    crop: "Tomato",
    market: "Madurai APMC",
    district: "Madurai",
    price: "₹1800 / Quintal",
    numericPrice: 1800,
    trend: 'down'
  },
  {
    crop: "Onion",
    market: "Salem Mandi",
    district: "Salem",
    price: "₹2200 / Quintal",
    numericPrice: 2200,
    trend: 'down'
  },
  {
    crop: "Ragi",
    market: "Hassan APMC",
    district: "Hassan",
    price: "₹3400 / Quintal",
    numericPrice: 3400,
    trend: 'up'
  },
  {
    crop: "Maize",
    market: "Davanagere APMC",
    district: "Davanagere",
    price: "₹2100 / Quintal",
    numericPrice: 2100,
    trend: 'stable'
  },
  {
    crop: "Groundnut",
    market: "Chitradurga APMC",
    district: "Chitradurga",
    price: "₹6500 / Quintal",
    numericPrice: 6500,
    trend: 'up'
  },
  {
    crop: "Chilli",
    market: "Byadgi APMC",
    district: "Haveri",
    price: "₹19500 / Quintal",
    numericPrice: 19500,
    trend: 'up'
  }
];

export const CROP_CALENDAR_DATA: Record<string, CropCalendarSchedule> = {
  Rice: {
    crop: "Rice",
    stages: [
      { month: "June", stage: "Nursery Preparation", icon: "🌱" },
      { month: "July", stage: "Transplanting", icon: "🌾" },
      { month: "August", stage: "Irrigation & Weeding", icon: "💧" },
      { month: "September", stage: "Fertilizer Application", icon: "🌿" },
      { month: "October", stage: "Harvest", icon: "🌾" }
    ]
  },
  Maize: {
    crop: "Maize",
    stages: [
      { month: "June", stage: "Sowing", icon: "🌱" },
      { month: "July", stage: "Irrigation", icon: "💧" },
      { month: "August", stage: "Fertilizer", icon: "🌿" },
      { month: "September", stage: "Harvest", icon: "🌾" }
    ]
  },
  Wheat: {
    crop: "Wheat",
    stages: [
      { month: "November", stage: "Sowing", icon: "🌱" },
      { month: "December", stage: "Irrigation", icon: "💧" },
      { month: "January", stage: "Fertilizer", icon: "🌿" },
      { month: "March", stage: "Harvest", icon: "🌾" }
    ]
  },
  Cotton: {
    crop: "Cotton",
    stages: [
      { month: "June", stage: "Sowing", icon: "🌱" },
      { month: "July", stage: "Irrigation", icon: "💧" },
      { month: "August", stage: "Fertilizer", icon: "🌿" },
      { month: "November", stage: "Harvest", icon: "🌾" }
    ]
  },
  Groundnut: {
    crop: "Groundnut",
    stages: [
      { month: "June", stage: "Sowing", icon: "🌱" },
      { month: "July", stage: "Irrigation", icon: "💧" },
      { month: "August", stage: "Gypsum Application", icon: "🌿" },
      { month: "October", stage: "Harvest", icon: "🌾" }
    ]
  },
  Sugarcane: {
    crop: "Sugarcane",
    stages: [
      { month: "January", stage: "Planting", icon: "🌱" },
      { month: "February", stage: "Irrigation", icon: "💧" },
      { month: "March", stage: "Fertilizer", icon: "🌿" },
      { month: "December", stage: "Harvest", icon: "🌾" }
    ]
  }
};

export interface FertilizerDose {
  nutrients: { name: string; amount: string; icon: string }[];
  instructions: string;
}

export const FERTILIZER_DOSAGES: Record<string, FertilizerDose> = {
  Rice: {
    nutrients: [
      { name: "Urea", amount: "50 kg/acre", icon: "⚪" },
      { name: "DAP", amount: "25 kg/acre", icon: "🔘" },
      { name: "MOP", amount: "20 kg/acre", icon: "🔴" }
    ],
    instructions: "Apply fertilizer after proper irrigation. Split Urea into 3 split doses for optimal absorption."
  },
  Maize: {
    nutrients: [
      { name: "Urea", amount: "45 kg/acre", icon: "⚪" },
      { name: "DAP", amount: "20 kg/acre", icon: "🔘" },
      { name: "Potash", amount: "15 kg/acre", icon: "🔴" }
    ],
    instructions: "Apply DAP at sowing. Apply Urea in two splits at knee-high and tasseling stages."
  },
  Wheat: {
    nutrients: [
      { name: "Urea", amount: "40 kg/acre", icon: "⚪" },
      { name: "DAP", amount: "20 kg/acre", icon: "🔘" }
    ],
    instructions: "Apply DAP as basal dose at sowing. Top dress Urea during the first crown root irrigation."
  },
  Cotton: {
    nutrients: [
      { name: "Urea", amount: "35 kg/acre", icon: "⚪" },
      { name: "Potash", amount: "25 kg/acre", icon: "🔴" }
    ],
    instructions: "Apply in splits during square formation and flowering stages to prevent boll shedding."
  },
  Groundnut: {
    nutrients: [
      { name: "Gypsum", amount: "200 kg/acre", icon: "⚪" },
      { name: "SSP", amount: "25 kg/acre", icon: "🔘" }
    ],
    instructions: "Apply gypsum at 45 days after sowing (flowering stage) to enhance pod filling and oil content."
  },
  Sugarcane: {
    nutrients: [
      { name: "Urea", amount: "75 kg/acre", icon: "⚪" },
      { name: "DAP", amount: "30 kg/acre", icon: "🔘" },
      { name: "Potash", amount: "25 kg/acre", icon: "🔴" }
    ],
    instructions: "Heavy feeder. Apply full DAP and Potash at planting, Urea in 4 equal splits during tillering."
  }
};

export const SAMPLE_DISEASES = [
  {
    id: "leaf_blight",
    name: "Leaf Blight",
    crop: "Rice / Maize",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80",
    symptoms: ["Water-soaked lesions on leaf blades", "Lesions turn yellow to straw-colored", "Wavy margins along leaf veins"],
    treatment: "Spray Mancozeb fungicide (2.5 g/L). Remove infected leaves. Avoid overwatering and excessive nitrogen application.",
    prevention: "Use disease-free certified seeds. Treat seeds with Carbendazim before sowing."
  },
  {
    id: "leaf_spot",
    name: "Leaf Spot",
    crop: "Groundnut / Cotton",
    image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=600&q=80",
    symptoms: ["Circular dark brown to black spots with yellow halos", "Premature defoliation", "Stunted growth"],
    treatment: "Use Copper Oxychloride (3 g/L) or Carbendazim (1 g/L). Maintain field hygiene. Improve drainage.",
    prevention: "Practice crop rotation. Destroy crop residues after harvest. Ensure adequate row spacing."
  },
  {
    id: "powdery_mildew",
    name: "Powdery Mildew",
    crop: "Wheat / Vegetables",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80",
    symptoms: ["White powdery fungal patches on upper leaf surface", "Curling and yellowing of foliage", "Premature leaf fall"],
    treatment: "Spray wettable Sulfur (3 g/L) or Hexaconazole 5% EC (2 ml/L). Ensure good airflow between plants.",
    prevention: "Avoid overhead watering. Plant in areas receiving full sunlight."
  },
  {
    id: "stem_rot",
    name: "Stem / Collar Rot",
    crop: "Cotton / Groundnut / Tomato",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80",
    symptoms: ["Dark lesions at collar region near soil line", "Wilting of plants in patches", "Fungal mycelium growth at stem base"],
    treatment: "Drench soil around plants with Trichoderma viride or Carbendazim (2 g/L). Keep soil well-aerated.",
    prevention: "Avoid deep planting. Ensure raised beds in heavy clay soils. Apply organic neem cake."
  }
];
