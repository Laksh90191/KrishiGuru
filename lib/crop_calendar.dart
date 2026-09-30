import 'package:flutter/material.dart';

class CropCalendarScreen extends StatefulWidget {
  const CropCalendarScreen({super.key});

  @override
  State<CropCalendarScreen> createState() => _CropCalendarScreenState();
}

class _CropCalendarScreenState extends State<CropCalendarScreen> {
  String? crop;

  String calendar = "";

  final List<String> crops = [
    "Rice",
    "Maize",
    "Wheat",
    "Cotton",
    "Groundnut",
    "Sugarcane",
  ];

  void showCalendar() {
    if (crop == null) {
      setState(() {
        calendar = "⚠ Please select a crop.";
      });
      return;
    }

    switch (crop) {
      case "Rice":
        calendar = """
🌾 Rice Crop Calendar

🌱 June - Nursery Preparation
🌾 July - Transplanting
💧 August - Irrigation
🌿 September - Fertilizer Application
🌾 October - Harvest
""";
        break;

      case "Maize":
        calendar = """
🌽 Maize Crop Calendar

🌱 June - Sowing
💧 July - Irrigation
🌿 August - Fertilizer
🌾 September - Harvest
""";
        break;

      case "Wheat":
        calendar = """
🌾 Wheat Crop Calendar

🌱 November - Sowing
💧 December - Irrigation
🌿 January - Fertilizer
🌾 March - Harvest
""";
        break;

      case "Cotton":
        calendar = """
🌿 Cotton Crop Calendar

🌱 June - Sowing
💧 July - Irrigation
🌿 August - Fertilizer
🌾 November - Harvest
""";
        break;

      case "Groundnut":
        calendar = """
🥜 Groundnut Crop Calendar

🌱 June - Sowing
💧 July - Irrigation
🌿 August - Gypsum Application
🌾 October - Harvest
""";
        break;

      case "Sugarcane":
        calendar = """
🌱 Sugarcane Crop Calendar

🌱 January - Planting
💧 February - Irrigation
🌿 March - Fertilizer
🌾 December - Harvest
""";
        break;
    }

    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("📅 Crop Calendar"),
        backgroundColor: Colors.green,
      ),
      body: Padding(
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

            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: showCalendar,
                child: const Text("Show Calendar"),
              ),
            ),

            const SizedBox(height: 20),

            Card(
              elevation: 5,
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Text(
                  calendar,
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