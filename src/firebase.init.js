// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLngX9ZEHynjHteqHpITYnh-TsYk14mD8",
  authDomain: "justice-law-chamber.firebaseapp.com",
  projectId: "justice-law-chamber",
  storageBucket: "justice-law-chamber.appspot.com",
  messagingSenderId: "475805305387",
  appId: "1:475805305387:web:17d3231285749ed18ab86e",
  measurementId: "G-D4D4KKBBP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;
