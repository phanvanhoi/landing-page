<template>
    <transition :name="dir">
        <div class="carousel-slide">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
export default {
    components: {
    },
    props: ["visibleSlide", "index"],
    data() {
        return {

        }
    },
    computed: {
        visible() {
            return this.index === this.$parent.index;
        },
        dir() {
            return this.$parent.slideDirection;
        },
    }
};
</script>
<style lang="scss">
.carousel-slide {
    display: flex;
    justify-content: center;
    width: 100%;

    img {
        width: calc(((100vw - 100vw / 10) - 40px *4)/ 5);
    }

    .slide-left-enter-active {
        animation: slide-left-in 0.5s ease-in;
    }

    .slide-left-leave-active {
        animation: slide-left-out 0.5s ease-in;
    }

    @keyframes slide-left-in {
        from {
            transform: translateX(-100%);
        }

        to {
            transform: translateX(0);
        }
    }

    @keyframes slide-left-out {
        from {
            transform: translateX(0%);
        }

        to {
            transform: translateX(100%);
        }
    }

    .slide-right-enter-active {
        animation: slide-right-in 0.5s ease-in;
    }

    .slide-right-leave-active {
        animation: slide-right-out 0.5s ease-in;
    }

    @keyframes slide-right-out {
        from {
            transform: translateX(0%);
        }

        to {
            transform: translateX(-100%);
        }
    }

    @keyframes slide-right-in {
        from {
            transform: translateX(100%);
        }

        to {
            transform: translateX(0);
        }
    }
}
</style>
  