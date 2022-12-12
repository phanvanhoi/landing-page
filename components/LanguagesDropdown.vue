<template>
  <a-dropdown id="container">
    <template #overlay>
      <a-menu id="menu-item-container">
        <nuxt-link :to="localePath('/', 'vi')">
          <a-menu-item :key="localed" class="item-dropdown bg-b">
            <div v-if="localed" class="done-icon-container">
            </div>
            <div v-else class="done-icon-container">
              <DoneIcon />
            </div>
            <img :src="`${vnFlg}`" />
            Tiếng Việt
            {{ located }}
          </a-menu-item>
        </nuxt-link>
        <nuxt-link :to="localePath('/', 'en')">
          <a-menu-item :key="localed" class="item-dropdown">
            <div v-if="localed" class="done-icon-container">
              <DoneIcon />
            </div>
            <div v-else class="done-icon-container">
            </div>
            <img :src="`${enFlag}`" />
            English
          </a-menu-item>
        </nuxt-link>

      </a-menu>
    </template>
    <a-button class="app-button">
      <div v-if="localed">
        <img :src="`${enFlag}`" />
      </div>
      <div v-else>
        <img :src="`${vnFlg}`" />
      </div>
      <DownIcon :fill="'black'" />
    </a-button>
  </a-dropdown>
</template>

<script>
import { defineComponent, forceComponent } from "vue";
import { mapState, mapActions, mapMutations } from "vuex";
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
  props: ["activeBorder", "localed"],
  computed: mapState(["locale"])
  ,
  methods: {
    ...mapActions(['changLanguages'])
  }
  ,
  data() {
    return {
      vnFlg: require('~/static/vietnam.png'),
      enFlag: require('~/static/en.png'),
    }
  },
});
</script>

<style lang="scss">
#container {
  background: none;
  border: none;
  display: flex;
  align-items: center;

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
