// Importa i configura Firebase
import { initializeApp } from 'https://aistudiocdn.com/firebase@12.5.0/app.js';
import { getMessaging, onBackgroundMessage } from 'https://aistudiocdn.com/firebase@12.5.0/messaging-sw.js';

// ATENCIÓ: Aquesta configuració ha de ser la mateixa que la del teu fitxer firebase.ts
const firebaseConfig = {
  apiKey: "AIzaSyDgTGIPoHLYy9rfdpiQo07Y7F-1ytphaQM",
  authDomain: "botiga-35dc0.firebaseapp.com",
  projectId: "botiga-35dc0",
  storageBucket: "botiga-35dc0.firebasestorage.app",
  messagingSenderId: "671047302164",
  appId: "1:671047302164:web:2cc6065f3055dbd8fdbb01",
  measurementId: "G-C3X8Y6GG88"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Gestiona els missatges rebuts quan l'aplicació està en segon pla o tancada
onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Missatge rebut en segon pla.', payload);

  const notificationTitle = payload.notification?.title || 'Nova notificació';
  const notificationOptions = {
    body: payload.notification?.body || 'Has rebut un nou missatge.',
    icon: '/favicon.ico' // Pots canviar-ho per una icona personalitzada
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});