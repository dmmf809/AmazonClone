import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBV5WSmSm8gqgA_iacxzafgACraWyWb9mo',
  authDomain: 'clone-83b6b.firebaseapp.com',
  projectId: 'clone-83b6b',
  storageBucket: 'clone-83b6b.appspot.com',
  messagingSenderId: '752109411887',
  appId: '1:752109411887:web:df8690df12682c2e4170da',
  measurementId: 'G-L2E18ZW1GX',
};

//Initialize the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Initialize the db
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
