export default `#version 300 es
precision mediump float;
precision mediump sampler2D;

uniform float fadeSpeed;
uniform float width;
uniform float height;

in vec2 v_texCoord;
uniform sampler2D renderTex;

out vec4 color;

void main(void)
{
  vec4 sum = vec4(0.0, 0.0, 0.0, 0.0);

  // 3x3 blur
  for (float offsetX = -1.0/width; offsetX <= 1.0/width; offsetX += 1.0/width)
  {
    for (float offsetY = -1.0/height; offsetY <= 1.0/height; offsetY += 1.0/height)
    {
      sum += texture(renderTex, v_texCoord + vec2(offsetX, offsetY));
    }
  }
  vec4 blurredCol = sum / 9.0;

  color = blurredCol;

  // Fade each trailing agent pixel out over time
  color = color - fadeSpeed;
}
`;
