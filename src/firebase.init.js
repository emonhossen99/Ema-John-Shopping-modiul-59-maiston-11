// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUKsXjN6pAMLQ-7pfzVR82UOACKtTdwt0",
  authDomain: "ema-john-shopping-7a1fb.firebaseapp.com",
  projectId: "ema-john-shopping-7a1fb",
  storageBucket: "ema-john-shopping-7a1fb.appspot.com",
  messagingSenderId: "97134394114",
  appId: "1:97134394114:web:c897c36a51151fbb32e01b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
