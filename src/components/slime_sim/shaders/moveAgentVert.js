export default `#version 300 es

precision mediump float;

in vec4 m_position;

out vec2 v_texCoord;

void main(void)
{
  gl_Position = vec4(m_position.xy, 0.0, 1.0);
  v_texCoord = m_position.zw;
}
`;
