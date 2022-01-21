// Performance settings
const NUM_AGENTS = 2**(2*9);
const SENSOR_RADIUS = 3.0; // in pixels
console.log("NUMBER OF AGENTS: " + NUM_AGENTS);

// Vis presets
const presets = [
    {
        name: "Web",
        createAgents: function()
        {
            agents = [];
            agentColorData = [];


            for (let i = 0; i < NUM_AGENTS; i++)
            {
                agents.push({
                    x: 0.5,
                    y: 0.5,
                    rot: (Math.random() * (0.0 - 2*Math.PI) + 0.1).toFixed(4)
                });


                agentColorData.push(Math.floor(agents[i].rot * 255 / (2*Math.PI)));
                agentColorData.push(0);
                agentColorData.push(255 - Math.floor(agents[i].rot * 255 / (2*Math.PI)));
                agentColorData.push(255);
            }
            return {agents: agents, colors: agentColorData}
        },
        pointSize: 1.0,
        turnSpeed: 1.0,
        moveSpeed: 1.0,
        fadeSpeed: 3.0,
        sensorOffsetDistance: 10.0,
        leftSensorAngle: 0.6,
        rightSensorAngle: -0.6,
    },
    {
        name: "Circle Towards Centre",
        createAgents: function()
        {
            agents = [];
            agentColorData = [];

            circleRadius = 0.4
            for (let i = 0; i < NUM_AGENTS; i++)
            {
                theta = 2 * Math.PI * Math.random();
                radius = circleRadius * Math.sqrt(Math.random());
                posX = 0.5 + radius * Math.cos(theta);
                posY = 0.5 + radius * Math.sin(theta);
                angle = Math.atan2(0.5 - posY, 0.5 - posX);

                agents.push({x: Math.sin(i),
                    x: posX,
                    y: posY,
                    rot: angle.toFixed(2)
                });

                agentColorData.push(255);
                agentColorData.push(255);
                agentColorData.push(255);
                agentColorData.push(255);
            }
            return {agents: agents, colors: agentColorData}
        },
        pointSize: 1.0,
        turnSpeed: 1.0,
        moveSpeed: 1.0,
        fadeSpeed: 20.0,
        sensorOffsetDistance: 20.0,
        leftSensorAngle: 0.4,
        rightSensorAngle: -0.4,
    },
    {
        name: "Mandelbrot",
        createAgents: function()
        {
            agents = [];
            agentColorData = [];
            for (let i = 0; i < NUM_AGENTS; i++)
            {
                agents.push({
                    x: Math.random(),
                    y: Math.random(),
                    rot: (Math.random() * (0.0 - 2*Math.PI) + 2*Math.PI).toFixed(4)
                });

                agentColorData.push(Math.floor(agents[i].x * 255));
                agentColorData.push(Math.floor(agents[i].y * 255));
                agentColorData.push(0);
                agentColorData.push(255);
            } 
            return {agents: agents, colors: agentColorData};
        },
        pointSize: 1.0,
        turnSpeed: 1.0,
        moveSpeed: 1.0,
        fadeSpeed: 20.0,
        sensorOffsetDistance: 10.0,
        leftSensorAngle: 0.5,
        rightSensorAngle: -0.5,
    },
]