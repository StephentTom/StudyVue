<template>
  <div id="know7">

    <h1>跨域问题还未解决</h1>
    
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3>添加品牌</h3>
      </div>
      <div class="panel-body form-inline">
        <label>
          Name: 
          <input class="form-control" type="text"/>
        </label>

        <input class="btn btn-primary" type="button" value="添加" @click="add">
      </div>
    </div>

    <table class="table table-hover table-bordered table-inverse table-responsive">
      <thead class="thead-inverse">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Ctime</th>
          <th>Operation</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.ctime | setTime('yyyy-mm-dd')}} </td>
          <td>
            <a href="" @click.prevent="deleted">删除</a>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  // 引入bootstrap的css框架(在bootstrap官网中进行定制, 下载拖入项目)(手动拖入的)
  import '@/assets/css/bootstrap.min.css'
  import axios from "axios";

  // 跨域问题还未解决

  export default {
    name: "know6",
    components: {},
    data() {
      return {
        list: [{id: 1, name: '奔驰', ctime: new Date()}]
      };
    },
    created() { // 此周期 data 与 methods 初始化完毕, 能获取到 属性 与 函数
      // this.getAllCars()
    },
    methods: {
      add() {
        axios.post('url', {'a': 'w'}).then((response)=>{}).catch((error)=>{})
      },
      deleted() {
         
      }, 
      getAllCars() {
        axios.get('getprodlist')
        .then((response)=>{
          if (response.status == 0) {
            this.list = response.message
          } else {
            console.log('获取数据失败', response)
          }
        })
        .catch(error=>{
          console.log('error:', response)
        })
      }
    },
    mounted() {
      // 界面渲染完成
    }
  };

</script>

<style lang="scss" scoped>
</style>
