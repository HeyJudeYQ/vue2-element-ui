<template>
  <div>
    <el-button type="primary" @click="handleParentFun">调用父组件方法</el-button>
    <div>{{ msg1 }}</div>
    <div>{{ msg2 }}</div>
  </div>
</template>
<script>
export default {
  inject: ['msg1', 'msg2'],
  created() {
    console.log('this.$attrs', this.$attrs)
    console.log('this.$listeners', this.$listeners)

    console.log('provide msg', this.msg1, this.msg2)
  },
  methods: {
    handleParentFun() {
      this.$listeners.parentFun([1, 2, 3, 4])
    },
  }
}
</script>