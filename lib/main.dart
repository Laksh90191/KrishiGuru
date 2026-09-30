import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter/material.dart';
import 'home_screen.dart';

void main() {
  runApp(const KrishiGuruApp());
}

class KrishiGuruApp extends StatelessWidget {
  const KrishiGuruApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,

      // English as default
      locale: const Locale('en'),

      supportedLocales: const [
        Locale('en'),
        Locale('kn'),
      ],

      localizationsDelegates: const [
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],

      home: const HomeScreen(),
    );
  }
}