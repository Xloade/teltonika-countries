import { createRouter, createWebHistory } from 'vue-router'
import Countries from '../views/Countries.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/countries/1'
    },
    {
      path: '/countries/:page',
      name: 'countries',
      component: Countries,
      props: true
    },
  ]
})

export default router
