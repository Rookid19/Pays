// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyC3xFUCmxy2eEjYbrIB9-e1R2uMmTpgyPk",
   authDomain: "paysfintechapp.firebaseapp.com",
   projectId: "paysfintechapp",
   storageBucket: "paysfintechapp.appspot.com",
   messagingSenderId: "403273464397",
   appId: "1:403273464397:web:9f94806906d0c040933a04",
   measurementId: "G-NDG2PZL617",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore;
const auth = firebase.auth();

export { db, auth };
