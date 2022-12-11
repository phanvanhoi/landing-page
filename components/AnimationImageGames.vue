<template>
    <div class="animation-image-container">
        <transition name="slide-left" mode="out-in">
            <img id="img-illustrator" :src="`${imgIllustrator}`" />
        </transition>
        <transition name="slide-left" mode="out-in">
            <img id="img-map" :src="`${imgMap}`" />
        </transition>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import PlusIcon from "~/assets/svg/PlusIcon.vue"
import PenToolIcon from "~/assets/svg/PenToolIcon.vue"
import PeopleIcon from "~/assets/svg/PeopleIcon.vue"
export default defineComponent({
    components: {
        PlusIcon,
        PenToolIcon,
        PeopleIcon
    },
    data() {
        return {
            imgIllustrator: require('~/static/Illustrator.gif'),
            imgMap: require('~/static/Map.png'),
        }
    },
    setup() {
        const current = ref<string[]>(['mail']);
        return {
            current,
        };
    },
});
</script>
  
<style lang="scss">
.animation-image-container {
    width: 100vw;
    padding: calc(100vw * (1 / 12)) calc(100vw * (1 / 5));
    padding-top: calc(100vw * (1 / 5));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    #img-illustrator {
        width: calc(100vw * (1 / 3.6));
        height: calc(100vw * (1 / 4.4));
        position: absolute;
        top: (calc(100vw / 40));
    }

    #img-map {
        width: calc(100vw * (1 / 1.65));
        height: calc(100vw * (1 / 4.5));
    }
}

@media only screen and (max-width: 576px) {
    .animation-image-container {
        width: 100vw;
        height: 113vw;
        padding: 0 4vw;
        justify-content: end;

        #img-illustrator {
            width: 80vw;
            height: 80vw;
            position: absolute;
            top: 8.5vw;
        }

        #img-map {
            width: 100vw;
            height: 33.3vw;
        }
    }
}
</style>
  