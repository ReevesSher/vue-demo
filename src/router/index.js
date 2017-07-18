import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import * as types from '../store/types'
import Index from '@/components/index'
import Login from '@/components/login'
import Repositories from '@/components/repository'

Vue.use(Router)

const route = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/repository',
      name: 'repositories',
      component: Repositories,
      meta: {
        requireAuth: true
      }
    }
  ]
})

if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

route.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default route
