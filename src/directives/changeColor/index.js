import Vue from 'vue'
Vue.directive('change-color', function (el, binding, vnode) {
  el.style['color'] = binding.value;
})

// export default { changecolor }