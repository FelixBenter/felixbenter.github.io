// Performance settings
const NUM_AGENTS = 2**(2*7);
const SENSOR_RADIUS = 5.0; // in pixels
console.log("NUMBER OF AGENTS: " + NUM_AGENTS);

// Vis presets
const presets = [
    {
        name: "Web",
        createAgents: function()
        {
            agents = [];
            for (let i = 0; i < NUM_AGENTS; i++) agents.push({
                x: 0.5,
                y: 0.5,
                rot: (Math.random() * (0.0 - 2*Math.PI) + 2*Math.PI).toFixed(4)
            });
            return agents;
        },
        getColor: function()
        {
            let agentColorData = [];
            for (let i = 0; i < config.agents.length; i++) {
                agentColorData.push(Math.floor(config.agents[i].rot * 255 / (2*Math.PI)));
                agentColorData.push(0);
                agentColorData.push(255 - Math.floor(config.agents[i].rot * 255 / (2*Math.PI)));
                agentColorData.push(255);
            }
            return agentColorData;
        },
        pointSize: 1.0,
        turnSpeed: 0.5,
        moveSpeed: 1.0,
        fadeSpeed: 2.0,
        sensorOffsetDistance: 8.0,
        leftSensorAngle: 0.5,
        rightSensorAngle: -0.5,
    },
    {
        name: "Something",
        createAgents: function()
        {
            agents = [];
            for (let i = 0; i < NUM_AGENTS; i++) agents.push({
                x: Math.sin(i),
                y: 0.5,
                rot: (Math.sin(i)).toFixed(4)
            });
            return agents;
        },
        getColor: function()
        {
            let agentColorData = [];
            for (let i = 0; i < config.agents.length; i++) {
                agentColorData.push(150);
                agentColorData.push(150);
                agentColorData.push(150);
                agentColorData.push(255);
            }
            return agentColorData;
        },
        pointSize: 0.5,
        turnSpeed: 1.0,
        moveSpeed: 1080,
        fadeSpeed: 5.0,
        sensorOffsetDistance: 1.0,
        leftSensorAngle: -1.0,
        rightSensorAngle: 1.0,
    },
    {
        name: "Mandelbrot",
        createAgents: function()
        {
            agents = [];
            for (let i = 0; i < NUM_AGENTS; i++) agents.push({
                x: Math.random(),
                y: Math.random(),
                rot: (Math.random() * (0.0 - 2*Math.PI) + 2*Math.PI).toFixed(4)
            });
            return agents;
        },
        getColor: function()
        {
            let agentColorData = [];
            for (let i = 0; i < config.agents.length; i++) {
                agentColorData.push(Math.floor(config.agents[i].x * 255));
                agentColorData.push(Math.floor(config.agents[i].y * 255));
                agentColorData.push(0);
                agentColorData.push(255);
            }
            return agentColorData;
        },
        pointSize: 1.0,
        turnSpeed: 1.0,
        moveSpeed: 1.0,
        fadeSpeed: 1.0,
        sensorOffsetDistance: 1.0,
        leftSensorAngle: 0.5,
        rightSensorAngle: -0.5,
    },
]