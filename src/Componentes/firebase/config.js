// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp9cS-LkyBrghm1y-y_TfgrqCvUyVtFpY",
  authDomain: "mt16985-1023a.firebaseapp.com",
  projectId: "mt16985-1023a",
  storageBucket: "mt16985-1023a.appspot.com",
  messagingSenderId: "632846079950",
  appId: "1:632846079950:web:3a3a6b2812f9d364397d9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)