import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router/index.js";
import VeeValidatePlugin from "./includes/validation.js";
import axios from "axios";
//axios.defaults.baseURL = 'https://card-server.kokosan96.repl.co';
axios.defaults.baseURL = 'https://f0b1dfd9-c6cb-4f63-baf3-97f87039cd72-00-25be2tdrt7077.riker.replit.dev/'
const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
import { useContactStore } from './stores/contact.js';

const app = createApp(App);
const pinia = createPinia()
app.use(pinia);
import { useUserStore } from './stores/user.js';
const userStore = useUserStore()
const contactStore = useContactStore()

app.use(router);
app.use(VeeValidatePlugin);

await userStore.updateUser()
//await contactStore.getContact()
app.mount("#app");
