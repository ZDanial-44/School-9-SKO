import { createRouter, createWebHistory } from 'vue-router'

const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: () => import('../components)
//   },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/SideBar',
    name: 'SideBar',
    component: () => import('../components/SideBar.vue')
  },
  {
    path: '/MainHeader',
    name: 'MainHeader',
    component: () => import('../components/MainHeader.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
