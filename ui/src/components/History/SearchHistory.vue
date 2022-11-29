<script >
import person from "@/assets/icons/person.svg";
import cart from "@/assets/icons/cart.svg";
import search from "@/assets/icons/search.svg";
import menuOpen from "@/assets/icons/menu_open.svg";
import MenuSlider from "../MenuSlider/MenuSlider.vue";
// import { mapGetters, mapState } from "vuex";
import axios from 'axios';
import { router } from "../Routes";
import NavBarMenu from "../NavBarMenu/NavBarMenu.vue";

import { useCartStore } from "@/store/modules/cart";
import { defineComponent, reactive, toRaw, computed } from 'vue';
import { MobileTwoTone } from '@ant-design/icons-vue';


export default {
    data: function () {
        return {
            listOders: {},
        }
    },
    components: {
        NavBarMenu,
        MobileTwoTone,
    },
    async created() {
        await axios.get('http://localhost:8080/bill/getBillByPhone', { params: { phone: this.$route.path.split('/history/').slice(1) } })
            .then(response => {
                this.listOders = response.data;
                console.log(this.listOders.listOder.length);
            })
            .catch(e => {
                console.log(e);
            })
    },
};
</script>
<template>
    <NavBarMenu hasDisabledSlider />
    <div class="mt-24 w-full">
        <div class="text-center font-bold text-xl">Order list</div>
    </div>
    <div class="mt-5 bg-store-ghosh-white w-[40%] mx-auto rounded-lg">

        <div v-if="listOders.listOder.length !== 0" class="mx-auto p-3">
            <div class="text-center font-bold text-xl ">
                <div>{{ listOders.phone }}</div>
                <div>{{ listOders.nameCus }}</div>
            </div>
            <div v-for="(item) in listOders.listOder">
                <a-row type="flex" class="mt-5">
                    <a-col :span="4">
                        <p>
                        <div class="h-[70px] w-[70px] bg-cover bg-center"
                            :style="{ backgroundImage: 'url(' + '/src/assets/images/' + item.image + ')' }">
                        </div>
                        </p>
                    </a-col>
                    <a-col :span="16">
                        <p>
                        <div>{{ item.name }}</div>
                        <div>{{ item.size }}</div>
                        <div>{{ item.date }}</div>
                        </p>
                    </a-col>
                    <a-col :span="4">
                        <p>
                        <div>{{ item.price }} eth</div>
                        <div>x{{ item.quantity }}</div>
                        </p>
                    </a-col>

                </a-row>
            </div>
        </div>
        <div v-if="listOders.listOder.length === 0" class="p-3 mt-5 bg-store-ghosh-white w-[40%] mx-auto rounded-lg">
            <div >You don't have any orders yet!</div>
        </div>
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
