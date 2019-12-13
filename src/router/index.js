import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // @ts-ignore
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/know0',
    name: 'know0',
    // @ts-ignore
    component: () => import('../views/Know0.vue')
  },
  {
    path: '/know1',
    name: 'know1',
    // @ts-ignore
    component: () => import('../views/Know1.vue')
  },
  {
    path: '/know2',
    name: 'know2',
    // @ts-ignore
    component: () => import('../views/Know2.vue')
  },
  {
    path: '/know3',
    name: 'know3',
    // @ts-ignore
    component: () => import('../views/Know3.vue')
  },
  {
    path: '/know4',
    name: 'know4',
    // @ts-ignore
    component: () => import('../views/Know4.vue')
  },
  {
    path: '/know5',
    name: 'know5',
    // @ts-ignore
    component: () => import('../views/Know5.vue')
  },
  {
    path: '/know6',
    name: 'know6',
    // @ts-ignore
    component: () => import('../views/Know6.vue')
  },
  {
    path: '/know7',
    name: 'know7',
    // @ts-ignore
    component: () => import('../views/Know7.vue')
  },
  {
    path: '/me',
    name: 'me',
    // @ts-ignore
    component: () => import('../views/Me.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
