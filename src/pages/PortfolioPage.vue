<template>
  <q-page>
    <div class="q-mt-none q-mb-lg">
      <div class="text-h4">Current Work</div>
      <q-separator />
      <div class="q-gutter-y-lg">
        <WorkItem />
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
          Physarum Polycephalum is a single-cell organism which, within large networks, can together exhibit many complex and intelligent locomotive behaviours.
          The project involved creating webGL shaders to simulate 100,000s of 'agents', each with a set of simple navigational rules, on the GPU to create complex collective behaviour.
          `,
          slides: [
            {
              type: "img",
              res: "portfolio/slime_img_0.png",
              caption: "",
            },
            {
              type: "img",
              res: "portfolio/slime_img_1.png",
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
              res: "portfolio/dcximporter_img_0.png",
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
    };
  },
});
</script>
