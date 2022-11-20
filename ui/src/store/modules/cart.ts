import axios from 'axios';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state() {
    return {
      cart: [] as any,
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
      try {
        await axios.post('http://localhost:8080/bill/addBill', this.bill);
      } catch (error) {
        console.log(error);
      }
      
    },
  },
  getters: {
    cartTotal: (state) => {
      let total = 0;
      state.cart.forEach((item: any) => {
        total += item.selectedPrice * item.quantity;
      });
      return total;
    },
    cartQuantity: (state) => {
      let quantity = 0;
      state.cart.forEach((item: any) => {
        quantity += item.quantity;
      });
      return quantity;
    },
    
    
  },
});
