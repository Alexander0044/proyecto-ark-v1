import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {

  apiKey: "AIzaSyAHKMJZk7DFIf-7PhqIPlUkfeKowGW5Tjk",

  authDomain: "ark-proyecto.firebaseapp.com",

  databaseURL: "https://ark-proyecto-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "ark-proyecto",

  storageBucket: "ark-proyecto.firebasestorage.app",

  messagingSenderId: "161007202952",

  appId: "1:161007202952:web:b60a8efe5a93f8da35a53d"

};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;