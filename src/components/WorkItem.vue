<template>
  <q-item class="q-px-none">
    <q-item-section>
      <q-item-label class="text-h6">{{ title }}</q-item-label>
      <q-item-label caption>{{ period }}</q-item-label>
      <q-item-label>
        <ul>
          <li v-for="point in points" :key="point">
            {{ point }}
          </li>
        </ul>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  period: {
    required: true,
    type: String,
  },
  points: {
    required: true,
    type: Array as PropType<string[]>,
  },
});
</script>
