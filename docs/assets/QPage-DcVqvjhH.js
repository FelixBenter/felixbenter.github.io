import { F as e, G as t, T as n, U as r, W as i, c as a, o } from './index-D_28ZlK1.js';
import { y as s } from './use-align-N6v3efuN.js';
var c = n({
  name: `QPage`,
  props: { padding: Boolean, styleFn: Function },
  setup(n, { slots: c }) {
    let {
        proxy: { $q: l },
      } = r(),
      u = t(a, o);
    if (u === o) return (console.error(`QPage needs to be a deep child of QLayout`), o);
    if (t(`_q_pc_`, o) === o) return (console.error(`QPage needs to be child of QPageContainer`), o);
    let d = e(() => {
        let e = (u.header.space === !0 ? u.header.size : 0) + (u.footer.space === !0 ? u.footer.size : 0);
        if (typeof n.styleFn == `function`) {
          let t = u.isContainer.value === !0 ? u.containerHeight.value : l.screen.height;
          return n.styleFn(e, t);
        }
        return {
          minHeight:
            u.isContainer.value === !0
              ? u.containerHeight.value - e + `px`
              : l.screen.height === 0
                ? e === 0
                  ? `100vh`
                  : `calc(100vh - ${e}px)`
                : l.screen.height - e + `px`,
        };
      }),
      f = e(() => `q-page${n.padding === !0 ? ` q-layout-padding` : ``}`);
    return () => i(`main`, { class: f.value, style: d.value }, s(c.default));
  },
});
export { c as t };
