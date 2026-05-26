import {
  $ as e,
  A as t,
  F as n,
  K as r,
  O as i,
  P as a,
  Q as o,
  T as s,
  U as c,
  W as l,
  Y as u,
  Z as d,
  a as f,
  at as p,
  d as m,
  h,
  lt as g,
  m as _,
  v,
  x as y,
} from './index-D_28ZlK1.js';
import { c as b, l as x, s as S } from './use-align-N6v3efuN.js';
import { n as ee } from './use-timeout-OoMFTBih.js';
import { r as C } from './scroll-CiTZFIdM.js';
var w = [],
  T = [];
function E(e) {
  T = T.filter((t) => t !== e);
}
function te(e) {
  (E(e), T.push(e));
}
function D(e) {
  (E(e), T.length === 0 && w.length !== 0 && (w[w.length - 1](), (w = [])));
}
function ne(e) {
  T.length === 0 ? e() : w.push(e);
}
function re(e) {
  w = w.filter((t) => t !== e);
}
var O = {
    target: { type: [Boolean, String, Element], default: !0 },
    noParentEvent: Boolean,
  },
  ie = { ...O, contextMenu: Boolean };
function ae({ showing: e, avoidEmit: t, configureAnchorEl: n }) {
  let { props: i, proxy: a, emit: s } = c(),
    l = g(null),
    d = null;
  function f(e) {
    return l.value === null ? !1 : e === void 0 || e.touches === void 0 || e.touches.length <= 1;
  }
  let v = {};
  n === void 0 &&
    (Object.assign(v, {
      hide(e) {
        a.hide(e);
      },
      toggle(e) {
        (a.toggle(e), (e.qAnchorHandled = !0));
      },
      toggleKey(e) {
        m(e, 13) === !0 && v.toggle(e);
      },
      contextClick(e) {
        (a.hide(e),
          y(e),
          r(() => {
            (a.show(e), (e.qAnchorHandled = !0));
          }));
      },
      prevent: y,
      mobileTouch(e) {
        if ((v.mobileCleanup(e), f(e) !== !0)) return;
        (a.hide(e), l.value.classList.add(`non-selectable`));
        let t = e.target;
        (_(v, `anchor`, [
          [t, `touchmove`, `mobileCleanup`, `passive`],
          [t, `touchend`, `mobileCleanup`, `passive`],
          [t, `touchcancel`, `mobileCleanup`, `passive`],
          [l.value, `contextmenu`, `prevent`, `notPassive`],
        ]),
          (d = setTimeout(() => {
            ((d = null), a.show(e), (e.qAnchorHandled = !0));
          }, 300)));
      },
      mobileCleanup(t) {
        (l.value.classList.remove(`non-selectable`),
          d !== null && (clearTimeout(d), (d = null)),
          e.value === !0 && t !== void 0 && ee());
      },
    }),
    (n = function (e = i.contextMenu) {
      if (i.noParentEvent === !0 || l.value === null) return;
      let t;
      ((t =
        e === !0
          ? a.$q.platform.is.mobile === !0
            ? [[l.value, `touchstart`, `mobileTouch`, `passive`]]
            : [
                [l.value, `mousedown`, `hide`, `passive`],
                [l.value, `contextmenu`, `contextClick`, `notPassive`],
              ]
          : [
              [l.value, `click`, `toggle`, `passive`],
              [l.value, `keyup`, `toggleKey`, `passive`],
            ]),
        _(v, `anchor`, t));
    }));
  function b() {
    h(v, `anchor`);
  }
  function x(e) {
    for (l.value = e; l.value.classList.contains(`q-anchor--skip`); ) l.value = l.value.parentNode;
    n();
  }
  function S() {
    if (i.target === !1 || i.target === `` || a.$el.parentNode === null) l.value = null;
    else if (i.target === !0) x(a.$el.parentNode);
    else {
      let e = i.target;
      if (typeof i.target == `string`)
        try {
          e = document.querySelector(i.target);
        } catch {
          e = void 0;
        }
      e == null
        ? ((l.value = null), console.error(`Anchor: target "${i.target}" not found`))
        : ((l.value = e.$el || e), n());
    }
  }
  return (
    p(
      () => i.contextMenu,
      (e) => {
        l.value !== null && (b(), n(e));
      }
    ),
    p(
      () => i.target,
      () => {
        (l.value !== null && b(), S());
      }
    ),
    p(
      () => i.noParentEvent,
      (e) => {
        l.value !== null && (e === !0 ? b() : n());
      }
    ),
    o(() => {
      (S(), t !== !0 && i.modelValue === !0 && l.value === null && s(`update:modelValue`, !1));
    }),
    u(() => {
      (d !== null && clearTimeout(d), b());
    }),
    { anchorEl: l, canShow: f, anchorEvents: v }
  );
}
function oe(e, t) {
  let n = g(null),
    r;
  function i(e, t) {
    let n = `${t === void 0 ? `remove` : `add`}EventListener`,
      i = t === void 0 ? r : t;
    (e !== window && e[n](`scroll`, i, v.passive), window[n](`scroll`, i, v.passive), (r = t));
  }
  function a() {
    n.value !== null && (i(n.value), (n.value = null));
  }
  return (
    u(
      p(
        () => e.noParentEvent,
        () => {
          n.value !== null && (a(), t());
        }
      )
    ),
    { localScrollTarget: n, unconfigureScrollTarget: a, changeScrollEvent: i }
  );
}
var k = {
    modelValue: { type: Boolean, default: null },
    'onUpdate:modelValue': [Function, Array],
  },
  se = [`beforeShow`, `show`, `beforeHide`, `hide`];
