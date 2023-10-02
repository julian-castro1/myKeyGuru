import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Correct import for auth

const firebaseConfig = {
  apiKey: "AIzaSyAn_SkLnssBEe-QzjBnwb6i_lugiLBZE5U",
  authDomain: "keyguru-46313.firebaseapp.com",
  projectId: "keyguru-46313",
  storageBucket: "keyguru-46313.appspot.com",
  messagingSenderId: "546437253866",
  appId: "1:546437253866:web:72c850b6e3524ae5756593",
  measurementId: "G-K3CVELQ0NX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // Correct way to get auth instance
