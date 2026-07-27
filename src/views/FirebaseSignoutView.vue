<template>
  <h1>Sign out</h1>
  <p>
    <button @click="signout">Sign out from Firebase</button>
  </p>
</template>

<script setup>
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = getAuth()
console.log(auth.currentUser)

const signout = () => {
  signOut(auth)
    .then(() => {
      console.log('Firebase Signout Successful!')
      console.log(auth.currentUser)
      router.push('/FireLogin')
    })
    .catch((error) => {
      console.log(error.code)
    })
}
</script>
