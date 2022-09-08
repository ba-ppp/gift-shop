// vite.config.ts
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
var vite_config_default = defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve("/Users/bap/Documents/gift-store/ui", "./src")
    }
  }
});
export {
  vite_config_default as default
};
