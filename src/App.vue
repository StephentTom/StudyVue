<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">跑马灯效果</router-link> |
      <router-link to="/know0">Know0</router-link> |
      <router-link to="/know1">Know1</router-link> |
      <router-link to="/know2">Know2</router-link> |
      <router-link to="/know3">Know3 筛选demo</router-link> |
      <router-link to="/know4">Know4 过滤器</router-link> |
      <router-link to="/know5">Know5 生命周期</router-link> |
      <router-link to="/know6">Know6 vue-resource/axios请求</router-link> |
      <router-link to="/know7">Know7 品牌Demo</router-link>
      <router-view/>  
    </div>
  </div>
</template>

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

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
