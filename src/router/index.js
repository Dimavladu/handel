import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: ()
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
