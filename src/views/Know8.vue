<template>
  <div class="know8">
    
    <h1>
      使用过渡类名实现动画 H3; 
      <div>修改动画 v- 前缀 H5</div>
    </h1>

    <input class="form-control" type="button" value="控制按钮H3" @click="flag=!flag">

    <!-- 1.使用transition元素(标签), 把需要被动画的标签包裹起来; transition元素 是Vue官方提供.
        2. 自定义两组样式, 来控制transition内部元素实现动画
    -->
    <transition>
      <h3 v-show="flag">只是个H3标签</h3>
    </transition>


    <input class="form-control" type="button" value="控制按钮H5" @click="flag0=!flag0">
    <!-- 修改 样式中 v- 开头, 改成 my- 开头 -->
    <transition name="my">
      <h5 v-if="flag0">只是个H5标签</h5>
    </transition>
    
  </div>
</template>

<script>
  // 引入bootstrap的css框架(在bootstrap官网中进行定制, 下载拖入项目)(手动拖入的)
  import '@/assets/css/bootstrap.min.css'

  export default {
    name: 'know8',
    data() {
      return {
        flag: true,
        flag0: true
      }
    },
    methods: {
      isHiddenClick() {
        this.flag = !this.flag;
      }
    }
  }
</script>

<style lang="scss" scope>


  // 元素的起始动画状态, 还未开始
  .v-enter,
  // 动画结束(离开)终止状态
  .v-leave-to {
    opacity: 0; // 透明度 0:透明
    transform: translateX(150px); // 水平位移
  }

  // 进行动画过程
  .v-enter-active,
  // 离开动画的过程
  .v-leave-active {
    transition: all 0.4s ease-in
  }


  // 元素的起始动画状态, 还未开始
  .my-enter,
  // 动画结束(离开)终止状态
  .my-leave-to {
    opacity: 0; // 透明度 0:透明
    transform: translateY(150px); // 水平位移
  }

  // 进行动画过程
  .my-enter-active,
  // 离开动画的过程
  .my-leave-active {
    transition: all 0.4s ease-in
  }

</style>