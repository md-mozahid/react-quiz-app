// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDaqkGnL66G2Pkz2IABhswM0ewgGVGz1KM',
  authDomain: 'react-quiz-app-dev-1dc0e.firebaseapp.com',
  projectId: 'react-quiz-app-dev-1dc0e',
  storageBucket: 'react-quiz-app-dev-1dc0e.appspot.com',
  messagingSenderId: '797516567024',
  appId: '1:797516567024:web:23e77531a51d5b81c3cd35',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app