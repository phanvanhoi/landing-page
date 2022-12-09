<template>
  <div id="header" :style="{
    'background-image': `url(${require('../assets/img/BackgoundImage.png')})`,
  }">
    <div id="logo">
      <LogoIcon />
    </div>
    <div id="menu-header-container">
      <MenuHeader />
      <LanguagesDropdown />
    </div>
    <div id="fairy-container" :style="{
      'background-image': `url(${require('../assets/img/Fairy.png')})`,
    }"></div>
    <div id="countdown-container">
      <div id="countdown-container-content">
        <h1 id="description-games">Trò chơi sắp ra mắt</h1>
        <CountDown></CountDown>
      </div>
    </div>
  </div>
</template>
  
<script>
import { defineComponent } from "vue";
import LogoIcon from "~/assets/svg/LogoIcon.vue";
import MenuHeader from "~/components/MenuHeader.vue";
import LanguagesDropdown from "~/components/LanguagesDropdown.vue";
import CountDown from "~/components/CountDown.vue";
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
    top: calc(100vw * (1 / 24 / 4));
    left: calc(100vw * (1 / 24));
  }

  #countdown-container {
    margin: auto;
    width: calc(100vw * (1 / 2));
    height: calc(100vw * (1 / 2));
    display: flex;
    align-items: end;
    z-index: 1;

    #countdown-container-content {
      width: 100%;
      height: calc(100vw * (1 / 4));
      display: flex;
      flex-direction: column;
      align-items: center;

      #description-games {
        font-size: calc(100vw * (1 / 24));
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 900;
        line-height: 120px;
        text-align: center;
        letter-spacing: 0.6px;
        color: #FFFFFF;
        margin-bottom: 0;
      }
    }

  }

  #menu-header-container {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 31px;
    height: 100px;
    padding-right: calc(100vw * (1 / 24) - 20px);

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
    width: 45vw;
    height: 45vw;
    bottom: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
  