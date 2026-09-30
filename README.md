# 🌾 KrishiGuru (ಕೃಷಿಗುರು)

An agricultural advisory platform rewritten as a high-performance React SPA with TypeScript and Tailwind CSS, preserving all core features and business logic from the original mobile application.

## Key Features

1. **🌦️ Weather & Agro-Advisory (`WeatherScreen`)**:
   - Live weather lookup for Indian/Karnataka farming districts (temperature, humidity, condition).
   - Real-time rain alerts (`getRainAlertFromForecast`) with pesticide & harvesting cautions.
   - Tailored farmer operational advice (`getFarmerAdvice`) based on temperature and precipitation.
   - Climate-based crop recommendations (`getCropRecommendation`) and multi-hour forecasts.

2. **🌱 Soil Health Analysis (`SoilScreen`)**:
   - Diagnostic analysis of soil pH level and NPK (Nitrogen, Phosphorus, Potassium) levels.
   - Immediate feedback on acidic, alkaline, or balanced conditions.
   - Actionable remediation advice (agricultural lime, gypsum, organic matter, and specific fertilizers).

3. **🧪 Fertilizer Recommendation (`FertilizerScreen`)**:
   - Scientific fertilizer schedules for crops including Rice, Maize, Wheat, Cotton, Groundnut, and Sugarcane.
   - Specific dosages of Urea, DAP, MOP, Potash, Gypsum, and Single Super Phosphate (SSP).
   - Dynamic acreage calculator to determine exact quantities and 50kg bag counts for farm plots.

4. **🌾 Crop Recommendation (`CropRecommendationScreen`)**:
   - Multi-criteria crop matching based on soil type (Black, Red, Clay, Sandy, Alluvial) and season (Kharif, Rabi, Summer).
   - Comprehensive agronomic profiles including sowing windows, harvest periods, irrigation requirements, and common pests.

5. **📅 Crop Calendar (`CropCalendarScreen`)**:
   - Lifecycle timeline detailing month-by-month operational milestones: nursery preparation, sowing, irrigation, fertilizer top-dressing, and harvesting.
   - Interactive visual roadmap for primary commercial and food crops.

6. **🐛 Disease Detection (`DiseaseScreen`)**:
   - Visual leaf disease identification (Leaf Blight, Leaf Spot, Powdery Mildew, Stem Rot) via device camera or gallery upload.
   - Built-in sample leaf library for immediate testing in desktop and mobile browsers.
   - Detailed treatment procedures, fungicide spray instructions (Mancozeb, Copper Oxychloride, etc.), and preventive field hygiene guidelines.

7. **📈 Market Prices (`MarketScreen`)**:
   - Live APMC Mandi rates across Karnataka (Yeshwanthpur, Mysuru, Mandya, Davanagere, Hassan, Chitradurga, Byadgi) and national centers (Chennai, Delhi, Coimbatore, Madurai, Salem).
   - Real-time search by crop name or mandi and price trend tracking.

8. **🛡️ Pesticides Guide (`PesticidesScreen`)**:
   - Targeted chemical management for common crop pests (Stem Borer, Brown Planthopper, Aphids, Pink Bollworm, Fruit Borer, Thrips, Fall Armyworm, Leaf Miner).
   - Accurate dosage per liter of water, application technique (foliar spray, root zone), and safety precautions.

9. **🧮 Yield & Profit Calculator (`YieldProfitScreen`)**:
   - Production estimation (Land Area in Acres × Expected Yield in Quintals/Acre).
   - Gross revenue projection based on current mandi rates.
   - Net profit and expenditure margin breakdown.

10. **🌐 Bilingual Language Support**:
    - Full support for English and Kannada (ಕನ್ನಡ) across all screens and user interface elements.

## Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Tooling**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans & Noto Sans Kannada

## Development

```bash
# Install dependencies
npm install

# Start development server on port 3000
npm run dev

# Production build
npm run build
```
