import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

  const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('../Components/home')
    },
    {
      path: '/toolBar',
      name: 'toolBar',
      component: () => import('../Components/toolBar')
    },
    {
      path: '/private',
      name: 'private',
      component: () => import('../Components/private')
    },
    {
      path: '/settingsUser',
      name: 'settingsUser',
      component: () => import('../Components/settingsUser')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
