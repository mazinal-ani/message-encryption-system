// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdXHED3RMOaR1SOBqeixgf_XusJt2vNYU",
  authDomain: "ciphertext-2b72f.firebaseapp.com",
  projectId: "ciphertext-2b72f",
  storageBucket: "ciphertext-2b72f.appspot.com",
  messagingSenderId: "592946177177",
  appId: "1:592946177177:web:437360f27f35698e588408"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);