import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPage from "../views/MainPage.vue";
import UserLayout from "../layouts/UserLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: UserLayout,
    children: [
      {
        path: "",
        name: "main",
        component: MainPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
