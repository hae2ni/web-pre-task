// importScripts("https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/9.5.0/firebase-messaging.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");
const firebaseConfig = {
  apiKey: "AIzaSyDNyoLsnDzmay7XS2uB_CIIwuKGx26ZeRk",
  authDomain: "pre-gwasuoneshot.firebaseapp.com",
  projectId: "pre-gwasuoneshot",
  storageBucket: "pre-gwasuoneshot.appspot.com",
  messagingSenderId: "137792399262",
  appId: "1:137792399262:web:9674770e2ca7cb6212988f",
  measurementId: "G-T2QDBQ3LHT",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// self.addEventListener("install", function (e) {
//   console.log("fcm sw install,,,");
//   self.skipWaiting();
// });

// self.addEventListener("activate", function (e) {
//   console.log("fcm sw activate,,,");
// });

// self.addEventListener("push", function (e) {
//   console.log("push:", e.data.json());
//   if (!e.data.json()) return;

//   const resultData = e.data.json().notification;
//   const notificationTitle = resultData.title;
//   const notificationOptions = {
//     body: resultData.body,
//     ...resultData,
//   };
//   console.log("push", { resultData, notificationTitle, notificationOptions });

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

// self.addEventListener("notificationclick", function (e) {
//   console.log("notification click");

//   const url = "/";
//   e.notification.close();
//   e.waitUntil(clients.openWindow(url));
// });

messaging.onBackgroundMessage(messaging, (payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);

  // Customize notification here
  const notificationTitle = "Tutice";
  const notificationOptions = {
    body: payload,
    icon: "/fruit.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
