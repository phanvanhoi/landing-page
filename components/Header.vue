<template>
  <div>
    <div id="header" :style="{
      'background-image': `url(${windowWidth > 576 ? require('../static/BackgoundImage.png') : require('../static/bg-mobile.png')})`,
    }">
      <div class="menu-header-logo-container">
        <div id="logo">
          <LogoIcon :width="windowWidth > 576 ? windowWidth / 15 : windowWidth / 5"
            :height="windowWidth > 576 ? windowWidth / 15 / 1.75 : windowWidth / 5 / 1.75" />
        </div>
        <div v-show="windowWidth > 576" class="menu-header-container">
          <MenuHeader />
          <LanguagesDropdown :localed="localed" />
        </div>
        <div v-show="windowWidth <= 576" class="menu-header-container" @click="handleShowMenuMobile">
          <HamburgerIcon v-show="!isShowMenuMobile" :width="windowWidth > 576 ? windowWidth / 15 : windowWidth / 5"
            :height="windowWidth > 576 ? windowWidth / 15 / 1.75 : windowWidth / 5 / 1.75" />
          <div v-show="windowWidth < 576 && isShowMenuMobile" class="menu-header-container">
            <Draw @handleHideMenuMobile="handleHideMenuMobile" />
          </div>
        </div>
        <div v-show="isShowMenuMobile && isShowMenuMobile <= 576" class="menu-header-container">
          <Draw @handleHideMenuMobile="handleHideMenuMobile" />
        </div>
      </div>
      <div v-show="windowWidth > 576" id="fairy-container" :style="{
        'background-image': `url(${require('../static/Fairy.png')})`,
      }"></div>
      <div id="countdown-container">
        <div id="countdown-container-content">
          <h1 id="description-games">{{ $t('Header.description-games') }}</h1>
          <CountDown></CountDown>
          <div id="description-games-detail-container">
            <h1 id="description-games-detail">{{ $t('Header.description-games-detail') }}</h1>
            <a-input id="input-email" v-model:value="email" :placeholder="`${$t('emailPlaceHolder')}`">
              <template #suffix>
                <ArrowToRight :width="`${windowWidth > 576 ? windowWidth / 30 : 25}`"
                  :height="`${windowWidth >= 576 ? windowWidth / 30 : 25}`" />
              </template>
            </a-input>
          </div>
        </div>
      </div>
    </div>
    <div v-show="windowWidth <= 576" class="fairy-mobile-container">
      <div id="fairy-container" :style="{
        'background-image': `url(${require('../static/Fairy2.png')})`,
      }"></div>
    </div>
    <!-- <a href="#copy-right-container">
      <div id="scroll-down-btn">
        <ArrowToBottom :width="`${windowWidth / 50}`" :height="`${windowWidth / 50}`" />
      </div>
    </a> -->
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
import Draw from "~/components/Draw.vue";
export default defineComponent({
  components: {
    LogoIcon,
    ArrowToRight,
    HamburgerIcon,
    ArrowToBottom,
    Draw
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
      windowWidth: window.innerWidth,
      isShowMenuMobile: false,
      localed: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
      this.localed = this.$route.path.toString().includes('en');
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    },
    handleShowMenuMobile() {
      this.isShowMenuMobile = true;
    },
    handleHideMenuMobile() {
      this.isShowMenuMobile = false;
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
    padding-right: 2vw;

    #logo {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
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
          height: 5vw;
          font-size: calc(100vw / 48);
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
  .fairy-mobile-container {
    position: relative;
    width: 100vw;
    height: 80vw;
    display: flex;
    align-items: center;
    justify-content: center;

    #fairy-container {
      position: absolute;
      width: 70%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      top: -14vw;
      left: 19vw;
    }

  }

  #header {
    background-size: cover;
    height: 167vw;

    .menu-header-logo-container {
      height: 15vw;
      padding-right: 0;

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
      padding-top: 28vw;
      padding-bottom: 38vw;
      align-items: start;

      #countdown-container-content {
        height: 100%;
        display: flex;
        justify-content: space-between;

        #description-games-detail-container {
          width: 100%;

          #input-email {
            height: 60px;
            font-size: 4vw;
          }

          #description-games-detail {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            text-align: center;
            letter-spacing: 0.9px;
            color: #FFFFFF;
            width: 100%;
          }
        }

        #description-games {
          width: 55%;
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

@media only screen and (max-width: 365px) {
  #header {

    #countdown-container {
      padding-top: 23vw;
      padding-bottom: 37vw;

      #countdown-container-content {

        #description-games {
          width: 63%;
        }

        #description-games-detail-container {

          #input-email {
            height: 50px;
          }
        }
      }
    }
  }
}
</style>
  