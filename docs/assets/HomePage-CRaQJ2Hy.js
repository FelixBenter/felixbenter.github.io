import {
  $ as e,
  B as t,
  F as n,
  G as r,
  H as i,
  I as a,
  K as o,
  L as s,
  M as c,
  Q as l,
  R as u,
  T as d,
  U as f,
  V as p,
  W as m,
  Y as h,
  at as g,
  c as _,
  ct as v,
  dt as y,
  it as b,
  j as x,
  k as S,
  l as C,
  lt as w,
  nt as T,
  o as E,
  ot as D,
  rt as O,
  t as k,
  tt as A,
  v as j,
  y as M,
  z as N,
} from './index-D_28ZlK1.js';
import { _ as P, b as ee, y as F } from './use-align-N6v3efuN.js';
import { a as I, i as L, n as R, r as z, t as B } from './QCard-CHtRT8kL.js';
import { i as V, n as H, o as U, r as W, t as G } from './scroll-CiTZFIdM.js';
import { t as K } from './QBtn-DOKqzg_O.js';
import { t as q } from './QCardSection-BgT7BLU9.js';
var J = d({
    name: `QToolbarTitle`,
    props: { shrink: Boolean },
    setup(e, { slots: t }) {
      let r = n(() => `q-toolbar__title ellipsis` + (e.shrink === !0 ? ` col-shrink` : ``));
      return () => m(`div`, { class: r.value }, F(t.default));
    },
  }),
  Y = d({
    name: `QToolbar`,
    props: { inset: Boolean },
    setup(e, { slots: t }) {
      let r = n(() => `q-toolbar row no-wrap items-center` + (e.inset === !0 ? ` q-toolbar--inset` : ``));
      return () => m(`div`, { class: r.value, role: `toolbar` }, F(t.default));
    },
  });
