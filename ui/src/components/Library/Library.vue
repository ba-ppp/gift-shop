<script setup lang="ts">
import ThumbnailItem from "./ThumbnailItem.vue";
import NavBarMenu from "../NavBarMenu/NavBarMenu.vue";

// defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<template>
  <NavBarMenu />
  <div class="mt-24 place-items-center w-[80%] m-auto grid grid-cols-4 gap-y-4">
    <ThumbnailItem />
    <ThumbnailItem />
    <ThumbnailItem />
    <ThumbnailItem />
    <ThumbnailItem />
  </div>
</template>

<style scoped></style>
