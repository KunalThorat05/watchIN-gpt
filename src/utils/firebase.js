// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-BVYOkbZ0EIHFV3fqFdOR9Cj8vNQX8Ms",
  authDomain: "netflixgpt-951e8.firebaseapp.com",
  projectId: "netflixgpt-951e8",
  storageBucket: "netflixgpt-951e8.appspot.com",
  messagingSenderId: "1097777254094",
  appId: "1:1097777254094:web:29e5d6c5031a480f27ca9f",
  measurementId: "G-HJPBV716C4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
console.log("auth----", auth);
