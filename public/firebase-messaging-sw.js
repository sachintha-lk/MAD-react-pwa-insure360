//  // Scripts for firebase and firebase messaging
//  importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
//  importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

//  // Initialize the Firebase app in the service worker by passing the generated config
//  const firebaseConfig = {
//     apiKey: "AIzaSyCzLc7jfFA3RFld-s0WlThm1wa6rHAYzuo",
//     authDomain: "insure-360-pwa.firebaseapp.com",
//     projectId: "insure-360-pwa",
//     storageBucket: "insure-360-pwa.appspot.com",
//     messagingSenderId: "630964880943",
//     appId: "1:630964880943:web:49b8ddc3f3601dd860a8da",
//     measurementId: "G-0VSLJPM7LH"
//   };
  
//  firebase.initializeApp(firebaseConfig);

//  // Retrieve firebase messaging
//  const messaging = firebase.messaging();

//  messaging.onBackgroundMessage(function(payload) {
//    console.log("Received background message ", payload);

//    const notificationTitle = payload.notification.title;
//    const notificationOptions = {
//      body: payload.notification.body,
//    };

//    self.registration.showNotification(notificationTitle, notificationOptions);
//  });