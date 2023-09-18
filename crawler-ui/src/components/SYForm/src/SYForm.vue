<template>
  <div>
    <!-- 表单 header -->
    <div class="header">
      <slot name="header"></slot>
    </div>
    <!-- 表单 具体内容 -->
    <el-form
      class="text-black ssybottom"
      :model="modelValue"
      :label-width="labelWidth"
      :label-position="labelPosition"
      :size="size"
      :rules="formRules"
      :disabled="disabled"
      ref="formRef"
    >
      <!--       :hide-required-asterisk="true"
                      :class="{ syshowRequired: item.required }"

-->
      <el-row :size="size">
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              class="marginbottom_10"
              v-if="!item.isHidden"
              :required="item.required"
              :label="item.label"
              :style="itemStyle"
              :prop="item.required ? '' : item.field"
            >
              <template
                v-if="
                  item.type === 'input' ||
                  item.type === 'password' ||
                  item.type === 'textarea'
                "
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  v-model="modelValue[`${item.field}`]"
                  :type="item.type"
                  autocomplete="on"
                  :name="item.field"
                >
                  <!--       :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)" -->
                  <template v-if="!!item.icon" #prefix>
                    <img
                      class="input-icon"
                      :src="require(`@/assets${item.icon}`)"
                      alt=""
                      srcset=""
                    />
                  </template>
                </el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  clearable
                  v-model="modelValue[`${item.field}`]"
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  @change="item.change"
                  class="w-100"
                >
                  <!--                   :fit-input-width="true"
 -->
                  <!-- suffix-icon="CaretBottom" -->
                  <template v-for="op in item.options" :key="op.value">
                    <el-option
                      :label="op.label"
                      :value="showAllSelectOptionValue ? op : op.value"
                      :disabled="op.disabled"
                    />
                  </template>
                </el-select>
              </template>
              <template v-else-if="item.type === 'cascader'">
                <el-cascader
                  style="width: 100%"
                  v-model="modelValue[`${item.field}`]"
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  :props="cascaderProps"
                  :options="item.options"
                  :show-all-levels="true"
                  clearable
                />
              </template>

              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-model="modelValue[`${item.field}`]"
                  value-format="YYYY-MM-DD"
                  v-bind="item.otherOptions"
                  type="date"
                  :placeholder="item.placeholder"
                  :size="size"
                />
              </template>
              <template v-else-if="item.type === 'daterange'">
                <el-date-picker
                  type="daterange"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  style="width: 100%"
                  v-model="modelValue[`${item.field}`]"
                  value-format="YYYY-MM-DD"
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  :size="size"
                />
              </template>
              <template v-else-if="item.type === 'button'">
                <el-button
                  :type="item.buttonType"
                  :style="item.style"
                  @click="buttonClick(item.tag)"
                >
                  {{ item.title }}
                </el-button>
              </template>
              <template v-else-if="item.type === 'radio'">
                <el-radio-group
                  v-model="modelValue[`${item.field}`]"
                  :placeholder="item.placeholder"
                  @change="item.change"
                  class="w-100"
                >
                  <template v-for="op in item.options" :key="op.value">
                    <el-radio :label="op.value" :disabled="op.disabled">{{
                      op.label
                    }}</el-radio>
                  </template>
                </el-radio-group>
              </template>

              <template v-else-if="item.type === 'richText'">
                <!-- <QuillEditor
                  theme="snow"
                  v-model:content="modelValue[`${item.field}`]"
                  contentType="html"
                /> -->
                <SYRichVue
                  v-model="modelValue[`${item.field}`]"
                  :updateKey="item.field"
                  :disabled="disabled"
                  v-bind="item.otherOptions"
                  @updateContent="updateContent"
                />
              </template>
              <template v-else-if="item.type === 'slot'">
                <!-- <QuillEditor
                  theme="snow"
                  v-model:content="modelValue[`${item.field}`]"
                  contentType="html"
                /> -->
                <slot
                  :name="item.field"
                  :disabled="disabled"
                  v-bind="item.otherOptions"
                  :item="item"
                ></slot>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
      <!-- 自定义表单内容 -->
      <slot name="custom"></slot>
    </el-form>

    <!-- 表单 footer -->
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
/*
1. 定义传入参数类型
2. 定义
*/
import { reactive, ref } from 'vue'
import { creatFormDate, creatFormRules } from './Rule.js'
import SYRichVue from './richText/SYRich.vue'

