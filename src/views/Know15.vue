<template>
    <div id="know15">
        
        <HeaderBar></HeaderBar>
        <div class="container">
            <LeftBox></LeftBox>
            <MainBox></MainBox>
        </div>

    </div>
</template>

<script>
    import '../assets/css/bootstrap.min.css'
    // @ts-ignore
    import HeaderBar from '../components/HeaderBar.vue'
    // @ts-ignore
    import LeftBox from '../components/LeftBox.vue'
    // @ts-ignore
    import MainBox from '../components/MainBox.vue'

    export default {
        name: 'know15',
        components: {
            HeaderBar,
            LeftBox,
            MainBox
        },
        data() {
            return {

            }
        },
        methods: {
            
        },
    }
</script>

<style lang="scss" scoped>
    .container {
        margin: 0;
        padding: 0;
        height: 500px;
        display: flex;
    }
</style>