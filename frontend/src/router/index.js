import { createRouter, createWebHashHistory } from "vue-router";
import LoginPage from "@/views/LoginPage";
import MainPage from "@/views/MainPage";
// import AccountPage from "@/views/AccountPage.vue";
import AccessDeniedPage from "@/views/AccessDeniedPage.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/mainpage",
    name: "MainPage",
    component: MainPage,
    beforeEnter: (to, from, next) => {
      const username = store.getters.getUsername;

      if (username) {
        next();
      } else {
        next({ name: "AccessDeniedPage" });
      }
    },
  },
  {
    path: "/accessdenied",
    name: "AccessDeniedPage",
    component: AccessDeniedPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
