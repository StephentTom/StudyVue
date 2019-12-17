<template>
  <div class="know10">
    
    <h1>使用钩子函数实现半场(前半段)动画</h1>
    
    <input class="form-control" type="button" value="加入购物车 实现半场动画" @click="flag=!flag">

    <!-- vue 提供的动画钩子 https://cn.vuejs.org/v2/guide/transitions.html#JavaScript-%E9%92%A9%E5%AD%90 -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div class="ball" v-show="flag"></div>
    </transition>


    <h1>列表动画 transition-group</h1>

    <div>
      <label>
        ID:
        <input class="form-control" type="text" v-model="id">
      </label>

      <label>
        Name:
        <input class="form-control" type="text" v-model="name">
      </label>

      <input class="btn btn-primary" type="button" value="添加" @click="add">
    </div>

    <!-- 在实现列表过渡的时候, 是通过v-for循环渲染出来的, 不能transition包裹,
    需要使用 transition-group; 但 transition-group 会渲染成 span的标签, 因此利用tag属性 指定 transition-group 渲染为特定的标签 来避免-->

    <!-- <ul> -->
      <!-- <ul 如果要为v-for 循环创建的元素, 添加动画, 则必须要为每个元素设置 :key -->
      <!-- appear属性: 给 transition-group 实现页面刚展示时的入场效果  -->
      <transition-group appear tag="ul">
        <li v-for="(value, index) in list" :key="value.id" @click="deletedClick(index)">
        {{value.name}}</li>
      </transition-group>
    <!-- </ul> -->

    
  </div>
</template>

<script>
  // 引入bootstrap的css框架(在bootstrap官网中进行定制, 下载拖入项目)(手动拖入的)
  import '@/assets/css/bootstrap.min.css'
  import '@/assets/css/animate.css'


  export default {
    name: 'know10',
    data() {
      return {
        flag: false,

        id: '',
        name: '',
        list:[
          {name: '奥特曼', id: 1},
          {name: '柯南', id: 2},
          {name: '路飞', id: 3},
          {name: '鸣人', id: 4},
          {name: '佐助', id: 5},
          {name: '黑猫警长', id: 6},
        ]
      }
    },
    methods: {
      // el 为JS原生 DOM对象
      beforeEnter(el) {
        // 动画入场之前的样式, 此时动画还未开始
        el.style.transform = 'translate(0, 0)';
          
      },
      enter(el, done) {
        // 需要加入这段代码, 动画才有效果(但没有实际的作用)
        el.offsetWidth // el.offsetHeight  / el.offsetLeft 等都会有效果
        // 动画开始之后的样式
        el.style.transform = 'translate(150px, 450px)';
        el.style.transition = 'all 1s ease' // 中间过渡的效果

        // 其实就是alterEnter这个函数, 也就是说: done是一个函数的引用; 对 afterEnter 的引用; 如果不调用 则会出现延迟动画
        done()
      },
      afterEnter(el) {
        // 动画完成之后
        this.flag = !this.flag;
      },


      add() {
        if (this.name.length) {
          this.list.push({name: this.name, id: this.id})
          this.id = this.name = '';
        }
      },
      deletedClick(index) {
        this.list.splice(index, 1)
      }
    }
  }
</script>

<style lang="scss" scope>
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
  }

  li {
    width: 100%;
    border: 1px dashed #999;
    margin: 10px;
    padding-left: 10px;
    line-height: 35px;

    position: relative;
  }
  li:hover { // 鼠标放到列表上 响应的样式
    background-color: burlywood;
    transition: all 0.3s ease-in-out
  }

  .deletedBtn {
    height: 30px;
    position: absolute;
    right: 10px;
    top: 2.5px;
  }

  // 用于列表动画;  如果想看购物车红点动画, 则就注释掉以下代码
  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateY(80px)
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 1s ease-in // transition: 过渡效果
  }

  // 用于删除列表动画; .v-move 与 .v-leave-active 配合使用 实现列表元素渐渐飘上来的效果 固定写法
  .v-move {
    transition: all 0.3s ease-in-out
  }
  .v-leave-active {
    position: absolute;
  }

</style>