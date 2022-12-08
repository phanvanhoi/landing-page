<template>
  <a-dropdown>
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="vi">
          <UserOutlined />
          Tiếng Việt
        </a-menu-item>
        <a-menu-item key="en">
          <UserOutlined />
          English
        </a-menu-item>
      </a-menu>
    </template>
    <a-button class="app-button"> Button </a-button>
  </a-dropdown>
</template>

<script>
import { defineComponent } from "vue";
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
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
.app-button {
  background-color: red;
}
</style>
