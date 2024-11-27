var Z0 = Object.defineProperty;
var H0 = (u, e, t) => e in u ? Z0(u, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : u[e] = t;
var G = (u, e, t) => (H0(u, typeof e != "symbol" ? e + "" : e, t), t);
import { defineComponent as Y, openBlock as F, createElementBlock as A, normalizeStyle as nu, createElementVNode as y, toDisplayString as V0, ref as B, h as bu, render as Gu, onUnmounted as G0, createCommentVNode as J, Fragment as Bu, renderList as Mu, watch as Wu, nextTick as W0, normalizeClass as N, withDirectives as zu, createBlock as qu, vShow as Ju, withKeys as J0, vModelText as Q0, createTextVNode as X0, computed as Qu, createVNode as Du, createApp as K0 } from "vue";
const Y0 = { class: "font-bold text-base" }, ue = /* @__PURE__ */ Y({
  __name: "ChatHeader",
  props: {
    title: { default: "LangChat Assistant" },
    theme: { default: () => ({
      primary: "#1972f5"
    }) }
  },
  setup(u) {
    return (e, t) => (F(), A("div", {
      style: nu(`background: ${e.theme.primary}`),
      class: "text-white px-3 py-3 flex items-center gap-1 rounded-t-xl"
    }, [
      t[0] || (t[0] = y("svg", {
        height: "32",
        viewBox: "0 0 30 23",
        width: "32",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        y("path", {
          "clip-rule": "evenodd",
          d: "M7.7586 2L16.2412 2C17.0462 1.99999 17.7105 1.99998 18.2517 2.04419C18.8138 2.09012 19.3305 2.18868 19.8159 2.43598C20.5685 2.81947 21.1804 3.43139 21.5639 4.18404C21.8112 4.66937 21.9098 5.18608 21.9557 5.74818C21.9999 6.28937 21.9999 6.95373 21.9999 7.7587L22 14.1376C22.0004 14.933 22.0007 15.5236 21.8636 16.0353C21.4937 17.4156 20.4155 18.4938 19.0352 18.8637C18.7277 18.9461 18.3917 18.9789 17.9999 18.9918L17.9999 20.371C18 20.6062 18 20.846 17.9822 21.0425C17.9651 21.2305 17.9199 21.5852 17.6722 21.8955C17.3872 22.2525 16.9551 22.4602 16.4983 22.4597C16.1013 22.4593 15.7961 22.273 15.6386 22.1689C15.474 22.06 15.2868 21.9102 15.1031 21.7632L12.69 19.8327C12.1714 19.4178 12.0174 19.3007 11.8575 19.219C11.697 19.137 11.5262 19.0771 11.3496 19.0408C11.1737 19.0047 10.9803 19 10.3162 19H7.75858C6.95362 19 6.28927 19 5.74808 18.9558C5.18598 18.9099 4.66928 18.8113 4.18394 18.564C3.43129 18.1805 2.81937 17.5686 2.43588 16.816C2.18859 16.3306 2.09002 15.8139 2.0441 15.2518C1.99988 14.7106 1.99989 14.0463 1.9999 13.2413V7.75868C1.99989 6.95372 1.99988 6.28936 2.0441 5.74818C2.09002 5.18608 2.18859 4.66937 2.43588 4.18404C2.81937 3.43139 3.43129 2.81947 4.18394 2.43598C4.66928 2.18868 5.18598 2.09012 5.74808 2.04419C6.28927 1.99998 6.95364 1.99999 7.7586 2ZM10.5073 7.5C10.5073 6.67157 9.83575 6 9.00732 6C8.1789 6 7.50732 6.67157 7.50732 7.5C7.50732 8.32843 8.1789 9 9.00732 9C9.83575 9 10.5073 8.32843 10.5073 7.5ZM16.6073 11.7001C16.1669 11.3697 15.5426 11.4577 15.2105 11.8959C15.1488 11.9746 15.081 12.0486 15.0119 12.1207C14.8646 12.2744 14.6432 12.4829 14.3566 12.6913C13.7796 13.111 12.9818 13.5001 12.0073 13.5001C11.0328 13.5001 10.235 13.111 9.65799 12.6913C9.37138 12.4829 9.15004 12.2744 9.00274 12.1207C8.93366 12.0486 8.86581 11.9745 8.80418 11.8959C8.472 11.4577 7.84775 11.3697 7.40732 11.7001C6.96549 12.0314 6.87595 12.6582 7.20732 13.1001C7.20479 13.0968 7.21072 13.1043 7.22094 13.1171C7.24532 13.1478 7.29407 13.2091 7.31068 13.2289C7.36932 13.2987 7.45232 13.3934 7.55877 13.5045C7.77084 13.7258 8.08075 14.0172 8.48165 14.3088C9.27958 14.8891 10.4818 15.5001 12.0073 15.5001C13.5328 15.5001 14.735 14.8891 15.533 14.3088C15.9339 14.0172 16.2438 13.7258 16.4559 13.5045C16.5623 13.3934 16.6453 13.2987 16.704 13.2289C16.7333 13.1939 16.7567 13.165 16.7739 13.1432C17.1193 12.6969 17.0729 12.0493 16.6073 11.7001ZM15.0073 6C15.8358 6 16.5073 6.67157 16.5073 7.5C16.5073 8.32843 15.8358 9 15.0073 9C14.1789 9 13.5073 8.32843 13.5073 7.5C13.5073 6.67157 14.1789 6 15.0073 6Z",
          fill: "white",
          "fill-rule": "evenodd"
        })
      ], -1)),
      y("h3", Y0, V0(e.title), 1)
    ], 4));
  }
});
function ee(u) {
  return navigator.clipboard.writeText(u).then(() => Promise.resolve(u)).catch((e) => Promise.reject(e));
}
B([]);
const te = {
  name: "Message",
  props: {
    type: String,
    content: String
  },
  setup(u, { expose: e }) {
    const t = B(!0);
    return e({ close: () => {
      t.value = !1;
    } }), () => t.value ? bu(
      "div",
      {
        class: [
          "fixed left-1/2 -translate-x-1/2 px-4 py-1.5 text-sm rounded-md shadow-md",
          "transition-all duration-300 transform",
          "flex items-center gap-2",
          {
            "bg-green-50 text-green-600": u.type === "success",
            "bg-red-50 text-red-600": u.type === "error",
            "bg-yellow-50 text-yellow-600": u.type === "warning",
            "bg-blue-50 text-blue-600": u.type === "info"
          }
        ],
        style: {
          zIndex: 9999,
          top: "20px"
        }
      },
      [
        // 图标
        bu("span", { class: "text-sm" }, [
          u.type === "success" ? "✓" : u.type === "error" ? "✕" : u.type === "warning" ? "!" : "i"
        ]),
        // 内容
        u.content
      ]
    ) : null;
  }
};
function fu(u) {
  const e = document.createElement("div"), t = bu(te, {
    type: u.type || "info",
    content: u.content
  });
  Gu(t, e), document.body.appendChild(e.firstElementChild), setTimeout(() => {
    var n;
    const r = (n = t.component) == null ? void 0 : n.exposed;
    r == null || r.close(), setTimeout(() => {
      Gu(null, e), document.body.removeChild(e.firstElementChild);
    }, 300);
  }, u.duration || 3e3);
}
function ne() {
  return {
    info: (u, e) => fu({ type: "info", content: u, duration: e }),
    success: (u, e) => fu({ type: "success", content: u, duration: e }),
    warning: (u, e) => fu({ type: "warning", content: u, duration: e }),
    error: (u, e) => fu({ type: "error", content: u, duration: e })
  };
}
class re {
  constructor() {
    G(this, "speechSynthesis");
    G(this, "utterance", null);
    G(this, "voice", null);
    this.speechSynthesis = window.speechSynthesis, this.initVoice();
  }
  initVoice() {
    if (this.speechSynthesis.getVoices().length === 0)
      this.speechSynthesis.addEventListener("voiceschanged", () => {
        const e = this.speechSynthesis.getVoices();
        this.voice = e.find((t) => t.lang.includes("zh")) || e[0];
      });
    else {
      const e = this.speechSynthesis.getVoices();
      this.voice = e.find((t) => t.lang.includes("zh")) || e[0];
    }
  }
  speak(e, t = {}) {
    this.stop(), this.utterance = new SpeechSynthesisUtterance(e), this.voice && (this.utterance.voice = this.voice), this.utterance.rate = t.rate || 1, this.utterance.pitch = t.pitch || 1, this.utterance.volume = t.volume || 1, t.onEnd && (this.utterance.onend = t.onEnd), this.speechSynthesis.speak(this.utterance);
  }
  pause() {
    this.speechSynthesis.pause();
  }
  resume() {
    this.speechSynthesis.resume();
  }
  stop() {
    this.speechSynthesis.cancel();
  }
  // 获取所有可用的声音
  getVoices() {
    return this.speechSynthesis.getVoices();
  }
  // 检查是否正在朗读
  isSpeaking() {
    return this.speechSynthesis.speaking;
  }
  // 检查是否已暂停
  isPaused() {
    return this.speechSynthesis.paused;
  }
}
const tu = new re(), ce = { class: "flex justify-end items-end mx-1 b" }, ie = {
  key: 0,
  class: "w-4 h-4 text-blue-500",
  viewBox: "0 0 24 24"
}, oe = ["x"], ae = ["dur", "values"], se = ["dur", "values"], le = {
  key: 1,
  height: "1em",
  viewBox: "0 0 24 24",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
}, Xu = /* @__PURE__ */ Y({
  __name: "ChatReader",
  props: {
    text: { default: "" }
  },
  setup(u) {
    const e = u, t = ne();
    function r() {
      ee(e.text), t.success("复制成功");
    }
    const n = B(!1), c = B(!1), o = B(1), i = B(1);
    G0(() => {
      tu.stop();
    });
    const a = () => {
      n.value ? (tu.pause(), c.value = !0, n.value = !1) : (c.value ? tu.resume() : tu.speak(e.text, {
        rate: o.value,
        volume: i.value,
        onEnd() {
          c.value = !1, n.value = !1;
        }
      }), n.value = !0, c.value = !1);
    }, s = () => {
      tu.stop(), n.value = !1, c.value = !1;
    };
    return (f, l) => (F(), A("div", ce, [
      y("button", {
        class: "border px-1 py-0.5 rounded-l border-r-0 hover:bg-gray-100 transition-all",
        onClick: r
      }, l[0] || (l[0] = [
        y("svg", {
          height: "1em",
          viewBox: "0 0 24 24",
          width: "1em",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          y("path", {
            d: "M20.829 12.861c.171-.413.171-.938.171-1.986s0-1.573-.171-1.986a2.25 2.25 0 0 0-1.218-1.218c-.413-.171-.938-.171-1.986-.171H11.1c-1.26 0-1.89 0-2.371.245a2.25 2.25 0 0 0-.984.984C7.5 9.209 7.5 9.839 7.5 11.1v6.525c0 1.048 0 1.573.171 1.986c.229.551.667.99 1.218 1.218c.413.171.938.171 1.986.171s1.573 0 1.986-.171m7.968-7.968a2.25 2.25 0 0 1-1.218 1.218c-.413.171-.938.171-1.986.171s-1.573 0-1.986.171a2.25 2.25 0 0 0-1.218 1.218c-.171.413-.171.938-.171 1.986s0 1.573-.171 1.986a2.25 2.25 0 0 1-1.218 1.218m7.968-7.968a11.68 11.68 0 0 1-7.75 7.9l-.218.068M16.5 7.5v-.9c0-1.26 0-1.89-.245-2.371a2.25 2.25 0 0 0-.983-.984C14.79 3 14.16 3 12.9 3H6.6c-1.26 0-1.89 0-2.371.245a2.25 2.25 0 0 0-.984.984C3 4.709 3 5.339 3 6.6v6.3c0 1.26 0 1.89.245 2.371c.216.424.56.768.984.984c.48.245 1.111.245 2.372.245H7.5",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "1.5"
          })
        ], -1)
      ])),
      n.value ? (F(), A("button", {
        key: 0,
        class: "border border-r-0 px-1 py-0.5 hover:bg-gray-100 transition-all",
        onClick: s
      }, l[1] || (l[1] = [
        y("svg", {
          class: "w-4 h-4 text-red-700",
          height: "2",
          viewBox: "0 0 24 24",
          width: "2",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          y("path", {
            d: "M8 16h8V8H8zm4 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8",
            fill: "currentColor"
          })
        ], -1)
      ]))) : J("", !0),
      y("button", {
        class: "border px-1 py-0.5 rounded-r hover:bg-gray-100 transition-all",
        onClick: a
      }, [
        n.value ? (F(), A("svg", ie, [
          (F(), A(Bu, null, Mu(3, (b, h) => y("rect", {
            key: h,
            x: 6 * h + 4,
            fill: "currentColor",
            height: "2",
            width: "2",
            y: "8"
          }, [
            y("animate", {
              dur: `${0.8 + h * 0.2}s`,
              values: `8;${12 + h * 2};8`,
              attributeName: "height",
              repeatCount: "indefinite"
            }, null, 8, ae),
            y("animate", {
              dur: `${0.8 + h * 0.2}s`,
              values: `8;${6 - h};8`,
              attributeName: "y",
              repeatCount: "indefinite"
            }, null, 8, se)
          ], 8, oe)), 64))
        ])) : (F(), A("svg", le, l[2] || (l[2] = [
          y("g", { fill: "none" }, [
            y("path", { d: "m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }),
            y("path", {
              d: "M12 3a1 1 0 0 1 .993.883L13 4v16a1 1 0 0 1-1.993.117L11 20V4a1 1 0 0 1 1-1M8 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M4 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m16 0a1 1 0 0 1 .993.883L21 10v4a1 1 0 0 1-1.993.117L19 14v-4a1 1 0 0 1 1-1",
              fill: "currentColor"
            })
          ], -1)
        ])))
      ])
    ]));
  }
}), Ku = {};
function fe(u) {
  let e = Ku[u];
  if (e)
    return e;
  e = Ku[u] = [];
  for (let t = 0; t < 128; t++) {
    const r = String.fromCharCode(t);
    e.push(r);
  }
  for (let t = 0; t < u.length; t++) {
    const r = u.charCodeAt(t);
    e[r] = "%" + ("0" + r.toString(16).toUpperCase()).slice(-2);
  }
  return e;
}
function X(u, e) {
  typeof e != "string" && (e = X.defaultChars);
  const t = fe(e);
  return u.replace(/(%[a-f0-9]{2})+/gi, function(r) {
    let n = "";
    for (let c = 0, o = r.length; c < o; c += 3) {
      const i = parseInt(r.slice(c + 1, c + 3), 16);
      if (i < 128) {
        n += t[i];
        continue;
      }
      if ((i & 224) === 192 && c + 3 < o) {
        const a = parseInt(r.slice(c + 4, c + 6), 16);
        if ((a & 192) === 128) {
          const s = i << 6 & 1984 | a & 63;
          s < 128 ? n += "��" : n += String.fromCharCode(s), c += 3;
          continue;
        }
      }
      if ((i & 240) === 224 && c + 6 < o) {
        const a = parseInt(r.slice(c + 4, c + 6), 16), s = parseInt(r.slice(c + 7, c + 9), 16);
        if ((a & 192) === 128 && (s & 192) === 128) {
          const f = i << 12 & 61440 | a << 6 & 4032 | s & 63;
          f < 2048 || f >= 55296 && f <= 57343 ? n += "���" : n += String.fromCharCode(f), c += 6;
          continue;
        }
      }
      if ((i & 248) === 240 && c + 9 < o) {
        const a = parseInt(r.slice(c + 4, c + 6), 16), s = parseInt(r.slice(c + 7, c + 9), 16), f = parseInt(r.slice(c + 10, c + 12), 16);
        if ((a & 192) === 128 && (s & 192) === 128 && (f & 192) === 128) {
          let l = i << 18 & 1835008 | a << 12 & 258048 | s << 6 & 4032 | f & 63;
          l < 65536 || l > 1114111 ? n += "����" : (l -= 65536, n += String.fromCharCode(55296 + (l >> 10), 56320 + (l & 1023))), c += 9;
          continue;
        }
      }
      n += "�";
    }
    return n;
  });
}
X.defaultChars = ";/?:@&=+$,#";
X.componentChars = "";
const Yu = {};
function de(u) {
  let e = Yu[u];
  if (e)
    return e;
  e = Yu[u] = [];
  for (let t = 0; t < 128; t++) {
    const r = String.fromCharCode(t);
    /^[0-9a-z]$/i.test(r) ? e.push(r) : e.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
  }
  for (let t = 0; t < u.length; t++)
    e[u.charCodeAt(t)] = u[t];
  return e;
}
function au(u, e, t) {
  typeof e != "string" && (t = e, e = au.defaultChars), typeof t > "u" && (t = !0);
  const r = de(e);
  let n = "";
  for (let c = 0, o = u.length; c < o; c++) {
    const i = u.charCodeAt(c);
    if (t && i === 37 && c + 2 < o && /^[0-9a-f]{2}$/i.test(u.slice(c + 1, c + 3))) {
      n += u.slice(c, c + 3), c += 2;
      continue;
    }
    if (i < 128) {
      n += r[i];
      continue;
    }
    if (i >= 55296 && i <= 57343) {
      if (i >= 55296 && i <= 56319 && c + 1 < o) {
        const a = u.charCodeAt(c + 1);
        if (a >= 56320 && a <= 57343) {
          n += encodeURIComponent(u[c] + u[c + 1]), c++;
          continue;
        }
      }
      n += "%EF%BF%BD";
      continue;
    }
    n += encodeURIComponent(u[c]);
  }
  return n;
}
au.defaultChars = ";/?:@&=+$,-_.!~*'()#";
au.componentChars = "-_.!~*'()";
function Pu(u) {
  let e = "";
  return e += u.protocol || "", e += u.slashes ? "//" : "", e += u.auth ? u.auth + "@" : "", u.hostname && u.hostname.indexOf(":") !== -1 ? e += "[" + u.hostname + "]" : e += u.hostname || "", e += u.port ? ":" + u.port : "", e += u.pathname || "", e += u.search || "", e += u.hash || "", e;
}
function pu() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const he = /^([a-z0-9.+-]+:)/i, be = /:[0-9]*$/, pe = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, xe = ["<", ">", '"', "`", " ", "\r", `
`, "	"], _e = ["{", "}", "|", "\\", "^", "`"].concat(xe), me = ["'"].concat(_e), u0 = ["%", "/", "?", ";", "#"].concat(me), e0 = ["/", "?", "#"], ge = 255, t0 = /^[+a-z0-9A-Z_-]{0,63}$/, ke = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, n0 = {
  javascript: !0,
  "javascript:": !0
}, r0 = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function Ou(u, e) {
  if (u && u instanceof pu)
    return u;
  const t = new pu();
  return t.parse(u, e), t;
}
pu.prototype.parse = function(u, e) {
  let t, r, n, c = u;
  if (c = c.trim(), !e && u.split("#").length === 1) {
    const s = pe.exec(c);
    if (s)
      return this.pathname = s[1], s[2] && (this.search = s[2]), this;
  }
  let o = he.exec(c);
  if (o && (o = o[0], t = o.toLowerCase(), this.protocol = o, c = c.substr(o.length)), (e || o || c.match(/^\/\/[^@\/]+@[^@\/]+/)) && (n = c.substr(0, 2) === "//", n && !(o && n0[o]) && (c = c.substr(2), this.slashes = !0)), !n0[o] && (n || o && !r0[o])) {
    let s = -1;
    for (let d = 0; d < e0.length; d++)
      r = c.indexOf(e0[d]), r !== -1 && (s === -1 || r < s) && (s = r);
    let f, l;
    s === -1 ? l = c.lastIndexOf("@") : l = c.lastIndexOf("@", s), l !== -1 && (f = c.slice(0, l), c = c.slice(l + 1), this.auth = f), s = -1;
    for (let d = 0; d < u0.length; d++)
      r = c.indexOf(u0[d]), r !== -1 && (s === -1 || r < s) && (s = r);
    s === -1 && (s = c.length), c[s - 1] === ":" && s--;
    const b = c.slice(0, s);
    c = c.slice(s), this.parseHost(b), this.hostname = this.hostname || "";
    const h = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!h) {
      const d = this.hostname.split(/\./);
      for (let g = 0, k = d.length; g < k; g++) {
        const D = d[g];
        if (D && !D.match(t0)) {
          let p = "";
          for (let _ = 0, x = D.length; _ < x; _++)
            D.charCodeAt(_) > 127 ? p += "x" : p += D[_];
          if (!p.match(t0)) {
            const _ = d.slice(0, g), x = d.slice(g + 1), m = D.match(ke);
            m && (_.push(m[1]), x.unshift(m[2])), x.length && (c = x.join(".") + c), this.hostname = _.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > ge && (this.hostname = ""), h && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const i = c.indexOf("#");
  i !== -1 && (this.hash = c.substr(i), c = c.slice(0, i));
  const a = c.indexOf("?");
  return a !== -1 && (this.search = c.substr(a), c = c.slice(0, a)), c && (this.pathname = c), r0[t] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
pu.prototype.parseHost = function(u) {
  let e = be.exec(u);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), u = u.substr(0, u.length - e.length)), u && (this.hostname = u);
};
const Ce = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: X,
  encode: au,
  format: Pu,
  parse: Ou
}, Symbol.toStringTag, { value: "Module" })), x0 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, _0 = /[\0-\x1F\x7F-\x9F]/, ye = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, Nu = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, m0 = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, g0 = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, De = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: x0,
  Cc: _0,
  Cf: ye,
  P: Nu,
  S: m0,
  Z: g0
}, Symbol.toStringTag, { value: "Module" })), Ee = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((u) => u.charCodeAt(0))
), Fe = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((u) => u.charCodeAt(0))
);
var Eu;
const Ae = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), we = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (Eu = String.fromCodePoint) !== null && Eu !== void 0 ? Eu : function(u) {
    let e = "";
    return u > 65535 && (u -= 65536, e += String.fromCharCode(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), e += String.fromCharCode(u), e;
  }
);
function ve(u) {
  var e;
  return u >= 55296 && u <= 57343 || u > 1114111 ? 65533 : (e = Ae.get(u)) !== null && e !== void 0 ? e : u;
}
var v;
(function(u) {
  u[u.NUM = 35] = "NUM", u[u.SEMI = 59] = "SEMI", u[u.EQUALS = 61] = "EQUALS", u[u.ZERO = 48] = "ZERO", u[u.NINE = 57] = "NINE", u[u.LOWER_A = 97] = "LOWER_A", u[u.LOWER_F = 102] = "LOWER_F", u[u.LOWER_X = 120] = "LOWER_X", u[u.LOWER_Z = 122] = "LOWER_Z", u[u.UPPER_A = 65] = "UPPER_A", u[u.UPPER_F = 70] = "UPPER_F", u[u.UPPER_Z = 90] = "UPPER_Z";
})(v || (v = {}));
const Se = 32;
var Z;
(function(u) {
  u[u.VALUE_LENGTH = 49152] = "VALUE_LENGTH", u[u.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", u[u.JUMP_TABLE = 127] = "JUMP_TABLE";
})(Z || (Z = {}));
function Iu(u) {
  return u >= v.ZERO && u <= v.NINE;
}
function Te(u) {
  return u >= v.UPPER_A && u <= v.UPPER_F || u >= v.LOWER_A && u <= v.LOWER_F;
}
function Be(u) {
  return u >= v.UPPER_A && u <= v.UPPER_Z || u >= v.LOWER_A && u <= v.LOWER_Z || Iu(u);
}
function Me(u) {
  return u === v.EQUALS || Be(u);
}
var w;
(function(u) {
  u[u.EntityStart = 0] = "EntityStart", u[u.NumericStart = 1] = "NumericStart", u[u.NumericDecimal = 2] = "NumericDecimal", u[u.NumericHex = 3] = "NumericHex", u[u.NamedEntity = 4] = "NamedEntity";
})(w || (w = {}));
var U;
(function(u) {
  u[u.Legacy = 0] = "Legacy", u[u.Strict = 1] = "Strict", u[u.Attribute = 2] = "Attribute";
})(U || (U = {}));
class ze {
  constructor(e, t, r) {
    this.decodeTree = e, this.emitCodePoint = t, this.errors = r, this.state = w.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = U.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(e) {
    this.decodeMode = e, this.state = w.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(e, t) {
    switch (this.state) {
      case w.EntityStart:
        return e.charCodeAt(t) === v.NUM ? (this.state = w.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = w.NamedEntity, this.stateNamedEntity(e, t));
      case w.NumericStart:
        return this.stateNumericStart(e, t);
      case w.NumericDecimal:
        return this.stateNumericDecimal(e, t);
      case w.NumericHex:
        return this.stateNumericHex(e, t);
      case w.NamedEntity:
        return this.stateNamedEntity(e, t);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(e, t) {
    return t >= e.length ? -1 : (e.charCodeAt(t) | Se) === v.LOWER_X ? (this.state = w.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = w.NumericDecimal, this.stateNumericDecimal(e, t));
  }
  addToNumericResult(e, t, r, n) {
    if (t !== r) {
      const c = r - t;
      this.result = this.result * Math.pow(n, c) + parseInt(e.substr(t, c), n), this.consumed += c;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(e, t) {
    const r = t;
    for (; t < e.length; ) {
      const n = e.charCodeAt(t);
      if (Iu(n) || Te(n))
        t += 1;
      else
        return this.addToNumericResult(e, r, t, 16), this.emitNumericEntity(n, 3);
    }
    return this.addToNumericResult(e, r, t, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(e, t) {
    const r = t;
    for (; t < e.length; ) {
      const n = e.charCodeAt(t);
      if (Iu(n))
        t += 1;
      else
        return this.addToNumericResult(e, r, t, 10), this.emitNumericEntity(n, 2);
    }
    return this.addToNumericResult(e, r, t, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(e, t) {
    var r;
    if (this.consumed <= t)
      return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (e === v.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === U.Strict)
      return 0;
    return this.emitCodePoint(ve(this.result), this.consumed), this.errors && (e !== v.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(e, t) {
    const { decodeTree: r } = this;
    let n = r[this.treeIndex], c = (n & Z.VALUE_LENGTH) >> 14;
    for (; t < e.length; t++, this.excess++) {
      const o = e.charCodeAt(t);
      if (this.treeIndex = qe(r, n, this.treeIndex + Math.max(1, c), o), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === U.Attribute && // We shouldn't have consumed any characters after the entity,
        (c === 0 || // And there should be no invalid characters.
        Me(o)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (n = r[this.treeIndex], c = (n & Z.VALUE_LENGTH) >> 14, c !== 0) {
        if (o === v.SEMI)
          return this.emitNamedEntityData(this.treeIndex, c, this.consumed + this.excess);
        this.decodeMode !== U.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var e;
    const { result: t, decodeTree: r } = this, n = (r[t] & Z.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(t, n, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(e, t, r) {
    const { decodeTree: n } = this;
    return this.emitCodePoint(t === 1 ? n[e] & ~Z.VALUE_LENGTH : n[e + 1], r), t === 3 && this.emitCodePoint(n[e + 2], r), r;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var e;
    switch (this.state) {
      case w.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== U.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      case w.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case w.NumericHex:
        return this.emitNumericEntity(0, 3);
      case w.NumericStart:
        return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case w.EntityStart:
        return 0;
    }
  }
}
function k0(u) {
  let e = "";
  const t = new ze(u, (r) => e += we(r));
  return function(n, c) {
    let o = 0, i = 0;
    for (; (i = n.indexOf("&", i)) >= 0; ) {
      e += n.slice(o, i), t.startEntity(c);
      const s = t.write(
        n,
        // Skip the "&"
        i + 1
      );
      if (s < 0) {
        o = i + t.end();
        break;
      }
      o = i + s, i = s === 0 ? o + 1 : o;
    }
    const a = e + n.slice(o);
    return e = "", a;
  };
}
function qe(u, e, t, r) {
  const n = (e & Z.BRANCH_LENGTH) >> 7, c = e & Z.JUMP_TABLE;
  if (n === 0)
    return c !== 0 && r === c ? t : -1;
  if (c) {
    const a = r - c;
    return a < 0 || a >= n ? -1 : u[t + a] - 1;
  }
  let o = t, i = o + n - 1;
  for (; o <= i; ) {
    const a = o + i >>> 1, s = u[a];
    if (s < r)
      o = a + 1;
    else if (s > r)
      i = a - 1;
    else
      return u[a + n];
  }
  return -1;
}
const Ie = k0(Ee);
k0(Fe);
function C0(u, e = U.Legacy) {
  return Ie(u, e);
}
function Le(u) {
  return Object.prototype.toString.call(u);
}
function $u(u) {
  return Le(u) === "[object String]";
}
const Re = Object.prototype.hasOwnProperty;
function Pe(u, e) {
  return Re.call(u, e);
}
function mu(u) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be object");
      Object.keys(t).forEach(function(r) {
        u[r] = t[r];
      });
    }
  }), u;
}
function y0(u, e, t) {
  return [].concat(u.slice(0, e), t, u.slice(e + 1));
}
function ju(u) {
  return !(u >= 55296 && u <= 57343 || u >= 64976 && u <= 65007 || (u & 65535) === 65535 || (u & 65535) === 65534 || u >= 0 && u <= 8 || u === 11 || u >= 14 && u <= 31 || u >= 127 && u <= 159 || u > 1114111);
}
function xu(u) {
  if (u > 65535) {
    u -= 65536;
    const e = 55296 + (u >> 10), t = 56320 + (u & 1023);
    return String.fromCharCode(e, t);
  }
  return String.fromCharCode(u);
}
const D0 = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, Oe = /&([a-z#][a-z0-9]{1,31});/gi, Ne = new RegExp(D0.source + "|" + Oe.source, "gi"), $e = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function je(u, e) {
  if (e.charCodeAt(0) === 35 && $e.test(e)) {
    const r = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
    return ju(r) ? xu(r) : u;
  }
  const t = C0(u);
  return t !== u ? t : u;
}
function Ue(u) {
  return u.indexOf("\\") < 0 ? u : u.replace(D0, "$1");
}
function K(u) {
  return u.indexOf("\\") < 0 && u.indexOf("&") < 0 ? u : u.replace(Ne, function(e, t, r) {
    return t || je(e, r);
  });
}
const Ze = /[&<>"]/, He = /[&<>"]/g, Ve = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function Ge(u) {
  return Ve[u];
}
function H(u) {
  return Ze.test(u) ? u.replace(He, Ge) : u;
}
const We = /[.?*+^$[\]\\(){}|-]/g;
function Je(u) {
  return u.replace(We, "\\$&");
}
function E(u) {
  switch (u) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function ru(u) {
  if (u >= 8192 && u <= 8202)
    return !0;
  switch (u) {
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
function cu(u) {
  return Nu.test(u) || m0.test(u);
}
function iu(u) {
  switch (u) {
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
function gu(u) {
  return u = u.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (u = u.replace(/ẞ/g, "ß")), u.toLowerCase().toUpperCase();
}
const Qe = { mdurl: Ce, ucmicro: De }, Xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: y0,
  assign: mu,
  escapeHtml: H,
  escapeRE: Je,
  fromCodePoint: xu,
  has: Pe,
  isMdAsciiPunct: iu,
  isPunctChar: cu,
  isSpace: E,
  isString: $u,
  isValidEntityCode: ju,
  isWhiteSpace: ru,
  lib: Qe,
  normalizeReference: gu,
  unescapeAll: K,
  unescapeMd: Ue
}, Symbol.toStringTag, { value: "Module" }));
function Ke(u, e, t) {
  let r, n, c, o;
  const i = u.posMax, a = u.pos;
  for (u.pos = e + 1, r = 1; u.pos < i; ) {
    if (c = u.src.charCodeAt(u.pos), c === 93 && (r--, r === 0)) {
      n = !0;
      break;
    }
    if (o = u.pos, u.md.inline.skipToken(u), c === 91) {
      if (o === u.pos - 1)
        r++;
      else if (t)
        return u.pos = a, -1;
    }
  }
  let s = -1;
  return n && (s = u.pos), u.pos = a, s;
}
function Ye(u, e, t) {
  let r, n = e;
  const c = {
    ok: !1,
    pos: 0,
    str: ""
  };
  if (u.charCodeAt(n) === 60) {
    for (n++; n < t; ) {
      if (r = u.charCodeAt(n), r === 10 || r === 60)
        return c;
      if (r === 62)
        return c.pos = n + 1, c.str = K(u.slice(e + 1, n)), c.ok = !0, c;
      if (r === 92 && n + 1 < t) {
        n += 2;
        continue;
      }
      n++;
    }
    return c;
  }
  let o = 0;
  for (; n < t && (r = u.charCodeAt(n), !(r === 32 || r < 32 || r === 127)); ) {
    if (r === 92 && n + 1 < t) {
      if (u.charCodeAt(n + 1) === 32)
        break;
      n += 2;
      continue;
    }
    if (r === 40 && (o++, o > 32))
      return c;
    if (r === 41) {
      if (o === 0)
        break;
      o--;
    }
    n++;
  }
  return e === n || o !== 0 || (c.str = K(u.slice(e, n)), c.pos = n, c.ok = !0), c;
}
function u1(u, e, t, r) {
  let n, c = e;
  const o = {
    // if `true`, this is a valid link title
    ok: !1,
    // if `true`, this link can be continued on the next line
    can_continue: !1,
    // if `ok`, it's the position of the first character after the closing marker
    pos: 0,
    // if `ok`, it's the unescaped title
    str: "",
    // expected closing marker character code
    marker: 0
  };
  if (r)
    o.str = r.str, o.marker = r.marker;
  else {
    if (c >= t)
      return o;
    let i = u.charCodeAt(c);
    if (i !== 34 && i !== 39 && i !== 40)
      return o;
    e++, c++, i === 40 && (i = 41), o.marker = i;
  }
  for (; c < t; ) {
    if (n = u.charCodeAt(c), n === o.marker)
      return o.pos = c + 1, o.str += K(u.slice(e, c)), o.ok = !0, o;
    if (n === 40 && o.marker === 41)
      return o;
    n === 92 && c + 1 < t && c++, c++;
  }
  return o.can_continue = !0, o.str += K(u.slice(e, c)), o;
}
const e1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: Ye,
  parseLinkLabel: Ke,
  parseLinkTitle: u1
}, Symbol.toStringTag, { value: "Module" })), P = {};
P.code_inline = function(u, e, t, r, n) {
  const c = u[e];
  return "<code" + n.renderAttrs(c) + ">" + H(c.content) + "</code>";
};
P.code_block = function(u, e, t, r, n) {
  const c = u[e];
  return "<pre" + n.renderAttrs(c) + "><code>" + H(u[e].content) + `</code></pre>
`;
};
P.fence = function(u, e, t, r, n) {
  const c = u[e], o = c.info ? K(c.info).trim() : "";
  let i = "", a = "";
  if (o) {
    const f = o.split(/(\s+)/g);
    i = f[0], a = f.slice(2).join("");
  }
  let s;
  if (t.highlight ? s = t.highlight(c.content, i, a) || H(c.content) : s = H(c.content), s.indexOf("<pre") === 0)
    return s + `
`;
  if (o) {
    const f = c.attrIndex("class"), l = c.attrs ? c.attrs.slice() : [];
    f < 0 ? l.push(["class", t.langPrefix + i]) : (l[f] = l[f].slice(), l[f][1] += " " + t.langPrefix + i);
    const b = {
      attrs: l
    };
    return `<pre><code${n.renderAttrs(b)}>${s}</code></pre>
`;
  }
  return `<pre><code${n.renderAttrs(c)}>${s}</code></pre>
`;
};
P.image = function(u, e, t, r, n) {
  const c = u[e];
  return c.attrs[c.attrIndex("alt")][1] = n.renderInlineAsText(c.children, t, r), n.renderToken(u, e, t);
};
P.hardbreak = function(u, e, t) {
  return t.xhtmlOut ? `<br />
` : `<br>
`;
};
P.softbreak = function(u, e, t) {
  return t.breaks ? t.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
P.text = function(u, e) {
  return H(u[e].content);
};
P.html_block = function(u, e) {
  return u[e].content;
};
P.html_inline = function(u, e) {
  return u[e].content;
};
function uu() {
  this.rules = mu({}, P);
}
uu.prototype.renderAttrs = function(e) {
  let t, r, n;
  if (!e.attrs)
    return "";
  for (n = "", t = 0, r = e.attrs.length; t < r; t++)
    n += " " + H(e.attrs[t][0]) + '="' + H(e.attrs[t][1]) + '"';
  return n;
};
uu.prototype.renderToken = function(e, t, r) {
  const n = e[t];
  let c = "";
  if (n.hidden)
    return "";
  n.block && n.nesting !== -1 && t && e[t - 1].hidden && (c += `
`), c += (n.nesting === -1 ? "</" : "<") + n.tag, c += this.renderAttrs(n), n.nesting === 0 && r.xhtmlOut && (c += " /");
  let o = !1;
  if (n.block && (o = !0, n.nesting === 1 && t + 1 < e.length)) {
    const i = e[t + 1];
    (i.type === "inline" || i.hidden || i.nesting === -1 && i.tag === n.tag) && (o = !1);
  }
  return c += o ? `>
` : ">", c;
};
uu.prototype.renderInline = function(u, e, t) {
  let r = "";
  const n = this.rules;
  for (let c = 0, o = u.length; c < o; c++) {
    const i = u[c].type;
    typeof n[i] < "u" ? r += n[i](u, c, e, t, this) : r += this.renderToken(u, c, e);
  }
  return r;
};
uu.prototype.renderInlineAsText = function(u, e, t) {
  let r = "";
  for (let n = 0, c = u.length; n < c; n++)
    switch (u[n].type) {
      case "text":
        r += u[n].content;
        break;
      case "image":
        r += this.renderInlineAsText(u[n].children, e, t);
        break;
      case "html_inline":
      case "html_block":
        r += u[n].content;
        break;
      case "softbreak":
      case "hardbreak":
        r += `
`;
        break;
    }
  return r;
};
uu.prototype.render = function(u, e, t) {
  let r = "";
  const n = this.rules;
  for (let c = 0, o = u.length; c < o; c++) {
    const i = u[c].type;
    i === "inline" ? r += this.renderInline(u[c].children, e, t) : typeof n[i] < "u" ? r += n[i](u, c, e, t, this) : r += this.renderToken(u, c, e, t);
  }
  return r;
};
function T() {
  this.__rules__ = [], this.__cache__ = null;
}
T.prototype.__find__ = function(u) {
  for (let e = 0; e < this.__rules__.length; e++)
    if (this.__rules__[e].name === u)
      return e;
  return -1;
};
T.prototype.__compile__ = function() {
  const u = this, e = [""];
  u.__rules__.forEach(function(t) {
    t.enabled && t.alt.forEach(function(r) {
      e.indexOf(r) < 0 && e.push(r);
    });
  }), u.__cache__ = {}, e.forEach(function(t) {
    u.__cache__[t] = [], u.__rules__.forEach(function(r) {
      r.enabled && (t && r.alt.indexOf(t) < 0 || u.__cache__[t].push(r.fn));
    });
  });
};
T.prototype.at = function(u, e, t) {
  const r = this.__find__(u), n = t || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__[r].fn = e, this.__rules__[r].alt = n.alt || [], this.__cache__ = null;
};
T.prototype.before = function(u, e, t, r) {
  const n = this.__find__(u), c = r || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__.splice(n, 0, {
    name: e,
    enabled: !0,
    fn: t,
    alt: c.alt || []
  }), this.__cache__ = null;
};
T.prototype.after = function(u, e, t, r) {
  const n = this.__find__(u), c = r || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__.splice(n + 1, 0, {
    name: e,
    enabled: !0,
    fn: t,
    alt: c.alt || []
  }), this.__cache__ = null;
};
T.prototype.push = function(u, e, t) {
  const r = t || {};
  this.__rules__.push({
    name: u,
    enabled: !0,
    fn: e,
    alt: r.alt || []
  }), this.__cache__ = null;
};
T.prototype.enable = function(u, e) {
  Array.isArray(u) || (u = [u]);
  const t = [];
  return u.forEach(function(r) {
    const n = this.__find__(r);
    if (n < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[n].enabled = !0, t.push(r);
  }, this), this.__cache__ = null, t;
};
T.prototype.enableOnly = function(u, e) {
  Array.isArray(u) || (u = [u]), this.__rules__.forEach(function(t) {
    t.enabled = !1;
  }), this.enable(u, e);
};
T.prototype.disable = function(u, e) {
  Array.isArray(u) || (u = [u]);
  const t = [];
  return u.forEach(function(r) {
    const n = this.__find__(r);
    if (n < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[n].enabled = !1, t.push(r);
  }, this), this.__cache__ = null, t;
};
T.prototype.getRules = function(u) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[u] || [];
};
function I(u, e, t) {
  this.type = u, this.tag = e, this.attrs = null, this.map = null, this.nesting = t, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
I.prototype.attrIndex = function(e) {
  if (!this.attrs)
    return -1;
  const t = this.attrs;
  for (let r = 0, n = t.length; r < n; r++)
    if (t[r][0] === e)
      return r;
  return -1;
};
I.prototype.attrPush = function(e) {
  this.attrs ? this.attrs.push(e) : this.attrs = [e];
};
I.prototype.attrSet = function(e, t) {
  const r = this.attrIndex(e), n = [e, t];
  r < 0 ? this.attrPush(n) : this.attrs[r] = n;
};
I.prototype.attrGet = function(e) {
  const t = this.attrIndex(e);
  let r = null;
  return t >= 0 && (r = this.attrs[t][1]), r;
};
I.prototype.attrJoin = function(e, t) {
  const r = this.attrIndex(e);
  r < 0 ? this.attrPush([e, t]) : this.attrs[r][1] = this.attrs[r][1] + " " + t;
};
function E0(u, e, t) {
  this.src = u, this.env = t, this.tokens = [], this.inlineMode = !1, this.md = e;
}
E0.prototype.Token = I;
const t1 = /\r\n?|\n/g, n1 = /\0/g;
function r1(u) {
  let e;
  e = u.src.replace(t1, `
`), e = e.replace(n1, "�"), u.src = e;
}
function c1(u) {
  let e;
  u.inlineMode ? (e = new u.Token("inline", "", 0), e.content = u.src, e.map = [0, 1], e.children = [], u.tokens.push(e)) : u.md.block.parse(u.src, u.md, u.env, u.tokens);
}
function i1(u) {
  const e = u.tokens;
  for (let t = 0, r = e.length; t < r; t++) {
    const n = e[t];
    n.type === "inline" && u.md.inline.parse(n.content, u.md, u.env, n.children);
  }
}
function o1(u) {
  return /^<a[>\s]/i.test(u);
}
function a1(u) {
  return /^<\/a\s*>/i.test(u);
}
function s1(u) {
  const e = u.tokens;
  if (u.md.options.linkify)
    for (let t = 0, r = e.length; t < r; t++) {
      if (e[t].type !== "inline" || !u.md.linkify.pretest(e[t].content))
        continue;
      let n = e[t].children, c = 0;
      for (let o = n.length - 1; o >= 0; o--) {
        const i = n[o];
        if (i.type === "link_close") {
          for (o--; n[o].level !== i.level && n[o].type !== "link_open"; )
            o--;
          continue;
        }
        if (i.type === "html_inline" && (o1(i.content) && c > 0 && c--, a1(i.content) && c++), !(c > 0) && i.type === "text" && u.md.linkify.test(i.content)) {
          const a = i.content;
          let s = u.md.linkify.match(a);
          const f = [];
          let l = i.level, b = 0;
          s.length > 0 && s[0].index === 0 && o > 0 && n[o - 1].type === "text_special" && (s = s.slice(1));
          for (let h = 0; h < s.length; h++) {
            const d = s[h].url, g = u.md.normalizeLink(d);
            if (!u.md.validateLink(g))
              continue;
            let k = s[h].text;
            s[h].schema ? s[h].schema === "mailto:" && !/^mailto:/i.test(k) ? k = u.md.normalizeLinkText("mailto:" + k).replace(/^mailto:/, "") : k = u.md.normalizeLinkText(k) : k = u.md.normalizeLinkText("http://" + k).replace(/^http:\/\//, "");
            const D = s[h].index;
            if (D > b) {
              const m = new u.Token("text", "", 0);
              m.content = a.slice(b, D), m.level = l, f.push(m);
            }
            const p = new u.Token("link_open", "a", 1);
            p.attrs = [["href", g]], p.level = l++, p.markup = "linkify", p.info = "auto", f.push(p);
            const _ = new u.Token("text", "", 0);
            _.content = k, _.level = l, f.push(_);
            const x = new u.Token("link_close", "a", -1);
            x.level = --l, x.markup = "linkify", x.info = "auto", f.push(x), b = s[h].lastIndex;
          }
          if (b < a.length) {
            const h = new u.Token("text", "", 0);
            h.content = a.slice(b), h.level = l, f.push(h);
          }
          e[t].children = n = y0(n, o, f);
        }
      }
    }
}
const F0 = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, l1 = /\((c|tm|r)\)/i, f1 = /\((c|tm|r)\)/ig, d1 = {
  c: "©",
  r: "®",
  tm: "™"
};
function h1(u, e) {
  return d1[e.toLowerCase()];
}
function b1(u) {
  let e = 0;
  for (let t = u.length - 1; t >= 0; t--) {
    const r = u[t];
    r.type === "text" && !e && (r.content = r.content.replace(f1, h1)), r.type === "link_open" && r.info === "auto" && e--, r.type === "link_close" && r.info === "auto" && e++;
  }
}
function p1(u) {
  let e = 0;
  for (let t = u.length - 1; t >= 0; t--) {
    const r = u[t];
    r.type === "text" && !e && F0.test(r.content) && (r.content = r.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), r.type === "link_open" && r.info === "auto" && e--, r.type === "link_close" && r.info === "auto" && e++;
  }
}
function x1(u) {
  let e;
  if (u.md.options.typographer)
    for (e = u.tokens.length - 1; e >= 0; e--)
      u.tokens[e].type === "inline" && (l1.test(u.tokens[e].content) && b1(u.tokens[e].children), F0.test(u.tokens[e].content) && p1(u.tokens[e].children));
}
const _1 = /['"]/, c0 = /['"]/g, i0 = "’";
function du(u, e, t) {
  return u.slice(0, e) + t + u.slice(e + 1);
}
function m1(u, e) {
  let t;
  const r = [];
  for (let n = 0; n < u.length; n++) {
    const c = u[n], o = u[n].level;
    for (t = r.length - 1; t >= 0 && !(r[t].level <= o); t--)
      ;
    if (r.length = t + 1, c.type !== "text")
      continue;
    let i = c.content, a = 0, s = i.length;
    u:
      for (; a < s; ) {
        c0.lastIndex = a;
        const f = c0.exec(i);
        if (!f)
          break;
        let l = !0, b = !0;
        a = f.index + 1;
        const h = f[0] === "'";
        let d = 32;
        if (f.index - 1 >= 0)
          d = i.charCodeAt(f.index - 1);
        else
          for (t = n - 1; t >= 0 && !(u[t].type === "softbreak" || u[t].type === "hardbreak"); t--)
            if (u[t].content) {
              d = u[t].content.charCodeAt(u[t].content.length - 1);
              break;
            }
        let g = 32;
        if (a < s)
          g = i.charCodeAt(a);
        else
          for (t = n + 1; t < u.length && !(u[t].type === "softbreak" || u[t].type === "hardbreak"); t++)
            if (u[t].content) {
              g = u[t].content.charCodeAt(0);
              break;
            }
        const k = iu(d) || cu(String.fromCharCode(d)), D = iu(g) || cu(String.fromCharCode(g)), p = ru(d), _ = ru(g);
        if (_ ? l = !1 : D && (p || k || (l = !1)), p ? b = !1 : k && (_ || D || (b = !1)), g === 34 && f[0] === '"' && d >= 48 && d <= 57 && (b = l = !1), l && b && (l = k, b = D), !l && !b) {
          h && (c.content = du(c.content, f.index, i0));
          continue;
        }
        if (b)
          for (t = r.length - 1; t >= 0; t--) {
            let x = r[t];
            if (r[t].level < o)
              break;
            if (x.single === h && r[t].level === o) {
              x = r[t];
              let m, C;
              h ? (m = e.md.options.quotes[2], C = e.md.options.quotes[3]) : (m = e.md.options.quotes[0], C = e.md.options.quotes[1]), c.content = du(c.content, f.index, C), u[x.token].content = du(
                u[x.token].content,
                x.pos,
                m
              ), a += C.length - 1, x.token === n && (a += m.length - 1), i = c.content, s = i.length, r.length = t;
              continue u;
            }
          }
        l ? r.push({
          token: n,
          pos: f.index,
          single: h,
          level: o
        }) : b && h && (c.content = du(c.content, f.index, i0));
      }
  }
}
function g1(u) {
  if (u.md.options.typographer)
    for (let e = u.tokens.length - 1; e >= 0; e--)
      u.tokens[e].type !== "inline" || !_1.test(u.tokens[e].content) || m1(u.tokens[e].children, u);
}
function k1(u) {
  let e, t;
  const r = u.tokens, n = r.length;
  for (let c = 0; c < n; c++) {
    if (r[c].type !== "inline")
      continue;
    const o = r[c].children, i = o.length;
    for (e = 0; e < i; e++)
      o[e].type === "text_special" && (o[e].type = "text");
    for (e = t = 0; e < i; e++)
      o[e].type === "text" && e + 1 < i && o[e + 1].type === "text" ? o[e + 1].content = o[e].content + o[e + 1].content : (e !== t && (o[t] = o[e]), t++);
    e !== t && (o.length = t);
  }
}
const Fu = [
  ["normalize", r1],
  ["block", c1],
  ["inline", i1],
  ["linkify", s1],
  ["replacements", x1],
  ["smartquotes", g1],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", k1]
];
function Uu() {
  this.ruler = new T();
  for (let u = 0; u < Fu.length; u++)
    this.ruler.push(Fu[u][0], Fu[u][1]);
}
Uu.prototype.process = function(u) {
  const e = this.ruler.getRules("");
  for (let t = 0, r = e.length; t < r; t++)
    e[t](u);
};
Uu.prototype.State = E0;
function O(u, e, t, r) {
  this.src = u, this.md = e, this.env = t, this.tokens = r, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const n = this.src;
  for (let c = 0, o = 0, i = 0, a = 0, s = n.length, f = !1; o < s; o++) {
    const l = n.charCodeAt(o);
    if (!f)
      if (E(l)) {
        i++, l === 9 ? a += 4 - a % 4 : a++;
        continue;
      } else
        f = !0;
    (l === 10 || o === s - 1) && (l !== 10 && o++, this.bMarks.push(c), this.eMarks.push(o), this.tShift.push(i), this.sCount.push(a), this.bsCount.push(0), f = !1, i = 0, a = 0, c = o + 1);
  }
  this.bMarks.push(n.length), this.eMarks.push(n.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
O.prototype.push = function(u, e, t) {
  const r = new I(u, e, t);
  return r.block = !0, t < 0 && this.level--, r.level = this.level, t > 0 && this.level++, this.tokens.push(r), r;
};
O.prototype.isEmpty = function(e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
O.prototype.skipEmptyLines = function(e) {
  for (let t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
    ;
  return e;
};
O.prototype.skipSpaces = function(e) {
  for (let t = this.src.length; e < t; e++) {
    const r = this.src.charCodeAt(e);
    if (!E(r))
      break;
  }
  return e;
};
O.prototype.skipSpacesBack = function(e, t) {
  if (e <= t)
    return e;
  for (; e > t; )
    if (!E(this.src.charCodeAt(--e)))
      return e + 1;
  return e;
};
O.prototype.skipChars = function(e, t) {
  for (let r = this.src.length; e < r && this.src.charCodeAt(e) === t; e++)
    ;
  return e;
};
O.prototype.skipCharsBack = function(e, t, r) {
  if (e <= r)
    return e;
  for (; e > r; )
    if (t !== this.src.charCodeAt(--e))
      return e + 1;
  return e;
};
O.prototype.getLines = function(e, t, r, n) {
  if (e >= t)
    return "";
  const c = new Array(t - e);
  for (let o = 0, i = e; i < t; i++, o++) {
    let a = 0;
    const s = this.bMarks[i];
    let f = s, l;
    for (i + 1 < t || n ? l = this.eMarks[i] + 1 : l = this.eMarks[i]; f < l && a < r; ) {
      const b = this.src.charCodeAt(f);
      if (E(b))
        b === 9 ? a += 4 - (a + this.bsCount[i]) % 4 : a++;
      else if (f - s < this.tShift[i])
        a++;
      else
        break;
      f++;
    }
    a > r ? c[o] = new Array(a - r + 1).join(" ") + this.src.slice(f, l) : c[o] = this.src.slice(f, l);
  }
  return c.join("");
};
O.prototype.Token = I;
const C1 = 65536;
function Au(u, e) {
  const t = u.bMarks[e] + u.tShift[e], r = u.eMarks[e];
  return u.src.slice(t, r);
}
function o0(u) {
  const e = [], t = u.length;
  let r = 0, n = u.charCodeAt(r), c = !1, o = 0, i = "";
  for (; r < t; )
    n === 124 && (c ? (i += u.substring(o, r - 1), o = r) : (e.push(i + u.substring(o, r)), i = "", o = r + 1)), c = n === 92, r++, n = u.charCodeAt(r);
  return e.push(i + u.substring(o)), e;
}
function y1(u, e, t, r) {
  if (e + 2 > t)
    return !1;
  let n = e + 1;
  if (u.sCount[n] < u.blkIndent || u.sCount[n] - u.blkIndent >= 4)
    return !1;
  let c = u.bMarks[n] + u.tShift[n];
  if (c >= u.eMarks[n])
    return !1;
  const o = u.src.charCodeAt(c++);
  if (o !== 124 && o !== 45 && o !== 58 || c >= u.eMarks[n])
    return !1;
  const i = u.src.charCodeAt(c++);
  if (i !== 124 && i !== 45 && i !== 58 && !E(i) || o === 45 && E(i))
    return !1;
  for (; c < u.eMarks[n]; ) {
    const x = u.src.charCodeAt(c);
    if (x !== 124 && x !== 45 && x !== 58 && !E(x))
      return !1;
    c++;
  }
  let a = Au(u, e + 1), s = a.split("|");
  const f = [];
  for (let x = 0; x < s.length; x++) {
    const m = s[x].trim();
    if (!m) {
      if (x === 0 || x === s.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(m))
      return !1;
    m.charCodeAt(m.length - 1) === 58 ? f.push(m.charCodeAt(0) === 58 ? "center" : "right") : m.charCodeAt(0) === 58 ? f.push("left") : f.push("");
  }
  if (a = Au(u, e).trim(), a.indexOf("|") === -1 || u.sCount[e] - u.blkIndent >= 4)
    return !1;
  s = o0(a), s.length && s[0] === "" && s.shift(), s.length && s[s.length - 1] === "" && s.pop();
  const l = s.length;
  if (l === 0 || l !== f.length)
    return !1;
  if (r)
    return !0;
  const b = u.parentType;
  u.parentType = "table";
  const h = u.md.block.ruler.getRules("blockquote"), d = u.push("table_open", "table", 1), g = [e, 0];
  d.map = g;
  const k = u.push("thead_open", "thead", 1);
  k.map = [e, e + 1];
  const D = u.push("tr_open", "tr", 1);
  D.map = [e, e + 1];
  for (let x = 0; x < s.length; x++) {
    const m = u.push("th_open", "th", 1);
    f[x] && (m.attrs = [["style", "text-align:" + f[x]]]);
    const C = u.push("inline", "", 0);
    C.content = s[x].trim(), C.children = [], u.push("th_close", "th", -1);
  }
  u.push("tr_close", "tr", -1), u.push("thead_close", "thead", -1);
  let p, _ = 0;
  for (n = e + 2; n < t && !(u.sCount[n] < u.blkIndent); n++) {
    let x = !1;
    for (let C = 0, S = h.length; C < S; C++)
      if (h[C](u, n, t, !0)) {
        x = !0;
        break;
      }
    if (x || (a = Au(u, n).trim(), !a) || u.sCount[n] - u.blkIndent >= 4 || (s = o0(a), s.length && s[0] === "" && s.shift(), s.length && s[s.length - 1] === "" && s.pop(), _ += l - s.length, _ > C1))
      break;
    if (n === e + 2) {
      const C = u.push("tbody_open", "tbody", 1);
      C.map = p = [e + 2, 0];
    }
    const m = u.push("tr_open", "tr", 1);
    m.map = [n, n + 1];
    for (let C = 0; C < l; C++) {
      const S = u.push("td_open", "td", 1);
      f[C] && (S.attrs = [["style", "text-align:" + f[C]]]);
      const q = u.push("inline", "", 0);
      q.content = s[C] ? s[C].trim() : "", q.children = [], u.push("td_close", "td", -1);
    }
    u.push("tr_close", "tr", -1);
  }
  return p && (u.push("tbody_close", "tbody", -1), p[1] = n), u.push("table_close", "table", -1), g[1] = n, u.parentType = b, u.line = n, !0;
}
function D1(u, e, t) {
  if (u.sCount[e] - u.blkIndent < 4)
    return !1;
  let r = e + 1, n = r;
  for (; r < t; ) {
    if (u.isEmpty(r)) {
      r++;
      continue;
    }
    if (u.sCount[r] - u.blkIndent >= 4) {
      r++, n = r;
      continue;
    }
    break;
  }
  u.line = n;
  const c = u.push("code_block", "code", 0);
  return c.content = u.getLines(e, n, 4 + u.blkIndent, !1) + `
`, c.map = [e, u.line], !0;
}
function E1(u, e, t, r) {
  let n = u.bMarks[e] + u.tShift[e], c = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4 || n + 3 > c)
    return !1;
  const o = u.src.charCodeAt(n);
  if (o !== 126 && o !== 96)
    return !1;
  let i = n;
  n = u.skipChars(n, o);
  let a = n - i;
  if (a < 3)
    return !1;
  const s = u.src.slice(i, n), f = u.src.slice(n, c);
  if (o === 96 && f.indexOf(String.fromCharCode(o)) >= 0)
    return !1;
  if (r)
    return !0;
  let l = e, b = !1;
  for (; l++, !(l >= t || (n = i = u.bMarks[l] + u.tShift[l], c = u.eMarks[l], n < c && u.sCount[l] < u.blkIndent)); )
    if (u.src.charCodeAt(n) === o && !(u.sCount[l] - u.blkIndent >= 4) && (n = u.skipChars(n, o), !(n - i < a) && (n = u.skipSpaces(n), !(n < c)))) {
      b = !0;
      break;
    }
  a = u.sCount[e], u.line = l + (b ? 1 : 0);
  const h = u.push("fence", "code", 0);
  return h.info = f, h.content = u.getLines(e + 1, l, a, !0), h.markup = s, h.map = [e, u.line], !0;
}
function F1(u, e, t, r) {
  let n = u.bMarks[e] + u.tShift[e], c = u.eMarks[e];
  const o = u.lineMax;
  if (u.sCount[e] - u.blkIndent >= 4 || u.src.charCodeAt(n) !== 62)
    return !1;
  if (r)
    return !0;
  const i = [], a = [], s = [], f = [], l = u.md.block.ruler.getRules("blockquote"), b = u.parentType;
  u.parentType = "blockquote";
  let h = !1, d;
  for (d = e; d < t; d++) {
    const _ = u.sCount[d] < u.blkIndent;
    if (n = u.bMarks[d] + u.tShift[d], c = u.eMarks[d], n >= c)
      break;
    if (u.src.charCodeAt(n++) === 62 && !_) {
      let m = u.sCount[d] + 1, C, S;
      u.src.charCodeAt(n) === 32 ? (n++, m++, S = !1, C = !0) : u.src.charCodeAt(n) === 9 ? (C = !0, (u.bsCount[d] + m) % 4 === 3 ? (n++, m++, S = !1) : S = !0) : C = !1;
      let q = m;
      for (i.push(u.bMarks[d]), u.bMarks[d] = n; n < c; ) {
        const $ = u.src.charCodeAt(n);
        if (E($))
          $ === 9 ? q += 4 - (q + u.bsCount[d] + (S ? 1 : 0)) % 4 : q++;
        else
          break;
        n++;
      }
      h = n >= c, a.push(u.bsCount[d]), u.bsCount[d] = u.sCount[d] + 1 + (C ? 1 : 0), s.push(u.sCount[d]), u.sCount[d] = q - m, f.push(u.tShift[d]), u.tShift[d] = n - u.bMarks[d];
      continue;
    }
    if (h)
      break;
    let x = !1;
    for (let m = 0, C = l.length; m < C; m++)
      if (l[m](u, d, t, !0)) {
        x = !0;
        break;
      }
    if (x) {
      u.lineMax = d, u.blkIndent !== 0 && (i.push(u.bMarks[d]), a.push(u.bsCount[d]), f.push(u.tShift[d]), s.push(u.sCount[d]), u.sCount[d] -= u.blkIndent);
      break;
    }
    i.push(u.bMarks[d]), a.push(u.bsCount[d]), f.push(u.tShift[d]), s.push(u.sCount[d]), u.sCount[d] = -1;
  }
  const g = u.blkIndent;
  u.blkIndent = 0;
  const k = u.push("blockquote_open", "blockquote", 1);
  k.markup = ">";
  const D = [e, 0];
  k.map = D, u.md.block.tokenize(u, e, d);
  const p = u.push("blockquote_close", "blockquote", -1);
  p.markup = ">", u.lineMax = o, u.parentType = b, D[1] = u.line;
  for (let _ = 0; _ < f.length; _++)
    u.bMarks[_ + e] = i[_], u.tShift[_ + e] = f[_], u.sCount[_ + e] = s[_], u.bsCount[_ + e] = a[_];
  return u.blkIndent = g, !0;
}
function A1(u, e, t, r) {
  const n = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4)
    return !1;
  let c = u.bMarks[e] + u.tShift[e];
  const o = u.src.charCodeAt(c++);
  if (o !== 42 && o !== 45 && o !== 95)
    return !1;
  let i = 1;
  for (; c < n; ) {
    const s = u.src.charCodeAt(c++);
    if (s !== o && !E(s))
      return !1;
    s === o && i++;
  }
  if (i < 3)
    return !1;
  if (r)
    return !0;
  u.line = e + 1;
  const a = u.push("hr", "hr", 0);
  return a.map = [e, u.line], a.markup = Array(i + 1).join(String.fromCharCode(o)), !0;
}
function a0(u, e) {
  const t = u.eMarks[e];
  let r = u.bMarks[e] + u.tShift[e];
  const n = u.src.charCodeAt(r++);
  if (n !== 42 && n !== 45 && n !== 43)
    return -1;
  if (r < t) {
    const c = u.src.charCodeAt(r);
    if (!E(c))
      return -1;
  }
  return r;
}
function s0(u, e) {
  const t = u.bMarks[e] + u.tShift[e], r = u.eMarks[e];
  let n = t;
  if (n + 1 >= r)
    return -1;
  let c = u.src.charCodeAt(n++);
  if (c < 48 || c > 57)
    return -1;
  for (; ; ) {
    if (n >= r)
      return -1;
    if (c = u.src.charCodeAt(n++), c >= 48 && c <= 57) {
      if (n - t >= 10)
        return -1;
      continue;
    }
    if (c === 41 || c === 46)
      break;
    return -1;
  }
  return n < r && (c = u.src.charCodeAt(n), !E(c)) ? -1 : n;
}
function w1(u, e) {
  const t = u.level + 2;
  for (let r = e + 2, n = u.tokens.length - 2; r < n; r++)
    u.tokens[r].level === t && u.tokens[r].type === "paragraph_open" && (u.tokens[r + 2].hidden = !0, u.tokens[r].hidden = !0, r += 2);
}
function v1(u, e, t, r) {
  let n, c, o, i, a = e, s = !0;
  if (u.sCount[a] - u.blkIndent >= 4 || u.listIndent >= 0 && u.sCount[a] - u.listIndent >= 4 && u.sCount[a] < u.blkIndent)
    return !1;
  let f = !1;
  r && u.parentType === "paragraph" && u.sCount[a] >= u.blkIndent && (f = !0);
  let l, b, h;
  if ((h = s0(u, a)) >= 0) {
    if (l = !0, o = u.bMarks[a] + u.tShift[a], b = Number(u.src.slice(o, h - 1)), f && b !== 1)
      return !1;
  } else if ((h = a0(u, a)) >= 0)
    l = !1;
  else
    return !1;
  if (f && u.skipSpaces(h) >= u.eMarks[a])
    return !1;
  if (r)
    return !0;
  const d = u.src.charCodeAt(h - 1), g = u.tokens.length;
  l ? (i = u.push("ordered_list_open", "ol", 1), b !== 1 && (i.attrs = [["start", b]])) : i = u.push("bullet_list_open", "ul", 1);
  const k = [a, 0];
  i.map = k, i.markup = String.fromCharCode(d);
  let D = !1;
  const p = u.md.block.ruler.getRules("list"), _ = u.parentType;
  for (u.parentType = "list"; a < t; ) {
    c = h, n = u.eMarks[a];
    const x = u.sCount[a] + h - (u.bMarks[a] + u.tShift[a]);
    let m = x;
    for (; c < n; ) {
      const V = u.src.charCodeAt(c);
      if (V === 9)
        m += 4 - (m + u.bsCount[a]) % 4;
      else if (V === 32)
        m++;
      else
        break;
      c++;
    }
    const C = c;
    let S;
    C >= n ? S = 1 : S = m - x, S > 4 && (S = 1);
    const q = x + S;
    i = u.push("list_item_open", "li", 1), i.markup = String.fromCharCode(d);
    const $ = [a, 0];
    i.map = $, l && (i.info = u.src.slice(o, h - 1));
    const eu = u.tight, yu = u.tShift[a], $0 = u.sCount[a], j0 = u.listIndent;
    if (u.listIndent = u.blkIndent, u.blkIndent = q, u.tight = !0, u.tShift[a] = C - u.bMarks[a], u.sCount[a] = m, C >= n && u.isEmpty(a + 1) ? u.line = Math.min(u.line + 2, t) : u.md.block.tokenize(u, a, t, !0), (!u.tight || D) && (s = !1), D = u.line - a > 1 && u.isEmpty(u.line - 1), u.blkIndent = u.listIndent, u.listIndent = j0, u.tShift[a] = yu, u.sCount[a] = $0, u.tight = eu, i = u.push("list_item_close", "li", -1), i.markup = String.fromCharCode(d), a = u.line, $[1] = a, a >= t || u.sCount[a] < u.blkIndent || u.sCount[a] - u.blkIndent >= 4)
      break;
    let Vu = !1;
    for (let V = 0, U0 = p.length; V < U0; V++)
      if (p[V](u, a, t, !0)) {
        Vu = !0;
        break;
      }
    if (Vu)
      break;
    if (l) {
      if (h = s0(u, a), h < 0)
        break;
      o = u.bMarks[a] + u.tShift[a];
    } else if (h = a0(u, a), h < 0)
      break;
    if (d !== u.src.charCodeAt(h - 1))
      break;
  }
  return l ? i = u.push("ordered_list_close", "ol", -1) : i = u.push("bullet_list_close", "ul", -1), i.markup = String.fromCharCode(d), k[1] = a, u.line = a, u.parentType = _, s && w1(u, g), !0;
}
function S1(u, e, t, r) {
  let n = u.bMarks[e] + u.tShift[e], c = u.eMarks[e], o = e + 1;
  if (u.sCount[e] - u.blkIndent >= 4 || u.src.charCodeAt(n) !== 91)
    return !1;
  function i(p) {
    const _ = u.lineMax;
    if (p >= _ || u.isEmpty(p))
      return null;
    let x = !1;
    if (u.sCount[p] - u.blkIndent > 3 && (x = !0), u.sCount[p] < 0 && (x = !0), !x) {
      const S = u.md.block.ruler.getRules("reference"), q = u.parentType;
      u.parentType = "reference";
      let $ = !1;
      for (let eu = 0, yu = S.length; eu < yu; eu++)
        if (S[eu](u, p, _, !0)) {
          $ = !0;
          break;
        }
      if (u.parentType = q, $)
        return null;
    }
    const m = u.bMarks[p] + u.tShift[p], C = u.eMarks[p];
    return u.src.slice(m, C + 1);
  }
  let a = u.src.slice(n, c + 1);
  c = a.length;
  let s = -1;
  for (n = 1; n < c; n++) {
    const p = a.charCodeAt(n);
    if (p === 91)
      return !1;
    if (p === 93) {
      s = n;
      break;
    } else if (p === 10) {
      const _ = i(o);
      _ !== null && (a += _, c = a.length, o++);
    } else if (p === 92 && (n++, n < c && a.charCodeAt(n) === 10)) {
      const _ = i(o);
      _ !== null && (a += _, c = a.length, o++);
    }
  }
  if (s < 0 || a.charCodeAt(s + 1) !== 58)
    return !1;
  for (n = s + 2; n < c; n++) {
    const p = a.charCodeAt(n);
    if (p === 10) {
      const _ = i(o);
      _ !== null && (a += _, c = a.length, o++);
    } else if (!E(p))
      break;
  }
  const f = u.md.helpers.parseLinkDestination(a, n, c);
  if (!f.ok)
    return !1;
  const l = u.md.normalizeLink(f.str);
  if (!u.md.validateLink(l))
    return !1;
  n = f.pos;
  const b = n, h = o, d = n;
  for (; n < c; n++) {
    const p = a.charCodeAt(n);
    if (p === 10) {
      const _ = i(o);
      _ !== null && (a += _, c = a.length, o++);
    } else if (!E(p))
      break;
  }
  let g = u.md.helpers.parseLinkTitle(a, n, c);
  for (; g.can_continue; ) {
    const p = i(o);
    if (p === null)
      break;
    a += p, n = c, c = a.length, o++, g = u.md.helpers.parseLinkTitle(a, n, c, g);
  }
  let k;
  for (n < c && d !== n && g.ok ? (k = g.str, n = g.pos) : (k = "", n = b, o = h); n < c; ) {
    const p = a.charCodeAt(n);
    if (!E(p))
      break;
    n++;
  }
  if (n < c && a.charCodeAt(n) !== 10 && k)
    for (k = "", n = b, o = h; n < c; ) {
      const p = a.charCodeAt(n);
      if (!E(p))
        break;
      n++;
    }
  if (n < c && a.charCodeAt(n) !== 10)
    return !1;
  const D = gu(a.slice(1, s));
  return D ? (r || (typeof u.env.references > "u" && (u.env.references = {}), typeof u.env.references[D] > "u" && (u.env.references[D] = { title: k, href: l }), u.line = o), !0) : !1;
}
const T1 = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], B1 = "[a-zA-Z_:][a-zA-Z0-9:._-]*", M1 = "[^\"'=<>`\\x00-\\x20]+", z1 = "'[^']*'", q1 = '"[^"]*"', I1 = "(?:" + M1 + "|" + z1 + "|" + q1 + ")", L1 = "(?:\\s+" + B1 + "(?:\\s*=\\s*" + I1 + ")?)", A0 = "<[A-Za-z][A-Za-z0-9\\-]*" + L1 + "*\\s*\\/?>", w0 = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", R1 = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", P1 = "<[?][\\s\\S]*?[?]>", O1 = "<![A-Za-z][^>]*>", N1 = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", $1 = new RegExp("^(?:" + A0 + "|" + w0 + "|" + R1 + "|" + P1 + "|" + O1 + "|" + N1 + ")"), j1 = new RegExp("^(?:" + A0 + "|" + w0 + ")"), W = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + T1.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(j1.source + "\\s*$"), /^$/, !1]
];
function U1(u, e, t, r) {
  let n = u.bMarks[e] + u.tShift[e], c = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4 || !u.md.options.html || u.src.charCodeAt(n) !== 60)
    return !1;
  let o = u.src.slice(n, c), i = 0;
  for (; i < W.length && !W[i][0].test(o); i++)
    ;
  if (i === W.length)
    return !1;
  if (r)
    return W[i][2];
  let a = e + 1;
  if (!W[i][1].test(o)) {
    for (; a < t && !(u.sCount[a] < u.blkIndent); a++)
      if (n = u.bMarks[a] + u.tShift[a], c = u.eMarks[a], o = u.src.slice(n, c), W[i][1].test(o)) {
        o.length !== 0 && a++;
        break;
      }
  }
  u.line = a;
  const s = u.push("html_block", "", 0);
  return s.map = [e, a], s.content = u.getLines(e, a, u.blkIndent, !0), !0;
}
function Z1(u, e, t, r) {
  let n = u.bMarks[e] + u.tShift[e], c = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4)
    return !1;
  let o = u.src.charCodeAt(n);
  if (o !== 35 || n >= c)
    return !1;
  let i = 1;
  for (o = u.src.charCodeAt(++n); o === 35 && n < c && i <= 6; )
    i++, o = u.src.charCodeAt(++n);
  if (i > 6 || n < c && !E(o))
    return !1;
  if (r)
    return !0;
  c = u.skipSpacesBack(c, n);
  const a = u.skipCharsBack(c, 35, n);
  a > n && E(u.src.charCodeAt(a - 1)) && (c = a), u.line = e + 1;
  const s = u.push("heading_open", "h" + String(i), 1);
  s.markup = "########".slice(0, i), s.map = [e, u.line];
  const f = u.push("inline", "", 0);
  f.content = u.src.slice(n, c).trim(), f.map = [e, u.line], f.children = [];
  const l = u.push("heading_close", "h" + String(i), -1);
  return l.markup = "########".slice(0, i), !0;
}
function H1(u, e, t) {
  const r = u.md.block.ruler.getRules("paragraph");
  if (u.sCount[e] - u.blkIndent >= 4)
    return !1;
  const n = u.parentType;
  u.parentType = "paragraph";
  let c = 0, o, i = e + 1;
  for (; i < t && !u.isEmpty(i); i++) {
    if (u.sCount[i] - u.blkIndent > 3)
      continue;
    if (u.sCount[i] >= u.blkIndent) {
      let h = u.bMarks[i] + u.tShift[i];
      const d = u.eMarks[i];
      if (h < d && (o = u.src.charCodeAt(h), (o === 45 || o === 61) && (h = u.skipChars(h, o), h = u.skipSpaces(h), h >= d))) {
        c = o === 61 ? 1 : 2;
        break;
      }
    }
    if (u.sCount[i] < 0)
      continue;
    let b = !1;
    for (let h = 0, d = r.length; h < d; h++)
      if (r[h](u, i, t, !0)) {
        b = !0;
        break;
      }
    if (b)
      break;
  }
  if (!c)
    return !1;
  const a = u.getLines(e, i, u.blkIndent, !1).trim();
  u.line = i + 1;
  const s = u.push("heading_open", "h" + String(c), 1);
  s.markup = String.fromCharCode(o), s.map = [e, u.line];
  const f = u.push("inline", "", 0);
  f.content = a, f.map = [e, u.line - 1], f.children = [];
  const l = u.push("heading_close", "h" + String(c), -1);
  return l.markup = String.fromCharCode(o), u.parentType = n, !0;
}
function V1(u, e, t) {
  const r = u.md.block.ruler.getRules("paragraph"), n = u.parentType;
  let c = e + 1;
  for (u.parentType = "paragraph"; c < t && !u.isEmpty(c); c++) {
    if (u.sCount[c] - u.blkIndent > 3 || u.sCount[c] < 0)
      continue;
    let s = !1;
    for (let f = 0, l = r.length; f < l; f++)
      if (r[f](u, c, t, !0)) {
        s = !0;
        break;
      }
    if (s)
      break;
  }
  const o = u.getLines(e, c, u.blkIndent, !1).trim();
  u.line = c;
  const i = u.push("paragraph_open", "p", 1);
  i.map = [e, u.line];
  const a = u.push("inline", "", 0);
  return a.content = o, a.map = [e, u.line], a.children = [], u.push("paragraph_close", "p", -1), u.parentType = n, !0;
}
const hu = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", y1, ["paragraph", "reference"]],
  ["code", D1],
  ["fence", E1, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", F1, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", A1, ["paragraph", "reference", "blockquote", "list"]],
  ["list", v1, ["paragraph", "reference", "blockquote"]],
  ["reference", S1],
  ["html_block", U1, ["paragraph", "reference", "blockquote"]],
  ["heading", Z1, ["paragraph", "reference", "blockquote"]],
  ["lheading", H1],
  ["paragraph", V1]
];
function ku() {
  this.ruler = new T();
  for (let u = 0; u < hu.length; u++)
    this.ruler.push(hu[u][0], hu[u][1], { alt: (hu[u][2] || []).slice() });
}
ku.prototype.tokenize = function(u, e, t) {
  const r = this.ruler.getRules(""), n = r.length, c = u.md.options.maxNesting;
  let o = e, i = !1;
  for (; o < t && (u.line = o = u.skipEmptyLines(o), !(o >= t || u.sCount[o] < u.blkIndent)); ) {
    if (u.level >= c) {
      u.line = t;
      break;
    }
    const a = u.line;
    let s = !1;
    for (let f = 0; f < n; f++)
      if (s = r[f](u, o, t, !1), s) {
        if (a >= u.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!s)
      throw new Error("none of the block rules matched");
    u.tight = !i, u.isEmpty(u.line - 1) && (i = !0), o = u.line, o < t && u.isEmpty(o) && (i = !0, o++, u.line = o);
  }
};
ku.prototype.parse = function(u, e, t, r) {
  if (!u)
    return;
  const n = new this.State(u, e, t, r);
  this.tokenize(n, n.line, n.lineMax);
};
ku.prototype.State = O;
function su(u, e, t, r) {
  this.src = u, this.env = t, this.md = e, this.tokens = r, this.tokens_meta = Array(r.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
su.prototype.pushPending = function() {
  const u = new I("text", "", 0);
  return u.content = this.pending, u.level = this.pendingLevel, this.tokens.push(u), this.pending = "", u;
};
su.prototype.push = function(u, e, t) {
  this.pending && this.pushPending();
  const r = new I(u, e, t);
  let n = null;
  return t < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), r.level = this.level, t > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], n = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(r), this.tokens_meta.push(n), r;
};
su.prototype.scanDelims = function(u, e) {
  const t = this.posMax, r = this.src.charCodeAt(u), n = u > 0 ? this.src.charCodeAt(u - 1) : 32;
  let c = u;
  for (; c < t && this.src.charCodeAt(c) === r; )
    c++;
  const o = c - u, i = c < t ? this.src.charCodeAt(c) : 32, a = iu(n) || cu(String.fromCharCode(n)), s = iu(i) || cu(String.fromCharCode(i)), f = ru(n), l = ru(i), b = !l && (!s || f || a), h = !f && (!a || l || s);
  return { can_open: b && (e || !h || a), can_close: h && (e || !b || s), length: o };
};
su.prototype.Token = I;
function G1(u) {
  switch (u) {
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
function W1(u, e) {
  let t = u.pos;
  for (; t < u.posMax && !G1(u.src.charCodeAt(t)); )
    t++;
  return t === u.pos ? !1 : (e || (u.pending += u.src.slice(u.pos, t)), u.pos = t, !0);
}
const J1 = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function Q1(u, e) {
  if (!u.md.options.linkify || u.linkLevel > 0)
    return !1;
  const t = u.pos, r = u.posMax;
  if (t + 3 > r || u.src.charCodeAt(t) !== 58 || u.src.charCodeAt(t + 1) !== 47 || u.src.charCodeAt(t + 2) !== 47)
    return !1;
  const n = u.pending.match(J1);
  if (!n)
    return !1;
  const c = n[1], o = u.md.linkify.matchAtStart(u.src.slice(t - c.length));
  if (!o)
    return !1;
  let i = o.url;
  if (i.length <= c.length)
    return !1;
  i = i.replace(/\*+$/, "");
  const a = u.md.normalizeLink(i);
  if (!u.md.validateLink(a))
    return !1;
  if (!e) {
    u.pending = u.pending.slice(0, -c.length);
    const s = u.push("link_open", "a", 1);
    s.attrs = [["href", a]], s.markup = "linkify", s.info = "auto";
    const f = u.push("text", "", 0);
    f.content = u.md.normalizeLinkText(i);
    const l = u.push("link_close", "a", -1);
    l.markup = "linkify", l.info = "auto";
  }
  return u.pos += i.length - c.length, !0;
}
function X1(u, e) {
  let t = u.pos;
  if (u.src.charCodeAt(t) !== 10)
    return !1;
  const r = u.pending.length - 1, n = u.posMax;
  if (!e)
    if (r >= 0 && u.pending.charCodeAt(r) === 32)
      if (r >= 1 && u.pending.charCodeAt(r - 1) === 32) {
        let c = r - 1;
        for (; c >= 1 && u.pending.charCodeAt(c - 1) === 32; )
          c--;
        u.pending = u.pending.slice(0, c), u.push("hardbreak", "br", 0);
      } else
        u.pending = u.pending.slice(0, -1), u.push("softbreak", "br", 0);
    else
      u.push("softbreak", "br", 0);
  for (t++; t < n && E(u.src.charCodeAt(t)); )
    t++;
  return u.pos = t, !0;
}
const Zu = [];
for (let u = 0; u < 256; u++)
  Zu.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(u) {
  Zu[u.charCodeAt(0)] = 1;
});
function K1(u, e) {
  let t = u.pos;
  const r = u.posMax;
  if (u.src.charCodeAt(t) !== 92 || (t++, t >= r))
    return !1;
  let n = u.src.charCodeAt(t);
  if (n === 10) {
    for (e || u.push("hardbreak", "br", 0), t++; t < r && (n = u.src.charCodeAt(t), !!E(n)); )
      t++;
    return u.pos = t, !0;
  }
  let c = u.src[t];
  if (n >= 55296 && n <= 56319 && t + 1 < r) {
    const i = u.src.charCodeAt(t + 1);
    i >= 56320 && i <= 57343 && (c += u.src[t + 1], t++);
  }
  const o = "\\" + c;
  if (!e) {
    const i = u.push("text_special", "", 0);
    n < 256 && Zu[n] !== 0 ? i.content = c : i.content = o, i.markup = o, i.info = "escape";
  }
  return u.pos = t + 1, !0;
}
function Y1(u, e) {
  let t = u.pos;
  if (u.src.charCodeAt(t) !== 96)
    return !1;
  const n = t;
  t++;
  const c = u.posMax;
  for (; t < c && u.src.charCodeAt(t) === 96; )
    t++;
  const o = u.src.slice(n, t), i = o.length;
  if (u.backticksScanned && (u.backticks[i] || 0) <= n)
    return e || (u.pending += o), u.pos += i, !0;
  let a = t, s;
  for (; (s = u.src.indexOf("`", a)) !== -1; ) {
    for (a = s + 1; a < c && u.src.charCodeAt(a) === 96; )
      a++;
    const f = a - s;
    if (f === i) {
      if (!e) {
        const l = u.push("code_inline", "code", 0);
        l.markup = o, l.content = u.src.slice(t, s).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return u.pos = a, !0;
    }
    u.backticks[f] = s;
  }
  return u.backticksScanned = !0, e || (u.pending += o), u.pos += i, !0;
}
function ut(u, e) {
  const t = u.pos, r = u.src.charCodeAt(t);
  if (e || r !== 126)
    return !1;
  const n = u.scanDelims(u.pos, !0);
  let c = n.length;
  const o = String.fromCharCode(r);
  if (c < 2)
    return !1;
  let i;
  c % 2 && (i = u.push("text", "", 0), i.content = o, c--);
  for (let a = 0; a < c; a += 2)
    i = u.push("text", "", 0), i.content = o + o, u.delimiters.push({
      marker: r,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: u.tokens.length - 1,
      end: -1,
      open: n.can_open,
      close: n.can_close
    });
  return u.pos += n.length, !0;
}
function l0(u, e) {
  let t;
  const r = [], n = e.length;
  for (let c = 0; c < n; c++) {
    const o = e[c];
    if (o.marker !== 126 || o.end === -1)
      continue;
    const i = e[o.end];
    t = u.tokens[o.token], t.type = "s_open", t.tag = "s", t.nesting = 1, t.markup = "~~", t.content = "", t = u.tokens[i.token], t.type = "s_close", t.tag = "s", t.nesting = -1, t.markup = "~~", t.content = "", u.tokens[i.token - 1].type === "text" && u.tokens[i.token - 1].content === "~" && r.push(i.token - 1);
  }
  for (; r.length; ) {
    const c = r.pop();
    let o = c + 1;
    for (; o < u.tokens.length && u.tokens[o].type === "s_close"; )
      o++;
    o--, c !== o && (t = u.tokens[o], u.tokens[o] = u.tokens[c], u.tokens[c] = t);
  }
}
function et(u) {
  const e = u.tokens_meta, t = u.tokens_meta.length;
  l0(u, u.delimiters);
  for (let r = 0; r < t; r++)
    e[r] && e[r].delimiters && l0(u, e[r].delimiters);
}
const v0 = {
  tokenize: ut,
  postProcess: et
};
function tt(u, e) {
  const t = u.pos, r = u.src.charCodeAt(t);
  if (e || r !== 95 && r !== 42)
    return !1;
  const n = u.scanDelims(u.pos, r === 42);
  for (let c = 0; c < n.length; c++) {
    const o = u.push("text", "", 0);
    o.content = String.fromCharCode(r), u.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: r,
      // Total length of these series of delimiters.
      //
      length: n.length,
      // A position of the token this delimiter corresponds to.
      //
      token: u.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: n.can_open,
      close: n.can_close
    });
  }
  return u.pos += n.length, !0;
}
function f0(u, e) {
  const t = e.length;
  for (let r = t - 1; r >= 0; r--) {
    const n = e[r];
    if (n.marker !== 95 && n.marker !== 42 || n.end === -1)
      continue;
    const c = e[n.end], o = r > 0 && e[r - 1].end === n.end + 1 && // check that first two markers match and adjacent
    e[r - 1].marker === n.marker && e[r - 1].token === n.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    e[n.end + 1].token === c.token + 1, i = String.fromCharCode(n.marker), a = u.tokens[n.token];
    a.type = o ? "strong_open" : "em_open", a.tag = o ? "strong" : "em", a.nesting = 1, a.markup = o ? i + i : i, a.content = "";
    const s = u.tokens[c.token];
    s.type = o ? "strong_close" : "em_close", s.tag = o ? "strong" : "em", s.nesting = -1, s.markup = o ? i + i : i, s.content = "", o && (u.tokens[e[r - 1].token].content = "", u.tokens[e[n.end + 1].token].content = "", r--);
  }
}
function nt(u) {
  const e = u.tokens_meta, t = u.tokens_meta.length;
  f0(u, u.delimiters);
  for (let r = 0; r < t; r++)
    e[r] && e[r].delimiters && f0(u, e[r].delimiters);
}
const S0 = {
  tokenize: tt,
  postProcess: nt
};
function rt(u, e) {
  let t, r, n, c, o = "", i = "", a = u.pos, s = !0;
  if (u.src.charCodeAt(u.pos) !== 91)
    return !1;
  const f = u.pos, l = u.posMax, b = u.pos + 1, h = u.md.helpers.parseLinkLabel(u, u.pos, !0);
  if (h < 0)
    return !1;
  let d = h + 1;
  if (d < l && u.src.charCodeAt(d) === 40) {
    for (s = !1, d++; d < l && (t = u.src.charCodeAt(d), !(!E(t) && t !== 10)); d++)
      ;
    if (d >= l)
      return !1;
    if (a = d, n = u.md.helpers.parseLinkDestination(u.src, d, u.posMax), n.ok) {
      for (o = u.md.normalizeLink(n.str), u.md.validateLink(o) ? d = n.pos : o = "", a = d; d < l && (t = u.src.charCodeAt(d), !(!E(t) && t !== 10)); d++)
        ;
      if (n = u.md.helpers.parseLinkTitle(u.src, d, u.posMax), d < l && a !== d && n.ok)
        for (i = n.str, d = n.pos; d < l && (t = u.src.charCodeAt(d), !(!E(t) && t !== 10)); d++)
          ;
    }
    (d >= l || u.src.charCodeAt(d) !== 41) && (s = !0), d++;
  }
  if (s) {
    if (typeof u.env.references > "u")
      return !1;
    if (d < l && u.src.charCodeAt(d) === 91 ? (a = d + 1, d = u.md.helpers.parseLinkLabel(u, d), d >= 0 ? r = u.src.slice(a, d++) : d = h + 1) : d = h + 1, r || (r = u.src.slice(b, h)), c = u.env.references[gu(r)], !c)
      return u.pos = f, !1;
    o = c.href, i = c.title;
  }
  if (!e) {
    u.pos = b, u.posMax = h;
    const g = u.push("link_open", "a", 1), k = [["href", o]];
    g.attrs = k, i && k.push(["title", i]), u.linkLevel++, u.md.inline.tokenize(u), u.linkLevel--, u.push("link_close", "a", -1);
  }
  return u.pos = d, u.posMax = l, !0;
}
function ct(u, e) {
  let t, r, n, c, o, i, a, s, f = "";
  const l = u.pos, b = u.posMax;
  if (u.src.charCodeAt(u.pos) !== 33 || u.src.charCodeAt(u.pos + 1) !== 91)
    return !1;
  const h = u.pos + 2, d = u.md.helpers.parseLinkLabel(u, u.pos + 1, !1);
  if (d < 0)
    return !1;
  if (c = d + 1, c < b && u.src.charCodeAt(c) === 40) {
    for (c++; c < b && (t = u.src.charCodeAt(c), !(!E(t) && t !== 10)); c++)
      ;
    if (c >= b)
      return !1;
    for (s = c, i = u.md.helpers.parseLinkDestination(u.src, c, u.posMax), i.ok && (f = u.md.normalizeLink(i.str), u.md.validateLink(f) ? c = i.pos : f = ""), s = c; c < b && (t = u.src.charCodeAt(c), !(!E(t) && t !== 10)); c++)
      ;
    if (i = u.md.helpers.parseLinkTitle(u.src, c, u.posMax), c < b && s !== c && i.ok)
      for (a = i.str, c = i.pos; c < b && (t = u.src.charCodeAt(c), !(!E(t) && t !== 10)); c++)
        ;
    else
      a = "";
    if (c >= b || u.src.charCodeAt(c) !== 41)
      return u.pos = l, !1;
    c++;
  } else {
    if (typeof u.env.references > "u")
      return !1;
    if (c < b && u.src.charCodeAt(c) === 91 ? (s = c + 1, c = u.md.helpers.parseLinkLabel(u, c), c >= 0 ? n = u.src.slice(s, c++) : c = d + 1) : c = d + 1, n || (n = u.src.slice(h, d)), o = u.env.references[gu(n)], !o)
      return u.pos = l, !1;
    f = o.href, a = o.title;
  }
  if (!e) {
    r = u.src.slice(h, d);
    const g = [];
    u.md.inline.parse(
      r,
      u.md,
      u.env,
      g
    );
    const k = u.push("image", "img", 0), D = [["src", f], ["alt", ""]];
    k.attrs = D, k.children = g, k.content = r, a && D.push(["title", a]);
  }
  return u.pos = c, u.posMax = b, !0;
}
const it = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, ot = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function at(u, e) {
  let t = u.pos;
  if (u.src.charCodeAt(t) !== 60)
    return !1;
  const r = u.pos, n = u.posMax;
  for (; ; ) {
    if (++t >= n)
      return !1;
    const o = u.src.charCodeAt(t);
    if (o === 60)
      return !1;
    if (o === 62)
      break;
  }
  const c = u.src.slice(r + 1, t);
  if (ot.test(c)) {
    const o = u.md.normalizeLink(c);
    if (!u.md.validateLink(o))
      return !1;
    if (!e) {
      const i = u.push("link_open", "a", 1);
      i.attrs = [["href", o]], i.markup = "autolink", i.info = "auto";
      const a = u.push("text", "", 0);
      a.content = u.md.normalizeLinkText(c);
      const s = u.push("link_close", "a", -1);
      s.markup = "autolink", s.info = "auto";
    }
    return u.pos += c.length + 2, !0;
  }
  if (it.test(c)) {
    const o = u.md.normalizeLink("mailto:" + c);
    if (!u.md.validateLink(o))
      return !1;
    if (!e) {
      const i = u.push("link_open", "a", 1);
      i.attrs = [["href", o]], i.markup = "autolink", i.info = "auto";
      const a = u.push("text", "", 0);
      a.content = u.md.normalizeLinkText(c);
      const s = u.push("link_close", "a", -1);
      s.markup = "autolink", s.info = "auto";
    }
    return u.pos += c.length + 2, !0;
  }
  return !1;
}
function st(u) {
  return /^<a[>\s]/i.test(u);
}
function lt(u) {
  return /^<\/a\s*>/i.test(u);
}
function ft(u) {
  const e = u | 32;
  return e >= 97 && e <= 122;
}
function dt(u, e) {
  if (!u.md.options.html)
    return !1;
  const t = u.posMax, r = u.pos;
  if (u.src.charCodeAt(r) !== 60 || r + 2 >= t)
    return !1;
  const n = u.src.charCodeAt(r + 1);
  if (n !== 33 && n !== 63 && n !== 47 && !ft(n))
    return !1;
  const c = u.src.slice(r).match($1);
  if (!c)
    return !1;
  if (!e) {
    const o = u.push("html_inline", "", 0);
    o.content = c[0], st(o.content) && u.linkLevel++, lt(o.content) && u.linkLevel--;
  }
  return u.pos += c[0].length, !0;
}
const ht = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, bt = /^&([a-z][a-z0-9]{1,31});/i;
function pt(u, e) {
  const t = u.pos, r = u.posMax;
  if (u.src.charCodeAt(t) !== 38 || t + 1 >= r)
    return !1;
  if (u.src.charCodeAt(t + 1) === 35) {
    const c = u.src.slice(t).match(ht);
    if (c) {
      if (!e) {
        const o = c[1][0].toLowerCase() === "x" ? parseInt(c[1].slice(1), 16) : parseInt(c[1], 10), i = u.push("text_special", "", 0);
        i.content = ju(o) ? xu(o) : xu(65533), i.markup = c[0], i.info = "entity";
      }
      return u.pos += c[0].length, !0;
    }
  } else {
    const c = u.src.slice(t).match(bt);
    if (c) {
      const o = C0(c[0]);
      if (o !== c[0]) {
        if (!e) {
          const i = u.push("text_special", "", 0);
          i.content = o, i.markup = c[0], i.info = "entity";
        }
        return u.pos += c[0].length, !0;
      }
    }
  }
  return !1;
}
function d0(u) {
  const e = {}, t = u.length;
  if (!t)
    return;
  let r = 0, n = -2;
  const c = [];
  for (let o = 0; o < t; o++) {
    const i = u[o];
    if (c.push(0), (u[r].marker !== i.marker || n !== i.token - 1) && (r = o), n = i.token, i.length = i.length || 0, !i.close)
      continue;
    e.hasOwnProperty(i.marker) || (e[i.marker] = [-1, -1, -1, -1, -1, -1]);
    const a = e[i.marker][(i.open ? 3 : 0) + i.length % 3];
    let s = r - c[r] - 1, f = s;
    for (; s > a; s -= c[s] + 1) {
      const l = u[s];
      if (l.marker === i.marker && l.open && l.end < 0) {
        let b = !1;
        if ((l.close || i.open) && (l.length + i.length) % 3 === 0 && (l.length % 3 !== 0 || i.length % 3 !== 0) && (b = !0), !b) {
          const h = s > 0 && !u[s - 1].open ? c[s - 1] + 1 : 0;
          c[o] = o - s + h, c[s] = h, i.open = !1, l.end = o, l.close = !1, f = -1, n = -2;
          break;
        }
      }
    }
    f !== -1 && (e[i.marker][(i.open ? 3 : 0) + (i.length || 0) % 3] = f);
  }
}
function xt(u) {
  const e = u.tokens_meta, t = u.tokens_meta.length;
  d0(u.delimiters);
  for (let r = 0; r < t; r++)
    e[r] && e[r].delimiters && d0(e[r].delimiters);
}
function _t(u) {
  let e, t, r = 0;
  const n = u.tokens, c = u.tokens.length;
  for (e = t = 0; e < c; e++)
    n[e].nesting < 0 && r--, n[e].level = r, n[e].nesting > 0 && r++, n[e].type === "text" && e + 1 < c && n[e + 1].type === "text" ? n[e + 1].content = n[e].content + n[e + 1].content : (e !== t && (n[t] = n[e]), t++);
  e !== t && (n.length = t);
}
const wu = [
  ["text", W1],
  ["linkify", Q1],
  ["newline", X1],
  ["escape", K1],
  ["backticks", Y1],
  ["strikethrough", v0.tokenize],
  ["emphasis", S0.tokenize],
  ["link", rt],
  ["image", ct],
  ["autolink", at],
  ["html_inline", dt],
  ["entity", pt]
], vu = [
  ["balance_pairs", xt],
  ["strikethrough", v0.postProcess],
  ["emphasis", S0.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", _t]
];
function lu() {
  this.ruler = new T();
  for (let u = 0; u < wu.length; u++)
    this.ruler.push(wu[u][0], wu[u][1]);
  this.ruler2 = new T();
  for (let u = 0; u < vu.length; u++)
    this.ruler2.push(vu[u][0], vu[u][1]);
}
lu.prototype.skipToken = function(u) {
  const e = u.pos, t = this.ruler.getRules(""), r = t.length, n = u.md.options.maxNesting, c = u.cache;
  if (typeof c[e] < "u") {
    u.pos = c[e];
    return;
  }
  let o = !1;
  if (u.level < n) {
    for (let i = 0; i < r; i++)
      if (u.level++, o = t[i](u, !0), u.level--, o) {
        if (e >= u.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    u.pos = u.posMax;
  o || u.pos++, c[e] = u.pos;
};
lu.prototype.tokenize = function(u) {
  const e = this.ruler.getRules(""), t = e.length, r = u.posMax, n = u.md.options.maxNesting;
  for (; u.pos < r; ) {
    const c = u.pos;
    let o = !1;
    if (u.level < n) {
      for (let i = 0; i < t; i++)
        if (o = e[i](u, !1), o) {
          if (c >= u.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (o) {
      if (u.pos >= r)
        break;
      continue;
    }
    u.pending += u.src[u.pos++];
  }
  u.pending && u.pushPending();
};
lu.prototype.parse = function(u, e, t, r) {
  const n = new this.State(u, e, t, r);
  this.tokenize(n);
  const c = this.ruler2.getRules(""), o = c.length;
  for (let i = 0; i < o; i++)
    c[i](n);
};
lu.prototype.State = su;
function mt(u) {
  const e = {};
  u = u || {}, e.src_Any = x0.source, e.src_Cc = _0.source, e.src_Z = g0.source, e.src_P = Nu.source, e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"), e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
  const t = "[><｜]";
  return e.src_pseudo_letter = "(?:(?!" + t + "|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|" + t + "|" + e.src_ZPCc + ")(?!" + (u["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|" + t + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + e.src_ZCc + "|[.]|$)|" + (u["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + e.src_ZCc + "|$)|;(?!" + e.src_ZCc + "|$)|\\!+(?!" + e.src_ZCc + "|[!]|$)|\\?(?!" + e.src_ZCc + "|[?]|$))+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = "(^|" + t + '|"|\\(|' + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e;
}
function Lu(u) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
    t && Object.keys(t).forEach(function(r) {
      u[r] = t[r];
    });
  }), u;
}
function Cu(u) {
  return Object.prototype.toString.call(u);
}
function gt(u) {
  return Cu(u) === "[object String]";
}
function kt(u) {
  return Cu(u) === "[object Object]";
}
function Ct(u) {
  return Cu(u) === "[object RegExp]";
}
function h0(u) {
  return Cu(u) === "[object Function]";
}
function yt(u) {
  return u.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const T0 = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function Dt(u) {
  return Object.keys(u || {}).reduce(function(e, t) {
    return e || T0.hasOwnProperty(t);
  }, !1);
}
const Et = {
  "http:": {
    validate: function(u, e, t) {
      const r = u.slice(e);
      return t.re.http || (t.re.http = new RegExp(
        "^\\/\\/" + t.re.src_auth + t.re.src_host_port_strict + t.re.src_path,
        "i"
      )), t.re.http.test(r) ? r.match(t.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(u, e, t) {
      const r = u.slice(e);
      return t.re.no_http || (t.re.no_http = new RegExp(
        "^" + t.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + t.re.src_domain + ")\\.)+" + t.re.src_domain_root + ")" + t.re.src_port + t.re.src_host_terminator + t.re.src_path,
        "i"
      )), t.re.no_http.test(r) ? e >= 3 && u[e - 3] === ":" || e >= 3 && u[e - 3] === "/" ? 0 : r.match(t.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(u, e, t) {
      const r = u.slice(e);
      return t.re.mailto || (t.re.mailto = new RegExp(
        "^" + t.re.src_email_name + "@" + t.re.src_host_strict,
        "i"
      )), t.re.mailto.test(r) ? r.match(t.re.mailto)[0].length : 0;
    }
  }
}, Ft = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", At = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function wt(u) {
  u.__index__ = -1, u.__text_cache__ = "";
}
function vt(u) {
  return function(e, t) {
    const r = e.slice(t);
    return u.test(r) ? r.match(u)[0].length : 0;
  };
}
function b0() {
  return function(u, e) {
    e.normalize(u);
  };
}
function _u(u) {
  const e = u.re = mt(u.__opts__), t = u.__tlds__.slice();
  u.onCompile(), u.__tlds_replaced__ || t.push(Ft), t.push(e.src_xn), e.src_tlds = t.join("|");
  function r(i) {
    return i.replace("%TLDS%", e.src_tlds);
  }
  e.email_fuzzy = RegExp(r(e.tpl_email_fuzzy), "i"), e.link_fuzzy = RegExp(r(e.tpl_link_fuzzy), "i"), e.link_no_ip_fuzzy = RegExp(r(e.tpl_link_no_ip_fuzzy), "i"), e.host_fuzzy_test = RegExp(r(e.tpl_host_fuzzy_test), "i");
  const n = [];
  u.__compiled__ = {};
  function c(i, a) {
    throw new Error('(LinkifyIt) Invalid schema "' + i + '": ' + a);
  }
  Object.keys(u.__schemas__).forEach(function(i) {
    const a = u.__schemas__[i];
    if (a === null)
      return;
    const s = { validate: null, link: null };
    if (u.__compiled__[i] = s, kt(a)) {
      Ct(a.validate) ? s.validate = vt(a.validate) : h0(a.validate) ? s.validate = a.validate : c(i, a), h0(a.normalize) ? s.normalize = a.normalize : a.normalize ? c(i, a) : s.normalize = b0();
      return;
    }
    if (gt(a)) {
      n.push(i);
      return;
    }
    c(i, a);
  }), n.forEach(function(i) {
    u.__compiled__[u.__schemas__[i]] && (u.__compiled__[i].validate = u.__compiled__[u.__schemas__[i]].validate, u.__compiled__[i].normalize = u.__compiled__[u.__schemas__[i]].normalize);
  }), u.__compiled__[""] = { validate: null, normalize: b0() };
  const o = Object.keys(u.__compiled__).filter(function(i) {
    return i.length > 0 && u.__compiled__[i];
  }).map(yt).join("|");
  u.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + o + ")", "i"), u.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + o + ")", "ig"), u.re.schema_at_start = RegExp("^" + u.re.schema_search.source, "i"), u.re.pretest = RegExp(
    "(" + u.re.schema_test.source + ")|(" + u.re.host_fuzzy_test.source + ")|@",
    "i"
  ), wt(u);
}
function St(u, e) {
  const t = u.__index__, r = u.__last_index__, n = u.__text_cache__.slice(t, r);
  this.schema = u.__schema__.toLowerCase(), this.index = t + e, this.lastIndex = r + e, this.raw = n, this.text = n, this.url = n;
}
function Ru(u, e) {
  const t = new St(u, e);
  return u.__compiled__[t.schema].normalize(t, u), t;
}
function M(u, e) {
  if (!(this instanceof M))
    return new M(u, e);
  e || Dt(u) && (e = u, u = {}), this.__opts__ = Lu({}, T0, e), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Lu({}, Et, u), this.__compiled__ = {}, this.__tlds__ = At, this.__tlds_replaced__ = !1, this.re = {}, _u(this);
}
M.prototype.add = function(e, t) {
  return this.__schemas__[e] = t, _u(this), this;
};
M.prototype.set = function(e) {
  return this.__opts__ = Lu(this.__opts__, e), this;
};
M.prototype.test = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length)
    return !1;
  let t, r, n, c, o, i, a, s, f;
  if (this.re.schema_test.test(e)) {
    for (a = this.re.schema_search, a.lastIndex = 0; (t = a.exec(e)) !== null; )
      if (c = this.testSchemaAt(e, t[2], a.lastIndex), c) {
        this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + c;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (s = e.search(this.re.host_fuzzy_test), s >= 0 && (this.__index__ < 0 || s < this.__index__) && (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (o = r.index + r[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = r.index + r[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (f = e.indexOf("@"), f >= 0 && (n = e.match(this.re.email_fuzzy)) !== null && (o = n.index + n[1].length, i = n.index + n[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = i))), this.__index__ >= 0;
};
M.prototype.pretest = function(e) {
  return this.re.pretest.test(e);
};
M.prototype.testSchemaAt = function(e, t, r) {
  return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, r, this) : 0;
};
M.prototype.match = function(e) {
  const t = [];
  let r = 0;
  this.__index__ >= 0 && this.__text_cache__ === e && (t.push(Ru(this, r)), r = this.__last_index__);
  let n = r ? e.slice(r) : e;
  for (; this.test(n); )
    t.push(Ru(this, r)), n = n.slice(this.__last_index__), r += this.__last_index__;
  return t.length ? t : null;
};
M.prototype.matchAtStart = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length)
    return null;
  const t = this.re.schema_at_start.exec(e);
  if (!t)
    return null;
  const r = this.testSchemaAt(e, t[2], t[0].length);
  return r ? (this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + r, Ru(this, 0)) : null;
};
M.prototype.tlds = function(e, t) {
  return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(r, n, c) {
    return r !== c[n - 1];
  }).reverse(), _u(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, _u(this), this);
};
M.prototype.normalize = function(e) {
  e.schema || (e.url = "http://" + e.url), e.schema === "mailto:" && !/^mailto:/i.test(e.url) && (e.url = "mailto:" + e.url);
};
M.prototype.onCompile = function() {
};
const Q = 2147483647, L = 36, Hu = 1, ou = 26, Tt = 38, Bt = 700, B0 = 72, M0 = 128, z0 = "-", Mt = /^xn--/, zt = /[^\0-\x7F]/, qt = /[\x2E\u3002\uFF0E\uFF61]/g, It = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, Su = L - Hu, R = Math.floor, Tu = String.fromCharCode;
function j(u) {
  throw new RangeError(It[u]);
}
function Lt(u, e) {
  const t = [];
  let r = u.length;
  for (; r--; )
    t[r] = e(u[r]);
  return t;
}
function q0(u, e) {
  const t = u.split("@");
  let r = "";
  t.length > 1 && (r = t[0] + "@", u = t[1]), u = u.replace(qt, ".");
  const n = u.split("."), c = Lt(n, e).join(".");
  return r + c;
}
function I0(u) {
  const e = [];
  let t = 0;
  const r = u.length;
  for (; t < r; ) {
    const n = u.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      const c = u.charCodeAt(t++);
      (c & 64512) == 56320 ? e.push(((n & 1023) << 10) + (c & 1023) + 65536) : (e.push(n), t--);
    } else
      e.push(n);
  }
  return e;
}
const Rt = (u) => String.fromCodePoint(...u), Pt = function(u) {
  return u >= 48 && u < 58 ? 26 + (u - 48) : u >= 65 && u < 91 ? u - 65 : u >= 97 && u < 123 ? u - 97 : L;
}, p0 = function(u, e) {
  return u + 22 + 75 * (u < 26) - ((e != 0) << 5);
}, L0 = function(u, e, t) {
  let r = 0;
  for (u = t ? R(u / Bt) : u >> 1, u += R(u / e); u > Su * ou >> 1; r += L)
    u = R(u / Su);
  return R(r + (Su + 1) * u / (u + Tt));
}, R0 = function(u) {
  const e = [], t = u.length;
  let r = 0, n = M0, c = B0, o = u.lastIndexOf(z0);
  o < 0 && (o = 0);
  for (let i = 0; i < o; ++i)
    u.charCodeAt(i) >= 128 && j("not-basic"), e.push(u.charCodeAt(i));
  for (let i = o > 0 ? o + 1 : 0; i < t; ) {
    const a = r;
    for (let f = 1, l = L; ; l += L) {
      i >= t && j("invalid-input");
      const b = Pt(u.charCodeAt(i++));
      b >= L && j("invalid-input"), b > R((Q - r) / f) && j("overflow"), r += b * f;
      const h = l <= c ? Hu : l >= c + ou ? ou : l - c;
      if (b < h)
        break;
      const d = L - h;
      f > R(Q / d) && j("overflow"), f *= d;
    }
    const s = e.length + 1;
    c = L0(r - a, s, a == 0), R(r / s) > Q - n && j("overflow"), n += R(r / s), r %= s, e.splice(r++, 0, n);
  }
  return String.fromCodePoint(...e);
}, P0 = function(u) {
  const e = [];
  u = I0(u);
  const t = u.length;
  let r = M0, n = 0, c = B0;
  for (const a of u)
    a < 128 && e.push(Tu(a));
  const o = e.length;
  let i = o;
  for (o && e.push(z0); i < t; ) {
    let a = Q;
    for (const f of u)
      f >= r && f < a && (a = f);
    const s = i + 1;
    a - r > R((Q - n) / s) && j("overflow"), n += (a - r) * s, r = a;
    for (const f of u)
      if (f < r && ++n > Q && j("overflow"), f === r) {
        let l = n;
        for (let b = L; ; b += L) {
          const h = b <= c ? Hu : b >= c + ou ? ou : b - c;
          if (l < h)
            break;
          const d = l - h, g = L - h;
          e.push(
            Tu(p0(h + d % g, 0))
          ), l = R(d / g);
        }
        e.push(Tu(p0(l, 0))), c = L0(n, s, i === o), n = 0, ++i;
      }
    ++n, ++r;
  }
  return e.join("");
}, Ot = function(u) {
  return q0(u, function(e) {
    return Mt.test(e) ? R0(e.slice(4).toLowerCase()) : e;
  });
}, Nt = function(u) {
  return q0(u, function(e) {
    return zt.test(e) ? "xn--" + P0(e) : e;
  });
}, O0 = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: I0,
    encode: Rt
  },
  decode: R0,
  encode: P0,
  toASCII: Nt,
  toUnicode: Ot
}, $t = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, jt = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, Ut = {
  options: {
    // Enable HTML tags in source
    html: !0,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !0,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, Zt = {
  default: $t,
  zero: jt,
  commonmark: Ut
}, Ht = /^(vbscript|javascript|file|data):/, Vt = /^data:image\/(gif|png|jpeg|webp);/;
function Gt(u) {
  const e = u.trim().toLowerCase();
  return Ht.test(e) ? Vt.test(e) : !0;
}
const N0 = ["http:", "https:", "mailto:"];
function Wt(u) {
  const e = Ou(u, !0);
  if (e.hostname && (!e.protocol || N0.indexOf(e.protocol) >= 0))
    try {
      e.hostname = O0.toASCII(e.hostname);
    } catch {
    }
  return au(Pu(e));
}
function Jt(u) {
  const e = Ou(u, !0);
  if (e.hostname && (!e.protocol || N0.indexOf(e.protocol) >= 0))
    try {
      e.hostname = O0.toUnicode(e.hostname);
    } catch {
    }
  return X(Pu(e), X.defaultChars + "%");
}
function z(u, e) {
  if (!(this instanceof z))
    return new z(u, e);
  e || $u(u) || (e = u || {}, u = "default"), this.inline = new lu(), this.block = new ku(), this.core = new Uu(), this.renderer = new uu(), this.linkify = new M(), this.validateLink = Gt, this.normalizeLink = Wt, this.normalizeLinkText = Jt, this.utils = Xe, this.helpers = mu({}, e1), this.options = {}, this.configure(u), e && this.set(e);
}
z.prototype.set = function(u) {
  return mu(this.options, u), this;
};
z.prototype.configure = function(u) {
  const e = this;
  if ($u(u)) {
    const t = u;
    if (u = Zt[t], !u)
      throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
  }
  if (!u)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return u.options && e.set(u.options), u.components && Object.keys(u.components).forEach(function(t) {
    u.components[t].rules && e[t].ruler.enableOnly(u.components[t].rules), u.components[t].rules2 && e[t].ruler2.enableOnly(u.components[t].rules2);
  }), this;
};
z.prototype.enable = function(u, e) {
  let t = [];
  Array.isArray(u) || (u = [u]), ["core", "block", "inline"].forEach(function(n) {
    t = t.concat(this[n].ruler.enable(u, !0));
  }, this), t = t.concat(this.inline.ruler2.enable(u, !0));
  const r = u.filter(function(n) {
    return t.indexOf(n) < 0;
  });
  if (r.length && !e)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
  return this;
};
z.prototype.disable = function(u, e) {
  let t = [];
  Array.isArray(u) || (u = [u]), ["core", "block", "inline"].forEach(function(n) {
    t = t.concat(this[n].ruler.disable(u, !0));
  }, this), t = t.concat(this.inline.ruler2.disable(u, !0));
  const r = u.filter(function(n) {
    return t.indexOf(n) < 0;
  });
  if (r.length && !e)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
  return this;
};
z.prototype.use = function(u) {
  const e = [this].concat(Array.prototype.slice.call(arguments, 1));
  return u.apply(u, e), this;
};
z.prototype.parse = function(u, e) {
  if (typeof u != "string")
    throw new Error("Input data should be a String");
  const t = new this.core.State(u, this, e);
  return this.core.process(t), t.tokens;
};
z.prototype.render = function(u, e) {
  return e = e || {}, this.renderer.render(this.parse(u, e), this.options, e);
};
z.prototype.parseInline = function(u, e) {
  const t = new this.core.State(u, this, e);
  return t.inlineMode = !0, this.core.process(t), t.tokens;
};
z.prototype.renderInline = function(u, e) {
  return e = e || {}, this.renderer.render(this.parseInline(u, e), this.options, e);
};
const Qt = ["onMouseenter", "onMouseleave"], Xt = ["innerHTML"], Kt = {
  key: 0,
  class: "flex justify-start"
}, Yt = { class: "flex space-x-1 px-3 py-2 bg-gray-100 rounded-2xl rounded-bl-none" }, un = /* @__PURE__ */ Y({
  __name: "ChatMessages",
  props: {
    layout: {},
    messages: {},
    isLoading: { type: Boolean }
  },
  setup(u) {
    const e = u, t = new z({
      html: !1,
      breaks: !0,
      linkify: !0
    }), r = (i) => t.render(i), n = (i) => {
      i && (i.scrollTop = i.scrollHeight);
    }, c = B(null);
    Wu(
      () => [e.messages, e.isLoading],
      () => {
        W0(() => {
          n(c.value);
        });
      },
      { deep: !0 }
    );
    const o = B([]);
    return Wu(() => e.messages.length, (i) => {
      o.value = new Array(i).fill(!1);
    }), (i, a) => (F(), A("div", {
      ref_key: "messagesContainer",
      ref: c,
      class: N([i.layout === "widget" ? "gap-1" : "gap-2.5 px-10", "flex flex-col overflow-y-auto p-3 space-y-2 flex-1 mb-20"])
    }, [
      (F(!0), A(Bu, null, Mu(i.messages, (s, f) => (F(), A("div", {
        key: f,
        class: N([[s.isUser ? "justify-end" : "justify-start"], "flex relative"]),
        onMouseenter: (l) => o.value[f] = !0,
        onMouseleave: (l) => o.value[f] = !1
      }, [
        s.isUser ? zu((F(), qu(Xu, {
          key: 0,
          text: s.text
        }, null, 8, ["text"])), [
          [Ju, o.value[f]]
        ]) : J("", !0),
        y("div", {
          class: N([[
            s.isUser ? "bg-blue-500 text-white rounded-br-none" : "bg-gray-100 text-gray-800 rounded-bl-none",
            i.layout === "widget" ? "" : "!text-[15px]"
          ], "inline-block break-words max-w-[82%] px-3 py-2.5 pb-1.5 rounded-2xl text-sm whitespace-pre-wrap"])
        }, [
          y("div", {
            class: "grid markdown-body",
            innerHTML: r(s.text)
          }, null, 8, Xt),
          y("div", {
            class: N([[s.isUser ? "text-stone-300" : "text-gray-400"], "text-xs pt-1.5"])
          }, "14:40", 2)
        ], 2),
        s.isUser ? J("", !0) : zu((F(), qu(Xu, {
          key: 1,
          text: s.text
        }, null, 8, ["text"])), [
          [Ju, o.value[f]]
        ])
      ], 42, Qt))), 128)),
      i.isLoading ? (F(), A("div", Kt, [
        y("div", Yt, [
          (F(), A(Bu, null, Mu(3, (s) => y("div", {
            key: s,
            style: nu({ animationDelay: `${(s - 1) * 0.1}s` }),
            class: "w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"
          }, null, 4)), 64))
        ])
      ])) : J("", !0)
    ], 2));
  }
});
const en = (u, e) => {
  const t = u.__vccOpts || u;
  for (const [r, n] of e)
    t[r] = n;
  return t;
}, tn = /* @__PURE__ */ en(un, [["__scopeId", "data-v-6ad99424"]]), nn = { class: "flex space-x-1 relative" }, rn = ["disabled"], cn = /* @__PURE__ */ Y({
  __name: "ChatInput",
  props: {
    disabled: { type: Boolean, default: !1 },
    layout: {},
    theme: { default: () => ({
      primary: "#1972f5"
    }) }
  },
  emits: ["send", "stop"],
  setup(u, { emit: e }) {
    const t = u, r = e, n = B(""), c = () => {
      n.value.trim() && !t.disabled && (r("send", n.value), n.value = "");
    }, o = () => {
      r("stop");
    };
    return (i, a) => (F(), A("div", {
      class: N([i.layout === "widget" ? "px-3" : "px-[8rem]", "p-2 pt-0 w-full absolute bottom-0 bg-white rounded-xl"])
    }, [
      y("div", nn, [
        zu(y("input", {
          "onUpdate:modelValue": a[0] || (a[0] = (s) => n.value = s),
          class: N([i.layout === "widget" ? "" : "py-3 p-4 !text-base", "flex-1 p-3 py-2.5 pr-11 text-sm border rounded-full focus:outline-none focus:border-[var(--focus-border-color)]"]),
          disabled: i.disabled,
          style: nu({ "--focus-border-color": i.theme.primary }),
          placeholder: "Type a message...",
          type: "text",
          onKeyup: J0(c, ["enter"])
        }, null, 46, rn), [
          [Q0, n.value]
        ]),
        i.disabled ? (F(), A("button", {
          key: 1,
          class: "text-center rounded-lg transition-colors duration-300 hover:brightness-75 disabled:opacity-50 absolute right-3 top-1/2 -translate-y-1/2",
          onClick: o
        }, a[2] || (a[2] = [
          y("svg", {
            class: "!fill-red-500",
            height: "26",
            viewBox: "0 0 24 24",
            width: "26",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            y("path", { d: "M8 16h8V8H8zm4 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" })
          ], -1)
        ]))) : (F(), A("button", {
          key: 0,
          style: nu(`color: ${i.theme.primary}`),
          class: "text-center rounded-lg transition-colors duration-300 hover:brightness-75 disabled:opacity-50 absolute right-3 top-1/2 -translate-y-1/2",
          onClick: c
        }, a[1] || (a[1] = [
          y("svg", {
            height: "26",
            viewBox: "0 0 26 26",
            width: "26",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            y("g", { fill: "none" }, [
              y("path", { d: "M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" }),
              y("path", {
                d: "m21.433 4.861l-6 15.5a1 1 0 0 1-1.624.362l-3.382-3.235l-2.074 2.073a.5.5 0 0 1-.853-.354v-4.519L2.309 9.723a1 1 0 0 1 .442-1.691l17.5-4.5a1 1 0 0 1 1.181 1.329ZM19 6.001L8.032 13.152l1.735 1.66L19 6Z",
                fill: "currentColor"
              })
            ])
          ], -1)
        ]), 4))
      ]),
      y("div", {
        class: N([i.layout === "widget" ? "" : "!text-sm", "flex justify-center items-center mt-2 text-xs text-gray-500"])
      }, a[3] || (a[3] = [
        X0(" Powered by  "),
        y("a", {
          class: "text-blue-500",
          href: "https://github.com/tycoding/langchat",
          target: "_blank"
        }, " LangChat ", -1)
      ]), 2)
    ], 2));
  }
}), on = {
  key: 0,
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, an = {
  key: 1,
  id: "closeIcon",
  fill: "none",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, sn = /* @__PURE__ */ Y({
  __name: "ChatToggle",
  props: {
    isOpen: { type: Boolean, default: !1 },
    theme: { default: () => ({
      primary: "#1972f5"
    }) }
  },
  emits: ["toggle"],
  setup(u, { emit: e }) {
    const t = e;
    return (r, n) => {
      var c;
      return F(), A("button", {
        style: nu({
          backgroundColor: (c = r.theme) == null ? void 0 : c.primary
        }),
        class: "hover:brightness-90 !focus:outline-0 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110",
        onClick: n[0] || (n[0] = (o) => t("toggle"))
      }, [
        r.isOpen ? (F(), A("svg", an, n[2] || (n[2] = [
          y("path", {
            d: "M18 18L6 6M6 18L18 6",
            stroke: "white",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2"
          }, null, -1)
        ]))) : (F(), A("svg", on, n[1] || (n[1] = [
          y("path", {
            "clip-rule": "evenodd",
            d: "M7.7586 2L16.2412 2C17.0462 1.99999 17.7105 1.99998 18.2517 2.04419C18.8138 2.09012 19.3305 2.18868 19.8159 2.43598C20.5685 2.81947 21.1804 3.43139 21.5639 4.18404C21.8112 4.66937 21.9098 5.18608 21.9557 5.74818C21.9999 6.28937 21.9999 6.95373 21.9999 7.7587L22 14.1376C22.0004 14.933 22.0007 15.5236 21.8636 16.0353C21.4937 17.4156 20.4155 18.4938 19.0352 18.8637C18.7277 18.9461 18.3917 18.9789 17.9999 18.9918L17.9999 20.371C18 20.6062 18 20.846 17.9822 21.0425C17.9651 21.2305 17.9199 21.5852 17.6722 21.8955C17.3872 22.2525 16.9551 22.4602 16.4983 22.4597C16.1013 22.4593 15.7961 22.273 15.6386 22.1689C15.474 22.06 15.2868 21.9102 15.1031 21.7632L12.69 19.8327C12.1714 19.4178 12.0174 19.3007 11.8575 19.219C11.697 19.137 11.5262 19.0771 11.3496 19.0408C11.1737 19.0047 10.9803 19 10.3162 19H7.75858C6.95362 19 6.28927 19 5.74808 18.9558C5.18598 18.9099 4.66928 18.8113 4.18394 18.564C3.43129 18.1805 2.81937 17.5686 2.43588 16.816C2.18859 16.3306 2.09002 15.8139 2.0441 15.2518C1.99988 14.7106 1.99989 14.0463 1.9999 13.2413V7.75868C1.99989 6.95372 1.99988 6.28936 2.0441 5.74818C2.09002 5.18608 2.18859 4.66937 2.43588 4.18404C2.81937 3.43139 3.43129 2.81947 4.18394 2.43598C4.66928 2.18868 5.18598 2.09012 5.74808 2.04419C6.28927 1.99998 6.95364 1.99999 7.7586 2ZM10.5073 7.5C10.5073 6.67157 9.83575 6 9.00732 6C8.1789 6 7.50732 6.67157 7.50732 7.5C7.50732 8.32843 8.1789 9 9.00732 9C9.83575 9 10.5073 8.32843 10.5073 7.5ZM16.6073 11.7001C16.1669 11.3697 15.5426 11.4577 15.2105 11.8959C15.1488 11.9746 15.081 12.0486 15.0119 12.1207C14.8646 12.2744 14.6432 12.4829 14.3566 12.6913C13.7796 13.111 12.9818 13.5001 12.0073 13.5001C11.0328 13.5001 10.235 13.111 9.65799 12.6913C9.37138 12.4829 9.15004 12.2744 9.00274 12.1207C8.93366 12.0486 8.86581 11.9745 8.80418 11.8959C8.472 11.4577 7.84775 11.3697 7.40732 11.7001C6.96549 12.0314 6.87595 12.6582 7.20732 13.1001C7.20479 13.0968 7.21072 13.1043 7.22094 13.1171C7.24532 13.1478 7.29407 13.2091 7.31068 13.2289C7.36932 13.2987 7.45232 13.3934 7.55877 13.5045C7.77084 13.7258 8.08075 14.0172 8.48165 14.3088C9.27958 14.8891 10.4818 15.5001 12.0073 15.5001C13.5328 15.5001 14.735 14.8891 15.533 14.3088C15.9339 14.0172 16.2438 13.7258 16.4559 13.5045C16.5623 13.3934 16.6453 13.2987 16.704 13.2289C16.7333 13.1939 16.7567 13.165 16.7739 13.1432C17.1193 12.6969 17.0729 12.0493 16.6073 11.7001ZM15.0073 6C15.8358 6 16.5073 6.67157 16.5073 7.5C16.5073 8.32843 15.8358 9 15.0073 9C14.1789 9 13.5073 8.32843 13.5073 7.5C13.5073 6.67157 14.1789 6 15.0073 6Z",
            fill: "white",
            "fill-rule": "evenodd"
          }, null, -1)
        ])))
      ], 4);
    };
  }
}), ln = async (u, e) => {
  var r, n, c;
  let t = "";
  try {
    const i = (r = (await fetch(e.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...e.token && { Authorization: `Bearer ${e.token}` }
      },
      body: JSON.stringify({
        messages: [
          { role: "user", content: u }
        ]
      }),
      signal: e.signal
    })).body) == null ? void 0 : r.getReader(), a = new TextDecoder();
    if (!i)
      throw new Error("无法创建流读取器");
    for (; ; ) {
      const { done: s, value: f } = await i.read();
      if (s)
        break;
      const b = a.decode(f).split(`
`);
      for (const h of b)
        if (h.startsWith("{"))
          try {
            const d = JSON.parse(h);
            if (d.choices.length === 0 || d.choices[0].finishReason === "STOP")
              break;
            const g = d.choices[0].delta.content || "";
            t += g, (n = e.onMessage) == null || n.call(e, t);
          } catch (d) {
            console.error("解析 SSE 数据失败:", d);
          }
    }
    return t;
  } catch (o) {
    const i = o instanceof Error ? o : new Error("未知错误");
    throw (c = e.onError) == null || c.call(e, i), i;
  }
}, fn = /* @__PURE__ */ Y({
  __name: "ChatWidget",
  props: {
    config: { default: () => ({
      layout: "widget",
      position: "bottom-right"
    }) }
  },
  setup(u) {
    const e = u, t = B(!1), r = B([]), n = B(!1), c = Qu(() => e.config.layout === "fullpage" ? "fixed inset-0 flex items-center justify-center bg-gray-100" : `fixed ${e.config.position === "bottom-right" ? "bottom-4 right-4" : "bottom-4 left-4"} z-50`), o = Qu(() => e.config.layout === "fullpage" ? "w-[97%] h-[96%] bg-white rounded-xl shadow-xl relative" : "absolute bottom-16 right-0 w-[23rem] h-[38rem] max-h-[calc(100vh-6rem)] bg-white rounded-xl shadow-xl animate-slideUp"), i = () => {
      t.value = !t.value;
    }, a = B(null), s = async (l) => {
      var b;
      if (!(!l.trim() || n.value)) {
        r.value.push({ text: l, isUser: !0 }), n.value = !0, r.value.push({ text: "", isUser: !1 });
        try {
          e.config.apiUrl ? (a.value = new AbortController(), await ln(l, {
            apiUrl: e.config.apiUrl,
            token: e.config.token,
            signal: (b = a.value) == null ? void 0 : b.signal,
            onMessage: (h) => {
              r.value[r.value.length - 1].text = h;
            },
            onError: (h) => {
              console.error("发送消息失败:", h), r.value.length === 0 && (r.value[r.value.length - 1].text = "抱歉，发生了错误，请稍后重试。");
            }
          })) : setTimeout(() => {
            r.value.push({ text: `AI response to: ${l}`, isUser: !1 }), n.value = !1;
          }, 2e3);
        } catch (h) {
          console.error("发送消息失败:", h);
        } finally {
          n.value = !1;
        }
      }
    }, f = () => {
      a.value && (a.value.abort(), a.value = null, n.value = !1);
    };
    return (l, b) => (F(), A("div", {
      class: N(c.value)
    }, [
      l.config.layout === "widget" ? (F(), qu(sn, {
        key: 0,
        "is-open": t.value,
        theme: l.config.theme,
        onToggle: i
      }, null, 8, ["is-open", "theme"])) : J("", !0),
      l.config.layout === "fullpage" || t.value ? (F(), A("div", {
        key: 1,
        class: N([o.value, "flex flex-col"])
      }, [
        Du(ue, {
          theme: l.config.theme,
          title: l.config.title
        }, null, 8, ["theme", "title"]),
        Du(tn, {
          "is-loading": n.value,
          layout: l.config.layout,
          messages: r.value
        }, null, 8, ["is-loading", "layout", "messages"]),
        Du(cn, {
          disabled: n.value,
          layout: l.config.layout,
          onSend: s,
          onStop: f
        }, null, 8, ["disabled", "layout"])
      ], 2)) : J("", !0)
    ], 2));
  }
});
class dn {
  constructor(e = {}) {
    G(this, "app");
    G(this, "config");
    this.config = {
      layout: "widget",
      position: "bottom-right",
      ...e
    }, this.init();
  }
  destroy() {
    if (this.app) {
      this.app.unmount();
      const e = document.getElementById("langchat-bot-sdk");
      e && e.remove();
    }
  }
  init() {
    const e = document.createElement("div");
    e.id = "langchat-bot-sdk", document.body.appendChild(e), this.app = K0({
      render: () => bu(fn, { config: this.config })
    }), this.app.mount("#langchat-bot-sdk");
  }
}
window.LangChatBot = dn;
export {
  dn as default
};
