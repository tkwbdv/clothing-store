import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

/* const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}; */

const firebaseConfig = {
  apiKey: "AIzaSyBUrIRMFX9Fg_KlqzYu6VLS71anifrtAHg",
  authDomain: "clothing-store-7252a.firebaseapp.com",
  databaseURL: "https://clothing-store-7252a.firebaseio.com",
  projectId: "clothing-store-7252a",
  storageBucket: "clothing-store-7252a.appspot.com",
  messagingSenderId: "409260899055",
  appId: "1:409260899055:web:956db8723f7642d1"
};

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = () =>
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .catch(error => new Error(error.message));

export { firebase, signInWithGoogle, firestore, createUserProfileDocument };
