import 'package:flutter/material.dart';

class SoilScreen extends StatefulWidget {
  const SoilScreen({super.key});

  @override
  State<SoilScreen> createState() => _SoilScreenState();
}

class _SoilScreenState extends State<SoilScreen> {
  final phController = TextEditingController();
  final nitrogenController = TextEditingController();
  final phosphorusController = TextEditingController();
  final potassiumController = TextEditingController();

  String result = "";

  void checkSoil() {
    double ph = double.tryParse(phController.text) ?? 0;
    int n = int.tryParse(nitrogenController.text) ?? 0;
    int p = int.tryParse(phosphorusController.text) ?? 0;
    int k = int.tryParse(potassiumController.text) ?? 0;

    String advice = "";

    if (ph < 6) {
      advice += "⚠ Soil is acidic.\n";
    } else if (ph > 7.5) {
      advice += "⚠ Soil is alkaline.\n";
    } else {
      advice += "✅ Soil pH is good.\n";
    }

    if (n < 50) advice += "🌱 Nitrogen is low.\n";
    if (p < 30) advice += "🧪 Phosphorus is low.\n";
    if (k < 30) advice += "🌾 Potassium is low.\n";

    if (advice.isEmpty) {
      advice = "✅ Soil is healthy.";
    }

    setState(() {
      result = advice;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("🌱 Soil Health"),
        backgroundColor: Colors.green,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [

            TextField(
              controller: phController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: "pH",
              ),
            ),

            TextField(
              controller: nitrogenController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: "Nitrogen (N)",
              ),
            ),

            TextField(
              controller: phosphorusController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: "Phosphorus (P)",
              ),
            ),

            TextField(
              controller: potassiumController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: "Potassium (K)",
              ),
            ),

            const SizedBox(height: 20),

            ElevatedButton(
              onPressed: checkSoil,
              child: const Text("Analyze Soil"),
            ),

            const SizedBox(height: 20),

            Text(
              result,
              style: const TextStyle(
                fontSize: 18,
                color: Colors.green,
              ),
            ),
          ],
        ),
      ),
    );
  }
}