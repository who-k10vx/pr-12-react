// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6cwh3Lg3OpSdqqxRB3K1mdKZMyOTWenM",
    authDomain: "reactjs-f8080.firebaseapp.com",
    projectId: "reactjs-f8080",
    storageBucket: "reactjs-f8080.appspot.com",
    messagingSenderId: "616749062542",
    appId: "1:616749062542:web:e7b4f5698ca2d7f186ecdf",
    measurementId: "G-R91KZMT29D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);