import {
  F as e,
  G as t,
  H as n,
  J as r,
  T as i,
  U as a,
  W as o,
  Y as s,
  at as c,
  ct as l,
  h as u,
  j as d,
  lt as f,
  m as p,
  w as m,
} from './index-D_28ZlK1.js';
import { y as h } from './use-align-N6v3efuN.js';
import {
  _ as g,
  a as _,
  b as v,
  c as y,
  d as b,
  f as x,
  g as S,
  h as C,
  i as w,
  l as T,
  m as E,
  n as D,
  o as O,
  r as k,
  s as A,
  t as j,
  u as ee,
  v as te,
} from './position-engine-CMhLs04-.js';
import { n as M, t as ne } from './use-timeout-OoMFTBih.js';
import { n as re, o as ie } from './scroll-CiTZFIdM.js';
import { t as ae } from './QBtn-DOKqzg_O.js';
function N() {
  return t(`_q_`);
}
var oe = i({
  name: `QTooltip`,
  inheritAttrs: !1,
  props: {
    ...v,
    ...S,
    ...b,
    maxHeight: { type: String, default: null },
    maxWidth: { type: String, default: null },
    transitionShow: { ...b.transitionShow, default: `jump-down` },
    transitionHide: { ...b.transitionHide, default: `jump-up` },
    anchor: { type: String, default: `bottom middle`, validator: w },
    self: { type: String, default: `top middle`, validator: w },
    offset: { type: Array, default: () => [14, 14], validator: k },
    scrollTarget: ie,
    delay: { type: Number, default: 0 },
    hideDelay: { type: Number, default: 0 },
    persistent: Boolean,
  },
  emits: [...C],
  setup(t, { slots: n, emit: r, attrs: i }) {
    let l,
      v,
      y = a(),
      {
        proxy: { $q: b },
      } = y,
      S = f(null),
      C = f(!1),
      w = e(() => j(t.anchor, b.lang.rtl)),
      k = e(() => j(t.self, b.lang.rtl)),
      A = e(() => t.persistent !== !0),
      { registerTick: ie, removeTick: ae } = T(),
      { registerTimeout: N } = ne(),
      { transitionProps: oe, transitionStyle: se } = ee(t),
      { localScrollTarget: ce, changeScrollEvent: le, unconfigureScrollTarget: ue } = g(t, be),
      { anchorEl: P, canShow: de, anchorEvents: F } = te({ showing: C, configureAnchorEl: ye }),
      { show: I, hide: fe } = E({
        showing: C,
        canShow: de,
        handleShow: he,
        handleHide: ge,
        hideOnRouteChange: A,
        processOnMount: !0,
      });
    Object.assign(F, { delayShow: _e, delayHide: ve });
    let { showPortal: pe, hidePortal: L, renderPortal: me } = x(y, S, Se, `tooltip`);
    if (b.platform.is.mobile === !0) {
      let n = {
        anchorEl: P,
        innerRef: S,
        onClickOutside(e) {
          return (fe(e), e.target.classList.contains(`q-dialog__backdrop`) && m(e), !0);
        },
      };
      (c(
        e(() => t.modelValue === null && t.persistent !== !0 && C.value === !0),
        (e) => {
          (e === !0 ? _ : O)(n);
        }
      ),
        s(() => {
          O(n);
        }));
    }
    function he(e) {
      (pe(),
        ie(() => {
          ((v = new MutationObserver(() => z())),
            v.observe(S.value, {
              attributes: !1,
              childList: !0,
              characterData: !0,
              subtree: !0,
            }),
            z(),
            be());
        }),
        l === void 0 &&
          (l = c(() => b.screen.width + `|` + b.screen.height + `|` + t.self + `|` + t.anchor + `|` + b.lang.rtl, z)),
        N(() => {
          (pe(!0), r(`show`, e));
        }, t.transitionDuration));
    }
    function ge(e) {
      (ae(),
        L(),
        R(),
        N(() => {
          (L(!0), r(`hide`, e));
        }, t.transitionDuration));
    }
    function R() {
      (v !== void 0 && (v.disconnect(), (v = void 0)), l !== void 0 && (l(), (l = void 0)), ue(), u(F, `tooltipTemp`));
    }
    function z() {
      D({
        targetEl: S.value,
        offset: t.offset,
        anchorEl: P.value,
        anchorOrigin: w.value,
        selfOrigin: k.value,
        maxHeight: t.maxHeight,
        maxWidth: t.maxWidth,
      });
    }
    function _e(e) {
      if (b.platform.is.mobile === !0) {
        (M(), document.body.classList.add(`non-selectable`));
        let e = P.value;
        p(
          F,
          `tooltipTemp`,
          [`touchmove`, `touchcancel`, `touchend`, `click`].map((t) => [e, t, `delayHide`, `passiveCapture`])
        );
      }
      N(() => {
        I(e);
      }, t.delay);
    }
    function ve(e) {
      (b.platform.is.mobile === !0 &&
        (u(F, `tooltipTemp`),
        M(),
        setTimeout(() => {
          document.body.classList.remove(`non-selectable`);
        }, 10)),
        N(() => {
          fe(e);
        }, t.hideDelay));
    }
    function ye() {
      t.noParentEvent === !0 ||
        P.value === null ||
        p(
          F,
          `anchor`,
          b.platform.is.mobile === !0
            ? [[P.value, `touchstart`, `delayShow`, `passive`]]
            : [
                [P.value, `mouseenter`, `delayShow`, `passive`],
                [P.value, `mouseleave`, `delayHide`, `passive`],
              ]
        );
    }
    function be() {
      if (P.value !== null || t.scrollTarget !== void 0) {
        ce.value = re(P.value, t.scrollTarget);
        let e = t.noParentEvent === !0 ? z : fe;
        le(ce.value, e);
      }
    }
    function xe() {
      return C.value === !0
        ? o(
            `div`,
            {
              ...i,
              ref: S,
              class: [`q-tooltip q-tooltip--style q-position-engine no-pointer-events`, i.class],
              style: [i.style, se.value],
              role: `tooltip`,
            },
            h(n.default)
          )
        : null;
    }
    function Se() {
      return o(d, oe.value, xe);
    }
    return (s(R), Object.assign(y.proxy, { updatePosition: z }), me);
  },
});
function se(e) {
  let t = document.createElement(`textarea`);
  ((t.value = e), (t.contentEditable = `true`), (t.style.position = `fixed`));
  let n = () => {};
  (A(n), document.body.appendChild(t), t.focus(), t.select());
  let r = document.execCommand(`copy`);
  return (t.remove(), y(n), r);
}
function ce(e) {
  return navigator.clipboard === void 0
    ? new Promise((t, n) => {
        let r = se(e);
        r ? t(!0) : n(r);
      })
    : navigator.clipboard.writeText(e);
}
var le =
  typeof globalThis < `u`
    ? globalThis
    : typeof window < `u`
      ? window
      : typeof global < `u`
        ? global
        : typeof self < `u`
          ? self
          : {};
