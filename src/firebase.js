import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALfKtJYs_cNcF0tavrzMrIWMw-HPaJgJc",
  authDomain: "react-resume-builder-app.firebaseapp.com",
  projectId: "react-resume-builder-app",
  storageBucket: "react-resume-builder-app.appspot.com",
  messagingSenderId: "672813000491",
  appId: "1:672813000491:web:d89e13ba543c6ac6b3076e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {app, auth, db}; 