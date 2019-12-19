import Vue from 'vue'
import VueRouter from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'
// @ts-ignore
import Plus from '../views/Plus.vue'

// @ts-ignore
import HeaderBar from '../components/HeaderBar.vue'
// @ts-ignore
import LeftBox from '../components/LeftBox.vue'
// @ts-ignore
import MainBox from '../components/MainBox.vue'

Vue.use(VueRouter)



// 路由--重定向 redirect: { path: '/', redirect: '/login'} 重定向根路径为login界面路径


// 路由--路由规则中定义参数(路由传参, 1.使用query属性获取参数; 2. 使用params属性获取参数): 
// 1. 直接在 router-link处 拼接路径传参 <router-link to="/login?name=123"></router-link>, 在登录界面 可以使用 this.$route.query.name

// 2. 在 注册路由处 设置占位 { path: '/login/:name', component: Login} 单个参数, { path: '/login/:name/:age', component: Login} 多个参数  则<router-link to="/login/123"></router-link>, 在登录界面, this.$route.params.name


// 路由--使用 children属性 实现路由嵌套: 组件路由中嵌套另一个组件路由, 


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
    // 子路由
    children: [
      // 以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
      {path: 'plus', name: 'plus', component: Plus}
    ],
    // @ts-ignore
    component: () => import('../views/Know14.vue')
  },
  {
    path: '/know15',
    // name: 'know15',
    // @ts-ignore
    component: () => import('../views/Know15.vue')
    // components: {
    //   'default': HeaderBar,
    //   'leftCmp': LeftBox,
    //   'mainCmp': MainBox
    // }
  },
  {
    path: '/know16',
    name: 'know16',
    // @ts-ignore
    component: () => import('../views/Know16.vue')
  },
  {
    path: '/know17',
    name: 'know17',
    // @ts-ignore
    component: () => import('../views/Know17.vue')
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
