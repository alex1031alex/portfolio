import { initializeApp } from 'firebase/app';
import {collection, getDocs, getFirestore} from 'firebase/firestore';

const COLLECTION_NAME = 'works';
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

export const getWorks = async () => {
  const db = getFirestore();
  const works = [];

  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      works.push({
        id: doc.id,
        ...data,
      });
    });
  } catch(error) {
    return Promise.reject(error);
  }

  return works;
};