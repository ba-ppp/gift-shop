<script >
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
import { mapState, mapActions, mapWritableState } from 'pinia';
import { useCartStore } from "@/store/modules/cart";
import { defineComponent, reactive, toRaw, computed } from 'vue';

export default {
  data: function () {
    return {
      person,
      search,
      menuOpen,
    }
  },
  components: {
    NavBarMenu,
    PaymentItem,
  },

  computed: {
    ...mapWritableState(useCartStore, ['bill', 'cart', 'cartTotal', 'cartQuantity']),
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
    productSuccessMessage: function () {
      Swal.fire({
        position: 'top',
        title: 'Order Success!',
        icon: 'success',
        showConfirmButton: false,
        allowOutsideClick: false,
        timerProgressBar: true,
        timer: 1000,
        width: 300,
      })
    },
    productFalseMessage: function () {
      Swal.fire({
        position: 'top',
        title: 'Empty shopping cart!',
        icon: 'error',
        showConfirmButton: false,
        allowOutsideClick: false,
        timerProgressBar: true,
        timer: 1000,
        width: 300,
      })
    },
    payment: function (name, phone, picked) {
      if (!this.cart) {
        this.bill.name = name;
        this.bill.phone = phone;
        this.bill.typeShip = picked;
        this.bill.totalPrice = this.cartTotal;
        this.cart.forEach((item) => {
          let product = {};
          product.idDetail = item.idDetail;
          product.quantity = item.quantity;
          this.bill.listProduct.push(product);
        });
        this.addBill();
        this.productSuccessMessage();
        this.cart.splice(0, this.cartQuantity);
      } else {
        this.productFalseMessage();
      };
      this.bill = {
        listProduct: [],
        name: '',
        phone: '',
        totalPrice: 0,
        typeShip: '',
      };
      console.log(this.bill);

    },
  },
  setup() {
    const formState = reactive({
      name: '',
      phone: '',
      picked: '',
    });
    const onFinish = values => {
      console.log(formState);
    };
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    const disabled = computed(() => {
      return !(formState.name && formState.phone && formState.picked);
    });
    return {
      formState,
      onFinish,
      onFinishFailed,
      disabled,
    };
  },
};
</script>
<template>
  <NavBarMenu hasDisabledSlider />
  <div class="mt-24 w-full">
    <div class="text-center font-bold text-xl">Your cart</div>
  </div>
  <div class="mt-5 bg-store-ghosh-white w-[40%] mx-auto rounded-lg">

    <div class="mx-auto p-3">
      <PaymentItem />
      <div class="mt-5 flex m-auto justify-between">
        <div class="font-light!">Provisional calculation: ({{ cartQuantity }} products):</div>
        <div>{{ cartTotal }}đ</div>
      </div>
      <div class="m-auto ">
        <div class="mt-5 mb-5 font-bold text-center">Customer information</div>
        <!-- <div class="flex justify-between">
          <input class="border p-2 rounded w-[261px] h-[40px] focus:outline-none" type="text" v-model="name" :state="validation"
            placeholder="Họ và tên: " />
          <input class="border p-2 rounded w-[261px] h-[40px] focus:outline-none" type="text" v-model="phone" :state="validation"
            placeholder="Số điện thoại: " />
        </div> -->

        <a-form :model="formState" name="basic" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
          <div class="flex space-x-2">
            <a-form-item label="Full name" name="name"
              :rules="[{ required: true, message: 'Please input your name!' }]">
              <a-input v-model:value="formState.name" />
            </a-form-item>

            <a-form-item label="Phone" name="phone" :rules="[{ required: true, message: 'Please input your phone!' }]">
              <a-input v-model:value="formState.phone" />
            </a-form-item>
          </div>
          <a-form-item class="flex space-x-2" label="Choose a delivery method" name="picked"
            :rules="[{ required: true, message: 'Please choose a delivery method!' }]">
            <a-radio-group v-model:value="formState.picked">
              <a-radio value="Delivery">Delivery</a-radio>
              <a-radio value="Pick up at the store">Pick up at the store</a-radio>
            </a-radio-group>
          </a-form-item>
          <!-- <a-form-item :wrapper-col="{ offset: 8, span: 16 }"> -->
          <a-form-item :wrapper-col="{ offset: 6, span: 12 }">
            <a-button :disabled="disabled" @click="payment(formState.name, formState.phone, formState.picked)"
              type="primary" block shape="round" size="large" html-type="submit">Pay</a-button>
          </a-form-item>
        </a-form>

      </div>
      <!-- <div class="m-auto justify-between">
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
      </div> -->
      <!-- <div>
        <button class="btn btn-sm btn-success" @click="payment(formState.name, formState.phone, formState.picked)">
          <i class="fas fa-plus" /> Thanh Toán
        </button>
      </div> -->
    </div>
  </div>
</template>

<style>
.box {
  @apply h-8 p-2 flex items-center cursor-pointer;
}

/* body {
  @apply bg-store-ghosh-white;
} */
</style>
