<template id="c">
  <div>
    <h3>C组件：{{ name }}-{{ age }}</h3>
  </div>
</template>
<script>
// import Vue from 'vue'

// var Event = new Vue();//定义一个空的Vue实例
import bus from './bus.js'

export default {
  data() {
    return {
      name: '',
      age: ""
    }
  },
  mounted() {//在模板编译完成后执行
    bus.$on('data-a', name => {
      this.name = name;//箭头函数内部不会产生新的this，这边如果不用=>,this指代Event
    })
    bus.$on('data-b', age => {
      this.age = age;
    })
  }
}
</script>