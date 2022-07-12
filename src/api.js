import { initializeApp } from 'firebase/app';
import {collection, getDocs, getFirestore} from 'firebase/firestore';

export const initializeAPI = () => {
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyBiiOZhYFjopT5X3VoAgC3k1X__OmQ7gDQ",
    authDomain: "portfolio-da194.firebaseapp.com",
    projectId: "portfolio-da194",
    storageBucket: "portfolio-da194.appspot.com",
    messagingSenderId: "1094707231807",
    appId: "1:1094707231807:web:9ee1f17e032ad605be4c8a"
  });

  getFirestore(firebaseApp);

  return firebaseApp;
};