
<template>
<svg :width="width || 24" :height="height || 24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 9H6L12 15L18 9Z" fill="white"/>
</svg>

</template>
<script>
export default {
    name: 'DownIcon',
    props: ["width", "height"]
}
</script>
<style scoped=>
path {
    fill: none;
}

</style>