<template>
    <div class="carousel-slide" v-show="visibleSlide !== index">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
    },
    props: ["visibleSlide", "index"],
    data() {
        return {

        }
    },
});
</script>
<style lang="scss">
.carousel-slide {
    display: flex;
    justify-content: center;
}
</style>
  