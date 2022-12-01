import axios from 'axios';
import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  
  state() {
    return {
      product: [],
      allProduct: [],
      category: 'pokemon',
      totalPage: 1,
      currentPage: 1,
    };
  },

  actions: {
    async getProductStore() {
      const response = await axios.get('http://localhost:8080/product/getProductByCat', { params: { cat: this.category } }); // via proxy -> http://localhost:3000/products
      this.allProduct = response.data;
      // this.totalPage = Math.ceil(response.data.length / 8);
      this.product = response.data.slice(0, 8);
      console.log(response.data);
    },
    async changePage(page: number) {
      this.currentPage = page;
      this.product = this.allProduct.slice((page - 1) * 8 - 0, page * 8);
    }
    
  },
  
});

