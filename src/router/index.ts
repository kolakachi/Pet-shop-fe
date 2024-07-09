import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPage from "../views/MainPage.vue";
import UserLayout from "../layouts/UserLayout.vue";
import CategorySubPage from "../views/CategorySubPage.vue";

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
      {
        path: "/category/:slug",
        name: "category",
        component: CategorySubPage,
        props: (route) => ({
          uuid: route.query.uuid,
          slug: route.params.slug,
        }),
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
