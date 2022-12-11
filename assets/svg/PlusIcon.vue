
<template>
  <svg :width="width || 30" :height="height || 30" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
      fill="#079BEE" />

  </svg>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'PlusIcon',
  props: ["width", "height"]
})
</script>
<style scoped=>
path {
  fill: none;
}
</style>