<script>
import person from "@/assets/icons/person.svg";
import cart from "@/assets/icons/cart.svg";
import search from "@/assets/icons/search.svg";
import menuOpen from "@/assets/icons/menu_open.svg";
import MenuSlider from "../MenuSlider/MenuSlider.vue";
// import { mapGetters, mapState } from "vuex";
import Swal from "sweetalert2";
import { router } from "../Routes";
import NavBarMenu from "../NavBarMenu/NavBarMenu.vue";
import PaymentItem from "./PaymentItem.vue";
import { mapState, mapActions, mapWritableState } from "pinia";
import { useCartStore } from "@/store/modules/cart";
import { useToggleStore } from '@/store/modules/toggle';
import { defineComponent, reactive, toRaw, computed } from "vue";
import { storeToRefs } from "pinia";
import { useTransaction } from "@/store/transaction";
import Loader from "@/components/Loader/Loader.vue";

export default {
  data: function () {
    return {
      person,
      search,
      menuOpen,
    };
  },
  components: {
    NavBarMenu,
    PaymentItem,
  },

  computed: {
    ...mapWritableState(useCartStore, [
      "bill",
      "cart",
      "cartTotal",
      "cartQuantity",
    ]),
    ...mapState(useTransaction, [
      "checkConnected",
      "sendTransaction",
      "account",
      "isLoadingTransaction",
    ]),
    ...mapState(useToggleStore, ["isLoading"]),
  },
  methods: {
    ...mapActions(useCartStore, ["addBill"]),
    ...mapActions(useToggleStore, ["toggleLoading"]),
    handleClickPayment() {
      router.push("/payment");
    },
    productSuccessMessage: function () {
      Swal.fire({
        position: "top",
        title: "Order Success!",
        icon: "success",
        showConfirmButton: false,
        allowOutsideClick: false,
        timerProgressBar: true,
        timer: 1000,
        width: 300,
      });
    },
    productFalseMessage: function () {
      Swal.fire({
        position: "top",
        title: "Empty shopping cart!",
        icon: "error",
        showConfirmButton: false,
        allowOutsideClick: false,
        timerProgressBar: true,
        timer: 1000,
        width: 300,
      });
    },
    productPayFalseMessage: function () {
      Swal.fire({
        position: "top",
        title: "Pay failed!",
        icon: "error",
        showConfirmButton: false,
        allowOutsideClick: false,
        timerProgressBar: true,
        timer: 1000,
        width: 300,
      });
    },
    payment: async function (name, phone, picked) {
      await this.checkConnected();
      if (this.cart.length !== 0) {
        let isPaid = false;
        if (this.account) {
          isPaid = await this.sendTransaction(this.cartTotal.toString());
        }
        if (!isPaid) {
          this.productPayFalseMessage();
        } else {
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
        }
      } else {
        this.productFalseMessage();
      }
      this.bill = {
        listProduct: [],
        name: "",
        phone: "",
        totalPrice: 0,
        typeShip: "",
      };
    },
  },
  setup() {
    const formState = reactive({
      name: "",
      phone: "",
      picked: "",
    });
    const onFinish = (values) => {
      console.log(formState);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
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
  <Loader v-if="isLoading || isLoadingTransaction" />
  <NavBarMenu hasDisabledSlider />
  <div class="mt-24 w-full">
    <div class="text-center font-bold text-xl">Your cart</div>
  </div>
  <div class="mt-5 bg-store-ghosh-white w-[70%] mx-auto rounded-lg">
    <div class="mx-auto p-3">
      <div class="flex justify-between">
        <div class="text-[18px] font-medium w-[70%]">Product</div>
        <div class="flex w-[20%] justify-between">
          <div class="text-[18px] font-medium">Quantity</div>
          <div class="text-[18px] font-medium">Price</div>
        </div>
        <div class="w-[10%]"></div>
      </div>
      <PaymentItem />
      <div class="mt-5 w-[90%] flex justify-between">
        <div class="font-light!">
          Provisional calculation: ({{ cartQuantity }} gifts):
        </div>
        <div>{{ cartTotal }} ETH</div>
      </div>
      <div class="m-auto">
        <div class="mt-5 mb-5 font-bold text-center">Customer information</div>
        <a-form
          :model="formState"
          name="basic"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <div class="flex justify-around">
            <a-form-item label="Full name" name="name">
              <a-input v-model:value="formState.name" />
            </a-form-item>

            <a-form-item label="Phone" name="phone">
              <a-input v-model:value="formState.phone" />
            </a-form-item>
          </div>
          <a-form-item
            class="ml-[3.9rem] flex space-x-14"
            label="Choose a delivery method"
            name="picked"
          >
            <a-radio-group
              v-model:value="formState.picked"
              class="flex space-x-8"
            >
              <a-radio value="Delivery">Delivery</a-radio>
              <a-radio value="Pick up at the store"
                >Pick up at the store</a-radio
              >
            </a-radio-group>
          </a-form-item>
          <!-- <a-form-item :wrapper-col="{ offset: 8, span: 16 }"> -->
          <a-form-item :wrapper-col="{ offset: 6, span: 12 }">
            <a-button
              :disabled="disabled"
              @click="
                payment(formState.name, formState.phone, formState.picked)
              "
              class="disabled:bg-gray-200 disabled:border-gray-200 bg-store-purple-light border-store-purple-light text-white"
              type="primary"
              block
              shape="round"
              size="large"
              html-type="submit"
              >Pay</a-button
            >
          </a-form-item>
        </a-form>
      </div>
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
/* .ant-btn-primary {
  background-color: #9a6aff !important;
  border-color: #9a6aff !important;
} */
</style>
