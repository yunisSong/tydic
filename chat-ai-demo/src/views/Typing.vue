<template>
  <div ref="megRef"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import Typed from 'typed.js';
const props = defineProps({
  msg: String
})
const megRef = ref(null)
onMounted(() => {
  var typed = new Typed(megRef.value, {
    strings: [props.msg],
    typeSpeed: 50,
    loop: false,
    showCursor: false
  })
})
</script>

<style lang="scss" scoped></style>