function A({ showing: e, canShow: t, hideOnRouteChange: n, handleShow: i, handleHide: a, processOnMount: s }) {
  let l = c(),
    { props: u, emit: d, proxy: f } = l,
    m;
  function h(t) {
    e.value === !0 ? v(t) : g(t);
  }
  function g(e) {
    if (u.disable === !0 || (e == null ? void 0 : e.qAnchorHandled) === !0 || (t !== void 0 && t(e) !== !0)) return;
    let n = u[`onUpdate:modelValue`] !== void 0;
    (n === !0 &&
      (d(`update:modelValue`, !0),
      (m = e),
      r(() => {
        m === e && (m = void 0);
      })),
      (u.modelValue === null || n === !1) && _(e));
  }
  function _(t) {
    e.value !== !0 && ((e.value = !0), d(`beforeShow`, t), i === void 0 ? d(`show`, t) : i(t));
  }
  function v(e) {
    if (u.disable === !0) return;
    let t = u[`onUpdate:modelValue`] !== void 0;
    (t === !0 &&
      (d(`update:modelValue`, !1),
      (m = e),
      r(() => {
        m === e && (m = void 0);
      })),
      (u.modelValue === null || t === !1) && y(e));
  }
  function y(t) {
    e.value !== !1 && ((e.value = !1), d(`beforeHide`, t), a === void 0 ? d(`hide`, t) : a(t));
  }
  function x(t) {
    u.disable === !0 && t === !0
      ? u[`onUpdate:modelValue`] !== void 0 && d(`update:modelValue`, !1)
      : (t === !0) !== e.value && (t === !0 ? _ : y)(m);
  }
  (p(() => u.modelValue, x),
    n !== void 0 &&
      b(l) === !0 &&
      p(
        () => f.$route.fullPath,
        () => {
          n.value === !0 && e.value === !0 && v();
        }
      ),
    s === !0 &&
      o(() => {
        x(u.modelValue);
      }));
  let S = { show: g, hide: v, toggle: h };
  return (Object.assign(f, S), S);
}
var j = [],
  M = [],
  ce = 1,
  le = document.body;
