import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVxSuGWWWbkhzvXmxogxew5EhIWXL4k1Y",
    authDomain: "whatsaap-clone-24098.firebaseapp.com",
    projectId: "whatsaap-clone-24098",
    storageBucket: "whatsaap-clone-24098.appspot.com",
    messagingSenderId: "639382138395",
    appId: "1:639382138395:web:113f954d1d5d114756d2be"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db }
