import { createRouter, createWebHistory } from "vue-router";
import ChildComp from '../views/ChildComp.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/lol",
      name: "home",
      component: ChildComp,
    },
    {
      path: "/lol",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ChildComp.vue"),
    },
  ],
});

export default router;
