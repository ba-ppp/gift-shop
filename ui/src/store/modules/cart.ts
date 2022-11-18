import axios from 'axios';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state() {
    return {
      cart: [],
      bill: {
        listProduct: [],
        name : '',
        phone : '',
        totalPrice : 0,
        typeShip : '',
      },
    };
  },
  actions: {
    async addBill() {
      const response = await axios.post('http://localhost:8080/bill/addBill', this.bill);
      
    },
  },
  getters: {
    cartTotal: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.selectedPrice * item.quantity;
      });
      return total;
    },
    cartQuantity: (state) => {
      let quantity = 0;
      state.cart.forEach((item) => {
        quantity += item.quantity;
      });
      return quantity;
    },
    
    
  },
});
