import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/Home')
    },
    {
      path: '/toolBar',
      name: 'ToolBar',
      component: () => import('../components/ToolBar')
    },
    {
      path: '/private',
      name: 'Private',
      component: () => import('../components/Private')
    },
    {
      path: '/settingsUser',
      name: 'SettingsUser',
      component: () => import('../components/SettingsUser')
    },
    {
      path: '/targetsUser',
      name: 'TargetsUser',
      component: () => import('../components/TargetsUser')
    },
    {
      path: '/planWeek',
      name: 'PlanWeek',
      component: () => import('../components/PlanWeek')
    },
    {
      path: '/goalsUser',
      name: 'GoalsUser',
      component: () => import('../components/GoalsUser')
    },
    {
      path: '/signin',
      name: 'Signin',
      component: () => import('../components/Signin')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../components/Signup')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
