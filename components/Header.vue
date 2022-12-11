<template>
  <div id="header" :style="{
    'background-image': `url(${require('../static/BackgoundImage.png')})`,
  }">
    <div class="menu-header-logo-container">
      <div id="logo">
        <LogoIcon :width="windowWidth > 576 ? windowWidth / 15 : windowWidth / 10"
          :height="windowWidth > 576 ? windowWidth / 15 / 1.75 : windowWidth / 10 / 1.75" />
      </div>
      <div v-show="windowWidth > 576" class="menu-header-container">
        <MenuHeader />
        <LanguagesDropdown />
      </div>
      <div v-show="windowWidth <= 576" class="menu-header-container">
        <HamburgerIcon :width="windowWidth > 576 ? windowWidth / 15 : windowWidth / 7.5"
          :height="windowWidth > 576 ? windowWidth / 15 : windowWidth / 7.5" />
      </div>
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
import HamburgerIcon from "~/assets/svg/HamburgerIcon.vue";
import ArrowToBottom from "~/assets/svg/ArrowToBottom.vue";
import MenuHeader from "~/components/MenuHeader.vue";
import LanguagesDropdown from "~/components/LanguagesDropdown.vue";
import CountDown from "~/components/CountDown.vue";
export default defineComponent({
  components: {
    LogoIcon,
    ArrowToRight,
    HamburgerIcon,
    ArrowToBottom
  },
  setup() {
    const handleButtonClick = (e) => {
      // console.log("click left button", e);
    };
    return {
      handleButtonClick,
    };
  },
  data() {
    return {
      windowWidth: window.innerWidth
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
#header {
  position: relative;
  width: 100vw;
  height: calc(100vw * (1 / 2));
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .menu-header-logo-container {
    height: calc(100vw / 18.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 5vw;
    padding-right: 5vw;


    #logo {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
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
    height: calc(44vw);
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

  .menu-header-container {
    display: flex;
    align-items: center;
    gap: calc(100vw / 24 / 2 - 13px);
    height: calc(100vw / 19.2);

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
        padding: 0px calc(100vw / 24 / 2);
        ;
      }

      .ant-menu-item {
        font-size: calc(100vw /137.14285714286);
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

@media only screen and (max-width: 576px) {
  #header {
    background-size: cover;
    height: calc(130vw);

    .menu-header-logo-container {
      height: 15vw;

      #logo {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    #countdown-container {
      width: 100%;
      height: 100%;
      padding: 3vw;
      align-items: start;

      #countdown-container-content {

        #description-games {
          width: 70%;
          color: #FFFFFF;
          margin-bottom: 0;
          font-family: 'Playfair Display';
          font-style: normal;
          font-weight: 900;
          font-size: 40px;
          line-height: 50px;
        }
      }
    }



    #fairy-container {
      position: absolute;
      width: 45vw;
      height: 45vw;
      background-repeat: no-repeat;
      background-size: contain;
      bottom: 0;
      left: 100px;
      background-size: 100vw;
    }
  }
}
</style>
  