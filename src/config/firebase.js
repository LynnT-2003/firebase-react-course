// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoicM0wDMODq64kvbtipl5RhpaOgMODlo",
  authDomain: "react-firebase-course-7c52e.firebaseapp.com",
  projectId: "react-firebase-course-7c52e",
  storageBucket: "react-firebase-course-7c52e.appspot.com",
  messagingSenderId: "816752401667",
  appId: "1:816752401667:web:9452e9d9f13b694988dd36",
  measurementId: "G-RM0VC5117V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
