// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNxlSXJKOg__8IrrZ1Sn3CsJQeTROnAe0",
  authDomain: "exam-final-5830e.firebaseapp.com",
  projectId: "exam-final-5830e",
  storageBucket: "exam-final-5830e.appspot.com",
  messagingSenderId: "391617164146",
  appId: "1:391617164146:web:2b5ff2be7e73ac9f1ea3eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)