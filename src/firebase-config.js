import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";











// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhs6gOUH7DvHr361MY23POxqjyVDNRk4M",
    authDomain: "employee-b0791.firebaseapp.com",
    projectId: "employee-b0791",
    storageBucket: "employee-b0791.appspot.com",
    messagingSenderId: "889160453132",
    appId: "1:889160453132:web:9ab0c363732503ef91b229",
    measurementId: "G-41NLK2DG0K"
  };

  const app=initializeApp(firebaseConfig);

  export const database=getFirestore(app);