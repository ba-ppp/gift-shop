<script setup lang="ts">
import bunny from "@/assets/images/bunny.png";
import { router } from "../Routes";
import { storeToRefs } from "pinia";
import { useTransaction } from "@/store/transaction";
import { useToggleStore } from '@/store/modules/toggle';
import Loader from '@/components/Loader/Loader.vue';

const transaction = useTransaction();
const toggle = useToggleStore()

const { checkConnected } = useTransaction();
const { account, isLoadingTransaction } = storeToRefs(transaction);
const { isLoading } = storeToRefs(toggle);

// defineProps<{ msg: string }>()
const handleClick = () => {
  toggle.toggleLoading(true);
  // router.push("/library");
};


</script>

<template>
  <Loader v-if="isLoading" />
  <div class="background h-screen w-screen" style="font-family: Kanit">
    <div class="flex w-[80%] m-auto pt-20 justify-around">
      <div class="mt-36">
        <div
          class="mb-6 text-store-purple-light text-[4rem] leading-[4.5rem] font-semibold"
        >
          Sweet as sugar, <br />
          cute as a teddy bear
        </div>
        <div class="text-[1.5rem] text-white leading-8">
          Gift a teddy, grab the heart. <br />
          All you need is a nap under the shady tree
        </div>
        <div class="flex space-x-3 mt-10">
          <a-button
            v-on:click="handleClick()"
            type="primary"
            class="text-lg rounded-lg w-fit h-[3.5rem] border-2 bg-transparent text-store-blue border-solid border-store-blue"
          >
            Shop now
          </a-button>
          <a-button
            v-if="!account"
            v-on:click="checkConnected()"
            type="primary"
            class="text-lg rounded-lg w-fit h-[3.5rem] text-white border-2 bg-store-blue border-solid border-store-blue"
          >
            Connect wallet
          </a-button>
        </div>
      </div>
      <img width="512" height="512" :src="bunny" />
    </div>
  </div>
</template>

<style scoped>
.background {
  /* background-color: hsla(240, 31%, 7%, 1);
  background-image: radial-gradient(
      at 99% 98%,
      hsla(264, 87%, 20%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 32% 99%, hsla(264, 87%, 20%, 1) 0px, transparent 50%); */
  background-color: hsla(259, 75%, 21%, 1);
  background-image: radial-gradient(
      at 47% 41%,
      hsla(259, 75%, 21%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 47% 41%, hsla(259, 75%, 21%, 1) 0px, transparent 50%),
    radial-gradient(at 99% 39%, hsla(75, 0%, 100%, 1) 0px, transparent 50%);
}
</style>
