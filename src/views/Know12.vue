<template>
    <div id="know12">
        <h1>
           <div :style="{'background-color': 'pink'}">父组件向子组件传值  v-bind: </div>
           <div :style="{'background-color': 'chartreuse'}">父组件把方法传递给子组件, 让子组件使用  v-on:</div>
        </h1>
        
        <!-- 通过数据绑定, 把父组件的属性数据 绑定(v-bind:)的形式, 把值传给子组件 -->
        <Login v-bind:account="accountP" v-bind:password="passwordP"></Login>

        <!-- 通过事件绑定机制 v-on:xxx="" 可简写为 @xxx=""  -->
        <Register v-on:registerClick="parentClick"></Register>


        <h1>组件练习 评论列表</h1>

        <CommentBox @postComment="reloadData"></CommentBox>

        <ul class="list-group">
            <li class="list-group-item" v-for="item in list" :key="item.id">
                <span class="badge">评论人: {{item.name}}</span>
                {{item.content}}
            </li>
        </ul>

    </div>
</template>

<script>
    import Login from './Login';
    import Register from './Register';
    import Plus from './Plus';
    import CommentBox from './CommentBox';
    import '@/assets/css/bootstrap.min.css'

    export default {
        name: 'know12',
        data() {
            return {
                accountP: '13356982145',
                passwordP: '123456',

                list: [
                    {id: Date.now(), name: '李白', content: '醉酒'},
                    {id: Date.now(), name: '杜甫', content: '山小'},
                    {id: Date.now(), name: '居易', content: '窗前'}
                ]
            }
        },
        methods: {
            parentClick(account, password) {
                console.log('父组件点击事件: parentClick账号:' + account + '密码:' + password)
            },

            // 提交评论后, 刷新list
            reloadData(model) {
                // this.list.push(model)
                this.list.unshift(model);
            }
        },
        components: { // 放置自定义组件, 见Home.vue
            Login,
            Register,
            Plus,
            CommentBox
        },
    }
</script>

<style lang="scss" scoped>
    
</style>