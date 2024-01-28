import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/blogHome',
      name: 'blogHome',
      component: () => import('../views/blogHome.vue')
    },
    {
      path: '/addBlog',
      name: 'addBlog',
      component: () => import('../views/addBlog.vue')
    }
  ]
})

export default router
