import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


// 创建自定义全局按钮(键盘)修饰符
Vue.config.keyCodes.f2 = 113

// @ts-ignore 定义全局变量, 或是利用网上说的新建文件 .evn 然后以 VUE_APP 命名开头设置变量(还未试过)
Vue.prototype.baseURL = "www.baidu.com"


// 全局自定义指令; 使用 Vue.directive() 自定义全局指令; Vue.directives: 自定义局部指令 -- know3.vue 有写;
// 参数一: 指令的名称, 注意在定义名称的时候, 无须再名称前面加 v- , 在调用时, 需要加 v-名称 调用;  
// 参数二: 对象, 对象身上有些相关的函数, 可执行相关的操作
// @ts-ignore
Vue.directive('focus', {
  bind: (el)=>{ // el: 被绑定的元素, 可以用来直接操作 DOM 。例如被绑定的是input, input DOM 中有focus() 函数, 因此可以调用focus()
    // 指令绑定到元素上, 会立即执行 bind函数, 只执行一次
  },
  inserted: (el)=>{
    // 元素插入到 DOM中时, 会执行此函数, 只执行一次
    // 一个元素,只有插入DOM之后, 才会起作用
    el.focus()
  },
  updated: function() {
    // VNode更新时, 会执行此函数, 可能会触发多次
  }
})


// 定义全局过滤器: 在创建 Vue 实例之前全局定义过滤器
// @ts-ignore
Vue.filter('upper', (value)=>{
  // 将小写字母->大写字母
  return value.toUpperCase()
})
// @ts-ignore
Vue.filter('setTime', (value, format="")=>{
  var _format = format.toLowerCase()
  var curTime = new Date(value)

  var year = curTime.getFullYear()
  var month = curTime.getMonth() + 1
  var day = curTime.getDate()

  if (_format == 'yyyy-mm-dd') {
    return `${year}-${month}-${day}`
  }

  var hour = curTime.getHours()
  var minutes = curTime.getMinutes()
  
  return `${year}-${month}-${day} ${hour}:${minutes}`
})


// @ts-ignore
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
