<template>
  <div>
    <div class="msg" :class="alignTypeClass">
      <div
        class="msg-img"
        style="
          background-image: url(https://image.flaticon.com/icons/svg/327/327779.svg);
        "
      ></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">{{ name }}</div>
          <div class="msg-info-time">{{ getCurrentTime() }}</div>
        </div>

        <div class="msg-text" ref="megRef">
          <template v-if="typing == true">
            <Typing :msg="msg" />
          </template>
          <template v-else>
            {{ msg }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { computed, ref } from 'vue';

import getCurrentTime from '../util/data';
import Typing from './Typing.vue';

// left right msg letter
const props = defineProps({
  name: String,
  alignType: String,
  msg: String,
  typing: Boolean
})
const megRef = ref(null)
console.log('megRef: ', megRef)
const alignTypeClass = computed(() => {
  return {
    'left-msg': props.alignType == 'left',
    'right-msg': props.alignType == 'right'
  }
})
</script>

<style lang="scss" scoped>
.msg {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
}
.msg:last-of-type {
  margin: 0;
}
.msg-img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  background: #ddd;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
}
.msg-bubble {
  max-width: 450px;
  padding: 15px;
  border-radius: 15px;
  background: var(--left-msg-bg);
}
.msg-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.msg-info-name {
  margin-right: 10px;
  font-weight: bold;
}
.msg-info-time {
  font-size: 0.85em;
}

.left-msg .msg-bubble {
  border-bottom-left-radius: 0;
}

.right-msg {
  flex-direction: row-reverse;
}
.right-msg .msg-bubble {
  background: var(--right-msg-bg);
  color: #fff;
  border-bottom-right-radius: 0;
}
.right-msg .msg-img {
  margin: 0 0 0 10px;
}
</style>
