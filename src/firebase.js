// Firebase v9+ modular imports
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0wEQ1HGQse9sqERzK1velXC60eXKJYI4",
  authDomain: "clone-a3fa0.firebaseapp.com",
  projectId: "clone-a3fa0",
  storageBucket: "clone-a3fa0.appspot.com",
  messagingSenderId: "733247188223",
  appId: "1:733247188223:web:904fae3b672769467670ca",
  measurementId: "G-CPZ7KVRQLQ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };