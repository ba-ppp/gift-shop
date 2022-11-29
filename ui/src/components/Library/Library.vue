<script>
import ThumbnailItem from "./ThumbnailItem.vue";
import NavBarMenu from "../NavBarMenu/NavBarMenu.vue";
import Loader from "@/components/Loader/Loader.vue";
import { useToggleStore } from "@/store/modules/toggle";
import { useProductsStore } from '@/store/modules/product';
import { mapState, mapActions } from "pinia";
import { ref } from "vue";
import { sleep } from '@/utils/utils';

export default {
  data: function() {
    return {
      currentPage: ref(1),
    };
  },
  computed: {
    ...mapState(useToggleStore, ["isLoading"]),
    ...mapState(useProductsStore, ["totalPage"]),
  },
  methods: {
    ...mapActions(useProductsStore, ["changePage"]),
    ...mapActions(useToggleStore, ["toggleLoading"]),

    onShowSizeChange: async function(current) {
      this.toggleLoading(true);
      // fake sleep
      await sleep(1500);

      this.changePage(current);

      this.toggleLoading(false);
    }
  }
};
</script>

<template>
  <Loader v-if="isLoading" />
  <NavBarMenu />
  <div class="ml-64 mt-24 place-items-center w-[80%] grid grid-cols-4 gap-y-4">
    <ThumbnailItem />
  </div>
  <div class="py-12 ml-64 w-[80%] flex justify-center">
    <a-pagination @change="onShowSizeChange" v-model:current="this.currentPage" :total="this.totalPage" show-less-items />
  </div>
</template>


