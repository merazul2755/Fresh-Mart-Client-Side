// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHC8GF43JZFGU-SjjRcwbcQEBr0BqwADI",
  authDomain: "fresh-mart-958e0.firebaseapp.com",
  projectId: "fresh-mart-958e0",
  storageBucket: "fresh-mart-958e0.appspot.com",
  messagingSenderId: "292907929723",
  appId: "1:292907929723:web:bfa1efdc7e7b550a0412de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;