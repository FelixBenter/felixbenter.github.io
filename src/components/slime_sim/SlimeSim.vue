<template>
  <canvas
    class="bg-black full-width full-height"
    id="vis"
    ref="visCanvas"
  ></canvas>
  <q-card class="overlay" style="width: 250px">
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
        <q-badge color="secondary"
          >{{ params[param].label }}: {{ params[param].value }}</q-badge
        >
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
import { defineComponent, ref } from "vue";
import * as vis from "./SlimeSim";
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
    this.presetSelection = this.presets[0];
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
        },
        {
          label: "Orbiting",
          createAgents: function () {
            let agents = [];
            let agentColorData = [];

            for (let i = 0; i < NUM_AGENTS; i++) {
              agents.push({
                x: 0.0,
                y: 0.0,
                rot: (
                  Math.random() * (0.0 - 2 * Math.PI) +
                  2 * Math.PI
                ).toFixed(2),
              });

              agentColorData.push(255);
              agentColorData.push(255);
              agentColorData.push(255);
              agentColorData.push(255);
            }
            return { agents: agents, colors: agentColorData };
          },
          pointSize: 0.1,
          fadeSpeed: 10.0,
        },
      ],
      params: {
        turnSpeed: { value: 0.25, min: 0.1, max: 1.0, label: "Turn Speed" },
        maxSpeed: { value: 4.0, min: 2.0, max: 10.0, label: "Max Speed" },
        sensorOffsetDistance: {
          value: 20.0,
          min: 10.0,
          max: 30.0,
          label: "Sensor Range",
        },
        sensorAngle: { value: 0.25, min: 0.1, max: 0.6, label: "Sensor Angle" },
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