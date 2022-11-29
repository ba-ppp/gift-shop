<script >
import person from "@/assets/icons/person.svg";
import cart from "@/assets/icons/cart.svg";
import search from "@/assets/icons/search.svg";
import menuOpen from "@/assets/icons/menu_open.svg";
import MenuSlider from "../MenuSlider/MenuSlider.vue";
// import { mapGetters, mapState } from "vuex";
import { router } from "../Routes";
import NavBarMenu from "../NavBarMenu/NavBarMenu.vue";

import { mapState, mapActions, mapWritableState } from 'pinia';
import { useCartStore } from "@/store/modules/cart";
import { defineComponent, reactive, toRaw, computed } from 'vue';
import { storeToRefs } from "pinia";
import { MobileTwoTone } from '@ant-design/icons-vue';
import { useToggleStore } from '@/store/modules/toggle';

export default {
  // props: {
  //   phone: 
  // },
  data: function () {
    return {
      person,
      search,
      menuOpen,
    }
  },
  components: {
    NavBarMenu,
    MobileTwoTone,
  },


  methods: {
    ...mapActions(useToggleStore, ['toggleMenuSlider']),
    handleClickMenuIcon() {
      this.toggleMenuSlider();
    },
    handleClickHistory() {
      router.push("/history");
    },
    searchHistory: function (phone) {
      router.push("/history/" + phone);
    },
    
  },
  setup() {
    const formState = reactive({
      phone: '',
    });
    const onFinish = values => {
      console.log(formState);
    };
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    const disabled = computed(() => {
      return !(formState.phone);
    });
    return {
      formState,
      onFinish,
      onFinishFailed,
      disabled,
    };
  },

};
</script>
<template>
  <NavBarMenu hasDisabledSlider />
  <div class="mt-24 w-full">
    <div class="text-center font-bold text-xl">Look up purchase information</div>
  </div>
  <div class="mt-5 bg-store-ghosh-white w-[40%] mx-auto rounded-lg">

    <div class="flex mx-auto ">
      <img src="src/assets/images/search-background.svg" class="w-1/2 mx-auto justify-content-center mb-10 mt-10" />

    </div>
    <a-form :model="formState" name="basic" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">

      <a-form-item :wrapper-col="{ offset: 4, span: 16 }" name="phone"
        :rules="[{ required: true, message: 'Please input your phone!' }]">
        <a-input v-model:value="formState.phone" style="width: 100%">
          <template #addonBefore>
            <MobileTwoTone />
          </template>
        </a-input>
      </a-form-item>


      <a-form-item :wrapper-col="{ offset: 6, span: 12 }">
        <a-button class="mb-10" :disabled="disabled" @click="searchHistory(formState.phone)" type="primary" block shape="round" size="large"
          html-type="submit">Search</a-button>
      </a-form-item>
    </a-form>

  </div>
</template>

<style>
.box {
  @apply h-8 p-2 flex items-center cursor-pointer;
}

/* body {
  @apply bg-store-ghosh-white;
} */
</style>
