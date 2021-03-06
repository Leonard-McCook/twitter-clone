// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-clone-5207e.firebaseapp.com",
  projectId: "twitter-clone-5207e",
  storageBucket: "twitter-clone-5207e.appspot.com",
  messagingSenderId: "592567156588",
  appId: "1:592567156588:web:b382149751d7def5b47d49"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export{ app, db, storage }
