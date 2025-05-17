// Firebase compat SDKs (must be loaded via script tags in your HTML before this file)
// Example: 
// <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ2bb_D-ORqJOND_E_3gSWvPdqVwtqIhM",
  authDomain: "soga-chat.firebaseapp.com",
  projectId: "soga-chat",
  storageBucket: "soga-chat.appspot.com", // Fixed typo here from "firebasestorage.app"
  messagingSenderId: "221305897238",
  appId: "1:221305897238:web:8686266bb6a728bcf4d037",
  measurementId: "G-PE9M16Q8QM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Firebase services
const auth = firebase.auth();
const db = firebase.firestore();

// Expose to global scope if needed
window.auth = auth;
window.db = db;
