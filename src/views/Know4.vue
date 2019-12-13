<template>
    <div id="know4">
        <h3>
            Vue.js 允许自定义过滤器，一般可以用在两个地方：双花括号插值和 v-bind 表达式。
            1.在双花括号中； <!-- 在双花括号中: {{ message | capitalize }} -->
            2.在 v-bind 中 <!-- 在 v-bind 中; <div v-bind:id="rawId | formatId"></div> -->
        </h3>

        <h3>过滤器的名称无须加引号;</h3>

        <div class="aaDiv">
            <div>在创建 Vue 实例之前定义全局过滤器的语法:</div> 
            Vue.filter('过滤器的名称', (过滤器传过来的值)=>{})
        </div>

        <div class="aaDiv">
            例子:  过滤成 yyyy-MM-dd
            <div><label :style="{color: 'blue'}">修改前:</label> {{time}}</div>
            <div><label :style="{color: 'red'}">修改后:</label> {{time | timeFilter}}</div>
        </div>

        <div class="aaDiv">
            例子: 曾经，我也是一个单纯的少年，单纯的我，傻傻的问，谁是世界上最单纯的男人。把这句话中的 ‘单纯’ 全改成 ‘啦啦’
            <div><label :style="{color: 'blue'}">修改前:</label>  {{message}}</div>
            <div><label :style="{color: 'red'}">修改后:</label> {{message | messageFilter1('我靠')}}</div>
        </div>
        
        <div class="aaDiv">
            全局过滤器: main.js中写; 例子: 将小写字母转为大写字母
            <div><label :style="{color: 'blue'}">修改前:</label> {{lowerMsg}}</div>
            <div><label :style="{color: 'red'}">修改后:</label> {{lowerMsg | upper}}</div>
        </div>
    </div>
</template>

<script>
    // 定义一个 Vue 全局的过滤器(在main.js中有写)，名字叫做  timeFilter;  当全局过滤器和局部过滤器重名时，会采用局部过滤器   
    // Vue.filter('timeFilter', function(time) {
    //     // 字符串的  replace 方法，第一个参数，除了可写一个 字符串之外，还可以定义一个正则
    //     var year = time.getFullYear(); //获取年 
    //     var month = time.getMonth(); //获取月  
    //     var day = time.getDay(); //获取当日

    //     return `${year}-${month}-${day}`
    // })

    export default {
        name: 'know4',
        data() {
            return {
                time: new Date(),
                message: '曾经，我也是一个单纯的少年，单纯的我，傻傻的问，谁是世界上最单纯的男人。',
                lowerMsg: 'abc'
            }
        },
        methods: {
            
        },
        // 可接其他界面传过来的参数方法
        mounted() {
            console.log('this:', this, this.baseURL)
        },
        computed: {
            
        },
        
        // 在一个组件的选项中定义本地的过滤器(当全局过滤器和局部过滤器重名时，会采用局部过滤器), 可在 filters:{} 中定义多个过滤器;
        filters: {
            messageFilter0(message) {
                // 字符串的 replace()方法 第一个参数: 字符串/正则表达式
                return message.replace(/单纯/g, '啦啦')
            },
            //  过滤器的传参, 可以设置参数的默认值
            messageFilter1(message, arg) {
                // 字符串的 replace()方法 第一个参数: 字符串/正则表达式
                return message.replace(/单纯/g, arg='')
            },

            timeFilter: (time)=>{
                var curTime = new Date(time)
                var year = curTime.getFullYear(); //获取年 
                var month = curTime.getMonth() + 1; //获取月  getMonth() 从0开始, 因此+1
                var day = curTime.getDate(); //获取当日

                return `${year}-${month}-${day}`
            }
        }
    }
</script>

<style lang="scss" scoped>
    .aaDiv {
        background-color: blanchedalmond;
        margin: 10px;
    }
</style>