import '@vueup/vue-quill/dist/vue-quill.snow.css'

const props = defineProps({
  // 双向绑定数据
  modelValue: {
    type: Object,
    required: true
  },
  // 数据源定义
  formItems: {
    type: Array,
    default: () => {
      return [
        {
          //类型 input select
          type: '',
          // 服务端通信字段
          field: '',
          // 默认值
          value: '',
          // 标题
          label: '',
          // 图标 这里写入路径的时候，可以省略 assets 前面的路径,譬如 /login/account.png
          icon: '',
          // 提示文字
          placeholder: '',
          // 样式
          style: {},
          // 选择框带的选项
          options: [],
          otherOptions: {},
          // 校验规则
          rules: [],
          isHidden: true
        }
      ]
    }
  },
  // 总体样式定义
  size: {
    type: String,
    default: 'default'
  },
  labelPosition: {
    type: String,
    default: 'left'
  },
  labelWidth: {
    type: String,
    default: 'auto'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px 20px' })
  },

  colLayout: {
    type: Object,
    default: () => ({
      xl: 24, // >1920px 4个
      lg: 24,
      md: 24,
      sm: 24,
      xs: 24
    })
  },
  // 是否可编辑
  disabled: {
    type: Boolean,
    default: false
  },
  //选择项的value 是否用 model本身，默认是model，false 表示value使用 model.value
  showAllSelectOptionValue: {
    type: Boolean,
    default: true
  }
})

const cascaderProps = {
  expandTrigger: 'hover',
  value: 'orgName'
}

const updateContent = (key, value) => {
  props.modelValue[key] = value
}
const formRef = ref(null)

let formDate = reactive(creatFormDate(props.formItems))

let formRules = reactive(creatFormRules(props.formItems))

let emits = defineEmits(['update:modelValue', 'changeVal', 'buttonClick'])
// const inputData = ref(props.modelValue)
// const changeVal = (e) => {
//
//   emits('update:modelValue', inputData.value)
// }
// const submitForm = async (formEl: FormInstance | undefined) => {
//   if (!formEl) return
//   await formEl.validate((valid, fields) => {
//     if (valid) {
//
//     } else {
//
//     }
//   })
// }

const submitForm = async (next) => {
  await formRef.value.validate((valid) => {
    if (valid) {
      next()
    } else {
      let isError = document.getElementsByClassName('is-error')
      isError[0].scrollIntoView({
        // 滚动到指定节点
        // 值有start,center,end，nearest，当前显示在视图区域中间
        block: 'center',
        // 值有auto、instant,smooth，缓动动画（当前是慢速的）
        behavior: 'smooth'
      })

      return false
    }
  })
}

const submitFormPromise = async (next) => {
  let valid = true
  await formRef.value
    .validate()
    .then(() => {
      valid = true
    })
    .catch((err) => {
      let isError = document.getElementsByClassName('is-error')
      isError[0].scrollIntoView({
        // 滚动到指定节点
        // 值有start,center,end，nearest，当前显示在视图区域中间
        block: 'center',
        // 值有auto、instant,smooth，缓动动画（当前是慢速的）
        behavior: 'smooth'
      })
      valid = false
    })

  next(valid)
  return valid
}

const clearValidate = () => {
  formRef.value.clearValidate()
}

const buttonClick = (tag) => {
  emits('buttonClick', tag)
}
// const submitForm = () => {
//
//   formRef.value.validate((valid, fields) => {
//     if (valid) {
//
//     } else {
//
//     }

//
//     return valid
//   })
// }

defineExpose({
  submitForm,
  submitFormPromise,
  clearValidate
})
</script>

<style lang="scss" scoped>
.ssybottom {
  margin-bottom: 0;
  .marginbottom_10 {
    margin-bottom: 15px;
  }
}

.w-100 {
  width: 100%;
}
.el-form-item--large {
  --font-size: 20px;
  --font-width: 100;
  font-weight: 400;
}
.el-input--large {
  font-size: 22px;
  font-weight: 400;
}

.input-icon {
  // width: 27px;
  max-height: 55%;
}

.syshowRequired > .el-form-item__label:before {
  content: '*';
  color: var(--el-color-danger);
  margin-right: 4px;
  background-color: red;
}
// .input-icon img {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   -webkit-transform: translate(-50%, -50%);
//   transform: translate(-50%, -50%);
//   display: block;
//   max-width: 100%;
//   max-height: 100%;
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
//   outline: none;
// }
</style>
