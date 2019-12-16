<template>
  <div class="know9">
    
    <h1>
      使用第三方类实现动画 
    </h1>
    
    <div>入场动画: bounceIn;  离场: bounceOut</div>

    <input class="form-control" type="button" value="动画" @click="flag=!flag">
    
    <!-- 注意: 需要在动画效果前 加入animated, 也可以放到需要动画的标签class上  -->
    <transition 
        enter-active-class="animated bounceIn" 
        leave-active-class="animated bounceOut">
      <h3 v-if="flag">这个是一个H3, animated放在动画效果前</h3>
    </transition>

    <transition enter-active-class="bounceIn" leave-active-class="bounceOut">
      <h3 class="animated" v-if="flag">这个是一个H3, animated放到标签上</h3>
    </transition>
    
    <transition enter-active-class="bounceIn" leave-active-class="bounceOut" :duration="200">
      <h3 class="animated" v-if="flag">这个是一个H3, animated放到标签上, 加入动画时长(设置入场 离场动画统一时长)</h3>
    </transition>

    <transition enter-active-class="bounceIn" leave-active-class="bounceOut" :duration="{enter: 200, leave: 400}">
      <h3 class="animated" v-if="flag">这个是一个H3, animated放到标签上, 分别加入不同动画阶段的时长(入场 与 离场时长)</h3>
    </transition>
  </div>
</template>

<script>
  // 引入bootstrap的css框架(在bootstrap官网中进行定制, 下载拖入项目)(手动拖入的)
  import '@/assets/css/bootstrap.min.css'
  import '@/assets/css/animate.css'


  export default {
    name: 'know9',
    data() {
      return {
        flag: true,
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scope>
  
</style>