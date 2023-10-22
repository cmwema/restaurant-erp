import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAtIGNTYoXJAW8qlc_xnSmV_TfR4mQzyy0",
  authDomain: "foodordering-b46e6.firebaseapp.com",
  databaseURL:
    "https://foodordering-b46e6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "foodordering-b46e6",
  storageBucket: "foodordering-b46e6.appspot.com",
  messagingSenderId: "966843948308",
  appId: "1:966843948308:web:7d29be006f0d749093b601",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage};
