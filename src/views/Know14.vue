<template>
    <div id="know14">
        <h1>vue-router  见App.vue children 子组件</h1>

        <router-link to="/know14/plus">plus</router-link>
        <router-view></router-view>

    </div>
</template>

<script>
    import '../assets/css/bootstrap.min.css'
    import Plus from './Plus'

    export default {
        name: 'know14',
        components: {
            
        },
        data() {
            return {

            }
        },
        methods: {
            
        },
    }
</script>