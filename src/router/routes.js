const routes = [
  {
    path: "/",
    component: () => import("pages/HomePage.vue"),
    children: [],
  },
  {
    path: "/demos",
    component: () => import("components/slime_sim/SlimeSim.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
