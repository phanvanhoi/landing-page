<template>
  <div id="bottom-about-us-container" :style="{
    'background-image': `url(${require('../static/bg-bottom.png')})`,
  }">
    <div class="left-container">
      <div class="left-icon-container">
        <!-- logo -->
        <LogoIcon :width="`${windowWidth > 576 ? 230 : 190}`" :height="104" />
        <div class="listlogo-container">
          <!-- listlogo -->
          <TwitterIcon />
          <FacebookIcon />
          <InIcon />
        </div>
      </div>
    </div>
    <div class="right-container">
      <div class="flex-1">
        <!-- address -->
        <h1>Address</h1>
        <div class="address-container">
          <div class="info-bottom-container pd-b-48">
            <PointPlaceIcon />
            <div class="info-bottom-description-container">
              <h3>Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US</h3>
              <h3>20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam</h3>
            </div>
          </div>
          <div class="info-bottom-container">
            <PhoneIcon />
            <h3>(+1) 555-0108-000 or (+236) 555-0108</h3>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <h1>Subscribe</h1>
        <h3>Subscribe to our newsletter and be the first to know about our updates</h3>
        <a-input id="input-email" v-model:value="email" placeholder="Địa chỉ email của bạn">
          <template #suffix>
            <ArrowToRightWhite />
          </template>
        </a-input>
      </div>
    </div>
  </div>
</template>
  
<script>
import { defineComponent, ref } from 'vue';
import LogoIcon from "~/assets/svg/LogoIcon.vue";
import TwitterIcon from "~/assets/svg/TwitterIcon.vue";
import FacebookIcon from "~/assets/svg/FacebookIcon.vue";
import InIcon from "~/assets/svg/InIcon.vue";
import PointPlaceIcon from "~/assets/svg/PointPlaceIcon.vue";
import PhoneIcon from "~/assets/svg/PhoneIcon.vue";
import ArrowToRightWhite from "~/assets/svg/ArrowToRightWhite.vue";

export default defineComponent({
  components: {
    LogoIcon,
    TwitterIcon,
    FacebookIcon,
    InIcon,
    PointPlaceIcon,
    PhoneIcon,
    ArrowToRightWhite
  },
  setup() {
    const current = ref(['mail']);
    return {
      current,
      windowWidth: window.innerWidth,
    };
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
#bottom-about-us-container {
  position: relative;
  width: 100vw;
  height: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: calc(100vw / 18.46153846154) calc(100vw / 8.34782608696);
  display: flex;

  .left-container {
    width: 40%;

    .left-icon-container {
      display: flex;
      gap: calc(100vw / 24 / 2);
      flex-direction: column;

      .listlogo-container {
        display: flex;
        gap: calc(100vw / 24 / 2.5);
      }
    }

  }

  .right-container {
    width: 60%;
    display: flex;
    justify-content: space-between;

    .address-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .info-bottom-container {
      display: flex;
      gap: calc(100vw /24/4);

      .info-bottom-description-container {
        display: flex;
        flex-direction: column;
      }
    }
  }

  h1,
  h3 {
    color: #fff;
  }

  h3 {
    font-weight: 200;
  }

  #input-email {
    border-radius: 10px;
    height: 7vw;
    background: none;
  }

  .flex-1 {
    width: 48%;
  }

  .pd-b-48 {
    padding-bottom: calc(100vw / 48);
  }
}

@media only screen and (max-width: 576px) {
  #bottom-about-us-container {
    flex-direction: column;
    align-items: self-start;
    padding: 10vw 5vw;
    gap: 15vw;

    .left-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .left-icon-container {
        gap: 10vw;

        .listlogo-container {
          justify-content: space-between;
        }
      }

    }

    .right-container {
      width: 100%;
      flex-direction: column;
      gap: 15vw;

      .address-container {
        gap: 3vw;
      }

      .info-bottom-container {
        gap: 3vw;

        .info-bottom-description-container {
          display: flex;
          flex-direction: column;
        }
      }
    }

    h1,
    h3 {
      color: #fff;
    }

    h3 {
      font-weight: 200;
      margin-bottom: 5vw;
    }

    #input-email {
      height: 15vw;
      font-size: 4vw;
    }

    .flex-1 {
      width: 100%;
    }

    .pd-b-48 {
      padding-bottom: calc(100vw / 48);
    }
  }
}
</style>
  