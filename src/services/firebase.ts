// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyATOkFRO6s-K7v6fcKMqEXjygAwEj3f9tI',
    authDomain: 'my-requests-a3216.firebaseapp.com',
    projectId: 'my-requests-a3216',
    storageBucket: 'my-requests-a3216.appspot.com',
    messagingSenderId: '614701446624',
    appId: '1:614701446624:web:de9380dd7003e88b70a785',
    measurementId: 'G-HBE0MF5D6T',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, analytics, provider, auth };
