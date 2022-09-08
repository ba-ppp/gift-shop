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
import PaymentItem from "./PaymentItem.vue";

export default {
  data: function () {
    return {
      person,
      cart,
      search,
      menuOpen,
    };
  },
  components: {
    NavBarMenu,
    PaymentItem,
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
  <NavBarMenu hasDisabledSlider />
  <div class="mt-24 w-full">
    <div class="text-center font-bold text-xl">Your cart</div>
  </div>
  <div class="w-1/2 mx-auto p-3">
    <PaymentItem />
    <div class="flex m-auto justify-between">
      <div class="font-light!">Tạm tính (5 sản phẩm):</div>
      <div>10.000d</div>
    </div>
    <div class="m-auto">
      <div class="mb-3 text-left">Thông tin khách hàng</div>
      <div class="flex justify-between">
        <input
          class="border p-2 rounded w-[261px] h-[40px] focus:outline-none"
          type="text"
          placeholder="Họ và tên: "
        />
        <input
          class="border p-2 rounded w-[261px] h-[40px] focus:outline-none"
          type="text"
          placeholder="Số điện thoại: "
        />
      </div>
    </div>
    <div class="m-auto justify-between">
      <div class="text-left">Chọn hình thức nhận hàng</div>
      <div class="flex items-center space-x-20">
        <div class="flex items-center">
          <input
            class="(w-[2rem] h-[16px] accent-[#5451f6] cursor-pointer)!"
            type="radio"
            name="shipHome"
            id=""
          />
          <span>Giao tận nơi</span>
        </div>
        <div class="flex items-center">
          <input
            class="(width[2rem] height[16px] accent-[#5451f6] cursor-pointer)!"
            type="radio"
            name="shipStore"
          />
          <span>Nhận tại cửa hàng</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.box {
  @apply h-8 p-2 flex items-center cursor-pointer;
}
</style>
