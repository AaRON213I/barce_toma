// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyDURfnLcPd5gnni0mOb5wvdtplerEp5f-w",
  authDomain: "expodb-85a22.firebaseapp.com",
  projectId: "expodb-85a22",
  storageBucket: "expodb-85a22.firebasestorage.app",
  messagingSenderId: "848959031794",
  appId: "1:848959031794:web:4b5fecd1b429e90c2f836b"
};

const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
