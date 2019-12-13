<template>
    <div id="know1">
        <h1>class样式</h1>
        
        <h4 class="red italic">第一种普遍写法: 这是个H4标签, 用于测试</h4>

        <!-- 直接传递数组, 这里的class需要使用 v-bind: 数据绑定 简写 : -->
        <h4 :class="['thin', 'italic']">第二种vue的绑定写法: 这是个H4标签, 用于测试</h4>

        <!-- flag&&'textMargin' 可改为 flag? 'textMargin' : '' -->
        <h4 v-bind:class="['italic', flag&&'textMargin']">第三种vue的表达式写法 : 这是个H4标签, 用于测试</h4>
        <!-- 在数组中使用对象来替代三元表达式 red必须是被style中定义了的class -->
        <h4 v-bind:class="['italic', {'red': flag}]">第三种vue的表达式写法 : 这是个H4标签, 用于测试</h4>

        <!-- 在为class使用 v-bind: 绑定时, 对象的属性是类名(style中定义的class), 由于对象的属性可带引号 可不带引号, 所以这里没有带引号 -->
        <h4 :class="[{red: true, textMargin: true, italic: false}]">第四种vue的直接对象写法 : 这是个H4标签, 用于测试</h4>


        <h1>内联样式 :style</h1>
        <div :style="{color: 'red', 'font-weight': 100}">可以把样式写成属性</div>
        <div :style="divStyle0">可以把样式写成属性</div>
        <div :style="[divStyle0, divStyle1]">可以把样式写成属性, 并放到数组中</div>


        <h1>Vue指令之 v-for, key属性(只能使用 number或string类型, 必须使用v-bind: 属性绑定形式), 保证数据的唯一性</h1>
        <div :style="{'background-color': 'pink'}">
            遍历数组 <br/>
            <span v-for="item in list" :key="item">{{item}}, </span> 
        </div>

        <div :style="{'background-color': 'aquamarine'}">
            遍历数组, 获取索引值 <br/>
            <span v-for="(item, i) in list" :key="i">{{item}}~i={{i}}, </span> 
        </div>

        <div :style="{'background-color': 'red'}">
            遍历对象数组(数组中存放着对象), 获取索引值 <br/>
            <span v-for="(user, i) in users" :key="i + '.unique'">{{user.name}}-{{user.age}}-{{i}}, </span>
        </div>
        
        <!-- 在遍历对象时, (value(值), key(键), i(索引)) in user -->
        <div :style="{'background-color': 'green'}">
            遍历对象, 可获取 value key <br/>
            <span v-for="(val, key) in user" :key="key">{{key}}-{{val}}, </span> 
        </div>

        <div :style="{'background-color': 'chartreuse'}">
            迭代数字遍历, 遍历的是写死数字; 则值是从1开始计算, 索引是从0开始计算 <br/>
            <span v-for="value in 10" :key="value + '.A'">{{value}}, </span> 
        </div>

        <div :style="{'font-size': '30px'}">例子, 设置key的重要性</div>

        <div>
            <label>name:</label>
            <!-- 输入文本后, 会改变data中定义的name属性值 -->
            <input type="text" v-model="name"/>
        </div>
        <div>
            <input type="button" value="add" @click="add">
        </div>

        <div v-for="item in historys" :key="item.name">
            <input type="checkbox"/>
            <label>{{item.name}}</label>
        </div>


        <h1>Vue指令之 v-if | v-show.  v-if: 有较高的切换性能消耗; v-show: 有较高的初始渲染消耗; 如果元素涉及到频繁的切换, 最好不要使用v-if</h1>
        <!-- <input type="button" value="点击show or hide" @click="toggle"> -->
        <input type="button" value="点击show or hide" @click="isShow=!isShow">
        <div v-if="isShow">v-if控制 -- 元素直接移除/重新创建</div>
        <div v-show="isShow">v-show控制 -- 元素设置成 display: none; 元素还存在</div>

    </div>
</template>

<script>
    export default {
        name: 'know2',
        data() {
            return {
                flag: true,

                divStyle0: {color: 'red', 'letter-spacing': '0.5em', 'background-color': 'aquamarine'},
                divStyle1: {color: 'green', 'background-color': 'pink'},

                list: [111, 222, 333,444, 555],
                users: [
                    {name: 'a', age: 10}, 
                    {name: 'b', age: 11}, 
                    {name: 'c', age: 12}
                ],
                user: {name: 'AAA', age: 10},
                historys: [
                    {name: '秦始'},
                    {name: '刘邦'},
                    {name: '刘备'}
                ],
                name: '',
                isShow: true,
            } 
        },
        methods: {
            add() {
                if (this.name.length) {
                    // 加入到最后一个位置
                    // this.historys.push({name: this.name})
                    // 添加到第一个位置
                    this.historys.unshift({name: this.name})
                }
            },
            toggle() {
                this.isShow = !this.isShow
            }
        }
    }
</script>

<style lang="scss" scoped>
    .red {
        color: red;
    }
    .thin {
        font-weight: 200;
    }
    .italic {
        // 文字倾斜
        font-style: italic;
    }
    .textMargin {
        letter-spacing: 0.5em;
    }
</style>