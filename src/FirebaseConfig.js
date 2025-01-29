import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChCikovZTqr18VDeb67l79n_a2quDgqpQ",
  authDomain: "my-bhargav.firebaseapp.com",
  projectId: "my-bhargav",
  storageBucket: "my-bhargav.appspot.com", // Fixed incorrect URL
  messagingSenderId: "670264210009",
  appId: "1:670264210009:web:343268081a137e1c30b748",
  measurementId: "G-KQT5NTB7G7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