function ue(e) {
  var t;
  return e.__esModule
    ? e
    : ((t = Object.defineProperty({}, '__esModule', { value: !0 })),
      Object.keys(e).forEach(function (n) {
        var r = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(
          t,
          n,
          r.get
            ? r
            : {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              }
        );
      }),
      t);
}
var P = {},
  de = {
    Aacute: `Á`,
    aacute: `á`,
    Abreve: `Ă`,
    abreve: `ă`,
    ac: `∾`,
    acd: `∿`,
    acE: `∾̳`,
    Acirc: `Â`,
    acirc: `â`,
    acute: `´`,
    Acy: `А`,
    acy: `а`,
    AElig: `Æ`,
    aelig: `æ`,
    af: `⁡`,
    Afr: `𝔄`,
    afr: `𝔞`,
    Agrave: `À`,
    agrave: `à`,
    alefsym: `ℵ`,
    aleph: `ℵ`,
    Alpha: `Α`,
    alpha: `α`,
    Amacr: `Ā`,
    amacr: `ā`,
    amalg: `⨿`,
    amp: `&`,
    AMP: `&`,
    andand: `⩕`,
    And: `⩓`,
    and: `∧`,
    andd: `⩜`,
    andslope: `⩘`,
    andv: `⩚`,
    ang: `∠`,
    ange: `⦤`,
    angle: `∠`,
    angmsdaa: `⦨`,
    angmsdab: `⦩`,
    angmsdac: `⦪`,
    angmsdad: `⦫`,
    angmsdae: `⦬`,
    angmsdaf: `⦭`,
    angmsdag: `⦮`,
    angmsdah: `⦯`,
    angmsd: `∡`,
    angrt: `∟`,
    angrtvb: `⊾`,
    angrtvbd: `⦝`,
    angsph: `∢`,
    angst: `Å`,
    angzarr: `⍼`,
    Aogon: `Ą`,
    aogon: `ą`,
    Aopf: `𝔸`,
    aopf: `𝕒`,
    apacir: `⩯`,
    ap: `≈`,
    apE: `⩰`,
    ape: `≊`,
    apid: `≋`,
    apos: `'`,
    ApplyFunction: `⁡`,
    approx: `≈`,
    approxeq: `≊`,
    Aring: `Å`,
    aring: `å`,
    Ascr: `𝒜`,
    ascr: `𝒶`,
    Assign: `≔`,
    ast: `*`,
    asymp: `≈`,
    asympeq: `≍`,
    Atilde: `Ã`,
    atilde: `ã`,
    Auml: `Ä`,
    auml: `ä`,
    awconint: `∳`,
    awint: `⨑`,
    backcong: `≌`,
    backepsilon: `϶`,
    backprime: `‵`,
    backsim: `∽`,
    backsimeq: `⋍`,
    Backslash: `∖`,
    Barv: `⫧`,
    barvee: `⊽`,
    barwed: `⌅`,
    Barwed: `⌆`,
    barwedge: `⌅`,
    bbrk: `⎵`,
    bbrktbrk: `⎶`,
    bcong: `≌`,
    Bcy: `Б`,
    bcy: `б`,
    bdquo: `„`,
    becaus: `∵`,
    because: `∵`,
    Because: `∵`,
    bemptyv: `⦰`,
    bepsi: `϶`,
    bernou: `ℬ`,
    Bernoullis: `ℬ`,
    Beta: `Β`,
    beta: `β`,
    beth: `ℶ`,
    between: `≬`,
    Bfr: `𝔅`,
    bfr: `𝔟`,
    bigcap: `⋂`,
    bigcirc: `◯`,
    bigcup: `⋃`,
    bigodot: `⨀`,
    bigoplus: `⨁`,
    bigotimes: `⨂`,
    bigsqcup: `⨆`,
    bigstar: `★`,
    bigtriangledown: `▽`,
    bigtriangleup: `△`,
    biguplus: `⨄`,
    bigvee: `⋁`,
    bigwedge: `⋀`,
    bkarow: `⤍`,
    blacklozenge: `⧫`,
    blacksquare: `▪`,
    blacktriangle: `▴`,
    blacktriangledown: `▾`,
    blacktriangleleft: `◂`,
    blacktriangleright: `▸`,
    blank: `␣`,
    blk12: `▒`,
    blk14: `░`,
    blk34: `▓`,
    block: `█`,
    bne: `=⃥`,
    bnequiv: `≡⃥`,
    bNot: `⫭`,
    bnot: `⌐`,
    Bopf: `𝔹`,
    bopf: `𝕓`,
    bot: `⊥`,
    bottom: `⊥`,
    bowtie: `⋈`,
    boxbox: `⧉`,
    boxdl: `┐`,
    boxdL: `╕`,
    boxDl: `╖`,
    boxDL: `╗`,
    boxdr: `┌`,
    boxdR: `╒`,
    boxDr: `╓`,
    boxDR: `╔`,
    boxh: `─`,
    boxH: `═`,
    boxhd: `┬`,
    boxHd: `╤`,
    boxhD: `╥`,
    boxHD: `╦`,
    boxhu: `┴`,
    boxHu: `╧`,
    boxhU: `╨`,
    boxHU: `╩`,
    boxminus: `⊟`,
    boxplus: `⊞`,
    boxtimes: `⊠`,
    boxul: `┘`,
    boxuL: `╛`,
    boxUl: `╜`,
    boxUL: `╝`,
    boxur: `└`,
    boxuR: `╘`,
    boxUr: `╙`,
    boxUR: `╚`,
    boxv: `│`,
    boxV: `║`,
    boxvh: `┼`,
    boxvH: `╪`,
    boxVh: `╫`,
    boxVH: `╬`,
    boxvl: `┤`,
    boxvL: `╡`,
    boxVl: `╢`,
    boxVL: `╣`,
    boxvr: `├`,
    boxvR: `╞`,
    boxVr: `╟`,
    boxVR: `╠`,
    bprime: `‵`,
    breve: `˘`,
    Breve: `˘`,
    brvbar: `¦`,
    bscr: `𝒷`,
    Bscr: `ℬ`,
    bsemi: `⁏`,
    bsim: `∽`,
    bsime: `⋍`,
    bsolb: `⧅`,
    bsol: `\\`,
    bsolhsub: `⟈`,
    bull: `•`,
    bullet: `•`,
    bump: `≎`,
    bumpE: `⪮`,
    bumpe: `≏`,
    Bumpeq: `≎`,
    bumpeq: `≏`,
    Cacute: `Ć`,
    cacute: `ć`,
    capand: `⩄`,
    capbrcup: `⩉`,
    capcap: `⩋`,
    cap: `∩`,
    Cap: `⋒`,
    capcup: `⩇`,
    capdot: `⩀`,
    CapitalDifferentialD: `ⅅ`,
    caps: `∩︀`,
    caret: `⁁`,
    caron: `ˇ`,
    Cayleys: `ℭ`,
    ccaps: `⩍`,
    Ccaron: `Č`,
    ccaron: `č`,
    Ccedil: `Ç`,
    ccedil: `ç`,
    Ccirc: `Ĉ`,
    ccirc: `ĉ`,
    Cconint: `∰`,
    ccups: `⩌`,
    ccupssm: `⩐`,
    Cdot: `Ċ`,
    cdot: `ċ`,
    cedil: `¸`,
    Cedilla: `¸`,
    cemptyv: `⦲`,
    cent: `¢`,
    centerdot: `·`,
    CenterDot: `·`,
    cfr: `𝔠`,
    Cfr: `ℭ`,
    CHcy: `Ч`,
    chcy: `ч`,
    check: `✓`,
    checkmark: `✓`,
    Chi: `Χ`,
    chi: `χ`,
    circ: `ˆ`,
    circeq: `≗`,
    circlearrowleft: `↺`,
    circlearrowright: `↻`,
    circledast: `⊛`,
    circledcirc: `⊚`,
    circleddash: `⊝`,
    CircleDot: `⊙`,
    circledR: `®`,
    circledS: `Ⓢ`,
    CircleMinus: `⊖`,
    CirclePlus: `⊕`,
    CircleTimes: `⊗`,
    cir: `○`,
    cirE: `⧃`,
    cire: `≗`,
    cirfnint: `⨐`,
    cirmid: `⫯`,
    cirscir: `⧂`,
    ClockwiseContourIntegral: `∲`,
    CloseCurlyDoubleQuote: `”`,
    CloseCurlyQuote: `’`,
    clubs: `♣`,
    clubsuit: `♣`,
    colon: `:`,
    Colon: `∷`,
    Colone: `⩴`,
    colone: `≔`,
    coloneq: `≔`,
    comma: `,`,
    commat: `@`,
    comp: `∁`,
    compfn: `∘`,
    complement: `∁`,
    complexes: `ℂ`,
    cong: `≅`,
    congdot: `⩭`,
    Congruent: `≡`,
    conint: `∮`,
    Conint: `∯`,
    ContourIntegral: `∮`,
    copf: `𝕔`,
    Copf: `ℂ`,
    coprod: `∐`,
    Coproduct: `∐`,
    copy: `©`,
    COPY: `©`,
    copysr: `℗`,
    CounterClockwiseContourIntegral: `∳`,
    crarr: `↵`,
    cross: `✗`,
    Cross: `⨯`,
    Cscr: `𝒞`,
    cscr: `𝒸`,
    csub: `⫏`,
    csube: `⫑`,
    csup: `⫐`,
    csupe: `⫒`,
    ctdot: `⋯`,
    cudarrl: `⤸`,
    cudarrr: `⤵`,
    cuepr: `⋞`,
    cuesc: `⋟`,
    cularr: `↶`,
    cularrp: `⤽`,
    cupbrcap: `⩈`,
    cupcap: `⩆`,
    CupCap: `≍`,
    cup: `∪`,
    Cup: `⋓`,
    cupcup: `⩊`,
    cupdot: `⊍`,
    cupor: `⩅`,
    cups: `∪︀`,
    curarr: `↷`,
    curarrm: `⤼`,
    curlyeqprec: `⋞`,
    curlyeqsucc: `⋟`,
    curlyvee: `⋎`,
    curlywedge: `⋏`,
    curren: `¤`,
    curvearrowleft: `↶`,
    curvearrowright: `↷`,
    cuvee: `⋎`,
    cuwed: `⋏`,
    cwconint: `∲`,
    cwint: `∱`,
    cylcty: `⌭`,
    dagger: `†`,
    Dagger: `‡`,
    daleth: `ℸ`,
    darr: `↓`,
    Darr: `↡`,
    dArr: `⇓`,
    dash: `‐`,
    Dashv: `⫤`,
    dashv: `⊣`,
    dbkarow: `⤏`,
    dblac: `˝`,
    Dcaron: `Ď`,
    dcaron: `ď`,
    Dcy: `Д`,
    dcy: `д`,
    ddagger: `‡`,
    ddarr: `⇊`,
    DD: `ⅅ`,
    dd: `ⅆ`,
    DDotrahd: `⤑`,
    ddotseq: `⩷`,
    deg: `°`,
    Del: `∇`,
    Delta: `Δ`,
    delta: `δ`,
    demptyv: `⦱`,
    dfisht: `⥿`,
    Dfr: `𝔇`,
    dfr: `𝔡`,
    dHar: `⥥`,
    dharl: `⇃`,
    dharr: `⇂`,
    DiacriticalAcute: `´`,
    DiacriticalDot: `˙`,
    DiacriticalDoubleAcute: `˝`,
    DiacriticalGrave: '`',
    DiacriticalTilde: `˜`,
    diam: `⋄`,
    diamond: `⋄`,
    Diamond: `⋄`,
    diamondsuit: `♦`,
    diams: `♦`,
    die: `¨`,
    DifferentialD: `ⅆ`,
    digamma: `ϝ`,
    disin: `⋲`,
    div: `÷`,
    divide: `÷`,
    divideontimes: `⋇`,
    divonx: `⋇`,
    DJcy: `Ђ`,
    djcy: `ђ`,
    dlcorn: `⌞`,
    dlcrop: `⌍`,
    dollar: `$`,
    Dopf: `𝔻`,
    dopf: `𝕕`,
    Dot: `¨`,
    dot: `˙`,
    DotDot: `⃜`,
    doteq: `≐`,
    doteqdot: `≑`,
    DotEqual: `≐`,
    dotminus: `∸`,
    dotplus: `∔`,
    dotsquare: `⊡`,
    doublebarwedge: `⌆`,
    DoubleContourIntegral: `∯`,
    DoubleDot: `¨`,
    DoubleDownArrow: `⇓`,
    DoubleLeftArrow: `⇐`,
    DoubleLeftRightArrow: `⇔`,
    DoubleLeftTee: `⫤`,
    DoubleLongLeftArrow: `⟸`,
    DoubleLongLeftRightArrow: `⟺`,
    DoubleLongRightArrow: `⟹`,
    DoubleRightArrow: `⇒`,
    DoubleRightTee: `⊨`,
    DoubleUpArrow: `⇑`,
    DoubleUpDownArrow: `⇕`,
    DoubleVerticalBar: `∥`,
    DownArrowBar: `⤓`,
    downarrow: `↓`,
    DownArrow: `↓`,
    Downarrow: `⇓`,
    DownArrowUpArrow: `⇵`,
    DownBreve: `̑`,
    downdownarrows: `⇊`,
    downharpoonleft: `⇃`,
    downharpoonright: `⇂`,
    DownLeftRightVector: `⥐`,
    DownLeftTeeVector: `⥞`,
    DownLeftVectorBar: `⥖`,
    DownLeftVector: `↽`,
    DownRightTeeVector: `⥟`,
    DownRightVectorBar: `⥗`,
    DownRightVector: `⇁`,
    DownTeeArrow: `↧`,
    DownTee: `⊤`,
    drbkarow: `⤐`,
    drcorn: `⌟`,
    drcrop: `⌌`,
    Dscr: `𝒟`,
    dscr: `𝒹`,
    DScy: `Ѕ`,
    dscy: `ѕ`,
    dsol: `⧶`,
    Dstrok: `Đ`,
    dstrok: `đ`,
    dtdot: `⋱`,
    dtri: `▿`,
    dtrif: `▾`,
    duarr: `⇵`,
    duhar: `⥯`,
    dwangle: `⦦`,
    DZcy: `Џ`,
    dzcy: `џ`,
    dzigrarr: `⟿`,
    Eacute: `É`,
    eacute: `é`,
    easter: `⩮`,
    Ecaron: `Ě`,
    ecaron: `ě`,
    Ecirc: `Ê`,
    ecirc: `ê`,
    ecir: `≖`,
    ecolon: `≕`,
    Ecy: `Э`,
    ecy: `э`,
    eDDot: `⩷`,
    Edot: `Ė`,
    edot: `ė`,
    eDot: `≑`,
    ee: `ⅇ`,
    efDot: `≒`,
    Efr: `𝔈`,
    efr: `𝔢`,
    eg: `⪚`,
    Egrave: `È`,
    egrave: `è`,
    egs: `⪖`,
    egsdot: `⪘`,
    el: `⪙`,
    Element: `∈`,
    elinters: `⏧`,
    ell: `ℓ`,
    els: `⪕`,
    elsdot: `⪗`,
    Emacr: `Ē`,
    emacr: `ē`,
    empty: `∅`,
    emptyset: `∅`,
    EmptySmallSquare: `◻`,
    emptyv: `∅`,
    EmptyVerySmallSquare: `▫`,
    emsp13: ` `,
    emsp14: ` `,
    emsp: ` `,
    ENG: `Ŋ`,
    eng: `ŋ`,
    ensp: ` `,
    Eogon: `Ę`,
    eogon: `ę`,
    Eopf: `𝔼`,
    eopf: `𝕖`,
    epar: `⋕`,
    eparsl: `⧣`,
    eplus: `⩱`,
    epsi: `ε`,
    Epsilon: `Ε`,
    epsilon: `ε`,
    epsiv: `ϵ`,
    eqcirc: `≖`,
    eqcolon: `≕`,
    eqsim: `≂`,
    eqslantgtr: `⪖`,
    eqslantless: `⪕`,
    Equal: `⩵`,
    equals: `=`,
    EqualTilde: `≂`,
    equest: `≟`,
    Equilibrium: `⇌`,
    equiv: `≡`,
    equivDD: `⩸`,
    eqvparsl: `⧥`,
    erarr: `⥱`,
    erDot: `≓`,
    escr: `ℯ`,
    Escr: `ℰ`,
    esdot: `≐`,
    Esim: `⩳`,
    esim: `≂`,
    Eta: `Η`,
    eta: `η`,
    ETH: `Ð`,
    eth: `ð`,
    Euml: `Ë`,
    euml: `ë`,
    euro: `€`,
    excl: `!`,
    exist: `∃`,
    Exists: `∃`,
    expectation: `ℰ`,
    exponentiale: `ⅇ`,
    ExponentialE: `ⅇ`,
    fallingdotseq: `≒`,
    Fcy: `Ф`,
    fcy: `ф`,
    female: `♀`,
    ffilig: `ﬃ`,
    fflig: `ﬀ`,
    ffllig: `ﬄ`,
    Ffr: `𝔉`,
    ffr: `𝔣`,
    filig: `ﬁ`,
    FilledSmallSquare: `◼`,
    FilledVerySmallSquare: `▪`,
    fjlig: `fj`,
    flat: `♭`,
    fllig: `ﬂ`,
    fltns: `▱`,
    fnof: `ƒ`,
    Fopf: `𝔽`,
    fopf: `𝕗`,
    forall: `∀`,
    ForAll: `∀`,
    fork: `⋔`,
    forkv: `⫙`,
    Fouriertrf: `ℱ`,
    fpartint: `⨍`,
    frac12: `½`,
    frac13: `⅓`,
    frac14: `¼`,
    frac15: `⅕`,
    frac16: `⅙`,
    frac18: `⅛`,
    frac23: `⅔`,
    frac25: `⅖`,
    frac34: `¾`,
    frac35: `⅗`,
    frac38: `⅜`,
    frac45: `⅘`,
    frac56: `⅚`,
    frac58: `⅝`,
    frac78: `⅞`,
    frasl: `⁄`,
    frown: `⌢`,
    fscr: `𝒻`,
    Fscr: `ℱ`,
    gacute: `ǵ`,
    Gamma: `Γ`,
    gamma: `γ`,
    Gammad: `Ϝ`,
    gammad: `ϝ`,
    gap: `⪆`,
    Gbreve: `Ğ`,
    gbreve: `ğ`,
    Gcedil: `Ģ`,
    Gcirc: `Ĝ`,
    gcirc: `ĝ`,
    Gcy: `Г`,
    gcy: `г`,
    Gdot: `Ġ`,
    gdot: `ġ`,
    ge: `≥`,
    gE: `≧`,
    gEl: `⪌`,
    gel: `⋛`,
    geq: `≥`,
    geqq: `≧`,
    geqslant: `⩾`,
    gescc: `⪩`,
    ges: `⩾`,
    gesdot: `⪀`,
    gesdoto: `⪂`,
    gesdotol: `⪄`,
    gesl: `⋛︀`,
    gesles: `⪔`,
    Gfr: `𝔊`,
    gfr: `𝔤`,
    gg: `≫`,
    Gg: `⋙`,
    ggg: `⋙`,
    gimel: `ℷ`,
    GJcy: `Ѓ`,
    gjcy: `ѓ`,
    gla: `⪥`,
    gl: `≷`,
    glE: `⪒`,
    glj: `⪤`,
    gnap: `⪊`,
    gnapprox: `⪊`,
    gne: `⪈`,
    gnE: `≩`,
    gneq: `⪈`,
    gneqq: `≩`,
    gnsim: `⋧`,
    Gopf: `𝔾`,
    gopf: `𝕘`,
    grave: '`',
    GreaterEqual: `≥`,
    GreaterEqualLess: `⋛`,
    GreaterFullEqual: `≧`,
    GreaterGreater: `⪢`,
    GreaterLess: `≷`,
    GreaterSlantEqual: `⩾`,
    GreaterTilde: `≳`,
    Gscr: `𝒢`,
    gscr: `ℊ`,
    gsim: `≳`,
    gsime: `⪎`,
    gsiml: `⪐`,
    gtcc: `⪧`,
    gtcir: `⩺`,
    gt: `>`,
    GT: `>`,
    Gt: `≫`,
    gtdot: `⋗`,
    gtlPar: `⦕`,
    gtquest: `⩼`,
    gtrapprox: `⪆`,
    gtrarr: `⥸`,
    gtrdot: `⋗`,
    gtreqless: `⋛`,
    gtreqqless: `⪌`,
    gtrless: `≷`,
    gtrsim: `≳`,
    gvertneqq: `≩︀`,
    gvnE: `≩︀`,
    Hacek: `ˇ`,
    hairsp: ` `,
    half: `½`,
    hamilt: `ℋ`,
    HARDcy: `Ъ`,
    hardcy: `ъ`,
    harrcir: `⥈`,
    harr: `↔`,
    hArr: `⇔`,
    harrw: `↭`,
    Hat: `^`,
    hbar: `ℏ`,
    Hcirc: `Ĥ`,
    hcirc: `ĥ`,
    hearts: `♥`,
    heartsuit: `♥`,
    hellip: `…`,
    hercon: `⊹`,
    hfr: `𝔥`,
    Hfr: `ℌ`,
    HilbertSpace: `ℋ`,
    hksearow: `⤥`,
    hkswarow: `⤦`,
    hoarr: `⇿`,
    homtht: `∻`,
    hookleftarrow: `↩`,
    hookrightarrow: `↪`,
    hopf: `𝕙`,
    Hopf: `ℍ`,
    horbar: `―`,
    HorizontalLine: `─`,
    hscr: `𝒽`,
    Hscr: `ℋ`,
    hslash: `ℏ`,
    Hstrok: `Ħ`,
    hstrok: `ħ`,
    HumpDownHump: `≎`,
    HumpEqual: `≏`,
    hybull: `⁃`,
    hyphen: `‐`,
    Iacute: `Í`,
    iacute: `í`,
    ic: `⁣`,
    Icirc: `Î`,
    icirc: `î`,
    Icy: `И`,
    icy: `и`,
    Idot: `İ`,
    IEcy: `Е`,
    iecy: `е`,
    iexcl: `¡`,
    iff: `⇔`,
    ifr: `𝔦`,
    Ifr: `ℑ`,
    Igrave: `Ì`,
    igrave: `ì`,
    ii: `ⅈ`,
    iiiint: `⨌`,
    iiint: `∭`,
    iinfin: `⧜`,
    iiota: `℩`,
    IJlig: `Ĳ`,
    ijlig: `ĳ`,
    Imacr: `Ī`,
    imacr: `ī`,
    image: `ℑ`,
    ImaginaryI: `ⅈ`,
    imagline: `ℐ`,
    imagpart: `ℑ`,
    imath: `ı`,
    Im: `ℑ`,
    imof: `⊷`,
    imped: `Ƶ`,
    Implies: `⇒`,
    incare: `℅`,
    in: `∈`,
    infin: `∞`,
    infintie: `⧝`,
    inodot: `ı`,
    intcal: `⊺`,
    int: `∫`,
    Int: `∬`,
    integers: `ℤ`,
    Integral: `∫`,
    intercal: `⊺`,
    Intersection: `⋂`,
    intlarhk: `⨗`,
    intprod: `⨼`,
    InvisibleComma: `⁣`,
    InvisibleTimes: `⁢`,
    IOcy: `Ё`,
    iocy: `ё`,
    Iogon: `Į`,
    iogon: `į`,
    Iopf: `𝕀`,
    iopf: `𝕚`,
    Iota: `Ι`,
    iota: `ι`,
    iprod: `⨼`,
    iquest: `¿`,
    iscr: `𝒾`,
    Iscr: `ℐ`,
    isin: `∈`,
    isindot: `⋵`,
    isinE: `⋹`,
    isins: `⋴`,
    isinsv: `⋳`,
    isinv: `∈`,
    it: `⁢`,
    Itilde: `Ĩ`,
    itilde: `ĩ`,
    Iukcy: `І`,
    iukcy: `і`,
    Iuml: `Ï`,
    iuml: `ï`,
    Jcirc: `Ĵ`,
    jcirc: `ĵ`,
    Jcy: `Й`,
    jcy: `й`,
    Jfr: `𝔍`,
    jfr: `𝔧`,
    jmath: `ȷ`,
    Jopf: `𝕁`,
    jopf: `𝕛`,
    Jscr: `𝒥`,
    jscr: `𝒿`,
    Jsercy: `Ј`,
    jsercy: `ј`,
    Jukcy: `Є`,
    jukcy: `є`,
    Kappa: `Κ`,
    kappa: `κ`,
    kappav: `ϰ`,
    Kcedil: `Ķ`,
    kcedil: `ķ`,
    Kcy: `К`,
    kcy: `к`,
    Kfr: `𝔎`,
    kfr: `𝔨`,
    kgreen: `ĸ`,
    KHcy: `Х`,
    khcy: `х`,
    KJcy: `Ќ`,
    kjcy: `ќ`,
    Kopf: `𝕂`,
    kopf: `𝕜`,
    Kscr: `𝒦`,
    kscr: `𝓀`,
    lAarr: `⇚`,
    Lacute: `Ĺ`,
    lacute: `ĺ`,
    laemptyv: `⦴`,
    lagran: `ℒ`,
    Lambda: `Λ`,
    lambda: `λ`,
    lang: `⟨`,
    Lang: `⟪`,
    langd: `⦑`,
    langle: `⟨`,
    lap: `⪅`,
    Laplacetrf: `ℒ`,
    laquo: `«`,
    larrb: `⇤`,
    larrbfs: `⤟`,
    larr: `←`,
    Larr: `↞`,
    lArr: `⇐`,
    larrfs: `⤝`,
    larrhk: `↩`,
    larrlp: `↫`,
    larrpl: `⤹`,
    larrsim: `⥳`,
    larrtl: `↢`,
    latail: `⤙`,
    lAtail: `⤛`,
    lat: `⪫`,
    late: `⪭`,
    lates: `⪭︀`,
    lbarr: `⤌`,
    lBarr: `⤎`,
    lbbrk: `❲`,
    lbrace: `{`,
    lbrack: `[`,
    lbrke: `⦋`,
    lbrksld: `⦏`,
    lbrkslu: `⦍`,
    Lcaron: `Ľ`,
    lcaron: `ľ`,
    Lcedil: `Ļ`,
    lcedil: `ļ`,
    lceil: `⌈`,
    lcub: `{`,
    Lcy: `Л`,
    lcy: `л`,
    ldca: `⤶`,
    ldquo: `“`,
    ldquor: `„`,
    ldrdhar: `⥧`,
    ldrushar: `⥋`,
    ldsh: `↲`,
    le: `≤`,
    lE: `≦`,
    LeftAngleBracket: `⟨`,
    LeftArrowBar: `⇤`,
    leftarrow: `←`,
    LeftArrow: `←`,
    Leftarrow: `⇐`,
    LeftArrowRightArrow: `⇆`,
    leftarrowtail: `↢`,
    LeftCeiling: `⌈`,
    LeftDoubleBracket: `⟦`,
    LeftDownTeeVector: `⥡`,
    LeftDownVectorBar: `⥙`,
    LeftDownVector: `⇃`,
    LeftFloor: `⌊`,
    leftharpoondown: `↽`,
    leftharpoonup: `↼`,
    leftleftarrows: `⇇`,
    leftrightarrow: `↔`,
    LeftRightArrow: `↔`,
    Leftrightarrow: `⇔`,
    leftrightarrows: `⇆`,
    leftrightharpoons: `⇋`,
    leftrightsquigarrow: `↭`,
    LeftRightVector: `⥎`,
    LeftTeeArrow: `↤`,
    LeftTee: `⊣`,
    LeftTeeVector: `⥚`,
    leftthreetimes: `⋋`,
    LeftTriangleBar: `⧏`,
    LeftTriangle: `⊲`,
    LeftTriangleEqual: `⊴`,
    LeftUpDownVector: `⥑`,
    LeftUpTeeVector: `⥠`,
    LeftUpVectorBar: `⥘`,
    LeftUpVector: `↿`,
    LeftVectorBar: `⥒`,
    LeftVector: `↼`,
    lEg: `⪋`,
    leg: `⋚`,
    leq: `≤`,
    leqq: `≦`,
    leqslant: `⩽`,
    lescc: `⪨`,
    les: `⩽`,
    lesdot: `⩿`,
    lesdoto: `⪁`,
    lesdotor: `⪃`,
    lesg: `⋚︀`,
    lesges: `⪓`,
    lessapprox: `⪅`,
    lessdot: `⋖`,
    lesseqgtr: `⋚`,
    lesseqqgtr: `⪋`,
    LessEqualGreater: `⋚`,
    LessFullEqual: `≦`,
    LessGreater: `≶`,
    lessgtr: `≶`,
    LessLess: `⪡`,
    lesssim: `≲`,
    LessSlantEqual: `⩽`,
    LessTilde: `≲`,
    lfisht: `⥼`,
    lfloor: `⌊`,
    Lfr: `𝔏`,
    lfr: `𝔩`,
    lg: `≶`,
    lgE: `⪑`,
    lHar: `⥢`,
    lhard: `↽`,
    lharu: `↼`,
    lharul: `⥪`,
    lhblk: `▄`,
    LJcy: `Љ`,
    ljcy: `љ`,
    llarr: `⇇`,
    ll: `≪`,
    Ll: `⋘`,
    llcorner: `⌞`,
    Lleftarrow: `⇚`,
    llhard: `⥫`,
    lltri: `◺`,
    Lmidot: `Ŀ`,
    lmidot: `ŀ`,
    lmoustache: `⎰`,
    lmoust: `⎰`,
    lnap: `⪉`,
    lnapprox: `⪉`,
    lne: `⪇`,
    lnE: `≨`,
    lneq: `⪇`,
    lneqq: `≨`,
    lnsim: `⋦`,
    loang: `⟬`,
    loarr: `⇽`,
    lobrk: `⟦`,
    longleftarrow: `⟵`,
    LongLeftArrow: `⟵`,
    Longleftarrow: `⟸`,
    longleftrightarrow: `⟷`,
    LongLeftRightArrow: `⟷`,
    Longleftrightarrow: `⟺`,
    longmapsto: `⟼`,
    longrightarrow: `⟶`,
    LongRightArrow: `⟶`,
    Longrightarrow: `⟹`,
    looparrowleft: `↫`,
    looparrowright: `↬`,
    lopar: `⦅`,
    Lopf: `𝕃`,
    lopf: `𝕝`,
    loplus: `⨭`,
    lotimes: `⨴`,
    lowast: `∗`,
    lowbar: `_`,
    LowerLeftArrow: `↙`,
    LowerRightArrow: `↘`,
    loz: `◊`,
    lozenge: `◊`,
    lozf: `⧫`,
    lpar: `(`,
    lparlt: `⦓`,
    lrarr: `⇆`,
    lrcorner: `⌟`,
    lrhar: `⇋`,
    lrhard: `⥭`,
    lrm: `‎`,
    lrtri: `⊿`,
    lsaquo: `‹`,
    lscr: `𝓁`,
    Lscr: `ℒ`,
    lsh: `↰`,
    Lsh: `↰`,
    lsim: `≲`,
    lsime: `⪍`,
    lsimg: `⪏`,
    lsqb: `[`,
    lsquo: `‘`,
    lsquor: `‚`,
    Lstrok: `Ł`,
    lstrok: `ł`,
    ltcc: `⪦`,
    ltcir: `⩹`,
    lt: `<`,
    LT: `<`,
    Lt: `≪`,
    ltdot: `⋖`,
    lthree: `⋋`,
    ltimes: `⋉`,
    ltlarr: `⥶`,
    ltquest: `⩻`,
    ltri: `◃`,
    ltrie: `⊴`,
    ltrif: `◂`,
    ltrPar: `⦖`,
    lurdshar: `⥊`,
    luruhar: `⥦`,
    lvertneqq: `≨︀`,
    lvnE: `≨︀`,
    macr: `¯`,
    male: `♂`,
    malt: `✠`,
    maltese: `✠`,
    Map: `⤅`,
    map: `↦`,
    mapsto: `↦`,
    mapstodown: `↧`,
    mapstoleft: `↤`,
    mapstoup: `↥`,
    marker: `▮`,
    mcomma: `⨩`,
    Mcy: `М`,
    mcy: `м`,
    mdash: `—`,
    mDDot: `∺`,
    measuredangle: `∡`,
    MediumSpace: ` `,
    Mellintrf: `ℳ`,
    Mfr: `𝔐`,
    mfr: `𝔪`,
    mho: `℧`,
    micro: `µ`,
    midast: `*`,
    midcir: `⫰`,
    mid: `∣`,
    middot: `·`,
    minusb: `⊟`,
    minus: `−`,
    minusd: `∸`,
    minusdu: `⨪`,
    MinusPlus: `∓`,
    mlcp: `⫛`,
    mldr: `…`,
    mnplus: `∓`,
    models: `⊧`,
    Mopf: `𝕄`,
    mopf: `𝕞`,
    mp: `∓`,
    mscr: `𝓂`,
    Mscr: `ℳ`,
    mstpos: `∾`,
    Mu: `Μ`,
    mu: `μ`,
    multimap: `⊸`,
    mumap: `⊸`,
    nabla: `∇`,
    Nacute: `Ń`,
    nacute: `ń`,
    nang: `∠⃒`,
    nap: `≉`,
    napE: `⩰̸`,
    napid: `≋̸`,
    napos: `ŉ`,
    napprox: `≉`,
    natural: `♮`,
    naturals: `ℕ`,
    natur: `♮`,
    nbsp: `\xA0`,
    nbump: `≎̸`,
    nbumpe: `≏̸`,
    ncap: `⩃`,
    Ncaron: `Ň`,
    ncaron: `ň`,
    Ncedil: `Ņ`,
    ncedil: `ņ`,
    ncong: `≇`,
    ncongdot: `⩭̸`,
    ncup: `⩂`,
    Ncy: `Н`,
    ncy: `н`,
    ndash: `–`,
    nearhk: `⤤`,
    nearr: `↗`,
    neArr: `⇗`,
    nearrow: `↗`,
    ne: `≠`,
    nedot: `≐̸`,
    NegativeMediumSpace: `​`,
    NegativeThickSpace: `​`,
    NegativeThinSpace: `​`,
    NegativeVeryThinSpace: `​`,
    nequiv: `≢`,
    nesear: `⤨`,
    nesim: `≂̸`,
    NestedGreaterGreater: `≫`,
    NestedLessLess: `≪`,
    NewLine: `
`,
    nexist: `∄`,
    nexists: `∄`,
    Nfr: `𝔑`,
    nfr: `𝔫`,
    ngE: `≧̸`,
    nge: `≱`,
    ngeq: `≱`,
    ngeqq: `≧̸`,
    ngeqslant: `⩾̸`,
    nges: `⩾̸`,
    nGg: `⋙̸`,
    ngsim: `≵`,
    nGt: `≫⃒`,
    ngt: `≯`,
    ngtr: `≯`,
    nGtv: `≫̸`,
    nharr: `↮`,
    nhArr: `⇎`,
    nhpar: `⫲`,
    ni: `∋`,
    nis: `⋼`,
    nisd: `⋺`,
    niv: `∋`,
    NJcy: `Њ`,
    njcy: `њ`,
    nlarr: `↚`,
    nlArr: `⇍`,
    nldr: `‥`,
    nlE: `≦̸`,
    nle: `≰`,
    nleftarrow: `↚`,
    nLeftarrow: `⇍`,
    nleftrightarrow: `↮`,
    nLeftrightarrow: `⇎`,
    nleq: `≰`,
    nleqq: `≦̸`,
    nleqslant: `⩽̸`,
    nles: `⩽̸`,
    nless: `≮`,
    nLl: `⋘̸`,
    nlsim: `≴`,
    nLt: `≪⃒`,
    nlt: `≮`,
    nltri: `⋪`,
    nltrie: `⋬`,
    nLtv: `≪̸`,
    nmid: `∤`,
    NoBreak: `⁠`,
    NonBreakingSpace: `\xA0`,
    nopf: `𝕟`,
    Nopf: `ℕ`,
    Not: `⫬`,
    not: `¬`,
    NotCongruent: `≢`,
    NotCupCap: `≭`,
    NotDoubleVerticalBar: `∦`,
    NotElement: `∉`,
    NotEqual: `≠`,
    NotEqualTilde: `≂̸`,
    NotExists: `∄`,
    NotGreater: `≯`,
    NotGreaterEqual: `≱`,
    NotGreaterFullEqual: `≧̸`,
    NotGreaterGreater: `≫̸`,
    NotGreaterLess: `≹`,
    NotGreaterSlantEqual: `⩾̸`,
    NotGreaterTilde: `≵`,
    NotHumpDownHump: `≎̸`,
    NotHumpEqual: `≏̸`,
    notin: `∉`,
    notindot: `⋵̸`,
    notinE: `⋹̸`,
    notinva: `∉`,
    notinvb: `⋷`,
    notinvc: `⋶`,
    NotLeftTriangleBar: `⧏̸`,
    NotLeftTriangle: `⋪`,
    NotLeftTriangleEqual: `⋬`,
    NotLess: `≮`,
    NotLessEqual: `≰`,
    NotLessGreater: `≸`,
    NotLessLess: `≪̸`,
    NotLessSlantEqual: `⩽̸`,
    NotLessTilde: `≴`,
    NotNestedGreaterGreater: `⪢̸`,
    NotNestedLessLess: `⪡̸`,
    notni: `∌`,
    notniva: `∌`,
    notnivb: `⋾`,
    notnivc: `⋽`,
    NotPrecedes: `⊀`,
    NotPrecedesEqual: `⪯̸`,
    NotPrecedesSlantEqual: `⋠`,
    NotReverseElement: `∌`,
    NotRightTriangleBar: `⧐̸`,
    NotRightTriangle: `⋫`,
    NotRightTriangleEqual: `⋭`,
    NotSquareSubset: `⊏̸`,
    NotSquareSubsetEqual: `⋢`,
    NotSquareSuperset: `⊐̸`,
    NotSquareSupersetEqual: `⋣`,
    NotSubset: `⊂⃒`,
    NotSubsetEqual: `⊈`,
    NotSucceeds: `⊁`,
    NotSucceedsEqual: `⪰̸`,
    NotSucceedsSlantEqual: `⋡`,
    NotSucceedsTilde: `≿̸`,
    NotSuperset: `⊃⃒`,
    NotSupersetEqual: `⊉`,
    NotTilde: `≁`,
    NotTildeEqual: `≄`,
    NotTildeFullEqual: `≇`,
    NotTildeTilde: `≉`,
    NotVerticalBar: `∤`,
    nparallel: `∦`,
    npar: `∦`,
    nparsl: `⫽⃥`,
    npart: `∂̸`,
    npolint: `⨔`,
    npr: `⊀`,
    nprcue: `⋠`,
    nprec: `⊀`,
    npreceq: `⪯̸`,
    npre: `⪯̸`,
    nrarrc: `⤳̸`,
    nrarr: `↛`,
    nrArr: `⇏`,
    nrarrw: `↝̸`,
    nrightarrow: `↛`,
    nRightarrow: `⇏`,
    nrtri: `⋫`,
    nrtrie: `⋭`,
    nsc: `⊁`,
    nsccue: `⋡`,
    nsce: `⪰̸`,
    Nscr: `𝒩`,
    nscr: `𝓃`,
    nshortmid: `∤`,
    nshortparallel: `∦`,
    nsim: `≁`,
    nsime: `≄`,
    nsimeq: `≄`,
    nsmid: `∤`,
    nspar: `∦`,
    nsqsube: `⋢`,
    nsqsupe: `⋣`,
    nsub: `⊄`,
    nsubE: `⫅̸`,
    nsube: `⊈`,
    nsubset: `⊂⃒`,
    nsubseteq: `⊈`,
    nsubseteqq: `⫅̸`,
    nsucc: `⊁`,
    nsucceq: `⪰̸`,
    nsup: `⊅`,
    nsupE: `⫆̸`,
    nsupe: `⊉`,
    nsupset: `⊃⃒`,
    nsupseteq: `⊉`,
    nsupseteqq: `⫆̸`,
    ntgl: `≹`,
    Ntilde: `Ñ`,
    ntilde: `ñ`,
    ntlg: `≸`,
    ntriangleleft: `⋪`,
    ntrianglelefteq: `⋬`,
    ntriangleright: `⋫`,
    ntrianglerighteq: `⋭`,
    Nu: `Ν`,
    nu: `ν`,
    num: `#`,
    numero: `№`,
    numsp: ` `,
    nvap: `≍⃒`,
    nvdash: `⊬`,
    nvDash: `⊭`,
    nVdash: `⊮`,
    nVDash: `⊯`,
    nvge: `≥⃒`,
    nvgt: `>⃒`,
    nvHarr: `⤄`,
    nvinfin: `⧞`,
    nvlArr: `⤂`,
    nvle: `≤⃒`,
    nvlt: `<⃒`,
    nvltrie: `⊴⃒`,
    nvrArr: `⤃`,
    nvrtrie: `⊵⃒`,
    nvsim: `∼⃒`,
    nwarhk: `⤣`,
    nwarr: `↖`,
    nwArr: `⇖`,
    nwarrow: `↖`,
    nwnear: `⤧`,
    Oacute: `Ó`,
    oacute: `ó`,
    oast: `⊛`,
    Ocirc: `Ô`,
    ocirc: `ô`,
    ocir: `⊚`,
    Ocy: `О`,
    ocy: `о`,
    odash: `⊝`,
    Odblac: `Ő`,
    odblac: `ő`,
    odiv: `⨸`,
    odot: `⊙`,
    odsold: `⦼`,
    OElig: `Œ`,
    oelig: `œ`,
    ofcir: `⦿`,
    Ofr: `𝔒`,
    ofr: `𝔬`,
    ogon: `˛`,
    Ograve: `Ò`,
    ograve: `ò`,
    ogt: `⧁`,
    ohbar: `⦵`,
    ohm: `Ω`,
    oint: `∮`,
    olarr: `↺`,
    olcir: `⦾`,
    olcross: `⦻`,
    oline: `‾`,
    olt: `⧀`,
    Omacr: `Ō`,
    omacr: `ō`,
    Omega: `Ω`,
    omega: `ω`,
    Omicron: `Ο`,
    omicron: `ο`,
    omid: `⦶`,
    ominus: `⊖`,
    Oopf: `𝕆`,
    oopf: `𝕠`,
    opar: `⦷`,
    OpenCurlyDoubleQuote: `“`,
    OpenCurlyQuote: `‘`,
    operp: `⦹`,
    oplus: `⊕`,
    orarr: `↻`,
    Or: `⩔`,
    or: `∨`,
    ord: `⩝`,
    order: `ℴ`,
    orderof: `ℴ`,
    ordf: `ª`,
    ordm: `º`,
    origof: `⊶`,
    oror: `⩖`,
    orslope: `⩗`,
    orv: `⩛`,
    oS: `Ⓢ`,
    Oscr: `𝒪`,
    oscr: `ℴ`,
    Oslash: `Ø`,
    oslash: `ø`,
    osol: `⊘`,
    Otilde: `Õ`,
    otilde: `õ`,
    otimesas: `⨶`,
    Otimes: `⨷`,
    otimes: `⊗`,
    Ouml: `Ö`,
    ouml: `ö`,
    ovbar: `⌽`,
    OverBar: `‾`,
    OverBrace: `⏞`,
    OverBracket: `⎴`,
    OverParenthesis: `⏜`,
    para: `¶`,
    parallel: `∥`,
    par: `∥`,
    parsim: `⫳`,
    parsl: `⫽`,
    part: `∂`,
    PartialD: `∂`,
    Pcy: `П`,
    pcy: `п`,
    percnt: `%`,
    period: `.`,
    permil: `‰`,
    perp: `⊥`,
    pertenk: `‱`,
    Pfr: `𝔓`,
    pfr: `𝔭`,
    Phi: `Φ`,
    phi: `φ`,
    phiv: `ϕ`,
    phmmat: `ℳ`,
    phone: `☎`,
    Pi: `Π`,
    pi: `π`,
    pitchfork: `⋔`,
    piv: `ϖ`,
    planck: `ℏ`,
    planckh: `ℎ`,
    plankv: `ℏ`,
    plusacir: `⨣`,
    plusb: `⊞`,
    pluscir: `⨢`,
    plus: `+`,
    plusdo: `∔`,
    plusdu: `⨥`,
    pluse: `⩲`,
    PlusMinus: `±`,
    plusmn: `±`,
    plussim: `⨦`,
    plustwo: `⨧`,
    pm: `±`,
    Poincareplane: `ℌ`,
    pointint: `⨕`,
    popf: `𝕡`,
    Popf: `ℙ`,
    pound: `£`,
    prap: `⪷`,
    Pr: `⪻`,
    pr: `≺`,
    prcue: `≼`,
    precapprox: `⪷`,
    prec: `≺`,
    preccurlyeq: `≼`,
    Precedes: `≺`,
    PrecedesEqual: `⪯`,
    PrecedesSlantEqual: `≼`,
    PrecedesTilde: `≾`,
    preceq: `⪯`,
    precnapprox: `⪹`,
    precneqq: `⪵`,
    precnsim: `⋨`,
    pre: `⪯`,
    prE: `⪳`,
    precsim: `≾`,
    prime: `′`,
    Prime: `″`,
    primes: `ℙ`,
    prnap: `⪹`,
    prnE: `⪵`,
    prnsim: `⋨`,
    prod: `∏`,
    Product: `∏`,
    profalar: `⌮`,
    profline: `⌒`,
    profsurf: `⌓`,
    prop: `∝`,
    Proportional: `∝`,
    Proportion: `∷`,
    propto: `∝`,
    prsim: `≾`,
    prurel: `⊰`,
    Pscr: `𝒫`,
    pscr: `𝓅`,
    Psi: `Ψ`,
    psi: `ψ`,
    puncsp: ` `,
    Qfr: `𝔔`,
    qfr: `𝔮`,
    qint: `⨌`,
    qopf: `𝕢`,
    Qopf: `ℚ`,
    qprime: `⁗`,
    Qscr: `𝒬`,
    qscr: `𝓆`,
    quaternions: `ℍ`,
    quatint: `⨖`,
    quest: `?`,
    questeq: `≟`,
    quot: `"`,
    QUOT: `"`,
    rAarr: `⇛`,
    race: `∽̱`,
    Racute: `Ŕ`,
    racute: `ŕ`,
    radic: `√`,
    raemptyv: `⦳`,
    rang: `⟩`,
    Rang: `⟫`,
    rangd: `⦒`,
    range: `⦥`,
    rangle: `⟩`,
    raquo: `»`,
    rarrap: `⥵`,
    rarrb: `⇥`,
    rarrbfs: `⤠`,
    rarrc: `⤳`,
    rarr: `→`,
    Rarr: `↠`,
    rArr: `⇒`,
    rarrfs: `⤞`,
    rarrhk: `↪`,
    rarrlp: `↬`,
    rarrpl: `⥅`,
    rarrsim: `⥴`,
    Rarrtl: `⤖`,
    rarrtl: `↣`,
    rarrw: `↝`,
    ratail: `⤚`,
    rAtail: `⤜`,
    ratio: `∶`,
    rationals: `ℚ`,
    rbarr: `⤍`,
    rBarr: `⤏`,
    RBarr: `⤐`,
    rbbrk: `❳`,
    rbrace: `}`,
    rbrack: `]`,
    rbrke: `⦌`,
    rbrksld: `⦎`,
    rbrkslu: `⦐`,
    Rcaron: `Ř`,
    rcaron: `ř`,
    Rcedil: `Ŗ`,
    rcedil: `ŗ`,
    rceil: `⌉`,
    rcub: `}`,
    Rcy: `Р`,
    rcy: `р`,
    rdca: `⤷`,
    rdldhar: `⥩`,
    rdquo: `”`,
    rdquor: `”`,
    rdsh: `↳`,
    real: `ℜ`,
    realine: `ℛ`,
    realpart: `ℜ`,
    reals: `ℝ`,
    Re: `ℜ`,
    rect: `▭`,
    reg: `®`,
    REG: `®`,
    ReverseElement: `∋`,
    ReverseEquilibrium: `⇋`,
    ReverseUpEquilibrium: `⥯`,
    rfisht: `⥽`,
    rfloor: `⌋`,
    rfr: `𝔯`,
    Rfr: `ℜ`,
    rHar: `⥤`,
    rhard: `⇁`,
    rharu: `⇀`,
    rharul: `⥬`,
    Rho: `Ρ`,
    rho: `ρ`,
    rhov: `ϱ`,
    RightAngleBracket: `⟩`,
    RightArrowBar: `⇥`,
    rightarrow: `→`,
    RightArrow: `→`,
    Rightarrow: `⇒`,
    RightArrowLeftArrow: `⇄`,
    rightarrowtail: `↣`,
    RightCeiling: `⌉`,
    RightDoubleBracket: `⟧`,
    RightDownTeeVector: `⥝`,
    RightDownVectorBar: `⥕`,
    RightDownVector: `⇂`,
    RightFloor: `⌋`,
    rightharpoondown: `⇁`,
    rightharpoonup: `⇀`,
    rightleftarrows: `⇄`,
    rightleftharpoons: `⇌`,
    rightrightarrows: `⇉`,
    rightsquigarrow: `↝`,
    RightTeeArrow: `↦`,
    RightTee: `⊢`,
    RightTeeVector: `⥛`,
    rightthreetimes: `⋌`,
    RightTriangleBar: `⧐`,
    RightTriangle: `⊳`,
    RightTriangleEqual: `⊵`,
    RightUpDownVector: `⥏`,
    RightUpTeeVector: `⥜`,
    RightUpVectorBar: `⥔`,
    RightUpVector: `↾`,
    RightVectorBar: `⥓`,
    RightVector: `⇀`,
    ring: `˚`,
    risingdotseq: `≓`,
    rlarr: `⇄`,
    rlhar: `⇌`,
    rlm: `‏`,
    rmoustache: `⎱`,
    rmoust: `⎱`,
    rnmid: `⫮`,
    roang: `⟭`,
    roarr: `⇾`,
    robrk: `⟧`,
    ropar: `⦆`,
    ropf: `𝕣`,
    Ropf: `ℝ`,
    roplus: `⨮`,
    rotimes: `⨵`,
    RoundImplies: `⥰`,
    rpar: `)`,
    rpargt: `⦔`,
    rppolint: `⨒`,
    rrarr: `⇉`,
    Rrightarrow: `⇛`,
    rsaquo: `›`,
    rscr: `𝓇`,
    Rscr: `ℛ`,
    rsh: `↱`,
    Rsh: `↱`,
    rsqb: `]`,
    rsquo: `’`,
    rsquor: `’`,
    rthree: `⋌`,
    rtimes: `⋊`,
    rtri: `▹`,
    rtrie: `⊵`,
    rtrif: `▸`,
    rtriltri: `⧎`,
    RuleDelayed: `⧴`,
    ruluhar: `⥨`,
    rx: `℞`,
    Sacute: `Ś`,
    sacute: `ś`,
    sbquo: `‚`,
    scap: `⪸`,
    Scaron: `Š`,
    scaron: `š`,
    Sc: `⪼`,
    sc: `≻`,
    sccue: `≽`,
    sce: `⪰`,
    scE: `⪴`,
    Scedil: `Ş`,
    scedil: `ş`,
    Scirc: `Ŝ`,
    scirc: `ŝ`,
    scnap: `⪺`,
    scnE: `⪶`,
    scnsim: `⋩`,
    scpolint: `⨓`,
    scsim: `≿`,
    Scy: `С`,
    scy: `с`,
    sdotb: `⊡`,
    sdot: `⋅`,
    sdote: `⩦`,
    searhk: `⤥`,
    searr: `↘`,
    seArr: `⇘`,
    searrow: `↘`,
    sect: `§`,
    semi: `;`,
    seswar: `⤩`,
    setminus: `∖`,
    setmn: `∖`,
    sext: `✶`,
    Sfr: `𝔖`,
    sfr: `𝔰`,
    sfrown: `⌢`,
    sharp: `♯`,
    SHCHcy: `Щ`,
    shchcy: `щ`,
    SHcy: `Ш`,
    shcy: `ш`,
    ShortDownArrow: `↓`,
    ShortLeftArrow: `←`,
    shortmid: `∣`,
    shortparallel: `∥`,
    ShortRightArrow: `→`,
    ShortUpArrow: `↑`,
    shy: `­`,
    Sigma: `Σ`,
    sigma: `σ`,
    sigmaf: `ς`,
    sigmav: `ς`,
    sim: `∼`,
    simdot: `⩪`,
    sime: `≃`,
    simeq: `≃`,
    simg: `⪞`,
    simgE: `⪠`,
    siml: `⪝`,
    simlE: `⪟`,
    simne: `≆`,
    simplus: `⨤`,
    simrarr: `⥲`,
    slarr: `←`,
    SmallCircle: `∘`,
    smallsetminus: `∖`,
    smashp: `⨳`,
    smeparsl: `⧤`,
    smid: `∣`,
    smile: `⌣`,
    smt: `⪪`,
    smte: `⪬`,
    smtes: `⪬︀`,
    SOFTcy: `Ь`,
    softcy: `ь`,
    solbar: `⌿`,
    solb: `⧄`,
    sol: `/`,
    Sopf: `𝕊`,
    sopf: `𝕤`,
    spades: `♠`,
    spadesuit: `♠`,
    spar: `∥`,
    sqcap: `⊓`,
    sqcaps: `⊓︀`,
    sqcup: `⊔`,
    sqcups: `⊔︀`,
    Sqrt: `√`,
    sqsub: `⊏`,
    sqsube: `⊑`,
    sqsubset: `⊏`,
    sqsubseteq: `⊑`,
    sqsup: `⊐`,
    sqsupe: `⊒`,
    sqsupset: `⊐`,
    sqsupseteq: `⊒`,
    square: `□`,
    Square: `□`,
    SquareIntersection: `⊓`,
    SquareSubset: `⊏`,
    SquareSubsetEqual: `⊑`,
    SquareSuperset: `⊐`,
    SquareSupersetEqual: `⊒`,
    SquareUnion: `⊔`,
    squarf: `▪`,
    squ: `□`,
    squf: `▪`,
    srarr: `→`,
    Sscr: `𝒮`,
    sscr: `𝓈`,
    ssetmn: `∖`,
    ssmile: `⌣`,
    sstarf: `⋆`,
    Star: `⋆`,
    star: `☆`,
    starf: `★`,
    straightepsilon: `ϵ`,
    straightphi: `ϕ`,
    strns: `¯`,
    sub: `⊂`,
    Sub: `⋐`,
    subdot: `⪽`,
    subE: `⫅`,
    sube: `⊆`,
    subedot: `⫃`,
    submult: `⫁`,
    subnE: `⫋`,
    subne: `⊊`,
    subplus: `⪿`,
    subrarr: `⥹`,
    subset: `⊂`,
    Subset: `⋐`,
    subseteq: `⊆`,
    subseteqq: `⫅`,
    SubsetEqual: `⊆`,
    subsetneq: `⊊`,
    subsetneqq: `⫋`,
    subsim: `⫇`,
    subsub: `⫕`,
    subsup: `⫓`,
    succapprox: `⪸`,
    succ: `≻`,
    succcurlyeq: `≽`,
    Succeeds: `≻`,
    SucceedsEqual: `⪰`,
    SucceedsSlantEqual: `≽`,
    SucceedsTilde: `≿`,
    succeq: `⪰`,
    succnapprox: `⪺`,
    succneqq: `⪶`,
    succnsim: `⋩`,
    succsim: `≿`,
    SuchThat: `∋`,
    sum: `∑`,
    Sum: `∑`,
    sung: `♪`,
    sup1: `¹`,
    sup2: `²`,
    sup3: `³`,
    sup: `⊃`,
    Sup: `⋑`,
    supdot: `⪾`,
    supdsub: `⫘`,
    supE: `⫆`,
    supe: `⊇`,
    supedot: `⫄`,
    Superset: `⊃`,
    SupersetEqual: `⊇`,
    suphsol: `⟉`,
    suphsub: `⫗`,
    suplarr: `⥻`,
    supmult: `⫂`,
    supnE: `⫌`,
    supne: `⊋`,
    supplus: `⫀`,
    supset: `⊃`,
    Supset: `⋑`,
    supseteq: `⊇`,
    supseteqq: `⫆`,
    supsetneq: `⊋`,
    supsetneqq: `⫌`,
    supsim: `⫈`,
    supsub: `⫔`,
    supsup: `⫖`,
    swarhk: `⤦`,
    swarr: `↙`,
    swArr: `⇙`,
    swarrow: `↙`,
    swnwar: `⤪`,
    szlig: `ß`,
    Tab: `	`,
    target: `⌖`,
    Tau: `Τ`,
    tau: `τ`,
    tbrk: `⎴`,
    Tcaron: `Ť`,
    tcaron: `ť`,
    Tcedil: `Ţ`,
    tcedil: `ţ`,
    Tcy: `Т`,
    tcy: `т`,
    tdot: `⃛`,
    telrec: `⌕`,
    Tfr: `𝔗`,
    tfr: `𝔱`,
    there4: `∴`,
    therefore: `∴`,
    Therefore: `∴`,
    Theta: `Θ`,
    theta: `θ`,
    thetasym: `ϑ`,
    thetav: `ϑ`,
    thickapprox: `≈`,
    thicksim: `∼`,
    ThickSpace: `  `,
    ThinSpace: ` `,
    thinsp: ` `,
    thkap: `≈`,
    thksim: `∼`,
    THORN: `Þ`,
    thorn: `þ`,
    tilde: `˜`,
    Tilde: `∼`,
    TildeEqual: `≃`,
    TildeFullEqual: `≅`,
    TildeTilde: `≈`,
    timesbar: `⨱`,
    timesb: `⊠`,
    times: `×`,
    timesd: `⨰`,
    tint: `∭`,
    toea: `⤨`,
    topbot: `⌶`,
    topcir: `⫱`,
    top: `⊤`,
    Topf: `𝕋`,
    topf: `𝕥`,
    topfork: `⫚`,
    tosa: `⤩`,
    tprime: `‴`,
    trade: `™`,
    TRADE: `™`,
    triangle: `▵`,
    triangledown: `▿`,
    triangleleft: `◃`,
    trianglelefteq: `⊴`,
    triangleq: `≜`,
    triangleright: `▹`,
    trianglerighteq: `⊵`,
    tridot: `◬`,
    trie: `≜`,
    triminus: `⨺`,
    TripleDot: `⃛`,
    triplus: `⨹`,
    trisb: `⧍`,
    tritime: `⨻`,
    trpezium: `⏢`,
    Tscr: `𝒯`,
    tscr: `𝓉`,
    TScy: `Ц`,
    tscy: `ц`,
    TSHcy: `Ћ`,
    tshcy: `ћ`,
    Tstrok: `Ŧ`,
    tstrok: `ŧ`,
    twixt: `≬`,
    twoheadleftarrow: `↞`,
    twoheadrightarrow: `↠`,
    Uacute: `Ú`,
    uacute: `ú`,
    uarr: `↑`,
    Uarr: `↟`,
    uArr: `⇑`,
    Uarrocir: `⥉`,
    Ubrcy: `Ў`,
    ubrcy: `ў`,
    Ubreve: `Ŭ`,
    ubreve: `ŭ`,
    Ucirc: `Û`,
    ucirc: `û`,
    Ucy: `У`,
    ucy: `у`,
    udarr: `⇅`,
    Udblac: `Ű`,
    udblac: `ű`,
    udhar: `⥮`,
    ufisht: `⥾`,
    Ufr: `𝔘`,
    ufr: `𝔲`,
    Ugrave: `Ù`,
    ugrave: `ù`,
    uHar: `⥣`,
    uharl: `↿`,
    uharr: `↾`,
    uhblk: `▀`,
    ulcorn: `⌜`,
    ulcorner: `⌜`,
    ulcrop: `⌏`,
    ultri: `◸`,
    Umacr: `Ū`,
    umacr: `ū`,
    uml: `¨`,
    UnderBar: `_`,
    UnderBrace: `⏟`,
    UnderBracket: `⎵`,
    UnderParenthesis: `⏝`,
    Union: `⋃`,
    UnionPlus: `⊎`,
    Uogon: `Ų`,
    uogon: `ų`,
    Uopf: `𝕌`,
    uopf: `𝕦`,
    UpArrowBar: `⤒`,
    uparrow: `↑`,
    UpArrow: `↑`,
    Uparrow: `⇑`,
    UpArrowDownArrow: `⇅`,
    updownarrow: `↕`,
    UpDownArrow: `↕`,
    Updownarrow: `⇕`,
    UpEquilibrium: `⥮`,
    upharpoonleft: `↿`,
    upharpoonright: `↾`,
    uplus: `⊎`,
    UpperLeftArrow: `↖`,
    UpperRightArrow: `↗`,
    upsi: `υ`,
    Upsi: `ϒ`,
    upsih: `ϒ`,
    Upsilon: `Υ`,
    upsilon: `υ`,
    UpTeeArrow: `↥`,
    UpTee: `⊥`,
    upuparrows: `⇈`,
    urcorn: `⌝`,
    urcorner: `⌝`,
    urcrop: `⌎`,
    Uring: `Ů`,
    uring: `ů`,
    urtri: `◹`,
    Uscr: `𝒰`,
    uscr: `𝓊`,
    utdot: `⋰`,
    Utilde: `Ũ`,
    utilde: `ũ`,
    utri: `▵`,
    utrif: `▴`,
    uuarr: `⇈`,
    Uuml: `Ü`,
    uuml: `ü`,
    uwangle: `⦧`,
    vangrt: `⦜`,
    varepsilon: `ϵ`,
    varkappa: `ϰ`,
    varnothing: `∅`,
    varphi: `ϕ`,
    varpi: `ϖ`,
    varpropto: `∝`,
    varr: `↕`,
    vArr: `⇕`,
    varrho: `ϱ`,
    varsigma: `ς`,
    varsubsetneq: `⊊︀`,
    varsubsetneqq: `⫋︀`,
    varsupsetneq: `⊋︀`,
    varsupsetneqq: `⫌︀`,
    vartheta: `ϑ`,
    vartriangleleft: `⊲`,
    vartriangleright: `⊳`,
    vBar: `⫨`,
    Vbar: `⫫`,
    vBarv: `⫩`,
    Vcy: `В`,
    vcy: `в`,
    vdash: `⊢`,
    vDash: `⊨`,
    Vdash: `⊩`,
    VDash: `⊫`,
    Vdashl: `⫦`,
    veebar: `⊻`,
    vee: `∨`,
    Vee: `⋁`,
    veeeq: `≚`,
    vellip: `⋮`,
    verbar: `|`,
    Verbar: `‖`,
    vert: `|`,
    Vert: `‖`,
    VerticalBar: `∣`,
    VerticalLine: `|`,
    VerticalSeparator: `❘`,
    VerticalTilde: `≀`,
    VeryThinSpace: ` `,
    Vfr: `𝔙`,
    vfr: `𝔳`,
    vltri: `⊲`,
    vnsub: `⊂⃒`,
    vnsup: `⊃⃒`,
    Vopf: `𝕍`,
    vopf: `𝕧`,
    vprop: `∝`,
    vrtri: `⊳`,
    Vscr: `𝒱`,
    vscr: `𝓋`,
    vsubnE: `⫋︀`,
    vsubne: `⊊︀`,
    vsupnE: `⫌︀`,
    vsupne: `⊋︀`,
    Vvdash: `⊪`,
    vzigzag: `⦚`,
    Wcirc: `Ŵ`,
    wcirc: `ŵ`,
    wedbar: `⩟`,
    wedge: `∧`,
    Wedge: `⋀`,
    wedgeq: `≙`,
    weierp: `℘`,
    Wfr: `𝔚`,
    wfr: `𝔴`,
    Wopf: `𝕎`,
    wopf: `𝕨`,
    wp: `℘`,
    wr: `≀`,
    wreath: `≀`,
    Wscr: `𝒲`,
    wscr: `𝓌`,
    xcap: `⋂`,
    xcirc: `◯`,
    xcup: `⋃`,
    xdtri: `▽`,
    Xfr: `𝔛`,
    xfr: `𝔵`,
    xharr: `⟷`,
    xhArr: `⟺`,
    Xi: `Ξ`,
    xi: `ξ`,
    xlarr: `⟵`,
    xlArr: `⟸`,
    xmap: `⟼`,
    xnis: `⋻`,
    xodot: `⨀`,
    Xopf: `𝕏`,
    xopf: `𝕩`,
    xoplus: `⨁`,
    xotime: `⨂`,
    xrarr: `⟶`,
    xrArr: `⟹`,
    Xscr: `𝒳`,
    xscr: `𝓍`,
    xsqcup: `⨆`,
    xuplus: `⨄`,
    xutri: `△`,
    xvee: `⋁`,
    xwedge: `⋀`,
    Yacute: `Ý`,
    yacute: `ý`,
    YAcy: `Я`,
    yacy: `я`,
    Ycirc: `Ŷ`,
    ycirc: `ŷ`,
    Ycy: `Ы`,
    ycy: `ы`,
    yen: `¥`,
    Yfr: `𝔜`,
    yfr: `𝔶`,
    YIcy: `Ї`,
    yicy: `ї`,
    Yopf: `𝕐`,
    yopf: `𝕪`,
    Yscr: `𝒴`,
    yscr: `𝓎`,
    YUcy: `Ю`,
    yucy: `ю`,
    yuml: `ÿ`,
    Yuml: `Ÿ`,
    Zacute: `Ź`,
    zacute: `ź`,
    Zcaron: `Ž`,
    zcaron: `ž`,
    Zcy: `З`,
    zcy: `з`,
    Zdot: `Ż`,
    zdot: `ż`,
    zeetrf: `ℨ`,
    ZeroWidthSpace: `​`,
    Zeta: `Ζ`,
    zeta: `ζ`,
    zfr: `𝔷`,
    Zfr: `ℨ`,
    ZHcy: `Ж`,
    zhcy: `ж`,
    zigrarr: `⇝`,
    zopf: `𝕫`,
    Zopf: `ℤ`,
    Zscr: `𝒵`,
    zscr: `𝓏`,
    zwj: `‍`,
    zwnj: `‌`,
  },
  F =
    /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,
  I = {},
  fe = {};
