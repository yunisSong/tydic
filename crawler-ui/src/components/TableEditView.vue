<!--
  表格右上角编辑视图
· 一般是两个按钮或者一个按钮，可以通过配置来控制
 -->
<template>
  <div class="editView">
    <template v-for="item in buttons" :key="item.name">
      <template v-if="item.buttonType === 'add'">
        <!-- <el-icon><Plus /></el-icon> -->
        <el-button class="flex_m" type="primary" :icon="Plus" @click="addClick">
          {{ item.name }}
        </el-button>
      </template>
      <template v-else-if="item.buttonType === 'import'">
        <el-button class="flex_m" :icon="UploadFilled" @click="importClick">
          {{ item.name }}
        </el-button>
      </template>
      <template v-else-if="item.buttonType === 'down'">
        <el-button class="flex_m" :icon="Download" @click="downClick">
          {{ item.name }}
        </el-button>
      </template>
      <template v-else-if="item.buttonType === 'template'">
        <el-button class="flex_m" :icon="Download" @click="downTemplateClick">
          {{ item.name }}
        </el-button>
      </template>
    </template>
  </div>
</template>

<script setup>
import { Plus, UploadFilled, Download } from '@element-plus/icons-vue'
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  content: '',
  buttons: {
    type: Array,
    default: () => {
      return [
        {
          buttonType: 'add',
          name: '添加'
        }
      ]
    }
  }
})
let emits = defineEmits(['add', 'import', 'down', 'downTemplate'])

const importClick = () => {
  emits('import')
}
const addClick = () => {
  emits('add')
}
const downClick = () => {
  emits('down')
}
const downTemplateClick = () => {
  emits('downTemplate')
}
</script>

<style lang="scss" scoped>
.editView {
  display: flex;
  justify-content: flex-end;
  margin: 0 0 10px 0;
  .flex_m {
    margin-left: 8px;
    z-index: 88;
  }
  .flex_img {
    margin-left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 88;
  }
}
</style>
