<script >
import { ref } from "vue";
import rabbit from "@/assets/images/tho-tim-long-2.png";
import addToCart from "@/assets/icons/add_to_cart.svg";
import Box from "./Box.vue";

// defineProps<{ msg: string }>()
import axios from 'axios';
export default{

  data: function () {
    return {
      product: []
    }
  },
  async created() {
    await axios.get('http://localhost:8080/product/getProduct')
    .then((response) => {
      
      this.product = response.data;
      console.log(this.product.items)
    })
  }
}
// const count = ref(0)

</script>

<template>
  <div v-for="(pro) in product">
    <div class="border border-solid bg-white border-white w-64 h-92 rounded-2xl" v-for="(item) in pro.items">
      <div
        class="w-full h-64 bg-cover bg-center rounded-2xl"
        :style="{ backgroundImage: 'url(' + '/src/assets/images/'+ item.image + ')' }"
      ></div>
      <div class="flex items-center justify-between mb-6">
        <div>
          <div class="text-store-purple-light capitalize">
            {{item.name}}
          </div>
          <div class="text-store-pink mt-2" v-for="(price) in item.price">{{price}}đ</div>
        </div>
        <div class="hover:opacity-75 cursor-pointer">
          <img :src="addToCart" height="24" />
        </div>
      </div>
      <div class="flex justify-between" >

        <div
      class="flex items-center justify-center rounded-md p-2 w-9 h-4 border border-solid text-store-purple-light border-store-purple-light"
      v-for="(size) in item.size">
      {{size}}
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
