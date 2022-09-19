<template>
  <canvas id="vis" ref="visCanvas"></canvas>
</template>

<script>
import { defineComponent, ref } from "vue";
import * as vis from "./vis";
import presets from "./presets";
export default defineComponent({
  name: "BackgroundVisualiser",
  components: {},
  mounted() {
    this.$nextTick(() => {
      var canvas = this.$refs.visCanvas;
      canvas.width = Math.round(window.innerWidth);
      canvas.height = Math.round(window.innerHeight);
      var canvas = this.$refs.visCanvas;
      var parent = canvas.parentNode;
      var styles = getComputedStyle(parent);
      var w = parseInt(styles.getPropertyValue("width"), 10);
      var h = parseInt(styles.getPropertyValue("height"), 10);
      canvas.width = w - 100;
      canvas.height = h - 300;
      vis.init(presets[0]);
    });
  },
  unmounted() {
    vis.shutdown();
  },
  methods: {
    // TODO: Add tweakable parameters
  },

  setup() {
    return {};
  },
});
</script>
