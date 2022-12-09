<template>
    <div id="header" :style="{ 'background-image': `url(${require('../assets/img/BackgoundImage.png')})` }">
        <div id="logo">
            <LogoIcon />
        </div>
        <div id="menu-header-container">
            <MenuHeader />
            <LanguagesDropdown />
        </div>
        <div id="fairy-container" :style="{ 'background-image': `url(${require('../assets/img/Fairy.png')})` }">
        </div>
    </div>
</template>
  
<script>
import { defineComponent } from "vue";
import LogoIcon from "~/assets/svg/LogoIcon.vue";
import MenuHeader from "~/components/MenuHeader.vue";
import LanguagesDropdown from "~/components/LanguagesDropdown.vue";
export default defineComponent({
    components: {
        LogoIcon,
    },
    state: {
        lang: "vi",
    },
    setup() {
        const handleButtonClick = (e) => {
            // console.log("click left button", e);
        };
        return {
            handleButtonClick,
        };
    },
    methods: {
        changeLang(lang) {
            this.$store.commit("SET_LANG", lang);
            this.$router.push({
                path: `${this.$router.currentRoute.path}?lang=${lang}`,
            });
        },
    },
});
</script>
  
<style lang="scss">
#header {
    display: relative;
    height: 988.64px;
    width: 100%;
    background-size: cover;

    #logo {
        position: absolute;
        top: 20px;
        left: 79px;
    }

    #menu-header-container {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        gap: 31px;

        .ant-menu {
            background: none;
        }

        .ant-menu-horizontal {
            border-bottom: none;

            .ant-menu-item {
                color: #FFFFFF;
                font-weight: 700;
                font-size: 14px;
            }

            .ant-menu-item,
            .ant-menu-horizontal>.ant-menu-submenu {
                border-bottom: none;
            }

            .ant-menu-item,
            .ant-menu-submenu-title {
                padding: 0px 43px;
            }
        }
    }

    #fairy-container {
        position: absolute;
        width: 847px;
        height: 938px;
        top: 85px;
        background-size: cover;
    }
}
</style>
  