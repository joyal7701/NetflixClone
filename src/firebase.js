import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBZR7ncs2tIti5yzaq4T-7QzZiiV9_aUmk",
  authDomain: "netflixclone-d83d9.firebaseapp.com",
  projectId: "netflixclone-d83d9",
  storageBucket: "netflixclone-d83d9.appspot.com",
  messagingSenderId: "291708332176",
  appId: "1:291708332176:web:c29b650310ddf912bad015",
  measurementId: "G-VVNV4HCHH5"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
