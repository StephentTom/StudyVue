<template>
  <div id="know3">
    <h3>为搜索框添加一个 键盘enter监听, 点击键盘enter 就能添加的效果  @keyup="" 与键盘相关指令, 其中还有按键(键盘)修饰符 如@keyup.enter=""</h3>

    <h3>
      为搜索框 进行自定义指令 焦点v-focus  写在main.js;
      v-on:input 监听输入文本的改变, 需要配合v-model获取完整输入的文本
    </h3>

    <div class="panel panel-primary">
      <div class="panel-heading head-title">添加品牌</div>
      <div class="panel-body form-inline">
        <label>
          id: 
          <input class="form-control" type="text" v-model="id">
        </label>

        <label class="name-input">
          Name: 
          <input class="form-control" type="text" v-model="name"  @keyup.enter="add">
        </label>
        <!-- 在元素处理事件时, 如果加入了(),就可以给函数传参, @click="add()"  -->
        <input class="btn btn-primary add-button" type="button" value="添加" @click="add">

        <label>
          搜索名称关键字:
          <input class="form-control" type="search" placeholder="请输入关键字" v-model="keywords" v-focus v-on:input="textChange">
        </label>
      </div>
    </div>

    <div class="table-wrapper">
      <table class="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>品牌名称</th>
            <th>时间</th>
            <th>操作</th>
          </tr>
        </thead>

        <tbody>
          <!-- 之前 v-for中的数据是从data中的list数组中获取的 -->
          <!-- 现在 自定义了一个search方法 同时, 把输入的关键字已传参的形式传递给search方法, 进行筛选并返回最终结果数组 -->
          <tr v-for="item in search(keywords)" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <!-- <td v-text="item.ctime"></td> -->
            <td>{{item.ctime | timeFilter}}</td>

            <!-- 如果使用a标签当做按钮, 在点击时需要阻止原事件(a的原事件, 如果没有填写href="xxx" 则会刷新当前页面, 阻止原事件 @click.prevent="") -->
            <td><button class="btn btn-link" type="button" @click="deleteBrand1(item.id)">删除</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>字符串padStart用法: 可以用于填充字符串</h3>
    <div>ES6字符串方法: 
      <div>String.padStart(maxLength, fillString='') 头部填充</div> 
      或者
      <div>String.padEnd(maxLength, fillString='') 尾部填充</div>
      <span :style="{'background-color': 'aquamarine'}">maxLength: 填充后的最大长度; fillString: 用什么字符串填充</span>
    </div>

    <h3>注意: Vue中的所有指令, 在调用的时候 都以 v- 开头; 自定义全局指令(main.js中有写);  自定义局部指令</h3>
    <div v-color="'blue'" v-backgroundcolor="'red'">哈哈哈哈哈哈</div>


  </div>
</template>

<script>
  // 引入bootstrap的css框架(在bootstrap官网中进行定制, 下载拖入项目)(手动拖入的)
  import '@/assets/css/bootstrap.min.css'

  export default {
    name: 'knomw3',
    data() {
      return {
        id: '',
        name: '',
        ctime: '',
        keywords: '',
        list: [
          {id: 1, name: '宝马', ctime: new Date()},
          {id: 2, name: '奔驰', ctime: new Date()},
        ]
      }
    },
    methods: {
      add() {
        if (this.id && this.name) {
          var brand = { id: this.id, name: this.name, ctime: new Date() }
          this.list.push(brand)
          this.id = this.name = '' // 清空输入框
        }
      },

      // 利用  array.some()
      deleteBrand0(id) {
        // 删除数组中id的对象; 
        // array.some()函数:  
          // 1. some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
          // 2. some() 方法会依次执行数组的每个元素：如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。如果没有满足条件的元素，则返回false。
        // 注意： some() 不会对空数组进行检测。
        // 注意： some() 不会改变原始数组。
        this.list.some((item, i)=>{
          if (item.id == id) {
            // splice(index, deleteCount, newItem, ...) 方法向/从数组中添加/删除项目; index: 必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。deleteCount: 必需。要删除的项目数量。如果设置为 0，则不会删除项目; newItem: 可选, 新增的元素
            this.list.splice(i, 1) // 从索引为 i 的位置开始添加/删除, 添加/删除几个

            // 在数组的some方法中, 如果 return ture 就会立即终止数组的后续循环
            return true
          }
        })
      },
      // 利用 array.findIndex()
      deleteBrand1(id) {
        // 获取数组中对应满足条件的索引
        var index = this.list.findIndex(item => {
          if (item.id == id) {
            return true
          }
        })
        // 删除
        this.list.splice(index, 1)
      },

      search(keyword) {
        var newList = []

        // this.list.forEach(item => {
        //   if (item.name.indexOf(keyword) != -1) {
        //     newList.push(item)
        //   }
        // })
        

        newList = this.list.filter(item => {
          // 注意:  ES6中为字符串提供了一种方法: String.includes('包含的字符串') 如果包含返回true, 反之 flase
          if (item.name.includes(keyword)) {
            return item
          }
        })

        return newList 
      },

      textChange() {
        console.log(this.keywords)
      },
    },


    // 定义过滤器
    filters: {
      timeFilter(time) {
        var curTime = new Date(time)

        var y = curTime.getFullYear()
        var m = curTime.getMonth() + 1 // 注意month 是从第0计算的
        var d = curTime.getDate()

        // m有可能只有个位数, 所以这里做填充 类似 9 -> 09
        m = m.toString().padStart(2, '0')

        return `${y}-${m}-${d}`
      }
    },

    // 自定义局部指令; 自定义样式指令,可以写在bind函数中, 如果一些操作指令, 写到inserted函数中
    directives: {
      // 自定义 文本颜色 样式指令
      color: {
        bind: (el, binding)=>{
          el.style.color = binding.value
        }
      },
      // 可以自定义多个指令; 自定义背景颜色指令
      backgroundcolor: {
        bind: (el, binding)=>{
          el.style.backgroundColor = binding.value
        }
      },
    }
  }
</script>


<style lang="scss" scoped>
  input:focus{ 
    outline: none 
  } 
  .head-title {
    font-size: 20px;
  }
  .name-input {
    margin: 0 10px
  }
  .add-button {
    margin-right: 10px;
  }
</style>