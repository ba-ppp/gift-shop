<script>
import person from "@/assets/icons/person.svg";
import cart from "@/assets/icons/cart.svg";
import search from "@/assets/icons/search.svg";
import menuOpen from "@/assets/icons/menu_open.svg";
import MenuSlider from "../MenuSlider/MenuSlider.vue";
// import { mapGetters, mapState } from "vuex";
import { TOGGLE_MENU_SLIDER } from "@/types";
import Swal from 'sweetalert2';
import { router } from "../Routes";
import NavBarMenu from "../NavBarMenu/NavBarMenu.vue";
import PaymentItem from "./PaymentItem.vue";
import { mapState, mapActions } from 'pinia';
import { useCartStore } from "@/store/modules/cart";

export default {
  // props: {
  //   cart: {
  //     type: Array,
  //     default: []
  //   }
  // },
  data: function () {
    return {
      person,
      search,
      menuOpen,
    };
    console.log(this.cart);
  },
  components: {
    NavBarMenu,
    PaymentItem,
  },
  computed: {
    ...mapState(useCartStore, ['bill', 'cart', 'cartTotal', 'cartQuantity']),
    // ...mapState({
    //   isMenuOpen: (state) => state.toggle.isShowMenuSlider,
    // }),
  },
  methods: {
    ...mapActions(useCartStore, ['addBill']),
    handleClickMenuIcon() {
      this.$store.commit(TOGGLE_MENU_SLIDER);
    },
    handleClickPayment() {
      router.push("/payment");
    },
    productAddedMessage: function () {
      Swal.fire({
        position: 'top',
        title: 'Success!',
        icon: 'success',
        showConfirmButton: false,
        allowOutsideClick: false,
        timerProgressBar: true,
        timer: 1000,
        width: 300,
      })
    },
    payment: function (name, phone, picked) {
      this.bill.name = name;
      this.bill.phone = phone;
      this.bill.ship = picked;
      this.bill.totalPrice = this.cartTotal;
      this.cart.forEach((item) => {
        this.bill.listProduct.push(item.idDetail)
      });
      this.productAddedMessage();
      this.cart.splice(0,this.cartQuantity);
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
      <div class="font-light!">Tạm tính ({{ cartQuantity }} sản phẩm):</div>
      <div>{{ cartTotal }}đ</div>
    </div>
    <div class="m-auto">
      <div class="mb-3 text-left">Thông tin khách hàng</div>
      <div class="flex justify-between">
        <input class="border p-2 rounded w-[261px] h-[40px] focus:outline-none" type="text" v-model="name"
          placeholder="Họ và tên: " />
        <input class="border p-2 rounded w-[261px] h-[40px] focus:outline-none" type="text" v-model="phone"
          placeholder="Số điện thoại: " />
      </div>
    </div>
    <div class="m-auto justify-between">
      <div class="text-left">Chọn hình thức nhận hàng</div>
      <div class="flex items-center space-x-20">
        <div class="flex items-center">
          <input class="(w-[2rem] h-[16px] accent-[#5451f6] cursor-pointer)!" type="radio" v-model="picked"
            value="shipHome" id="shipHome" />
          <span>
            <label for="shipHome">Giao tận nơi</label>
          </span>
        </div>
        <div class="flex items-center">
          <input class="(width[2rem] height[16px] accent-[#5451f6] cursor-pointer)!" type="radio" v-model="picked"
            value="shipStore" id="shipStore" />
          <span>
            <label for="shipStore">Nhận tại cửa hàng</label>
          </span>
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-sm btn-success" @click="payment(name, phone, picked)">
        <i class="fas fa-plus" /> Thanh Toán
      </button>
    </div>
  </div>
</template>

<style>
.box {
  @apply h-8 p-2 flex items-center cursor-pointer;
}
</style>
