import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/buttons",
    name: "buttons",
    component: () => import("../views/ButtonsView.vue")
  },
  {
    path: "/empty",
    name: "empty",
    component: () => import("../views/EmptyView.vue")
  },
  {
    path: "/cards",
    name: "cards",
    component: () => import("../views/CardsView.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
