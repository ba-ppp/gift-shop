

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  items: [],
  checkoutStatus: null
})

// getters
const getters = {
//   cartTotalPrice: (state, getters) => {
//     return getters.cartProducts.reduce((total, product) => {
//       return total + product.price * product.quantity
//     }, 0)
//   }
}

// actions
const actions = {
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

  
}

// mutations
const mutations = {
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
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }