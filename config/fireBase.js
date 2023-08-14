// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPixSHFoL5xhbaMGzHXnYumebkouHJSmA",
  authDomain: "native-firebase-fd6d1.firebaseapp.com",
  projectId: "native-firebase-fd6d1",
  storageBucket: "native-firebase-fd6d1.appspot.com",
  messagingSenderId: "49496511630",
  appId: "1:49496511630:web:2ca92c8c543178c85265df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)