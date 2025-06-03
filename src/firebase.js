import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase config (same for both admin and user as provided)
const firebaseConfig = {
  apiKey: "AIzaSyAs2SE5R0hN0hybiyebzHkAQHsRrSOBAxM",
  authDomain: "webdevelopment-1b2d4.firebaseapp.com",
  databaseURL: "https://webdevelopment-1b2d4-default-rtdb.firebaseio.com",
  projectId: "webdevelopment-1b2d4",
  storageBucket: "webdevelopment-1b2d4.firebasestorage.app",
  messagingSenderId: "698908376973",
  appId: "1:698908376973:web:c6504a154ac2b92086c7c4",
  measurementId: "G-8RBK7NND2N"
};

// Initialize User Firebase app
const userApp = initializeApp(firebaseConfig, "userApp");
const userAuth = getAuth(userApp);
const userDb = getFirestore(userApp);
const userStorage = getStorage(userApp);

// Initialize Admin Firebase app (using same config)
const adminApp = initializeApp(firebaseConfig, "adminApp");
const adminAuth = getAuth(adminApp);
const adminDb = getFirestore(adminApp);
const adminStorage = getStorage(adminApp);

export {
  userApp,
  userAuth,
  userDb,
  userStorage,
  adminApp,
  adminAuth,
  adminDb,
  adminStorage
};
