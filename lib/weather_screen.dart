import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
class WeatherScreen extends StatefulWidget {
  const WeatherScreen({super.key});

  @override
  State<WeatherScreen> createState() => _WeatherScreenState();
}

class _WeatherScreenState extends State<WeatherScreen> {
final TextEditingController cityController = TextEditingController();

String temperature = "--";
String humidity = "--";
String condition = "--";
String advice = "Search a city to get farmer advice.";
String crops = "";
List forecast = [];
String getFarmerAdvice(String condition, double temp) {
condition = condition.toLowerCase();

if (condition.contains("rain")) {
return "🌧️ Rain expected. Avoid spraying pesticides and ensure proper drainage.";
} else if (condition.contains("cloud")) {
return "☁️ Cloudy weather. Good time for sowing and transplanting.";
} else if (condition.contains("clear")) {
return "☀️ Clear weather. Irrigate crops if the soil is dry.";
} else if (temp > 35) {
return "🔥 High temperature. Water crops during morning or evening.";
} else if (temp < 15) {
return "🥶 Low temperature. Protect sensitive crops from cold.";
} else {
return "🌱 Weather is suitable for normal farming activities.";
}
}
String getCropRecommendation(String condition, double temp) {
condition = condition.toLowerCase();

if (condition.contains("rain")) {
return """
🌾 Rice
🌱 Sugarcane
🫚 Turmeric
🥬 Vegetables
""";
} else if (condition.contains("cloud")) {
if (temp >= 25 && temp <= 32) {
return """
🌾 Rice
🌽 Maize
🌾 Ragi
🥜 Groundnut
""";
} else {
return """
🌽 Maize
🌾 Ragi
🥜 Groundnut
""";
}
} else if (condition.contains("clear")) {
if (temp > 35) {
return """
🌻 Sunflower
🌿 Cotton
🌱 Millets
""";
} else {
return """
🌽 Maize
🌾 Rice
🥜 Groundnut
🌻 Sunflower
""";
}
} else {
return """
🌾 Rice
🌽 Maize
🌾 Ragi
""";
}
}
String getRainAlert(String condition) {
  condition = condition.toLowerCase();

  if (condition.contains("rain") ||
      condition.contains("drizzle") ||
      condition.contains("thunderstorm")) {
    return "🌧️ Rain Alert!\nAvoid pesticide spraying.\nEnsure proper drainage.";
  }

  return "✅ No rain expected.";
}
String getRainAlertFromForecast() {
  for (var item in forecast) {
    final weather = item["weather"][0]["main"].toString().toLowerCase();

    if (weather.contains("rain") ||
        weather.contains("drizzle") ||
        weather.contains("thunderstorm")) {
      return "🌧️ Rain expected in the next few hours.\nAvoid pesticide spraying and harvesting.";
    }
  }

  return "✅ No rain expected in the next few hours.";
}
Future<void> getWeather() async {
  try {
    String city = cityController.text.trim();

    if (city.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text("Please enter a city")),
      );
      return;
    }

    const apiKey = "f6aded3d7785deb787d9e8bcd3e0b5aa";

    final url = Uri.parse(
      "https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey&units=metric",
    );

    final response = await http.get(url);

    print(response.statusCode);
    print(response.body);

    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);

      setState(() {
        temperature = data["main"]["temp"].toString();
        humidity = data["main"]["humidity"].toString();
        condition = data["weather"][0]["main"];

        advice = getFarmerAdvice(
          condition,
          double.parse(temperature),
        );

        crops = getCropRecommendation(
          condition,
          double.parse(temperature),
        );
      });

      await getForecast(city);
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(response.body)),
      );
    }
  } catch (e) {
    print(e);

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(e.toString())),
    );
  }
}
Future<void> getForecast(String city) async {
  const apiKey = "f6aded3d7785deb787d9e8bcd3e0b5aa";

  final url = Uri.parse(
    "https://api.openweathermap.org/data/2.5/forecast?q=$city&appid=$apiKey&units=metric",
  );

  final response = await http.get(url);

  if (response.statusCode == 200) {
    final data = jsonDecode(response.body);

    setState(() {
      forecast = data["list"];
    });
  }
}
@override
Widget build(BuildContext context) {
  return Scaffold(
    appBar: AppBar(
      title: const Text("🌦️ KrishiGuru Weather"),
      backgroundColor: Colors.green,
    ),
    body: SingleChildScrollView(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            TextField(
              controller: cityController,
              decoration: const InputDecoration(
                labelText: "Enter City",
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 20),

            ElevatedButton(
              onPressed: getWeather,
              child: const Text("Get Weather"),
            ),


            const SizedBox(height: 20),

            Card(
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  children: [
                    const Text(
                      "Weather Information",
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 10),
                    Text("🌡️ Temperature: $temperature °C"),
                    Text("💧 Humidity: $humidity %"),
                    Text("☁️ Condition: $condition"),
                    const SizedBox(height: 15),

                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        color: condition.toLowerCase().contains("rain")
                            ? Colors.red.shade100
                            : Colors.green.shade100,
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Text(
                        getRainAlertFromForecast(),
                        style: const TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),

                    Text(
                      "👨‍🌾 Farmer Advice",
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: Colors.green,
                      ),
                    ),

                    const SizedBox(height: 8),

                    Text(
                      advice,
                      textAlign: TextAlign.center,
                    ),
                    const SizedBox(height: 20),

                    const Text(
                      "🌾 Recommended Crops",
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: Colors.green,
                      ),
                    ),

                    const SizedBox(height: 8),

                    Text(
                      crops,
                      textAlign: TextAlign.center,
                      style: const TextStyle(fontSize: 16),
                    ),
                    const SizedBox(height: 20),

                    const Text(
                      "📅 7-Day Forecast",
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: Colors.green,
                      ),
                    ),

                    const SizedBox(height: 10),

                    SizedBox(
                      height: 200,
                      child: ListView.builder(
                        itemCount: forecast.length > 7 ? 7 : forecast.length,
                        itemBuilder: (context, index) {
                          final item = forecast[index];

                          return Card(
                            child: ListTile(
                              leading: const Icon(Icons.cloud),
                              title: Text(item["dt_txt"]),
                              trailing: Text("${item["main"]["temp"]} °C"),
                            ),
                          );
                        },
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    ),
  );
}
}