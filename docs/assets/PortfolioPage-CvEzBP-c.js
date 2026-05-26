import {
  B as e,
  E as t,
  F as n,
  H as r,
  I as i,
  J as a,
  L as o,
  M as s,
  N as c,
  O as l,
  Q as u,
  R as d,
  S as f,
  T as p,
  U as m,
  V as h,
  W as g,
  Y as _,
  _ as v,
  at as y,
  b,
  ft as x,
  h as S,
  it as C,
  j as w,
  lt as T,
  m as E,
  ot as D,
  r as O,
  rt as k,
  t as A,
  tt as j,
  u as M,
  w as N,
  y as P,
  z as F,
} from './index-D_28ZlK1.js';
import { _ as I, c as L, g as ee, o as te, y as R } from './use-align-N6v3efuN.js';
import { a as ne, i as re, n as ie, o as z, r as B, s as V, t as ae } from './QCard-CHtRT8kL.js';
import { n as H, r as oe, t as U } from './touch-E3Gpe5Yo.js';
import { n as W, t as G } from './use-timeout-OoMFTBih.js';
import { t as K } from './QPage-DcVqvjhH.js';
import { t as q } from './QBtn-DOKqzg_O.js';
import { t as J } from './QCardSection-BgT7BLU9.js';
var se = {
    true: `inset`,
    item: `item-inset`,
    'item-thumbnail': `item-thumbnail-inset`,
  },
  Y = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 },
  X = p({
    name: `QSeparator`,
    props: {
      ...V,
      spaced: [Boolean, String],
      inset: [Boolean, String],
      vertical: Boolean,
      color: String,
      size: String,
    },
    setup(e) {
      let t = z(e, m().proxy.$q),
        r = n(() => (e.vertical === !0 ? `vertical` : `horizontal`)),
        i = n(() => ` q-separator--${r.value}`),
        a = n(() => (e.inset === !1 ? `` : `${i.value}-${se[e.inset]}`)),
        o = n(
          () =>
            `q-separator${i.value}${a.value}` +
            (e.color === void 0 ? `` : ` bg-${e.color}`) +
            (t.value === !0 ? ` q-separator--dark` : ``)
        ),
        s = n(() => {
          let t = {};
          if ((e.size !== void 0 && (t[e.vertical === !0 ? `width` : `height`] = e.size), e.spaced !== !1)) {
            let n = e.spaced === !0 ? `${Y.md}px` : e.spaced in Y ? `${Y[e.spaced]}px` : e.spaced,
              r = e.vertical === !0 ? [`Left`, `Right`] : [`Top`, `Bottom`];
            t[`margin${r[0]}`] = t[`margin${r[1]}`] = n;
          }
          return t;
        });
      return () =>
        g(`hr`, {
          class: o.value,
          style: s.value,
          'aria-orientation': r.value,
        });
    },
  });
