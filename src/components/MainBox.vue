<template>
  <div id="mainBar"> 
    <h4>
      案例 监听 文本框数据改变 
      <div>
        <h6>@keyup="函数" 来监听文本框数据改变 </h6>
        <h6>使用watch 来监听文本框数据改变 </h6>
        <h6>使用watch 来监听路由的改变 请看App.vue演示打印 </h6>
        <h6>使用computed 来计算属性 </h6>
      </div>
    </h4>

    <label>
      第一名称:
      <input class="form-control form-group" type="text" placeholder="输入第一名称" v-model="firstName" @keyup="getFullName">
    </label>
    

    <label>
      第二名称:
      <input class="form-control form-group" type="text" placeholder="输入第二名称" v-model="secondName">
    </label>

    
    <label>
      结果:
      <input class="form-control form-group" type="text" disabled v-model="resultName">
    </label>
    

  </div>
</template>

<script>
  import '@/assets/css/bootstrap.min.css'


  export default {
    name: 'mainCmp',
    data() {
      return {
        firstName: '',
        secondName: '',
      }
    },
    methods: {
      getFullName() {
        // this.resultName = this.firstName + '-' + this.secondName;
      }
    },

    // 使用此属性, 可以监听 data 中指定属性的变化, 然后触发 watch中对应的属性函数
    watch: {
      // 监听 属性 secondName值的改变; 注意 函数名必须与 data中 所要监听的属性名一致
      secondName(newVal, oldVal) {
        console.log(this.secondName)
        console.log(newVal, oldVal)
      },

      // 监听路由的改变; 由于这里没有其他路由 做不了演示, 请看App.vue界面的演示
      $route(to , from) {
        console.log(to, from)
      },

      '$route.path': function(newVal, oldVal) {
        onsole.log(newVal, oldVal)
      }
    },

    // 在 computed 中可以定义一些属性, 这些属性 叫做 计算属性, 这里属性的本质就是一个方法, 使用时, 可以把它们的名称直接当做属性来使用, 而不要当做函数去调用.
    // 只要计算属性 函数内部 所用的任何 data 中的数据发生了改变, 就会重新计算, 触发计算属性的改变
    // 计算属性 会自动进行缓存, 只要计算属性 函数内部 所用的任何 data 中的数据没有发生改变, 再次使用此 计算属性, 则不会再调用 此计算属性函数
    computed: {
      resultName() {
        return this.firstName + '阿哈' + this.secondName
      }
    }
  }
</script>

<style lang="scss" scoped>
//  scss: 可在样式中进行嵌套 其标签的子3标签样式
  #mainBar {
    flex: 7;
    background-color: chocolate;
  }
</style>