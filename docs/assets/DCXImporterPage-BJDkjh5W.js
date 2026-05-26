import {
  F as e,
  H as t,
  I as n,
  L as r,
  Q as i,
  T as a,
  U as o,
  V as s,
  W as c,
  at as l,
  dt as u,
  it as d,
  j as f,
  k as p,
  lt as m,
  ot as h,
  t as g,
  tt as _,
} from './index-D_28ZlK1.js';
import { l as v, m as y, y as b } from './use-align-N6v3efuN.js';
import { t as x } from './use-timeout-OoMFTBih.js';
import { t as S } from './QPage-DcVqvjhH.js';
import { t as C } from './index.css_vue_type_style_index_0_src_true_lang-BYh0UAgD.js';
var w = { ratio: [String, Number] };
function T(t, n) {
  return e(() => {
    let e = Number(t.ratio || (n === void 0 ? void 0 : n.value));
    return isNaN(e) !== !0 && e > 0 ? { paddingBottom: `${100 / e}%` } : null;
  });
}
var E = 1.7778,
  D = a({
    name: `QImg`,
    props: {
      ...w,
      src: String,
      srcset: String,
      sizes: String,
      alt: String,
      crossorigin: String,
      decoding: String,
      referrerpolicy: String,
      draggable: Boolean,
      loading: { type: String, default: `lazy` },
      loadingShowDelay: { type: [Number, String], default: 0 },
      fetchpriority: { type: String, default: `auto` },
      width: String,
      height: String,
      initialRatio: { type: [Number, String], default: E },
      placeholderSrc: String,
      errorSrc: String,
      fit: { type: String, default: `cover` },
      position: { type: String, default: `50% 50%` },
      imgClass: String,
      imgStyle: Object,
      noSpinner: Boolean,
      noNativeMenu: Boolean,
      noTransition: Boolean,
      spinnerColor: String,
      spinnerSize: String,
    },
    emits: [`load`, `error`],
    setup(t, { slots: n, emit: r }) {
      let a = m(t.initialRatio),
        s = T(t, a),
        u = o(),
        { registerTimeout: d, removeTimeout: h } = x(),
        { registerTimeout: g, removeTimeout: _ } = x(),
        S = e(() => (t.placeholderSrc === void 0 ? null : { src: t.placeholderSrc })),
        C = e(() => (t.errorSrc === void 0 ? null : { src: t.errorSrc, __qerror: !0 })),
        w = [m(null), m(S.value)],
        E = m(0),
        D = m(!1),
        O = m(!1),
        k = e(() => `q-img q-img--${t.noNativeMenu === !0 ? `no-` : ``}menu`),
        A = e(() => ({ width: t.width, height: t.height })),
        j = e(
          () =>
            `q-img__image ${t.imgClass === void 0 ? `` : t.imgClass + ` `}q-img__image--with${t.noTransition === !0 ? `out` : ``}-transition q-img__image--`
        ),
        M = e(() => ({
          ...t.imgStyle,
          objectFit: t.fit,
          objectPosition: t.position,
        }));
      function N() {
        if ((_(), t.loadingShowDelay === 0)) {
          D.value = !0;
          return;
        }
        g(() => {
          D.value = !0;
        }, t.loadingShowDelay);
      }
      function P() {
        (_(), (D.value = !1));
      }
      function F({ target: e }) {
        v(u) === !1 && (h(), (a.value = e.naturalHeight === 0 ? 0.5 : e.naturalWidth / e.naturalHeight), I(e, 1));
      }
      function I(e, t) {
        t === 1e3 ||
          v(u) === !0 ||
          (e.complete === !0
            ? L(e)
            : d(() => {
                I(e, t + 1);
              }, 50));
      }
      function L(e) {
        v(u) !== !0 &&
          ((E.value ^= 1),
          (w[E.value].value = null),
          P(),
          e.getAttribute(`__qerror`) !== `true` && (O.value = !1),
          r(`load`, e.currentSrc || e.src));
      }
      function R(e) {
        (h(), P(), (O.value = !0), (w[E.value].value = C.value), (w[E.value ^ 1].value = S.value), r(`error`, e));
      }
      function z(e) {
        let n = w[e].value,
          r = {
            key: `img_` + e,
            class: j.value,
            style: M.value,
            alt: t.alt,
            crossorigin: t.crossorigin,
            decoding: t.decoding,
            referrerpolicy: t.referrerpolicy,
            height: t.height,
            width: t.width,
            loading: t.loading,
            fetchpriority: t.fetchpriority,
            'aria-hidden': `true`,
            draggable: t.draggable,
            ...n,
          };
        return (
          E.value === e
            ? Object.assign(r, {
                class: r.class + `current`,
                onLoad: F,
                onError: R,
              })
            : (r.class += `loaded`),
          c(`div`, { class: `q-img__container absolute-full`, key: `img` + e }, c(`img`, r))
        );
      }
      function B() {
        return D.value === !1
          ? c(
              `div`,
              {
                key: `content`,
                class: `q-img__content absolute-full q-anchor--skip`,
              },
              b(n[O.value === !0 ? `error` : `default`])
            )
          : c(
              `div`,
              {
                key: `loading`,
                class: `q-img__loading absolute-full flex flex-center`,
              },
              n.loading === void 0
                ? t.noSpinner === !0
                  ? void 0
                  : [c(y, { color: t.spinnerColor, size: t.spinnerSize })]
                : n.loading()
            );
      }
      {
        function e() {
          l(
            () => (t.src || t.srcset || t.sizes ? { src: t.src, srcset: t.srcset, sizes: t.sizes } : null),
            (e) => {
              (h(), (O.value = !1), e === null ? (P(), (w[E.value ^ 1].value = S.value)) : N(), (w[E.value].value = e));
            },
            { immediate: !0 }
          );
        }
        p.value === !0 ? i(e) : e();
      }
      return () => {
        let e = [];
        return (
          s.value !== null && e.push(c(`div`, { key: `filler`, style: s.value })),
          w[0].value !== null && e.push(z(0)),
          w[1].value !== null && e.push(z(1)),
          e.push(c(f, { name: `q-transition--fade` }, B)),
          c(
            `div`,
            {
              key: `main`,
              class: k.value,
              style: A.value,
              role: `img`,
              'aria-label': t.alt,
            },
            e
          )
        );
      };
    },
  }),
  O = t({
    name: `PhysarumPage`,
    components: { QMarkdown: C },
    data() {
      return {
        split: 60,
        markdown: `\`\`\`
def transform_bone_and_siblings(bone_index, parent_matrix):
  while bone_index != -1:
      flver_bone = flver_data.bones[bone_index]
      bone = armature.data.edit_bones[bone_index]
      if flver_bone.parent_index >= 0:
          bone.parent = armature.data.edit_bones[flver_bone.parent_index]

      translation_vector = Vector(
          (flver_bone.translation[0], flver_bone.translation[1],
            flver_bone.translation[2]))
      rotation_matrix = (
          Matrix.Rotation(flver_bone.rotation[1], 4, 'Y')
          @ Matrix.Rotation(flver_bone.rotation[2], 4, 'Z')
          @ Matrix.Rotation(flver_bone.rotation[0], 4, 'X'))

      head = parent_matrix @ translation_vector
      tail = head + rotation_matrix @ Vector((0, 0.05, 0))

      bone.head = (head[0], head[2], head[1])
      bone.tail = (tail[0], tail[2], tail[1])

      # Transform children and advance to next sibling
      transform_bone_and_siblings(
          flver_bone.child_index, parent_matrix
          @ Matrix.Translation(translation_vector) @ rotation_matrix)
      bone_index = flver_bone.next_sibling_index

transform_bone_and_siblings(0, Matrix())
\`\`\``,
      };
    },
  }),
  k = { class: `q-mt-none q-mb-lg text-primary` };
