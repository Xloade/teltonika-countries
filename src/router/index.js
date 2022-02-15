import { createRouter, createWebHistory } from 'vue-router'
import Countries from '../views/Countries.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/countries/:page',
      name: 'countries',
      component: Countries,
      props: (route) => ({ page: route.params.page || 1 })
    },
  ]
})

export default router
