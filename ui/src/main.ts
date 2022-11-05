import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { store } from "./store";
import { router } from "./components/Routes";
import { createPinia } from 'pinia';

createApp(App)
    .use(router)
    .use(store)
    .use(createPinia())
    .mount("#app");
