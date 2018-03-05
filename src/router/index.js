import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/views/Home'
import Login from '@/components/views/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: 'login',
      name: 'Login',
      component: Login
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  linkActiveClass: 'is-active'
})
