// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-auth-4e961.firebaseapp.com",
  projectId: "mern-auth-4e961",
  storageBucket: "mern-auth-4e961.appspot.com",
  messagingSenderId: "867713636973",
  appId: "1:867713636973:web:a77a3ce7dcb1bab2e6fd64"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);