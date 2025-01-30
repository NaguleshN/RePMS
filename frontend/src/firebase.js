import { getAuth, OAuthProvider } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ms-login-ffd87.firebaseapp.com",
  projectId: "ms-login-ffd87",
  storageBucket: "ms-login-ffd87.firebasestorage.app",
  messagingSenderId: "923058872283",
  appId: "1:923058872283:web:6fd088405bc4cf163811fe"
};

// Initialize Firebase
// console.log(import.meta.env.VITE_FIREBASE_APIKEY);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new OAuthProvider('microsoft.com')

export { auth,provider }