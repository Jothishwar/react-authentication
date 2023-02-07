import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDwnHQlSabVLCrQo6NG0akxKvFWf3T79Q",
  authDomain: "hackathon-f7ea8.firebaseapp.com",
  projectId: "hackathon-f7ea8",
  storageBucket: "hackathon-f7ea8.appspot.com",
  messagingSenderId: "18139969697",
  appId: "1:18139969697:web:c79c8274364a07bacd98e0",
  measurementId: "G-CZM6RHWH4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app;