import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCOfhB5v8UBBbKFVPxf6XY2dvBGqOHLD-w",
  authDomain: "netflixclone-49ead.firebaseapp.com",
  projectId: "netflixclone-49ead",
  storageBucket: "netflixclone-49ead.appspot.com",
  messagingSenderId: "549849026965",
  appId: "1:549849026965:web:713780f827794e5bea269c",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
