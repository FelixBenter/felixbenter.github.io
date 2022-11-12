<template>
  <canvas class="bg-black" id="vis" ref="visCanvas"></canvas>
  <q-card class="overlay" square flat bordered style="width: 250px">
    <q-card-actions>
      <q-select
        v-model="presetSelection"
        :options="presets"
        label="Initial Condition"
        class="full-width"
      />
      <div
        v-for="param in Object.keys(params)"
        :key="param"
        style="width: 100%"
      >
        {{ params[param].label }}: {{ params[param].value }}
        <q-slider
          v-model="params[param].value"
          :min="params[param].min"
          :max="params[param].max"
          :step="0.1"
          track-size="10px"
          thumb-size="20px"
          color="accent"
        />
      </div>
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";
import * as vis from "./SlimeSim";
import { createNoise2D } from "simplex-noise";
export default defineComponent({
  name: "SlimeSim",
  components: {},
  watch: {
    presetSelection(newPreset) {
      try {
        vis.shutdown();
      } catch {}
      var canvas = this.$refs.visCanvas;
      canvas.width = Math.round(window.innerWidth);
      canvas.height = Math.round(window.innerHeight) - 50;
      let config = {
        ...newPreset,
        ...this.params,
      };
      vis.init(canvas, config);
    },
  },
  mounted() {
    this.presetSelection = this.presets[1];
  },
  data() {
    const NUM_AGENTS = 2 ** (2 * 8);
    return {
      presetSelection: null,
      presets: [
        {
          label: "Circle Moving Towards Centre",
          createAgents: function () {
            let agents = [];
            let agentColorData = [];

            let circleRadius = 0.4;
            for (let i = 0; i < NUM_AGENTS; i++) {
              let theta = 2 * Math.PI * Math.random();
              let radius = circleRadius * Math.sqrt(Math.random());
              let posX = radius * Math.cos(theta);
              let posY = radius * Math.sin(theta);

              let angle = Math.atan2(-posY, -posX);

              agents.push({
                x: posX,
                y: posY,
                rot: angle.toFixed(2),
              });

              agentColorData.push(255);
              agentColorData.push(255);
              agentColorData.push(255);
              agentColorData.push(255);
            }
            return { agents: agents, colors: agentColorData };
          },
          pointSize: 1.0,
          fadeSpeed: 10.0,
          randomWeight: 0.1,
        },
        {
          label: "Perlin Noise",
          createAgents: function () {
            let agents = [];
            let agentColorData = [];
            var THRESHOLD = -0.95;
            const noise2D = createNoise2D();

            for (let i = 0; i < NUM_AGENTS; i++) {
              var x = 2 * (Math.random() - 0.5);
              var y = 2 * (Math.random() - 0.5);
              var noise = noise2D(x, y);
              var rot = (
                Math.random() * (0.0 - 2 * Math.PI) +
                2 * Math.PI
              ).toFixed(2);
              rot = 0.0;

              if (noise > THRESHOLD) {
                agents.push({
                  x,
                  y,
                  rot,
                });
                agentColorData.push(255);
                agentColorData.push(255);
                agentColorData.push(255);
                agentColorData.push(255);
              }
            }
            return { agents: agents, colors: agentColorData };
          },
          pointSize: 0.1,
          fadeSpeed: 8.0,
          randomWeight: 0.1,
        },
      ],
      params: {
        turnSpeed: { value: 0.2, min: 0.1, max: 1.0, label: "Turn Speed" },
        maxSpeed: { value: 2.0, min: 0.0, max: 5.0, label: "Max Speed" },
        sensorOffsetDistance: {
          value: 40.0,
          min: 10.0,
          max: 100.0,
          label: "Sensor Range",
        },
        sensorAngle: { value: 0.25, min: 0.1, max: 0.6, label: "Sensor Angle" },
        acceleration: {
          value: 2.0,
          min: 1.0,
          max: 10.0,
          label: "Acceleration",
        },
      },
    };
  },
});
</script>

<style>
.overlay {
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
