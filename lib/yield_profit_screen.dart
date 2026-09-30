import 'package:flutter/material.dart';

class YieldProfitScreen extends StatefulWidget {
  const YieldProfitScreen({super.key});

  @override
  State<YieldProfitScreen> createState() => _YieldProfitScreenState();
}

class _YieldProfitScreenState extends State<YieldProfitScreen> {
  final TextEditingController areaController = TextEditingController();
  final TextEditingController yieldController = TextEditingController();
  final TextEditingController priceController = TextEditingController();

  double production = 0;
  double income = 0;

  void calculate() {
    double area = double.tryParse(areaController.text) ?? 0;
    double yieldPerAcre = double.tryParse(yieldController.text) ?? 0;
    double price = double.tryParse(priceController.text) ?? 0;

    setState(() {
      production = area * yieldPerAcre;
      income = production * price;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Yield & Profit Calculator"),
        backgroundColor: Colors.green,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: ListView(
          children: [
            TextField(
              controller: areaController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: "Land Area (Acres)",
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 15),

            TextField(
              controller: yieldController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: "Expected Yield (Quintals/Acre)",
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 15),

            TextField(
              controller: priceController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: "Market Price (₹/Quintal)",
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 20),

            ElevatedButton(
              onPressed: calculate,
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.green,
              ),
              child: const Text(
                "Calculate",
                style: TextStyle(color: Colors.white),
              ),
            ),

            const SizedBox(height: 30),

            Card(
              elevation: 5,
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  children: [
                    Text(
                      "Total Production",
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(
                      "${production.toStringAsFixed(2)} Quintals",
                      style: TextStyle(fontSize: 22, color: Colors.green),
                    ),
                    SizedBox(height: 20),
                    Text(
                      "Estimated Income",
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(
                      "₹ ${income.toStringAsFixed(2)}",
                      style: TextStyle(fontSize: 24, color: Colors.blue),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}