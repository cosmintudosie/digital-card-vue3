import { createRouter, createWebHistory } from "vue-router";
import MainApp from "../components/MainApp.vue";
import ContactList from "../components/contacts/ContactList.vue"
import SettingsPage from "../components/Menu/SettingsPage.vue"
import EditProfile from "../components/Menu/EditProfile.vue"
import SitePicker from "../components/Sites/SitePicker.vue"
import RegisterForm from "../views/Authentication/RegisterForm.vue";
import LoginForm from "../views/Authentication/LoginForm.vue";
import Auth from "../components/Authentication/Auth.vue"
const routes = [
  
  {
    path: "/",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/:id",
    name: "Id",
    component: MainApp,
  },
  {
    path: "/pick",
    name: "SitePicker",
    component: SitePicker,
  },
  {
    path: "/contacts",
    name: "ContactList",
    component: ContactList,
  },
  {
    path: "/settings",
    name: "Settings",
    component: SettingsPage,
  },
  {
    path: "/edit-profile",
    name: "EditProfile",
    component: EditProfile,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterForm,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginForm,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;

