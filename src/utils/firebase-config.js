// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoV7_xeQS9AYgs4PS4S9MBLy7tjn6DFw4",
  authDomain: "flixxit-project.firebaseapp.com",
  projectId: "flixxit-project",
  storageBucket: "flixxit-project.appspot.com",
  messagingSenderId: "339961909897",
  appId: "1:339961909897:web:41281a77aab31ce94dac58",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
