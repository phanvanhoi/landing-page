<template>
    <div class="container-card-list">
        <a-carousel arrows :dots=false>
            <template #prevArrow>
                <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                    <img id="img-illustrator" :src="`${arrowSquareLeft}`" />
                </div>
            </template>
            <template #nextArrow>
                <div class="custom-slick-arrow" style="right: 10px">
                    <img id="img-illustrator" :src="`${arrowSquareRight}`" />
                </div>
            </template>
            <div>
                <div class="carousel-main">
                    <img id="img-illustrator" :src="`${Parner1}`" />
                    <img id="img-illustrator" :src="`${Parner2}`" />
                    <img id="img-illustrator" :src="`${Parner3}`" />
                    <img id="img-illustrator" :src="`${Parner4}`" />
                    <img id="img-illustrator" :src="`${Parner5}`" />
                </div>
            </div>
            <div>
                <div class="carousel-main">
                    <img id="img-illustrator" :src="`${Parner2}`" />
                    <img id="img-illustrator" :src="`${Parner3}`" />
                    <img id="img-illustrator" :src="`${Parner4}`" />
                    <img id="img-illustrator" :src="`${Parner5}`" />
                    <img id="img-illustrator" :src="`${Parner1}`" />
                </div>
            </div>
            <div>
                <div class="carousel-main">
                    <img id="img-illustrator" :src="`${Parner3}`" />
                    <img id="img-illustrator" :src="`${Parner4}`" />
                    <img id="img-illustrator" :src="`${Parner5}`" />
                    <img id="img-illustrator" :src="`${Parner1}`" />
                    <img id="img-illustrator" :src="`${Parner2}`" />
                </div>
            </div>
            <div>
                <div class="carousel-main">
                    <img id="img-illustrator" :src="`${Parner4}`" />
                    <img id="img-illustrator" :src="`${Parner5}`" />
                    <img id="img-illustrator" :src="`${Parner1}`" />
                    <img id="img-illustrator" :src="`${Parner2}`" />
                    <img id="img-illustrator" :src="`${Parner3}`" />
                </div>
            </div>
            <div>
                <div class="carousel-main">
                    <img id="img-illustrator" :src="`${Parner5}`" />
                    <img id="img-illustrator" :src="`${Parner1}`" />
                    <img id="img-illustrator" :src="`${Parner2}`" />
                    <img id="img-illustrator" :src="`${Parner3}`" />
                    <img id="img-illustrator" :src="`${Parner4}`" />
                </div>
            </div>

        </a-carousel>
    </div>
</template>
<script lang="ts">
// import { Carousel, Slide } from 'vue-carousel';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
    },
    data() {
        return {
            arrowSquareLeft: require('~/static/arrow-square-left.png'),
            arrowSquareRight: require('~/static/arrow-square-right.png'),
            Parner1: require('~/static/Parner1.png'),
            Parner2: require('~/static/Parner2.png'),
            Parner3: require('~/static/Parner3.png'),
            Parner4: require('~/static/Parner4.png'),
            Parner5: require('~/static/Parner5.png'),
        }
    },
});
</script>
<style lang="scss">
.container-card-list {
    padding: calc(100vw * (1 / 12)) calc(100vw * (1 / 5));

    background: #F6F6F6;

    .carousel-main {
        display: flex;

        .img {
            width: calc(100vw / 7.38461538462);
            height: calc(100vw / 19.2);
        }

    }

    .ant-carousel :deep(.slick-slide) {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;
    }

    .ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
        width: 25px;
        height: 25px;
        font-size: 25px;
        color: #fff;
        background-color: rgba(31, 45, 61, 0.11);
        opacity: 0.3;
        z-index: 1;
    }

    .ant-carousel :deep(.custom-slick-arrow:before) {
        display: none;
    }

    .ant-carousel :deep(.custom-slick-arrow:hover) {
        opacity: 0.5;
    }

    .ant-carousel :deep(.slick-slide h3) {
        color: #fff;
    }

    .ant-carousel :deep(.slick-slide) {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;
    }

    .ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
        width: 25px;
        height: 25px;
        font-size: 25px;
        color: #fff;
        background-color: rgba(31, 45, 61, 0.11);
        opacity: 0.3;
        z-index: 1;
    }

    .ant-carousel :deep(.custom-slick-arrow:before) {
        display: none;
    }

    .ant-carousel :deep(.custom-slick-arrow:hover) {
        opacity: 0.5;
    }

    .ant-carousel :deep(.slick-slide h3) {
        color: #fff;
    }
}
</style>
  