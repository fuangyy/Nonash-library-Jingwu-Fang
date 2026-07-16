<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const username = ref('')
const password = ref('')

const route = useRoute()
const router = useRouter()

const handleLogin = () => {
  if (router.auth.login(username.value, password.value)) {
    router.push('/about')
  } else {
    router.push('/access-denied')
  }
}
</script>

<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <h1 class="text-center">Member Login</h1>
      <div v-if="route.query.denied" class="alert alert-warning" role="alert">
        Please log in before opening the About page.
      </div>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="login-username" class="form-label">Username</label>
          <input
            type="text"
            class="form-control"
            id="login-username"
            v-model.trim="username"
            required
          />
        </div>
        <div class="mb-3">
          <label for="login-password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="login-password"
            v-model="password"
            required
          />
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>
