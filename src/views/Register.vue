<template>
    <div id="register">
        <h3>注册界面</h3>

        <input class="btn btn-default" type="button" value="点击 方法是父组件提供" @click="registerAction">
    </div>
</template>

<script>
    import '@/assets/css/bootstrap.min.css'

    export default {
        name: 'register',
        props: {

        },
        data() {
            return {
                model: {id: 1, name: '注册'}
            }
        },
        // 页面渲染结束  可接收外接传进来的参数
        mounted() {

        },
        methods: {
            registerAction() {
                // 当子组件点击按钮后, 执行父组件传递过来的方法
                // emit: 触发, 调用
                // 传参到父组件中(可以不传, 可传多个参数, 可传子组件中data中的 this.model)

                // 调用父组件中的方法, 并子组件给父组件所调用的方法传参; 这里是传多个参数
                // 'registerClick': 绑定的函数名  '18356968588': 参数1  '123456': 参数2
                this.$emit('registerClick', '18356968588', '123456')
            }
        }
    }
</script>