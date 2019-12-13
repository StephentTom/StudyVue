<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png">
    <div @click="toMeClick">请点击->我的界面->带参数</div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    toMeClick() {
      // 注意 router 与 route
      this.$router.push({
        // 这里可用 path: '/me'
        name: 'me', 
        params: {
          userId: 123
        }
      })
    }
  }
}
</script>
