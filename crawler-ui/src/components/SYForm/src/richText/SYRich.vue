<template>
  <div class="quillEditor_container">
    <QuillEditor
      class="quillEditor_edit"
      :class="cssClass"
      :options="editorOption"
      theme="snow"
      v-model:content="content"
      contentType="html"
      :readOnly="disabled"
    />
  </div>
</template>

<script setup>
import { defineProps, watch, defineEmits, ref, computed } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
const props = defineProps({
  // 双向绑定数据
  modelValue: {
    type: String,
    required: true
  },
  updateKey: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const content = ref('')

if (props.modelValue) {
  content.value = props.modelValue
}
const emits = defineEmits(['updateContent'])

var toolbarOptions = [
  // [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown

  [
    { header: [1, 2, 3, 4, 5, 6, false] },
    'bold',
    'italic',
    'underline',
    'strike',
    'link',
    { list: 'ordered' },
    { list: 'bullet' },
    { color: [] },
    { background: [] },
    'clean'
  ] // toggled buttons
]
const editorOption = {
  // debug: 'info',
  modules: {
    toolbar: toolbarOptions
  }
  // placeholder: 'Compose an epic...',
  // readOnly: true,
  // theme: 'snow'
}

watch(content, (v) => {
  emits('updateContent', props.updateKey, v)
})

//获取焦点事件
const focus = (event) => {
  event.enable(props.disabled) //设置富文本编辑器不可编辑
}
const cssClass = computed(() => {
  return {
    disabledBgColor: props.disabled
  }
})
</script>

<style lang="scss">
.quillEditor_container {
  width: 100%;
}
.ql-editor {
  min-height: 100px;
  max-height: 300px;
}
.disabledBgColor {
  background-color: rgb(247, 249, 252);
}
</style>