function pe(e) {
  var t,
    n,
    r = fe[e];
  if (!r) {
    for (r = fe[e] = [], t = 0; t < 128; t++)
      ((n = String.fromCharCode(t)),
        /^[0-9a-z]$/i.test(n) ? r.push(n) : r.push(`%` + (`0` + t.toString(16).toUpperCase()).slice(-2)));
    for (t = 0; t < e.length; t++) r[e.charCodeAt(t)] = e[t];
  }
  return r;
}
function L(e, t, n) {
  var r,
    i,
    a,
    o,
    s = ``;
  for (
    typeof t != `string` && ((n = t), (t = L.defaultChars)), n === void 0 && (n = !0), o = pe(t), r = 0, i = e.length;
    r < i;
    r++
  )
    ((a = e.charCodeAt(r)),
      n && a === 37 && r + 2 < i && /^[0-9a-f]{2}$/i.test(e.slice(r + 1, r + 3))
        ? ((s += e.slice(r, r + 3)), (r += 2))
        : a < 128
          ? (s += o[a])
          : a >= 55296 && a <= 57343
            ? a >= 55296 && a <= 56319 && r + 1 < i && ((a = e.charCodeAt(r + 1)), a >= 56320) && a <= 57343
              ? ((s += encodeURIComponent(e[r] + e[r + 1])), r++)
              : (s += `%EF%BF%BD`)
            : (s += encodeURIComponent(e[r])));
  return s;
}
((L.defaultChars = `;/?:@&=+$,-_.!~*'()#`), (L.componentChars = `-_.!~*'()`));
var me = L,
  he = {};
function ge(e) {
  var t,
    n,
    r = he[e];
  if (!r) {
    for (r = he[e] = [], t = 0; t < 128; t++) ((n = String.fromCharCode(t)), r.push(n));
    for (t = 0; t < e.length; t++)
      ((n = e.charCodeAt(t)), (r[n] = `%` + (`0` + n.toString(16).toUpperCase()).slice(-2)));
  }
  return r;
}
function R(e, t) {
  var n;
  return (
    typeof t != `string` && (t = R.defaultChars),
    (n = ge(t)),
    e.replace(/(%[a-f0-9]{2})+/gi, function (e) {
      for (var t, r, i, a, o, s = ``, c = 0, l = e.length; c < l; c += 3)
        ((t = parseInt(e.slice(c + 1, c + 3), 16)),
          t < 128
            ? (s += n[t])
            : (224 & t) == 192 && c + 3 < l && ((r = parseInt(e.slice(c + 4, c + 6), 16)), (192 & r) == 128)
              ? ((o = ((t << 6) & 1984) | (63 & r)), (s += o < 128 ? `��` : String.fromCharCode(o)), (c += 3))
              : (240 & t) == 224 &&
                  c + 6 < l &&
                  ((r = parseInt(e.slice(c + 4, c + 6), 16)),
                  (i = parseInt(e.slice(c + 7, c + 9), 16)),
                  (192 & r) == 128) &&
                  (192 & i) == 128
                ? ((o = ((t << 12) & 61440) | ((r << 6) & 4032) | (63 & i)),
                  (s += o < 2048 || (o >= 55296 && o <= 57343) ? `���` : String.fromCharCode(o)),
                  (c += 6))
                : (248 & t) == 240 &&
                    c + 9 < l &&
                    ((r = parseInt(e.slice(c + 4, c + 6), 16)),
                    (i = parseInt(e.slice(c + 7, c + 9), 16)),
                    (a = parseInt(e.slice(c + 10, c + 12), 16)),
                    (192 & r) == 128) &&
                    (192 & i) == 128 &&
                    (192 & a) == 128
                  ? ((o = ((t << 18) & 1835008) | ((r << 12) & 258048) | ((i << 6) & 4032) | (63 & a)),
                    o < 65536 || o > 1114111
                      ? (s += `����`)
                      : ((o -= 65536), (s += String.fromCharCode(55296 + (o >> 10), 56320 + (1023 & o)))),
                    (c += 9))
                  : (s += `�`));
      return s;
    })
  );
}
((R.defaultChars = `;/?:@&=+$,#`), (R.componentChars = ``));
var z = R,
  _e = function (e) {
    var t = ``;
    return (
      (t += e.protocol || ``),
      (t += e.slashes ? `//` : ``),
      (t += e.auth ? e.auth + `@` : ``),
      e.hostname && e.hostname.indexOf(`:`) !== -1 ? (t += `[` + e.hostname + `]`) : (t += e.hostname || ``),
      (t += e.port ? `:` + e.port : ``),
      (t += e.pathname || ``),
      (t += e.search || ``),
      (t += e.hash || ``),
      t
    );
  };
function ve() {
  ((this.protocol = null),
    (this.slashes = null),
    (this.auth = null),
    (this.port = null),
    (this.hostname = null),
    (this.hash = null),
    (this.search = null),
    (this.pathname = null));
}
var ye = /^([a-z0-9.+-]+:)/i,
  be = /:[0-9]*$/,
  xe = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
  Se = [
    `%`,
    `/`,
    `?`,
    `;`,
    `#`,
    `'`,
    `{`,
    `}`,
    `|`,
    `\\`,
    `^`,
    '`',
    `<`,
    `>`,
    `"`,
    '`',
    ` `,
    `\r`,
    `
`,
    `	`,
  ],
  Ce = [`/`, `?`, `#`],
  we = 255,
  Te = /^[+a-z0-9A-Z_-]{0,63}$/,
  Ee = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
  De = { javascript: !0, 'javascript:': !0 },
  Oe = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    'http:': !0,
    'https:': !0,
    'ftp:': !0,
    'gopher:': !0,
    'file:': !0,
  };
function ke(e, t) {
  var n;
  return e && e instanceof ve ? e : ((n = new ve()), n.parse(e, t), n);
}
((ve.prototype.parse = function (e, t) {
  var n,
    r,
    i = e;
  if (((i = i.trim()), !t && e.split(`#`).length === 1 && ((e = xe.exec(i)), e)))
    return ((this.pathname = e[1]), e[2] && (this.search = e[2]), this);
  if (
    ((e = ye.exec(i)),
    e && ((e = e[0]), (n = e.toLowerCase()), (this.protocol = e), (i = i.substr(e.length))),
    (t || e || i.match(/^\/\/[^@\/]+@[^@\/]+/)) &&
      ((g = i.substr(0, 2) === `//`), !g || (e && De[e]) || ((i = i.substr(2)), (this.slashes = !0))),
    !De[e] && (g || (e && !Oe[e])))
  ) {
    var a = -1;
    for (s = 0; s < Ce.length; s++) ((r = i.indexOf(Ce[s])), r !== -1 && (a === -1 || r < a) && (a = r));
    for (
      t = a === -1 ? i.lastIndexOf(`@`) : i.lastIndexOf(`@`, a),
        t !== -1 && ((g = i.slice(0, t)), (i = i.slice(t + 1)), (this.auth = g)),
        a = -1,
        s = 0;
      s < Se.length;
      s++
    )
      ((r = i.indexOf(Se[s])), r !== -1 && (a === -1 || r < a) && (a = r));
    if (
      (a === -1 && (a = i.length),
      i[a - 1] === `:` && a--,
      (e = i.slice(0, a)),
      (i = i.slice(a)),
      (t =
        (this.parseHost(e),
        (this.hostname = this.hostname || ``),
        this.hostname[0] === `[` && this.hostname[this.hostname.length - 1] === `]`)),
      !t)
    )
      for (var o = this.hostname.split(/\./), s = 0, c = o.length; s < c; s++) {
        var l = o[s];
        if (l && !l.match(Te)) {
          for (var u = ``, d = 0, f = l.length; d < f; d++) l.charCodeAt(d) > 127 ? (u += `x`) : (u += l[d]);
          if (!u.match(Te)) {
            var p = o.slice(0, s),
              m = o.slice(s + 1),
              h = l.match(Ee);
            (h && (p.push(h[1]), m.unshift(h[2])), m.length && (i = m.join(`.`) + i), (this.hostname = p.join(`.`)));
            break;
          }
        }
      }
    (this.hostname.length > we && (this.hostname = ``),
      t && (this.hostname = this.hostname.substr(1, this.hostname.length - 2)));
  }
  var g = i.indexOf(`#`),
    e = (g !== -1 && ((this.hash = i.substr(g)), (i = i.slice(0, g))), i.indexOf(`?`));
  return (
    e !== -1 && ((this.search = i.substr(e)), (i = i.slice(0, e))),
    i && (this.pathname = i),
    Oe[n] && this.hostname && !this.pathname && (this.pathname = ``),
    this
  );
}),
  (ve.prototype.parseHost = function (e) {
    var t = be.exec(e);
    (t && ((t = t[0]), t !== `:` && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))),
      e && (this.hostname = e));
  }));
