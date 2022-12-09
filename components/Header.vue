<template>
  <div
    id="header"
    :style="{
      'background-image': `url(${require('../assets/img/BackgoundImage.png')})`,
    }"
  >
    <div id="logo">
      <LogoIcon />
    </div>
    <div id="menu-header-container">
      <MenuHeader />
      <LanguagesDropdown />
    </div>
    <div
      id="fairy-container"
      :style="{
        'background-image': `url(${require('../assets/img/Fairy.png')})`,
      }"
    ></div>
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
});
</script>

<style lang="scss">
#header {
  position: relative;
  width: 100vw;
  height: calc(100vw * (1 / 2));
  background-repeat: no-repeat;
  background-position: center;
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
    height: auto;

    .ant-menu {
      background: none;
    }

    .ant-menu-horizontal {
      border-bottom: none;

      .ant-menu-item {
        color: #ffffff;
        font-weight: 700;
        font-size: 14px;
      }

      .ant-menu-item,
      .ant-menu-horizontal > .ant-menu-submenu {
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
    width: 45vw;
    height: 45vw;
    bottom: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
