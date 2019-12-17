<template>
    <div id="login">
        <h3>登录界面</h3>
        <div>父组件传值进来的账号: {{this.account}}</div>
        <div>父组件传值进来的密码: {{this.password}}</div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        // 组件可供外界传值的属性(开放属性), 都是 父组件传递子组件时, 所定义的属性
        // props 中所定义的属性 只读
        props: {
            account: String,
            password: String
        },
        // 组件内部定义属性(私有属性); 可读可写
        data() {
            return {
               
            }
        },
        methods: {
            
        }
    }
</script>