// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ2bb_D-ORqJOND_E_3gSWvPdqVwtqIhM",
  authDomain: "soga-chat.firebaseapp.com",
  projectId: "soga-chat",
  storageBucket: "soga-chat.firebasestorage.app",
  messagingSenderId: "221305897238",
  appId: "1:221305897238:web:8686266bb6a728bcf4d037",
  measurementId: "G-PE9M16Q8QM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
