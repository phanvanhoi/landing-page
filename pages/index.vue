<template>
  <div>
    <Tutorial />
    <h1>{{ $t("header.title") }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import i18n from "@/plugins/i18n";

export default Vue.extend({
  name: "IndexPage",
});
</script>
