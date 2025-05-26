// web/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAF0nxj7DWM-7s8IY5zVWCNC3OO7GglD6U",
  authDomain: "shipment-app-7f6c3.firebaseapp.com",
  projectId: "shipment-app-7f6c3",
  storageBucket: "shipment-app-7f6c3.firebasestorage.app",
  messagingSenderId: "921805432727",
  appId: "1:921805432727:web:84a4da92951a02f7a286d2",
});

const messaging = firebase.messaging();
