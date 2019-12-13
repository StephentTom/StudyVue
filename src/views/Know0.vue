
<template>
    <div id="know0">
        <h1>
            v-cloak指令的学习 解决闪烁问题  v-text: 无闪烁问题 <br/>
            v-text="": 会覆盖标签中原来的值; 插值表达式( {{}} )可以在做拼接 <br/>
            v-html="": 可以把内容(html的样式)解析成html 
        </h1>
        <div class="innerDiv0">
            当网速慢的话, 页面就会显示出原始表达式, 因此这里使用 v-cloak解决差值表达式闪烁问题
            <p v-cloak>{{message}}</p>
            <p v-text="message"></p>
        </div>


        <h1>v-bind: 的使用, 用于绑定属性的指令; 简写 v-bind: ==> : </h1>
        <div class="innerDiv1">
            <input type="button" v-bind:value="bindTitle + '表达拼接'">
            <input type="button" :value="bindTitle + '简写'">
        </div>


        <h1>事件修饰符介绍</h1>
        <!-- 事件修饰符: 可以串联的 .xxx.yyy.zzz 先后顺序无关
            1. 使用 @click .stop 阻止冒泡(个人理解是阻止事件传递出去)
            2. 使用 @click .prevent 阻止默认行为事件
            3. 使用 @click .capture 使用捕获修饰后的标签, 则会先触发此标签事件
            4. 使用 @click .self 只有点击了当前所点击的事件(点击所修饰的当前标签的本身), 才触发, 不会进行事件传递. 只会阻止自己标签上的冒泡行为,不会阻止其他标签的冒泡
            5. 使用 @click .once 只触发一次事件
         -->

        <!-- 现象: 点击按钮时, 会触发按钮事件并也会被动触发父标签的事件 -->
        <div class="innerDiv1" @click="innerDivClick">
            阻止冒泡(阻止事件的传递) .stop
            <br/>
            <input type="button" value="点击" @click.stop="buttonClick">
        </div>

        <!--  -->
        <a href="http://www.baidu.com" @click.prevent="baiduClick">阻止默认点击a标签链接后跳转百度 .prevent</a>

        <!--  -->
        <div class="innerDiv1" @click.capture="innerDivClick">
            捕获事件 .capture 原本是点击按钮会先执行按钮事件, 使用捕获修饰后, 则会先触发被修饰的标签事件
            <br/>
            <input type="button" value="点击" @click="buttonClick">
        </div>

        <!--  -->
        <div class="innerDiv1" @click.self="innerDivClick">
            .self事件: 只有点击了当前所点击的事件, 才触发
            <br/>
            <input type="button" value="点击" @click="buttonClick">
        </div>

        <!--  -->
        <a href="http://www.baidu.com" @click.prevent.once="baiduClick">阻止默认点击a标签链接后跳转百度 并只触发一次,任何事件修饰都只会被修饰一次</a>
    </div>

</template>

<script>
    export default {
        name: 'know0',
        data() {
            return {
                message: '就是要lang, 不能低调!',
                bindTitle: 'v-bind的使用'
            }
        },
        methods: {
            innerDivClick() {
                console.log('innerDivClick')
            },
            buttonClick() {
                console.log('buttonClick')
            },
            baiduClick() {
                console.log('baiduClick')
            }
        }
    }
</script>

<style lang="scss" scoped>
    [v-cloak] {
        display: none;
    }

    .innerDiv0 {
        height: 150px;
        margin: 30px 0;
        background-color: burlywood;
    }
    .innerDiv1 {
        height: 80px;
        margin: 30px 0;
        background-color: burlywood;
    }
</style>