function te() {
  let e = w(!S.value);
  return (
    e.value === !1 &&
      l(() => {
        e.value = !0;
      }),
    { isHydrated: e }
  );
}
var X = typeof ResizeObserver < `u`,
  Z =
    X === !0
      ? {}
      : {
          style: `display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;`,
          url: `about:blank`,
        },
  Q = d({
    name: `QResizeObserver`,
    props: { debounce: { type: [String, Number], default: 100 } },
    emits: [`resize`],
    setup(e, { emit: t }) {
      let n = null,
        r,
        i = { width: -1, height: -1 };
      function a(t) {
        t === !0 || e.debounce === 0 || e.debounce === `0` ? s() : n === null && (n = setTimeout(s, e.debounce));
      }
      function s() {
        if ((n !== null && (clearTimeout(n), (n = null)), r)) {
          let { offsetWidth: e, offsetHeight: n } = r;
          (e !== i.width || n !== i.height) && ((i = { width: e, height: n }), t(`resize`, i));
        }
      }
      let { proxy: c } = f();
      if (((c.trigger = a), X === !0)) {
        let e,
          t = (n) => {
            ((r = c.$el.parentNode),
              r
                ? ((e = new ResizeObserver(a)), e.observe(r), s())
                : n !== !0 &&
                  o(() => {
                    t(!0);
                  }));
          };
        return (
          l(() => {
            t();
          }),
          h(() => {
            (n !== null && clearTimeout(n),
              e !== void 0 && (e.disconnect === void 0 ? r && e.unobserve(r) : e.disconnect()));
          }),
          M
        );
      } else {
        let { isHydrated: e } = te(),
          t;
        function i() {
          (n !== null && (clearTimeout(n), (n = null)),
            t !== void 0 &&
              (t.removeEventListener !== void 0 && t.removeEventListener(`resize`, a, j.passive), (t = void 0)));
        }
        function u() {
          (i(),
            r != null &&
              r.contentDocument &&
              ((t = r.contentDocument.defaultView), t.addEventListener(`resize`, a, j.passive), s()));
        }
        return (
          l(() => {
            o(() => {
              ((r = c.$el), r && u());
            });
          }),
          h(i),
          () => {
            if (e.value === !0)
              return m(`object`, {
                class: `q--avoid-card-border`,
                style: Z.style,
                tabindex: -1,
                type: `text/html`,
                data: Z.url,
                'aria-hidden': `true`,
                onLoad: u,
              });
          }
        );
      }
    },
  }),
  ne = d({
    name: `QHeader`,
    props: {
      modelValue: { type: Boolean, default: !0 },
      reveal: Boolean,
      revealOffset: { type: Number, default: 250 },
      bordered: Boolean,
      elevated: Boolean,
      heightHint: { type: [String, Number], default: 50 },
    },
    emits: [`reveal`, `focusin`],
    setup(e, { slots: t, emit: i }) {
      let {
          proxy: { $q: a },
        } = f(),
        o = r(_, E);
      if (o === E) return (console.error(`QHeader needs to be child of QLayout`), E);
      let s = w(parseInt(e.heightHint, 10)),
        c = w(!0),
        l = n(
          () => e.reveal === !0 || o.view.value.indexOf(`H`) !== -1 || (a.platform.is.ios && o.isContainer.value === !0)
        ),
        u = n(() => {
          if (e.modelValue !== !0) return 0;
          if (l.value === !0) return c.value === !0 ? s.value : 0;
          let t = s.value - o.scroll.value.position;
          return t > 0 ? t : 0;
        }),
        d = n(() => e.modelValue !== !0 || (l.value === !0 && c.value !== !0)),
        p = n(() => e.modelValue === !0 && d.value === !0 && e.reveal === !0),
        v = n(
          () =>
            `q-header q-layout__section--marginal ` +
            (l.value === !0 ? `fixed` : `absolute`) +
            `-top` +
            (e.bordered === !0 ? ` q-header--bordered` : ``) +
            (d.value === !0 ? ` q-header--hidden` : ``) +
            (e.modelValue === !0 ? `` : ` q-layout--prevent-focus`)
        ),
        y = n(() => {
          let e = o.rows.value.top,
            t = {};
          return (
            e[0] === `l` && o.left.space === !0 && (t[a.lang.rtl === !0 ? `right` : `left`] = `${o.left.size}px`),
            e[2] === `r` && o.right.space === !0 && (t[a.lang.rtl === !0 ? `left` : `right`] = `${o.right.size}px`),
            t
          );
        });
      function b(e, t) {
        o.update(`header`, e, t);
      }
      function x(e, t) {
        e.value !== t && (e.value = t);
      }
      function S({ height: e }) {
        (x(s, e), b(`size`, e));
      }
      function C(e) {
        (p.value === !0 && x(c, !0), i(`focusin`, e));
      }
      (g(
        () => e.modelValue,
        (e) => {
          (b(`space`, e), x(c, !0), o.animate());
        }
      ),
        g(u, (e) => {
          b(`offset`, e);
        }),
        g(
          () => e.reveal,
          (t) => {
            t === !1 && x(c, e.modelValue);
          }
        ),
        g(c, (e) => {
          (o.animate(), i(`reveal`, e));
        }),
        g(o.scroll, (t) => {
          e.reveal === !0 &&
            x(c, t.direction === `up` || t.position <= e.revealOffset || t.position - t.inflectionPoint < 100);
        }));
      let T = {};
      return (
        (o.instances.header = T),
        e.modelValue === !0 && b(`size`, s.value),
        b(`space`, e.modelValue),
        b(`offset`, u.value),
        h(() => {
          o.instances.header === T && ((o.instances.header = void 0), b(`size`, 0), b(`offset`, 0), b(`space`, !1));
        }),
        () => {
          let n = ee(t.default, []);
          return (
            e.elevated === !0 &&
              n.push(
                m(`div`, {
                  class: `q-layout__shadow absolute-full overflow-hidden no-pointer-events`,
                })
              ),
            n.push(m(Q, { debounce: 0, onResize: S })),
            m(`header`, { class: v.value, style: y.value, onFocusin: C }, n)
          );
        }
      );
    },
  }),
  re = d({
    name: `QPageContainer`,
    setup(e, { slots: t }) {
      let {
          proxy: { $q: i },
        } = f(),
        a = r(_, E);
      if (a === E) return (console.error(`QPageContainer needs to be child of QLayout`), E);
      T(C, !0);
      let o = n(() => {
        let e = {};
        return (
          a.header.space === !0 && (e.paddingTop = `${a.header.size}px`),
          a.right.space === !0 && (e[`padding${i.lang.rtl === !0 ? `Left` : `Right`}`] = `${a.right.size}px`),
          a.footer.space === !0 && (e.paddingBottom = `${a.footer.size}px`),
          a.left.space === !0 && (e[`padding${i.lang.rtl === !0 ? `Right` : `Left`}`] = `${a.left.size}px`),
          e
        );
      });
      return () => m(`div`, { class: `q-page-container`, style: o.value }, F(t.default));
    },
  }),
  ie = d({
    name: `QFooter`,
    props: {
      modelValue: { type: Boolean, default: !0 },
      reveal: Boolean,
      bordered: Boolean,
      elevated: Boolean,
      heightHint: { type: [String, Number], default: 50 },
    },
    emits: [`reveal`, `focusin`],
    setup(e, { slots: t, emit: i }) {
      let {
          proxy: { $q: a },
        } = f(),
        o = r(_, E);
      if (o === E) return (console.error(`QFooter needs to be child of QLayout`), E);
      let s = w(parseInt(e.heightHint, 10)),
        c = w(!0),
        l = w(S.value === !0 || o.isContainer.value === !0 ? 0 : window.innerHeight),
        u = n(
          () => e.reveal === !0 || o.view.value.indexOf(`F`) !== -1 || (a.platform.is.ios && o.isContainer.value === !0)
        ),
        d = n(() => (o.isContainer.value === !0 ? o.containerHeight.value : l.value)),
        p = n(() => {
          if (e.modelValue !== !0) return 0;
          if (u.value === !0) return c.value === !0 ? s.value : 0;
          let t = o.scroll.value.position + d.value + s.value - o.height.value;
          return t > 0 ? t : 0;
        }),
        v = n(() => e.modelValue !== !0 || (u.value === !0 && c.value !== !0)),
        y = n(() => e.modelValue === !0 && v.value === !0 && e.reveal === !0),
        b = n(
          () =>
            `q-footer q-layout__section--marginal ` +
            (u.value === !0 ? `fixed` : `absolute`) +
            `-bottom` +
            (e.bordered === !0 ? ` q-footer--bordered` : ``) +
            (v.value === !0 ? ` q-footer--hidden` : ``) +
            (e.modelValue === !0 ? `` : ` q-layout--prevent-focus` + (u.value === !0 ? `` : ` hidden`))
        ),
        x = n(() => {
          let e = o.rows.value.bottom,
            t = {};
          return (
            e[0] === `l` && o.left.space === !0 && (t[a.lang.rtl === !0 ? `right` : `left`] = `${o.left.size}px`),
            e[2] === `r` && o.right.space === !0 && (t[a.lang.rtl === !0 ? `left` : `right`] = `${o.right.size}px`),
            t
          );
        });
      function C(e, t) {
        o.update(`footer`, e, t);
      }
      function T(e, t) {
        e.value !== t && (e.value = t);
      }
      function D({ height: e }) {
        (T(s, e), C(`size`, e));
      }
      function O() {
        if (e.reveal !== !0) return;
        let { direction: t, position: n, inflectionPoint: r } = o.scroll.value;
        T(c, t === `up` || n - r < 100 || o.height.value - d.value - n - s.value < 300);
      }
      function k(e) {
        (y.value === !0 && T(c, !0), i(`focusin`, e));
      }
      (g(
        () => e.modelValue,
        (e) => {
          (C(`space`, e), T(c, !0), o.animate());
        }
      ),
        g(p, (e) => {
          C(`offset`, e);
        }),
        g(
          () => e.reveal,
          (t) => {
            t === !1 && T(c, e.modelValue);
          }
        ),
        g(c, (e) => {
          (o.animate(), i(`reveal`, e));
        }),
        g([s, o.scroll, o.height], O),
        g(
          () => a.screen.height,
          (e) => {
            o.isContainer.value !== !0 && T(l, e);
          }
        ));
      let A = {};
      return (
        (o.instances.footer = A),
        e.modelValue === !0 && C(`size`, s.value),
        C(`space`, e.modelValue),
        C(`offset`, p.value),
        h(() => {
          o.instances.footer === A && ((o.instances.footer = void 0), C(`size`, 0), C(`offset`, 0), C(`space`, !1));
        }),
        () => {
          let n = P(t.default, [m(Q, { debounce: 0, onResize: D })]);
          return (
            e.elevated === !0 &&
              n.push(
                m(`div`, {
                  class: `q-layout__shadow absolute-full overflow-hidden no-pointer-events`,
                })
              ),
            m(`footer`, { class: b.value, style: x.value, onFocusin: k }, n)
          );
        }
      );
    },
  }),
  { passive: $ } = j,
  ae = [`both`, `horizontal`, `vertical`],
  oe = d({
    name: `QScrollObserver`,
    props: {
      axis: {
        type: String,
        validator: (e) => ae.includes(e),
        default: `vertical`,
      },
      debounce: [String, Number],
      scrollTarget: U,
    },
    emits: [`scroll`],
    setup(e, { emit: t }) {
      let n = {
          position: { top: 0, left: 0 },
          direction: `down`,
          directionChanged: !1,
          delta: { top: 0, left: 0 },
          inflectionPoint: { top: 0, left: 0 },
        },
        r = null,
        i,
        a;
      g(
        () => e.scrollTarget,
        () => {
          (c(), s());
        }
      );
      function o() {
        r == null || r();
        let a = Math.max(0, V(i)),
          o = G(i),
          s = { top: a - n.position.top, left: o - n.position.left };
        if ((e.axis === `vertical` && s.top === 0) || (e.axis === `horizontal` && s.left === 0)) return;
        let c = Math.abs(s.top) >= Math.abs(s.left) ? (s.top < 0 ? `up` : `down`) : s.left < 0 ? `left` : `right`;
        ((n.position = { top: a, left: o }),
          (n.directionChanged = n.direction !== c),
          (n.delta = s),
          n.directionChanged === !0 && ((n.direction = c), (n.inflectionPoint = n.position)),
          t(`scroll`, { ...n }));
      }
      function s() {
        ((i = H(a, e.scrollTarget)), i.addEventListener(`scroll`, u, $), u(!0));
      }
      function c() {
        i !== void 0 && (i.removeEventListener(`scroll`, u, $), (i = void 0));
      }
      function u(t) {
        if (t === !0 || e.debounce === 0 || e.debounce === `0`) o();
        else if (r === null) {
          let [t, n] = e.debounce
            ? [setTimeout(o, e.debounce), clearTimeout]
            : [requestAnimationFrame(o), cancelAnimationFrame];
          r = () => {
            (n(t), (r = null));
          };
        }
      }
      let { proxy: d } = f();
      return (
        g(() => d.$q.lang.rtl, o),
        l(() => {
          ((a = d.$el.parentNode), s());
        }),
        h(() => {
          (r == null || r(), c());
        }),
        Object.assign(d, { trigger: u, getPosition: () => n }),
        M
      );
    },
  }),
  se = d({
    name: `QLayout`,
    props: {
      container: Boolean,
      view: {
        type: String,
        default: `hhh lpr fff`,
        validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()),
      },
      onScroll: Function,
      onScrollHeight: Function,
      onResize: Function,
    },
    setup(t, { slots: r, emit: i }) {
      let {
          proxy: { $q: a },
        } = f(),
        o = w(null),
        s = w(a.screen.height),
        c = w(t.container === !0 ? 0 : a.screen.width),
        l = w({ position: 0, direction: `down`, inflectionPoint: 0 }),
        u = w(0),
        d = w(S.value === !0 ? 0 : W()),
        p = n(() => `q-layout q-layout--` + (t.container === !0 ? `containerized` : `standard`)),
        h = n(() => (t.container === !1 ? { minHeight: a.screen.height + `px` } : null)),
        y = n(() => (d.value === 0 ? null : { [a.lang.rtl === !0 ? `left` : `right`]: `${d.value}px` })),
        b = n(() =>
          d.value === 0
            ? null
            : {
                [a.lang.rtl === !0 ? `right` : `left`]: 0,
                [a.lang.rtl === !0 ? `left` : `right`]: `-${d.value}px`,
                width: `calc(100% + ${d.value}px)`,
              }
        );
      function x(e) {
        if (t.container === !0 || document.qScrollPrevented !== !0) {
          let n = {
            position: e.position.top,
            direction: e.direction,
            directionChanged: e.directionChanged,
            inflectionPoint: e.inflectionPoint.top,
            delta: e.delta.top,
          };
          ((l.value = n), t.onScroll !== void 0 && i(`scroll`, n));
        }
      }
      function C(e) {
        let { height: n, width: r } = e,
          a = !1;
        (s.value !== n && ((a = !0), (s.value = n), t.onScrollHeight !== void 0 && i(`scrollHeight`, n), D()),
          c.value !== r && ((a = !0), (c.value = r)),
          a === !0 && t.onResize !== void 0 && i(`resize`, e));
      }
      function E({ height: e }) {
        u.value !== e && ((u.value = e), D());
      }
      function D() {
        if (t.container === !0) {
          let e = s.value > u.value ? W() : 0;
          d.value !== e && (d.value = e);
        }
      }
      let O = null,
        k = {
          instances: {},
          view: n(() => t.view),
          isContainer: n(() => t.container),
          rootRef: o,
          height: s,
          containerHeight: u,
          scrollbarWidth: d,
          totalWidth: n(() => c.value + d.value),
          rows: n(() => {
            let e = t.view.toLowerCase().split(` `);
            return {
              top: e[0].split(``),
              middle: e[1].split(``),
              bottom: e[2].split(``),
            };
          }),
          header: v({ size: 0, offset: 0, space: !1 }),
          right: v({ size: 300, offset: 0, space: !1 }),
          footer: v({ size: 0, offset: 0, space: !1 }),
          left: v({ size: 300, offset: 0, space: !1 }),
          scroll: l,
          animate() {
            (O === null ? document.body.classList.add(`q-body--layout-animate`) : clearTimeout(O),
              (O = setTimeout(() => {
                ((O = null), document.body.classList.remove(`q-body--layout-animate`));
              }, 155)));
          },
          update(e, t, n) {
            k[e][t] = n;
          },
        };
      if ((T(_, k), W() > 0)) {
        let n = null,
          r = document.body;
        function i() {
          ((n = null), r.classList.remove(`hide-scrollbar`));
        }
        function o() {
          if (n === null) {
            if (r.scrollHeight > a.screen.height) return;
            r.classList.add(`hide-scrollbar`);
          } else clearTimeout(n);
          n = setTimeout(i, 300);
        }
        function s(e) {
          (n !== null && e === `remove` && (clearTimeout(n), i()), window[`${e}EventListener`](`resize`, o));
        }
        (g(() => (t.container === !0 ? `remove` : `add`), s),
          t.container !== !0 && s(`add`),
          e(() => {
            s(`remove`);
          }));
      }
      return () => {
        let e = P(r.default, [m(oe, { onScroll: x }), m(Q, { onResize: C })]),
          n = m(
            `div`,
            {
              class: p.value,
              style: h.value,
              ref: t.container === !0 ? void 0 : o,
              tabindex: -1,
            },
            e
          );
        return t.container === !0
          ? m(`div`, { class: `q-layout-container overflow-hidden`, ref: o }, [
              m(Q, { onResize: E }),
              m(`div`, { class: `absolute-full`, style: y.value }, [
                m(`div`, { class: `scroll`, style: b.value }, [n]),
              ]),
            ])
          : n;
      };
    },
  }),
  ce = i({
    name: `ResumePage`,
    components: {},
    data() {
      return {
        windowTop: 0,
        links: [
          { title: `Email`, href: `mailto:felixbenter1@gmail.com` },
          {
            title: `LinkedIn`,
            href: `https://www.linkedin.com/in/felix-benter-8a7157191/`,
          },
          { title: `Github`, href: `https://github.com/FelixBenter` },
          { title: `resume`, href: `Resume_2026.pdf` },
        ],
      };
    },
    mounted() {
      window.addEventListener(`scroll`, this.onScroll);
    },
    beforeUnmount() {
      window.removeEventListener(`scroll`, this.onScroll);
    },
    methods: {
      onScroll(e) {
        this.windowTop = window.top.scrollY;
      },
    },
    watch: { windowTop() {} },
  }),
  le = { key: 1 };
