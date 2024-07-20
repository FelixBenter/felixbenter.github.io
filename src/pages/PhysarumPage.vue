<template>
  <q-page>
    <div class="q-mt-none q-mb-lg text-primary">
      <div class="text-h4">Physarum Polycephalum Simulation</div>
      <br />
      <div class="focused" :class="$q.platform.is.mobile ? '' : 'aside'">
        <p>
          I learned a lot of the conceptual details for this project from
          <a
            href="http://cargocollective.com/sagejenson/physarum"
            class="text-accent"
            target="_blank"
            >Sage Jenson's write-up</a
          >
          on the topic as well as
          <a
            href="https://www.youtube.com/watch?v=X-iSQQgOd1A"
            class="text-accent"
            target="_blank"
          >
            Sebastian Lague's video</a
          >.
        </p>
      </div>
      <p>
        Physarum Polycephalum is a single-celled organism which, within large
        networks, can together exhibit many complex and intelligent locomotive
        behaviours. The project involved creating webGL shaders to simulate
        100,000s of 'agents', each with a set of simple navigational rules, on
        the GPU to create complex collective behaviour.
      </p>
      <video
        :class="$q.platform.is.mobile ? 'center-mobile' : 'aside'"
        autoplay
        loop
        src="portfolio/slime_vid_1.mp4"
        muted
      />
      <p>
        Each agent (or particle) moves based on 3 sensor readings around it
        (front left, front & front right). The sensors each read the brightness
        of the pixel they are currently on, and the agent will then move in the
        direction of the brightest reading (or randomly if two are equal or all
        read dark).
      </p>

      <p>
        The agent then deposits some material onto the pixel it is currently on,
        which increases that pixel's brightness. The entire trail map then
        decays (is darkened slightly) and dissipates (blurred) using a simple
        3x3 blur algorithm.
      </p>

      <p>
        Each sensor reads pixel values in a small box surrounding it, and that
        normalised value is compared between the 3 sensors.
      </p>
      <q-markdown
        style="
          line-height: 1.5;
          overflow: auto;
          overflow-x: auto;
          min-width: 0px;
          box-sizing: border-box;
        "
        :src="markdown"
        class="focused"
      />
      <div class="text-caption">
        Excerpt from the agent movement shader: Given the agent position and
        sensor angle and offset, returns a normalised reading of the pixel
        values in the area around a sensor.
      </div>

      <div class="text-h6">Dynamic Agent Speed</div>

      <video
        :class="$q.platform.is.mobile ? 'center-mobile' : 'aside'"
        autoplay
        loop
        src="portfolio/slime_vid_2.mp4"
        muted
      />
      <p>
        A feature which I wanted to focus on, which I had not seen much of
        elsewhere, was giving the agents dynamic speeds based on their
        surroundings. Here, an agent's acceleration is proportional to the
        brightness of the readings around it. This causes them to form
        "highways" of high-speed lanes with many agents moving through, and
        regions agents slowing moving into empty territory. Here, the agent's
        acceleration also affects their colour.
      </p>
      <p>
        I doubt that this feature is scientifically accurate to the real-life
        molds though, which seem to move pretty slowly constantly.
      </p>
    </div>
  </q-page>
</template>

<style src="@quasar/quasar-ui-qmarkdown/dist/index.css"></style>
<script>
import { defineComponent, ref } from "vue";
import { QMarkdown } from "@quasar/quasar-ui-qmarkdown";
export default defineComponent({
  name: "PhysarumPage",
  components: {
    QMarkdown,
  },
  data() {
    return {
      split: 60,
      markdown: `\`\`\`
float sense(float x, float y, float r, float offset)
{
    float sensorAngle = r + offset;
    vec2 sensorDirection = vec2(cos(sensorAngle), sin(sensorAngle));
    vec2 sensorCentre = vec2(x, y) + sensorDirection * sensorOffsetDistance;

    float sum = 0.0;
    for (float i = -sensorWidth; i <= sensorWidth; i += 1.0/width)
    {
        for (float j = -sensorHeight; j <= sensorHeight; j += 1.0/height)
        {
            vec4 reading = texture(renderTex, sensorCentre + vec2(i, j));
            sum += reading.r + reading.g + reading.b;
        }
    }
    return sum / maxPossibleReading;
}
\`\`\``,
    };
  },
});
</script>

<style lang="scss">
.aside {
  width: calc(max(40%, 20px));
  padding-left: 1rem;
  margin-left: 1rem;
  float: right;
}
.focused {
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding-left: 5px;
  padding-right: 5px;
  color: $accent;
}
.q-markdown pre {
  position: absolute;
  left: 24px;
  right: 24px;
  background: white;
}
.q-markdown--line-numbers-wrapper {
  background: white;
  color: $primary;
}
.center-mobile {
  width: 100%;
}
</style>
