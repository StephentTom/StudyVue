<template>
  <div class="about">
    <h1>跑马灯效果</h1>

    <input type="button" value="浪起来" @click="run" class="button runButton">
    <input type="button" value="低调" @click="stop" class="button stopButton">

    <h4>{{message}}</h4>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        message: '猥琐发育, 别浪~~~',
        timer: null
      }
    },
    methods: {
      run: function() {
        if (this.timer != null) return

        this.timer = setInterval(() => {
          var start = this.message.substring(0, 1)
          var end = this.message.substring(1)
          this.message = end + start
        }, 300);
      },
      stop() {
        if (this.timer) {
          clearInterval(this.timer)
          this.timer = null
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    width: 80px;
    height: 35px;
  }
  .runButton {
    margin-right: 30px;
  }
  .stopButton {
    margin-left: 30px;
  }
</style>