<template>
    <div class="about-container">
        <div class="about-content-container">
            <div class="flex-1">
                <h1 class="about-title-name">Về chúng tôi</h1>
                <h5 class="about-descripstion">Duyệt qua tuyển chọn các trò chơi trực tuyến miễn phí của chúng tôi và có
                    một khoảng thời gian tuyệt
                    vời mà không cần rời khỏi trang web! Tùy chọn Trò chơi dành cho Trẻ em của chúng tôi cũng bao gồm
                    các bài đánh giá trò chơi, các trò chơi gian lận và hướng dẫn mở rộng, và nhiều hơn nữa. Chúng tôi
                    cũng có các bản tải xuống, video và bài báo miễn phí độc quyền. Etech đánh giá các trò chơi trẻ em
                    phổ biến nhất từ tất cả các nền tảng trò chơi điện tử phổ biến nhất, vì vậy bạn không cần phải tìm
                    kiếm niềm vui ở bất kỳ nơi nào khác trên Internet. Khám phá một thế giới trò chơi hoàn toàn mới trên
                    Etech.</h5>
                <div class="number-of-people-container">
                    <div class="number-of-people-content-container">
                        <h1 class="number-of-people-h1">600</h1>
                        <div class="number-of-people-h5-container">
                            <h5 class="number-of-people-h5">M</h5>
                        </div>
                        <div class="number-of-people-icon-container">
                            <PlusIcon />
                        </div>
                    </div>
                    <h2 class="number-of-people-h2">Người chơi</h2>
                </div>
                <div class="number-of-people-container">
                    <div class="number-of-people-content-container">
                        <h1 class="number-of-people-h1">135</h1>
                        <div class="number-of-people-icon-container">
                            <PlusIcon />
                        </div>
                    </div>
                    <h2 class="number-of-people-h2">Trò chơi</h2>
                </div>
            </div>
            <div class="flex-1 left-about-container">
                <div class="left-about-padding-container">
                    <div class="left-about-content-container">
                        <!-- icon -->
                        <div class="about-icon-container">
                            <CalendarTickIcon />
                        </div>
                        <!-- Content -->
                        <div class="left-about-content-detail-container">
                            <h1>Truy Cập 24/7</h1>
                            <h5>Đảm bảo hoạt động kinh doanh của các nhà khai thác hoạt động trơn tru suốt cả năm.</h5>
                        </div>
                    </div>
                    <div class="left-about-content-container">
                        <!-- icon -->
                        <div class="about-icon-container">
                            <PenToolIcon />
                        </div>
                        <!-- Content -->
                        <div class="left-about-content-detail-container">
                            <h1>Thiết Kế</h1>
                            <h5>Kết hợp các vũ trụ giàu trí tưởng tượng, động lực chơi và lối chơi chưa từng có, trò
                                chơi
                                của chúng tôi vượt qua ranh giới của thế giới ảo bằng cách tạo ra lối chơi sáng tạo.
                            </h5>
                        </div>
                    </div>
                    <div class="left-about-content-container">
                        <!-- icon -->
                        <div class="about-icon-container">
                            <PeopleIcon />
                        </div>
                        <!-- Content -->
                        <div class="left-about-content-detail-container">
                            <h1>Đội Ngũ</h1>
                            <h5>Etech là một studio quốc tế, từng đoạt giải thưởng gồm các nhà thiết kế, nghệ sĩ, họa sĩ
                                hoạt hình và nhà sản xuất chuyên tạo ra nội dung cho những tên tuổi lớn nhất trong lĩnh
                                vực
                                điện ảnh và trò chơi điện tử.</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>

    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import PlusIcon from "~/assets/svg/PlusIcon.vue"
import CalendarTickIcon from "~/assets/svg/CalendarTickIcon.vue"
import PenToolIcon from "~/assets/svg/PenToolIcon.vue"
import PeopleIcon from "~/assets/svg/PeopleIcon.vue"
export default defineComponent({
    components: {
        PlusIcon,
        CalendarTickIcon,
        PenToolIcon,
        PeopleIcon
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
.about-container {
    width: 100vw;
    padding: calc(100vw * (1 / 12)) calc(100vw * (1 / 5));

    .about-content-container {
        display: flex;
        align-items: start;
        gap: calc(100vw * (1 / 24 / 2));
        justify-content: center;

        .flex-1 {
            flex: 1;

            .about-title-name {
                font-size: calc(100vw * (1 / 24));
                line-height: calc(100vw * (1 / 24));
                margin-bottom: calc(100vw * (1 / 24 / 2));
                color: black;
                font-weight: bold;
                font-family: 'Playfair Display';
                font-style: normal;
            }

            .about-descripstion {
                font-size: calc(100vw * (1 /137.142857143));
                margin-bottom: calc(100vw * (1 / 24));
                font-weight: 400;
            }

            .number-of-people-container {
                display: flex;
                justify-content: center;
                flex-direction: column;
                gap: calc(100vw * (1 / 24 / 4));

                .number-of-people-content-container {
                    display: flex;
                    justify-content: start;

                    .number-of-people-h1 {
                        font-size: calc(100vw * (1 /20));
                        line-height: calc(100vw * (1 /20));
                        font-weight: bold;
                        color: #079BEE;
                        margin: 0;
                    }

                    .number-of-people-h5-container {
                        display: flex;
                        align-items: end;

                        .number-of-people-h5 {
                            font-size: calc(100vw * (1 /20 / 2));
                            line-height: calc(100vw * (1 /20 /1.75));
                            font-weight: bold;
                            color: #079BEE;
                            margin: 0;
                        }
                    }



                    .number-of-people-icon-container {
                        display: flex;
                        align-items: center;

                    }

                }

                .number-of-people-h2 {
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: bold;
                    font-size: calc(100vw * (1 / 24 / 3.5));
                }
            }

        }

        .left-about-container {
            background: #EEEEEE;

            .left-about-padding-container {
                padding: calc(100vw * (1 / 17)) calc(100vw * (1 / 25.6));
                display: flex;
                flex-direction: column;
                gap: calc(100vw * (1 / 24 / 2));

                .left-about-content-container {
                    display: flex;
                    gap: calc(100vw / 70);

                    .about-icon-container {
                        width: calc(100vw / 30);
                        height: calc(100vw / 30);
                        background: #E3FCFF;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .left-about-content-detail-container {
                        flex: 1;

                        h1 {
                            font-weight: bold;
                        }

                        h5 {
                            font-weight: 400;
                        }
                    }
                }
            }

        }
    }

}
</style>
  