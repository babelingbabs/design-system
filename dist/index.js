import ie, { useId as gr } from "react";
import { motion as q, AnimatePresence as mr } from "framer-motion";
const Ur = {
  // Backgrounds — light, layered surfaces
  background: {
    base: "#FAFAFA",
    // page background
    subtle: "#F5F5F5",
    // slightly elevated surface
    muted: "#EFEFEF",
    // recessed / input bg
    inverse: "#1A1A1A"
    // dark bg for contrast blocks
  },
  // Foreground / text
  foreground: {
    primary: "#1A1A1A",
    // near-black, primary text
    secondary: "#555555",
    // secondary text
    tertiary: "#8A8A8A",
    // placeholder, captions
    disabled: "#BBBBBB",
    // disabled states
    inverse: "#FAFAFA"
    // text on dark backgrounds
  },
  // Borders / dividers
  border: {
    subtle: "#E8E8E8",
    // hairline borders, grid lines
    default: "#D4D4D4",
    // standard border
    strong: "#AAAAAA"
    // emphasized border
  },
  // Accent — muted architectural blue-gray
  accent: {
    50: "#F0F4F8",
    100: "#D9E4EE",
    200: "#B3C9DD",
    300: "#8DAECC",
    400: "#6793BB",
    500: "#4A7BA7",
    // primary accent
    600: "#3B6286",
    700: "#2C4A65",
    800: "#1E3144",
    900: "#0F1922"
  },
  // Semantic
  semantic: {
    success: "#2D6A4F",
    successBg: "#D8F3DC",
    warning: "#7B5800",
    warningBg: "#FFF3CD",
    error: "#9B1D20",
    errorBg: "#FCDCDC",
    info: "#1A4A6E",
    infoBg: "#D6EAF8"
  }
}, xr = {
  sans: ["Inter", "system-ui", "-apple-system", "sans-serif"].join(", "),
  mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"].join(", ")
}, br = {
  "2xs": ["0.625rem", { lineHeight: "1rem" }],
  // 10px
  xs: ["0.75rem", { lineHeight: "1.125rem" }],
  // 12px
  sm: ["0.875rem", { lineHeight: "1.375rem" }],
  // 14px
  base: ["1rem", { lineHeight: "1.625rem" }],
  // 16px
  lg: ["1.125rem", { lineHeight: "1.75rem" }],
  // 18px
  xl: ["1.25rem", { lineHeight: "1.875rem" }],
  // 20px
  "2xl": ["1.5rem", { lineHeight: "2rem" }],
  // 24px
  "3xl": ["1.875rem", { lineHeight: "2.375rem" }],
  // 30px
  "4xl": ["2.25rem", { lineHeight: "2.75rem" }],
  // 36px
  "5xl": ["3rem", { lineHeight: "3.5rem" }],
  // 48px
  "6xl": ["3.75rem", { lineHeight: "4.25rem" }]
  // 60px
}, hr = {
  light: "300",
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700"
}, yr = {
  tight: "-0.03em",
  snug: "-0.015em",
  normal: "0em",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
  mono: "0.02em"
  // for monospace accents
}, Vr = {
  fontFamily: xr,
  fontSize: br,
  fontWeight: hr,
  letterSpacing: yr
}, zr = {
  0: "0px",
  px: "1px",
  0.5: "2px",
  1: "4px",
  1.5: "6px",
  2: "8px",
  3: "12px",
  4: "16px",
  6: "24px",
  8: "32px",
  12: "48px",
  16: "64px",
  24: "96px",
  32: "128px",
  48: "192px",
  64: "256px"
}, qr = {
  none: "none",
  xs: "0 1px 2px 0 rgba(0, 0, 0, 0.04)",
  sm: "0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.04)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -4px rgba(0, 0, 0, 0.04)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.06), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
  // Lifted state for interactive cards
  lifted: "0 8px 24px -4px rgba(0, 0, 0, 0.10), 0 4px 8px -4px rgba(0, 0, 0, 0.06)",
  // Focus ring
  focus: "0 0 0 3px rgba(74, 123, 167, 0.25)",
  // Inner shadow for inputs
  inner: "inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)"
}, Jr = {
  none: "0px",
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  full: "9999px"
}, Gr = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, ease: "easeOut" }
  }
}, Kr = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
    transition: { duration: 0.15, ease: "easeIn" }
  }
}, Xr = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}, Zr = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}, Qr = {
  hidden: { opacity: 0, x: 12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}, et = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}, rt = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}, tt = {
  visible: { opacity: 1, scale: 1 },
  hidden: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.15, ease: "easeIn" }
  }
}, at = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05
    }
  }
}, nt = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" }
  }
}, Pe = {
  rest: {
    y: 0,
    boxShadow: "var(--shadow-sm)",
    transition: { duration: 0.2, ease: "easeOut" }
  },
  hover: {
    y: -2,
    boxShadow: "var(--shadow-lifted)",
    transition: { duration: 0.2, ease: "easeOut" }
  }
}, ot = Pe, it = {
  tap: { scale: 0.97 }
}, st = {
  rest: {
    boxShadow: "none",
    borderColor: "var(--color-border-default)",
    transition: { duration: 0.15 }
  },
  focus: {
    boxShadow: "var(--shadow-focus)",
    borderColor: "var(--color-accent-500)",
    transition: { duration: 0.15 }
  }
}, lt = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: "easeIn" }
  }
};
var oe = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function Er() {
  if (ke) return H;
  ke = 1;
  var n = ie, o = Symbol.for("react.element"), s = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(m, b, C) {
    var E, R = {}, T = null, k = null;
    C !== void 0 && (T = "" + C), b.key !== void 0 && (T = "" + b.key), b.ref !== void 0 && (k = b.ref);
    for (E in b) u.call(b, E) && !p.hasOwnProperty(E) && (R[E] = b[E]);
    if (m && m.defaultProps) for (E in b = m.defaultProps, b) R[E] === void 0 && (R[E] = b[E]);
    return { $$typeof: o, type: m, key: T, ref: k, props: R, _owner: v.current };
  }
  return H.Fragment = s, H.jsx = y, H.jsxs = y, H;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function wr() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ie, o = Symbol.for("react.element"), s = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), m = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), A = Symbol.iterator, M = "@@iterator";
    function P(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = A && e[A] || e[M];
      return typeof r == "function" ? r : null;
    }
    var S = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        J("error", e, t);
      }
    }
    function J(e, r, t) {
      {
        var a = S.ReactDebugCurrentFrame, d = a.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var f = t.map(function(c) {
          return String(c);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var G = !1, K = !1, Ie = !1, Be = !1, We = !1, se;
    se = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === p || We || e === v || e === C || e === E || Be || e === k || G || K || Ie || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === R || e.$$typeof === y || e.$$typeof === m || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var d = r.displayName || r.name || "";
      return d !== "" ? t + "(" + d + ")" : t;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case s:
          return "Portal";
        case p:
          return "Profiler";
        case v:
          return "StrictMode";
        case C:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return le(r) + ".Consumer";
          case y:
            var t = e;
            return le(t._context) + ".Provider";
          case b:
            return Le(e, e.render, "ForwardRef");
          case R:
            var a = e.displayName || null;
            return a !== null ? a : $(e.type) || "Memo";
          case T: {
            var d = e, f = d._payload, c = d._init;
            try {
              return $(c(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, B = 0, ce, ue, de, fe, pe, ve, ge;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Me() {
      {
        if (B === 0) {
          ce = console.log, ue = console.info, de = console.warn, fe = console.error, pe = console.group, ve = console.groupCollapsed, ge = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        B++;
      }
    }
    function Ye() {
      {
        if (B--, B === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: ce
            }),
            info: O({}, e, {
              value: ue
            }),
            warn: O({}, e, {
              value: de
            }),
            error: O({}, e, {
              value: fe
            }),
            group: O({}, e, {
              value: pe
            }),
            groupCollapsed: O({}, e, {
              value: ve
            }),
            groupEnd: O({}, e, {
              value: ge
            })
          });
        }
        B < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = S.ReactCurrentDispatcher, Z;
    function Y(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (d) {
            var a = d.stack.trim().match(/\n( *(at )?)/);
            Z = a && a[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var Q = !1, U;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Ue();
    }
    function xe(e, r) {
      if (!e || Q)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      Q = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = X.current, X.current = null, Me();
      try {
        if (r) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (_) {
              a = _;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (_) {
              a = _;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            a = _;
          }
          e();
        }
      } catch (_) {
        if (_ && a && typeof _.stack == "string") {
          for (var l = _.stack.split(`
`), w = a.stack.split(`
`), g = l.length - 1, x = w.length - 1; g >= 1 && x >= 0 && l[g] !== w[x]; )
            x--;
          for (; g >= 1 && x >= 0; g--, x--)
            if (l[g] !== w[x]) {
              if (g !== 1 || x !== 1)
                do
                  if (g--, x--, x < 0 || l[g] !== w[x]) {
                    var j = `
` + l[g].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, j), j;
                  }
                while (g >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        Q = !1, X.current = f, Ye(), Error.prepareStackTrace = d;
      }
      var N = e ? e.displayName || e.name : "", F = N ? Y(N) : "";
      return typeof e == "function" && U.set(e, F), F;
    }
    function Ve(e, r, t) {
      return xe(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, ze(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case C:
          return Y("Suspense");
        case E:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return Ve(e.render);
          case R:
            return V(e.type, r, t);
          case T: {
            var a = e, d = a._payload, f = a._init;
            try {
              return V(f(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, be = {}, he = S.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function qe(e, r, t, a, d) {
      {
        var f = Function.call.bind(W);
        for (var c in e)
          if (f(e, c)) {
            var l = void 0;
            try {
              if (typeof e[c] != "function") {
                var w = Error((a || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              l = e[c](r, c, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              l = g;
            }
            l && !(l instanceof Error) && (z(d), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, c, typeof l), z(null)), l instanceof Error && !(l.message in be) && (be[l.message] = !0, z(d), h("Failed %s type: %s", t, l.message), z(null));
          }
      }
    }
    var Je = Array.isArray;
    function ee(e) {
      return Je(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function Ee(e) {
      if (Ke(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), ye(e);
    }
    var we = S.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, Re;
    function Ze(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && we.current;
    }
    function rr(e, r) {
      {
        var t = function() {
          _e || (_e = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          Re || (Re = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, t, a, d, f, c) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function nr(e, r, t, a, d) {
      {
        var f, c = {}, l = null, w = null;
        t !== void 0 && (Ee(t), l = "" + t), Qe(r) && (Ee(r.key), l = "" + r.key), Ze(r) && (w = r.ref, er(r, d));
        for (f in r)
          W.call(r, f) && !Xe.hasOwnProperty(f) && (c[f] = r[f]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (f in g)
            c[f] === void 0 && (c[f] = g[f]);
        }
        if (l || w) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && rr(c, x), w && tr(c, x);
        }
        return ar(e, l, w, d, a, we.current, c);
      }
    }
    var re = S.ReactCurrentOwner, je = S.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Ce() {
      {
        if (re.current) {
          var e = $(re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var Te = {};
    function ir(e) {
      {
        var r = Ce();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (Te[t])
          return;
        Te[t] = !0;
        var a = "";
        e && e._owner && e._owner !== re.current && (a = " It was passed a child from " + $(e._owner.type) + "."), D(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), D(null);
      }
    }
    function $e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            ae(a) && Se(a, r);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = P(e);
          if (typeof d == "function" && d !== e.entries)
            for (var f = d.call(e), c; !(c = f.next()).done; )
              ae(c.value) && Se(c.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = $(r);
          qe(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !te) {
          te = !0;
          var d = $(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            D(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Oe = {};
    function Fe(e, r, t, a, d, f) {
      {
        var c = He(e);
        if (!c) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = or();
          w ? l += w : l += Ce();
          var g;
          e === null ? g = "null" : ee(e) ? g = "array" : e !== void 0 && e.$$typeof === o ? (g = "<" + ($(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, l);
        }
        var x = nr(e, r, t, d, f);
        if (x == null)
          return x;
        if (c) {
          var j = r.children;
          if (j !== void 0)
            if (a)
              if (ee(j)) {
                for (var N = 0; N < j.length; N++)
                  $e(j[N], e);
                Object.freeze && Object.freeze(j);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $e(j, e);
        }
        if (W.call(r, "key")) {
          var F = $(e), _ = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), ne = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[F + ne]) {
            var pr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ne, F, pr, F), Oe[F + ne] = !0;
          }
        }
        return e === u ? lr(x) : sr(x), x;
      }
    }
    function cr(e, r, t) {
      return Fe(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Fe(e, r, t, !1);
    }
    var dr = ur, fr = cr;
    L.Fragment = u, L.jsx = dr, L.jsxs = fr;
  }()), L;
}
process.env.NODE_ENV === "production" ? oe.exports = Er() : oe.exports = wr();
var i = oe.exports;
const _r = {
  h1: "text-5xl font-bold tracking-tight text-[var(--color-fg-primary)] leading-[1.1]",
  h2: "text-4xl font-semibold tracking-tight text-[var(--color-fg-primary)] leading-[1.15]",
  h3: "text-3xl font-semibold tracking-snug text-[var(--color-fg-primary)] leading-[1.2]",
  h4: "text-2xl font-medium tracking-normal text-[var(--color-fg-primary)] leading-[1.3]",
  h5: "text-xl font-medium tracking-normal text-[var(--color-fg-primary)] leading-[1.4]",
  h6: "text-lg font-medium tracking-normal text-[var(--color-fg-primary)] leading-[1.5]"
};
function I(n) {
  const o = ({ children: s, className: u = "", style: v }) => ie.createElement(
    n,
    { className: `${_r[n]} ${u}`.trim(), style: v },
    s
  );
  return o.displayName = `Typography.${n.toUpperCase()}`, o;
}
const ct = I("h1"), ut = I("h2"), dt = I("h3"), ft = I("h4"), pt = I("h5"), vt = I("h6");
function Rr({
  children: n,
  size: o = "base",
  secondary: s = !1,
  muted: u = !1,
  className: v = "",
  style: p
}) {
  const y = {
    lg: "text-lg",
    base: "text-base",
    sm: "text-sm",
    xs: "text-xs"
  }[o], m = u ? "text-[var(--color-fg-tertiary)]" : s ? "text-[var(--color-fg-secondary)]" : "text-[var(--color-fg-primary)]";
  return /* @__PURE__ */ i.jsx("p", { className: `${y} ${m} leading-relaxed ${v}`.trim(), style: p, children: n });
}
Rr.displayName = "Typography.Text";
function jr({ children: n, muted: o = !0, className: s = "", style: u }) {
  return /* @__PURE__ */ i.jsx(
    "span",
    {
      className: `
        text-xs
        ${o ? "text-[var(--color-fg-tertiary)]" : "text-[var(--color-fg-secondary)]"}
        leading-normal
        ${s}
      `.trim(),
      style: u,
      children: n
    }
  );
}
jr.displayName = "Typography.Caption";
function Cr({ children: n, size: o = "sm", accent: s = !1, className: u = "", style: v }) {
  const p = { sm: "text-sm", xs: "text-xs", "2xs": "text-[0.625rem]" }[o];
  return /* @__PURE__ */ i.jsx(
    "span",
    {
      className: `
        font-mono
        ${p}
        tracking-wide
        ${s ? "text-[var(--color-accent-500)]" : "text-[var(--color-fg-secondary)]"}
        ${u}
      `.trim(),
      style: { fontFamily: "var(--font-mono)", ...v },
      children: n
    }
  );
}
Cr.displayName = "Typography.Mono";
function De({ children: n, htmlFor: o, required: s = !1, className: u = "", style: v }) {
  return /* @__PURE__ */ i.jsxs(
    "label",
    {
      htmlFor: o,
      className: `
        text-xs
        font-medium
        tracking-wider
        uppercase
        text-[var(--color-fg-secondary)]
        ${u}
      `.trim(),
      style: { fontFamily: "var(--font-mono)", letterSpacing: "0.08em", ...v },
      children: [
        n,
        s && /* @__PURE__ */ i.jsx("span", { className: "ml-1 text-[var(--color-error)]", "aria-hidden": !0, children: "*" })
      ]
    }
  );
}
De.displayName = "Typography.Label";
function Tr({ children: n, className: o = "", style: s }) {
  return /* @__PURE__ */ i.jsx(
    "p",
    {
      className: `
        text-xl
        font-light
        text-[var(--color-fg-secondary)]
        leading-relaxed
        ${o}
      `.trim(),
      style: s,
      children: n
    }
  );
}
Tr.displayName = "Typography.Lead";
const Sr = {
  primary: `
    bg-[var(--color-accent-500)]
    text-white
    border border-[var(--color-accent-600)]
    hover:bg-[var(--color-accent-600)]
    active:bg-[var(--color-accent-700)]
    disabled:bg-[var(--color-fg-disabled)]
    disabled:border-[var(--color-fg-disabled)]
    disabled:text-white
  `,
  secondary: `
    bg-[var(--color-bg-subtle)]
    text-[var(--color-fg-primary)]
    border border-[var(--color-border-default)]
    hover:bg-[var(--color-bg-muted)]
    hover:border-[var(--color-border-strong)]
    active:bg-[var(--color-bg-muted)]
    disabled:text-[var(--color-fg-disabled)]
    disabled:border-[var(--color-border-subtle)]
  `,
  ghost: `
    bg-transparent
    text-[var(--color-fg-secondary)]
    border border-transparent
    hover:bg-[var(--color-bg-subtle)]
    hover:text-[var(--color-fg-primary)]
    active:bg-[var(--color-bg-muted)]
    disabled:text-[var(--color-fg-disabled)]
  `,
  danger: `
    bg-[var(--color-error-bg)]
    text-[var(--color-error)]
    border border-[var(--color-error-bg)]
    hover:bg-[var(--color-error)]
    hover:text-white
    hover:border-[var(--color-error)]
    active:opacity-90
    disabled:opacity-50
  `
}, $r = {
  sm: "h-7 px-3 text-xs gap-1.5",
  md: "h-9 px-4 text-sm gap-2",
  lg: "h-11 px-5 text-base gap-2.5"
}, Or = {
  sm: "h-7 w-7 p-0",
  md: "h-9 w-9 p-0",
  lg: "h-11 w-11 p-0"
}, Fr = {
  sm: 12,
  md: 14,
  lg: 16
};
function gt({
  variant: n = "primary",
  size: o = "md",
  iconOnly: s = !1,
  icon: u,
  trailingIcon: v,
  loading: p = !1,
  disabled: y,
  children: m,
  className: b = "",
  ...C
}) {
  const E = y || p;
  return /* @__PURE__ */ i.jsx(
    q.button,
    {
      whileTap: E ? {} : { scale: 0.97 },
      transition: { duration: 0.1 },
      disabled: E,
      className: `
        inline-flex items-center justify-center
        font-medium
        rounded-[var(--radius-md)]
        transition-colors duration-150
        cursor-pointer
        select-none
        focus-visible:outline-none
        focus-visible:shadow-[var(--shadow-focus)]
        disabled:cursor-not-allowed
        ${s ? Or[o] : $r[o]}
        ${Sr[n]}
        ${b}
      `.replace(/\s+/g, " ").trim(),
      style: { fontFamily: "var(--font-sans)" },
      ...C,
      children: p ? /* @__PURE__ */ i.jsx(kr, { size: Fr[o] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        u && /* @__PURE__ */ i.jsx("span", { className: "shrink-0", children: u }),
        !s && m && /* @__PURE__ */ i.jsx("span", { children: m }),
        s && /* @__PURE__ */ i.jsx("span", { className: "sr-only", children: m }),
        v && !s && /* @__PURE__ */ i.jsx("span", { className: "shrink-0", children: v })
      ] })
    }
  );
}
function kr({ size: n }) {
  return /* @__PURE__ */ i.jsxs(
    "svg",
    {
      width: n,
      height: n,
      viewBox: "0 0 16 16",
      fill: "none",
      className: "animate-spin",
      "aria-hidden": !0,
      children: [
        /* @__PURE__ */ i.jsx(
          "circle",
          {
            cx: "8",
            cy: "8",
            r: "6",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeOpacity: "0.25"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "path",
          {
            d: "M14 8a6 6 0 0 0-6-6",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}
const Ar = {
  default: `
    bg-[var(--color-bg-base)]
    border border-[var(--color-border-subtle)]
    shadow-[var(--shadow-sm)]
  `,
  outlined: `
    bg-[var(--color-bg-base)]
    border border-[var(--color-border-default)]
  `,
  elevated: `
    bg-[var(--color-bg-base)]
    border border-[var(--color-border-subtle)]
    shadow-[var(--shadow-md)]
  `,
  ghost: `
    bg-[var(--color-bg-subtle)]
    border border-transparent
  `
};
function mt({
  children: n,
  variant: o = "default",
  interactive: s = !1,
  noPadding: u = !1,
  className: v = "",
  onClick: p
}) {
  const y = `
    rounded-[var(--radius-lg)]
    overflow-hidden
    ${u ? "" : "p-6"}
    ${Ar[o]}
    ${p ? "cursor-pointer" : ""}
    ${v}
  `.replace(/\s+/g, " ").trim();
  return s || p ? /* @__PURE__ */ i.jsx(
    q.div,
    {
      className: y,
      initial: "rest",
      animate: "rest",
      whileHover: "hover",
      variants: Pe,
      onClick: p,
      role: p ? "button" : void 0,
      tabIndex: p ? 0 : void 0,
      onKeyDown: p ? (m) => {
        (m.key === "Enter" || m.key === " ") && p();
      } : void 0,
      children: n
    }
  ) : /* @__PURE__ */ i.jsx("div", { className: y, children: n });
}
function Pr({ children: n, className: o = "" }) {
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `
        px-6 py-4
        border-b border-[var(--color-border-subtle)]
        -mx-6 -mt-6 mb-6
        ${o}
      `.replace(/\s+/g, " ").trim(),
      children: n
    }
  );
}
Pr.displayName = "Card.Header";
function Dr({ children: n, className: o = "" }) {
  return /* @__PURE__ */ i.jsx("div", { className: o, children: n });
}
Dr.displayName = "Card.Body";
function Nr({ children: n, className: o = "" }) {
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `
        px-6 py-4
        border-t border-[var(--color-border-subtle)]
        -mx-6 -mb-6 mt-6
        flex items-center justify-between
        gap-3
        ${o}
      `.replace(/\s+/g, " ").trim(),
      children: n
    }
  );
}
Nr.displayName = "Card.Footer";
const Ir = {
  sm: { input: "text-xs px-2.5", height: "h-7" },
  md: { input: "text-sm px-3", height: "h-9" },
  lg: { input: "text-base px-4", height: "h-11" }
};
function xt({
  label: n,
  hint: o,
  errorMessage: s,
  successMessage: u,
  inputState: v = "default",
  size: p = "md",
  prefix: y,
  suffix: m,
  fullWidth: b = !1,
  id: C,
  className: E = "",
  disabled: R,
  ...T
}) {
  const k = gr(), A = C ?? k, M = `${A}-hint`, P = v === "error" || !!s, S = v === "success" || !!u, h = s ?? u ?? o, J = P ? "border-[var(--color-error)] focus-within:shadow-[0_0_0_3px_rgba(155,29,32,0.15)]" : S ? "border-[var(--color-success)] focus-within:shadow-[0_0_0_3px_rgba(45,106,79,0.15)]" : "border-[var(--color-border-default)] focus-within:border-[var(--color-accent-500)] focus-within:shadow-[var(--shadow-focus)]", { input: G, height: K } = Ir[p];
  return /* @__PURE__ */ i.jsxs("div", { className: `flex flex-col gap-1.5 ${b ? "w-full" : ""} ${E}`, children: [
    n && /* @__PURE__ */ i.jsx(De, { htmlFor: A, required: T.required, children: n }),
    /* @__PURE__ */ i.jsxs(
      q.div,
      {
        className: `
          relative flex items-center
          ${K}
          bg-[var(--color-bg-base)]
          border rounded-[var(--radius-md)]
          transition-all duration-150
          shadow-[var(--shadow-inner)]
          ${J}
          ${R ? "opacity-50 cursor-not-allowed bg-[var(--color-bg-subtle)]" : ""}
        `.replace(/\s+/g, " ").trim(),
        children: [
          y && /* @__PURE__ */ i.jsx("span", { className: "flex items-center pl-3 text-[var(--color-fg-tertiary)] shrink-0", children: y }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              id: A,
              "aria-describedby": h ? M : void 0,
              "aria-invalid": P,
              disabled: R,
              className: `
            w-full h-full bg-transparent
            ${G}
            text-[var(--color-fg-primary)]
            placeholder:text-[var(--color-fg-tertiary)]
            focus:outline-none
            disabled:cursor-not-allowed
            ${y ? "pl-1.5" : ""}
            ${m ? "pr-1.5" : ""}
          `.replace(/\s+/g, " ").trim(),
              style: { fontFamily: "var(--font-sans)" },
              ...T
            }
          ),
          m && /* @__PURE__ */ i.jsx("span", { className: "flex items-center pr-3 text-[var(--color-fg-tertiary)] shrink-0", children: m })
        ]
      }
    ),
    h && /* @__PURE__ */ i.jsx(
      "p",
      {
        id: M,
        className: `
            text-xs leading-normal
            ${P ? "text-[var(--color-error)]" : ""}
            ${S ? "text-[var(--color-success)]" : ""}
            ${!P && !S ? "text-[var(--color-fg-tertiary)]" : ""}
          `.replace(/\s+/g, " ").trim(),
        children: h
      }
    )
  ] });
}
const Br = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  6: "grid-cols-6",
  8: "grid-cols-8",
  12: "grid-cols-12"
}, Ne = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8"
};
function bt({ children: n, cols: o = 12, gap: s = "md", className: u = "" }) {
  return /* @__PURE__ */ i.jsx("div", { className: `grid ${Br[o]} ${Ne[s]} ${u}`, children: n });
}
const Wr = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12"
};
function ht({ children: n, span: o = 1, className: s = "" }) {
  return /* @__PURE__ */ i.jsx("div", { className: `${Wr[o]} ${s}`, children: n });
}
function yt({
  visible: n = !0,
  columns: o = 12,
  color: s = "var(--color-accent-500)",
  unit: u = 8
}) {
  return /* @__PURE__ */ i.jsx(mr, { children: n && /* @__PURE__ */ i.jsxs(
    q.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
      className: "fixed inset-0 pointer-events-none z-[9999]",
      "aria-hidden": !0,
      children: [
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              backgroundImage: `radial-gradient(circle, ${s}33 1px, transparent 1px)`,
              backgroundSize: `${u}px ${u}px`
            }
          }
        ),
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: "absolute inset-0 mx-auto max-w-screen-xl px-6",
            style: { width: "100%" },
            children: /* @__PURE__ */ i.jsx(
              "div",
              {
                className: "h-full",
                style: {
                  display: "grid",
                  gridTemplateColumns: `repeat(${o}, 1fr)`,
                  gap: "16px"
                },
                children: Array.from({ length: o }).map((v, p) => /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    style: { backgroundColor: `${s}0D`, borderLeft: `1px solid ${s}33` }
                  },
                  p
                ))
              }
            )
          }
        ),
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: "absolute bottom-4 right-4 flex items-center gap-2",
            style: { fontFamily: "var(--font-mono)" },
            children: /* @__PURE__ */ i.jsxs(
              "span",
              {
                className: "text-[10px] px-1.5 py-0.5 rounded-sm",
                style: {
                  color: s,
                  border: `1px solid ${s}66`,
                  backgroundColor: `${s}1A`,
                  letterSpacing: "0.08em"
                },
                children: [
                  o,
                  "col / ",
                  u,
                  "px"
                ]
              }
            )
          }
        )
      ]
    }
  ) });
}
const Hr = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch"
}, Lr = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around"
};
function Et({
  children: n,
  direction: o = "col",
  gap: s = "md",
  align: u = "stretch",
  justify: v = "start",
  wrap: p = !1,
  className: y = ""
}) {
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `
        flex
        ${o === "col" ? "flex-col" : "flex-row"}
        ${Ne[s]}
        ${Hr[u]}
        ${Lr[v]}
        ${p ? "flex-wrap" : ""}
        ${y}
      `.replace(/\s+/g, " ").trim(),
      children: n
    }
  );
}
export {
  gt as Button,
  jr as Caption,
  mt as Card,
  Dr as CardBody,
  Nr as CardFooter,
  Pr as CardHeader,
  bt as Grid,
  ht as GridItem,
  yt as GridOverlay,
  ct as H1,
  ut as H2,
  dt as H3,
  ft as H4,
  pt as H5,
  vt as H6,
  xt as Input,
  De as Label,
  Tr as Lead,
  Cr as Mono,
  Et as Stack,
  Rr as Text,
  it as buttonTap,
  Pe as cardHover,
  Ur as colors,
  Gr as fadeIn,
  Kr as fadeOut,
  xr as fontFamily,
  br as fontSize,
  hr as fontWeight,
  ot as hoverLift,
  st as inputFocus,
  yr as letterSpacing,
  lt as pageTransition,
  Jr as radius,
  rt as scaleIn,
  tt as scaleOut,
  qr as shadows,
  Zr as slideDown,
  Qr as slideLeft,
  et as slideRight,
  Xr as slideUp,
  zr as spacing,
  at as staggerChildren,
  nt as staggerItem,
  Vr as typography
};
