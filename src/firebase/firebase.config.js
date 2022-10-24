// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJy09VRbyP_LlvXXWNvSYL4hgMu5PtrVk",
    authDomain: "cs-academy-client.firebaseapp.com",
    projectId: "cs-academy-client",
    storageBucket: "cs-academy-client.appspot.com",
    messagingSenderId: "1041313351852",
    appId: "1:1041313351852:web:e161098501a4f22a64b709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;