// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDn_LPTtQ0LR_plrUTBxUttm3N7b46Rqn8",
  authDomain: "crypto-currency-65f7f.firebaseapp.com",
  projectId: "crypto-currency-65f7f",
  storageBucket: "crypto-currency-65f7f.appspot.com",
  messagingSenderId: "665735945117",
  appId: "1:665735945117:web:0b849b3512df404c186d74",
  measurementId: "G-YEGXSM2PKN"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};