<template>
  <div>
    <div id="app">
      <LanguagesDropdown />
    </div>
    <!-- <Tutorial /> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LanguagesDropdown from "~/components/LanguagesDropdown.vue";
export default Vue.extend([
  {
    name: "IndexPage",
  },
]);
</script>
