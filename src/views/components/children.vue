<template>
  <div>
    <div>子组件：{{ title }}</div>
    <div>子组件：{{ data }}</div>
    <div>
      <el-button @click="sendMsg" type="primary">send</el-button>
    </div>
    <div>
      <!-- <h1>子组件11111111</h1> -->
      <span v-for="(item, index) in brandList" :key="index" @click="emitBrand(item)">
        {{ item }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'children',
  props: {
    title: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default: []
    },
    brandList: {
      type: Array,
      default: []
    }
  },
  methods: {
    sendMsg() {
      this.$emit('sendMsg', 'hello')
    },
    emitBrand(item) {
      this.$emit('onEmitBrand', item)
    }
  },
}
</script>