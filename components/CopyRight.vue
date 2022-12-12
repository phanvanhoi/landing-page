<template>
    <div id="copy-right-container" class="copy-right-container">
        <h2>2017 Copyright. Policy.</h2>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
    },
    data() {
        return {

        }
    },
    methods: {
    }
});
</script>
<style lang="scss">
.copy-right-container {
    display: flex;
    width: 100%;
    height: 100px;
    background-color: #000000;
    align-items: center;
    justify-content: center;

    h2 {
        color: #fff;
        margin: 0;
        font-weight: 200;
    }
}
</style>
  