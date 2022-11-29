import { defineStore } from "pinia";

export const useToggleStore = defineStore("toggle", {
  state() {
    return {  
      isLoading: false,
    };
  },

  actions: {
    toggleLoading(payload: boolean) {
      this.isLoading = payload;
    },
  },
});
