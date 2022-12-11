
<template>
  <svg :width="width || 36" :height="height || 36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M29.367 12.083C27.617 4.383 20.9.917 15 .917h-.017C9.1.917 2.367 4.367.617 12.067c-1.95 8.6 3.316 15.883 8.083 20.466a9.06 9.06 0 0 0 6.3 2.55 8.99 8.99 0 0 0 6.283-2.55c4.767-4.583 10.034-11.85 8.084-20.45ZM15 20.433a5.25 5.25 0 1 1 5.25-5.25c0 2.9-2.35 5.25-5.25 5.25Z"
      fill="#fff" />
  </svg>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'PointPlaceIcon',
  props: ["width", "height"]
})
</script>
<style scoped=>
path {
  fill: none;
}
</style>