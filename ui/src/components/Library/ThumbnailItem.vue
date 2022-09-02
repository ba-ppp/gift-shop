<script setup lang="ts">
import { ref } from "vue";
import rabbit from "@/assets/images/tho-tim-long-2.png";
import addToCart from "@/assets/icons/add_to_cart.svg";
import Box from "./Box.vue";

// defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<template>
  <div class="border border-solid bg-white border-white w-64 h-92 rounded-2xl">
    <div
      class="w-full h-64 bg-cover bg-center rounded-2xl"
      :style="{ backgroundImage: 'url(' + rabbit + ')' }"
    ></div>
    <div class="flex items-center justify-between mb-6">
      <div>
        <div class="text-store-purple-light capitalize">
          Thỏ lông tím lông xù
        </div>
        <div class="text-store-pink mt-2">320.000đ</div>
      </div>
      <div class="hover:opacity-75 cursor-pointer">
        <img :src="addToCart" height="24" />
      </div>
    </div>
    <div class="flex justify-between">

        <Box />
        <Box />
        <Box />
        <Box />
    </div>
  </div>
</template>

<style scoped></style>
