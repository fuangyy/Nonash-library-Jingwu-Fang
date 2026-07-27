// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_WtQDbCq-Yb17vDufGKFRgF_J6_ZG8N0',
  authDomain: 'nomash-library-jingwu-fang.firebaseapp.com',
  projectId: 'nomash-library-jingwu-fang',
  storageBucket: 'nomash-library-jingwu-fang.firebasestorage.app',
  messagingSenderId: '695434336179',
  appId: '1:695434336179:web:004972b2e19f83d5d2ddc6'
}

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
export default db