function ue(e, n, r, i, o, l) {
  let d = b(`router-link`),
    f = b(`RouterView`);
  return (
    A(),
    s(
      se,
      { view: `hHh lpR fff`, class: `q-px-lg` },
      {
        default: D(() => [
          p(
            ne,
            {
              bordered: e.windowTop != 0,
              class: `bg-white text-primary center-column`,
            },
            {
              default: D(() => [
                p(
                  Y,
                  { class: `q-pa-none` },
                  {
                    default: D(() => [
                      p(
                        J,
                        { class: `text-weight-medium` },
                        {
                          default: D(() => [
                            e.$route.path == `/`
                              ? u(``, !0)
                              : (A(),
                                s(
                                  d,
                                  { key: 0, to: `/`, class: `text-primary` },
                                  {
                                    default: D(() => [...(n[0] || (n[0] = [t(`Felix Benter`, -1)]))]),
                                    _: 1,
                                  }
                                )),
                            e.$route.path == `/` ? (A(), N(`div`, le, `Felix Benter`)) : u(``, !0),
                          ]),
                          _: 1,
                        }
                      ),
                      p(I, null, {
                        default: D(() => [
                          p(
                            L,
                            { class: `text-caption text-weight-light` },
                            {
                              default: D(() => [
                                p(z, null, {
                                  default: D(() => [
                                    ...(n[1] ||
                                      (n[1] = [
                                        a(
                                          `a`,
                                          {
                                            href: `mailto:felixbenter1@gmail.com`,
                                            class: `text-primary`,
                                          },
                                          `felixbenter1@gmail.com`,
                                          -1
                                        ),
                                      ])),
                                  ]),
                                  _: 1,
                                }),
                                p(z, null, {
                                  default: D(() => [
                                    ...(n[2] ||
                                      (n[2] = [
                                        a(
                                          `a`,
                                          {
                                            href: `https://www.linkedin.com/in/felix-benter-8a7157191/`,
                                            class: `text-primary`,
                                            target: `_blank`,
                                          },
                                          `LinkedIn`,
                                          -1
                                        ),
                                        t(` / `, -1),
                                        a(
                                          `a`,
                                          {
                                            href: `https://github.com/FelixBenter`,
                                            class: `text-primary`,
                                            target: `_blank`,
                                          },
                                          `Github`,
                                          -1
                                        ),
                                      ])),
                                  ]),
                                  _: 1,
                                }),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            },
            8,
            [`bordered`]
          ),
          p(
            re,
            {
              class: `row no-wrap q-mx-lg text-primary text-body1 text-weight-light center-column`,
            },
            {
              default: D(() => [
                p(
                  x,
                  {
                    'enter-active-class': `animated fadeIn`,
                    'leave-active-class': `animated fadeOut`,
                    appear: ``,
                    duration: 300,
                  },
                  { default: D(() => [p(f)]), _: 1 }
                ),
              ]),
              _: 1,
            }
          ),
          n[3] || (n[3] = a(`div`, { style: { height: `30px` } }, null, -1)),
          p(
            ie,
            { class: `center-column` },
            {
              default: D(() => [
                p(
                  B,
                  { square: ``, flat: ``, bordered: `` },
                  {
                    default: D(() => [
                      p(q, null, {
                        default: D(() => [
                          p(q, null, {
                            default: D(() => [
                              p(
                                R,
                                {
                                  class: `q-px-none row justify-center q-gutter-y-sm`,
                                },
                                {
                                  default: D(() => [
                                    (A(!0),
                                    N(
                                      c,
                                      null,
                                      O(
                                        e.links,
                                        (t) => (
                                          A(),
                                          s(
                                            K,
                                            {
                                              key: t,
                                              class: y([`row`, e.$q.platform.is.mobile ? `full-width` : ``]),
                                              square: ``,
                                              outline: ``,
                                              color: `primary`,
                                              label: t.title,
                                              href: t.href,
                                              target: `_blank`,
                                            },
                                            null,
                                            8,
                                            [`class`, `label`, `href`]
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            }
          ),
        ]),
        _: 1,
      }
    )
  );
}
var de = k(ce, [[`render`, ue]]);
export { de as default };
