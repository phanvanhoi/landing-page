<template>
    <div class="container">
        <div class="column-card-container">
            <div class="card-container" :style="{
                'background-image': `url(${require('../static/Item1.png')})`,
            }">
                <div class="description">
                    <h1>E-Space</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua.</h5>
                </div>
            </div>
            <div class="card-container" :style="{
                'background-image': `url(${require('../static/Item1.png')})`,
            }">
                <div class="description">
                    <h1>E-Space</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua.</h5>
                </div>
            </div>
            <div class="card-container" :style="{
                'background-image': `url(${require('../static/Item1.png')})`,
            }">
                <div class="description">
                    <h1>E-Space</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua.</h5>
                </div>
            </div>
        </div>
        <div class="column-card-container item-old">
            <div class="card-container" :style="{
                'background-image': `url(${require('../static/Item1.png')})`,
            }">
                <div class="description">
                    <h1>E-Space</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua.</h5>
                </div>
            </div>
            <div class="card-container" :style="{
                'background-image': `url(${require('../static/Item1.png')})`,
            }">
                <div class="description">
                    <h1>E-Space</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua.</h5>
                </div>
            </div>
            <div class="card-container" :style="{
                'background-image': `url(${require('../static/Item1.png')})`,
            }">
                <div class="description">
                    <h1>E-Space</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua.</h5>
                </div>
            </div>
        </div>
        <div class="column-card-container">
            <div class="card-container" :style="{
                'background-image': `url(${require('../static/Item1.png')})`,
            }">
                <div class="description">
                    <h1>E-Space</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua.</h5>
                </div>
            </div>
            <div class="card-container" :style="{
                'background-image': `url(${require('../static/Item1.png')})`,
            }">
                <div class="description">
                    <h1>E-Space</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua.</h5>
                </div>
            </div>
            <div class="card-container" :style="{
                'background-image': `url(${require('../static/Item1.png')})`,
            }">
                <div class="description">
                    <h1>E-Space</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua.</h5>
                </div>
            </div>
        </div>
        <div class="column-card-container item-old">
            <div class="card-container" :style="{
                'background-image': `url(${require('../static/Item1.png')})`,
            }">
                <div class="description">
                    <h1>E-Space</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua.</h5>
                </div>
            </div>
            <div class="card-container" :style="{
                'background-image': `url(${require('../static/Item1.png')})`,
            }">
                <div class="description">
                    <h1>E-Space</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua.</h5>
                </div>
            </div>
            <div class="card-container" :style="{
                'background-image': `url(${require('../static/Item1.png')})`,
            }">
                <div class="description">
                    <h1>E-Space</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et
                        dolore magna aliqua.</h5>
                </div>
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
.container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;

    .column-card-container {
        width: calc(100vw / 4.68292682927);
        display: flex;
        flex-direction: column;
        gap: calc(100vw * (1 / 24 /2));

        .card-container {
            width: 100%;
            height: calc(100vw / 3.42857142857);
            border-radius: 12px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
            background-size: cover;
            display: flex;
            align-items: end;
            padding: calc(100vw / 24 / 2.7);



            .description {

                h1 {
                    color: white;
                    margin-bottom: 10px;
                }

                h5 {
                    color: white;
                }
            }

        }
    }

    .item-old {
        margin-top: calc(100vw / 12);
    }

}
</style>
  