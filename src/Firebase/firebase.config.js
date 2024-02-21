// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0_YmTvzPJvZEzF1zIKSmUUdR95vGUmtA",
    authDomain: "library-management-syste-5e4d9.firebaseapp.com",
    projectId: "library-management-syste-5e4d9",
    storageBucket: "library-management-syste-5e4d9.appspot.com",
    messagingSenderId: "160196936650",
    appId: "1:160196936650:web:9eea79207b23eaa8744533"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;