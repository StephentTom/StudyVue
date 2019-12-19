<template>
  <div id="app">
    <div id="nav">
      <!-- router-link: 默认渲染成为一个 a 标签; 如果想渲染成其他标签 可以使用 tag="" 
          关于 router-link 中默认的 active-class(被激活的link) 默认值 router-link-active, 如果需要修改默认值, 则需通过路由构造选项中设置 linkActiveClass的值. 在 new VueRouter({ })中
      -->

      <!-- <router-link name="xxx">Home</router-link> -->

      <router-link to="/" tag="span">Home</router-link> |
      <router-link to="/about">跑马灯效果</router-link> |
      <router-link to="/know0">Know0</router-link> |
      <router-link to="/know1">Know1</router-link> |
      <router-link to="/know2">Know2</router-link> |
      <router-link to="/know3">Know3 筛选demo</router-link> |
      <router-link to="/know4">Know4 过滤器</router-link> |
      <router-link to="/know5">Know5 生命周期</router-link> |
      <router-link to="/know6">Know6 vue-resource/axios请求</router-link> |
      <router-link to="/know7">Know7 品牌Demo</router-link> |
      <router-link to="/know8">Know8 Vue中的动画</router-link> |
      <router-link to="/know9">Know9 使用第三方类动画</router-link> |
      <router-link to="/know10">Know10 实现半场动画</router-link> |
      <router-link to="/know11">Know11 组件的切换</router-link> |
      <router-link to="/know12">Know12 组件的传值</router-link> |
      <router-link to="/know13">Know13 获取DOM元素和组件</router-link> |
      <router-link to="/know14">Know14 路由的基本使用 App.vue router</router-link> |
      <router-link to="/know15">Know15 经典布局 练习</router-link> |
      <router-link to="/know16">Know16 </router-link> |
      <router-link to="/know17">Know17 </router-link>
      
      
      
      <!-- 由 vue-router 提供的元素, 专门用来当作占位符, 将来 路由规则 匹配到的组件 就会展示到这个 route-view 中去; 所以, 可以把 router-view 认为是一个占位符-->

      <!-- 为路由切换启动动画 -->

      <transition appear mode="out-in">
        <router-view/>  
      </transition>
      
    </div>
  </div>
</template>


<script>
  export default {
    name: 'app',

    watch: {
      // 监听路由的改变
      // $route(to , from) {
      //   console.log(to, from)
      // },

      // '$route.path': function(newVal, oldVal) {
      //   console.log(newVal, oldVal)
      // }
    }
  }
</script>


<style lang="scss">
  #app { // 全局设置css
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    
    a {
      font-weight: bold;
      color: #2c3e50;

      // 去除a标签下划线
      // text-decoration: underline;

      // 设置选中后 高亮效果
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateX(150px)
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease-in;
  }
</style>
