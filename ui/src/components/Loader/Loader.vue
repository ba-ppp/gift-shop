<script lang="ts">
import Loader from "@/assets/images/loader.gif";

export default {
  data: function () {
    return {
      Loader,
    };
  },
};
</script>
<template>
  <div
    class="h-screen fixed w-screen flex items-center justify-center bg-[#262626] opacity-80 z-30 overflow-hidden top-0"
  >
    <div>
      <img :src="Loader" height="256" />
    </div>
  </div>
</template>
