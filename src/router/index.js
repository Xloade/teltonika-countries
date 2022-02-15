import { createRouter, createWebHistory } from 'vue-router'
import Countries from '../views/Countries.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'countries',
      component: Countries
    },
  ]
})

export default router
