
<template>
  <svg :width="width || 28" :height="height || 34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.067.333H6.933C2.333.333.667 2 .667 6.683v20.634c0 4.683 1.666 6.35 6.266 6.35H21.05c4.617 0 6.283-1.667 6.283-6.35V6.683c0-4.683-1.666-6.35-6.266-6.35ZM14 29.167a2.93 2.93 0 0 1-2.917-2.917A2.93 2.93 0 0 1 14 23.333a2.93 2.93 0 0 1 2.917 2.917A2.93 2.93 0 0 1 14 29.167Zm3.333-21.75h-6.666a1.26 1.26 0 0 1-1.25-1.25c0-.684.566-1.25 1.25-1.25h6.666c.684 0 1.25.566 1.25 1.25a1.26 1.26 0 0 1-1.25 1.25Z"
      fill="#fff" />
  </svg>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'PhoneIcon',
  props: ["width", "height"]
})
</script>
<style scoped=>
path {
  fill: none;
}
</style>