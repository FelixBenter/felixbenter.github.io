<template>
  <q-card class="bg-white" :id="title" square flat bordered>
    <q-card-section
      :horizontal="$q.screen.width > $q.screen.height"
      class="full-height q-pa-none"
    >
      <q-carousel
        v-model="slide"
        arrows
        swipeable
        animated
        transition-prev="slide-right"
        transition-next="slide-left"
        control-color="accent"
        class="col-6"
        style="min-height: 300px"
      >
        <q-carousel-slide
          class="column no-wrap"
          v-for="(slide, i) in slides"
          :key="i"
          :name="i"
          :img-src="slide.res"
        >
          <div
            v-if="slide.type == 'video'"
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <iframe
              :src="slide.res"
              frameBorder="0"
              style="width: 100%; min-height: 400px"
            ></iframe>
          </div>
        </q-carousel-slide>
      </q-carousel>

      <q-card-section>
        <q-card-section>
          <div class="no-wrap items-center">
            <div class="text-h4 text-primary">{{ title }}</div>
          </div>
          <div class="text-subtitle1 text-accent text-italic">
            {{ subtitle }}
          </div>
          <div class="q-pt-none text-primary">
            {{ description }}
          </div>

          <q-chip
            v-for="tag in tags"
            :key="tag"
            outline
            dense
            :ripple="false"
            class="no-border-radius q-ml-none"
            color="primary"
          >
            {{ tag }}
          </q-chip>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-card-actions class="q-px-none">
            <q-btn
              v-for="action in actions"
              square
              outline
              color="primary"
              :key="action.title"
              :label="action.title"
              v-on:click="action.click"
            ></q-btn>
          </q-card-actions>
        </q-card-section>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PortfolioPage",

  components: {},
  methods: {},
  props: ["title", "subtitle", "description", "slides", "tags", "actions"],
  data() {
    return {
      slide: 0,
    };
  },
});
</script>
