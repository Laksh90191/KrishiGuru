import 'package:flutter/material.dart';

class CropRecommendationScreen extends StatefulWidget {
  const CropRecommendationScreen({super.key});

  @override
  State<CropRecommendationScreen> createState() =>
      _CropRecommendationScreenState();
}

class _CropRecommendationScreenState
    extends State<CropRecommendationScreen> {

  String? soilType;
  String? season;

  String result = "";

  final List<String> soils = [
    "Black",
    "Red",
    "Clay",
    "Sandy",
    "Alluvial"
  ];

  final List<String> seasons = [
    "Kharif",
    "Rabi",
    "Summer"
  ];

  void recommendCrop() {

    if (soilType == "Black" && season == "Kharif") {
      result = "🌱 Cotton";
    } else if (soilType == "Clay" && season == "Kharif") {
      result = "🌾 Rice";
    } else if (soilType == "Alluvial" && season == "Rabi") {
      result = "🌾 Wheat";
    } else if (soilType == "Red" && season == "Kharif") {
      result = "🌽 Maize";
    } else if (soilType == "Sandy") {
      result = "🥜 Groundnut";
    } else {
      result = "🌿 No recommendation found";
    }

    setState(() {});
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: const Text("Crop Recommendation"),
        backgroundColor: Colors.green,
      ),

      body: Padding(
        padding: const EdgeInsets.all(20),

        child: Column(
          children: [

            DropdownButtonFormField<String>(
              decoration: const InputDecoration(
                labelText: "Select Soil Type",
                border: OutlineInputBorder(),
              ),
              value: soilType,
              items: soils.map((soil) {
                return DropdownMenuItem(
                  value: soil,
                  child: Text(soil),
                );
              }).toList(),
              onChanged: (value) {
                soilType = value;
              },
            ),

            const SizedBox(height: 20),

            DropdownButtonFormField<String>(
              decoration: const InputDecoration(
                labelText: "Select Season",
                border: OutlineInputBorder(),
              ),
              value: season,
              items: seasons.map((item) {
                return DropdownMenuItem(
                  value: item,
                  child: Text(item),
                );
              }).toList(),
              onChanged: (value) {
                season = value;
              },
            ),

            const SizedBox(height: 30),

            ElevatedButton(
              onPressed: recommendCrop,
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.green,
                minimumSize: const Size(double.infinity, 55),
              ),
              child: const Text(
                "Recommend Crop",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 18,
                ),
              ),
            ),

            const SizedBox(height: 30),

            Text(
              result,
              style: const TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
                color: Colors.green,
              ),
            ),

          ],
        ),
      ),
    );
  }
}