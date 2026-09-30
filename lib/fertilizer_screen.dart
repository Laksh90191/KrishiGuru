import 'package:flutter/material.dart';

class FertilizerScreen extends StatefulWidget {
  const FertilizerScreen({super.key});

  @override
  State<FertilizerScreen> createState() => _FertilizerScreenState();
}

class _FertilizerScreenState extends State<FertilizerScreen> {
  String? crop;
  String? soil;

  String recommendation = "";

  final List<String> crops = [
    "Rice",
    "Maize",
    "Wheat",
    "Cotton",
    "Groundnut",
    "Sugarcane",
  ];

  final List<String> soils = [
    "Black Soil",
    "Red Soil",
    "Clay Soil",
    "Sandy Soil",
    "Loamy Soil",
  ];

  void recommendFertilizer() {
    if (crop == null || soil == null) {
      setState(() {
        recommendation =
        "⚠ Please select both Crop and Soil Type.";
      });
      return;
    }

    if (crop == "Rice") {
      recommendation = """
🌾 Crop: Rice

✅ Urea - 50 kg/acre
✅ DAP - 25 kg/acre
✅ MOP - 20 kg/acre

💧 Apply after irrigation.
""";
    } else if (crop == "Maize") {
      recommendation = """
🌽 Crop: Maize

✅ Urea - 45 kg/acre
✅ DAP - 20 kg/acre
✅ Potash - 15 kg/acre
""";
    } else if (crop == "Wheat") {
      recommendation = """
🌾 Crop: Wheat

✅ Urea - 40 kg/acre
✅ DAP - 20 kg/acre
""";
    } else if (crop == "Cotton") {
      recommendation = """
🌿 Crop: Cotton

✅ Urea - 35 kg/acre
✅ Potash - 25 kg/acre
""";
    } else if (crop == "Groundnut") {
      recommendation = """
🥜 Crop: Groundnut

✅ Gypsum - 200 kg/acre
✅ SSP - 25 kg/acre
""";
    } else if (crop == "Sugarcane") {
      recommendation = """
🌱 Crop: Sugarcane

✅ Urea - 75 kg/acre
✅ DAP - 30 kg/acre
✅ Potash - 25 kg/acre
""";
    }

    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("🧪 Fertilizer Recommendation"),
        backgroundColor: Colors.green,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [

            DropdownButtonFormField<String>(
              decoration: const InputDecoration(
                labelText: "Select Crop",
                border: OutlineInputBorder(),
              ),
              value: crop,
              items: crops.map((item) {
                return DropdownMenuItem(
                  value: item,
                  child: Text(item),
                );
              }).toList(),
              onChanged: (value) {
                setState(() {
                  crop = value;
                });
              },
            ),

            const SizedBox(height: 20),

            DropdownButtonFormField<String>(
              decoration: const InputDecoration(
                labelText: "Select Soil Type",
                border: OutlineInputBorder(),
              ),
              value: soil,
              items: soils.map((item) {
                return DropdownMenuItem(
                  value: item,
                  child: Text(item),
                );
              }).toList(),
              onChanged: (value) {
                setState(() {
                  soil = value;
                });
              },
            ),

            const SizedBox(height: 25),

            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: recommendFertilizer,
                child: const Text("Get Recommendation"),
              ),
            ),

            const SizedBox(height: 25),

            Card(
              elevation: 4,
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Text(
                  recommendation,
                  style: const TextStyle(
                    fontSize: 18,
                    color: Colors.green,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}