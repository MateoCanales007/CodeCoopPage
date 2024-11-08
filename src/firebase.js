import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA4yT1gM6D_0c309pqDRSnKvp8FgDU4ORQ",
    authDomain: "codecoop-53d86.firebaseapp.com",
    projectId: "codecoop-53d86",
    storageBucket: "codecoop-53d86.firebasestorage.app",
    messagingSenderId: "15976420790",
    appId: "1:15976420790:web:28de4a2175df9899b79d17",
    measurementId: "G-33KRTTWTR9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app); // referencia a la base de datos

export { auth, database }; 