<template>
  <div class="container">
    <SYForm
      v-bind="formConfig"
      :formItems="formItems"
      v-model="formModelRef"
      ref="formRef"
    >
    </SYForm>
    <div class="button-container">
      <el-button class="add-button" type="primary" @click="addCrawler"
        >新增</el-button
      >
      <el-button class="add-button" type="info" @click="cancel">取消</el-button>
    </div>
  </div>
</template>

<script setup>
import config from './hooks/editFormConfig'
const emit = defineEmits(['add', 'cancel'])
const { formRef, formConfig, formItems, formModelRef } = config()
const addCrawler = async () => {
  const next = await formRef.value.submitFormPromise()
  if (next) {
    // emit
    emit('add', formModelRef.value)
  }
}
const cancel = () => {
  emit('cancel')
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