var Ae = ke,
  B = ((I.encode = me), (I.decode = z), (I.format = _e), (I.parse = Ae), {}),
  je =
    /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
  Me = /[\0-\x1F\x7F-\x9F]/,
  Ne =
    /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,
  Pe = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
  Fe =
    ((B.Any = je),
    (B.Cc = Me),
    (B.Cf = Ne),
    (B.P = F),
    (B.Z = Pe),
    (function (e) {
      function t(e) {
        return Object.prototype.toString.call(e);
      }
      function n(e) {
        return t(e) === `[object String]`;
      }
      var r = Object.prototype.hasOwnProperty;
      function i(e, t) {
        return r.call(e, t);
      }
      function a(e) {
        return (
          Array.prototype.slice.call(arguments, 1).forEach(function (t) {
            if (t) {
              if (typeof t != `object`) throw TypeError(t + `must be object`);
              Object.keys(t).forEach(function (n) {
                e[n] = t[n];
              });
            }
          }),
          e
        );
      }
      function o(e, t, n) {
        return [].concat(e.slice(0, t), n, e.slice(t + 1));
      }
      function s(e) {
        return (
          !(e >= 55296 && e <= 57343) &&
          !(e >= 64976 && e <= 65007) &&
          (65535 & e) != 65535 &&
          (65535 & e) != 65534 &&
          !(e >= 0 && e <= 8) &&
          e !== 11 &&
          !(e >= 14 && e <= 31) &&
          !(e >= 127 && e <= 159) &&
          !(e > 1114111)
        );
      }
      function c(e) {
        var t, n;
        return e > 65535
          ? ((e -= 65536), (t = 55296 + (e >> 10)), (n = 56320 + (1023 & e)), String.fromCharCode(t, n))
          : String.fromCharCode(e);
      }
      var l = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,
        u = RegExp(l.source + `|&([a-z#][a-z0-9]{1,31});`, `gi`),
        d = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
        f = de;
      function p(e, t) {
        var n = 0;
        return i(f, t)
          ? f[t]
          : t.charCodeAt(0) === 35 &&
              d.test(t) &&
              ((n = t[1].toLowerCase() === `x` ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10)), s(n))
            ? c(n)
            : e;
      }
      function m(e) {
        return e.indexOf(`\\`) < 0 ? e : e.replace(l, `$1`);
      }
      function h(e) {
        return e.indexOf(`\\`) < 0 && e.indexOf(`&`) < 0
          ? e
          : e.replace(u, function (e, t, n) {
              return t || p(e, n);
            });
      }
      var g = /[&<>"]/,
        _ = /[&<>"]/g,
        v = { '&': `&amp;`, '<': `&lt;`, '>': `&gt;`, '"': `&quot;` };
      function y(e) {
        return v[e];
      }
      function b(e) {
        return g.test(e) ? e.replace(_, y) : e;
      }
      var x = /[.?*+^$[\]\\(){}|-]/g;
      function S(e) {
        return e.replace(x, `\\$&`);
      }
      function C(e) {
        switch (e) {
          case 9:
          case 32:
            return !0;
        }
        return !1;
      }
      function w(e) {
        if (e >= 8192 && e <= 8202) return !0;
        switch (e) {
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 32:
          case 160:
          case 5760:
          case 8239:
          case 8287:
          case 12288:
            return !0;
        }
        return !1;
      }
      var T = F;
      function E(e) {
        return T.test(e);
      }
      function D(e) {
        switch (e) {
          case 33:
          case 34:
          case 35:
          case 36:
          case 37:
          case 38:
          case 39:
          case 40:
          case 41:
          case 42:
          case 43:
          case 44:
          case 45:
          case 46:
          case 47:
          case 58:
          case 59:
          case 60:
          case 61:
          case 62:
          case 63:
          case 64:
          case 91:
          case 92:
          case 93:
          case 94:
          case 95:
          case 96:
          case 123:
          case 124:
          case 125:
          case 126:
            return !0;
          default:
            return !1;
        }
      }
      function O(e) {
        return ((e = e.trim().replace(/\s+/g, ` `)), e.toLowerCase().toUpperCase());
      }
      ((e.lib = {}),
        (e.lib.mdurl = I),
        (e.lib.ucmicro = B),
        (e.assign = a),
        (e.isString = n),
        (e.has = i),
        (e.unescapeMd = m),
        (e.unescapeAll = h),
        (e.isValidEntityCode = s),
        (e.fromCodePoint = c),
        (e.escapeHtml = b),
        (e.arrayReplaceAt = o),
        (e.isSpace = C),
        (e.isWhiteSpace = w),
        (e.isMdAsciiPunct = D),
        (e.isPunctChar = E),
        (e.escapeRE = S),
        (e.normalizeReference = O));
    })(P),
    {}),
  Ie = function (e, t, n) {
    var r,
      i,
      a,
      o,
      s = -1,
      c = e.posMax,
      l = e.pos;
    for (e.pos = t + 1, r = 1; e.pos < c; ) {
      if (((a = e.src.charCodeAt(e.pos)), a === 93 && (r--, r === 0))) {
        i = !0;
        break;
      }
      if (((o = e.pos), e.md.inline.skipToken(e), a === 91)) {
        if (o === e.pos - 1) r++;
        else if (n) return ((e.pos = l), -1);
      }
    }
    return (i && (s = e.pos), (e.pos = l), s);
  },
  Le = P.unescapeAll,
  Re = function (e, t, n) {
    var r,
      i,
      a = 0,
      o = t,
      s = { ok: !1, pos: 0, lines: 0, str: `` };
    if (e.charCodeAt(t) === 60)
      for (t++; t < n; ) {
        if (((r = e.charCodeAt(t)), r === 10 || r === 60)) return s;
        if (r === 62) return ((s.pos = t + 1), (s.str = Le(e.slice(o + 1, t))), (s.ok = !0), s);
        r === 92 && t + 1 < n ? (t += 2) : t++;
      }
    else {
      for (i = 0; t < n && ((r = e.charCodeAt(t)), !(r === 32 || r < 32 || r === 127)); )
        if (r === 92 && t + 1 < n) {
          if (e.charCodeAt(t + 1) === 32) break;
          t += 2;
        } else {
          if (r === 40 && (i++, i > 32)) return s;
          if (r === 41) {
            if (i === 0) break;
            i--;
          }
          t++;
        }
      o !== t && i === 0 && ((s.str = Le(e.slice(o, t))), (s.lines = a), (s.pos = t), (s.ok = !0));
    }
    return s;
  },
  ze = P.unescapeAll,
  Be =
    ((Fe.parseLinkLabel = Ie),
    (Fe.parseLinkDestination = Re),
    (Fe.parseLinkTitle = function (e, t, n) {
      var r,
        i,
        a = 0,
        o = t,
        s = { ok: !1, pos: 0, lines: 0, str: `` };
      if (!(t >= n) && ((i = e.charCodeAt(t)), i === 34 || i === 39 || i === 40))
        for (t++, i === 40 && (i = 41); t < n; ) {
          if (((r = e.charCodeAt(t)), r === i))
            return ((s.pos = t + 1), (s.lines = a), (s.str = ze(e.slice(o + 1, t))), (s.ok = !0), s);
          if (r === 40 && i === 41) return s;
          ((r === 10 || (r === 92 && t + 1 < n && (t++, e.charCodeAt(t) === 10))) && a++, t++);
        }
      return s;
    }),
    P.assign),
  Ve = P.unescapeAll,
  V = P.escapeHtml,
  H = {};
function U() {
  this.rules = Be({}, H);
}
((H.code_inline = function (e, t, n, r, i) {
  var a = e[t];
  return `<code` + i.renderAttrs(a) + `>` + V(e[t].content) + `</code>`;
}),
  (H.code_block = function (e, t, n, r, i) {
    var a = e[t];
    return (
      `<pre` +
      i.renderAttrs(a) +
      `><code>` +
      V(e[t].content) +
      `</code></pre>
`
    );
  }),
  (H.fence = function (e, t, n, r, i) {
    var a,
      e = e[t],
      t = e.info ? Ve(e.info).trim() : ``,
      o = ``,
      s = ``;
    return (
      t && ((a = t.split(/(\s+)/g)), (o = a[0]), (s = a.slice(2).join(``))),
      (a = (n.highlight && n.highlight(e.content, o, s)) || V(e.content)),
      a.indexOf(`<pre`) === 0
        ? a +
          `
`
        : t
          ? ((s = e.attrIndex(`class`)),
            (t = e.attrs ? e.attrs.slice() : []),
            s < 0 ? t.push([`class`, n.langPrefix + o]) : ((t[s] = t[s].slice()), (t[s][1] += ` ` + n.langPrefix + o)),
            (s = { attrs: t }),
            `<pre><code` +
              i.renderAttrs(s) +
              `>` +
              a +
              `</code></pre>
`)
          : `<pre><code` +
            i.renderAttrs(e) +
            `>` +
            a +
            `</code></pre>
`
    );
  }),
  (H.image = function (e, t, n, r, i) {
    var a = e[t];
    return ((a.attrs[a.attrIndex(`alt`)][1] = i.renderInlineAsText(a.children, n, r)), i.renderToken(e, t, n));
  }),
  (H.hardbreak = function (e, t, n) {
    return n.xhtmlOut
      ? `<br />
`
      : `<br>
`;
  }),
  (H.softbreak = function (e, t, n) {
    return n.breaks
      ? n.xhtmlOut
        ? `<br />
`
        : `<br>
`
      : `
`;
  }),
  (H.text = function (e, t) {
    return V(e[t].content);
  }),
  (H.html_block = function (e, t) {
    return e[t].content;
  }),
  (H.html_inline = function (e, t) {
    return e[t].content;
  }),
  (U.prototype.renderAttrs = function (e) {
    var t, n, r;
    if (!e.attrs) return ``;
    for (r = ``, t = 0, n = e.attrs.length; t < n; t++) r += ` ` + V(e.attrs[t][0]) + `="` + V(e.attrs[t][1]) + `"`;
    return r;
  }),
  (U.prototype.renderToken = function (e, t, n) {
    var r = ``,
      i = !1,
      a = e[t];
    return a.hidden
      ? ``
      : (a.block &&
          a.nesting !== -1 &&
          t &&
          e[t - 1].hidden &&
          (r += `
`),
        (r += (a.nesting === -1 ? `</` : `<`) + a.tag),
        (r += this.renderAttrs(a)),
        a.nesting === 0 && n.xhtmlOut && (r += ` /`),
        a.block &&
          ((i = !0), a.nesting === 1) &&
          t + 1 < e.length &&
          ((n = e[t + 1]), n.type === `inline` || n.hidden || (n.nesting === -1 && n.tag === a.tag)) &&
          (i = !1),
        (r += i
          ? `>
`
          : `>`),
        r);
  }),
  (U.prototype.renderInline = function (e, t, n) {
    for (var r, i = ``, a = this.rules, o = 0, s = e.length; o < s; o++)
      ((r = e[o].type), a[r] === void 0 ? (i += this.renderToken(e, o, t)) : (i += a[r](e, o, t, n, this)));
    return i;
  }),
  (U.prototype.renderInlineAsText = function (e, t, n) {
    for (var r = ``, i = 0, a = e.length; i < a; i++)
      e[i].type === `text`
        ? (r += e[i].content)
        : e[i].type === `image`
          ? (r += this.renderInlineAsText(e[i].children, t, n))
          : e[i].type === `softbreak` &&
            (r += `
`);
    return r;
  }),
  (U.prototype.render = function (e, t, n) {
    for (var r, i = ``, a = this.rules, o = 0, s = e.length; o < s; o++)
      ((r = e[o].type),
        r === `inline`
          ? (i += this.renderInline(e[o].children, t, n))
          : a[r] === void 0
            ? (i += this.renderToken(e, o, t, n))
            : (i += a[e[o].type](e, o, t, n, this)));
    return i;
  }));
var He = U;
function W() {
  ((this.__rules__ = []), (this.__cache__ = null));
}
((W.prototype.__find__ = function (e) {
  for (var t = 0; t < this.__rules__.length; t++) if (this.__rules__[t].name === e) return t;
  return -1;
}),
  (W.prototype.__compile__ = function () {
    var e = this,
      t = [``];
    (e.__rules__.forEach(function (e) {
      e.enabled &&
        e.alt.forEach(function (e) {
          t.indexOf(e) < 0 && t.push(e);
        });
    }),
      (e.__cache__ = {}),
      t.forEach(function (t) {
        ((e.__cache__[t] = []),
          e.__rules__.forEach(function (n) {
            !n.enabled || (t && n.alt.indexOf(t) < 0) || e.__cache__[t].push(n.fn);
          }));
      }));
  }),
  (W.prototype.at = function (e, t, n) {
    var r = this.__find__(e),
      n = n || {};
    if (r === -1) throw Error(`Parser rule not found: ` + e);
    ((this.__rules__[r].fn = t), (this.__rules__[r].alt = n.alt || []), (this.__cache__ = null));
  }),
  (W.prototype.before = function (e, t, n, r) {
    var i = this.__find__(e),
      r = r || {};
    if (i === -1) throw Error(`Parser rule not found: ` + e);
    (this.__rules__.splice(i, 0, {
      name: t,
      enabled: !0,
      fn: n,
      alt: r.alt || [],
    }),
      (this.__cache__ = null));
  }),
  (W.prototype.after = function (e, t, n, r) {
    var i = this.__find__(e),
      r = r || {};
    if (i === -1) throw Error(`Parser rule not found: ` + e);
    (this.__rules__.splice(i + 1, 0, {
      name: t,
      enabled: !0,
      fn: n,
      alt: r.alt || [],
    }),
      (this.__cache__ = null));
  }),
  (W.prototype.push = function (e, t, n) {
    ((n = n || {}), this.__rules__.push({ name: e, enabled: !0, fn: t, alt: n.alt || [] }), (this.__cache__ = null));
  }),
  (W.prototype.enable = function (e, t) {
    Array.isArray(e) || (e = [e]);
    var n = [];
    return (
      e.forEach(function (e) {
        var r = this.__find__(e);
        if (r < 0) {
          if (t) return;
          throw Error(`Rules manager: invalid rule name ` + e);
        }
        ((this.__rules__[r].enabled = !0), n.push(e));
      }, this),
      (this.__cache__ = null),
      n
    );
  }),
  (W.prototype.enableOnly = function (e, t) {
    (Array.isArray(e) || (e = [e]),
      this.__rules__.forEach(function (e) {
        e.enabled = !1;
      }),
      this.enable(e, t));
  }),
  (W.prototype.disable = function (e, t) {
    Array.isArray(e) || (e = [e]);
    var n = [];
    return (
      e.forEach(function (e) {
        var r = this.__find__(e);
        if (r < 0) {
          if (t) return;
          throw Error(`Rules manager: invalid rule name ` + e);
        }
        ((this.__rules__[r].enabled = !1), n.push(e));
      }, this),
      (this.__cache__ = null),
      n
    );
  }),
  (W.prototype.getRules = function (e) {
    return (this.__cache__ === null && this.__compile__(), this.__cache__[e] || []);
  }));
var Ue = W,
  We = /\r\n?|\n/g,
  Ge = /\0/g,
  Ke = function (e) {
    var t = e.src.replace(
      We,
      `
`
    );
    ((t = t.replace(Ge, `�`)), (e.src = t));
  },
  qe = function (e) {
    var t;
    e.inlineMode
      ? ((t = new e.Token(`inline`, ``, 0)), (t.content = e.src), (t.map = [0, 1]), (t.children = []), e.tokens.push(t))
      : e.md.block.parse(e.src, e.md, e.env, e.tokens);
  },
  Je = function (e) {
    for (var t, n = e.tokens, r = 0, i = n.length; r < i; r++)
      ((t = n[r]), t.type === `inline` && e.md.inline.parse(t.content, e.md, e.env, t.children));
  },
  Ye = P.arrayReplaceAt;
function Xe(e) {
  return /^<a[>\s]/i.test(e);
}
function Ze(e) {
  return /^<\/a\s*>/i.test(e);
}
var Qe = function (e) {
    var t,
      n,
      r,
      i,
      a,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _ = e.tokens;
    if (e.md.options.linkify) {
      for (n = 0, r = _.length; n < r; n++)
        if (_[n].type === `inline` && e.md.linkify.pretest(_[n].content)) {
          for (i = _[n].children, p = 0, t = i.length - 1; t >= 0; t--)
            if (((o = i[t]), o.type === `link_close`))
              for (t--; i[t].level !== o.level && i[t].type !== `link_open`; ) t--;
            else if (
              (o.type === `html_inline` && (Xe(o.content) && p > 0 && p--, Ze(o.content)) && p++,
              !(p > 0) && o.type === `text` && e.md.linkify.test(o.content))
            ) {
              for (l = o.content, g = e.md.linkify.match(l), s = [], f = o.level, d = 0, c = 0; c < g.length; c++)
                ((m = g[c].url),
                  (m = e.md.normalizeLink(m)),
                  e.md.validateLink(m) &&
                    ((h = g[c].text),
                    (h = g[c].schema
                      ? g[c].schema !== `mailto:` || /^mailto:/i.test(h)
                        ? e.md.normalizeLinkText(h)
                        : e.md.normalizeLinkText(`mailto:` + h).replace(/^mailto:/, ``)
                      : e.md.normalizeLinkText(`http://` + h).replace(/^http:\/\//, ``)),
                    (u = g[c].index),
                    u > d && ((a = new e.Token(`text`, ``, 0)), (a.content = l.slice(d, u)), (a.level = f), s.push(a)),
                    (a = new e.Token(`link_open`, `a`, 1)),
                    (a.attrs = [[`href`, m]]),
                    (a.level = f++),
                    (a.markup = `linkify`),
                    (a.info = `auto`),
                    s.push(a),
                    (a = new e.Token(`text`, ``, 0)),
                    (a.content = h),
                    (a.level = f),
                    s.push(a),
                    (a = new e.Token(`link_close`, `a`, -1)),
                    (a.level = --f),
                    (a.markup = `linkify`),
                    (a.info = `auto`),
                    s.push(a),
                    (d = g[c].lastIndex)));
              (d < l.length && ((a = new e.Token(`text`, ``, 0)), (a.content = l.slice(d)), (a.level = f), s.push(a)),
                (_[n].children = i = Ye(i, t, s)));
            }
        }
    }
  },
  $e = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
  et = /\((c|tm|r|p)\)/i,
  tt = /\((c|tm|r|p)\)/gi,
  nt = { c: `©`, r: `®`, p: `§`, tm: `™` };
function rt(e, t) {
  return nt[t.toLowerCase()];
}
function it(e) {
  for (var t, n = 0, r = e.length - 1; r >= 0; r--)
    ((t = e[r]),
      t.type !== `text` || n || (t.content = t.content.replace(tt, rt)),
      t.type === `link_open` && t.info === `auto` && n--,
      t.type === `link_close` && t.info === `auto` && n++);
}
function at(e) {
  for (var t, n = 0, r = e.length - 1; r >= 0; r--)
    ((t = e[r]),
      t.type !== `text` ||
        n ||
        ($e.test(t.content) &&
          (t.content = t.content
            .replace(/\+-/g, `±`)
            .replace(/\.{2,}/g, `…`)
            .replace(/([?!])…/g, `$1..`)
            .replace(/([?!]){4,}/g, `$1$1$1`)
            .replace(/,{2,}/g, `,`)
            .replace(/(^|[^-])---(?=[^-]|$)/gm, `$1—`)
            .replace(/(^|\s)--(?=\s|$)/gm, `$1–`)
            .replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, `$1–`))),
      t.type === `link_open` && t.info === `auto` && n--,
      t.type === `link_close` && t.info === `auto` && n++);
}
var ot = function (e) {
    var t;
    if (e.md.options.typographer)
      for (t = e.tokens.length - 1; t >= 0; t--)
        e.tokens[t].type === `inline` &&
          (et.test(e.tokens[t].content) && it(e.tokens[t].children), $e.test(e.tokens[t].content)) &&
          at(e.tokens[t].children);
  },
  st = P.isWhiteSpace,
  ct = P.isPunctChar,
  lt = P.isMdAsciiPunct,
  ut = /['"]/,
  dt = /['"]/g,
  ft = `’`;
function pt(e, t, n) {
  return e.substr(0, t) + n + e.substr(t + 1);
}
function mt(e, t) {
  for (var n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x = [], S = 0; S < e.length; S++) {
    for (n = e[S], s = e[S].level, _ = x.length - 1; _ >= 0 && !(x[_].level <= s); _--);
    if (((x.length = _ + 1), n.type === `text`)) {
      ((r = n.content), (a = 0), (o = r.length));
      e: for (; a < o && ((dt.lastIndex = a), (i = dt.exec(r)), i); ) {
        if (((h = g = !0), (a = i.index + 1), (v = i[0] === `'`), (l = 32), i.index - 1 >= 0))
          l = r.charCodeAt(i.index - 1);
        else
          for (_ = S - 1; _ >= 0 && !(e[_].type === `softbreak` || e[_].type === `hardbreak`); _--)
            if (e[_].content) {
              l = e[_].content.charCodeAt(e[_].content.length - 1);
              break;
            }
        if (((u = 32), a < o)) u = r.charCodeAt(a);
        else
          for (_ = S + 1; _ < e.length && !(e[_].type === `softbreak` || e[_].type === `hardbreak`); _++)
            if (e[_].content) {
              u = e[_].content.charCodeAt(0);
              break;
            }
        if (
          ((d = lt(l) || ct(String.fromCharCode(l))),
          (f = lt(u) || ct(String.fromCharCode(u))),
          (p = st(l)),
          (m = st(u)),
          (!m && (!f || p || d)) || (h = !1),
          (!p && (!d || m || f)) || (g = !1),
          u === 34 && i[0] === `"` && l >= 48 && l <= 57 && (g = h = !1),
          h && g && ((h = d), (g = f)),
          h || g)
        ) {
          if (g) {
            for (_ = x.length - 1; _ >= 0 && ((c = x[_]), !(x[_].level < s)); _--)
              if (c.single === v && x[_].level === s) {
                ((c = x[_]),
                  (b = v
                    ? ((y = t.md.options.quotes[2]), t.md.options.quotes[3])
                    : ((y = t.md.options.quotes[0]), t.md.options.quotes[1])),
                  (n.content = pt(n.content, i.index, b)),
                  (e[c.token].content = pt(e[c.token].content, c.pos, y)),
                  (a += b.length - 1),
                  c.token === S && (a += y.length - 1),
                  (r = n.content),
                  (o = r.length),
                  (x.length = _));
                continue e;
              }
          }
          h
            ? x.push({ token: S, pos: i.index, single: v, level: s })
            : g && v && (n.content = pt(n.content, i.index, ft));
        } else v && (n.content = pt(n.content, i.index, ft));
      }
    }
  }
}
var ht = function (e) {
  var t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === `inline` && ut.test(e.tokens[t].content) && mt(e.tokens[t].children, e);
};
function G(e, t, n) {
  ((this.type = e),
    (this.tag = t),
    (this.attrs = null),
    (this.map = null),
    (this.nesting = n),
    (this.level = 0),
    (this.children = null),
    (this.content = ``),
    (this.markup = ``),
    (this.info = ``),
    (this.meta = null),
    (this.block = !1),
    (this.hidden = !1));
}
((G.prototype.attrIndex = function (e) {
  var t, n, r;
  if (this.attrs) {
    for (t = this.attrs, n = 0, r = t.length; n < r; n++) if (t[n][0] === e) return n;
  }
  return -1;
}),
  (G.prototype.attrPush = function (e) {
    this.attrs ? this.attrs.push(e) : (this.attrs = [e]);
  }),
  (G.prototype.attrSet = function (e, t) {
    var n = this.attrIndex(e),
      e = [e, t];
    n < 0 ? this.attrPush(e) : (this.attrs[n] = e);
  }),
  (G.prototype.attrGet = function (e) {
    var e = this.attrIndex(e),
      t = null;
    return (e >= 0 && (t = this.attrs[e][1]), t);
  }),
  (G.prototype.attrJoin = function (e, t) {
    var n = this.attrIndex(e);
    n < 0 ? this.attrPush([e, t]) : (this.attrs[n][1] = this.attrs[n][1] + ` ` + t);
  }));
var gt = G,
  _t = gt;
function vt(e, t, n) {
  ((this.src = e), (this.env = n), (this.tokens = []), (this.inlineMode = !1), (this.md = t));
}
vt.prototype.Token = _t;
var yt = vt,
  bt = Ue,
  xt = [
    [`normalize`, Ke],
    [`block`, qe],
    [`inline`, Je],
    [`linkify`, Qe],
    [`replacements`, ot],
    [`smartquotes`, ht],
  ];
function St() {
  this.ruler = new bt();
  for (var e = 0; e < xt.length; e++) this.ruler.push(xt[e][0], xt[e][1]);
}
((St.prototype.process = function (e) {
  for (var t = this.ruler.getRules(``), n = 0, r = t.length; n < r; n++) t[n](e);
}),
  (St.prototype.State = yt));
var Ct = St,
  wt = P.isSpace;
function Tt(e, t) {
  var n = e.bMarks[t] + e.tShift[t],
    t = e.eMarks[t];
  return e.src.substr(n, t - n);
}
function Et(e) {
  for (var t = [], n = 0, r = e.length, i = !1, a = 0, o = ``, s = e.charCodeAt(n); n < r; )
    (s === 124 && (a = i ? ((o += e.substring(a, n - 1)), n) : (t.push(o + e.substring(a, n)), (o = ``), n + 1)),
      (i = s === 92),
      n++,
      (s = e.charCodeAt(n)));
  return (t.push(o + e.substring(a)), t);
}
var Dt = function (e, t, n, r) {
    var i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y;
    if (
      t + 2 > n ||
      ((l = t + 1), e.sCount[l] < e.blkIndent) ||
      e.sCount[l] - e.blkIndent >= 4 ||
      ((o = e.bMarks[l] + e.tShift[l]), o >= e.eMarks[l]) ||
      ((v = e.src.charCodeAt(o++)), v !== 124 && v !== 45 && v !== 58) ||
      o >= e.eMarks[l] ||
      ((y = e.src.charCodeAt(o++)), y !== 124 && y !== 45 && y !== 58 && !wt(y)) ||
      (v === 45 && wt(y))
    )
      return !1;
    for (; o < e.eMarks[l]; ) {
      if (((i = e.src.charCodeAt(o)), i !== 124 && i !== 45 && i !== 58 && !wt(i))) return !1;
      o++;
    }
    for (a = Tt(e, t + 1), u = a.split(`|`), p = [], s = 0; s < u.length; s++) {
      if (((m = u[s].trim()), !m)) {
        if (s === 0 || s === u.length - 1) continue;
        return !1;
      }
      if (!/^:?-+:?$/.test(m)) return !1;
      m.charCodeAt(m.length - 1) === 58
        ? p.push(m.charCodeAt(0) === 58 ? `center` : `right`)
        : m.charCodeAt(0) === 58
          ? p.push(`left`)
          : p.push(``);
    }
    if (
      ((a = Tt(e, t).trim()),
      a.indexOf(`|`) === -1 ||
        e.sCount[t] - e.blkIndent >= 4 ||
        ((u = Et(a)),
        u.length && u[0] === `` && u.shift(),
        u.length && u[u.length - 1] === `` && u.pop(),
        (d = u.length),
        d === 0 || d !== p.length))
    )
      return !1;
    if (!r) {
      for (
        v = e.parentType,
          e.parentType = `table`,
          _ = e.md.block.ruler.getRules(`blockquote`),
          f = e.push(`table_open`, `table`, 1),
          f.map = y = [t, 0],
          f = e.push(`thead_open`, `thead`, 1),
          f.map = [t, t + 1],
          f = e.push(`tr_open`, `tr`, 1),
          f.map = [t, t + 1],
          s = 0;
        s < u.length;
        s++
      )
        ((f = e.push(`th_open`, `th`, 1)),
          p[s] && (f.attrs = [[`style`, `text-align:` + p[s]]]),
          (f = e.push(`inline`, ``, 0)),
          (f.content = u[s].trim()),
          (f.children = []),
          (f = e.push(`th_close`, `th`, -1)));
      for (
        f = e.push(`tr_close`, `tr`, -1), f = e.push(`thead_close`, `thead`, -1), l = t + 2;
        l < n && !(e.sCount[l] < e.blkIndent);
        l++
      ) {
        for (g = !1, s = 0, c = _.length; s < c; s++)
          if (_[s](e, l, n, !0)) {
            g = !0;
            break;
          }
        if (g || ((a = Tt(e, l).trim()), !a) || e.sCount[l] - e.blkIndent >= 4) break;
        for (
          u = Et(a),
            u.length && u[0] === `` && u.shift(),
            u.length && u[u.length - 1] === `` && u.pop(),
            l === t + 2 && ((f = e.push(`tbody_open`, `tbody`, 1)), (f.map = h = [t + 2, 0])),
            f = e.push(`tr_open`, `tr`, 1),
            f.map = [l, l + 1],
            s = 0;
          s < d;
          s++
        )
          ((f = e.push(`td_open`, `td`, 1)),
            p[s] && (f.attrs = [[`style`, `text-align:` + p[s]]]),
            (f = e.push(`inline`, ``, 0)),
            (f.content = u[s] ? u[s].trim() : ``),
            (f.children = []),
            (f = e.push(`td_close`, `td`, -1)));
        f = e.push(`tr_close`, `tr`, -1);
      }
      (h && ((f = e.push(`tbody_close`, `tbody`, -1)), (h[1] = l)),
        (f = e.push(`table_close`, `table`, -1)),
        (y[1] = l),
        (e.parentType = v),
        (e.line = l));
    }
    return !0;
  },
  Ot = function (e, t, n) {
    var r, i, a;
    if (e.sCount[t] - e.blkIndent < 4) return !1;
    for (i = r = t + 1; r < n; )
      if (e.isEmpty(r)) r++;
      else {
        if (!(e.sCount[r] - e.blkIndent >= 4)) break;
        (r++, (i = r));
      }
    return (
      (e.line = i),
      (a = e.push(`code_block`, `code`, 0)),
      (a.content =
        e.getLines(t, i, 4 + e.blkIndent, !1) +
        `
`),
      (a.map = [t, e.line]),
      !0
    );
  },
  kt = function (e, t, n, r) {
    var i,
      a,
      o,
      s,
      c,
      l,
      u = !1,
      d = e.bMarks[t] + e.tShift[t],
      f = e.eMarks[t];
    if (
      e.sCount[t] - e.blkIndent >= 4 ||
      d + 3 > f ||
      ((i = e.src.charCodeAt(d)), i !== 126 && i !== 96) ||
      ((c = d), (d = e.skipChars(d, i)), (a = d - c), a < 3) ||
      ((l = e.src.slice(c, d)), (o = e.src.slice(d, f)), i === 96 && o.indexOf(String.fromCharCode(i)) >= 0)
    )
      return !1;
    if (!r) {
      for (
        s = t;
        s++, !(s >= n || ((d = c = e.bMarks[s] + e.tShift[s]), (f = e.eMarks[s]), d < f && e.sCount[s] < e.blkIndent));
      )
        if (
          e.src.charCodeAt(d) === i &&
          !(e.sCount[s] - e.blkIndent >= 4) &&
          ((d = e.skipChars(d, i)), !(d - c < a)) &&
          ((d = e.skipSpaces(d)), !(d < f))
        ) {
          u = !0;
          break;
        }
      ((a = e.sCount[t]),
        (e.line = s + +!!u),
        (r = e.push(`fence`, `code`, 0)),
        (r.info = o),
        (r.content = e.getLines(t + 1, s, a, !0)),
        (r.markup = l),
        (r.map = [t, e.line]));
    }
    return !0;
  },
  At = P.isSpace,
  jt = function (e, t, n, r) {
    var i,
      a,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b,
      x,
      S,
      C = e.lineMax,
      w = e.bMarks[t] + e.tShift[t],
      T = e.eMarks[t];
    if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(w++) !== 62) return !1;
    if (!r) {
      for (
        s = f = e.sCount[t] + 1,
          e.src.charCodeAt(w) === 32
            ? (w++, s++, f++, (i = !1), (v = !0))
            : e.src.charCodeAt(w) === 9
              ? ((v = !0), (i = (e.bsCount[t] + f) % 4 != 3 || (w++, s++, f++, !1)))
              : (v = !1),
          p = [e.bMarks[t]],
          e.bMarks[t] = w;
        w < T && ((a = e.src.charCodeAt(w)), At(a));
      )
        (a === 9 ? (f += 4 - ((f + e.bsCount[t] + +!!i) % 4)) : f++, w++);
      for (
        m = [e.bsCount[t]],
          e.bsCount[t] = e.sCount[t] + 1 + +!!v,
          l = w >= T,
          g = [e.sCount[t]],
          e.sCount[t] = f - s,
          _ = [e.tShift[t]],
          e.tShift[t] = w - e.bMarks[t],
          b = e.md.block.ruler.getRules(`blockquote`),
          r = e.parentType,
          e.parentType = `blockquote`,
          d = t + 1;
        d < n && ((S = e.sCount[d] < e.blkIndent), (w = e.bMarks[d] + e.tShift[d]), (T = e.eMarks[d]), !(w >= T));
        d++
      )
        if (e.src.charCodeAt(w++) !== 62 || S) {
          if (l) break;
          for (y = !1, o = 0, c = b.length; o < c; o++)
            if (b[o](e, d, n, !0)) {
              y = !0;
              break;
            }
          if (y) {
            ((e.lineMax = d),
              e.blkIndent !== 0 &&
                (p.push(e.bMarks[d]),
                m.push(e.bsCount[d]),
                _.push(e.tShift[d]),
                g.push(e.sCount[d]),
                (e.sCount[d] -= e.blkIndent)));
            break;
          }
          (p.push(e.bMarks[d]), m.push(e.bsCount[d]), _.push(e.tShift[d]), g.push(e.sCount[d]), (e.sCount[d] = -1));
        } else {
          for (
            s = f = e.sCount[d] + 1,
              e.src.charCodeAt(w) === 32
                ? (w++, s++, f++, (i = !1), (v = !0))
                : e.src.charCodeAt(w) === 9
                  ? ((v = !0), (i = (e.bsCount[d] + f) % 4 != 3 || (w++, s++, f++, !1)))
                  : (v = !1),
              p.push(e.bMarks[d]),
              e.bMarks[d] = w;
            w < T && ((a = e.src.charCodeAt(w)), At(a));
          )
            (a === 9 ? (f += 4 - ((f + e.bsCount[d] + +!!i) % 4)) : f++, w++);
          ((l = w >= T),
            m.push(e.bsCount[d]),
            (e.bsCount[d] = e.sCount[d] + 1 + +!!v),
            g.push(e.sCount[d]),
            (e.sCount[d] = f - s),
            _.push(e.tShift[d]),
            (e.tShift[d] = w - e.bMarks[d]));
        }
      for (
        h = e.blkIndent,
          e.blkIndent = 0,
          x = e.push(`blockquote_open`, `blockquote`, 1),
          x.markup = `>`,
          x.map = u = [t, 0],
          e.md.block.tokenize(e, t, d),
          x = e.push(`blockquote_close`, `blockquote`, -1),
          x.markup = `>`,
          e.lineMax = C,
          e.parentType = r,
          u[1] = e.line,
          o = 0;
        o < _.length;
        o++
      )
        ((e.bMarks[o + t] = p[o]), (e.tShift[o + t] = _[o]), (e.sCount[o + t] = g[o]), (e.bsCount[o + t] = m[o]));
      e.blkIndent = h;
    }
    return !0;
  },
  Mt = P.isSpace,
  Nt = function (e, t, n, r) {
    var i,
      a,
      o,
      s = e.bMarks[t] + e.tShift[t],
      c = e.eMarks[t];
    if (e.sCount[t] - e.blkIndent >= 4 || ((i = e.src.charCodeAt(s++)), i !== 42 && i !== 45 && i !== 95)) return !1;
    for (a = 1; s < c; ) {
      if (((o = e.src.charCodeAt(s++)), o !== i && !Mt(o))) return !1;
      o === i && a++;
    }
    return (
      !(a < 3) &&
      (r ||
        ((e.line = t + 1),
        (r = e.push(`hr`, `hr`, 0)),
        (r.map = [t, e.line]),
        (r.markup = Array(a + 1).join(String.fromCharCode(i)))),
      !0)
    );
  },
  Pt = P.isSpace;
function Ft(e, t) {
  var n = e.bMarks[t] + e.tShift[t],
    t = e.eMarks[t],
    r = e.src.charCodeAt(n++);
  return (r !== 42 && r !== 45 && r !== 43) || (n < t && ((r = e.src.charCodeAt(n)), !Pt(r))) ? -1 : n;
}
function It(e, t) {
  var n,
    r = e.bMarks[t] + e.tShift[t],
    i = r,
    a = e.eMarks[t];
  if (i + 1 >= a || ((n = e.src.charCodeAt(i++)), n < 48 || n > 57)) return -1;
  for (;;) {
    if (i >= a) return -1;
    if (((n = e.src.charCodeAt(i++)), !(n >= 48 && n <= 57))) {
      if (n === 41 || n === 46) break;
      return -1;
    }
    if (i - r >= 10) return -1;
  }
  return i < a && ((n = e.src.charCodeAt(i)), !Pt(n)) ? -1 : i;
}
function Lt(e, t) {
  for (var n = e.level + 2, r = t + 2, i = e.tokens.length - 2; r < i; r++)
    e.tokens[r].level === n &&
      e.tokens[r].type === `paragraph_open` &&
      ((e.tokens[r + 2].hidden = !0), (e.tokens[r].hidden = !0), (r += 2));
}
var Rt = function (e, t, n, r) {
    var i,
      a,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b,
      x,
      S,
      C,
      w,
      T,
      E,
      D = !1,
      O = !0;
    if (
      e.sCount[t] - e.blkIndent >= 4 ||
      (e.listIndent >= 0 && e.sCount[t] - e.listIndent >= 4 && e.sCount[t] < e.blkIndent)
    )
      return !1;
    if ((r && e.parentType === `paragraph` && e.sCount[t] >= e.blkIndent && (D = !0), (x = It(e, t)) >= 0)) {
      if (((c = !0), (C = e.bMarks[t] + e.tShift[t]), (g = Number(e.src.slice(C, x - 1))), D && g !== 1)) return !1;
    } else {
      if (!((x = Ft(e, t)) >= 0)) return !1;
      c = !1;
    }
    if (D && e.skipSpaces(x) >= e.eMarks[t]) return !1;
    if (((d = e.src.charCodeAt(x - 1)), !r)) {
      for (
        D = e.tokens.length,
          c
            ? ((E = e.push(`ordered_list_open`, `ol`, 1)), g !== 1 && (E.attrs = [[`start`, g]]))
            : (E = e.push(`bullet_list_open`, `ul`, 1)),
          E.map = r = [t, 0],
          E.markup = String.fromCharCode(d),
          p = t,
          S = !1,
          T = e.md.block.ruler.getRules(`list`),
          g = e.parentType,
          e.parentType = `list`;
        p < n;
      ) {
        for (b = x, f = e.eMarks[p], s = m = e.sCount[p] + x - (e.bMarks[t] + e.tShift[t]); b < f; ) {
          if (((i = e.src.charCodeAt(b)), i === 9)) m += 4 - ((m + e.bsCount[p]) % 4);
          else {
            if (i !== 32) break;
            m++;
          }
          b++;
        }
        if (
          ((a = b),
          (l = a >= f ? 1 : m - s),
          l > 4 && (l = 1),
          (s += l),
          (E = e.push(`list_item_open`, `li`, 1)),
          (E.markup = String.fromCharCode(d)),
          (E.map = l = [t, 0]),
          c && (E.info = e.src.slice(C, x - 1)),
          (y = e.tight),
          (v = e.tShift[t]),
          (_ = e.sCount[t]),
          (h = e.listIndent),
          (e.listIndent = e.blkIndent),
          (e.blkIndent = s),
          (e.tight = !0),
          (e.tShift[t] = a - e.bMarks[t]),
          (e.sCount[t] = m),
          a >= f && e.isEmpty(t + 1) ? (e.line = Math.min(e.line + 2, n)) : e.md.block.tokenize(e, t, n, !0),
          (e.tight && !S) || (O = !1),
          (S = e.line - t > 1 && e.isEmpty(e.line - 1)),
          (e.blkIndent = e.listIndent),
          (e.listIndent = h),
          (e.tShift[t] = v),
          (e.sCount[t] = _),
          (e.tight = y),
          (E = e.push(`list_item_close`, `li`, -1)),
          (E.markup = String.fromCharCode(d)),
          (p = t = e.line),
          (l[1] = p),
          (a = e.bMarks[t]),
          p >= n || e.sCount[p] < e.blkIndent || e.sCount[t] - e.blkIndent >= 4)
        )
          break;
        for (w = !1, o = 0, u = T.length; o < u; o++)
          if (T[o](e, p, n, !0)) {
            w = !0;
            break;
          }
        if (w) break;
        if (c) {
          if (((x = It(e, p)), x < 0)) break;
          C = e.bMarks[p] + e.tShift[p];
        } else if (((x = Ft(e, p)), x < 0)) break;
        if (d !== e.src.charCodeAt(x - 1)) break;
      }
      ((E = c ? e.push(`ordered_list_close`, `ol`, -1) : e.push(`bullet_list_close`, `ul`, -1)),
        (E.markup = String.fromCharCode(d)),
        (r[1] = p),
        (e.line = p),
        (e.parentType = g),
        O && Lt(e, D));
    }
    return !0;
  },
  zt = P.normalizeReference,
  Bt = P.isSpace,
  Vt = function (e, t, n, r) {
    var i,
      a,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      v,
      y = 0,
      b = e.bMarks[t] + e.tShift[t],
      x = e.eMarks[t],
      S = t + 1;
    if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(b) !== 91) return !1;
    for (; ++b < x; )
      if (e.src.charCodeAt(b) === 93 && e.src.charCodeAt(b - 1) !== 92) {
        if (b + 1 === x || e.src.charCodeAt(b + 1) !== 58) return !1;
        break;
      }
    for (
      s = e.lineMax, _ = e.md.block.ruler.getRules(`reference`), f = e.parentType, e.parentType = `reference`;
      S < s && !e.isEmpty(S);
      S++
    )
      if (!(e.sCount[S] - e.blkIndent > 3) && !(e.sCount[S] < 0)) {
        for (g = !1, l = 0, u = _.length; l < u; l++)
          if (_[l](e, S, s, !0)) {
            g = !0;
            break;
          }
        if (g) break;
      }
    for (h = e.getLines(t, S, e.blkIndent, !1).trim(), x = h.length, b = 1; b < x; b++) {
      if (((i = h.charCodeAt(b)), i === 91)) return !1;
      if (i === 93) {
        d = b;
        break;
      }
      (i === 10 || (i === 92 && (b++, b < x) && h.charCodeAt(b) === 10)) && y++;
    }
    if (d < 0 || h.charCodeAt(d + 1) !== 58) return !1;
    for (b = d + 2; b < x; b++)
      if (((i = h.charCodeAt(b)), i === 10)) y++;
      else if (!Bt(i)) break;
    if (
      ((p = e.md.helpers.parseLinkDestination(h, b, x)),
      !p.ok || ((c = e.md.normalizeLink(p.str)), !e.md.validateLink(c)))
    )
      return !1;
    for (b = p.pos, y += p.lines, a = b, o = y, m = b; b < x; b++)
      if (((i = h.charCodeAt(b)), i === 10)) y++;
      else if (!Bt(i)) break;
    for (
      p = e.md.helpers.parseLinkTitle(h, b, x),
        b < x && m !== b && p.ok ? ((v = p.str), (b = p.pos), (y += p.lines)) : ((v = ``), (b = a), (y = o));
      b < x && ((i = h.charCodeAt(b)), Bt(i));
    )
      b++;
    if (b < x && h.charCodeAt(b) !== 10 && v) for (v = ``, b = a, y = o; b < x && ((i = h.charCodeAt(b)), Bt(i)); ) b++;
    return (
      !(b < x && h.charCodeAt(b) !== 10) &&
      ((m = zt(h.slice(1, d))), !!m) &&
      (r ||
        (e.env.references === void 0 && (e.env.references = {}),
        e.env.references[m] === void 0 && (e.env.references[m] = { title: v, href: c }),
        (e.parentType = f),
        (e.line = t + y + 1)),
      !0)
    );
  },
  Ht =
    `address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.section.source.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(
      `.`
    ),
  Ut = {},
  Wt = `<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`,
  Gt = `<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>`,
  Kt = RegExp(
    `^(?:` +
      Wt +
      `|` +
      Gt +
      `|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|<[?][\\s\\S]*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`
  ),
  qt = RegExp(`^(?:` + Wt + `|` + Gt + `)`),
  Jt = ((Ut.HTML_TAG_RE = Kt), (Ut.HTML_OPEN_CLOSE_TAG_RE = qt), Ht),
  Yt = Ut.HTML_OPEN_CLOSE_TAG_RE,
  K = [
    [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
    [/^<!--/, /-->/, !0],
    [/^<\?/, /\?>/, !0],
    [/^<![A-Z]/, />/, !0],
    [/^<!\[CDATA\[/, /\]\]>/, !0],
    [RegExp(`^</?(` + Jt.join(`|`) + `)(?=(\\s|/?>|$))`, `i`), /^$/, !0],
    [RegExp(Yt.source + `\\s*$`), /^$/, !1],
  ],
  Xt = function (e, t, n, r) {
    var i,
      a,
      o,
      s = e.bMarks[t] + e.tShift[t],
      c = e.eMarks[t];
    if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(s) !== 60) return !1;
    for (o = e.src.slice(s, c), i = 0; i < K.length && !K[i][0].test(o); i++);
    if (i === K.length) return !1;
    if (r) return K[i][2];
    if (((a = t + 1), !K[i][1].test(o))) {
      for (; a < n && !(e.sCount[a] < e.blkIndent); a++)
        if (((s = e.bMarks[a] + e.tShift[a]), (c = e.eMarks[a]), (o = e.src.slice(s, c)), K[i][1].test(o))) {
          o.length !== 0 && a++;
          break;
        }
    }
    return (
      (e.line = a),
      (r = e.push(`html_block`, ``, 0)),
      (r.map = [t, a]),
      (r.content = e.getLines(t, a, e.blkIndent, !0)),
      !0
    );
  },
  Zt = P.isSpace,
  Qt = function (e, t, n, r) {
    var i,
      a,
      o = e.bMarks[t] + e.tShift[t],
      s = e.eMarks[t];
    if (e.sCount[t] - e.blkIndent >= 4 || ((i = e.src.charCodeAt(o)), i !== 35 || o >= s)) return !1;
    for (a = 1, i = e.src.charCodeAt(++o); i === 35 && o < s && a <= 6; ) (a++, (i = e.src.charCodeAt(++o)));
    return (
      !(a > 6 || (o < s && !Zt(i))) &&
      (r ||
        ((s = e.skipSpacesBack(s, o)),
        (r = e.skipCharsBack(s, 35, o)),
        r > o && Zt(e.src.charCodeAt(r - 1)) && (s = r),
        (e.line = t + 1),
        (r = e.push(`heading_open`, `h` + String(a), 1)),
        (r.markup = `########`.slice(0, a)),
        (r.map = [t, e.line]),
        (r = e.push(`inline`, ``, 0)),
        (r.content = e.src.slice(o, s).trim()),
        (r.map = [t, e.line]),
        (r.children = []),
        (r = e.push(`heading_close`, `h` + String(a), -1)),
        (r.markup = `########`.slice(0, a))),
      !0)
    );
  },
  $t = function (e, t, n) {
    var r,
      i,
      a,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p = t + 1,
      m = e.md.block.ruler.getRules(`paragraph`);
    if (e.sCount[t] - e.blkIndent >= 4) return !1;
    for (f = e.parentType, e.parentType = `paragraph`; p < n && !e.isEmpty(p); p++)
      if (!(e.sCount[p] - e.blkIndent > 3)) {
        if (
          e.sCount[p] >= e.blkIndent &&
          ((c = e.bMarks[p] + e.tShift[p]), (l = e.eMarks[p]), c < l) &&
          ((d = e.src.charCodeAt(c)), d === 45 || d === 61) &&
          ((c = e.skipChars(c, d)), (c = e.skipSpaces(c)), c >= l)
        ) {
          u = d === 61 ? 1 : 2;
          break;
        }
        if (!(e.sCount[p] < 0)) {
          for (i = !1, a = 0, o = m.length; a < o; a++)
            if (m[a](e, p, n, !0)) {
              i = !0;
              break;
            }
          if (i) break;
        }
      }
    return (
      !!u &&
      ((r = e.getLines(t, p, e.blkIndent, !1).trim()),
      (e.line = p + 1),
      (s = e.push(`heading_open`, `h` + String(u), 1)),
      (s.markup = String.fromCharCode(d)),
      (s.map = [t, e.line]),
      (s = e.push(`inline`, ``, 0)),
      (s.content = r),
      (s.map = [t, e.line - 1]),
      (s.children = []),
      (s = e.push(`heading_close`, `h` + String(u), -1)),
      (s.markup = String.fromCharCode(d)),
      (e.parentType = f),
      !0)
    );
  },
  en = function (e, t) {
    var n,
      r,
      i,
      a,
      o,
      s = t + 1,
      c = e.md.block.ruler.getRules(`paragraph`),
      l = e.lineMax,
      u = e.parentType;
    for (e.parentType = `paragraph`; s < l && !e.isEmpty(s); s++)
      if (!(e.sCount[s] - e.blkIndent > 3) && !(e.sCount[s] < 0)) {
        for (r = !1, i = 0, a = c.length; i < a; i++)
          if (c[i](e, s, l, !0)) {
            r = !0;
            break;
          }
        if (r) break;
      }
    return (
      (n = e.getLines(t, s, e.blkIndent, !1).trim()),
      (e.line = s),
      (o = e.push(`paragraph_open`, `p`, 1)),
      (o.map = [t, e.line]),
      (o = e.push(`inline`, ``, 0)),
      (o.content = n),
      (o.map = [t, e.line]),
      (o.children = []),
      (o = e.push(`paragraph_close`, `p`, -1)),
      (e.parentType = u),
      !0
    );
  },
  tn = gt,
  nn = P.isSpace;
