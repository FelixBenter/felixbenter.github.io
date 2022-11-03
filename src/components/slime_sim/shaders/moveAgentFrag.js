// Calculates new x, y and r values for the agent state texture
export default `#version 300 es
precision mediump float;
precision mediump int;
precision mediump sampler2D;
precision mediump usampler2D;

uniform usampler2D agentTex; // agent positions
uniform sampler2D renderTex;

uniform float width;
uniform float height;
uniform float maxSpeed;
uniform float turnSpeed;
uniform float sensorRadius;
uniform float sensorOffsetDistance;
uniform float sensorAngle;
uniform float randomWeight;

in vec2 v_texCoord;

const float PI = 3.141;

out uvec4 result;

uint hash(uint x);
uint hash(uint x)
{
    x ^= 2747636419u;
    x *= 2654435769u;
    x ^= x >> 16;
    x *= 2654435769u;
    x ^= x >> 16;
    x *= 2654435769u;
    return x;
}

float sense(float x, float y, float r, float offset);
float sense(float x, float y, float r, float offset)
{
    float sensorAngle = r + offset;
    vec2 sensorDirection = vec2(cos(sensorAngle), sin(sensorAngle));
    vec2 sensorCentre = vec2(x, y) + sensorDirection * sensorOffsetDistance;
    float sum = 0.0;
    for (float i = -sensorRadius; i <= sensorRadius; i += 1.0/width)
    {
        for (float j = -sensorRadius; j <= sensorRadius; j += 1.0/height)
        {
            vec4 reading = texture(renderTex, sensorCentre + vec2(i, j));
            sum += length(reading.rgb);
        }
    }
    return sum;
}

void main(void)
{
    uint pixelIndex = uint((gl_FragCoord.y * width) + (gl_FragCoord.x));
    uint pseudoRandomNumber = hash(pixelIndex);
    float pseudoRandomWeight = float(pseudoRandomNumber) / 4294967295.0; // normalise

    uvec4 agent = texture(agentTex, v_texCoord);
    float x = uintBitsToFloat(agent.x);
    float y = uintBitsToFloat(agent.y);
    float r = uintBitsToFloat(agent.z);
    float v = uintBitsToFloat(agent.w);

    float aspectRatioInv = height/width;

    // move agent along current path
    x += cos(r) * v * maxSpeed * aspectRatioInv;
    y += sin(r) * v * maxSpeed;

    // check boundaries and reflect angle if hit
    if ( x < 0.0 || x > 1.0 || y < 0.0 || y > 1.0 )
    {
        /*
        x = min(0.99, max(-0.99, x));
        y = min(0.99, max(-0.99, y));
        float pseudoRandomTurnWeight = float(hash(pseudoRandomNumber)) / 4294967295.0;
        r += pseudoRandomTurnWeight * PI;
        */

        // pass to other side
        if (x < 0.0) x = 0.99; if (x > 1.0) x = 0.01;
        if (y < 0.0) y = 0.99; if (y > 1.0) y = 0.01;
    }


    float forwardReading = sense(x, y, r, 0.0);
    float leftReading = sense(x, y, r, sensorAngle);
    float rightReading = sense(x, y, r, -1.0 * sensorAngle);

    if (forwardReading > leftReading && forwardReading > rightReading)
    {
        r += 0.0; // no change
        v = min(v + 0.005 * pseudoRandomWeight, 1.0);
    }
    else if (forwardReading < leftReading && forwardReading < rightReading)
    {
        r += (pseudoRandomWeight-0.5) * turnSpeed; // turn randomly
        v = max(v - 0.005 * pseudoRandomWeight, 0.1);
    }
    else if (rightReading > forwardReading && forwardReading > leftReading)
    {
        r -= turnSpeed + turnSpeed * (pseudoRandomWeight-0.5); // turn left
    }
    else if (leftReading > forwardReading && forwardReading > rightReading)
    {
        r += turnSpeed + turnSpeed * (pseudoRandomWeight-0.5); // turn right
    }

    uint x_ = floatBitsToUint(x);
    uint y_ = floatBitsToUint(y);
    uint r_ = floatBitsToUint(r);
    uint v_ = floatBitsToUint(v);

    result = uvec4(x_, y_, r_, v_);
}
`;
