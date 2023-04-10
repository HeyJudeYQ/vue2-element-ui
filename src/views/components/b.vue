<template id="b">
  <div>
    <h3>B组件：{{ age }}</h3>
    <button @click="send">将数组发送给C组件</button>
  </div>
</template>
<script>
// import Vue from 'vue'

// var Event = new Vue();//定义一个空的Vue实例
import bus from './bus.js'

export default {
  data() {
    return {
      age: 20
    }
  },
  methods: {
    send() {
      bus.$emit('data-b', this.age);
    }
  }
}
</script>