<template>
    <div id="me">
        <h1>我的界面</h1>
        <div v-on:click="toBackClick">点击返回</div>
    </div>
</template>

<script>
    export default {
        name: 'me',
        data() {
            return {

            }
        },
        // 页面渲染结束  可接收外接传进来的参数
        mounted() {

        },
        methods: {
            toBackClick() {
                // 返回上一个界面 -1
                this.$router.back(-1)
            }
        }
    }
</script>