<script>
import person from "@/assets/icons/person.svg";
import cart from "@/assets/icons/cart.svg";
import search from "@/assets/icons/search.svg";
import menuOpen from "@/assets/icons/menu_open.svg";
import MenuSlider from "../MenuSlider/MenuSlider.vue";
// import { mapGetters, mapState } from "vuex";
import { router } from "../Routes";
import NavBarMenu from "../NavBarMenu/NavBarMenu.vue";
import rabbit from "@/assets/images/tho-tim-long-2.png";
import { mapState } from "pinia";
import { useCartStore } from "@/store/modules/cart";
import { DeleteTwoTone } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";

export default {
  data: function () {
    return {
      rabbit,
      search,
      menuOpen,
      // cart: [
      //   {
      //     id_product: "bulbasaur",
      //     name: "bulbasaur",
      //     id: [1],
      //     size: ["30cm"],
      //     price: [0.00016],
      //     describes: "Suitable For Ages: 0+",
      //     status: 1,
      //     color: "normal",
      //     image: "bulbasaur.png",
      //     selectedPrice: 0.00016,
      //   },
      // ],
    };
  },
  computed: {
    ...mapState(useCartStore, ["cart", "cartTotal", "cartQuantity"]),
  },

  methods: {
    handleClickPayment() {
      router.push("/payment");
    },
    deleteCart(idDetail) {
      let indexProduct = this.cart.findIndex((p) => p.idDetail === idDetail);
      this.cart.splice(indexProduct, 1);
    },
  },
  components: {
    DeleteTwoTone,
  },
};
</script>
<template>
  <div v-for="(item, id) in cart">
    <div class="flex">
      <div class="flex mt-5 w-[70%] space-x-5">
        <div
          class="h-[70px] w-[70px] bg-cover bg-center"
          :style="{
            backgroundImage: 'url(' + '/src/assets/images/' + item.image + ')',
          }"
        ></div>

        <div class="flex items-center">
          <div>
            <div class="text-store-purple-light font-bold text-[16px]">
              {{ item.name }}
            </div>
            <div class="text-store-purple-dark font-bold text-[16px]">
              {{ item.selectedSize ?? "30cm" }}
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-between flex-grow items-center">
        <div class="text-center w-[25%]">{{ item.quantity ?? 1 }}</div>
        <div>
          <div class="text-store-pink">{{ item.selectedPrice }} ETH</div>
        </div>
      </div>
      <div class="w-[10%] flex justify-center items-center">
        <DeleteTwoTone
          @click="deleteCart(item.idDetail)"
          twoToneColor="#ef4444"
          class="text-[20px]"
        />
      </div>
    </div>
  </div>
</template>

<style>
.box {
  @apply h-8 p-2 flex items-center cursor-pointer;
}
</style>