function ce(e) {
  let t = [0.06, 6, 50];
  return (
    typeof e == `string` &&
      e.length &&
      e.split(`:`).forEach((e, n) => {
        let r = parseFloat(e);
        r && (t[n] = r);
      }),
    t
  );
}
var le = t({
  name: `touch-swipe`,
  beforeMount(e, { value: t, arg: n, modifiers: r }) {
    if (r.mouse !== !0 && l.has.touch !== !0) return;
    let i = r.mouseCapture === !0 ? `Capture` : ``,
      a = {
        handler: t,
        sensitivity: ce(n),
        direction: U(r),
        noop: P,
        mouseStart(e) {
          H(e, a) &&
            v(e) &&
            (E(a, `temp`, [
              [document, `mousemove`, `move`, `notPassive${i}`],
              [document, `mouseup`, `end`, `notPassiveCapture`],
            ]),
            a.start(e, !0));
        },
        touchStart(e) {
          if (H(e, a)) {
            let t = e.target;
            (E(a, `temp`, [
              [t, `touchmove`, `move`, `notPassiveCapture`],
              [t, `touchcancel`, `end`, `notPassiveCapture`],
              [t, `touchend`, `end`, `notPassiveCapture`],
            ]),
              a.start(e));
          }
        },
        start(t, n) {
          l.is.firefox === !0 && f(e, !0);
          let r = b(t);
          a.event = {
            x: r.left,
            y: r.top,
            time: Date.now(),
            mouse: n === !0,
            dir: !1,
          };
        },
        move(e) {
          if (a.event === void 0) return;
          if (a.event.dir !== !1) {
            N(e);
            return;
          }
          let t = Date.now() - a.event.time;
          if (t === 0) return;
          let n = b(e),
            r = n.left - a.event.x,
            i = Math.abs(r),
            o = n.top - a.event.y,
            s = Math.abs(o);
          if (a.event.mouse !== !0) {
            if (i < a.sensitivity[1] && s < a.sensitivity[1]) {
              a.end(e);
              return;
            }
          } else if (window.getSelection().toString() !== ``) {
            a.end(e);
            return;
          } else if (i < a.sensitivity[2] && s < a.sensitivity[2]) return;
          let c = i / t,
            l = s / t;
          (a.direction.vertical === !0 &&
            i < s &&
            i < 100 &&
            l > a.sensitivity[0] &&
            (a.event.dir = o < 0 ? `up` : `down`),
            a.direction.horizontal === !0 &&
              i > s &&
              s < 100 &&
              c > a.sensitivity[0] &&
              (a.event.dir = r < 0 ? `left` : `right`),
            a.direction.up === !0 && i < s && o < 0 && i < 100 && l > a.sensitivity[0] && (a.event.dir = `up`),
            a.direction.down === !0 && i < s && o > 0 && i < 100 && l > a.sensitivity[0] && (a.event.dir = `down`),
            a.direction.left === !0 && i > s && r < 0 && s < 100 && c > a.sensitivity[0] && (a.event.dir = `left`),
            a.direction.right === !0 && i > s && r > 0 && s < 100 && c > a.sensitivity[0] && (a.event.dir = `right`),
            a.event.dir === !1
              ? a.end(e)
              : (N(e),
                a.event.mouse === !0 &&
                  (document.body.classList.add(`no-pointer-events--children`),
                  document.body.classList.add(`non-selectable`),
                  W(),
                  (a.styleCleanup = (e) => {
                    ((a.styleCleanup = void 0), document.body.classList.remove(`non-selectable`));
                    let t = () => {
                      document.body.classList.remove(`no-pointer-events--children`);
                    };
                    e === !0 ? setTimeout(t, 50) : t();
                  })),
                a.handler({
                  evt: e,
                  touch: a.event.mouse !== !0,
                  mouse: a.event.mouse,
                  direction: a.event.dir,
                  duration: t,
                  distance: { x: i, y: s },
                })));
        },
        end(t) {
          var n;
          a.event !== void 0 &&
            (S(a, `temp`),
            l.is.firefox === !0 && f(e, !1),
            (n = a.styleCleanup) == null || n.call(a, !0),
            t !== void 0 && a.event.dir !== !1 && N(t),
            (a.event = void 0));
        },
      };
    ((e.__qtouchswipe = a),
      r.mouse === !0 &&
        E(a, `main`, [
          [e, `mousedown`, `mouseStart`, `passive${r.mouseCapture === !0 || r.mousecapture === !0 ? `Capture` : ``}`],
        ]),
      l.has.touch === !0 &&
        E(a, `main`, [
          [e, `touchstart`, `touchStart`, `passive${r.capture === !0 ? `Capture` : ``}`],
          [e, `touchmove`, `noop`, `notPassiveCapture`],
        ]));
  },
  updated(e, t) {
    let n = e.__qtouchswipe;
    n !== void 0 &&
      (t.oldValue !== t.value && (typeof t.value != `function` && n.end(), (n.handler = t.value)),
      (n.direction = U(t.modifiers)));
  },
  beforeUnmount(e) {
    let t = e.__qtouchswipe;
    if (t !== void 0) {
      var n;
      (S(t, `main`),
        S(t, `temp`),
        l.is.firefox === !0 && f(e, !1),
        (n = t.styleCleanup) == null || n.call(t),
        delete e.__qtouchswipe);
    }
  },
});
function ue() {
  let e = Object.create(null);
  return {
    getCache: (t, n) => (e[t] === void 0 ? (e[t] = typeof n == `function` ? n() : n) : e[t]),
    setCache(t, n) {
      e[t] = n;
    },
    hasCache(t) {
      return Object.hasOwnProperty.call(e, t);
    },
    clearCache(t) {
      t === void 0 ? (e = Object.create(null)) : delete e[t];
    },
  };
}
var de = { name: { required: !0 }, disable: Boolean },
  Z = {
    setup(e, { slots: t }) {
      return () => g(`div`, { class: `q-panel scroll`, role: `tabpanel` }, R(t.default));
    },
  },
  fe = {
    modelValue: { required: !0 },
    animated: Boolean,
    infinite: Boolean,
    swipeable: Boolean,
    vertical: Boolean,
    transitionPrev: String,
    transitionNext: String,
    transitionDuration: { type: [String, Number], default: 300 },
    keepAlive: Boolean,
    keepAliveInclude: [String, Array, RegExp],
    keepAliveExclude: [String, Array, RegExp],
    keepAliveMax: Number,
  },
  pe = [`update:modelValue`, `beforeTransition`, `transition`];
