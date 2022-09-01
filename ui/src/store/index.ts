import { InjectionKey } from "vue";
import { createStore, Store , useStore as baseUseStore} from "vuex";
import cart from "@/store/modules/cart";

export interface State {
    count: number
  }

// Create a new store instance.
export const store = createStore({
  modules: {
    cart,
    // b: moduleB
  },
});

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore () {
    return baseUseStore(key)
  }
