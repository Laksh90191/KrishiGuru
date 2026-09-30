import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class PesticidesScreen extends StatefulWidget {
  const PesticidesScreen({super.key});

  @override
  State<PesticidesScreen> createState() => _PesticidesScreenState();
}

class _PesticidesScreenState extends State<PesticidesScreen> {
  List pesticides = [];
  List filtered = [];

  @override
  void initState() {
    super.initState();
    loadData();
  }

  Future loadData() async {
    final String response =
    await rootBundle.loadString('assets/data/pesticides.json');

    final data = json.decode(response);

    setState(() {
      pesticides = data;
      filtered = data;
    });
  }

  void search(String value) {
    setState(() {
      filtered = pesticides.where((item) {
        return item["crop"]
            .toString()
            .toLowerCase()
            .contains(value.toLowerCase());
      }).toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Pesticides"),
        backgroundColor: Colors.green,
      ),
      body: Column(
        children: [

          Padding(
            padding: const EdgeInsets.all(10),
            child: TextField(
              decoration: const InputDecoration(
                hintText: "Search Crop...",
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

                var item = filtered[index];

                return Card(
                  margin: const EdgeInsets.all(10),
                  child: ListTile(
                    title: Text(item["crop"]),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [

                        Text("Pest: ${item["pest"]}"),

                        Text("Pesticide: ${item["pesticide"]}"),

                        Text("Dose: ${item["dose"]}"),

                        Text("Application: ${item["application"]}"),

                        Text("Safety: ${item["safety"]}"),

                      ],
                    ),
                  ),
                );
              },
            ),
          ),

        ],
      ),
    );
  }
}