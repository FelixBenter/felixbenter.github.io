<template>
  <canvas id="vis" ref="visCanvas"></canvas>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import * as vis from './vis';
  import presets from './presets';
  export default defineComponent({
    name: 'BackgroundVisualiser',
    components: {
    },
    mounted() {

      var canvas = this.$refs.visCanvas;
      canvas.width = Math.round(window.innerWidth);
      canvas.height = Math.round(window.innerHeight);

      this.$nextTick(() => {
        //this.resizeCanvas();
      });
      vis.init(presets[0]);
    },
    methods: {
      resizeCanvas() {
        var parent = this.$refs.visCanvas.parentNode;
        var styles = getComputedStyle(parent);
        var w = parseInt(styles.getPropertyValue("width"), 10);
        var h = parseInt(styles.getPropertyValue("height"), 10);
        this.$refs.visCanvas.width = w;
        this.$refs.visCanvas.height = h;
        console.log(w, h);
      }
    },
    setup () {
      return {
      }
    }
  })
  </script>
