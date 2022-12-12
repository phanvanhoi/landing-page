<template>
    <div>
        <Header></Header>
        <a class="right-position"
            :href="windowTop / windowHeight < 1.6 ? '#copy-right-container' : '#countdown-container'">
            <div id="scroll-down-btn" :style="{
                'background-image': `url(${require('../static/DownIcon.png')})`,
            }" :class="windowTop / windowHeight > 1.6 ? 'transform-item-up' : 'transform-item-down'">
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
</template>
  
<script >
import { defineComponent } from "vue";
import Header from "~/components/Header.vue";
import About from "~/components/About.vue";
import AnimationImageGames from "~/components/AnimationImageGames.vue";
import Game from "~/components/Game.vue";
import CarouselCustom from "~/components/CarouselCustom.vue";
import AboutUs from "~/components/AboutUs.vue";
import CopyRight from "~/components/CopyRight.vue";
import ArrowToBottom from "~/assets/svg/ArrowToBottom.vue";
// import Partners from "~/components/Partners.vue";
export default defineComponent({
    data() {
        return {
            windowTop: window.innerWidth,
            windowHeight: window.innerHeight,
        }
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll)
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll)
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        onScroll(e) {
            this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
        },
        onResize() {
            this.windowHeight = window.innerHeight
        }
    }
});
</script>
  
<style lang="scss">
html {
    scroll-behavior: smooth;
}

#scroll-down-btn {
    width: calc(100vw * (1 / 30));
    height: calc(100vw * (1 / 30));
    border-radius: 50%;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    position: -webkit-sticky;
    position: sticky;
    top: 140px;
    left: 93vw;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
}

.transform-item-down {
    transform: matrix(-1, 0, 0, 1, 0, 0);
}

.transform-item-up {
    transform: matrix(1, 0, 0, -1, 0, 0);
}
</style>