function Q() {
  let { props: e, emit: t, proxy: r } = m(),
    { getCache: i } = ue(),
    { registerTimeout: a } = G(),
    o,
    s,
    l = T(null),
    u = { value: null };
  function d(t) {
    let n = e.vertical === !0 ? `up` : `left`;
    j((r.$q.lang.rtl === !0 ? -1 : 1) * (t.direction === n ? 1 : -1));
  }
  let f = n(() => [[le, d, void 0, { horizontal: e.vertical !== !0, vertical: e.vertical, mouse: !0 }]]),
    p = n(() => e.transitionPrev || `slide-${e.vertical === !0 ? `down` : `right`}`),
    h = n(() => e.transitionNext || `slide-${e.vertical === !0 ? `up` : `left`}`),
    _ = n(() => `--q-transition-duration: ${e.transitionDuration}ms`),
    v = n(() =>
      typeof e.modelValue == `string` || typeof e.modelValue == `number` ? e.modelValue : String(e.modelValue)
    ),
    b = n(() => ({
      include: e.keepAliveInclude,
      exclude: e.keepAliveExclude,
      max: e.keepAliveMax,
    })),
    x = n(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
  y(
    () => e.modelValue,
    (n, r) => {
      let i = D(n) === !0 ? O(n) : -1;
      (s !== !0 && A(i === -1 ? 0 : i < O(r) ? -1 : 1),
        u.value !== i &&
          ((u.value = i),
          t(`beforeTransition`, n, r),
          a(() => {
            t(`transition`, n, r);
          }, e.transitionDuration)));
    }
  );
  function S() {
    j(1);
  }
  function C() {
    j(-1);
  }
  function E(e) {
    t(`update:modelValue`, e);
  }
  function D(e) {
    return e != null && e !== ``;
  }
  function O(e) {
    return o.findIndex((t) => t.props.name === e && t.props.disable !== `` && t.props.disable !== !0);
  }
  function k() {
    return o.filter((e) => e.props.disable !== `` && e.props.disable !== !0);
  }
  function A(t) {
    let n = t !== 0 && e.animated === !0 && u.value !== -1 ? `q-transition--` + (t === -1 ? p.value : h.value) : null;
    l.value !== n && (l.value = n);
  }
  function j(n, r = u.value) {
    let i = r + n;
    for (; i !== -1 && i < o.length; ) {
      let e = o[i];
      if (e !== void 0 && e.props.disable !== `` && e.props.disable !== !0) {
        (A(n),
          (s = !0),
          t(`update:modelValue`, e.props.name),
          setTimeout(() => {
            s = !1;
          }));
        return;
      }
      i += n;
    }
    e.infinite === !0 && o.length !== 0 && r !== -1 && r !== o.length && j(n, n === -1 ? o.length : -1);
  }
  function M() {
    let t = O(e.modelValue);
    return (u.value !== t && (u.value = t), !0);
  }
  function N() {
    let t = D(e.modelValue) === !0 && M() && o[u.value];
    return e.keepAlive === !0
      ? [
          g(c, b.value, [
            g(
              x.value === !0 ? i(v.value, () => ({ ...Z, name: v.value })) : Z,
              { key: v.value, style: _.value },
              () => t
            ),
          ]),
        ]
      : [
          g(
            `div`,
            {
              class: `q-panel scroll`,
              style: _.value,
              key: v.value,
              role: `tabpanel`,
            },
            [t]
          ),
        ];
  }
  function P() {
    if (o.length !== 0) return e.animated === !0 ? [g(w, { name: l.value }, N)] : N();
  }
  function F(e) {
    return (
      (o = te(R(e.default, [])).filter((e) => e.props !== null && e.props.slot === void 0 && D(e.props.name) === !0)),
      o.length
    );
  }
  function I() {
    return o;
  }
  return (
    Object.assign(r, { next: S, previous: C, goTo: E }),
    {
      panelIndex: u,
      panelDirectives: f,
      updatePanelsList: F,
      updatePanelIndex: M,
      getPanelContent: P,
      getEnabledPanels: k,
      getPanels: I,
      isValidPanelName: D,
      keepAliveProps: b,
      needsUniqueKeepAliveWrapper: x,
      goToPanelByOffset: j,
      goToPanel: E,
      nextPanel: S,
      previousPanel: C,
    }
  );
}
var me = p({
    name: `QCarouselSlide`,
    props: { ...de, imgSrc: String },
    setup(e, { slots: t }) {
      let r = n(() => (e.imgSrc ? { backgroundImage: `url("${e.imgSrc}")` } : {}));
      return () => g(`div`, { class: `q-carousel__slide`, style: r.value }, R(t.default));
    },
  }),
  $ = 0,
  he = { fullscreen: Boolean, noRouteFullscreenExit: Boolean },
  ge = [`update:fullscreen`, `fullscreen`];
function _e() {
  let e = m(),
    { props: t, emit: n, proxy: r } = e,
    i,
    o,
    s,
    c = T(!1);
  (L(e) === !0 &&
    y(
      () => r.$route.fullPath,
      () => {
        t.noRouteFullscreenExit !== !0 && f();
      }
    ),
    y(
      () => t.fullscreen,
      (e) => {
        c.value !== e && l();
      }
    ),
    y(c, (e) => {
      (n(`update:fullscreen`, e), n(`fullscreen`, e));
    }));
  function l() {
    c.value === !0 ? f() : d();
  }
  function d() {
    c.value !== !0 &&
      ((c.value = !0),
      (s = r.$el.parentNode),
      s.replaceChild(o, r.$el),
      document.body.appendChild(r.$el),
      $++,
      $ === 1 && document.body.classList.add(`q-body--fullscreen-mixin`),
      (i = { handler: f }),
      M.add(i));
  }
  function f() {
    c.value === !0 &&
      (i !== void 0 && (M.remove(i), (i = void 0)),
      s.replaceChild(r.$el, o),
      (c.value = !1),
      ($ = Math.max(0, $ - 1)),
      $ === 0 &&
        (document.body.classList.remove(`q-body--fullscreen-mixin`),
        r.$el.scrollIntoView !== void 0 &&
          setTimeout(() => {
            r.$el.scrollIntoView();
          })));
  }
  return (
    a(() => {
      o = document.createElement(`span`);
    }),
    u(() => {
      t.fullscreen === !0 && d();
    }),
    _(f),
    Object.assign(r, {
      toggleFullscreen: l,
      setFullscreen: d,
      exitFullscreen: f,
    }),
    { inFullscreen: c, toggleFullscreen: l }
  );
}
var ve = [`top`, `right`, `bottom`, `left`],
  ye = [`regular`, `flat`, `outline`, `push`, `unelevated`],
  be = p({
    name: `QCarousel`,
    props: {
      ...V,
      ...fe,
      ...he,
      transitionPrev: { type: String, default: `fade` },
      transitionNext: { type: String, default: `fade` },
      height: String,
      padding: Boolean,
      controlColor: String,
      controlTextColor: String,
      controlType: {
        type: String,
        validator: (e) => ye.includes(e),
        default: `flat`,
      },
      autoplay: [Number, Boolean],
      arrows: Boolean,
      prevIcon: String,
      nextIcon: String,
      navigation: Boolean,
      navigationPosition: { type: String, validator: (e) => ve.includes(e) },
      navigationIcon: String,
      navigationActiveIcon: String,
      thumbnails: Boolean,
    },
    emits: [...ge, ...pe],
    setup(e, { slots: t }) {
      let {
          proxy: { $q: r },
        } = m(),
        i = z(e, r),
        a = null,
        o,
        {
          updatePanelsList: s,
          getPanelContent: c,
          panelDirectives: l,
          goToPanel: d,
          previousPanel: f,
          nextPanel: p,
          getEnabledPanels: h,
          panelIndex: v,
        } = Q(),
        { inFullscreen: b } = _e(),
        x = n(() => (b.value !== !0 && e.height !== void 0 ? { height: e.height } : {})),
        S = n(() => (e.vertical === !0 ? `vertical` : `horizontal`)),
        C = n(() => e.navigationPosition || (e.vertical === !0 ? `right` : `bottom`)),
        w = n(
          () =>
            `q-carousel q-panel-parent q-carousel--with${e.padding === !0 ? `` : `out`}-padding` +
            (b.value === !0 ? ` fullscreen` : ``) +
            (i.value === !0 ? ` q-carousel--dark q-dark` : ``) +
            (e.arrows === !0 ? ` q-carousel--arrows-${S.value}` : ``) +
            (e.navigation === !0 ? ` q-carousel--navigation-${C.value}` : ``)
        ),
        T = n(() => {
          let t = [
            e.prevIcon || r.iconSet.carousel[e.vertical === !0 ? `up` : `left`],
            e.nextIcon || r.iconSet.carousel[e.vertical === !0 ? `down` : `right`],
          ];
          return e.vertical === !1 && r.lang.rtl === !0 ? t.reverse() : t;
        }),
        E = n(() => e.navigationIcon || r.iconSet.carousel.navigationIcon),
        D = n(() => e.navigationActiveIcon || E.value),
        k = n(() => ({
          color: e.controlColor,
          textColor: e.controlTextColor,
          round: !0,
          [e.controlType]: !0,
          dense: !0,
        }));
      (y(
        () => e.modelValue,
        () => {
          e.autoplay && A();
        }
      ),
        y(
          () => e.autoplay,
          (e) => {
            e ? A() : a !== null && (clearTimeout(a), (a = null));
          }
        ));
      function A() {
        let t = O(e.autoplay) === !0 ? Math.abs(e.autoplay) : 5e3;
        (a !== null && clearTimeout(a),
          (a = setTimeout(() => {
            ((a = null), t >= 0 ? p() : f());
          }, t)));
      }
      (u(() => {
        e.autoplay && A();
      }),
        _(() => {
          a !== null && clearTimeout(a);
        }));
      function j(t, n) {
        return g(
          `div`,
          {
            class:
              `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${t} q-carousel__navigation--${C.value}` +
              (e.controlColor === void 0 ? `` : ` text-${e.controlColor}`),
          },
          [
            g(
              `div`,
              {
                class: `q-carousel__navigation-inner flex flex-center no-wrap`,
              },
              h().map(n)
            ),
          ]
        );
      }
      function M() {
        let n = [];
        if (e.navigation === !0) {
          let e =
              t[`navigation-icon`] === void 0
                ? (e) =>
                    g(q, {
                      key: `nav` + e.name,
                      class: `q-carousel__navigation-icon q-carousel__navigation-icon--${e.active === !0 ? `` : `in`}active`,
                      ...e.btnProps,
                      onClick: e.onClick,
                    })
                : t[`navigation-icon`],
            r = o - 1;
          n.push(
            j(`buttons`, (t, n) => {
              let i = t.props.name,
                a = v.value === n;
              return e({
                index: n,
                maxIndex: r,
                name: i,
                active: a,
                btnProps: {
                  icon: a === !0 ? D.value : E.value,
                  size: `sm`,
                  ...k.value,
                },
                onClick: () => {
                  d(i);
                },
              });
            })
          );
        } else if (e.thumbnails === !0) {
          let t = e.controlColor === void 0 ? `` : ` text-${e.controlColor}`;
          n.push(
            j(`thumbnails`, (n) => {
              let r = n.props;
              return g(`img`, {
                key: `tmb#` + r.name,
                class: `q-carousel__thumbnail q-carousel__thumbnail--${r.name === e.modelValue ? `` : `in`}active` + t,
                src: r.imgSrc || r[`img-src`],
                onClick: () => {
                  d(r.name);
                },
              });
            })
          );
        }
        return (
          e.arrows === !0 &&
            v.value >= 0 &&
            ((e.infinite === !0 || v.value > 0) &&
              n.push(
                g(
                  `div`,
                  {
                    key: `prev`,
                    class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${S.value} absolute flex flex-center`,
                  },
                  [g(q, { icon: T.value[0], ...k.value, onClick: f })]
                )
              ),
            (e.infinite === !0 || v.value < o - 1) &&
              n.push(
                g(
                  `div`,
                  {
                    key: `next`,
                    class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${S.value} absolute flex flex-center`,
                  },
                  [g(q, { icon: T.value[1], ...k.value, onClick: p })]
                )
              )),
          I(t.control, n)
        );
      }
      return () => (
        (o = s(t)),
        g(
          `div`,
          { class: w.value, style: x.value },
          [ee(`div`, { class: `q-carousel__slides-container` }, c(), `sl-cont`, e.swipeable, () => l.value)].concat(M())
        )
      );
    },
  }),
  xe = r({
    name: `PortfolioItem`,
    components: {},
    methods: {},
    props: [`title`, `subtitle`, `description`, `slides`, `tags`, `actions`],
    data() {
      return { slide: 0 };
    },
    mounted() {},
  }),
  Se = {
    key: 0,
    class: `row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap`,
    style: { overflow: `hidden` },
  },
  Ce = [`src`],
  we = { class: `no-wrap items-center` },
  Te = { class: `text-h4 text-primary` },
  Ee = { class: `text-subtitle1 text-accent text-italic` },
  De = { class: `q-pt-none text-primary` };
function Oe(t, n, r, a, c, l) {
  return (
    j(),
    o(
      ae,
      { class: `bg-white`, id: t.title, square: ``, flat: ``, bordered: `` },
      {
        default: D(() => [
          h(
            J,
            {
              horizontal: t.$q.screen.width > t.$q.screen.height,
              class: `full-height q-pa-none`,
            },
            {
              default: D(() => [
                h(
                  be,
                  {
                    modelValue: t.slide,
                    'onUpdate:modelValue': n[0] || (n[0] = (e) => (t.slide = e)),
                    swipeable: ``,
                    animated: ``,
                    navigation: t.slides.length > 1,
                    'transition-prev': `slide-right`,
                    'transition-next': `slide-left`,
                    'control-type': `flat`,
                    'control-color': `accent`,
                    class: `col-6`,
                    style: { 'min-height': `300px` },
                  },
                  {
                    'navigation-icon': D(({ active: e, onClick: t }) => [
                      h(
                        q,
                        {
                          square: ``,
                          outline: ``,
                          color: e ? `white` : `primary`,
                          onClick: t,
                          icon: ``,
                        },
                        null,
                        8,
                        [`color`, `onClick`]
                      ),
                    ]),
                    default: D(() => [
                      (j(!0),
                      F(
                        s,
                        null,
                        k(
                          t.slides,
                          (e, t) => (
                            j(),
                            o(
                              me,
                              {
                                class: `column no-wrap q-pa-none`,
                                key: t,
                                name: t,
                                'img-src': e.res,
                                style: { 'background-color': `black` },
                              },
                              {
                                default: D(() => [
                                  e.type == `video`
                                    ? (j(),
                                      F(`div`, Se, [
                                        i(
                                          `video`,
                                          {
                                            ref_for: !0,
                                            ref: `video`,
                                            style: {
                                              width: `100%`,
                                              height: `506px`,
                                            },
                                            autoplay: ``,
                                            loop: ``,
                                            height: `506`,
                                            src: e.res,
                                            muted: ``,
                                          },
                                          null,
                                          8,
                                          Ce
                                        ),
                                      ]))
                                    : d(``, !0),
                                ]),
                                _: 2,
                              },
                              1032,
                              [`name`, `img-src`]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    _: 1,
                  },
                  8,
                  [`modelValue`, `navigation`]
                ),
                h(J, null, {
                  default: D(() => [
                    h(J, null, {
                      default: D(() => [
                        i(`div`, we, [i(`div`, Te, x(t.title), 1)]),
                        i(`div`, Ee, x(t.subtitle), 1),
                        i(`div`, De, x(t.description), 1),
                        (j(!0),
                        F(
                          s,
                          null,
                          k(
                            t.tags,
                            (t) => (
                              j(),
                              o(
                                oe,
                                {
                                  key: t,
                                  outline: ``,
                                  dense: ``,
                                  ripple: !1,
                                  class: `no-border-radius q-ml-none`,
                                  color: `primary`,
                                },
                                { default: D(() => [e(x(t), 1)]), _: 2 },
                                1024
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      _: 1,
                    }),
                    h(X),
                    h(J, null, {
                      default: D(() => [
                        h(
                          ie,
                          { class: `q-px-none` },
                          {
                            default: D(() => [
                              (j(!0),
                              F(
                                s,
                                null,
                                k(
                                  t.actions,
                                  (e) => (
                                    j(),
                                    o(
                                      q,
                                      {
                                        square: ``,
                                        outline: ``,
                                        color: `primary`,
                                        key: e.title,
                                        label: e.title,
                                        onClick: e.click,
                                      },
                                      null,
                                      8,
                                      [`label`, `onClick`]
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
            },
            8,
            [`horizontal`]
          ),
        ]),
        _: 1,
      },
      8,
      [`id`]
    )
  );
}
var ke = A(xe, [[`render`, Oe]]),
  Ae = r({
    name: `WorkItem`,
    components: {},
    methods: {},
    props: [`title`, `period`, `points`],
    data() {
      return {};
    },
  });
function je(t, n, r, a, c, l) {
  return (
    j(),
    o(
      ne,
      { class: `q-px-none` },
      {
        default: D(() => [
          h(re, null, {
            default: D(() => [
              h(B, { class: `text-h6` }, { default: D(() => [e(x(t.title), 1)]), _: 1 }),
              h(B, { caption: `` }, { default: D(() => [e(x(t.period), 1)]), _: 1 }),
              h(B, null, {
                default: D(() => [
                  i(`ul`, null, [
                    (j(!0),
                    F(
                      s,
                      null,
                      k(t.points, (e) => (j(), F(`li`, { key: e }, x(e), 1))),
                      128
                    )),
                  ]),
                ]),
                _: 1,
              }),
            ]),
            _: 1,
          }),
        ]),
        _: 1,
      }
    )
  );
}
var Me = r({
    name: `PortfolioPage`,
    components: { PortfolioItem: ke, WorkItem: A(Ae, [[`render`, je]]) },
    data() {
      return {
        portfolioItems: [
          {
            title: `Physarum WebGL Simulation`,
            subtitle: `A small implementation of Physarum Polycephalum movement in WebGL`,
            description: `
          Physarum Polycephalum is a single-celled organism which, within large networks, can together exhibit many complex and intelligent locomotive behaviours.
          The project involved creating webGL shaders to simulate 100,000s of 'agents', each with a set of simple navigational rules, on the GPU to create complex collective behaviour.
          `,
            slides: [
              { type: `video`, res: `portfolio/slime_vid_0.mp4`, caption: `` },
              { type: `img`, res: `portfolio/slime_img_0.webp`, caption: `` },
              { type: `img`, res: `portfolio/slime_img_1.webp`, caption: `` },
            ],
            tags: [`JS`, `WebGL`],
            actions: [
              {
                title: `Details`,
                click: () => {
                  this.$router.push(`/physarum`);
                },
              },
              {
                title: `View source on Github`,
                click: () => {
                  window.open(
                    `https://github.com/FelixBenter/felixbenter.github.io/tree/main/src/components/slime_sim`,
                    `_blank`
                  );
                },
              },
            ],
            slide: 0,
          },
          {
            title: `Blender DCX Importer`,
            subtitle: `A Blender plugin for importing Fromsoft DCX files`,
            description: `
          An add-on for the 3D modelling program Blender to import proprietary model and texture files from FromSoftware video games.
          The tool unpacks the input files and loads mesh data, armature data and finds the appropriate texture data for that model.
          It then loads these items into Blender and applies the armature and texture data into a rigged and textured blender model.
          `,
            slides: [
              {
                type: `img`,
                res: `portfolio/dcximporter_img_0.webp`,
                caption: ``,
              },
            ],
            tags: [`Python`],
            actions: [
              {
                title: `Details`,
                click: () => {
                  this.$router.push(`/dcximporter`);
                },
              },
              {
                title: `View source on Github`,
                click: () => {
                  window.open(`https://github.com/FelixBenter/FromSoftware-Blender-Importer`, `_blank`);
                },
              },
            ],
            slide: 0,
          },
        ],
        workItems: [
          {
            title: `Software Developer at Pairtree Intelligence`,
            period: `Feb 2021 - present`,
            points: [
              `Developed and maintained data feed pipelines and backend structure using C# and PostgreSQL.`,
              `Led the development and transition to a new customer facing UI project involving Vue3 (Quasar) & Axios.`,
              `Developed and maintained internal & external APIs in a controller-service-repository pattern using .NET.`,
              `Built advanced geospatial analysis and visualisation features using postGIS, GDAL and Leaflet.`,
              `Created and configured build pipelines using Jenkins.`,
              `Collaborated with team members and worked closely with clients to refine solutions based on evolving requirements. Lead the development of multiple large projects with clients and developed large sections of e2e solutions, involve the Department of Primary Industries and Syngenta Australia.`,
            ],
          },
        ],
      };
    },
  }),
  Ne = { class: `q-mt-none q-mb-none` },
  Pe = { class: `q-gutter-y-lg` },
  Fe = { class: `q-gutter-y-lg` };
function Ie(e, t, n, r, a, c) {
  let l = C(`WorkItem`),
    u = C(`PortfolioItem`);
  return (
    j(),
    o(K, null, {
      default: D(() => [
        i(`div`, Ne, [
          t[0] || (t[0] = i(`div`, { class: `text-h4` }, `Current Work`, -1)),
          h(X),
          i(`div`, Pe, [
            (j(!0),
            F(
              s,
              null,
              k(
                e.workItems,
                (e) => (
                  j(),
                  o(
                    l,
                    {
                      key: e,
                      title: e.title,
                      period: e.period,
                      points: e.points,
                    },
                    null,
                    8,
                    [`title`, `period`, `points`]
                  )
                )
              ),
              128
            )),
          ]),
          t[1] || (t[1] = i(`div`, { class: `text-h4` }, `Personal Projects`, -1)),
          h(X),
          t[2] || (t[2] = i(`br`, null, null, -1)),
          i(`div`, Fe, [
            (j(!0),
            F(
              s,
              null,
              k(
                e.portfolioItems,
                (e) => (
                  j(),
                  o(
                    u,
                    {
                      key: e,
                      title: e.title,
                      subtitle: e.subtitle,
                      description: e.description,
                      slides: e.slides,
                      tags: e.tags,
                      actions: e.actions,
                    },
                    null,
                    8,
                    [`title`, `subtitle`, `description`, `slides`, `tags`, `actions`]
                  )
                )
              ),
              128
            )),
          ]),
        ]),
      ]),
      _: 1,
    })
  );
}
var Le = A(Me, [[`render`, Ie]]);
export { Le as default };
