<template>
  <q-page>
    <div class="q-mt-none q-mb-none">
      <div class="text-h4">Current Work</div>
      <q-separator />
      <div class="q-gutter-y-lg">
        <WorkItem
          v-for="item in workItems"
          :key="item"
          :title="item.title"
          :period="item.period"
          :points="item.points"
        />
      </div>
      <div class="text-h4">Personal Projects</div>
      <q-separator />
      <br />
      <div class="q-gutter-y-lg">
        <PortfolioItem
          v-for="item in portfolioItems"
          :key="item"
          :title="item.title"
          :subtitle="item.subtitle"
          :description="item.description"
          :slides="item.slides"
          :tags="item.tags"
          :actions="item.actions"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import PortfolioItem from "../components/PortfolioItem.vue";
import WorkItem from "../components/WorkItem.vue";

export default defineComponent({
  name: "PortfolioPage",
  components: {
    PortfolioItem,
    WorkItem,
  },
  data() {
    return {
      portfolioItems: [
        {
          title: "Physarum WebGL Simulation",
          subtitle:
            "A small implementation of Physarum Polycephalum movement in WebGL",
          description: `
          Physarum Polycephalum is a single-celled organism which, within large networks, can together exhibit many complex and intelligent locomotive behaviours.
          The project involved creating webGL shaders to simulate 100,000s of 'agents', each with a set of simple navigational rules, on the GPU to create complex collective behaviour.
          `,
          slides: [
            {
              type: "video",
              res: "portfolio/slime_vid_0.mp4",
              caption: "",
            },
            {
              type: "img",
              res: "portfolio/slime_img_0.webp",
              caption: "",
            },
            {
              type: "img",
              res: "portfolio/slime_img_1.webp",
              caption: "",
            },
          ],
          tags: ["JS", "WebGL"],
          actions: [
            {
              title: "Details",
              click: () => {
                this.$router.push("/physarum");
              },
            },
            {
              title: "View source on Github",
              click: () => {
                window.open(
                  "https://github.com/FelixBenter/felixbenter.github.io/tree/main/src/components/slime_sim",
                  "_blank"
                );
              },
            },
          ],
          slide: 0,
        },
        {
          title: "Blender DCX Importer",
          subtitle: "A Blender plugin for importing Fromsoft DCX files",
          description: `
          An add-on for the 3D modelling program Blender to import proprietary model and texture files from FromSoftware video games.
          The tool unpacks the input files and loads mesh data, armature data and finds the appropriate texture data for that model.
          It then loads these items into Blender and applies the armature and texture data into a rigged and textured blender model.
          `,
          slides: [
            {
              type: "img",
              res: "portfolio/dcximporter_img_0.webp",
              caption: "",
            },
          ],
          tags: ["Python"],
          actions: [
            {
              title: "Details",
              click: () => {
                this.$router.push("/dcximporter");
              },
            },
            {
              title: "View source on Github",
              click: () => {
                window.open(
                  "https://github.com/FelixBenter/FromSoftware-Blender-Importer",
                  "_blank"
                );
              },
            },
          ],
          slide: 0,
        },
      ],
      workItems: [
        {
          title: "Software Developer at Pairtree Intelligence",
          period: "Feb 2021 - present",
          points: [
            "Developed and maintained data feed pipelines and backend structure using C# and PostgreSQL.",
            "Led the development and transition to a new customer facing UI project involving Vue3 (Quasar) & Axios.",
            "Developed and maintained internal & external APIs in a controller-service-repository pattern using .NET.",
            "Built advanced geospatial analysis and visualisation features using postGIS, GDAL and Leaflet.",
            "Created and configured build pipelines using Jenkins.",
            "Collaborated with team members and worked closely with clients to refine solutions based on evolving requirements. Lead the development of multiple large projects with clients and developed large sections of e2e solutions, involve the Department of Primary Industries and Syngenta Australia.",
          ],
        },
      ],
    };
  },
});
</script>
