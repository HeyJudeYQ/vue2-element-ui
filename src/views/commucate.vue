<template>
  <div>
    <h3>props:父组件通过v-bind传入，子组件通过props接收,props中数据流是单项的，即子组件不可改变父组件传来的值</h3>
    <children-com :title="title" :data="list" :brandList="brandList" @onEmitBrand="onEmitBrand" @sendMsg="getMsg">
    </children-com>
    <br>
    <h1>父组件</h1>
    <attrs-com @parentFun="parentFun" :msg="msg"></attrs-com>
    <br />
    <a-com></a-com>
    <br>
    <b-com></b-com>
    <br>
    <c-com></c-com>
    <br>
    <div v-change-color="color">{{ color }}</div>
  </div>
</template>
<script>
import ChildrenCom from './components/children'
import AttrsCom from './components/attrs'
import ACom from './components/a.vue'
import BCom from './components/b.vue'
import CCom from './components/c.vue'
export default {
  name: 'commucate',
  components: { ChildrenCom, AttrsCom, ACom, BCom, CCom },
  data() {
    return {
      title: '父组件title',
      list: [1, 2, 3],
      msg: 'msg',
      color: 'yellowgreen',
      brandList: ["BMW", "Benz", "Audi"]
    }
  },
  created() {
    console.log('$parent', this.$parent)
    console.log('$children', this.$children)
  },
  provide() {
    return {
      msg1: '子组件msg1',
      msg2: '子组件msg2'
    }
  },
  methods: {
    // 子组件传递给父组件
    getMsg(val) {
      console.log(val)
    },
    parentFun(val) {
      console.log(`父组件方法被调用，获得子组件传值${val}`)
    },
    onEmitBrand(item) {
      console.log(`您选择的品牌是${item}`);
    }
  },
}
</script>