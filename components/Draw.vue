<template>
    <div class="draw-container">
        <div class="draw-content-container">
            <div class="draw-header-container">
                <LanguagesDropdown :activeBorder="true" />
                <div @click="handleHideMenuMobile">
                    <CloseIcon :width="40" :height="40" />
                </div>
            </div>
            <div class="draw-footer-container">
                <h3>{{ $t('header.about') }}</h3>
                <hr />
                <h3>{{ $t('header.games') }}</h3>
                <hr />
                <h3>{{ $t('header.partners') }}</h3>
                <hr />
                <h3>{{ $t('header.contact') }}</h3>
            </div>
        </div>
    </div>
</template>
<script >
import { defineComponent } from 'vue';
import CloseIcon from '~/assets/svg/CloseIcon.vue';
import LanguagesDropdown from "~/components/LanguagesDropdown.vue";
export default defineComponent({
    components: {
        CloseIcon,
    },
    setup() {
    },
    methods: {
        handleHideMenuMobile() {
            this.$emit('handleHideMenuMobile')
        },
    }
});
</script>

<style lang="scss">
.draw-container {
    display: fixed;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;

    .draw-content-container {
        z-index: 11;
        display: flex;
        flex-direction: column;
        padding: 5vw;

        .draw-header-container {
            display: flex;
            justify-content: space-between;
        }

        .draw-footer-container {
            margin-top: 15vw;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            hr {
                width: 100%;
                background-color: #EEEEEE;
                opacity: 0.5;
            }

            h3 {
                margin-top: 0.5rem;
                font-style: normal;
                font-weight: 700;
                line-height: 18px;
                color: #000000;
                flex: none;
                order: 0;
                flex-grow: 0;
            }
        }

        button {
            background: #c4c4c4;
            border: 1px solid #AFAFAF !important;
            border-radius: 8px;
            height: 40px;
        }
    }

}
</style>
  