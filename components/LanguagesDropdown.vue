<template>
  <a-dropdown>
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="vi" class="item-dropdown">
          <VNFlagIcon />
          Tiếng Việt
        </a-menu-item>
        <a-menu-item key="en" class="item-dropdown">
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
export default defineComponent({
  components: {
    VNFlagIcon,
    USFlagIcon,
    DownIcon,
  },
  state: {
    lang: "vi",
  },
  setup() {
    const handleButtonClick = (e) => {
      console.log("click left button", e);
    };
    const handleMenuClick = (e) => {
      this.state.lang = e.key;
      console.log("click", e);
    };
    return {
      handleButtonClick,
      handleMenuClick,
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
.item-dropdown {
  display: flex;
  align-items: center;
  gap: 10px;
}

.app-button {
  border: none;
  display: flex;
  align-items: center;
}
</style>
