// Performance settings
const NUM_AGENTS = 2**(2*7);
const SENSOR_RADIUS = 0.005;
console.log("NUMBER OF AGENTS: " + NUM_AGENTS);

// Vis presets
const presets = [
    {
        name: "Orbiting",
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
        color: [0.282, 0.909, 1.0, 1.0],
        pointSize: 2.0,
        turnSpeed: 0.2,
        moveSpeed: 0.005,
        fadeSpeed: 0.01,
        sensorOffsetDistance: 0.01,
        leftSensorAngle: 0.1,
        rightSensorAngle: -0.1,
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
        createAgents: function()
        {
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
        createAgents: function()
        {
            agents = [];
            let iterMax = 4;

            for (let row = 0; row < canvas.height; row++)
            {
                for (let col = 0; col < canvas.width; col++)
                {
                    let cRe = (col - canvas.width/2.0) * 4.0/canvas.width;
                    let cIm = (row - canvas.height/2.0) * 4.0/canvas.width;
                    let posX = 0;
                    let posY = 0;
                    let iter = 0;

                    while (posX*posX+posY*posY <= 4 && iter < iterMax)
                    {
                        let xNew = posX*posX - posY*posY + cRe;
                        posY = 2*posX*posY + cIm;
                        posX = xNew;
                        iter++;
                    }
                    if (!(iter < iterMax))
                    {
                        agents.push({
                            x: posX/4 + 0.5,
                            y: posY/4 + 0.5,
                            rot: Math.cos(posX/4) + Math.sin(posY/4)
                        })
                        if (agents.length >= NUM_AGENTS)
                        {
                            return agents;
                        } 
                    }
                }
            }
        },
        color: [0.937, 0.145, 0.756, 1.0],
        pointSize: 0.5,
        turnSpeed: 0.5,
        moveSpeed: 5.0 / 1080,
        fadeSpeed: 0.1,
        sensorOffsetDistance: 0.05,
        leftSensorAngle: 0.1,
        rightSensorAngle: -0.1,
    },
]