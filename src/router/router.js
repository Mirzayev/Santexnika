import { createRouter, createWebHistory } from "vue-router";
import MenuPage from "@/Pages/MenuPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "menu",
      component: import(""),
    },
  ],
});
