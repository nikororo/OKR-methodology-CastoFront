import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.state.user.name) {
    next()
    return
  }
  next('/goals')
}

const ifAuthenticated = (to, from, next) => {
  if (store.state.user.name) {
    next()
    return
  }
  next('/notAuth')
}

const routes = [
  {
    path: '/notAuth',
    name: 'UserNotAuth',
    component: () => import('../components/UserNotAuth'),
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/goals',
    name: 'Goals',
    component: () => import('../components/CommonGoals'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/settingsUser',
    name: 'SettingsUser',
    component: () => import('../components/SettingsUser'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/settingsUser/alertsUser',
    name: 'AlertsUser',
    component: () => import('../components/AlertsUser'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/targetsUser',
    name: 'TargetsUser',
    component: () => import('../components/TargetsUser'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/planWeek',
    name: 'PlanWeek',
    component: () => import('../components/PlanWeek'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/goalsUser',
    name: 'GoalsUser',
    component: () => import('../components/GoalsUser'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/command',
    name: 'Сommand',
    component: () => import('../components/Command'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/command/commandList',
    name: 'СommandList',
    component: () => import('../components/CommandList'),
    beforeEnter: ifAuthenticated
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
  {
    path: '/goals/GoalsQuarter',
    name: 'goalsQuarter',
    component: () => import('../components/GoalsQuarter')
  },

  { 
    path: '*', 
    redirect: '/goals' 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
