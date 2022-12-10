<template>
  <div>
    <div id="app">
      <Header></Header>
      <About></About>
    </div>
    <!-- <Tutorial /> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "~/components/Header.vue";
import About from "~/components/About.vue";
export default Vue.extend([
  {
    name: "IndexPage",
  },
]);
</script>
