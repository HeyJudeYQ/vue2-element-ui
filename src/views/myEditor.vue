<template>
  <div id="editor">
  </div>
</template>
<script>
import mkEditor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css'
export default {
  mounted() {
    this.initEdit()
    let obj = { name: 'jude' }
    let test = obj
    let wmap = new WeakMap()

    wmap.set(obj, 'hello')
    console.log('setset', wmap.get(obj))// hello
    obj = null
    test = null
    console.log('obj', obj)
    console.log('test', test)
    // setTimeout(() => {
    console.log('wmap', wmap)
    // }, 500)
  },
  methods: {
    initEdit() {
      const editor = new mkEditor({
        el: document.querySelector('#editor'),
        height: '500px',
        initialEditType: 'markdown',
        previewStyle: 'vertical'
      });
      editor.getMarkdown();
    }
  }
}
</script>