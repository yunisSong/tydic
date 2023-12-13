<template>
  <div>
    <el-dialog
      v-if="getShow"
      v-model="getShow"
      :width="width"
      :before-close="beforClose"
      v-bind="canClose"
      :fullscreen="fullscreen"
    >
      <!--       :show-close="false" -->
      <!-- <template #header="{ close, titleId, titleClass }"> -->
      <template #header>
        <slot name="myHeader">
          <div class="my-header">
            <div class="divider">{{ title }}</div>
          </div>
        </slot>
      </template>
      <slot name="default" class="content" />

      <template #footer>
        <div class="backBtn" v-if="!hiddenFooterButtonView">
          <template v-if="onlyOkButton">
            <el-button
              class="bottomLayout"
              type="primary"
              @click="handlerSubmit"
            >
              {{ okTitle }}
            </el-button>
          </template>
          <template v-else-if="onlyBackButton">
            <el-button class="bottomLayout" type="primary" @click="cancel">
              {{ cancelTitle }}
            </el-button>
          </template>
          <template v-else>
            <el-button
              class="bottomLayout"
              type="primary"
              @click="handlerSubmit"
            >
              {{ okTitle }}
            </el-button>
            <el-button class="bottomLayout" @click="cancel">
              {{ cancelTitle }}
            </el-button>
          </template>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { Close } from '@element-plus/icons-vue'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  isShow: {
    type: Boolean,
    default: false
  },
  hiddenFooterButtonView: {
    type: Boolean,
    default: false
  },
  onlyOkButton: {
    type: Boolean,
    default: false
  },
  onlyBackButton: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '50%'
  },
  okTitle: {
    type: String,
    default: '提交'
  },
  cancelTitle: {
    type: String,
    default: '返回'
  },
  forcedDisplay: {
    type: Boolean,
    default: false
  },
  fullscreen: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['update:isShow', 'beforClose', 'ok', 'cancel'])
const beforClose = () => {
  emits('update:isShow', false)
  emits('beforClose')
}
const hiddenDialog = () => {
  emits('update:isShow', false)
}
const handlerSubmit = () => {
  // dialog 点击确定按钮之前处理相关业务逻辑
  emits('ok', hiddenDialog)
}
const cancel = () => {
  // dialog 点击确定按钮之前处理相关业务逻辑
  emits('update:isShow', false)
  emits('cancel')
}
const getShow = computed({
  get: () => props.isShow,
  set: (val) => {
    emits('update:isShow', val)
  }
})
const canClose = computed(() => {
  if (props.forcedDisplay) {
    return {
      'close-on-click-modal': false,
      'close-on-press-escape': false,
      'show-close': false
    }
  } else {
    return {
      'close-on-click-modal': true,
      'close-on-press-escape': true,
      'show-close': true
    }
  }
})
</script>

<style lang="scss" scoped>
.my-header {
  margin-right: -15px;
  // display: flex;
  // flex-direction: row;
  // justify-content: space-between;
  // align-items: center;

  // .closeBtn {
  //   width: 25px;
  //   height: 25px;
  // }
}
.content {
  margin-top: -20px;
}
.divider {
  padding-bottom: 12px;
  border-bottom: 1px solid #d3dae8;
  font-weight: 700;
  color: #262f4d;
  font-size: 14px;
}
.backBtn {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
