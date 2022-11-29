<script>
import person from "@/assets/icons/person.svg";
import cart from "@/assets/icons/cart.svg";
import search from "@/assets/icons/search.svg";
import menuOpen from "@/assets/icons/menu_open.svg";
import MenuSlider from "../MenuSlider/MenuSlider.vue";
import { mapGetters, mapState } from 'vuex'
import { router } from "../Routes";

export default {
  props: {
    hasDisabledSlider: Boolean
  },
  data: function () {
    return {
      person,
      cart,
      search,
      menuOpen,
    };
  },
  components: {
    MenuSlider,
  },
  computed: {
    ...mapState({
      isMenuOpen: state => state.toggle.isShowMenuSlider
    }),
  },
  methods: {
    handleClickPayment() {
      router.push("/payment");
    },
    handleClickHistory() {
      router.push("/history");
    },
  }
};
</script>
<template>
  <div
    class="flex justify-between items-center border-solid border-b-2 border-t-0 border-l-0 border-b-gray-100 fixed top-0 z-10 bg-white w-full p-3"
  >
    <div class="flex h-9 w-56 leading-4 items-center">
      <div class="box">
        <img :src="menuOpen" />
      </div>

      <div class="flex items-center font-size[18px] cursor-pointer space-x-1">
        <!-- <img src={Logo} alt="logo" width={32} height={32} /> -->
        <div class="flex">
          <span class="text-store-purple-light font-black">Teddy</span>
          <span class="font-black">Store</span>
        </div>
      </div>
    </div>
    <div class="flex mr-5">
      <div class="box" v-on:click="handleClickHistory">
        <img :src="person" height="24" />
      </div>

      <div class="box">
        <img :src="search" height="24" />
      </div>
      <div class="box" v-on:click="handleClickPayment">
        <img :src="cart" height="24" />
      </div>
    </div>
    <MenuSlider v-if="!hasDisabledSlider"  />
  </div>
</template>

<style>
.box {
  @apply h-8 p-2 flex items-center cursor-pointer;
}
</style>
