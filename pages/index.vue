<template>
  <div>
    <div id="app">
      <Header></Header>
      <a href="#copy-right-container">
        <div id="scroll-down-btn">
          <ArrowToBottom :width="100" :height="`${100}`" />
        </div>
      </a>
      <About></About>
      <AnimationImageGames></AnimationImageGames>
      <Game></Game>
      <CarouselCustom></CarouselCustom>
      <AboutUs></AboutUs>
      <CopyRight></CopyRight>
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
import AboutUs from "~/components/AboutUs.vue";
import CopyRight from "~/components/CopyRight.vue";
import ArrowToBottom from "~/assets/svg/ArrowToBottom.vue";
// import Partners from "~/components/Partners.vue";
export default Vue.extend([
  {
    name: "IndexPage",
    components: {
      ArrowToBottom,
    },
  },
]);
</script>
<style lang="scss">
html {
  scroll-behavior: smooth;
}

#scroll-down-btn {
  position: absolute;
  bottom: calc(100vw * (1 / 24 / 4));
  right: calc(100vw * (1 / 24));
  width: calc(100vw * (1 / 30));
  height: calc(100vw * (1 / 30));
  border-radius: 50%;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transform: matrix(-1, 0, 0, 1, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>