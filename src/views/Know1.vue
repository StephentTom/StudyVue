<template>
    <div id="know1">
        <h1>v-model实现表单元素的数据双向绑定</h1>
        <div class="innerDiv">
            <h5>{{message}}</h5>

            <!-- v-bind: 只能实现数据的单向绑定, 从model->view, 无法实现数据的双向绑定 -->
            <!-- <input id="textInput" type="text" :value="message"/> -->

            <!-- 使用v-model指令 可以实现 表单元素与model中数据的双向绑定
                 注意: v-model 只能运用在 表单元素中, 例如: input(radio, text, address, email textarea ... ), select checkbox
             -->
            <input class="textInput" type="text" v-model="message"/>
        </div>

        <h1>v-model实现简易计算器</h1>
        <div>
            <input class="textInput" type="text" v-model="addend0">
            <select class="select" v-model="symbol">
                <!-- 当select选择了某个option, 所拿到值是 value -->
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input class="textInput" type="text" v-model="addend1">
            <input type="button" value="=" @click="equalClick">
            <input class="textInput" type="text" v-model="result">
        </div>

        <h1>总结</h1>
        <h3>插值表达式:</h3>
        <div>v-cloak</div>
        <div>v-text</div>
        <div>v-html</div>
        <div>v-bind:(简写 :)</div>
        <div>v-on:click(简写 @click)</div>
        <div>v-model(只能应用于表单元素)</div>
        <div>v-for + :key</div>
        <div>v-if</div>
        <div>v-show</div>

        <h3>事件修饰符:</h3>
        <div> .stop </div>
        <div> .prevent </div>
        <div> .capture </div>
        <div> .self </div>
        <div> .once </div>

        <h3>在vue中绑定样式两种方式: 
            v-bind:class  
            v-bind:style
        </h3>

    </div>
</template>

<script>
    export default {
        name: 'know1',
        data() {
            return {
                message: '浪起来, 不怂!!!',
                addend0: '',
                addend1: '',
                result: '',
                symbol: '+'
            } 
        },
        methods: {
            equalClick() {
            // 方式一:
                // if (this.symbol == '/' && this.addend1 == 0) {
                //     return 
                // }
                // switch (this.symbol) {
                //     case '+': this.result = parseInt(this.addend0) + parseInt(this.addend1)
                //     break;

                //     case '-': this.result = parseInt(this.addend0) - parseInt(this.addend1)
                //     break;

                //     case '*': this.result = parseInt(this.addend0) * parseInt(this.addend1)
                //     break;

                //     case '/': this.result = parseInt(this.addend0) / parseInt(this.addend1)
                //     break;
                // }

            // 方式二: 
                if (this.symbol == '/' && this.addend1 == 0) { return }
                var codeString = 'parseInt(this.addend0)' + this.symbol + 'parseInt(this.addend1)'
                // 利用eval去解析字符串
                this.result = eval(codeString) // 尽量少用 eval(string)函数
            }
        }
    }
</script>

<style lang="scss" scoped>
    .innerDiv {
        height: 90px;
        background-color: burlywood;
    }
    .textInput {
        margin: 0 10px;
    }
</style>