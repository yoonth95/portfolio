// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const { VITE_APP_APIKEY, VITE_APP_AUTHDOMAIN, VITE_APP_PROJECTID, VITE_APP_STORAGEBUCKET, VITE_APP_MESSAGINGSENDERID, VITE_APP_APPID } = import.meta
  .env;

const firebaseConfig = {
  apiKey: VITE_APP_APIKEY,
  authDomain: VITE_APP_AUTHDOMAIN,
  projectId: VITE_APP_PROJECTID,
  storageBucket: VITE_APP_STORAGEBUCKET,
  messagingSenderId: VITE_APP_MESSAGINGSENDERID,
  appId: VITE_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
