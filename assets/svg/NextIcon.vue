
<template>
  <svg :width="width || 24" :height="height || 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <polyline fill="none" stroke="#000" stroke-width="2" points="9 6 15 12 9 18" />
  </svg>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'NextIcon',
  props: ["width", "height"]
})
</script>
<style scoped=>
path {
  fill: none;
}
</style>