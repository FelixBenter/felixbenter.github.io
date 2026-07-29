<template>
  <q-card :id="title" class="bg-white" square flat bordered>
    <q-card-section :horizontal="q.screen.width > q.screen.height" class="full-height q-pa-none">
      <q-carousel
        v-model="slide"
        swipeable
        animated
        :navigation="slides.length > 1"
        transition-prev="slide-right"
        transition-next="slide-left"
        control-type="flat"
        control-color="accent"
        class="col-6"
        style="min-height: 300px"
      >
        <template #navigation-icon="{ active, onClick }">
          <q-btn square outline :color="active ? 'white' : 'primary'" icon="" @click="onClick" />
        </template>
        <q-carousel-slide
          v-for="(s, i) in slides"
          :key="i"
          class="column no-wrap q-pa-none"
          :name="i"
          :img-src="s.res"
          style="background-color: black"
        >
          <div
            v-if="s.type == 'video'"
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
            style="overflow: hidden"
          >
            <video ref="video" style="width: 100%; height: 506px" autoplay loop height="506" :src="s.res" muted></video>
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
              :key="action.title"
              square
              outline
              color="primary"
              :label="action.title"
              @click="action.click"
            />
          </q-card-actions>
        </q-card-section>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const slide = ref(0);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  slides: {
    type: Object,
    required: true,
  },
  tags: {
    type: Object,
    required: true,
  },
  actions: {
    type: Object,
    required: true,
  },
});

const q = useQuasar();
</script>
