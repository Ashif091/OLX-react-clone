// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhbFrhky-Bzraur7WVyNbUWTWEv_E8j60",
  authDomain: "olx-react-clone-9d8d0.firebaseapp.com",
  projectId: "olx-react-clone-9d8d0",
  storageBucket: "olx-react-clone-9d8d0.appspot.com",
  messagingSenderId: "885381197522",
  appId: "1:885381197522:web:18cd8b51ffa2d896db870b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);