function ue(e, t) {
  let n = document.createElement(`div`);
  if (((n.id = t === void 0 ? e : `q-portal--${t}--${ce++}`), f.globalNodes !== void 0)) {
    let e = f.globalNodes.class;
    e !== void 0 && (n.className = e);
  }
  return (le.appendChild(n), j.push(n), M.push(t), n);
}
function de(e) {
  let t = j.indexOf(e);
  (j.splice(t, 1), M.splice(t, 1), e.remove());
}
var N = [];
function P(e, t) {
  do {
    if (e.$options.name === `QMenu`) {
      if ((e.hide(t), e.$props.separateClosePopup === !0)) return S(e);
    } else if (e.__qPortal === !0) {
      let n = S(e);
      return (n == null ? void 0 : n.$options.name) === `QPopupProxy` ? (e.hide(t), n) : e;
    }
    e = S(e);
  } while (e != null);
}
var F = s({
  name: `QPortal`,
  setup(e, { slots: t }) {
    return () => t.default();
  },
});
function I(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === `QGlobalDialog`) return !0;
    if (e.type.name === `QDialog` || e.type.name === `QMenu`) return !1;
    e = e.parent;
  }
  return !1;
}
function L(n, r, i, o) {
  let s = g(!1),
    c = g(!1),
    u = null,
    d = {},
    f = o === `dialog` && I(n);
  function p(e) {
    if (e === !0) {
      (D(d), (c.value = !0));
      return;
    }
    ((c.value = !1),
      s.value === !1 && (f === !1 && u === null && (u = ue(!1, o)), (s.value = !0), N.push(n.proxy), te(d)));
  }
  function m(e) {
    if (((c.value = !1), e !== !0)) return;
    (D(d), (s.value = !1));
    let t = N.indexOf(n.proxy);
    (t !== -1 && N.splice(t, 1), u !== null && (de(u), (u = null)));
  }
  return (
    e(() => {
      m(!0);
    }),
    (n.proxy.__qPortal = !0),
    t(n.proxy, `contentEl`, () => r.value),
    {
      showPortal: p,
      hidePortal: m,
      portalIsActive: s,
      portalIsAccessible: c,
      renderPortal: () => (f === !0 ? i() : s.value === !0 ? [l(a, { to: u }, l(F, i))] : void 0),
    }
  );
}
var R = {
  transitionShow: { type: String, default: `fade` },
  transitionHide: { type: String, default: `fade` },
  transitionDuration: { type: [String, Number], default: 300 },
};
function z(e, t = () => {}, r = () => {}) {
  return {
    transitionProps: n(() => {
      let n = `q-transition--${e.transitionShow || t()}`,
        i = `q-transition--${e.transitionHide || r()}`;
      return {
        appear: !0,
        enterFromClass: `${n}-enter-from`,
        enterActiveClass: `${n}-enter-active`,
        enterToClass: `${n}-enter-to`,
        leaveFromClass: `${i}-leave-from`,
        leaveActiveClass: `${i}-leave-active`,
        leaveToClass: `${i}-leave-to`,
      };
    }),
    transitionStyle: n(() => `--q-transition-duration: ${e.transitionDuration}ms`),
  };
}
function B() {
  let e,
    t = c();
  function n() {
    e = void 0;
  }
  return (
    d(n),
    u(n),
    {
      removeTick: n,
      registerTick(n) {
        ((e = n),
          r(() => {
            e === n && (x(t) === !1 && e(), (e = void 0));
          }));
      },
    }
  );
}
var V = [];
function H(e) {
  V[V.length - 1](e);
}
function U(e) {
  i.is.desktop === !0 && (V.push(e), V.length === 1 && document.body.addEventListener(`focusin`, H));
}
function fe(e) {
  let t = V.indexOf(e);
  t !== -1 && (V.splice(t, 1), V.length === 0 && document.body.removeEventListener(`focusin`, H));
}
var W = null,
  { notPassiveCapture: G } = v,
  K = [];
