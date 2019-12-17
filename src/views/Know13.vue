<template>
    <div id="know13">
        <h4 ref="myH4">获取Dom元素和组件 利用 ref 引用</h4>

        <input class="btn btn-primary" type="button" value="获取元素" @click="getElement">

        <!-- 利用ref 引用自定义组件 -->
        <Plus ref="myPlus"></Plus>

    </div>
</template>

<script>
    import '../assets/css/bootstrap.min.css'
    import Plus from './Plus'

    export default {
        name: 'know13',
        components: {
            Plus
        },
        data() {
            return {

            }
        },
        methods: {
            getElement() {
                // ref: 引用   
                console.log(this.$refs.myH4.innerText)

                console.log(this.$refs.myPlus.message)
                this.$refs.myPlus.show()
            }
        },
    }
</script>