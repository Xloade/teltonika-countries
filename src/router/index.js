import { createRouter, createWebHistory } from 'vue-router'
import Countries from '../views/Countries.vue'
import Cities from '../views/Cities.vue'

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
    {
      path: '/cities/:itemId/:page',
      name: 'cities',
      component: Cities,
      props: true
    },
  ]
})

export default router
