import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB7vz0eshLBLWSfZ8-Rn1M5Lb5VRxzx4bk",
  authDomain: "ecommerce-9bc6e.firebaseapp.com",
  projectId: "ecommerce-9bc6e",
  storageBucket: "ecommerce-9bc6e.appspot.com",
  messagingSenderId: "828956064969",
  appId: "1:828956064969:web:ff5472f2e3dd4155956118",
  measurementId: "G-LHF3C4YH9J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };