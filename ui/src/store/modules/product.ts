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
      this.product = response.data.splice(0, 8);
      this.allProduct = response.data;
      this.totalPage = Math.ceil(this.product.length / 8);
    },
    async changePage(page: number) {
      this.currentPage = page;
      this.product = this.allProduct.splice((page - 1) * 8 - 1, page * 8);
    }
    
  },
  
});

