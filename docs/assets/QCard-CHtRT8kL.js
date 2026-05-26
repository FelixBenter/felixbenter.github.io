import { F as e, T as t, U as n, W as r, d as i, lt as a, w as o } from './index-D_28ZlK1.js';
import { a as s, b as c, n as l, r as u, t as d, y as f } from './use-align-N6v3efuN.js';
var p = { dark: { type: Boolean, default: null } };
function m(t, n) {
  return e(() => (t.dark === null ? n.dark.isActive : t.dark));
}
var h = t({
    name: `QItem`,
    props: {
      ...p,
      ...s,
      tag: { type: String, default: `div` },
      active: { type: Boolean, default: null },
      clickable: Boolean,
      dense: Boolean,
      insetLevel: Number,
      tabindex: [String, Number],
      focused: Boolean,
      manualFocus: Boolean,
    },
    emits: [`click`, `keyup`],
    setup(t, { slots: s, emit: l }) {
      let {
          proxy: { $q: d },
        } = n(),
        f = m(t, d),
        { hasLink: p, linkAttrs: h, linkClass: g, linkTag: _, navigateOnClick: v } = u(),
        y = a(null),
        b = a(null),
        x = e(() => t.clickable === !0 || p.value === !0 || t.tag === `label`),
        S = e(() => t.disable !== !0 && x.value === !0),
        C = e(
          () =>
            `q-item q-item-type row no-wrap` +
            (t.dense === !0 ? ` q-item--dense` : ``) +
            (f.value === !0 ? ` q-item--dark` : ``) +
            (p.value === !0 && t.active === null
              ? g.value
              : t.active === !0
                ? ` q-item--active${t.activeClass === void 0 ? `` : ` ${t.activeClass}`}`
                : ``) +
            (t.disable === !0 ? ` disabled` : ``) +
            (S.value === !0
              ? ` q-item--clickable q-link cursor-pointer ` +
                (t.manualFocus === !0 ? `q-manual-focusable` : `q-focusable q-hoverable`) +
                (t.focused === !0 ? ` q-manual-focusable--focused` : ``)
              : ``)
        ),
        w = e(() =>
          t.insetLevel === void 0
            ? null
            : {
                [`padding` + (d.lang.rtl === !0 ? `Right` : `Left`)]: 16 + t.insetLevel * 56 + `px`,
              }
        );
      function T(e) {
        S.value === !0 &&
          (b.value !== null &&
            e.qAvoidFocus !== !0 &&
            (e.qKeyEvent !== !0 && document.activeElement === y.value
              ? b.value.focus()
              : document.activeElement === b.value && y.value.focus()),
          v(e));
      }
      function E(e) {
        if (S.value === !0 && i(e, [13, 32]) === !0) {
          (o(e), (e.qKeyEvent = !0));
          let t = new MouseEvent(`click`, e);
          ((t.qKeyEvent = !0), y.value.dispatchEvent(t));
        }
        l(`keyup`, e);
      }
      function D() {
        let e = c(s.default, []);
        return (S.value === !0 && e.unshift(r(`div`, { class: `q-focus-helper`, tabindex: -1, ref: b })), e);
      }
      return () => {
        let e = {
          ref: y,
          class: C.value,
          style: w.value,
          role: `listitem`,
          onClick: T,
          onKeyup: E,
        };
        return (
          S.value === !0
            ? ((e.tabindex = t.tabindex || `0`), Object.assign(e, h.value))
            : x.value === !0 && (e[`aria-disabled`] = `true`),
          r(_.value, e, D())
        );
      };
    },
  }),
  g = t({
    name: `QItemSection`,
    props: {
      avatar: Boolean,
      thumbnail: Boolean,
      side: Boolean,
      top: Boolean,
      noWrap: Boolean,
    },
    setup(t, { slots: n }) {
      let i = e(
        () =>
          `q-item__section column q-item__section--${t.avatar === !0 || t.side === !0 || t.thumbnail === !0 ? `side` : `main`}` +
          (t.top === !0 ? ` q-item__section--top justify-start` : ` justify-center`) +
          (t.avatar === !0 ? ` q-item__section--avatar` : ``) +
          (t.thumbnail === !0 ? ` q-item__section--thumbnail` : ``) +
          (t.noWrap === !0 ? ` q-item__section--nowrap` : ``)
      );
      return () => r(`div`, { class: i.value }, f(n.default));
    },
  }),
  _ = t({
    name: `QItemLabel`,
    props: {
      overline: Boolean,
      caption: Boolean,
      header: Boolean,
      lines: [Number, String],
    },
    setup(t, { slots: n }) {
      let i = e(() => parseInt(t.lines, 10)),
        a = e(
          () =>
            `q-item__label` +
            (t.overline === !0 ? ` q-item__label--overline text-overline` : ``) +
            (t.caption === !0 ? ` q-item__label--caption text-caption` : ``) +
            (t.header === !0 ? ` q-item__label--header` : ``) +
            (i.value === 1 ? ` ellipsis` : ``)
        ),
        o = e(() =>
          t.lines !== void 0 && i.value > 1
            ? {
                overflow: `hidden`,
                display: `-webkit-box`,
                '-webkit-box-orient': `vertical`,
                '-webkit-line-clamp': i.value,
              }
            : null
        );
      return () => r(`div`, { style: o.value, class: a.value }, f(n.default));
    },
  }),
  v = t({
    name: `QCardActions`,
    props: { ...l, vertical: Boolean },
    setup(t, { slots: n }) {
      let i = d(t),
        a = e(() => `q-card__actions ${i.value} q-card__actions--${t.vertical === !0 ? `vert column` : `horiz row`}`);
      return () => r(`div`, { class: a.value }, f(n.default));
    },
  }),
  y = t({
    name: `QCard`,
    props: {
      ...p,
      tag: { type: String, default: `div` },
      square: Boolean,
      flat: Boolean,
      bordered: Boolean,
    },
    setup(t, { slots: i }) {
      let {
          proxy: { $q: a },
        } = n(),
        o = m(t, a),
        s = e(
          () =>
            `q-card` +
            (o.value === !0 ? ` q-card--dark q-dark` : ``) +
            (t.bordered === !0 ? ` q-card--bordered` : ``) +
            (t.square === !0 ? ` q-card--square no-border-radius` : ``) +
            (t.flat === !0 ? ` q-card--flat no-shadow` : ``)
        );
      return () => r(t.tag, { class: s.value }, f(i.default));
    },
  });
export { h as a, g as i, v as n, m as o, _ as r, p as s, y as t };
