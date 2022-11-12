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

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "WorkItem",

  components: {},
  methods: {},
  props: ["title", "period", "points"],
  data() {
    return {};
  },
});
</script>
