<template>
  <q-page>
    <div v-for="portfolioItem in portfolioItems" :key="portfolioItem.title">
      <q-card class="bg-primary" style="height: 400px">
        <q-card-section horizontal class="full-height">
          <q-img class="col-5" :src="portfolioItem.img" />

          <q-card-section>
            <div class="no-wrap items-center">
              <div class="text-h4">{{ portfolioItem.title }}</div>
            </div>
            <div class="text-subtitle1">{{ portfolioItem.subtitle }}</div>
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
        <q-card-actions> </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import BackgroundVisualiser from "src/components/background_visualiser/BackgroundVisualiser.vue";
import { defineComponent, ref } from "vue";
import { scroll } from "quasar";
const { getScrollTarget, setVerticalScrollPosition } = scroll;
export default defineComponent({
  name: "PortfolioPage",

  components: {},
  methods: {
    scrollToElement(el) {
      const target = getScrollTarget(el);
      const offset = el.offsetTop;
      const duration = 1000;
      setVerticalScrollPosition(target, offset, duration);
    },
  },

  setup() {
    return {
      portfolioItems: [
        {
          title: "Blender DCX Importer",
          subtitle: "A Blender plugin for importing Fromsoft DCX files",
          description: "Some Desc.",
          img: "portfolio/blender_dcx_img.png",
          actions: [
            {
              title: "View source on Github",
              url: "https://github.com/FelixBenter/FromSoftware-Blender-Importer",
            },
          ],
        },
      ],
    };
  },
});
</script>
