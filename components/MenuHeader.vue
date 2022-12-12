<template>
    <a-menu v-model:selectedKeys="current" mode="horizontal">
        <a-menu-item key="about">
            {{ $t('header.about') }}
        </a-menu-item>
        <a-menu-item key="games">
            {{ $t('header.games') }}
        </a-menu-item>
        <a-menu-item key="partners">
            {{ $t('header.partners') }}
        </a-menu-item>
        <a-menu-item key="contact">
            {{ $t('header.contact') }}
        </a-menu-item>
    </a-menu>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {
    },
    setup() {
        const current = ref(['mail']);
        return {
            current,
        };
    },
});
</script>
  
<style lang="scss">
#header {
    display: relative;
    height: 988.64px;
    width: 100%;
    background-size: cover;
}
</style>
  