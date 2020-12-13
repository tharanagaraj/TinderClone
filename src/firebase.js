// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAWmlCzuxl6DaGUBjtNR2RkRhcNbrMydjI",
  authDomain: "tinder-clone-3373a.firebaseapp.com",
  projectId: "tinder-clone-3373a",
  storageBucket: "tinder-clone-3373a.appspot.com",
  messagingSenderId: "33348950931",
  appId: "1:33348950931:web:606e1fca4c917629c4a666",
  measurementId: "G-QFYBZ6KE0H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
