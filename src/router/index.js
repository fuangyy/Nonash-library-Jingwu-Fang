import { ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AccessDeniedView from '../views/AccessDeniedView.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'

const isAuthenticated = ref(false)

const login = (username, password) => {
  const validUsername = 'admin'
  const validPassword = 'password123'

  isAuthenticated.value = username === validUsername && password === validPassword
  return isAuthenticated.value
}

const logout = () => {
  isAuthenticated.value = false
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/access-denied',
    name: 'AccessDenied',
    component: AccessDeniedView
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.auth = { isAuthenticated, login, logout }

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    return {
      name: 'Login',
      query: { redirect: to.fullPath, denied: 'true' }
    }
  }
})

export default router
