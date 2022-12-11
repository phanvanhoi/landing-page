
<template>
  <svg :width="width || 40" :height="height || 40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M35 12.916H5a1.26 1.26 0 0 1-1.25-1.25c0-.683.567-1.25 1.25-1.25h30c.683 0 1.25.567 1.25 1.25a1.26 1.26 0 0 1-1.25 1.25Zm0 8.334H5A1.26 1.26 0 0 1 3.75 20c0-.683.567-1.25 1.25-1.25h30c.683 0 1.25.567 1.25 1.25A1.26 1.26 0 0 1 35 21.25Zm0 8.334H5a1.26 1.26 0 0 1-1.25-1.25c0-.684.567-1.25 1.25-1.25h30c.683 0 1.25.566 1.25 1.25a1.26 1.26 0 0 1-1.25 1.25Z"
      fill="#fff" />
  </svg>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'ArrowToBottom',
  props: ["width", "height"]
})
</script>
<style scoped=>
path {
  fill: none;
}
</style>