<script>
import person from "@/assets/icons/person.svg";
import cart from "@/assets/icons/cart.svg";
import search from "@/assets/icons/search.svg";
import menuOpen from "@/assets/icons/menu_open.svg";
import MenuSlider from "../MenuSlider/MenuSlider.vue";
import { mapGetters, mapState } from "vuex";
import { TOGGLE_MENU_SLIDER } from "@/types";
import { router } from "../Routes";
import NavBarMenu from "../NavBarMenu/NavBarMenu.vue";
import rabbit from "@/assets/images/tho-tim-long-2.png";

export default {
  data: function () {
    return {
      rabbit,
      cart,
      search,
      menuOpen,
    };
  },
  computed: {
    ...mapState({
      isMenuOpen: (state) => state.toggle.isShowMenuSlider,
    }),
  },
  methods: {
    handleClickMenuIcon() {
      this.$store.commit(TOGGLE_MENU_SLIDER);
    },
    handleClickPayment() {
      router.push("/payment");
    },
  },
};
</script>
<template>
  <div class="flex items-center justify-between">
    <div
      class="h-[80px] w-[80px] bg-cover bg-center"
      :style="{ backgroundImage: 'url(' + rabbit + ')' }"
    ></div>
    <div class="w-3/4">Thỏ bông tím</div>
    <div>
        <div>150.000đ</div>
        <div>1 x</div>
    </div>
  </div>
</template>

<style>
.box {
  @apply h-8 p-2 flex items-center cursor-pointer;
}
</style>
