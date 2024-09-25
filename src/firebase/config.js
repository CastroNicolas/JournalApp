// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlT0MzmD5Z_AzuXQCFgZz6ICF-E_OrA-4",
  authDomain: "journalapp-c20a7.firebaseapp.com",
  projectId: "journalapp-c20a7",
  storageBucket: "journalapp-c20a7.appspot.com",
  messagingSenderId: "141747487107",
  appId: "1:141747487107:web:2668f95108e22e8208f6b6",
  measurementId: "G-QPGBG0FMRR",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
