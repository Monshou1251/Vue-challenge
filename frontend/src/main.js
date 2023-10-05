import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

const storedUsername = localStorage.getItem("username");
if (storedUsername) {
  store.dispatch("registerUser", storedUsername);
}

createApp(App).use(router).use(store).mount("#app");
