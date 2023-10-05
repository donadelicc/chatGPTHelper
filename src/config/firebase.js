// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCIJIB1KZvIH4UT4ZmUN7yk1hmHwQ-ETWw",
  authDomain: "chatgptinstructions.firebaseapp.com",
  projectId: "chatgptinstructions",
  storageBucket: "chatgptinstructions.appspot.com",
  messagingSenderId: "450895086920",
  appId: "1:450895086920:web:2204b1d442fda9f7e0df7d",
  measurementId: "G-FW8YSDS7SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth();