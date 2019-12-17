import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'

Vue.use(VueRouter)



// 重定向 redirect: { path: '/', redirect: '/login'} 重定向根路径为login界面路径
const routes = [ 
  {
    path: '/', // 根路径
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
    path: '/know8',
    name: 'know8',
    // @ts-ignore
    component: () => import('../views/Know8.vue')
  },
  {
    path: '/know9',
    name: 'know9',
    // @ts-ignore
    component: () => import('../views/Know9.vue')
  },
  {
    path: '/know10',
    name: 'know10',
    // @ts-ignore
    component: () => import('../views/Know10.vue')
  },
  {
    path: '/know11',
    name: 'know11',
    // @ts-ignore
    component: () => import('../views/Know11.vue')
  },
  {
    path: '/know12',
    name: 'know12',
    // @ts-ignore
    component: () => import('../views/Know12.vue')
  },
  {
    path: '/know13',
    name: 'know13',
    // @ts-ignore
    component: () => import('../views/Know13.vue')
  },
  {
    path: '/know14',
    name: 'know14',
    // @ts-ignore
    component: () => import('../views/Know14.vue')
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
  // linkActiveClass: 'myActive',  // linkActiveClass的默认值就修改为 myActive
  routes
})

export default router
