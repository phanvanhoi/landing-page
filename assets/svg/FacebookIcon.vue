
<template>
  <svg :width="width || 32" :height="height || 32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30.376.375H1.626c-.692 0-1.25.559-1.25 1.25v28.75c0 .691.558 1.25 1.25 1.25h28.75a1.25 1.25 0 0 0 1.25-1.25V1.625a1.25 1.25 0 0 0-1.25-1.25Zm-3.61 9.121H24.27c-1.957 0-2.336.93-2.336 2.297v3.012h4.672l-.61 4.715h-4.062v12.105h-4.87V19.523h-4.075v-4.718h4.074v-3.477c0-4.035 2.465-6.234 6.067-6.234 1.726 0 3.207.129 3.64.187v4.215h-.003Z"
      fill="#fff" />
  </svg>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'FacebookIcon',
  props: ["width", "height"]
})
</script>
<style scoped=>
path {
  fill: none;
}
</style>