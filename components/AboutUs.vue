<template>
  <div id="bottom-about-us-container" :style="{
    'background-image': `url(${require('../static/bg-bottom.png')})`,
  }">
    <div class="left-container">
      <div class="left-icon-container">
        <!-- logo -->
        <LogoIcon :width="230" :height="104" />
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
import { defineComponent } from "vue";
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

  },
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
    height: calc(100vw * (1 / 30));
    background: none;
  }

  .flex-1 {
    width: 48%;
  }

  .pd-b-48 {
    padding-bottom: calc(100vw / 48);
  }
}
</style>
  