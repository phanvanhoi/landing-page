
<template>
  <svg :width="width || 24" :height="height || 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="#000" stroke-width="2" d="m15 6-6 6 6 6" />
  </svg>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'PreIcon',
  props: ["width", "height"]
})
</script>
<style scoped=>
path {
  fill: none;
}
</style>