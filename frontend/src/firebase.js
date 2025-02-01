import { getAuth, OAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ms-login-ffd87.firebaseapp.com",
  projectId: "ms-login-ffd87",
  storageBucket: "ms-login-ffd87.firebasestorage.app",
  messagingSenderId: "923058872283",
  appId: "1:923058872283:web:6fd088405bc4cf163811fe"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new OAuthProvider('microsoft.com')

export { auth,provider }