import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBdXHED3RMOaR1SOBqeixgf_XusJt2vNYU",
    authDomain: "ciphertext-2b72f.firebaseapp.com",
    projectId: "ciphertext-2b72f",
    storageBucket: "ciphertext-2b72f.appspot.com",
    messagingSenderId: "592946177177",
    appId: "1:592946177177:web:437360f27f35698e588408"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const keybase = getDatabase(app)