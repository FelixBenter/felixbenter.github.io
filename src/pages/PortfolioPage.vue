<template>
  <q-page class="row">
    <div class="q-gutter-y-lg">
      <div v-for="portfolioItem in portfolioItems" :key="portfolioItem.title">
        <q-card class="bg-primary" :id="portfolioItem.title">
          <q-card-section
            :horizontal="$q.screen.width > $q.screen.height"
            class="full-height q-pa-none"
          >
            <q-carousel
              v-model="portfolioItem.slide"
              arrows
              swipeable
              animated
              transition-prev="slide-right"
              transition-next="slide-left"
              control-color="secondary"
              control-type="push"
              class="col-6"
              style="min-height: 400px"
            >
              <q-carousel-slide
                v-for="(img, i) in portfolioItem.imgs"
                :key="i"
                :name="i"
                :img-src="img.res"
              />
            </q-carousel>

            <q-card-section>
              <q-card-section>
                <div class="no-wrap items-center">
                  <div class="text-h4">{{ portfolioItem.title }}</div>
                </div>
                <div class="text-subtitle1 text-grey">
                  {{ portfolioItem.subtitle }}
                </div>
                <div class="q-pt-none">
                  {{ portfolioItem.description }}
                </div>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <q-card-actions>
                  <q-btn
                    v-for="action in portfolioItem.actions"
                    flat
                    :key="action.title"
                    :label="action.title"
                    v-on:click="action.click"
                  ></q-btn>
                </q-card-actions>
              </q-card-section>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-dialog v-model="showModal" full-width full-height>
      <q-card class="bg-black">
        <q-card-actions align="right">
          <q-btn
            square
            color="primary"
            icon="close"
            @click="
              () => {
                routeComponent = null;
                showModal = false;
              }
            "
          />
        </q-card-actions>
        <q-card-section>
          <component
            v-if="routeComponent !== null"
            :is="routeComponent"
            :key="routeComponent"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, shallowRef, defineAsyncComponent } from "vue";
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
      routeComponent: null,
      showModal: false,
      portfolioItems: [
        {
          title: "Blender DCX Importer",
          subtitle: "A Blender plugin for importing Fromsoft DCX files",
          description: `
          An add-on for the 3D modelling program Blender to import proprietary model and texture files from FromSoftware video games.
          The tool unpacks the input files and loads mesh data, armature data and finds the appropriate texture data for that model.
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
              click: () => {
                this.routeComponent = shallowRef(
                  defineAsyncComponent(() =>
                    import(
                      `../components/background_visualiser/BackgroundVisualiser.vue`
                    )
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
