// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9GyNioQJV6vOQN5XmwOFTMdncWQhUCHM",
  authDomain: "cinegpt-react.firebaseapp.com",
  projectId: "cinegpt-react",
  storageBucket: "cinegpt-react.firebasestorage.app",
  messagingSenderId: "788496254946",
  appId: "1:788496254946:web:8c2fceb04426a43a0e9bbb",
  measurementId: "G-V76Y9EEWMG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
