import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";


// Firebase
// Import the functions you need from the SDKs you need

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
//const firebase_app = initializeApp(firebaseConfig);
//const firebase_analytics = getAnalytics(app);
initializeApp(firebaseConfig);
//getAnalytics(app);

createApp(App)
    .use(router)
    .mount('#app');
