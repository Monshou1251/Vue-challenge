import { createRouter, createWebHashHistory } from "vue-router";
import mainPage from "@/views/mainPage";
import AccountPage from "@/views/AccountPage.vue";
import AdminPage from "@/views/AdminPage.vue";
import AccessDeniedPage from "@/views/AccessDeniedPage.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: mainPage,
  },
  {
    path: "/account/:username",
    name: "Account",
    component: AccountPage,
  },
  {
    path: "/account/admin",
    name: "AdminPage",
    component: AdminPage,
    beforeEnter: (to, from, next) => {
      const isAdmin = store.state.user.username === "admin";
      if (isAdmin) {
        next();
      } else {
        next({ name: "AccessDeniedPage" }); // Redirect to the "NotAllowed" route
      }
    },
  },
  {
    path: "/accessdenied", // Define the "Not Allowed" route
    name: "AccessDeniedPage",
    component: AccessDeniedPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
