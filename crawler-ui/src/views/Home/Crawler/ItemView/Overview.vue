<template>
  <div>
    <SYForm
      v-bind="formConfig"
      :formItems="formItems"
      v-model="formModelRef"
      ref="formRef"
    >
    </SYForm>
  </div>
</template>

<script setup>
import config from './hooks/Overview.js'
const { formModelRef, formConfig, formItems } = config()
</script>

<style lang="scss" scoped></style>
