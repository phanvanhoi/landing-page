
<template>
  <svg :width="width || 24" :height="height || 25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.53 7.984a.73.73 0 0 0-.21 0c-1.55-.05-2.78-1.333-2.78-2.91 0-1.606 1.29-2.92 2.89-2.92 1.59 0 2.89 1.304 2.89 2.92-.01 1.577-1.24 2.86-2.79 2.91Zm3.26 7.002c-1.12.757-2.69 1.04-4.14.848.38-.828.58-1.748.59-2.717 0-1.01-.22-1.97-.64-2.81 1.48-.201 3.05.082 4.18.84 1.58 1.05 1.58 2.778.01 3.839ZM6.44 7.984a.73.73 0 0 1 .21 0c1.55-.05 2.78-1.333 2.78-2.91 0-1.616-1.29-2.92-2.89-2.92-1.59 0-2.88 1.304-2.88 2.92 0 1.577 1.23 2.86 2.78 2.91Zm.11 5.133c0 .98.21 1.909.59 2.747-1.41.152-2.88-.151-3.96-.868-1.58-1.061-1.58-2.789 0-3.85 1.07-.727 2.58-1.02 4-.858a6.479 6.479 0 0 0-.63 2.829Zm5.57 3.051a1.13 1.13 0 0 0-.26 0c-1.84-.061-3.31-1.587-3.31-3.466.01-1.92 1.54-3.475 3.45-3.475 1.9 0 3.44 1.556 3.44 3.475-.01 1.88-1.47 3.405-3.32 3.466Zm-3.25 2.091c-1.51 1.02-1.51 2.697 0 3.708 1.72 1.162 4.54 1.162 6.26 0 1.51-1.02 1.51-2.698 0-3.708-1.71-1.162-4.53-1.162-6.26 0Z"
      fill="#000" />
  </svg>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: 'PeopleIcon',
  props: ["width", "height"]
})
</script>
<style scoped=>
path {
  fill: none;
}
</style>