// Performance settings
const NUM_AGENTS = 2 ** (2 * 8);

// Vis presets
let presets = [
  {
    name: "Circle Towards Centre",
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
          x: Math.sin(i),
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
    turnSpeed: 0.25,
    maxSpeed: 4.0,
    fadeSpeed: 10.0,
    sensorOffsetDistance: 20.0,
    leftSensorAngle: 0.25,
    rightSensorAngle: -0.25,
  },
];
export default presets;
