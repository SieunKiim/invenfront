import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/computer',
    name: 'Computer',
    component: () => import('../views/Computer.vue')
  },
  {
    path: '/screen',
    name: 'Screen',
    component: () => import('../views/Screen.vue')
  },
  {
    path: '/medical',
    name: 'Medical',
    component: () => import('../views/Medical.vue')
  },
  {
    path: '/others',
    name: 'Others',
    component: () => import('../views/Others.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router