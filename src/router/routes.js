const routes = [
  {
    path: "/",
    component: () => import("pages/HomePage.vue"),
    children: [
      {
        name: "Portfolio",
        path: "/",
        component: () => import("pages/PortfolioPage.vue"),
      },
      {
        name: "Physarum",
        path: "/physarum",
        component: () => import("pages/PhysarumPage.vue"),
      },
      {
        name: "Blender DCX Importer",
        path: "/dcximporter",
        component: () => import("pages/DCXImporterPage.vue"),
      },
    ],
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
