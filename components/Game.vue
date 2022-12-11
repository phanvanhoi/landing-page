<template>
    <div class="games-container">
        <div class="description-header">
            <h1 class="about-title-name">Trò chơi</h1>
            <h5 class="about-descripstion">Là nhà tiên phong trong lĩnh vực trò chơi ứng dụng dành cho thiết bị di động,
                chúng tôi tự hào về tính độc đáo và cá tính, cung cấp cho người chơi toàn cầu những trò chơi hiện đại có
                cốt truyện tuyệt vời, hiệu ứng âm thanh giật gân và hoạt ảnh hoành tráng không ngừng gây ấn tượng.</h5>
        </div>
        <CardList />
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import PlusIcon from "~/assets/svg/PlusIcon.vue"
import CalendarTickIcon from "~/assets/svg/CalendarTickIcon.vue"
import PenToolIcon from "~/assets/svg/PenToolIcon.vue"
import PeopleIcon from "~/assets/svg/PeopleIcon.vue"
import CardList from "~/components/CardList.vue"
export default defineComponent({
    components: {
        PlusIcon,
        CalendarTickIcon,
        PenToolIcon,
        PeopleIcon,
        CardList
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
.games-container {
    width: 100vw;
    padding: calc(100vw * (1 / 24)) calc(100vw * (1 / 24));
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 0;

    .description-header {
        width: 43%;
        display: flex;
        align-items: center;
        flex-direction: column;

        .about-title-name {
            font-size: calc(100vw * (1 / 24));
            line-height: calc(100vw * (1 / 24));
            margin-bottom: calc(100vw * (1 / 24 / 2));
            color: black;
            font-weight: bold;
            font-family: 'Playfair Display';
            font-style: normal;
            margin-bottom: 0;
        }

        .about-descripstion {
            font-size: calc(100vw * (1 /137.142857143));
            margin-bottom: calc(100vw * (1 / 24));
            font-weight: 400;
            text-align: center;
        }
    }
}

@media only screen and (max-width: 576px) {
    .games-container {

        .description-header {
            width: 100%;

            .about-title-name {
                left: 4.27%;
                right: 4.27%;
                top: 0%;
                bottom: 96.99%;
                font-family: 'Playfair Display';
                font-style: normal;
                font-weight: 900;
                font-size: 40px;
                line-height: 50px;
                text-align: center;
                letter-spacing: 0.6px;
                color: #000000;
            }

            .about-descripstion {
                left: 4.27%;
                right: 4.27%;
                top: 3.76%;
                bottom: 89.22%;
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 140%;
                text-align: center;
                color: #757575;
            }
        }
    }
}
</style>
  