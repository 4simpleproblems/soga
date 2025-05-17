// firebase-config.js
// Import the functions you need from the SDKs you need
import { initializeApp }      from "firebase/app";
import { getAnalytics }       from "firebase/analytics";
import { getAuth }            from "firebase/auth";
import { getFirestore }       from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ2bb_D-ORqJOND_E_3gSWvPdqVwtqIhM",
  authDomain: "soga-chat.firebaseapp.com",
  projectId: "soga-chat",
  storageBucket: "soga-chat.appspot.com",
  messagingSenderId: "221305897238",
  appId: "1:221305897238:web:8686266bb6a728bcf4d037",
  measurementId: "G-PE9M16Q8QM"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Optional: analytics
let analytics;
try {
  analytics = getAnalytics(app);
} catch (e) {
  // Analytics can only run in a browser environment
  console.warn("Firebase analytics failed to initialize:", e);
}

// Initialize and export Auth and Firestore
const auth = getAuth(app);
const db   = getFirestore(app);

export { app, analytics, auth, db };
