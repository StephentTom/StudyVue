<template>
    <div id="know5">

    </div>
</template>

<script>
    export default {
        name: 'know5',
        data() {
            return {

            }
        },
        methods: {

        },

        beforeCreate() {
            // 在 beforeCreate() 中无法获取data() 与 methods 中的所定义的属性值 与 函数
        },
        created() {
            // 在 created() 中 可获取 data() 与 methods 中的所定义的属性值 与 函数
        },
        beforeMount() {
            // 模板在内存中编辑完成, 但尚未渲染到页面中
        },
        mounted() {
            // 渲染已完成, 创建期间的最后一个生命周期函数; 操作页面上的DOM节点的, 需要在此函数中进行
        },

        // 运行中事件
        beforeUpdate() {
            // 界面还没有更新, 但数据被更新了; 页面中的数据是旧的, 但此时 data() 中的数据是新的
        },
        updated() {
            // 界面的数据 与 data() 中的数据都是最新的
        },

        beforeDestroy() {
            // 组件已经进入销毁阶段, 所有data() methods 中的属性与函数, 都还可以使用
        },
        destroyed() {
            // 组件完全销毁, 所有数据 指令 方法 都不可用 销毁
        }


    }
</script>