<script>
import person from "@/assets/icons/person.svg";
import cart from "@/assets/icons/cart.svg";
import search from "@/assets/icons/search.svg";
import menuOpen from "@/assets/icons/menu_open.svg";
import MenuSlider from "../MenuSlider/MenuSlider.vue";
// import { mapGetters, mapState } from "vuex";
import { TOGGLE_MENU_SLIDER } from "@/types";
import { router } from "../Routes";
import NavBarMenu from "../NavBarMenu/NavBarMenu.vue";
import rabbit from "@/assets/images/tho-tim-long-2.png";
import { mapState} from 'pinia';
import { useCartStore } from "@/store/modules/cart";

export default {
  data: function () {
    return {
      rabbit,
      search,
      menuOpen,
    };
  },
  computed: {
    // ...mapState({
    //   isMenuOpen: (state) => state.toggle.isShowMenuSlider,
    // }),
    ...mapState(useCartStore, ['cart']),
  },

  methods: {
    handleClickMenuIcon() {
      this.$store.commit(TOGGLE_MENU_SLIDER);
    },
    handleClickPayment() {
      router.push("/payment");
    },
    deleteCart(idDetail) {
      let indexProduct = this.cart.findIndex(p => p.idDetail === idDetail);
      this.cart.splice(indexProduct, 1 );
    }
  },
};
</script>
<template>
  <div v-for="(item, id) in cart">
    <div class="flex items-center justify-between">
      <div class="h-[80px] w-[80px] bg-cover bg-center" :style="{ backgroundImage: 'url(' + '/src/assets/images/' + item.image + ')' }"></div>
      <div class="w-3/4">{{ item.name }}</div>
      <div>
        <div>{{item.selectedSize}}</div>
        <div>{{item.selectedPrice}}</div>
        <div>x {{item.quantity}} </div>
        <div>
      <button class="btn btn-sm btn-success" @click="deleteCart(item.idDetail)">
        <i class="fas fa-plus" /> Xoa
      </button>
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