function q(e) {
  W !== null && (clearTimeout(W), (W = null));
  let t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains(`no-pointer-events`) === !0) return;
  let n = N.length - 1;
  for (; n >= 0; ) {
    let e = N[n].$;
    if (e.type.name === `QTooltip`) {
      n--;
      continue;
    }
    if (e.type.name !== `QDialog`) break;
    if (e.props.seamless !== !0) return;
    n--;
  }
  for (let n = K.length - 1; n >= 0; n--) {
    let r = K[n];
    if (
      (r.anchorEl.value === null || r.anchorEl.value.contains(t) === !1) &&
      (t === document.body || (r.innerRef.value !== null && r.innerRef.value.contains(t) === !1))
    )
      ((e.qClickOutside = !0), r.onClickOutside(e));
    else return;
  }
}
function pe(e) {
  (K.push(e),
    K.length === 1 && (document.addEventListener(`mousedown`, q, G), document.addEventListener(`touchstart`, q, G)));
}
function me(e) {
  let t = K.findIndex((t) => t === e);
  t !== -1 &&
    (K.splice(t, 1),
    K.length === 0 &&
      (W !== null && (clearTimeout(W), (W = null)),
      document.removeEventListener(`mousedown`, q, G),
      document.removeEventListener(`touchstart`, q, G)));
}
var J, Y;
function he(e) {
  let t = e.split(` `);
  return t.length === 2
    ? [`top`, `center`, `bottom`].includes(t[0]) === !0
      ? [`left`, `middle`, `right`, `start`, `end`].includes(t[1]) === !0
        ? !0
        : (console.error(`Anchor/Self position must end with one of left/middle/right/start/end`), !1)
      : (console.error(`Anchor/Self position must start with one of top/center/bottom`), !1)
    : !1;
}
function ge(e) {
  return e ? !(e.length !== 2 || typeof e[0] != `number` || typeof e[1] != `number`) : !0;
}
var X = {
  'start#ltr': `left`,
  'start#rtl': `right`,
  'end#ltr': `right`,
  'end#rtl': `left`,
};
[`left`, `middle`, `right`].forEach((e) => {
  ((X[`${e}#ltr`] = e), (X[`${e}#rtl`] = e));
});
function _e(e, t) {
  let n = e.split(` `);
  return {
    vertical: n[0],
    horizontal: X[`${n[1]}#${t === !0 ? `rtl` : `ltr`}`],
  };
}
function ve(e, t) {
  let { top: n, left: r, right: i, bottom: a, width: o, height: s } = e.getBoundingClientRect();
  return (
    t !== void 0 && ((n -= t[1]), (r -= t[0]), (a += t[1]), (i += t[0]), (o += t[0]), (s += t[1])),
    {
      top: n,
      bottom: a,
      height: s,
      left: r,
      right: i,
      width: o,
      middle: r + (i - r) / 2,
      center: n + (a - n) / 2,
    }
  );
}
function ye(e, t, n) {
  let { top: r, left: i } = e.getBoundingClientRect();
  return (
    (r += t.top),
    (i += t.left),
    n !== void 0 && ((r += n[1]), (i += n[0])),
    {
      top: r,
      bottom: r + 1,
      height: 1,
      left: i,
      right: i + 1,
      width: 1,
      middle: i,
      center: r,
    }
  );
}
function be(e, t) {
  return { top: 0, center: t / 2, bottom: t, left: 0, middle: e / 2, right: e };
}
function Z(e, t, n, r) {
  return {
    top: e[n.vertical] - t[r.vertical],
    left: e[n.horizontal] - t[r.horizontal],
  };
}
function Q(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5) return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      Q(e, t + 1);
    }, 10);
    return;
  }
  let {
    targetEl: n,
    offset: r,
    anchorEl: a,
    anchorOrigin: o,
    selfOrigin: s,
    absoluteOffset: c,
    fit: l,
    cover: u,
    maxHeight: d,
    maxWidth: f,
  } = e;
  if (i.is.ios === !0 && window.visualViewport !== void 0) {
    let e = document.body.style,
      { offsetLeft: t, offsetTop: n } = window.visualViewport;
    (t !== J && (e.setProperty(`--q-pe-left`, t + `px`), (J = t)),
      n !== Y && (e.setProperty(`--q-pe-top`, n + `px`), (Y = n)));
  }
  let { scrollLeft: p, scrollTop: m } = n,
    h = c === void 0 ? ve(a, u === !0 ? [0, 0] : r) : ye(a, c, r);
  Object.assign(n.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth: f,
    maxHeight: d,
    visibility: `visible`,
  });
  let { offsetWidth: g, offsetHeight: _ } = n,
    { elWidth: v, elHeight: y } =
      l === !0 || u === !0
        ? {
            elWidth: Math.max(h.width, g),
            elHeight: u === !0 ? Math.max(h.height, _) : _,
          }
        : { elWidth: g, elHeight: _ },
    b = { maxWidth: f, maxHeight: d };
  ((l === !0 || u === !0) && ((b.minWidth = h.width + `px`), u === !0 && (b.minHeight = h.height + `px`)),
    Object.assign(n.style, b));
  let x = be(v, y),
    S = Z(h, x, o, s);
  if (c === void 0 || r === void 0) $(S, h, x, o, s);
  else {
    let { top: e, left: t } = S;
    $(S, h, x, o, s);
    let n = !1;
    if (S.top !== e) {
      n = !0;
      let e = 2 * r[1];
      ((h.center = h.top -= e), (h.bottom -= e + 2));
    }
    if (S.left !== t) {
      n = !0;
      let e = 2 * r[0];
      ((h.middle = h.left -= e), (h.right -= e + 2));
    }
    n === !0 && ((S = Z(h, x, o, s)), $(S, h, x, o, s));
  }
  ((b = { top: S.top + `px`, left: S.left + `px` }),
    S.maxHeight !== void 0 &&
      ((b.maxHeight = S.maxHeight + `px`), h.height > S.maxHeight && (b.minHeight = b.maxHeight)),
    S.maxWidth !== void 0 && ((b.maxWidth = S.maxWidth + `px`), h.width > S.maxWidth && (b.minWidth = b.maxWidth)),
    Object.assign(n.style, b),
    n.scrollTop !== m && (n.scrollTop = m),
    n.scrollLeft !== p && (n.scrollLeft = p));
}
function $(e, t, n, r, i) {
  let a = n.bottom,
    o = n.right,
    s = C(),
    c = window.innerHeight - s,
    l = document.body.clientWidth;
  if (e.top < 0 || e.top + a > c)
    if (i.vertical === `center`)
      ((e.top = t[r.vertical] > c / 2 ? Math.max(0, c - a) : 0), (e.maxHeight = Math.min(a, c)));
    else if (t[r.vertical] > c / 2) {
      let n = Math.min(c, r.vertical === `center` ? t.center : r.vertical === i.vertical ? t.bottom : t.top);
      ((e.maxHeight = Math.min(a, n)), (e.top = Math.max(0, n - a)));
    } else
      ((e.top = Math.max(0, r.vertical === `center` ? t.center : r.vertical === i.vertical ? t.top : t.bottom)),
        (e.maxHeight = Math.min(a, c - e.top)));
  if (e.left < 0 || e.left + o > l)
    if (((e.maxWidth = Math.min(o, l)), i.horizontal === `middle`))
      e.left = t[r.horizontal] > l / 2 ? Math.max(0, l - o) : 0;
    else if (t[r.horizontal] > l / 2) {
      let n = Math.min(l, r.horizontal === `middle` ? t.middle : r.horizontal === i.horizontal ? t.right : t.left);
      ((e.maxWidth = Math.min(o, n)), (e.left = Math.max(0, n - e.maxWidth)));
    } else
      ((e.left = Math.max(0, r.horizontal === `middle` ? t.middle : r.horizontal === i.horizontal ? t.left : t.right)),
        (e.maxWidth = Math.min(o, l - e.left)));
}
export {
  re as S,
  oe as _,
  pe as a,
  O as b,
  fe as c,
  R as d,
  L as f,
  k as g,
  se as h,
  he as i,
  B as l,
  A as m,
  Q as n,
  me as o,
  P as p,
  ge as r,
  U as s,
  _e as t,
  z as u,
  ae as v,
  ne as x,
  ie as y,
};
