// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

// Your Firebase config (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyDURfnLcPd5gnni0mOb5wvdtplerEp5f-w",
  authDomain: "expodb-85a22.firebaseapp.com",
  projectId: "expodb-85a22",
  storageBucket: "expodb-85a22.firebasestorage.app",
  messagingSenderId: "848959031794",
  appId: "1:848959031794:web:4b5fecd1b429e90c2f836b"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage) // Set persistence to AsyncStorage
});

// Initialize Firestore
const db = getFirestore(app);

// Export services
export { auth, db };
export default app;
