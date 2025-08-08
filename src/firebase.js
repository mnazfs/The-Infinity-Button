import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDJDBihV5rs9YeX7RlyjLFeLrKdsPbza2w",
  authDomain: "infinity-button-3f299.firebaseapp.com",
  databaseURL: "https://infinity-button-3f299-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "infinity-button-3f299",
  storageBucket: "infinity-button-3f299.firebasestorage.app",
  messagingSenderId: "261516546949",
  appId: "1:261516546949:web:d975df1a44a68c60246aec"
  //measurementId: "G-JVTLLQVYRS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
const analytics = getAnalytics(app);
