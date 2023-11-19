import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from "../layouts/MainLayout.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: { layout: MainLayout },
      name: 'main',
      component: () => import('../views/MainView.vue')
    },
  ]
})

export default router
