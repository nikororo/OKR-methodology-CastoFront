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
      path: '/ToolBar',
      name: 'ToolBar',
      component: () => import('../components/ToolBar')
    },
    {
      path: '/Private',
      name: 'Private',
      component: () => import('../components/Private')
    },
    {
      path: '/SettingsUser',
      name: 'SettingsUser',
      component: () => import('../components/SettingsUser')
    },
    {
      path: '/TargetsUser',
      name: 'TargetsUser',
      component: () => import('../components/TargetsUser')
    },
    {
      path: '/PlanWeek',
      name: 'PlanWeek',
      component: () => import('../components/PlanWeek')
    },
    {
      path: '/GoalsUser',
      name: 'GoalsUser',
      component: () => import('../components/GoalsUser')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
