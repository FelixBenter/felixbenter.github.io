<template>
  <q-page>
    <div class="q-mt-none q-mb-lg">
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
        <div
          class="bg-white text-primary q-pa-lg row justify-center q-gutter-sm"
          style="
            position: absolute;
            width: 100%;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            border: 1px solid rgba(0, 0, 0, 0.12);
            margin-top: 50px;
          "
        >
          <q-btn
            v-for="link in links"
            :key="link"
            class="row"
            :class="$q.platform.is.mobile ? 'full-width' : ''"
            square
            outline
            color="primary"
            :label="link.title"
            :href="link.href"
          />
        </div>
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
      workItems: [
        {
          title: "Junior Software Developer at Pairtree Intelligence",
          period: "Feb 2020 - present",
          points: [
            "Developed and maintained data feed pipelines and backend structure using C# and PostgreSQL.",
            "Led the development of customer facing UI components involving Vue (Quasar), Leaflet, Axios and Git.",
            "Built advanced geospatial analysis and visualisation features using postGIS, GDAL and Leaflet.",
            "Created and configured build pipelines using Jenkins.",
            "Collaborated with team members and worked closely with clients to refine solutions based on evolving requirements.",
          ],
        },
      ],
      links: [
        {
          title: "Email",
          href: "mailto:felixbenter1@gmail.com",
        },
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/in/felix-benter-8a7157191/",
        },
        {
          title: "Github",
          href: "https://github.com/FelixBenter",
        },
        {
          title: "resume",
          href: "Resume_2020.pdf",
        },
      ],
    };
  },
});
</script>
