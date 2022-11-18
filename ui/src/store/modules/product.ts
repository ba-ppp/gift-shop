import axios from 'axios';
import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  
  state() {
    return {
      product: [],
      category: 'pokemon',
    };
  },

  actions: {
    async getProductStore() {
      const response = await axios.get('http://localhost:8080/product/getProductByCat', { params: { cat: this.category } }); // via proxy -> http://localhost:3000/products
      this.product = response.data;
    },
    // changeCat(cat: any){
    //   this.category = cat;
    // }
  },
  
});