function q(e, t, n, r) {
  var i, a, o, s, c, l, u, d;
  for (
    this.src = e,
      this.md = t,
      this.env = n,
      this.tokens = r,
      this.bMarks = [],
      this.eMarks = [],
      this.tShift = [],
      this.sCount = [],
      this.bsCount = [],
      this.blkIndent = 0,
      this.line = 0,
      this.lineMax = 0,
      this.tight = !1,
      this.ddIndent = -1,
      this.listIndent = -1,
      this.parentType = `root`,
      this.level = 0,
      this.result = ``,
      a = this.src,
      d = !1,
      o = s = l = u = 0,
      c = a.length;
    s < c;
    s++
  ) {
    if (((i = a.charCodeAt(s)), !d)) {
      if (nn(i)) {
        (l++, i === 9 ? (u += 4 - (u % 4)) : u++);
        continue;
      }
      d = !0;
    }
    (i !== 10 && s !== c - 1) ||
      (i !== 10 && s++,
      this.bMarks.push(o),
      this.eMarks.push(s),
      this.tShift.push(l),
      this.sCount.push(u),
      this.bsCount.push(0),
      (d = !1),
      (l = 0),
      (u = 0),
      (o = s + 1));
  }
  (this.bMarks.push(a.length),
    this.eMarks.push(a.length),
    this.tShift.push(0),
    this.sCount.push(0),
    this.bsCount.push(0),
    (this.lineMax = this.bMarks.length - 1));
}
((q.prototype.push = function (e, t, n) {
  return (
    (e = new tn(e, t, n)),
    (e.block = !0),
    n < 0 && this.level--,
    (e.level = this.level),
    n > 0 && this.level++,
    this.tokens.push(e),
    e
  );
}),
  (q.prototype.isEmpty = function (e) {
    return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
  }),
  (q.prototype.skipEmptyLines = function (e) {
    for (var t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
    return e;
  }),
  (q.prototype.skipSpaces = function (e) {
    for (var t, n = this.src.length; e < n && ((t = this.src.charCodeAt(e)), nn(t)); e++);
    return e;
  }),
  (q.prototype.skipSpacesBack = function (e, t) {
    if (!(e <= t)) {
      for (; e > t; ) if (!nn(this.src.charCodeAt(--e))) return e + 1;
    }
    return e;
  }),
  (q.prototype.skipChars = function (e, t) {
    for (var n = this.src.length; e < n && this.src.charCodeAt(e) === t; e++);
    return e;
  }),
  (q.prototype.skipCharsBack = function (e, t, n) {
    if (!(e <= n)) {
      for (; e > n; ) if (t !== this.src.charCodeAt(--e)) return e + 1;
    }
    return e;
  }),
  (q.prototype.getLines = function (e, t, n, r) {
    var i,
      a,
      o,
      s,
      c,
      l,
      u,
      d = e;
    if (e >= t) return ``;
    for (l = Array(t - e), i = 0; d < t; d++, i++) {
      for (a = 0, u = s = this.bMarks[d], c = d + 1 < t || r ? this.eMarks[d] + 1 : this.eMarks[d]; s < c && a < n; ) {
        if (((o = this.src.charCodeAt(s)), nn(o))) o === 9 ? (a += 4 - ((a + this.bsCount[d]) % 4)) : a++;
        else {
          if (!(s - u < this.tShift[d])) break;
          a++;
        }
        s++;
      }
      l[i] = a > n ? Array(a - n + 1).join(` `) + this.src.slice(s, c) : this.src.slice(s, c);
    }
    return l.join(``);
  }),
  (q.prototype.Token = tn));
var rn = q,
  an = Ue,
  on = [
    [`table`, Dt, [`paragraph`, `reference`]],
    [`code`, Ot],
    [`fence`, kt, [`paragraph`, `reference`, `blockquote`, `list`]],
    [`blockquote`, jt, [`paragraph`, `reference`, `blockquote`, `list`]],
    [`hr`, Nt, [`paragraph`, `reference`, `blockquote`, `list`]],
    [`list`, Rt, [`paragraph`, `reference`, `blockquote`]],
    [`reference`, Vt],
    [`html_block`, Xt, [`paragraph`, `reference`, `blockquote`]],
    [`heading`, Qt, [`paragraph`, `reference`, `blockquote`]],
    [`lheading`, $t],
    [`paragraph`, en],
  ];
function sn() {
  this.ruler = new an();
  for (var e = 0; e < on.length; e++) this.ruler.push(on[e][0], on[e][1], { alt: (on[e][2] || []).slice() });
}
((sn.prototype.tokenize = function (e, t, n) {
  for (
    var r, i, a = this.ruler.getRules(``), o = a.length, s = t, c = !1, l = e.md.options.maxNesting;
    s < n && ((e.line = s = e.skipEmptyLines(s)), !(s >= n || e.sCount[s] < e.blkIndent));
  ) {
    if (e.level >= l) {
      e.line = n;
      break;
    }
    for (i = 0; i < o && ((r = a[i](e, s, n, !1)), !r); i++);
    ((e.tight = !c),
      e.isEmpty(e.line - 1) && (c = !0),
      (s = e.line),
      s < n && e.isEmpty(s) && ((c = !0), s++, (e.line = s)));
  }
}),
  (sn.prototype.parse = function (e, t, n, r) {
    e && ((e = new this.State(e, t, n, r)), this.tokenize(e, e.line, e.lineMax));
  }),
  (sn.prototype.State = rn));
var cn = sn;
function ln(e) {
  switch (e) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
for (
  var un = function (e, t) {
      for (var n = e.pos; n < e.posMax && !ln(e.src.charCodeAt(n)); ) n++;
      return n !== e.pos && (t || (e.pending += e.src.slice(e.pos, n)), (e.pos = n), !0);
    },
    dn = P.isSpace,
    fn = function (e, t) {
      var n,
        r,
        i,
        a = e.pos;
      if (e.src.charCodeAt(a) !== 10) return !1;
      if (((n = e.pending.length - 1), (r = e.posMax), !t))
        if (n >= 0 && e.pending.charCodeAt(n) === 32)
          if (n >= 1 && e.pending.charCodeAt(n - 1) === 32) {
            for (i = n - 1; i >= 1 && e.pending.charCodeAt(i - 1) === 32; ) i--;
            ((e.pending = e.pending.slice(0, i)), e.push(`hardbreak`, `br`, 0));
          } else ((e.pending = e.pending.slice(0, -1)), e.push(`softbreak`, `br`, 0));
        else e.push(`softbreak`, `br`, 0);
      for (a++; a < r && dn(e.src.charCodeAt(a)); ) a++;
      return ((e.pos = a), !0);
    },
    pn = P.isSpace,
    mn = [],
    hn = 0;
  hn < 256;
  hn++
)
  mn.push(0);
`\\!"#$%&'()*+,./:;<=>?@[]^_\`{|}~-`.split(``).forEach(function (e) {
  mn[e.charCodeAt(0)] = 1;
});
var gn = function (e, t) {
    var n,
      r = e.pos,
      i = e.posMax;
    if (e.src.charCodeAt(r) !== 92) return !1;
    if ((r++, r < i)) {
      if (((n = e.src.charCodeAt(r)), n < 256 && mn[n] !== 0)) return (t || (e.pending += e.src[r]), (e.pos += 2), !0);
      if (n === 10) {
        for (t || e.push(`hardbreak`, `br`, 0), r++; r < i && ((n = e.src.charCodeAt(r)), pn(n)); ) r++;
        return ((e.pos = r), !0);
      }
    }
    return (t || (e.pending += `\\`), e.pos++, !0);
  },
  _n = function (e, t) {
    var n,
      r,
      i,
      a,
      o,
      s,
      c,
      l = e.pos,
      u = e.src.charCodeAt(l);
    if (u !== 96) return !1;
    for (u = l, l++, n = e.posMax; l < n && e.src.charCodeAt(l) === 96; ) l++;
    if (((r = e.src.slice(u, l)), (s = r.length), !(e.backticksScanned && (e.backticks[s] || 0) <= u))) {
      for (a = o = l; (a = e.src.indexOf('`', o)) !== -1; ) {
        for (o = a + 1; o < n && e.src.charCodeAt(o) === 96; ) o++;
        if (((c = o - a), c === s))
          return (
            t ||
              ((i = e.push(`code_inline`, `code`, 0)),
              (i.markup = r),
              (i.content = e.src
                .slice(l, a)
                .replace(/\n/g, ` `)
                .replace(/^ (.+) $/, `$1`))),
            (e.pos = o),
            !0
          );
        e.backticks[c] = a;
      }
      e.backticksScanned = !0;
    }
    return (t || (e.pending += r), (e.pos += s), !0);
  },
  vn = {};
function yn(e, t) {
  for (var n, r, i, a, o = [], s = t.length, c = 0; c < s; c++)
    ((r = t[c]),
      r.marker === 126 &&
        r.end !== -1 &&
        ((i = t[r.end]),
        (a = e.tokens[r.token]),
        (a.type = `s_open`),
        (a.tag = `s`),
        (a.nesting = 1),
        (a.markup = `~~`),
        (a.content = ``),
        (a = e.tokens[i.token]),
        (a.type = `s_close`),
        (a.tag = `s`),
        (a.nesting = -1),
        (a.markup = `~~`),
        (a.content = ``),
        e.tokens[i.token - 1].type === `text`) &&
        e.tokens[i.token - 1].content === `~` &&
        o.push(i.token - 1));
  for (; o.length; ) {
    for (c = o.pop(), n = c + 1; n < e.tokens.length && e.tokens[n].type === `s_close`; ) n++;
    (n--, c !== n && ((a = e.tokens[n]), (e.tokens[n] = e.tokens[c]), (e.tokens[c] = a)));
  }
}
((vn.tokenize = function (e, t) {
  var n,
    r,
    i,
    a,
    o,
    s = e.pos,
    c = e.src.charCodeAt(s);
  if (t || c !== 126 || ((r = e.scanDelims(e.pos, !0)), (a = r.length), (o = String.fromCharCode(c)), a < 2)) return !1;
  for (a % 2 && ((i = e.push(`text`, ``, 0)), (i.content = o), a--), n = 0; n < a; n += 2)
    ((i = e.push(`text`, ``, 0)),
      (i.content = o + o),
      e.delimiters.push({
        marker: c,
        length: 0,
        token: e.tokens.length - 1,
        end: -1,
        open: r.can_open,
        close: r.can_close,
      }));
  return ((e.pos += r.length), !0);
}),
  (vn.postProcess = function (e) {
    var t,
      n = e.tokens_meta,
      r = e.tokens_meta.length;
    for (yn(e, e.delimiters), t = 0; t < r; t++) n[t] && n[t].delimiters && yn(e, n[t].delimiters);
  }));
var bn = {};
function xn(e, t) {
  for (var n, r, i, a, o, s = t.length - 1; s >= 0; s--)
    ((n = t[s]),
      (n.marker !== 95 && n.marker !== 42) ||
        (n.end !== -1 &&
          ((r = t[n.end]),
          (o =
            s > 0 &&
            t[s - 1].end === n.end + 1 &&
            t[s - 1].marker === n.marker &&
            t[s - 1].token === n.token - 1 &&
            t[n.end + 1].token === r.token + 1),
          (a = String.fromCharCode(n.marker)),
          (i = e.tokens[n.token]),
          (i.type = o ? `strong_open` : `em_open`),
          (i.tag = o ? `strong` : `em`),
          (i.nesting = 1),
          (i.markup = o ? a + a : a),
          (i.content = ``),
          (i = e.tokens[r.token]),
          (i.type = o ? `strong_close` : `em_close`),
          (i.tag = o ? `strong` : `em`),
          (i.nesting = -1),
          (i.markup = o ? a + a : a),
          (i.content = ``),
          o) &&
          ((e.tokens[t[s - 1].token].content = ``), (e.tokens[t[n.end + 1].token].content = ``), s--)));
}
((bn.tokenize = function (e, t) {
  var n,
    r,
    i,
    a = e.pos,
    o = e.src.charCodeAt(a);
  if (t || (o !== 95 && o !== 42)) return !1;
  for (r = e.scanDelims(e.pos, o === 42), n = 0; n < r.length; n++)
    ((i = e.push(`text`, ``, 0)),
      (i.content = String.fromCharCode(o)),
      e.delimiters.push({
        marker: o,
        length: r.length,
        token: e.tokens.length - 1,
        end: -1,
        open: r.can_open,
        close: r.can_close,
      }));
  return ((e.pos += r.length), !0);
}),
  (bn.postProcess = function (e) {
    var t,
      n = e.tokens_meta,
      r = e.tokens_meta.length;
    for (xn(e, e.delimiters), t = 0; t < r; t++) n[t] && n[t].delimiters && xn(e, n[t].delimiters);
  }));
var Sn = P.normalizeReference,
  Cn = P.isSpace,
  wn = function (e, t) {
    var n,
      r,
      i,
      a,
      o,
      s,
      c = ``,
      l = ``,
      u = e.pos,
      d = e.posMax,
      f = e.pos,
      p = !0;
    if (e.src.charCodeAt(e.pos) !== 91 || ((a = e.pos + 1), (i = e.md.helpers.parseLinkLabel(e, e.pos, !0)), i < 0))
      return !1;
    if (((o = i + 1), o < d && e.src.charCodeAt(o) === 40)) {
      for (p = !1, o++; o < d && ((n = e.src.charCodeAt(o)), !(!Cn(n) && n !== 10)); o++);
      if (o >= d) return !1;
      if (((f = o), (s = e.md.helpers.parseLinkDestination(e.src, o, e.posMax)), s.ok)) {
        for (
          c = e.md.normalizeLink(s.str), e.md.validateLink(c) ? (o = s.pos) : (c = ``), f = o;
          o < d && ((n = e.src.charCodeAt(o)), !(!Cn(n) && n !== 10));
          o++
        );
        if (((s = e.md.helpers.parseLinkTitle(e.src, o, e.posMax)), o < d && f !== o && s.ok))
          for (l = s.str, o = s.pos; o < d && ((n = e.src.charCodeAt(o)), !(!Cn(n) && n !== 10)); o++);
      }
      ((o >= d || e.src.charCodeAt(o) !== 41) && (p = !0), o++);
    }
    if (p) {
      if (e.env.references === void 0) return !1;
      if (
        (o < d && e.src.charCodeAt(o) === 91 && ((f = o + 1), (o = e.md.helpers.parseLinkLabel(e, o)), o >= 0)
          ? (r = e.src.slice(f, o++))
          : (o = i + 1),
        (r = r || e.src.slice(a, i)),
        (s = e.env.references[Sn(r)]),
        !s)
      )
        return ((e.pos = u), !1);
      ((c = s.href), (l = s.title));
    }
    return (
      t ||
        ((e.pos = a),
        (e.posMax = i),
        (p = e.push(`link_open`, `a`, 1)),
        (p.attrs = f = [[`href`, c]]),
        l && f.push([`title`, l]),
        e.md.inline.tokenize(e),
        (p = e.push(`link_close`, `a`, -1))),
      (e.pos = o),
      (e.posMax = d),
      !0
    );
  },
  Tn = P.normalizeReference,
  En = P.isSpace,
  Dn = function (e, t) {
    var n,
      r,
      i,
      a,
      o,
      s,
      c,
      l,
      u = ``,
      d = e.pos,
      f = e.posMax;
    if (
      e.src.charCodeAt(e.pos) !== 33 ||
      e.src.charCodeAt(e.pos + 1) !== 91 ||
      ((i = e.pos + 2), (r = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1)), r < 0)
    )
      return !1;
    if (((a = r + 1), a < f && e.src.charCodeAt(a) === 40)) {
      for (a++; a < f && ((n = e.src.charCodeAt(a)), !(!En(n) && n !== 10)); a++);
      if (a >= f) return !1;
      for (
        l = a,
          o = e.md.helpers.parseLinkDestination(e.src, a, e.posMax),
          o.ok && ((u = e.md.normalizeLink(o.str)), e.md.validateLink(u) ? (a = o.pos) : (u = ``)),
          l = a;
        a < f && ((n = e.src.charCodeAt(a)), !(!En(n) && n !== 10));
        a++
      );
      if (((o = e.md.helpers.parseLinkTitle(e.src, a, e.posMax)), a < f && l !== a && o.ok))
        for (s = o.str, a = o.pos; a < f && ((n = e.src.charCodeAt(a)), !(!En(n) && n !== 10)); a++);
      else s = ``;
      if (a >= f || e.src.charCodeAt(a) !== 41) return ((e.pos = d), !1);
      a++;
    } else {
      if (e.env.references === void 0) return !1;
      if (
        (a < f && e.src.charCodeAt(a) === 91 && ((l = a + 1), (a = e.md.helpers.parseLinkLabel(e, a)), a >= 0)
          ? (c = e.src.slice(l, a++))
          : (a = r + 1),
        (c = c || e.src.slice(i, r)),
        (o = e.env.references[Tn(c)]),
        !o)
      )
        return ((e.pos = d), !1);
      ((u = o.href), (s = o.title));
    }
    return (
      t ||
        ((l = e.src.slice(i, r)),
        e.md.inline.parse(l, e.md, e.env, (c = [])),
        (d = e.push(`image`, `img`, 0)),
        (d.attrs = o =
          [
            [`src`, u],
            [`alt`, ``],
          ]),
        (d.children = c),
        (d.content = l),
        s && o.push([`title`, s])),
      (e.pos = a),
      (e.posMax = f),
      !0
    );
  },
  On =
    /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,
  kn = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/,
  An = function (e, t) {
    var n,
      r,
      i,
      a,
      o,
      s = e.pos;
    if (e.src.charCodeAt(s) !== 60) return !1;
    for (a = e.pos, o = e.posMax; ; ) {
      if (++s >= o || ((i = e.src.charCodeAt(s)), i === 60)) return !1;
      if (i === 62) break;
    }
    return (
      (a = e.src.slice(a + 1, s)),
      kn.test(a)
        ? ((n = e.md.normalizeLink(a)),
          !!e.md.validateLink(n) &&
            (t ||
              ((r = e.push(`link_open`, `a`, 1)),
              (r.attrs = [[`href`, n]]),
              (r.markup = `autolink`),
              (r.info = `auto`),
              (r = e.push(`text`, ``, 0)),
              (r.content = e.md.normalizeLinkText(a)),
              (r = e.push(`link_close`, `a`, -1)),
              (r.markup = `autolink`),
              (r.info = `auto`)),
            (e.pos += a.length + 2),
            !0))
        : !!On.test(a) &&
          ((n = e.md.normalizeLink(`mailto:` + a)), !!e.md.validateLink(n)) &&
          (t ||
            ((r = e.push(`link_open`, `a`, 1)),
            (r.attrs = [[`href`, n]]),
            (r.markup = `autolink`),
            (r.info = `auto`),
            (r = e.push(`text`, ``, 0)),
            (r.content = e.md.normalizeLinkText(a)),
            (r = e.push(`link_close`, `a`, -1)),
            (r.markup = `autolink`),
            (r.info = `auto`)),
          (e.pos += a.length + 2),
          !0)
    );
  },
  jn = Ut.HTML_TAG_RE;
function Mn(e) {
  return ((e |= 32), e >= 97 && e <= 122);
}
var Nn = function (e, t) {
    var n,
      r = e.pos;
    return (
      !!e.md.options.html &&
      ((n = e.posMax), !(e.src.charCodeAt(r) !== 60 || r + 2 >= n)) &&
      ((n = e.src.charCodeAt(r + 1)), !(n !== 33 && n !== 63 && n !== 47 && !Mn(n))) &&
      ((n = e.src.slice(r).match(jn)), !!n) &&
      (t || ((t = e.push(`html_inline`, ``, 0)), (t.content = e.src.slice(r, r + n[0].length))),
      (e.pos += n[0].length),
      !0)
    );
  },
  Pn = de,
  Fn = P.has,
  In = P.isValidEntityCode,
  Ln = P.fromCodePoint,
  Rn = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
  zn = /^&([a-z][a-z0-9]{1,31});/i,
  Bn = function (e, t) {
    var n,
      r = e.pos,
      i = e.posMax;
    if (e.src.charCodeAt(r) !== 38) return !1;
    if (r + 1 < i) {
      if (((i = e.src.charCodeAt(r + 1)), i === 35)) {
        if (((n = e.src.slice(r).match(Rn)), n))
          return (
            t ||
              ((i = n[1][0].toLowerCase() === `x` ? parseInt(n[1].slice(1), 16) : parseInt(n[1], 10)),
              (e.pending += In(i) ? Ln(i) : Ln(65533))),
            (e.pos += n[0].length),
            !0
          );
      } else if (((n = e.src.slice(r).match(zn)), n && Fn(Pn, n[1])))
        return (t || (e.pending += Pn[n[1]]), (e.pos += n[0].length), !0);
    }
    return (t || (e.pending += `&`), e.pos++, !0);
  };
function Vn(e, t) {
  var n,
    r,
    i,
    a,
    o,
    s,
    c = {},
    l = t.length;
  if (l) {
    for (var u = 0, d = -2, f = [], p = 0; p < l; p++)
      if (
        ((r = t[p]),
        f.push(0),
        (t[u].marker === r.marker && d === r.token - 1) || (u = p),
        (d = r.token),
        (r.length = r.length || 0),
        r.close)
      ) {
        for (
          c.hasOwnProperty(r.marker) || (c[r.marker] = [-1, -1, -1, -1, -1, -1]),
            a = c[r.marker][(r.open ? 3 : 0) + (r.length % 3)],
            n = u - f[u] - 1,
            o = n;
          n > a;
          n -= f[n] + 1
        )
          if (
            ((i = t[n]),
            i.marker === r.marker &&
              i.open &&
              i.end < 0 &&
              ((s = !1),
              (!i.close && !r.open) ||
                (i.length + r.length) % 3 != 0 ||
                (i.length % 3 == 0 && r.length % 3 == 0) ||
                (s = !0),
              !s))
          ) {
            ((s = n > 0 && !t[n - 1].open ? f[n - 1] + 1 : 0),
              (f[p] = p - n + s),
              (f[n] = s),
              (r.open = !1),
              (i.end = p),
              (i.close = !1),
              (o = -1),
              (d = -2));
            break;
          }
        o !== -1 && (c[r.marker][(r.open ? 3 : 0) + ((r.length || 0) % 3)] = o);
      }
  }
}
var Hn = function (e) {
    var t,
      n = e.tokens_meta,
      r = e.tokens_meta.length;
    for (Vn(e, e.delimiters), t = 0; t < r; t++) n[t] && n[t].delimiters && Vn(e, n[t].delimiters);
  },
  Un = function (e) {
    for (var t, n = 0, r = e.tokens, i = e.tokens.length, a = (t = 0); a < i; a++)
      (r[a].nesting < 0 && n--,
        (r[a].level = n),
        r[a].nesting > 0 && n++,
        r[a].type === `text` && a + 1 < i && r[a + 1].type === `text`
          ? (r[a + 1].content = r[a].content + r[a + 1].content)
          : (a !== t && (r[t] = r[a]), t++));
    a !== t && (r.length = t);
  },
  Wn = gt,
  Gn = P.isWhiteSpace,
  Kn = P.isPunctChar,
  qn = P.isMdAsciiPunct;
function Jn(e, t, n, r) {
  ((this.src = e),
    (this.env = n),
    (this.md = t),
    (this.tokens = r),
    (this.tokens_meta = Array(r.length)),
    (this.pos = 0),
    (this.posMax = this.src.length),
    (this.level = 0),
    (this.pending = ``),
    (this.pendingLevel = 0),
    (this.cache = {}),
    (this.delimiters = []),
    (this._prev_delimiters = []),
    (this.backticks = {}),
    (this.backticksScanned = !1));
}
((Jn.prototype.pushPending = function () {
  var e = new Wn(`text`, ``, 0);
  return ((e.content = this.pending), (e.level = this.pendingLevel), this.tokens.push(e), (this.pending = ``), e);
}),
  (Jn.prototype.push = function (e, t, n) {
    return (
      this.pending && this.pushPending(),
      (e = new Wn(e, t, n)),
      (t = null),
      n < 0 && (this.level--, (this.delimiters = this._prev_delimiters.pop())),
      (e.level = this.level),
      n > 0 &&
        (this.level++,
        this._prev_delimiters.push(this.delimiters),
        (this.delimiters = []),
        (t = { delimiters: this.delimiters })),
      (this.pendingLevel = this.level),
      this.tokens.push(e),
      this.tokens_meta.push(t),
      e
    );
  }),
  (Jn.prototype.scanDelims = function (e, t) {
    for (
      var n,
        r,
        i,
        a,
        o = e,
        s = !0,
        c = !0,
        l = this.posMax,
        u = this.src.charCodeAt(e),
        d = e > 0 ? this.src.charCodeAt(e - 1) : 32;
      o < l && this.src.charCodeAt(o) === u;
    )
      o++;
    return (
      (e = o - e),
      (i = o < l ? this.src.charCodeAt(o) : 32),
      (r = qn(d) || Kn(String.fromCharCode(d))),
      (a = qn(i) || Kn(String.fromCharCode(i))),
      (d = Gn(d)),
      (i = Gn(i)),
      (i || (a && !d && !r)) && (s = !1),
      (d || (r && !i && !a)) && (c = !1),
      (d = t ? ((n = s), c) : ((n = s && (!c || r)), c && (!s || a))),
      { can_open: n, can_close: d, length: e }
    );
  }),
  (Jn.prototype.Token = Wn));
var Yn = Jn,
  Xn = Ue,
  Zn = [
    [`text`, un],
    [`newline`, fn],
    [`escape`, gn],
    [`backticks`, _n],
    [`strikethrough`, vn.tokenize],
    [`emphasis`, bn.tokenize],
    [`link`, wn],
    [`image`, Dn],
    [`autolink`, An],
    [`html_inline`, Nn],
    [`entity`, Bn],
  ],
  Qn = [
    [`balance_pairs`, Hn],
    [`strikethrough`, vn.postProcess],
    [`emphasis`, bn.postProcess],
    [`text_collapse`, Un],
  ];
function $n() {
  var e;
  for (this.ruler = new Xn(), e = 0; e < Zn.length; e++) this.ruler.push(Zn[e][0], Zn[e][1]);
  for (this.ruler2 = new Xn(), e = 0; e < Qn.length; e++) this.ruler2.push(Qn[e][0], Qn[e][1]);
}
(($n.prototype.skipToken = function (e) {
  var t,
    n,
    r = e.pos,
    i = this.ruler.getRules(``),
    a = i.length,
    o = e.md.options.maxNesting,
    s = e.cache;
  if (s[r] !== void 0) e.pos = s[r];
  else {
    if (e.level < o) for (n = 0; n < a && (e.level++, (t = i[n](e, !0)), e.level--, !t); n++);
    else e.pos = e.posMax;
    (t || e.pos++, (s[r] = e.pos));
  }
}),
  ($n.prototype.tokenize = function (e) {
    for (var t, n, r = this.ruler.getRules(``), i = r.length, a = e.posMax, o = e.md.options.maxNesting; e.pos < a; ) {
      if (e.level < o) for (n = 0; n < i && ((t = r[n](e, !1)), !t); n++);
      if (t) {
        if (e.pos >= a) break;
      } else e.pending += e.src[e.pos++];
    }
    e.pending && e.pushPending();
  }),
  ($n.prototype.parse = function (e, t, n, r) {
    var i,
      a,
      o,
      s = new this.State(e, t, n, r);
    for (this.tokenize(s), a = this.ruler2.getRules(``), o = a.length, i = 0; i < o; i++) a[i](s);
  }),
  ($n.prototype.State = Yn));
var er = $n,
  tr = function (e) {
    var t = {},
      n =
        ((t.src_Any = je.source),
        (t.src_Cc = Me.source),
        (t.src_Z = Pe.source),
        (t.src_P = F.source),
        (t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join(`|`)),
        (t.src_ZCc = [t.src_Z, t.src_Cc].join(`|`)),
        `[><｜]`);
    return (
      (t.src_pseudo_letter = `(?:(?!` + n + `|` + t.src_ZPCc + `)` + t.src_Any + `)`),
      (t.src_ip4 = `(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`),
      (t.src_auth = `(?:(?:(?!` + t.src_ZCc + `|[@/\\[\\]()]).)+@)?`),
      (t.src_port = `(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?`),
      (t.src_host_terminator = `(?=$|` + n + `|` + t.src_ZPCc + `)(?!-|_|:\\d|\\.-|\\.(?!$|` + t.src_ZPCc + `))`),
      (t.src_path =
        `(?:[/?#](?:(?!` +
        t.src_ZCc +
        `|` +
        n +
        `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` +
        t.src_ZCc +
        `|\\]).)*\\]|\\((?:(?!` +
        t.src_ZCc +
        `|[)]).)*\\)|\\{(?:(?!` +
        t.src_ZCc +
        `|[}]).)*\\}|\\"(?:(?!` +
        t.src_ZCc +
        `|["]).)+\\"|\\'(?:(?!` +
        t.src_ZCc +
        `|[']).)+\\'|\\'(?=` +
        t.src_pseudo_letter +
        `|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!` +
        t.src_ZCc +
        `|[.]).|` +
        (e && e[`---`] ? `\\-(?!--(?:[^-]|$))(?:-*)|` : `\\-+|`) +
        `,(?!` +
        t.src_ZCc +
        `).|;(?!` +
        t.src_ZCc +
        `).|\\!+(?!` +
        t.src_ZCc +
        `|[!]).|\\?(?!` +
        t.src_ZCc +
        `|[?]).)+|\\/)?`),
      (t.src_email_name = `[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*`),
      (t.src_xn = `xn--[a-z0-9\\-]{1,59}`),
      (t.src_domain_root = `(?:` + t.src_xn + `|` + t.src_pseudo_letter + `{1,63})`),
      (t.src_domain =
        `(?:` +
        t.src_xn +
        `|(?:` +
        t.src_pseudo_letter +
        `)|(?:` +
        t.src_pseudo_letter +
        `(?:-|` +
        t.src_pseudo_letter +
        `){0,61}` +
        t.src_pseudo_letter +
        `))`),
      (t.src_host = `(?:(?:(?:(?:` + t.src_domain + `)\\.)*` + t.src_domain + `))`),
      (t.tpl_host_fuzzy = `(?:` + t.src_ip4 + `|(?:(?:(?:` + t.src_domain + `)\\.)+(?:%TLDS%)))`),
      (t.tpl_host_no_ip_fuzzy = `(?:(?:(?:` + t.src_domain + `)\\.)+(?:%TLDS%))`),
      (t.src_host_strict = t.src_host + t.src_host_terminator),
      (t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator),
      (t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator),
      (t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator),
      (t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator),
      (t.tpl_host_fuzzy_test = `localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:` + t.src_ZPCc + `|>|$))`),
      (t.tpl_email_fuzzy =
        `(^|` + n + `|"|\\(|` + t.src_ZCc + `)(` + t.src_email_name + `@` + t.tpl_host_fuzzy_strict + `)`),
      (t.tpl_link_fuzzy =
        '(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|' +
        t.src_ZPCc +
        '))((?![$+<=>^`|｜])' +
        t.tpl_host_port_fuzzy_strict +
        t.src_path +
        `)`),
      (t.tpl_link_no_ip_fuzzy =
        '(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|' +
        t.src_ZPCc +
        '))((?![$+<=>^`|｜])' +
        t.tpl_host_port_no_ip_fuzzy_strict +
        t.src_path +
        `)`),
      t
    );
  };
function nr(e) {
  return (
    Array.prototype.slice.call(arguments, 1).forEach(function (t) {
      t &&
        Object.keys(t).forEach(function (n) {
          e[n] = t[n];
        });
    }),
    e
  );
}
function rr(e) {
  return Object.prototype.toString.call(e);
}
function ir(e) {
  return rr(e) === `[object String]`;
}
function ar(e) {
  return rr(e) === `[object Object]`;
}
function or(e) {
  return rr(e) === `[object RegExp]`;
}
function sr(e) {
  return rr(e) === `[object Function]`;
}
function cr(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, `\\$&`);
}
var lr = { fuzzyLink: !0, fuzzyEmail: !0, fuzzyIP: !1 };
function ur(e) {
  return Object.keys(e || {}).reduce(function (e, t) {
    return e || lr.hasOwnProperty(t);
  }, !1);
}
var dr = {
    'http:': {
      validate: function (e, t, n) {
        return (
          (e = e.slice(t)),
          n.re.http || (n.re.http = RegExp(`^\\/\\/` + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, `i`)),
          n.re.http.test(e) ? e.match(n.re.http)[0].length : 0
        );
      },
    },
    'https:': `http:`,
    'ftp:': `http:`,
    '//': {
      validate: function (e, t, n) {
        var r = e.slice(t);
        return (
          n.re.no_http ||
            (n.re.no_http = RegExp(
              `^` +
                n.re.src_auth +
                `(?:localhost|(?:(?:` +
                n.re.src_domain +
                `)\\.)+` +
                n.re.src_domain_root +
                `)` +
                n.re.src_port +
                n.re.src_host_terminator +
                n.re.src_path,
              `i`
            )),
          !n.re.no_http.test(r) || (t >= 3 && e[t - 3] === `:`) || (t >= 3 && e[t - 3] === `/`)
            ? 0
            : r.match(n.re.no_http)[0].length
        );
      },
    },
    'mailto:': {
      validate: function (e, t, n) {
        return (
          (e = e.slice(t)),
          n.re.mailto || (n.re.mailto = RegExp(`^` + n.re.src_email_name + `@` + n.re.src_host_strict, `i`)),
          n.re.mailto.test(e) ? e.match(n.re.mailto)[0].length : 0
        );
      },
    },
  },
  fr = `a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]`,
  pr = `biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф`.split(`|`);
function mr(e) {
  ((e.__index__ = -1), (e.__text_cache__ = ``));
}
function hr(e) {
  return function (t, n) {
    return ((t = t.slice(n)), e.test(t) ? t.match(e)[0].length : 0);
  };
}
function gr() {
  return function (e, t) {
    t.normalize(e);
  };
}
function _r(e) {
  var t = (e.re = tr(e.__opts__)),
    n = e.__tlds__.slice();
  function r(e) {
    return e.replace(`%TLDS%`, t.src_tlds);
  }
  (e.onCompile(),
    e.__tlds_replaced__ || n.push(fr),
    n.push(t.src_xn),
    (t.src_tlds = n.join(`|`)),
    (t.email_fuzzy = RegExp(r(t.tpl_email_fuzzy), `i`)),
    (t.link_fuzzy = RegExp(r(t.tpl_link_fuzzy), `i`)),
    (t.link_no_ip_fuzzy = RegExp(r(t.tpl_link_no_ip_fuzzy), `i`)),
    (t.host_fuzzy_test = RegExp(r(t.tpl_host_fuzzy_test), `i`)));
  var i = [];
  function a(e, t) {
    throw Error(`(LinkifyIt) Invalid schema "` + e + `": ` + t);
  }
  ((e.__compiled__ = {}),
    Object.keys(e.__schemas__).forEach(function (t) {
      var n,
        r = e.__schemas__[t];
      r !== null &&
        ((n = { validate: null, link: null }),
        (e.__compiled__[t] = n),
        ar(r)
          ? (or(r.validate) ? (n.validate = hr(r.validate)) : sr(r.validate) ? (n.validate = r.validate) : a(t, r),
            sr(r.normalize) ? (n.normalize = r.normalize) : r.normalize ? a(t, r) : (n.normalize = gr()))
          : ir(r)
            ? i.push(t)
            : a(t, r));
    }),
    i.forEach(function (t) {
      e.__compiled__[e.__schemas__[t]] &&
        ((e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate),
        (e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize));
    }),
    (e.__compiled__[``] = { validate: null, normalize: gr() }),
    (n = Object.keys(e.__compiled__)
      .filter(function (t) {
        return t.length > 0 && e.__compiled__[t];
      })
      .map(cr)
      .join(`|`)),
    (e.re.schema_test = RegExp(`(^|(?!_)(?:[><｜]|` + t.src_ZPCc + `))(` + n + `)`, `i`)),
    (e.re.schema_search = RegExp(`(^|(?!_)(?:[><｜]|` + t.src_ZPCc + `))(` + n + `)`, `ig`)),
    (e.re.pretest = RegExp(`(` + e.re.schema_test.source + `)|(` + e.re.host_fuzzy_test.source + `)|@`, `i`)),
    mr(e));
}
function vr(e, t) {
  var n = e.__index__,
    r = e.__last_index__,
    i = e.__text_cache__.slice(n, r);
  ((this.schema = e.__schema__.toLowerCase()),
    (this.index = n + t),
    (this.lastIndex = r + t),
    (this.raw = i),
    (this.text = i),
    (this.url = i));
}
function yr(e, t) {
  return ((t = new vr(e, t)), e.__compiled__[t.schema].normalize(t, e), t);
}
function J(e, t) {
  if (!(this instanceof J)) return new J(e, t);
  (t || (ur(e) && ((t = e), (e = {}))),
    (this.__opts__ = nr({}, lr, t)),
    (this.__index__ = -1),
    (this.__last_index__ = -1),
    (this.__schema__ = ``),
    (this.__text_cache__ = ``),
    (this.__schemas__ = nr({}, dr, e)),
    (this.__compiled__ = {}),
    (this.__tlds__ = pr),
    (this.__tlds_replaced__ = !1),
    (this.re = {}),
    _r(this));
}
((J.prototype.add = function (e, t) {
  return ((this.__schemas__[e] = t), _r(this), this);
}),
  (J.prototype.set = function (e) {
    return ((this.__opts__ = nr(this.__opts__, e)), this);
  }),
  (J.prototype.test = function (e) {
    if (((this.__text_cache__ = e), (this.__index__ = -1), !e.length)) return !1;
    var t, n, r, i, a;
    if (this.re.schema_test.test(e)) {
      for (i = this.re.schema_search, i.lastIndex = 0; (t = i.exec(e)) !== null; )
        if (((n = this.testSchemaAt(e, t[2], i.lastIndex)), n)) {
          ((this.__schema__ = t[2]),
            (this.__index__ = t.index + t[1].length),
            (this.__last_index__ = t.index + t[0].length + n));
          break;
        }
    }
    return (
      this.__opts__.fuzzyLink &&
        this.__compiled__[`http:`] &&
        ((a = e.search(this.re.host_fuzzy_test)), a >= 0) &&
        (this.__index__ < 0 || a < this.__index__) &&
        (a = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null &&
        ((r = a.index + a[1].length), this.__index__ < 0 || r < this.__index__) &&
        ((this.__schema__ = ``), (this.__index__ = r), (this.__last_index__ = a.index + a[0].length)),
      this.__opts__.fuzzyEmail &&
        this.__compiled__[`mailto:`] &&
        ((a = e.indexOf(`@`)), a >= 0) &&
        (a = e.match(this.re.email_fuzzy)) !== null &&
        ((r = a.index + a[1].length),
        (a = a.index + a[0].length),
        this.__index__ < 0 || r < this.__index__ || (r === this.__index__ && a > this.__last_index__)) &&
        ((this.__schema__ = `mailto:`), (this.__index__ = r), (this.__last_index__ = a)),
      this.__index__ >= 0
    );
  }),
  (J.prototype.pretest = function (e) {
    return this.re.pretest.test(e);
  }),
  (J.prototype.testSchemaAt = function (e, t, n) {
    return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, n, this) : 0;
  }),
  (J.prototype.match = function (e) {
    for (
      var t = 0,
        n = [],
        r =
          (this.__index__ >= 0 && this.__text_cache__ === e && (n.push(yr(this, t)), (t = this.__last_index__)),
          t ? e.slice(t) : e);
      this.test(r);
    )
      (n.push(yr(this, t)), (r = r.slice(this.__last_index__)), (t += this.__last_index__));
    return n.length ? n : null;
  }),
  (J.prototype.tlds = function (e, t) {
    return (
      (e = Array.isArray(e) ? e : [e]),
      t
        ? ((this.__tlds__ = this.__tlds__
            .concat(e)
            .sort()
            .filter(function (e, t, n) {
              return e !== n[t - 1];
            })
            .reverse()),
          _r(this))
        : ((this.__tlds__ = e.slice()), (this.__tlds_replaced__ = !0), _r(this)),
      this
    );
  }),
  (J.prototype.normalize = function (e) {
    (e.schema || (e.url = `http://` + e.url),
      e.schema !== `mailto:` || /^mailto:/i.test(e.url) || (e.url = `mailto:` + e.url));
  }),
  (J.prototype.onCompile = function () {}));
