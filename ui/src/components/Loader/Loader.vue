<script>
import Loader from "@/assets/images/loader.gif";

export default {
  data: function () {
    return {
      Loader,
      Doll
    };
  },
};
</script>
<template>
  <div
    class="fixed w-screen h-screen flex items-center justify-center bg-[#262626] opacity-80 z-30"
  >
    <div>
      <img :src="Loader" height="256" />
    </div>
  </div>
</template>
