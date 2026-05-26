import { F as e, T as t, W as n } from './index-D_28ZlK1.js';
import { y as r } from './use-align-N6v3efuN.js';
var i = t({
  name: `QCardSection`,
  props: { tag: { type: String, default: `div` }, horizontal: Boolean },
  setup(t, { slots: i }) {
    let a = e(() => `q-card__section q-card__section--${t.horizontal === !0 ? `horiz row no-wrap` : `vert`}`);
    return () => n(t.tag, { class: a.value }, r(i.default));
  },
});
export { i as t };
