import axios from 'axios';
import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  
  state() {
    return {
      product: [],
    };
  },

  actions: {
    async getProductStore() {
      const response = await axios.get('http://localhost:8080/product/getProductByCat', { params: { cat: 'pokemon' } }); // via proxy -> http://localhost:3000/products
      this.product = response.data;
    },
  },
});

