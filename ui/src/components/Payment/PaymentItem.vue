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
import { mapState } from 'pinia';
import { useCartStore } from "@/store/modules/cart";
import { DeleteTwoTone } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

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
      this.cart.splice(indexProduct, 1);
    }
  },
  components: {
    DeleteTwoTone
  },
};
</script>
<template>
  <div v-for="(item, id) in cart">
    <!-- <div class="flex items-center justify-between">
      <div class="h-[80px] w-[80px] bg-cover bg-center"
        :style="{ backgroundImage: 'url(' + '/src/assets/images/' + item.image + ')' }"></div>
      <div class="w-3/4">{{ item.name }}</div>
      <div>
        <div>{{ item.selectedSize }}</div>
        <div>{{ item.selectedPrice }}đ</div>
        <div>x {{ item.quantity }} </div>
        <div>
          <button class="btn btn-sm btn-success" @click="deleteCart(item.idDetail)">
            <i class="fas fa-plus" /> Xoa
          </button>
        </div>
      </div>
    </div> -->
    <a-row type="flex" class="mt-5" >
      <a-col :span="4" >
        <p >
        <div class="h-[70px] w-[70px] bg-cover bg-center"
          :style="{ backgroundImage: 'url(' + '/src/assets/images/' + item.image + ')' }">
        </div>
        </p>
      </a-col>
      <a-col :span="16">
        <p>
        <div>{{ item.name }}</div>
        <div>{{ item.selectedSize }}</div>
        <DeleteTwoTone @click="deleteCart(item.idDetail)" :style="{fontSize: '25px', color: '#08c'}"/>
        </p>
      </a-col>
      <a-col :span="4">
        <p>
        <div style="text-align: right">{{ item.selectedPrice }}đ</div>
        <!-- <div>{{ item.quantity }} </div> -->
        <div>
          <a-form-item name="quantity">
            <a-input-number style="width: 65%; margin-left: 35%;" v-model:value="item.quantity" :min="1" :max="10" />
          </a-form-item>
          <!-- <button class="btn btn-sm btn-success" @click="deleteCart(item.idDetail)">
            <i class="fas fa-plus" /> Delete
          </button> -->
          
        </div>
        </p>
      </a-col>
    </a-row>
  </div>
</template>

<style>
.box {
  @apply h-8 p-2 flex items-center cursor-pointer;
}

/* 
.buttons_added {
  opacity: 1;
  display: inline-block;
  display: -ms-inline-flexbox;
  display: inline-flex;
  white-space: nowrap;
  vertical-align: top;

}

.is-form {
  overflow: hidden;
  position: relative;
  background-color: #f9f9f9;
  height: 1.5rem;
  width: 1.5rem;
  padding: 0;
  text-shadow: 1px 1px 1px #fff;
  border: 1px solid #ddd;
  margin: 1px;
}

.is-form:focus,
.input-text:focus {
  outline: none;
}

.is-form.minus {
  border-radius: 4px;
}

.is-form.plus {
  border-radius: 4px;
}

.input-qty {
  background-color: #fff;
  height: 1.5rem;
  text-align: center;
  font-size: 1rem;
  display: inline-block;
  vertical-align: top;
  margin: 1px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  border-right: 0;
  padding: 0;
  width: 1.5rem;
  border-radius: 5px;
}

.input-qty::-webkit-outer-spin-button,
.input-qty::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
} */
</style>
