
<template>
  <svg :width="width || 30" :height="height || 18" viewBox="0 0 30 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M26.767.3C26.133.3 25.5.533 25 1.033l-10 10-10-10a2.515 2.515 0 0 0-3.533 0 2.515 2.515 0 0 0 0 3.534l11.766 11.766a2.515 2.515 0 0 0 3.534 0L28.533 4.567a2.515 2.515 0 0 0 0-3.534C28.033.533 27.4.3 26.767.3Z"
      fill="#000" />
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