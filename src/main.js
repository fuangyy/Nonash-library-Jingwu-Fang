import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
