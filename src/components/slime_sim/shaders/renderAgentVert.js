// Runs for each vertex defined over a pixel in the agent state texture
// to get the R and G (x and y position) values and passes that through
// for the fragment shader to draw those pixels

export default `#version 300 es
precision mediump float;

in vec2 r_position;
in vec2 r_agentCoord;

precision mediump sampler2D;
precision mediump usampler2D;

uniform usampler2D agentTex;
uniform sampler2D agentCol;
uniform float pointSize;

out vec4 col;

void main(void)
{
  // get the r & g (x & y positions) value of pixels in agentTex
  uvec4 agent = texture(agentTex, r_agentCoord);
  float v = uintBitsToFloat(agent.w);

  col = texture(agentCol, r_agentCoord);

  float x = uintBitsToFloat(agent.x);
  float y = uintBitsToFloat(agent.y);
  gl_Position = vec4(2.0 * x - 1.0, 2.0 * y - 1.0, 0.0, 1.0);

  gl_PointSize = pointSize;
}
`;