var br = J,
  xr = 2147483647,
  Y = 36,
  Sr = 1,
  Cr = 26,
  wr = 38,
  Tr = 700,
  Er = 72,
  Dr = 128,
  Or = `-`,
  kr = /^xn--/,
  Ar = /[^\0-\x7F]/,
  jr = /[\x2E\u3002\uFF0E\uFF61]/g,
  Mr = {
    overflow: `Overflow: input needs wider integers to process`,
    'not-basic': `Illegal input >= 0x80 (not a basic code point)`,
    'invalid-input': `Invalid input`,
  },
  Nr = Y - Sr,
  X = Math.floor,
  Pr = String.fromCharCode;
function Z(e) {
  throw RangeError(Mr[e]);
}
function Fr(e, t) {
  let n = [],
    r = e.length;
  for (; r--; ) n[r] = t(e[r]);
  return n;
}
function Ir(e, t) {
  let n = e.split(`@`),
    r = ``;
  (n.length > 1 && ((r = n[0] + `@`), (e = n[1])), (e = e.replace(jr, `.`)));
  let i = Fr(e.split(`.`), t).join(`.`);
  return r + i;
}
function Lr(e) {
  let t = [],
    n = 0,
    r = e.length;
  for (; n < r; ) {
    let i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      let r = e.charCodeAt(n++);
      (64512 & r) == 56320 ? t.push(((1023 & i) << 10) + (1023 & r) + 65536) : (t.push(i), n--);
    } else t.push(i);
  }
  return t;
}
var Rr = (e) => String.fromCodePoint(...e),
  zr = function (e) {
    return e >= 48 && e < 58 ? e - 48 + 26 : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : Y;
  },
  Br = function (e, t) {
    return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
  },
  Vr = function (e, t, n) {
    let r = 0;
    for (e = n ? X(e / Tr) : e >> 1, e += X(e / t); e > 455; r += Y) e = X(e / Nr);
    return X(r + (36 * e) / (e + wr));
  },
  Hr = function (e) {
    let t = [],
      n = e.length,
      r = 0,
      i = Dr,
      a = Er,
      o = e.lastIndexOf(Or);
    o < 0 && (o = 0);
    for (let n = 0; n < o; ++n) (e.charCodeAt(n) >= 128 && Z(`not-basic`), t.push(e.charCodeAt(n)));
    for (let s = o > 0 ? o + 1 : 0; s < n; ) {
      let o = r;
      for (let t = 1, i = Y; ; i += Y) {
        s >= n && Z(`invalid-input`);
        let o = zr(e.charCodeAt(s++)),
          c =
            (o >= Y && Z(`invalid-input`),
            o > X((xr - r) / t) && Z(`overflow`),
            (r += o * t),
            i <= a ? Sr : i >= a + Cr ? Cr : i - a);
        if (o < c) break;
        let l = Y - c;
        (t > X(xr / l) && Z(`overflow`), (t *= l));
      }
      let c = t.length + 1;
      ((a = Vr(r - o, c, o == 0)), X(r / c) > xr - i && Z(`overflow`), (i += X(r / c)), (r %= c), t.splice(r++, 0, i));
    }
    return String.fromCodePoint(...t);
  },
  Ur = function (e) {
    let t = [],
      n = ((e = Lr(e)), e.length),
      r = Dr,
      i = 0,
      a = Er;
    for (var o of e) o < 128 && t.push(Pr(o));
    let s = t.length,
      c = s;
    for (s && t.push(Or); c < n; ) {
      let n = xr;
      for (var l of e) l >= r && l < n && (n = l);
      let o = c + 1;
      (n - r > X((xr - i) / o) && Z(`overflow`), (i += (n - r) * o), (r = n));
      for (var u of e)
        if ((u < r && ++i > xr && Z(`overflow`), u === r)) {
          let e = i;
          for (let n = Y; ; n += Y) {
            let r = n <= a ? Sr : n >= a + Cr ? Cr : n - a;
            if (e < r) break;
            let i = e - r,
              o = Y - r;
            (t.push(Pr(Br(r + (i % o), 0))), (e = X(i / o)));
          }
          (t.push(Pr(Br(e, 0))), (a = Vr(i, o, c === s)), (i = 0), ++c);
        }
      (++i, ++r);
    }
    return t.join(``);
  },
  Wr = function (e) {
    return Ir(e, function (e) {
      return kr.test(e) ? Hr(e.slice(4).toLowerCase()) : e;
    });
  },
  Gr = function (e) {
    return Ir(e, function (e) {
      return Ar.test(e) ? `xn--` + Ur(e) : e;
    });
  },
  Kr = ue(
    Object.freeze({
      __proto__: null,
      ucs2decode: Lr,
      ucs2encode: Rr,
      decode: Hr,
      encode: Ur,
      toASCII: Gr,
      toUnicode: Wr,
      default: {
        version: `2.3.1`,
        ucs2: { decode: Lr, encode: Rr },
        decode: Hr,
        encode: Ur,
        toASCII: Gr,
        toUnicode: Wr,
      },
    })
  ),
  qr = {
    options: {
      html: !1,
      xhtmlOut: !1,
      breaks: !1,
      langPrefix: `language-`,
      linkify: !1,
      typographer: !1,
      quotes: `“”‘’`,
      highlight: null,
      maxNesting: 100,
    },
    components: { core: {}, block: {}, inline: {} },
  },
  Jr = {
    options: {
      html: !1,
      xhtmlOut: !1,
      breaks: !1,
      langPrefix: `language-`,
      linkify: !1,
      typographer: !1,
      quotes: `“”‘’`,
      highlight: null,
      maxNesting: 20,
    },
    components: {
      core: { rules: [`normalize`, `block`, `inline`] },
      block: { rules: [`paragraph`] },
      inline: { rules: [`text`], rules2: [`balance_pairs`, `text_collapse`] },
    },
  },
  Yr = {
    options: {
      html: !0,
      xhtmlOut: !0,
      breaks: !1,
      langPrefix: `language-`,
      linkify: !1,
      typographer: !1,
      quotes: `“”‘’`,
      highlight: null,
      maxNesting: 20,
    },
    components: {
      core: { rules: [`normalize`, `block`, `inline`] },
      block: {
        rules: [
          `blockquote`,
          `code`,
          `fence`,
          `heading`,
          `hr`,
          `html_block`,
          `lheading`,
          `list`,
          `reference`,
          `paragraph`,
        ],
      },
      inline: {
        rules: [
          `autolink`,
          `backticks`,
          `emphasis`,
          `entity`,
          `escape`,
          `html_inline`,
          `image`,
          `link`,
          `newline`,
          `text`,
        ],
        rules2: [`balance_pairs`, `emphasis`, `text_collapse`],
      },
    },
  },
  Xr = P,
  Zr = Fe,
  Qr = He,
  $r = Ct,
  ei = cn,
  ti = er,
  ni = br,
  Q = I,
  ri = Kr,
  ii = { default: qr, zero: Jr, commonmark: Yr },
  ai = /^(vbscript|javascript|file|data):/,
  oi = /^data:image\/(gif|png|jpeg|webp);/;
function si(e) {
  return ((e = e.trim().toLowerCase()), !ai.test(e) || !!oi.test(e));
}
var ci = [`http:`, `https:`, `mailto:`];
function li(e) {
  if (((e = Q.parse(e, !0)), e.hostname && (!e.protocol || ci.indexOf(e.protocol) >= 0)))
    try {
      e.hostname = ri.toASCII(e.hostname);
    } catch {}
  return Q.encode(Q.format(e));
}
function ui(e) {
  if (((e = Q.parse(e, !0)), e.hostname && (!e.protocol || ci.indexOf(e.protocol) >= 0)))
    try {
      e.hostname = ri.toUnicode(e.hostname);
    } catch {}
  return Q.decode(Q.format(e), Q.decode.defaultChars + `%`);
}
function $(e, t) {
  if (!(this instanceof $)) return new $(e, t);
  (t || Xr.isString(e) || ((t = e || {}), (e = `default`)),
    (this.inline = new ti()),
    (this.block = new ei()),
    (this.core = new $r()),
    (this.renderer = new Qr()),
    (this.linkify = new ni()),
    (this.validateLink = si),
    (this.normalizeLink = li),
    (this.normalizeLinkText = ui),
    (this.utils = Xr),
    (this.helpers = Xr.assign({}, Zr)),
    (this.options = {}),
    this.configure(e),
    t && this.set(t));
}
(($.prototype.set = function (e) {
  return (Xr.assign(this.options, e), this);
}),
  ($.prototype.configure = function (e) {
    var t,
      n = this;
    if (Xr.isString(e) && ((t = e), (e = ii[t]), !e)) throw Error('Wrong `markdown-it` preset "' + t + `", check name`);
    if (e)
      return (
        e.options && n.set(e.options),
        e.components &&
          Object.keys(e.components).forEach(function (t) {
            (e.components[t].rules && n[t].ruler.enableOnly(e.components[t].rules),
              e.components[t].rules2 && n[t].ruler2.enableOnly(e.components[t].rules2));
          }),
        this
      );
    throw Error("Wrong `markdown-it` preset, can't be empty");
  }),
  ($.prototype.enable = function (e, t) {
    var n = [],
      r =
        (Array.isArray(e) || (e = [e]),
        [`core`, `block`, `inline`].forEach(function (t) {
          n = n.concat(this[t].ruler.enable(e, !0));
        }, this),
        (n = n.concat(this.inline.ruler2.enable(e, !0))),
        e.filter(function (e) {
          return n.indexOf(e) < 0;
        }));
    if (r.length && !t) throw Error(`MarkdownIt. Failed to enable unknown rule(s): ` + r);
    return this;
  }),
  ($.prototype.disable = function (e, t) {
    var n = [],
      r =
        (Array.isArray(e) || (e = [e]),
        [`core`, `block`, `inline`].forEach(function (t) {
          n = n.concat(this[t].ruler.disable(e, !0));
        }, this),
        (n = n.concat(this.inline.ruler2.disable(e, !0))),
        e.filter(function (e) {
          return n.indexOf(e) < 0;
        }));
    if (r.length && !t) throw Error(`MarkdownIt. Failed to disable unknown rule(s): ` + r);
    return this;
  }),
  ($.prototype.use = function (e) {
    var t = [this].concat(Array.prototype.slice.call(arguments, 1));
    return (e.apply(e, t), this);
  }),
  ($.prototype.parse = function (e, t) {
    if (typeof e != `string`) throw Error(`Input data should be a String`);
    return ((e = new this.core.State(e, this, t)), this.core.process(e), e.tokens);
  }),
  ($.prototype.render = function (e, t) {
    return ((t = t || {}), this.renderer.render(this.parse(e, t), this.options, t));
  }),
  ($.prototype.parseInline = function (e, t) {
    return ((e = new this.core.State(e, this, t)), (e.inlineMode = !0), this.core.process(e), e.tokens);
  }),
  ($.prototype.renderInline = function (e, t) {
    return ((t = t || {}), this.renderer.render(this.parseInline(e, t), this.options, t));
  }));
