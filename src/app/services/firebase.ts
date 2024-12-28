// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the authentication module

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB-DUdC2qzLiKggaWjhHFCGETCqudPV9E",
  authDomain: "wct-buyme.firebaseapp.com",
  projectId: "wct-buyme",
  storageBucket: "wct-buyme.appspot.com",
  messagingSenderId: "352574304072",
  appId: "1:352574304072:web:c0d201a1e3fb1d12648d7d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app); // Export the auth instance for use in your app

export { app, auth };

//
