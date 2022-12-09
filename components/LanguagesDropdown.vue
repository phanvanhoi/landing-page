<template>
  <a-dropdown id="container">
    <template #overlay>
      <a-menu @click="handleMenuClick" id="menu-item-container">
        <a-menu-item key="vi" class="item-dropdown bg-b">
          <div class="done-icon-container">
            <DoneIcon />
          </div>
          <VNFlagIcon />
          Tiếng Việt

        </a-menu-item>
        <a-menu-item key="en" class="item-dropdown">
          <div class="done-icon-container">
            <!-- <DoneIcon /> -->
          </div>
          <USFlagIcon />
          English
        </a-menu-item>
      </a-menu>
    </template>
    <a-button class="app-button">
      <VNFlagIcon />
      <DownIcon />
    </a-button>
  </a-dropdown>
</template>

<script>
import { defineComponent } from "vue";
import VNFlagIcon from "~/assets/svg/VNFlagIcon.vue";
import USFlagIcon from "~/assets/svg/USFlagIcon.vue";
import DownIcon from "~/assets/svg/DownIcon.vue";
import DoneIcon from "~/assets/svg/DoneIcon.vue";
// import { mapState, mapActions } from "vuex";
export default defineComponent({
  components: {
    VNFlagIcon,
    USFlagIcon,
    DownIcon,
    DoneIcon,
  },
  setup() {
    const handleButtonClick = (e) => {
      console.log("click left button", e);
    };
    const handleMenuClick = (e) => {
      console.log("click", e);
    };
    return {
      handleButtonClick,
      handleMenuClick,
    };
  },
  mounted() {

  }
  // computed: {
  //   ...mapState({
  //     locale: (state) => state?.locale,
  //   }),
  // },
  // methods: {
  //   ...mapActions(["changLanguages"]),
  //   handleMenuClick() {
  //     this.changLanguages("vi");
  //   },
  // },
});
</script>

<style lang="scss">
#container {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 15px;

  .ant-btn {
    border-color: none;
  }
}

#menu-item-container {
  padding: 10px;

  .item-dropdown {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 15px;
    background: none;
  }

  .done-icon-container {
    min-width: 20px;
  }

  .app-button {
    border: none;
    display: flex;
    align-items: center;
  }

  .bg-b {
    border-bottom: 1px solid #c4c4c4;
  }
}
</style>
