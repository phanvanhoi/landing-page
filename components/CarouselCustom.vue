<template>
    <div class="carousel-container">
        <h1>Our Partners</h1>
        <carousel @next="next" @pre="pre">
            <div class="carousel-content-container">
                <carousel-slide v-for="(slide, index) in slides" :key="index" :index="index"
                    :visibleSlide="visibleSlide">
                    <img :src="`${slide.url}`" />
                </carousel-slide>
            </div>
        </carousel>
    </div>
</template>
<script>
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
                { url: require('~/static/Parner5.png') },
                { url: require('~/static/Parner4.png') },
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
            // if (this.visibleSlide >= this.slidesLen - 1) {
            //     this.visibleSlide = 0;
            // } else {
            //     this.visibleSlide++;
            // }
            const lastItem = this.slides[this.slides.length - 1];
            this.slides = [lastItem, ...this.slides.slice(0, -1)]
        },
        pre() {
            // if (this.visibleSlide <= 0) {
            //     this.visibleSlide = this.slidesLen - 1;
            // } else {
            //     this.visibleSlide--;
            // }
            const firstItem = this.slides[0];

            this.slides = [...this.slides.slice(1), firstItem]
        }
    }
};
</script>
<style lang="scss">
.carousel-container {
    display: flex;
    justify-content: center;
    padding: calc(100vw / 15) calc(100vw / 16);
    flex-direction: column;
    align-items: center;
    background-color: #F6F6F6;

    h1 {
        font-size: calc(100vw * (1 / 24));
        line-height: calc(100vw * (1 / 24));
        margin-bottom: calc(100vw * (1 / 24 / 2));
        color: black;
        font-weight: bold;
        font-family: 'Playfair Display';
        font-style: normal;
        margin-bottom: calc(100vw * (1 / 24));
    }

    .carousel-content-container {
        display: flex;
    }
}

@media only screen and (max-width: 576px) {
    .carousel-container {
        display: flex;
        justify-content: center;
        padding: calc(100vw / 15) calc(100vw / 16);
        flex-direction: column;
        align-items: center;
        background-color: #F6F6F6;
        width: 100%;
        overflow: hidden;
        height: 70vw;

        h1 {
            font-family: 'Playfair Display';
            font-style: normal;
            font-weight: 900;
            font-size: 40px;
            line-height: 50px;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: 0.6px;
            color: #000000;
        }

        .carousel-content-container {
            position: absolute;
            left: -28vw;
        }
    }
}
</style>
  