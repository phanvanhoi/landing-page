<template>
  <div>
    <div id="app">
      <Header></Header>
      <About></About>
      <AnimationImageGames></AnimationImageGames>
      <Game></Game>
      <CarouselCustom></CarouselCustom>
      <!-- <Partners></Partners> -->
    </div>
    <!-- <Tutorial /> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "~/components/Header.vue";
import About from "~/components/About.vue";
import AnimationImageGames from "~/components/AnimationImageGames.vue";
import Game from "~/components/Game.vue";
import CarouselCustom from "~/components/CarouselCustom.vue";
// import Partners from "~/components/Partners.vue";
export default Vue.extend([
  {
    name: "IndexPage",
  },
]);
</script>
