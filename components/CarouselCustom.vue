<template>
    <div class="carousel">
        <carousel @next="next" @pre="pre">
            <carousel-slide v-for="(slide, index) in slides" :key="index" :index="index" :visibleSlide="visibleSlide">
                <img :src="`${slide.url}`" />
            </carousel-slide>
        </carousel>


    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Carousel from '~/components/Carousel.vue'
import CarouselSlide from '~/components/CarouselSlide.vue'
export default {
    components: {
        Carousel,
        CarouselSlide,
    },
    data() {
        return {
            slides: [
                { url: require('~/static/Parner1.png') },
                { url: require('~/static/Parner2.png') },
                { url: require('~/static/Parner3.png') },
                { url: require('~/static/Parner4.png') },
                { url: require('~/static/Parner5.png') },

            ],
            Parner1: require('~/static/Parner1.png'),
            visibleSlide: 0,
        }
    },
    computed: {
        slidesLen() {
            return this.slides.length
        }
    },
    methods: {
        next() {
            console.log("click")
            if (this.visibleSlide >= this.slidesLen - 1) {
                this.visibleSlide = 0;
            } else {
                this.visibleSlide++;
            }
        },
        pre() {
            console.log("click")
            if (this.visibleSlide <= 0) {
                this.visibleSlide = this.slidesLen - 1;
            } else {
                this.visibleSlide--;
            }
        }
    }
};
</script>
<style lang="scss">
.carousel {
    display: flex;
    justify-content: center;
}
</style>
  