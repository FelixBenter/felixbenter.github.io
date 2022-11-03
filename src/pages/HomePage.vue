<template>
  <q-layout view="hHh lpr lfr">
    <q-header
      bordered
      class="bg-white text-primary"
      style="
        max-width: 1000px;
        margin-left: auto;
        left: 24px;
        margin-right: auto;
        right: 24px;
      "
    >
      <q-toolbar class="q-pa-none">
        <q-toolbar-title class="text-weight-medium">
          Felix Benter
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page
        class="row no-wrap q-mx-lg text-primary text-body1 text-weight-light"
        style="
          position: absolute;
          max-width: 1000px;
          margin-left: auto;
          left: 24px;
          margin-right: auto;
          right: 24px;
        "
      >
        <div class="col q-mt-none q-mb-lg">
          <div class="column">
            SOME STUFF
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
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import PortfolioItem from "./PortfolioItem.vue";
export default defineComponent({
  name: "ResumePage",
  components: {
    PortfolioItem,
  },
  data() {
    return {
      portfolioItems: [
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
              res: "portfolio/blender_dcx_img.png",
              caption: "",
            },
          ],
          tags: ["Python"],
          actions: [
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
              title: "View demo",
              click: () => {
                this.routeComponent = shallowRef(
                  defineAsyncComponent(() =>
                    import(`../components/slime_sim/SlimeSim.vue`)
                  )
                );
                this.showModal = true;
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
