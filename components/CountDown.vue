<template>
    <div id="countdown-container-component">
        <vue-countdown-timer id="vue-countdown-timer" @start_callback="startCallBack('event started')"
            @end_callback="endCallBack('event ended')" :start-time="'2022-12-09 00:00:00'"
            :end-time="'2023-01-22 00:00:00'" :interval="1000" label-position="begin" :end-text="'Event ended!'"
            :day-txt="'days'" :hour-txt="'hours'" :minutes-txt="'minutes'" :seconds-txt="'seconds'">
            <!-- <template slot="start-label" slot-scope="scope">
                <span style="color: red"
                    v-if="scope.props.startLabel !== '' && scope.props.tips && scope.props.labelPosition === 'begin'">{{
                            scope.props.startLabel
                    }}:</span>
                <span style="color: blue"
                    v-if="scope.props.endLabel !== '' && !scope.props.tips && scope.props.labelPosition === 'begin'">{{
                            scope.props.endLabel
                    }}:</span>
            </template> -->


            <template slot="countdown" slot-scope="scope">
                <!-- <span>{{ scope.props.days }}</span><i>{{ scope.props.dayTxt }}</i>
                <span>{{ scope.props.hours }}</span><i>{{ scope.props.hourTxt }}</i>
                <span>{{ scope.props.minutes }}</span><i>{{ scope.props.minutesTxt }}</i>
                <span>{{ scope.props.seconds }}</span><i>{{ scope.props.secondsTxt }}</i> -->
                <div id="template-countdount-container">
                    <div class="time-container">
                        <span class="template-countdount-container-items-number">{{ scope.props.days }}</span>
                        <span class="template-countdount-container-items-character">Ngày</span>
                    </div>
                    <span class="template-countdount-container-items-number">:</span>
                    <div class="time-container">
                        <span class="template-countdount-container-items-number">{{ scope.props.hours }}</span>
                        <span class="template-countdount-container-items-character">Giờ</span>
                    </div>
                    <span class="template-countdount-container-items-number">:</span>
                    <div class="time-container">
                        <span class="template-countdount-container-items-number">{{ scope.props.minutes }}</span>
                        <span class="template-countdount-container-items-character">Phút</span>
                    </div>
                    <span class="template-countdount-container-items-number">:</span>
                    <div class="time-container">
                        <span class="template-countdount-container-items-number">{{ scope.props.seconds }}</span>
                        <span class="template-countdount-container-items-character">Giây</span>
                    </div>
                </div>
            </template>

            <!-- <template slot="end-label" slot-scope="scope">
                <span style="color: red"
                    v-if="scope.props.startLabel !== '' && scope.props.tips && scope.props.labelPosition === 'end'">{{
                            scope.props.startLabel
                    }}:</span>
                <span style="color: blue"
                    v-if="scope.props.endLabel !== '' && !scope.props.tips && scope.props.labelPosition === 'end'">{{
                            scope.props.endLabel
                    }}:</span>
            </template>

            <template slot="end-text" slot-scope="scope">
                <span style="color: green">{{ scope.props.endText }}</span>
            </template> -->
        </vue-countdown-timer>
    </div>
</template>
 
<script >
export default {
    name: 'Timer',
    methods: {
        startCallBack: function (x) {
            console.log(x);
        },
        endCallBack: function (x) {
            console.log(x);
        },
    },
};
</script>

<style lang="scss">
#countdown-container-component {
    background: white;
    border: none;
    width: 100%;
    border-radius: 21px;

    #vue-countdown-timer {
        width: 100%;
        height: 100%;
    }

    #template-countdount-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        height: 100%;

        .time-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .template-countdount-container-items-number {
            font-size: calc(100vw * (1 / 24));
            line-height: calc(100vw * (1 / 24));
            color: black;
            font-weight: bold;
            font-family: 'Playfair Display';
            font-style: normal;
        }

        .template-countdount-container-items-character {
            font-size: calc(100vw * (1 / 24 / 4));
            line-height: calc(100vw * (1 / 24 / 4));
            color: black;
            font-weight: bold;
            font-family: 'Playfair Display';
            font-style: normal;
        }
    }
}

@media only screen and (max-width: 576px) {
    #countdown-container-component {
        #template-countdount-container {
            padding: 26px;

            .template-countdount-container-items-number {
                width: 54px;
                height: 46px;
                left: 0px;
                top: 0px;
                font-family: 'Playfair Display';
                font-style: normal;
                font-weight: 900;
                font-size: 36px;
                line-height: 45px;
                text-align: center;
            }

            .template-countdount-container-items-character {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 700;
                font-size: 12px;
                line-height: 15px;
                letter-spacing: -0.651724px;
                display: flex;
                text-align: center;
                color: #000000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }


    }
}
</style>