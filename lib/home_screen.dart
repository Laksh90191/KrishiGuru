import 'package:flutter/material.dart';
import 'weather_screen.dart';
import 'soil_screen.dart';
import 'fertilizer_screen.dart';
import 'crop_calendar.dart';
import 'disease_screen.dart';
import 'market_screen.dart';
import 'crop_recommendation_screen.dart';
import 'pesticides_screen.dart';
import 'yield_profit_screen.dart';
class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  Widget buildCard(
      BuildContext context,
      IconData icon,
      String title,
      VoidCallback onTap,
      ) {
    return GestureDetector(
      onTap: onTap,
      child: Card(
        elevation: 5,
        child: Container(
          height: 120,
          alignment: Alignment.center,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(icon, size: 40, color: Colors.green),
              const SizedBox(height: 10),
              Text(
                title,
                textAlign: TextAlign.center,
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 15,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("🌾 KrishiGuru"),
        backgroundColor: Colors.green,
        actions: [
          PopupMenuButton<String>(
            icon: const Icon(Icons.language),
            onSelected: (value) {
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(content: Text("Selected: $value")),
              );
            },
            itemBuilder: (context) => const [
              PopupMenuItem(
                value: "English",
                child: Text("English"),
              ),
              PopupMenuItem(
                value: "Kannada",
                child: Text("ಕನ್ನಡ"),
              ),
            ],
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(12),
        child: GridView.count(
          crossAxisCount: 2,
          crossAxisSpacing: 12,
          mainAxisSpacing: 12,
          children: [

            buildCard(
              context,
              Icons.cloud,
              "Weather",
                  () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => const WeatherScreen(),
                  ),
                );
              },
            ),

            buildCard(
              context,
              Icons.grass,
              "Soil Health",
                  () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => const SoilScreen(),
                  ),
                );
              },
            ),

            buildCard(
              context,
              Icons.science,
              "Fertilizer",
                  () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => const FertilizerScreen(),
                  ),
                );
              },
            ),

            buildCard(
              context,
              Icons.agriculture,
              "Crop Recommendation",
                  () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => const CropRecommendationScreen(),
                  ),
                );
              },
            ),

            buildCard(
              context,
              Icons.calendar_month,
              "Crop Calendar",
                  () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => const CropCalendarScreen(),
                  ),
                );
              },
            ),

            buildCard(
              context,
              Icons.bug_report,
              "Disease Detection",
                  () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => const DiseaseScreen(),
                  ),
                );
              },
            ),

            buildCard(
              context,
              Icons.show_chart,
              "Market Prices",
                  () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => const MarketScreen(),
                  ),
                );
              },
            ),
            buildCard(
              context,
              Icons.local_florist,
              "Pesticides",
                  () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => const PesticidesScreen(),
                  ),
                );
              },
            ),
            buildCard(
              context,
              Icons.calculate,
              "Yield & Profit",
                  () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (_) => YieldProfitScreen(),
                  ),
                );
              },
            ),

          ],
        ),
      ),
    );
  }
}