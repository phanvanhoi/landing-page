<template>
    <div class="about-container">
        <div class="about-content-container">
            <div class="flex-1">
                <h1 class="about-title-name"> {{ $t('About.about-title-name') }}</h1>
                <h5 class="about-descripstion">{{ $t('About.about-descripstion') }}</h5>
                <div class="number-of-people-main-container">
                    <div class="number-of-people-container">
                        <div class="number-of-people-content-container">
                            <h1 class="number-of-people-h1">600</h1>
                            <div class="number-of-people-h5-container">
                                <h5 class="number-of-people-h5">{{ windowWidth > 576 ? 'M' :
                                        $t('About.number-of-people-h5')
                                }}</h5>
                            </div>
                            <div class="number-of-people-icon-container">
                                <PlusIcon />
                            </div>
                        </div>
                        <h2 class="number-of-people-h2">{{ $t('About.number-of-people-h2') }}</h2>
                    </div>
                    <div class="number-of-people-container">
                        <div class="number-of-people-content-container">
                            <h1 class="number-of-people-h1">135</h1>
                            <div class="number-of-people-icon-container">
                                <PlusIcon />
                            </div>
                        </div>
                        <h2 class="number-of-people-h2">{{ $t('About.number-of-people-h2-2') }}</h2>
                    </div>
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
                            <h1>{{ $t('About.left-about-content-detail-container-h1') }}</h1>
                            <h5>{{ $t('About.left-about-content-detail-container-h5') }}</h5>
                        </div>
                    </div>
                    <div class="left-about-content-container">
                        <!-- icon -->
                        <div class="about-icon-container">
                            <PenToolIcon />
                        </div>
                        <!-- Content -->
                        <div class="left-about-content-detail-container">
                            <h1>{{ $t('About.left-about-content-detail-container-h1-2') }}</h1>
                            <h5>{{ $t('About.left-about-content-detail-container-h5-2') }}</h5>
                        </div>
                    </div>
                    <div class="left-about-content-container">
                        <!-- icon -->
                        <div class="about-icon-container">
                            <PeopleIcon />
                        </div>
                        <!-- Content -->
                        <div class="left-about-content-detail-container">
                            <h1>{{ $t('About.left-about-content-detail-container-h1-3') }}</h1>
                            <h5>{{ $t('About.left-about-content-detail-container-h5-4') }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
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
    },
    data() {
        return {
            windowWidth: window.innerWidth,
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        onResize() {
            this.windowWidth = window.innerWidth
        }
    }
});
</script>
  
<style lang="scss">
.about-container {
    width: 100vw;
    padding: calc(100vw * (1 / 12)) calc(20vw);
    display: flex;

    .about-content-container {
        display: flex;
        align-items: start;
        gap: calc(100vw * (1 / 24 / 2));
        justify-content: center;
        justify-content: space-between;

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

            .number-of-people-main-container {
                display: flex;
                flex-direction: column;
                align-items: start;

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
                        margin-top: 1vw;
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

@media only screen and (max-width: 1130px) {
    .about-container {
        padding: calc(100vw * (1 / 12)) calc(10vw);
    }
}


@media only screen and (max-width: 780px) {
    .about-container {
        padding: calc(100vw * (1 / 12)) calc(5vw);
    }
}


@media only screen and (max-width: 576px) {
    .about-container {
        padding: 0 4vw;

        .about-content-container {
            flex-direction: column;

            .flex-1 {
                flex: 1;

                .about-title-name {
                    left: 0%;
                    right: 0%;
                    top: 0%;
                    bottom: 87.58%;
                    font-family: 'Playfair Display';
                    font-style: normal;
                    font-weight: 900;
                    font-size: 40px;
                    line-height: 50px;
                    letter-spacing: 0.6px;
                    color: #000000;
                }

                .about-descripstion {
                    left: 0%;
                    right: 0%;
                    top: 15.53%;
                    bottom: 26.5%;
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 140%;

                    color: #757575;
                }

                .number-of-people-main-container {
                    flex-direction: row;
                    justify-content: space-between;

                    .number-of-people-container {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        gap: calc(100vw * (1 / 24 / 4));

                        .number-of-people-content-container {
                            display: flex;
                            justify-content: start;

                            .number-of-people-h1 {
                                font-family: 'Playfair Display';
                                font-style: normal;
                                font-weight: 900;
                                font-size: 40px;
                                line-height: 50px;
                            }

                            .number-of-people-h5-container {
                                display: flex;
                                align-items: end;

                                .number-of-people-h5 {
                                    font-family: 'Playfair Display';
                                    font-style: normal;
                                    font-weight: 900;
                                    font-size: 20px;
                                    line-height: 40px;
                                }
                            }

                            .number-of-people-icon-container {
                                display: flex;
                                align-items: center;

                            }

                        }

                        .number-of-people-h2 {
                            width: 164px;
                            height: 30px;
                            font-family: 'Montserrat';
                            font-style: normal;
                            font-weight: 700;
                            font-size: 24px;
                            line-height: 30px;
                            color: #000000;
                            flex: none;
                            order: 1;
                            flex-grow: 0;
                            align-items: left;
                        }
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
                        gap: 4vw;

                        .about-icon-container {
                            width: 10vw;
                            height: 10vw;
                            margin-top: 2vw;
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
}
</style>
  