import { createRouter, createWebHistory } from "vue-router";
import UserSelection from "../views/UserSelection.vue";
import ChatApp from "../views/ChatApp.vue";

const routes = [
  {
    path: "/",
    name: "UserSelection",
    component: UserSelection,
  },
  {
    path: "/chat",
    name: "ChatApp",
    component: ChatApp,
    beforeEnter: (to, from, next) => {
      const selectedUser = sessionStorage.getItem("selectedUser");
      if (selectedUser) {
        next();
      } else {
        next("/");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
