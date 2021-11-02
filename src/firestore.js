// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB5P1AT6LfuHDpvq3BwcZ6e0Ep2oqSBfqs",
  authDomain: "teknoloikka.firebaseapp.com",
  projectId: "teknoloikka",
  storageBucket: "teknoloikka.appspot.com",
  messagingSenderId: "629736918817",
  appId: "1:629736918817:web:b3fb7b923e48b3173db860",
  measurementId: "G-WLT1N81235"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
//const analytics = getAnalytics(app);

export {
    db,
    app,
};