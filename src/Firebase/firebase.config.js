// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7ZKs0XL4GMZj8QYECxo9Lq6r3UuP68Jc",
  authDomain: "brand-collection-81971.firebaseapp.com",
  projectId: "brand-collection-81971",
  storageBucket: "brand-collection-81971.appspot.com",
  messagingSenderId: "38820055012",
  appId: "1:38820055012:web:2d09045f737ea48552e9f1",
  measurementId: "G-F32Q24879G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;

