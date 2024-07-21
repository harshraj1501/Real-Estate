// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fuul-stack.firebaseapp.com",
  projectId: "fuul-stack",
  storageBucket: "fuul-stack.appspot.com",
  messagingSenderId: "389344051267",
  appId: "1:389344051267:web:c5110fca7372d0eae954f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);