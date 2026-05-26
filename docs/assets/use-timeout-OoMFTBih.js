import { D as e, U as t, Y as n, Z as r } from './index-D_28ZlK1.js';
import { l as i } from './use-align-N6v3efuN.js';
function a() {
  if (window.getSelection !== void 0) {
    let t = window.getSelection();
    t.empty === void 0
      ? t.removeAllRanges !== void 0 && (t.removeAllRanges(), e.is.mobile !== !0 && t.addRange(document.createRange()))
      : t.empty();
  } else document.selection !== void 0 && document.selection.empty();
}
function o() {
  let e = null,
    a = t();
  function o() {
    e !== null && (clearTimeout(e), (e = null));
  }
  return (
    r(o),
    n(o),
    {
      removeTimeout: o,
      registerTimeout(t, n) {
        (o(),
          i(a) === !1 &&
            (e = setTimeout(() => {
              ((e = null), t());
            }, n)));
      },
    }
  );
}
export { a as n, o as t };
