<template>
  <div id="header" :style="{
    'background-image': `url(${require('../static/BackgoundImage.png')})`,
  }">
    <div id="logo">
      <LogoIcon :width="150"/>
    </div>
    <div id="menu-header-container">
      <MenuHeader />
      <LanguagesDropdown />
    </div>
    <div id="fairy-container" :style="{
      'background-image': `url(${require('../static/Fairy.png')})`,
    }"></div>
    <div id="countdown-container">
      <div id="countdown-container-content">
        <h1 id="description-games">Trò chơi sắp ra mắt</h1>
        <CountDown></CountDown>
        <div id="description-games-detail-container">
          <h1 id="description-games-detail">Chúng tôi sẽ trở lại với một điều tuyệt vời. Để nhận các bản cập nhật mới
            nhất về tròchơi, vui lòng đăng ký nhận bản tin của chúng tôi.</h1>
          <a-input id="input-email" v-model:value="email" placeholder="Địa chỉ email của bạn">
            <template #suffix>
              <ArrowToRight />
            </template>
          </a-input>
        </div>
      </div>
    </div>
    <div id="scroll-down-btn">
      <ArrowToBottom />
    </div>
  </div>
</template>
  
<script>
import { defineComponent } from "vue";
import LogoIcon from "~/assets/svg/LogoIcon.vue";
import ArrowToRight from "~/assets/svg/ArrowToRight.vue";
import ArrowToBottom from "~/assets/svg/ArrowToBottom.vue";
import MenuHeader from "~/components/MenuHeader.vue";
import LanguagesDropdown from "~/components/LanguagesDropdown.vue";
import CountDown from "~/components/CountDown.vue";
export default defineComponent({
  components: {
    LogoIcon,
    ArrowToRight,
    ArrowToBottom
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

  #scroll-down-btn {
    position: absolute;
    bottom: calc(100vw * (1 / 24 / 4));
    right: calc(100vw * (1 / 24));
    width: calc(100vw * (1 / 30));
    height: calc(100vw * (1 / 30));
    border-radius: 50%;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
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
      height: 35vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: calc(100vw * (1 / 24 /2));

      #description-games-detail-container {
        width: 60%;
        padding-top: calc(100vw * (1 / 24));
        display: flex;
        flex-direction: column;
        gap: calc(100vw * (1 / 24 / 4));

        #input-email {
          border-radius: 10px;
          height: calc(100vw * (1 / 30));
        }

        #description-games-detail {
          font-size: calc(100vw * (1 / 24 / 4));
          font-family: 'Playfair Display';
          font-style: normal;
          font-weight: 900;
          line-height: calc(100vw * (1 / 24 / 4));
          text-align: center;
          letter-spacing: 0.6px;
          color: #FFFFFF;
        }
      }

      #description-games {
        font-size: calc(100vw * (1 / 24));
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 900;
        line-height: calc(100vw * (1 / 24));
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
  