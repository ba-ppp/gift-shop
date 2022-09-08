// initial state

import { TOGGLE_MENU_SLIDER } from "@/types";

// shape: [{ id, quantity }]
export interface toggleState {
  isShowMenuSlider: boolean;
}
const state = (): toggleState => ({
  isShowMenuSlider: false,
});

// getters
const getters = {
  // toggleMenuSlider: (state, getters) => {
  // }
  //   cartTotalPrice: (state, getters) => {
  //     return getters.cartProducts.reduce((total, product) => {
  //       return total + product.price * product.quantity
  //     }, 0)
  //   }
};

// actions
const actions = {
  toggleMenuSlider({ commit }: any) {
    commit("toggleMenuSliderState");
  },
  //   async checkout ({ commit, state }, products) {
  //     const savedCartItems = [...state.items]
  //     commit('setCheckoutStatus', null)
  //     // empty cart
  //     commit('setCartItems', { items: [] })
  //     try {
  //       await shop.buyProducts(products)
  //       commit('setCheckoutStatus', 'successful')
  //     } catch (e) {
  //       console.error(e)
  //       commit('setCheckoutStatus', 'failed')
  //       // rollback to the cart saved before sending the request
  //       commit('setCartItems', { items: savedCartItems })
  //     }
  //   },
};

// mutations
const mutations = {
  toggleMenuSlider(state: toggleState) {
    state.isShowMenuSlider = !state.isShowMenuSlider;
  },
};
//   pushProductToCart (state, { id }) {
//     state.items.push({
//       id,
//       quantity: 1
//     })
//   },

//   incrementItemQuantity (state, { id }) {
//     const cartItem = state.items.find(item => item.id === id)
//     cartItem.quantity++
//   },

//   setCartItems (state, { items }) {
//     state.items = items
//   },

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
