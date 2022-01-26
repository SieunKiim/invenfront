import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/', redirect: '/inven/All/'
  },
  {
    path: '/inven/All/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inven/Computer/',
    name: 'Computer',
    component: () => import('../views/Computer.vue')
  },
  {
    path: '/inven/Screen/',
    name: 'Screen',
    component: () => import('../views/Screen.vue')
  },
  {
    path: '/inven/Medical/',
    name: 'Medical',
    component: () => import('../views/Medical.vue')
  },
  {
    path: '/inven/Others/',
    name: 'Others',
    component: () => import('../views/Others.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router