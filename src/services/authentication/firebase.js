// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyCb5JH2pKBDGK6EymLiTLak7aqsCGPtfq4",
    authDomain: "mealstogo-6c50f.firebaseapp.com",
    projectId: "mealstogo-6c50f",
    storageBucket: "mealstogo-6c50f.appspot.com",
    messagingSenderId: "933672444882",
    appId: "1:933672444882:web:a803b9de6b5bc486835e0b",
    measurementId: "G-LPCT04BPWS"


  };
  const app = initializeApp(firebaseConfig);

  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  
  export { auth };
