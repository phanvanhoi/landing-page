<template>
  <div>
    <div id="app">
      <Header></Header>
      <LanguagesDropdown />
    </div>
    <!-- <Tutorial /> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "~/components/Header.vue";
export default Vue.extend([
  {
    name: "IndexPage",
  },
]);
</script>