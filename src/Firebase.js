import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAUvzsPiOSI75QgiprcxW1v7DkHEyn0kp4",
  authDomain: "slack-clone-a6438.firebaseapp.com",
  projectId: "slack-clone-a6438",
  storageBucket: "slack-clone-a6438.appspot.com",
  messagingSenderId: "124837920972",
  appId: "1:124837920972:web:ea47007c96d8c7fe4f0269",
  measurementId: "G-KY8W1HG498"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
