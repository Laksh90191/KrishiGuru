import 'package:flutter/material.dart';

class MarketScreen extends StatefulWidget {
  const MarketScreen({super.key});

  @override
  State<MarketScreen> createState() => _MarketScreenState();
}

class _MarketScreenState extends State<MarketScreen> {

  final List<Map<String, String>> marketData = [
    {
      "crop": "Rice",
      "market": "Chennai",
      "price": "₹2400 / Quintal"
    },
    {
      "crop": "Wheat",
      "market": "Delhi",
      "price": "₹2600 / Quintal"
    },
    {
      "crop": "Cotton",
      "market": "Coimbatore",
      "price": "₹7200 / Quintal"
    },
    {
      "crop": "Tomato",
      "market": "Madurai",
      "price": "₹1800 / Quintal"
    },
    {
      "crop": "Onion",
      "market": "Salem",
      "price": "₹2200 / Quintal"
    }
  ];

  List<Map<String, String>> filtered = [];

  @override
  void initState() {
    super.initState();
    filtered = marketData;
  }

  void search(String value) {
    setState(() {
      filtered = marketData.where((item) {
        return item["crop"]!
            .toLowerCase()
            .contains(value.toLowerCase());
      }).toList();
    });
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: const Text("Market Prices"),
        backgroundColor: Colors.green,
      ),

      body: Column(
        children: [

          Padding(
            padding: const EdgeInsets.all(12),
            child: TextField(
              decoration: const InputDecoration(
                hintText: "Search Crop",
                prefixIcon: Icon(Icons.search),
                border: OutlineInputBorder(),
              ),
              onChanged: search,
            ),
          ),

          Expanded(
            child: ListView.builder(
              itemCount: filtered.length,
              itemBuilder: (context, index) {

                final item = filtered[index];

                return Card(
                  margin: const EdgeInsets.all(8),
                  child: ListTile(
                    leading: const Icon(
                      Icons.agriculture,
                      color: Colors.green,
                    ),
                    title: Text(item["crop"]!),
                    subtitle: Text(item["market"]!),
                    trailing: Text(
                      item["price"]!,
                      style: const TextStyle(
                        color: Colors.green,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                );
              },
            ),
          )

        ],
      ),
    );
  }
}