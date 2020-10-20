import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  const token = localStorage.getItem('token');
  if (!token) {
    next()
    return
  }
  next('/goals')
}

const ifAuthenticated = (to, from, next) => {
  const token = localStorage.getItem('token');
  if (token) {
    next()
    return
  }
  next('/notAuth')
}

const ifManager = (to, from, next) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');
  if (token && userRole === 'manager') {
    next()
    return
  }
  next('/goals')
}

const ifLeader = (to, from, next) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');
  if (token && userRole === 'leader') {
    next()
    return
  }
  next('/goals')
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
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/settingsUser',
    name: 'SettingsUser',
    component: () => import('../components/SettingsUser'),
    beforeEnter: ifAuthenticated
  },
  // {
  //   path: '/settingsUser/alertsUser',
  //   name: 'AlertsUser',
  //   component: () => import('../components/AlertsUser'),
  //   beforeEnter: ifAuthenticated
  // },
  {
    path: '/profile',
    name: 'PlanWeek',
    component: () => import('../components/PlanWeek'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/profile/goals',
    name: 'GoalsUser',
    component: () => import('../components/GoalsUser'),
    beforeEnter: ifManager
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
    path: '/goals/companyMission',
    name: 'companyMission',
    component: () => import('../components/CompanyMission'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/goals/goalsProtection',
    name: 'goalsProtection',
    component: () => import('../components/GoalsProtection'),
    beforeEnter: ifLeader
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
