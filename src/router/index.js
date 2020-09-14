import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.state.user.name) {
    next()
    return
  }
  next('/')
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
    path: '/',
    name: 'Home',
    component: () => import('../components/Home'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/private',
    name: 'Private',
    component: () => import('../components/Private'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/private/settingsUser',
    name: 'SettingsUser',
    component: () => import('../components/SettingsUser'),
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
    path: '/goalsQuarter',
    name: 'goalsQuarter',
    component: () => import('../components/GoalsQuarter')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
