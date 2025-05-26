import 'package:flutter/material.dart';
import 'package:flutter_notification/pages/fcm.dart';

class Routes {
  static const fcm = '/fcm';
  static Map<String, Widget Function(BuildContext)> routes = {
    fcm: (context) => const FirebaseCloudMessagingMain(),
  };
}