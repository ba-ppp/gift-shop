<script>
import { ref } from "vue";
import rabbit from "@/assets/images/tho-tim-long-2.png";
import addToCart from "@/assets/icons/add_to_cart.svg";
import Box from "./Box.vue";
import Swal from "sweetalert2";
import { mapState, mapActions } from "pinia";
import { useProductsStore } from "@/store/modules/product";
import { useCartStore } from "@/store/modules/cart";
import { useToggleStore } from "@/store/modules/toggle";
import { sleep } from '@/utils/utils';

import axios from "axios";

export default {
  // props: {
  //   cart: {
  //     type: Array,
  //     default: []
  //   }
  // },
  // props: ['product'],
  data: function () {
    return {
      listPrice: [],
      id: "",
      // cate: 'pokemon',
      selectedProduct: 0,
      selectedSize: 0,
    };
  },
  // async created() {
  //   await axios.get('http://localhost:8080/product/getProductByCat', { params: { cat: 'pokemon' } })
  //     .then((response) => {
  //       this.product = response.data;
  //     })
  // },

  async created() {
    this.toggleLoading(true);
    try {
      await this.getProductStore();
      await sleep(1500);
    } catch (error) {
      console.log(error);
    } finally {
      this.toggleLoading(false);
    }
  },
  computed: {
    getPrice() {
      let index = this.selectedProduct;
      // this.listPrice = item.price;
      // let indexPrice = this.selectedSize;
      return this.product[index].price;
    },
    ...mapState(useProductsStore, ["product"]),
    ...mapState(useCartStore, ["cart"]),
  },
  // mounted: function() {
  //   this.cart = localStorage.getItem("cart")
  //     ? JSON.parse(localStorage.getItem("cart"))
  //     : [];

  //     setTimeout(() => (this.loadingProducts = false), 2000);
  // },
  methods: {
    ...mapActions(useToggleStore, ["toggleLoading"]),
    ...mapActions(useProductsStore, ["getProductStore"]),
    handleClickSize(id, index) {
      // console.log(size,id,index);
      this.selectedSize = index;
      this.selectedProduct = id;
    },
    classActive(id, index) {
      return {
        active: this.selectedProduct === id && this.selectedSize === index,
      };
    },
    classActiveItem(index) {
      return {
        active: 0 === index,
      };
    },
    productAddedMessage: function () {
      Swal.fire({
        position: "top",
        title: "Add to cart!",
        icon: "success",
        showConfirmButton: false,
        allowOutsideClick: false,
        timerProgressBar: true,
        timer: 1000,
        width: 300,
      });
    },
    addToCart: function (item) {
      let indexProduct = this.cart.findIndex(
        (p) =>
          p.id_product === item.id_product &&
          p.selectedSize === item.size[this.selectedSize]
      );
      if (indexProduct > -1) {
        let tempProduct = this.cart[indexProduct];
        this.cart.splice(indexProduct, 1);
        tempProduct.quantity++;
        this.cart.push(tempProduct);
      } else {
        item.quantity = 1;
        item.selectedPrice = item.price[this.selectedSize];
        item.selectedSize = item.size[this.selectedSize];
        item.idDetail = item.id[this.selectedSize];
        this.cart.push({ ...item });
      }
      // item.selectedPrice = item.price[this.selectedSize];
      // item.selectedSize = item.size[this.selectedSize];
      // item.idDetail = item.id[this.selectedSize];
      // item.quantity = 1;
      // this.cart.push({ ...item });
      // this.productAddedMessage();
      this.productAddedMessage();
      console.log(this.cart);
    },
  },
};
// const count = ref(0)
</script>

<template>
 
  <div
    class="border border-solid bg-white border-white w-64 h-92 rounded-2xl"
    v-for="(item, id) in product"
  >
    <div
      class="w-full h-64 bg-cover bg-center rounded-2xl"
      :style="{
        backgroundImage: 'url(' + '/src/assets/images/' + item.image + ')',
      }"
    ></div>
    <div class="flex items-center justify-between mb-3 mt-2">
      <div>
        <div class="text-store-purple-light capitalize font-bold">
          {{ item.name }}
        </div>
        <div class="flex font-bold">
          <div class="text-store-pink mt-2" v-if="id === selectedProduct">
            {{ getPrice[selectedSize] }} ETH
          </div>
          <div class="text-store-pink mt-2" v-if="id !== selectedProduct">
            {{ item.price[0] }} ETH
          </div>
        </div>
      </div>

      <div class="hover:opacity-75 cursor-pointer">
        <v-spacer></v-spacer>
        <v-btn @click="addToCart(item)">
          <img src="src/assets/icons/add_to_cart.svg" height="24" />
        </v-btn>
      </div>
    </div>
    <div class="flex space-x-1">
      <div
        class="flex font-medium items-center justify-center rounded-md p-4 w-12 h-4 border border-solid text-store-purple-light border-store-purple-light cursor-pointer"
        :class="
          id === selectedProduct
            ? classActive(id, index)
            : classActiveItem(index)
        "
        v-for="(size, index) in item.size"
        @click="handleClickSize(id, index)"
      >
        <div>
          {{ size }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply bg-store-purple-light !text-white;
}
</style>