var di = $,
  fi = { exports: {} },
  pi =
    ((function (e) {
      (function (t) {
        e.exports = t();
      })(function () {
        return (function (e) {
          var t = {};
          function n(r) {
            var i;
            return (
              t[r] ||
              ((i = t[r] = { exports: {}, id: r, loaded: !1 }),
              e[r].call(i.exports, i, i.exports, n),
              (i.loaded = !0),
              i)
            ).exports;
          }
          return ((n.m = e), (n.c = t), (n.p = ``), n(0));
        })([
          function (e, t, n) {
            var r = n(2),
              i = n(1);
            function a(e, t) {
              return function (n, a) {
                var o,
                  s,
                  c,
                  l,
                  u,
                  d,
                  f,
                  p = ``,
                  m = ``,
                  h = ``,
                  g = n.pos,
                  _ = n.posMax;
                if (
                  n.src.charCodeAt(n.pos) !== 33 ||
                  n.src.charCodeAt(n.pos + 1) !== 91 ||
                  ((c = n.pos + 2), (s = e.helpers.parseLinkLabel(n, n.pos + 1, !1)), s < 0)
                )
                  return !1;
                if (((l = s + 1), l < _ && n.src.charCodeAt(l) === 40)) {
                  for (l++; l < _ && ((o = n.src.charCodeAt(l)), !(o !== 32 && o !== 10)); l++);
                  if (l >= _) return !1;
                  for (
                    f = l,
                      u = e.helpers.parseLinkDestination(n.src, l, n.posMax),
                      u.ok && ((h = n.md.normalizeLink(u.str)), n.md.validateLink(h) ? (l = u.pos) : (h = ``)),
                      f = l;
                    l < _ && ((o = n.src.charCodeAt(l)), !(o !== 32 && o !== 10));
                    l++
                  );
                  if (((u = e.helpers.parseLinkTitle(n.src, l, n.posMax)), l < _ && f !== l && u.ok))
                    for (d = u.str, l = u.pos; l < _ && ((o = n.src.charCodeAt(l)), !(o !== 32 && o !== 10)); l++);
                  else d = ``;
                  if (l - 1 >= 0 && ((o = n.src.charCodeAt(l - 1)), o === 32) && ((u = i(n.src, l, n.posMax)), u.ok))
                    for (
                      p = u.width, m = u.height, l = u.pos;
                      l < _ && ((o = n.src.charCodeAt(l)), !(o !== 32 && o !== 10));
                      l++
                    );
                  if (l >= _ || n.src.charCodeAt(l) !== 41) return ((n.pos = g), !1);
                  l++;
                } else {
                  if (n.env.references === void 0) return !1;
                  for (; l < _ && ((o = n.src.charCodeAt(l)), !(o !== 32 && o !== 10)); l++);
                  if (
                    (l < _ && n.src.charCodeAt(l) === 91 && ((f = l + 1), (l = e.helpers.parseLinkLabel(n, l)), l >= 0)
                      ? (v = n.src.slice(f, l++))
                      : (l = s + 1),
                    (v = v || n.src.slice(c, s)),
                    (u = n.env.references[e.utils.normalizeReference(v)]),
                    !u)
                  )
                    return ((n.pos = g), !1);
                  ((h = u.href), (d = u.title));
                }
                if (!a) {
                  ((n.pos = c), (n.posMax = s));
                  var v = new n.md.inline.State(n.src.slice(c, s), n.md, n.env, (f = []));
                  if ((v.md.inline.tokenize(v), t && t.autofill && p === `` && m === ``))
                    try {
                      var y = r(h),
                        p = y.width,
                        m = y.height;
                    } catch {}
                  ((g = n.push(`image`, `img`, 0)),
                    (g.attrs = u =
                      [
                        [`src`, h],
                        [`alt`, ``],
                      ]),
                    (g.children = f),
                    d && u.push([`title`, d]),
                    p !== `` && u.push([`width`, p]),
                    m !== `` && u.push([`height`, m]));
                }
                return ((n.pos = l), (n.posMax = _), !0);
              };
            }
            e.exports = function (e, t) {
              e.inline.ruler.before(`emphasis`, `image`, a(e, t));
            };
          },
          function (e, t, n) {
            function r(e, t, n) {
              for (
                var r = t, i = { ok: !1, pos: t, value: `` }, a = e.charCodeAt(t);
                (t < n && a >= 48 && a <= 57) || a === 37;
              )
                a = e.charCodeAt(++t);
              return ((i.ok = !0), (i.pos = t), (i.value = e.slice(r, t)), i);
            }
            e.exports = function (e, t, n) {
              var i,
                a,
                o = { ok: !1, pos: 0, width: ``, height: `` };
              return (
                t >= n ||
                  ((a = e.charCodeAt(t)), a !== 61) ||
                  (t++, (a = e.charCodeAt(t)), a !== 120 && (a < 48 || a > 57)) ||
                  ((i = r(e, t, n)),
                  (t = i.pos),
                  (a = e.charCodeAt(t)),
                  a === 120 &&
                    (t++,
                    (a = r(e, t, n)),
                    (t = a.pos),
                    (o.width = i.value),
                    (o.height = a.value),
                    (o.pos = t),
                    (o.ok = !0))),
                o
              );
            };
          },
          function (e, t, n) {
            (function (t) {
              var r = n(16),
                i = n(6),
                a = n(3),
                o = {},
                s =
                  (n(5).forEach(function (e) {
                    o[e] = n(4)(`./` + e);
                  }),
                  131072);
              function c(e, t) {
                var n = a(e, t);
                if (n in o && ((e = o[n].calculate(e, t)), !1 !== e)) return ((e.type = n), e);
                throw TypeError(`Unsupported file type`);
              }
              function l(e, n) {
                r.open(e, `r`, function (e, i) {
                  if (e) return n(e);
                  var e = r.fstatSync(i).size,
                    e = Math.min(e, s),
                    a = new t(e);
                  r.read(i, a, 0, e, 0, function (e) {
                    if (e) return n(e);
                    r.close(i, function (e) {
                      n(e, a);
                    });
                  });
                });
              }
              function u(e) {
                var e = r.openSync(e, `r`),
                  n = r.fstatSync(e).size,
                  n = Math.min(n, s),
                  i = new t(n);
                return (r.readSync(e, i, 0, n, 0), r.closeSync(e), i);
              }
              e.exports = function (e, t) {
                if (typeof e != `string`) throw TypeError(`Input must be file name`);
                var n = i.resolve(e);
                if (typeof t != `function`) return ((e = u(n)), c(e, n));
                l(n, function (e, r) {
                  if (e) return t(e);
                  var i;
                  try {
                    i = c(r, n);
                  } catch (t) {
                    e = t;
                  }
                  t(e, i);
                });
              };
            }).call(t, n(7).Buffer);
          },
          function (e, t, n) {
            var r = {};
            (n(5).forEach(function (e) {
              r[e] = n(4)(`./` + e).detect;
            }),
              (e.exports = function (e, t) {
                var n, i;
                for (n in r) if (n in r && ((i = r[n](e, t)), i)) return n;
                throw TypeError(`Unsupported type`);
              }));
          },
          function (e, t, n) {
            var r = {
              './bmp': 8,
              './bmp.js': 8,
              './gif': 9,
              './gif.js': 9,
              './jpg': 10,
              './jpg.js': 10,
              './png': 11,
              './png.js': 11,
              './psd': 12,
              './psd.js': 12,
              './svg': 13,
              './svg.js': 13,
              './tiff': 14,
              './tiff.js': 14,
              './webp': 15,
              './webp.js': 15,
            };
            function i(e) {
              return n(a(e));
            }
            function a(e) {
              return (
                r[e] ||
                (function () {
                  throw Error(`Cannot find module '` + e + `'.`);
                })()
              );
            }
            ((i.keys = function () {
              return Object.keys(r);
            }),
              (i.resolve = a),
              (e.exports = i),
              (i.id = 4));
          },
          function (e, t, n) {
            e.exports = [`bmp`, `gif`, `jpg`, `png`, `tiff`];
          },
          function (e, t, n) {
            (function (e) {
              function n(e, t) {
                for (var n = 0, r = e.length - 1; r >= 0; r--) {
                  var i = e[r];
                  i === `.` ? e.splice(r, 1) : i === `..` ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--);
                }
                if (t) for (; n--; ) e.unshift(`..`);
                return e;
              }
              var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                i = function (e) {
                  return r.exec(e).slice(1);
                };
              function a(e, t) {
                if (e.filter) return e.filter(t);
                for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
                return n;
              }
              ((t.resolve = function () {
                for (var t = ``, r = !1, i = arguments.length - 1; i >= -1 && !r; i--) {
                  var o = i >= 0 ? arguments[i] : e.cwd();
                  if (typeof o != `string`) throw TypeError(`Arguments to path.resolve must be strings`);
                  o && ((t = o + `/` + t), (r = o.charAt(0) === `/`));
                }
                return (
                  (t = n(
                    a(t.split(`/`), function (e) {
                      return !!e;
                    }),
                    !r
                  ).join(`/`)),
                  (r ? `/` : ``) + t || `.`
                );
              }),
                (t.normalize = function (e) {
                  var r = t.isAbsolute(e),
                    i = o(e, -1) === `/`;
                  return (
                    (e = n(
                      a(e.split(`/`), function (e) {
                        return !!e;
                      }),
                      !r
                    ).join(`/`)),
                    e || r || (e = `.`),
                    e && i && (e += `/`),
                    (r ? `/` : ``) + e
                  );
                }),
                (t.isAbsolute = function (e) {
                  return e.charAt(0) === `/`;
                }),
                (t.join = function () {
                  var e = Array.prototype.slice.call(arguments, 0);
                  return t.normalize(
                    a(e, function (e, t) {
                      if (typeof e != `string`) throw TypeError(`Arguments to path.join must be strings`);
                      return e;
                    }).join(`/`)
                  );
                }),
                (t.relative = function (e, n) {
                  function r(e) {
                    for (var t = 0; t < e.length && e[t] === ``; t++);
                    for (var n = e.length - 1; n >= 0 && e[n] === ``; n--);
                    return t > n ? [] : e.slice(t, n - t + 1);
                  }
                  ((e = t.resolve(e).substr(1)), (n = t.resolve(n).substr(1)));
                  for (
                    var i = r(e.split(`/`)), a = r(n.split(`/`)), o = Math.min(i.length, a.length), s = o, c = 0;
                    c < o;
                    c++
                  )
                    if (i[c] !== a[c]) {
                      s = c;
                      break;
                    }
                  for (var l = [], c = s; c < i.length; c++) l.push(`..`);
                  return ((l = l.concat(a.slice(s))), l.join(`/`));
                }),
                (t.sep = `/`),
                (t.delimiter = `:`),
                (t.dirname = function (e) {
                  var e = i(e),
                    t = e[0],
                    e = e[1];
                  return t || e ? ((e = e && e.substr(0, e.length - 1)), t + e) : `.`;
                }),
                (t.basename = function (e, t) {
                  return (
                    (e = i(e)[2]),
                    t && e.substr(-1 * t.length) === t && (e = e.substr(0, e.length - t.length)),
                    e
                  );
                }),
                (t.extname = function (e) {
                  return i(e)[3];
                }));
              var o =
                `ab`.substr(-1) === `b`
                  ? function (e, t, n) {
                      return e.substr(t, n);
                    }
                  : function (e, t, n) {
                      return (t < 0 && (t = e.length + t), e.substr(t, n));
                    };
            }).call(t, n(18));
          },
          function (e, t, n) {
            (function (e) {
              var r = n(21),
                i = n(19),
                a = n(20),
                o = ((t.Buffer = e), (t.SlowBuffer = c), (t.INSPECT_MAX_BYTES = 50), (e.poolSize = 8192), 1073741823),
                s = {};
              function e(t, n) {
                var r = this;
                if (!(r instanceof e)) return new e(t, n);
                var i,
                  c,
                  l = typeof t;
                if (l === `number`) i = +t;
                else if (l === `string`) i = e.byteLength(t, n);
                else {
                  if (l !== `object` || t === null) throw TypeError(`must start with number, buffer, array or string`);
                  (t.type === `Buffer` && a(t.data) && (t = t.data), (i = +t.length));
                }
                if (i > o)
                  throw RangeError(
                    `Attempt to allocate Buffer larger than maximum size: 0x` + o.toString(16) + ` bytes`
                  );
                if (
                  (i < 0 ? (i = 0) : (i >>>= 0),
                  e.TYPED_ARRAY_SUPPORT ? (r = e._augment(new Uint8Array(i))) : ((r.length = i), (r._isBuffer = !0)),
                  e.TYPED_ARRAY_SUPPORT && typeof t.byteLength == `number`)
                )
                  r._set(t);
                else if (ee(t))
                  if (e.isBuffer(t)) for (c = 0; c < i; c++) r[c] = t.readUInt8(c);
                  else for (c = 0; c < i; c++) r[c] = ((t[c] % 256) + 256) % 256;
                else if (l === `string`) r.write(t, 0, n);
                else if (l === `number` && !e.TYPED_ARRAY_SUPPORT) for (c = 0; c < i; c++) r[c] = 0;
                return (i > 0 && i <= e.poolSize && (r.parent = s), r);
              }
              function c(t, n) {
                var r;
                return this instanceof c ? ((r = new e(t, n)), delete r.parent, r) : new c(t, n);
              }
              function l(e, t, n, r) {
                n = Number(n) || 0;
                var i = e.length - n,
                  i = ((!r || ((r = Number(r)), r > i)) && (r = i), t.length);
                if (i % 2 != 0) throw Error(`Invalid hex string`);
                r > i / 2 && (r = i / 2);
                for (var a = 0; a < r; a++) {
                  var o = parseInt(t.substr(2 * a, 2), 16);
                  if (isNaN(o)) throw Error(`Invalid hex string`);
                  e[n + a] = o;
                }
                return a;
              }
              function u(e, t, n, r) {
                return ((t = ae(M(t, e.length - n), e, n, r)), t);
              }
              function d(e, t, n, r) {
                return ((t = ae(ne(t), e, n, r)), t);
              }
              function f(e, t, n, r) {
                return d(e, t, n, r);
              }
              function p(e, t, n, r) {
                return ((t = ae(ie(t), e, n, r)), t);
              }
              function m(e, t, n, r) {
                return ((t = ae(re(t, e.length - n), e, n, r)), t);
              }
              function h(e, t, n) {
                return t === 0 && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n));
              }
              function g(e, t, n) {
                var r = ``,
                  i = ``;
                n = Math.min(e.length, n);
                for (var a = t; a < n; a++)
                  e[a] <= 127 ? ((r += N(i) + String.fromCharCode(e[a])), (i = ``)) : (i += `%` + e[a].toString(16));
                return r + N(i);
              }
              function _(e, t, n) {
                var r = ``;
                n = Math.min(e.length, n);
                for (var i = t; i < n; i++) r += String.fromCharCode(127 & e[i]);
                return r;
              }
              function v(e, t, n) {
                var r = ``;
                n = Math.min(e.length, n);
                for (var i = t; i < n; i++) r += String.fromCharCode(e[i]);
                return r;
              }
              function y(e, t, n) {
                for (
                  var r = e.length, i = ((!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r), ``), a = t;
                  a < n;
                  a++
                )
                  i += te(e[a]);
                return i;
              }
              function b(e, t, n) {
                for (var r = e.slice(t, n), i = ``, a = 0; a < r.length; a += 2)
                  i += String.fromCharCode(r[a] + 256 * r[a + 1]);
                return i;
              }
              function x(e, t, n) {
                if (e % 1 != 0 || e < 0) throw RangeError(`offset is not uint`);
                if (e + t > n) throw RangeError(`Trying to access beyond buffer length`);
              }
              function S(t, n, r, i, a, o) {
                if (!e.isBuffer(t)) throw TypeError(`buffer must be a Buffer instance`);
                if (n > a || n < o) throw RangeError(`value is out of bounds`);
                if (r + i > t.length) throw RangeError(`index out of range`);
              }
              function C(e, t, n, r) {
                t < 0 && (t = 65535 + t + 1);
                for (var i = 0, a = Math.min(e.length - n, 2); i < a; i++)
                  e[n + i] = (t & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
              }
              function w(e, t, n, r) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var i = 0, a = Math.min(e.length - n, 4); i < a; i++)
                  e[n + i] = (t >>> (8 * (r ? i : 3 - i))) & 255;
              }
              function T(e, t, n, r, i, a) {
                if (t > i || t < a) throw RangeError(`value is out of bounds`);
                if (n + r > e.length || n < 0) throw RangeError(`index out of range`);
              }
              function E(e, t, n, r, a) {
                return (
                  a || T(e, t, n, 4, 34028234663852886e22, -34028234663852886e22),
                  i.write(e, t, n, r, 23, 4),
                  n + 4
                );
              }
              function D(e, t, n, r, a) {
                return (
                  a || T(e, t, n, 8, 17976931348623157e292, -17976931348623157e292),
                  i.write(e, t, n, r, 52, 8),
                  n + 8
                );
              }
              ((e.TYPED_ARRAY_SUPPORT = (function () {
                try {
                  var e = new Uint8Array(new ArrayBuffer(0));
                  return (
                    (e.foo = function () {
                      return 42;
                    }),
                    e.foo() === 42 &&
                      typeof e.subarray == `function` &&
                      new Uint8Array(1).subarray(1, 1).byteLength === 0
                  );
                } catch {
                  return !1;
                }
              })()),
                (e.isBuffer = function (e) {
                  return !(e == null || !e._isBuffer);
                }),
                (e.compare = function (t, n) {
                  if (!e.isBuffer(t) || !e.isBuffer(n)) throw TypeError(`Arguments must be Buffers`);
                  if (t === n) return 0;
                  for (var r = t.length, i = n.length, a = 0, o = Math.min(r, i); a < o && t[a] === n[a]; a++);
                  return (a !== o && ((r = t[a]), (i = n[a])), r < i ? -1 : +(i < r));
                }),
                (e.isEncoding = function (e) {
                  switch (String(e).toLowerCase()) {
                    case `hex`:
                    case `utf8`:
                    case `utf-8`:
                    case `ascii`:
                    case `binary`:
                    case `base64`:
                    case `raw`:
                    case `ucs2`:
                    case `ucs-2`:
                    case `utf16le`:
                    case `utf-16le`:
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (e.concat = function (t, n) {
                  if (!a(t)) throw TypeError(`list argument must be an Array of Buffers.`);
                  if (t.length === 0) return new e(0);
                  if (t.length === 1) return t[0];
                  if (n === void 0) for (n = 0, o = 0; o < t.length; o++) n += t[o].length;
                  for (var r = new e(n), i = 0, o = 0; o < t.length; o++) {
                    var s = t[o];
                    (s.copy(r, i), (i += s.length));
                  }
                  return r;
                }),
                (e.byteLength = function (e, t) {
                  var n;
                  switch (((e += ``), t || `utf8`)) {
                    case `ascii`:
                    case `binary`:
                    case `raw`:
                      n = e.length;
                      break;
                    case `ucs2`:
                    case `ucs-2`:
                    case `utf16le`:
                    case `utf-16le`:
                      n = 2 * e.length;
                      break;
                    case `hex`:
                      n = e.length >>> 1;
                      break;
                    case `utf8`:
                    case `utf-8`:
                      n = M(e).length;
                      break;
                    case `base64`:
                      n = ie(e).length;
                      break;
                    default:
                      n = e.length;
                  }
                  return n;
                }),
                (e.prototype.length = void 0),
                (e.prototype.parent = void 0),
                (e.prototype.toString = function (e, t, n) {
                  var r = !1;
                  if (
                    ((t >>>= 0),
                    (n = n === void 0 || n === 1 / 0 ? this.length : n >>> 0),
                    (e = e || `utf8`),
                    t < 0 && (t = 0),
                    n > this.length && (n = this.length),
                    n <= t)
                  )
                    return ``;
                  for (;;)
                    switch (e) {
                      case `hex`:
                        return y(this, t, n);
                      case `utf8`:
                      case `utf-8`:
                        return g(this, t, n);
                      case `ascii`:
                        return _(this, t, n);
                      case `binary`:
                        return v(this, t, n);
                      case `base64`:
                        return h(this, t, n);
                      case `ucs2`:
                      case `ucs-2`:
                      case `utf16le`:
                      case `utf-16le`:
                        return b(this, t, n);
                      default:
                        if (r) throw TypeError(`Unknown encoding: ` + e);
                        ((e = (e + ``).toLowerCase()), (r = !0));
                    }
                }),
                (e.prototype.equals = function (t) {
                  if (e.isBuffer(t)) return this === t || e.compare(this, t) === 0;
                  throw TypeError(`Argument must be a Buffer`);
                }),
                (e.prototype.inspect = function () {
                  var e = ``,
                    n = t.INSPECT_MAX_BYTES;
                  return (
                    this.length > 0 &&
                      ((e = this.toString(`hex`, 0, n).match(/.{2}/g).join(` `)), this.length > n) &&
                      (e += ` ... `),
                    `<Buffer ` + e + `>`
                  );
                }),
                (e.prototype.compare = function (t) {
                  if (e.isBuffer(t)) return this === t ? 0 : e.compare(this, t);
                  throw TypeError(`Argument must be a Buffer`);
                }),
                (e.prototype.indexOf = function (t, n) {
                  if (
                    (n > 2147483647 ? (n = 2147483647) : n < -2147483648 && (n = -2147483648),
                    (n >>= 0),
                    this.length === 0 || n >= this.length)
                  )
                    return -1;
                  if ((n < 0 && (n = Math.max(this.length + n, 0)), typeof t == `string`))
                    return t.length === 0 ? -1 : String.prototype.indexOf.call(this, t, n);
                  if (e.isBuffer(t)) return r(this, t, n);
                  if (typeof t == `number`)
                    return e.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === `function`
                      ? Uint8Array.prototype.indexOf.call(this, t, n)
                      : r(this, [t], n);
                  function r(e, t, n) {
                    for (var r = -1, i = 0; n + i < e.length; i++)
                      if (e[n + i] === t[r === -1 ? 0 : i - r]) {
                        if ((r === -1 && (r = i), i - r + 1 === t.length)) return n + r;
                      } else r = -1;
                    return -1;
                  }
                  throw TypeError(`val must be string, number or Buffer`);
                }),
                (e.prototype.get = function (e) {
                  return (console.log(`.get() is deprecated. Access using array indexes instead.`), this.readUInt8(e));
                }),
                (e.prototype.set = function (e, t) {
                  return (
                    console.log(`.set() is deprecated. Access using array indexes instead.`),
                    this.writeUInt8(e, t)
                  );
                }),
                (e.prototype.write = function (e, t, n, r) {
                  if (
                    (isFinite(t) ? isFinite(n) || ((r = n), (n = void 0)) : ((a = r), (r = t), (t = n), (n = a)),
                    (t = Number(t) || 0),
                    n < 0 || t < 0 || t > this.length)
                  )
                    throw RangeError(`attempt to write outside buffer bounds`);
                  var i,
                    a = this.length - t;
                  switch (((!n || ((n = Number(n)), n > a)) && (n = a), (r = String(r || `utf8`).toLowerCase()), r)) {
                    case `hex`:
                      i = l(this, e, t, n);
                      break;
                    case `utf8`:
                    case `utf-8`:
                      i = u(this, e, t, n);
                      break;
                    case `ascii`:
                      i = d(this, e, t, n);
                      break;
                    case `binary`:
                      i = f(this, e, t, n);
                      break;
                    case `base64`:
                      i = p(this, e, t, n);
                      break;
                    case `ucs2`:
                    case `ucs-2`:
                    case `utf16le`:
                    case `utf-16le`:
                      i = m(this, e, t, n);
                      break;
                    default:
                      throw TypeError(`Unknown encoding: ` + r);
                  }
                  return i;
                }),
                (e.prototype.toJSON = function () {
                  return {
                    type: `Buffer`,
                    data: Array.prototype.slice.call(this._arr || this, 0),
                  };
                }),
                (e.prototype.slice = function (t, n) {
                  var r = this.length;
                  if (
                    ((t = ~~t),
                    (n = n === void 0 ? r : ~~n),
                    t < 0 ? ((t += r), t < 0 && (t = 0)) : t > r && (t = r),
                    n < 0 ? ((n += r), n < 0 && (n = 0)) : n > r && (n = r),
                    n < t && (n = t),
                    e.TYPED_ARRAY_SUPPORT)
                  )
                    a = e._augment(this.subarray(t, n));
                  else for (var i = n - t, a = new e(i, void 0), o = 0; o < i; o++) a[o] = this[o + t];
                  return (a.length && (a.parent = this.parent || this), a);
                }),
                (e.prototype.readUIntLE = function (e, t, n) {
                  ((e >>>= 0), (t >>>= 0), n || x(e, t, this.length));
                  for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256); ) r += this[e + a] * i;
                  return r;
                }),
                (e.prototype.readUIntBE = function (e, t, n) {
                  ((e >>>= 0), (t >>>= 0), n || x(e, t, this.length));
                  for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); ) r += this[e + --t] * i;
                  return r;
                }),
                (e.prototype.readUInt8 = function (e, t) {
                  return (t || x(e, 1, this.length), this[e]);
                }),
                (e.prototype.readUInt16LE = function (e, t) {
                  return (t || x(e, 2, this.length), this[e] | (this[e + 1] << 8));
                }),
                (e.prototype.readUInt16BE = function (e, t) {
                  return (t || x(e, 2, this.length), (this[e] << 8) | this[e + 1]);
                }),
                (e.prototype.readUInt32LE = function (e, t) {
                  return (
                    t || x(e, 4, this.length),
                    (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3]
                  );
                }),
                (e.prototype.readUInt32BE = function (e, t) {
                  return (
                    t || x(e, 4, this.length),
                    16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                  );
                }),
                (e.prototype.readIntLE = function (e, t, n) {
                  ((e >>>= 0), (t >>>= 0), n || x(e, t, this.length));
                  for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256); ) r += this[e + a] * i;
                  return ((i *= 128), r >= i && (r -= 2 ** (8 * t)), r);
                }),
                (e.prototype.readIntBE = function (e, t, n) {
                  ((e >>>= 0), (t >>>= 0), n || x(e, t, this.length));
                  for (var r = t, i = 1, a = this[e + --r]; r > 0 && (i *= 256); ) a += this[e + --r] * i;
                  return ((i *= 128), a >= i && (a -= 2 ** (8 * t)), a);
                }),
                (e.prototype.readInt8 = function (e, t) {
                  return (t || x(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]);
                }),
                (e.prototype.readInt16LE = function (e, t) {
                  return (
                    t || x(e, 2, this.length),
                    (t = this[e] | (this[e + 1] << 8)),
                    32768 & t ? 4294901760 | t : t
                  );
                }),
                (e.prototype.readInt16BE = function (e, t) {
                  return (
                    t || x(e, 2, this.length),
                    (t = this[e + 1] | (this[e] << 8)),
                    32768 & t ? 4294901760 | t : t
                  );
                }),
                (e.prototype.readInt32LE = function (e, t) {
                  return (
                    t || x(e, 4, this.length),
                    this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
                  );
                }),
                (e.prototype.readInt32BE = function (e, t) {
                  return (
                    t || x(e, 4, this.length),
                    (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
                  );
                }),
                (e.prototype.readFloatLE = function (e, t) {
                  return (t || x(e, 4, this.length), i.read(this, e, !0, 23, 4));
                }),
                (e.prototype.readFloatBE = function (e, t) {
                  return (t || x(e, 4, this.length), i.read(this, e, !1, 23, 4));
                }),
                (e.prototype.readDoubleLE = function (e, t) {
                  return (t || x(e, 8, this.length), i.read(this, e, !0, 52, 8));
                }),
                (e.prototype.readDoubleBE = function (e, t) {
                  return (t || x(e, 8, this.length), i.read(this, e, !1, 52, 8));
                }),
                (e.prototype.writeUIntLE = function (e, t, n, r) {
                  ((e = +e), (t >>>= 0), (n >>>= 0), r || S(this, e, t, n, 2 ** (8 * n), 0));
                  var i = 1,
                    a = 0;
                  for (this[t] = 255 & e; ++a < n && (i *= 256); ) this[t + a] = ((e / i) >>> 0) & 255;
                  return t + n;
                }),
                (e.prototype.writeUIntBE = function (e, t, n, r) {
                  ((e = +e), (t >>>= 0), (n >>>= 0), r || S(this, e, t, n, 2 ** (8 * n), 0));
                  var i = n - 1,
                    a = 1;
                  for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); ) this[t + i] = ((e / a) >>> 0) & 255;
                  return t + n;
                }),
                (e.prototype.writeUInt8 = function (t, n, r) {
                  return (
                    (t = +t),
                    (n >>>= 0),
                    r || S(this, t, n, 1, 255, 0),
                    e.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                    (this[n] = t),
                    n + 1
                  );
                }),
                (e.prototype.writeUInt16LE = function (t, n, r) {
                  return (
                    (t = +t),
                    (n >>>= 0),
                    r || S(this, t, n, 2, 65535, 0),
                    e.TYPED_ARRAY_SUPPORT ? ((this[n] = t), (this[n + 1] = t >>> 8)) : C(this, t, n, !0),
                    n + 2
                  );
                }),
                (e.prototype.writeUInt16BE = function (t, n, r) {
                  return (
                    (t = +t),
                    (n >>>= 0),
                    r || S(this, t, n, 2, 65535, 0),
                    e.TYPED_ARRAY_SUPPORT ? ((this[n] = t >>> 8), (this[n + 1] = t)) : C(this, t, n, !1),
                    n + 2
                  );
                }),
                (e.prototype.writeUInt32LE = function (t, n, r) {
                  return (
                    (t = +t),
                    (n >>>= 0),
                    r || S(this, t, n, 4, 4294967295, 0),
                    e.TYPED_ARRAY_SUPPORT
                      ? ((this[n + 3] = t >>> 24), (this[n + 2] = t >>> 16), (this[n + 1] = t >>> 8), (this[n] = t))
                      : w(this, t, n, !0),
                    n + 4
                  );
                }),
                (e.prototype.writeUInt32BE = function (t, n, r) {
                  return (
                    (t = +t),
                    (n >>>= 0),
                    r || S(this, t, n, 4, 4294967295, 0),
                    e.TYPED_ARRAY_SUPPORT
                      ? ((this[n] = t >>> 24), (this[n + 1] = t >>> 16), (this[n + 2] = t >>> 8), (this[n + 3] = t))
                      : w(this, t, n, !1),
                    n + 4
                  );
                }),
                (e.prototype.writeIntLE = function (e, t, n, r) {
                  ((e = +e), (t >>>= 0), r || S(this, e, t, n, 2 ** (8 * n - 1) - 1, -(2 ** (8 * n - 1))));
                  var i = 0,
                    a = 1,
                    o = +(e < 0);
                  for (this[t] = 255 & e; ++i < n && (a *= 256); ) this[t + i] = (((e / a) >> 0) - o) & 255;
                  return t + n;
                }),
                (e.prototype.writeIntBE = function (e, t, n, r) {
                  ((e = +e), (t >>>= 0), r || S(this, e, t, n, 2 ** (8 * n - 1) - 1, -(2 ** (8 * n - 1))));
                  var i = n - 1,
                    a = 1,
                    o = +(e < 0);
                  for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); ) this[t + i] = (((e / a) >> 0) - o) & 255;
                  return t + n;
                }),
                (e.prototype.writeInt8 = function (t, n, r) {
                  return (
                    (t = +t),
                    (n >>>= 0),
                    r || S(this, t, n, 1, 127, -128),
                    e.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                    t < 0 && (t = 255 + t + 1),
                    (this[n] = t),
                    n + 1
                  );
                }),
                (e.prototype.writeInt16LE = function (t, n, r) {
                  return (
                    (t = +t),
                    (n >>>= 0),
                    r || S(this, t, n, 2, 32767, -32768),
                    e.TYPED_ARRAY_SUPPORT ? ((this[n] = t), (this[n + 1] = t >>> 8)) : C(this, t, n, !0),
                    n + 2
                  );
                }),
                (e.prototype.writeInt16BE = function (t, n, r) {
                  return (
                    (t = +t),
                    (n >>>= 0),
                    r || S(this, t, n, 2, 32767, -32768),
                    e.TYPED_ARRAY_SUPPORT ? ((this[n] = t >>> 8), (this[n + 1] = t)) : C(this, t, n, !1),
                    n + 2
                  );
                }),
                (e.prototype.writeInt32LE = function (t, n, r) {
                  return (
                    (t = +t),
                    (n >>>= 0),
                    r || S(this, t, n, 4, 2147483647, -2147483648),
                    e.TYPED_ARRAY_SUPPORT
                      ? ((this[n] = t), (this[n + 1] = t >>> 8), (this[n + 2] = t >>> 16), (this[n + 3] = t >>> 24))
                      : w(this, t, n, !0),
                    n + 4
                  );
                }),
                (e.prototype.writeInt32BE = function (t, n, r) {
                  return (
                    (t = +t),
                    (n >>>= 0),
                    r || S(this, t, n, 4, 2147483647, -2147483648),
                    t < 0 && (t = 4294967295 + t + 1),
                    e.TYPED_ARRAY_SUPPORT
                      ? ((this[n] = t >>> 24), (this[n + 1] = t >>> 16), (this[n + 2] = t >>> 8), (this[n + 3] = t))
                      : w(this, t, n, !1),
                    n + 4
                  );
                }),
                (e.prototype.writeFloatLE = function (e, t, n) {
                  return E(this, e, t, !0, n);
                }),
                (e.prototype.writeFloatBE = function (e, t, n) {
                  return E(this, e, t, !1, n);
                }),
                (e.prototype.writeDoubleLE = function (e, t, n) {
                  return D(this, e, t, !0, n);
                }),
                (e.prototype.writeDoubleBE = function (e, t, n) {
                  return D(this, e, t, !1, n);
                }),
                (e.prototype.copy = function (t, n, r, i) {
                  if (
                    ((r = r || 0),
                    i || i === 0 || (i = this.length),
                    n >= t.length && (n = t.length),
                    (n = n || 0),
                    i > 0 && i < r && (i = r),
                    i === r || t.length === 0 || this.length === 0)
                  )
                    return 0;
                  if (n < 0) throw RangeError(`targetStart out of bounds`);
                  if (r < 0 || r >= this.length) throw RangeError(`sourceStart out of bounds`);
                  if (i < 0) throw RangeError(`sourceEnd out of bounds`);
                  (i > this.length && (i = this.length), t.length - n < i - r && (i = t.length - n + r));
                  var a = i - r;
                  if (a < 1e3 || !e.TYPED_ARRAY_SUPPORT) for (var o = 0; o < a; o++) t[o + n] = this[o + r];
                  else t._set(this.subarray(r, r + a), n);
                  return a;
                }),
                (e.prototype.fill = function (e, t, n) {
                  if (((e = e || 0), (t = t || 0), (n = n || this.length), n < t)) throw RangeError(`end < start`);
                  if (n !== t && this.length !== 0) {
                    if (t < 0 || t >= this.length) throw RangeError(`start out of bounds`);
                    if (n < 0 || n > this.length) throw RangeError(`end out of bounds`);
                    if (typeof e == `number`) for (a = t; a < n; a++) this[a] = e;
                    else for (var r = M(e.toString()), i = r.length, a = t; a < n; a++) this[a] = r[a % i];
                    return this;
                  }
                }),
                (e.prototype.toArrayBuffer = function () {
                  if (typeof Uint8Array > `u`) throw TypeError(`Buffer.toArrayBuffer not supported in this browser`);
                  if (e.TYPED_ARRAY_SUPPORT) return new e(this).buffer;
                  for (var t = new Uint8Array(this.length), n = 0, r = t.length; n < r; n += 1) t[n] = this[n];
                  return t.buffer;
                }));
              var O = e.prototype,
                k =
                  ((e._augment = function (t) {
                    return (
                      (t.constructor = e),
                      (t._isBuffer = !0),
                      (t._set = t.set),
                      (t.get = O.get),
                      (t.set = O.set),
                      (t.write = O.write),
                      (t.toString = O.toString),
                      (t.toLocaleString = O.toString),
                      (t.toJSON = O.toJSON),
                      (t.equals = O.equals),
                      (t.compare = O.compare),
                      (t.indexOf = O.indexOf),
                      (t.copy = O.copy),
                      (t.slice = O.slice),
                      (t.readUIntLE = O.readUIntLE),
                      (t.readUIntBE = O.readUIntBE),
                      (t.readUInt8 = O.readUInt8),
                      (t.readUInt16LE = O.readUInt16LE),
                      (t.readUInt16BE = O.readUInt16BE),
                      (t.readUInt32LE = O.readUInt32LE),
                      (t.readUInt32BE = O.readUInt32BE),
                      (t.readIntLE = O.readIntLE),
                      (t.readIntBE = O.readIntBE),
                      (t.readInt8 = O.readInt8),
                      (t.readInt16LE = O.readInt16LE),
                      (t.readInt16BE = O.readInt16BE),
                      (t.readInt32LE = O.readInt32LE),
                      (t.readInt32BE = O.readInt32BE),
                      (t.readFloatLE = O.readFloatLE),
                      (t.readFloatBE = O.readFloatBE),
                      (t.readDoubleLE = O.readDoubleLE),
                      (t.readDoubleBE = O.readDoubleBE),
                      (t.writeUInt8 = O.writeUInt8),
                      (t.writeUIntLE = O.writeUIntLE),
                      (t.writeUIntBE = O.writeUIntBE),
                      (t.writeUInt16LE = O.writeUInt16LE),
                      (t.writeUInt16BE = O.writeUInt16BE),
                      (t.writeUInt32LE = O.writeUInt32LE),
                      (t.writeUInt32BE = O.writeUInt32BE),
                      (t.writeIntLE = O.writeIntLE),
                      (t.writeIntBE = O.writeIntBE),
                      (t.writeInt8 = O.writeInt8),
                      (t.writeInt16LE = O.writeInt16LE),
                      (t.writeInt16BE = O.writeInt16BE),
                      (t.writeInt32LE = O.writeInt32LE),
                      (t.writeInt32BE = O.writeInt32BE),
                      (t.writeFloatLE = O.writeFloatLE),
                      (t.writeFloatBE = O.writeFloatBE),
                      (t.writeDoubleLE = O.writeDoubleLE),
                      (t.writeDoubleBE = O.writeDoubleBE),
                      (t.fill = O.fill),
                      (t.inspect = O.inspect),
                      (t.toArrayBuffer = O.toArrayBuffer),
                      t
                    );
                  }),
                  /[^+\/0-9A-z\-]/g);
              function A(e) {
                if (((e = j(e).replace(k, ``)), e.length < 2)) return ``;
                for (; e.length % 4 != 0; ) e += `=`;
                return e;
              }
              function j(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, ``);
              }
              function ee(t) {
                return a(t) || e.isBuffer(t) || (t && typeof t == `object` && typeof t.length == `number`);
              }
              function te(e) {
                return e < 16 ? `0` + e.toString(16) : e.toString(16);
              }
              function M(e, t) {
                t = t || 1 / 0;
                for (var n, r = e.length, i = null, a = [], o = 0; o < r; o++) {
                  if (((n = e.charCodeAt(o)), n > 55295 && n < 57344)) {
                    if (!i) {
                      if (n > 56319) {
                        (t -= 3) > -1 && a.push(239, 191, 189);
                        continue;
                      }
                      if (o + 1 === r) {
                        (t -= 3) > -1 && a.push(239, 191, 189);
                        continue;
                      }
                      i = n;
                      continue;
                    }
                    if (n < 56320) {
                      ((t -= 3) > -1 && a.push(239, 191, 189), (i = n));
                      continue;
                    }
                    ((n = ((i - 55296) << 10) | (n - 56320) | 65536), (i = null));
                  } else i && ((t -= 3) > -1 && a.push(239, 191, 189), (i = null));
                  if (n < 128) {
                    if (--t < 0) break;
                    a.push(n);
                  } else if (n < 2048) {
                    if ((t -= 2) < 0) break;
                    a.push((n >> 6) | 192, (63 & n) | 128);
                  } else if (n < 65536) {
                    if ((t -= 3) < 0) break;
                    a.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
                  } else {
                    if (!(n < 2097152)) throw Error(`Invalid code point`);
                    if ((t -= 4) < 0) break;
                    a.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
                  }
                }
                return a;
              }
              function ne(e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                return t;
              }
              function re(e, t) {
                for (var n, r, i = [], a = 0; a < e.length && !((t -= 2) < 0); a++)
                  ((r = e.charCodeAt(a)), (n = r >> 8), (r %= 256), i.push(r), i.push(n));
                return i;
              }
              function ie(e) {
                return r.toByteArray(A(e));
              }
              function ae(e, t, n, r) {
                for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); i++) t[i + n] = e[i];
                return i;
              }
              function N(e) {
                try {
                  return decodeURIComponent(e);
                } catch {
                  return `�`;
                }
              }
            }).call(t, n(7).Buffer);
          },
          function (e, t, n) {
            function r(e) {
              return e.toString(`ascii`, 0, 2) === `BM`;
            }
            function i(e) {
              return { width: e.readUInt32LE(18), height: e.readUInt32LE(22) };
            }
            e.exports = { detect: r, calculate: i };
          },
          function (e, t, n) {
            var r = /^GIF8[7,9]a/;
            function i(e) {
              return ((e = e.toString(`ascii`, 0, 6)), r.test(e));
            }
            function a(e) {
              return { width: e.readUInt16LE(6), height: e.readUInt16LE(8) };
            }
            e.exports = { detect: i, calculate: a };
          },
          function (e, t, n) {
            var r = {
                ffdb: `0001010101`,
                ffe0: `4a46494600`,
                ffe1: `4578696600`,
                ffe2: `4943435f50`,
                ffe3: ``,
                ffe8: `5350494646`,
                ffec: `4475636b79`,
                ffed: `50686f746f`,
                ffee: `41646f6265`,
              },
              i = [`\x1B[31m`, `\x1B[39m`];
            function a(e) {
              var t = e.toString(`hex`, 0, 2),
                n = e.toString(`hex`, 2, 4);
              return (
                t === `ffd8` &&
                ((t = e.toString(`hex`, 6, 11)),
                (e = n && r[n]),
                e === ``
                  ? (console.warn(
                      i[0] +
                        `this looks like a unrecognised jpeg
please report the issue here
` +
                        i[1],
                      `	https://github.com/netroy/image-size/issues/new
`
                    ),
                    !1)
                  : t === e || n === `ffdb`)
              );
            }
            function o(e, t) {
              return {
                height: e.readUInt16BE(t),
                width: e.readUInt16BE(t + 2),
              };
            }
            function s(e, t) {
              if (t > e.length) throw TypeError(`Corrupt JPG, exceeded buffer limits`);
              if (e[t] !== 255) throw TypeError(`Invalid JPG, marker table corrupted`);
            }
            function c(e) {
              var t, n;
              for (e = e.slice(4); e.length; ) {
                if (((t = e.readUInt16BE(0)), s(e, t), (n = e[t + 1]), n === 192 || n === 194)) return o(e, t + 5);
                e = e.slice(t + 2);
              }
              throw TypeError(`Invalid JPG, no size found`);
            }
            e.exports = { detect: a, calculate: c };
          },
          function (e, t, n) {
            var r = `PNG\r

`;
            function i(e) {
              if (r === e.toString(`ascii`, 1, 8)) {
                if (e.toString(`ascii`, 12, 16) !== `IHDR`) throw TypeError(`invalid png`);
                return !0;
              }
            }
            function a(e) {
              return { width: e.readUInt32BE(16), height: e.readUInt32BE(20) };
            }
            e.exports = { detect: i, calculate: a };
          },
          function (e, t, n) {
            function r(e) {
              return e.toString(`ascii`, 0, 4) === `8BPS`;
            }
            function i(e) {
              return { width: e.readUInt32BE(18), height: e.readUInt32BE(14) };
            }
            e.exports = { detect: r, calculate: i };
          },
          function (e, t, n) {
            var r = /<svg[^>]+[^>]*>/;
            function i(e) {
              return r.test(e);
            }
            var a = {
              root: /<svg [^>]+>/,
              width: /(^|\s)width\s*=\s*"(.+?)"/i,
              height: /(^|\s)height\s*=\s*"(.+?)"/i,
              viewbox: /(^|\s)viewbox\s*=\s*"(.+?)"/i,
            };
            function o(e) {
              var t = 1;
              return (
                e &&
                  e[2] &&
                  ((e = e[2].split(/\s/g)), e.length === 4) &&
                  ((e = e.map(function (e) {
                    return parseInt(e, 10);
                  })),
                  (t = (e[2] - e[0]) / (e[3] - e[1]))),
                t
              );
            }
            function s(e) {
              var t,
                n,
                e = e.toString().replace(/[\r\n\s]+/g, ` `),
                e = e.match(a.root),
                e = e && e[0];
              if (e)
                return (
                  (t = e.match(a.width)),
                  (n = e.match(a.height)),
                  (e = e.match(a.viewbox)),
                  (e = o(e)),
                  {
                    width: parseInt(t && t[2], 10) || 0,
                    height: parseInt(n && n[2], 10) || 0,
                    ratio: e,
                  }
                );
            }
            function c(e) {
              var e = s(e),
                t = e.width,
                n = e.height,
                e = e.ratio;
              if (t && n) return { width: t, height: n };
              if (t) return { width: t, height: Math.floor(t / e) };
              if (n) return { width: Math.floor(n * e), height: n };
              throw TypeError(`invalid svg`);
            }
            e.exports = { detect: i, calculate: c };
          },
          function (e, t, n) {
            (function (t) {
              var r = n(16),
                i = n(17);
              function a(e) {
                return ((e = e.toString(`hex`, 0, 4)), e === `49492a00` || e === `4d4d002a`);
              }
              function o(e, n, a) {
                var e = i(e, 32, 4, a),
                  a = 1024,
                  o = r.statSync(n).size,
                  o = (e + a > o && (a = o - e - 10), new t(a)),
                  n = r.openSync(n, `r`),
                  n = (r.readSync(n, o, 0, a, e), o.slice(2));
                return n;
              }
              function s(e, t) {
                var n = i(e, 16, 8, t),
                  e = i(e, 16, 10, t);
                return (e << 16) + n;
              }
              function c(e) {
                if (e.length > 24) return e.slice(12);
              }
              function l(e, t) {
                for (
                  var n, r, a, o = {};
                  e && e.length && ((n = i(e, 16, 0, t)), (r = i(e, 16, 2, t)), (a = i(e, 32, 4, t)), n !== 0);
                )
                  (a === 1 && r === 3 && (o[n] = s(e, t)), (e = c(e)));
                return o;
              }
              function u(e) {
                return ((e = e.toString(`ascii`, 0, 2)), e === `II` ? `LE` : e === `MM` ? `BE` : void 0);
              }
              function d(e, t) {
                if (!t) throw TypeError(`Tiff doesn't support buffer`);
                var n = u(e) === `BE`,
                  e = o(e, t, n),
                  t = l(e, n),
                  e = t[256],
                  n = t[257];
                if (e && n) return { width: e, height: n };
                throw TypeError(`Invalid Tiff, missing tags`);
              }
              e.exports = { detect: a, calculate: d };
            }).call(t, n(7).Buffer);
          },
          function (e, t, n) {
            function r(e) {
              var t = e.toString(`ascii`, 0, 4) === `RIFF`,
                n = e.toString(`ascii`, 8, 12) === `WEBP`,
                e = e.toString(`ascii`, 12, 15) === `VP8`;
              return t && n && e;
            }
            function i(e) {
              var t,
                n = e.toString(`ascii`, 12, 16);
              return (
                (e = e.slice(20, 30)),
                n === `VP8 ` && e[0] !== 47
                  ? o(e)
                  : ((t = e.toString(`hex`, 3, 6)), n === `VP8L` && t !== `9d012a` && a(e))
              );
            }
            function a(e) {
              return {
                width: 1 + (((63 & e[2]) << 8) | e[1]),
                height: 1 + (((15 & e[4]) << 10) | (e[3] << 2) | ((192 & e[2]) >> 6)),
              };
            }
            function o(e) {
              return {
                width: 16383 & e.readInt16LE(6),
                height: 16383 & e.readInt16LE(8),
              };
            }
            e.exports = { detect: r, calculate: i };
          },
          function (e, t, n) {},
          function (e, t, n) {
            e.exports = function (e, t, n, r) {
              return ((n = n || 0), (r = r ? `BE` : `LE`), (t = e[`readUInt` + t + r]), t.call(e, n));
            };
          },
          function (e, t, n) {
            var e = (e.exports = {}),
              r = [],
              i = !1;
            function a() {
              if (!i) {
                i = !0;
                for (var e, t = r.length; t; ) {
                  ((e = r), (r = []));
                  for (var n = -1; ++n < t; ) e[n]();
                  t = r.length;
                }
                i = !1;
              }
            }
            function o() {}
            ((e.nextTick = function (e) {
              (r.push(e), i || setTimeout(a, 0));
            }),
              (e.title = `browser`),
              (e.browser = !0),
              (e.env = {}),
              (e.argv = []),
              (e.version = ``),
              (e.versions = {}),
              (e.on = o),
              (e.addListener = o),
              (e.once = o),
              (e.off = o),
              (e.removeListener = o),
              (e.removeAllListeners = o),
              (e.emit = o),
              (e.binding = function (e) {
                throw Error(`process.binding is not supported`);
              }),
              (e.cwd = function () {
                return `/`;
              }),
              (e.chdir = function (e) {
                throw Error(`process.chdir is not supported`);
              }),
              (e.umask = function () {
                return 0;
              }));
          },
          function (e, t, n) {
            ((t.read = function (e, t, n, r, i) {
              var a,
                o,
                s = 8 * i - r - 1,
                c = (1 << s) - 1,
                l = c >> 1,
                u = -7,
                d = n ? i - 1 : 0,
                f = n ? -1 : 1,
                i = e[t + d];
              for (d += f, a = i & ((1 << -u) - 1), i >>= -u, u += s; u > 0; a = 256 * a + e[t + d], d += f, u -= 8);
              for (o = a & ((1 << -u) - 1), a >>= -u, u += r; u > 0; o = 256 * o + e[t + d], d += f, u -= 8);
              if (a === 0) a = 1 - l;
              else {
                if (a === c) return o ? NaN : (1 / 0) * (i ? -1 : 1);
                ((o += 2 ** r), (a -= l));
              }
              return (i ? -1 : 1) * o * 2 ** (a - r);
            }),
              (t.write = function (e, t, n, r, i, a) {
                var o,
                  s,
                  c = 8 * a - i - 1,
                  l = (1 << c) - 1,
                  u = l >> 1,
                  d = i === 23 ? 2 ** -24 - 2 ** -77 : 0,
                  f = r ? 0 : a - 1,
                  p = r ? 1 : -1,
                  a = +(t < 0 || (t === 0 && 1 / t < 0));
                for (
                  t = Math.abs(t),
                    isNaN(t) || t === 1 / 0
                      ? ((s = +!!isNaN(t)), (o = l))
                      : ((o = Math.floor(Math.log(t) / Math.LN2)),
                        t * (r = 2 ** -o) < 1 && (o--, (r *= 2)),
                        (t += o + u >= 1 ? d / r : d * 2 ** (1 - u)),
                        t * r >= 2 && (o++, (r /= 2)),
                        o + u >= l
                          ? ((s = 0), (o = l))
                          : o + u >= 1
                            ? ((s = (t * r - 1) * 2 ** i), (o += u))
                            : ((s = t * 2 ** (u - 1) * 2 ** i), (o = 0)));
                  i >= 8;
                  e[n + f] = 255 & s, f += p, s /= 256, i -= 8
                );
                for (o = (o << i) | s, c += i; c > 0; e[n + f] = 255 & o, f += p, o /= 256, c -= 8);
                e[n + f - p] |= 128 * a;
              }));
          },
          function (e, t, n) {
            var r = Array.isArray,
              i = Object.prototype.toString;
            e.exports =
              r ||
              function (e) {
                return !!e && i.call(e) == `[object Array]`;
              };
          },
          function (e, t, n) {
            var r = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`;
            (function (e) {
              var t = typeof Uint8Array < `u` ? Uint8Array : Array,
                n = 43,
                i = 47,
                a = 48,
                o = 97,
                s = 65,
                c = 45,
                l = 95;
              function u(e) {
                return (
                  (e = e.charCodeAt(0)),
                  e === n || e === c
                    ? 62
                    : e === i || e === l
                      ? 63
                      : e < a
                        ? -1
                        : e < a + 10
                          ? e - a + 26 + 26
                          : e < s + 26
                            ? e - s
                            : e < o + 26
                              ? e - o + 26
                              : void 0
                );
              }
              function d(e) {
                var n, r, i;
                if (e.length % 4 > 0) throw Error(`Invalid string. Length must be a multiple of 4`);
                var a = e.length,
                  a = e.charAt(a - 2) === `=` ? 2 : +(e.charAt(a - 1) === `=`),
                  o = new t((3 * e.length) / 4 - a),
                  s = a > 0 ? e.length - 4 : e.length,
                  c = 0;
                function l(e) {
                  o[c++] = e;
                }
                for (n = 0, r = 0; n < s; n += 4, r += 3)
                  ((i =
                    (u(e.charAt(n)) << 18) |
                    (u(e.charAt(n + 1)) << 12) |
                    (u(e.charAt(n + 2)) << 6) |
                    u(e.charAt(n + 3))),
                    l((16711680 & i) >> 16),
                    l((65280 & i) >> 8),
                    l(255 & i));
                return (
                  a === 2
                    ? ((i = (u(e.charAt(n)) << 2) | (u(e.charAt(n + 1)) >> 4)), l(255 & i))
                    : a === 1 &&
                      ((i = (u(e.charAt(n)) << 10) | (u(e.charAt(n + 1)) << 4) | (u(e.charAt(n + 2)) >> 2)),
                      l((i >> 8) & 255),
                      l(255 & i)),
                  o
                );
              }
              function f(e) {
                var t,
                  n,
                  i,
                  a = e.length % 3,
                  o = ``;
                function s(e) {
                  return r.charAt(e);
                }
                function c(e) {
                  return s((e >> 18) & 63) + s((e >> 12) & 63) + s((e >> 6) & 63) + s(63 & e);
                }
                for (t = 0, i = e.length - a; t < i; t += 3)
                  ((n = (e[t] << 16) + (e[t + 1] << 8) + e[t + 2]), (o += c(n)));
                switch (a) {
                  case 1:
                    ((n = e[e.length - 1]), (o += s(n >> 2)), (o += s((n << 4) & 63)), (o += `==`));
                    break;
                  case 2:
                    ((n = (e[e.length - 2] << 8) + e[e.length - 1]),
                      (o += s(n >> 10)),
                      (o += s((n >> 4) & 63)),
                      (o += s((n << 2) & 63)),
                      (o += `=`));
                    break;
                }
                return o;
              }
              ((e.toByteArray = d), (e.fromByteArray = f));
            })(t);
          },
        ]);
      });
    })(fi),
    fi.exports),
  mi = { exports: {} },
  hi =
    ((function (e) {
      var t = (function (e) {
        var t,
          n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
          r = 0,
          i = {},
          a = {
            manual: e.Prism && e.Prism.manual,
            disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
            util: {
              encode: function e(t) {
                return t instanceof o
                  ? new o(t.type, e(t.content), t.alias)
                  : Array.isArray(t)
                    ? t.map(e)
                    : t
                        .replace(/&/g, `&amp;`)
                        .replace(/</g, `&lt;`)
                        .replace(/\u00a0/g, ` `);
              },
              type: function (e) {
                return Object.prototype.toString.call(e).slice(8, -1);
              },
              objId: function (e) {
                return (e.__id || Object.defineProperty(e, '__id', { value: ++r }), e.__id);
              },
              clone: function e(t, n) {
                var r, i;
                switch (((n = n || {}), a.util.type(t))) {
                  case `Object`:
                    if (((i = a.util.objId(t)), n[i])) return n[i];
                    for (var o in ((r = {}), (n[i] = r), t)) t.hasOwnProperty(o) && (r[o] = e(t[o], n));
                    return r;
                  case `Array`:
                    return (
                      (i = a.util.objId(t)),
                      n[i]
                        ? n[i]
                        : ((r = []),
                          (n[i] = r),
                          t.forEach(function (t, i) {
                            r[i] = e(t, n);
                          }),
                          r)
                    );
                  default:
                    return t;
                }
              },
              getLanguage: function (e) {
                for (; e; ) {
                  var t = n.exec(e.className);
                  if (t) return t[1].toLowerCase();
                  e = e.parentElement;
                }
                return `none`;
              },
              setLanguage: function (e, t) {
                ((e.className = e.className.replace(RegExp(n, `gi`), ``)), e.classList.add(`language-` + t));
              },
              currentScript: function () {
                if (typeof document > `u`) return null;
                if (`currentScript` in document) return document.currentScript;
                try {
                  throw Error();
                } catch (r) {
                  var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
                  if (e) {
                    var t,
                      n = document.getElementsByTagName(`script`);
                    for (t in n) if (n[t].src == e) return n[t];
                  }
                  return null;
                }
              },
              isActive: function (e, t, n) {
                for (var r = `no-` + t; e; ) {
                  var i = e.classList;
                  if (i.contains(t)) return !0;
                  if (i.contains(r)) return !1;
                  e = e.parentElement;
                }
                return !!n;
              },
            },
            languages: {
              plain: i,
              plaintext: i,
              text: i,
              txt: i,
              extend: function (e, t) {
                var n,
                  r = a.util.clone(a.languages[e]);
                for (n in t) r[n] = t[n];
                return r;
              },
              insertBefore: function (e, t, n, r) {
                r = r || a.languages;
                var i,
                  o = r[e],
                  s = {};
                for (i in o)
                  if (o.hasOwnProperty(i)) {
                    if (i == t) for (var c in n) n.hasOwnProperty(c) && (s[c] = n[c]);
                    n.hasOwnProperty(i) || (s[i] = o[i]);
                  }
                var l = r[e];
                return (
                  (r[e] = s),
                  a.languages.DFS(a.languages, function (t, n) {
                    n === l && t != e && (this[t] = s);
                  }),
                  s
                );
              },
              DFS: function e(t, n, r, i) {
                i = i || {};
                var o,
                  s,
                  c,
                  l = a.util.objId;
                for (o in t)
                  t.hasOwnProperty(o) &&
                    (n.call(t, o, t[o], r || o),
                    (s = t[o]),
                    (c = a.util.type(s)),
                    c !== `Object` || i[l(s)]
                      ? c !== `Array` || i[l(s)] || ((i[l(s)] = !0), e(s, n, o, i))
                      : ((i[l(s)] = !0), e(s, n, null, i)));
              },
            },
            plugins: {},
            highlightAll: function (e, t) {
              a.highlightAllUnder(document, e, t);
            },
            highlightAllUnder: function (e, t, n) {
              var r = {
                callback: n,
                container: e,
                selector: `code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code`,
              };
              (a.hooks.run(`before-highlightall`, r),
                (r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector))),
                a.hooks.run(`before-all-elements-highlight`, r));
              for (var i, o = 0; (i = r.elements[o++]); ) a.highlightElement(i, !0 === t, r.callback);
            },
            highlightElement: function (t, n, r) {
              var i = a.util.getLanguage(t),
                o = a.languages[i],
                s = (a.util.setLanguage(t, i), t.parentElement),
                c = (s && s.nodeName.toLowerCase() === `pre` && a.util.setLanguage(s, i), t.textContent),
                l = { element: t, language: i, grammar: o, code: c };
              function u(e) {
                ((l.highlightedCode = e),
                  a.hooks.run(`before-insert`, l),
                  (l.element.innerHTML = l.highlightedCode),
                  a.hooks.run(`after-highlight`, l),
                  a.hooks.run(`complete`, l),
                  r && r.call(l.element));
              }
              (a.hooks.run(`before-sanity-check`, l),
                (s = l.element.parentElement),
                s &&
                  s.nodeName.toLowerCase() === `pre` &&
                  !s.hasAttribute(`tabindex`) &&
                  s.setAttribute(`tabindex`, `0`),
                l.code
                  ? (a.hooks.run(`before-highlight`, l),
                    l.grammar
                      ? n && e.Worker
                        ? ((t = new Worker(a.filename)),
                          (t.onmessage = function (e) {
                            u(e.data);
                          }),
                          t.postMessage(
                            JSON.stringify({
                              language: l.language,
                              code: l.code,
                              immediateClose: !0,
                            })
                          ))
                        : u(a.highlight(l.code, l.grammar, l.language))
                      : u(a.util.encode(l.code)))
                  : (a.hooks.run(`complete`, l), r && r.call(l.element)));
            },
            highlight: function (e, t, n) {
              if (((e = { code: e, grammar: t, language: n }), a.hooks.run(`before-tokenize`, e), e.grammar))
                return (
                  (e.tokens = a.tokenize(e.code, e.grammar)),
                  a.hooks.run(`after-tokenize`, e),
                  o.stringify(a.util.encode(e.tokens), e.language)
                );
              throw Error(`The language "` + e.language + `" has no grammar.`);
            },
            tokenize: function (e, t) {
              var n = t.rest;
              if (n) {
                for (var r in n) t[r] = n[r];
                delete t.rest;
              }
              var i = new l();
              return (u(i, i.head, e), c(e, i, t, i.head, 0), f(i));
            },
            hooks: {
              all: {},
              add: function (e, t) {
                var n = a.hooks.all;
                ((n[e] = n[e] || []), n[e].push(t));
              },
              run: function (e, t) {
                var n = a.hooks.all[e];
                if (n && n.length) for (var r, i = 0; (r = n[i++]); ) r(t);
              },
            },
            Token: o,
          };
        function o(e, t, n, r) {
          ((this.type = e), (this.content = t), (this.alias = n), (this.length = 0 | (r || ``).length));
        }
        function s(e, t, n, r) {
          return (
            (e.lastIndex = t),
            (t = e.exec(n)),
            t && r && t[1] && ((e = t[1].length), (t.index += e), (t[0] = t[0].slice(e))),
            t
          );
        }
        function c(e, t, n, r, i, l) {
          for (var f in n)
            if (n.hasOwnProperty(f) && n[f])
              for (var p = n[f], p = Array.isArray(p) ? p : [p], m = 0; m < p.length; ++m) {
                if (l && l.cause == f + `,` + m) return;
                for (
                  var h,
                    g = p[m],
                    _ = g.inside,
                    v = !!g.lookbehind,
                    y = !!g.greedy,
                    b = g.alias,
                    x =
                      (y &&
                        !g.pattern.global &&
                        ((h = g.pattern.toString().match(/[imsuy]*$/)[0]),
                        (g.pattern = RegExp(g.pattern.source, h + `g`))),
                      g.pattern || g),
                    S = r.next,
                    C = i;
                  S !== t.tail && !(l && C >= l.reach);
                  C += S.value.length, S = S.next
                ) {
                  var w = S.value;
                  if (t.length > e.length) return;
                  if (!(w instanceof o)) {
                    var T,
                      E = 1;
                    if (y) {
                      if (((T = s(x, C, e, v)), !T || T.index >= e.length)) break;
                      var D = T.index,
                        O = T.index + T[0].length,
                        k = C;
                      for (k += S.value.length; D >= k; ) ((S = S.next), (k += S.value.length));
                      if (((k -= S.value.length), (C = k), S.value instanceof o)) continue;
                      for (var A = S; A !== t.tail && (k < O || typeof A.value == `string`); A = A.next)
                        (E++, (k += A.value.length));
                      (E--, (w = e.slice(C, k)), (T.index -= C));
                    } else if (((T = s(x, 0, w, v)), !T)) continue;
                    var D = T.index,
                      j = T[0],
                      ee = w.slice(0, D),
                      te = w.slice(D + j.length),
                      w = C + w.length,
                      M = (l && w > l.reach && (l.reach = w), S.prev),
                      ee =
                        (ee && ((M = u(t, M, ee)), (C += ee.length)),
                        d(t, M, E),
                        new o(f, _ ? a.tokenize(j, _) : j, b, j)),
                      S = u(t, M, ee);
                    (te && u(t, S, te),
                      E > 1 &&
                        ((j = { cause: f + `,` + m, reach: w }), c(e, t, n, S.prev, C, j), l) &&
                        j.reach > l.reach &&
                        (l.reach = j.reach));
                  }
                }
              }
        }
        function l() {
          var e = { value: null, prev: null, next: null },
            t = { value: null, prev: e, next: null };
          ((e.next = t), (this.head = e), (this.tail = t), (this.length = 0));
        }
        function u(e, t, n) {
          var r = t.next,
            n = { value: n, prev: t, next: r };
          return ((t.next = n), (r.prev = n), e.length++, n);
        }
        function d(e, t, n) {
          for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
          ((t.next = r), (r.prev = t), (e.length -= i));
        }
        function f(e) {
          for (var t = [], n = e.head.next; n !== e.tail; ) (t.push(n.value), (n = n.next));
          return t;
        }
        return (
          (e.Prism = a),
          (o.stringify = function e(t, n) {
            if (typeof t == `string`) return t;
            var r;
            if (Array.isArray(t))
              return (
                (r = ``),
                t.forEach(function (t) {
                  r += e(t, n);
                }),
                r
              );
            var i,
              o = {
                type: t.type,
                content: e(t.content, n),
                tag: `span`,
                classes: [`token`, t.type],
                attributes: {},
                language: n,
              },
              t = t.alias,
              s =
                (t && (Array.isArray(t) ? Array.prototype.push.apply(o.classes, t) : o.classes.push(t)),
                a.hooks.run(`wrap`, o),
                ``);
            for (i in o.attributes) s += ` ` + i + `="` + (o.attributes[i] || ``).replace(/"/g, `&quot;`) + `"`;
            return `<` + o.tag + ` class="` + o.classes.join(` `) + `"` + s + `>` + o.content + `</` + o.tag + `>`;
          }),
          e.document
            ? ((i = a.util.currentScript()),
              i && ((a.filename = i.src), i.hasAttribute(`data-manual`)) && (a.manual = !0),
              a.manual ||
                ((t = document.readyState),
                t === `loading` || (t === `interactive` && i && i.defer)
                  ? document.addEventListener(`DOMContentLoaded`, p)
                  : window.requestAnimationFrame
                    ? window.requestAnimationFrame(p)
                    : window.setTimeout(p, 16)))
            : e.addEventListener &&
              !a.disableWorkerMessageHandler &&
              e.addEventListener(
                `message`,
                function (t) {
                  var t = JSON.parse(t.data),
                    n = t.language,
                    r = t.code,
                    t = t.immediateClose;
                  (e.postMessage(a.highlight(r, a.languages[n], n)), t && e.close());
                },
                !1
              ),
          a
        );
        function p() {
          a.manual || a.highlightAll();
        }
      })(
        typeof window < `u` ? window : typeof WorkerGlobalScope < `u` && self instanceof WorkerGlobalScope ? self : {}
      );
      (e.exports && (e.exports = t),
        le !== void 0 && (le.Prism = t),
        (t.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              'internal-subset': {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              'doctype-tag': /^DOCTYPE/i,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              'special-attr': [],
              'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [
                    { pattern: /^=/, alias: `attr-equals` },
                    { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
                  ],
                },
              },
              punctuation: /\/?>/,
              'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
              },
            },
          },
          entity: [{ pattern: /&[\da-z]{1,8};/i, alias: `named-entity` }, /&#x?[\da-f]{1,8};/i],
        }),
        (t.languages.markup.tag.inside[`attr-value`].inside.entity = t.languages.markup.entity),
        (t.languages.markup.doctype.inside[`internal-subset`].inside = t.languages.markup),
        t.hooks.add(`wrap`, function (e) {
          e.type === `entity` && (e.attributes.title = e.content.replace(/&amp;/, `&`));
        }),
        Object.defineProperty(t.languages.markup.tag, 'addInlined', {
          value: function (e, n) {
            var r = {},
              r =
                ((r[`language-` + n] = {
                  pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                  lookbehind: !0,
                  inside: t.languages[n],
                }),
                (r.cdata = /^<!\[CDATA\[|\]\]>$/i),
                {
                  'included-cdata': {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: r,
                  },
                }),
              n =
                ((r[`language-` + n] = {
                  pattern: /[\s\S]+/,
                  inside: t.languages[n],
                }),
                {});
            ((n[e] = {
              pattern: RegExp(
                `(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[\\s\\S])*?(?=<\\/__>)`.replace(
                  /__/g,
                  function () {
                    return e;
                  }
                ),
                `i`
              ),
              lookbehind: !0,
              greedy: !0,
              inside: r,
            }),
              t.languages.insertBefore(`markup`, `cdata`, n));
          },
        }),
        Object.defineProperty(t.languages.markup.tag, 'addAttribute', {
          value: function (e, n) {
            t.languages.markup.tag.inside[`special-attr`].push({
              pattern: RegExp(`(^|["'\\s])(?:` + e + `)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`, `i`),
              lookbehind: !0,
              inside: {
                'attr-name': /^[^\s=]+/,
                'attr-value': {
                  pattern: /=[\s\S]+/,
                  inside: {
                    value: {
                      pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                      lookbehind: !0,
                      alias: [n, `language-` + n],
                      inside: t.languages[n],
                    },
                    punctuation: [{ pattern: /^=/, alias: `attr-equals` }, /"|'/],
                  },
                },
              },
            });
          },
        }),
        (t.languages.html = t.languages.markup),
        (t.languages.mathml = t.languages.markup),
        (t.languages.svg = t.languages.markup),
        (t.languages.xml = t.languages.extend(`markup`, {})),
        (t.languages.ssml = t.languages.xml),
        (t.languages.atom = t.languages.xml),
        (t.languages.rss = t.languages.xml),
        (function (e) {
          var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,
            t =
              ((e.languages.css = {
                comment: /\/\*[\s\S]*?\*\//,
                atrule: {
                  pattern: RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|` + t.source + `)*?(?:;|(?=\\s*\\{))`),
                  inside: {
                    rule: /^@[\w-]+/,
                    'selector-function-argument': {
                      pattern:
                        /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                      lookbehind: !0,
                      alias: `selector`,
                    },
                    keyword: {
                      pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                      lookbehind: !0,
                    },
                  },
                },
                url: {
                  pattern: RegExp(`\\burl\\((?:` + t.source + `|(?:[^\\\\\\r\\n()"']|\\\\[\\s\\S])*)\\)`, `i`),
                  greedy: !0,
                  inside: {
                    function: /^url/i,
                    punctuation: /^\(|\)$/,
                    string: {
                      pattern: RegExp(`^` + t.source + `$`),
                      alias: `url`,
                    },
                  },
                },
                selector: {
                  pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + t.source + `)*(?=\\s*\\{)`),
                  lookbehind: !0,
                },
                string: { pattern: t, greedy: !0 },
                property: {
                  pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                  lookbehind: !0,
                },
                important: /!important\b/i,
                function: {
                  pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                  lookbehind: !0,
                },
                punctuation: /[(){};:,]/,
              }),
              (e.languages.css.atrule.inside.rest = e.languages.css),
              e.languages.markup);
          t && (t.tag.addInlined(`style`, `css`), t.tag.addAttribute(`style`, `css`));
        })(t),
        (t.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          'class-name': {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (t.languages.javascript = t.languages.extend(`clike`, {
          'class-name': [
            t.languages.clike[`class-name`],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              `(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])`
            ),
            lookbehind: !0,
          },
          operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
        (t.languages.javascript[`class-name`][0].pattern =
          /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
        t.languages.insertBefore(`javascript`, `keyword`, {
          regex: {
            pattern: RegExp(
              `((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)\\/(?:(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))`
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
              'regex-source': {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: `language-regex`,
                inside: t.languages.regex,
              },
              'regex-delimiter': /^\/|\/$/,
              'regex-flags': /^[a-z]+$/,
            },
          },
          'function-variable': {
            pattern:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: `function`,
          },
          parameter: [
            {
              pattern:
                /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: t.languages.javascript,
            },
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              lookbehind: !0,
              inside: t.languages.javascript,
            },
            {
              pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: t.languages.javascript,
            },
            {
              pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: t.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        t.languages.insertBefore(`javascript`, `string`, {
          hashbang: { pattern: /^#!.*/, greedy: !0, alias: `comment` },
          'template-string': {
            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
              'template-punctuation': { pattern: /^`|`$/, alias: `string` },
              interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                  'interpolation-punctuation': {
                    pattern: /^\$\{|\}$/,
                    alias: `punctuation`,
                  },
                  rest: t.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
          'string-property': {
            pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: `property`,
          },
        }),
        t.languages.insertBefore(`javascript`, `operator`, {
          'literal-property': {
            pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: `property`,
          },
        }),
        t.languages.markup &&
          (t.languages.markup.tag.addInlined(`script`, `javascript`),
          t.languages.markup.tag.addAttribute(
            `on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)`,
            `javascript`
          )),
        (t.languages.js = t.languages.javascript),
        (function () {
          var e, n, r, i, a, o, s, c, l, u;
          function d(e, t, i) {
            var a = new XMLHttpRequest();
            (a.open(`GET`, e, !0),
              (a.onreadystatechange = function () {
                a.readyState == 4 &&
                  (a.status < 400 && a.responseText
                    ? t(a.responseText)
                    : a.status >= 400
                      ? i(n(a.status, a.statusText))
                      : i(r));
              }),
              a.send(null));
          }
          function f(e) {
            var t,
              n,
              e = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || ``);
            if (e) return ((t = Number(e[1])), (n = e[2]), (e = e[3]), n ? (e ? [t, Number(e)] : [t, void 0]) : [t, t]);
          }
          t !== void 0 &&
            typeof document < `u` &&
            (Element.prototype.matches ||
              (Element.prototype.matches =
                Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
            (e = `Loading…`),
            (n = function (e, t) {
              return `✖ Error ` + e + ` while fetching file: ` + t;
            }),
            (r = `✖ Error: File does not exist or is empty`),
            (i = {
              js: `javascript`,
              py: `python`,
              rb: `ruby`,
              ps1: `powershell`,
              psm1: `powershell`,
              sh: `bash`,
              bat: `batch`,
              h: `c`,
              tex: `latex`,
            }),
            (a = `data-src-status`),
            (o = `loading`),
            (s = `loaded`),
            (c = `failed`),
            (l = `pre[data-src]:not([` + a + `="` + s + `"]):not([` + a + `="` + o + `"])`),
            t.hooks.add(`before-highlightall`, function (e) {
              e.selector += `, ` + l;
            }),
            t.hooks.add(`before-sanity-check`, function (n) {
              var r,
                u,
                p,
                m = n.element;
              m.matches(l) &&
                ((n.code = ``),
                m.setAttribute(a, o),
                (r = m.appendChild(document.createElement(`CODE`))),
                (r.textContent = e),
                (u = m.getAttribute(`data-src`)),
                (n = n.language),
                n === `none` && ((p = (/\.(\w+)$/.exec(u) || [, `none`])[1]), (n = i[p] || p)),
                t.util.setLanguage(r, n),
                t.util.setLanguage(m, n),
                (p = t.plugins.autoloader),
                p && p.loadLanguages(n),
                d(
                  u,
                  function (e) {
                    m.setAttribute(a, s);
                    var n,
                      i,
                      o = f(m.getAttribute(`data-range`));
                    (o &&
                      ((n = e.split(/\r\n?|\n/g)),
                      (i = o[0]),
                      (o = o[1] == null ? n.length : o[1]),
                      i < 0 && (i += n.length),
                      (i = Math.max(0, Math.min(i - 1, n.length))),
                      o < 0 && (o += n.length),
                      (o = Math.max(0, Math.min(o, n.length))),
                      (e = n.slice(i, o).join(`
`)),
                      m.hasAttribute(`data-start`) || m.setAttribute(`data-start`, String(i + 1))),
                      (r.textContent = e),
                      t.highlightElement(r));
                  },
                  function (e) {
                    (m.setAttribute(a, c), (r.textContent = e));
                  }
                ));
            }),
            (t.plugins.fileHighlight = {
              highlight: function (e) {
                for (var n, r = (e || document).querySelectorAll(l), i = 0; (n = r[i++]); ) t.highlightElement(n);
              },
            }),
            (u = !1),
            (t.fileHighlight = function () {
              (u ||
                (console.warn(
                  'Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'
                ),
                (u = !0)),
                t.plugins.fileHighlight.highlight.apply(this, arguments));
            }));
        })());
    })(mi),
    mi.exports);
function gi(e, t, n) {
  if ((n === `` ? (n = `js`) : n === `vue` && (n = `html`), e.languages[n] === void 0)) return ``;
  {
    let r = e.highlight(t, e.languages[n], n);
    return `<pre class="q-markdown--code q-markdown--code__inner language-${n}"><code>${r}</code></pre>
`;
  }
}
function _i(e) {
  e.renderer.rules.blockquote_open = (e, t, n, r, i) => (
    e[t].attrSet(`class`, `q-markdown--note`),
    i.renderToken(e, t, n)
  );
}
function vi(e, t, n) {
  function r(e) {
    return e.trim().split(` `, 2)[0] === t;
  }
  function i(e, n, r, i, a) {
    return (e[n].nesting === 1 && e[n].attrPush([`class`, t]), a.renderToken(e, n, r, i, a));
  }
  n = n || {};
  let a = n.marker || `:`,
    o = a.charCodeAt(0),
    s = a.length,
    c = n.validate || r,
    l = n.render || i;
  function u(e, n, r, i) {
    let l,
      u,
      d,
      f = !1,
      p = e.bMarks[n] + e.tShift[n],
      m = e.eMarks[n];
    if (o !== e.src.charCodeAt(p)) return !1;
    for (l = p + 1; l <= m && a[(l - p) % s] === e.src[l]; l++);
    let h = Math.floor((l - p) / s);
    if (h < 3) return !1;
    l -= (l - p) % s;
    let g = e.src.slice(p, l),
      _ = e.src.slice(l, m);
    if (!c(_)) return !1;
    if (!i) {
      for (
        u = n;
        u++, !(u >= r || ((p = e.bMarks[u] + e.tShift[u]), (m = e.eMarks[u]), p < m && e.sCount[u] < e.blkIndent));
      )
        if (o === e.src.charCodeAt(p) && !(e.sCount[u] - e.blkIndent >= 4)) {
          for (l = p + 1; l <= m && a[(l - p) % s] === e.src[l]; l++);
          if (!(Math.floor((l - p) / s) < h) && ((l -= (l - p) % s), (l = e.skipSpaces(l)), !(l < m))) {
            f = !0;
            break;
          }
        }
      let i = e.parentType,
        c = e.lineMax;
      ((e.parentType = `container`),
        (e.lineMax = u),
        (d = e.push(`container_` + t + `_open`, `div`, 1)),
        (d.markup = g),
        (d.block = !0),
        (d.info = _),
        (d.map = [n, u]),
        e.md.block.tokenize(e, n + 1, u),
        (d = e.push(`container_` + t + `_close`, `div`, -1)),
        (d.markup = e.src.slice(p, l)),
        (d.block = !0),
        (e.parentType = i),
        (e.lineMax = c),
        (e.line = u + +!!f));
    }
    return !0;
  }
  (e.block.ruler.before(`fence`, `container_` + t, u, {
    alt: [`paragraph`, `reference`, `blockquote`, `list`],
  }),
    (e.renderer.rules[`container_` + t + `_open`] = l),
    (e.renderer.rules[`container_` + t + `_close`] = l));
}
function yi(e, t) {
  return [
    vi,
    e,
    {
      render(n, r) {
        let i = n[r],
          a = i.info.trim().slice(e.length).trim();
        return i.nesting === 1
          ? `<div class="q-markdown--note q-markdown--note--${e}"><p class="q-markdown--note-title">${a || t}</p>
`
          : `</div>
`;
      },
    },
  ];
}
function bi(e) {
  (e.use(...yi(`info`, `INFO`)),
    e.use(...yi(`tip`, `TIP`)),
    e.use(...yi(`warning`, `WARNING`)),
    e.use(...yi(`danger`, `IMPORTANT`)),
    e.use(...yi(``, ``)),
    e.use(vi, `v-pre`, {
      render: (e, t) =>
        e[t].nesting === 1
          ? `<div v-pre>
`
          : `</div>
`,
    }));
}
function xi(e) {
  return encodeURIComponent(String(e).trim().replace(/\s+/g, `-`));
}
function Si(e, t) {
  return t.type === `emoji` ? Object.assign(new e(), t, { content: t.markup }) : t;
}
function Ci(e, t = [], n = !1, r = 1, i = 3, a = !1) {
  let o;
  (e.core.ruler.push(`headingLinks`, function (e) {
    o = o || e.Token;
  }),
    (e.renderer.rules.heading_open = (s, c, l, u, d) => {
      let f = s[c],
        p = parseInt(f.tag[1]),
        m = s[c + 1].children,
        h = m.reduce((e, t) => e + t.content, ``),
        g = [],
        _ =
          (g.push(`q-markdown--heading`),
          g.push(`q-markdown--heading-` + f.tag),
          f.markup === `=` ? g.push(`q-markdown--title-heavy`) : f.markup === `-` && g.push(`q-markdown--title-light`),
          !0 !== a && r && i && r <= i && p >= r && p <= i && g.push(`q-markdown--heading--anchor-link`),
          Si.bind(null, o)),
        v = xi(e.renderer.renderInline(m.map(_), l, u).replace(/[<>]/g, ``).toLowerCase());
      if (
        (f.attrSet(`id`, v),
        f.attrSet(`name`, v),
        f.attrSet(`class`, g.join(` `)),
        n && r && i && r <= i && p >= r && p <= i && t.push({ id: v, label: h, level: p, children: [] }),
        !0 !== a && p <= i)
      ) {
        let t = new o(`link_open`, `a`, 1),
          n = (t.attrSet(`href`, `#` + v), t.attrSet(`aria-hidden`, `true`), new o(`link_close`, `a`, -1)),
          r = m.slice();
        return ((s[c + 1].children = [t, ...r, n]), e.renderer.renderToken(s, c, l, u, d));
      }
      return d.renderToken(s, c, l);
    }));
}
function wi(e) {
  e.renderer.rules.image = (e, t, n, r, i) => {
    let a = e[t];
    return (
      a.attrSet(`class`, `q-markdown--image`),
      Array.isArray(a.children) &&
        a.children.length > 0 &&
        a.children[0].type === `text` &&
        a.attrSet(`alt`, a.children[0].content),
      i.renderToken(e, t, n)
    );
  };
}
function Ti(e, { noopener: t = !0, noreferrer: n = !0 }) {
  e.renderer.rules.link_open = (e, r, i, a, o) => {
    let s = e[r],
      c = s.attrIndex(`href`);
    if (
      (s.attrs[c][1][0] === `#` && typeof location < `u` && (s.attrs[c][1] = location.pathname + s.attrs[c][1]),
      s.attrs[c][1] === ``)
    )
      (s.attrSet(`class`, `q-markdown--link q-markdown--link-local`),
        e[r + 1] && e[r + 1].type === `text` && e[r + 1].content && s.attrSet(`id`, xi(e[r + 1].content)));
    else if (s.attrs[c][1][0] === `/` || s.attrs[c][1][0] === `#` || s.attrs[c][1].startsWith(`..`))
      s.attrSet(`class`, `q-markdown--link q-markdown--link-local`);
    else if (
      (s.attrSet(`class`, `q-markdown--link q-markdown--link-external`),
      s.attrSet(`target`, `_blank`),
      !0 === t || !0 === n)
    ) {
      let e = [];
      (!0 === t && e.push(`noopener`), !0 === n && e.push(`noreferrer`), s.attrSet(`rel`, e.join(` `)));
    }
    return o.renderToken(e, r, i);
  };
}
function Ei(e) {
  e.renderer.rules.table_open = (e, t, n, r, i) => (e[t].attrSet(`class`, `q-markdown--table`), i.renderToken(e, t, n));
}
function Di(e) {
  let t = e.renderer.rules.code_inline;
  e.renderer.rules.code_inline = (e, n, r, i, a) => (e[n].attrSet(`class`, `q-markdown--token`), t(e, n, r, i, a));
}
function Oi(e, t) {
  let n = e.renderer.rules.fence;
  e.renderer.rules.fence = (...e) => {
    let r = n(...e),
      i = r.slice(r.indexOf(`<code>`) + 6, r.indexOf(`</code>`)).trim().split(`
`),
      a = `<div class="q-markdown--line-numbers non-selectable">${[...Array(i.length)].map((e, n) => `<div class="q-markup--line-number">${t === void 0 ? n + 1 : t}</div>`).join(``)}</div><div class="q-markdown--code-wrapper">${r}</div>`;
    return `<div class="q-markdown--line-numbers-wrapper">${i.length < 3 ? r : a}</div>`;
  };
}
var ki = l({}),
  Ai = n({
    name: `QMarkdown`,
    props: {
      src: { type: String, default: `` },
      noBlockquote: Boolean,
      noBreaks: Boolean,
      noContainer: Boolean,
      noHighlight: Boolean,
      noHtml: Boolean,
      noImage: Boolean,
      noLineNumbers: Boolean,
      noLink: Boolean,
      noLinkify: Boolean,
      noHeadingAnchorLinks: Boolean,
      noTypographer: Boolean,
      lineNumberAlt: { type: String, validator: (e) => e.length === 1 },
      toc: Boolean,
      tocStart: {
        type: Number,
        default: 1,
        validator: (e) => e >= 1 && e <= 6,
      },
      tocEnd: { type: Number, default: 3, validator: (e) => e >= 1 && e <= 6 },
      contentStyle: [Object, Array, String],
      contentClass: [Object, Array, String],
      noNoopener: Boolean,
      noNoreferrer: Boolean,
      showCopy: Boolean,
      copyIcon: String,
      noCopyTooltip: Boolean,
      doneIcon: String,
      copyTooltipText: { type: String, default: `Copy to clipboard` },
      copyResponseText: { type: String, default: `Copied to clipboard` },
      fixCr: Boolean,
      plugins: { type: Array, default: () => [] },
    },
    emits: [`data`],
    setup(t, { slots: n, emit: i, expose: a }) {
      let s = N(),
        l = f(null),
        u = f(null),
        d = f(null),
        p =
          (r(() => {
            p.value.src &&
              p.value.src.length > 0 &&
              (u.value = p.value.fixCr
                ? p.value.src.replace(
                    /\\n/gi,
                    `
`
                  )
                : p.value.src);
          }),
          e(() => ({ ...t, ...ki }))),
        m = e(() => {
          let e = ``;
          return (
            p.value.src &&
              p.value.src.length > 0 &&
              (e = p.value.fixCr
                ? p.value.src.replace(
                    /\\n/gi,
                    `
`
                  )
                : p.value.src),
            n.default !== void 0 && n.default()[0].children.trim().length > 0 && (e = n.default()[0].children),
            e
          );
        }),
        h = e(
          () =>
            p.value.copyIcon ||
            `M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z`
        ),
        g = e(
          () => p.value.doneIcon || `M0 0h24v24H0z@@fill:none;&&M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z`
        );
      function _(e) {
        return e === void 0 || !1 === e;
      }
      function v(e) {
        let t = [],
          n = null,
          r = (e) => {
            if (e.level === p.value.tocStart) ((n = e), t.push(e));
            else if (e.level === p.value.tocStart + 1) n.children.push(e);
            else {
              let t = n;
              for (let n = 0; n < e.level - (p.value.tocStart + 1); ++n) t = t.children[t.children.length - 1];
              t && t.children.push(e);
            }
          };
        for (let t = 0; t < e.length; ++t) r(e[t]);
        return t;
      }
      function y() {
        (ce(d.value.innerText),
          s.notify &&
            s.notify({
              message: p.value.copyResponseText,
              color: s.dark.isActive ? `grey-10` : `white`,
              textColor: s.dark.isActive ? `amber` : `primary`,
              icon: g.value,
              position: `top`,
              timeout: 2e3,
            }));
      }
      function b() {
        if (!0 === p.value.showCopy)
          return o(
            ae,
            {
              class: `q-markdown__copy`,
              color: s.dark.isActive ? `amber` : `primary`,
              dense: !0,
              flat: !0,
              round: !0,
              icon: h.value,
              onClick: (e) => {
                y();
              },
            },
            () => [!0 !== p.value.noCopyTooltip && o(oe, () => p.value.copyTooltipText)]
          );
      }
      function x() {
        if (l.value === null) {
          let e = [],
            t = m.value || ``,
            n = di({
              html: _(p.value.noHtml),
              linkify: _(p.value.noLinkify),
              typographer: _(p.value.noTypographer),
              breaks: _(p.value.noBreaks),
              highlight: (e, t) => (_(p.value.noHighlight) ? gi(hi, e, t) : e),
            }),
            r =
              (_(p.value.noImage) && n.use(pi),
              _i(n),
              Ci(n, e, p.value.toc, p.value.tocStart, p.value.tocEnd, p.value.noHeadingAnchorLinks),
              wi(n),
              Ti(n, {
                noopener: !p.value.noNoopener,
                noreferrer: !p.value.noNoreferrer,
              }),
              Ei(n),
              Di(n),
              _(p.value.noContainer) && bi(n),
              _(p.value.noLineNumbers) && Oi(n, p.value.lineNumberAlt),
              []);
          (_(p.value.noImage) || r.push(`image`),
            _(p.value.noLink) || r.push(`link`),
            _(p.value.noBlockquote) || r.push(`blockquote`),
            r.length > 0 && n.disable(r),
            p.value.plugins.length > 0 &&
              p.value.plugins.forEach((e) => {
                e instanceof Function
                  ? n.use(e)
                  : e.plugin instanceof Function && e.options && n.use(e.plugin, e.options);
              }),
            (l.value = n.render(t)),
            p.value.toc && e.length > 0 && i(`data`, e));
        }
        let e = o(`div`, {
            ref: d,
            class: [`q-markdown`, p.value.contentClass],
            style: p.value.contentStyle,
            innerHTML: l.value,
          }),
          t = o(`div`, { style: { position: `relative` } }, [e, b()]);
        return !0 === p.value.showCopy ? t : e;
      }
      return (
        c(
          () => p.value.src,
          (e) => {
            ((u.value = p.value.fixCr
              ? p.value.src.replace(
                  /\\n/gi,
                  `
`
                )
              : p.value.src),
              (l.value = null));
          }
        ),
        c(
          () => [
            p.value.noBlockquote,
            p.value.noBreaks,
            p.value.noContainer,
            p.value.noHighlight,
            p.value.noHtml,
            p.value.noImage,
            p.value.noLineNumbers,
            p.value.noLink,
            p.value.noLinkify,
            p.value.noHeadingAnchorLinks,
            p.value.noTypographer,
            p.value.lineNumberAlt,
            p.value.toc,
            p.value.tocStart,
            p.value.tocEnd,
            p.value.contentStyle,
            p.value.contentClass,
            p.value.noNoopener,
            p.value.noNoreferrer,
            p.value.plugins,
          ],
          () => {
            l.value = null;
          }
        ),
        a({ makeTree: v }),
        () => x()
      );
    },
  });
export { Ai as t };
