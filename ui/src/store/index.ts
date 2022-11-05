import { createStore } from "vuex";
import toggle, { toggleState } from "@/store/modules/toggle";


export interface State {
  toggle: toggleState,
}
// Create a new store instance.
export const store = createStore<State>({
  modules: {
    toggle,
    // b: moduleB
  },
});

