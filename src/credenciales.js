import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyANaYcaD7oMGqKRHZMszIQiwRu--eHYWYc",
  authDomain: "temporalweb-26509.firebaseapp.com",
  projectId: "temporalweb-26509",
  storageBucket: "temporalweb-26509.appspot.com",
  messagingSenderId: "705896267277",
  appId: "1:705896267277:web:ecfc2a6b087e97ae165f44"
};
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase); 
export { appFirebase, db };
