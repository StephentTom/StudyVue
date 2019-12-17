<template>
    <div id="box">
        <!-- form-group: 增加盒子的下边界距离
             form-control： 充满整个父元素，并且有换行作用
         -->
        <div class="form-group">
            <label>评论人: </label>
            <input class="form-control" type="text" v-model="name">
        </div>

        <div class="form-group">
            <label>评论内容: </label>
            <textarea class="form-control" v-model="content"></textarea>
        </div>

        <div class="form-group">
            <input class="btn btn-primary" type="button" value="发表评论" @click="commitContent">
        </div>

    </div>
</template>

<script>
    import '../assets/css/bootstrap.min.css'

    export default {
        name: 'box',
        data() {
            return {
                name: '',
                content: ''
            }
        },
        methods: {
            commitContent() {
                // 关于localStorage的使用: localStorage 只支持存放字符串数据, 要先用 JSON.stringfy() 进行转换; JSON.parse()

                var comment = {id: Date.now(), name: this.name, content: this.content};

                // 从 localStorage 中获取所有评论 并转为对象
                var list = JSON.parse(localStorage.getItem('cmts') || '[]')
                // 保存最新的皮评论数据
                // localStorage.setItem('', JSON.stringify(list))
                // 将最新评论放到list的最前, unshift
                // list.unshift(comment)

                if (this.name.length && this.content.length) {
                    this.$emit('postComment', comment)
                    this.name = this.content = '';
                }
            }
        }
    }
</script>