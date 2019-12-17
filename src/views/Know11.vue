<template>
    <div id="know11">
        <h1>组件的切换效果 + 组件切换的动画效果</h1>
        <div class="DIV">
            <a href="" @click.prevent="cmpName='login'">登录</a>
            <br/>
            <a href="" @click.prevent="cmpName='register'">注册</a>
        </div>
        
        <!-- Vue提供了 component元素, 用来展示对应名称的组件;
            component 是一个占位元素, :is 属性 可以用来指定要展示的组件名称; :is="'login'"
         -->
        <div>普通切换</div>
        <component :is="cmpName"></component>


        <div>动画切换</div>
        <!-- 通过 mode 属性, 设置组件切换时候的方式, 第一个组件先出去后, 其他组件再进场 -->
        <transition mode="out-in">
            <component :is="cmpName"></component>
        </transition>


        <!-- 总结: 当前Vue提供的标签:
            component,  transition,  transition-group
         -->
    </div>
</template>

<script>
    import Login from './Login';
    import Register from './Register';

    export default {
        name: 'know11',
        data() {
            return {
                cmpName: ''
            }
        },
        methods: {
            
        },
        components: { // 放置自定义组件, 见Home.vue
            Login,
            Register
        },
    }
</script>

<style lang="scss" scoped>
    .DIV {
        padding: 15px 15px;
        background-color: burlywood;
        height: 60px;
    }

    .v-enter,
    .v-leave-to {
        opacity: 0;
        transform: translateX(150px)
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 1s ease-in;
    }

    .v-move {
        transition: all 1s ease-in
    }
    .v-leave-active {
        position: absolute;
    }
</style>