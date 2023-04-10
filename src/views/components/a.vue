<template id="a">
  <div>
    <h3>A组件：{{ name }}</h3>
    <button @click="send">将数据发送给C组件</button>
  </div>
</template>
<script>
// import Vue from 'vue'

// var Event = new Vue()
import bus from './bus.js'

export default {
  data() {
    return {
      name: 'tom'
    }
  },
  methods: {
    send() {
      bus.$emit('data-a', this.name);
    }
  }
}
</script>