import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
//     appId: process.env.REACT_APP_APP_ID
// };

var firebaseConfig = {
    apiKey: "AIzaSyDrMfX-gI8asaSGdGdJVdb3KFeoc9fBSIc",
    authDomain: "nwitter-7368e.firebaseapp.com",
    projectId: "nwitter-7368e",
    storageBucket: "nwitter-7368e.appspot.com",
    messagingSenderId: "819844717853",
    appId: "1:819844717853:web:bd9e4b1e5a54c04cfcd5f4"
};

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();

export const firebaseInstance = firebase;

export const dbService = firebase.firestore();