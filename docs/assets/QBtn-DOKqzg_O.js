import {
  C as e,
  F as t,
  T as n,
  U as r,
  W as i,
  Y as a,
  d as o,
  j as s,
  lt as c,
  st as l,
  v as u,
  w as d,
  x as f,
} from './index-D_28ZlK1.js';
import { S as p, _ as m, h, i as g, m as _, n as v, r as y, t as b, u as x, x as S } from './use-align-N6v3efuN.js';
var C = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  w = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 },
  T = [`button`, `submit`, `reset`],
  E = /[^\s]\/[^\s]/,
  D = [`flat`, `outline`, `push`, `unelevated`];
function O(e, t) {
  return e.flat === !0
    ? `flat`
    : e.outline === !0
      ? `outline`
      : e.push === !0
        ? `push`
        : e.unelevated === !0
          ? `unelevated`
          : t;
}
var k = {
  ...p,
  ...g,
  type: { type: String, default: `button` },
  label: [Number, String],
  icon: String,
  iconRight: String,
  ...D.reduce((e, t) => (e[t] = Boolean) && e, {}),
  square: Boolean,
  rounded: Boolean,
  glossy: Boolean,
  size: String,
  fab: Boolean,
  fabMini: Boolean,
  padding: String,
  color: String,
  textColor: String,
  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,
  tabindex: [Number, String],
  ripple: { type: [Boolean, Object], default: !0 },
  align: { ...v.align, default: `center` },
  stack: Boolean,
  stretch: Boolean,
  loading: { type: Boolean, default: null },
  disable: Boolean,
  round: Boolean,
};
function A(e) {
  let n = S(e, w),
    r = b(e),
    { hasRouterLink: i, hasLink: a, linkTag: o, linkAttrs: s, navigateOnClick: c } = y({ fallbackTag: `button` }),
    l = t(() => {
      let t = e.fab === !1 && e.fabMini === !1 ? n.value : {};
      return e.padding === void 0
        ? t
        : Object.assign({}, t, {
            padding: e.padding
              .split(/\s+/)
              .map((e) => (e in C ? C[e] + `px` : e))
              .join(` `),
            minWidth: `0`,
            minHeight: `0`,
          });
    }),
    u = t(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
    d = t(() => e.disable !== !0 && e.loading !== !0),
    f = t(() => (d.value === !0 ? e.tabindex || 0 : -1)),
    p = t(() => O(e, `standard`)),
    m = t(() => {
      let t = { tabindex: f.value };
      return (
        a.value === !0 ? Object.assign(t, s.value) : T.includes(e.type) === !0 && (t.type = e.type),
        o.value === `a`
          ? (e.disable === !0 ? (t[`aria-disabled`] = `true`) : t.href === void 0 && (t.role = `button`),
            i.value !== !0 && E.test(e.type) === !0 && (t.type = e.type))
          : e.disable === !0 && ((t.disabled = ``), (t[`aria-disabled`] = `true`)),
        e.loading === !0 &&
          e.percentage !== void 0 &&
          Object.assign(t, {
            role: `progressbar`,
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-valuenow': e.percentage,
          }),
        t
      );
    });
  return {
    classes: t(() => {
      let t;
      e.color === void 0
        ? e.textColor && (t = `text-${e.textColor}`)
        : (t =
            e.flat === !0 || e.outline === !0
              ? `text-${e.textColor || e.color}`
              : `bg-${e.color} text-${e.textColor || `white`}`);
      let n =
        e.round === !0
          ? `round`
          : `rectangle${u.value === !0 ? ` q-btn--rounded` : e.square === !0 ? ` q-btn--square` : ``}`;
      return (
        `q-btn--${p.value} q-btn--${n}` +
        (t === void 0 ? `` : ` ` + t) +
        (d.value === !0 ? ` q-btn--actionable q-focusable q-hoverable` : e.disable === !0 ? ` disabled` : ``) +
        (e.fab === !0 ? ` q-btn--fab` : e.fabMini === !0 ? ` q-btn--fab-mini` : ``) +
        (e.noCaps === !0 ? ` q-btn--no-uppercase` : ``) +
        (e.dense === !0 ? ` q-btn--dense` : ``) +
        (e.stretch === !0 ? ` no-border-radius self-stretch` : ``) +
        (e.glossy === !0 ? ` glossy` : ``) +
        (e.square ? ` q-btn--square` : ``)
      );
    }),
    style: l,
    innerClasses: t(
      () =>
        r.value +
        (e.stack === !0 ? ` column` : ` row`) +
        (e.noWrap === !0 ? ` no-wrap text-no-wrap` : ``) +
        (e.loading === !0 ? ` q-btn__content--hidden` : ``)
    ),
    attributes: m,
    hasLink: a,
    linkTag: o,
    navigateOnClick: c,
    isActionable: d,
  };
}
var { passiveCapture: j } = u,
  M = null,
  N = null,
  P = null,
  F = n({
    name: `QBtn`,
    props: {
      ...k,
      percentage: Number,
      darkPercentage: Boolean,
      onTouchstart: [Function, Array],
    },
    emits: [`click`, `keydown`, `mousedown`, `keyup`],
    setup(n, { slots: u, emit: p }) {
      let { proxy: g } = r(),
        {
          classes: v,
          style: y,
          innerClasses: b,
          attributes: S,
          hasLink: C,
          linkTag: w,
          navigateOnClick: T,
          isActionable: E,
        } = A(n),
        D = c(null),
        O = c(null),
        k = null,
        F,
        I = null,
        L = t(() => n.label !== void 0 && n.label !== null && n.label !== ``),
        R = t(() =>
          n.disable === !0 || n.ripple === !1
            ? !1
            : {
                keyCodes: C.value === !0 ? [13, 32] : [13],
                ...(n.ripple === !0 ? {} : n.ripple),
              }
        ),
        z = t(() => ({ center: n.round })),
        B = t(() => {
          let e = Math.max(0, Math.min(100, n.percentage));
          return e > 0
            ? {
                transition: `transform 0.6s`,
                transform: `translateX(${e - 100}%)`,
              }
            : {};
        }),
        V = t(() => {
          if (n.loading === !0)
            return {
              onMousedown: Y,
              onTouchstart: Y,
              onClick: Y,
              onKeydown: Y,
              onKeyup: Y,
            };
          if (E.value === !0) {
            let e = { onClick: U, onKeydown: W, onMousedown: K };
            if (g.$q.platform.has.touch === !0) {
              let t = n.onTouchstart === void 0 ? `Passive` : ``;
              e[`onTouchstart${t}`] = G;
            }
            return e;
          }
          return { onClick: d };
        }),
        H = t(() => ({
          ref: D,
          class: `q-btn q-btn-item non-selectable no-outline ` + v.value,
          style: y.value,
          ...S.value,
          ...V.value,
        }));
      function U(e) {
        if (D.value !== null) {
          if (e !== void 0) {
            if (e.defaultPrevented === !0) return;
            let t = document.activeElement;
            if (
              n.type === `submit` &&
              t !== document.body &&
              D.value.contains(t) === !1 &&
              t.contains(D.value) === !1
            ) {
              e.qAvoidFocus !== !0 && D.value.focus();
              let t = () => {
                var e;
                (document.removeEventListener(`keydown`, d, !0),
                  document.removeEventListener(`keyup`, t, j),
                  (e = D.value) == null || e.removeEventListener(`blur`, t, j));
              };
              (document.addEventListener(`keydown`, d, !0),
                document.addEventListener(`keyup`, t, j),
                D.value.addEventListener(`blur`, t, j));
            }
          }
          T(e);
        }
      }
      function W(e) {
        D.value !== null &&
          (p(`keydown`, e),
          o(e, [13, 32]) === !0 &&
            N !== D.value &&
            (N !== null && J(),
            e.defaultPrevented !== !0 &&
              (e.qAvoidFocus !== !0 && D.value.focus(),
              (N = D.value),
              D.value.classList.add(`q-btn--active`),
              document.addEventListener(`keyup`, q, !0),
              D.value.addEventListener(`blur`, q, j)),
            d(e)));
      }
      function G(e) {
        D.value !== null &&
          (p(`touchstart`, e),
          e.defaultPrevented !== !0 &&
            (M !== D.value &&
              (M !== null && J(),
              (M = D.value),
              (k = e.target),
              k.addEventListener(`touchcancel`, q, j),
              k.addEventListener(`touchend`, q, j)),
            (F = !0),
            I !== null && clearTimeout(I),
            (I = setTimeout(() => {
              ((I = null), (F = !1));
            }, 200))));
      }
      function K(e) {
        D.value !== null &&
          ((e.qSkipRipple = F === !0),
          p(`mousedown`, e),
          e.defaultPrevented !== !0 &&
            P !== D.value &&
            (P !== null && J(),
            (P = D.value),
            D.value.classList.add(`q-btn--active`),
            document.addEventListener(`mouseup`, q, j)));
      }
      function q(t) {
        if (D.value !== null && !((t == null ? void 0 : t.type) === `blur` && document.activeElement === D.value)) {
          if ((t == null ? void 0 : t.type) === `keyup`) {
            if (N === D.value && o(t, [13, 32]) === !0) {
              let n = new MouseEvent(`click`, t);
              ((n.qKeyEvent = !0),
                t.defaultPrevented === !0 && f(n),
                t.cancelBubble === !0 && e(n),
                D.value.dispatchEvent(n),
                d(t),
                (t.qKeyEvent = !0));
            }
            p(`keyup`, t);
          }
          J();
        }
      }
      function J(e) {
        var t;
        let n = O.value;
        if (
          (e !== !0 &&
            (M === D.value || P === D.value) &&
            n !== null &&
            n !== document.activeElement &&
            (n.setAttribute(`tabindex`, -1), n.focus()),
          M === D.value &&
            (k !== null && (k.removeEventListener(`touchcancel`, q, j), k.removeEventListener(`touchend`, q, j)),
            (M = k = null)),
          P === D.value && (document.removeEventListener(`mouseup`, q, j), (P = null)),
          N === D.value)
        ) {
          var r;
          (document.removeEventListener(`keyup`, q, !0),
            (r = D.value) == null || r.removeEventListener(`blur`, q, j),
            (N = null));
        }
        (t = D.value) == null || t.classList.remove(`q-btn--active`);
      }
      function Y(e) {
        (d(e), (e.qSkipRipple = !0));
      }
      return (
        a(() => {
          J(!0);
        }),
        Object.assign(g, {
          click: (e) => {
            E.value === !0 && U(e);
          },
        }),
        () => {
          let e = [];
          (n.icon !== void 0 &&
            e.push(
              i(h, {
                name: n.icon,
                left: n.stack !== !0 && L.value === !0,
                role: `img`,
              })
            ),
            L.value === !0 && e.push(i(`span`, { class: `block` }, [n.label])),
            (e = m(u.default, e)),
            n.iconRight !== void 0 &&
              n.round === !1 &&
              e.push(
                i(h, {
                  name: n.iconRight,
                  right: n.stack !== !0 && L.value === !0,
                  role: `img`,
                })
              ));
          let t = [i(`span`, { class: `q-focus-helper`, ref: O })];
          return (
            n.loading === !0 &&
              n.percentage !== void 0 &&
              t.push(
                i(
                  `span`,
                  {
                    class:
                      `q-btn__progress absolute-full overflow-hidden` +
                      (n.darkPercentage === !0 ? ` q-btn__progress--dark` : ``),
                  },
                  [
                    i(`span`, {
                      class: `q-btn__progress-indicator fit block`,
                      style: B.value,
                    }),
                  ]
                )
              ),
            t.push(
              i(
                `span`,
                {
                  class: `q-btn__content text-center col items-center q-anchor--skip ` + b.value,
                },
                e
              )
            ),
            n.loading !== null &&
              t.push(
                i(s, { name: `q-transition--fade` }, () =>
                  n.loading === !0
                    ? [
                        i(
                          `span`,
                          {
                            key: `loading`,
                            class: `absolute-full flex flex-center`,
                          },
                          u.loading === void 0 ? [i(_)] : u.loading()
                        ),
                      ]
                    : null
                )
              ),
            l(i(w.value, H.value, t), [[x, R.value, void 0, z.value]])
          );
        }
      );
    },
  });
export { F as t };
