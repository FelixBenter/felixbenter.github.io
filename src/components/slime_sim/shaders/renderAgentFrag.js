export default `#version 300 es

precision mediump float;
precision mediump int;
precision mediump sampler2D;

in vec4 col;

out vec4 color;

void main(void)
{
  color = col;
}
`;
