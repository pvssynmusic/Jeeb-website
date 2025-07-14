import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-Vn6ASZWrrPFoBNHVij3lPl8_XhNdd9U",
  authDomain: "jeeb-3a9b3.firebaseapp.com",
  projectId: "jeeb-3a9b3",
  storageBucket: "jeeb-3a9b3.firebasestorage.app",
  messagingSenderId: "40613331373",
  appId: "1:40613331373:web:e82619d0d0c2448a382124",
  measurementId: "G-9JXPQ8K3MV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;