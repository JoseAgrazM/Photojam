// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAaV_afi3XGcunYRkUOSarZWniQcLUoTFc',
	authDomain: 'photojam-6e80f.firebaseapp.com',
	projectId: 'photojam-6e80f',
	storageBucket: 'photojam-6e80f.appspot.com',
	messagingSenderId: '538227395120',
	appId: '1:538227395120:web:395e423d80ebe443ce7bf5',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp);
