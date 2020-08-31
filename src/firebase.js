import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDd0wPrePSAkoc6bNA7IoPmU3QBGUA-kpQ",
  authDomain: "facebook-clone-1d11a.firebaseapp.com",
  databaseURL: "https://facebook-clone-1d11a.firebaseio.com",
  projectId: "facebook-clone-1d11a",
  storageBucket: "facebook-clone-1d11a.appspot.com",
  messagingSenderId: "234905527591",
  appId: "1:234905527591:web:11b6ae86af2e246f92f502",
  measurementId: "G-FSV0HVH8SD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;