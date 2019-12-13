<template>
    <div id="know6">
        <h3>
            除了 vue-resource之外, 还可以使用 'axios'实现数据请求 
        </h3>

        <div class="div-wrapper">
            <van-button type="danger" @click="vr_getRequest">v-resource get请求</van-button>

             <van-button class="van-button" type="danger" @click="ax_getRequest">axios get请求</van-button>
        </div>

        <div class="div-wrapper">
            <van-button type="info" @click="vr_postRequest">v-resource post请求</van-button>

            <van-button class="van-button" type="info" @click="ax_postRequest">axios post请求</van-button>
        </div>
        
        <div class="div-wrapper">
            <van-button type="default" @click="vr_jsonpRequest">v-resource jsonp请求</van-button>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue';
    /*引入资源请求插件*/
    import VueResource from "vue-resource";
    import axios from "axios";
    /*使用VueResource / axios插件*/
    Vue.use(VueResource);
    
    // 使用vant库
    import {Button, Circle} from 'vant';
    

    export default {
        name: 'know6',
        components: {
            [Button.name]: Button,
            [Circle.name]: Circle
        },
        data() {
            return {
                text: '20%'
            }
        },
        methods: {
            // 请求需要跨域设置(设置白名单)
            vr_getRequest() {
                this.$http
                .get('https://www.runoob.com/try/ajax/json_demo.json')
                .then((rs)=>{
                    console.log('get 结果:', rs)
                })
            },
            vr_postRequest() {
                // 通过post方法的第三个参数 options, 设置提交内容类型为普通的表单模式
                this.$http.post('https://www.runoob.com/try/ajax/demo_axios_post.php', {}, {emulateJSON: true})
                .then((rs)=>{
                    console.log('post 结果:', rs)
                })
            },
            vr_jsonpRequest() {
                this.$http.jsonp('http://vue.studyit.io/api/jsonp')
                .then((rs)=>{
                    console.log('jsonp 结果:', rs)
                })
            },

            ax_getRequest() {
                // 可设置参数; 可见: https://www.runoob.com/vue2/vuejs-ajax-axios.html
                axios.get('https://www.runoob.com/try/ajax/json_demo.json')
                .then((rs)=>{
                    console.log('axios get 结果:', rs)
                }).catch((error)=>{
                    console.log('axios get error结果:', error)
                })
            },
            ax_postRequest() {
                // 可设置参数; 可见: https://www.runoob.com/vue2/vuejs-ajax-axios.html
                axios.post('https://www.runoob.com/try/ajax/demo_axios_post.php')
                .then((rs)=>{
                    console.log('axios post 结果:', rs)
                }).catch((error)=>{
                    console.log('axios post error结果:', error)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .div-wrapper {
        margin-top: 10px;
    }

    .van-button {
        margin-right: 10px;
    }
</style>