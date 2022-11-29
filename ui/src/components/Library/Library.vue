<script>
import ThumbnailItem from "./ThumbnailItem.vue";
import NavBarMenu from "../NavBarMenu/NavBarMenu.vue";
import Loader from "@/components/Loader/Loader.vue";
import { useToggleStore } from "@/store/modules/toggle";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(useToggleStore, ["isLoading"]),
  },
};
</script>

<template>
  <Loader v-if="isLoading" />
  <NavBarMenu />
  <div class="ml-64 mt-24 place-items-center w-[80%] grid grid-cols-4 gap-y-4">
    <ThumbnailItem />
  </div>
  <div class="mt-20 ml-64 w-[80%] flex justify-center">
    <a-pagination :total="50" show-less-items />
  </div>
</template>

<style scoped></style>
