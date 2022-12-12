<template>
    <div class="carousel">
        <slot></slot>
        <button @click="next" class="next btn-action flex-item">
            <NextIcon />
        </button>
        <button @click="pre" class="pre btn-action flex-item">
            <PreIcon />
        </button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NextIcon from "~/assets/svg/NextIcon.vue";
import PreIcon from "~/assets/svg/PreIcon.vue";
export default defineComponent({
    components: {
        NextIcon,
        PreIcon
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
    display: flex;

    button {
        position: absolute;
        top: calc(50% - calc(100vw / 55 /2));
    }

    button:active,
    button:hover {
        outline: none;
        cursor: pointer;

    }

    button:active {
        opacity: 0.5;

    }

    .next {
        right: -30px;

    }

    .pre {
        left: -30px;

    }

    .btn-action {
        width: 2.5vw;
        height: 2.5vw;
        border-radius: 5px;
        border: none;
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    }

    .flex-item {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}


@media only screen and (max-width: 576px) {
    .carousel {
        width: 100vw;

        .next {
            right: 3vw;

        }

        .pre {
            left: 3vw;

        }

        .btn-action {
            width: 10vw;
            height: 10vw;
        }

        button {
            top: calc(50%  + 5vw);
        }
    }
}
</style>
  