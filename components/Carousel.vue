<template>
    <div class="carousel">
        <slot></slot>
        <button @click="next" class="next">
            <img :src="`${arrowSquareLeft}`" />
        </button>
        <button @click="pre" class="pre">
            <img :src="`${arrowSquareRight}`" />
        </button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
    },
    data() {
        return {
            arrowSquareLeft: require('~/static/arrow-square-left.png'),
            arrowSquareRight: require('~/static/arrow-square-right.png'),
        }
    },
    methods: {
        next() {
            this.$emit('next')
        },
        pre() {
            this.$emit('pre')
        }
    }
});
</script>
<style lang="scss">
.carousel {
    position: relative;


    button {
        position: absolute;
        top: calc(50% - 20px);
    }

    button:active,
    button:hover {
        outline: none;
        cursor: pointer;
    }

    .next {
        right: 0;
    }

    .pre {
        left: 0;
    }
}
</style>
  