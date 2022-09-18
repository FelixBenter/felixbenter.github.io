<template>
  <q-page class="row">
    <div class="q-gutter-y-lg">
      <div v-for="portfolioItem in portfolioItems" :key="portfolioItem.title">
        <q-card
          class="bg-primary"
          style="height: 400px"
          :id="portfolioItem.title"
        >
          <q-card-section horizontal class="full-height">
            <q-carousel
              v-model="portfolioItem.slide"
              arrows
              class="col-6"
              animated
            >
              <q-carousel-slide
                v-for="(img, i) in portfolioItem.imgs"
                :key="i"
                :name="i"
                :img-src="img.res"
              />
            </q-carousel>

            <q-card-section>
              <div class="no-wrap items-center">
                <div class="text-h4">{{ portfolioItem.title }}</div>
              </div>
              <div class="text-subtitle1 text-grey">
                {{ portfolioItem.subtitle }}
              </div>
              <div class="text-body1">
                {{ portfolioItem.description }}
              </div>

              <q-card-actions style="position: absolute; bottom: 0">
                <q-btn
                  color="secondary"
                  v-for="action in portfolioItem.actions"
                  :key="action.url"
                  :label="action.title"
                  :href="action.url"
                  target="_blank"
                ></q-btn>
              </q-card-actions>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { scroll } from "quasar";
const { getScrollTarget, setVerticalScrollPosition } = scroll;
export default defineComponent({
  name: "PortfolioPage",

  components: {},
  methods: {
    scrollToElement(elemRef) {
      const elem = document.getElementById(elemRef);
      const target = getScrollTarget(elem);
      const offset = elem.offsetTop;
      const duration = 1000;
      setVerticalScrollPosition(target, offset, duration);
    },
  },

  data() {
    return {
      portfolioItems: [
        {
          title: "Blender DCX Importer",
          subtitle: "A Blender plugin for importing Fromsoft DCX files",
          description: `
          An add-on for the 3D modelling program Blender to import proprietary model and texture files from FromSoftware video games.
          The tool unpacks the input files and loads mesh data, armature data and finds the appropriate texture data for that model
           It then loads these items into Blender and applies the armature and texture data into a rigged and textured blender model.
          `,
          imgs: [
            {
              res: "portfolio/blender_dcx_img.png",
              caption: "",
            },
          ],
          actions: [
            {
              title: "View source on Github",
              url: "https://github.com/FelixBenter/FromSoftware-Blender-Importer",
            },
          ],
          slide: 0,
        },
        {
          title: "Physarum WebGL Simulation",
          subtitle:
            "A small implementation of Physarum Polycephalum movement in WebGL",
          description: `
          Physarum Polycephalum, is a single-cell organism which within a network can exhibit many complex and intelligent locomotive behaviours.
          The project involved creating webGL shaders to simulate 100,000s of 'agents', each with a set of simple navigational rules, on the GPU to create complex collective behaviour.
          `,
          imgs: [
            {
              res: "portfolio/slime_img_0.png",
              caption: "",
            },
            {
              res: "portfolio/slime_img_1.png",
              caption: "",
            },
          ],
          actions: [
            {
              title: "View demo",
              url: "",
            },
          ],
          slide: 0,
        },
      ],
    };
  },
});
</script>
