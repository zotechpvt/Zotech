import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_Vf6aB0u2yVDltuq5GsJ-L6vCcnntW0Q",
  authDomain: "zotech-c2a39.firebaseapp.com",
  databaseURL: "https://zotech-c2a39-default-rtdb.firebaseio.com",
  projectId: "zotech-c2a39",
  storageBucket: "zotech-c2a39.appspot.com",
  messagingSenderId: "1028717876287",
  appId: "1:1028717876287:web:7a44c0556dc241294d948a",
  measurementId: "G-BLHTFF1N03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Storage = getStorage(app);
