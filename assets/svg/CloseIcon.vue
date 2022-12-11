
<template>
  <svg :width="width || 24" :height="height || 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd"
      d="M10.657 12.071 5 6.414 6.414 5l5.657 5.657L17.728 5l1.414 1.414-5.657 5.657 5.657 5.657-1.414 1.414-5.657-5.657-5.657 5.657L5 17.728z" />
  </svg>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'CloseIcon',
  props: ["width", "height"]
})
</script>
<style scoped=>
path {
  fill: none;
}
</style>