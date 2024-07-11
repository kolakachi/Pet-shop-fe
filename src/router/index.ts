import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPage from "../views/MainPage.vue";
import UserLayout from "../layouts/UserLayout.vue";
import CategorySubPage from "../views/CategorySubPage.vue";
import ProductPage from "../views/ProductPage.vue";
import CartPage from "../views/CartPage.vue";
import RecoverPasswordPage from "../views/RecoverPasswordPage.vue";
import ChangePasswordPage from "../views/ChangePasswordPage.vue";
import CheckoutPage from "../views/CheckoutPage.vue";

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
      },
      {
        path: "/product/:uuid",
        name: "product",
        component: ProductPage,
        props: (route) => ({
          uuid: route.params.uuid,
        }),
      },
      {
        path: "/cart",
        name: "cart",
        component: CartPage,
      },
      {
        path: "/recover-password",
        name: "recoverPassword",
        component: RecoverPasswordPage,
      },
      {
        path: "/change-password",
        name: "changePassword",
        component: ChangePasswordPage,
        props: (route) => ({
          token: route.query.token,
          email: route.query.email,
        }),
      },
      {
        path: "/checkout",
        name: "checkoutPage",
        component: CheckoutPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
