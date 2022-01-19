// Performance settings
const NUM_AGENTS = 1000;
const SENSOR_RADIUS = 0.01;

// Vis presets
const presets = [
    {
        name: "Orbiting",
        createAgents: function() {
            agents = [];
            for (let i = 0; i < NUM_AGENTS; i++) agents.push({
                x: 0.5,
                y: 0.5,
                rot: (Math.random() * (0.0 - 2*Math.PI) + 2*Math.PI).toFixed(4)
            });
            return agents;
        },
        color: [0.282, 0.909, 1.0, 1.0],
        pointSize: 1.0,
        turnSpeed: 1.0,
        moveSpeed: 0.002,
        fadeSpeed: 0.001,
        sensorOffsetDistance: 0.01,
        leftSensorAngle: 0.1,
        rightSensorAngle: -0.1,
    },
    {
        name: "Something",
        createAgents: function() {
            agents = [];
            for (let i = 0; i < NUM_AGENTS; i++) agents.push({
                x: Math.sin(i),
                y: 0.5,
                rot: (Math.sin(i)).toFixed(4)
            });
            return agents;
        },
        color: [0.5, 0.5, 0.5, 1.0],
        pointSize: 0.1,
        turnSpeed: 0.5,
        moveSpeed: 0.5,
        fadeSpeed: 0.0001,
        sensorOffsetDistance: 0.02,
        leftSensorAngle: 1.0,
        rightSensorAngle: -1.0,
    },
    {
        name: "Sin waves",
        createAgents: function() {
            agents = [];
            for (let i = 0; i < NUM_AGENTS; i++) agents.push({
                x: i/NUM_AGENTS,
                y: 0.5,
                rot: Math.sin(i) * Math.PI * 2
            });
            return agents;
        },
        color: [0.882, 0.209, 0.4, 1.0],
        pointSize: 1.0,
        turnSpeed: 0.5,
        moveSpeed: 1.0 / 1080,
        fadeSpeed: 1.0,
        sensorOffsetDistance: 1.0,
        leftSensorAngle: -2.0,
        rightSensorAngle: 2.0,
    },
    {
        name: "Mandelbrot",
        createAgents: function() {
            agents = [];
            for (let i = 0; i < NUM_AGENTS; i++) agents.push({
                x: i/NUM_AGENTS,
                y: 0.5,
                rot: Math.sin(i) * Math.PI * 2
            });
            return agents;
        },
        color: [0.882, 0.209, 0.4, 1.0],
        pointSize: 1.0,
        turnSpeed: 0.5,
        moveSpeed: 1.0 / 1080,
        fadeSpeed: 1.0,
        sensorOffsetDistance: 1.0,
        leftSensorAngle: -2.0,
        rightSensorAngle: 2.0,
    },
]