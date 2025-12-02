// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPX0XZ7hvmVWp1lqdt3Az9tC3QwSnB_To",
  authDomain: "app-a0491.firebaseapp.com",
  projectId: "app-a0491",
  storageBucket: "app-a0491.firebasestorage.app",
  messagingSenderId: "100173126868",
  appId: "1:100173126868:web:bce5f2f112ed7e6eca2f41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export { app, auth, provider, db, timestamp };