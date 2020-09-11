import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDEbrFov0DBewSsEOhtwn7o-PYfl6h71xY",
  authDomain: "amznclonesiksnis.firebaseapp.com",
  databaseURL: "https://amznclonesiksnis.firebaseio.com",
  projectId: "amznclonesiksnis",
  storageBucket: "amznclonesiksnis.appspot.com",
  messagingSenderId: "88707043261",
  appId: "1:88707043261:web:e1f1b19e514a93f2534cd4",
  measurementId: "G-PF3TEMPB4V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
