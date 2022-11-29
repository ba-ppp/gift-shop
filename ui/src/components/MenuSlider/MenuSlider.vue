<template>
  <a-menu
    class="fixed top-[73px] left-0"
    id="dddddd"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="inline"
    @click="handleClick"
  >
    <a-sub-menu key="sub1" @titleClick="titleClick">
      <template #icon>
        <TagOutlined />
      </template>
      <template #title>Teddy Bear</template>
      <a-menu-item-group key="g1" title="">
        <template #icon>
          <QqOutlined />
        </template>
        <template #title>Item 1</template>
        <a-menu-item key="1" @click="changeCat('pokemon')"
          >Pokemons</a-menu-item
        >
        <a-menu-item key="2" @click="changeCat('dog')">Dogs</a-menu-item>
      </a-menu-item-group>
      <!-- <a-menu-item-group key="g2" title="Item 2">
        <a-menu-item key="3">Option 3</a-menu-item>
        <a-menu-item key="4">Option 4</a-menu-item>
      </a-menu-item-group> -->
    </a-sub-menu>
    <a-sub-menu key="sub2" @titleClick="titleClick">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>KeyRing</template>
      <a-menu-item key="5">Option 5</a-menu-item>
      <a-menu-item key="6">Option 6</a-menu-item>
      <!-- <a-sub-menu key="sub3" title="Submenu">
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu> -->
    </a-sub-menu>
    <a-sub-menu key="sub4">
      <template #icon>
        <SettingOutlined />
      </template>
      <template #title>Others</template>
      <a-menu-item key="9">Option 9</a-menu-item>
      <a-menu-item key="10">Option 10</a-menu-item>
      <a-menu-item key="11">Option 11</a-menu-item>
      <a-menu-item key="12">Option 12</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import {
  MailOutlined,
  QqOutlined,
  AppstoreOutlined,
  SettingOutlined,
  TagOutlined,
} from "@ant-design/icons-vue";
import type { MenuProps } from "ant-design-vue";
import { mapWritableState, mapActions, mapState } from "pinia";
import { useProductsStore } from "@/store/modules/product";
import { useToggleStore } from "@/store/modules/toggle";
import { sleep } from "@/utils/utils";
export default defineComponent({
  components: {
    MailOutlined,
    QqOutlined,
    TagOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  computed: {
    ...mapWritableState(useProductsStore, ["category"]),
  },
  methods: {
    ...mapActions(useToggleStore, ["toggleLoading"]),
    ...mapActions(useProductsStore, ["getProductStore"]),
    changeCat: async function (cat: any) {
      this.category = cat;

      this.toggleLoading(true);

      // fake sleep
      await sleep(1500);

      try {
        await this.getProductStore();
      } catch (error) {
        console.log(error);
      } finally {
        this.toggleLoading(false);
      }
    },
  },
  setup() {
    const selectedKeys = ref<string[]>(["1"]);
    const openKeys = ref<string[]>(["sub1"]);
    const handleClick: MenuProps["onClick"] = (e) => {
      console.log("click", e);
    };
    const titleClick = (e: Event) => {
      console.log("titleClick", e);
    };
    watch(
      () => openKeys,
      (val) => {
        console.log("openKeys", val);
      }
    );
    return {
      selectedKeys,
      openKeys,

      handleClick,
      titleClick,
    };
  },
});
</script>
