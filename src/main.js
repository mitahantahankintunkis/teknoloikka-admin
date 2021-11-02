import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { app as firebaseApp, db } from './firestore.js';


createApp(App)
    .use(router)
    .provide('db', db)
    .mount('#app');


// Firebase
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
//    apiKey: "AIzaSyB5P1AT6LfuHDpvq3BwcZ6e0Ep2oqSBfqs",
//    authDomain: "teknoloikka.firebaseapp.com",
//    projectId: "teknoloikka",
//    storageBucket: "teknoloikka.appspot.com",
//    messagingSenderId: "629736918817",
//    appId: "1:629736918817:web:b3fb7b923e48b3173db860",
//    measurementId: "G-WLT1N81235"
//};

// Initialize Firebase
//const firebase_app = initializeApp(firebaseConfig);
//const firebase_analytics = getAnalytics(app);
//initializeApp(firebaseConfig);
//getAnalytics(app);


//import { createApp } from 'vue'
//import App from './App.vue'
//import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//import { library } from "@fortawesome/fontawesome-svg-core";
//import { faPhone,  faCommentAlt, faChevronDown } from "@fortawesome/free-solid-svg-icons";
//
//
//library.add(faPhone);
//library.add(faCommentAlt);
//library.add(faChevronDown);
//
//const app = createApp(App)
//    .component('font-awesome-icon', FontAwesomeIcon)
//    .mount('#app');
