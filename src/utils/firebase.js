// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCClzWfN3-icKuhswTAM2ZMwTsh9SMMOI0",
  authDomain: "netflixai-d9c57.firebaseapp.com",
  projectId: "netflixai-d9c57",
  storageBucket: "netflixai-d9c57.appspot.com",
  messagingSenderId: "1007449072870",
  appId: "1:1007449072870:web:82a8fa06ddda4a5a818727",
  measurementId: "G-DWLBZN9JRK"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
