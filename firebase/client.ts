// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKfOtmlaUQJLIPv0ReiYG6-ms4ssVwkZA",
  authDomain: "intervu-6bf83.firebaseapp.com",
  projectId: "intervu-6bf83",
  storageBucket: "intervu-6bf83.firebasestorage.app",
  messagingSenderId: "24822923369",
  appId: "1:24822923369:web:086f466b535777378d22f8",
  measurementId: "G-VVE1N2HZ0T"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);