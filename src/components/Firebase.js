// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
import {getFirestore, doc, setDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaPp0iJLxA4UfkRI_bhAJJQ-1TOsGTgoo",
  authDomain: "personal-finance-3d313.firebaseapp.com",
  projectId: "personal-finance-3d313",
  storageBucket: "personal-finance-3d313.appspot.com",
  messagingSenderId: "158862217973",
  appId: "1:158862217973:web:5dcbb90421cfb61d8e2bbc",
  measurementId: "G-ZN54WB1BVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db, auth, provider,doc,setDoc};