function A(e, t, i, a, o, c) {
  let l = d(`q-markdown`);
  return (
    _(),
    r(S, null, {
      default: h(() => [
        n(`div`, k, [
          t[0] || (t[0] = n(`div`, { class: `text-h4` }, `Blender DCX Importer`, -1)),
          t[1] || (t[1] = n(`br`, null, null, -1)),
          n(
            `video`,
            {
              class: u(e.$q.platform.is.mobile ? `center-mobile` : `aside`),
              autoplay: ``,
              loop: ``,
              src: `portfolio/dcximporter_vid_0.mp4`,
              muted: ``,
            },
            null,
            2
          ),
          t[2] ||
            (t[2] = n(
              `p`,
              null,
              ` An add-on for the 3D modelling program Blender to import proprietary model and texture files from FromSoftware video games. The tool unpacks the input files and loads mesh data, armature data and finds the appropriate texture data for that model. It then loads these items into Blender and applies the armature and texture data into a rigged and textured blender model. `,
              -1
            )),
          t[3] ||
            (t[3] = n(
              `p`,
              null,
              ` Blender supports an extensive python API for automating any user function in the program. The add-on, using several other tools, decompresses the proprietary .dcx files. `,
              -1
            )),
          s(
            D,
            {
              src: `portfolio/dcximporter_img_1.webp`,
              class: u(e.$q.platform.is.mobile ? `` : `aside`),
            },
            null,
            8,
            [`class`]
          ),
          t[4] ||
            (t[4] = n(
              `p`,
              null,
              ` From this .dcx file we get a .flver (model, UV and rigging data) and a .tpf file (texture data). The .flver model data is read into memory and the model is created in blender from the vertex buffer and armature data. The .tpf is unpacked and the textures within are converted from .dds to .png using the DirectXTex texture converter. `,
              -1
            )),
          t[5] ||
            (t[5] = n(
              `p`,
              null,
              ` Finally, Blender materials are created from these textures and applied to the model. `,
              -1
            )),
          s(
            l,
            {
              style: {
                'line-height': `1.5`,
                overflow: `auto`,
                'overflow-x': `auto`,
                'min-width': `0px`,
                'box-sizing': `border-box`,
              },
              src: e.markdown,
              class: `focused`,
            },
            null,
            8,
            [`src`]
          ),
          t[6] ||
            (t[6] = n(
              `div`,
              { class: `text-caption` },
              ` Excerpt from the armature creation code: Creates, positions and links bones for the model's armature from the flver data. `,
              -1
            )),
        ]),
      ]),
      _: 1,
    })
  );
}
var j = g(O, [[`render`, A]]);
export { j as default };
