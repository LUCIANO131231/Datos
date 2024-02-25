(function(sttc) {
    'use strict';
    var ba, ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    ;
    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this)
      , fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x")
      , ha = {}
      , ia = {};
    function ka(a, b, c) {
        if (!c || null != a) {
            c = ia[b];
            if (null == c)
                return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    }
    function la(a, b, c) {
        if (b)
            a: {
                var d = a.split(".");
                a = 1 === d.length;
                var e = d[0], f;
                !a && e in ha ? f = ha : f = ea;
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f))
                        break a;
                    f = f[g]
                }
                d = d[d.length - 1];
                c = fa && "es6" === c ? f[d] : null;
                b = b(c);
                null != b && (a ? ca(ha, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (void 0 === ia[d] && (a = 1E9 * Math.random() >>> 0,
                ia[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d),
                ca(f, ia[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
    }
    la("String.prototype.replaceAll", function(a) {
        return a ? a : function(b, c) {
            if (b instanceof RegExp && !b.global)
                throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"),"g"), c)
        }
    }, "es_2021");
    var ma = "function" == typeof Object.create ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b
    }
    , oa;
    if (fa && "function" == typeof Object.setPrototypeOf)
        oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = {
                a: !0
            }
              , ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a
            } catch (a) {}
            pa = !1
        }
        oa = pa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var sa = oa;
    function ta(a, b) {
        a.prototype = ma(b.prototype);
        a.prototype.constructor = a;
        if (sa)
            sa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Bj = b.prototype
    }
    la("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack"in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a)
            return a;
        ta(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    la("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new ha.AggregateError(c,"All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
    var r = this || self;
    function va(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }
    function wa(a) {
        var b = va(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    function xa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    function za(a) {
        return Object.prototype.hasOwnProperty.call(a, Aa) && a[Aa] || (a[Aa] = ++Ca)
    }
    var Aa = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , Ca = 0;
    function Da(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function Fa(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function Ga(a, b, c) {
        Ga = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Da : Fa;
        return Ga.apply(null, arguments)
    }
    function Ha(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    function Ia(a, b, c) {
        a = a.split(".");
        c = c || r;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
    function Ja(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Bj = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Sn = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }
    function Ka(a) {
        return a
    }
    ;var Ma = {
        Qm: 0,
        Pm: 1,
        Om: 2
    };
    function Na(a, b) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, Na);
        else {
            const c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    Ja(Na, Error);
    Na.prototype.name = "CustomError";
    var Oa;
    function Pa(a, b) {
        a = a.split("%s");
        let c = "";
        const d = a.length - 1;
        for (let e = 0; e < d; e++)
            c += a[e] + (e < b.length ? b[e] : "%s");
        Na.call(this, c + a[d])
    }
    Ja(Pa, Na);
    Pa.prototype.name = "AssertionError";
    function Qa(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    function Ra(a, b) {
        const c = a.length
          , d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            e in d && b.call(void 0, d[e], e, a)
    }
    function Sa(a, b) {
        var c = a.length;
        const d = "string" === typeof a ? a.split("") : a;
        for (--c; 0 <= c; --c)
            c in d && b.call(void 0, d[c], c, a)
    }
    function Ta(a, b) {
        const c = a.length
          , d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }
    function Wa(a, b) {
        const c = a.length
          , d = Array(c)
          , e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
    function Xa(a, b, c) {
        let d = c;
        Ra(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }
    function Ya(a, b) {
        const c = a.length
          , d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    function $a(a, b) {
        return 0 <= Qa(a, b)
    }
    function ab(a, b) {
        b = Qa(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }
    function bb(a, b) {
        let c = 0;
        Sa(a, function(d, e) {
            b.call(void 0, d, e, a) && 1 == Array.prototype.splice.call(a, e, 1).length && c++
        })
    }
    function cb(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function eb(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function fb(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (wa(d)) {
                const e = a.length || 0
                  , f = d.length || 0;
                a.length = e + f;
                for (let g = 0; g < f; g++)
                    a[e + g] = d[g]
            } else
                a.push(d)
        }
    }
    function gb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }
    function hb(a, b, c) {
        c = c || ib;
        let d = 0, e = a.length, f;
        for (; d < e; ) {
            const g = d + (e - d >>> 1);
            let h;
            h = c(b, a[g]);
            0 < h ? d = g + 1 : (e = g,
            f = !h)
        }
        return f ? d : -d - 1
    }
    function jb(a, b) {
        if (!wa(a) || !wa(b) || a.length != b.length)
            return !1;
        const c = a.length
          , d = kb;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e]))
                return !1;
        return !0
    }
    function ib(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    function kb(a, b) {
        return a === b
    }
    function lb(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = lb.apply(null, gb(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++)
                        b.push(f[g])
                }
            else
                b.push(d)
        }
        return b
    }
    function nb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1))
              , e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    }
    ;var ob = {
        Pj: "google_adtest",
        Tj: "google_ad_client",
        Uj: "google_ad_format",
        Wj: "google_ad_height",
        kk: "google_ad_width",
        ak: "google_ad_layout",
        bk: "google_ad_layout_key",
        ck: "google_ad_output",
        dk: "google_ad_region",
        gk: "google_ad_slot",
        ik: "google_ad_type",
        jk: "google_ad_url",
        Fk: "google_analytics_domain_name",
        Gk: "google_analytics_uacct",
        Uk: "google_container_id",
        fl: "google_gl",
        Fl: "google_enable_ose",
        Pl: "google_full_width_responsive",
        Tm: "google_rl_filtering",
        Sm: "google_rl_mode",
        Um: "google_rt",
        Rm: "google_rl_dest_url",
        wm: "google_max_radlink_len",
        Cm: "google_num_radlinks",
        Dm: "google_num_radlinks_per_unit",
        Sj: "google_ad_channel",
        vm: "google_max_num_ads",
        xm: "google_max_responsive_height",
        Pk: "google_color_border",
        El: "google_enable_content_recommendations",
        bl: "google_content_recommendation_ui_type",
        al: "google_source_type",
        Zk: "google_content_recommendation_rows_num",
        Yk: "google_content_recommendation_columns_num",
        Xk: "google_content_recommendation_ad_positions",
        dl: "google_content_recommendation_use_square_imgs",
        Rk: "google_color_link",
        Qk: "google_color_line",
        Tk: "google_color_url",
        Qj: "google_ad_block",
        fk: "google_ad_section",
        Rj: "google_ad_callback",
        Mk: "google_captcha_token",
        Sk: "google_color_text",
        xk: "google_alternate_ad_url",
        Zj: "google_ad_host_tier_id",
        Nk: "google_city",
        Xj: "google_ad_host",
        Yj: "google_ad_host_channel",
        yk: "google_alternate_color",
        Ok: "google_color_bg",
        Gl: "google_encoding",
        Nl: "google_font_face",
        jl: "google_cust_ch",
        ml: "google_cust_job",
        ll: "google_cust_interests",
        kl: "google_cust_id",
        ql: "google_cust_u_url",
        Rl: "google_hints",
        hm: "google_image_size",
        ym: "google_mtl",
        zn: "google_cpm",
        Wk: "google_contents",
        Am: "google_native_settings_key",
        el: "google_country",
        qn: "google_targeting",
        Ol: "google_font_size",
        vl: "google_disable_video_autoplay",
        Nn: "google_video_product_type",
        Mn: "google_video_doc_id",
        Ln: "google_cust_gender",
        kn: "google_cust_lh",
        jn: "google_cust_l",
        yn: "google_tfs",
        zm: "google_native_ad_template",
        nm: "google_kw",
        nn: "google_tag_for_child_directed_treatment",
        on: "google_tag_for_under_age_of_consent",
        Wm: "google_region",
        il: "google_cust_criteria",
        ek: "google_safe",
        gl: "google_ctr_threshold",
        Xm: "google_resizing_allowed",
        Zm: "google_resizing_width",
        Ym: "google_resizing_height",
        Kn: "google_cust_age",
        qm: "google_language",
        om: "google_kw_type",
        Lm: "google_pucrd",
        Jm: "google_page_url",
        pn: "google_tag_partner",
        dn: "google_restrict_data_processing",
        Lj: "google_adbreak_test",
        Vj: "google_ad_frequency_hint",
        Nj: "google_admob_interstitial_slot",
        Oj: "google_admob_rewarded_slot",
        Mj: "google_admob_ads_only",
        hk: "google_ad_start_delay_hint",
        um: "google_max_ad_content_rating",
        Nm: "google_ad_public_floor",
        Mm: "google_ad_private_floor",
        Jn: "google_traffic_source",
        gn: "google_shadow_mode",
        Gm: "google_overlays",
        Km: "google_privacy_treatments",
        ln: "google_xz"
    };
    function tb(a, b) {
        this.g = a === ub && b || "";
        this.i = vb
    }
    tb.prototype.toString = function() {
        return this.g
    }
    ;
    function wb(a) {
        return a instanceof tb && a.constructor === tb && a.i === vb ? a.g : "type_error:Const"
    }
    var vb = {}
      , ub = {};
    var t = class {
        constructor(a, b=!1) {
            this.g = a;
            this.defaultValue = b
        }
    }
      , xb = class {
        constructor(a, b=0) {
            this.g = a;
            this.defaultValue = b
        }
    }
      , yb = class {
        constructor(a, b="") {
            this.g = a;
            this.defaultValue = b
        }
    }
      , u = class {
        constructor(a, b=[]) {
            this.g = a;
            this.defaultValue = b
        }
    }
    ;
    var zb = new t(590317302)
      , Bb = new t(380025941);
    function Cb() {
        return !1
    }
    function Db() {
        return !0
    }
    function Eb(a) {
        const b = arguments
          , c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments))
                    return !1;
            return !0
        }
    }
    function Fb(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }
    function Gb(a) {
        let b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    function Hb(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }
    function Jb(a, b) {
        let c = 0;
        return function(d) {
            r.clearTimeout(c);
            const e = arguments;
            c = r.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }
    function Kb(a, b) {
        function c() {
            e = r.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }
        function d() {
            e = 0;
            f && (f = !1,
            c())
        }
        let e = 0
          , f = !1
          , g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    }
    ;var Lb = {
        passive: !0
    }
      , Mb = Gb(function() {
        let a = !1;
        try {
            const b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            r.addEventListener("test", null, b)
        } catch (b) {}
        return a
    });
    function Nb(a) {
        return a ? a.passive && Mb() ? a : a.capture || !1 : !1
    }
    function Ob(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Nb(d)),
        !0) : !1
    }
    function Rb(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Nb(d)),
        !0) : !1
    }
    ;function Sb(a) {
        Sb[" "](a);
        return a
    }
    Sb[" "] = function() {}
    ;
    function Tb(a, b) {
        try {
            return Sb(a[b]),
            !0
        } catch (c) {}
        return !1
    }
    ;var w = a=>{
        var b = "Re";
        if (a.Re && a.hasOwnProperty(b))
            return a.Re;
        b = new a;
        return a.Re = b
    }
    ;
    var Ub = class {
        constructor() {
            const a = {};
            this.i = (b,c)=>null != a[b] ? a[b] : c;
            this.j = (b,c)=>null != a[b] ? a[b] : c;
            this.l = (b,c)=>null != a[b] ? a[b] : c;
            this.A = (b,c)=>null != a[b] ? a[b] : c;
            this.g = ()=>{}
        }
    }
    ;
    function x(a) {
        return w(Ub).i(a.g, a.defaultValue)
    }
    function Vb(a) {
        return w(Ub).j(a.g, a.defaultValue)
    }
    function Wb(a) {
        return w(Ub).l(a.g, a.defaultValue)
    }
    function Xb(a) {
        return w(Ub).A(a.g, a.defaultValue)
    }
    ;var Yb, Zb;
    a: {
        for (var $b = ["CLOSURE_FLAGS"], ac = r, bc = 0; bc < $b.length; bc++)
            if (ac = ac[$b[bc]],
            null == ac) {
                Zb = null;
                break a
            }
        Zb = ac
    }
    var cc = Zb && Zb[610401301];
    Yb = null != cc ? cc : !1;
    function dc(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    function ec(a) {
        if (!fc.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(gc, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(hc, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(jc, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(kc, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(lc, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(mc, "&#0;"));
        return a
    }
    var gc = /&/g
      , hc = /</g
      , jc = />/g
      , kc = /"/g
      , lc = /'/g
      , mc = /\x00/g
      , fc = /[\x00&<>"']/;
    function nc(a, b) {
        return -1 != a.indexOf(b)
    }
    ;function oc() {
        var a = r.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var pc;
    const qc = r.navigator;
    pc = qc ? qc.userAgentData || null : null;
    function rc(a) {
        return Yb ? pc ? pc.brands.some(({brand: b})=>b && nc(b, a)) : !1 : !1
    }
    function y(a) {
        return nc(oc(), a)
    }
    ;function sc() {
        return Yb ? !!pc && 0 < pc.brands.length : !1
    }
    function tc() {
        return sc() ? !1 : y("Opera")
    }
    function wc() {
        return sc() ? !1 : y("Trident") || y("MSIE")
    }
    function xc() {
        return y("Firefox") || y("FxiOS")
    }
    function yc() {
        return y("Safari") && !(zc() || (sc() ? 0 : y("Coast")) || tc() || (sc() ? 0 : y("Edge")) || (sc() ? rc("Microsoft Edge") : y("Edg/")) || (sc() ? rc("Opera") : y("OPR")) || xc() || y("Silk") || y("Android"))
    }
    function zc() {
        return sc() ? rc("Chromium") : (y("Chrome") || y("CriOS")) && !(sc() ? 0 : y("Edge")) || y("Silk")
    }
    function Ac() {
        return y("Android") && !(zc() || xc() || tc() || y("Silk"))
    }
    ;var Bc = tc()
      , Cc = wc()
      , Dc = y("Edge")
      , Ec = Dc || Cc
      , Fc = y("Gecko") && !(nc(oc().toLowerCase(), "webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge")
      , Gc = nc(oc().toLowerCase(), "webkit") && !y("Edge");
    function Hc() {
        var a = r.document;
        return a ? a.documentMode : void 0
    }
    var Ic;
    a: {
        var Jc = ""
          , Kc = function() {
            var a = oc();
            if (Fc)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Dc)
                return /Edge\/([\d\.]+)/.exec(a);
            if (Cc)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Gc)
                return /WebKit\/(\S+)/.exec(a);
            if (Bc)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Kc && (Jc = Kc ? Kc[1] : "");
        if (Cc) {
            var Lc = Hc();
            if (null != Lc && Lc > parseFloat(Jc)) {
                Ic = String(Lc);
                break a
            }
        }
        Ic = Jc
    }
    var Mc = Ic, Pc;
    if (r.document && Cc) {
        var Qc = Hc();
        Pc = Qc ? Qc : parseInt(Mc, 10) || void 0
    } else
        Pc = void 0;
    var Rc = Pc;
    var Sc = Cc || Gc;
    function Tc(a, b) {
        const c = {};
        for (const d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    function Uc(a) {
        var b = Vc;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }
    function Wc(a) {
        const b = [];
        let c = 0;
        for (const d in a)
            b[c++] = a[d];
        return b
    }
    function Xc(a) {
        const b = {};
        for (const c in a)
            b[c] = a[c];
        return b
    }
    const Yc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function Zc(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (let f = 0; f < Yc.length; f++)
                c = Yc[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;var $c = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var ad;
    function bd() {
        if (void 0 === ad) {
            var a = null
              , b = r.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ka,
                        createScript: Ka,
                        createScriptURL: Ka
                    })
                } catch (c) {
                    r.console && r.console.error(c.message)
                }
                ad = a
            } else
                ad = a
        }
        return ad
    }
    ;var cd = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    }
    ;
    function dd(a, b) {
        a = ed.exec(fd(a).toString());
        var c = a[3] || "";
        return gd(a[1] + hd("?", a[2] || "", b) + hd("#", c))
    }
    function fd(a) {
        return a instanceof cd && a.constructor === cd ? a.g : "type_error:TrustedResourceUrl"
    }
    function id(a, b) {
        var c = wb(a);
        if (!jd.test(c))
            throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(kd, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e))
                throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof tb ? wb(d) : encodeURIComponent(String(d))
        });
        return gd(a)
    }
    var kd = /%{(\w+)}/g
      , jd = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i")
      , ed = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
      , ld = {};
    function gd(a) {
        const b = bd();
        a = b ? b.createScriptURL(a) : a;
        return new cd(a,ld)
    }
    function hd(a, b, c) {
        if (null == c)
            return b;
        if ("string" === typeof c)
            return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a),
                    b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    }
    ;var md = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    ;
    function od(a) {
        return a instanceof md && a.constructor === md ? a.g : "type_error:SafeUrl"
    }
    var pd = /^data:(.*);base64,[a-z0-9+\/]+=*$/i
      , qd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    function rd(a) {
        if (a instanceof md)
            return a;
        a = String(a);
        qd.test(a) ? a = new md(a,sd) : (a = String(a).replace(/(%0A|%0D)/g, ""),
        a = a.match(pd) ? new md(a,sd) : null);
        return a
    }
    var sd = {}
      , td = new md("about:invalid#zClosurez",sd);
    const ud = {};
    function vd(a) {
        return a instanceof wd && a.constructor === wd ? a.g : "type_error:SafeStyle"
    }
    function xd(a) {
        let b = "";
        for (let c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c))
                    throw Error(`Name allows only [-_a-zA-Z0-9], got: ${c}`);
                let d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(yd).join(" ") : yd(d),
                b += `${c}:${d};`)
            }
        return b ? new wd(b,ud) : zd
    }
    class wd {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    var zd = new wd("",ud);
    function yd(a) {
        if (a instanceof md)
            return 'url("' + od(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof tb)
            a = wb(a);
        else {
            a = String(a);
            var b = a.replace(Ad, "$1").replace(Ad, "$1").replace(Bd, "url");
            if (Cd.test(b)) {
                if (b = !Dd.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Ed(a)
                }
                a = b ? Fd(a) : "zClosurez"
            } else
                a = "zClosurez"
        }
        if (/[{;}]/.test(a))
            throw new Pa("Value does not allow [{;}], got: %s.",[a]);
        return a
    }
    function Ed(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if ("]" == e) {
                if (b)
                    return !1;
                b = !0
            } else if ("[" == e) {
                if (!b)
                    return !1;
                b = !1
            } else if (!b && !c.test(e))
                return !1
        }
        return b
    }
    const Cd = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$")
      , Bd = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g")
      , Ad = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g")
      , Dd = /\/\*/;
    function Fd(a) {
        return a.replace(Bd, (b,c,d,e)=>{
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (g,h,k)=>{
                f = h;
                return k
            }
            );
            b = (rd(d) || td).toString();
            return c + f + b + f + e
        }
        )
    }
    ;class Gd {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    ;const Hd = {};
    function Id(a) {
        return a instanceof Jd && a.constructor === Jd ? a.g : "type_error:SafeHtml"
    }
    function Kd(a) {
        const b = bd();
        a = b ? b.createHTML(a) : a;
        return new Jd(a,Hd)
    }
    function Ld(a) {
        if (!Md.test(a))
            throw Error("");
        if (a.toUpperCase()in Nd)
            throw Error("");
    }
    function Od(a, b, c) {
        var d = "";
        if (b)
            for (let g in b)
                if (Object.prototype.hasOwnProperty.call(b, g)) {
                    if (!Md.test(g))
                        throw Error("");
                    var e = b[g];
                    if (null != e) {
                        var f = g;
                        if (e instanceof tb)
                            e = wb(e);
                        else if ("style" == f.toLowerCase()) {
                            if (!xa(e))
                                throw Error("");
                            e instanceof wd || (e = xd(e));
                            e = vd(e)
                        } else {
                            if (/^on/i.test(f))
                                throw Error("");
                            if (f.toLowerCase()in Pd)
                                if (e instanceof cd)
                                    e = fd(e).toString();
                                else if (e instanceof md)
                                    e = od(e);
                                else if ("string" === typeof e)
                                    e = (rd(e) || td).toString();
                                else
                                    throw Error("");
                        }
                        f = `${f}="` + ec(String(e)) + '"';
                        d += " " + f
                    }
                }
        b = `<${a}` + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === $c[a.toLowerCase()] ? b += ">" : (c = Qd(c),
        b += ">" + Id(c).toString() + "</" + a + ">");
        return Kd(b)
    }
    function Rd(a) {
        var b = Sd;
        b = b instanceof Jd ? b : Kd(ec(String(b)));
        const c = []
          , d = e=>{
            Array.isArray(e) ? e.forEach(d) : (e = e instanceof Jd ? e : Kd(ec(String(e))),
            c.push(Id(e).toString()))
        }
        ;
        a.forEach(d);
        return Kd(c.join(Id(b).toString()))
    }
    function Qd(a) {
        return Rd(Array.prototype.slice.call(arguments))
    }
    class Jd {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    const Md = /^[a-zA-Z0-9-]+$/
      , Pd = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    }
      , Nd = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    var Sd = new Jd(r.trustedTypes && r.trustedTypes.emptyHTML || "",Hd)
      , Ud = Kd("<br>");
    var Vd = Gb(function() {
        var a = document.createElement("div")
          , b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Id(Sd);
        return !b.parentElement
    });
    function Wd(a, b) {
        if (Vd())
            for (; a.lastChild; )
                a.removeChild(a.lastChild);
        a.innerHTML = Id(b)
    }
    var Xd = /^[\w+/_-]+[=]{0,2}$/;
    function Yd(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }
    function Zd(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }
    function $d(a) {
        return Zd.apply(null, arguments) / arguments.length
    }
    ;function ae(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    ae.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    ae.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    ae.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    function be(a, b) {
        this.width = a;
        this.height = b
    }
    function ce(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    ba = be.prototype;
    ba.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    ba.isEmpty = function() {
        return !(this.width * this.height)
    }
    ;
    ba.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    ba.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    ba.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    /* 
 
 SPDX-License-Identifier: Apache-2.0 
*/
    function de(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : r.document.createElement("div");
        return a.replace(ee, function(e, f) {
            var g = c[e];
            if (g)
                return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)),
            isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = Kd(e + " "),
            Wd(d, g),
            g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var ee = /&([^;\s<&]+);?/g;
    function fe(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c)
            b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }
    function ge(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
    function he(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
    ;function ie(a) {
        return a ? new je(ke(a)) : Oa || (Oa = new je)
    }
    function le(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new be(a.clientWidth,a.clientHeight)
    }
    function me(a) {
        var b = a.scrollingElement ? a.scrollingElement : Gc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = ne(a);
        return Cc && a.pageYOffset != b.scrollTop ? new ae(b.scrollLeft,b.scrollTop) : new ae(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
    function ne(a) {
        return a.parentWindow || a.defaultView
    }
    function oe(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }
    function ke(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var pe = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    }
      , qe = {
        IMG: " ",
        BR: "\n"
    };
    function re(a) {
        var b = [];
        se(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }
    function se(a, b, c) {
        if (!(a.nodeName in pe))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in qe)
                b.push(qe[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    se(a, b, c),
                    a = a.nextSibling
    }
    function te(a, b, c) {
        if (!b && !c)
            return null;
        var d = b ? String(b).toUpperCase() : null;
        return ue(a, function(e) {
            return (!d || e.nodeName == d) && (!c || "string" === typeof e.className && $a(e.className.split(/\s+/), c))
        })
    }
    function ue(a, b) {
        for (var c = 0; a; ) {
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null
    }
    function je(a) {
        this.g = a || r.document || document
    }
    ba = je.prototype;
    ba.xh = function(a) {
        var b = this.g;
        return "string" === typeof a ? b.getElementById(a) : a
    }
    ;
    ba.Kj = je.prototype.xh;
    function ve(a, b) {
        return oe(a.g, b)
    }
    function we(a, b) {
        var c = a.g;
        a = oe(c, "DIV");
        Cc ? (b = Qd(Ud, b),
        Wd(a, b),
        a.removeChild(a.firstChild)) : Wd(a, b);
        if (1 == a.childNodes.length)
            a = a.removeChild(a.firstChild);
        else {
            for (b = c.createDocumentFragment(); a.firstChild; )
                b.appendChild(a.firstChild);
            a = b
        }
        return a
    }
    ba.da = function() {
        return ne(this.g)
    }
    ;
    ba.contains = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    ;
    ba.xi = function(a) {
        var b, c = arguments.length;
        if (!c)
            return null;
        if (1 == c)
            return arguments[0];
        var d = []
          , e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g; )
                f.unshift(g),
                g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b])
                    return f;
            f = g
        }
        return f
    }
    ;
    function xe() {
        return Yb && pc ? pc.mobile : !ye() && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"))
    }
    function ye() {
        return Yb && pc ? !pc.mobile && (y("iPad") || y("Android") || y("Silk")) : y("iPad") || y("Android") && !y("Mobile") || y("Silk")
    }
    ;var ze = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    function Ae(a, b) {
        if (!b)
            return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
            d = c;
            var e = ""
        } else
            e = a.substring(d + 1, c);
        a = [a.slice(0, d), e, a.slice(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }
    function Be(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++)
                Be(a, String(b[d]), c);
        else
            null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }
    ;class Ce {
        constructor(a) {
            this.Ri = a
        }
    }
    function De(a) {
        return new Ce(b=>b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Je = [De("data"), De("http"), De("https"), De("mailto"), De("ftp"), new Ce(a=>/^[^:]*([/?#]|$)/.test(a))];
    function Ke(a, b=Je) {
        if (a instanceof md)
            return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof Ce && d.Ri(a))
                return new md(a,sd)
        }
    }
    var Le = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
    function Me(a) {
        if (Le.test(a))
            return a
    }
    ;function Ne(a) {
        var b = Ke("#", Je) || td;
        b = b instanceof md ? od(b) : Me(b);
        void 0 !== b && (a.href = b)
    }
    ;var Oe = class {
    }
    ;
    class Pe extends Oe {
        constructor(a) {
            super();
            this.g = a
        }
        toString() {
            return this.g
        }
    }
    ;function Qe(a, b, c) {
        var d = [Re`width`, Re`height`];
        if (0 === d.length)
            throw Error("");
        d = d.map(f=>{
            if (f instanceof Pe)
                f = f.g;
            else
                throw Error("");
            return f
        }
        );
        const e = b.toLowerCase();
        if (d.every(f=>0 !== e.indexOf(f)))
            throw Error(`Attribute "${b}" does not match any of the allowed prefixes.`);
        a.setAttribute(b, c)
    }
    ;function Se(a, b=`unexpected value ${a}!`) {
        throw Error(b);
    }
    ;const Te = "alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");
    function Ue(a, b) {
        a.src = fd(b);
        (void 0)?.Yn || (b = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document.querySelector?.("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }
    ;function Ve(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    }
    ;function We(a) {
        try {
            return !!a && null != a.location.href && Tb(a, "foo")
        } catch {
            return !1
        }
    }
    function Xe(a, b=r) {
        b = Ye(b);
        let c = 0;
        for (; b && 40 > c++ && !a(b); )
            b = Ye(b)
    }
    function Ye(a) {
        try {
            const b = a.parent;
            if (b && b != a)
                return b
        } catch {}
        return null
    }
    function Ze(a) {
        return We(a.top) ? a.top : null
    }
    function $e(a, b) {
        const c = af("SCRIPT", a);
        Ue(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a),
        c) : null
    }
    function bf(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }
    function cf() {
        if (!globalThis.crypto)
            return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }
    function df(a, b) {
        if (a)
            for (const c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    function ef(a) {
        const b = [];
        df(a, function(c) {
            b.push(c)
        });
        return b
    }
    function ff(a) {
        const b = a.length;
        if (0 == b)
            return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++)
            c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var hf = Gb(()=>Ya(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], gf) || 1E-4 > Math.random());
    const gf = a=>nc(oc(), a);
    var jf = /^([0-9.]+)px$/
      , kf = /^(-?[0-9.]{1,30})$/;
    function lf(a) {
        if (!kf.test(a))
            return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }
    function mf(a) {
        return (a = jf.exec(a)) ? +a[1] : null
    }
    var nf = {
        lk: "allow-forms",
        mk: "allow-modals",
        nk: "allow-orientation-lock",
        pk: "allow-pointer-lock",
        qk: "allow-popups",
        rk: "allow-popups-to-escape-sandbox",
        sk: "allow-presentation",
        tk: "allow-same-origin",
        uk: "allow-scripts",
        vk: "allow-top-navigation",
        wk: "allow-top-navigation-by-user-activation"
    };
    const of = Gb(()=>ef(nf));
    function pf() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = of();
        return a.length ? Ta(b, c=>!$a(a, c)) : b
    }
    function qf() {
        const a = af("IFRAME")
          , b = {};
        Ra(of(), c=>{
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        }
        );
        return b
    }
    var rf = (a,b)=>{
        try {
            return !(!a.frames || !a.frames[b])
        } catch {
            return !1
        }
    }
      , sf = (a,b)=>{
        for (let c = 0; 50 > c; ++c) {
            if (rf(a, b))
                return a;
            if (!(a = Ye(a)))
                break
        }
        return null
    }
      , tf = Gb(()=>xe() ? 2 : ye() ? 1 : 0)
      , z = (a,b)=>{
        df(b, (c,d)=>{
            a.style.setProperty(d, c, "important")
        }
        )
    }
      , vf = (a,b)=>{
        if ("length"in a.style) {
            a = a.style;
            const c = a.length;
            for (let d = 0; d < c; d++) {
                const e = a[d];
                b(a[e], e, a)
            }
        } else
            a = uf(a.style.cssText),
            df(a, b)
    }
      , uf = a=>{
        const b = {};
        if (a) {
            const c = /\s*:\s*/;
            Ra((a || "").split(/\s*;\s*/), d=>{
                if (d) {
                    var e = d.split(c);
                    d = e[0];
                    e = e[1];
                    d && e && (b[d.toLowerCase()] = e)
                }
            }
            )
        }
        return b
    }
      , wf = a=>{
        const b = /!\s*important/i;
        vf(a, (c,d)=>{
            b.test(c) ? b.test(c) : a.style.setProperty(d, c, "important")
        }
        )
    }
    ;
    const xf = {
        ["http://googleads.g.doubleclick.net"]: !0,
        ["http://pagead2.googlesyndication.com"]: !0,
        ["https://googleads.g.doubleclick.net"]: !0,
        ["https://pagead2.googlesyndication.com"]: !0
    }
      , yf = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/
      , zf = /.*domain\.test$/
      , Af = /\.prod\.google\.com(:\d+)?$/;
    var Bf = a=>xf[a] || yf.test(a) || zf.test(a) || Af.test(a);
    let Cf = [];
    const Df = ()=>{
        const a = Cf;
        Cf = [];
        for (const b of a)
            try {
                b()
            } catch {}
    }
    ;
    var Ef = ()=>{
        var a = Math.random;
        return Math.floor(a() * 2 ** 52)
    }
      , Ff = (a,b)=>{
        if ("number" !== typeof a.goog_pvsid)
            try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Ef(),
                    configurable: !1
                })
            } catch (c) {
                b && b.va(784, c)
            }
        a = Number(a.goog_pvsid);
        b && (!a || 0 >= a) && b.va(784, Error(`Invalid correlator, ${a}`));
        return a || -1
    }
      , Gf = (a,b)=>{
        "complete" === a.document.readyState ? (Cf.push(b),
        1 == Cf.length && (window.Promise ? Promise.resolve().then(Df) : window.setImmediate ? setImmediate(Df) : setTimeout(Df, 0))) : a.addEventListener("load", b)
    }
      , Hf = (a,b)=>new Promise(c=>{
        setTimeout(()=>void c(b), a)
    }
    );
    function af(a, b=document) {
        return b.createElement(String(a).toLowerCase())
    }
    var If = a=>{
        let b = a;
        for (; a && a != a.parent; )
            a = a.parent,
            We(a) && (b = a);
        return b
    }
      , Kf = a=>x(zb) || zc() && xe() ? Jf(a) : 1
      , Jf = a=>{
        var b = Ze(a);
        if (!b)
            return 1;
        a = 0 === tf();
        const c = !!b.document.querySelector('meta[name=viewport][content*="width=device-width"]')
          , d = b.innerWidth;
        b = b.outerWidth;
        if (0 === d)
            return 1;
        const e = Math.round(100 * (b / d + Number.EPSILON)) / 100;
        return 1 === e ? 1 : a || c ? e : Math.round(100 * (b / d / .4 + Number.EPSILON)) / 100
    }
    ;
    function Lf(a) {
        r.setTimeout(()=>{
            throw a;
        }
        , 0)
    }
    ;Ac();
    zc();
    yc();
    var Mf = {}
      , Nf = null;
    function Of(a) {
        var b = 3;
        void 0 === b && (b = 0);
        Pf();
        b = Mf[b];
        const c = Array(Math.floor(a.length / 3))
          , d = b[64] || "";
        let e = 0
          , f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e]
              , h = a[e + 1]
              , k = a[e + 2]
              , l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
        case 2:
            l = a[e + 1],
            k = b[(l & 15) << 2] || d;
        case 1:
            a = a[e],
            c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }
    function Qf(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255,
            e >>= 8);
            b[c++] = e
        }
        return Of(b)
    }
    function Rf(a) {
        var b = [];
        Sf(a, function(c) {
            b.push(c)
        });
        return b
    }
    function Sf(a, b) {
        function c(k) {
            for (; d < a.length; ) {
                var l = a.charAt(d++)
                  , m = Nf[l];
                if (null != m)
                    return m;
                if (!/^[\s\xa0]*$/.test(l))
                    throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        Pf();
        for (var d = 0; ; ) {
            var e = c(-1)
              , f = c(0)
              , g = c(64)
              , h = c(64);
            if (64 === h && -1 === e)
                break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2),
            64 != h && b(g << 6 & 192 | h))
        }
    }
    function Pf() {
        if (!Nf) {
            Nf = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Mf[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Nf[f] && (Nf[f] = e)
                }
            }
        }
    }
    ;function Tf(a) {
        let b = ""
          , c = 0;
        const d = a.length - 10240;
        for (; c < d; )
            b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    const Uf = /[-_.]/g
      , Vf = {
        "-": "+",
        _: "/",
        ".": "="
    };
    function Wf(a) {
        return Vf[a] || ""
    }
    function Xf(a) {
        return null != a && a instanceof Uint8Array
    }
    let Yf;
    var Zf = {}
      , $f = "undefined" != typeof structuredClone;
    let ag;
    function bg(a) {
        if (a !== Zf)
            throw Error("illegal external caller");
    }
    function cg() {
        return ag || (ag = new dg(null,Zf))
    }
    var dg = class {
        constructor(a, b) {
            bg(b);
            this.g = a;
            if (null != a && 0 === a.length)
                throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return null == this.g
        }
    }
    ;
    let eg = 0
      , fg = 0;
    function vg(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        if (b) {
            b = c;
            c = ~a;
            b ? b = ~b + 1 : c += 1;
            const [d,e] = [b, c];
            a = e;
            c = d
        }
        eg = c >>> 0;
        fg = a >>> 0
    }
    function wg(a, b) {
        b >>>= 0;
        a >>>= 0;
        var c;
        2097151 >= b ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    }
    function xg() {
        var a = eg, b = fg, c;
        b & 2147483648 ? c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : c = wg(a, b);
        return c
    }
    function yg(a) {
        16 > a.length ? vg(Number(a)) : (a = BigInt(a),
        eg = Number(a & BigInt(4294967295)) >>> 0,
        fg = Number(a >> BigInt(32) & BigInt(4294967295)))
    }
    ;function zg(a) {
        return Array.prototype.slice.call(a)
    }
    ;var C = Symbol()
      , Ag = Symbol()
      , Bg = Symbol();
    function Cg(a, b, c) {
        return c ? a | b : a & ~b
    }
    var Dg = (a,b)=>{
        a[C] = b;
        return a
    }
    ;
    function Eg(a) {
        a[C] |= 34;
        return a
    }
    function Fg(a) {
        a[C] |= 32;
        return a
    }
    function Gg(a, b) {
        Dg(b, (a | 0) & -14591)
    }
    function Hg(a, b) {
        Dg(b, (a | 34) & -14557)
    }
    function Ig(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    }
    ;var Jg = {}
      , Kg = {};
    function Lg(a) {
        return !(!a || "object" !== typeof a || a.Wi !== Kg)
    }
    function Mg(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let Ng;
    function Og(a, b, c) {
        if (null != a)
            if ("string" === typeof a)
                a = a ? new dg(a,Zf) : cg();
            else if (a.constructor !== dg)
                if (Xf(a))
                    a = a.length ? new dg(c ? a : new Uint8Array(a),Zf) : cg();
                else {
                    if (!b)
                        throw Error();
                    a = void 0
                }
        return a
    }
    function Pg(a, b, c) {
        if (!Array.isArray(a) || a.length)
            return !1;
        const d = a[C] | 0;
        if (d & 1)
            return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c))))
            return !1;
        Dg(a, d | 1);
        return !0
    }
    var Qg;
    const Rg = [];
    Dg(Rg, 55);
    Qg = Object.freeze(Rg);
    function Sg(a) {
        if (a & 2)
            throw Error();
    }
    class Tg {
        constructor(a, b, c) {
            this.j = 0;
            this.g = a;
            this.i = b;
            this.l = c
        }
        next() {
            if (this.j < this.g.length) {
                const a = this.g[this.j++];
                return {
                    done: !1,
                    value: this.i ? this.i.call(this.l, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }
        [Symbol.iterator]() {
            return new Tg(this.g,this.i,this.l)
        }
    }
    class Ug {
    }
    class Vg {
    }
    Object.freeze(new Ug);
    Object.freeze(new Vg);
    let Wg;
    function Xg(a) {
        if (Wg)
            throw Error("");
        Wg = b=>{
            r.setTimeout(()=>{
                a(b)
            }
            , 0)
        }
    }
    function Yg(a) {
        if (Wg)
            try {
                Wg(a)
            } catch (b) {
                throw b.cause = a,
                b;
            }
    }
    function Zg(a) {
        a = Error(a);
        Ve(a, "warning");
        Yg(a);
        return a
    }
    ;function $g(a) {
        if (null != a && "number" !== typeof a)
            throw Error(`Value of float/double field must be a number, found ${typeof a}: ${a}`);
        return a
    }
    function ah(a) {
        if ("boolean" !== typeof a)
            throw Error(`Expected boolean but got ${va(a)}: ${a}`);
        return a
    }
    const bh = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    function ch(a) {
        const b = typeof a;
        return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : bh.test(a)
    }
    function dh(a) {
        if (null != a) {
            if (!Number.isFinite(a))
                throw Zg("enum");
            a |= 0
        }
        return a
    }
    function eh(a) {
        return null == a ? a : Number.isFinite(a) ? a | 0 : void 0
    }
    function fh(a) {
        if ("number" !== typeof a)
            throw Zg("int32");
        if (!Number.isFinite(a))
            throw Zg("int32");
        return a | 0
    }
    function gh(a) {
        if (null == a)
            return a;
        if ("string" === typeof a) {
            if (!a)
                return;
            a = +a
        }
        if ("number" === typeof a)
            return Number.isFinite(a) ? a | 0 : void 0
    }
    function hh(a) {
        if ("number" !== typeof a)
            throw Zg("uint32");
        if (!Number.isFinite(a))
            throw Zg("uint32");
        return a >>> 0
    }
    function ih(a) {
        if (null == a)
            return a;
        if ("string" === typeof a) {
            if (!a)
                return;
            a = +a
        }
        if ("number" === typeof a)
            return Number.isFinite(a) ? a >>> 0 : void 0
    }
    function jh(a, b) {
        b = !!b;
        if (!ch(a))
            throw Zg("int64");
        "string" === typeof a ? a = kh(a) : b ? (a = Math.trunc(a),
        Number.isSafeInteger(a) ? a = String(a) : (b = String(a),
        lh(b) ? a = b : (vg(a),
        a = xg()))) : a = mh(a);
        return a
    }
    function nh(a) {
        return "-" === a[0] ? !1 : 20 > a.length ? !0 : 20 === a.length && 184467 > Number(a.substring(0, 6))
    }
    function lh(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    }
    function oh(a) {
        if (0 > a) {
            vg(a);
            const b = wg(eg, fg);
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (nh(String(a)))
            return a;
        vg(a);
        return 4294967296 * fg + (eg >>> 0)
    }
    function mh(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            vg(a);
            var b = eg
              , c = fg;
            if (a = c & 2147483648)
                b = ~b + 1 >>> 0,
                c = ~c >>> 0,
                0 == b && (c = c + 1 >>> 0);
            b = 4294967296 * c + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }
    function kh(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b))
            return String(b);
        b = a.indexOf(".");
        -1 !== b && (a = a.substring(0, b));
        lh(a) || (yg(a),
        a = xg());
        return a
    }
    function ph(a) {
        if (null == a)
            return a;
        if (ch(a)) {
            var b;
            "number" === typeof a ? b = mh(a) : b = kh(a);
            return b
        }
    }
    function qh(a, b) {
        b = !!b;
        if (!ch(a))
            throw Zg("uint64");
        "string" === typeof a ? (b = Math.trunc(Number(a)),
        Number.isSafeInteger(b) && 0 <= b ? a = String(b) : (b = a.indexOf("."),
        -1 !== b && (a = a.substring(0, b)),
        nh(a) || (yg(a),
        a = wg(eg, fg)))) : b ? (a = Math.trunc(a),
        0 <= a && Number.isSafeInteger(a) ? a = String(a) : (b = String(a),
        nh(b) ? a = b : (vg(a),
        a = wg(eg, fg)))) : (a = Math.trunc(a),
        a = 0 <= a && Number.isSafeInteger(a) ? a : oh(a));
        return a
    }
    function rh(a) {
        return null == a ? a : qh(a)
    }
    function sh(a) {
        if ("string" !== typeof a)
            throw Error();
        return a
    }
    function th(a) {
        if (null != a && "string" !== typeof a)
            throw Error();
        return a
    }
    function uh(a) {
        return null == a || "string" === typeof a ? a : void 0
    }
    function vh(a, b, c, d) {
        if (null != a && "object" === typeof a && a.Ld === Jg)
            return a;
        if (!Array.isArray(a))
            return c ? d & 2 ? wh(b) : new b : void 0;
        let e = c = a[C] | 0;
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && Dg(a, e);
        return new b(a)
    }
    function wh(a) {
        var b = a[Ag];
        if (b)
            return b;
        b = new a;
        Eg(b.V);
        return a[Ag] = b
    }
    function xh(a, b, c) {
        return b ? sh(a) : uh(a) ?? (c ? "" : void 0)
    }
    ;const yh = {}
      , zh = (()=>class extends Map {
        constructor() {
            super()
        }
    }
    )();
    function Ah(a) {
        return a
    }
    function Bh(a) {
        if (a.qc & 2)
            throw Error("Cannot mutate an immutable Map");
    }
    var Fh = class extends zh {
        constructor(a, b, c=Ah, d=Ah) {
            super();
            let e = a[C] | 0;
            e |= 64;
            Dg(a, e);
            this.qc = e;
            this.be = b;
            this.Jc = c;
            this.Bf = this.be ? Ch : d;
            for (let f = 0; f < a.length; f++) {
                const g = a[f]
                  , h = c(g[0], !1, !0);
                let k = g[1];
                b ? void 0 === k && (k = null) : k = d(g[1], !1, !0, void 0, void 0, e);
                super.set(h, k)
            }
        }
        wf(a=Dh) {
            if (0 !== this.size)
                return this.vf(a)
        }
        vf(a=Dh) {
            const b = []
              , c = super.entries();
            for (var d; !(d = c.next()).done; )
                d = d.value,
                d[0] = a(d[0]),
                d[1] = a(d[1]),
                b.push(d);
            return b
        }
        Fc() {
            return this.size
        }
        clear() {
            Bh(this);
            super.clear()
        }
        delete(a) {
            Bh(this);
            return super.delete(this.Jc(a, !0, !1))
        }
        entries() {
            var a = this.Bg();
            return new Tg(a,Eh,this)
        }
        keys() {
            return this.Si()
        }
        values() {
            var a = this.Bg();
            return new Tg(a,Fh.prototype.get,this)
        }
        forEach(a, b) {
            super.forEach((c,d)=>{
                a.call(b, this.get(d), d, this)
            }
            )
        }
        set(a, b) {
            Bh(this);
            a = this.Jc(a, !0, !1);
            return null == a ? this : null == b ? (super.delete(a),
            this) : super.set(a, this.Bf(b, !0, !0, this.be, !1, this.qc))
        }
        has(a) {
            return super.has(this.Jc(a, !1, !1))
        }
        get(a) {
            a = this.Jc(a, !1, !1);
            const b = super.get(a);
            if (void 0 !== b) {
                var c = this.be;
                return c ? (c = this.Bf(b, !1, !0, c, this.Uh, this.qc),
                c !== b && super.set(a, c),
                c) : b
            }
        }
        Bg() {
            return Array.from(super.keys())
        }
        Si() {
            return super.keys()
        }
        [Symbol.iterator]() {
            return this.entries()
        }
    }
    ;
    Fh.prototype.toJSON = void 0;
    Fh.prototype.Wi = Kg;
    function Ch(a, b, c, d, e, f) {
        a = vh(a, d, c, f);
        e && (a = Gh(a));
        return a
    }
    function Dh(a) {
        return a
    }
    function Eh(a) {
        return [a, this.get(a)]
    }
    let Hh;
    function Ih() {
        return Hh || (Hh = new Fh(Eg([]),void 0,void 0,void 0,yh))
    }
    ;let Jh;
    function Kh(a, b) {
        Jh = b;
        a = new a(b);
        Jh = void 0;
        return a
    }
    ;function Lh(a, b) {
        return Mh(b)
    }
    function Mh(a) {
        switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a)
                if (Array.isArray(a)) {
                    if (Pg(a, void 0, 0))
                        return
                } else {
                    if (Xf(a))
                        return Tf(a);
                    if (a instanceof dg) {
                        const b = a.g;
                        return null == b ? "" : "string" === typeof b ? b : a.g = Tf(b)
                    }
                    if (a instanceof Fh)
                        return a.wf()
                }
        }
        return a
    }
    ;function Nh(a, b, c) {
        a = zg(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++)
            a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e)
                Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }
    function Oh(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a))
                a = Pg(a, void 0, 0) ? void 0 : e && (a[C] | 0) & 2 ? a : Ph(a, b, c, void 0 !== d, e);
            else if (Mg(a)) {
                const f = {};
                for (let g in a)
                    Object.prototype.hasOwnProperty.call(a, g) && (f[g] = Oh(a[g], b, c, d, e));
                a = f
            } else
                a = b(a, d);
            return a
        }
    }
    function Ph(a, b, c, d, e) {
        const f = d || c ? a[C] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = zg(a);
        for (let g = 0; g < a.length; g++)
            a[g] = Oh(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }
    function Qh(a) {
        return Oh(a, Rh, void 0, void 0, !1)
    }
    function Rh(a) {
        a.Ld === Jg ? a = Sh(a, Ph(a.V, Rh, void 0, void 0, !1), !0) : a instanceof dg ? (a = a.g || "",
        a = "string" === typeof a ? a : new Uint8Array(a)) : a = Xf(a) ? new Uint8Array(a) : a instanceof Fh ? a.wf(Qh) : a;
        return a
    }
    function Th(a) {
        return Oh(a, Uh, void 0, void 0, !1)
    }
    function Uh(a) {
        return a.Ld === Jg ? a.toJSON() : a instanceof Fh ? a.wf(Th) : Mh(a)
    }
    var Vh = $f ? structuredClone : a=>Ph(a, Rh, void 0, void 0, !1);
    function Wh(a, b, c=Hg) {
        if (null != a) {
            if (a instanceof Uint8Array)
                return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[C] | 0;
                if (d & 2)
                    return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? Dg(a, (d | 34) & -12293) : Ph(a, Wh, d & 4 ? Hg : c, !0, !0)
            }
            a.Ld === Jg ? (c = a.V,
            d = c[C],
            a = d & 2 ? a : Kh(a.constructor, Xh(c, d, !0))) : a instanceof Fh && !(a.qc & 2) && (c = Eg(a.vf(Wh)),
            a = new Fh(c,a.be,a.Jc,a.Bf));
            return a
        }
    }
    function Yh(a) {
        const b = a.V;
        return Kh(a.constructor, Xh(b, b[C], !1))
    }
    function Xh(a, b, c) {
        const d = c || b & 2 ? Hg : Gg
          , e = !!(b & 32);
        a = Nh(a, b, f=>Wh(f, e, d));
        a[C] = a[C] | 32 | (c ? 2 : 0);
        return a
    }
    function Gh(a) {
        const b = a.V
          , c = b[C];
        return c & 2 ? Kh(a.constructor, Xh(b, c, !1)) : a
    }
    ;function Zh(a, b, c) {
        if (!(4 & b))
            return !0;
        if (null == c)
            return !1;
        0 === c && (4096 & b || 8192 & b) && 5 > (a.constructor[Bg] = (a.constructor[Bg] | 0) + 1) && (a = Error(),
        Ve(a, "incident"),
        Wg ? Yg(a) : Lf(a));
        return 0 === c ? !1 : !(c & b)
    }
    function $h(a, b) {
        a = a.V;
        return ai(a, a[C], b)
    }
    function ai(a, b, c, d) {
        if (-1 === c)
            return null;
        if (c >= Ig(b)) {
            if (b & 256)
                return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c],
            null != d))
                return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e)
                return a[b]
        }
    }
    function bi(a, b, c) {
        const d = a.V;
        let e = d[C];
        Sg(e);
        ci(d, e, b, c);
        return a
    }
    function ci(a, b, c, d, e) {
        const f = Ig(b);
        if (c >= f || e) {
            let g = b;
            if (b & 256)
                e = a[a.length - 1];
            else {
                if (null == d)
                    return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && Dg(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1],
        c in a && delete a[c]);
        return b
    }
    function di(a, b, c) {
        return void 0 !== ei(a, b, c, !1)
    }
    function fi(a, b) {
        a = a.V;
        let c = a[C];
        const d = ai(a, c, b);
        var e = null == d || "number" === typeof d ? d : "NaN" === d || "Infinity" === d || "-Infinity" === d ? Number(d) : void 0;
        null != e && e !== d && ci(a, c, b, e);
        return e
    }
    function gi(a, b) {
        a = $h(a, b);
        return null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0
    }
    function hi(a, b, c, d, e, f, g) {
        const h = a.V;
        let k = h[C];
        d = 2 & k ? 1 : d;
        f = !!f;
        let l = ii(h, k, b, e);
        var m = l[C] | 0;
        if (Zh(a, m, g)) {
            if (4 & m || Object.isFrozen(l))
                l = zg(l),
                m = ji(m, k, f),
                k = ci(h, k, b, l, e);
            let p = a = 0;
            for (; a < l.length; a++) {
                const q = c(l[a]);
                null != q && (l[p++] = q)
            }
            p < a && (l.length = p);
            m = ki(m, k, f);
            m = Cg(m, 20, !0);
            m = Cg(m, 4096, !1);
            m = Cg(m, 8192, !1);
            g && (m = Cg(m, g, !0));
            Dg(l, m);
            2 & m && Object.freeze(l)
        }
        li(m) || (g = m,
        (c = 1 === d) ? m = Cg(m, 2, !0) : f || (m = Cg(m, 32, !1)),
        m !== g && Dg(l, m),
        c && Object.freeze(l));
        2 === d && li(m) && (l = zg(l),
        m = ji(m, k, f),
        Dg(l, m),
        ci(h, k, b, l, e));
        var n;
        f ? n = l : n = l;
        return n
    }
    function ii(a, b, c, d) {
        a = ai(a, b, c, d);
        return Array.isArray(a) ? a : Qg
    }
    function ki(a, b, c) {
        0 === a && (a = ji(a, b, c));
        return a = Cg(a, 1, !0)
    }
    function li(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }
    function mi(a, b, c) {
        var d = ni
          , e = b & 2;
        let f = !1;
        if (null == c) {
            if (e)
                return Ih();
            c = []
        } else if (c.constructor === Fh) {
            if (0 == (c.qc & 2) || e)
                return c;
            c = c.vf()
        } else
            Array.isArray(c) ? f = !!((c[C] | 0) & 2) : c = [];
        if (e) {
            if (!c.length)
                return Ih();
            f || (f = !0,
            Eg(c))
        } else if (f) {
            f = !1;
            e = zg(c);
            for (c = 0; c < e.length; c++) {
                const g = e[c] = zg(e[c]);
                Array.isArray(g[1]) && (g[1] = Eg(g[1]))
            }
            c = e
        }
        f || ((c[C] | 0) & 64 ? c[C] &= -33 : 32 & b && Fg(c));
        d = new Fh(c,d,xh,void 0);
        ci(a, b, 14, d, !1);
        return d
    }
    function oi(a, b, c, d) {
        const e = a.V;
        let f = e[C];
        Sg(f);
        if (null == c)
            return ci(e, f, b),
            a;
        let g = c[C] | 0
          , h = g;
        var k = !!(2 & g) || Object.isFrozen(c);
        const l = !k && !1;
        if (Zh(a, g))
            for (g = 21,
            k && (c = zg(c),
            h = 0,
            g = ji(g, f, !0)),
            k = 0; k < c.length; k++)
                c[k] = d(c[k]);
        l && (c = zg(c),
        h = 0,
        g = ji(g, f, !0));
        g !== h && Dg(c, g);
        ci(e, f, b, c);
        return a
    }
    function pi(a, b, c, d) {
        const e = a.V;
        let f = e[C];
        Sg(f);
        ci(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    }
    function qi(a, b, c, d) {
        const e = a.V;
        let f = e[C];
        Sg(f);
        (c = ri(e, f, c)) && c !== b && null != d && (f = ci(e, f, c));
        ci(e, f, b, d);
        return a
    }
    function si(a, b, c) {
        a = a.V;
        return ri(a, a[C], b) === c ? c : -1
    }
    function ri(a, b, c) {
        let d = 0;
        for (let e = 0; e < c.length; e++) {
            const f = c[e];
            null != ai(a, b, f) && (0 !== d && (b = ci(a, b, d)),
            d = f)
        }
        return d
    }
    function ei(a, b, c, d) {
        a = a.V;
        let e = a[C];
        const f = ai(a, e, c, d);
        b = vh(f, b, !1, e);
        b !== f && null != b && ci(a, e, c, b, d);
        return b
    }
    function ti(a) {
        var b = ui;
        return (a = ei(a, b, 1, !1)) ? a : wh(b)
    }
    function D(a, b, c) {
        b = ei(a, b, c, !1);
        if (null == b)
            return b;
        a = a.V;
        let d = a[C];
        if (!(d & 2)) {
            const e = Gh(b);
            e !== b && (b = e,
            ci(a, d, c, b, !1))
        }
        return b
    }
    function vi(a, b, c, d, e, f, g, h) {
        var k = !!(2 & b)
          , l = k ? 1 : e;
        e = 1 === l;
        l = 2 === l;
        g = !!g;
        h && (h = !k);
        k = ii(a, b, d, f);
        var m = k[C] | 0;
        const n = !!(4 & m);
        if (!n) {
            m = ki(m, b, g);
            var p = k
              , q = b;
            const v = !!(2 & m);
            v && (q = Cg(q, 2, !0));
            let A = !v
              , B = !0
              , E = 0
              , J = 0;
            for (; E < p.length; E++) {
                const G = vh(p[E], c, !1, q);
                if (G instanceof c) {
                    if (!v) {
                        const K = !!((G.V[C] | 0) & 2);
                        A && (A = !K);
                        B && (B = K)
                    }
                    p[J++] = G
                }
            }
            J < E && (p.length = J);
            m = Cg(m, 4, !0);
            m = Cg(m, 16, B);
            m = Cg(m, 8, A);
            Dg(p, m);
            v && Object.freeze(p)
        }
        c = !!(8 & m) || e && !k.length;
        if (h && !c) {
            li(m) && (k = zg(k),
            m = ji(m, b, g),
            b = ci(a, b, d, k, f));
            h = k;
            c = m;
            for (p = 0; p < h.length; p++)
                m = h[p],
                q = Gh(m),
                m !== q && (h[p] = q);
            c = Cg(c, 8, !0);
            c = Cg(c, 16, !h.length);
            Dg(h, c);
            m = c
        }
        li(m) || (h = m,
        e ? m = Cg(m, !k.length || 16 & m && (!n || 32 & m) ? 2 : 2048, !0) : g || (m = Cg(m, 32, !1)),
        m !== h && Dg(k, m),
        e && Object.freeze(k));
        l && li(m) && (k = zg(k),
        m = ji(m, b, g),
        Dg(k, m),
        ci(a, b, d, k, f));
        return k
    }
    function F(a, b, c) {
        a = a.V;
        const d = a[C];
        return vi(a, d, b, c, 2, void 0, !1, !(2 & d))
    }
    function H(a, b, c) {
        null == c && (c = void 0);
        return bi(a, b, c)
    }
    function wi(a, b, c, d) {
        null == d && (d = void 0);
        return qi(a, b, c, d)
    }
    function xi(a, b, c) {
        const d = a.V;
        let e = d[C];
        Sg(e);
        if (null == c)
            return ci(d, e, b),
            a;
        let f = c[C] | 0
          , g = f;
        const h = !!(2 & f) || !!(2048 & f)
          , k = h || Object.isFrozen(c);
        let l = !0
          , m = !0;
        for (let p = 0; p < c.length; p++) {
            var n = c[p];
            h || (n = !!((n.V[C] | 0) & 2),
            l && (l = !n),
            m && (m = n))
        }
        h || (f = Cg(f, 5, !0),
        f = Cg(f, 8, l),
        f = Cg(f, 16, m));
        k && f !== g && (c = zg(c),
        g = 0,
        f = ji(f, e, !0));
        f !== g && Dg(c, f);
        ci(d, e, b, c);
        return a
    }
    function ji(a, b, c) {
        a = Cg(a, 2, !!(2 & b));
        a = Cg(a, 32, !!(32 & b) && c);
        return a = Cg(a, 2048, !1)
    }
    function yi(a, b, c, d, e, f, g) {
        a = a.V;
        const h = a[C];
        Sg(h);
        b = vi(a, h, c, b, 2, f, !0);
        c = null != d ? d : new c;
        if (g && ("number" !== typeof e || 0 > e || e > b.length))
            throw Error();
        void 0 != e ? b.splice(e, g, c) : b.push(c);
        b[C] = (c.V[C] | 0) & 2 ? b[C] & -9 : b[C] & -17
    }
    function zi(a, b) {
        return gh($h(a, b))
    }
    function Ai(a, b) {
        return ph($h(a, b))
    }
    function I(a, b) {
        return uh($h(a, b))
    }
    function L(a, b) {
        return eh($h(a, b))
    }
    function Bi(a, b) {
        return a ?? b
    }
    function N(a, b, c=!1) {
        return gi(a, b) ?? c
    }
    function Ci(a, b) {
        return Bi(zi(a, b), 0)
    }
    function Di(a, b) {
        return Bi(Ai(a, b), 0)
    }
    function Ei(a, b, c=0) {
        return Bi(fi(a, b), c)
    }
    function O(a, b) {
        return I(a, b) ?? ""
    }
    function Fi(a, b) {
        return Bi(L(a, b), 0)
    }
    function Gi(a, b, c, d) {
        return D(a, b, si(a, d, c))
    }
    function Hi(a, b) {
        a = zi(a, b);
        return null == a ? void 0 : a
    }
    function Ii(a) {
        a = fi(a, 4);
        return null == a ? void 0 : a
    }
    function Zi(a, b, c) {
        return bi(a, b, null == c ? c : ah(c))
    }
    function $i(a, b, c) {
        return pi(a, b, null == c ? c : ah(c), !1)
    }
    function aj(a, b, c) {
        return bi(a, b, null == c ? c : fh(c))
    }
    function bj(a, b, c) {
        return pi(a, b, null == c ? c : fh(c), 0)
    }
    function cj(a, b, c) {
        return bi(a, b, null == c ? c : jh(c))
    }
    function P(a, b, c) {
        return pi(a, b, null == c ? c : jh(c), "0")
    }
    function dj(a, b, c) {
        return bi(a, b, th(c))
    }
    function ej(a, b, c) {
        return pi(a, b, th(c), "")
    }
    function Q(a, b, c) {
        return pi(a, b, dh(c), 0)
    }
    ;function fj(a) {
        Ng = !0;
        try {
            return JSON.stringify(a.toJSON(), Lh)
        } finally {
            Ng = !1
        }
    }
    var R = class {
        constructor(a) {
            a: {
                null == a && (a = Jh);
                Jh = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a))
                        throw Error();
                    b = a[C] | 0;
                    if (b & 64)
                        break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d,
                    Mg(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (1024 <= c)
                            throw Error();
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                Dg(a, b)
            }
            this.V = a
        }
        toJSON() {
            return Ng ? Sh(this, this.V, !1) : Sh(this, Ph(this.V, Uh, void 0, void 0, !1), !0)
        }
        i() {
            const a = this.V
              , b = a[C];
            return b & 2 ? this : Kh(this.constructor, Xh(a, b, !0))
        }
    }
    ;
    R.prototype.Ld = Jg;
    function Sh(a, b, c) {
        const d = a.constructor.O
          , e = (c ? a.V : b)[C];
        a = b.length;
        if (!a)
            return b;
        let f, g;
        if (Mg(c = b[a - 1])) {
            a: {
                var h = c;
                let m = {}
                  , n = !1;
                for (var k in h) {
                    if (!Object.prototype.hasOwnProperty.call(h, k))
                        continue;
                    let p = h[k];
                    if (Array.isArray(p)) {
                        let q = p;
                        if (Pg(p, d, +k) || Lg(p) && 0 === p.size)
                            p = null;
                        p != q && (n = !0)
                    }
                    null != p ? m[k] = p : n = !0
                }
                if (n) {
                    for (var l in m) {
                        h = m;
                        break a
                    }
                    h = null
                }
            }
            h != c && (f = !0);
            a--
        }
        for (k = +!!(e & 512) - 1; 0 < a; a--) {
            l = a - 1;
            c = b[l];
            l -= k;
            if (!(null == c || Pg(c, d, l) || Lg(c) && 0 === c.size))
                break;
            g = !0
        }
        if (!f && !g)
            return b;
        b = Array.prototype.slice.call(b, 0, a);
        h && b.push(h);
        return b
    }
    function gj(a, b) {
        if (null == b)
            return new a;
        if (!Array.isArray(b))
            throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b))
            throw Error("arrays passed to jspb constructors must be mutable");
        b[C] |= 128;
        return Kh(a, Fg(b))
    }
    ;function hj(a, b) {
        const c = ij;
        ij = void 0;
        if (!b(a))
            throw b = c ? c() + "\n" : "",
            Error(b + String(a));
    }
    let ij = void 0;
    const jj = a=>null !== a && void 0 !== a;
    function kj(a) {
        return b=>{
            if (null == b || "" == b)
                b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b))
                    throw Error(void 0);
                b = Kh(a, Fg(b))
            }
            return b
        }
    }
    ;function Re(a) {
        return new Pe(a[0].toLowerCase())
    }
    ;function lj(a) {
        a = document.createRange().createContextualFragment(Id(a));
        return 1 === a.childNodes.length ? a.childNodes[0] : a
    }
    ;function mj(a) {
        var b = {};
        if (a instanceof Jd)
            return a;
        a = nj(String(a));
        b.ao && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
        b.Zn && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
        b.bo && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
        return Kd(a)
    }
    function nj(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    function oj(a) {
        const b = mj("");
        return Kd(a.map(c=>Id(mj(c))).join(Id(b).toString()))
    }
    const pj = /^[a-z][a-z\d-]*$/i
      , qj = "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" ");
    var rj = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" ");
    const sj = ["action", "formaction", "href"];
    function tj(a, b) {
        if (!pj.test("body"))
            throw Error("");
        if (-1 !== qj.indexOf("BODY"))
            throw Error("");
        let c = "<body";
        a && (c += uj(a));
        Array.isArray(b) || (b = void 0 === b ? [] : [b]);
        -1 !== rj.indexOf("BODY") ? c += ">" : (a = oj(b.map(d=>d instanceof Jd ? d : mj(String(d)))),
        c += ">" + a.toString() + "</body>");
        return Kd(c)
    }
    function uj(a) {
        var b = "";
        const c = Object.keys(a);
        for (let f = 0; f < c.length; f++) {
            var d = c[f]
              , e = a[d];
            if (!pj.test(d))
                throw Error("");
            if (void 0 !== e && null !== e) {
                if (/^on/i.test(d))
                    throw Error("");
                -1 !== sj.indexOf(d.toLowerCase()) && (e = e instanceof md ? e.toString() : Me(String(e)) || "about:invalid#zClosurez");
                e = `${d}="${mj(String(e))}"`;
                b += " " + e
            }
        }
        return b
    }
    ;function vj(a) {
        const b = a.split(/\?|#/)
          , c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            params: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    }
    function wj(a, ...b) {
        if (0 === b.length)
            return gd(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return gd(c)
    }
    function xj(a) {
        var b = wj`https://cse.google.com/cse.js`;
        b = vj(fd(b).toString());
        let c = b.params
          , d = c.length ? "&" : "?";
        a.forEach((e,f)=>{
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)),
                d = "&")
            }
        }
        );
        return gd(b.path + c + b.hash)
    }
    ;function yj(a, ...b) {
        let c = a[0];
        for (let d = 0; d < a.length - 1; d++)
            c += String(b[d]) + a[d + 1];
        if (/[<>]/.test(c))
            throw Error("Forbidden characters in style string: " + c);
        return new wd(c,ud)
    }
    ;wj`https://www.google.com/recaptcha/api2/aframe`;
    function zj(a) {
        var b = window;
        new Promise((c,d)=>{
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement?.removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = ()=>{
                e();
                c()
            }
            ;
            f.onerror = ()=>{
                e();
                d(void 0)
            }
            ;
            f.type = "text/javascript";
            Ue(f, a);
            "complete" !== b.document.readyState ? Ob(b, "load", ()=>{
                b.document.body.appendChild(f)
            }
            ) : b.document.body.appendChild(f)
        }
        )
    }
    ;async function Aj(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.g}` + `&tv=${a.i}&st=` + `${a.lc}`;
        let c = void 0;
        try {
            c = await Bj(b)
        } catch (g) {}
        if (c) {
            b = a.Ic || c.sodar_query_id;
            var d = void 0 !== c.rc_enable && a.j ? c.rc_enable : "n"
              , e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms
              , f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary)
                return {
                    context: a.l,
                    Ph: c.bg_hash_basename,
                    Oh: c.bg_binary,
                    Ui: a.g + "_" + a.i,
                    Ic: b,
                    lc: a.lc,
                    Gd: d,
                    Yd: e,
                    Ed: f
                }
        }
    }
    let Bj = a=>new Promise((b,c)=>{
        const d = new XMLHttpRequest;
        d.onreadystatechange = ()=>{
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        }
        ;
        d.open("GET", a, !0);
        d.send()
    }
    );
    async function Cj(a) {
        var b = await Aj(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && "function" === typeof c.push || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.Ph,
                _bgp_: b.Oh,
                _li_: b.Ui,
                _jk_: b.Ic,
                _st_: b.lc,
                _rc_: b.Gd,
                _dl_: b.Yd,
                _g2_: b.Ed
            });
            if (b = a.GoogleDX5YKUSk)
                a.GoogleDX5YKUSk = void 0,
                b[1]();
            a = wj`https://tpc.googlesyndication.com/sodar/${"sodar2"}.js`;
            zj(a)
        }
    }
    ;function Dj(a, b) {
        return ej(a, 1, b)
    }
    var Ej = class extends R {
        g() {
            return O(this, 1)
        }
    }
    ;
    function Fj(a, b) {
        return H(a, 5, b)
    }
    function Gj(a, b) {
        return ej(a, 3, b)
    }
    function Hj(a, b) {
        return $i(a, 6, b)
    }
    var Ij = class extends R {
        constructor() {
            super()
        }
    }
    ;
    function Jj(a) {
        switch (a) {
        case 1:
            return "gda";
        case 2:
            return "gpt";
        case 3:
            return "ima";
        case 4:
            return "pal";
        case 5:
            return "xfad";
        case 6:
            return "dv3n";
        case 7:
            return "spa";
        default:
            return "unk"
        }
    }
    var Kj = class {
        constructor(a) {
            this.g = a.i;
            this.i = a.j;
            this.l = a.l;
            this.Ic = a.Ic;
            this.win = a.da();
            this.lc = a.lc;
            this.Gd = a.Gd;
            this.Yd = a.Yd;
            this.Ed = a.Ed;
            this.j = a.g
        }
    }
      , Lj = class {
        constructor(a, b, c) {
            this.i = a;
            this.j = b;
            this.l = c;
            this.win = window;
            this.lc = "env";
            this.Gd = "n";
            this.Yd = "0";
            this.Ed = "1";
            this.g = !0
        }
        da() {
            return this.win
        }
        build() {
            return new Kj(this)
        }
    }
    ;
    function Mj(a) {
        var b = new Nj;
        return dj(b, 1, a)
    }
    function Oj(a, b) {
        return cj(a, 2, b)
    }
    function Pj(a, b) {
        return dj(a, 3, b)
    }
    function Qj(a, b) {
        return dj(a, 4, b)
    }
    var Nj = class extends R {
        getValue() {
            return O(this, 1)
        }
        getVersion() {
            return Fi(this, 5)
        }
    }
    ;
    var Rj = class extends R {
    }
    ;
    Rj.O = [2, 3, 4];
    var Sj = class extends R {
    }
    ;
    function Tj(a, b, c=null, d=!1, e=!1) {
        Uj(a, b, c, d, e)
    }
    function Uj(a, b, c, d, e=!1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = af("IMG", a.document);
        if (c || d) {
            const g = h=>{
                c && c(h);
                d && ab(a.google_image_requests, f);
                Rb(f, "load", g);
                Rb(f, "error", g)
            }
            ;
            Ob(f, "load", g);
            Ob(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var Wj = (a,b)=>{
        let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
        df(a, (d,e)=>{
            if (d || 0 === d)
                c += `&${e}=${encodeURIComponent("" + d)}`
        }
        );
        Vj(c)
    }
      , Vj = a=>{
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : Tj(b, a, void 0, !1, !1)
    }
    ;
    var Xj = window;
    var Yj = class extends R {
        constructor() {
            super()
        }
    }
    ;
    Yj.O = [15];
    var Zj = class extends R {
        constructor() {
            super()
        }
        getCorrelator() {
            return Di(this, 1)
        }
        setCorrelator(a) {
            return P(this, 1, a)
        }
    }
    ;
    var ak = class extends R {
        constructor() {
            super()
        }
    }
    ;
    function bk(a) {
        this.g = a || {
            cookie: ""
        }
    }
    ba = bk.prototype;
    ba.set = function(a, b, c) {
        let d, e, f, g = !1, h;
        "object" === typeof c && (h = c.co,
        g = c.gh || !1,
        f = c.domain || void 0,
        e = c.path || void 0,
        d = c.Id);
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    }
    ;
    ba.get = function(a, b) {
        const c = a + "="
          , d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = dc(d[e]);
            if (0 == f.lastIndexOf(c, 0))
                return f.slice(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    ba.isEmpty = function() {
        return !this.g.cookie
    }
    ;
    ba.Ec = function() {
        return this.g.cookie ? (this.g.cookie || "").split(";").length : 0
    }
    ;
    ba.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [];
        var c = [];
        let d, e;
        for (let f = 0; f < a.length; f++)
            e = dc(a[f]),
            d = e.indexOf("="),
            -1 == d ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
        for (c = b.length - 1; 0 <= c; c--)
            a = b[c],
            this.get(a),
            this.set(a, "", {
                Id: 0,
                path: void 0,
                domain: void 0
            })
    }
    ;
    function ck(a, b=window) {
        if (a.g())
            try {
                return b.localStorage
            } catch {}
        return null
    }
    function dk(a=window) {
        try {
            return a.localStorage
        } catch {
            return null
        }
    }
    function ek(a) {
        return "null" !== a.origin
    }
    function fk(a, b, c) {
        b = b.g() && ek(c) ? c.document.cookie : null;
        return null === b ? null : (new bk({
            cookie: b
        })).get(a) || ""
    }
    function gk(a, b, c, d, e) {
        b.g() && ek(c) && (b = new bk(c.document),
        b.get(a),
        b.set(a, "", {
            Id: 0,
            path: d,
            domain: e
        }))
    }
    ;let hk = null
      , ik = null;
    function jk() {
        if (null != hk)
            return hk;
        hk = !1;
        try {
            const a = Ze(r);
            a && -1 !== a.location.hash.indexOf("google_logging") && (hk = !0);
            dk(r)?.getItem("google_logging") && (hk = !0)
        } catch (a) {}
        return hk
    }
    function kk() {
        if (null != ik)
            return ik;
        ik = !1;
        try {
            const a = Ze(r)
              , b = dk(r);
            if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || b && b.getItem("auto_ads_logging"))
                ik = !0
        } catch (a) {}
        return ik
    }
    var lk = (a,b=[])=>{
        let c = !1;
        r.google_logging_queue || (c = !0,
        r.google_logging_queue = []);
        r.google_logging_queue.push([a, b]);
        c && jk() && $e(r.document, wj`https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    }
    ;
    function mk(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    ba = mk.prototype;
    ba.getWidth = function() {
        return this.right - this.left
    }
    ;
    ba.getHeight = function() {
        return this.bottom - this.top
    }
    ;
    function nk(a) {
        return new mk(a.top,a.right,a.bottom,a.left)
    }
    ba.contains = function(a) {
        return this && a ? a instanceof mk ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    }
    ;
    function ok(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    ba.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    ba.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    ba.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    function pk(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    function qk(a, b) {
        var c = Math.max(a.left, b.left)
          , d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a)
                return new pk(c,e,d - c,a - e)
        }
        return null
    }
    function rk(a, b) {
        var c = qk(a, b);
        if (!c || !c.height || !c.width)
            return [new pk(a.left,a.top,a.width,a.height)];
        c = [];
        var d = a.top
          , e = a.height
          , f = a.left + a.width
          , g = a.top + a.height
          , h = b.left + b.width
          , k = b.top + b.height;
        b.top > a.top && (c.push(new pk(a.left,a.top,a.width,b.top - a.top)),
        d = b.top,
        e -= b.top - a.top);
        k < g && (c.push(new pk(a.left,k,a.width,g - k)),
        e = k - d);
        b.left > a.left && c.push(new pk(a.left,d,b.left - a.left,e));
        h < f && c.push(new pk(h,d,f - h,e));
        return c
    }
    pk.prototype.contains = function(a) {
        return a instanceof ae ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    }
    ;
    pk.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    pk.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    pk.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    const sk = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };
    function tk(a=r) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b)
            try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch {}
        return b?.pageViewId && b?.canonicalUrl ? b : null
    }
    function uk(a=tk()) {
        return a && a.mode ? +a.mode.version || null : null
    }
    function vk(a=tk()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++)
                b.push(sk[a[c]] || "x");
            return b.join()
        }
        return null
    }
    function wk() {
        var a = tk();
        return a && a.initialIntersection
    }
    function xk() {
        const a = wk();
        return a && xa(a.rootBounds) ? new be(a.rootBounds.width,a.rootBounds.height) : null
    }
    function yk(a=tk()) {
        return a ? We(a.master) ? a.master : null : null
    }
    function zk(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = ()=>{}
          , e = ()=>{}
        ;
        b && (c.push(b),
        e = ()=>{
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            ab(c, b);
            d()
        }
        );
        if (a.ampInaboxInitialized)
            return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g=>{
            if (a.ampInaboxInitialized)
                g = !0;
            else {
                var h, k = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g),
                g = h[1],
                a.ampInaboxInitialized || g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || $e(a.document, g ? wj`https://cdn.ampproject.org/rtv/${g}/amp4ads-host-v0.js` : wj`https://cdn.ampproject.org/amp4ads-host-v0.js`));
                g = !1
            }
            g && d()
        }
        ;
        c.google_amp_listener_added || (c.google_amp_listener_added = !0,
        Ob(a, "message", f),
        d = ()=>{
            Rb(a, "message", f)
        }
        );
        return e
    }
    ;var Ak = ()=>a=>{
        a = {
            id: "unsafeurl",
            ctx: 638,
            url: a
        };
        var b = [];
        for (c in a)
            Be(c, a[c], b);
        var c = Ae("https://pagead2.googlesyndication.com/pagead/gen_204", b.join("&"));
        navigator.sendBeacon && navigator.sendBeacon(c, "")
    }
    ;
    function Bk(a, b, c) {
        if ("string" === typeof b)
            (b = Ck(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d]
                  , f = Ck(c, d);
                f && (c.style[f] = e)
            }
    }
    var Dk = {};
    function Ck(a, b) {
        var c = Dk[b];
        if (!c) {
            var d = ge(b);
            c = d;
            void 0 === a.style[d] && (d = (Gc ? "Webkit" : Fc ? "Moz" : Cc ? "ms" : null) + he(d),
            void 0 !== a.style[d] && (c = d));
            Dk[b] = c
        }
        return c
    }
    function Ek(a, b) {
        var c = a.style[ge(b)];
        return "undefined" !== typeof c ? c : a.style[Ck(a, b)] || ""
    }
    function Fk(a, b) {
        var c = ke(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
    function Gk(a, b) {
        return Fk(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }
    function Hk(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }
    function Ik(a) {
        var b = ke(a)
          , c = new ae(0,0);
        var d = b ? ke(b) : document;
        d = !Cc || 9 <= Number(Rc) || "CSS1Compat" == ie(d).g.compatMode ? d.documentElement : d.body;
        if (a == d)
            return c;
        a = Hk(a);
        b = me(ie(b).g);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
    function Jk(a) {
        var b = Kk;
        if ("none" != Gk(a, "display"))
            return b(a);
        var c = a.style
          , d = c.display
          , e = c.visibility
          , f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }
    function Kk(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = Gc && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Hk(a),
        new be(a.right - a.left,a.bottom - a.top)) : new be(b,c)
    }
    function Lk(a, b) {
        if (/^\d+px?$/.test(b))
            return parseInt(b, 10);
        var c = a.style.left
          , d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }
    function Mk(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? Lk(a, b) : 0
    }
    var Nk = {
        thin: 2,
        medium: 4,
        thick: 6
    };
    function Ok(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
            return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in Nk ? Nk[b] : Lk(a, b)
    }
    ;var Pk = a=>"number" === typeof a && 0 < a
      , Rk = (a,b)=>{
        a = Qk(a);
        if (!a)
            return b;
        const c = b.slice(-1);
        return b + ("?" === c || "#" === c ? "" : "&") + a
    }
      , Qk = a=>Object.entries(Sk(a)).map(([b,c])=>`${b}=${encodeURIComponent(String(c))}`).join("&")
      , Sk = a=>{
        const b = {};
        df(a, (c,d)=>{
            if (c || 0 === c || !1 === c)
                "boolean" === typeof c && (c = c ? 1 : 0),
                b[d] = c
        }
        );
        return b
    }
      , Tk = ()=>{
        try {
            return Xj.history.length
        } catch (a) {
            return 0
        }
    }
      , Uk = a=>{
        a = yk(tk(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + 1
    }
      , Vk = a=>{
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
      , Wk = a=>{
        let b;
        b = 9 !== a.nodeType && a.id;
        a: {
            if (a && a.nodeName && a.parentElement) {
                var c = a.nodeName.toString().toLowerCase();
                const d = a.parentElement.childNodes;
                let e = 0;
                for (let f = 0; f < d.length; ++f) {
                    const g = d[f];
                    if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                        if (a === g) {
                            c = "." + e;
                            break a
                        }
                        ++e
                    }
                }
            }
            c = ""
        }
        return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
    }
      , Xk = ()=>{
        if (!Xj)
            return !1;
        try {
            return !(!Xj.navigator.standalone && !Xj.top.navigator.standalone)
        } catch (a) {
            return !1
        }
    }
      , Yk = a=>(a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1
      , Zk = a=>{
        let b = Number(a.google_ad_width)
          , c = Number(a.google_ad_height);
        if (!(0 < b && 0 < c)) {
            a: {
                try {
                    const e = String(a.google_ad_format);
                    if (e && e.match) {
                        const f = e.match(/(\d+)x(\d+)/i);
                        if (f) {
                            const g = parseInt(f[1], 10)
                              , h = parseInt(f[2], 10);
                            if (0 < g && 0 < h) {
                                var d = {
                                    width: g,
                                    height: h
                                };
                                break a
                            }
                        }
                    }
                } catch (e) {}
                d = null
            }
            a = d;
            if (!a)
                return null;
            b = 0 < b ? b : a.width;
            c = 0 < c ? c : a.height
        }
        return {
            width: b,
            height: c
        }
    }
    ;
    class $k {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    }
    ;const al = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var bl = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    }
      , cl = class {
        constructor(a, b, c) {
            this.url = a;
            this.win = b;
            this.yg = !!c;
            this.depth = null
        }
    }
    ;
    let dl = null;
    function el() {
        if (null === dl) {
            dl = "";
            try {
                let a = "";
                try {
                    a = r.top.location.hash
                } catch (b) {
                    a = r.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    dl = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return dl
    }
    ;function fl() {
        const a = r.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }
    function gl() {
        const a = r.performance;
        return a && a.now ? a.now() : null
    }
    ;var hl = class {
        constructor(a, b) {
            var c = gl() || fl();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    }
    ;
    const il = r.performance
      , jl = !!(il && il.mark && il.measure && il.clearMarks)
      , kl = Gb(()=>{
        var a;
        if (a = jl)
            a = el(),
            a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    }
    );
    function ll(a) {
        a && il && kl() && (il.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),
        il.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    function ml(a) {
        a.g = !1;
        a.i != a.j.google_js_reporting_queue && (kl() && Ra(a.i, ll),
        a.i.length = 0)
    }
    function nl(a, b) {
        if (!a.g)
            return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw ll(c),
            e;
        }
        a.end(c);
        return d
    }
    class ol {
        constructor(a) {
            this.i = [];
            this.j = a || r;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [],
            this.i = a.google_js_reporting_queue,
            b = a.google_measure_js_timing);
            this.g = kl() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g)
                return null;
            a = new hl(a,b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            il && kl() && il.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (gl() || fl()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                il && kl() && il.mark(b);
                !this.g || 2048 < this.i.length || this.i.push(a)
            }
        }
    }
    ;function pl(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }
    function ql(a, b, c, d, e) {
        const f = [];
        df(a, function(g, h) {
            (g = rl(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }
    function rl(a, b, c, d, e) {
        if (null == a)
            return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0,
            d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++)
                    f.push(rl(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a)
            return e = e || 0,
            2 > e ? encodeURIComponent(ql(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
    function sl(a) {
        let b = 1;
        for (const c in a.i)
            b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }
    function tl(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b
          , d = sl(a) - b.length;
        if (0 > d)
            return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f]
              , h = a.i[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let l = ql(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.j;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class ul {
        constructor() {
            this.j = "&";
            this.i = {};
            this.l = 0;
            this.g = []
        }
    }
    ;function vl(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = wl(a.stack, b));
        return b
    }
    function wl(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c; )
                c = a,
                a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    var yl = class {
        constructor(a, b, c=null) {
            this.wa = a;
            this.A = b;
            this.i = c;
            this.g = null;
            this.j = !1;
            this.B = this.va
        }
        nf(a) {
            this.g = a
        }
        l(a) {
            this.j = a
        }
        ic(a, b, c) {
            let d, e;
            try {
                this.i && this.i.g ? (e = this.i.start(a.toString(), 3),
                d = b(),
                this.i.end(e)) : d = b()
            } catch (f) {
                b = this.A;
                try {
                    ll(e),
                    b = this.B(a, new $k(f,{
                        message: vl(f)
                    }), void 0, c)
                } catch (g) {
                    this.va(217, g)
                }
                if (b)
                    window.console?.error?.(f);
                else
                    throw f;
            }
            return d
        }
        La(a, b, c, d) {
            return (...e)=>this.ic(a, ()=>b.apply(c, e), d)
        }
        va(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const M = new ul;
                var g = M;
                g.g.push(1);
                g.i[1] = pl("context", a);
                b.error && b.meta && b.id || (b = new $k(b,{
                    message: vl(b)
                }));
                if (b.msg) {
                    let U = b.msg;
                    null == U.substring && (U = `b/320546888 ${typeof U} ${U}`);
                    g = M;
                    var h = U.substring(0, 512);
                    g.g.push(2);
                    g.i[2] = pl("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.g)
                    try {
                        this.g(b)
                    } catch (U) {}
                if (d)
                    try {
                        d(b)
                    } catch (U) {}
                d = M;
                k = [k];
                d.g.push(3);
                d.i[3] = k;
                d = r;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (We(l)) {
                        var m = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else
                        m = b,
                        b = null;
                    k.push(new cl(m || "",l));
                    try {
                        d = l.parent
                    } catch (U) {
                        d = null
                    }
                } while (d && l != d);
                for (let U = 0, mb = k.length - 1; U <= mb; ++U)
                    k[U].depth = mb - U;
                l = r;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (m = 1; m < k.length; ++m) {
                        var n = k[m];
                        n.url || (n.url = l.location.ancestorOrigins[m - 1] || "",
                        n.yg = !0)
                    }
                var p = k;
                let Ba = new cl(r.location.href,r,!1);
                l = null;
                const Za = p.length - 1;
                for (n = Za; 0 <= n; --n) {
                    var q = p[n];
                    !l && al.test(q.url) && (l = q);
                    if (q.url && !q.yg) {
                        Ba = q;
                        break
                    }
                }
                q = null;
                const Ib = p.length && p[Za].url;
                0 != Ba.depth && Ib && (q = p[Za]);
                f = new bl(Ba,q);
                if (f.i) {
                    p = M;
                    var v = f.i.url || "";
                    p.g.push(4);
                    p.i[4] = pl("top", v)
                }
                var A = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var B = f.g.url.match(ze)
                      , E = B[1]
                      , J = B[3]
                      , G = B[4];
                    v = "";
                    E && (v += E + ":");
                    J && (v += "//",
                    v += J,
                    G && (v += ":" + G));
                    var K = v
                } else
                    K = "";
                E = M;
                A = [A, {
                    url: K
                }];
                E.g.push(5);
                E.i[5] = A;
                xl(this.wa, e, M, this.j, c)
            } catch (M) {
                try {
                    xl(this.wa, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: vl(M),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (Ba) {}
            }
            return this.A
        }
        Da(a, b, c) {
            b.catch(d=>{
                d = d ? d : "unknown rejection";
                this.va(a, d instanceof Error ? d : Error(d), void 0, c || this.g || void 0)
            }
            )
        }
    }
    ;
    var zl = a=>"string" === typeof a
      , Al = a=>void 0 === a;
    function Bl() {
        var a = Cl;
        return b=>{
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c))
                    return !0;
            return !1
        }
    }
    ;var Dl = class extends R {
        constructor() {
            super()
        }
    }
    ;
    function El(a, b) {
        try {
            const c = d=>[{
                [d.lh]: d.Fg
            }];
            return JSON.stringify([a.filter(d=>d.Ve).map(c), b.toJSON(), a.filter(d=>!d.Ve).map(c)])
        } catch (c) {
            return Fl(c, b),
            ""
        }
    }
    function Fl(a, b) {
        try {
            Wj({
                m: vl(a instanceof Error ? a : Error(String(a))),
                b: Fi(b, 1) || null,
                v: O(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    var Gl = class {
        constructor(a, b) {
            var c = new Dl;
            a = Q(c, 1, a);
            this.j = ej(a, 2, b).i()
        }
    }
    ;
    var Hl = class extends R {
        getValue() {
            return Fi(this, 1)
        }
    }
    ;
    function Il(a) {
        var b = new Jl;
        return bi(b, 1, dh(a))
    }
    var Jl = class extends R {
        getValue() {
            return Fi(this, 1)
        }
    }
    ;
    var Kl = class extends R {
        constructor() {
            super()
        }
        getValue() {
            return Fi(this, 1)
        }
    }
    ;
    function Ll(a, b) {
        return P(a, 1, b)
    }
    function Ml(a, b) {
        return P(a, 2, b)
    }
    function Nl(a, b) {
        return P(a, 3, b)
    }
    function Ol(a, b) {
        return P(a, 4, b)
    }
    function Pl(a, b) {
        return P(a, 5, b)
    }
    function Ql(a, b) {
        return pi(a, 8, $g(b), 0)
    }
    function Rl(a, b) {
        return pi(a, 9, $g(b), 0)
    }
    var Sl = class extends R {
        constructor() {
            super()
        }
    }
    ;
    function Tl(a, b) {
        return P(a, 1, b)
    }
    function Ul(a, b) {
        return P(a, 2, b)
    }
    var Vl = class extends R {
    }
    ;
    function Wl(a, b) {
        yi(a, 1, Vl, b)
    }
    var ni = class extends R {
        ih(a) {
            yi(this, 1, Vl, void 0, a, !1, 1);
            return this
        }
    }
    ;
    ni.O = [1];
    var Xl = class extends R {
        constructor() {
            super()
        }
    }
    ;
    function Yl(a, b) {
        return oi(a, 1, b, sh)
    }
    function Zl(a, b) {
        return oi(a, 12, b, qh)
    }
    function $l() {
        var a = new am
          , b = a.V
          , c = "irr"
          , d = b[C];
        Sg(d);
        var e = d & 2;
        let f = ai(b, d, 2);
        Array.isArray(f) || (f = Qg);
        const g = !!(d & 32);
        let h = f[C] | 0;
        0 === h && g && !e ? (h |= 33,
        Dg(f, h)) : h & 1 || (h |= 1,
        Dg(f, h));
        if (e)
            h & 2 || Eg(f),
            Object.freeze(f);
        else if (2 & h || 2048 & h)
            f = zg(f),
            e = 1,
            g && (e |= 32),
            Dg(f, e),
            ci(b, d, 2, f);
        b = f;
        d = b[C] | 0;
        c = sh(c, !!(4 & d) && !!(4096 & d));
        b.push(c);
        return a
    }
    function bm(a, b) {
        return $i(a, 3, b)
    }
    function cm(a, b) {
        return $i(a, 4, b)
    }
    function dm(a, b) {
        return $i(a, 5, b)
    }
    function em(a, b) {
        return $i(a, 7, b)
    }
    function fm(a, b) {
        return $i(a, 8, b)
    }
    function gm(a, b) {
        return P(a, 9, b)
    }
    function hm(a, b) {
        return xi(a, 10, b)
    }
    function im(a, b) {
        return oi(a, 11, b, jh)
    }
    var am = class extends R {
        constructor() {
            super()
        }
    }
    ;
    am.O = [1, 12, 2, 10, 11];
    function jm(a) {
        var b = km();
        H(a, 1, b)
    }
    function lm(a, b) {
        return P(a, 2, b)
    }
    function mm(a, b) {
        return xi(a, 3, b)
    }
    function nm(a, b) {
        return xi(a, 4, b)
    }
    function om(a, b) {
        yi(a, 4, Jl, b);
        return a
    }
    function pm(a, b) {
        return xi(a, 5, b)
    }
    function qm(a, b) {
        return oi(a, 6, b, sh)
    }
    function rm(a, b) {
        return P(a, 7, b)
    }
    function sm(a, b) {
        H(a, 9, b)
    }
    function tm(a, b) {
        return $i(a, 10, b)
    }
    function um(a, b) {
        return $i(a, 11, b)
    }
    function vm(a, b) {
        return $i(a, 12, b)
    }
    function wm(a) {
        var b = a.V;
        const c = b[C];
        a = c & 2;
        b = mi(b, c, ai(b, c, 14));
        null == b ? a = b : (!a && ni && (b.Uh = !0),
        a = b);
        return a
    }
    var xm = class extends R {
        constructor() {
            super()
        }
        H(a) {
            yi(this, 3, Hl, void 0, a, !1, 1);
            return this
        }
        G(a) {
            return P(this, 8, a)
        }
    }
    ;
    xm.O = [3, 4, 5, 15, 6];
    var ym = class extends R {
        constructor() {
            super()
        }
    }
    ;
    ym.O = [2];
    var zm = class extends R {
    }
    ;
    var Am = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var Bm = class extends R {
        constructor() {
            super()
        }
    }
      , Cm = [1];
    function Dm(a) {
        var b = new Em;
        return Q(b, 1, a)
    }
    var Em = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var Fm = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var Gm = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var Hm = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var Im = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var Jm = class extends R {
        constructor() {
            super()
        }
        getContentUrl() {
            return O(this, 1)
        }
    }
    ;
    var Km = class extends R {
        constructor() {
            super()
        }
    }
    ;
    Km.O = [1];
    var Lm = class extends R {
        constructor() {
            super()
        }
    }
    ;
    function Mm() {
        var a = new Nm
          , b = new Lm;
        return wi(a, 1, Om, b)
    }
    var Nm = class extends R {
        constructor() {
            super()
        }
    }
      , Om = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    var Pm = class extends R {
        constructor() {
            super()
        }
    }
    ;
    Pm.O = [1];
    var Qm = class extends R {
        constructor() {
            super()
        }
    }
    ;
    Qm.O = [2];
    var Rm = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var tn = class extends R {
        constructor() {
            super()
        }
    }
    ;
    function un(a) {
        var b = new vn;
        return Q(b, 1, a)
    }
    var vn = class extends R {
        constructor() {
            super()
        }
    }
    ;
    vn.O = [9];
    var wn = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var xn = class extends R {
        constructor() {
            super()
        }
    }
    ;
    xn.O = [2];
    var yn = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var zn = class extends R {
        constructor() {
            super()
        }
    }
      , An = [4, 5];
    var Bn = class extends R {
        constructor() {
            super()
        }
    }
    ;
    function Cn(a) {
        var b = new Dn;
        return bj(b, 2, a)
    }
    var Dn = class extends R {
        constructor() {
            super()
        }
    }
    ;
    Dn.O = [3];
    var En = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var Fn = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var Gn = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var Hn = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var In = class extends R {
        constructor() {
            super()
        }
    }
      , Jn = [2, 3];
    var Kn = class extends R {
        constructor() {
            super()
        }
    }
      , Ln = [3, 4, 5, 6, 7, 8, 9, 11, 12, 13];
    var Mn = class extends R {
        constructor() {
            super()
        }
        kc(a) {
            return ej(this, 2, a)
        }
    }
      , Nn = [4, 5, 6, 8, 9, 10, 11, 12];
    var On = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var Pn = class extends R {
        constructor() {
            super()
        }
    }
    ;
    Pn.O = [4, 5];
    var Qn = class extends R {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return Di(this, 1)
        }
    }
    ;
    Qn.O = [2];
    var Rn = class extends R {
        constructor() {
            super()
        }
    }
      , Sn = [4, 6];
    class Tn extends Gl {
        constructor() {
            super(...arguments)
        }
    }
    function Un(a, ...b) {
        Vn(a, ...b.map(c=>({
            Ve: !0,
            lh: 3,
            Fg: c.toJSON()
        })))
    }
    function Wn(a, ...b) {
        Vn(a, ...b.map(c=>({
            Ve: !0,
            lh: 7,
            Fg: c.toJSON()
        })))
    }
    var Xn = class extends Tn {
    }
    ;
    var Yn = (a,b)=>{
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(()=>{}
        )
    }
    ;
    function Vn(a, ...b) {
        try {
            a.C && 65536 <= El(a.g.concat(b), a.j).length && Zn(a),
            a.l && !a.A && (a.A = !0,
            $n(a.l, ()=>{
                Zn(a)
            }
            )),
            a.g.push(...b),
            a.g.length >= a.B && Zn(a),
            a.g.length && null === a.i && (a.i = setTimeout(()=>{
                Zn(a)
            }
            , a.D))
        } catch (c) {
            Fl(c, a.j)
        }
    }
    function Zn(a) {
        null !== a.i && (clearTimeout(a.i),
        a.i = null);
        if (a.g.length) {
            var b = El(a.g, a.j);
            a.G("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var ao = class extends Xn {
        constructor(a, b, c, d, e) {
            super(2, a);
            this.G = Yn;
            this.D = b;
            this.B = c;
            this.C = d;
            this.l = e;
            this.g = [];
            this.i = null;
            this.A = !1
        }
    }
      , bo = class extends ao {
        constructor(a, b=1E3, c=100, d=!1, e) {
            super(a, b, c, d && !0, e)
        }
    }
    ;
    function co(a, b, c) {
        return b[a] || c
    }
    ;function eo(a, b) {
        a.g = (c,d)=>co(2, b, ()=>[])(c, 1, d);
        a.i = ()=>co(3, b, ()=>[])(1)
    }
    class fo {
        g() {
            return []
        }
        i() {
            return []
        }
    }
    function go(a, b) {
        return w(fo).g(a, b)
    }
    function ho() {
        return w(fo).i()
    }
    ;function xl(a, b, c, d=!1, e) {
        if ((d ? a.g : Math.random()) < (e || .01))
            try {
                let f;
                c instanceof ul ? f = c : (f = new ul,
                df(c, (h,k)=>{
                    var l = f;
                    const m = l.l++;
                    h = pl(k, h);
                    l.g.push(m);
                    l.i[m] = h
                }
                ));
                const g = tl(f, "/pagead/gen_204?id=" + b + "&");
                g && Tj(r, g)
            } catch (f) {}
    }
    function io(a, b) {
        0 <= b && 1 >= b && (a.g = b)
    }
    class jo {
        constructor() {
            this.g = Math.random()
        }
    }
    ;let ko, lo;
    const mo = new ol(window);
    (a=>{
        ko = a ?? new jo;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        io(ko, window.google_srt);
        lo = new yl(ko,!0,mo);
        lo.nf(()=>{}
        );
        lo.l(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || ml(mo) : mo.g && Ob(window, "load", ()=>{
            window.google_measure_js_timing || ml(mo)
        }
        )
    }
    )();
    let no = (new Date).getTime();
    var oo = {
        cm: 0,
        bm: 1,
        Yl: 2,
        Tl: 3,
        Zl: 4,
        Ul: 5,
        am: 6,
        Wl: 7,
        Xl: 8,
        Sl: 9,
        Vl: 10,
        dm: 11
    };
    var po = {
        fm: 0,
        gm: 1,
        em: 2
    };
    function qo(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }
    function ro(a) {
        a = Wa(a, b=>new mk(b.top,b.right,b.bottom,b.left));
        a = so(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }
    function so(a) {
        if (!a.length)
            throw Error("pso:box:m:nb");
        return Xa(a.slice(1), (b,c)=>{
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }
        , nk(a[0]))
    }
    ;var Vc = {
        Vm: 0,
        Hl: 1,
        Kl: 2,
        Il: 3,
        Jl: 4,
        Ql: 8,
        fn: 9,
        sm: 10,
        tm: 11,
        cn: 16,
        ul: 17,
        rl: 24,
        pm: 25,
        Ik: 26,
        Hk: 27,
        yh: 30,
        jm: 32,
        mm: 40,
        mn: 41,
        hn: 42
    };
    var to = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    }
      , uo = {
        [1]: 1,
        [2]: 1,
        [3]: 7,
        [4]: 7,
        [8]: 2,
        [27]: 3,
        [9]: 4,
        [30]: 5
    };
    var vo = 728 * 1.38;
    function wo(a) {
        return a !== a.top ? 512 : 0
    }
    function xo(a, b=420, c=!1) {
        return (a = yo(a, c)) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384
    }
    function zo(a) {
        var b = yo(a);
        a = a.innerWidth;
        return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
    }
    function Ao(a) {
        return Math.max(0, Bo(a, !0) - S(a))
    }
    function Co(a) {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }
    function S(a) {
        return Co(a).clientHeight
    }
    function yo(a, b=!1) {
        const c = Co(a).clientWidth;
        return b ? c * Kf(a) : c
    }
    function Bo(a, b) {
        const c = Co(a);
        return b ? (a = S(a),
        c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    }
    function Do(a, b) {
        return Eo(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1
    }
    function Fo(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }
    function Go(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }
    function Ho(a) {
        return void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }
    function Io(a) {
        const b = {};
        let c;
        Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                const d = c[a];
                if ("key"in d && "value"in d) {
                    const e = d.value;
                    b[d.key] = null == e ? null : String(e)
                }
            }
        return b
    }
    function Jo(a, b, c, d) {
        xl(c, b, {
            c: d.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    }
    function Ko(a) {
        const b = {
            bottom: "auto",
            clear: "none",
            display: "inline",
            "float": "none",
            height: "auto",
            left: "auto",
            margin: 0,
            "margin-bottom": 0,
            "margin-left": 0,
            "margin-right": "0",
            "margin-top": 0,
            "max-height": "none",
            "max-width": "none",
            opacity: 1,
            overflow: "visible",
            padding: 0,
            "padding-bottom": 0,
            "padding-left": 0,
            "padding-right": 0,
            "padding-top": 0,
            position: "static",
            right: "auto",
            top: "auto",
            "vertical-align": "baseline",
            visibility: "visible",
            width: "auto",
            "z-index": "auto"
        };
        Ra(Object.keys(b), c=>{
            Ek(a, c) || Bk(a, c, b[c])
        }
        );
        wf(a)
    }
    function Eo(a) {
        return 26 === a || 27 === a || 40 === a || 41 === a
    }
    ;function Lo(a, b) {
        Mo(a).forEach(b, void 0)
    }
    function Mo(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d]);
        return b
    }
    ;function No(a, b) {
        return void 0 !== a.g[Oo(b)]
    }
    function Po(a) {
        const b = [];
        for (const c in a.g)
            void 0 !== a.g[c] && a.g.hasOwnProperty(c) && b.push(a.i[c]);
        return b
    }
    function Qo(a) {
        const b = [];
        for (const c in a.g)
            void 0 !== a.g[c] && a.g.hasOwnProperty(c) && b.push(a.g[c]);
        return b
    }
    const Ro = class {
        constructor() {
            this.g = {};
            this.i = {}
        }
        set(a, b) {
            const c = Oo(a);
            this.g[c] = b;
            this.i[c] = a
        }
        get(a, b) {
            a = Oo(a);
            return void 0 !== this.g[a] ? this.g[a] : b
        }
        Ec() {
            return Po(this).length
        }
        clear() {
            this.g = {};
            this.i = {}
        }
    }
    ;
    function Oo(a) {
        return a instanceof Object ? String(za(a)) : a + ""
    }
    ;const So = class {
        constructor(a) {
            this.g = new Ro;
            if (a)
                for (var b = 0; b < a.length; ++b)
                    this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return No(this.g, a)
        }
    }
    ;
    const To = new So("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
    function Uo(a, {hb: b, bb: c, Fb: d}) {
        return d && c(b) ? b : (b = b.parentElement) ? Vo(a, {
            hb: b,
            bb: c,
            Fb: !0
        }) : null
    }
    function Vo(a, {hb: b, bb: c, Fb: d=!1}) {
        const e = Wo({
            hb: b,
            bb: c,
            Fb: d
        })
          , f = a.g.get(e);
        if (f)
            return f.element;
        b = Uo(a, {
            hb: b,
            bb: c,
            Fb: d
        });
        a.g.set(e, {
            element: b
        });
        return b
    }
    var Xo = class {
        constructor() {
            this.g = new Map
        }
    }
    ;
    function Wo({hb: a, bb: b, Fb: c}) {
        a = za(a);
        b = za(b);
        return `${a}:${b}:${c}`
    }
    ;function Yo(a) {
        Sb(a.document.body.offsetHeight)
    }
    ;function Zo(a) {
        a && "function" == typeof a.ka && a.ka()
    }
    ;function T() {
        this.B = this.B;
        this.G = this.G
    }
    T.prototype.B = !1;
    T.prototype.ka = function() {
        this.B || (this.B = !0,
        this.i())
    }
    ;
    function $o(a, b) {
        ap(a, Ha(Zo, b))
    }
    function ap(a, b) {
        a.B ? b() : (a.G || (a.G = []),
        a.G.push(b))
    }
    T.prototype.i = function() {
        if (this.G)
            for (; this.G.length; )
                this.G.shift()()
    }
    ;
    function bp(a) {
        a.g.forEach((b,c)=>{
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        }
        )
    }
    function cp(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.g.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new Map
            };
            a.g.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    }
    var dp = class extends T {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map,
            a.set(b, c),
            b = c);
            this.g = b
        }
        i() {
            bp(this);
            super.i()
        }
    }
    ;
    function ep(a) {
        const b = new V(a.getValue());
        a.listen(c=>b.g(c));
        return b
    }
    function fp(a, b) {
        const c = new V({
            first: a.P,
            second: b.P
        });
        a.listen(()=>c.g({
            first: a.P,
            second: b.P
        }));
        b.listen(()=>c.g({
            first: a.P,
            second: b.P
        }));
        return c
    }
    function gp(...a) {
        const b = [...a]
          , c = ()=>b.every(f=>f.P)
          , d = new V(c())
          , e = ()=>{
            d.g(c())
        }
        ;
        b.forEach(f=>f.listen(e));
        return hp(d)
    }
    function ip(...a) {
        const b = [...a]
          , c = ()=>-1 !== b.findIndex(f=>f.P)
          , d = new V(c())
          , e = ()=>{
            d.g(c())
        }
        ;
        b.forEach(f=>f.listen(e));
        return hp(d)
    }
    function hp(a, b=jp) {
        var c = a.P;
        const d = new V(a.P);
        a.listen(e=>{
            b(e, c) || (c = e,
            d.g(e))
        }
        );
        return d
    }
    function kp(a, b, c) {
        return a.i(d=>{
            d === b && c()
        }
        )
    }
    function lp(a, b, c) {
        if (a.P === b)
            c();
        else {
            var d = {
                gd: null
            };
            d.gd = kp(a, b, ()=>{
                d.gd && (d.gd(),
                d.gd = null);
                c()
            }
            )
        }
    }
    function mp(a, b, c) {
        hp(a).listen(d=>{
            d === b && c()
        }
        )
    }
    function np(a, b) {
        a.l && a.l();
        a.l = b.listen(c=>a.g(c), !0)
    }
    function op(a, b, c, d) {
        const e = new V(!1);
        var f = null;
        a = a.map(d);
        kp(a, !0, ()=>{
            null === f && (f = b.setTimeout(()=>{
                e.g(!0)
            }
            , c))
        }
        );
        kp(a, !1, ()=>{
            e.g(!1);
            null !== f && (b.clearTimeout(f),
            f = null)
        }
        );
        return hp(e)
    }
    function pp(a) {
        return {
            listen: b=>a.listen(b),
            getValue: ()=>a.P
        }
    }
    class V {
        constructor(a) {
            this.P = a;
            this.j = new Map;
            this.B = 1;
            this.l = null
        }
        listen(a, b=!1) {
            const c = this.B++;
            this.j.set(c, a);
            b && a(this.P);
            return ()=>{
                this.j.delete(c)
            }
        }
        i(a) {
            return this.listen(a, !0)
        }
        A() {
            return this.P
        }
        g(a) {
            this.P = a;
            this.j.forEach(b=>{
                b(this.P)
            }
            )
        }
        map(a) {
            const b = new V(a(this.P));
            this.listen(c=>b.g(a(c)));
            return b
        }
    }
    function jp(a, b) {
        return a == b
    }
    ;function qp(a) {
        return new rp(a)
    }
    function sp(a, b) {
        Ra(a.g, c=>{
            c(b)
        }
        )
    }
    var tp = class {
        constructor() {
            this.g = []
        }
    }
    ;
    class rp {
        constructor(a) {
            this.g = a
        }
        listen(a) {
            this.g.g.push(a)
        }
        map(a) {
            const b = new tp;
            this.listen(c=>sp(b, a(c)));
            return qp(b)
        }
        delay(a, b) {
            const c = new tp;
            this.listen(d=>{
                a.setTimeout(()=>{
                    sp(c, d)
                }
                , b)
            }
            );
            return qp(c)
        }
    }
    function up(...a) {
        const b = new tp;
        a.forEach(c=>{
            c.listen(d=>{
                sp(b, d)
            }
            )
        }
        );
        return qp(b)
    }
    ;function vp(a) {
        return hp(fp(a.g, a.j).map(b=>{
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : wp(c, b)
        }
        ))
    }
    var yp = class {
        constructor(a) {
            this.i = a;
            this.g = new V(null);
            this.j = new V(null);
            this.l = new tp;
            this.C = b=>{
                null == this.g.P && 1 == b.touches.length && this.g.g(b.touches[0])
            }
            ;
            this.A = b=>{
                const c = this.g.P;
                null != c && (b = xp(c, b.changedTouches),
                null != b && (this.g.g(null),
                this.j.g(null),
                sp(this.l, wp(c, b))))
            }
            ;
            this.B = b=>{
                var c = this.g.P;
                null != c && (c = xp(c, b.changedTouches),
                null != c && (this.j.g(c),
                b.preventDefault()))
            }
        }
    }
    ;
    function wp(a, b) {
        return {
            uh: b.pageX - a.pageX,
            wh: b.pageY - a.pageY
        }
    }
    function xp(a, b) {
        if (null == b)
            return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier)
                return b[c];
        return null
    }
    ;function zp(a) {
        return hp(fp(a.g, a.i).map(b=>{
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : Ap(c, b)
        }
        ))
    }
    var Bp = class {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.g = new V(null);
            this.i = new V(null);
            this.j = new tp;
            this.G = c=>{
                this.g.g(c)
            }
            ;
            this.B = c=>{
                const d = this.g.P;
                null != d && (this.g.g(null),
                this.i.g(null),
                sp(this.j, Ap(d, c)))
            }
            ;
            this.C = c=>{
                null != this.g.P && (this.i.g(c),
                c.preventDefault())
            }
        }
    }
    ;
    function Ap(a, b) {
        return {
            uh: b.screenX - a.screenX,
            wh: b.screenY - a.screenY
        }
    }
    ;var Ep = (a,b,c)=>{
        const d = new Cp(a,b,c);
        return ()=>Dp(d)
    }
    ;
    function Dp(a) {
        if (a.g)
            return !1;
        if (null == a.i)
            return Fp(a),
            !0;
        const b = a.i + a.A - (new Date).getTime();
        if (1 > b)
            return Fp(a),
            !0;
        Gp(a, b);
        return !0
    }
    function Fp(a) {
        a.i = (new Date).getTime();
        a.l()
    }
    function Gp(a, b) {
        a.g = !0;
        a.j.setTimeout(()=>{
            a.g = !1;
            Fp(a)
        }
        , b)
    }
    class Cp {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.l = c;
            this.i = null;
            this.g = !1
        }
    }
    ;function Hp(a) {
        return Ip(zp(a.g), vp(a.i))
    }
    function Jp(a) {
        return up(qp(a.g.j), qp(a.i.l))
    }
    var Kp = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    }
    ;
    function Ip(a, b) {
        return fp(a, b).map(({first: c, second: d})=>c || d || null)
    }
    ;var Lp = class {
        constructor() {
            this.cache = new Map
        }
        getBoundingClientRect(a) {
            var b = this.cache.get(a);
            if (b)
                return b;
            b = a.getBoundingClientRect();
            this.cache.set(a, b);
            return b
        }
    }
    ;
    function Mp(a) {
        null == a.A && (a.A = new V(a.C.getBoundingClientRect()));
        return a.A
    }
    class Np extends T {
        constructor(a, b) {
            super();
            this.j = a;
            this.C = b;
            this.D = !1;
            this.A = null;
            this.l = ()=>{
                Mp(this).g(this.C.getBoundingClientRect())
            }
        }
        g() {
            this.D || (this.D = !0,
            this.j.addEventListener("resize", this.l),
            this.j.addEventListener("scroll", this.l));
            return Mp(this)
        }
        i() {
            this.j.removeEventListener("resize", this.l);
            this.j.removeEventListener("scroll", this.l);
            super.i()
        }
    }
    ;function Op(a, b) {
        return new Pp(a,b)
    }
    function Qp(a) {
        a.win.requestAnimationFrame(()=>{
            a.B || a.j.g(new be(a.element.offsetWidth,a.element.offsetHeight))
        }
        )
    }
    function Rp(a) {
        a.g || (a.g = !0,
        a.l.observe(a.element));
        return hp(a.j, ce)
    }
    var Pp = class extends T {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.g = !1;
            this.j = new V(new be(this.element.offsetWidth,this.element.offsetHeight));
            this.l = new ResizeObserver(()=>{
                Qp(this)
            }
            )
        }
        i() {
            this.l.disconnect();
            super.i()
        }
    }
    ;
    function Sp(a, b) {
        return {
            top: a.g - b,
            right: a.j + a.i,
            bottom: a.g + b,
            left: a.j
        }
    }
    class Tp {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.i = c
        }
        Fc() {
            return this.i
        }
    }
    ;function Up(a, b) {
        a = a.getBoundingClientRect();
        return new Vp(a.top + Go(b),a.bottom - a.top)
    }
    function Wp(a) {
        return new Vp(Math.round(a.g),Math.round(a.i))
    }
    class Vp {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getHeight() {
            return this.i
        }
    }
    ;var Yp = (a,b)=>{
        const c = a.google_pso_loaded_fonts || (a.google_pso_loaded_fonts = [])
          , d = new So(c);
        b = b.filter(e=>!d.contains(e));
        b.length && (Xp(a, b),
        fb(c, b))
    }
    ;
    function Xp(a, b) {
        for (const f of b) {
            b = af("LINK", a.document);
            b.type = "text/css";
            var c = wj`//fonts.googleapis.com/css`
              , d = Ak()
              , e = b;
            c = dd(c, {
                family: f
            });
            if (c instanceof cd)
                d = c;
            else
                a: {
                    if (c instanceof md) {
                        d = c;
                        break a
                    }
                    const g = Ke(c, Je) || td;
                    g === td && d(c);
                    d = g
                }
            e.rel = "stylesheet";
            if (nc("stylesheet", "stylesheet")) {
                e.href = fd(d).toString();
                a: if (d = (e.ownerDocument && e.ownerDocument.defaultView || r).document,
                d.querySelector) {
                    if ((d = d.querySelector('style[nonce],link[rel="stylesheet"][nonce]')) && (d = d.nonce || d.getAttribute("nonce")) && Xd.test(d))
                        break a;
                    d = ""
                } else
                    d = "";
                d && e.setAttribute("nonce", d)
            } else {
                if (d instanceof cd)
                    d = fd(d).toString();
                else if (d instanceof md)
                    d = od(d);
                else {
                    if (!(d instanceof md)) {
                        d = String(d);
                        b: {
                            c = void 0;
                            try {
                                c = new URL(d)
                            } catch (g) {
                                c = "https:";
                                break b
                            }
                            c = c.protocol
                        }
                        "javascript:" === c && (d = "about:invalid#zClosurez");
                        d = new md(d,sd)
                    }
                    d = od(d)
                }
                e.href = d
            }
            a.document.head.appendChild(b)
        }
    }
    ;function Zp(a, b) {
        a.D ? b(a.l) : a.j.push(b)
    }
    function $p(a, b) {
        a.D = !0;
        a.l = b;
        a.j.forEach(c=>{
            c(a.l)
        }
        );
        a.j = []
    }
    class aq extends T {
        constructor(a) {
            super();
            this.g = a;
            this.j = [];
            this.D = !1;
            this.C = this.l = null;
            this.H = Ep(a, 1E3, ()=>{
                if (null != this.C) {
                    var b = Bo(this.g, !0) - this.C;
                    1E3 < b && $p(this, b)
                }
            }
            );
            this.A = null
        }
        K(a, b) {
            null == a ? (this.C = a = Bo(this.g, !0),
            this.g.addEventListener("scroll", this.H),
            null != b && b(a)) : this.A = this.g.setTimeout(()=>{
                this.K(void 0, b)
            }
            , a)
        }
        i() {
            null != this.A && this.g.clearTimeout(this.A);
            this.g.removeEventListener("scroll", this.H);
            this.j = [];
            this.l = null;
            super.i()
        }
    }
    ;var bq = (a,b)=>a.reduce((c,d)=>c.concat(b(d)), []);
    class cq {
        constructor(a=1) {
            this.g = a
        }
        next() {
            var a = 48271 * this.g % 2147483647;
            this.g = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.g / 2147483647
        }
    }
    ;function dq(a, b, c) {
        const d = [];
        for (const e of a.g)
            b(e) ? d.push(e) : c(e);
        return new eq(d)
    }
    function fq(a) {
        return a.g.slice(0)
    }
    function gq(a, b=1) {
        a = fq(a);
        const c = new cq(b);
        nb(a, ()=>c.next());
        return new eq(a)
    }
    const eq = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b,c)=>void a(b, c, this))
        }
        filter(a) {
            return new eq(Ta(this.g, a))
        }
        apply(a) {
            return new eq(a(fq(this)))
        }
        sort(a) {
            return new eq(fq(this).sort(a))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = fq(this);
            b.push(a);
            return new eq(b)
        }
    }
    ;
    class hq {
        constructor(a) {
            this.g = new So(a)
        }
        contains(a) {
            return this.g.contains(a)
        }
    }
    ;function iq(a) {
        return new jq({
            value: a
        },null)
    }
    function kq(a) {
        return new jq(null,a)
    }
    function lq(a) {
        try {
            return iq(a())
        } catch (b) {
            return kq(b)
        }
    }
    function mq(a) {
        return null != a.g ? a.getValue() : null
    }
    function nq(a, b) {
        null != a.g && b(a.getValue());
        return a
    }
    function oq(a, b) {
        null != a.g || b(a.i);
        return a
    }
    class jq {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return null != this.g ? (a = a(this.getValue()),
            a instanceof jq ? a : iq(a)) : this
        }
    }
    ;class pq {
        constructor() {
            this.g = new Ro
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new So,
            this.g.set(a, c));
            c.add(b)
        }
    }
    ;function qq(a) {
        return !a
    }
    function rq(a) {
        return b=>{
            for (const c of a)
                c(b)
        }
    }
    ;function sq(a) {
        return null !== a
    }
    ;var tq = class extends R {
        getId() {
            return I(this, 3)
        }
    }
    ;
    tq.O = [4];
    class uq {
        constructor(a, {Of: b, Ah: c, Mi: d, bh: e}) {
            this.A = a;
            this.j = c;
            this.l = new eq(b || []);
            this.i = e;
            this.g = d
        }
    }
    ;var vq = a=>{
        var b = a.split("~").filter(c=>0 < c.length);
        a = new Ro;
        for (const c of b)
            b = c.indexOf("."),
            -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
        return a
    }
      , xq = a=>{
        var b = wq(a);
        a = [];
        for (let c of b)
            b = String(c.vc),
            a.push(c.zb + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
        return a.join("~")
    }
    ;
    const wq = a=>{
        const b = []
          , c = a.l;
        c && c.g.length && b.push({
            zb: "a",
            vc: yq(c)
        });
        null != a.j && b.push({
            zb: "as",
            vc: a.j
        });
        null != a.g && b.push({
            zb: "i",
            vc: String(a.g)
        });
        null != a.i && b.push({
            zb: "rp",
            vc: String(a.i)
        });
        b.sort(function(d, e) {
            return d.zb.localeCompare(e.zb)
        });
        b.unshift({
            zb: "t",
            vc: zq(a.A)
        });
        return b
    }
      , zq = a=>{
        switch (a) {
        case 0:
            return "aa";
        case 1:
            return "ma";
        default:
            throw Error("Invalid slot type" + a);
        }
    }
      , yq = a=>{
        a = fq(a).map(Aq);
        a = JSON.stringify(a);
        return ff(a)
    }
      , Aq = a=>{
        const b = {};
        null != I(a, 7) && (b.q = I(a, 7));
        null != zi(a, 2) && (b.o = zi(a, 2));
        null != zi(a, 5) && (b.p = zi(a, 5));
        return b
    }
    ;
    function Bq() {
        var a = new Cq;
        return bi(a, 2, dh(1))
    }
    var Cq = class extends R {
        g() {
            return L(this, 1)
        }
        setLocation(a) {
            return bi(this, 1, dh(a))
        }
    }
    ;
    function Dq(a) {
        const b = [].slice.call(arguments).filter(Fb(e=>null === e));
        if (!b.length)
            return null;
        let c = []
          , d = {};
        b.forEach(e=>{
            c = c.concat(e.Wf || []);
            d = Object.assign(d, e.Gc())
        }
        );
        return new Eq(c,d)
    }
    function Fq(a) {
        switch (a) {
        case 1:
            return new Eq(null,{
                google_ad_semantic_area: "mc"
            });
        case 2:
            return new Eq(null,{
                google_ad_semantic_area: "h"
            });
        case 3:
            return new Eq(null,{
                google_ad_semantic_area: "f"
            });
        case 4:
            return new Eq(null,{
                google_ad_semantic_area: "s"
            });
        default:
            return null
        }
    }
    function Gq(a) {
        return null == a ? null : new Eq(null,{
            google_ml_rank: a
        })
    }
    function Hq(a) {
        return null == a ? null : new Eq(null,{
            google_placement_id: xq(a)
        })
    }
    function Iq({fi: a, ui: b=null}) {
        if (null == a)
            return null;
        a = {
            google_daaos_ts: a
        };
        null != b && (a.google_erank = b + 1);
        return new Eq(null,a)
    }
    class Eq {
        constructor(a, b) {
            this.Wf = a;
            this.g = b
        }
        Gc() {
            return this.g
        }
    }
    ;var Jq = class extends R {
    }
    ;
    var Kq = class extends R {
    }
    ;
    var Lq = class extends R {
    }
    ;
    var Mq = class extends R {
    }
    ;
    var Nq = class extends R {
        A() {
            return I(this, 2)
        }
        l() {
            return I(this, 5)
        }
        g() {
            return F(this, Mq, 3)
        }
        Nb() {
            return zi(this, 4)
        }
        j() {
            return fi(this, 6)
        }
        B() {
            return di(this, Lq, 7)
        }
    }
    ;
    Nq.O = [3];
    var Oq = class extends R {
    }
    ;
    var Pq = class extends R {
    }
    ;
    var Qq = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var Rq = class extends R {
        g() {
            return L(this, 3)
        }
        Nb() {
            return Ai(this, 4)
        }
        j() {
            return gi(this, 6)
        }
    }
    ;
    var Sq = class extends R {
    }
    ;
    var Tq = class extends R {
    }
    ;
    var Uq = class extends R {
        ia() {
            return D(this, tq, 1)
        }
        g() {
            return L(this, 2)
        }
    }
    ;
    var Vq = class extends R {
    }
    ;
    var Wq = class extends R {
    }
    ;
    var Xq = class extends R {
        getName() {
            return I(this, 4)
        }
    }
      , Yq = [1, 2, 3];
    var Zq = class extends R {
        g() {
            return D(this, Rq, 10)
        }
    }
    ;
    Zq.O = [2, 5, 6, 11];
    var $q = class extends R {
        g() {
            return gi(this, 2)
        }
        j() {
            return gi(this, 3)
        }
    }
    ;
    var ar = class extends R {
        g() {
            return Ai(this, 1)
        }
    }
    ;
    var br = class extends R {
    }
    ;
    var cr = class extends R {
        g() {
            return Fi(this, 1)
        }
        j() {
            return O(this, 3)
        }
        l() {
            return O(this, 4)
        }
    }
    ;
    var dr = class extends R {
        g() {
            return Di(this, 1)
        }
    }
    ;
    var er = class extends R {
        g() {
            return O(this, 1)
        }
        j() {
            return O(this, 2)
        }
        A() {
            return O(this, 3)
        }
        l() {
            return O(this, 4)
        }
    }
    ;
    var fr = class extends R {
        j() {
            return D(this, cr, 8)
        }
        l() {
            return D(this, cr, 9)
        }
        B() {
            return D(this, er, 4)
        }
        g() {
            return D(this, dr, 5)
        }
        A() {
            return O(this, 10)
        }
        C() {
            return N(this, 12)
        }
        G() {
            return N(this, 14)
        }
    }
    ;
    var gr = class extends R {
        l() {
            return N(this, 1)
        }
        A() {
            return N(this, 3)
        }
        j() {
            return N(this, 4)
        }
        g() {
            return N(this, 5)
        }
    }
    ;
    var hr = class extends R {
        j() {
            return D(this, er, 5)
        }
        g() {
            return D(this, dr, 6)
        }
        A() {
            return O(this, 8)
        }
        B() {
            return N(this, 9)
        }
        C() {
            return N(this, 11)
        }
        l() {
            return D(this, gr, 12)
        }
    }
    ;
    function ir() {
        var a = new jr;
        a = dj(a, 1, "Toggle toolbar expansion");
        a = dj(a, 2, "Toggle privacy and legal settings display");
        return dj(a, 3, "Dismiss privacy and legal settings display")
    }
    var jr = class extends R {
    }
    ;
    var kr = class extends R {
        g() {
            return D(this, jr, 1)
        }
    }
    ;
    var lr = class extends R {
    }
    ;
    lr.O = [2];
    var mr = class extends R {
    }
    ;
    var nr = class extends R {
        g() {
            return F(this, mr, 1)
        }
    }
    ;
    nr.O = [1];
    var or = class extends R {
        setProperty(a) {
            return dj(this, 1, a)
        }
        getValue() {
            return I(this, 2)
        }
    }
    ;
    var pr = class extends R {
    }
    ;
    pr.O = [3, 4];
    var qr = class extends R {
    }
    ;
    var rr = class extends R {
        ia() {
            return D(this, tq, 1)
        }
        g() {
            return L(this, 2)
        }
    }
    ;
    rr.O = [6, 7, 9, 10, 11];
    var sr = class extends R {
    }
    ;
    sr.O = [4];
    var tr = class extends R {
    }
    ;
    var ur = class extends R {
        g() {
            return hi(this, 6, uh, 2)
        }
    }
    ;
    ur.O = [6];
    var vr = class extends R {
        Pe() {
            return di(this, tr, 2)
        }
    }
    ;
    var wr = class extends R {
        g() {
            return Di(this, 1)
        }
    }
    ;
    var xr = class extends R {
    }
    ;
    var zr = class extends R {
        g() {
            return Gi(this, xr, 2, yr)
        }
    }
      , yr = [1, 2];
    var Ar = class extends R {
        g() {
            return D(this, zr, 3)
        }
    }
    ;
    var Br = class extends R {
    }
    ;
    var Cr = class extends R {
        g() {
            return F(this, Br, 1)
        }
    }
    ;
    Cr.O = [1];
    var Dr = class extends R {
        g() {
            return hi(this, 1, uh, 2)
        }
        j() {
            return D(this, Ar, 3)
        }
    }
    ;
    Dr.O = [1, 4];
    function Er(a) {
        return D(a, Kq, 13)
    }
    function Fr(a) {
        return D(a, Pq, 15)
    }
    var Gr = class extends R {
    }
      , Hr = kj(Gr);
    Gr.O = [1, 2, 5, 7];
    var Ir = class extends R {
    }
      , Jr = kj(Ir);
    function Kr(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? Jr(b) : null
        } catch (b) {
            return null
        }
    }
    function Lr(a, b) {
        if (void 0 !== a.Ee) {
            var c = Kr(b);
            c || (c = new Ir);
            void 0 !== a.Ee && Zi(c, 2, a.Ee);
            a = Date.now() + 864E5;
            Number.isFinite(a) && cj(c, 1, Math.round(a));
            c = fj(c);
            try {
                b.localStorage.setItem("google_ama_settings", c)
            } catch (d) {}
        } else if ((c = Kr(b)) && Ai(c, 1) < Date.now())
            try {
                b.localStorage.removeItem("google_ama_settings")
            } catch (d) {}
    }
    ;var Mr = {
        Wa: "ama_success",
        Oa: .1,
        Sa: !0,
        Xa: !0
    }
      , Nr = {
        Wa: "ama_failure",
        Oa: .1,
        Sa: !0,
        Xa: !0
    }
      , Or = {
        Wa: "ama_coverage",
        Oa: .1,
        Sa: !0,
        Xa: !0
    }
      , Pr = {
        Wa: "ama_opt",
        Oa: .1,
        Sa: !0,
        Xa: !1
    }
      , Qr = {
        Wa: "ama_auto_rs",
        Oa: 1,
        Sa: !0,
        Xa: !1
    }
      , Rr = {
        Wa: "ama_auto_prose",
        Oa: 1,
        Sa: !0,
        Xa: !1
    }
      , Sr = {
        Wa: "ama_improv",
        Oa: .1,
        Sa: !0,
        Xa: !1
    }
      , Tr = {
        Wa: "ama_constraints",
        Oa: 0,
        Sa: !0,
        Xa: !0
    };
    function Ur(a, b, c) {
        var d = 0 === a.i ? a.g.j() : a.g.l()
          , e = a.j
          , f = S(a.win)
          , g = a.g.g()?.g() || 0;
        a: switch (d?.g()) {
        case 1:
            d = "AUTO_PROSE_TOP_ANCHOR";
            break a;
        case 2:
            d = "AUTO_PROSE_BOTTOM_ANCHOR";
            break a;
        default:
            d = "UNKNOWN_POSITION"
        }
        a: switch (a.i) {
        case 0:
            a = "DESKTOP";
            break a;
        case 2:
            a = "MOBILE";
            break a;
        default:
            a = "OTHER_VIEWPORT"
        }
        Vr(e, Rr, {
            ...c,
            evt: b,
            vh: f,
            eid: g,
            pos: d,
            vpt: a
        })
    }
    function Wr(a, b) {
        Ur(a, "place", {
            sts: b
        })
    }
    var Xr = class {
        constructor(a, b, c) {
            this.win = a;
            this.j = b;
            this.g = c;
            this.i = tf()
        }
    }
    ;
    var Yr = {}
      , Zr = {}
      , $r = {}
      , as = {}
      , bs = {};
    function cs() {
        throw Error("Do not instantiate directly");
    }
    cs.prototype.Yf = null;
    cs.prototype.Ma = function() {
        return this.content
    }
    ;
    cs.prototype.toString = function() {
        return this.content
    }
    ;
    function ds(a) {
        if (a.Zf !== Yr)
            throw Error("Sanitized content was not of kind HTML.");
        return Kd(a.toString())
    }
    function es() {
        cs.call(this)
    }
    Ja(es, cs);
    es.prototype.Zf = Yr;
    function fs(a, b) {
        return null != a && a.Zf === b
    }
    ;function gs(a) {
        if (null != a)
            switch (a.Yf) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
            }
        return null
    }
    function hs(a) {
        return fs(a, Yr) ? a : a instanceof Jd ? is(Id(a).toString()) : is(String(String(a)).replace(js, ks), gs(a))
    }
    var is = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.Yf = d);
            return c
        }
    }(es);
    function ls(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }
    function W(a) {
        return fs(a, Yr) ? String(String(a.Ma()).replace(ms, "").replace(ns, "&lt;")).replace(os, ks) : String(a).replace(js, ks)
    }
    function ps(a) {
        return fs(a, Yr) ? String(String(a.Ma()).replace(ms, "").replace(ns, "&lt;")).replace(qs, ks) : String(a).replace(rs, ks)
    }
    function ss(a) {
        a = String(a);
        const b = (d,e,f)=>{
            const g = Math.min(e.length - f, d.length);
            for (let k = 0; k < g; k++) {
                var h = e[f + k];
                if (d[k] !== ("A" <= h && "Z" >= h ? h.toLowerCase() : h))
                    return !1
            }
            return !0
        }
        ;
        for (var c = 0; -1 != (c = a.indexOf("<", c)); ) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c))
                return "zSoyz";
            c += 1
        }
        return a
    }
    function ts(a) {
        if (null == a)
            return " null ";
        if (fs(a, Zr))
            return a.Ma();
        switch (typeof a) {
        case "boolean":
        case "number":
            return " " + a + " ";
        default:
            return "'" + String(String(a)).replace(us, vs) + "'"
        }
    }
    const ws = /['()]/g;
    function xs(a) {
        return "%" + a.charCodeAt(0).toString(16)
    }
    function X(a) {
        fs(a, bs) ? a = ls(a.Ma()) : null == a ? a = "" : a instanceof wd ? a = ls(vd(a)) : a instanceof Gd ? a = ls(a instanceof Gd && a.constructor === Gd ? a.g : "type_error:SafeStyleSheet") : (a = String(a),
        a = ys.test(a) ? a : "zSoyz");
        return a
    }
    const zs = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };
    function ks(a) {
        return zs[a]
    }
    const As = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };
    function vs(a) {
        return As[a]
    }
    const Bs = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };
    function Cs(a) {
        return Bs[a]
    }
    const js = /[\x00\x22\x26\x27\x3c\x3e]/g
      , os = /[\x00\x22\x27\x3c\x3e]/g
      , rs = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g
      , qs = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g
      , us = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g
      , Ds = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g
      , ys = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))|!important)(?:\s*[,\u0020]\s*|$))*$/i
      , Es = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i
      , ms = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]+|"[^"]*"|'[^']*')*>/g
      , ns = /</g;
    function Fs(a) {
        a = void 0 === a ? "white" : a;
        return is('<svg width="' + W(18) + '" height="' + W(18) + '" viewBox="0 0 ' + W(18) + " " + W(18) + '"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z" fill=' + ps(a) + " /></svg>")
    }
    ;/* 
 
 
 Copyright Mathias Bynens <http://mathiasbynens.be/> 
 
 Permission is hereby granted, free of charge, to any person obtaining 
 a copy of this software and associated documentation files (the 
 "Software"), to deal in the Software without restriction, including 
 without limitation the rights to use, copy, modify, merge, publish, 
 distribute, sublicense, and/or sell copies of the Software, and to 
 permit persons to whom the Software is furnished to do so, subject to 
 the following conditions: 
 
 The above copyright notice and this permission notice shall be 
 included in all copies or substantial portions of the Software. 
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
*/
    const Gs = Math.floor;
    var Hs = /^xn--/
      , Is = /[\x2E\u3002\uFF0E\uFF61]/g;
    const Js = {
        Fm: "Overflow: input needs wider integers to process",
        Bm: "Illegal input >= 0x80 (not a basic code point)",
        lm: "Invalid input"
    };
    function Ks(a) {
        throw RangeError(Js[a]);
    }
    function Ls(a, b) {
        const c = a.split("@");
        let d = "";
        1 < c.length && (d = c[0] + "@",
        a = c[1]);
        a = a.replace(Is, ".");
        a = a.split(".").map(b).join(".");
        return d + a
    }
    function Ms(a) {
        return Ls(a, b=>{
            if (Hs.test(b) && 4 < b.length) {
                b = b.slice(4).toLowerCase();
                const h = []
                  , k = b.length;
                let l = 0
                  , m = 128;
                var c = 72
                  , d = b.lastIndexOf("-");
                0 > d && (d = 0);
                for (var e = 0; e < d; ++e)
                    128 <= b.charCodeAt(e) && Ks("Illegal input >= 0x80 (not a basic code point)"),
                    h.push(b.charCodeAt(e));
                for (d = 0 < d ? d + 1 : 0; d < k; ) {
                    e = l;
                    for (let n = 1, p = 36; ; p += 36) {
                        d >= k && Ks("Invalid input");
                        var f = b.charCodeAt(d++);
                        f = 10 > f - 48 ? f - 22 : 26 > f - 65 ? f - 65 : 26 > f - 97 ? f - 97 : 36;
                        (36 <= f || f > Gs((2147483647 - l) / n)) && Ks("Overflow: input needs wider integers to process");
                        l += f * n;
                        var g = p <= c ? 1 : p >= c + 26 ? 26 : p - c;
                        if (f < g)
                            break;
                        f = 36 - g;
                        n > Gs(2147483647 / f) && Ks("Overflow: input needs wider integers to process");
                        n *= f
                    }
                    f = h.length + 1;
                    c = l - e;
                    g = 0;
                    c = 0 == e ? Gs(c / 700) : c >> 1;
                    for (c += Gs(c / f); 455 < c; g += 36)
                        c = Gs(c / 35);
                    c = Gs(g + 36 * c / (c + 38));
                    Gs(l / f) > 2147483647 - m && Ks("Overflow: input needs wider integers to process");
                    m += Gs(l / f);
                    l %= f;
                    h.splice(l++, 0, m)
                }
                b = String.fromCodePoint.apply(null, h)
            }
            return b
        }
        )
    }
    ;const Ns = new tb(ub,"558153351");
    function Os(a, b, c) {
        var d = a.Na.contentWindow;
        const e = !a.B && "number" === typeof a.g;
        a.C ? (b = {
            action: "search",
            searchTerm: b,
            rsToken: c
        },
        e && (b.experimentId = a.g),
        0 < a.i.length && (b.adfiliateWp = a.i),
        d.postMessage(b, "https://www.gstatic.com")) : (d = d.google.search.cse.element.getElement(a.G),
        c = {
            rsToken: c,
            hostName: a.host
        },
        e && (c.afsExperimentId = a.g),
        0 < a.i.length && (c.adfiliateWp = a.i),
        d.execute(b, void 0, c))
    }
    function Ps(a, b) {
        if (a.H) {
            const c = a.Na.contentDocument?.getElementById("prose-empty-serp-container");
            b && c && Ob(b, "input", ()=>{
                c.style.display = "none"
            }
            )
        }
    }
    var Qs = class {
        constructor(a, b, c, d, e, f, g, h, k, l, m=!1, n=!1, p=!1, q="") {
            this.Na = a;
            this.l = b;
            this.G = c;
            this.j = d;
            this.M = e;
            this.host = f.host;
            this.origin = f.origin;
            this.A = g;
            this.D = h;
            this.g = k;
            this.I = m;
            this.C = l;
            this.H = n;
            this.B = p;
            this.i = q
        }
        K() {
            this.Na.setAttribute("id", "prose-iframe");
            this.Na.setAttribute("width", "100%");
            this.Na.setAttribute("height", "100%");
            var a = yj`box-sizing:border-box;border:unset;`;
            this.Na.style.cssText = vd(a);
            a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
            var b = Ke(a, Je) || td;
            var c = Ms(this.host.startsWith("www.") ? this.host.slice(4) : this.host);
            a = this.G;
            var d = this.j
              , e = this.M;
            const f = this.host;
            c = this.D.replace("${website}", c);
            const g = this.H;
            var h = is
              , k = "<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}#prose-empty-serp-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 52px; position: relative; width: 248px; height: 259px; margin: auto; top: 100px;}#prose-empty-serp-icon-image {display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 30px; gap: 10px; width: 124px; height: 124px; border-radius: 62px; flex: none; order: 1; flex-grow: 0; position: absolute; top: 0;}#prose-empty-serp-text-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 19px; width: 248px; height: 83px; flex: none; order: 2; align-self: stretch; flex-grow: 0; position: absolute; top: 208px;}#prose-empty-serp-text-div {display: flex; flex-direction: column; align-items: flex-start; padding: 0; gap: 11px; width: 248px; height: 83px; flex: none; order: 0; align-self: stretch; flex-grow: 0;}#prose-empty-serp-supporting-text {width: 248px; height: 40px; font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; letter-spacing: 0.2px; color: #202124; flex: none; order: 1; align-self: stretch; flex-grow: 0;}</style>" + (this.I ? '<script>window.__gcse={initializationCallback:function(){top.postMessage({action:"init",adChannel:"' + String(e).replace(us, vs) + '"},top.location.origin);}};\x3c/script>' : "") + '<div class="prose-container"><img class="cse-favicon" src="';
            fs(b, $r) || fs(b, as) ? b = String(b).replace(Ds, Cs) : b instanceof md ? b = String(od(b)).replace(Ds, Cs) : b instanceof cd ? b = String(fd(b).toString()).replace(Ds, Cs) : (b = String(b),
            b = Es.test(b) ? b.replace(Ds, Cs) : "about:invalid#zSoyz");
            a = h(k + W(b) + '" alt="' + W(f) + ' icon"><p class="cse-header"><strong>' + hs(c) + '</strong></p><div class="gcse-search" data-gname="' + W(a) + '" data-adclient="' + W(d) + '" data-adchannel="' + W(e) + '" data-as_sitesearch="' + W(f) + '" data-personalizedAds="false"></div></div>' + (g ? "<div id=\"prose-empty-serp-container\"><img id='prose-empty-serp-icon-image' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiByeD0iNjIiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OS4zNiA2NS4zODY3TDg0LjY0IDgwLjY2NjdMODAuNjY2NyA4NC42NEw2NS4zODY3IDY5LjM2QzYyLjUzMzMgNzEuNDEzMyA1OS4wOTMzIDcyLjY2NjcgNTUuMzMzMyA3Mi42NjY3QzQ1Ljc2IDcyLjY2NjcgMzggNjQuOTA2NyAzOCA1NS4zMzMzQzM4IDQ1Ljc2IDQ1Ljc2IDM4IDU1LjMzMzMgMzhDNjQuOTA2NyAzOCA3Mi42NjY3IDQ1Ljc2IDcyLjY2NjcgNTUuMzMzM0M3Mi42NjY3IDU5LjA5MzMgNzEuNDEzMyA2Mi41MzMzIDY5LjM2IDY1LjM4NjdaTTU1LjMzMzMgNDMuMzMzM0M0OC42OTMzIDQzLjMzMzMgNDMuMzMzMyA0OC42OTMzIDQzLjMzMzMgNTUuMzMzM0M0My4zMzMzIDYxLjk3MzMgNDguNjkzMyA2Ny4zMzMzIDU1LjMzMzMgNjcuMzMzM0M2MS45NzMzIDY3LjMzMzMgNjcuMzMzMyA2MS45NzMzIDY3LjMzMzMgNTUuMzMzM0M2Ny4zMzMzIDQ4LjY5MzMgNjEuOTczMyA0My4zMzMzIDU1LjMzMzMgNDMuMzMzM1oiIGZpbGw9IiM5QUEwQTYiLz4KPC9zdmc+Cg==' alt=''><div id='prose-empty-serp-text-container'><div id='prose-empty-serp-text-div'><div id='prose-empty-serp-supporting-text'>Search this website by entering a keyword.</div></div></div></div>" : ""));
            a = ds(a);
            this.C ? (a = this.Na,
            d = id(new tb(ub,"https://www.gstatic.com/prose/protected/%{version}/iframe.html?cx=%{cxId}&host=%{host}&hl=%{lang}&lrh=%{lrh}&client=%{client}&origin=%{origin}"), {
                version: Ns,
                cxId: this.l,
                host: this.host,
                lang: this.A,
                lrh: this.D,
                client: this.j,
                origin: this.origin
            }),
            a.src = fd(d).toString()) : (d = new Map([["cx", this.l], ["language", this.A]]),
            this.B && (e = Array.isArray(this.g) ? this.g : [this.g],
            e.length && d.set("fexp", e.join())),
            e = xj(d),
            d = {},
            e = `<script src="${nj(fd(e).toString())}"`,
            d.async && (e += " async"),
            d.di && (e += ` custom-element="${nj(d.di)}"`),
            d.defer && (e += " defer"),
            d.id && (e += ` id="${nj(d.id)}"`),
            d.nonce && (e += ` nonce="${nj(d.nonce)}"`),
            d.type && (e += ` type="${nj(d.type)}"`),
            d = Kd(e + ">\x3c/script>"),
            a = tj({
                style: yj`margin:${0};`
            }, [a, d]),
            this.Na.srcdoc = Id(a))
        }
    }
    ;
    function Rs(a) {
        var b = [];
        Lo(a.getElementsByTagName("p"), function(c) {
            100 <= Ss(c) && b.push(c)
        });
        return b
    }
    function Ss(a) {
        if (3 == a.nodeType)
            return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName)
            return 0;
        var b = 0;
        Lo(a.childNodes, function(c) {
            b += Ss(c)
        });
        return b
    }
    function Ts(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }
    function Us(a, b) {
        if (null == a.g)
            return b;
        switch (a.g) {
        case 1:
            return b.slice(1);
        case 2:
            return b.slice(0, b.length - 1);
        case 3:
            return b.slice(1, b.length - 1);
        case 0:
            return b;
        default:
            throw Error("Unknown ignore mode: " + a.g);
        }
    }
    const Vs = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.i = b;
            this.j = c;
            this.g = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.l)
            } catch (f) {}
            if (!b.length)
                return [];
            a = eb(b);
            a = Us(this, a);
            "number" === typeof this.i && (b = this.i,
            0 > b && (b += a.length),
            a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.j) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Rs(a[c])
                      , e = this.j;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.l,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.g
            })
        }
    }
    ;
    function Ws(a) {
        if (1 != a.nodeType)
            var b = !1;
        else if (b = "INS" == a.tagName)
            a: {
                b = ["adsbygoogle-placeholder"];
                a = a.className ? a.className.split(/\s+/) : [];
                for (var c = {}, d = 0; d < a.length; ++d)
                    c[a[d]] = !0;
                for (d = 0; d < b.length; ++d)
                    if (!c[b[d]]) {
                        b = !1;
                        break a
                    }
                b = !0
            }
        return b
    }
    function Xs(a) {
        return Mo(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    }
    ;var Ys = new t(1321)
      , Zs = new t(1310,!0)
      , $s = new t(1277,!0)
      , at = new t(1275,!0)
      , bt = new t(1311,!0)
      , ct = new xb(1130,100)
      , dt = new t(1270,!0)
      , et = new xb(1032,200)
      , ft = new yb(14)
      , gt = new t(1319,!0)
      , ht = new xb(1224,.01)
      , it = new t(1320)
      , jt = new t(1260)
      , kt = new t(1239)
      , lt = new t(1196)
      , mt = new t(1160)
      , nt = new t(316)
      , ot = new t(1290)
      , pt = new t(1312,!0)
      , qt = new t(334)
      , rt = new xb(1263,-1)
      , st = new xb(54)
      , tt = new xb(1265,-1)
      , ut = new xb(1264,-1)
      , vt = new t(1291)
      , wt = new t(1267,!0)
      , xt = new t(1268,!0)
      , yt = new t(1266)
      , zt = new t(313)
      , At = new xb(66,-1)
      , Bt = new xb(65,-1)
      , Ct = new t(1256)
      , Dt = new t(369)
      , Et = new t(1241,!0)
      , Ft = new t(368)
      , Gt = new t(1300,!0)
      , Ht = new u(1273,["en", "de"])
      , It = new t(1223,!0)
      , Jt = new u(1261,["44786015", "44786016"])
      , Kt = new t(1309)
      , Lt = new t(1289)
      , Mt = new t(1282)
      , Nt = new t(1250)
      , Ot = new t(1151)
      , Pt = new xb(1072,.75)
      , Qt = new t(290)
      , Rt = new t(1222)
      , St = new t(1238)
      , Tt = new t(1237)
      , Ut = new yb(1307)
      , Vt = new xb(579884443)
      , Wt = new xb(566560958,3E4)
      , Xt = new xb(508040914,100)
      , Yt = new xb(547455356,49)
      , Zt = new t(595118933)
      , $t = new t(566279275)
      , au = new t(566279276)
      , bu = new t(595118932)
      , cu = new u(556791602,"1 2 4 6 8 16".split(" "))
      , du = new t(566560957)
      , eu = new yb(589752731)
      , fu = new yb(589752730)
      , gu = new t(596859467)
      , hu = new t(603359027)
      , iu = new t(579884441)
      , ju = new xb(571329679)
      , ku = new t(556739145)
      , lu = new xb(579884442)
      , mu = new xb(595645509,.3)
      , nu = new t(561639567)
      , ou = new xb(561668774,.1)
      , pu = new t(550910941)
      , qu = new t(607657092)
      , ru = new t(506914611)
      , su = new t(604916478)
      , tu = new t(597181299)
      , uu = new t(598633105)
      , vu = new t(595989603)
      , wu = new xb(469675170,3E4)
      , xu = new t(160889229,!0)
      , yu = new t(506852289)
      , zu = new t(1120)
      , Au = new u(606178001)
      , Bu = new u(606178002)
      , Cu = new u(606178003)
      , Du = new u(606178004)
      , Eu = new u(606178005)
      , Fu = new u(606178006)
      , Gu = new u(606178007)
      , Hu = new u(606178008)
      , Iu = new u(606178009)
      , Ju = new u(606178010)
      , Ku = new u(606178011)
      , Lu = new u(606178012)
      , Mu = new u(606178013)
      , Nu = new u(606178014)
      , Ou = new u(606178015)
      , Pu = new u(606178016)
      , Qu = new u(606178017)
      , Ru = new u(606178018)
      , Su = new u(606178019)
      , Tu = new u(1766812824)
      , Uu = new u(1766812825)
      , Vu = new u(1766812826)
      , Wu = new u(1766812827)
      , Xu = new u(1766812828)
      , Yu = new u(1766812829)
      , Zu = new u(1766812830)
      , $u = new u(1766812831)
      , av = new u(1766812832)
      , bv = new u(1766812833)
      , cv = new u(1766812834)
      , dv = new t(606179052)
      , ev = new t(586386407,!0)
      , fv = new t(573506525,!0)
      , gv = new t(573506524,!0)
      , hv = new t(562896595)
      , iv = new t(586643641,!0)
      , jv = new t(596652146)
      , kv = new t(603378945)
      , lv = new xb(592337179)
      , mv = new t(570863962,!0)
      , nv = new yb(570879859,"control_1\\.\\d")
      , ov = new xb(570863961,50)
      , pv = new t(570879858,!0)
      , qv = new t(45615403,!0)
      , rv = new t(570804360)
      , sv = new t(562874197)
      , tv = new t(562874196)
      , uv = new t(555237685,!0)
      , vv = new t(45460956)
      , wv = new t(45414947,!0)
      , xv = new xb(472785970,500)
      , yv = new t(45545710)
      , zv = new t(439828594)
      , Av = new t(483962503)
      , Bv = new t(506738118)
      , Cv = new t(77)
      , Dv = new t(78)
      , Ev = new t(83)
      , Fv = new t(80)
      , Gv = new t(76)
      , Hv = new t(84)
      , Iv = new t(1973)
      , Jv = new t(188)
      , Kv = new t(485990406);
    function Lv(a, b) {
        a = ve(new je(a), "DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }
    function Mv(a, b, c) {
        switch (c) {
        case 0:
            b.parentNode && b.parentNode.insertBefore(a, b);
            break;
        case 3:
            if (c = b.parentNode) {
                var d = b.nextSibling;
                if (d && d.parentNode != c)
                    for (; d && 8 == d.nodeType; )
                        d = d.nextSibling;
                c.insertBefore(a, d)
            }
            break;
        case 1:
            b.insertBefore(a, b.firstChild);
            break;
        case 2:
            b.appendChild(a)
        }
        Ws(b) && (b.setAttribute("data-init-display", b.style.display),
        b.style.display = "block")
    }
    function Nv(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            Ws(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    }
    ;var Pv = (a,b,c,d=0)=>{
        var e = Ov(b, c, d);
        if (e.K) {
            for (c = b = e.K; c = e.vd(c); )
                b = c;
            e = {
                anchor: b,
                position: e.Pd
            }
        } else
            e = {
                anchor: b,
                position: c
            };
        a["google-ama-order-assurance"] = d;
        Mv(a, e.anchor, e.position)
    }
      , Qv = (a,b,c,d=0)=>{
        x(zt) ? Pv(a, b, c, d) : Mv(a, b, c)
    }
    ;
    function Ov(a, b, c) {
        const d = f=>{
            f = Rv(f);
            return null == f ? !1 : c < f
        }
          , e = f=>{
            f = Rv(f);
            return null == f ? !1 : c > f
        }
        ;
        switch (b) {
        case 0:
            return {
                K: Sv(a.previousSibling, d),
                vd: f=>Sv(f.previousSibling, d),
                Pd: 0
            };
        case 2:
            return {
                K: Sv(a.lastChild, d),
                vd: f=>Sv(f.previousSibling, d),
                Pd: 0
            };
        case 3:
            return {
                K: Sv(a.nextSibling, e),
                vd: f=>Sv(f.nextSibling, e),
                Pd: 3
            };
        case 1:
            return {
                K: Sv(a.firstChild, e),
                vd: f=>Sv(f.nextSibling, e),
                Pd: 3
            }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }
    function Rv(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }
    function Sv(a, b) {
        return a && b(a) ? a : null
    }
    ;function Tv(a, b) {
        try {
            const c = b.document.documentElement.getBoundingClientRect()
              , d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }
    function Uv(a, b) {
        const c = 40 === a.google_reactive_ad_format
          , d = 16 === a.google_reactive_ad_format;
        return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
    }
    function Vv(a, b, c) {
        a = a.style;
        "rtl" === b ? a.marginRight = c : a.marginLeft = c
    }
    function Wv(a, b, c) {
        a = Tv(b, a);
        return "rtl" === c ? -a.x : a.x
    }
    function Xv(a, b) {
        b = b.parentElement;
        return b ? (a = bf(b, a)) ? a.direction : "" : ""
    }
    function Yv(a, b, c) {
        if (0 !== Wv(a, b, c)) {
            Vv(b, c, "0px");
            var d = Wv(a, b, c);
            Vv(b, c, `${-1 * d}px`);
            a = Wv(a, b, c);
            0 !== a && a !== d && Vv(b, c, `${d / (a - d) * d}px`)
        }
    }
    ;const Zv = RegExp("(^| )adsbygoogle($| )");
    function $v(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c]
              , e = ge(d.property);
            a[e] = d.value
        }
    }
    function aw(a, b, c, d, e, f) {
        a = bw(a, e);
        a.ya.setAttribute("data-ad-format", d ? d : "auto");
        cw(a, b, c, f);
        return a
    }
    function dw(a, b, c=null) {
        a = bw(a, {});
        cw(a, b, null, c);
        return a
    }
    function cw(a, b, c, d) {
        var e = [];
        if (d = d && d.Wf)
            a.ob.className = d.join(" ");
        a = a.ya;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }
    function bw(a, b) {
        const c = Lv(a, b.clearBoth || !1);
        var d = c.style;
        d.textAlign = "center";
        b.Od && $v(d, b.Od);
        a = ve(new je(a), "INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.xf && (d.marginTop = b.xf);
        b.re && (d.marginBottom = b.re);
        b.oc && $v(d, b.oc);
        c.appendChild(a);
        return {
            ob: c,
            ya: a
        }
    }
    function ew(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        const d = {
            element: b
        };
        c = c && c.Gc();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }
    function fw(a) {
        const b = Xs(a.document);
        Ra(b, function(c) {
            const d = gw(a, c);
            var e;
            if (e = d) {
                e = (e = Tv(c, a)) ? e.y : 0;
                const f = S(a);
                e = !(e < f)
            }
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)),
            c.removeAttribute("height"),
            c.style.removeProperty("height"),
            c.removeAttribute("width"),
            c.style.removeProperty("width"),
            ew(a, c))
        })
    }
    function gw(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b])
            return null;
        a = a[b];
        b = {};
        for (let c in ob)
            a[ob[c]] && (b[ob[c]] = a[ob[c]]);
        return b
    }
    ;class hw {
        constructor() {
            var a = wj`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.i = !1;
            this.A = Math.random();
            this.j = this.va;
            this.B = a
        }
        nf(a) {
            this.g = a
        }
        l(a) {
            this.i = a
        }
        va(a, b, c=.01, d, e="jserror") {
            if ((this.i ? this.A : Math.random()) > c)
                return !1;
            b.error && b.meta && b.id || (b = new $k(b,{
                context: a,
                id: e
            }));
            if (d || this.g)
                b.meta = {},
                this.g && this.g(b.meta),
                d && d(b.meta);
            r.google_js_errors = r.google_js_errors || [];
            r.google_js_errors.push(b);
            r.error_rep_loaded || ($e(r.document, this.B),
            r.error_rep_loaded = !0);
            return !1
        }
        ic(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.j(a, d, .01, c, "jserror"))
                    throw d;
            }
        }
        La(a, b, c, d) {
            return (...e)=>this.ic(a, ()=>b.apply(c, e), d)
        }
        Da(a, b, c) {
            b.catch(d=>{
                d = d ? d : "unknown rejection";
                this.va(a, d instanceof Error ? d : Error(d), void 0, c || this.g || void 0)
            }
            )
        }
    }
    ;const iw = (a,b)=>{
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    }
    ;
    var jw = (a,b,c,d,e=!1)=>{
        const f = d || window
          , g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(()=>{
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            }
            );
            const h = gl();
            let k, l = 3;
            try {
                k = b.apply(this, arguments)
            } catch (m) {
                l = 13;
                if (!c)
                    throw m;
                c(a, m)
            } finally {
                f.google_measure_js_timing && h && iw({
                    label: a.toString(),
                    value: h,
                    duration: (gl() || 0) - h,
                    type: l,
                    ...(e && g && {
                        taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                    })
                }, f)
            }
            return k
        }
    }
      , kw = (a,b,c,d=!1)=>jw(a, b, (e,f)=>{
        (new hw).va(e, f)
    }
    , c, d);
    function lw(a, b, c) {
        return jw(a, b, void 0, c, !0).apply()
    }
    function mw(a, b) {
        return kw(754, a, b, !0).apply()
    }
    function nw(a) {
        if (!a)
            return null;
        var b = I(a, 7);
        if (I(a, 1) || a.getId() || 0 < hi(a, 4, uh, 2).length) {
            var c = I(a, 3)
              , d = I(a, 1)
              , e = hi(a, 4, uh, 2);
            b = zi(a, 2);
            var f = zi(a, 5);
            a = ow(L(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + Ts(c));
            if (e)
                for (c = 0; c < e.length; c++)
                    g += "." + Ts(e[c]);
            b = (e = g) ? new Vs(e,b,f,a) : null
        } else
            b = b ? new Vs(b,zi(a, 2),zi(a, 5),ow(L(a, 6))) : null;
        return b
    }
    var pw = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };
    function ow(a) {
        return null == a ? a : pw[a]
    }
    function qw(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = I(a[c], 1)
              , e = I(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.property = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }
    function rw(a, b) {
        var c = {};
        a && (c.xf = I(a, 1),
        c.re = I(a, 2),
        c.clearBoth = !!gi(a, 3));
        b && (c.Od = qw(F(b, or, 3)),
        a = F(b, or, 4),
        c.oc = qw(a));
        return c
    }
    var sw = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    }
      , tw = {
        0: 1,
        1: 2,
        2: 3,
        3: 4
    };
    const uw = ["-webkit-text-fill-color"];
    function vw(a) {
        if (Ec) {
            {
                const c = bf(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d)
                        a[c[d]] = "initial";
                    a = ww(a)
                } else
                    a = xw()
            }
        } else
            a = xw();
        return a
    }
    var xw = ()=>{
        const a = {
            all: "initial"
        };
        Ra(uw, b=>{
            a[b] = "unset"
        }
        );
        return a
    }
    ;
    function ww(a) {
        Ra(uw, b=>{
            delete a[b]
        }
        );
        return a
    }
    ;function yw(a, b) {
        const c = a.document.createElement("div");
        z(c, vw(a));
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            Ta: c,
            shadowRoot: a
        }
    }
    ;function lx({mc: a, Jb: b, Yb: c, nc: d, Kb: e, Zb: f}) {
        const g = [];
        for (let n = 0; n < f; n++)
            for (let p = 0; p < c; p++) {
                var h = p
                  , k = c - 1
                  , l = n
                  , m = f - 1;
                g.push({
                    x: a + (0 === k ? 0 : h / k) * (b - a),
                    y: d + (0 === m ? 0 : l / m) * (e - d)
                })
            }
        return g
    }
    function mx(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    }
    ;function nx(a, b) {
        for (const c of b)
            if (b = ox(a, c))
                return b;
        return null
    }
    function px(a, {Ti: b, Dj: c, width: d, height: e}) {
        b = lx({
            mc: b,
            Jb: b + d,
            Yb: 10,
            nc: c,
            Kb: c + e,
            Zb: 10
        });
        return nx(a, b)
    }
    function qx(a, b, c=10, d=10) {
        c = lx({
            mc: b.left,
            Jb: b.right,
            Yb: c,
            nc: b.top,
            Kb: b.bottom,
            Zb: d
        });
        b = new Set;
        for (const e of c)
            (c = ox(a, e)) && b.add(c);
        return b
    }
    function rx(a, b, c) {
        if ("fixed" !== Gk(b, "position"))
            return null;
        var d = "GoogleActiveViewInnerContainer" === b.getAttribute("class") || 1 >= Jk(b).width && 1 >= Jk(b).height || a.g.oi && !a.g.oi(b) ? !0 : !1;
        a.g.kg && a.g.kg(b, c, d);
        return d ? null : b
    }
    function ox(a, b) {
        var c = mx(a.J.document, b);
        if (c) {
            var d;
            if (!(d = rx(a, c, b)))
                a: {
                    d = a.J.document;
                    for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                        const e = rx(a, c, b);
                        if (e) {
                            d = e;
                            break a
                        }
                    }
                    d = null
                }
            a = d || null
        } else
            a = null;
        return a
    }
    var sx = class {
        constructor(a, b={}) {
            this.J = a;
            this.g = b
        }
    }
    ;
    function tx(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set),
        null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map),
        null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new ux;
        return a.google_reactive_ads_global_state
    }
    class ux {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new vx;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map;
            this.i = [];
            this.g = null
        }
    }
    var vx = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    }
    ;
    function wx(a, b) {
        return new xx(a,b)
    }
    function yx(a) {
        const b = zx(a);
        Ra(a.g.maxZIndexListeners, c=>c(b))
    }
    function zx(a) {
        a = ef(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    function Ax(a, b) {
        bb(a.g.maxZIndexListeners, c=>c === b)
    }
    class Bx {
        constructor(a) {
            this.g = tx(a).floatingAdsStacking
        }
    }
    function Cx(a) {
        if (null == a.g) {
            var b = a.i
              , c = a.j;
            const d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            yx(b);
            a.g = d
        }
    }
    function Dx(a) {
        if (null != a.g) {
            var b = a.i;
            delete b.g.maxZIndexRestrictions[a.g];
            yx(b);
            a.g = null
        }
    }
    class xx {
        constructor(a, b) {
            this.i = a;
            this.j = b;
            this.g = null
        }
    }
    ;function Ex(a) {
        a = a.activeElement;
        const b = a?.shadowRoot;
        return b ? Ex(b) || a : a
    }
    function Fx(a, b) {
        return Gx(b, a.document.body).flatMap(c=>Hx(c))
    }
    function Gx(a, b) {
        var c = a;
        for (a = []; c && c !== b; ) {
            a.push(c);
            let e;
            var d;
            (d = c.parentElement) || (c = c.getRootNode(),
            d = (null == (e = c.mode && c.host ? c : null) ? void 0 : e.host) || null);
            c = d
        }
        return c !== b ? [] : a
    }
    function Hx(a) {
        const b = a.parentElement;
        return b ? Array.from(b.children).filter(c=>c !== a) : []
    }
    ;function Ix(a) {
        null !== a.g && (a.g.si.forEach(b=>{
            b.inert = !1
        }
        ),
        a.g.mj?.focus(),
        a.g = null)
    }
    function Jx(a, b) {
        Ix(a);
        const c = Ex(a.win.document);
        b = Fx(a.win, b).filter(d=>!d.inert);
        b.forEach(d=>{
            d.inert = !0
        }
        );
        a.g = {
            mj: c,
            si: b
        }
    }
    var Kx = class {
        constructor(a) {
            this.win = a;
            this.g = null
        }
        Zd() {
            Ix(this)
        }
    }
    ;
    function Lx(a) {
        return new Mx(a,new dp(a,a.document.body),new dp(a,a.document.documentElement),new dp(a,a.document.documentElement))
    }
    function Nx(a) {
        cp(a.j, "scroll-behavior", "auto");
        const b = Ox(a.win);
        b.activePageScrollPreventers.add(a);
        null === b.previousWindowScroll && (b.previousWindowScroll = a.win.scrollY);
        cp(a.g, "position", "fixed");
        cp(a.g, "top", `${-b.previousWindowScroll}px`);
        cp(a.g, "width", "100%");
        cp(a.g, "overflow-x", "hidden");
        cp(a.g, "overflow-y", "hidden");
        cp(a.i, "overflow-x", "hidden");
        cp(a.i, "overflow-y", "hidden")
    }
    function Px(a) {
        bp(a.g);
        bp(a.i);
        const b = Ox(a.win);
        b.activePageScrollPreventers.delete(a);
        0 === b.activePageScrollPreventers.size && (a.win.scrollTo(0, b.previousWindowScroll || 0),
        b.previousWindowScroll = null);
        bp(a.j)
    }
    var Mx = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.g = b;
            this.i = c;
            this.j = d
        }
    }
    ;
    function Ox(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set
        }
    }
    function Qx(a) {
        return a.googPageScrollPreventerInfo && 0 < a.googPageScrollPreventerInfo.activePageScrollPreventers.size ? !0 : !1
    }
    ;function Rx(a, b) {
        return Sx(`#${a}`, b)
    }
    function Tx(a, b) {
        return Sx(`.${a}`, b)
    }
    function Sx(a, b) {
        b = b.querySelector(a);
        if (!b)
            throw Error(`Element (${a}) does not exist`);
        return b
    }
    ;function Ux(a, b) {
        b = yw(a, b);
        a.document.body.appendChild(b.Ta);
        return b
    }
    function Vx(a, b) {
        const c = new V(b.P);
        mp(b, !0, ()=>void c.g(!0));
        mp(b, !1, ()=>{
            a.setTimeout(()=>{
                b.P || c.g(!1)
            }
            , 700)
        }
        );
        return hp(c)
    }
    ;function Wx(a) {
        const b = a.Cc;
        var c = a.Vd
          , d = a.Bc;
        const e = a.sc
          , f = a.Sf
          , g = a.me
          , h = a.Ia;
        a = "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + X(a.zIndex) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " + X(b) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: ";
        c = c ? h ? 20 : 16 : 0;
        a += X(c) + "px; transition: transform " + X(g) + "s ease-in-out;" + (d ? "left: 0; border-top-right-radius: " + X(c) + "px; border-bottom-right-radius: " + X(c) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + X(c) + "px; border-bottom-left-radius: " + X(c) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" + (h ? "height: 24px;" : "padding: 5px;") + "}.hd-control-button {border: none; background: none; cursor: pointer;" + (h ? "" : "padding: 5px;") + "}#hd-back-arrow-button {" + (d ? "float: right;" : "float: left;") + "}#hd-close-button {" + (d ? "float: left;" : "float: right;") + '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' + W(f) + '">';
        d = h ? "#5F6368" : "#444746";
        a += '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + W(d) + '"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' + W(e) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + W(d) + '"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        return is(a)
    }
    ;function Xx(a) {
        a = a.top;
        if (!a)
            return null;
        try {
            var b = a.history
        } catch (c) {
            b = null
        }
        b = b && b.pushState && "function" === typeof b.pushState ? b : null;
        if (!b)
            return null;
        if (a.googNavStack)
            return a.googNavStack;
        b = new Yx(a,b);
        b.K();
        return b ? a.googNavStack = b : null
    }
    function Zx(a, b) {
        return b ? b.googNavStackId === a.j ? b : null : null
    }
    function $x(a, b) {
        for (let c = b.length - 1; 0 <= c; --c) {
            const d = 0 === c;
            a.J.requestAnimationFrame(()=>void b[c].vj({
                isFinal: d
            }))
        }
    }
    function ay(a, b) {
        b = hb(a.stack, b, (c,d)=>c - d.rg.googNavStackStateId);
        if (0 <= b)
            return a.stack.splice(b, a.stack.length - b);
        b = -b - 1;
        return a.stack.splice(b, a.stack.length - b)
    }
    class Yx extends T {
        constructor(a, b) {
            super();
            this.J = a;
            this.g = b;
            this.stack = [];
            this.j = 1E9 * Math.random() >>> 0;
            this.A = 0;
            this.l = c=>{
                (c = Zx(this, c.state)) ? $x(this, ay(this, c.googNavStackStateId + .5)) : $x(this, this.stack.splice(0, this.stack.length))
            }
        }
        pushEvent() {
            const a = {
                googNavStackId: this.j,
                googNavStackStateId: this.A++
            }
              , b = new Promise(c=>{
                this.stack.push({
                    vj: c,
                    rg: a
                })
            }
            );
            this.g.pushState(a, "");
            return {
                navigatedBack: b,
                triggerNavigateBack: ()=>{
                    const c = ay(this, a.googNavStackStateId);
                    var d;
                    if (d = 0 < c.length) {
                        d = c[0].rg;
                        const e = Zx(this, this.g.state);
                        d = e && e.googNavStackId === d.googNavStackId && e.googNavStackStateId === d.googNavStackStateId
                    }
                    d && this.g.go(-c.length);
                    $x(this, c)
                }
            }
        }
        K() {
            this.J.addEventListener("popstate", this.l)
        }
        i() {
            this.J.removeEventListener("popstate", this.l);
            super.i()
        }
    }
    ;function by(a) {
        return (a = Xx(a)) ? new cy(a) : null
    }
    function dy(a) {
        if (!a.g) {
            var {navigatedBack: b, triggerNavigateBack: c} = a.l.pushEvent();
            a.g = c;
            b.then(()=>{
                a.g && !a.B && (a.g = null,
                sp(a.j))
            }
            )
        }
    }
    var cy = class extends T {
        constructor(a) {
            super();
            this.l = a;
            this.j = new tp;
            this.g = null
        }
    }
    ;
    function ey(a, b, c) {
        var d = c.Ce ? null : new Kx(a);
        const e = wx(new Bx(a), c.zIndex - 1);
        b = fy(a, b, c);
        d = new gy(a,b,d,c.tb,Lx(a),e);
        d.K();
        (c.md || void 0 === c.md) && hy(d);
        c.qb && ((a = by(a)) ? iy(d, a, c.cf) : c.cf?.(Error("Unable to create closeNavigator")));
        return d
    }
    function hy(a) {
        a.A = b=>{
            "Escape" === b.key && a.g.P && a.collapse()
        }
        ;
        a.win.document.body.addEventListener("keydown", a.A)
    }
    function iy(a, b, c) {
        mp(a.g, !0, ()=>{
            try {
                dy(b)
            } catch (d) {
                c?.(d)
            }
        }
        );
        mp(a.g, !1, ()=>{
            try {
                b.g && (b.g(),
                b.g = null)
            } catch (d) {
                c?.(d)
            }
        }
        );
        qp(b.j).listen(()=>void a.collapse());
        $o(a, b)
    }
    function jy(a) {
        if (a.B)
            throw Error("Accessing domItems after disposal");
        return a.C
    }
    function ky(a) {
        a.win.setTimeout(()=>{
            a.g.P && jy(a).Ja.focus()
        }
        , 500)
    }
    function ly(a) {
        const {bf: b, Wh: c} = jy(a);
        b.addEventListener("click", ()=>void a.collapse());
        c.addEventListener("click", ()=>void a.collapse())
    }
    function my(a) {
        mp(a.j, !1, ()=>{
            jy(a).Ja.classList.add("hd-hidden")
        }
        )
    }
    var gy = class extends T {
        constructor(a, b, c, d=!0, e, f) {
            super();
            this.win = a;
            this.C = b;
            this.l = c;
            this.tb = d;
            this.g = new V(!1);
            this.j = Vx(a, this.g);
            mp(this.j, !0, ()=>{
                Nx(e);
                Cx(f)
            }
            );
            mp(this.j, !1, ()=>{
                Px(e);
                Dx(f)
            }
            )
        }
        show({gg: a=!1}={}) {
            if (this.B)
                throw Error("Cannot show drawer after disposal");
            jy(this).Ja.classList.remove("hd-hidden");
            Yo(this.win);
            jy(this).Ja.classList.add("hd-revealed");
            this.g.g(!0);
            this.l && (Jx(this.l, jy(this).gb.Ta),
            this.tb && ky(this));
            a && mp(this.j, !1, ()=>{
                this.ka()
            }
            )
        }
        collapse() {
            jy(this).Ja.classList.remove("hd-revealed");
            this.g.g(!1);
            this.l?.Zd()
        }
        isVisible() {
            return this.j
        }
        K() {
            ly(this);
            my(this)
        }
        i() {
            this.A && this.win.document.body.removeEventListener("keydown", this.A);
            const a = this.C.gb.Ta
              , b = a.parentNode;
            b && b.removeChild(a);
            this.l?.Zd();
            super.i()
        }
    }
    ;
    function fy(a, b, c) {
        const d = Ux(a, c.De)
          , e = d.shadowRoot;
        e.appendChild(we(new je(a.document), ds(Wx({
            Cc: c.Cc,
            Vd: c.Vd ?? !0,
            Bc: c.Bc || !1,
            sc: c.sc,
            Sf: c.Sf || "",
            zIndex: c.zIndex,
            me: .5,
            Ia: c.Ia || !1
        }))));
        const f = Rx("hd-drawer-container", e);
        c.Ie?.i(g=>{
            f.setAttribute("aria-label", g)
        }
        );
        c = Rx("hd-content-container", e);
        c.appendChild(b);
        Yo(a);
        return {
            Ja: f,
            bf: Rx("hd-modal-background", e),
            xe: c,
            Wh: Rx("hd-close-button", e),
            Rn: Rx("hd-back-arrow-button", e),
            gb: d
        }
    }
    ;function ny(a) {
        const b = a.gj
          , c = a.Ai;
        var d = a.me;
        const e = a.Ia;
        a = "<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + X(a.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " + X(c) + "%; transition: transform " + X(d) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round ";
        d = e ? 20 : 28;
        a += X(d) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " + X(b / c * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + X((c - b) / c * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " + X(b / c * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + X(b / c * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + X(80) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " + X(d) + "px " + X(d) + "px 0 0; background: white; display: flex; height: " + X(30) + "px; justify-content: center; cursor: grab;}.ved-handle-icon {" + (e ? "background: #dadce0; width: 50px;" : "background: #747775; opacity: 0.4; width: 32px;") + 'border-radius: 2px; height: 4px; margin-bottom: 8px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' + oy("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + oy("ved-fixed-handle") + "</div></div></div>";
        return is(a)
    }
    function oy(a) {
        return is('<div class="ved-handle" id="' + W(a) + '"><div class="ved-handle-icon"></div></div>')
    }
    ;function py(a) {
        return Hp(a.g).map(b=>b ? qy(a, b) : 0)
    }
    function qy(a, b) {
        switch (a.direction) {
        case 0:
            return ry(-b.wh);
        case 1:
            return ry(-b.uh);
        default:
            throw Error(`Unhandled direction: ${a.direction}`);
        }
    }
    function sy(a) {
        return Jp(a.g).map(b=>qy(a, b))
    }
    var ty = class {
        constructor(a) {
            this.g = a;
            this.direction = 0
        }
    }
    ;
    function ry(a) {
        return 0 === a ? 0 : a
    }
    ;function Y(a) {
        if (a.B)
            throw Error("Accessing domItems after disposal");
        return a.C
    }
    function uy(a) {
        a.win.setTimeout(()=>{
            a.g.P && Y(a).Ja.focus()
        }
        , 500)
    }
    function vy(a) {
        Y(a).Ja.classList.remove("ved-hidden");
        Yo(a.win);
        const {ra: b, eb: c} = Y(a);
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || wy(a);
        Y(a).Ja.classList.add("ved-revealed");
        a.g.g(!0);
        a.j && (Jx(a.j, Y(a).gb.Ta),
        a.tb && uy(a))
    }
    function xy(a) {
        return Vx(a.win, a.g)
    }
    function yy(a, b) {
        const c = new V(b());
        qp(a.H).listen(()=>void c.g(b()));
        return hp(c)
    }
    function zy(a) {
        const {ra: b, Nd: c} = Y(a);
        return yy(a, ()=>c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }
    function Ay(a) {
        const {ra: b, Nd: c} = Y(a);
        return yy(a, ()=>c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }
    function By(a) {
        const {ra: b} = Y(a);
        return yy(a, ()=>b.scrollTop === b.scrollHeight - b.clientHeight)
    }
    function Cy(a) {
        return ip(zy(a), By(a))
    }
    function Dy(a) {
        const {ra: b, eb: c} = Y(a);
        return yy(a, ()=>c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }
    function wy(a) {
        Y(a).eb.classList.add("ved-snap-point-top");
        var b = Ey(a, Y(a).eb);
        Y(a).ra.scrollTop = b;
        Fy(a)
    }
    function Gy(a) {
        kp(zy(a), !0, ()=>{
            const {lg: b, Tc: c} = Y(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        }
        );
        kp(zy(a), !1, ()=>{
            const {lg: b, Tc: c} = Y(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        }
        )
    }
    function Hy(a) {
        const b = Op(a.win, Y(a).xe);
        Rp(b).i(()=>void Iy(a));
        $o(a, b)
    }
    function Jy(a) {
        kp(Ky(a), !0, ()=>{
            Y(a).Rg.classList.remove("ved-hidden")
        }
        );
        kp(Ky(a), !1, ()=>{
            Y(a).Rg.classList.add("ved-hidden")
        }
        )
    }
    function Ly(a) {
        const b = ()=>void sp(a.D)
          , {bf: c, eb: d, zi: e} = Y(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        mp(My(a), !0, b)
    }
    function Ny(a) {
        mp(xy(a), !1, ()=>{
            wy(a);
            Y(a).Ja.classList.add("ved-hidden")
        }
        )
    }
    function Fy(a) {
        lp(a.l, !1, ()=>void sp(a.H))
    }
    function Iy(a) {
        if (!a.l.P) {
            var {ag: b, xe: c} = Y(a)
              , d = c.getBoundingClientRect().height;
            d = Math.max(Oy(a), d);
            a.l.g(!0);
            var e = Py(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(()=>{
                a.win.requestAnimationFrame(()=>{
                    a.l.g(!1)
                }
                )
            }
            )
        }
    }
    function Ky(a) {
        const {ra: b, eb: c} = Y(a);
        return yy(a, ()=>c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }
    function My(a) {
        return gp(a.A.map(qq), Qy(a))
    }
    function Qy(a) {
        return yy(a, ()=>0 === Y(a).ra.scrollTop)
    }
    function Ey(a, b) {
        ({Tc: a} = Y(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }
    function Ry(a, b) {
        a.A.g(!0);
        const {Tc: c, ra: d} = Y(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return ()=>void Sy(a, b)
    }
    function Sy(a, b) {
        const {Tc: c, ra: d} = Y(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        Y(a).ra.scrollTop = b;
        Fy(a);
        a.A.g(!1)
    }
    function Py(a) {
        const b = Y(a).ra.scrollTop;
        Ry(a, b);
        return ()=>void Sy(a, b)
    }
    function Oy(a) {
        const {ra: b, Nd: c, ag: d, eb: e} = Y(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var g = d.getBoundingClientRect();
        const h = e.getBoundingClientRect();
        g = g.top - f.top;
        return Math.max(a.height - h.height - g, Math.min(a.height, a.bottom - f.top) - g)
    }
    var Ty = class extends T {
        constructor(a, b, c, d, e=!0) {
            super();
            this.win = a;
            this.C = b;
            this.I = c;
            this.j = d;
            this.tb = e;
            this.D = new tp;
            this.H = new tp;
            this.g = new V(!1);
            this.A = new V(!1);
            this.l = new V(!1)
        }
        K() {
            wy(this);
            Gy(this);
            Hy(this);
            Jy(this);
            Ly(this);
            Ny(this);
            Y(this).ra.addEventListener("scroll", ()=>void Fy(this))
        }
        i() {
            const a = this.C.gb.Ta
              , b = a.parentNode;
            b && b.removeChild(a);
            this.j?.Zd();
            super.i()
        }
    }
    ;
    function Uy(a, b, c) {
        const d = Ux(a, c.De)
          , e = d.shadowRoot;
        e.appendChild(we(new je(a.document), ds(ny({
            gj: 100 * c.ef,
            Ai: 100 * c.Me,
            zIndex: c.zIndex,
            me: .5,
            Ia: c.Ia || !1
        }))));
        const f = Rx("ved-drawer-container", e);
        c.Ie?.i(g=>{
            f.setAttribute("aria-label", g)
        }
        );
        c = Rx("ved-content-container", e);
        c.appendChild(b);
        Yo(a);
        return {
            Ja: f,
            bf: Rx("ved-modal-background", e),
            mh: Rx("ved-ui-revealer", e),
            ra: Rx("ved-scroller", e),
            Tc: Rx("ved-scrolled-stack", e),
            zi: Rx("ved-fully-closed-anchor", e),
            eb: Rx("ved-partially-extended-anchor", e),
            ag: Rx("ved-content-sizer", e),
            xe: c,
            Xn: Rx("ved-moving-handle", e),
            Nd: Rx("ved-moving-handle-holder", e),
            yi: Rx("ved-fixed-handle", e),
            lg: Rx("ved-fixed-handle-holder", e),
            Rg: Rx("ved-over-scroll-block", e),
            gb: d
        }
    }
    ;function Vy(a, b, c) {
        var d = wx(new Bx(a), c.zIndex - 1);
        b = Uy(a, b, c);
        const e = c.Ce ? null : new Kx(a);
        var f = b.yi;
        f = new Kp(new Bp(a,f),new yp(f));
        var g = f.g;
        g.A.addEventListener("mousedown", g.G);
        g.l.addEventListener("mouseup", g.B);
        g.l.addEventListener("mousemove", g.C, {
            passive: !1
        });
        g = f.i;
        g.i.addEventListener("touchstart", g.C);
        g.i.addEventListener("touchend", g.A);
        g.i.addEventListener("touchmove", g.B, {
            passive: !1
        });
        b = new Ty(a,b,new ty(f),e,c.tb);
        b.K();
        d = new Wy(a,b,Lx(a),d);
        $o(d, b);
        d.K();
        c.qb && ((a = by(a)) ? Xy(d, a, c.cf) : c.cf?.(Error("Unable to create closeNavigator")));
        return d
    }
    function Xy(a, b, c) {
        mp(a.g.g, !0, ()=>{
            try {
                dy(b)
            } catch (d) {
                c?.(d)
            }
        }
        );
        mp(a.g.g, !1, ()=>{
            try {
                b.g && (b.g(),
                b.g = null)
            } catch (d) {
                c?.(d)
            }
        }
        );
        qp(b.j).listen(()=>void a.collapse());
        $o(a, b)
    }
    function Yy(a) {
        mp(gp(Cy(a.g), Dy(a.g)), !0, ()=>{
            Y(a.g).eb.classList.remove("ved-snap-point-top")
        }
        );
        kp(Ay(a.g), !0, ()=>{
            Y(a.g).ra.classList.add("ved-no-snap")
        }
        );
        kp(Ay(a.g), !1, ()=>{
            Y(a.g).ra.classList.remove("ved-no-snap")
        }
        );
        mp(Ay(a.g), !1, ()=>{
            var b = a.g;
            var c = Y(b).Nd;
            c = Ry(b, Ey(b, c));
            b.win.setTimeout(c, 100)
        }
        )
    }
    function Zy(a) {
        const b = a.g.I;
        py(b).listen(c=>{
            c = -c;
            if (0 < c) {
                const {mh: d} = Y(a.g);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else
                ({mh: c} = Y(a.g)),
                c.classList.remove("ved-no-animation"),
                c.style.removeProperty("transform")
        }
        );
        sy(b).listen(c=>{
            30 < -c && a.collapse()
        }
        )
    }
    var Wy = class extends T {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.g = b;
            mp(xy(b), !0, ()=>{
                Nx(c);
                Cx(d)
            }
            );
            mp(xy(b), !1, ()=>{
                Px(c);
                Dx(d)
            }
            )
        }
        show({gg: a=!1}={}) {
            if (this.B)
                throw Error("Cannot show drawer after disposal");
            vy(this.g);
            a && mp(xy(this.g), !1, ()=>{
                this.ka()
            }
            )
        }
        collapse() {
            var a = this.g;
            Y(a).Ja.classList.remove("ved-revealed");
            a.g.g(!1);
            a.j?.Zd()
        }
        isVisible() {
            return xy(this.g)
        }
        K() {
            qp(this.g.D).listen(()=>{
                this.collapse()
            }
            );
            Yy(this);
            Zy(this);
            Yo(this.win)
        }
    }
    ;
    var $y = class {
        constructor(a, b, c) {
            this.position = a;
            this.Bb = b;
            this.Qe = c
        }
    }
    ;
    function az(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    }
    az.prototype.Fc = function() {
        return this.end - this.start
    }
    ;
    function bz(a, b, c) {
        var d = S(a);
        d = new $y(b.hc.Kg(b.mb),b.Bb + 2 * b.mb,Math.min(d, b.Jd) - b.hc.ud() + 2 * b.mb);
        d = d.position.bg(a, d.Bb, d.Qe);
        var e = yo(a)
          , f = S(a);
        c = cz(a, new mk(Yd(d.top, 0, f - 1),Yd(d.right, 0, e - 1),Yd(d.bottom, 0, f - 1),Yd(d.left, 0, e - 1)), c);
        f = dz(c);
        let g = d.top;
        e = [];
        for (let h = 0; h < f.length; h++)
            f[h].start > g && e.push(new az(g,f[h].start)),
            g = f[h].end;
        g < d.bottom && e.push(new az(g,d.bottom));
        a = S(a);
        d = [];
        for (f = e.length - 1; 0 <= f; f--)
            d.push(new az(a - e[f].end,a - e[f].start));
        a: {
            for (const h of d)
                if (a = h.start + b.mb,
                a > b.hc.ud() + b.We ? a = null : (d = Math.min(h.end - b.mb, b.Jd) - a,
                a = d < b.Ye ? null : {
                    position: b.hc.th(a),
                    Oc: d
                }),
                a) {
                    b = a;
                    break a
                }
            b = null
        }
        return {
            qe: b,
            Qn: c
        }
    }
    function cz(a, b, c) {
        const d = qx(new sx(a), b);
        c.forEach(e=>void d.delete(e));
        return d
    }
    function dz(a) {
        return Array.from(a).map(ez).sort((b,c)=>b.start - c.start)
    }
    function ez(a) {
        a = a.getBoundingClientRect();
        return new az(a.top,a.bottom)
    }
    ;function fz({ca: a, ua: b}) {
        return new gz(a,b)
    }
    var gz = class {
        constructor(a, b) {
            this.ca = a;
            this.ua = b
        }
        Kg(a) {
            return new gz(this.ca - a,this.ua - a)
        }
        bg(a, b, c) {
            a = S(a) - this.ca - c;
            return new mk(a,this.ua + b,a + c,this.ua)
        }
        Pf(a) {
            a.bottom = `${this.ca}px`;
            a.left = `${this.ua}px`;
            a.right = ""
        }
        ng() {
            return 0
        }
        ud() {
            return this.ca
        }
        th(a) {
            return new gz(a,this.ua)
        }
    }
    ;
    function hz({ca: a, Fa: b}) {
        return new iz(a,b)
    }
    var iz = class {
        constructor(a, b) {
            this.ca = a;
            this.Fa = b
        }
        Kg(a) {
            return new iz(this.ca - a,this.Fa - a)
        }
        bg(a, b, c) {
            var d = yo(a);
            a = S(a) - this.ca - c;
            d = d - this.Fa - b;
            return new mk(a,d + b,a + c,d)
        }
        Pf(a) {
            a.bottom = `${this.ca}px`;
            a.right = `${this.Fa}px`;
            a.left = ""
        }
        ng() {
            return 1
        }
        ud() {
            return this.ca
        }
        th(a) {
            return new iz(a,this.Fa)
        }
    }
    ;
    function jz(a) {
        const b = a.ti
          , c = a.Yh
          , d = a.Rh
          , e = a.Aj
          , f = a.Sh;
        a = a.Qh;
        return is('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500,700" rel="stylesheet"><style>.ft-styless-button {border: none; background: none; user-select: none; cursor: pointer; border-radius: ' + X(16) + "px;}.ft-container {position: fixed;}.ft-menu {position: absolute; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); min-height: " + X(d) + "px;}.ft-menu:not(.ft-multiple-buttons *) {transition: padding 0.25s 0.25s, margin 0.25s 0.25s, border-radius 0.25s 0.25s, background-color 0s 0.5s; padding: 0; margin: " + X(a) + "px; border-radius: " + X(16) + "px; background-color: rgba(255, 255, 255, 0);}.ft-multiple-buttons .ft-menu {transition: margin 0.25s, padding 0.25s, border-radius 0.25s 0.25s, background-color 0s; padding: " + X(a) + "px; margin: 0; border-radius: " + X(16 + a) + "px; background-color: rgba(255, 255, 255, 1);}.ft-left-pos .ft-menu {left: 0;}.ft-right-pos .ft-menu {right: 0;}.ft-container.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}.ft-container:not(.ft-hidden) {transition: opacity 0.25s, bottom 0.5s ease; opacity: 1;}.google-symbols {font-size: 26px; color: #3c4043;}.ft-button-holder {display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0;}.ft-flip-vertically {transform: scaleY(-1);}.ft-expand-toggle {width: " + X(d) + "px; height: " + X(d) + "px;}.ft-collapsed .ft-expand-icon {transition: transform 0.25s; transform: rotate(180deg);}.ft-expand-icon:not(.ft-collapsed *) {transition: transform 0.25s; transform: rotate(0deg);}.ft-button {position: relative; height: " + X(d) + "px; margin-bottom: " + X(f) + "px; transform: margin 0.25s 0.25s;}.ft-button.ft-last-button {margin-bottom: 0;}.ft-button > button {position: relative; height: " + X(d) + "px; width: " + X(d) + "px; margin: 0; padding: 0; border: none;}.ft-button > button > * {position: relative;}.ft-button .ft-highlighter {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); height: " + X(d - 6) + "px; width: " + X(d - 6) + "px; border-radius: " + X(d / 2) + "px; background-color: #d2e3fc; opacity: 0; transition: opacity 0.25s;}.ft-button.ft-highlighted .ft-highlighter {opacity: 1;}.ft-button-corner-info {display: none;}.ft-button.ft-show-corner-info .ft-button-corner-info {position: absolute; left: -5px; top: 4px; background: #b3261e; border: 1.5px solid #ffffff; box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); border-radius: 100px; color: ffffff; font-family: 'Google Sans Text'; font-style: normal; font-weight: 700; font-size: 11px; line-height: 14px; min-width: 16px; height: 16px; display: flex; flex-direction: row; justify-content: center; align-items: center;}.ft-separator {display: block; width: 100%; height: " + X(e) + "px;}.ft-separator > span {display: block; width: 28px; margin: 0 auto 10px auto; height: 0; border-bottom: 1px solid #dadce0;}.ft-expand-toggle-container {height: " + X(d) + "px;}.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}:not(.ft-hidden) {transition: opacity 0.25s; opacity: 1;}.ft-collapsed .ft-collapsible, .ft-collapsible.ft-collapsed, .ft-expand-toggle-container.ft-collapsed {transition: opacity 0.25s, margin 0.25s 0.25s, height 0.25s 0.25s, overflow 0.25s 0s, visibility 1s 0s; height: 0; opacity: 0; overflow: hidden; visibility: hidden; margin: 0;}.ft-collapsible:not(.ft-collapsed *):not(.ft-collapsed), .ft-expand-toggle-container:not(.ft-collapsed) {transition: margin 0.25s, height 0.25s, opacity 0.25s 0.25s; opacity: 1;}.ft-symbol-font-load-test {position: fixed; left: -1000px; top: -1000px; font-size: 26px; visibility: hidden;}.ft-reg-bubble {position: absolute; bottom: 0; padding: 10px 10px 0 10px; background: #fff; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); border-radius: " + X(16) + "px; max-width: calc(90vw - " + X(2 * d) + "px); width: 300px; height: 200px;}.ft-left-pos .ft-reg-bubble {left: " + X(d + 10 + a) + "px;}.ft-right-pos .ft-reg-bubble {right: " + X(d + 10 + a) + "px;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-collapsed {transition: width 0.25s ease-in 0.25s, height 0.25s ease-in 0.25s, opacity 0.05s linear 0.45s, overflow 0s 0.25s, visibility 0s 0.5s; width: 0; overflow: hidden; opacity: 0; visibility: hidden;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-no-messages {height: 0 !important;}.ft-reg-bubble:not(.ft-collapsed *):not(.ft-collapsed) {transition: width 0.25s ease-out, height 0.25s ease-out, opacity 0.05s linear;}.ft-reg-bubble-content {display: flex; flex-direction: row; max-width: calc(90vw - " + X(2 * d) + 'px); width: 300px;}.ft-collapsed .ft-reg-bubble-content {transition: opacity 0.25s; opacity: 0;}.ft-reg-bubble-content:not(.ft-collapsed *) {transition: opacity 0.25s 0.25s; opacity: 1;}.ft-reg-message-holder {flex-grow: 1; display: flex; flex-direction: column; height: auto;}.ft-reg-controls {flex-grow: 0; padding-left: 5px;}.ft-reg-bubble-close-icon {font-size: 16px;}.ft-reg-message {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid #dadce0;}.ft-reg-message:last-of-type {border-bottom: none;}.ft-reg-message-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ft-display-none {display: none;}</style><toolbar id="ft-floating-toolbar" class="ft-container ft-hidden"><div class="ft-menu"><div class="ft-button-holder"></div><div class="ft-separator ft-collapsible ft-collapsed"><span></span></div><div class="ft-bottom-button-holder"></div><div class="ft-expand-toggle-container"><button class="ft-expand-toggle ft-styless-button" aria-controls="ft-floating-toolbar" aria-label="' + W(b) + '"><span class="google-symbols ft-expand-icon" aria-hidden="true">expand_more</span></button></div></div><div id="ft-reg-bubble" class="ft-reg-bubble ft-collapsed ft-no-messages"><div class="ft-reg-bubble-content"><div class="ft-reg-message-holder"></div><div class="ft-reg-controls"><button class="ft-reg-bubble-close ft-styless-button" aria-controls="ft-reg-bubble" aria-label="' + W(c) + '"><span class="google-symbols ft-reg-bubble-close-icon" aria-hidden="true">close</span></button></div></div></div></toolbar><span inert class="ft-symbol-font-load-test"><span class="ft-symbol-reference google-symbols" aria-hidden="true">keyboard_double_arrow_right</span><span class="ft-text-reference" aria-hidden="true">keyboard_double_arrow_right</span></span>')
    }
    function kz(a) {
        const b = a.googleIconName
          , c = a.backgroundColorCss
          , d = a.iconColorCss;
        return is('<div class="ft-button ft-collapsible ft-collapsed ft-last-button"><button class="ft-styless-button" aria-label="' + W(a.ariaLabel) + '" style="background-color: ' + W(X(c)) + '"><span class="ft-highlighter"></span><span class="google-symbols" style="color: ' + W(X(d)) + '" aria-hidden="true">' + hs(b) + '</span></button><span class="ft-button-corner-info"></span></div>')
    }
    ;const lz = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500,700"];
    function mz(a, b) {
        a = new nz(a,b,oz(a, b));
        a.K();
        return a
    }
    function pz() {
        var {uc: a} = {
            uc: 2
        };
        return 1 < a ? 50 : 120
    }
    function qz(a, b, c) {
        0 === rz(a) && b.classList.remove("ft-collapsed");
        sz(b, c);
        Yo(a.win);
        b.classList.remove("ft-collapsed");
        tz(a);
        return ()=>void uz(a, b, c)
    }
    function vz(a) {
        0 === wz(a.g.ma.Kd).length ? (a.l.P?.pj(),
        a.l.g(null),
        a.g.ma.Pe.g(!1),
        a.g.ma.xg.g(!1),
        a.g.ma.Se.g(!1)) : (a.g.ma.Pe.g(!0),
        xz(a))
    }
    function yz(a, {Bh: b=0, Pn: c=0}) {
        b = Math.max(wz(a.g.Gb).length + b, 0);
        c = Math.max(wz(a.g.lb).length + c, 0);
        const d = b + c;
        let e = 50 * d;
        0 < b && 0 < c && (e += 11);
        e += 10 * Math.max(0, d - 1);
        d >= a.j.uc && (e += 60);
        1 < d && (e += 10);
        return e
    }
    function rz(a) {
        const b = a.g.lb;
        return wz(a.g.Gb).length + wz(b).length
    }
    function tz(a) {
        const b = a.g.lb
          , c = a.g.separator;
        0 < wz(a.g.Gb).length && 0 < wz(b).length ? c.classList.remove("ft-collapsed") : c.classList.add("ft-collapsed");
        rz(a) >= a.j.uc ? a.g.wg.g(!0) : a.g.wg.g(!1);
        1 < rz(a) ? a.g.qg.g(!0) : a.g.qg.g(!1);
        0 < rz(a) ? a.g.isVisible.g(!0) : a.g.isVisible.g(!1);
        zz(a);
        Az(a)
    }
    function uz(a, b, c) {
        b.classList.contains("ft-removing") || (b.classList.add("ft-removing"),
        b.classList.add("ft-collapsed"),
        tz(a),
        a.win.setTimeout(()=>{
            c.removeChild(b)
        }
        , 750))
    }
    function zz(a) {
        const b = wz(a.g.Gb).concat(wz(a.g.lb));
        b.forEach(c=>{
            c.classList.remove("ft-last-button")
        }
        );
        rz(a) >= a.j.uc || b[b.length - 1]?.classList.add("ft-last-button")
    }
    function Az(a) {
        const b = wz(a.g.Gb).concat(wz(a.g.lb)).filter(c=>!c.classList.contains("ft-reg-button"));
        a.D.g(0 < b.length)
    }
    function Bz(a) {
        Lo(a.g.ma.Kd.children, b=>{
            const c = a.g.ma.Td;
            uz(a, b, a.g.ma.Kd);
            const d = c.get(b);
            c.delete(b);
            d?.isDismissed.g(!0)
        }
        );
        vz(a)
    }
    function xz(a) {
        if (!a.l.P) {
            var b = Cz(a.win, {
                googleIconName: "verified_user",
                ariaLabel: O(a.j.Ka, 2),
                orderingIndex: 0,
                onClick: ()=>{
                    a.g.ma.xg.g(!a.g.ma.isVisible.P);
                    for (const [,c] of a.g.ma.Td)
                        c.Ag = !0;
                    a.g.ma.Se.g(!1)
                }
                ,
                backgroundColorCss: "#fff"
            });
            b.cd.classList.add("ft-reg-button");
            qz(a, b.cd, a.g.lb);
            np(b.Qi, a.g.ma.isVisible);
            a.l.g({
                Tn: b,
                pj: ()=>void uz(a, b.cd, a.g.lb)
            })
        }
    }
    function Dz(a) {
        var b = a.g.ma.Se
          , c = b.g;
        a: {
            for ([,d] of a.g.ma.Td)
                if (a = d,
                a.showUnlessUserInControl && !a.Ag) {
                    var d = !0;
                    break a
                }
            d = !1
        }
        c.call(b, d)
    }
    function Ez(a) {
        a.g.ma.Xh.listen(()=>{
            Bz(a)
        }
        )
    }
    var nz = class extends T {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.j = b;
            this.g = c;
            this.l = new V(null);
            this.D = new V(!1)
        }
        addButton(a) {
            a = Cz(this.win, a);
            return qz(this, a.cd, this.g.Gb)
        }
        addRegulatoryMessage(a) {
            const b = this.g.ma.Kd
              , c = Fz(this.win, a);
            sz(c.Eg, b);
            this.g.ma.Td.set(c.Eg, c);
            vz(this);
            return {
                showUnlessUserInControl: ()=>{
                    c.showUnlessUserInControl = !0;
                    Dz(this)
                }
                ,
                hideUnlessUserInControl: ()=>{
                    c.showUnlessUserInControl = !1;
                    Dz(this)
                }
                ,
                isDismissed: pp(c.isDismissed)
            }
        }
        H() {
            return hp(this.l.map(a=>null != a))
        }
        C() {
            return hp(this.D)
        }
        A() {
            return [this.g.container]
        }
        i() {
            const a = this.g.gb.Ta;
            a.parentNode?.removeChild(a);
            super.i()
        }
        K() {
            Yp(this.win, lz);
            np(this.g.Gj, this.j.Pc);
            this.win.document.body.appendChild(this.g.gb.Ta);
            Ez(this)
        }
    }
    ;
    function oz(a, b) {
        const c = yw(a)
          , d = c.shadowRoot;
        d.appendChild(we(new je(a.document), ds(jz({
            ti: O(b.Ka, 1),
            Yh: O(b.Ka, 3),
            Rh: 50,
            Aj: 11,
            Sh: 10,
            Qh: 5
        }))));
        const e = Tx("ft-container", d)
          , f = Tx("ft-expand-toggle", d)
          , g = Tx("ft-expand-toggle-container", d)
          , h = new V(null);
        h.i(p=>{
            e.style.zIndex = String(p ?? 2147483647)
        }
        );
        const k = new V(!0);
        kp(k, !0, ()=>{
            e.classList.remove("ft-collapsed");
            f.setAttribute("aria-expanded", "true")
        }
        );
        kp(k, !1, ()=>{
            e.classList.add("ft-collapsed");
            f.setAttribute("aria-expanded", "false")
        }
        );
        f.addEventListener("click", ()=>{
            k.g(!k.P)
        }
        );
        const l = new V(!1);
        kp(l, !0, ()=>{
            g.classList.remove("ft-collapsed");
            e.classList.add("ft-toolbar-collapsible")
        }
        );
        kp(l, !1, ()=>{
            g.classList.add("ft-collapsed");
            e.classList.remove("ft-toolbar-collapsible");
            k.g(!0)
        }
        );
        const m = new V(!1);
        kp(m, !0, ()=>{
            e.classList.add("ft-multiple-buttons")
        }
        );
        kp(m, !1, ()=>{
            e.classList.remove("ft-multiple-buttons")
        }
        );
        b.position.i(p=>{
            if (p) {
                p.Pf(e.style);
                p = p.ng();
                switch (p) {
                case 0:
                    e.classList.add("ft-left-pos");
                    e.classList.remove("ft-right-pos");
                    break;
                case 1:
                    e.classList.add("ft-right-pos");
                    e.classList.remove("ft-left-pos");
                    break;
                default:
                    throw Error(`Unknown HorizontalAnchoring: ${p}`);
                }
                Yo(a)
            }
        }
        );
        const n = new V(!1);
        b = gp(Gz(a, d), n, b.position.map(p=>null !== p));
        kp(b, !0, ()=>{
            e.classList.remove("ft-hidden")
        }
        );
        kp(b, !1, ()=>{
            e.classList.add("ft-hidden")
        }
        );
        b = Hz(a, Tx("ft-reg-bubble", d));
        return {
            container: e,
            Gb: Tx("ft-button-holder", d),
            lb: Tx("ft-bottom-button-holder", d),
            separator: Tx("ft-separator", d),
            gb: c,
            Gj: h,
            Wn: k,
            wg: l,
            qg: m,
            isVisible: n,
            ma: b
        }
    }
    function Hz(a, b) {
        const c = new V(!1)
          , d = new V(!1)
          , e = ip(c, d);
        kp(e, !0, ()=>{
            b.classList.remove("ft-collapsed")
        }
        );
        kp(e, !1, ()=>{
            b.classList.add("ft-collapsed")
        }
        );
        const f = new V(!1);
        kp(f, !0, ()=>{
            b.classList.remove("ft-no-messages")
        }
        );
        kp(f, !1, ()=>{
            b.classList.add("ft-no-messages")
        }
        );
        const g = Tx("ft-reg-bubble-close", b)
          , h = new tp;
        g.addEventListener("click", ()=>{
            sp(h)
        }
        );
        const k = Tx("ft-reg-message-holder", b);
        Rp(Op(a, k)).i(()=>{
            b.style.height = `${k.offsetHeight}px`
        }
        );
        return {
            Kd: k,
            xg: c,
            Se: d,
            isVisible: e,
            Pe: f,
            Td: new Map,
            Xh: qp(h)
        }
    }
    function Cz(a, b) {
        const c = we(new je(a.document), ds(kz({
            googleIconName: b.googleIconName,
            ariaLabel: b.ariaLabel,
            backgroundColorCss: b.backgroundColorCss || "#e2eaf6",
            iconColorCss: b.iconColorCss || "#3c4043"
        })));
        if (void 0 !== b.cornerNumber) {
            const d = Yd(Math.round(b.cornerNumber), 0, 99);
            Tx("ft-button-corner-info", c).appendChild(a.document.createTextNode(String(d)));
            c.classList.add("ft-show-corner-info")
        }
        c.orderingIndex = b.orderingIndex;
        b.onClick && Sx("BUTTON", c).addEventListener("click", b.onClick);
        a = new V(!1);
        kp(a, !0, ()=>{
            c.classList.add("ft-highlighted")
        }
        );
        kp(a, !1, ()=>{
            c.classList.remove("ft-highlighted")
        }
        );
        return {
            cd: c,
            Qi: a
        }
    }
    function Fz(a, b) {
        a = new je(a.document);
        var c = is('<div class="ft-reg-message"><button class="ft-reg-message-button"></button><div class="ft-reg-message-info"></div></div>');
        a = we(a, ds(c));
        c = Tx("ft-reg-message-button", a);
        b.regulatoryMessage.actionButton ? (c.appendChild(b.regulatoryMessage.actionButton.buttonText),
        c.addEventListener("click", b.regulatoryMessage.actionButton.onClick)) : c.classList.add("ft-display-none");
        c = Tx("ft-reg-message-info", a);
        b.regulatoryMessage.informationText ? c.appendChild(b.regulatoryMessage.informationText) : c.classList.add("ft-display-none");
        a.orderingIndex = b.orderingIndex;
        return {
            Eg: a,
            showUnlessUserInControl: !1,
            Ag: !1,
            isDismissed: new V(!1)
        }
    }
    function sz(a, b) {
        a: {
            var c = Array.from(b.children);
            for (let d = 0; d < c.length; ++d)
                if (c[d].orderingIndex >= a.orderingIndex) {
                    c = d;
                    break a
                }
            c = c.length
        }
        b.insertBefore(a, b.childNodes[c] || null)
    }
    function wz(a) {
        return Array.from(a.children).filter(b=>!b.classList.contains("ft-removing"))
    }
    function Gz(a, b) {
        const c = new V(!1)
          , d = Tx("ft-symbol-font-load-test", b);
        b = Tx("ft-symbol-reference", d);
        const e = Tx("ft-text-reference", d)
          , f = Op(a, b);
        lp(Rp(f).map(g=>0 < g.width && g.width < e.offsetWidth / 2), !0, ()=>{
            c.g(!0);
            d.parentNode?.removeChild(d);
            f.ka()
        }
        );
        return c
    }
    ;function Iz(a) {
        const b = new tp
          , c = Ep(a, 2500, ()=>void sp(b));
        return new Jz(a,()=>void Kz(a, ()=>void c()),qp(b))
    }
    function Lz(a) {
        const b = new MutationObserver(()=>{
            a.g()
        }
        );
        b.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "style"]
        });
        ap(a, ()=>void b.disconnect())
    }
    function Mz(a) {
        a.win.addEventListener("resize", a.g);
        ap(a, ()=>void a.win.removeEventListener("resize", a.g))
    }
    var Jz = class extends T {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.g = b;
            this.l = c;
            this.j = !1
        }
    }
    ;
    function Kz(a, b) {
        b();
        a.setTimeout(b, 1500)
    }
    ;function Nz(a) {
        return a.g[a.g.length - 1]
    }
    var Pz = class {
        constructor() {
            this.j = Oz;
            this.g = [];
            this.i = new Set
        }
        add(a) {
            if (this.i.has(a))
                return !1;
            const b = hb(this.g, a, this.j);
            this.g.splice(0 <= b ? b : -b - 1, 0, a);
            this.i.add(a);
            return !0
        }
        first() {
            return this.g[0]
        }
        has(a) {
            return this.i.has(a)
        }
        delete(a) {
            bb(this.g, b=>b === a);
            return this.i.delete(a)
        }
        clear() {
            this.i.clear();
            return this.g.splice(0, this.g.length)
        }
        size() {
            return this.g.length
        }
    }
    ;
    function Qz(a) {
        var b = a.Oc.P;
        let c;
        for (; a.j.ci() > b && (c = a.i.first()); ) {
            var d = a
              , e = c;
            Rz(d, e);
            d.g.add(e)
        }
        for (; (d = Nz(a.g)) && a.j.Fi() <= b; )
            Sz(a, d);
        for (; (d = Nz(a.g)) && (c = a.i.first()) && d.priority > c.priority; )
            b = a,
            e = c,
            Rz(b, e),
            b.g.add(e),
            Sz(a, d)
    }
    function Sz(a, b) {
        a.g.delete(b);
        a.i.add(b) && (b.zf = a.j.addButton(b.buttonSpec));
        b.isInToolbar.g(!0)
    }
    function Rz(a, b) {
        b.zf && b.zf();
        b.zf = void 0;
        a.i.delete(b);
        b.isInToolbar.g(!1)
    }
    var Tz = class {
        constructor(a, b) {
            this.Oc = a;
            this.j = b;
            this.g = new Pz;
            this.i = new Pz;
            this.l = 0;
            this.Oc.listen(()=>void Qz(this))
        }
        addButton(a) {
            const b = {
                buttonSpec: a.buttonSpec,
                priority: a.priority,
                Gf: this.l++,
                isInToolbar: new V(!1)
            };
            this.g.add(b);
            Qz(this);
            return {
                isInToolbar: pp(hp(b.isInToolbar)),
                removeCallback: ()=>{
                    Rz(this, b);
                    this.g.delete(b);
                    Qz(this)
                }
            }
        }
    }
    ;
    function Oz(a, b) {
        return a.priority === b.priority ? b.Gf - a.Gf : a.priority - b.priority
    }
    ;function Uz(a) {
        a = new Vz(a);
        a.K();
        return a
    }
    function Wz(a) {
        if (!Qx(a.win)) {
            if (a.j.P) {
                const b = Go(a.win);
                if (b > a.g + 100 || b < a.g - 100)
                    a.j.g(!1),
                    a.g = Ao(a.win)
            }
            a.l && a.win.clearTimeout(a.l);
            a.l = a.win.setTimeout(()=>void Xz(a), 200)
        }
    }
    function Xz(a) {
        if (!Qx(a.win)) {
            var b = Ao(a.win);
            a.g && a.g > b && (a.g = b);
            b = Go(a.win);
            b >= a.g - 100 && (a.g = Math.max(a.g, b),
            a.j.g(!0))
        }
    }
    var Vz = class extends T {
        constructor(a) {
            super();
            this.win = a;
            this.j = new V(!1);
            this.g = 0;
            this.l = null;
            this.A = ()=>void Wz(this)
        }
        K() {
            this.win.addEventListener("scroll", this.A);
            this.g = Ao(this.win);
            Xz(this)
        }
        i() {
            this.win.removeEventListener("scroll", this.A);
            this.j.g(!1);
            super.i()
        }
    }
    ;
    function Yz(a) {
        if (!a.g) {
            const b = Uz(a.win);
            a.g = hp(b.j);
            $o(a, b)
        }
        return a.g
    }
    function Zz(a, b) {
        const c = Yz(a)
          , d = a.j.addRegulatoryMessage(b.messageSpec)
          , e = kp(c, !0, ()=>void d.showUnlessUserInControl())
          , f = kp(c, !1, ()=>void d.hideUnlessUserInControl());
        kp(ep(d.isDismissed), !0, ()=>{
            e();
            f()
        }
        )
    }
    var $z = class extends T {
        constructor(a, b) {
            super();
            this.win = a;
            this.j = b;
            this.g = null
        }
        addRegulatoryMessage(a) {
            lp(Yz(this), !0, ()=>void Zz(this, a))
        }
    }
    ;
    function aA(a, b) {
        a.googFloatingToolbarManager || (a.googFloatingToolbarManager = new bA(a,b));
        return a.googFloatingToolbarManager
    }
    function cA(a) {
        a.g || (a.g = dA(a.win, a.Lb, a.Pc),
        $o(a, a.g.Mb),
        $o(a, a.g.Zg),
        eA(a),
        fA(a, a.g.Mb));
        return a.g
    }
    function gA(a) {
        var b = [];
        a.g?.Mb?.C().A() ? (b.push(()=>hA(a)),
        b.push(()=>iA(a))) : (b.push(()=>iA(a)),
        b.push(()=>hA(a)));
        a.g?.Mb?.H()?.A() && b.push(()=>{
            const c = S(a.win);
            return {
                position: fz({
                    ca: Math.floor(c / 3),
                    ua: 10
                }),
                Oc: 0
            }
        }
        );
        for (const c of b)
            if (b = c())
                return b;
        return null
    }
    function eA(a) {
        null === a.Pc.P && a.g?.position.g(gA(a))
    }
    function fA(a, b) {
        const c = Iz(a.win);
        c.j || (Lz(c),
        Mz(c),
        c.j = !0);
        c.l.listen(()=>void eA(a));
        $o(a, c);
        b.H().listen(()=>void eA(a));
        b.C().listen(()=>void eA(a));
        a.Pc.listen(()=>void eA(a))
    }
    function hA(a) {
        var b = a.win;
        const c = S(a.win);
        return bz(b, {
            hc: hz({
                ca: 50,
                Fa: 10
            }),
            We: Math.floor(c / 3),
            Bb: 60,
            Ye: pz(),
            Jd: Math.floor(c / 2),
            mb: 20
        }, [...(a.g?.Mb.A() ?? []), a.win.document.body]).qe
    }
    function iA(a) {
        var b = a.win;
        const c = S(a.win);
        return bz(b, {
            hc: fz({
                ca: 50,
                ua: 10
            }),
            We: Math.floor(c / 3),
            Bb: 60,
            Ye: pz(),
            Jd: Math.floor(c / 2),
            mb: 40
        }, [...(a.g?.Mb.A() ?? []), a.win.document.body]).qe
    }
    class bA extends T {
        constructor(a, b) {
            super();
            this.win = a;
            this.Lb = b;
            this.g = null;
            this.Pc = jA(this.win, this)
        }
        addButton(a) {
            return cA(this).bj.addButton(a)
        }
        addRegulatoryMessage(a) {
            cA(this).Zg.addRegulatoryMessage(a)
        }
    }
    function dA(a, b, c) {
        const d = new V(null)
          , e = mz(a, {
            uc: 2,
            position: d.map(f=>f?.position ?? null),
            Ka: b,
            Pc: c
        });
        b = new Tz(d.map(f=>f?.Oc || 0),{
            addButton: f=>e.addButton(f),
            ci: ()=>yz(e, {}),
            Fi: ()=>yz(e, {
                Bh: 1
            })
        });
        a = new $z(a,{
            addRegulatoryMessage: f=>e.addRegulatoryMessage(f)
        });
        return {
            Mb: e,
            position: d,
            bj: b,
            Zg: a
        }
    }
    function jA(a, b) {
        const c = new Bx(a)
          , d = new V(null)
          , e = f=>void d.g(f);
        ap(b, ()=>{
            Ax(c, e)
        }
        );
        c.g.maxZIndexListeners.push(e);
        d.g(zx(c));
        return d
    }
    ;function kA(a) {
        return aA(a.win, a.Ka)
    }
    var lA = class {
        constructor(a, b) {
            this.win = a;
            this.Ka = b
        }
    }
    ;
    function mA(a) {
        if (a.H) {
            var b = kA(new lA(a.g,a.H)).addButton({
                buttonSpec: {
                    googleIconName: "search",
                    ariaLabel: a.Ga,
                    orderingIndex: 0,
                    onClick: ()=>{
                        nA(a)
                    }
                },
                priority: 0
            });
            lp(ep(b.isInToolbar), !0, ()=>{
                oA(a)
            }
            );
            a.g.setTimeout(()=>{
                b.isInToolbar.getValue() || Wr(a.j, "pfmsb")
            }
            , 5E3);
            pA(a)
        } else
            qA(a)
    }
    function qA(a) {
        var b = rA(a);
        b = px(new sx(a.g), b);
        b?.className.startsWith("adsbygoogle") ? Wr(a.j, "pfeaa") : b ? Wr(a.j, "pfeofe") : (a.X.appendChild(a.B.Ta),
        a.B.shadowRoot.appendChild(lj((()=>{
            if (a.l) {
                var c = sA(a)
                  , d = {
                    backgroundColor: c.backgroundColor,
                    Qb: c.Qb,
                    offsetTop: c.Ng,
                    df: c.Mg,
                    zIndex: 2147483643
                };
                c = d.zIndex;
                var e = d.cj
                  , f = d.offsetTop
                  , g = d.df
                  , h = d.backgroundColor;
                d = d.Qb;
                e = void 0 === e ? 16 : e;
                g = void 0 === g ? 2 : g;
                d = void 0 === d ? "white" : d;
                h = "<style>.autoprose-search-button {background: " + X(void 0 === h ? "#000" : h) + "; border-radius: ";
                h += X(24) + "px;" + (f ? "top: " + X(f) + "%;" : "bottom: " + X(g) + "%;") + "border-width: 0; box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; height: " + X(48) + "px; position: fixed; right: " + X(e) + "px; width: 48px; z-index: " + X(c) + ';}.autoprose-search-icon {position: relative;}</style><button class="autoprose-search-button"><div class="autoprose-search-icon">' + Fs(d) + "</div></button>";
                c = is(h);
                return ds(c)
            }
            c = sA(a);
            var k = {
                zj: c.yj,
                backgroundColor: c.backgroundColor,
                Qb: c.Qb,
                offsetTop: c.Ng,
                df: c.Mg,
                zIndex: 2147483643
            };
            c = k.zj;
            f = k.zIndex;
            g = k.cj;
            h = k.offsetTop;
            d = k.df;
            e = k.backgroundColor;
            k = k.Qb;
            g = void 0 === g ? 16 : g;
            d = void 0 === d ? 2 : d;
            k = void 0 === k ? "white" : k;
            e = "<style>.autoprose-search-button {align-items: center; background: " + X(void 0 === e ? "#000" : e) + "; border-radius: ";
            e += X(24) + "px; border-width: 0;" + (h ? "top: " + X(h) + "%;" : "bottom: " + X(d) + "%;") + "box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; display: flex; height: " + X(48) + "px; line-height: 1; padding: 0 20px; position: fixed; right: " + X(g) + "px; z-index: " + X(f) + ";}.autoprose-search-text {color: " + X(k) + '; font-family: Google Sans, Roboto, sans-serif; font-size: 16px; margin: 10px; user-select: none;}</style><button class="autoprose-search-button"><div class="autoprose-search-icon">' + Fs(k) + '</div><div class="autoprose-search-text">' + hs(c) + "</div></button>";
            c = is(e);
            return ds(c)
        }
        )())),
        (b = tA(a)) ? (oA(a),
        Ob(b, "click", ()=>{
            nA(a)
        }
        )) : Wr(a.j, "pfmsb"),
        pA(a))
    }
    function nA(a) {
        a.I || (lw(1139, ()=>a.G.K(), a.g),
        a.I = !0);
        Ur(a.j, "click", {});
        uA(a)
    }
    function oA(a) {
        Ur(a.j, "place", {
            sts: "ok"
        });
        vA(a)
    }
    function pA(a) {
        a.l && mp(a.C.isVisible(), !1, ()=>{
            a.i.contentDocument.activeElement.blur()
        }
        )
    }
    function rA(a) {
        let b;
        b = a.l ? 50 : 150;
        var c = a.g.innerHeight;
        const d = a.D ? 20 : 2;
        c = 2 === a.A?.g() ? (100 - d) / 100 * c : .2 * c;
        return {
            Ti: a.g.innerWidth - 16 - b,
            Dj: c,
            width: b,
            height: 50
        }
    }
    function sA(a) {
        const b = a.A?.j() || void 0
          , c = a.A?.l() || void 0;
        let d, e;
        2 === a.A?.g() ? e = a.D ? 20 : 2 : d = 20;
        return {
            backgroundColor: b,
            Qb: c,
            Ng: d,
            Mg: e,
            yj: a.xa
        }
    }
    function tA(a) {
        const b = a.B.shadowRoot.querySelectorAll(".autoprose-search-button")[0];
        return b ? b : a.B.shadowRoot.querySelectorAll(".autoprose-searchbox")[0]
    }
    function vA(a) {
        Ob(a.g.top, "message", b=>{
            b.data && "init" === b.data.action && "AutoProseVariant" === b.data.adChannel && (b = wA(a),
            Ps(a.G, b),
            xA(a),
            yA(a))
        }
        )
    }
    function uA(a) {
        xA(a);
        a.C.show();
        yA(a)
    }
    function wA(a) {
        if (a = a.i.contentDocument?.getElementsByTagName("input")[0])
            return a;
        console.warn("searchbox missing");
        return null
    }
    function xA(a) {
        const b = new ResizeObserver(async d=>{
            a.i.height = 0;
            await new Promise(e=>a.g.requestAnimationFrame(e));
            a.i.height = d[0].target.scrollHeight
        }
        )
          , c = ()=>{
            const d = a.i.contentDocument?.documentElement;
            d ? b.observe(d) : (console.warn("iframe body missing"),
            setTimeout(c, 1E3))
        }
        ;
        c()
    }
    function yA(a) {
        a.C.isVisible() && wA(a)?.focus({
            preventScroll: !0
        })
    }
    var zA = class {
        constructor(a, b, c, d, e, f, g, h) {
            this.g = a;
            this.l = (this.ea = h) ? 500 > this.g.innerWidth : 2 === tf();
            this.D = !!e?.C();
            this.Qa = !!e?.G();
            this.I = !1;
            this.X = c;
            this.B = yw(this.g);
            this.j = d;
            c = e?.B();
            this.pa = c?.g() || "en";
            this.Pa = c?.j() || "Search results from ${website}";
            this.xa = c?.A() || "Search";
            this.Ga = c?.l() || "Open AutoSearch";
            this.T = b.replace("ca", "partner");
            this.M = new je(window.document);
            this.i = ve(this.M, "IFRAME");
            this.G = new Qs(this.i,e?.A() || "","auto-prose",this.T,"AutoProseVariant",a.location,this.pa,this.Pa,f,!1,!0,!0);
            a = this.i;
            this.C = this.l ? Vy(this.g, a, {
                ef: .95,
                Me: .95,
                zIndex: 2147483645,
                qb: !0,
                md: !0,
                tb: !1,
                Ia: !0
            }) : ey(this.g, a, {
                Cc: "min(65vw, 768px)",
                sc: "",
                Bc: !1,
                zIndex: 2147483645,
                qb: !0,
                md: !0,
                tb: !1,
                Vd: !1,
                Ia: !0
            });
            this.A = this.l ? e?.l() : e?.j();
            this.H = g
        }
        K() {
            this.Qa ? mA(this) : qA(this)
        }
    }
    ;
    function AA(a, b) {
        for (var c = 0; c < b.length; c++)
            a.za(b[c]);
        return a
    }
    function BA(a, b) {
        a.j = a.j ? a.j : b;
        return a
    }
    class CA {
        constructor(a) {
            this.C = {};
            this.C.c = a;
            this.A = [];
            this.j = null;
            this.B = [];
            this.D = 0
        }
        kc(a) {
            this.C.wpc = a;
            return this
        }
        za(a) {
            for (var b = 0; b < this.A.length; b++)
                if (this.A[b] == a)
                    return this;
            this.A.push(a);
            return this
        }
        l(a) {
            var b = Xc(this.C);
            0 < this.D && (b.t = this.D);
            b.err = this.A.join();
            b.warn = this.B.join();
            this.j && (b.excp_n = this.j.name,
            b.excp_m = this.j.message && this.j.message.substring(0, 512),
            b.excp_s = this.j.stack && wl(this.j.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    }
    ;let DA, EA;
    const FA = new ol(r);
    ((a,b=!0)=>{
        DA = a || new jo;
        "number" !== typeof r.google_srt && (r.google_srt = Math.random());
        io(DA, r.google_srt);
        EA = new yl(DA,b,FA);
        EA.l(!0);
        "complete" == r.document.readyState ? r.google_measure_js_timing || ml(FA) : FA.g && Ob(r, "load", ()=>{
            r.google_measure_js_timing || ml(FA)
        }
        )
    }
    )();
    var GA = (a,b)=>EA.ic(a, b)
      , HA = (a,b)=>EA.La(a, b)
      , IA = (a,b,c)=>{
        const d = ho();
        !b.eid && d.length && (b.eid = d.toString());
        xl(DA, a, b, !0, c)
    }
      , JA = (a,b)=>EA.va(a, b, void 0, void 0)
      , KA = (a,b,c)=>{
        EA.Da(a, b, c)
    }
    ;
    function Vr(a, b, c) {
        let d = b.Oa;
        b.Xa && x(Ct) && (d = 1,
        "r"in c && (c.r += "F"));
        0 >= d || (!b.Sa || "pvc"in c || (c.pvc = Ff(a.g)),
        IA(b.Wa, c, d))
    }
    function LA(a, b, c) {
        c = c.l(a.g);
        b.Sa && (c.pvc = Ff(a.g));
        0 <= b.Oa && (c.r = b.Oa,
        Vr(a, b, c))
    }
    var MA = class {
        constructor(a) {
            this.g = a
        }
    }
    ;
    function NA(a) {
        const b = a.i?.g()?.g() || 0
          , c = a.j.document
          , d = c.createElement("div");
        d.classList.add("auto-prose-wrapper");
        c.body.appendChild(d);
        lw(1138, ()=>(new zA(a.j,a.A,d,a.l,a.i,b,D(a.g, kr, 33)?.g()?.i() ?? null,D(a.g, $q, 25)?.g() || !1)).K(), a.j)
    }
    async function OA(a) {
        await new Promise(b=>{
            setTimeout(()=>{
                b(NA(a))
            }
            )
        }
        )
    }
    var PA = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.g = c;
            this.i = D(this.g, fr, 31);
            this.l = new Xr(a,b,this.i || new fr);
            this.A = d
        }
    }
    ;
    function QA(a, b) {
        Vr(a.i, Qr, {
            ...b,
            evt: "place",
            vh: S(a.win),
            eid: a.g.g()?.g() || 0,
            hl: a.g.j()?.g() || ""
        })
    }
    function RA(a, b, c) {
        b = {
            sts: b
        };
        c && (b.excp_n = c.name,
        b.excp_m = c.message && c.message.substring(0, 512),
        b.excp_s = c.stack && wl(c.stack, "") || "");
        QA(a, b)
    }
    var SA = class {
        constructor(a, b, c) {
            this.win = a;
            this.i = b;
            this.g = c
        }
    }
    ;
    var TA = class {
        constructor(a) {
            this.g = a
        }
        Ma(a) {
            const b = a.document.createElement("div");
            z(b, vw(a));
            z(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.g);
            const c = a.document.createElement("div");
            z(c, vw(a));
            z(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    }
    ;
    var VA = (a,b,c)=>{
        if (!b || !c)
            return !1;
        var d = b.parentElement;
        const e = c.parentElement;
        if (!d || !e || d != e)
            return !1;
        d = 0;
        for (b = b.nextSibling; 10 > d && b; ) {
            if (b == c)
                return !0;
            if (UA(a, b))
                break;
            b = b.nextSibling;
            d++
        }
        return !1
    }
    ;
    const UA = (a,b)=>{
        if (3 == b.nodeType)
            return 3 == b.nodeType ? (b = b.data,
            a = nc(b, "&") ? de(b, a.document) : b,
            a = /\S/.test(a)) : a = !1,
            a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility)
                return !1;
            if ((c = b.tagName) && To.contains(c.toUpperCase()))
                return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (UA(a, b[c]))
                    return !0
        }
        return !1
    }
    ;
    var WA = a=>{
        if (460 <= a)
            return a = Math.min(a, 1200),
            Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    }
    ;
    const XA = class {
        constructor() {
            this.g = {
                clearBoth: !0
            }
        }
        i(a, b, c, d) {
            return aw(d.document, a, null, null, this.g, b)
        }
        j(a) {
            return WA(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    }
    ;
    const YA = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            return aw(d.document, a, null, null, this.g, b)
        }
        j() {
            return null
        }
    }
    ;
    class ZA {
        constructor(a) {
            this.i = a
        }
        g(a) {
            a = Math.floor(a.Fc());
            const b = WA(a);
            return new Eq(["ap_container"],{
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.i,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    }
    ;const $A = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        i() {
            return this.l
        }
        g() {
            return this.j
        }
    }
    ;
    const aB = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            var e = 0 < F(this.g, pr, 9).length ? F(this.g, pr, 9)[0] : null
              , f = rw(D(this.g, qr, 3), e);
            if (!e)
                return null;
            if (e = I(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = ve(new je(d), g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.Od && $v(c.style, f.Od);
                d = ve(new je(d), "INS");
                f.oc && $v(d.style, f.oc);
                c.appendChild(d);
                f = {
                    ob: c,
                    ya: d
                };
                f.ya.setAttribute("data-ad-type", "text");
                f.ya.setAttribute("data-native-settings-key", e);
                cw(f, a, null, b);
                a = f
            } else
                a = null;
            return a
        }
        j() {
            var a = 0 < F(this.g, pr, 9).length ? F(this.g, pr, 9)[0] : null;
            if (!a)
                return null;
            a = F(a, or, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == I(c, 1) && 0 < parseInt(I(c, 2), 10))
                    return parseInt(I(c, 2), 10)
            }
            return null
        }
    }
    ;
    const bB = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            if (!this.g)
                return null;
            const e = this.g.google_ad_format || null
              , f = this.g.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    "width" !== k && "height" !== k && g.push({
                        property: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    oc: g
                }
            } else
                c = {};
            a = aw(d.document, a, f, e, c, b);
            a.ya.setAttribute("data-pub-vars", JSON.stringify(this.g));
            return a
        }
        j() {
            return this.g ? parseInt(this.g.google_ad_height, 10) || null : null
        }
        Gc() {
            return this.g
        }
    }
    ;
    class cB {
        constructor(a) {
            this.i = a
        }
        g() {
            return new Eq([],{
                google_ad_type: this.i,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    }
    ;const dB = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        g() {
            return this.j
        }
        i(a) {
            a = this.l.query(a.document);
            return 0 < a.length ? a[0] : null
        }
    }
    ;
    function eB(a, b, c) {
        const d = [];
        for (let q = 0; q < a.length; q++) {
            var e = a[q];
            var f = q
              , g = b
              , h = c
              , k = e.ia();
            if (k) {
                var l = nw(k);
                if (l) {
                    var m = L(e, 2);
                    m = sw[m];
                    var n = void 0 === m ? null : m;
                    if (null === n)
                        e = null;
                    else {
                        m = (m = D(e, qr, 3)) ? gi(m, 3) : null;
                        l = new dB(l,n);
                        n = hi(e, 10, eh, 2).slice(0);
                        null != zi(k, 5) && n.push(1);
                        var p = h ? h : {};
                        h = zi(e, 12);
                        k = di(e, Cq, 4) ? D(e, Cq, 4) : null;
                        1 == L(e, 8) ? (p = p.Mh || null,
                        e = new fB(l,new YA(rw(D(e, qr, 3), null)),p,m,0,n,k,g,f,h,e)) : e = 2 == L(e, 8) ? new fB(l,new aB(e),p.Ni || new cB("text"),m,1,n,k,g,f,h,e) : null
                    }
                } else
                    e = null
            } else
                e = null;
            null !== e && d.push(e)
        }
        return d
    }
    function gB(a) {
        return a.A
    }
    function hB(a) {
        return a.xa
    }
    function iB(a) {
        return x(lt) ? (a.M || (a.M = a.D.i(a.j)),
        a.M) : a.D.i(a.j)
    }
    function jB(a) {
        var b = a.H;
        a = a.j.document.createElement("div");
        x(lt) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }
    function kB(a) {
        return a.C instanceof bB ? a.C.Gc() : null
    }
    function lB(a, b, c) {
        No(a.I, b) || a.I.set(b, []);
        a.I.get(b).push(c)
    }
    function mB(a, b) {
        a.A = !0;
        x(lt) && (a.i && Nv(a.i),
        a.i = null);
        null != b && a.X.push(b)
    }
    function nB(a) {
        return Lv(a.j.document, a.H || !1)
    }
    function oB(a) {
        return a.C.j(a.j)
    }
    function pB(a, b=null, c=null) {
        return new fB(a.D,b || a.C,c || a.T,a.H,a.Sb,a.Kc,a.Xd,a.j,a.pa,a.G,a.l,a.B,a.ea)
    }
    class fB {
        constructor(a, b, c, d, e, f, g, h, k, l=null, m=null, n=null, p=null) {
            this.D = a;
            this.C = b;
            this.T = c;
            this.H = d;
            this.Sb = e;
            this.Kc = f;
            this.Xd = g ? g : new Cq;
            this.j = h;
            this.pa = k;
            this.G = l;
            this.l = m;
            (a = !m) || (a = !(m.ia() && null != zi(m.ia(), 5)));
            this.xa = !a;
            this.B = n;
            this.ea = p;
            this.X = [];
            this.A = !1;
            this.I = new Ro;
            this.M = this.i = null
        }
        da() {
            return this.j
        }
        g() {
            return this.D.g()
        }
    }
    ;function qB(a, b, c, d, e, f) {
        const g = Bq();
        return new fB(new $A(c,e),new XA,new ZA(a),!0,2,[],g,d,null,null,null,b,f)
    }
    function rB(a, b, c, d, e) {
        const f = Bq();
        return new fB(new $A(b,d),new YA({
            clearBoth: !0
        }),null,!0,2,[],f,c,null,null,null,a,e)
    }
    ;var sB = class {
        constructor(a, b, c) {
            this.articleStructure = a;
            this.element = b;
            this.win = c
        }
        da() {
            return this.win
        }
        A(a) {
            return qB(a, this.articleStructure, this.element, this.win, 3, null)
        }
        j() {
            return rB(this.articleStructure, this.element, this.win, 3, null)
        }
    }
    ;
    const tB = {
        TABLE: {
            yc: new hq([1, 2])
        },
        THEAD: {
            yc: new hq([0, 3, 1, 2])
        },
        TBODY: {
            yc: new hq([0, 3, 1, 2])
        },
        TR: {
            yc: new hq([0, 3, 1, 2])
        },
        TD: {
            yc: new hq([0, 3])
        }
    };
    function uB(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c)
            c = Qa(e, f),
            0 > c || b.push(new vB(a,[f],c,f,3,re(f).trim(),d));
        return b
    }
    function wB(a, b, c) {
        let d = [];
        const e = []
          , f = b.childNodes
          , g = f.length;
        let h = 0
          , k = "";
        for (let n = 0; n < g; n++) {
            var l = f[n];
            if (1 == l.nodeType || 3 == l.nodeType) {
                if (1 != l.nodeType)
                    var m = null;
                else
                    "BR" == l.tagName ? m = l : (m = c.getComputedStyle(l).getPropertyValue("display"),
                    m = "inline" == m || "inline-block" == m ? null : l);
                m ? (d.length && k && e.push(new vB(a,d,n - 1,m,0,k,c)),
                d = [],
                h = n + 1,
                k = "") : (d.push(l),
                l = re(l).trim(),
                k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new vB(a,d,h,b,2,k,c));
        return e
    }
    function xB(a, b) {
        return a.g - b.g
    }
    class vB {
        constructor(a, b, c, d, e, f, g) {
            this.l = a;
            this.jd = b.slice(0);
            this.g = c;
            this.ce = d;
            this.de = e;
            this.B = f;
            this.i = g
        }
        da() {
            return this.i
        }
        A(a) {
            return qB(a, this.l, this.ce, this.i, this.de, this.g)
        }
        j() {
            return rB(this.l, this.ce, this.i, this.de, this.g)
        }
    }
    ;function yB(a) {
        return cb(a.B ? wB(a.i, a.g, a.j) : [], a.A ? uB(a.i, a.A, a.g, a.j) : []).filter(b=>{
            var c = b.ce.tagName;
            c ? (c = tB[c.toUpperCase()],
            b = null != c && c.yc.contains(b.de)) : b = !1;
            return !b
        }
        )
    }
    class zB {
        constructor(a, b, c) {
            this.g = a;
            this.A = b.hd;
            this.B = b.jg;
            this.i = b.articleStructure;
            this.j = c;
            this.l = b.Nf
        }
    }
    ;function AB(a, b) {
        if (!b)
            return !1;
        const c = za(b)
          , d = a.g.get(c);
        if (null != d)
            return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.i.getComputedStyle(b).getPropertyValue("list-style-type"))
            return a.g.set(c, !0),
            !0;
        b = AB(a, b.parentNode);
        a.g.set(c, b);
        return b
    }
    function BB(a, b) {
        return Ya(b.jd, c=>AB(a, c))
    }
    class CB {
        constructor(a) {
            this.g = new Ro;
            this.i = a
        }
    }
    ;class DB {
        constructor(a, b) {
            this.l = a;
            this.g = [];
            this.i = [];
            this.j = b
        }
    }
    ;var FB = (a,{vg: b=!1, pf: c=!1, Ig: d=c || x(kt) ? 2 : 3, mf: e=null}={})=>{
        a = yB(a);
        return EB(a, {
            vg: b,
            pf: c,
            Ig: d,
            mf: e
        })
    }
      , EB = (a,{vg: b=!1, pf: c=!1, Ig: d=c || x(kt) ? 2 : 3, mf: e=null}={})=>{
        if (2 > d)
            throw Error("minGroupSize should be at least 2, found " + d);
        var f = a.slice(0);
        f.sort(xB);
        a = [];
        b = new DB(b,e);
        for (const g of f) {
            e = {
                Qd: g,
                Cd: 51 > g.B.length ? !1 : null != b.j ? !BB(b.j, g) : !0
            };
            if (b.l || e.Cd)
                b.g.length ? (f = b.g[b.g.length - 1].Qd,
                f = VA(f.da(), f.jd[f.jd.length - 1], e.Qd.jd[0])) : f = !0,
                f ? (b.g.push(e),
                e.Cd && b.i.push(e.Qd)) : (b.g = [e],
                b.i = e.Cd ? [e.Qd] : []);
            if (b.i.length >= d) {
                e = b;
                f = c || x(kt) ? 0 : 1;
                if (0 > f || f >= e.i.length)
                    e = null;
                else {
                    for (f = e.i[f]; e.g.length && !e.g[0].Cd; )
                        e.g.shift();
                    e.g.shift();
                    e.i.shift();
                    e = f
                }
                e && a.push(e)
            }
        }
        return a
    }
    ;
    var HB = (a,b,c=!1)=>{
        a = GB(a, b);
        const d = new CB(b);
        return bq(a, e=>FB(e, {
            pf: c,
            mf: d
        }))
    }
      , IB = (a,b)=>{
        a = GB(a, b);
        const c = new CB(b);
        return bq(a, d=>{
            if (d.l) {
                var e = d.i;
                var f = d.j;
                d = d.g.querySelectorAll(d.l);
                var g = [];
                for (var h of d)
                    g.push(new sB(e,h,f));
                e = g
            } else
                e = [];
            d = e.slice(0);
            if (d.length) {
                e = [];
                f = d[0];
                for (g = 1; g < d.length; g++) {
                    const m = d[g];
                    h = f;
                    b: {
                        if (h.element.hasAttributes())
                            for (l of h.element.attributes)
                                if ("style" === l.name.toLowerCase() && l.value.toLowerCase().includes("background-image")) {
                                    var k = !0;
                                    break b
                                }
                        k = h.element.tagName;
                        k = "IMG" === k || "SVG" === k
                    }
                    (k || 1 < h.element.textContent.length) && !AB(c, f.element) && VA(m.da(), f.element, m.element) && e.push(f);
                    f = m
                }
                var l = e
            } else
                l = [];
            return l
        }
        )
    }
      , GB = (a,b)=>{
        const c = new Ro;
        a.forEach(d=>{
            var e = nw(D(d, tq, 1));
            if (e) {
                var f = e.toString();
                No(c, f) || c.set(f, {
                    articleStructure: d,
                    Fh: e,
                    hd: null,
                    jg: !1,
                    Nf: null
                });
                e = c.get(f);
                (f = (f = D(d, tq, 2)) ? I(f, 7) : null) ? e.hd = e.hd ? e.hd + "," + f : f : e.jg = !0;
                d = D(d, tq, 4);
                e.Nf = d ? I(d, 7) : null
            }
        }
        );
        return Qo(c).map(d=>{
            const e = d.Fh.query(b.document);
            return e.length ? new zB(e[0],d,b) : null
        }
        ).filter(d=>null != d)
    }
    ;
    var JB = a=>a?.google_ad_slot ? iq(new uq(1,{
        Ah: a.google_ad_slot
    })) : kq(Error("Missing dimension when creating placement id"))
      , LB = a=>{
        switch (a.Sb) {
        case 0:
        case 1:
            var b = a.l;
            null == b ? a = null : (a = b.ia(),
            null == a ? a = null : (b = L(b, 2),
            a = null == b ? null : new uq(0,{
                Of: [a],
                bh: b
            })));
            return null != a ? iq(a) : kq(Error("Missing dimension when creating placement id"));
        case 2:
            return a = KB(a),
            null != a ? iq(a) : kq(Error("Missing dimension when creating placement id"));
        default:
            return kq(Error("Invalid type: " + a.Sb))
        }
    }
    ;
    const KB = a=>{
        if (null == a || null == a.B)
            return null;
        const b = D(a.B, tq, 1)
          , c = D(a.B, tq, 2);
        if (null == b || null == c)
            return null;
        const d = a.ea;
        if (null == d)
            return null;
        a = a.g();
        return null == a ? null : new uq(0,{
            Of: [b, c],
            Mi: d,
            bh: tw[a]
        })
    }
    ;
    function MB(a) {
        const b = kB(a.ga);
        return (b ? JB(b) : LB(a.ga)).map(c=>xq(c))
    }
    function NB(a) {
        a.g = a.g || MB(a);
        return a.g
    }
    function OB(a, b) {
        if (a.ga.A)
            throw Error("AMA:AP:AP");
        Qv(b, a.ia(), a.ga.g());
        mB(a.ga, b)
    }
    const PB = class {
        constructor(a, b, c) {
            this.ga = a;
            this.i = b;
            this.ja = c;
            this.g = null
        }
        ia() {
            return this.i
        }
        fill(a, b) {
            var c = this.ga;
            (a = c.C.i(a, b, this.i, c.j)) && OB(this, a.ob);
            return a
        }
    }
    ;
    function QB(a, b) {
        return mw(()=>{
            if (x(lt)) {
                var c = []
                  , d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e]
                      , g = iB(f);
                    if (g) {
                        if (!f.i && !f.A) {
                            var h = null;
                            try {
                                var k = iB(f);
                                if (k) {
                                    h = jB(f);
                                    Qv(h, k, f.g());
                                    var l = h
                                } else
                                    l = null
                            } catch (q) {
                                throw Nv(h),
                                q;
                            }
                            f.i = l
                        }
                        (h = f.i) && d.push({
                            kj: f,
                            anchorElement: g,
                            wi: h
                        })
                    }
                }
                if (0 < d.length)
                    for (l = Go(b),
                    k = Ho(b),
                    e = 0; e < d.length; e++) {
                        const {kj: q, anchorElement: v, wi: A} = d[e];
                        f = RB(A, k, l);
                        c.push(new PB(q,v,f))
                    }
                l = c
            } else {
                l = [];
                k = [];
                try {
                    const q = [];
                    for (let v = 0; v < a.length; v++) {
                        var m = a[v]
                          , n = iB(m);
                        n && q.push({
                            Ug: m,
                            anchorElement: n
                        })
                    }
                    for (n = 0; n < q.length; n++) {
                        m = k;
                        g = m.push;
                        {
                            var p = q[n];
                            const v = p.anchorElement
                              , A = p.Ug
                              , B = jB(A);
                            try {
                                Qv(B, v, A.g()),
                                h = B
                            } catch (E) {
                                throw Nv(B),
                                E;
                            }
                        }
                        g.call(m, h)
                    }
                    c = Go(b);
                    d = Ho(b);
                    for (g = 0; g < k.length; g++)
                        e = RB(k[g], d, c),
                        f = q[g],
                        l.push(new PB(f.Ug,f.anchorElement,e))
                } finally {
                    for (c = 0; c < k.length; c++)
                        Nv(k[c])
                }
            }
            return l
        }
        , b)
    }
    function RB(a, b, c) {
        a = a.getBoundingClientRect();
        return new Tp(a.left + b,a.top + c,a.right - a.left)
    }
    ;const SB = {
        1: "0.5vp",
        2: "300px"
    }
      , TB = {
        1: 700,
        2: 1200
    }
      , UB = {
        [1]: {
            kh: "3vp",
            sf: "1vp",
            jh: "0.3vp"
        },
        [2]: {
            kh: "900px",
            sf: "300px",
            jh: "90px"
        }
    };
    function VB(a, b, c) {
        var d = WB(a)
          , e = S(a) || TB[d]
          , f = void 0;
        c && (f = (c = (c = XB(F(c, Nq, 2), d)) ? D(c, Lq, 7) : void 0) ? YB(c, e) : void 0);
        c = f;
        f = WB(a);
        a = S(a) || TB[f];
        const g = ZB(UB[f].sf, a);
        a = null === g ? $B(f, a) : new aC(g,g,bC(g, 8),8,.3,c);
        c = ZB(UB[d].kh, e);
        f = ZB(UB[d].sf, e);
        d = ZB(UB[d].jh, e);
        e = a.j;
        c && d && f && void 0 !== b && (e = .5 >= b ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
        return new aC(e,e,bC(e, a.i),a.i,a.l,a.g)
    }
    function cC(a, b) {
        const c = a.Nb();
        a = fi(a, 5);
        return null == c || null == a ? b : new aC(a,0,[],c,1)
    }
    function dC(a, b) {
        const c = WB(a);
        a = S(a) || TB[c];
        if (!b)
            return $B(c, a);
        if (b = XB(F(b, Nq, 2), c))
            if (b = eC(b, a))
                return b;
        return $B(c, a)
    }
    function fC(a) {
        const b = WB(a);
        a = S(a) || TB[b];
        return $B(b, a)
    }
    function gC(a, b) {
        let c = {
            Qc: a.j,
            vb: a.B
        };
        for (let d of a.A)
            d.adCount <= b && (c = d.Uc);
        return c
    }
    function hC(a, b, c) {
        var d = gi(b, 2);
        b = D(b, Nq, 1);
        var e = WB(c);
        var f = S(c) || TB[e];
        c = ZB(b?.A(), f) ?? a.j;
        e = ZB(b?.l(), f) ?? a.B;
        d = d ? [] : iC(b?.g(), f) ?? a.A;
        const g = b?.Nb() ?? a.i
          , h = b?.j() ?? a.l;
        a = (b?.B() ? YB(D(b, Lq, 7), f) : null) ?? a.g;
        return new aC(c,e,d,g,h,a)
    }
    function jC(a, b) {
        var c = WB(b);
        const d = new Oq
          , e = new Nq;
        let f = !1;
        var g = Vb(rt);
        0 <= g && (aj(e, 4, g),
        f = !0);
        g = null;
        1 === c ? (c = Vb(ut),
        0 <= c && (g = c + "vp")) : (c = Vb(tt),
        0 <= c && (g = c + "px"));
        null !== g && (dj(e, 2, g),
        f = !0);
        c = x(wt) ? "0px" : null;
        null !== c && (dj(e, 5, c),
        f = !0);
        if (x(yt))
            Zi(d, 2, !0),
            f = !0;
        else if (null !== c || null !== g) {
            const m = [];
            for (const n of a.A) {
                var h = m
                  , k = h.push;
                var l = new Mq;
                l = aj(l, 1, n.adCount);
                l = dj(l, 3, c ?? n.Uc.vb + "px");
                l = dj(l, 2, g ?? n.Uc.Qc + "px");
                k.call(h, l)
            }
            xi(e, 3, m)
        }
        return f ? (H(d, 1, e),
        hC(a, d, b)) : a
    }
    class aC {
        constructor(a, b, c, d, e, f) {
            this.j = a;
            this.B = b;
            this.A = c.sort((g,h)=>g.adCount - h.adCount);
            this.i = d;
            this.l = e;
            this.g = f
        }
        Nb() {
            return this.i
        }
    }
    function XB(a, b) {
        for (let c of a)
            if (L(c, 1) == b)
                return c;
        return null
    }
    function iC(a, b) {
        if (void 0 === a)
            return null;
        const c = [];
        for (let d of a) {
            a = zi(d, 1);
            const e = ZB(I(d, 2), b);
            if ("number" !== typeof a || null === e)
                return null;
            c.push({
                adCount: a,
                Uc: {
                    Qc: e,
                    vb: ZB(I(d, 3), b)
                }
            })
        }
        return c
    }
    function eC(a, b) {
        const c = ZB(I(a, 2), b)
          , d = ZB(I(a, 5), b);
        if (null === c)
            return null;
        const e = zi(a, 4);
        if (null == e)
            return null;
        var f = a.g();
        f = iC(f, b);
        if (null === f)
            return null;
        const g = D(a, Lq, 7);
        b = g ? YB(g, b) : void 0;
        return new aC(c,d,f,e,fi(a, 6),b)
    }
    function $B(a, b) {
        a = ZB(SB[a], b);
        return x(ot) ? new aC(null === a ? Infinity : a,null,[],8,.3) : new aC(null === a ? Infinity : a,null,[],3,null)
    }
    function ZB(a, b) {
        if (!a)
            return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }
    function WB(a) {
        a = 900 <= yo(a);
        return xe() && !a ? 1 : 2
    }
    function bC(a, b) {
        if (4 > b)
            return [];
        const c = Math.ceil(b / 2);
        return [{
            adCount: c,
            Uc: {
                Qc: 2 * a,
                vb: 2 * a
            }
        }, {
            adCount: c + Math.ceil((b - c) / 2),
            Uc: {
                Qc: 3 * a,
                vb: 3 * a
            }
        }]
    }
    function YB(a, b) {
        const c = ZB(I(a, 2), b) || 0
          , d = zi(a, 3) || 1;
        return {
            Jg: c,
            Dg: d,
            tc: ZB(I(a, 1), b) || 0
        }
    }
    ;function kC(a, b, c) {
        return qo({
            top: a.g.top - (c + 1),
            right: a.g.right + (c + 1),
            bottom: a.g.bottom + (c + 1),
            left: a.g.left - (c + 1)
        }, b.g)
    }
    function lC(a) {
        if (!a.length)
            return null;
        const b = ro(a.map(c=>c.g));
        a = a.reduce((c,d)=>c + d.i, 0);
        return new mC(b,a)
    }
    class mC {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    }
    ;function nC(a=null) {
        ({googletag: a} = a ?? window);
        return a?.apiReady ? a : void 0
    }
    ;var sC = (a,b)=>{
        var c = eb(b.document.querySelectorAll(".google-auto-placed"));
        const d = eb(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]"))
          , e = oC(b)
          , f = pC(b)
          , g = qC(b)
          , h = eb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
          , k = eb(b.document.querySelectorAll("div.googlepublisherpluginad"))
          , l = eb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let m = [].concat(eb(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), eb(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [n,p] of [[a.zd, c], [a.Rb, d], [a.Ki, e], [a.Ad, f], [a.Bd, g], [a.Ii, h], [a.Ji, k], [a.Li, l]])
            !1 === n ? b = b.concat(p) : m = m.concat(p);
        a = rC(m);
        c = rC(b);
        a = a.slice(0);
        for (const n of c)
            for (c = 0; c < a.length; c++)
                (n.contains(a[c]) || a[c].contains(n)) && a.splice(c, 1);
        return a
    }
    ;
    const tC = a=>{
        const b = nC(a);
        return b ? Ta(Wa(b.pubads().getSlots(), c=>a.document.getElementById(c.getSlotElementId())), c=>null != c) : null
    }
      , oC = a=>eb(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"))
      , pC = a=>(tC(a) || eb(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(eb(a.document.querySelectorAll("iframe[id^=google_ads_iframe]")))
      , qC = a=>eb(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var rC = a=>{
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    }
    ;
    var uC = EA.La(453, sC), vC;
    vC = EA.La(454, (a,b)=>{
        const c = eb(b.document.querySelectorAll(".google-auto-placed"))
          , d = eb(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]"))
          , e = oC(b)
          , f = pC(b)
          , g = qC(b)
          , h = eb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
          , k = eb(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = eb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return rC([].concat(!0 === a.zd ? c : [], !0 === a.Rb ? d : [], !0 === a.Ki ? e : [], !0 === a.Ad ? f : [], !0 === a.Bd ? g : [], !0 === a.Ii ? h : [], !0 === a.Ji ? k : [], !0 === a.Li ? b : []))
    }
    );
    function wC(a, b, c) {
        const d = xC(a);
        b = yC(d, b, c);
        return new zC(a,d,b)
    }
    function AC(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }
    function BC(a) {
        return a.g.map(b=>b.box)
    }
    function CC(a) {
        return a.g.reduce((b,c)=>b + c.box.bottom - c.box.top, 0)
    }
    class zC {
        constructor(a, b, c) {
            this.j = a;
            this.g = b.slice(0);
            this.l = c.slice(0);
            this.i = null
        }
    }
    function xC(a) {
        const b = uC({
            Rb: !1
        }, a)
          , c = Ho(a)
          , d = Go(a);
        return b.map(e=>{
            const f = e.getBoundingClientRect();
            return (e = !!e.className && nc(e.className, "google-auto-placed")) || AC(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                On: e ? 1 : 0
            } : null
        }
        ).filter(Fb(e=>null === e))
    }
    function yC(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? DC(a, b) : Wa(a, d=>new mC(d.box,1))
    }
    function DC(a, b) {
        a = Wa(a, d=>new mC(d.box,1));
        const c = [];
        for (; 0 < a.length; ) {
            let d = a.pop()
              , e = !0;
            for (; e; ) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (kC(d, a[f], b)) {
                        d = lC([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    }
    ;function EC(a, b, c) {
        const d = Sp(c, b);
        return !Ya(a, e=>qo(e, d))
    }
    function FC(a, b, c, d, e) {
        e = e.ja;
        const f = Sp(e, b)
          , g = Sp(e, c)
          , h = Sp(e, d);
        return !Ya(a, k=>qo(k, g) || qo(k, f) && !qo(k, h))
    }
    function GC(a, b, c, d) {
        const e = BC(a);
        if (EC(e, b, d.ja))
            return !0;
        if (!FC(e, b, c.Jg, c.tc, d))
            return !1;
        const f = new mC(Sp(d.ja, 0),1);
        a = Ta(a.l, g=>kC(g, f, c.tc));
        b = Xa(a, (g,h)=>g + h.i, 1);
        return 0 === a.length || b > c.Dg ? !1 : !0
    }
    ;var HC = (a,b)=>{
        const c = [];
        let d = a;
        for (a = ()=>{
            c.push({
                anchor: d.anchor,
                position: d.position
            });
            return d.anchor == b.anchor && d.position == b.position
        }
        ; d; ) {
            switch (d.position) {
            case 1:
                if (a())
                    return c;
                d.position = 2;
            case 2:
                if (a())
                    return c;
                if (d.anchor.firstChild) {
                    d = {
                        anchor: d.anchor.firstChild,
                        position: 1
                    };
                    continue
                } else
                    d.position = 3;
            case 3:
                if (a())
                    return c;
                d.position = 4;
            case 4:
                if (a())
                    return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body; ) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a())
                    return c;
                d.position = 4;
                if (a())
                    return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    }
    ;
    function IC(a, b) {
        const c = new pq
          , d = new So;
        b.forEach(e=>{
            if (Gi(e, Vq, 1, Yq)) {
                e = Gi(e, Vq, 1, Yq);
                if (D(e, Uq, 1) && D(e, Uq, 1).ia() && D(e, Uq, 2) && D(e, Uq, 2).ia()) {
                    const g = JC(a, D(e, Uq, 1).ia())
                      , h = JC(a, D(e, Uq, 2).ia());
                    if (g && h)
                        for (var f of HC({
                            anchor: g,
                            position: L(D(e, Uq, 1), 2)
                        }, {
                            anchor: h,
                            position: L(D(e, Uq, 2), 2)
                        }))
                            c.set(za(f.anchor), f.position)
                }
                D(e, Uq, 3) && D(e, Uq, 3).ia() && (f = JC(a, D(e, Uq, 3).ia())) && c.set(za(f), L(D(e, Uq, 3), 2))
            } else
                Gi(e, Wq, 2, Yq) ? KC(a, Gi(e, Wq, 2, Yq), c) : Gi(e, Tq, 3, Yq) && LC(a, Gi(e, Tq, 3, Yq), d)
        }
        );
        return new MC(c,d)
    }
    class MC {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    }
    const KC = (a,b,c)=>{
        D(b, Uq, 2) ? (b = D(b, Uq, 2),
        (a = JC(a, b.ia())) && c.set(za(a), L(b, 2))) : D(b, tq, 1) && (a = NC(a, D(b, tq, 1))) && a.forEach(d=>{
            d = za(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        }
        )
    }
      , LC = (a,b,c)=>{
        D(b, tq, 1) && (a = NC(a, D(b, tq, 1))) && a.forEach(d=>{
            c.add(za(d))
        }
        )
    }
      , JC = (a,b)=>(a = NC(a, b)) && 0 < a.length ? a[0] : null
      , NC = (a,b)=>(b = nw(b)) ? b.query(a) : null;
    var OC = class {
        constructor() {
            this.g = Ef();
            this.i = 0
        }
    }
    ;
    function PC(a, b, c) {
        switch (c) {
        case 2:
        case 3:
            break;
        case 1:
        case 4:
            b = b.parentElement;
            break;
        default:
            throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b; ) {
            if (QC(b))
                return !0;
            if (a.g.has(b))
                break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d=>a.g.add(d));
        return !1
    }
    function RC(a) {
        a = SC(a);
        return a.has("all") || a.has("after")
    }
    function TC(a) {
        a = SC(a);
        return a.has("all") || a.has("before")
    }
    function SC(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }
    function QC(a) {
        const b = SC(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var UC = class {
        constructor() {
            this.g = new Set;
            this.i = new OC
        }
    }
    ;
    function VC(a) {
        return function(b) {
            return QB(b, a)
        }
    }
    function WC(a) {
        const b = S(a);
        return b ? Ha(XC, b + Go(a)) : Cb
    }
    function YC(a, b, c) {
        if (0 > a)
            throw Error("ama::ead:nd");
        if (Infinity === a)
            return Cb;
        const d = BC(c || wC(b));
        return e=>EC(d, a, e.ja)
    }
    function ZC(a, b, c, d) {
        if (0 > a || 0 > b.Jg || 0 > b.Dg || 0 > b.tc)
            throw Error("ama::ead:nd");
        return Infinity === a ? Cb : e=>GC(d || wC(c, b.tc), a, b, e)
    }
    function $C(a) {
        if (!a.length)
            return Cb;
        const b = new hq(a);
        return c=>b.contains(c.Sb)
    }
    function aD(a) {
        return function(b) {
            for (let c of b.Kc)
                if (-1 < a.indexOf(c))
                    return !1;
            return !0
        }
    }
    function bD(a) {
        return a.length ? function(b) {
            const c = b.Kc;
            return a.some(d=>-1 < c.indexOf(d))
        }
        : Db
    }
    function cD(a, b) {
        if (0 >= a)
            return Db;
        const c = Co(b).scrollHeight - a;
        return function(d) {
            return d.ja.g <= c
        }
    }
    function dD(a) {
        const b = {};
        a && a.forEach(c=>{
            b[c] = !0
        }
        );
        return function(c) {
            return !b[L(c.Xd, 2) || 0]
        }
    }
    function eD(a) {
        return a.length ? b=>a.includes(L(b.Xd, 1) || 0) : Db
    }
    function fD(a, b) {
        const c = IC(a, b);
        return function(d) {
            var e = d.ia();
            d = tw[d.ga.g()];
            var f = c.i
              , g = za(e);
            f = f.g.get(g);
            if (!(f = f ? f.contains(d) : !1))
                a: {
                    if (c.g.contains(za(e)))
                        switch (d) {
                        case 2:
                        case 3:
                            f = !0;
                            break a;
                        default:
                            f = !1;
                            break a
                        }
                    for (e = e.parentElement; e; ) {
                        if (c.g.contains(za(e))) {
                            f = !0;
                            break a
                        }
                        e = e.parentElement
                    }
                    f = !1
                }
            return !f
        }
    }
    function gD() {
        const a = new UC;
        return function(b) {
            var c = b.ia()
              , d = tw[b.ga.g()];
            a: switch (d) {
            case 1:
                b = RC(c.previousElementSibling) || TC(c);
                break a;
            case 4:
                b = RC(c) || TC(c.nextElementSibling);
                break a;
            case 2:
                b = TC(c.firstElementChild);
                break a;
            case 3:
                b = RC(c.lastElementChild);
                break a;
            default:
                throw Error("Unknown RelativePosition: " + d);
            }
            c = PC(a, c, d);
            d = a.i;
            IA("ama_exclusion_zone", {
                typ: b ? c ? "siuex" : "siex" : c ? "suex" : "noex",
                cor: d.g,
                num: d.i++,
                dvc: tf()
            }, .1);
            return !(b || c)
        }
    }
    const XC = (a,b)=>b.ja.g >= a
      , hD = (a,b,c)=>{
        c = c.ja.Fc();
        return a <= c && c <= b
    }
    ;
    function iD(a, b, c, d, e) {
        var f = jD({
            oh: e.rh
        }, kD(a, b), a);
        if (0 === f.length) {
            var g = !!D(b, nr, 6)?.g()?.length;
            f = D(b, hr, 28)?.l()?.g() && g ? jD({
                oh: !0
            }, lD(a, b), a) : f
        }
        if (0 === f.length)
            return RA(d, "pfno"),
            [];
        b = f;
        a = e.od ? mD(a, b, c) : {
            kb: b,
            pd: null
        };
        const {kb: h, pd: k} = a;
        f = h;
        return 0 === f.length && k ? (RA(d, k),
        []) : [f[e.rh ? 0 : Math.floor(f.length / 2)]]
    }
    function mD(a, b, c) {
        c = c ? F(c, Xq, 5) : [];
        const d = fD(a.document, c)
          , e = gD();
        b = b.filter(f=>d(f));
        if (0 === b.length)
            return {
                kb: [],
                pd: "pfaz"
            };
        b = b.filter(f=>e(f));
        return 0 === b.length ? {
            kb: [],
            pd: "pfet"
        } : {
            kb: b,
            pd: null
        }
    }
    function nD(a, b) {
        return a.ja.g - b.ja.g
    }
    function kD(a, b) {
        const c = D(b, nr, 6);
        if (!c)
            return [];
        b = D(b, hr, 28)?.l();
        return (b?.j() ? IB(c.g(), a) : HB(c.g(), a, !!b?.l())).map(d=>d.j())
    }
    function lD(a, b) {
        b = F(b, rr, 1) || [];
        return eB(b, a, {}).filter(c=>!c.Kc.includes(6))
    }
    function jD(a, b, c) {
        b = QB(b, c);
        if (a.oh) {
            const d = WC(c);
            b = b.filter(e=>d(e))
        }
        return b.sort(nD)
    }
    ;function oD(a, b) {
        return 2 === tf() ? Vy(a.win, b, {
            ef: .95,
            Me: .95,
            zIndex: 2147483645,
            qb: !0,
            Ia: !0
        }) : ey(a.win, b, {
            Cc: "min(65vw, 768px)",
            sc: "",
            Bc: !1,
            zIndex: 2147483645,
            qb: !0,
            Vd: !1,
            Ia: !0
        })
    }
    function pD(a) {
        ((d,e)=>{
            d[e] = d[e] || function() {
                (d[e].q = d[e].q || []).push(arguments)
            }
            ;
            d[e].t = (new Date).getTime()
        }
        )(a.win, "_googCsa");
        const b = a.pa.map(d=>({
            container: d,
            relatedSearches: 5
        }))
          , c = {
            pubId: a.H,
            styleId: "5134551505",
            hl: a.ea,
            fexp: a.D,
            channel: "AutoRsVariant",
            resultsPageBaseUrl: "http://google.com",
            resultsPageQueryParam: "q",
            relatedSearchTargeting: "content",
            relatedSearchResultClickedCallback: a.Cb.bind(a),
            relatedSearchUseResultCallback: !0,
            cx: a.I
        };
        a.xa && (c.adLoadedCallback = a.Ga.bind(a));
        a.l && a.C instanceof Array && (c.fexp = a.C.join(","));
        a.win._googCsa("relatedsearch", c, b)
    }
    function qD(a) {
        a.win.addEventListener("message", b=>{
            "https://www.gstatic.com" === b.origin && "resize" === b.data.action && (a.g.style.height = `${Math.ceil(b.data.height) + 1}px`)
        }
        )
    }
    var rD = class extends T {
        constructor(a, b, c, d, e, f, g, h, k=()=>{}
        ) {
            super();
            this.win = a;
            this.pa = b;
            this.X = e;
            this.D = f;
            this.A = h;
            this.Qa = k;
            this.ea = d?.g() || "en";
            this.Pa = d?.j() || "Search results from ${website}";
            this.xa = x(Et);
            this.H = c.replace("ca", "partner");
            this.M = new je(a.document);
            this.g = ve(this.M, "IFRAME");
            this.I = g.i ? g.g : "9d449ff4a772956c6";
            this.C = (this.l = x(Kt)) ? ho().concat(this.D) : this.D;
            this.j = new Qs(this.g,this.I,"auto-rs-prose",this.H,"AutoRsVariant",a.location,this.ea,this.Pa,this.C,this.A,this.l);
            this.T = oD(this, this.g);
            $o(this, this.T)
        }
        K() {
            0 !== this.pa.length && (this.xa || lw(1075, ()=>{
                this.j.K()
            }
            , this.win),
            lw(1076, ()=>{
                const a = ve(this.M, "SCRIPT");
                Ue(a, wj`https://www.google.com/adsense/search/async-ads.js`);
                this.win.document.head.appendChild(a)
            }
            , this.win),
            pD(this),
            QA(this.X, {
                sts: "ok"
            }),
            this.A && qD(this))
        }
        Ga(a, b) {
            b ? lw(1075, ()=>{
                this.j.K()
            }
            , this.win) : (this.Qa(),
            RA(this.X, "pfns"))
        }
        Cb(a, b) {
            Os(this.j, a, b);
            (()=>{
                if (!this.A) {
                    const c = new ResizeObserver(async e=>{
                        this.g.height = "0";
                        await new Promise(f=>{
                            this.win.requestAnimationFrame(f)
                        }
                        );
                        this.g.height = e[0].target.scrollHeight.toString()
                    }
                    )
                      , d = ()=>{
                        const e = this.g.contentDocument?.documentElement;
                        e ? c.observe(e) : (console.warn("iframe body missing"),
                        setTimeout(d, 1E3))
                    }
                    ;
                    d()
                }
                this.T.show()
            }
            )()
        }
    }
    ;
    var sD = class {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    }
    ;
    function tD(a) {
        const b = nB(a.l.ga)
          , c = a.B.Ma(a.G, ()=>a.i());
        b.appendChild(c);
        a.A && (b.className = a.A);
        return {
            ni: b,
            bi: c
        }
    }
    class uD {
        constructor(a, b, c, d) {
            this.G = a;
            this.l = b;
            this.B = c;
            this.A = d || null;
            this.g = null;
            this.j = new V(null)
        }
        K() {
            const a = tD(this);
            this.g = a.ni;
            OB(this.l, this.g);
            this.j.g(a.bi)
        }
        i() {
            this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
            this.g = null;
            this.j.g(null)
        }
        C() {
            return this.j
        }
    }
    ;async function vD(a) {
        await new Promise(b=>{
            setTimeout(()=>{
                try {
                    wD(a)
                } catch (c) {
                    RA(a.i, "pfere", c)
                }
                b()
            }
            )
        }
        )
    }
    function wD(a) {
        if ((!a.od || !xD(a.config, a.aa, a.i)) && yD(a.g?.j(), a.i)) {
            var b = iD(a.win, a.config, a.aa, a.i, {
                rh: !!a.g?.l()?.A(),
                od: a.od
            });
            b = zD(b, a.win);
            var c = Object.keys(b)
              , d = Object.values(b)
              , e = a.g?.g()?.g() || 0
              , f = AD(a.g)
              , g = !!a.g?.B();
            if (!D(a.config, $q, 25)?.g()) {
                var h = ()=>{
                    d.forEach(k=>{
                        k.i()
                    }
                    )
                }
                ;
                lw(1074, ()=>{
                    (new rD(a.win,c,a.webPropertyCode,a.g?.j(),a.i,e,f,g,h)).K()
                }
                , a.win)
            }
        }
    }
    var BD = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.config = c;
            this.webPropertyCode = d;
            this.aa = e;
            this.od = f;
            this.i = new SA(a,b,D(this.config, hr, 28) || new hr);
            this.g = D(this.config, hr, 28)
        }
    }
    ;
    function xD(a, b, c) {
        a = D(a, hr, 28)?.g()?.g() || 0;
        const d = Xb(Jt);
        return d && d.includes(a.toString()) ? !1 : 0 === (b ? hi(b, 2, eh, 2) : []).length ? (RA(c, "pfeu"),
        !0) : !1
    }
    function yD(a, b) {
        const c = Xb(Ht);
        return c && 0 !== c.length && !c.includes((a?.g() || "").toString()) ? (RA(b, "pflna"),
        !1) : !0
    }
    function zD(a, b) {
        const c = {};
        for (let e = 0; e < a.length; e++) {
            var d = a[e];
            const f = "autors-container-" + e.toString()
              , g = b.document.createElement("div");
            g.setAttribute("id", f);
            d = new uD(b,d,new TA(g),"autors-widget");
            d.K();
            c[f] = d
        }
        return c
    }
    function AD(a) {
        return new sD(a?.C() || !1,a?.A() || "")
    }
    ;var CD = (a,b)=>{
        const c = [];
        D(a, sr, 18) && c.push(2);
        b.aa && c.push(0);
        D(a, hr, 28) && 1 == Fi(D(a, hr, 28), 1) && c.push(1);
        D(a, fr, 31) && 1 == Fi(D(a, fr, 31), 1) && c.push(5);
        D(a, br, 32) && c.push(6);
        D(a, vr, 34) && N(D(a, vr, 34), 3) && c.push(7);
        return c
    }
    ;
    function DD(a, b) {
        const c = ve(ie(a), "IMG");
        ED(a, c);
        c.src = "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
        z(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d=>{
            b();
            d.stopPropagation()
        }
        );
        return c
    }
    function FD(a, b) {
        const c = b.document.createElement("button");
        ED(b, c);
        z(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.i));
        c.addEventListener("click", d=>{
            a.j();
            d.stopPropagation()
        }
        );
        return c
    }
    function GD(a, b, c) {
        const d = ve(ie(b), "IMG");
        d.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        d.setAttribute("aria-label", a.l);
        ED(b, d);
        z(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e=>{
            c();
            e.stopPropagation()
        }
        );
        return d
    }
    function HD(a) {
        const b = a.document.createElement("ins");
        ED(a, b);
        z(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class ID {
        constructor(a, b, c) {
            this.i = a;
            this.l = b;
            this.j = c;
            this.g = new V(!1)
        }
        Ma(a, b, c, d) {
            const e = DD(a, d)
              , f = DD(a)
              , g = FD(this, a)
              , h = GD(this, a, c);
            a = HD(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            this.g.listen(k=>{
                z(e, {
                    display: k ? "none" : "inline"
                });
                z(f, {
                    display: k ? "inline" : "none"
                });
                k ? (z(g, {
                    "line-height": "24px",
                    "max-width": "100vw",
                    opacity: "1",
                    transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                }),
                z(h, {
                    margin: "0px 12px 0px 8px",
                    opacity: 1,
                    width: "24px",
                    transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                })) : (z(g, {
                    "line-height": "0px",
                    "max-width": "0vw",
                    opacity: "0",
                    transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                }),
                z(h, {
                    margin: "0",
                    opacity: "0",
                    width: "0",
                    transition: "margin 100ms, opacity 50ms, width 100ms"
                }))
            }
            , !0);
            return a
        }
        mg() {
            return 40
        }
        Pg() {
            this.g.g(!1);
            return 0
        }
        Qg() {
            this.g.g(!0)
        }
    }
    function ED(a, b) {
        z(b, vw(a));
        z(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    }
    ;function JD(a, b) {
        const c = b.document.createElement("button");
        KD(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.i
        };
        a.g && (b["border-top"] = a.g,
        b["border-bottom"] = a.g);
        z(c, b);
        c.addEventListener("click", d=>{
            a.B();
            d.stopPropagation()
        }
        );
        return c
    }
    function LD(a, b, c, d) {
        const e = b.document.createElement("div");
        z(e, vw(b));
        z(e, {
            "align-items": "center",
            "background-color": a.i,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        z(f, vw(b));
        z(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g=>{
            g.matches ? (z(e, {
                "flex-direction": "row"
            }),
            a.g && z(e, {
                "border-top": a.g,
                "border-bottom": a.g
            }),
            z(f, {
                "margin-left": "8px",
                "text-align": "start"
            }),
            z(c, {
                border: "0",
                "margin-right": "8px",
                width: "auto"
            })) : (z(e, {
                border: "0",
                "flex-direction": "column"
            }),
            z(f, {
                "margin-left": "0",
                "text-align": "center"
            }),
            z(c, {
                "margin-right": "0",
                width: "100%"
            }),
            a.g && z(c, {
                "border-top": a.g,
                "border-bottom": a.g
            }))
        }
        ;
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }
    function KD(a, b, c) {
        z(c, vw(b));
        z(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.C,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.G,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class MD {
        constructor(a, b, c, d, e, f=null, g=null, h=null) {
            this.A = a;
            this.B = b;
            this.G = c;
            this.i = d;
            this.C = e;
            this.l = f;
            this.g = g;
            this.j = h
        }
        Ma(a) {
            const b = a.document.createElement("div");
            KD(this, a, b);
            z(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.i
            });
            if (this.l) {
                var c = ve(ie(a), "IMG");
                c.src = this.l;
                KD(this, a, c);
                z(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else
                c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            KD(this, a, c);
            z(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.A));
            b.appendChild(c);
            c = JD(this, a);
            c.appendChild(b);
            return this.j ? LD(this, a, c, this.j) : c
        }
    }
    ;function ND(a, b) {
        b = b.filter(c=>5 === D(c, Cq, 4)?.g() && 1 === L(c, 8));
        b = eB(b, a);
        a = QB(b, a);
        a.sort((c,d)=>d.ja.g - c.ja.g);
        return a[0] || null
    }
    ;function OD({J: a, Ze: b, Xe: c, Vf: d, wa: e, Vh: f, Ej: g}) {
        let h = 0;
        try {
            h |= wo(a);
            const k = Math.min(a.screen.width || 0, a.screen.height || 0);
            h |= k ? 320 > k ? 8192 : 0 : 2048;
            h |= a.navigator && PD(a.navigator.userAgent) ? 1048576 : 0;
            h = b ? h | QD(a, b, g) : h | (a.innerHeight >= a.innerWidth ? 0 : 8);
            h |= xo(a, c, g);
            g || (h |= zo(a))
        } catch {
            h |= 32
        }
        switch (d) {
        case 2:
            RD(a, e) && (h |= 16777216);
            break;
        case 1:
            SD(a, e) && (h |= 16777216)
        }
        f && TD(a, e) && (h |= 16777216);
        return h
    }
    function PD(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }
    var RD = (a,b=null)=>{
        const c = lx({
            mc: 0,
            Jb: a.innerWidth,
            Yb: 3,
            nc: 0,
            Kb: Math.min(Math.round(a.innerWidth / 320 * 50), UD) + 15,
            Zb: 3
        });
        return null != nx(VD(a, b), c)
    }
      , SD = (a,b=null)=>{
        const c = a.innerWidth
          , d = a.innerHeight
          , e = Math.min(Math.round(a.innerWidth / 320 * 50), UD) + 15
          , f = lx({
            mc: 0,
            Jb: c,
            Yb: 3,
            nc: d - e,
            Kb: d,
            Zb: 3
        });
        25 < e && f.push({
            x: c - 25,
            y: d - 25
        });
        return null != nx(VD(a, b), f)
    }
    ;
    function TD(a, b=null) {
        return null != WD(a, b)
    }
    function WD(a, b=null) {
        var c = a.innerHeight;
        c = lx({
            mc: 0,
            Jb: a.innerWidth,
            Yb: 10,
            nc: c - 66,
            Kb: c,
            Zb: 10
        });
        return nx(VD(a, b), c)
    }
    function XD(a, b) {
        var c = x(Zs);
        a: {
            const e = a.innerWidth
              , f = a.innerHeight;
            let g = f;
            for (; g > b; ) {
                var d = lx({
                    mc: 0,
                    Jb: e,
                    Yb: 9,
                    nc: g - b,
                    Kb: g,
                    Zb: 9
                });
                d = nx(VD(a), d);
                if (!d) {
                    a = f - g;
                    break a
                }
                g = c ? Math.min(d.getBoundingClientRect().top - 1, g - 1) : d.getBoundingClientRect().top - 1
            }
            a = null
        }
        return a
    }
    function VD(a, b=null) {
        return new sx(a,{
            kg: YD(a, b)
        })
    }
    function YD(a, b=null) {
        if (b)
            return (c,d,e)=>{
                xl(b, "ach_evt", {
                    tn: c.tagName,
                    id: c.getAttribute("id") ?? "",
                    cls: c.getAttribute("class") ?? "",
                    ign: String(e),
                    pw: a.innerWidth,
                    ph: a.innerHeight,
                    x: d.x,
                    y: d.y
                }, !0, 1)
            }
    }
    function QD(a, b, c=!1) {
        const d = a.innerHeight;
        return (c ? Kf(a) * d : d) >= b ? 0 : 1024
    }
    const UD = 90 * 1.38;
    function ZD(a) {
        a.g || (a.g = $D(a));
        z(a.g, {
            display: "block"
        });
        a.A.Qg();
        a.j.g(a.B)
    }
    function aE(a) {
        const b = a.A.Pg();
        switch (b) {
        case 0:
            a.j.g(a.B);
            break;
        case 1:
            a.g && (z(a.g, {
                display: "none"
            }),
            a.j.g(null));
            break;
        default:
            throw Error("Unhandled OnHideOutcome: " + b);
        }
    }
    function $D(a) {
        var b = XD(a.l, a.A.mg() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.l.document.createElement("div");
        z(c, vw(a.l));
        z(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.B = a.A.Ma(a.l, ()=>a.i(), ()=>{
            a.G.ka();
            aE(a)
        }
        , ()=>{
            a.G.ka();
            ZD(a)
        }
        );
        c.appendChild(a.B);
        a.D && (c.className = a.D);
        a.l.document.body.appendChild(c);
        return c
    }
    class bE {
        constructor(a, b, c) {
            this.l = a;
            this.A = b;
            this.B = null;
            this.j = new V(null);
            this.D = c || null;
            this.G = Uz(a);
            this.g = null
        }
        K() {
            const a = hp(this.G.j);
            kp(a, !0, ()=>void ZD(this));
            mp(a, !1, ()=>void aE(this))
        }
        i() {
            this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
            this.g = null;
            this.G.ka();
            this.j.g(null)
        }
        C() {
            return this.j
        }
    }
    ;function cE(a) {
        a.G.g(0);
        null != a.l && (a.l.i(),
        a.l = null);
        null != a.j && (a.j.i(),
        a.j = null)
    }
    function dE(a) {
        a.j = new bE(a.B,a.I,a.D);
        a.j.K();
        np(a.A, a.j.C());
        a.G.g(2)
    }
    class eE {
        constructor(a, b, c, d, e) {
            this.B = a;
            this.H = b;
            this.M = c;
            this.I = d;
            this.D = e;
            this.G = new V(0);
            this.A = new V(null);
            this.j = this.l = this.g = null
        }
        K() {
            this.H ? (this.l = new uD(this.B,this.H,this.M,this.D),
            this.l.K(),
            np(this.A, this.l.C()),
            this.G.g(1),
            null == this.g && (this.g = new aq(this.B),
            this.g.K(2E3)),
            Zp(this.g, ()=>{
                cE(this);
                dE(this)
            }
            )) : dE(this)
        }
        i() {
            cE(this);
            this.g && (this.g.ka(),
            this.g = null)
        }
        C() {
            return this.A
        }
    }
    ;var fE = (a,b,c,d,e)=>{
        a = new eE(a,ND(a, e),new MD(b,d,"#FFF","#4A4A4A","normal"),new ID(b,c,d),"google-dns-link-placeholder");
        a.K();
        return a
    }
    ;
    var gE = a=>a.googlefc = a.googlefc || {}
      , hE = a=>{
        a = a.googlefc = a.googlefc || {};
        return a.ccpa = a.ccpa || {}
    }
      , iE = a=>{
        a = a.googlefc = a.googlefc || {};
        return a.__fcusi = a.__fcusi || {}
    }
    ;
    function jE(a, b) {
        b && (a.i = fE(a.g, b.localizedDnsText, b.localizedDnsCollapseText, ()=>kE(a, b), a.l))
    }
    function lE(a) {
        var b = hE(a.g);
        if (mE(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.i = fE(a.g, c, b, ()=>nE(a), a.l))
        }
    }
    function oE(a) {
        const b = gE(a.g);
        b.callbackQueue = b.callbackQueue || [];
        x(it) ? (iE(a.g).overrideDnsLink = !0,
        b.callbackQueue.push({
            INITIAL_US_STATES_DATA_READY: c=>jE(a, c)
        })) : (hE(a.g).overrideDnsLink = !0,
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: ()=>lE(a)
        }))
    }
    function nE(a) {
        Cx(a.j);
        hE(a.g).openConfirmationDialog(b=>pE(a, b))
    }
    function kE(a, b) {
        Cx(a.j);
        b.openConfirmationDialog(c=>pE(a, c))
    }
    function pE(a, b) {
        b && a.i && (a.i.i(),
        a.i = null);
        Dx(a.j)
    }
    class qE {
        constructor(a, b, c) {
            this.g = a;
            this.j = wx(b, 2147483643);
            this.l = c;
            this.i = null
        }
    }
    function mE(a, b) {
        switch (a) {
        case b.CCPA_DOES_NOT_APPLY:
        case b.OPTED_OUT:
            return !1;
        case b.NOT_OPTED_OUT:
            return !0;
        default:
            return !0
        }
    }
    ;function rE(a) {
        const b = a.document.createElement("ins");
        sE(a, b);
        z(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }
    function tE(a, b, c, d) {
        const e = ve(ie(a), "IMG");
        e.src = b;
        d && e.setAttribute("aria-label", d);
        sE(a, e);
        z(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f=>{
            c();
            f.stopPropagation()
        }
        );
        return e
    }
    function uE(a, b) {
        const c = b.document.createElement("span");
        sE(b, c);
        z(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d=>{
            a.i();
            d.stopPropagation()
        }
        );
        return c
    }
    function vE(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.j));
        z(c, vw(b));
        z(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }
    function wE(a) {
        const b = a.document.createElement("div");
        z(b, vw(a));
        z(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class xE {
        constructor(a, b, c, d) {
            this.l = a;
            this.A = b;
            this.j = c;
            this.i = d;
            this.g = new V(!1)
        }
        Ma(a, b, c, d) {
            c = rE(a);
            const e = tE(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d)
              , f = tE(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.i)
              , g = uE(this, a)
              , h = tE(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.A);
            z(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const k = vE(this, a);
            a = wE(a);
            a.appendChild(c);
            a.appendChild(k);
            this.g.listen(l=>{
                z(e, {
                    display: l ? "none" : "inline"
                });
                z(f, {
                    display: l ? "inline" : "none"
                });
                l ? (z(g, {
                    "line-height": "24px",
                    "max-width": "100vw",
                    opacity: "1",
                    transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                }),
                z(h, {
                    "margin-right": "12px",
                    opacity: 1,
                    width: "24px",
                    transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                }),
                z(k, {
                    "border-width": "1px",
                    "line-height": "14px",
                    "max-width": "100vw",
                    opacity: "1",
                    padding: "8px 32px",
                    transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                })) : (z(g, {
                    "line-height": "0px",
                    "max-width": "0vw",
                    opacity: "0",
                    transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                }),
                z(h, {
                    "margin-right": "0",
                    opacity: "0",
                    width: "0",
                    transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                }),
                z(k, {
                    "border-width": "0px",
                    "line-height": "0px",
                    "max-width": "0vw",
                    opacity: "0",
                    padding: "0",
                    transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                }))
            }
            , !0);
            return a
        }
        mg() {
            return 71
        }
        Pg() {
            this.g.g(!1);
            return 0
        }
        Qg() {
            this.g.g(!0)
        }
    }
    function sE(a, b) {
        z(b, vw(a));
        z(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    }
    ;var yE = class extends R {
        constructor() {
            super()
        }
    }
    ;
    function zE(a) {
        AE(a.i, b=>{
            var c = a.l
              , d = b.wj
              , e = b.Zh
              , f = b.Hh;
            b = b.showRevocationMessage;
            (new eE(c,ND(c, a.j),new MD(d,b,"#1A73E8","#FFF","bold","https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg","2px solid #ECEDED",f),new xE(d,e,f,b),"google-revocation-link-placeholder")).K()
        }
        , ()=>{
            Dx(a.g)
        }
        )
    }
    class BE {
        constructor(a, b, c, d) {
            this.l = a;
            this.g = wx(b, 2147483643);
            this.j = c;
            this.i = d
        }
    }
    ;var CE = a=>{
        if (!a || null == L(a, 1))
            return !1;
        a = L(a, 1);
        switch (a) {
        case 1:
            return !0;
        case 2:
            return !1;
        default:
            throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    }
    ;
    function DE(a) {
        if (!0 !== a.i.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            CE(a.g) && (b = new BE(a.i,a.A,a.l || F(a.g, rr, 4),a.j),
            Cx(b.g),
            zE(b),
            b = !0);
            var c;
            a: if ((c = a.g) && null != L(c, 3))
                switch (c = L(c, 3),
                c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
                }
            else
                c = !1;
            c && (oE(new qE(a.i,a.A,a.l || F(a.g, rr, 4))),
            b = !0);
            c = (c = a.g) ? !0 === gi(c, 5) : !1;
            var d = a.g;
            d = (d ? !0 === gi(d, 6) : !1) || x(Ot);
            c && (b = !0);
            b && (b = new yE,
            b = Zi(b, 1, c && d),
            a.j.start(b),
            a.i.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class EE {
        constructor(a, b, c, d, e) {
            this.i = a;
            this.j = b;
            this.g = c;
            this.A = d;
            this.l = e || null
        }
    }
    ;function FE(a, b, c, d, e, f) {
        try {
            const g = a.g
              , h = af("SCRIPT", g);
            h.async = !0;
            Ue(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", ()=>{
                e();
                d && g.head.removeChild(h)
            }
            );
            h.addEventListener("error", ()=>{
                0 < c ? FE(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h),
                f())
            }
            )
        } catch (g) {
            f()
        }
    }
    function GE(a, b, c=()=>{}
    , d=()=>{}
    ) {
        FE(ie(a), b, 0, !1, c, d)
    }
    ;function HE(a=null) {
        a = a || r;
        return a.googlefc || (a.googlefc = {})
    }
    ;Wc(oo).map(a=>Number(a));
    Wc(po).map(a=>Number(a));
    const IE = r.URL;
    function JE(a) {
        var b = (new IE(a.location.href)).searchParams;
        a = b.get("fcconsent");
        b = b.get("fc");
        return "alwaysshow" === b ? b : "alwaysshow" === a ? a : null
    }
    function KE(a) {
        const b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = (new IE(a.location.href)).searchParams.get("fctype")) && -1 !== b.indexOf(a) ? a : null
    }
    ;var LE = (a,b)=>{
        const c = a.document
          , d = ()=>{
            if (!a.frames[b])
                if (c.body) {
                    const e = af("IFRAME", c);
                    e.style.display = "none";
                    e.style.width = "0px";
                    e.style.height = "0px";
                    e.style.border = "none";
                    e.style.zIndex = "-1000";
                    e.style.left = "-1000px";
                    e.style.top = "-1000px";
                    e.name = b;
                    c.body.appendChild(e)
                } else
                    a.setTimeout(d, 5)
        }
        ;
        d()
    }
    ;
    var ME = kj(class extends R {
    }
    );
    function NE(a) {
        if (a.g)
            return a.g;
        a.I && a.I(a.l) ? a.g = a.l : a.g = sf(a.l, a.M);
        return a.g ?? null
    }
    function OE(a) {
        a.C || (a.C = b=>{
            try {
                var c = a.H ? a.H(b) : void 0;
                if (c) {
                    var d = c.ff
                      , e = a.D.get(d);
                    e && (e.jj || a.D.delete(d),
                    e.wb?.(e.hi, c.payload))
                }
            } catch (f) {}
        }
        ,
        Ob(a.l, "message", a.C))
    }
    function PE(a, b, c) {
        if (NE(a))
            if (a.g === a.l)
                (b = a.A.get(b)) && b(a.g, c);
            else {
                var d = a.j.get(b);
                if (d && d.Tb) {
                    OE(a);
                    var e = ++a.T;
                    a.D.set(e, {
                        wb: d.wb,
                        hi: d.Lc(c),
                        jj: "addEventListener" === b
                    });
                    a.g.postMessage(d.Tb(c, e), "*")
                }
            }
    }
    var QE = class extends T {
        constructor(a, b, c, d) {
            super();
            this.M = b;
            this.I = c;
            this.H = d;
            this.A = new Map;
            this.T = 0;
            this.j = new Map;
            this.D = new Map;
            this.C = void 0;
            this.l = a
        }
        i() {
            delete this.g;
            this.A.clear();
            this.j.clear();
            this.D.clear();
            this.C && (Rb(this.l, "message", this.C),
            delete this.C);
            delete this.l;
            delete this.H;
            super.i()
        }
    }
    ;
    const RE = (a,b)=>{
        const c = {
            cb: d=>{
                d = ME(d);
                b.callback({
                    nb: d
                })
            }
        };
        b.spsp && (c.spsp = b.spsp);
        a = a.googlefc || (a.googlefc = {});
        a.__fci = a.__fci || [];
        a.__fci.push(b.command, c)
    }
      , SE = {
        Lc: a=>a.callback,
        Tb: (a,b)=>({
            __fciCall: {
                callId: b,
                command: a.command,
                spsp: a.spsp || void 0
            }
        }),
        wb: (a,b)=>{
            a({
                nb: b
            })
        }
    };
    function TE(a) {
        a = ME(a.data.__fciReturn);
        return {
            payload: a,
            ff: Di(a, 1)
        }
    }
    function UE(a, b=!1) {
        if (b)
            return !1;
        a.j || (a.g = !!NE(a.caller),
        a.j = !0);
        return a.g
    }
    function VE(a) {
        return new Promise(b=>{
            UE(a) && PE(a.caller, "getDataWithCallback", {
                command: "loaded",
                callback: c=>{
                    b(c.nb)
                }
            })
        }
        )
    }
    function WE(a, b) {
        UE(a) && PE(a.caller, "getDataWithCallback", {
            command: "prov",
            spsp: fj(b),
            callback: ()=>{}
        })
    }
    var XE = class extends T {
        constructor(a) {
            super();
            this.g = this.j = !1;
            this.caller = new QE(a,"googlefcPresent",void 0,TE);
            this.caller.A.set("getDataWithCallback", RE);
            this.caller.j.set("getDataWithCallback", SE)
        }
        i() {
            this.caller.ka();
            super.i()
        }
    }
    ;
    const YE = a=>{
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
    ;
    function ZE(a) {
        if (!1 === a.gdprApplies)
            return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = YE(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Wj({
            e: String(a.internalErrorState)
        }, "tcfe"),
        !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }
    function $E(a, b={}) {
        return ZE(a) ? !1 === a.gdprApplies ? !0 : "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b.Vn || "string" !== typeof a.tcString || !a.tcString.length ? !b.Gi : aF(a, "1") : !1
    }
    function aF(a, b) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var c = a.publisher.restrictions[b];
                if (void 0 !== c) {
                    c = c["755"];
                    break a
                }
            }
            c = void 0
        }
        if (0 === c)
            return !1;
        a.purpose && a.vendor ? (c = a.vendor.consents,
        (c = !(!c || !c["755"])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents,
        c = !(!a || !a[b])),
        b = c)) : b = !0;
        return b
    }
    function bF(a) {
        var b = ["3", "4"];
        return !1 === a.gdprApplies ? !0 : b.every(c=>aF(a, c))
    }
    function cF(a) {
        if (a.g)
            return a.g;
        a.g = sf(a.j, "__tcfapiLocator");
        return a.g
    }
    function dF(a) {
        return "function" === typeof a.j.__tcfapi || null != cF(a)
    }
    function eF(a, b, c, d) {
        c || (c = ()=>{}
        );
        if ("function" === typeof a.j.__tcfapi)
            a = a.j.__tcfapi,
            a(b, 2, c, d);
        else if (cF(a)) {
            fF(a);
            const e = ++a.H;
            a.C[e] = c;
            a.g && a.g.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else
            c({}, !1)
    }
    function gF(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.A
        };
        const d = Hb(()=>b(c));
        let e = 0;
        -1 !== a.D && (e = setTimeout(()=>{
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }
        , a.D));
        eF(a, "addEventListener", f=>{
            f && (c = f,
            c.internalErrorState = YE(c),
            c.internalBlockOnErrors = a.A,
            ZE(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"),
            eF(a, "removeEventListener", null, c.listenerId),
            (f = e) && clearTimeout(f),
            d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f))
        }
        )
    }
    function fF(a) {
        a.l || (a.l = b=>{
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.C[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        Ob(a.j, "message", a.l))
    }
    class hF extends T {
        constructor(a, b={}) {
            super();
            this.j = a;
            this.g = null;
            this.C = {};
            this.H = 0;
            this.D = b.timeoutMs ?? 500;
            this.A = b.Nh ?? !1;
            this.l = null
        }
        i() {
            this.C = {};
            this.l && (Rb(this.j, "message", this.l),
            delete this.l);
            delete this.C;
            delete this.j;
            delete this.g;
            super.i()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.A
            };
            const c = Hb(()=>a(b));
            let d = 0;
            -1 !== this.D && (d = setTimeout(()=>{
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }
            , this.D));
            const e = (f,g)=>{
                clearTimeout(d);
                f ? (b = f,
                b.internalErrorState = YE(b),
                b.internalBlockOnErrors = this.A,
                g && 0 === b.internalErrorState || (b.tcString = "tcunavailable",
                g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable",
                b.internalErrorState = 3);
                a(b)
            }
            ;
            try {
                eF(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable",
                b.internalErrorState = 3,
                d && (clearTimeout(d),
                d = 0),
                c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && eF(this, "removeEventListener", null, a.listenerId)
        }
    }
    ;function AE(a, b, c) {
        const d = HE(a.g);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: ()=>{
                const e = HE(a.g)
                  , f = new hF(a.g);
                dF(f) && gF(f, g=>{
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        wj: e.getDefaultConsentRevocationText(),
                        Zh: e.getDefaultConsentRevocationCloseText(),
                        Hh: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: ()=>e.showRevocationMessage()
                    })
                }
                );
                c()
            }
        })
    }
    function iF(a, b) {
        var c = JE(a.g);
        const d = KE(a.g);
        c = jF(a.i, {
            fc: c,
            fctype: d
        });
        GE(a.g, c, ()=>{}
        , ()=>{}
        );
        b && WE(new XE(a.g), b)
    }
    function jF(a, b) {
        b = {
            ...b,
            ers: 2
        };
        return dd(id(new tb(ub,"https://fundingchoicesmessages.google.com/i/%{id}"), {
            id: a
        }), b)
    }
    class kF {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        start(a) {
            if (this.g === this.g.top)
                try {
                    LE(this.g, "googlefcPresent"),
                    iF(this, a)
                } catch (b) {}
        }
    }
    ;const lF = new Set(["ARTICLE", "SECTION"]);
    var mF = class {
        constructor(a) {
            this.g = a
        }
    }
    ;
    function nF(a, b) {
        return Array.from(b.classList).map(c=>`${a}=${c}`)
    }
    function oF(a) {
        return 0 < a.classList.length
    }
    function pF(a) {
        return lF.has(a.tagName)
    }
    ;var qF = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    }
    ;
    function rF(a) {
        return xa(a) && 1 == a.nodeType && "FIGURE" == a.tagName ? a : (a = a.parentNode) ? rF(a) : null
    }
    ;var sF = a=>{
        var b = a.src;
        const c = a.getAttribute("data-src") || a.getAttribute("data-lazy-src");
        (b && b.startsWith("data:") && c ? c : b || c) ? (a.getAttribute("srcset"),
        b = (b = rF(a)) ? (b = b.getElementsByTagName("figcaption")[0]) ? b.textContent : null : null,
        a = new qF(a,b || a.getAttribute("alt") || null)) : a = null;
        return a
    }
    ;
    var tF = class {
        constructor() {
            this.map = new Map
        }
        clear() {
            this.map.clear()
        }
        delete(a, b) {
            const c = this.map.get(a);
            return c ? (b = c.delete(b),
            0 === c.size && this.map.delete(a),
            b) : !1
        }
        get(a) {
            return [...(this.map.get(a) ?? [])]
        }
        keys() {
            return this.map.keys()
        }
        add(a, b) {
            let c = this.map.get(a);
            c || this.map.set(a, c = new Set);
            c.add(b)
        }
        get size() {
            let a = 0;
            for (const b of this.map.values())
                a += b.size;
            return a
        }
        values() {
            const a = this.map;
            return function*() {
                for (const b of a.values())
                    yield*b
            }()
        }
        [Symbol.iterator]() {
            const a = this.map;
            return function*() {
                for (const [b,c] of a) {
                    const d = b
                      , e = c;
                    for (const f of e)
                        yield[d, f]
                }
            }()
        }
    }
    ;
    function uF(a) {
        return [a[0], [...a[1]]]
    }
    ;function vF(a) {
        return Array.from(wF(a).map.values()).filter(b=>3 <= b.size).map(b=>[...b])
    }
    function xF(a, b) {
        return b.every(c=>{
            var d = a.g.getBoundingClientRect(c.g);
            if (d = 50 <= d.height && d.width >= a.A) {
                var e = a.g.getBoundingClientRect(c.g);
                d = a.l;
                e = new az(e.left,e.right);
                d = Math.max(d.start, e.start) <= Math.min(d.end, e.end)
            }
            return d && null === Vo(a.j, {
                hb: c.g,
                bb: yF,
                Fb: !0
            })
        }
        )
    }
    function zF(a) {
        return vF(a).sort(AF).find(b=>xF(a, b)) || []
    }
    function wF(a) {
        return BF(Array.from(a.win.document.getElementsByTagName("IMG")).map(sF).filter(sq), b=>{
            var c = [...nF("CLASS_NAME", b.g)]
              , d = b.g.parentElement;
            d = [...(d ? nF("PARENT_CLASS_NAME", d) : [])];
            var e = b.g.parentElement?.parentElement;
            e = [...(e ? nF("GRANDPARENT_CLASS_NAME", e) : [])];
            var f = (f = Vo(a.i.g, {
                hb: b.g,
                bb: oF
            })) ? nF("NEAREST_ANCESTOR_CLASS_NAME", f) : [];
            return [...c, ...d, ...e, ...f, ...(b.i ? ["HAS_CAPTION=true"] : []), ...(Vo(a.i.g, {
                hb: b.g,
                bb: pF
            }) ? ["ARTICLE_LIKE_ANCESTOR=true"] : [])]
        }
        )
    }
    var CF = class {
        constructor(a, b, c, d, e) {
            var f = new Lp;
            this.win = a;
            this.l = b;
            this.A = c;
            this.g = f;
            this.j = d;
            this.i = e
        }
    }
    ;
    function BF(a, b) {
        const c = new tF;
        for (const d of a)
            for (const e of b(d))
                c.add(e, d);
        return c
    }
    function yF(a) {
        return "A" === a.tagName && a.hasAttribute("href")
    }
    function AF(a, b) {
        return b.length - a.length
    }
    ;function DF(a) {
        const b = a.l.parentNode;
        if (!b)
            throw Error("Image not in the DOM");
        const c = EF(a.j)
          , d = FF(a.j);
        c.appendChild(d);
        b.insertBefore(c, a.l.nextSibling);
        a.A.g().i(e=>{
            var f = a.j;
            const g = d.getBoundingClientRect()
              , h = g.top - e.top
              , k = g.left - e.left
              , l = g.width - e.width;
            e = g.height - e.height;
            1 > Math.abs(h) && 1 > Math.abs(k) && 1 > Math.abs(l) && 1 > Math.abs(e) || (f = f.getComputedStyle(d),
            z(d, {
                top: parseInt(f.top, 10) - h + "px",
                left: parseInt(f.left, 10) - k + "px",
                width: parseInt(f.width, 10) - l + "px",
                height: parseInt(f.height, 10) - e + "px"
            }))
        }
        );
        return d
    }
    function GF(a) {
        a.g || (a.g = DF(a));
        return a.g
    }
    var HF = class extends T {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.l = b;
            this.A = c;
            this.g = null
        }
        i() {
            if (this.g) {
                var a = this.g;
                const b = a.parentNode;
                b && b.removeChild(a);
                this.g = null
            }
            super.i()
        }
    }
    ;
    function FF(a) {
        const b = a.document.createElement("div");
        z(b, vw(a));
        z(b, {
            position: "absolute",
            left: "0",
            top: "0",
            width: "0",
            height: "0",
            "pointer-events": "none"
        });
        return b
    }
    function EF(a) {
        const b = a.document.createElement("div");
        z(b, vw(a));
        z(b, {
            position: "relative",
            width: "0",
            height: "0"
        });
        return b
    }
    ;function IF(a) {
        const b = new V(a.dataset.adStatus || null);
        (new MutationObserver(()=>{
            b.g(a.dataset.adStatus || null)
        }
        )).observe(a, {
            attributes: !0
        });
        return hp(b)
    }
    ;const JF = ["Google Material Icons", "Roboto"];
    function KF({win: a, Ca: b, Hi: c, webPropertyCode: d, Ka: e, ba: f}) {
        const g = new Np(a,c);
        c = new HF(a,c,g);
        $o(c, g);
        a = new LF(a,d,e,b,c,f);
        $o(a, c);
        a.K()
    }
    var LF = class extends T {
        constructor(a, b, c, d, e, f) {
            super();
            this.win = a;
            this.webPropertyCode = b;
            this.Ka = c;
            this.Ca = d;
            this.j = e;
            this.ba = f;
            this.g = new V(!1)
        }
        K() {
            const a = MF(this.win, this.webPropertyCode, this.Ka);
            GF(this.j).appendChild(a.ri);
            ew(this.win, a.ya);
            IF(a.ya).i(b=>{
                if (null !== b) {
                    switch (b) {
                    case "unfilled":
                        this.ka();
                        break;
                    case "filled":
                        this.g.g(!0);
                        break;
                    default:
                        this.ba?.reportError("Unhandled AdStatus: " + String(b)),
                        this.ka()
                    }
                    this.ba?.sj(this.Ca, b)
                }
            }
            );
            lp(this.g, !0, ()=>void a.Pi.g(!0));
            a.ki.listen(()=>void this.ka());
            a.ji.listen(()=>void this.ba?.qj(this.Ca))
        }
    }
    ;
    function MF(a, b, c) {
        const d = new V(!1)
          , e = a.document.createElement("div");
        z(e, vw(a));
        z(e, {
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            "background-color": "rgba(0, 0, 0, 0.75)",
            opacity: "0",
            transition: "opacity 0.25s ease-in-out",
            "box-sizing": "border-box",
            padding: "40px 5px 5px 5px"
        });
        kp(d, !0, ()=>void z(e, {
            opacity: "1"
        }));
        kp(d, !1, ()=>void z(e, {
            opacity: "0"
        }));
        const f = a.document.createElement("div");
        z(f, vw(a));
        z(f, {
            display: "block",
            width: "100%",
            height: "100%"
        });
        e.appendChild(f);
        const {zh: g, Oi: h} = NF(a, b);
        f.appendChild(g);
        e.appendChild(OF(a, O(c, 1)));
        b = PF(a, O(c, 2));
        e.appendChild(b.Th);
        b.ue.listen(()=>void d.g(!1));
        return {
            Pi: d,
            ri: e,
            ya: h,
            ji: b.ue,
            ki: b.ue.delay(a, 450)
        }
    }
    function OF(a, b) {
        const c = a.document.createElement("div");
        z(c, vw(a));
        z(c, {
            position: "absolute",
            top: "10px",
            width: "100%",
            color: "white",
            "font-family": "Roboto",
            "font-size": "12px",
            "line-height": "16px",
            "text-align": "center"
        });
        c.appendChild(a.document.createTextNode(b));
        return c
    }
    function PF(a, b) {
        const c = a.document.createElement("button");
        c.setAttribute("aria-label", b);
        z(c, vw(a));
        z(c, {
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "block",
            cursor: "pointer",
            width: "24px",
            height: "24px",
            "font-size": "24px",
            "user-select": "none",
            color: "white"
        });
        b = a.document.createElement("gm-icon");
        b.className = "google-material-icons";
        b.appendChild(a.document.createTextNode("close"));
        c.appendChild(b);
        const d = new tp;
        c.addEventListener("click", ()=>void sp(d));
        return {
            Th: c,
            ue: qp(d)
        }
    }
    function NF(a, b) {
        a = aw(a.document, b, null, null, {});
        return {
            zh: a.ob,
            Oi: a.ya
        }
    }
    ;function QF({target: a, threshold: b=0}) {
        const c = new RF;
        c.K(a, b);
        return c
    }
    var RF = class extends T {
        constructor() {
            super();
            this.g = new V(!1)
        }
        K(a, b) {
            const c = new IntersectionObserver(d=>{
                for (const e of d)
                    if (e.target === a) {
                        this.g.g(e.isIntersecting);
                        break
                    }
            }
            ,{
                threshold: b
            });
            c.observe(a);
            ap(this, ()=>void c.disconnect())
        }
    }
    ;
    function SF(a) {
        const b = TF(a.win, Hi(a.g, 2) ?? 250, Hi(a.g, 3) ?? 300);
        let c = 1;
        return zF(a.l).map(d=>({
            Ca: c++,
            image: d,
            ib: b(d)
        }))
    }
    function UF(a, b) {
        const c = QF({
            target: b.image.g,
            threshold: Ii(a.g) ?? .8
        });
        a.j.push(c);
        lp(op(c.g, a.win, Hi(a.g, 5) ?? 3E3, d=>d), !0, ()=>{
            if (a.i < (Hi(a.g, 1) ?? 1)) {
                KF({
                    win: a.win,
                    Ca: b.Ca,
                    Hi: b.image.g,
                    webPropertyCode: a.webPropertyCode,
                    Ka: a.Ka,
                    ba: a.ba
                });
                a.i++;
                if (!(a.i < (Hi(a.g, 1) ?? 1)))
                    for (; a.j.length; )
                        a.j.pop()?.ka();
                a.ba?.rj(b.Ca)
            }
        }
        )
    }
    function VF(a) {
        const b = SF(a);
        b.filter(WF).forEach(c=>void UF(a, c));
        a.ba?.tj(b.map(c=>({
            Ca: c.Ca,
            ib: c.ib
        })))
    }
    var XF = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.webPropertyCode = b;
            this.g = c;
            this.Ka = d;
            this.l = e;
            this.ba = f;
            this.j = [];
            this.i = 0
        }
    }
    ;
    function WF(a) {
        return 0 === a.ib.rejectionReasons.length
    }
    function TF(a, b, c) {
        const d = S(a);
        return e=>{
            e = e.g.getBoundingClientRect();
            const f = [];
            e.width < b && f.push(1);
            e.height < c && f.push(2);
            e.top <= d && f.push(3);
            return {
                Bb: e.width,
                Qe: e.height,
                li: e.top - d,
                rejectionReasons: f
            }
        }
    }
    ;function YF(a, b) {
        a.Ca = b;
        return a
    }
    var ZF = class {
        constructor(a, b, c, d, e) {
            this.A = a;
            this.webPropertyCode = b;
            this.hostname = c;
            this.j = d;
            this.l = e;
            this.errorMessage = this.i = this.Ca = this.g = null
        }
    }
    ;
    function $F(a, b) {
        return new ZF(b,a.webPropertyCode,a.hostname,a.i,a.l)
    }
    function aG(a, b, c) {
        var d = a.j++;
        null === a.g ? (a.g = fl(),
        a = 0) : a = fl() - a.g;
        var e = b.A
          , f = b.webPropertyCode
          , g = b.hostname
          , h = b.j
          , k = b.l.map(encodeURIComponent).join(",");
        if (b.g) {
            var l = {
                imcnt: b.g.length
            };
            var m = Math.min(b.g.length, 10);
            for (let n = 0; n < m; n++) {
                const p = `im${n}`;
                l[`${p}_id`] = b.g[n].Ca;
                l[`${p}_s_w`] = b.g[n].ib.Bb;
                l[`${p}_s_h`] = b.g[n].ib.Qe;
                l[`${p}_s_dbf`] = b.g[n].ib.li;
                0 < b.g[n].ib.rejectionReasons.length && (l[`${p}_s_rej`] = b.g[n].ib.rejectionReasons.join(","))
            }
        } else
            l = null;
        IA("abg::imovad", {
            typ: e,
            wpc: f,
            hst: g,
            pvsid: h,
            peid: k,
            rate: c,
            num: d,
            tim: a,
            ...(null === b.Ca ? {} : {
                imid: b.Ca
            }),
            ...(null === b.i ? {} : {
                astat: b.i
            }),
            ...(null === b.errorMessage ? {} : {
                errm: b.errorMessage
            }),
            ...l
        }, c)
    }
    var bG = class {
        constructor(a, b, c, d) {
            this.webPropertyCode = a;
            this.hostname = b;
            this.i = c;
            this.l = d;
            this.j = 0;
            this.g = null
        }
        tj(a) {
            var b = $F(this, "fndi");
            b.g = a;
            aG(this, b, 0 < a.length ? 1 : .1)
        }
        rj(a) {
            a = YF($F(this, "adpl"), a);
            aG(this, a, 1)
        }
        sj(a, b) {
            a = YF($F(this, "adst"), a);
            a.i = b;
            aG(this, a, 1)
        }
        qj(a) {
            a = YF($F(this, "adis"), a);
            aG(this, a, 1)
        }
        reportError(a) {
            var b = $F(this, "err");
            b.errorMessage = a;
            aG(this, b, .1)
        }
    }
    ;
    function cG(a, b, c) {
        return (a = Fr(a)) && gi(a, 11) ? c.map(d=>d.j()) : c.map(d=>d.A(b))
    }
    ;var dG = class extends R {
        getHeight() {
            return Ci(this, 2)
        }
    }
    ;
    function eG(a, b) {
        return aj(a, 1, b)
    }
    function fG(a, b) {
        return xi(a, 2, b)
    }
    var gG = class extends R {
    }
    ;
    gG.O = [2];
    var hG = class extends R {
        constructor() {
            super()
        }
    }
    ;
    hG.O = [5];
    var iG = class extends R {
        constructor() {
            super()
        }
    }
      , jG = [1, 2];
    const kG = new Set([7, 1]);
    var lG = class {
        constructor() {
            this.j = new tF;
            this.l = []
        }
        g(a, b) {
            kG.has(b) || oq(nq(NB(a), c=>void this.j.add(c, b)), c=>void this.l.push(c))
        }
        i(a, b) {
            for (const c of a)
                this.g(c, b)
        }
    }
    ;
    function mG(a) {
        return new Eq(["pedestal_container"],{
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class nG {
        g(a) {
            return mG(Math.floor(a.Fc()))
        }
    }
    ;var oG = class extends R {
        constructor() {
            super()
        }
    }
    ;
    function pG(a, b) {
        var c = b.adClient;
        if ("string" !== typeof c || !c)
            return !1;
        a.ee = c;
        a.j = !!b.adTest;
        c = b.pubVars;
        xa(c) && (a.F = c);
        if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
            a.B = {};
            for (const d of b.fillMessage)
                a.B[d.key] = d.value
        }
        a.l = b.adWidth;
        a.i = b.adHeight;
        Pk(a.l) && Pk(a.i) || IA("rctnosize", b);
        return !0
    }
    var qG = class {
        constructor() {
            this.B = this.F = this.j = this.ee = null;
            this.i = this.l = 0
        }
        C() {
            return !0
        }
    }
    ;
    function rG(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            const b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return "__storage_test__" === b
        } catch (b) {
            return !1
        }
    }
    function sG(a, b=[]) {
        const c = Date.now();
        return Ta(b, d=>c - d < 1E3 * a)
    }
    function tG(a, b) {
        try {
            const c = a.getItem("__lsv__");
            if (!c)
                return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || Ya(d, e=>!Number.isInteger(e)))
                return a.removeItem("__lsv__"),
                [];
            d = sG(b, d);
            d.length || a?.removeItem("__lsv__");
            return d
        } catch (c) {
            return null
        }
    }
    function uG(a, b) {
        return 0 >= b || null == a || !rG(a) ? null : tG(a, b)
    }
    ;var vG = (a,b,c)=>{
        let d = 0;
        try {
            d |= wo(a);
            d |= zo(a);
            d |= xo(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = uG(c, 3600);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728);
            x(Bb) && (d |= 128)
        } catch (g) {
            d |= 32
        }
        return d
    }
    ;
    var wG = class extends qG {
        constructor() {
            super(...arguments);
            this.A = !1;
            this.g = null
        }
        C(a) {
            this.A = !!a.enableAma;
            if (a = a.amaConfig)
                try {
                    var b = Hr(a)
                } catch (c) {
                    b = null
                }
            else
                b = null;
            this.g = b;
            return !0
        }
    }
    ;
    const xG = {};
    function yG(a, b, c) {
        let d = zG(a, c, b);
        if (!d)
            return !0;
        let e = -1;
        const f = c.C.Nb();
        for (; d.dc && d.dc.length; ) {
            const h = d.dc.shift();
            var g = oB(h.ga);
            const k = h.ja.g
              , l = !!c.j.qf || !!c.j.Af || c.Ya() || !!c.j.cg || x(xt) || k > e;
            g = !g || g <= d.bd;
            if (!l)
                c.B?.g(h, 20);
            else if (!g)
                c.B?.g(h, 18);
            else if (AG(c, h, {
                Hd: d.bd
            })) {
                e = k;
                if (d.Xc.g.length + 1 >= f)
                    return c.B?.i(d.dc, 19),
                    !0;
                d = zG(a, c, b);
                if (!d)
                    return !0
            }
        }
        return c.l
    }
    const zG = (a,b,c)=>{
        var d = b.C.Nb()
          , e = b.C.l
          , f = b.C;
        f = wC(b.da(), f.g ? f.g.tc : void 0, d);
        if (f.g.length >= d)
            return b.B?.i(BG(b, f, {
                types: a
            }, c), 19),
            null;
        e ? (d = f.i || (f.i = Co(f.j).scrollHeight || null),
        e = !d || 0 > d ? -1 : f.i * e - CC(f)) : e = void 0;
        const g = (d = null == e || 50 <= e) ? BG(b, f, {
            types: a
        }, c) : null;
        d || b.B?.i(BG(b, f, {
            types: a
        }, c), 18);
        return {
            Xc: f,
            bd: e,
            dc: g
        }
    }
    ;
    xG[2] = Ha(function(a, b) {
        a = BG(b, wC(b.da()), {
            types: a,
            Db: fC(b.da())
        }, 2);
        if (0 == a.length)
            return !0;
        for (var c = 0; c < a.length; c++)
            if (AG(b, a[c]))
                return !0;
        return b.l ? (b.A.push(11),
        !0) : !1
    }, [0]);
    xG[5] = Ha(yG, [0], 5);
    xG[10] = Ha(function(a, b) {
        a = [];
        const c = b.Ga;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && !x(mt) && a.push(1);
        return yG(a, 10, b)
    }, 10);
    xG[3] = function(a) {
        if (!a.l)
            return !1;
        var b = BG(a, wC(a.da()), {
            types: [0],
            Db: fC(a.da())
        }, 3);
        if (0 == b.length)
            return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (AG(a, b[c]))
                return !0;
        a.A.push(11);
        return !0
    }
    ;
    const CG = a=>{
        var b;
        a.j.qh ? b = x(ot) ? new aC(0,null,[],8,.3) : new aC(0,null,[],3,null) : b = fC(a.da());
        return {
            types: [0],
            Db: b
        }
    }
      , EG = a=>{
        const b = a.da().document.body.getBoundingClientRect().width;
        DG(a, mG(b))
    }
      , GG = (a,b)=>{
        var c = CG(a);
        c.uj = [5];
        c = BG(a, wC(a.da()), c, 8);
        FG(a, c.reverse(), b)
    }
      , FG = (a,b,c)=>{
        for (const d of b)
            if (b = c.g(d.ja),
            AG(a, d, {
                fe: b
            }))
                return !0;
        return !1
    }
    ;
    xG[8] = function(a) {
        var b = a.da().document;
        if ("complete" != b.readyState)
            return b.addEventListener("readystatechange", ()=>xG[8](a), {
                once: !0
            }),
            !0;
        if (!a.l)
            return !1;
        if (!a.Fd())
            return !0;
        b = CG(a);
        b.jf = [2, 4, 5];
        b = BG(a, wC(a.da()), b, 8);
        const c = new nG;
        if (FG(a, b, c))
            return !0;
        if (a.j.ig)
            switch (a.j.Tg || 0) {
            case 1:
                GG(a, c);
                break;
            default:
                EG(a)
            }
        return !0
    }
    ;
    xG[6] = Ha(yG, [2], 6);
    xG[7] = Ha(yG, [1], 7);
    xG[9] = function(a) {
        const b = zG([0, 2], a, 9);
        if (!b || !b.dc)
            return a.A.push(17),
            a.l;
        for (const d of b.dc) {
            var c = a.j.Le || null;
            null == c ? c = null : (c = pB(d.ga, new HG, new IG(c,a.da())),
            c = new PB(c,d.ia(),d.ja));
            if (c && !(oB(c.ga) > b.bd) && AG(a, c, {
                Hd: b.bd,
                te: !0
            }))
                return a = c.ga.X,
                mB(d.ga, 0 < a.length ? a[0] : null),
                !0
        }
        a.A.push(17);
        return a.l
    }
    ;
    class HG {
        i(a, b, c, d) {
            return dw(d.document, a, b)
        }
        j(a) {
            return S(a) || 0
        }
    }
    ;var JG = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.Xc = c
        }
        Ea(a) {
            return this.g ? ZC(this.i, this.g, a, this.Xc) : YC(this.i, a, this.Xc)
        }
        Aa() {
            return this.g ? 16 : 9
        }
    }
    ;
    var KG = class {
        constructor(a) {
            this.ge = a
        }
        Ea(a) {
            return fD(a.document, this.ge)
        }
        Aa() {
            return 11
        }
    }
    ;
    var LG = class {
        constructor(a) {
            this.vb = a
        }
        Ea(a) {
            return cD(this.vb, a)
        }
        Aa() {
            return 13
        }
    }
    ;
    var MG = class {
        Ea(a) {
            return WC(a)
        }
        Aa() {
            return 12
        }
    }
    ;
    var NG = class {
        constructor(a) {
            this.Ac = a
        }
        Ea() {
            return aD(this.Ac)
        }
        Aa() {
            return 2
        }
    }
    ;
    var OG = class {
        constructor(a) {
            this.g = a
        }
        Ea() {
            return dD(this.g)
        }
        Aa() {
            return 3
        }
    }
    ;
    var PG = class {
        Ea() {
            return gD()
        }
        Aa() {
            return 17
        }
    }
    ;
    var QG = class {
        constructor(a) {
            this.g = a
        }
        Ea() {
            return $C(this.g)
        }
        Aa() {
            return 1
        }
    }
    ;
    var RG = class {
        Ea() {
            return Fb(gB)
        }
        Aa() {
            return 7
        }
    }
    ;
    var SG = class {
        constructor(a) {
            this.jf = a
        }
        Ea() {
            return bD(this.jf)
        }
        Aa() {
            return 6
        }
    }
    ;
    var TG = class {
        constructor(a) {
            this.g = a
        }
        Ea() {
            return eD(this.g)
        }
        Aa() {
            return 5
        }
    }
    ;
    var UG = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        Ea() {
            return Ha(hD, this.minWidth, this.maxWidth)
        }
        Aa() {
            return 10
        }
    }
    ;
    var VG = class {
        constructor(a) {
            this.l = a.i.slice(0);
            this.i = a.g.slice(0);
            this.j = a.j;
            this.A = a.l;
            this.g = a.A
        }
    }
    ;
    function WG(a) {
        var b = new XG;
        b.A = a;
        b.i.push(new QG(a));
        return b
    }
    function YG(a, b) {
        a.i.push(new SG(b));
        return a
    }
    function ZG(a, b) {
        a.i.push(new NG(b));
        return a
    }
    function $G(a, b) {
        a.i.push(new TG(b));
        return a
    }
    function aH(a, b) {
        a.i.push(new OG(b));
        return a
    }
    function bH(a) {
        a.i.push(new RG);
        return a
    }
    function cH(a) {
        a.g.push(new MG);
        return a
    }
    function dH(a, b=0, c, d) {
        a.g.push(new JG(b,c,d));
        return a
    }
    function eH(a, b=0, c=Infinity) {
        a.g.push(new UG(b,c));
        return a
    }
    function fH(a) {
        a.g.push(new PG);
        return a
    }
    function gH(a, b=0) {
        a.g.push(new LG(b));
        return a
    }
    function hH(a, b) {
        a.j = b;
        return a
    }
    var XG = class {
        constructor() {
            this.j = 0;
            this.l = !1;
            this.i = [].slice(0);
            this.g = [].slice(0)
        }
        build() {
            return new VG(this)
        }
    }
    ;
    class IG {
        constructor(a, b) {
            this.i = a;
            this.j = b
        }
        g() {
            var a = this.i
              , b = this.j;
            const c = a.F || {};
            c.google_ad_client = a.ee;
            c.google_ad_height = S(b) || 0;
            c.google_ad_width = yo(b) || 0;
            c.google_reactive_ad_format = 9;
            b = new oG;
            b = Zi(b, 1, a.A);
            a.g && H(b, 2, a.g);
            c.google_rasc = fj(b);
            a.j && (c.google_adtest = "on");
            return new Eq(["fsi_container"],c)
        }
    }
    ;var iH = xq(new uq(0,{}))
      , jH = xq(new uq(1,{}))
      , kH = a=>a === iH || a === jH;
    function lH(a, b, c) {
        No(a.g, b) || a.g.set(b, []);
        a.g.get(b).push(c)
    }
    class mH {
        constructor() {
            this.g = new Ro
        }
    }
    ;function nH(a, b) {
        b && (a.g.apv = I(b, 4),
        di(b, ar, 23) && (a.g.sat = "" + Ai(D(b, ar, 23), 1)));
        return a
    }
    function oH(a, b) {
        a.g.afm = b.join(",");
        return a
    }
    var pH = class extends CA {
        constructor(a) {
            super(a);
            this.g = {}
        }
        H(a) {
            this.g.a = a.join(",");
            return this
        }
        G(a) {
            null != a && (this.g.allp = a);
            return this
        }
        ih(a) {
            if (a) {
                const b = [];
                for (const c of Po(a))
                    if (0 < a.get(c).length) {
                        const d = a.get(c)[0];
                        b.push("(" + [c, d.kb, d.sh].join() + ")")
                    }
                this.g.fd = b.join(",")
            }
            return this
        }
        l(a) {
            try {
                this.g.su = a.location.hostname
            } catch (b) {
                this.g.su = "_ex"
            }
            a = super.l(a);
            Zc(a, this.g);
            return a
        }
    }
    ;
    function qH(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    }
    ;function rH(a, b, c, d=30) {
        c.length <= d ? a[b] = sH(c) : (a[b] = sH(c.slice(0, d)),
        a[b + "_c"] = c.length.toString())
    }
    function sH(a) {
        const b = 0 < a.length && "string" === typeof a[0];
        a = a.map(c=>c?.toString() ?? "null");
        b && (a = a.map(c=>ka(c, "replaceAll").call(c, "~", "")));
        return a.join("~")
    }
    function tH(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    }
    ;function uH(a, b) {
        a.i.op = tH(b)
    }
    function vH(a, b, c) {
        rH(a.i, "fap", b);
        a.i.fad = tH(c)
    }
    function wH(a, b, c) {
        rH(a.i, "fmp", b);
        a.i.fmd = tH(c)
    }
    function xH(a, b, c) {
        rH(a.i, "vap", b);
        a.i.vad = tH(c)
    }
    function yH(a, b, c) {
        rH(a.i, "vmp", b);
        a.i.vmd = tH(c)
    }
    function zH(a, b, c) {
        rH(a.i, "pap", b);
        a.i.pad = tH(c)
    }
    function AH(a, b, c) {
        rH(a.i, "pmp", b);
        a.i.pmd = tH(c)
    }
    function BH(a, b) {
        rH(a.i, "psq", b)
    }
    var CH = class extends pH {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.i = {};
            this.errors = []
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            0 < this.errors.length && (a.e = sH(this.errors));
            return a
        }
    }
    ;
    function DH(a, b, c) {
        const d = b.ga;
        No(a.g, d) || a.g.set(d, new EH(mq(NB(b)) ?? ""));
        c(a.g.get(d))
    }
    function FH(a, b) {
        DH(a, b, c=>{
            c.g = !0
        }
        )
    }
    function GH(a, b) {
        DH(a, b, c=>{
            c.i = !0
        }
        )
    }
    function HH(a, b) {
        DH(a, b, c=>{
            c.j = !0
        }
        );
        a.I.push(b.ga)
    }
    function IH(a, b, c) {
        DH(a, b, d=>{
            d.Ub = c
        }
        )
    }
    function JH(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b))
            kH(f.Ub ?? "") ? ++e : (b = a.i.get(f.Ub ?? "", null),
            d.push(b));
        return {
            list: d.sort((f,g)=>(f ?? -1) - (g ?? -1)),
            Vb: e
        }
    }
    function KH(a, b) {
        uH(b, a.i.Ec());
        var c = Qo(a.g).filter(f=>0 === (f.yb.startsWith(iH) ? 0 : 1))
          , d = Qo(a.g).filter(f=>1 === (f.yb.startsWith(iH) ? 0 : 1))
          , e = JH(a, f=>f.g, c);
        vH(b, e.list, e.Vb);
        e = JH(a, f=>f.g, d);
        wH(b, e.list, e.Vb);
        e = JH(a, f=>f.i, c);
        xH(b, e.list, e.Vb);
        e = JH(a, f=>f.i, d);
        yH(b, e.list, e.Vb);
        c = JH(a, f=>f.j, c);
        zH(b, c.list, c.Vb);
        d = JH(a, f=>f.j, d);
        AH(b, d.list, d.Vb);
        BH(b, a.I.map(f=>a.g.get(f)?.Ub).map(f=>a.i.get(f) ?? null))
    }
    function km() {
        var a = w(LH);
        if (!a.A)
            return $l();
        const b = im(hm(gm(fm(em(dm(cm(bm(Zl(Yl(new am, a.A ?? []), a.H ?? []), a.B), a.G), a.D), a.M), a.T), a.C ?? 0), Qo(a.g).map(c=>{
            var d = new Xl;
            d = ej(d, 1, c.yb);
            var e = a.i.get(c.Ub ?? "", -1);
            d = P(d, 2, e);
            d = $i(d, 3, c.g);
            return $i(d, 4, c.i)
        }
        )), a.I.map(c=>a.g.get(c)?.Ub).map(c=>a.i.get(c) ?? -1));
        null != a.j && $i(b, 6, a.j);
        null != a.l && pi(b, 13, rh(a.l), "0");
        return b
    }
    var LH = class {
        constructor() {
            this.l = this.H = this.A = null;
            this.D = this.G = !1;
            this.j = null;
            this.T = this.B = this.M = !1;
            this.C = null;
            this.i = new Ro;
            this.g = new Ro;
            this.I = []
        }
    }
    ;
    class EH {
        constructor(a) {
            this.j = this.i = this.g = !1;
            this.Ub = null;
            this.yb = a
        }
    }
    ;class MH {
        constructor(a=0) {
            this.g = a
        }
    }
    ;class NH {
        constructor(a) {
            this.i = a;
            this.g = -1
        }
    }
    ;function OH(a) {
        let b = 0;
        for (; a; )
            (!b || a.previousElementSibling || a.nextElementSibling) && b++,
            a = a.parentElement;
        return b
    }
    ;function PH(a, b) {
        const c = a.H.filter(d=>Po(d.ld).every(e=>d.ld.get(e) === b.get(e)));
        return 0 === c.length ? (a.i.push(19),
        null) : c.reduce((d,e)=>d.ld.Ec() > e.ld.Ec() ? d : e, c[0])
    }
    function QH(a, b) {
        b = NB(b);
        if (null == b.g)
            return a.i.push(18),
            null;
        b = b.getValue();
        if (No(a.j, b))
            return a.j.get(b);
        var c = vq(b);
        c = PH(a, c);
        a.j.set(b, c);
        return c
    }
    var RH = class {
        constructor(a) {
            this.g = a;
            this.j = new Ro;
            this.H = (D(a, Cr, 2)?.g() || []).map(b=>{
                const c = vq(O(b, 1))
                  , d = Di(b, 2);
                return {
                    ld: c,
                    Xg: d,
                    yb: O(b, 1)
                }
            }
            );
            this.i = []
        }
        D() {
            const a = w(LH);
            var b = this.l();
            a.A = b;
            b = this.B();
            a.H = b;
            b = this.A();
            null != b && (a.l = b);
            b = !!this.g.j()?.g()?.g();
            a.D = b;
            b = new Ro;
            for (const c of D(this.g, Cr, 2)?.g() ?? [])
                b.set(O(c, 1), Di(c, 2));
            a.i = b
        }
        C() {
            return [...this.i]
        }
        l() {
            return [...this.g.g()]
        }
        B() {
            return [...hi(this.g, 4, ph, 2, void 0, void 0, 0)]
        }
        A() {
            return D(this.g, wr, 5)?.g() ?? null
        }
        G(a) {
            const b = QH(this, a);
            null != b?.yb && IH(w(LH), a, b.yb)
        }
        I(a) {
            const b = Vb(Pt) || 0;
            if (0 == a.length || 0 == b)
                return !0;
            const c = (new eq(a)).filter(d=>{
                d = QH(this, d)?.yb || "";
                return "" != d && !(d === iH || d === jH)
            }
            );
            return b <= c.g.length / a.length
        }
    }
    ;
    function SH(a, b) {
        return 0 == b.g.length ? b : b.sort((c,d)=>(QH(a.g, c)?.Xg ?? Number.MAX_VALUE) - (QH(a.g, d)?.Xg ?? Number.MAX_VALUE))
    }
    function TH(a, b) {
        var c = b.ja.g
          , d = Math
          , e = d.min;
        const f = b.ia()
          , g = b.ga.g();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? OH(f.parentElement) : OH(f));
        d = a.j;
        0 > d.g && (d.g = Co(d.i).scrollHeight || 0);
        d = d.g - b.ja.g;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.i;
        b = b.ia();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.g : 0)
    }
    function UH(a, b) {
        return 0 == b.g.length ? b : b.sort((c,d)=>TH(a, c) - TH(a, d))
    }
    function VH(a, b) {
        return b.sort((c,d)=>{
            const e = c.ga.G
              , f = d.ga.G;
            var g;
            null == e || null == f ? g = null == e && null == f ? TH(a, c) - TH(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        }
        )
    }
    class WH {
        constructor(a, b=0, c=null) {
            this.j = new NH(a);
            this.i = new MH(b);
            this.g = c && new RH(c)
        }
    }
    ;function XH(a, b, c=0, d) {
        var e = a.i;
        for (var f of b.l)
            e = dq(e, f.Ea(a.j), YH(f.Aa(), c));
        f = e = e.apply(VC(a.j));
        for (const g of b.i)
            f = dq(f, g.Ea(a.j), rq([ZH(g.Aa(), c), h=>{
                d?.g(h, g.Aa())
            }
            ]));
        switch (b.j) {
        case 1:
            f = UH(a.g, f);
            break;
        case 2:
            f = VH(a.g, f);
            break;
        case 3:
            const g = w(LH);
            f = SH(a.g, f);
            e.forEach(h=>{
                FH(g, h);
                a.g.g?.G(h)
            }
            );
            f.forEach(h=>GH(g, h))
        }
        b.A && (f = gq(f, fe(a.j.location.href + a.j.localStorage.google_experiment_mod)));
        1 === b.g?.length && lH(a.l, b.g[0], {
            kb: e.g.length,
            sh: f.g.length
        });
        return fq(f)
    }
    class $H {
        constructor(a, b, c=0, d=null) {
            this.i = new eq(a);
            this.g = new WH(b,c,d);
            this.j = b;
            this.l = new mH
        }
        A() {
            this.i.forEach(a=>{
                a.i && Nv(a.i);
                a.i = null
            }
            )
        }
    }
    const YH = (a,b)=>c=>lB(c, b, a)
      , ZH = (a,b)=>c=>lB(c.ga, b, a);
    function aI(a, b, c, d) {
        a: {
            switch (b) {
            case 0:
                a = bI(cI(c), a);
                break a;
            case 3:
                a = bI(c, a);
                break a;
            case 2:
                var e = c.lastChild;
                a = bI(e ? 1 == e.nodeType ? e : cI(e) : null, a);
                break a
            }
            a = !1
        }
        if (d = !a && !(!d && 2 == b && !dI(c)))
            b = 1 == b || 2 == b ? c : c.parentNode,
            d = !(b && !Ws(b) && 0 >= b.offsetWidth);
        return d
    }
    function bI(a, b) {
        if (!a)
            return !1;
        a = bf(a, b);
        if (!a)
            return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }
    function cI(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType; )
            a = a.previousSibling;
        return a ? a : null
    }
    function dI(a) {
        return !!a.nextSibling || !!a.parentNode && dI(a.parentNode)
    }
    ;var eI = !Cc && !yc();
    function fI(a) {
        if (/-[a-z]/.test("adFormat"))
            return null;
        if (eI && a.dataset) {
            if (Ac() && !("adFormat"in a.dataset))
                return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    }
    ;var gI = (a,b,c)=>{
        if (!b)
            return null;
        const d = oe(document, "INS");
        d.id = "google_pedestal_container";
        d.style.width = "100%";
        d.style.zIndex = "-1";
        if (c) {
            var e = a.getComputedStyle(c)
              , f = "";
            if (e && "static" != e.position) {
                var g = c.parentNode.lastElementChild;
                for (f = e.position; g && g != c; ) {
                    if ("none" != a.getComputedStyle(g).display) {
                        f = a.getComputedStyle(g).position;
                        break
                    }
                    g = g.previousElementSibling
                }
            }
            if (c = f)
                d.style.position = c
        }
        b.appendChild(d);
        if (d) {
            var h = a.document;
            f = h.createElement("div");
            f.style.width = "100%";
            f.style.height = "2000px";
            c = S(a);
            e = h.body.scrollHeight;
            a = a.innerHeight;
            g = h.body.getBoundingClientRect().bottom;
            d.appendChild(f);
            var k = f.getBoundingClientRect().top;
            h = h.body.getBoundingClientRect().top;
            d.removeChild(f);
            f = e;
            e <= a && 0 < c && 0 < g && (f = g - h);
            a = k - h >= .8 * f
        } else
            a = !1;
        return a ? d : (b.removeChild(d),
        null)
    }
      , hI = a=>{
        const b = a.document.body;
        var c = gI(a, b, null);
        if (c)
            return c;
        if (a.document.body) {
            c = Math.floor(a.document.body.getBoundingClientRect().width);
            for (var d = [{
                element: a.document.body,
                depth: 0,
                height: 0
            }], e = -1, f = null; 0 < d.length; ) {
                const h = d.pop()
                  , k = h.element;
                var g = h.height;
                0 < h.depth && g > e && (e = g,
                f = k);
                if (5 > h.depth)
                    for (g = 0; g < k.children.length; g++) {
                        const l = k.children[g]
                          , m = l.getBoundingClientRect().width;
                        (null == m || null == c ? 0 : m >= .9 * c && m <= 1.01 * c) && d.push({
                            element: l,
                            depth: h.depth + 1,
                            height: l.getBoundingClientRect().height
                        })
                    }
            }
            c = f
        } else
            c = null;
        return c ? gI(a, c.parentNode || b, c) : null
    }
      , jI = a=>{
        let b = 0;
        try {
            b |= wo(a),
            xe() || (b |= 1048576),
            1200 >= Math.floor(a.document.body.getBoundingClientRect().width) || (b |= 32768),
            iI(a) && (b |= 33554432)
        } catch (c) {
            b |= 32
        }
        return b
    }
      , iI = a=>{
        a = a.document.getElementsByClassName("adsbygoogle");
        for (let b = 0; b < a.length; b++)
            if ("autorelaxed" == fI(a[b]))
                return !0;
        return !1
    }
    ;
    function kI(a) {
        const b = Bo(a, !0)
          , c = Co(a).scrollWidth
          , d = Co(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = Go(a);
        const g = [];
        var h = [];
        const k = []
          , l = [];
        var m = []
          , n = []
          , p = [];
        let q = 0
          , v = 0
          , A = Infinity
          , B = Infinity
          , E = null;
        var J = sC({
            Rb: !1
        }, a);
        for (var G of J) {
            J = G.getBoundingClientRect();
            const Ba = b - (J.bottom + f);
            var K = void 0
              , M = void 0;
            if (G.className && nc(G.className, "adsbygoogle-ablated-ad-slot")) {
                K = G.getAttribute("google_element_uid");
                M = a.google_sv_map;
                if (!K || !M || !M[K])
                    continue;
                K = (M = Zk(M[K])) ? M.height : 0;
                M = M ? M.width : 0
            } else if (K = J.bottom - J.top,
            M = J.right - J.left,
            1 >= K || 1 >= M)
                continue;
            g.push(K);
            k.push(M);
            l.push(K * M);
            G.className && nc(G.className, "google-auto-placed") ? (v += 1,
            G.className && nc(G.className, "pedestal_container") && (E = K)) : (A = Math.min(A, Ba),
            n.push(J),
            q += 1,
            h.push(K),
            m.push(K * M));
            B = Math.min(B, Ba);
            p.push(J)
        }
        A = Infinity === A ? null : A;
        B = Infinity === B ? null : B;
        f = lI(n);
        p = lI(p);
        h = mI(b, h);
        n = mI(b, g);
        m = mI(b * c, m);
        G = mI(b * c, l);
        return new nI(a,{
            mi: e,
            Rc: b,
            fj: c,
            ej: d,
            Vi: q,
            Ih: v,
            Kh: oI(g),
            Lh: oI(k),
            Jh: oI(l),
            aj: f,
            Zi: p,
            Yi: A,
            Xi: B,
            Be: h,
            Ae: n,
            Dh: m,
            Ch: G,
            hj: E
        })
    }
    function pI(a, b, c, d) {
        const e = xe() && !(900 <= yo(a.i));
        d = Ta(d, f=>$a(a.j, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.g.mi,
            pg_h: qI(a.g.Rc),
            pg_w: qI(a.g.fj),
            pg_hs: qI(a.g.ej),
            c: qI(a.g.Vi),
            aa_c: qI(a.g.Ih),
            av_h: qI(a.g.Kh),
            av_w: qI(a.g.Lh),
            av_a: qI(a.g.Jh),
            s: qI(a.g.aj),
            all_s: qI(a.g.Zi),
            b: qI(a.g.Yi),
            all_b: qI(a.g.Xi),
            d: qI(a.g.Be),
            all_d: qI(a.g.Ae),
            ard: qI(a.g.Dh),
            all_ard: qI(a.g.Ch),
            pd_h: qI(a.g.hj),
            dt: e ? "m" : "d"
        }
    }
    class nI {
        constructor(a, b) {
            this.i = a;
            this.g = b;
            this.j = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }
    function oI(a) {
        return $d.apply(null, Ta(a, b=>0 < b)) || null
    }
    function mI(a, b) {
        return 0 >= a ? null : Zd.apply(null, b) / a
    }
    function lI(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e]
                  , d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }
    function qI(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    }
    ;function rI(a, b) {
        b = (S(b) || 0) - Go(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            AC(e) && e.top <= b && (c += 1)
        }
        return c
    }
    function sI(a) {
        const b = {};
        var c = uC({
            Rb: !1,
            zd: !1,
            Ad: !1,
            Bd: !1
        }, a).map(d=>d.getBoundingClientRect()).filter(AC);
        b.Hf = c.length;
        c = vC({
            Ad: !0
        }, a).map(d=>d.getBoundingClientRect()).filter(AC);
        b.hg = c.length;
        c = vC({
            Bd: !0
        }, a).map(d=>d.getBoundingClientRect()).filter(AC);
        b.Lg = c.length;
        c = vC({
            zd: !0
        }, a).map(d=>d.getBoundingClientRect()).filter(AC);
        b.Mf = c.length;
        c = (S(a) || 0) - Go(a);
        c = uC({
            Rb: !1
        }, a).map(d=>d.getBoundingClientRect()).filter(AC).filter(Ga(tI, null, c));
        b.If = c.length;
        a = kI(a);
        c = null != a.g.Be ? a.g.Be : null;
        null != c && (b.Cg = c);
        a = null != a.g.Ae ? a.g.Ae : null;
        null != a && (b.Jf = a);
        return b
    }
    function AG(a, b, {Hd: c, fe: d, te: e}={}) {
        return lw(997, ()=>uI(a, b, {
            Hd: c,
            fe: d,
            te: e
        }), a.g)
    }
    function BG(a, b, c, d) {
        var e = c.Db ? c.Db : a.C;
        const f = gC(e, b.g.length);
        e = a.j.Kf ? e.g : void 0;
        const g = fH(gH(cH(eH(dH(bH($G(aH(YG(ZG(WG(c.types), a.ea), c.jf || []), a.X), c.uj || [])), f.Qc || void 0, e, b), c.minWidth, c.maxWidth)), f.vb || void 0));
        a.T && g.g.push(new KG(a.T));
        b = 1;
        a.j.Af ? b = 2 : a.Ya() && (b = 3);
        hH(g, b);
        a.j.qf && (g.l = !0);
        return lw(995, ()=>XH(a.i, g.build(), d, a.B || void 0), a.g)
    }
    function DG(a, b) {
        const c = hI(a.g);
        if (c) {
            const d = Dq(a.I, b)
              , e = aw(a.g.document, a.G, null, null, {}, d);
            e && (Qv(e.ob, c, 2, 256),
            lw(996, ()=>vI(a, e, d), a.g))
        }
    }
    function wI(a) {
        return a.D ? a.D : a.D = a.g.google_ama_state
    }
    function uI(a, b, {Hd: c, fe: d, te: e}={}) {
        const f = b.ga;
        if (f.A)
            return !1;
        var g = b.ia()
          , h = f.g();
        if (!aI(a.g, h, g, a.l))
            return !1;
        h = null;
        f.Kc?.includes(6) ? (h = Math.round(g.getBoundingClientRect().height),
        h = new Eq(null,{
            google_max_responsive_height: null == c ? h : Math.min(c, h),
            google_full_width_responsive: "false"
        })) : h = null == c ? null : new Eq(null,{
            google_max_responsive_height: c
        });
        c = Fq(L(f.Xd, 2) || 0);
        g = Gq(f.G);
        const k = xI(a, f)
          , l = yI(a)
          , m = Dq(a.I, f.T ? f.T.g(b.ja) : null, h, d || null, c, g, k, l)
          , n = b.fill(a.G, m);
        if (e && !zI(a, n, m) || !lw(996, ()=>vI(a, n, m), a.g))
            return !1;
        lk(9, [f.G, f.Sb]);
        a.Ya() && HH(w(LH), b);
        return !0
    }
    function xI(a, b) {
        return mq(oq(LB(b).map(Hq), ()=>{
            a.A.push(18)
        }
        ))
    }
    function yI(a) {
        if (!a.Ya())
            return null;
        var b = a.i.g.g?.B();
        if (null == b)
            return null;
        b = b.join("~");
        a = a.i.g.g?.A() ?? null;
        return Iq({
            fi: b,
            ui: a
        })
    }
    function zI(a, b, c) {
        if (!b)
            return !1;
        var d = b.ya
          , e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.g;
        e = b.ya;
        c = c && c.Gc() || {};
        if (d !== d.top)
            var g = Ze(d) ? 3 : 16;
        else if (488 > yo(d))
            if (d.innerHeight >= d.innerWidth)
                if (g = yo(d),
                !g || .3 < (g - f) / g)
                    g = 6;
                else {
                    if (g = "true" !== c.google_full_width_responsive)
                        b: {
                            var h = e.parentElement;
                            for (g = yo(d); h; h = h.parentElement) {
                                const k = bf(h, d);
                                if (!k)
                                    continue;
                                const l = mf(k.width);
                                if (l && !(l >= g) && "visible" !== k.overflow) {
                                    g = !0;
                                    break b
                                }
                            }
                            g = !1
                        }
                    g = g ? 7 : !0
                }
            else
                g = 5;
        else
            g = 4;
        if (!0 !== g)
            f = g;
        else {
            if (!(c = "true" === c.google_full_width_responsive))
                a: {
                    do
                        if ((c = bf(e, d)) && "fixed" == c.position) {
                            c = !1;
                            break a
                        }
                    while (e = e.parentElement);
                    c = !0
                }
            c ? (d = yo(d),
            f = d - f,
            f = d && 0 <= f ? !0 : d ? -10 > f ? 11 : 0 > f ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.g;
            b = b.ya;
            if (d = Xv(a, b))
                f = b.style,
                f.border = f.borderStyle = f.outline = f.outlineStyle = f.transition = "none",
                f.borderSpacing = f.padding = "0",
                Vv(b, d, "0px"),
                f.width = `${yo(a)}px`,
                Yv(a, b, d),
                f.zIndex = "30";
            return !0
        }
        Nv(b.ob);
        return !1
    }
    function vI(a, b, c) {
        if (!b)
            return !1;
        try {
            ew(a.g, b.ya, c)
        } catch (d) {
            return Nv(b.ob),
            a.A.push(6),
            !1
        }
        return !0
    }
    class AI {
        constructor(a, b, c, d, e={}, f=[], g=!1) {
            this.i = a;
            this.G = b;
            this.g = c;
            this.C = d.Db;
            this.ea = d.Ac || [];
            this.I = d.vi || null;
            this.X = d.ii || [];
            this.T = d.ge || [];
            this.j = e;
            this.l = !1;
            this.M = [];
            this.A = [];
            this.H = this.D = void 0;
            this.Ga = f;
            this.B = g ? new lG : null
        }
        xa() {
            return this.i
        }
        da() {
            return this.g
        }
        za(a) {
            this.M.push(a)
        }
        Ya() {
            if (0 == (this.i.g.g?.l().length ?? 0))
                return !1;
            if (0 == (Vb(Pt) || 0))
                return !0;
            if (void 0 === this.H) {
                const a = hH(cH(bH(WG([0, 1, 2]))), 1).build()
                  , b = lw(995, ()=>XH(this.i, a), this.g);
                this.H = this.i.g.g?.I(b) || !1
            }
            return this.H
        }
        Te() {
            return !!this.j.eh
        }
        Fd() {
            return !iI(this.g)
        }
        pa() {
            return this.B
        }
    }
    const tI = (a,b)=>b.top <= a;
    function BI(a, b, c, d, e, f=0, g=0) {
        this.Ra = a;
        this.Sd = f;
        this.Rd = g;
        this.errors = b;
        this.Ab = c;
        this.g = d;
        this.i = e
    }
    ;var CI = (a,{Fd: b=!1, Te: c=!1, xj: d=!1, Ya: e=!1}={})=>{
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2) && !x(mt);
            const g = a.includes(1);
            (d || e || g) && f.push(10)
        } else
            a.includes(3) && f.push(6),
            a.includes(4) && !c && b && f.push(8),
            a.includes(1) && f.push(1, 5),
            a.includes(2) && !x(mt) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    }
    ;
    function DI(a, b, c) {
        a = CI(a, {
            Fd: b.Fd(),
            Te: b.Te(),
            xj: !!b.j.Le,
            Ya: b.Ya()
        });
        return new EI(a,b,c)
    }
    function FI(a, b) {
        const c = xG[b];
        return c ? lw(998, ()=>c(a.g), a.A) : (a.g.za(12),
        !0)
    }
    function GI(a, b) {
        return new Promise(c=>{
            setTimeout(()=>{
                c(FI(a, b))
            }
            )
        }
        )
    }
    function HI(a) {
        a.g.l = !0;
        return Promise.all(a.i.map(b=>GI(a, b))).then(b=>{
            b.includes(!1) && a.g.za(5);
            a.i.splice(0, a.i.length)
        }
        )
    }
    class EI {
        constructor(a, b, c) {
            this.l = a.slice(0);
            this.i = a.slice(0);
            this.j = ab(this.i, 1);
            this.g = b;
            this.A = c
        }
    }
    ;const II = class {
        constructor(a) {
            this.g = a;
            this.exception = void 0
        }
    }
    ;
    function JI(a) {
        return HI(a).then(()=>{
            var b = a.g.i.i.filter(gB).g.length;
            var c = a.g.M.slice(0);
            var d = a.g;
            d = [...d.A, ...(d.i.g.g?.C() || [])];
            b = new BI(b,c,d,a.g.i.i.g.length,a.g.i.l.g,a.g.i.i.filter(gB).filter(hB).g.length,a.g.i.i.filter(hB).g.length);
            return new II(b)
        }
        )
    }
    ;var KI = a=>{
        let b = 0;
        a.forEach(c=>b = Math.max(b, c.getBoundingClientRect().width));
        return c=>c.getBoundingClientRect().width > .5 * b
    }
      , LI = a=>{
        const b = S(a) || 0;
        return c=>c.getBoundingClientRect().height >= .75 * b
    }
    ;
    var MI = (a,b)=>{
        b = GB(b, a);
        const c = b.map(d=>d.g);
        b = b.filter(d=>{
            d = d.g.getBoundingClientRect();
            return 0 < d.width && 0 < d.height
        }
        ).filter(d=>KI(c)(d.g)).filter(d=>LI(a)(d.g));
        b.sort((d,e)=>{
            e = e.g;
            return d.g.getBoundingClientRect().top - e.getBoundingClientRect().top
        }
        );
        return b
    }
    ;
    function NI(a) {
        return a.reduce((b,c)=>b.g.getBoundingClientRect().bottom < c.g.getBoundingClientRect().bottom ? c : b)
    }
    function OI(a, b, c, d) {
        let e = !1;
        const f = new IntersectionObserver(g=>{
            for (const h of g)
                if (h.isIntersecting)
                    e = !0;
                else {
                    if (g = e)
                        g = a,
                        g = b.getBoundingClientRect().bottom <= S(g.win) / 2;
                    g && (PI(a.ba, {
                        typ: "cee",
                        cet: c
                    }),
                    e = !1)
                }
        }
        ,{
            rootMargin: d
        });
        f.observe(b);
        ap(a, ()=>{
            f.disconnect()
        }
        )
    }
    var QI = class extends T {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.g = b;
            this.ba = c
        }
    }
    ;
    function RI(a, b) {
        PI(a, {
            typ: "cdr",
            af: b.pe,
            ...(0 < b.pe ? {
                vh: b.U,
                ph: b.Rc,
                ah: b.Eh,
                at: b.Gh
            } : {})
        })
    }
    function PI(a, b) {
        a = {
            ...b,
            wpc: a.webPropertyCode,
            cor: a.g,
            tim: Math.round(gl() ?? -1),
            num: a.i++
        };
        IA("ama_vignette", a, 1)
    }
    var SI = class {
        constructor(a) {
            var b = Ef();
            this.webPropertyCode = a;
            this.g = b;
            this.i = 0
        }
    }
    ;
    class TI {
        g() {
            return new Eq([],{
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    }
    ;class UI {
        g() {
            return new Eq(["adsbygoogle-resurrected-ad-slot"],{})
        }
    }
    ;function VI(a) {
        return Xs(a.g.document).map(b=>{
            const c = new $A(b,3);
            b = new bB(gw(a.g, b));
            return new fB(c,b,a.i,!1,0,[],null,a.g,null)
        }
        )
    }
    class WI {
        constructor(a) {
            var b = new UI;
            this.g = a;
            this.i = b || null
        }
    }
    ;const XI = {
        xf: "10px",
        re: "10px"
    };
    function YI(a) {
        return Mo(a.g.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b=>new fB(new $A(b,1),new YA(XI),a.i,!1,0,[],null,a.g,null))
    }
    class ZI {
        constructor(a, b) {
            this.g = a;
            this.i = b || null
        }
    }
    ;function $I(a, b) {
        const c = [];
        b.forEach((d,e)=>{
            c.push(ka(e, "replaceAll").call(e, "~", "_") + "--" + d.map(f=>Number(f)).join("_"))
        }
        );
        rH(a.i, "cnstr", c, 80)
    }
    var aJ = class extends CA {
        constructor() {
            super(-1);
            this.i = {}
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            return a
        }
    }
    ;
    function bJ(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }
    function cJ(a, b, c) {
        const d = bJ(c.rd, "gapsMeasurementWindow") || bJ(c.Dc, "gapsPerMeasurementWindow") || bJ(c.Nc, "maxGapsToReport");
        return null != d ? kq(Error(d)) : c.Lf || -1 != c.Dc || -1 != c.Nc ? iq(new dJ(a,b,c)) : kq(Error("ShouldHaveLimits"))
    }
    function eJ(a) {
        return wI(a.j) && wI(a.j).placed || []
    }
    function fJ(a) {
        return eJ(a).map(b=>Wp(Up(b.element, a.g)))
    }
    function gJ(a) {
        return eJ(a).map(b=>b.index)
    }
    function hJ(a, b) {
        const c = b.ga;
        return !a.B && c.l && null != L(c.l, 8) && 1 == L(c.l, 8) ? [] : c.A ? (c.X || []).map(d=>Wp(Up(d, a.g))) : [Wp(new Vp(b.ja.g,0))]
    }
    function iJ(a) {
        a.sort((e,f)=>e.g - f.g);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.g;
            d = d.g + d.i;
            f <= c ? c = Math.max(c, d) : (b.push(new Vp(c,f - c)),
            c = d)
        }
        return b
    }
    function jJ(a, b) {
        b = b.map(c=>{
            var d = new dG;
            d = aj(d, 1, c.g);
            c = c.getHeight();
            return aj(d, 2, c)
        }
        );
        return fG(eG(new gG, a), b)
    }
    function kJ(a) {
        const b = F(a, dG, 2).map(c=>`G${Ci(c, 1)}~${c.getHeight()}`);
        return `W${Ci(a, 1)}${b.join("")}`
    }
    function lJ(a, b) {
        const c = [];
        let d = 0;
        for (const e of Po(b)) {
            const f = b.get(e);
            f.sort((g,h)=>h.getHeight() - g.getHeight());
            a.D || f.splice(a.A, f.length);
            !a.C && d + f.length > a.i && f.splice(a.i - d, f.length);
            c.push(jJ(e, f));
            d += f.length;
            if (!a.C && d >= a.i)
                break
        }
        return c
    }
    function mJ(a) {
        const b = F(a, gG, 5).map(c=>kJ(c));
        return `M${Ci(a, 1)}H${Ci(a, 2)}C${Ci(a, 3)}B${Number(!!N(a, 4))}${b.join("")}`
    }
    function nJ(a) {
        var b = QB(fq(a.j.i.i), a.g)
          , c = fJ(a)
          , d = new So(gJ(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = hJ(a, b[e]);
                c.push(...f)
            }
        c.push(new Vp(0,0));
        c.push(Wp(new Vp(Co(a.g).scrollHeight,0)));
        b = iJ(c);
        c = new Ro;
        for (d = 0; d < b.length; ++d)
            e = b[d],
            f = a.G ? 0 : Math.floor(e.g / a.l),
            No(c, f) || c.set(f, []),
            c.get(f).push(e);
        b = lJ(a, c);
        c = new hG;
        c = aj(c, 1, a.i);
        c = aj(c, 2, a.l);
        c = aj(c, 3, a.A);
        a = Zi(c, 4, a.B);
        return xi(a, 5, b)
    }
    function oJ(a) {
        a = nJ(a);
        return mJ(a)
    }
    var dJ = class {
        constructor(a, b, c) {
            this.G = -1 == c.rd;
            this.l = c.rd;
            this.D = -1 == c.Dc;
            this.A = c.Dc;
            this.C = -1 == c.Nc;
            this.i = c.Nc;
            this.B = c.ug;
            this.j = b;
            this.g = a
        }
    }
    ;
    const pJ = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    function qJ(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        IA("ama", b, .01)
    }
    function rJ(a) {
        const b = {};
        df(pJ, (c,d)=>{
            d in a && (b[d] = a[d])
        }
        );
        return b
    }
    ;function sJ(a) {
        const b = /[a-zA-Z0-9._~-]/
          , c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, d=>{
            if (!d.match(c)) {
                const e = decodeURIComponent(d);
                if (e.match(b))
                    return e
            }
            return d.toUpperCase()
        }
        )
    }
    function tJ(a) {
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    }
    ;function uJ(a, b) {
        a = hi(a, 2, eh, 2);
        if (!a)
            return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b)
                return !0;
        return !1
    }
    function vJ(a, b) {
        a = tJ(sJ(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = ff(a)
          , d = wJ(a);
        return b.find(e=>{
            const f = di(e, Sq, 7) ? ih($h(D(e, Sq, 7), 1)) : ih($h(e, 1));
            e = di(e, Sq, 7) ? L(D(e, Sq, 7), 2) : 2;
            if ("number" !== typeof f)
                return !1;
            switch (e) {
            case 1:
                return f == c;
            case 2:
                return d[f] || !1
            }
            return !1
        }
        ) || null
    }
    function wJ(a) {
        const b = {};
        for (; ; ) {
            b[ff(a)] = !0;
            if (!a)
                return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    }
    ;var yJ = a=>{
        try {
            xJ(a, a.localStorage)
        } catch (b) {
            qJ(a, {
                lserr: 1
            })
        }
    }
      , xJ = (a,b)=>{
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            qJ(a, {
                lserr: 1
            })
        }
    }
    ;
    function zJ(a) {
        if (x(nt))
            var b = null;
        else
            try {
                b = a.getItem("google_ama_config")
            } catch (d) {
                b = null
            }
        try {
            var c = b ? Hr(b) : null
        } catch (d) {
            c = null
        }
        return c
    }
    ;function AJ(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }
    function BJ(a, b) {
        a = AJ(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    }
    ;function CJ(a) {
        let b = a.location.href;
        if (a === a.top)
            return {
                url: b,
                Ue: !0
            };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer,
        a.parent === a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 === b.indexOf(a) && (c = !1,
        b = a);
        return {
            url: b,
            Ue: c
        }
    }
    ;function DJ(a, b) {
        df(a, (c,d)=>{
            b[d] = c
        }
        )
    }
    function EJ(a) {
        if (a === a.top)
            return 0;
        for (let b = a; b && b !== b.top && We(b); b = b.parent) {
            if (a.sf_)
                return 2;
            if (a.$sf)
                return 3;
            if (a.inGptIF)
                return 4;
            if (a.inDapIF)
                return 5
        }
        return 1
    }
    ;function FJ() {
        if (GJ)
            return GJ;
        const a = yk() || window
          , b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? GJ = b : a.google_persistent_state_async = GJ = new HJ
    }
    function IJ(a, b, c) {
        b = JJ[b] || `google_ps_${b}`;
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(),
        a[b]) : d
    }
    function Z(a, b, c) {
        return IJ(a, b, ()=>c)
    }
    function KJ(a, b, c) {
        return a.S[JJ[b] || `google_ps_${b}`] = c
    }
    function LJ(a, b) {
        return KJ(a, b, Z(a, b, 0) + 1)
    }
    function MJ() {
        var a = FJ();
        return Z(a, 20, {})
    }
    function NJ() {
        var a = FJ();
        const b = Z(a, 31, !1);
        b || KJ(a, 31, !0);
        return !b
    }
    function OJ() {
        var a = FJ();
        return Z(a, 26)
    }
    function PJ() {
        var a = FJ();
        return Z(a, 28, [])
    }
    function QJ() {
        var a = FJ();
        return IJ(a, 39, RJ)
    }
    var HJ = class {
        constructor() {
            this.S = {}
        }
    }
      , GJ = null;
    const JJ = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };
    var SJ = {
        google_ad_block: "ad_block",
        google_ad_client: "client",
        google_ad_output: "output",
        google_ad_callback: "callback",
        google_ad_height: "h",
        google_ad_resize: "twa",
        google_ad_slot: "slotname",
        google_ad_unit_key: "adk",
        google_ad_dom_fingerprint: "adf",
        google_placement_id: "pi",
        google_daaos_ts: "daaos",
        google_erank: "epr",
        google_ad_width: "w",
        google_captcha_token: "captok",
        google_content_recommendation_columns_num: "cr_col",
        google_content_recommendation_rows_num: "cr_row",
        google_ctr_threshold: "ctr_t",
        google_cust_criteria: "cust_params",
        gfwrnwer: "fwrn",
        gfwrnher: "fwrnh",
        google_image_size: "image_size",
        google_last_modified_time: "lmt",
        google_loeid: "loeid",
        google_max_num_ads: "num_ads",
        google_max_radlink_len: "max_radlink_len",
        google_mtl: "mtl",
        google_native_settings_key: "nsk",
        google_enable_content_recommendations: "ecr",
        google_num_radlinks: "num_radlinks",
        google_num_radlinks_per_unit: "num_radlinks_per_unit",
        google_pucrd: "pucrd",
        google_reactive_plaf: "plaf",
        google_reactive_plat: "plat",
        google_reactive_fba: "fba",
        google_reactive_sra_channels: "plach",
        google_responsive_auto_format: "rafmt",
        armr: "armr",
        google_plas: "plas",
        google_rl_dest_url: "rl_dest_url",
        google_rl_filtering: "rl_filtering",
        google_rl_mode: "rl_mode",
        google_rt: "rt",
        google_video_play_muted: "vpmute",
        google_source_type: "src_type",
        google_restrict_data_processing: "rdp",
        google_tag_for_child_directed_treatment: "tfcd",
        google_tag_for_under_age_of_consent: "tfua",
        google_tag_origin: "to",
        google_ad_semantic_area: "sem",
        google_tfs: "tfs",
        google_package: "pwprc",
        google_tag_partner: "tp",
        fra: "fpla",
        google_ml_rank: "mlr",
        google_apsail: "psa",
        google_ad_channel: "channel",
        google_ad_type: "ad_type",
        google_ad_format: "format",
        google_color_bg: "color_bg",
        google_color_border: "color_border",
        google_color_link: "color_link",
        google_color_text: "color_text",
        google_color_url: "color_url",
        google_page_url: "url",
        google_ad_section: "region",
        google_cpm: "cpm",
        google_encoding: "oe",
        google_safe: "adsafe",
        google_font_face: "f",
        google_font_size: "fs",
        google_hints: "hints",
        google_ad_host: "host",
        google_ad_host_channel: "h_ch",
        google_ad_host_tier_id: "ht_id",
        google_kw_type: "kw_type",
        google_kw: "kw",
        google_contents: "contents",
        google_targeting: "targeting",
        google_adtest: "adtest",
        google_alternate_color: "alt_color",
        google_alternate_ad_url: "alternate_ad_url",
        google_cust_age: "cust_age",
        google_cust_ch: "cust_ch",
        google_cust_gender: "cust_gender",
        google_cust_interests: "cust_interests",
        google_cust_job: "cust_job",
        google_cust_l: "cust_l",
        google_cust_lh: "cust_lh",
        google_cust_u_url: "cust_u_url",
        google_cust_id: "cust_id",
        google_language: "hl",
        google_city: "gcs",
        google_country: "gl",
        google_region: "gr",
        google_content_recommendation_ad_positions: "ad_pos",
        google_content_recommendation_columns_num: "cr_col",
        google_content_recommendation_rows_num: "cr_row",
        google_content_recommendation_ui_type: "crui",
        google_content_recommendation_use_square_imgs: "cr_sq_img",
        google_color_line: "color_line",
        google_disable_video_autoplay: "disable_video_autoplay",
        google_full_width_responsive_allowed: "fwr",
        google_full_width_responsive: "fwrattr",
        efwr: "efwr",
        google_pgb_reactive: "pra",
        rc: "rc",
        google_resizing_allowed: "rs",
        google_resizing_height: "rh",
        google_resizing_width: "rw",
        rpe: "rpe",
        google_responsive_formats: "resp_fmts",
        google_safe_for_responsive_override: "sfro",
        google_video_doc_id: "video_doc_id",
        google_video_product_type: "video_product_type",
        google_webgl_support: "wgl",
        easpi: "easpi",
        asro: "asro",
        sugawps: "aseaascu",
        asla: "aslmt",
        asaa: "asamt",
        seiel: "aseiel",
        slmct: "aslmct",
        samct: "asamct",
        vmsli: "itsi"
    }
      , TJ = a=>(a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
      , UJ = a=>{
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"),
            (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1]))
                return a[1];
        return null
    }
      , VJ = a=>{
        switch (a) {
        case "true":
            return !0;
        case "false":
            return !1;
        case "null":
            return null;
        case "undefined":
            break;
        default:
            try {
                const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                if (b)
                    return b[1] || b[2] || "";
                if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                    const c = parseFloat(a);
                    return c === c ? c : void 0
                }
            } catch (b) {}
        }
    }
    ;
    function $n(a, b) {
        0 < a.g.size || WJ(a);
        const c = a.g.get(0);
        c ? c.push(b) : a.g.set(0, [b])
    }
    function XJ(a, b, c, d) {
        Ob(b, c, d);
        ap(a, ()=>Rb(b, c, d))
    }
    function YJ(a, b) {
        1 !== a.j && (a.j = 1,
        0 < a.g.size && ZJ(a, b))
    }
    function WJ(a) {
        a.win.document.visibilityState ? XJ(a, a.win.document, "visibilitychange", b=>{
            "hidden" === a.win.document.visibilityState && YJ(a, b);
            "visible" === a.win.document.visibilityState && (a.j = 0)
        }
        ) : "onpagehide"in a.win ? (XJ(a, a.win, "pagehide", b=>{
            YJ(a, b)
        }
        ),
        XJ(a, a.win, "pageshow", ()=>{
            a.j = 0
        }
        )) : XJ(a, a.win, "beforeunload", b=>{
            YJ(a, b)
        }
        )
    }
    function ZJ(a, b) {
        for (let c = 9; 0 <= c; c--)
            a.g.get(c)?.forEach(d=>{
                d(b)
            }
            )
    }
    var $J = class extends T {
        constructor(a) {
            super();
            this.win = a;
            this.j = 0;
            this.g = new Map
        }
    }
    ;
    async function aK(a, b) {
        var c = 10;
        return 0 >= c ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d,e)=>{
            const f = a.setInterval(()=>{
                --c ? b() && (a.clearInterval(f),
                d()) : (a.clearInterval(f),
                e(Error(`wfc timed out ${c}`)))
            }
            , 200)
        }
        )
    }
    ;function bK(a) {
        const b = a.g.pc;
        return null !== b && 0 !== b ? b : a.g.pc = Ff(a.win)
    }
    function cK(a) {
        var b = a.g.wpc;
        if (null === b || "" === b) {
            b = a.g;
            var c = a.win;
            if (c.google_ad_client)
                a = String(c.google_ad_client);
            else {
                if (null == (a = AJ(c).head_tag_slot_vars?.google_ad_client ?? c.document.querySelector(".adsbygoogle[data-ad-client]")?.getAttribute("data-ad-client"))) {
                    b: {
                        a = c.document.getElementsByTagName("script");
                        c = c.navigator && c.navigator.userAgent || "";
                        c = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(c) || /i(phone|pad|pod)/i.test(c) && /applewebkit/i.test(c) && !/version|safari/i.test(c) && !Xk() ? TJ : UJ;
                        for (var d = a.length - 1; 0 <= d; d--) {
                            var e = a[d];
                            if (!e.google_parsed_script_for_pub_code && (e.google_parsed_script_for_pub_code = !0,
                            e = c(e))) {
                                a = e;
                                break b
                            }
                        }
                        a = null
                    }
                    if (a) {
                        c = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                        for (d = {}; e = c.exec(a); )
                            d[e[1]] = VJ(e[2]);
                        a = d;
                        a = a.google_ad_client ? a.google_ad_client : ""
                    } else
                        a = ""
                }
                a = a ?? ""
            }
            b = b.wpc = a
        }
        return b
    }
    function dK(a, b) {
        var c = new Mn
          , d = bK(a);
        c = P(c, 1, d).kc(cK(a));
        c = P(c, 3, a.g.sd);
        return P(c, 7, Math.round(b || a.win.performance.now()))
    }
    async function eK(a) {
        await aK(a.win, ()=>!(!bK(a) || !cK(a)))
    }
    function fK() {
        var a = w(gK);
        a.i && (a.g.tar += 1)
    }
    function hK(a) {
        var b = w(gK);
        if (b.i) {
            var c = b.l;
            a(c);
            b.g.cc = c.toJSON()
        }
    }
    async function iK(a, b, c) {
        if (a.i && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.win.performance.now();
            await eK(a);
            var e = a.wa;
            a = dK(a, d);
            d = new ym;
            b = Q(d, 1, b);
            c = oi(b, 2, c, fh);
            c = wi(a, 9, Nn, c);
            Wn(e, c)
        }
    }
    async function jK(a, b) {
        await eK(a);
        var c = dK(a);
        b = wi(c, 5, Nn, b);
        a.i && !a.g.le.includes(2) && (a.g.le.push(2),
        Wn(a.wa, b))
    }
    async function kK(a, b, c) {
        await eK(a);
        var d = a.wa;
        a = dK(a, c);
        a = P(a, 3, 1);
        b = wi(a, 6, Nn, b);
        Wn(d, b)
    }
    async function lK(a, b) {
        if (a.i) {
            await eK(a);
            var c = a.wa;
            a = dK(a);
            b = wi(a, 11, Nn, b);
            Wn(c, b)
        }
    }
    var gK = class {
        constructor(a, b) {
            this.win = yk() || window;
            this.j = b ?? new $J(this.win);
            this.wa = a ?? new bo("m202402200101",100,100,!0,this.j);
            this.g = IJ(FJ(), 33, ()=>{
                const c = Vb(ct);
                return {
                    sd: c,
                    ssp: 0 < c && cf() < 1 / c,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null,
                    tar: 0,
                    cc: null
                }
            }
            )
        }
        get i() {
            return this.g.ssp
        }
        get kd() {
            return this.g.cu
        }
        set kd(a) {
            this.g.cu = a
        }
        get l() {
            return GA(1227, ()=>gj(zm, Vh(this.g.cc || []))) || new zm
        }
    }
    ;
    var nK = (a,b,c,d,e,f=null,g=null)=>{
        mK(a, new MA(a), b, c, d, e, f, g)
    }
      , mK = (a,b,c,d,e,f,g=null,h=null)=>{
        if (c)
            if (d) {
                var k = CD(d, e);
                try {
                    const l = new oK(a,b,c,d,e,k,f,g,h);
                    lw(990, ()=>pK(l), a)
                } catch (l) {
                    kk() && lk(15, [l]),
                    LA(b, Nr, BA(oH(nH((new pH(0)).kc(c), d), k).za(1), l)),
                    jK(w(gK), om(new xm, Il(1)))
                }
            } else
                LA(b, Nr, (new pH(0)).kc(c).za(8)),
                jK(w(gK), om(new xm, Il(8)));
        else
            LA(b, Nr, (new pH(0)).za(9)),
            jK(w(gK), om(new xm, Il(9)))
    }
    ;
    function pK(a) {
        a.D.forEach(b=>{
            switch (b) {
            case 0:
                lw(991, ()=>qK(a), a.g);
                break;
            case 1:
                lw(1073, ()=>{
                    const c = x(It);
                    vD(new BD(a.g,a.B,a.i,a.A,a.j.aa,c))
                }
                , a.g);
                break;
            case 5:
                lw(1137, ()=>{
                    OA(new PA(a.g,a.B,a.i,a.A))
                }
                , a.g);
                break;
            case 2:
                rK(a);
                break;
            case 6:
                a.runAutoGames();
                break;
            case 7:
                lw(1203, ()=>{
                    var c = D(a.i, vr, 34);
                    if (c) {
                        var d = a.g
                          , e = a.A
                          , f = c.i();
                        c = d.location.hostname;
                        var g = D(f, ur, 1)?.g() ?? [];
                        c = new bG(e,c,Ff(r),g);
                        if (g = D(f, ur, 1))
                            if (f = D(f, tr, 2)) {
                                Yp(d, JF);
                                const l = new Xo;
                                var h = d.innerWidth;
                                var k = .375 * h;
                                h = new az(k,h - k);
                                k = d.innerWidth;
                                k = 900 <= yo(d) ? .2 * k : .5 * k;
                                VF(new XF(d,e,g,f,new CF(d,h,k,l,new mF(l)),c))
                            } else
                                c.reportError("No messages");
                        else
                            c.reportError("No settings")
                    }
                }
                , a.g)
            }
        }
        )
    }
    function qK(a) {
        if (Er(a.i) && 1 === L(Er(a.i), 1)) {
            var b = D(Er(a.i), Jq, 6);
            b && 2 === L(b, 1) && (fw(a.g),
            a.C = "b")
        }
        var c = x(ot) ? void 0 : a.j.lj;
        b = null;
        b = x(ot) ? fC(a.g) : dC(a.g, c);
        if (a.j.aa && di(a.j.aa, Rq, 10)) {
            var d = fi(a.j.aa.g(), 1);
            null !== d && void 0 !== d && (b = VB(a.g, d, c));
            x(Gt) && 2 === a.j.aa.g()?.g() && (b = cC(a.j.aa.g(), b))
        }
        di(a.i, Oq, 26) && (b = hC(b, D(a.i, Oq, 26), a.g));
        b = jC(b, a.g);
        c = a.j.aa ? hi(a.j.aa, 6, eh, 2) : [];
        d = a.j.aa ? F(a.j.aa, Xq, 5) : [];
        const e = a.j.aa ? hi(a.j.aa, 2, eh, 2) : []
          , f = lw(993, ()=>{
            var g = a.i
              , h = F(g, rr, 1)
              , k = a.j.aa && uJ(a.j.aa, 1);
            k = x(Nt) ? "" : k ? "text_image" : "text";
            var l = new TI
              , m = eB(h, a.g, {
                Mh: l,
                Ni: new cB(k)
            });
            h.length != m.length && a.H.push(13);
            m = m.concat(YI(new ZI(a.g,l)));
            h = 0;
            l = x(Dt);
            var n = !1;
            if (Er(g) && 1 === L(Er(g), 1)) {
                var p = D(Er(g), Jq, 6);
                p && (h = zi(p, 2) || 0,
                1 === L(p, 1) && (n = !0))
            }
            p = D(g, Dr, 24)?.j()?.g()?.g() || !1;
            if (l || n || p)
                l = VI(new WI(a.g)),
                n = w(LH),
                m = m.concat(l),
                n.M = !0,
                n.C = l.length,
                "n" === a.C && (a.C = D(g, Dr, 24)?.g()?.length ? "o" : "p");
            l = x(Gt) && 2 === a.j.aa.g()?.g() && a.j.aa.g()?.j();
            l = x(jt) || l;
            a: {
                if (n = D(g, nr, 6))
                    for (q of n.g())
                        if (di(q, tq, 4)) {
                            var q = !0;
                            break a
                        }
                q = !1
            }
            l && q ? (q = m.concat,
            l = a.g,
            (n = D(g, nr, 6)) ? (l = IB(n.g(), l),
            k = cG(g, k, l)) : k = [],
            k = q.call(m, k)) : (q = m.concat,
            l = a.g,
            (n = D(g, nr, 6)) ? (l = HB(n.g(), l),
            k = cG(g, k, l)) : k = [],
            k = q.call(m, k));
            m = k;
            g = D(g, Dr, 24);
            return new $H(m,a.g,h,g)
        }
        , a.g);
        a.l = new AI(f,a.A,a.g,{
            Db: b,
            vi: a.M,
            Ac: a.j.Ac,
            ii: c,
            ge: d
        },sK(a),e,x(Ct));
        wI(a.l)?.optimization?.ablatingThisPageview && !a.l.Ya() && (fw(a.g),
        w(LH).B = !0,
        a.C = "f");
        a.G = DI(e, a.l, a.g);
        lw(992, ()=>JI(a.G), a.g).then(lw(994, ()=>a.ea.bind(a), a.g), a.X.bind(a));
        tK(a)
    }
    function rK(a) {
        const b = D(a.i, sr, 18);
        b && DE(new EE(a.g,new kF(a.g,a.A),b,new Bx(a.g),F(a.i, rr, 1)))
    }
    function sK(a) {
        const b = x(Ft);
        if (!Fr(a.i))
            return {
                qf: b,
                Af: !1,
                cg: !1,
                qh: !1,
                ig: !1,
                eh: !1,
                ij: 0,
                Tg: 0,
                Kf: uK(a),
                Le: a.I
            };
        const c = Fr(a.i);
        return {
            qf: b || N(c, 14, !1),
            Af: N(c, 2, !1),
            cg: N(c, 3, !1),
            qh: N(c, 4, !1),
            ig: N(c, 5, !1),
            eh: N(c, 6, !1),
            ij: Ei(c, 8, 0),
            Tg: L(c, 10),
            Kf: uK(a),
            Le: a.I
        }
    }
    function tK(a) {
        if (x(yv)) {
            var b = new SI(a.A);
            const e = D(a.i, nr, 6)?.g()
              , f = 0 < e?.length;
            var c = b
              , d = !!tx(a.g).reactiveTypeEnabledInAsfe[8];
            PI(c, {
                typ: "pv",
                asp: Number(f),
                ve: Number(d)
            });
            f && (a = new QI(a.g,e,b),
            b = MI(a.win, a.g),
            0 === b.length ? RI(a.ba, {
                pe: 0
            }) : (c = NI(b),
            d = c.g.getBoundingClientRect(),
            RI(a.ba, {
                pe: b.length,
                U: S(a.win),
                Rc: Co(a.win).scrollHeight,
                Eh: d.height,
                Gh: a.win.scrollY + d.top
            }),
            c = c.g,
            OI(a, c, 0, "-50% 0px 0px 0px"),
            OI(a, c, 1, "0px 0px 0px 0px")))
        }
    }
    function uK(a) {
        return x(vt) || x(Gt) && 2 === a.j.aa?.g()?.g() ? !1 : a.j.aa && di(a.j.aa, Rq, 10) ? .5 <= (fi(a.j.aa.g(), 1) || 0) : !0
    }
    function vK(a, b) {
        for (var c = AA(AA(new pH(b.Ra), b.errors), a.H), d = b.Ab, e = 0; e < d.length; e++)
            a: {
                for (var f = c, g = d[e], h = 0; h < f.B.length; h++)
                    if (f.B[h] == g)
                        break a;
                f.B.push(g)
            }
        c.g.pp = b.Rd;
        c.g.ppp = b.Sd;
        c.g.ppos = b.placementPositionDiffs;
        c.g.eatf = b.wc;
        c.g.eatfAbg = b.xc;
        c.g.reatf = b.Ob;
        c = oH(nH(c.H(a.G.l.slice(0)), a.i), a.D).kc(a.A);
        if (d = b.Ha)
            c.g.as_count = d.Hf,
            c.g.d_count = d.hg,
            c.g.ng_count = d.Lg,
            c.g.am_count = d.Mf,
            c.g.atf_count = d.If,
            c.g.mdns = qH(d.Cg),
            c.g.alldns = qH(d.Jf);
        c = c.G(b.ac).ih(b.qd);
        d = b.Rc;
        null != d && (c.g.pgh = d);
        c.g.abl = b.pg;
        c.g.rr = a.C;
        void 0 !== b.exception && BA(c, b.exception).za(1);
        return c
    }
    function wK(a, b) {
        var c = vK(a, b);
        LA(a.B, 0 < b.errors.length || 0 < a.H.length || void 0 !== b.exception ? Nr : Mr, c);
        if (D(a.i, Dr, 24)) {
            a.l.i.g.g?.D();
            b = wI(a.l);
            const d = w(LH);
            d.j = !!b?.optimization?.ablationFromStorage;
            b?.optimization?.ablatingThisPageview && (d.G = !0);
            d.T = !!b?.optimization?.availableAbg;
            b = w(LH);
            c = new CH(c);
            b.A ? (c.i.sl = sH(b.A ?? []),
            c.i.daaos = sH(b.H ?? []),
            c.i.ab = tH(b.G),
            c.i.rr = tH(b.M),
            c.i.oab = tH(b.D),
            null != b.j && (c.i.sab = tH(b.j)),
            b.B && (c.i.fb = tH(b.B)),
            c.i.ls = tH(b.T),
            uH(c, b.i.Ec()),
            null != b.C && (c.i.rp = tH(b.C)),
            null != b.l && (c.i.expl = tH(b.l)),
            KH(b, c)) : c.errors.push("irr");
            LA(a.B, Pr, c)
        }
        c = a.l?.pa();
        x(Ct) && null != c && (c = new Map([...c.j.map.entries()].map(uF)),
        b = new aJ,
        $I(b, c),
        LA(a.B, Tr, b))
    }
    function xK(a, b) {
        const c = w(gK);
        if (c.i) {
            var d = new xm
              , e = b.Ab.filter(g=>null !== g)
              , f = a.H.concat(b.errors, b.exception ? [1] : []).filter(g=>null !== g);
            sm(qm(vm(um(tm(rm(lm(nm(pm(mm(d, a.G.l.slice(0).map(g=>{
                var h = new Hl;
                return bi(h, 1, dh(g))
            }
            )), e.map(g=>{
                var h = new Kl;
                return bi(h, 1, dh(g))
            }
            )), f.map(g=>Il(g))), D(a.i, ar, 23)?.g()), b.Ra).G(b.ac), b.Ob), b.wc), b.xc), a.D.map(g=>g.toString())), Rl(Ql(Pl(Ol(Nl(Ml(Ll(new Sl, b.Ha?.Hf), b.Ha?.hg), b.Ha?.Lg), b.Ha?.Mf), b.Ha?.If), b.Ha?.Cg), b.Ha?.Jf));
            if (b.qd)
                for (let g of Po(b.qd)) {
                    e = new ni;
                    for (let h of b.qd.get(g))
                        Wl(e, Ul(Tl(new Vl, h.kb), h.sh));
                    wm(d).set(g.toString(), e)
                }
            D(a.i, Dr, 24) && jm(d);
            jK(c, d)
        }
    }
    function yK(a) {
        return Er(a.i) && 1 === L(Er(a.i), 1) ? !(D(Er(a.i), Jq, 6) && 1 <= (zi(D(Er(a.i), Jq, 6), 3) || 0)) : !1
    }
    function zK(a) {
        if (yK(a)) {
            a = a.l;
            var b = vC({
                Ad: !0,
                Bd: !0
            }, a.g);
            a = 0 < rI(b, a.g)
        } else
            a = a.l.g,
            b = uC({
                Rb: !1,
                zd: !1
            }, a),
            a = 0 < rI(b, a);
        return a
    }
    function AK(a, b) {
        try {
            x(lt) && a.l?.xa()?.A()
        } catch (c) {
            LA(a.B, Sr, BA(oH(nH((new pH(b)).kc(a.A), a.i), a.D).za(14), c))
        }
    }
    function BK(a, b, c) {
        {
            var d = wI(a.l)
              , e = b.g;
            const f = e.g
              , g = e.Rd;
            let h = e.Ra
              , k = e.Sd
              , l = e.errors.slice()
              , m = e.Ab.slice()
              , n = b.exception;
            const p = AJ(a.g).had_ads_ablation ?? !1;
            d ? (d.numAutoAdsPlaced ? h += d.numAutoAdsPlaced : a.G.j && m.push(13),
            void 0 !== d.exception && (n = d.exception),
            d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced),
            c = {
                Ra: h,
                Rd: g,
                Sd: k,
                ac: f,
                errors: e.errors.slice(),
                Ab: m,
                exception: n,
                Ob: c,
                wc: !!d.eatf,
                xc: !!d.eatfAbg,
                pg: p
            }) : (m.push(12),
            a.G.j && m.push(13),
            c = {
                Ra: h,
                Rd: g,
                Sd: k,
                ac: f,
                errors: l,
                Ab: m,
                exception: n,
                Ob: c,
                wc: !1,
                xc: !1,
                pg: p
            })
        }
        c.Ha = sI(a.l.g);
        if (b = b.g.i)
            c.qd = b;
        c.Rc = Co(a.g).scrollHeight;
        if (kk() || D(a.i, $q, 25)?.j()) {
            d = fq(a.l.i.i);
            b = [];
            for (const f of d) {
                d = {};
                e = f.I;
                for (const g of Po(e))
                    d[g] = e.get(g);
                d = {
                    anchorElement: iB(f),
                    position: f.g(),
                    clearBoth: f.H,
                    locationType: f.Sb,
                    placed: f.A,
                    placementProto: f.l ? f.l.toJSON() : null,
                    articleStructure: f.B ? f.B.toJSON() : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            lk(14, [{
                placementIdentifiers: b
            }, a.l.G, c.Ha])
        }
        return c
    }
    function CK(a, b) {
        var c = a.l.g;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.ac;
        c.numAutoAdsPlaced = b.Ra;
        c.hasAtfAd = b.Ob;
        void 0 !== b.exception && (c.exception = b.exception);
        null != a.l && (a = cJ(a.g, a.l, {
            rd: -1,
            Dc: -1,
            Nc: -1,
            ug: !0,
            Lf: !0
        }),
        null != a.g ? (c.placementPositionDiffs = oJ(a.getValue()),
        b = nJ(a.getValue()),
        a = new iG,
        a = wi(a, 2, jG, b),
        c.placementPositionDiffsReport = fj(a)) : (b = a.i.message,
        c.placementPositionDiffs = "E" + b,
        a = new iG,
        a = qi(a, 1, jG, th(b)),
        c.placementPositionDiffsReport = fj(a)))
    }
    function DK(a, b) {
        wK(a, {
            Ra: 0,
            ac: void 0,
            errors: [],
            Ab: [],
            exception: b,
            Ob: void 0,
            wc: void 0,
            xc: void 0,
            Ha: void 0
        });
        xK(a, {
            Ra: 0,
            ac: void 0,
            errors: [],
            Ab: [],
            exception: b,
            Ob: void 0,
            wc: void 0,
            xc: void 0,
            Ha: void 0
        })
    }
    class oK {
        constructor(a, b, c, d, e, f, g, h, k) {
            this.g = a;
            this.B = b;
            this.A = c;
            this.i = d;
            this.j = e;
            this.D = f;
            this.M = h || null;
            this.H = [];
            this.I = k;
            this.T = g;
            this.C = "n"
        }
        runAutoGames() {
            const a = D(this.i, br, 32);
            a && this.T.runAutoGames({
                win: this.g,
                webPropertyCode: this.A,
                Qf: a,
                Lb: (D(this.i, kr, 33)?.g()?.i() ?? null) || ir().i()
            })
        }
        ea(a) {
            try {
                AK(this, a.g.Ra);
                const b = zK(this) || yK(this) ? zK(this) : void 0;
                Lr({
                    Ee: b
                }, this.g);
                const c = BK(this, a, zK(this));
                di(this.i, $q, 25) && gi(D(this.i, $q, 25), 1) && CK(this, c);
                wK(this, c);
                xK(this, c);
                HA(753, ()=>{
                    if (x(qt) && null != this.l) {
                        var d = cJ(this.g, this.l, {
                            rd: Vb(Bt),
                            Dc: Vb(At),
                            Nc: Vb(st),
                            ug: !0,
                            Lf: !1
                        })
                          , e = Xc(c);
                        null != d.g ? (d = oJ(d.getValue()),
                        e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.i.message;
                        e = vK(this, e);
                        LA(this.B, Or, e)
                    }
                }
                )()
            } catch (b) {
                DK(this, b)
            }
        }
        X(a) {
            AK(this, 0);
            DK(this, a)
        }
    }
    ;var EK = class extends R {
    }
      , FK = kj(EK);
    function GK(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? lq(()=>FK(c)) : iq(null)
    }
    ;function HK(a, b) {
        return Zi(a, 5, b)
    }
    var IK = class extends R {
        constructor() {
            super()
        }
        j() {
            return N(this, 3)
        }
        A() {
            return null != gi(this, 3)
        }
        g() {
            return N(this, 5)
        }
        l() {
            return N(this, 6)
        }
    }
    ;
    IK.O = [10];
    var LK = ({win: a, Dd: b, sg: c=!1, tg: d=!1})=>JK({
        win: a,
        Dd: b,
        sg: c,
        tg: d
    }) ? (b = Z(FJ(), 24)) ? KK(a, HK(new IK, $E(b))) : kq(Error("tcunav")) : KK(a, HK(new IK, !0));
    function JK({win: a, Dd: b, sg: c, tg: d}) {
        if (!(d = !d && dF(new hF(a)))) {
            if (c = !c) {
                if (b) {
                    a = GK(a);
                    if (null != a.g)
                        if ((a = a.getValue()) && null != L(a, 1))
                            b: switch (a = L(a, 1),
                            a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                            }
                        else
                            a = !1;
                    else
                        JA(806, a.i),
                        a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }
    function KK(a, b) {
        return (a = ck(b, a)) ? iq(a) : kq(Error("unav"))
    }
    ;var MK = class extends R {
    }
    ;
    class NK {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.l = b;
            this.B = c;
            this.i = !1;
            this.j = d;
            this.A = e
        }
    }
    ;class OK {
        constructor() {
            this.promise = new Promise((a,b)=>{
                this.resolve = a;
                this.g = b
            }
            )
        }
    }
    ;function PK() {
        const {promise: a, resolve: b} = new OK;
        return {
            promise: a,
            resolve: b
        }
    }
    ;function QK(a, b, c=()=>{}
    ) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d)
            return d;
        d = PK();
        b[a] = d;
        c();
        return d
    }
    function RK(a, b, c) {
        return QK(a, b, ()=>{
            $e(b.document, c)
        }
        ).promise
    }
    ;function SK() {
        const a = {};
        Wb(ft) && (a.bust = Wb(ft));
        var b = FJ();
        b = Z(b, 38, "");
        "" !== b && (a.sbust = b);
        return a
    }
    const TK = new Map([[2, 7], [3, 1], [4, 3], [5, 12]]);
    function UK(a, b, c) {
        c = dd(c, SK());
        if (1 === a)
            return {
                eo: $e(b.document, c),
                Zc: new Promise(()=>{}
                )
            };
        if (TK.has(a))
            return {
                Zc: RK(TK.get(a), b, c)
            };
        throw Error(`Unexpected chunkId: ${a}`);
    }
    ;var VK = class {
        constructor(a) {
            this.jb = a
        }
        runAutoGames({win: a, webPropertyCode: b, Qf: c, Lb: d}) {
            KA(1116, UK(5, a, this.jb).Zc.then(e=>{
                e.runAutoGames({
                    win: a,
                    webPropertyCode: b,
                    serializedAutoGamesConfig: fj(c),
                    serializedFloatingToolbarMessages: fj(d)
                })
            }
            ))
        }
    }
    ;
    var WK = {
        Jk: "google_ads_preview",
        wl: "google_mc_lab",
        Ml: "google_anchor_debug",
        Ll: "google_bottom_anchor_debug",
        INTERSTITIAL: "google_ia_debug",
        im: "google_scr_debug",
        km: "google_ia_debug_allow_onclick",
        Im: "googleads",
        yh: "google_pedestal_debug",
        bn: "google_responsive_slot_preview",
        an: "google_responsive_dummy_ad",
        zk: "google_audio_sense",
        Ck: "google_auto_gallery",
        Ek: "google_auto_storify_swipeable",
        Dk: "google_auto_storify_scrollable",
        Bk: "google_games_single_game",
        Ak: "google_games_catalog"
    }
      , XK = {
        google_bottom_anchor_debug: 1,
        google_anchor_debug: 2,
        google_ia_debug: 8,
        google_scr_debug: 9,
        googleads: 2,
        google_pedestal_debug: 30
    };
    var YK = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR"
    };
    function ZK(a, b) {
        if (!a)
            return !1;
        a = a.hash;
        if (!a || !a.indexOf)
            return !1;
        if (-1 != a.indexOf(b))
            return !0;
        b = $K(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }
    function $K(a) {
        let b = "";
        df(a.split("_"), c=>{
            b += c.substr(0, 2)
        }
        );
        return b
    }
    function aL() {
        var a = r.location;
        let b = !1;
        df(WK, c=>{
            ZK(a, c) && (b = !0)
        }
        );
        return b
    }
    function bL(a, b) {
        switch (a) {
        case 1:
            return ZK(b, "google_ia_debug");
        case 2:
            return ZK(b, "google_bottom_anchor_debug");
        case 3:
            return ZK(b, "google_anchor_debug") || ZK(b, "googleads")
        }
    }
    ;function cL({win: a, webPropertyCode: b, jb: c}) {
        ZK(a.location, "google_games_single_game") ? dL(a, b, 1, c) : ZK(a.location, "google_games_catalog") && dL(a, b, 2, c)
    }
    function dL(a, b, c, d) {
        var e = new br;
        c = bi(e, 1, dh(c));
        (new VK(d)).runAutoGames({
            win: a,
            webPropertyCode: b,
            Qf: c,
            Lb: ir().i()
        })
    }
    ;var eL = class extends R {
        constructor() {
            super()
        }
        Bi() {
            return Fi(this, 3)
        }
    }
    ;
    const fL = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var gL = class extends R {
        constructor() {
            super()
        }
        getVersion() {
            return Ci(this, 2)
        }
    }
    ;
    gL.O = [3];
    function hL(a) {
        return a.includes("~") ? a.split("~").slice(1) : []
    }
    ;function iL(a) {
        return Rf(0 !== a.length % 4 ? a + "A" : a).map(b=>b.toString(2).padStart(8, "0")).join("")
    }
    function jL(a) {
        if (!/^[0-1]+$/.test(a))
            throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }
    function kL(a) {
        if (!/^[0-1]+$/.test(a))
            throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++)
            b.length <= d && b.push(b[d - 1] + b[d - 2]),
            c += parseInt(a[d], 2) * b[d];
        return c
    }
    function lL(a, b) {
        a = iL(a);
        return a.length < b ? a.padEnd(b, "0") : a
    }
    ;function mL(a) {
        var b = iL(a)
          , c = jL(b.slice(0, 6));
        a = jL(b.slice(6, 12));
        var d = new gL;
        c = bj(d, 1, c);
        a = bj(c, 2, a);
        b = b.slice(12);
        c = jL(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (0 === e.length)
                throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = 0 === jL(e[0]);
            e = e.slice(1);
            var g = nL(e, b)
              , h = 0 === d.length ? 0 : d[d.length - 1];
            h = kL(g) + h;
            e = e.slice(g.length);
            if (f)
                d.push(h);
            else {
                f = nL(e, b);
                g = kL(f);
                for (let l = 0; l <= g; l++)
                    d.push(h + l);
                e = e.slice(f.length)
            }
        }
        if (0 < e.length)
            throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return oi(a, 3, d, fh)
    }
    function nL(a, b) {
        const c = a.indexOf("11");
        if (-1 === c)
            throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    }
    ;var oL = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var pL = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var qL = class extends R {
        getVersion() {
            return Ci(this, 1)
        }
    }
    ;
    var rL = class extends R {
        constructor() {
            super()
        }
    }
    ;
    function sL(a) {
        var b = new tL;
        return H(b, 1, a)
    }
    var tL = class extends R {
        constructor() {
            super()
        }
    }
    ;
    const uL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , vL = 6 + uL.reduce((a,b)=>a + b);
    var wL = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var xL = class extends R {
        getVersion() {
            return Ci(this, 1)
        }
    }
    ;
    var yL = class extends R {
        constructor() {
            super()
        }
    }
    ;
    function zL(a) {
        var b = new AL;
        return H(b, 1, a)
    }
    var AL = class extends R {
        constructor() {
            super()
        }
    }
    ;
    const BL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , CL = 6 + BL.reduce((a,b)=>a + b);
    var DL = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var EL = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var FL = class extends R {
        getVersion() {
            return Ci(this, 1)
        }
    }
    ;
    var GL = class extends R {
        constructor() {
            super()
        }
    }
    ;
    function HL(a) {
        var b = new IL;
        return H(b, 1, a)
    }
    var IL = class extends R {
        constructor() {
            super()
        }
    }
    ;
    const JL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , KL = 6 + JL.reduce((a,b)=>a + b);
    var LL = class extends R {
        constructor() {
            super()
        }
    }
    ;
    var ML = class extends R {
        constructor() {
            super()
        }
        getVersion() {
            return Ci(this, 1)
        }
    }
    ;
    const NL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , OL = 6 + NL.reduce((a,b)=>a + b);
    var PL = "a".charCodeAt()
      , QL = Wc(oo)
      , RL = Wc(po);
    function SL() {
        var a = new TL;
        return P(a, 1, 0)
    }
    function UL(a) {
        const b = Di(a, 1);
        a = Ci(a, 2);
        return new Date(1E3 * b + a / 1E6)
    }
    var TL = class extends R {
    }
    ;
    function VL(a, b) {
        if (a.g + b > a.i.length)
            throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }
    function WL(a) {
        let b = VL(a, 12);
        const c = [];
        for (; b--; ) {
            var d = !0 === !!VL(a, 1)
              , e = VL(a, 16);
            if (d)
                for (d = VL(a, 16); e <= d; e++)
                    c.push(e);
            else
                c.push(e)
        }
        c.sort((f,g)=>f - g);
        return c
    }
    function XL(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (VL(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f))
                    throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }
    function YL(a) {
        const b = VL(a, 16);
        return !0 === !!VL(a, 1) ? (a = WL(a),
        a.forEach(c=>{
            if (c > b)
                throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }
        ),
        a) : XL(a, b)
    }
    class ZL {
        constructor(a) {
            if (/[^01]/.test(a))
                throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.g = 0
        }
        skip(a) {
            this.g += a
        }
    }
    ;var aM = a=>{
        try {
            var b = Rf(a.split(".")[0]).map(d=>d.toString(2).padStart(8, "0")).join("");
            const c = new ZL(b);
            b = {};
            b.tcString = a;
            b.gdprApplies = !0;
            c.skip(78);
            b.cmpId = VL(c, 12);
            b.cmpVersion = VL(c, 12);
            c.skip(30);
            b.tcfPolicyVersion = VL(c, 6);
            b.isServiceSpecific = !!VL(c, 1);
            b.useNonStandardStacks = !!VL(c, 1);
            b.specialFeatureOptins = $L(XL(c, 12, RL), RL);
            b.purpose = {
                consents: $L(XL(c, 24, QL), QL),
                legitimateInterests: $L(XL(c, 24, QL), QL)
            };
            b.purposeOneTreatment = !!VL(c, 1);
            b.publisherCC = String.fromCharCode(PL + VL(c, 6)) + String.fromCharCode(PL + VL(c, 6));
            b.vendor = {
                consents: $L(YL(c), null),
                legitimateInterests: $L(YL(c), null)
            };
            return b
        } catch (c) {
            return null
        }
    }
    ;
    const $L = (a,b)=>{
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b)
                c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a)
                c[d] = !0;
        delete c[0];
        return c
    }
    ;
    var bM = class extends R {
        g() {
            return null != I(this, 2)
        }
    }
    ;
    var cM = class extends R {
        g() {
            return null != I(this, 2)
        }
    }
    ;
    var dM = class extends R {
    }
    ;
    var eM = class extends R {
    }
      , fM = kj(eM);
    eM.O = [7];
    function gM(a) {
        a = hM(a);
        try {
            var b = a ? fM(a) : null
        } catch (c) {
            b = null
        }
        return b ? D(b, dM, 4) || null : null
    }
    function hM(a) {
        a = (new bk(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%"))
                try {
                    var b = decodeURIComponent(a)
                } catch (c) {
                    b = null
                }
            else
                b = a;
        else
            b = null;
        return b
    }
    ;function iM(a) {
        a.__uspapiPostMessageReady || jM(new kM(a))
    }
    function jM(a) {
        a.g = b=>{
            const c = "string" === typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__uspapiCall;
            e && "getUSPData" === e.command && a.win.__uspapi(e.command, e.version, (f,g)=>{
                const h = {};
                h.__uspapiReturn = {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                return f
            }
            )
        }
        ;
        a.win.addEventListener("message", a.g);
        a.win.__uspapiPostMessageReady = !0
    }
    var kM = class {
        constructor(a) {
            this.win = a;
            this.g = null
        }
    }
    ;
    function lM(a) {
        a.__tcfapiPostMessageReady || mM(new nM(a))
    }
    function mM(a) {
        a.i = b=>{
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, (f,g)=>{
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                return f
            }
            , e.parameter)
        }
        ;
        a.g.addEventListener("message", a.i);
        a.g.__tcfapiPostMessageReady = !0
    }
    var nM = class {
        constructor(a) {
            this.g = a;
            this.i = null
        }
    }
    ;
    var oM = class extends R {
    }
    ;
    var pM = class extends R {
        g() {
            return null != I(this, 1)
        }
    }
      , qM = kj(pM);
    pM.O = [2];
    function rM(a, b) {
        function c(l) {
            if (10 > l.length)
                return null;
            var m = f(l.slice(0, 4));
            m = g(m);
            l = f(l.slice(6, 10));
            l = h(l);
            return "1" + m + l + "N"
        }
        function d(l) {
            if (10 > l.length)
                return null;
            var m = f(l.slice(0, 6));
            m = g(m);
            l = f(l.slice(6, 10));
            l = h(l);
            return "1" + m + l + "N"
        }
        function e(l) {
            if (12 > l.length)
                return null;
            var m = f(l.slice(0, 6));
            m = g(m);
            l = f(l.slice(8, 12));
            l = h(l);
            return "1" + m + l + "N"
        }
        function f(l) {
            const m = [];
            let n = 0;
            for (let p = 0; p < l.length / 2; p++)
                m.push(jL(l.slice(n, n + 2))),
                n += 2;
            return m
        }
        function g(l) {
            return l.every(m=>1 === m) ? "Y" : "N"
        }
        function h(l) {
            return l.some(m=>1 === m) ? "Y" : "N"
        }
        if (0 === a.length)
            return null;
        a = a.split(".");
        if (2 < a.length)
            return null;
        a = iL(a[0]);
        const k = jL(a.slice(0, 6));
        a = a.slice(6);
        if (1 !== k)
            return null;
        switch (b) {
        case 8:
            return c(a);
        case 10:
        case 12:
        case 9:
            return d(a);
        case 11:
            return e(a);
        default:
            return null
        }
    }
    ;function sM(a) {
        a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new tM(a),
        uM(a),
        vM(a))
    }
    function uM(a) {
        !a.l || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc",
        LE(a.g, "__uspapiLocator"),
        Ia("__uspapi", (...b)=>wM(a, ...b), a.g),
        iM(a.g))
    }
    function vM(a) {
        !a.i || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc",
        LE(a.g, "__tcfapiLocator"),
        a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [],
        Ia("__tcfapi", (...b)=>xM(a, ...b), a.g),
        lM(a.g))
    }
    function wM(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.l
        }, !0)
    }
    function yM(a) {
        if (!a?.g() || 0 === O(a, 1).length || 0 == F(a, oM, 2).length)
            return null;
        const b = O(a, 1);
        let c;
        try {
            var d = mL(b.split("~")[0]);
            c = hL(b)
        } catch (e) {
            return null
        }
        a = F(a, oM, 2).reduce((e,f)=>Di(zM(e), 1) > Di(zM(f), 1) ? e : f);
        d = hi(d, 3, gh, 2).indexOf(Ci(a, 1));
        return -1 === d || d >= c.length ? null : {
            uspString: rM(c[d], Ci(a, 1)),
            ze: UL(zM(a))
        }
    }
    function AM(a) {
        a = a.find(b=>13 === Fi(b, 1));
        if (a?.g())
            try {
                return qM(O(a, 2))
            } catch (b) {}
        return null
    }
    function zM(a) {
        return di(a, TL, 2) ? D(a, TL, 2) : SL()
    }
    function xM(a, b, c, d, e=null) {
        if ("function" === typeof d)
            if (c && (2.2 < c || 1 >= c))
                d(null, !1);
            else
                switch (c = a.g.__tcfapiEventListeners,
                b) {
                case "getTCData":
                    d(null, !1);
                    break;
                case "ping":
                    d({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.2",
                        cmpVersion: 2,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    b = c.push(d) - 1;
                    a.i ? (e = aM(a.i),
                    e.addtlConsent = null != a.j ? a.j : void 0,
                    e.cmpStatus = "loaded",
                    e.eventStatus = "tcloaded",
                    null != b && (e.listenerId = b),
                    a = e) : a = null;
                    d(a, !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null,
                    d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
                }
    }
    class tM {
        constructor(a) {
            this.g = a;
            var b = hM(this.g.document);
            try {
                var c = b ? fM(b) : null
            } catch (e) {
                c = null
            }
            (b = c) ? (c = D(b, cM, 5) || null,
            b = F(b, bM, 7),
            b = AM(b ?? []),
            c = {
                Uf: c,
                og: b
            }) : c = {
                Uf: null,
                og: null
            };
            b = c;
            c = yM(b.og);
            b = b.Uf;
            if (b?.g() && 0 !== O(b, 2).length) {
                var d = di(b, TL, 1) ? D(b, TL, 1) : SL();
                b = {
                    uspString: O(b, 2),
                    ze: UL(d)
                }
            } else
                b = null;
            this.l = b && c ? c.ze > b.ze ? c.uspString : b.uspString : b ? b.uspString : c ? c.uspString : null;
            this.i = (c = gM(a.document)) && null != I(c, 1) ? O(c, 1) : null;
            this.j = (a = gM(a.document)) && null != I(a, 2) ? O(a, 2) : null
        }
    }
    ;const BM = a=>{
        const b = a[0] / 255
          , c = a[1] / 255;
        a = a[2] / 255;
        return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
    }
    ;
    var CM = (a,b)=>{
        a = BM(a);
        b = BM(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    }
    ;
    var DM = Promise;
    class EM {
        constructor(a) {
            this.j = a
        }
        i(a, b, c) {
            this.j.then(d=>{
                d.i(a, b, c)
            }
            )
        }
        g(a, b) {
            return this.j.then(c=>c.g(a, b))
        }
    }
    ;class FM {
        constructor(a) {
            this.data = a
        }
    }
    ;function GM(a, b) {
        HM(a, b);
        return new IM(a)
    }
    class IM {
        constructor(a) {
            this.j = a
        }
        i(a, b, c=[]) {
            const d = new MessageChannel;
            HM(d.port1, b);
            this.j.postMessage(a, [d.port2].concat(c))
        }
        g(a, b) {
            return new DM(c=>{
                this.i(a, c, b)
            }
            )
        }
    }
    function HM(a, b) {
        b && (a.onmessage = c=>{
            b(new FM(c.data,GM(c.ports[0])))
        }
        )
    }
    ;var LM = ({destination: a, Na: b, origin: c, se: d="ZNWN1d", onMessage: e, Og: f})=>JM({
        destination: a,
        Ci: ()=>b.contentWindow,
        dj: KM(c),
        se: d,
        onMessage: e,
        Og: f
    });
    const JM = ({destination: a, Ci: b, dj: c, ho: d, se: e, onMessage: f, Og: g})=>{
        const h = Object.create(null);
        c.forEach(k=>{
            h[k] = !0
        }
        );
        return new EM(new DM((k,l)=>{
            const m = n=>{
                n.source && n.source === b() && !0 === h[n.origin] && (n.data.n || n.data) === e && (a.removeEventListener("message", m, !1),
                d && n.data.t !== d ? l(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`)) : (k(GM(n.ports[0], f)),
                g && g(n)))
            }
            ;
            a.addEventListener("message", m, !1)
        }
        ))
    }
      , KM = a=>{
        a = "string" === typeof a ? [a] : a;
        const b = Object.create(null);
        a.forEach(c=>{
            if ("null" === c)
                throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
            b[c] = !0
        }
        );
        return a
    }
    ;
    function MM(a, b, c, d, e, f, g=null) {
        if (x(pt))
            var h = e ? zJ(e) : null;
        else {
            try {
                h = a.localStorage
            } catch (m) {
                h = null
            }
            h = h ? zJ(h) : null
        }
        a: {
            if (d)
                try {
                    var k = Hr(d);
                    break a
                } catch (m) {
                    qJ(a, {
                        cfg: 1,
                        inv: 1
                    })
                }
            k = null
        }
        if (d = k) {
            if (e) {
                k = new Qq;
                H(d, 3, k);
                h = Fr(d) && Ai(Fr(d), 13) ? Ai(Fr(d), 13) : 1;
                h = Date.now() + 864E5 * h;
                Number.isFinite(h) && cj(k, 1, Math.round(h));
                k = Yh(d);
                if (Fr(d)) {
                    h = new Pq;
                    var l = Fr(d);
                    l = gi(l, 23);
                    h = Zi(h, 23, null == l ? void 0 : l);
                    l = N(Fr(d), 12, !1);
                    h = Zi(h, 12, l);
                    l = N(Fr(d), 15, !1);
                    h = Zi(h, 15, l);
                    H(k, 15, h)
                }
                h = F(k, rr, 1);
                for (l = 0; l < h.length; l++)
                    bi(h[l], 11);
                bi(k, 22);
                if (x(nt))
                    yJ(a);
                else
                    try {
                        (e || a.localStorage).setItem("google_ama_config", fj(k))
                    } catch (m) {
                        qJ(a, {
                            lserr: 1
                        })
                    }
            }
            e = vJ(a, F(d, Zq, 7));
            k = {};
            x(ot) || (k.lj = D(d, lr, 8) || new lr);
            e && (k.aa = e);
            e && uJ(e, 3) && (k.Ac = [1]);
            e = k;
            if (!x(Ys) && 7 === c.google_pgb_reactive && !e.aa)
                return !1;
            BJ(a, 2) && (lk(5, [d.toJSON()]),
            c = rJ(c),
            f = new VK(f),
            k = e.aa,
            c.google_package = k && I(k, 4) || "",
            nK(a, b, d, e, f, new Eq(["google-auto-placed"],c), g));
            return !0
        }
        h && (qJ(a, {
            cfg: 1,
            cl: 1
        }),
        x(pt) ? null != e && xJ(a, e) : yJ(a));
        return !1
    }
    ;var OM = a=>{
        const b = a.F;
        null == b.google_ad_output && (b.google_ad_output = "html");
        if (null != b.google_ad_client) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(),
            "ca-" != c.substring(0, 3) && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!Xj.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) && (b.google_color_bg = NM(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = NM(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = NM(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = NM(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = NM(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = NM(a, b.google_color_line, c))
    }
    ;
    function NM(a, b, c) {
        a.i |= 2;
        return b[c % b.length]
    }
    ;var PM = (a,b=!1)=>{
        try {
            return b ? (new be(a.innerWidth,a.innerHeight)).round() : le(a || window).round()
        } catch (c) {
            return new be(-12245933,-12245933)
        }
    }
    ;
    function QM(a=r) {
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }
    function RM(a, b=r) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new ae(b.pageXOffset || a.scrollLeft,b.pageYOffset || a.scrollTop)
    }
    function SM(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    }
    ;function TM(a, b) {
        var c = EA, d;
        var e;
        d = (e = (e = tk()) && (d = e.initialLayoutRect) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new pk(d.left,d.top,d.width,d.height) : null) ? new ae(e.left,e.top) : (d = wk()) && xa(d.rootBounds) ? new ae(d.rootBounds.left + d.boundingClientRect.left,d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d)
            return d;
        try {
            var f = new ae(0,0)
              , g = ke(b);
            var h = g ? ne(g) : window;
            if (Tb(h, "parent")) {
                do {
                    if (h == a)
                        var k = Ik(b);
                    else {
                        var l = Hk(b);
                        k = new ae(l.left,l.top)
                    }
                    g = k;
                    f.x += g.x;
                    f.y += g.y
                } while (h && h != a && h != h.parent && (b = h.frameElement) && (h = h.parent))
            }
            return f
        } catch (m) {
            return c.va(888, m),
            new ae(-12245933,-12245933)
        }
    }
    ;function UM(a, b, c) {
        return c ? fk(b, c, a.g) : null
    }
    function VM(a, b, c, d) {
        if (d) {
            var e = Di(c, 2) - Date.now() / 1E3;
            e = {
                Id: Math.max(e, 0),
                path: O(c, 3),
                domain: O(c, 4),
                gh: !1
            };
            c = c.getValue();
            a = a.g;
            d.g() && ek(a) && (new bk(a.document)).set(b, c, e)
        }
    }
    function WM(a, b, c) {
        if (c && fk(b, c, a.g))
            for (const d of XM(a.g.location.hostname))
                gk(b, c, a.g, "/", d)
    }
    var YM = class {
        constructor(a) {
            this.g = a;
            this.i = 0
        }
    }
    ;
    function XM(a) {
        if ("localhost" === a)
            return ["localhost"];
        a = a.split(".");
        if (2 > a.length)
            return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c)
            b.push(a.slice(c).join("."));
        return b
    }
    ;function ZM(a, b, c) {
        return HA(629, function(d) {
            delete a._gfp_s_;
            if (x(dt) && Z(FJ(), 37, !1))
                return Promise.resolve();
            if (!d)
                throw Error("Invalid JSONP response");
            d = d._cookies_;
            if (!d)
                return Promise.resolve();
            if (0 === d.length)
                throw Error("Invalid JSONP response");
            for (const f of d) {
                var e = f._domain_;
                const g = f._value_
                  , h = f._expires_
                  , k = f._path_;
                d = f._version_ || 1;
                if ("string" !== typeof e || "string" !== typeof g || "number" !== typeof h || "string" !== typeof k || "number" !== typeof d || !g)
                    throw Error("Invalid JSONP response");
                e = Qj(Pj(Oj(Mj(g), h), k), e);
                switch (d) {
                case 1:
                    VM(c, "__gads", e, b);
                    break;
                case 2:
                    VM(c, "__gpi", e, b)
                }
            }
            return Promise.resolve()
        })
    }
    function $M(a, b, c) {
        let d;
        if (0 === a.i) {
            if (UM(a, "__gads", b))
                var e = !0;
            else
                e = a.g,
                b.g() && ek(e) && (new bk(e.document)).set("GoogleAdServingTest", "Good", void 0),
                (e = "Good" === fk("GoogleAdServingTest", b, a.g)) && gk("GoogleAdServingTest", b, a.g);
            a.i = e ? 2 : 1
        }
        2 === a.i && (d = ZM(c, b, a));
        c._gfp_p_ = !0;
        return d
    }
    function aN(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = UM(b, "__gads", a);
        e && (d.cookie = e);
        (e = UM(b, "__gpi", a)) && !e.includes("&") && (d.gpic = e);
        const f = dd(wj`https://partner.googleadservices.com/gampad/cookie.js`, d)
          , g = $M(b, a, c);
        g ? new Promise(h=>{
            c._gfp_s_ = k=>{
                g(k).then(h)
            }
            ;
            $e(c.document, f)
        }
        ) : Promise.resolve()
    }
    function bN(a, b, c) {
        "_gfp_p_"in b || (b._gfp_p_ = !1);
        var d = new YM(b);
        c = b.google_ad_client || c;
        const e = b._gfp_p_;
        if ("boolean" !== typeof e)
            throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
        e ? Promise.resolve() : aN(a, d, b, c)
    }
    ;const cN = (a,b)=>{
        b = b.listener;
        (a = (0,
        a.__gpp)("addEventListener", b)) && b(a, !0)
    }
      , dN = (a,b)=>{
        (0,
        a.__gpp)("removeEventListener", b.listener, b.listenerId)
    }
      , eN = (a,b)=>{
        (0,
        a.__gpp)("getSection", c=>{
            b.callback({
                nb: c ?? void 0,
                nd: c ? void 0 : 4
            })
        }
        , b.apiPrefix)
    }
      , fN = {
        Lc: a=>a.listener,
        Tb: (a,b)=>({
            __gppCall: {
                callId: b,
                command: "addEventListener",
                version: "1.1"
            }
        }),
        wb: (a,b)=>{
            b = b.__gppReturn;
            a(b.returnValue, b.success)
        }
    }
      , gN = {
        Lc: a=>a.listener,
        Tb: (a,b)=>({
            __gppCall: {
                callId: b,
                command: "removeEventListener",
                version: "1.1",
                parameter: a.listenerId
            }
        }),
        wb: (a,b)=>{
            b = b.__gppReturn;
            const c = b.returnValue.data;
            a?.(c, b.success)
        }
    }
      , hN = {
        Lc: a=>a.callback,
        Tb: (a,b)=>({
            __gppCall: {
                callId: b,
                command: "getSection",
                version: "1.1",
                parameter: a.apiPrefix
            }
        }),
        wb: (a,b)=>{
            b = b.__gppReturn;
            a({
                nb: b.returnValue ?? void 0,
                nd: b.success ? void 0 : 2
            })
        }
    };
    function iN(a) {
        let b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            ff: b.__gppReturn.callId
        }
    }
    function jN(a) {
        if (!a)
            return !1;
        const b = mL(a.split("~")[0])
          , c = hL(a);
        for (let Ji = 0; Ji < hi(b, 3, gh, 2).length; ++Ji) {
            const GQ = hi(b, 3, gh, 2)[Ji]
              , ic = c[Ji];
            switch (GQ) {
            case 8:
                if (0 === ic.length)
                    throw Error("Cannot decode empty USCA section string.");
                const gg = ic.split(".");
                if (2 < gg.length)
                    throw Error(`Expected at most 1 sub-section but got ${gg.length - 1} when decoding ${ic}.`);
                var d = void 0
                  , e = void 0
                  , f = void 0
                  , g = void 0
                  , h = void 0
                  , k = void 0
                  , l = void 0
                  , m = void 0
                  , n = void 0
                  , p = void 0
                  , q = void 0
                  , v = void 0
                  , A = void 0
                  , B = void 0
                  , E = void 0
                  , J = void 0
                  , G = void 0
                  , K = void 0
                  , M = void 0
                  , Ba = void 0
                  , Za = void 0
                  , Ib = void 0
                  , U = void 0
                  , mb = gg[0];
                if (0 === mb.length)
                    throw Error("Cannot decode empty core segment string.");
                let Ki = lL(mb, vL);
                const Sm = jL(Ki.slice(0, 6));
                Ki = Ki.slice(6);
                if (1 !== Sm)
                    throw Error(`Unable to decode unsupported USCA Section specification version ${Sm} - only version 1 is supported.`);
                let Tm = 0;
                const ua = [];
                for (let na = 0; na < uL.length; na++) {
                    const ja = uL[na];
                    ua.push(jL(Ki.slice(Tm, Tm + ja)));
                    Tm += ja
                }
                var Nc = new qL;
                U = bj(Nc, 1, Sm);
                var uc = ua.shift();
                Ib = Q(U, 2, uc);
                var Ee = ua.shift();
                Za = Q(Ib, 3, Ee);
                var aa = ua.shift();
                Ba = Q(Za, 4, aa);
                var nd = ua.shift();
                M = Q(Ba, 5, nd);
                var Um = ua.shift();
                K = Q(M, 6, Um);
                var Vm = new pL
                  , Wm = ua.shift();
                G = Q(Vm, 1, Wm);
                var Xm = ua.shift();
                J = Q(G, 2, Xm);
                var Ym = ua.shift();
                E = Q(J, 3, Ym);
                var Zm = ua.shift();
                B = Q(E, 4, Zm);
                var $m = ua.shift();
                A = Q(B, 5, $m);
                var an = ua.shift();
                v = Q(A, 6, an);
                var bn = ua.shift();
                q = Q(v, 7, bn);
                var cn = ua.shift();
                p = Q(q, 8, cn);
                var dn = ua.shift();
                n = Q(p, 9, dn);
                m = H(K, 7, n);
                var en = new oL
                  , fn = ua.shift();
                l = Q(en, 1, fn);
                var gn = ua.shift();
                k = Q(l, 2, gn);
                h = H(m, 8, k);
                var hn = ua.shift();
                g = Q(h, 9, hn);
                var jn = ua.shift();
                f = Q(g, 10, jn);
                var hg = ua.shift();
                e = Q(f, 11, hg);
                var kn = ua.shift();
                const zw = d = Q(e, 12, kn);
                if (1 === gg.length)
                    var ig = sL(zw);
                else {
                    var ln = sL(zw)
                      , Fe = void 0
                      , Li = void 0
                      , Mi = void 0
                      , Ni = gg[1];
                    if (0 === Ni.length)
                        throw Error("Cannot decode empty GPC segment string.");
                    const na = lL(Ni, 3)
                      , ja = jL(na.slice(0, 2));
                    if (0 > ja || 1 < ja)
                        throw Error(`Attempting to decode unknown GPC segment subsection type ${ja}.`);
                    Mi = ja + 1;
                    const jg = jL(na.charAt(2));
                    var Ge = new rL;
                    Li = Q(Ge, 2, Mi);
                    Fe = $i(Li, 1, !!jg);
                    ig = H(ln, 2, Fe)
                }
                const Aw = D(ig, qL, 1);
                if (1 === Fi(Aw, 5) || 1 === Fi(Aw, 6))
                    return !0;
                break;
            case 10:
                if (0 === ic.length)
                    throw Error("Cannot decode empty USCO section string.");
                const kg = ic.split(".");
                if (2 < kg.length)
                    throw Error(`Expected at most 2 segments but got ${kg.length} when decoding ${ic}.`);
                var lg = void 0
                  , Oi = void 0
                  , pb = void 0
                  , Pi = void 0
                  , Qi = void 0
                  , mg = void 0
                  , ng = void 0
                  , og = void 0
                  , pg = void 0
                  , qg = void 0
                  , Pb = void 0
                  , vc = void 0
                  , Ab = void 0
                  , qb = void 0
                  , Ri = void 0
                  , He = void 0
                  , Ie = void 0
                  , rb = void 0
                  , Ea = kg[0];
                if (0 === Ea.length)
                    throw Error("Cannot decode empty core segment string.");
                let Si = lL(Ea, CL);
                const mn = jL(Si.slice(0, 6));
                Si = Si.slice(6);
                if (1 !== mn)
                    throw Error(`Unable to decode unsupported USCO Section specification version ${mn} - only version 1 is supported.`);
                let nn = 0;
                const Ua = [];
                for (let na = 0; na < BL.length; na++) {
                    const ja = BL[na];
                    Ua.push(jL(Si.slice(nn, nn + ja)));
                    nn += ja
                }
                var db = new xL;
                rb = bj(db, 1, mn);
                var sb = Ua.shift();
                Ie = Q(rb, 2, sb);
                var Va = Ua.shift();
                He = Q(Ie, 3, Va);
                var Qb = Ua.shift();
                Ri = Q(He, 4, Qb);
                var Ti = Ua.shift();
                qb = Q(Ri, 5, Ti);
                var Ui = Ua.shift();
                Ab = Q(qb, 6, Ui);
                var Oc = new wL
                  , Vi = Ua.shift();
                vc = Q(Oc, 1, Vi);
                var rg = Ua.shift();
                Pb = Q(vc, 2, rg);
                var sg = Ua.shift();
                qg = Q(Pb, 3, sg);
                var Td = Ua.shift();
                pg = Q(qg, 4, Td);
                var on = Ua.shift();
                og = Q(pg, 5, on);
                var tg = Ua.shift();
                ng = Q(og, 6, tg);
                var Wi = Ua.shift();
                mg = Q(ng, 7, Wi);
                Qi = H(Ab, 7, mg);
                var HQ = Ua.shift();
                Pi = Q(Qi, 8, HQ);
                var IQ = Ua.shift();
                pb = Q(Pi, 9, IQ);
                var JQ = Ua.shift();
                Oi = Q(pb, 10, JQ);
                var KQ = Ua.shift();
                const Bw = lg = Q(Oi, 11, KQ);
                if (1 === kg.length)
                    var Cw = zL(Bw);
                else {
                    var LQ = zL(Bw)
                      , Dw = void 0
                      , Ew = void 0
                      , Fw = void 0
                      , Gw = kg[1];
                    if (0 === Gw.length)
                        throw Error("Cannot decode empty GPC segment string.");
                    const na = lL(Gw, 3)
                      , ja = jL(na.slice(0, 2));
                    if (0 > ja || 1 < ja)
                        throw Error(`Attempting to decode unknown GPC segment subsection type ${ja}.`);
                    Fw = ja + 1;
                    const jg = jL(na.charAt(2));
                    var MQ = new yL;
                    Ew = Q(MQ, 2, Fw);
                    Dw = $i(Ew, 1, !!jg);
                    Cw = H(LQ, 2, Dw)
                }
                const Hw = D(Cw, xL, 1);
                if (1 === Fi(Hw, 5) || 1 === Fi(Hw, 6))
                    return !0;
                break;
            case 12:
                if (0 === ic.length)
                    throw Error("Cannot decode empty usct section string.");
                const ug = ic.split(".");
                if (2 < ug.length)
                    throw Error(`Expected at most 2 segments but got ${ug.length} when decoding ${ic}.`);
                var NQ = void 0
                  , Iw = void 0
                  , Jw = void 0
                  , Kw = void 0
                  , Lw = void 0
                  , Mw = void 0
                  , Nw = void 0
                  , Ow = void 0
                  , Pw = void 0
                  , Qw = void 0
                  , Rw = void 0
                  , Sw = void 0
                  , Tw = void 0
                  , Uw = void 0
                  , Vw = void 0
                  , Ww = void 0
                  , Xw = void 0
                  , Yw = void 0
                  , Zw = void 0
                  , $w = void 0
                  , ax = void 0
                  , bx = void 0
                  , cx = ug[0];
                if (0 === cx.length)
                    throw Error("Cannot decode empty core segment string.");
                let Xi = lL(cx, KL);
                const pn = jL(Xi.slice(0, 6));
                Xi = Xi.slice(6);
                if (1 !== pn)
                    throw Error(`Unable to decode unsupported USCT Section specification version ${pn} - only version 1 is supported.`);
                let qn = 0;
                const ya = [];
                for (let na = 0; na < JL.length; na++) {
                    const ja = JL[na];
                    ya.push(jL(Xi.slice(qn, qn + ja)));
                    qn += ja
                }
                var OQ = new FL;
                bx = bj(OQ, 1, pn);
                var PQ = ya.shift();
                ax = Q(bx, 2, PQ);
                var QQ = ya.shift();
                $w = Q(ax, 3, QQ);
                var RQ = ya.shift();
                Zw = Q($w, 4, RQ);
                var SQ = ya.shift();
                Yw = Q(Zw, 5, SQ);
                var TQ = ya.shift();
                Xw = Q(Yw, 6, TQ);
                var UQ = new EL
                  , VQ = ya.shift();
                Ww = Q(UQ, 1, VQ);
                var WQ = ya.shift();
                Vw = Q(Ww, 2, WQ);
                var XQ = ya.shift();
                Uw = Q(Vw, 3, XQ);
                var YQ = ya.shift();
                Tw = Q(Uw, 4, YQ);
                var ZQ = ya.shift();
                Sw = Q(Tw, 5, ZQ);
                var $Q = ya.shift();
                Rw = Q(Sw, 6, $Q);
                var aR = ya.shift();
                Qw = Q(Rw, 7, aR);
                var bR = ya.shift();
                Pw = Q(Qw, 8, bR);
                Ow = H(Xw, 7, Pw);
                var cR = new DL
                  , dR = ya.shift();
                Nw = Q(cR, 1, dR);
                var eR = ya.shift();
                Mw = Q(Nw, 2, eR);
                var fR = ya.shift();
                Lw = Q(Mw, 3, fR);
                Kw = H(Ow, 8, Lw);
                var gR = ya.shift();
                Jw = Q(Kw, 9, gR);
                var hR = ya.shift();
                Iw = Q(Jw, 10, hR);
                var iR = ya.shift();
                const dx = NQ = Q(Iw, 11, iR);
                if (1 === ug.length)
                    var ex = HL(dx);
                else {
                    var jR = HL(dx)
                      , fx = void 0
                      , gx = void 0
                      , hx = void 0
                      , ix = ug[1];
                    if (0 === ix.length)
                        throw Error("Cannot decode empty GPC segment string.");
                    const na = lL(ix, 3)
                      , ja = jL(na.slice(0, 2));
                    if (0 > ja || 1 < ja)
                        throw Error(`Attempting to decode unknown GPC segment subsection type ${ja}.`);
                    hx = ja + 1;
                    const jg = jL(na.charAt(2));
                    var kR = new GL;
                    gx = Q(kR, 2, hx);
                    fx = $i(gx, 1, !!jg);
                    ex = H(jR, 2, fx)
                }
                const jx = D(ex, FL, 1);
                if (1 === Fi(jx, 5) || 1 === Fi(jx, 6))
                    return !0;
                break;
            case 9:
                if (0 === ic.length)
                    throw Error("Cannot decode empty USVA section string.");
                let Yi = lL(ic, OL);
                const rn = jL(Yi.slice(0, 6));
                Yi = Yi.slice(6);
                if (1 !== rn)
                    throw Error(`Unable to decode unsupported USVA Section specification version ${rn} - only version 1 is supported.`);
                let sn = 0;
                const La = [];
                for (let na = 0; na < NL.length; na++) {
                    const ja = NL[na];
                    La.push(jL(Yi.slice(sn, sn + ja)));
                    sn += ja
                }
                var lR = rn
                  , mR = new ML
                  , nR = bj(mR, 1, lR)
                  , oR = La.shift()
                  , pR = Q(nR, 2, oR)
                  , qR = La.shift()
                  , rR = Q(pR, 3, qR)
                  , sR = La.shift()
                  , tR = Q(rR, 4, sR)
                  , uR = La.shift()
                  , vR = Q(tR, 5, uR)
                  , wR = La.shift();
                var xR = Q(vR, 6, wR);
                var yR = new LL
                  , zR = La.shift()
                  , AR = Q(yR, 1, zR)
                  , BR = La.shift()
                  , CR = Q(AR, 2, BR)
                  , DR = La.shift()
                  , ER = Q(CR, 3, DR)
                  , FR = La.shift()
                  , GR = Q(ER, 4, FR)
                  , HR = La.shift()
                  , IR = Q(GR, 5, HR)
                  , JR = La.shift()
                  , KR = Q(IR, 6, JR)
                  , LR = La.shift()
                  , MR = Q(KR, 7, LR)
                  , NR = La.shift();
                var OR = Q(MR, 8, NR);
                var PR = H(xR, 7, OR)
                  , QR = La.shift()
                  , RR = Q(PR, 8, QR)
                  , SR = La.shift()
                  , TR = Q(RR, 9, SR)
                  , UR = La.shift()
                  , VR = Q(TR, 10, UR)
                  , WR = La.shift()
                  , kx = Q(VR, 11, WR);
                if (1 === Fi(kx, 5) || 1 === Fi(kx, 6))
                    return !0
            }
        }
        return !1
    }
    var nN = class extends T {
        constructor(a) {
            var {gppApiDetectionMode: b, timeoutMs: c} = {};
            super();
            this.caller = new QE(a,b && 1 !== b && 3 !== b ? "__gppLocator_non_existent" : "__gppLocator",b && 1 !== b && 2 !== b ? void 0 : d=>"function" === typeof d.__gpp,iN);
            this.caller.A.set("addEventListener", cN);
            this.caller.j.set("addEventListener", fN);
            this.caller.A.set("removeEventListener", dN);
            this.caller.j.set("removeEventListener", gN);
            this.caller.A.set("getDataWithCallback", eN);
            this.caller.j.set("getDataWithCallback", hN);
            this.timeoutMs = c ?? 500
        }
        i() {
            this.caller.ka();
            super.i()
        }
        addEventListener(a) {
            const b = Hb(()=>{
                a(kN, !0)
            }
            )
              , c = -1 === this.timeoutMs ? void 0 : setTimeout(()=>{
                b()
            }
            , this.timeoutMs);
            PE(this.caller, "addEventListener", {
                listener: (d,e)=>{
                    clearTimeout(c);
                    try {
                        if (void 0 === d.pingData?.gppVersion || "1" === d.pingData.gppVersion || "1.0" === d.pingData.gppVersion) {
                            this.removeEventListener(d.listenerId);
                            var f = {
                                eventName: "signalStatus",
                                data: "ready",
                                pingData: {
                                    internalErrorState: 1,
                                    gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                    applicableSections: [-1]
                                }
                            }
                        } else
                            Array.isArray(d.pingData.applicableSections) && 0 !== d.pingData.applicableSections.length ? f = d : (this.removeEventListener(d.listenerId),
                            f = {
                                eventName: "signalStatus",
                                data: "ready",
                                pingData: {
                                    internalErrorState: 2,
                                    gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                                    applicableSections: [-1]
                                }
                            });
                        a(f, e)
                    } catch {
                        if (d?.listenerId)
                            try {
                                this.removeEventListener(d.listenerId)
                            } catch {
                                a(lN, !0);
                                return
                            }
                        a(mN, !0)
                    }
                }
            })
        }
        removeEventListener(a) {
            PE(this.caller, "removeEventListener", {
                listenerId: a
            })
        }
    }
    ;
    const mN = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {
            internalErrorState: 2,
            gppString: "GPP_ERROR_STRING_UNAVAILABLE",
            applicableSections: [-1]
        },
        listenerId: -1
    }
      , kN = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {
            gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
            internalErrorState: 2,
            applicableSections: [-1]
        },
        listenerId: -1
    }
      , lN = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {
            gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
            internalErrorState: 2,
            applicableSections: [-1]
        },
        listenerId: -1
    };
    function oN(a) {
        return !a || 1 === a.length && -1 === a[0]
    }
    ;function pN(a, b) {
        if (b.internalErrorState)
            dj(a, 11, b.gppString);
        else if (oN(b.applicableSections)) {
            var c = oi(a, 10, b.applicableSections, jh);
            Zi(c, 12, !1)
        } else {
            c = !1;
            try {
                c = jN(b.gppString)
            } catch (d) {
                JA(1182, d)
            }
            a = oi(a, 10, b.applicableSections, jh);
            b = dj(a, 11, b.gppString);
            Zi(b, 12, c)
        }
    }
    function qN(a) {
        const b = new nN(a.pubWin);
        if (!NE(b.caller))
            return Promise.resolve(null);
        const c = FJ()
          , d = Z(c, 35);
        if (d)
            return Promise.resolve(d);
        const e = new Promise(f=>{
            f = {
                resolve: f
            };
            const g = Z(c, 36, []);
            g.push(f);
            KJ(c, 36, g)
        }
        );
        d || null === d || (KJ(c, 35, null),
        b.addEventListener(f=>{
            if ("ready" === f.pingData.signalStatus || oN(f.pingData.applicableSections)) {
                f = f.pingData;
                KJ(c, 35, f);
                pN(a.g, f);
                for (const g of Z(c, 36, []))
                    g.resolve(f);
                KJ(c, 36, [])
            }
        }
        ));
        return e
    }
    ;function rN(a) {
        a.easpi = x(zu);
        x(nu) || (a.asla = .4,
        a.asaa = -1);
        a.asro = x(ru);
        x(yu) && (a.sugawps = !0);
        const b = Xb(cu);
        b.length && (a.seiel = b.join("~"));
        x(iu) && (a.slmct = Vb(lu),
        a.samct = Vb(Vt))
    }
    ;function sN(a, b) {
        return OD({
            J: a,
            Xe: 3E3,
            Ze: a.innerWidth > vo ? 650 : 0,
            wa: DA,
            Vf: b,
            Ej: x(fv)
        })
    }
    ;var tN = a=>{
        let b = 0;
        try {
            b |= wo(a)
        } catch (c) {
            b |= 32
        }
        return b
    }
    ;
    var uN = a=>{
        let b = 0;
        try {
            b |= wo(a),
            b |= xo(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    }
    ;
    function vN(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }
    function wN(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }
    function xN(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    }
    function yN(a, b) {
        if (3 == vN(b))
            var c = !1;
        else
            a(),
            c = !0;
        if (!c) {
            const d = ()=>{
                Rb(b, "prerenderingchange", d);
                a()
            }
            ;
            Ob(b, "prerenderingchange", d)
        }
    }
    ;var zN = (a,b,c=!0,d=!1)=>{
        let e = 0;
        try {
            e |= wo(a);
            var f;
            if (!(f = !a.navigator)) {
                var g = a.navigator;
                f = "brave"in g && "isBrave"in g.brave || !1
            }
            e |= f || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            e |= xo(a, 2500, d);
            d || (e |= zo(a));
            !c || b && rG(b) || (e |= 4194304)
        } catch (h) {
            e |= 32
        }
        return e
    }
    ;
    function AN(a, b, c, d=null) {
        let e = wo(a);
        PD(a.navigator?.userAgent) && (e |= 1048576);
        const f = a.innerWidth;
        1200 > f && (e |= 65536);
        const g = a.innerHeight;
        650 > g && (e |= 2097152);
        d && 0 === e && (d = 3 === d ? "left" : "right",
        (b = BN({
            J: a,
            zg: b,
            fh: 1,
            position: d,
            R: f,
            U: g,
            rb: new Set,
            minWidth: 120,
            minHeight: 500,
            yd: !1
        })) ? c && tx(a).sideRailPlasParam.set(d, `${b.width}x${b.height}_${String(d).charAt(0)}`) : e |= 16);
        return e
    }
    function CN(a) {
        if (x(St))
            return [...tx(a).sideRailPlasParam.values()].join("|");
        if (0 !== AN(a, !0, !1))
            return "";
        const b = []
          , c = a.innerWidth
          , d = a.innerHeight;
        for (const e of ["left", "right"]) {
            const f = BN({
                J: a,
                zg: !0,
                fh: 1,
                position: e,
                R: c,
                U: d,
                rb: new Set,
                minWidth: 120,
                minHeight: 500,
                yd: !1
            });
            f && b.push(`${f.width}x${f.height}_${String(e).charAt(0)}`)
        }
        return b.join("|")
    }
    function DN(a, b) {
        return null !== ue(a, c=>c.nodeType === Node.ELEMENT_NODE && b.has(c))
    }
    function EN(a, b) {
        return ue(a, c=>c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position)
    }
    function FN(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }
    function GN(a, b) {
        const {top: c, left: d, bottom: e, right: f} = b.getBoundingClientRect();
        return 0 <= c && 0 <= d && e <= a.innerHeight && f <= a.innerWidth
    }
    function HN(a) {
        return Math.round(10 * Math.round(a / 10))
    }
    function IN(a) {
        return `${a.position}-${HN(a.R)}x${HN(a.U)}-${HN(a.scrollY + a.ec)}Y`
    }
    function JN(a) {
        return `f-${IN({
            position: a.position,
            ec: a.ec,
            scrollY: 0,
            R: a.R,
            U: a.U
        })}`
    }
    function KN(a, b) {
        a = Math.min(a ?? Infinity, b ?? Infinity);
        return Infinity !== a ? a : 0
    }
    function LN(a, b, c) {
        const d = tx(c.J).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0)
                  , g = Math.min(e.bottom + 10, c.U)
                  , h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.R);
                for (var k = .3 * c.R; f <= g; f += 10) {
                    if (0 < e && h < k) {
                        var l = JN({
                            position: "left",
                            ec: f,
                            R: c.R,
                            U: c.U
                        });
                        b.set(l, KN(b.get(l), h))
                    }
                    if (h < c.R && e > c.R - k) {
                        l = JN({
                            position: "right",
                            ec: f,
                            R: c.R,
                            U: c.U
                        });
                        const m = c.R - e;
                        b.set(l, KN(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    }
    function MN(a, b) {
        const c = b.J
          , d = b.yd;
        var e = `f-${HN(b.R)}x${HN(b.U)}`;
        a.has(e) || (a.set(e, 0),
        e = FN(c),
        d ? (NN(a, b, e.filter(f=>GN(c, f))),
        ON(c, e.filter(f=>!GN(c, f)))) : NN(a, b, e))
    }
    function NN(a, b, c) {
        var d = b.rb;
        const e = b.J;
        tx(e).sideRailProcessedFixedElements.clear();
        d = new Set([...Array.from(e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...d]);
        for (const f of c)
            DN(f, d) || LN(f, a, b)
    }
    function PN(a) {
        if (1200 > a.R || 650 > a.U)
            return null;
        var b = tx(a.J).sideRailAvailableSpace;
        a.zg || MN(b, {
            J: a.J,
            R: a.R,
            U: a.U,
            rb: a.rb,
            yd: a.yd
        });
        const c = [];
        var d = .9 * a.U
          , e = Go(a.J)
          , f = (a.U - d) / 2
          , g = f
          , h = d / 7;
        for (var k = 0; 8 > k; k++) {
            var l = c
              , m = l.push;
            a: {
                var n = g;
                var p = a.position
                  , q = b
                  , v = {
                    J: a.J,
                    R: a.R,
                    U: a.U,
                    rb: a.rb
                };
                const J = JN({
                    position: p,
                    ec: n,
                    R: v.R,
                    U: v.U
                })
                  , G = IN({
                    position: p,
                    ec: n,
                    scrollY: e,
                    R: v.R,
                    U: v.U
                });
                if (q.has(G)) {
                    n = KN(q.get(J), q.get(G));
                    break a
                }
                const K = "left" === p ? 20 : v.R - 20;
                let M = K;
                p = .3 * v.R / 5 * ("left" === p ? 1 : -1);
                for (let Ba = 0; 6 > Ba; Ba++) {
                    var A = mx(v.J.document, {
                        x: Math.round(M),
                        y: Math.round(n)
                    })
                      , B = DN(A, v.rb)
                      , E = EN(A, v.J);
                    if (!B && null !== E) {
                        LN(E, q, v);
                        q.delete(G);
                        break
                    }
                    B || (B = v,
                    "true" === A.getAttribute("google-side-rail-overlap") ? B = !0 : "false" === A.getAttribute("google-side-rail-overlap") ? B = !1 : (E = A.offsetHeight >= .25 * B.U,
                    B = A.offsetWidth >= .9 * B.R && E));
                    if (B)
                        q.set(G, Math.round(Math.abs(M - K) + 20));
                    else if (M !== K)
                        M -= p,
                        p /= 2;
                    else {
                        q.set(G, 0);
                        break
                    }
                    M += p
                }
                n = KN(q.get(J), q.get(G))
            }
            m.call(l, n);
            g += h
        }
        b = a.fh;
        e = a.position;
        d = Math.round(d / 8);
        f = Math.round(f);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (l = 0; l < c.length; l++) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[l]; )
                m.pop();
            h[l] = 0 === m.length ? 0 : m[m.length - 1] + 1;
            m.push(l)
        }
        m = [];
        k = c.length - 1;
        l = Array(c.length).fill(0);
        for (n = k; 0 <= n; n--) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[n]; )
                m.pop();
            l[n] = 0 === m.length ? k : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (k = 0; k < c.length; k++)
            if (n = {
                position: e,
                width: Math.round(c[k]),
                height: Math.round((l[k] - h[k] + 1) * d),
                offsetY: f + h[k] * d
            },
            q = n.width >= g && n.height >= a,
            0 === b && q) {
                m = n;
                break
            } else
                1 === b && q && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    }
    function ON(a, b) {
        const c = tx(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(()=>{
                setTimeout(()=>{
                    QN(a);
                    for (const e of c.i)
                        e()
                }
                , 500)
            }
            );
            for (const e of b)
                d.observe(e, {
                    attributes: !0
                });
            c.g = d
        }
    }
    function QN(a) {
        ({sideRailAvailableSpace: a} = tx(a));
        const b = Array.from(a.keys()).filter(c=>c.startsWith("f-"));
        for (const c of b)
            a.delete(c)
    }
    function BN(a) {
        if (a.Va)
            return a.Va.ic(1228, ()=>PN(a)) || null;
        try {
            return PN(a)
        } catch {}
        return null
    }
    ;const RN = {
        [27]: 512,
        [26]: 128
    };
    var SN = (a,b,c,d)=>{
        switch (c) {
        case 1:
        case 2:
            return 0 === sN(a, c);
        case 3:
        case 4:
            return 0 === AN(a, !1, !1, c);
        case 8:
            return 0 == zN(a, d, !("on" === b.google_adtest || ZK(a.location, "google_ia_debug")), x(gv));
        case 9:
            return b = !("on" === b.google_adtest || ZK(a.location, "google_scr_debug")),
            !vG(a, b, d);
        case 30:
            return 0 == jI(a);
        case 26:
            return 0 == uN(a);
        case 27:
            return 0 === tN(a);
        case 40:
            return !0;
        default:
            return !1
        }
    }
      , TN = (a,b,c,d)=>{
        switch (c) {
        case 0:
        case 40:
        case 10:
        case 11:
            return 0;
        case 1:
        case 2:
            return sN(a, c);
        case 3:
        case 4:
            return AN(a, x(Tt), x(St), c);
        case 8:
            return zN(a, d, !("on" === b.google_adtest || ZK(a.location, "google_ia_debug")), x(gv));
        case 9:
            return vG(a, !("on" === b.google_adtest || ZK(a.location, "google_scr_debug")), d);
        case 16:
            return Uv(b, a) ? 0 : 8388608;
        case 30:
            return jI(a);
        case 26:
            return uN(a);
        case 27:
            return tN(a);
        default:
            return 32
        }
    }
      , UN = (a,b,c)=>{
        const d = b.google_reactive_ad_format;
        if (!Uc(d))
            return !1;
        a = Ze(a);
        if (!a || !SN(a, b, d, c))
            return !1;
        b = tx(a);
        if (Do(b, d))
            return !1;
        b.adCount[d] || (b.adCount[d] = 0);
        b.adCount[d]++;
        return !0
    }
      , WN = a=>{
        const b = a.google_reactive_ad_format;
        return !a.google_reactive_ads_config && VN(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b && 41 !== b
    }
      , XN = a=>{
        if (!a.hash)
            return null;
        let b = null;
        df(WK, c=>{
            !b && ZK(a, c) && (b = XK[c])
        }
        );
        return b
    }
      , ZN = (a,b)=>{
        const c = tx(a).tagSpecificState[1] || null;
        null != c && null == c.debugCard && df(YK, d=>{
            !c.debugCardRequested && "number" === typeof d && bL(d, a.location) && (c.debugCardRequested = !0,
            YN(a, b, e=>{
                c.debugCard = e.createDebugCard(d, a)
            }
            ))
        }
        )
    }
      , aO = (a,b,c)=>{
        if (!b)
            return null;
        const d = tx(b);
        let e = 0;
        df(Vc, f=>{
            const g = RN[f];
            g && 0 === $N(a, b, f, c) && (e |= g)
        }
        );
        d.wasPlaTagProcessed && (e |= 256);
        a.google_reactive_tag_first && (e |= 1024);
        return e ? "" + e : null
    }
      , bO = (a,b,c)=>{
        const d = [];
        df(Vc, e=>{
            const f = $N(b, a, e, c);
            0 !== f && d.push(e + ":" + f)
        }
        );
        return d.join(",") || null
    }
      , cO = a=>{
        const b = []
          , c = {};
        df(a, (d,e)=>{
            if ((e = to[e]) && !c[e]) {
                c[e] = !0;
                if (d)
                    d = 1;
                else if (!1 === d)
                    d = 2;
                else
                    return;
                b.push(e + ":" + d)
            }
        }
        );
        return b.join(",")
    }
      , dO = a=>{
        a = a.overlays;
        if (!a)
            return "";
        a = a.bottom;
        return "boolean" === typeof a ? a ? "1" : "0" : ""
    }
      , $N = (a,b,c,d)=>{
        if (!b)
            return 256;
        let e = 0;
        const f = tx(b)
          , g = Do(f, c);
        if (a.google_reactive_ad_format == c || g)
            e |= 64;
        let h = !1;
        df(f.reactiveTypeDisabledByPublisher, (k,l)=>{
            String(c) === String(l) && (h = !0)
        }
        );
        return h && XN(b.location) !== c && (e |= 128,
        2 == c || 1 == c || 3 == c || 4 == c || 8 == c) ? e : e | TN(b, a, c, d)
    }
      , eO = (a,b)=>{
        if (a) {
            var c = tx(a)
              , d = {};
            df(b, (e,f)=>{
                (f = to[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
            }
            );
            df(Vc, e=>{
                d[uo[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
            }
            )
        }
    }
      , fO = (a,b,c)=>{
        b = EA.La(b, c);
        return UK(3, window, a).Zc.then(b)
    }
      , YN = (a,b,c)=>{
        c = EA.La(212, c);
        UK(4, a, b).Zc.then(c)
    }
      , gO = (a,b,c)=>{
        a.dataset.adsbygoogleStatus = "reserved";
        a.className += " adsbygoogle-noablate";
        c.adsbygoogle || (c.adsbygoogle = [],
        $e(c.document, wj`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
        c.adsbygoogle.push({
            element: a,
            params: b
        })
    }
      , hO = a=>{
        a = a.google_reactive_ad_format;
        return Uc(a) ? "" + a : null
    }
      , VN = a=>!!hO(a) || null != a.google_pgb_reactive
      , iO = a=>{
        a = hO(a);
        return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a || 41 == a
    }
    ;
    var jO = (a,b,c,d=null)=>{
        const e = g=>{
            let h;
            try {
                h = JSON.parse(g.data)
            } catch (k) {
                return
            }
            !h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
        }
        ;
        Ob(a, "message", e);
        let f = !1;
        return ()=>{
            let g = !1;
            f || (f = !0,
            g = Rb(a, "message", e));
            return g
        }
    }
      , kO = (a,b,c,d=null)=>{
        const e = jO(a, b, Eb(c, ()=>e()), d);
        return e
    }
      , lO = (a,b,c,d,e)=>{
        if (!(0 >= e) && (c.googMsgType = b,
        a.postMessage(JSON.stringify(c), d),
        a = a.frames))
            for (let f = 0; f < a.length; ++f)
                1 < e && lO(a[f], b, c, d, --e)
    }
    ;
    function mO(a) {
        return "number" === typeof a.google_reactive_sra_index
    }
    function nO(a, b, c) {
        const d = b.J || b.pubWin
          , e = b.F;
        var f = bO(d, e, c);
        e.google_reactive_plat = f;
        (f = cO(a)) && (e.google_reactive_plaf = f);
        (f = dO(a)) && (e.google_reactive_fba = f);
        (f = CN(d)) && (e.google_plas = f);
        oO(a, e);
        f = XN(b.pubWin.location);
        pO(a, f, e);
        f ? (e.fra = f,
        e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        rN(e);
        e.fsapi = !0;
        8 !== f && (f = uG(c, 86400),
        f?.length && (e.vmsli = Math.floor((Date.now() - Math.max(...f)) / 6E4)));
        xk() || PM(b.pubWin.top);
        f = kO(b.pubWin, "rsrai", HA(429, (g,h)=>qO(b, d, e.google_ad_client, a, g, h, c)), HA(430, (g,h)=>Jo(b.pubWin, "431", DA, h)));
        b.j.push(f);
        tx(d).wasReactiveTagRequestSent = !0;
        rO(b, a, c)
    }
    function rO(a, b, c) {
        const d = a.F
          , e = xa(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = kO(a.pubWin, "apcnf", HA(353, (f,g)=>{
            const h = dd(a.sa.jb, SK());
            var k = a.pubWin
              , l = d.google_ad_client;
            return Bf(g.origin) ? MM(k, l, e, f.config, c, h, null) : !1
        }
        ), HA(353, (f,g)=>Jo(a.pubWin, "353", DA, g)));
        a.j.push(b)
    }
    function qO(a, b, c, d, e, f, g) {
        if (!Bf(f.origin))
            return !1;
        f = e.data;
        if (!Array.isArray(f))
            return !1;
        if (!BJ(b, 1))
            return !0;
        f && lk(6, [f]);
        e = e.amaConfig;
        const h = []
          , k = []
          , l = tx(b);
        let m = null;
        for (let n = 0; n < f.length; n++) {
            if (!f[n])
                continue;
            const p = f[n]
              , q = p.adFormat;
            l && p.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[q] = !0);
            if (!p.noCreative) {
                p.google_reactive_sra_index = n;
                if (9 === q && e) {
                    p.pubVars = Object.assign(p.pubVars || {}, sO(d, p));
                    const v = new wG;
                    if (pG(v, p) && v.C(p)) {
                        m = v;
                        continue
                    }
                }
                h.push(p);
                k.push(q)
            }
        }
        h.length && fO(a.sa.Yg, 522, n=>{
            tO(h, b, n, d, g)
        }
        );
        e && MM(b, c, d, e, g, a.sa.jb, m);
        return !0
    }
    function sO(a, b) {
        const c = b.adFormat
          , d = b.adKey;
        delete b.adKey;
        const e = {};
        a = a.page_level_pubvars;
        xa(a) && Object.assign(e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        30 === c && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }
    function tO(a, b, c, d, e) {
        const f = [];
        for (let g = 0; g < a.length; g++) {
            const h = a[g]
              , k = h.adFormat
              , l = h.adKey
              , m = c.configProcessorForAdFormat(k);
            k && m && l && (h.pubVars = sO(d, h),
            delete h.google_reactive_sra_index,
            f.push(k),
            GA(466, ()=>m.verifyAndProcessConfig(b, h, e)))
        }
    }
    function oO(a, b) {
        const c = [];
        let d = !1;
        df(to, (e,f)=>{
            let g;
            a.hasOwnProperty(f) && (f = a[f],
            f?.google_ad_channel && (g = String(f.google_ad_channel)));
            --e;
            c[e] && "+" !== c[e] || (c[e] = g ? g.replace(/,/g, "+") : "+",
            d || (d = !!g))
        }
        );
        d && (b.google_reactive_sra_channels = c.join(","))
    }
    function pO(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if ("on" === a.google_adtest || "on" === d?.google_adtest || b)
                c.google_adtest = "on"
        }
    }
    ;Sb("script");
    var uO = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };
    function vO(a, b) {
        if (!Uv(b, a))
            return ()=>{}
            ;
        a = wO(b, a);
        if (!a)
            return ()=>{}
            ;
        const c = PJ();
        b = Xc(b);
        const d = {
            xb: a,
            F: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return ()=>ab(c, d)
    }
    function wO(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a)
            return null;
        for (a = a.parentElement; a && !Zv.test(a.className); )
            a = a.parentElement;
        return a
    }
    function xO(a, b) {
        for (let f = 0; f < a.childNodes.length; f++) {
            const g = {}
              , h = a.childNodes[f];
            var c = h.style
              , d = ["width", "height"];
            for (let k = 0; k < d.length; k++) {
                const l = "google_ad_" + d[k];
                if (!g.hasOwnProperty(l)) {
                    var e = mf(c[d[k]]);
                    e = null === e ? null : Math.round(e);
                    null != e && (g[l] = e)
                }
            }
            if (g.google_ad_width == b.google_ad_width && g.google_ad_height == b.google_ad_height)
                return h
        }
        return null
    }
    function yO(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus,
        delete c.dataset.adStatus)
    }
    function zO(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.g != c) {
            a.g = c;
            a = PJ();
            for (const d of a)
                if (d.xb.offsetWidth != d.offsetWidth || d.F.google_full_width_responsive_allowed)
                    d.offsetWidth = d.xb.offsetWidth,
                    GA(467, ()=>{
                        var e = d.xb
                          , f = d.F;
                        const g = xO(e, f);
                        f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "",
                        e.style.marginRight = f.gfwromr || "",
                        e.style.height = f.gfwroh ? `${f.gfwroh}px` : "",
                        e.style.width = f.gfwrow ? `${f.gfwrow}px` : "",
                        e.style.zIndex = f.gfwroz || "",
                        delete f.google_full_width_responsive_allowed);
                        delete f.google_ad_format;
                        delete f.google_ad_width;
                        delete f.google_ad_height;
                        delete f.google_content_recommendation_ui_type;
                        delete f.google_content_recommendation_rows_num;
                        delete f.google_content_recommendation_columns_num;
                        b.google_spfd(e, f, b);
                        const h = xO(e, f);
                        !h && g && 1 == e.childNodes.length ? (yO(g, !1),
                        f.google_reactive_ad_format = 16,
                        f.google_ad_section = "responsive_resize",
                        gO(e, f, b)) : h && g && h != g && (yO(g, !1),
                        yO(h, !0))
                    }
                    )
        }
    }
    var AO = class extends T {
        constructor() {
            super(...arguments);
            this.g = null
        }
        K(a) {
            const b = FJ();
            if (!Z(b, 27, !1)) {
                KJ(b, 27, !0);
                this.g = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = ()=>{
                    zO(this, a)
                }
                ;
                Ob(a, "resize", c);
                ap(this, ()=>{
                    Rb(a, "resize", c)
                }
                )
            }
        }
    }
    ;
    var BO = class {
        constructor(a, b) {
            this.J = a;
            this.xb = b;
            this.g = null;
            this.j = 0
        }
        i() {
            10 <= ++this.j && r.clearInterval(this.g);
            var a = Xv(this.J, this.xb);
            Yv(this.J, this.xb, a);
            a = Tv(this.xb, this.J);
            null != a && 0 === a.x || r.clearInterval(this.g)
        }
    }
    ;
    var CO = class {
        constructor(a) {
            this.i = 0;
            this.g = this.H = null;
            this.D = 0;
            this.j = [];
            this.zc = this.C = "";
            this.l = this.B = null;
            this.G = !1;
            this.J = a.J;
            this.pubWin = a.pubWin;
            this.F = a.F;
            this.na = a.na;
            this.sa = a.sa;
            this.ub = a.ub;
            this.ha = a.ha
        }
    }
    ;
    function DO(a, b, c) {
        c = HK(a, $E(b, {
            Gi: x(kv) && c
        }));
        c = dj(c, 2, b.tcString);
        c = dj(c, 4, b.addtlConsent || "");
        bi(c, 7, dh(b.internalErrorState));
        c = !bF(b);
        Zi(a, 9, c);
        null != b.gdprApplies && Zi(a, 3, b.gdprApplies)
    }
    function EO(a) {
        const b = new hF(a.pubWin,{
            timeoutMs: -1,
            Nh: !0
        });
        if (!dF(b))
            return Promise.resolve(null);
        const c = FJ()
          , d = Z(c, 24);
        if (d)
            return Promise.resolve(d);
        const e = new Promise(f=>{
            f = {
                resolve: f
            };
            const g = Z(c, 25, []);
            g.push(f);
            KJ(c, 25, g)
        }
        );
        d || null === d || (KJ(c, 24, null),
        b.addEventListener(f=>{
            if (ZE(f)) {
                KJ(c, 24, f);
                DO(a.g, f, a.na.g());
                for (const g of Z(c, 25, []))
                    g.resolve(f);
                KJ(c, 25, [])
            } else
                KJ(c, 24, null)
        }
        ));
        return e
    }
    ;function FO(a, b, c=1E5) {
        a -= b;
        return a >= c ? "M" : 0 <= a ? a : "-M"
    }
    ;var HO = (a,b,c)=>{
        const d = b.parentElement?.classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", ()=>GO(d));
        return kO(a, "adpnt", (e,f)=>{
            if (Fo(f, c.contentWindow)) {
                e = Io(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e),
                    a.googletag ?? (a.googletag = {
                        cmd: []
                    }),
                    a.googletag.queryIds = a.googletag.queryIds ?? [],
                    a.googletag.queryIds.push(e),
                    500 < a.googletag.queryIds.length && a.googletag.queryIds.shift()
                } catch {}
                d.dataset.adStatus = "filled";
                if (e)
                    switch (Vb(lv)) {
                    case 1:
                        b.id = b.id.replace(/(^[^\/]*)(\/.*$)?/, `$1/${e}`);
                        break;
                    case 2:
                        e = `gqid/${e}`,
                        f = document,
                        e && (f = b.parentElement?.querySelector("INS[data-aqiep]") ?? af("INS", f),
                        f.parentElement || (b.parentNode && b.parentNode.insertBefore(f, b.nextSibling),
                        z(f, {
                            height: "0px",
                            width: "0px"
                        }),
                        Ko(f),
                        f.setAttribute("data-aqiep", "1")),
                        f.id = e)
                    }
                e = !0
            } else
                e = !1;
            return e
        }
        )
    }
    ;
    function GO(a) {
        setTimeout(()=>{
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }
        , 1E3)
    }
    ;var IO = class {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    }
    ;
    var JO = class extends R {
        g() {
            return N(this, 6)
        }
        j() {
            return N(this, 7)
        }
        l() {
            return N(this, 10)
        }
    }
    ;
    var KO = class extends R {
        g() {
            return hi(this, 1, uh, 2)
        }
    }
    ;
    KO.O = [1];
    var LO = class extends R {
        g() {
            return N(this, 6)
        }
    }
    ;
    LO.O = [19];
    var MO = [13, 14];
    let NO = void 0;
    function OO() {
        hj(NO, jj);
        return NO
    }
    function PO(a) {
        hj(NO, Al);
        NO = a
    }
    ;function QO(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b)
                return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Tc(c, (d,e)=>Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }
    ;function RO(a, b, c) {
        try {
            if (!Bf(c.origin) || !Fo(c, a.g.contentWindow))
                return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.pa[d]) && a.Va.ic(168, ()=>{
            e.call(a, b, c)
        }
        )
    }
    class SO extends T {
        constructor(a, b) {
            var c = EA
              , d = DA;
            super();
            this.j = a;
            this.g = b;
            this.Va = c;
            this.wa = d;
            this.pa = {};
            this.xa = this.Va.La(168, (e,f)=>void RO(this, e, f));
            this.Qa = this.Va.La(169, (e,f)=>Jo(this.j, "ras::xsf", this.wa, f));
            this.T = [];
            this.X(this.pa);
            this.T.push(jO(this.j, "sth", this.xa, this.Qa))
        }
        i() {
            for (const a of this.T)
                a();
            this.T.length = 0;
            super.i()
        }
    }
    ;class TO extends SO {
    }
    ;function UO(a, b, c=null) {
        return new VO(a,b,c)
    }
    var VO = class extends TO {
        constructor(a, b, c) {
            super(a, b);
            this.A = c;
            this.C = w(gK);
            this.l = ()=>{}
            ;
            Ob(this.g, "load", this.l)
        }
        i() {
            Rb(this.g, "load", this.l);
            super.i()
        }
        X(a) {
            a["adsense-labs"] = b=>{
                if (b = Io(b).settings)
                    if (b = gj(Rj, JSON.parse(b)),
                    null != I(b, 1)) {
                        var c;
                        if (c = x(dt))
                            c = b.V,
                            c = 0 < vi(c, c[C], Nj, 4, 3, !1, !0).length;
                        if (c) {
                            var d = c = F(b, Nj, 4)
                              , e = this.C;
                            const h = new Am;
                            for (var f of d)
                                switch (f.getVersion()) {
                                case 1:
                                    Zi(h, 1, !0);
                                    break;
                                case 2:
                                    Zi(h, 2, !0)
                                }
                            f = new Bm;
                            f = wi(f, 1, Cm, h);
                            lK(e, f);
                            f = this.j;
                            e = this.A;
                            if (!Z(FJ(), 37, !1)) {
                                f = new YM(f);
                                for (var g of c)
                                    switch (g.getVersion()) {
                                    case 1:
                                        VM(f, "__gads", g, e);
                                        break;
                                    case 2:
                                        VM(f, "__gpi", g, e)
                                    }
                                KJ(FJ(), 37, !0)
                            }
                            bi(b, 4)
                        }
                        if (x(bt)) {
                            if (g = D(b, Nj, 5))
                                f = this.j,
                                Z(FJ(), 40, !1) || (f = new IO(f,{
                                    Vg: !1,
                                    Wg: !1
                                }),
                                c = Di(g, 2) - Date.now() / 1E3,
                                c = {
                                    Id: Math.max(c, 0),
                                    path: O(g, 3),
                                    domain: O(g, 4),
                                    gh: !1
                                },
                                (new bk(f.i.document)).set("__eoi", g.getValue(), c),
                                KJ(FJ(), 40, !0));
                            bi(b, 5)
                        }
                        g = this.j;
                        f = O(b, 1) || "";
                        if (null != LK({
                            win: g,
                            Dd: OO()
                        }).g) {
                            c = LK({
                                win: g,
                                Dd: OO()
                            });
                            c = null != c.g ? QO(c.getValue()) : {};
                            null !== b && (c[f] = b.toJSON());
                            try {
                                g.localStorage.setItem("google_adsense_settings", JSON.stringify(c))
                            } catch (h) {}
                        }
                    }
            }
        }
    }
    ;
    function WO(a) {
        a.A = a.C;
        a.D.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        a.g.style.transition = "height 500ms";
        XO(a)
    }
    function YO(a, b) {
        a.g.contentWindow.postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }
    function XO(a) {
        const b = `rect(0px, ${a.g.width}px, ${a.A}px, 0px)`;
        a.g.style.clip = b;
        a.l.style.clip = b;
        a.g.setAttribute("height", a.A);
        a.g.style.height = a.A + "px";
        a.l.setAttribute("height", a.A);
        a.l.style.height = a.A + "px";
        a.D.style.height = a.A + "px"
    }
    function ZO(a, b) {
        b = lf(b.r_nh);
        a.C = null == b ? 0 : b;
        if (0 >= a.C)
            return "1";
        a.I = Ik(a.D).y;
        a.H = Go(a.j);
        if (a.I + a.A < a.H)
            return "2";
        if (a.I > Bo(a.j) - a.j.innerHeight)
            return "3";
        b = a.H;
        a.g.setAttribute("height", a.C);
        a.g.style.height = a.C + "px";
        a.l.style.overflow = "hidden";
        a.D.style.position = "relative";
        a.D.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        a.g.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.I, a.A);
        Bk(a.l, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.g.width}px, ${b}px, 0px)`;
        Bk(a.g, {
            clip: b
        });
        Bk(a.l, {
            clip: b
        });
        return "0"
    }
    class $O extends TO {
        constructor(a, b) {
            super(a.J, b);
            this.l = a.ha;
            this.D = this.l.parentElement && this.l.parentElement.classList.contains("adsbygoogle") ? this.l.parentElement : this.l;
            this.A = parseInt(this.l.style.height, 10);
            this.Ga = this.Pa = !1;
            this.ea = this.H = this.C = 0;
            this.Wc = this.A / 5;
            this.I = Ik(this.D).y;
            this.Cb = Kb(HA(651, ()=>{
                this.I = Ik(this.D).y;
                var c = this.H;
                this.H = Go(this.j);
                this.A < this.C ? (c = this.H - c,
                0 < c && (this.ea += c,
                this.ea >= this.Wc ? (WO(this),
                YO(this, this.C)) : (this.A = Math.min(this.C, this.A + c),
                YO(this, c),
                XO(this)))) : Rb(this.j, "scroll", this.M)
            }
            ), this);
            this.M = ()=>{
                var c = this.Cb;
                Xj.requestAnimationFrame ? Xj.requestAnimationFrame(c) : c()
            }
        }
        X(a) {
            a["expand-on-scroll"] = (b,c)=>{
                b = Io(b);
                this.Pa || (this.Pa = !0,
                b = ZO(this, b),
                "0" === b && Ob(this.j, "scroll", this.M, Lb),
                c.source.postMessage(JSON.stringify({
                    msg_type: "expand-on-scroll-result",
                    eos_success: "0" === b,
                    googMsgType: "sth"
                }), "*"))
            }
            ;
            a["expand-on-scroll-force-expand"] = ()=>{
                this.Ga || (this.Ga = !0,
                WO(this),
                Rb(this.j, "scroll", this.M))
            }
        }
        i() {
            this.M && Rb(this.j, "scroll", this.M, Lb);
            super.i()
        }
    }
    ;function aP(a) {
        const b = a.I.getBoundingClientRect()
          , c = 0 > b.top + b.height;
        return !(b.top > a.j.innerHeight) && !c
    }
    class bP extends T {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.A = b;
            this.I = c;
            this.C = 0;
            this.l = aP(this);
            this.H = Jb(this.D, this);
            this.g = HA(433, ()=>{
                var d = this.H;
                Xj.requestAnimationFrame ? Xj.requestAnimationFrame(d) : d()
            }
            );
            Ob(this.j, "scroll", this.g, Lb)
        }
        D() {
            const a = aP(this);
            if (a && !this.l) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.A.contentWindow;
                c && (lO(c, "ig", b, "*", 2),
                10 <= ++this.C && this.g && Rb(this.j, "scroll", this.g, Lb))
            }
            this.l = a
        }
    }
    ;function cP(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.property + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        Bk(a, "transition", b.join(","))
    }
    var dP = Gb(function() {
        if (Cc)
            return !0;
        var a = oe(document, "DIV")
          , b = Gc ? "-webkit" : Fc ? "-moz" : Cc ? "-ms" : null
          , c = {
            transition: "opacity 1s linear"
        };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = {
            style: c
        };
        Ld("div");
        b = Od("div", b);
        Wd(a, b);
        return "" != Ek(a.firstChild, "transition")
    });
    function eP(a, b, c) {
        0 > a.i[b].indexOf(c) && (a.i[b] += c)
    }
    function fP(a, b) {
        0 <= a.g.indexOf(b) || (a.g = b + a.g)
    }
    function gP(a, b, c, d) {
        return "" != a.errors || b ? null : "" == a.g.replace(hP, "") ? null != c && a.i[0] || null != d && a.i[1] ? !1 : !0 : !1
    }
    function iP(a) {
        var b = gP(a, "", null, 0);
        if (null === b)
            return "XS";
        b = b ? "C" : "N";
        a = a.g;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var jP = class {
        constructor(a, b) {
            this.i = ["", ""];
            this.g = a || "";
            this.errors = b || ""
        }
        za(a) {
            0 > this.errors.indexOf(a) && (this.errors = a + this.errors);
            return this
        }
        toString() {
            return [this.i[0], this.i[1], this.g, this.errors].join("|")
        }
    }
    ;
    function kP(a) {
        let b = a.T;
        a.G = ()=>{}
        ;
        lP(a, a.B, b);
        let c = a.B.parentElement;
        if (!c)
            return a.g;
        let d = !0
          , e = null;
        for (; c; ) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : bf(c, b)
            } catch (g) {
                a.g.za("c")
            }
            const f = mP(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.M = !0);
            if (d && !f && nP(e)) {
                fP(a.g, "l");
                a.D = c;
                break
            }
            d = d && f;
            if (e && oP(a, e))
                break;
            c = c.parentElement;
            if (!c) {
                if (b === a.pubWin)
                    break;
                try {
                    if (c = b.frameElement,
                    b = b.parent,
                    !We(b)) {
                        fP(a.g, "c");
                        break
                    }
                } catch (g) {
                    fP(a.g, "c");
                    break
                }
            }
        }
        a.C && a.A && pP(a);
        return a.g
    }
    function qP(a) {
        function b(m) {
            for (let n = 0; n < m.length; n++)
                Bk(k, m[n], "0px")
        }
        function c() {
            rP(d, g, h);
            !k || l || h || (b(sP),
            b(tP))
        }
        const d = a.B;
        d.style.overflow = a.Yc ? "visible" : "hidden";
        a.C && (a.D ? (cP(d, uP()),
        cP(a.D, uP())) : cP(d, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.I && (d.style.opacity = String(a.I));
        const e = null != a.width && null != a.j && (a.Ud || a.j > a.width) ? a.j : null
          , f = null != a.height && null != a.i && (a.Ud || a.i > a.height) ? a.i : null;
        if (a.H) {
            const m = a.H.length;
            for (let n = 0; n < m; n++)
                rP(a.H[n], e, f)
        }
        const g = a.j
          , h = a.i
          , k = a.D
          , l = a.M;
        a.C ? r.setTimeout(c, 1E3) : c()
    }
    function vP(a) {
        if (a.A && !a.X || null == a.j && null == a.i && null == a.I && a.A)
            return a.g;
        var b = a.A;
        a.A = !1;
        kP(a);
        a.A = b;
        if (!b || null != a.check && !gP(a.g, a.check, a.j, a.i))
            return a.g;
        0 <= a.g.g.indexOf("n") && (a.width = null,
        a.height = null);
        if (null == a.width && null !== a.j || null == a.height && null !== a.i)
            a.C = !1;
        (0 == a.j || 0 == a.i) && 0 <= a.g.g.indexOf("l") && (a.j = 0,
        a.i = 0);
        b = a.g;
        b.i[0] = "";
        b.i[1] = "";
        b.g = "";
        b.errors = "";
        qP(a);
        return kP(a)
    }
    function oP(a, b) {
        let c = !1;
        "none" == b.display && (fP(a.g, "n"),
        a.A && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || fP(a.g, "v");
        "hidden" == b.overflow && fP(a.g, "o");
        "absolute" == b.position ? (fP(a.g, "a"),
        c = !0) : "fixed" == b.position && (fP(a.g, "f"),
        c = !0);
        return c
    }
    function lP(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement)
            return !0;
        let e = !1
          , f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = wP(a, h, c),
            d |= h,
            e && (f |= h))
        }
        f & 1 && (d & 2 && eP(a.g, 0, "o"),
        d & 4 && eP(a.g, 1, "o"));
        return !(d & 1)
    }
    function mP(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (A) {
            a.g.za("s")
        }
        var f = c.getAttribute("width")
          , g = lf(f)
          , h = c.getAttribute("height")
          , k = lf(h)
          , l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = lP(a, c, b);
        var m = d && d.width;
        const n = d && d.height;
        var p = e && e.width
          , q = e && e.height
          , v = mf(m) == a.width && mf(n) == a.height;
        m = v ? m : p;
        q = v ? n : q;
        p = mf(m);
        v = mf(q);
        g = null !== a.width && (null !== p && a.width >= p || null !== g && a.width >= g);
        v = null !== a.height && (null !== v && a.height >= v || null !== k && a.height >= k);
        k = !b && nP(d);
        v = b || v || k || !(f || m || d && (!xP(String(d.minWidth)) || !yP(String(d.maxWidth))));
        l = b || g || k || l || !(h || q || d && (!xP(String(d.minHeight)) || !yP(String(d.maxHeight))));
        zP(a, 0, v, c, "width", f, a.width, a.j);
        AP(a, 0, "d", v, e, d, "width", m, a.width, a.j);
        AP(a, 0, "m", v, e, d, "minWidth", e && e.minWidth, a.width, a.j);
        AP(a, 0, "M", v, e, d, "maxWidth", e && e.maxWidth, a.width, a.j);
        a.kf ? (c = /^html|body$/i.test(c.nodeName),
        f = mf(n),
        h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1,
        h = null != a.i && d && f && Math.round(f) !== a.i && !h && "100%" !== d.minHeight,
        a.A && !c && h && (e.setProperty("height", "auto", "important"),
        d && !xP(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"),
        d && !yP(String(d.maxHeight)) && a.i && Math.round(f) < a.i && e.setProperty("max-height", "none", "important"))) : (zP(a, 1, l, c, "height", h, a.height, a.i),
        AP(a, 1, "d", l, e, d, "height", q, a.height, a.i),
        AP(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.height, a.i),
        AP(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.height, a.i));
        return b
    }
    function pP(a) {
        function b() {
            if (0 < c) {
                var l = bf(e, d) || {
                    width: 0,
                    height: 0
                };
                const m = mf(l.width);
                l = mf(l.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else
                r.clearInterval(k),
                h && (h(0, 0),
                h(1, 0))
        }
        let c = 31.25;
        const d = a.T
          , e = a.B
          , f = a.j
          , g = a.i
          , h = a.G;
        let k;
        r.setTimeout(()=>{
            k = r.setInterval(b, 16)
        }
        , 990)
    }
    function wP(a, b, c) {
        if (3 == b.nodeType)
            return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName))
                return 0;
            let d = null;
            try {
                d = bf(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position)
                    return 0;
                if ("absolute" == d.position) {
                    if (!a.l.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility)
                        return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.l.boundingClientRect.left ? 2 : 0) | (c.bottom > a.l.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }
    function zP(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f)
                    return;
                f = lf(f);
                null == f && (a.g.za("n"),
                eP(a.g, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.A)
                        if (a.C) {
                            const k = Math.max(f + h - (g || 0), 0)
                              , l = a.G;
                            a.G = (m,n)=>{
                                m == b && Qe(d, e, String(k - n));
                                l && l(m, n)
                            }
                        } else
                            Qe(d, e, String(h))
                } else
                    eP(a.g, b, "d")
        }
    }
    function AP(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? xP(f) : yP(f)) || (f = mf(f),
            null == f ? fP(a.g, "p") : null != k && fP(a.g, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? xP(h) : yP(h))
                    return;
                h = mf(h);
                null == h && (a.g.za("p"),
                eP(a.g, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.A)
                        if (a.C) {
                            const m = Math.max(h + l - (k || 0), 0)
                              , n = a.G;
                            a.G = (p,q)=>{
                                p == b && (e[g] = m - q + "px");
                                n && n(p, q)
                            }
                        } else
                            e[g] = l + "px"
                } else
                    eP(a.g, b, c)
        }
    }
    var FP = class {
        constructor(a, b, c, d, e, f, g) {
            this.pubWin = a;
            this.B = b;
            this.H = c;
            this.l = new BP(this.B);
            this.D = this.G = null;
            this.M = !1;
            this.T = (a = this.B.ownerDocument) && (a.defaultView || a.parentWindow);
            this.l = new BP(this.B);
            this.A = g;
            this.X = CP(this.l, d.tf, d.height, d.Sc);
            this.width = this.A ? this.l.boundingClientRect ? this.l.boundingClientRect.right - this.l.boundingClientRect.left : null : e;
            this.height = this.A ? this.l.boundingClientRect ? this.l.boundingClientRect.bottom - this.l.boundingClientRect.top : null : f;
            this.j = DP(d.width);
            this.i = DP(d.height);
            this.I = this.A ? DP(d.opacity) : null;
            this.check = d.check;
            this.Sc = !!d.Sc;
            this.C = "animate" == d.tf && !EP(this.l, this.i, this.Sc) && dP();
            this.Yc = !!d.Yc;
            this.g = new jP;
            EP(this.l, this.i, this.Sc) && fP(this.g, "r");
            e = this.l;
            e.g && e.i >= e.U && fP(this.g, "b");
            this.Ud = !!d.Ud;
            this.kf = !!d.kf
        }
    }
    ;
    function EP(a, b, c) {
        var d;
        (d = a.g) && !(d = !a.visible) && (c ? (b = a.i + Math.min(b, DP(a.getHeight())),
        a = a.g && b >= a.U) : a = a.g && a.i >= a.U,
        d = a);
        return d
    }
    var BP = class {
        constructor(a) {
            this.boundingClientRect = null;
            var b = a && a.ownerDocument
              , c = b && (b.defaultView || b.parentWindow);
            c = c && Ze(c);
            this.g = !!c;
            if (a)
                try {
                    this.boundingClientRect = a.getBoundingClientRect()
                } catch (g) {}
            var d = a;
            let e = 0
              , f = this.boundingClientRect;
            for (; d; )
                try {
                    f && (e += f.top);
                    const g = d.ownerDocument
                      , h = g && (g.defaultView || g.parentWindow);
                    (d = h && h.frameElement) && (f = d.getBoundingClientRect())
                } catch (g) {
                    break
                }
            this.i = e;
            c = c || r;
            this.U = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
            b = b && vN(b);
            this.visible = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.visible
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    }
    ;
    function CP(a, b, c, d) {
        switch (b) {
        case "no_rsz":
            return !1;
        case "force":
        case "animate":
            return !0;
        default:
            return EP(a, c, d)
        }
    }
    function nP(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }
    function GP(a, b, c, d) {
        return vP(new FP(a,b,d,c,null,null,!0))
    }
    var HP = new jP("s","")
      , hP = RegExp("[lonvafrbpEe]", "g");
    function yP(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }
    function xP(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }
    function rP(a, b, c) {
        null !== b && null !== lf(a.getAttribute("width")) && a.setAttribute("width", String(b));
        null !== c && null !== lf(a.getAttribute("height")) && a.setAttribute("height", String(c));
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var sP = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" ")
      , tP = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");
    function uP() {
        let a = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s"
          , b = sP;
        for (var c = 0; c < b.length; c++)
            a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
        b = tP;
        for (c = 0; c < b.length; c++)
            a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
        return a
    }
    function DP(a) {
        return "string" === typeof a ? lf(a) : "number" === typeof a && isFinite(a) ? a : null
    }
    ;var IP = class extends TO {
        constructor(a, b, c) {
            super(a, b);
            this.l = c
        }
        X(a) {
            a["resize-me"] = (b,c)=>{
                b = Io(b);
                var d = b.r_chk;
                if (null == d || "" === d) {
                    var e = lf(b.r_nw)
                      , f = lf(b.r_nh)
                      , g = lf(b.r_no);
                    null != g || 0 !== e && 0 !== f || (g = 0);
                    var h = b.r_str;
                    h = h ? h : null;
                    {
                        var k = /^true$/.test(b.r_ao)
                          , l = /^true$/.test(b.r_ifr)
                          , m = /^true$/.test(b.r_cab);
                        const q = window;
                        if (q)
                            if ("no_rsz" === h)
                                b.err = "7",
                                e = !0;
                            else {
                                var n = new BP(this.g);
                                if (n.g) {
                                    var p = n.getWidth();
                                    null != p && (b.w = p);
                                    p = n.getHeight();
                                    null != p && (b.h = p);
                                    CP(n, h, f, m) ? (n = this.l,
                                    d = GP(q, n, {
                                        width: e,
                                        height: f,
                                        opacity: g,
                                        check: d,
                                        tf: h,
                                        Yc: k,
                                        Ud: l,
                                        Sc: m
                                    }, [this.g]),
                                    b.r_cui && /^true$/.test(b.r_cui.toString()) && z(n, {
                                        height: (null === f ? 0 : f - 48) + "px",
                                        top: "24px"
                                    }),
                                    null != e && (b.nw = e),
                                    null != f && (b.nh = f),
                                    b.rsz = d.toString(),
                                    b.abl = iP(d),
                                    b.frsz = ("force" === h).toString(),
                                    b.err = "0",
                                    e = !0) : (b.err = "1",
                                    e = !1)
                                } else
                                    b.err = "3",
                                    e = !1
                            }
                        else
                            b.err = "2",
                            e = !1
                    }
                    c.source.postMessage(JSON.stringify({
                        msg_type: "resize-result",
                        r_str: h,
                        r_status: e,
                        googMsgType: "sth"
                    }), "*");
                    this.g.dataset.googleQueryId || this.g.setAttribute("data-google-query-id", b.qid)
                }
            }
        }
    }
    ;
    function JP(a, b, c) {
        return new IntersectionObserver(c,b)
    }
    function KP(a, b, c) {
        Ob(a, b, c);
        return ()=>Rb(a, b, c)
    }
    let LP = null;
    function MP() {
        LP = fl()
    }
    function NP(a, b) {
        return b ? null === LP ? (Ob(a, "mousemove", MP, {
            passive: !0
        }),
        Ob(a, "scroll", MP, {
            passive: !0
        }),
        MP(),
        !1) : fl() - LP >= 1E3 * b : !1
    }
    function OP({win: a, element: b, C: c, B: d, A: e=0, callback: f, i: g, g: h={}, l: k=!0, j: l=JP}) {
        let m, n = !1, p = !1;
        const q = []
          , v = l(a, h, (A,B)=>{
            try {
                const E = ()=>{
                    q.length || (d && (q.push(KP(b, "mouseenter", ()=>{
                        n = !0;
                        E()
                    }
                    )),
                    q.push(KP(b, "mouseleave", ()=>{
                        n = !1;
                        E()
                    }
                    ))),
                    q.push(KP(a.document, "visibilitychange", ()=>E())));
                    const J = NP(a, e)
                      , G = xN(a.document);
                    if (p && !n && !J && !G)
                        m = m || a.setTimeout(()=>{
                            NP(a, e) ? E() : (f(),
                            B.disconnect())
                        }
                        , 1E3 * c);
                    else if (k || n || J || G)
                        a.clearTimeout(m),
                        m = void 0
                }
                ;
                ({isIntersecting: p} = A[A.length - 1]);
                E()
            } catch (E) {
                g && g(E)
            }
        }
        );
        v.observe(b);
        return ()=>{
            v.disconnect();
            for (const A of q)
                A();
            null != m && a.clearTimeout(m)
        }
    }
    ;function PP(a, b, c, d, e) {
        return new QP(a,b,c,d,e)
    }
    function RP(a, b, c) {
        const d = a.g
          , e = a.D;
        if (null != e && null != d && Fo(c, d.contentWindow) && (b = b.config,
        "string" === typeof b)) {
            try {
                var f = JSON.parse(b);
                if (!Array.isArray(f))
                    return;
                a.l = new Sj(f)
            } catch (g) {
                return
            }
            a.ka();
            f = Ci(a.l, 1);
            0 >= f || (a.A = OP({
                win: a.j,
                element: e,
                C: f - .2,
                B: !xe(),
                A: Ci(a.l, 3),
                callback: ()=>void SP(a, e),
                i: g=>lo.va(1223, g, void 0, void 0),
                g: {
                    threshold: Ei(a.l, 2, 1)
                },
                l: !0,
                j: void 0
            }))
        }
    }
    function SP(a, b) {
        a.H();
        setTimeout(lo.La(1224, ()=>{
            a.C.rc = (parseInt(a.C.rc, 10) || 0) + 1;
            var c;
            a: {
                if (Sc && (c = b.parentElement))
                    break a;
                c = b.parentNode;
                c = xa(c) && 1 == c.nodeType ? c : null
            }
            c && Zv.test(c.className) || (c = oe(document, "INS"),
            c.className = "adsbygoogle",
            b.parentNode && b.parentNode.insertBefore(c, b.nextSibling));
            b && b.parentNode && b.parentNode.removeChild(b);
            gO(c, a.C, a.j)
        }
        ), 200)
    }
    var QP = class extends TO {
        constructor(a, b, c, d, e) {
            super(a, b);
            this.D = d;
            this.C = c;
            this.H = e;
            this.l = this.A = null;
            (b = (b = b.contentWindow) && b.parent) && a != b && this.T.push(jO(b, "sth", this.xa, this.Qa))
        }
        X(a) {
            a.av_ref = (b,c)=>RP(this, b, c)
        }
        i() {
            super.i();
            this.D = null;
            this.A && this.A()
        }
    }
    ;
    const TP = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const UP = /^blogger$/
      , VP = /^wordpress(.|\s|$)/i
      , WP = /^joomla!/i
      , XP = /^drupal/i
      , YP = /\/wp-content\//
      , ZP = /\/wp-content\/plugins\/advanced-ads/
      , $P = /\/wp-content\/themes\/genesis/
      , aQ = /\/wp-content\/plugins\/genesis/;
    function bQ(a) {
        var b = a.getElementsByTagName("script")
          , c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (ZP.test(e))
                    return 5;
                if (aQ.test(e))
                    return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d],
            e.hasAttribute("href") && (e = e.getAttribute("href") || "",
            $P.test(e) || aQ.test(e)))
                return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content") || "";
                if (UP.test(f))
                    return 1;
                if (VP.test(f))
                    return 2;
                if (WP.test(f))
                    return 3;
                if (XP.test(f))
                    return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a],
            "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href") || "",
            YP.test(d)))
                return 2;
        return 0
    }
    ;let cQ = navigator;
    var dQ = a=>{
        let b = 1;
        let c;
        if (void 0 != a && "" != a)
            for (b = 0,
            c = a.length - 1; 0 <= c; c--) {
                var d = a.charCodeAt(c);
                b = (b << 6 & 268435455) + d + (d << 14);
                d = b & 266338304;
                b = 0 != d ? b ^ d >> 21 : b
            }
        return b
    }
      , eQ = (a,b)=>{
        if (!a || "none" == a)
            return 1;
        a = String(a);
        "auto" == a && (a = b,
        "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
        return dQ(a.toLowerCase())
    }
    ;
    const fQ = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$")
      , gQ = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$")
      , hQ = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    function iQ(a) {
        var b = window;
        return "on" === a.google_adtest || "on" === a.google_adbreak_test || b.location.host.endsWith("h5games.usercontent.goog") ? b.document.querySelector('meta[name="h5-games-eids"]')?.getAttribute("content")?.split(",").map(c=>Math.floor(Number(c))).filter(c=>!isNaN(c) && 0 < c) || [] : []
    }
    ;function jQ(a, b) {
        b && !a.g && (b = b.split(":"),
        a.g = b.find(c=>0 === c.indexOf("ID=")) || null,
        a.j = b.find(c=>0 === c.indexOf("T="))?.substring(2) || null)
    }
    var kQ = class {
        constructor() {
            this.l = new Date(Date.now());
            this.j = this.g = null;
            this.i = {
                [3]: {},
                [4]: {},
                [5]: {}
            };
            this.i[3] = {
                [71]: (...a)=>{
                    var b = this.g;
                    var c = this.l
                      , d = Number(a[0]);
                    a = Number(a[1]);
                    b = null !== b ? ff(`${"w5uHecUBa2S"}:${d}:${b}`) % a === Math.floor(c.valueOf() / 864E5) % a : void 0;
                    return b
                }
            };
            this.i[4] = {
                [15]: ()=>{
                    var a = Number(this.j || void 0);
                    isNaN(a) ? a = void 0 : (a = new Date(1E3 * a),
                    a = 1E4 * a.getFullYear() + 100 * (a.getMonth() + 1) + a.getDate());
                    return a
                }
            }
        }
    }
    , lQ;
    function mQ(a=r) {
        return a.ggeac || (a.ggeac = {})
    }
    ;function nQ(a, b=document) {
        return !!b.featurePolicy?.allowedFeatures().includes(a)
    }
    ;function oQ(a=cf()) {
        return b=>ff(`${b} + ${a}`) % 1E3
    }
    ;function pQ(a, b) {
        a.g = co(14, b, ()=>{}
        )
    }
    class qQ {
        constructor() {
            this.g = ()=>{}
        }
    }
    function rQ(a) {
        w(qQ).g(a)
    }
    ;function sQ(a=mQ()) {
        eo(w(fo), a);
        tQ(a);
        pQ(w(qQ), a);
        w(Ub).g()
    }
    function tQ(a) {
        const b = w(Ub);
        b.i = (c,d)=>co(5, a, ()=>!1)(c, d, 1);
        b.j = (c,d)=>co(6, a, ()=>0)(c, d, 1);
        b.l = (c,d)=>co(7, a, ()=>"")(c, d, 1);
        b.A = (c,d)=>co(8, a, ()=>[])(c, d, 1);
        b.g = ()=>{
            co(15, a, ()=>{}
            )(1)
        }
    }
    ;function uQ(a, b, c) {
        var d = {
            [0]: oQ(Ff(b).toString())
        };
        if (c) {
            c = UM(new YM(b), "__gads", c) || "";
            lQ || (lQ = new kQ);
            b = lQ;
            jQ(b, c);
            rQ(b.i);
            const e = (new RegExp(/(?:^|:)(ID=[^\s:]+)/)).exec(c)?.[1];
            d[1] = f=>e ? oQ(e)(f) : void 0
        }
        d = go(a, d);
        lo.Da(1085, iK(w(gK), a, d))
    }
    function vQ(a, b) {
        uQ(20, a, b);
        uQ(17, a, b)
    }
    function wQ(a) {
        const b = ho();
        a = iQ(a);
        return b.concat(a).join(",")
    }
    function xQ(a) {
        const b = el();
        b && (a.debug_experiment_id = b)
    }
    ;function yQ(a) {
        -1 === a.g && (a.g = a.data.reduce((b,c,d)=>b + (c ? 2 ** d : 0), 0));
        return a.g
    }
    var zQ = class {
        constructor() {
            this.data = [];
            this.g = -1
        }
        set(a, b=!0) {
            0 <= a && 52 > a && Number.isInteger(a) && this.data[a] !== b && (this.data[a] = b,
            this.g = -1)
        }
        get(a) {
            return !!this.data[a]
        }
    }
    ;
    function AQ() {
        const a = new zQ;
        "SVGElement"in r && "createElementNS"in r.document && a.set(0);
        const b = qf();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        r.crypto && r.crypto.subtle && a.set(3);
        "TextDecoder"in r && "TextEncoder"in r && a.set(4);
        return yQ(a)
    }
    ;const BQ = new Map([["navigate", 1], ["reload", 2], ["back_forward", 3], ["prerender", 4]])
      , CQ = new Map([[0, 1], [1, 2], [2, 3]]);
    function DQ(a) {
        try {
            const b = a.performance?.getEntriesByType("navigation")?.[0];
            if (b?.type)
                return BQ.get(b.type) ?? null
        } catch {}
        return CQ.get(a.performance?.navigation?.type) ?? null
    }
    ;var EQ = class extends R {
        constructor() {
            super()
        }
    }
    ;
    function FQ(a, b) {
        if (zc()) {
            var c = a.document.documentElement.lang;
            YR(a) ? ZR(b, Ff(a), !0, "", c) : (new MutationObserver((d,e)=>{
                YR(a) && (ZR(b, Ff(a), !1, c, a.document.documentElement.lang),
                e.disconnect())
            }
            )).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }
    function YR(a) {
        a = a.document?.documentElement?.classList;
        return !(!a?.contains("translated-rtl") && !a?.contains("translated-ltr"))
    }
    function ZR(a, b, c, d, e) {
        Wj({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    }
    ;function $R(a) {
        if (a = a.navigator?.userActivation) {
            var b = 0;
            a?.hasBeenActive && (b |= 1);
            a?.isActive && (b |= 2);
            return b
        }
    }
    ;const aS = /[+, ]/;
    function bS(a, b) {
        const c = a.F;
        var d = a.pubWin
          , e = {}
          , f = d.document
          , g = If(d)
          , h = !1
          , k = ""
          , l = 1;
        a: {
            l = c.google_ad_width || d.google_ad_width;
            var m = c.google_ad_height || d.google_ad_height;
            if (d && d.top === d)
                h = !1;
            else {
                h = d.document;
                k = h.documentElement;
                if (l && m) {
                    var n = 1;
                    let q = 1;
                    d.innerHeight ? (n = d.innerWidth,
                    q = d.innerHeight) : k && k.clientHeight ? (n = k.clientWidth,
                    q = k.clientHeight) : h.body && (n = h.body.clientWidth,
                    q = h.body.clientHeight);
                    if (q > 2 * m || n > 2 * l) {
                        h = !1;
                        break a
                    }
                }
                h = !0
            }
        }
        k = h;
        l = CJ(g).Ue;
        m = d.top == d ? 0 : We(d.top) ? 1 : 2;
        n = 4;
        k || 1 !== m ? k || 2 !== m ? k && 1 === m ? n = 7 : k && 2 === m && (n = 8) : n = 6 : n = 5;
        l && (n |= 16);
        k = String(n);
        l = EJ(d);
        m = !!c.google_page_url;
        e.google_iframing = k;
        0 !== l && (e.google_iframing_environment = l);
        if (!m && "ad.yieldmanager.com" === f.domain) {
            for (k = f.URL.substring(f.URL.lastIndexOf("http")); -1 < k.indexOf("%"); )
                try {
                    k = decodeURIComponent(k)
                } catch (q) {
                    break
                }
            c.google_page_url = k;
            m = !!k
        }
        m ? (e.google_page_url = c.google_page_url,
        e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY") : (h && We(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url = d.top.document.URL : e.google_page_url = h ? f.referrer : f.URL,
        e.google_page_location = null);
        if (f.URL === e.google_page_url)
            try {
                var p = Math.round(Date.parse(f.lastModified) / 1E3) || null
            } catch {
                p = null
            }
        else
            p = null;
        e.google_last_modified_time = p;
        d = g === g.top ? g.document.referrer : (d = tk()) && d.referrer || "";
        e.google_referrer_url = d;
        DJ(e, c);
        x(qv) && !b.g() ? e = "pagead2.googlesyndication.com" : (e = c.google_page_location || c.google_page_url,
        "EMPTY" === e && (e = c.google_page_url),
        e ? (e = e.toString(),
        0 == e.indexOf("http://") ? e = e.substring(7, e.length) : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)),
        d = e.indexOf("/"),
        -1 == d && (d = e.length),
        e = e.substring(0, d).split("."),
        d = !1,
        3 <= e.length && (d = e[e.length - 3]in TP),
        2 <= e.length && (d = d || e[e.length - 2]in TP),
        e = d) : e = !1,
        e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net");
        b = cS(a, b);
        d = a.F;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        "ca-pub-6219811747049371" === d.google_ad_client && dS.test(f) && (g = "/pagead/lopri?");
        a = Rk(b, `https://${e}${g}` + (N(a.na, 9) && c.google_debug_params ? c.google_debug_params : ""));
        return c.google_ad_url = a
    }
    function eS(a) {
        try {
            if (a.parentNode)
                return a.parentNode
        } catch {
            return null
        }
        if (9 === a.nodeType)
            a: {
                try {
                    const c = a ? ne(a) : window;
                    if (c) {
                        const d = c.frameElement;
                        if (d && We(c.parent)) {
                            var b = d;
                            break a
                        }
                    }
                } catch {}
                b = null
            }
        else
            b = null;
        return b
    }
    function fS(a, b) {
        var c = wQ(a.pubWin);
        a.F.saaei && (c += ("" === c ? "" : ",") + a.F.saaei);
        b.eid = c;
        c = a.F.google_loeid;
        "string" === typeof c && (a.i |= 4096,
        b.loeid = c)
    }
    function gS(a, b) {
        a = (a = Ze(a.pubWin)) && a.document ? RM(a.document, a) : new ae(-12245933,-12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }
    function hS(a) {
        try {
            const b = r.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }
    function iS(a, b, c) {
        const d = a.F;
        var e = a.pubWin
          , f = a.J
          , g = If(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = tk(e)) && xa(h.data) && "string" === typeof h.data.type ? (h = h.data.type.toLowerCase(),
        h = "doubleclick" == h || "adsense" == h ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = CJ(g);
        b.url || b.loc || !g.url || (b.url = g.url,
        g.Ue || (b.usrc = 1));
        g.url != (b.loc || b.url) && (b.top = g.url);
        a.zc && (b.etu = a.zc);
        (c = aO(d, f, f ? ck(c, f) : null)) && (b.fc = c);
        if (!Yk(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode && (h = ve(new je(c), "IFRAME"),
            h.frameBorder = "0",
            h.style.height = 0,
            h.style.width = 0,
            h.style.position = "absolute",
            c.body)) {
                c.body.appendChild(h);
                try {
                    const aa = h.contentWindow.document;
                    aa.open();
                    var k = Kd("<!DOCTYPE html>");
                    aa.write(Id(k));
                    aa.close();
                    g += aa.documentMode
                } catch (aa) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        let l, m, n, p, q, v, A, B, E, J;
        try {
            l = e.screenX,
            m = e.screenY
        } catch (aa) {}
        try {
            n = e.outerWidth,
            p = e.outerHeight
        } catch (aa) {}
        try {
            q = e.innerWidth,
            v = e.innerHeight
        } catch (aa) {}
        try {
            A = e.screenLeft,
            B = e.screenTop
        } catch (aa) {}
        try {
            q = e.innerWidth,
            v = e.innerHeight
        } catch (aa) {}
        try {
            E = e.screen.availWidth,
            J = e.screen.availTop
        } catch (aa) {}
        b.brdim = [A, B, l, m, E, J, n, p, q, v].join();
        k = 0;
        void 0 === r.postMessage && (k |= 1);
        0 < k && (b.osd = k);
        b.vis = vN(e.document);
        k = a.ha;
        e = VN(d) ? HP : vP(new FP(e,k,null,{
            width: 0,
            height: 0
        },d.google_ad_width,d.google_ad_height,!1));
        b.rsz = e.toString();
        b.abl = iP(e);
        if (!VN(d) && (e = Zk(d),
        null != e)) {
            k = 0;
            a: {
                try {
                    {
                        var G = d.google_async_iframe_id;
                        const aa = window.document;
                        if (G)
                            var K = aa.getElementById(G);
                        else {
                            var M = aa.getElementsByTagName("script")
                              , Ba = M[M.length - 1];
                            K = Ba && Ba.parentNode || null
                        }
                    }
                    if (G = K) {
                        K = [];
                        M = 0;
                        for (var Za = Date.now(); 100 >= ++M && 50 > Date.now() - Za && (G = eS(G)); )
                            1 === G.nodeType && K.push(G);
                        var Ib = K;
                        b: {
                            for (Za = 0; Za < Ib.length; Za++) {
                                c: {
                                    var U = Ib[Za];
                                    try {
                                        if (U.parentNode && 0 < U.offsetWidth && 0 < U.offsetHeight && U.style && "none" !== U.style.display && "hidden" !== U.style.visibility && (!U.style.opacity || 0 !== Number(U.style.opacity))) {
                                            const aa = U.getBoundingClientRect();
                                            var mb = 0 < aa.right && 0 < aa.bottom;
                                            break c
                                        }
                                    } catch (aa) {}
                                    mb = !1
                                }
                                if (!mb) {
                                    var Nc = !1;
                                    break b
                                }
                            }
                            Nc = !0
                        }
                        if (Nc) {
                            b: {
                                const aa = Date.now();
                                Nc = /^html|body$/i;
                                mb = /^fixed/i;
                                for (U = 0; U < Ib.length && 50 > Date.now() - aa; U++) {
                                    const nd = Ib[U];
                                    if (!Nc.test(nd.tagName) && mb.test(nd.style.position || Gk(nd, "position"))) {
                                        var uc = nd;
                                        break b
                                    }
                                }
                                uc = null
                            }
                            break a
                        }
                    }
                } catch {}
                uc = null
            }
            uc && uc.offsetWidth * uc.offsetHeight <= 4 * e.width * e.height && (k = 1);
            b.pfx = k
        }
        a: {
            if (.05 > Math.random() && f)
                try {
                    const aa = f.document.getElementsByTagName("head")[0];
                    var Ee = aa ? bQ(aa) : 0;
                    break a
                } catch (aa) {}
            Ee = 0
        }
        f = Ee;
        0 !== f && (b.cms = f);
        d.google_lrv !== a.ub && (b.alvm = d.google_lrv || "none")
    }
    function jS(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : Xe(()=>{
            c++;
            return !1
        }
        , a);
        c && (b.nhd = c)
    }
    function kS(a, b) {
        const c = Z(b, 8, {});
        b = Z(b, 9, {});
        const d = a.google_ad_section
          , e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }
    function lS(a, b, c) {
        const d = a.F;
        var e = a.F;
        b.dt = no;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = r.performance;
                if (f && f.timing && f.now) {
                    var g = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (M) {}
            g = null
        }
        (e = (e = g) ? FO(e, r.Date.now() - no, 1E6) : null) && (b.bdt = e);
        b.idt = FO(a.D, no);
        e = a.F;
        b.shv = O(a.na, 2);
        a.ub && (b.mjsv = a.ub);
        "sd" == e.google_loader_used ? b.ptt = 5 : "aa" == e.google_loader_used && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
        if (e = tk(a.pubWin))
            b.is_amp = 1,
            b.amp_v = uk(e),
            (e = vk(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        e = new YM(a.pubWin);
        (g = UM(e, "__gads", c)) && (b.cookie = g);
        (g = UM(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g);
        "1" === UM(e, "__gpi_opt_out", c) && (b.pdopt = "1");
        x(bt) && (e = new IO(a.pubWin,{
            Vg: !1,
            Wg: !a.G
        }),
        e = N(c, 8) || (e.g.Vg || !c.g()) && e.g.Wg ? void 0 : (new bk(e.i.document)).get("__eoi") || "",
        e && (b.eo_id_str = e));
        e = FJ();
        f = Z(e, 8, {});
        g = d.google_ad_section;
        f[g] && (b.prev_fmts = f[g]);
        f = Z(e, 9, {});
        f[g] && (b.prev_slotnames = f[g].toLowerCase());
        kS(d, e);
        g = Z(e, 15, 0);
        0 < g && (b.nras = String(g));
        (f = tk(window)) ? (f ? (g = f.pageViewId,
        f = f.clientId,
        "string" === typeof f && (g += f.replace(/\D/g, "").substr(0, 6))) : g = null,
        g = +g) : (g = If(window),
        f = g.google_global_correlator,
        f || (g.google_global_correlator = f = 1 + Math.floor(Math.random() * Math.pow(2, 43))),
        g = f);
        b.correlator = Z(e, 7, g);
        x(Ev) && (b.rume = 1);
        if (d.google_ad_channel) {
            g = Z(e, 10, {});
            f = "";
            var h = d.google_ad_channel.split(aS);
            for (var k = 0; k < h.length; k++) {
                var l = h[k];
                g[l] ? f += l + "+" : g[l] = !0
            }
            b.pv_ch = f
        }
        if (d.google_ad_host_channel) {
            g = d.google_ad_host_channel;
            f = Z(e, 11, []);
            h = g.split("|");
            e = -1;
            g = [];
            for (k = 0; k < h.length; k++) {
                l = h[k].split(aS);
                f[k] || (f[k] = {});
                var m = "";
                for (var n = 0; n < l.length; n++) {
                    var p = l[n];
                    "" !== p && (f[k][p] ? m += "+" + p : f[k][p] = !0)
                }
                m = m.slice(1);
                g[k] = m;
                "" !== m && (e = k)
            }
            f = "";
            if (-1 < e) {
                for (h = 0; h < e; h++)
                    f += g[h] + "|";
                f += g[e]
            }
            b.pv_h_ch = f
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        e = d.google_ad_client;
        try {
            var q = If(window)
              , v = q.google_prev_clients;
            v || (v = q.google_prev_clients = {});
            if (e in v)
                var A = 1;
            else
                v[e] = !0,
                A = 2
        } catch {
            A = 0
        }
        b.pv = A;
        a.J && x(Rt) && (A = a.J,
        A = zc() && YR(A) ? A.document.documentElement.lang : void 0,
        A && (b.tl = A));
        v = a.pubWin.document;
        A = a.F;
        e = a.pubWin;
        q = v.domain;
        e = (c.g() && ek(e) ? e.document.cookie : null) || "";
        h = a.pubWin.screen;
        k = v.referrer;
        m = Tk();
        if (tk())
            var B = window.gaGlobal || {};
        else {
            g = Math.round((new Date).getTime() / 1E3);
            f = A.google_analytics_domain_name;
            c = "undefined" == typeof f ? eQ("auto", q) : eQ(f, q);
            n = -1 < e.indexOf("__utma=" + c + ".");
            l = -1 < e.indexOf("__utmb=" + c);
            (q = (yk() || window).gaGlobal) || (q = {},
            (yk() || window).gaGlobal = q);
            v = !1;
            if (n) {
                var E = e.split("__utma=" + c + ".")[1].split(";")[0].split(".");
                l ? q.sid = E[3] : q.sid || (q.sid = g + "");
                q.vid = E[0] + "." + E[1];
                q.from_cookie = !0
            } else {
                q.sid || (q.sid = g + "");
                if (!q.vid) {
                    v = !0;
                    l = Math.round(2147483647 * Math.random());
                    n = cQ.appName;
                    p = cQ.version;
                    var J = cQ.language ? cQ.language : cQ.browserLanguage
                      , G = cQ.platform
                      , K = cQ.userAgent;
                    try {
                        E = cQ.javaEnabled()
                    } catch (M) {
                        E = !1
                    }
                    E = [n, p, J, G, K, E ? 1 : 0].join("");
                    h ? E += h.width + "x" + h.height + h.colorDepth : r.java && r.java.awt && (h = r.java.awt.Toolkit.getDefaultToolkit().getScreenSize(),
                    E += h.screen.width + "x" + h.screen.height);
                    E = E + e + (k || "");
                    for (h = E.length; 0 < m; )
                        E += m-- ^ h++;
                    q.vid = (l ^ dQ(E) & 2147483647) + "." + g
                }
                q.from_cookie || (q.from_cookie = !1)
            }
            if (!q.cid) {
                b: for (g = f,
                E = 999,
                g && (g = 0 == g.indexOf(".") ? g.substr(1) : g,
                E = g.split(".").length),
                g = 999,
                e = e.split(";"),
                f = 0; f < e.length; f++)
                    if (h = fQ.exec(e[f]) || gQ.exec(e[f]) || hQ.exec(e[f])) {
                        k = h[1] || 0;
                        if (k == E) {
                            B = h[2];
                            break b
                        }
                        k < g && (g = k,
                        B = h[2])
                    }
                v && B && -1 != B.search(/^\d+\.\d+$/) ? (q.vid = B,
                q.from_cookie = !0) : B != q.vid && (q.cid = B)
            }
            q.dh = c;
            q.hid || (q.hid = Math.round(2147483647 * Math.random()));
            B = q
        }
        b.ga_vid = B.vid;
        b.ga_sid = B.sid;
        b.ga_hid = B.hid;
        b.ga_fc = B.from_cookie;
        b.ga_cid = B.cid;
        b.ga_wpids = A.google_analytics_uacct;
        jS(a.pubWin, b);
        (a = d.google_ad_layout) && 0 <= uO[a] && (b.rplot = uO[a])
    }
    function mS(a, b) {
        var c = a.g;
        a = a.na;
        if (c?.l() || OJ())
            b.npa = 1;
        x(jv) && a.g() && !c?.A() && (b.ltd_cs = 1);
        c && (c.A() && (b.gdpr = c.j() ? "1" : "0"),
        (a = I(c, 1)) && (b.us_privacy = a),
        (a = I(c, 2)) && (b.gdpr_consent = a),
        (a = I(c, 4)) && (b.addtl_consent = a),
        (a = L(c, 7)) && (b.tcfe = a),
        x(at) && ((a = O(c, 11)) && (b.gpp = a),
        (c = hi(c, 10, ph, 2, void 0, void 0, 0)) && 0 < c.length && (b.gpp_sid = c.join(","))))
    }
    function nS(a, b) {
        const c = a.F;
        mS(a, b);
        df(SJ, (d,e)=>{
            b[d] = c[e]
        }
        );
        VN(c) && (a = hO(c),
        b.fa = a);
        b.pi || null == c.google_ad_slot || (a = JB(c),
        null != a.g && (a = xq(a.getValue()),
        b.pi = a))
    }
    function oS(a, b) {
        var c = xk() || PM(a.pubWin.top);
        c && (b.biw = c.width,
        b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = PM(a.pubWin)) && (b.isw = a.width,
        b.ish = a.height)
    }
    function pS(a, b) {
        var c = a.pubWin;
        null !== c && c != c.top ? (a = [c.document.URL],
        c.name && a.push(c.name),
        c = PM(c, !1),
        a.push(c.width.toString()),
        a.push(c.height.toString()),
        a = ff(a.join(""))) : a = 0;
        0 !== a && (b.ifk = a)
    }
    function qS(a, b) {
        (a = MJ()[a.F.google_ad_client]) && (b.psts = a.join())
    }
    function rS(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }
    function sS(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = Qf(a))
    }
    function tS(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode"))
                  , d = parseInt(c["os-mode"], 10);
                0 <= d && (b.wsm = d + 1)
            }
        } catch {}
    }
    function uS(a, b) {
        0 <= a.F.google_ad_public_floor && (b.pubf = a.F.google_ad_public_floor);
        0 <= a.F.google_ad_private_floor && (b.pvtf = a.F.google_ad_private_floor)
    }
    function vS(a, b) {
        const c = Number(a.F.google_traffic_source);
        c && Object.values(Ma).includes(c) && (b.trt = a.F.google_traffic_source)
    }
    function wS(a, b) {
        var c;
        (c = x(Kv)) || (c = a.A?.label,
        c = x(pv) && c ? !!c.match(Wb(nv)) : !1);
        c || "runAdAuction"in a.pubWin.navigator && "joinAdInterestGroup"in a.pubWin.navigator && (b.td = 1)
    }
    function xS(a, b) {
        if (null != a.A && zc()) {
            var c = new EQ
              , d = ej(c, 3, a.A.label);
            Q(d, 4, a.A.status);
            b.psd = Qf(fj(c))
        }
    }
    function yS(a, b) {
        x(Bv) || nQ("attribution-reporting", a.pubWin.document) && (b.nt = 1)
    }
    function zS(a, b) {
        if ("string" === typeof a.F.google_privacy_treatments) {
            var c = new Map([["disablePersonalization", 1]]);
            a = a.F.google_privacy_treatments.split(",");
            var d = [];
            for (const [e,f] of c.entries())
                c = f,
                a.includes(e) && d.push(c);
            d.length && (b.ppt = d.join("~"))
        }
    }
    function AS(a, b) {
        x(ev) && (b.bz = Jf(a.pubWin))
    }
    function cS(a, b) {
        const c = {};
        nS(a, c);
        sS(a, c);
        lS(a, c, b);
        c.u_tz = -(new Date).getTimezoneOffset();
        c.u_his = Tk();
        c.u_h = Xj.screen?.height;
        c.u_w = Xj.screen?.width;
        c.u_ah = Xj.screen?.availHeight;
        c.u_aw = Xj.screen?.availWidth;
        c.u_cd = Xj.screen?.colorDepth;
        c.u_sd = QM(a.pubWin);
        c.dmc = a.pubWin.navigator?.deviceMemory;
        GA(889, ()=>{
            if (null == a.J)
                c.adx = -12245933,
                c.ady = -12245933;
            else {
                var e = TM(a.J, a.ha);
                c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = Math.round(e.x),
                c.ady = Math.round(e.y));
                SM(a.ha) || (c.adx = -12245933,
                c.ady = -12245933,
                a.i |= 32768)
            }
        }
        );
        oS(a, c);
        pS(a, c);
        gS(a, c);
        fS(a, c);
        c.oid = 2;
        qS(a, c);
        c.pvsid = Ff(a.pubWin, EA);
        rS(a, c);
        tS(a, c);
        c.uas = $R(a.pubWin);
        const d = DQ(a.pubWin);
        d && (c.nvt = d);
        a.C && (c.scar = a.C);
        a.l instanceof Uint8Array ? c.topics = Of(a.l) : a.l && (c.topics = a.l,
        c.tps = a.l);
        iS(a, c, b);
        c.fu = a.i;
        c.bc = AQ();
        N(a.na, 9) && (xQ(c),
        c.creatives = hS(/\b(?:creatives)=([\d,]+)/),
        c.adgroups = hS(/\b(?:adgroups)=([\d,]+)/),
        c.adgroups && (c.adtest = "on",
        c.disable_budget_throttling = !0,
        c.use_budget_filtering = !1,
        c.retrieve_only = !0,
        c.disable_fcap = !0));
        jk() && (c.atl = !0);
        AS(a, c);
        uS(a, c);
        vS(a, c);
        wS(a, c);
        xS(a, c);
        yS(a, c);
        zS(a, c);
        x(rv) && "true" === String(a.F.google_xz) && (c.scd = 1);
        return c
    }
    const dS = /YtLoPri/;
    var BS = class extends R {
    }
    ;
    BS.O = [5];
    var ui = class extends R {
        Ne() {
            return O(this, 18)
        }
        wd() {
            return O(this, 19)
        }
        Oe() {
            return O(this, 20)
        }
    }
      , CS = kj(ui);
    ui.O = [15];
    var DS = class extends R {
    }
      , ES = kj(DS);
    DS.O = [3];
    var FS = class {
        constructor(a) {
            this.Xb = a.Xb ?? [];
            this.ae = a.ae ?? !1;
            this.Sg = a.Sg ?? .1;
            this.gf = a.gf ?? !1;
            this.Fe = a.Fe ?? !1;
            this.Ge = a.Ge ?? !1;
            this.rf = !!a.rf;
            this.Ke = !!a.Ke;
            this.ke = a.ke ?? 3E4;
            this.je = a.je ?? "";
            this.Ua = a.Ua ?? "";
            this.Vc = !!a.Vc;
            this.we = !!a.we;
            this.hf = !!a.hf;
            this.xd = !!a.xd;
            this.W = !!a.W;
            this.Mc = a.Mc ?? .3;
            this.jc = !!a.jc;
            this.Hc = !!a.Hc
        }
    }
    ;
    function GS(a, b) {
        a = QB(eB(b, a), a);
        if (0 !== a.length)
            return a.reduce((c,d)=>c.ja.g > d.ja.g ? c : d)
    }
    ;function HS(a, b) {
        a.entries.push(Yh(b));
        return a.entries.length - 1
    }
    function IS(a, b, c, d, e, f, g, h, k, l) {
        var m = new zn
          , n = new Jm;
        c = ej(n, 1, c);
        d = ej(c, 2, d);
        b = $i(d, 3, b);
        m = H(m, 1, b);
        b = new Km;
        b = ej(b, 2, a.i);
        e = ej(b, 3, e);
        e = H(m, 2, e);
        g = P(e, 3, Math.round(g));
        d = F(f, BS, 15);
        e = m = c = b = 0;
        for (const q of d) {
            b += (N(q, 3) ? 1 : 0) + (N(q, 4) ? 1 : 0) + (k ? 0 : hi(q, 5, uh, 2).length);
            n = N(q, 3) ? 1 : 0;
            var p = N(q, 4) || !k && hi(q, 5, uh, 2).length ? 1 : 0;
            c += n + p;
            m += N(q, 3) ? 1 : 0;
            l && (e += N(q, 4) ? 1 : 0)
        }
        k = new yn;
        k = aj(k, 1, d.length);
        k = aj(k, 2, b);
        k = bi(k, 3, null == c ? c : hh(c));
        k = bi(k, 4, null == m ? m : hh(m));
        l && bi(k, 5, null == e ? e : hh(e));
        l = H(g, 6, k);
        h.length ? (a = new Pm,
        a = xi(a, 1, h),
        wi(l, 5, An, a)) : (h = new xn,
        h = xi(h, 2, a.entries),
        f = F(f, BS, 15).length,
        f = P(h, 3, f),
        a = H(f, 4, a.g),
        wi(l, 4, An, a));
        return l
    }
    var JS = class {
        constructor() {
            this.entries = [];
            this.g = this.i = null
        }
    }
    ;
    async function KS(a, b) {
        await new Promise(c=>{
            0 < a.j && a.win.requestIdleCallback ? a.win.requestIdleCallback(()=>void c(), {
                timeout: a.j
            }) : a.win.setTimeout(c, 0)
        }
        );
        a.i = a.g.Ba(b) + a.l
    }
    var LS = class {
        constructor(a, b) {
            var c = Vb(Yt)
              , d = Vb(ju);
            this.win = a;
            this.g = b;
            this.l = c;
            this.j = d;
            this.i = b.Ba(2) + c
        }
    }
    ;
    var MS = class {
        constructor(a) {
            this.performance = a
        }
        Ba() {
            return this.performance.now()
        }
    }
      , NS = class {
        Ba() {
            return Date.now()
        }
    }
    ;
    const OS = [255, 255, 255];
    function PS(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/)))
            return b(c);
        if ("transparent" === a || "" === a)
            return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }
    function QS(a) {
        var b = getComputedStyle(a);
        if ("none" !== b.backgroundImage)
            return null;
        b = PS(b.backgroundColor);
        var c = RS(b);
        if (c)
            return c;
        a = (a = a.parentElement) ? QS(a) : OS;
        if (!a)
            return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }
    function RS(a) {
        return 1 === a[3] ? [a[0], a[1], a[2]] : null
    }
    ;var TS = class {
        constructor(a, b, c, d) {
            this.lf = b;
            this.ne = c;
            this.Wb = d;
            this.i = 0;
            this.g = new SS(a)
        }
    }
    ;
    function US(a, b) {
        b -= a.l;
        for (const c of a.g.keys()) {
            const d = a.g.get(c);
            let e = 0;
            for (; e < d.length && d[e] < b; )
                e++;
            a.i -= e;
            0 < e && a.g.set(c, d.slice(e))
        }
    }
    class SS {
        constructor(a) {
            this.l = a;
            this.g = new Map;
            this.i = 0
        }
        get j() {
            return this.i
        }
    }
    ;function VS(a) {
        z(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    }
    ;function WS(a, b) {
        return XS(a, "100 -1000 840 840", `calc(${b} - 2px)`, b, "m784-120-252-252q-30 24-69 38t-83 14q-109 0-184.5-75.5t-75.5-184.5q0-109 75.5-184.5t184.5-75.5q109 0 184.5 75.5t75.5 184.5q0 44-14 83t-38 69l252 252-56 56zm-404-280q75 0 127.5-52.5t52.5-127.5q0-75-52.5-127.5t-127.5-52.5q-75 0-127.5 52.5t-52.5 127.5q0 75 52.5 127.5t127.5 52.5z")
    }
    function YS(a, b, c) {
        switch (c) {
        case 1:
            b = XS(a, "0 -960 960 960", "20px", "20px", "m274-274-128-70 42-42 100 14 156-156-312-170 56-56 382 98 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128Z");
            z(b, {
                fill: "#FFFFFF"
            });
            break;
        case 2:
            a = XS(a, "0 -960 960 960", "20px", "20px", "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z");
            b && z(a, {
                fill: b
            });
            b = a;
            break;
        default:
            a = XS(a, "0 -960 960 960", "20px", "20px", "M503-104q-24 24-57 24t-57-24L103-390q-23-23-23-56.5t23-56.5l352-353q11-11 26-17.5t32-6.5h286q33 0 56.5 23.5T879-800v286q0 17-6.5 32T855-456L503-104Zm196-536q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM446-160l353-354v-286H513L160-446l286 286Zm353-640Z"),
            b && z(a, {
                fill: b
            }),
            b = a
        }
        b.classList.add("google-anno-sa-intent-icon");
        return b
    }
    function ZS(a, b, c, d) {
        a = XS(a, "0 -960 960 960", "20px", "20px", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");
        z(a, {
            left: "13px",
            right: "",
            "pointer-events": "initial",
            position: "absolute",
            top: b.W ? "11px" : "15px",
            transform: "none"
        });
        d && z(a, {
            fill: "#1A73E8"
        });
        a.role = "button";
        a.ariaLabel = c;
        a.tabIndex = 0;
        return a
    }
    function XS(a, b, c, d, e) {
        const f = a.createElementNS("http://www.w3.org/2000/svg", "path");
        f.setAttribute("d", e);
        a = a.createElementNS("http://www.w3.org/2000/svg", "svg");
        a.setAttribute("viewBox", b);
        a.setAttribute("width", c);
        a.setAttribute("height", d);
        VS(a);
        a.appendChild(f);
        return a
    }
    ;const $S = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500"];
    function aT(a, b, c, d, e) {
        a = new bT(a,b,c,d,e);
        if (a.l) {
            Yp(a.win, $S);
            var f = a.win;
            b = a.message;
            c = yw(f);
            e = c.shadowRoot;
            d = e.appendChild;
            f = new je(f.document);
            var g = is('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500" rel="stylesheet"><style>.ipr-container {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; color: #000; border-top: 2px solid rgb(236, 237, 237); border-bottom: 2px solid rgb(236, 237, 237); background-color: #fff; padding: 5px; margin: 5px 0; text-align: center;}.ipr-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ipr-display-none {display: none;}</style><div class="ipr-container"><button class="ipr-button"></button><div class="ipr-info"></div></div>');
            d.call(e, we(f, ds(g)));
            d = Tx("ipr-container", e);
            e = Tx("ipr-button", d);
            b.actionButton ? (e.appendChild(b.actionButton.buttonText),
            e.addEventListener("click", b.actionButton.onClick)) : e.classList.add("ipr-display-none");
            d = Tx("ipr-info", d);
            b.informationText ? d.appendChild(b.informationText) : d.classList.add("ipr-display-none");
            a.g = c.Ta;
            OB(a.l, a.g);
            a.j && a.j(Dm(1));
            cT(a)
        } else
            dT(a)
    }
    function cT(a) {
        const b = new aq(a.win);
        b.K(2E3);
        $o(a, b);
        Zp(b, ()=>{
            eT(a);
            dT(a);
            b.ka()
        }
        )
    }
    function dT(a) {
        aA(a.win, a.Lb).addRegulatoryMessage({
            messageSpec: {
                regulatoryMessage: a.message,
                orderingIndex: 0
            }
        });
        a.j && a.j(Dm(2))
    }
    function eT(a) {
        a.g && (a.g.parentNode?.removeChild(a.g),
        a.g = null)
    }
    var bT = class extends T {
        constructor(a, b, c, d, e) {
            super();
            this.win = a;
            this.l = b;
            this.message = c;
            this.Lb = d;
            this.j = e;
            this.g = null
        }
        i() {
            eT(this);
            super.i()
        }
    }
    ;
    function fT(a, b, c, d, e, f) {
        if (!a.g) {
            var g = b.document.createElement("span");
            g.appendChild(WS(b.document, "12px"));
            g.appendChild(b.document.createTextNode(d));
            aT(b, c || null, {
                informationText: g
            }, e, f ? h=>{
                var k = f.handle
                  , l = gT(f, 16);
                h = wi(l, 11, Ln, h);
                k.call(f, h)
            }
            : f);
            a.g = !0
        }
    }
    var hT = class {
        constructor() {
            this.g = !1
        }
    }
    ;
    const iT = [{
        Wd: "1907259590",
        Md: 480,
        Eb: 220
    }, {
        Wd: "2837189651",
        Md: 400,
        Eb: 180
    }, {
        Wd: "9211025045",
        Md: 360,
        Eb: 160
    }, {
        Wd: "6584860439",
        Md: -Infinity,
        Eb: 150
    }];
    function jT(a) {
        return iT.find(b=>b.Md <= a)
    }
    ;function kT(a, b) {
        return b ? a.replace("ca", "partner") : "pub-adfiliates-query-origin"
    }
    ;function lT(a) {
        mT.g.push(a)
    }
    const mT = new class {
        constructor() {
            this.g = []
        }
    }
    ;
    let nT = !1;
    function oT(a) {
        pT(a.config, 1065, a.win, ()=>{
            if (!a.g) {
                var b = new In;
                b = P(b, 1, a.i);
                var c = new Hn;
                b = wi(b, 2, Jn, c);
                qT(a.config.ba, b)
            }
        }
        , 1E4)
    }
    class rT {
        constructor(a, b, c) {
            this.win = a;
            this.config = b;
            this.i = c;
            this.g = !1
        }
        cancel(a) {
            this.win.clearTimeout(a)
        }
    }
    function sT(a, b, c, d, e, f) {
        const g = jT(a.document.body.clientWidth);
        d = b.qa ? tT(a, b, d, g, e, f) : uT(a, b, d, g, e, f);
        mp(d.isVisible(), !1, ()=>{
            nT = !1;
            var k = mT;
            for (const l of k.g)
                l();
            k.g.length = 0
        }
        );
        d.show({
            gg: !0
        });
        nT = !0;
        const h = new rT(a,b,c);
        oT(h);
        lT(()=>{
            var k = b.ba;
            var l = new In;
            l = P(l, 1, c);
            var m = new Gn;
            l = wi(l, 3, Jn, m);
            qT(k, l);
            h.g = !0
        }
        )
    }
    function tT(a, b, c, d, e, f) {
        d = vT(a, b, c, e, f, {
            ye: d,
            Je: a.innerWidth,
            fg: "100%",
            Gg: "15px",
            eg: "13px",
            Hg: "center",
            yf: 0
        });
        return Vy(a, d, {
            ef: .95,
            Me: .95,
            zIndex: 100001,
            qb: !0,
            De: "adpub-drawer-root",
            Ce: !1,
            Ia: !0,
            Ie: new V(O(b.Z, 10).replace("TERM", c))
        })
    }
    function uT(a, b, c, d, e, f) {
        a: {
            var g = a.document.body.clientWidth;
            var h = .9 * g;
            for (g = 768 >= g ? 3 : 4; 1 <= g; g--) {
                const k = d.Eb * g + 42;
                if (k <= h) {
                    h = k;
                    break a
                }
            }
        }
        d = vT(a, b, c, e, f, {
            ye: d,
            Je: h,
            fg: "600px",
            Gg: "24px",
            eg: "24px",
            Hg: "start",
            yf: 0
        });
        return ey(a, d, {
            Cc: `${h}px`,
            Bc: b.la(),
            sc: O(b.Z, 14),
            zIndex: 100001,
            qb: !0,
            md: !0,
            De: "adpub-drawer-root",
            Ce: !1,
            Ia: !0,
            Ie: new V(O(b.Z, 10).replace("TERM", c))
        })
    }
    function vT(a, b, c, d, e, f) {
        if (N(b.Z, 23)) {
            e = b.g;
            var g = f.Je;
            d = b.qa ? .95 * a.innerHeight : a.innerHeight;
            var h = is;
            c = "<script data-ad-intent-query=" + ps(c) + ' async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=';
            var k = encodeURIComponent(String(e));
            ws.lastIndex = 0;
            k = ws.test(k) ? k.replace(ws, xs) : k;
            c = h(c + k + '" crossorigin="anonymous">\x3c/script><ins class="adsbygoogle" style="display:inline-block;width:' + W(X(g)) + "px;height:" + W(X(d)) + 'px" data-ad-client="' + W(e) + '"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});\x3c/script>');
            e = b.la() ? "rtl" : "ltr";
            b = tj({
                dir: e,
                lang: O(b.Z, 7),
                style: yj`margin:0px;height:100%;padding-top: ${f.yf}px;overflow: hidden;`
            }, ds(c));
            a = a.document.createElement("IFRAME");
            z(a, {
                border: "0",
                width: "100%"
            });
            a.srcdoc = Id(b)
        } else if (b.L.ae)
            f = a.document.createElement("iframe"),
            g = b.Z,
            g = new Qs(f,O(g, 16),"anno-cse",kT(b.g, N(g, 22)),"ShoppingVariant",a.location,O(g, 7),O(g, 10).replace("TERM", c),b.L.Xb,!1,!0,void 0,!0,b.g),
            g.K(),
            wT(a, b, f, c, g, e),
            a = f;
        else {
            g = b.Z;
            var l = O(g, 10)
              , m = l.indexOf("TERM");
            h = f.Je;
            k = f.ye;
            h = Math.max(Math.floor((h - Math.floor(h / k.Eb) * k.Eb) / 2), 5);
            k = f.fg;
            var n = O(g, 3)
              , p = f.Gg
              , q = f.eg
              , v = f.Hg
              , A = O(g, 6)
              , B = l.substring(0, m);
            l = l.substring(m + 4);
            m = !!N(g, 13);
            d = is('<link href="https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet"><div style="font-family: Roboto, sans-serif;"><div style="border: 0 solid #eee; border-bottom-width: 1px; color: #3c4043; font-size: 13px; line-height: 20px; padding: 0 ' + W(X(p)) + " " + W(X(q)) + "; text-align: " + W(X(v)) + ';">' + (d ? '<div style="max-width: ' + W(X(k)) + '">' + hs(n) + '\u00a0<a href="https://support.google.com/adsense/answer/11188578" target="_blank" style="color: #1967d2; text-decoration: none; white-space: nowrap">' + hs(A) + "</a></div>" : "") + "</div><div style=\"border-bottom: 1px solid #eee; color: #202124; font-family: 'Google Sans'; font-size: 15px; line-height: 24px; padding: 15px " + W(X(p)) + "; text-align: " + W(X(v)) + '"><div style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><span style="bottom: -2px; color: #1967d2; font-family: \'Google Material Icons\'; padding-right: 5px; position: relative">search</span><span style="color:#80868b"> ' + hs(B) + "</span>" + hs(c) + '<span style="color:#80868b">' + hs(l) + '</span></div></div><div id="anno-csa" style="margin:5px ' + W(X(h)) + "px\"></div><script>(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');parent.postMessage({query:" + ss(ts(c)) + "},parent.location.origin);\x3c/script>" + (m ? "<script>const el = document.getElementById('anno-csa'); el.dir = 'ltr'; el.style.height = '800px'; el.style.width = '75vw'; el.style.overflow = 'hidden'; el.style.overflowWrap = 'break-word'; el.textContent = JSON.stringify(window._googCsa.q);\x3c/script>" : '<script async="async" src="https://www.google.com/adsense/search/ads.js">\x3c/script>') + "</div>");
            g = {
                dir: b.la() ? "rtl" : "ltr",
                lang: O(g, 7),
                style: xd({
                    margin: "0",
                    height: "100%",
                    "padding-top": `${f.yf}px`,
                    overflow: "hidden"
                })
            };
            d = ds(d);
            Ld("body");
            g = Od("body", g, d);
            d = a.document.createElement("IFRAME");
            z(d, {
                border: "0",
                width: "100%"
            });
            xT(a, b, d, c, f.ye, e);
            d.srcdoc = Id(g);
            a = d
        }
        return a
    }
    function xT(a, b, c, d, e, f) {
        const g = yT(b, a, function(h) {
            h.data.query === d && zT(a, b, c, d, e, f)
        });
        lT(()=>{
            a.removeEventListener("message", g)
        }
        )
    }
    function wT(a, b, c, d, e, f) {
        const g = yT(b, a.top, function(h) {
            "init" === h.data.action && "ShoppingVariant" === h.data.adChannel && AT(a, b, c, e, d, f)
        });
        lT(()=>{
            a.top.removeEventListener("message", g)
        }
        )
    }
    function zT(a, b, c, d, e, f) {
        const g = c.contentDocument?.documentElement;
        g && ((new ResizeObserver(()=>{
            c.height = `${g.offsetHeight}px`
        }
        )).observe(g),
        BT(b, a, ()=>{
            const h = g.offsetHeight;
            h && (c.height = `${h}px`)
        }
        ),
        CT(b, c, d, e, f))
    }
    function AT(a, b, c, d, e, f) {
        N(b.Z, 13) || Os(d, e, f);
        const g = c.contentDocument.documentElement
          , h = new ResizeObserver(()=>{
            c.height = `${Math.ceil(g.offsetHeight + 22)}px`
        }
        );
        h.observe(g);
        const k = BT(b, a, ()=>{
            const l = g.offsetHeight;
            l && (c.height = `${l + 22}px`)
        }
        );
        lT(()=>{
            h.disconnect();
            a.clearInterval(k)
        }
        )
    }
    function CT(a, b, c, d, e) {
        const f = a.Z
          , g = b.contentWindow;
        b = b?.contentDocument || b.contentWindow?.document;
        if (g) {
            if (void 0 === g._googCsa)
                throw Error("No _googCsa");
            if (!b)
                throw Error("No contentDocument");
        } else
            throw Error("No googCsa window");
        a = {
            pubId: kT(a.g, N(f, 22)),
            styleId: d.Wd,
            disableCarousel: !0,
            query: c,
            hl: O(f, 7),
            personalizedAds: "false",
            fexp: a.L.Xb.join(","),
            adfiliateWp: a.g,
            adtest: a.he ? "on" : ""
        };
        e && (a.afdToken = e);
        g._googCsa("ads", a, {
            container: "anno-csa",
            linkTarget: "_blank",
            number: 8,
            width: b.body.offsetWidth - 30
        });
        N(f, 13) && (e = b.getElementById("anno-csa"),
        e.dir = "ltr",
        e.style.height = "800px",
        e.style.width = "75vw",
        e.style.overflow = "hidden",
        e.style.g = "break-word",
        e.textContent = JSON.stringify(g._googCsa.q))
    }
    ;function DT(a) {
        a = PS(a);
        var b = new Rm;
        b = bj(b, 1, a[0]);
        b = bj(b, 2, a[1]);
        b = bj(b, 3, a[2]);
        return pi(b, 4, $g(a[3]), 0)
    }
    ;function ET(a, b, c) {
        return c.Vc ? FT(a, b, c) ?? GT(a, b, c) : GT(a, b, c) ?? FT(a, b, c)
    }
    function GT(a, b, c) {
        const d = c.qa === c.la;
        var e = HT(a, b, c, d);
        if (!e)
            return null;
        e = e.position.ud();
        const f = b.W ? 7 : 16;
        a = IT(a, b, e, c, function(g) {
            g = g.getBoundingClientRect();
            return d ? c.R - g.right : g.left
        });
        if (!a || 200 > a - f)
            return null;
        b = c.R;
        return {
            ua: d ? b - a : f,
            Fa: d ? f : b - a,
            ca: e
        }
    }
    function JT(a, b, c) {
        const d = yo(a)
          , e = S(a);
        return 0 < qx(new sx(a), new mk(e - c.ca - (b.W ? 40 : 50),d - c.Fa,e - c.ca,c.ua)).size
    }
    function HT(a, b, c, d) {
        c = Math.floor(c.U * (c.Mc ?? .3));
        const e = b.W ? 40 : 66;
        return c < e ? null : bz(a, {
            hc: d ? hz({
                ca: b.W ? 0 : 16,
                Fa: b.W ? 7 : 16
            }) : fz({
                ca: b.W ? 0 : 16,
                ua: b.W ? 7 : 16
            }),
            We: c - e,
            Bb: 50,
            Ye: b.W ? 40 : 50,
            Jd: c,
            mb: b.W ? 7 : 16
        }, [a.document.body]).qe
    }
    function IT(a, b, c, d, e) {
        a = d.qa ? KT(a, b, c, d) : LT(a, b, c, d);
        c = d.R;
        let f = d.qa ? c : .35 * c;
        a.forEach(g=>{
            f = Math.min(f, e(g))
        }
        );
        b = b.W ? 7 : 16;
        return f < b ? null : f - b
    }
    function KT(a, b, c, d) {
        const e = d.U
          , f = b.W ? 7 : 16;
        return qx(new sx(a), new mk(e - c - (b.W ? 40 : 50),d.R - f,e - c,f), b.jc ? 3 : void 0, b.jc ? 3 : void 0)
    }
    function LT(a, b, c, d) {
        const e = d.U
          , f = d.R;
        d = d.la;
        const g = b.W ? 7 : 16;
        return qx(new sx(a), new mk(e - c - (b.W ? 40 : 50),(d ? .35 * f : f) - g,e - c,(d ? g : .65 * f) + g), b.jc ? 3 : void 0, b.jc ? 3 : void 0)
    }
    function FT(a, b, c) {
        const d = c.R;
        var e = MT(a, b, c);
        let f = a = b.W ? 7 : 16;
        for (const g of e) {
            e = g.start;
            const h = g.end;
            if (e > f) {
                if (200 <= e - f - a)
                    return NT(c, b, e, f);
                f = h + a
            } else
                h >= f && (f = h + a)
        }
        return 200 <= d - f - a ? NT(c, b, d, f) : null
    }
    function NT(a, b, c, d) {
        const e = a.la;
        return {
            ua: e ? OT(a, b, c, d) : d,
            Fa: e ? d : OT(a, b, c, d),
            ca: b.W ? 0 : 16
        }
    }
    function OT(a, b, c, d) {
        const e = a.R;
        b = b.W ? 7 : 16;
        return a.qa ? e - c + b : Math.max(e - d - .35 * e, e - c + b)
    }
    function MT(a, b, c) {
        const d = c.la
          , e = c.R;
        a = c.qa ? KT(a, b, b.W ? 0 : 16, c) : LT(a, b, b.W ? 0 : 16, c);
        return Array.from(a).map(f=>new az(d ? e - f.getBoundingClientRect().right : f.getBoundingClientRect().left,d ? e - f.getBoundingClientRect().left : f.getBoundingClientRect().right)).sort((f,g)=>f.start - g.start)
    }
    ;function PT(a, b, c, d, e, f, g, h, k) {
        z(c, {
            width: "50px",
            bottom: g ? g.ca + "px" : "16px",
            left: b.la() === b.qa ? "" : g ? g.ua + "px" : "16px",
            right: b.la() === b.qa ? g ? g.Fa + "px" : "16px" : ""
        });
        c.role = "button";
        c.ariaLabel = b.Oe();
        z(e, {
            display: "none"
        });
        z(d, {
            display: "none"
        });
        const l = YS(a.document, b.L.Ua, b.Pb.get(k.ta) || 0);
        a = a.document.createElement("SPAN");
        z(a, {
            display: "inline-block",
            position: "absolute",
            top: b.L.W ? "12px" : "14px",
            left: "15px"
        });
        c.appendChild(a);
        a.appendChild(l);
        QT(b, 1064, c, m=>{
            h?.();
            l.remove();
            z(c, {
                bottom: g ? g.ca + "px" : "16px",
                left: g ? g.ua + "px" : b.qa ? "16px" : b.la() ? "16px" : "65%",
                right: g ? g.Fa + "px" : RT(b),
                width: ""
            });
            c.role = "";
            c.ariaLabel = "";
            z(e, {
                display: ""
            });
            z(d, {
                display: "flex"
            });
            f.focus();
            m.preventDefault();
            return !1
        }
        );
        c.focus()
    }
    function RT(a) {
        return a.la() ? a.qa ? "16px" : "65%" : "16px"
    }
    ;function ST(a, b, c, d, e, f, g, h, k) {
        const l = document.createElement("SPAN");
        l.id = "gda";
        l.appendChild(ZS(a.document, b.L, b.Ne(), b.L.Ua));
        QT(b, 1064, l, m=>{
            g?.();
            PT(a, b, c, d, l, e, f, h, k);
            m.preventDefault();
            m.stopImmediatePropagation();
            return !1
        }
        );
        return l
    }
    function TT(a, b) {
        (new MutationObserver(c=>{
            c.forEach(d=>{
                "attributes" === d.type && "0px" === a.document.body.style.paddingBottom && z(a.document.body, {
                    "padding-bottom": (b.W ? 40 : 66) + "px"
                })
            }
            )
        }
        )).observe(a.document.body, {
            attributes: !0
        })
    }
    function UT(a, b, c, d, e, f, g) {
        var h = b.L
          , k = a.getComputedStyle(a.document.body).paddingBottom.match(/\d+/);
        z(a.document.body, {
            "padding-bottom": (k && k.length ? Number(k[0]) : 0) + (h.W ? 40 : 66) + "px"
        });
        TT(a, b.L);
        h = document.createElement("div");
        h.id = "google-anno-sa";
        h.dir = b.la() ? "rtl" : "ltr";
        h.tabIndex = 0;
        k = {
            background: b.L.je || "#1A73E8",
            "border-style": "solid",
            bottom: e ? e.ca + "px" : "16px",
            "border-radius": b.L.W ? e?.ca ? "12px" : "12px 12px 0 0" : "16px",
            height: (b.L.W ? 40 : 50) + "px",
            position: "fixed",
            "text-align": "center",
            border: "0px",
            left: e ? e.ua + "px" : b.qa ? "16px" : b.la() ? "16px" : "65%",
            right: e ? e.Fa + "px" : RT(b),
            "box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            "z-index": "1000"
        };
        z(h, k);
        z(h, {
            fill: "white"
        });
        k = document.createElement("SPAN");
        var l = d.ta;
        const m = document.createElement("SPAN");
        VS(m);
        var n = {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: (b.la(),
            "50px"),
            right: b.la() ? "24px" : "12px",
            display: "flex",
            "flex-direction": "row",
            color: b.L.Ua || "#FFFFFF",
            cursor: "pointer",
            transition: "width 5s"
        };
        z(m, n);
        b.qa || z(m, {
            "justify-content": ""
        });
        n = YS(a.document, b.L.Ua, b.Pb.get(l) || 0);
        const p = document.createElement("SPAN");
        z(p, {
            display: "inline-block"
        });
        var q = b.L
          , v = b.la();
        z(p, {
            "margin-left": v ? "6px" : "4px",
            "margin-right": v ? "4px" : "6px",
            "margin-top": q.W ? "8px" : "12px"
        });
        m.appendChild(p);
        p.appendChild(n);
        k.classList?.add("google-anno-sa-qtx", "google-anno-skip");
        n = b.wd();
        k.tabIndex = 0;
        k.role = "link";
        k.ariaLive = "polite";
        k.ariaLabel = n.replace("TERM", l);
        z(k, {
            height: b.L.W ? "" : "40px",
            "align-items": "center",
            "line-height": b.L.W ? "35px" : "44px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent",
            color: b.L.Ua
        });
        QT(b, 999, m, c);
        m.appendChild(k);
        c = ST(a, b, h, m, k, e, f, g, d);
        b.L.we && !b.la() ? (h.appendChild(m),
        h.appendChild(c),
        PT(a, b, h, m, c, k, e, g, d)) : (h.appendChild(m),
        h.appendChild(c));
        return h
    }
    function VT(a, b, c, d, e) {
        var f = c.getElementsByClassName("google-anno-sa-qtx")[0];
        f instanceof HTMLElement && (f.innerText = a.ta);
        if ((d.Pb.get(e) || 0) !== (d.Pb.get(a.ta) || 0)) {
            b = YS(b.document, d.L.Ua, d.Pb.get(a.ta) || 0);
            for (const g of c.getElementsByClassName("google-anno-sa-intent-icon"))
                g.replaceWith(b)
        }
        f.ariaLabel = d.Z.wd().replace("TERM", a.ta);
        c = d.ba;
        d = new Im;
        d = cj(d, 1, a.g);
        d = ej(d, 4, a.ta);
        a = c.handle;
        f = gT(c, 13);
        d = wi(f, 6, Ln, d);
        return a.call(c, d)
    }
    function WT(a, b, c, d) {
        if (JT(b, c.L, d))
            return null;
        const e = c.Ba(20);
        d = UT(b, c, g=>{
            if (e + 800 <= c.Ba(21)) {
                var h = c.ba;
                var k = new Bn;
                k = ej(k, 4, a.ta);
                k = cj(k, 1, a.g);
                k = cj(k, 3, a.i);
                h = XT(h, k);
                sT(b, c, h, a.ta, !1, c.j.get(a.ta) || "")
            }
            g.preventDefault();
            return !1
        }
        , a, d, ()=>{
            var g = c.ba;
            var h = new Fm;
            h = P(h, 1, a.g);
            var k = ej(h, 2, a.ta);
            h = g.handle;
            var l = gT(g, 18);
            k = wi(l, 12, Ln, k);
            return h.call(g, k)
        }
        , ()=>{
            var g = c.ba
              , h = new Gm
              , k = g.handle
              , l = gT(g, 19);
            h = wi(l, 13, Ln, h);
            return k.call(g, h)
        }
        );
        const f = VT(a, b, d, c, a.ta);
        b.document.body.appendChild(d);
        return f
    }
    function YT(a, b, c, d, e, f) {
        if (a.ta !== d || null !== a.g || a.j !== e) {
            if (null !== a.i) {
                var g = a.i
                  , h = c.ba;
                var k = new Hm;
                k = P(k, 1, g);
                g = h.handle;
                var l = gT(h, 14);
                k = wi(l, 7, Ln, k);
                g.call(h, k)
            }
            h = a.ta;
            a.ta = d;
            a.g = null;
            a.j = e;
            N(c.Z, 17) || (d = b.document.getElementById("google-anno-sa"),
            a.i = d ? VT(a, b, d, c, h) : WT(a, b, c, f))
        }
    }
    var ZT = class {
        constructor() {
            this.ta = "";
            this.g = null;
            this.j = "";
            this.i = null
        }
    }
    ;
    function $T(a, b) {
        a.g >= a.i.length && (a.g = 0);
        if (nT)
            lT(()=>void $T(a, b));
        else {
            var c = a.i[a.g++];
            a.j = !1;
            YT(a.A, a.win, a.config, c.g, c.i, a.l);
            pT(a.config, 898, a.win, ()=>void $T(a, b), a.uf)
        }
    }
    var aU = class {
        constructor(a, b, c) {
            var d = new ZT;
            this.win = a;
            this.config = b;
            this.A = d;
            this.l = c;
            this.i = [];
            this.j = !0;
            this.g = 0;
            this.uf = b.ie.uf
        }
    }
    ;
    class bU {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    }
    ;function cU(a, b, c, d) {
        b.forEach(e=>{
            var f = un(1);
            f = ej(f, 4, e);
            HS(c, f);
            d.i.push(new bU(e,e));
            d.j && $T(d, a)
        }
        )
    }
    ;const dU = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;
    function eU(a, b) {
        switch (b) {
        case 1:
            return !0;
        default:
            return "" === a || dU.test(a)
        }
    }
    ;var fU = class {
        constructor(a) {
            this.g = a
        }
        isEmpty() {
            return this.g.isEmpty()
        }
        match(a) {
            return this.g.match(a)
        }
    }
    ;
    class gU {
        constructor(a) {
            this.B = a;
            this.size = 1;
            this.g = [new hU];
            this.j = [];
            this.i = new Map;
            this.A = new Map;
            this.l = 0
        }
        isEmpty() {
            return 0 === this.l
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let g = 0; g < a.length; g++) {
                for (; ; ) {
                    var d = a.charCodeAt(g)
                      , e = this.g[b];
                    if (e.contains(d)) {
                        b = e.j.get(d);
                        break
                    }
                    if (0 === b)
                        break;
                    b = e.g
                }
                let h = b;
                for (; ; ) {
                    h = this.g[h].i;
                    if (0 === h)
                        break;
                    const k = g + 1 - this.j[this.g[h].G]
                      , l = g;
                    d = a;
                    e = l;
                    var f = this.B;
                    eU(d.charAt(k - 1), f) && eU(d.charAt(e + 1), f) && c.push(new iU(k,l,this.A.get(this.g[h].B)));
                    h = this.g[h].g
                }
            }
            return c
        }
    }
    class hU {
        constructor() {
            this.j = new Map;
            this.I = !1;
            this.ea = this.H = this.D = this.X = this.M = this.T = -1
        }
        contains(a) {
            return this.j.has(a)
        }
        set A(a) {
            this.T = a
        }
        get A() {
            return this.T
        }
        set C(a) {
            this.M = a
        }
        get C() {
            return this.M
        }
        set l(a) {
            this.I = a
        }
        get l() {
            return this.I
        }
        set B(a) {
            this.H = a
        }
        get B() {
            return this.H
        }
        set g(a) {
            this.X = a
        }
        get g() {
            return this.X
        }
        set i(a) {
            this.D = a
        }
        get i() {
            return this.D
        }
        set G(a) {
            this.ea = a
        }
        get G() {
            return this.ea
        }
        get pa() {
            return this.j.values()
        }
    }
    var iU = class {
        constructor(a, b, c) {
            this.j = a;
            this.i = b;
            this.B = c
        }
        get l() {
            return this.j
        }
        get A() {
            return this.i
        }
        get g() {
            return this.B
        }
        get length() {
            return this.i - this.j
        }
    }
    ;
    const jU = ["block", "inline", "inline-block", "list-item", "table-cell"];
    async function kU(a, b, c, d, e) {
        d.g.Ba(5) >= d.i && await KS(d, 6);
        if (!c.L.Fe) {
            const f = F(c.Z, BS, 15);
            f.length && lU(a, b, c, e, f)
        }
        c.L.Ge || await mU(a, c, d, e)
    }
    function lU(a, b, c, d, e) {
        c.L.Ke && !ET(a, c.L, nU(a, c)) ? pT(c, 898, a, ()=>{
            oU(a, b, c, d, e)
        }
        , c.L.ke) : oU(a, b, c, d, e)
    }
    function pU(a, b, c, d) {
        var e = !0;
        const f = b.wa;
        let g = OD({
            J: a,
            Xe: 3E3,
            Ze: 400,
            wa: f,
            Vh: !1
        });
        c || (g |= 16777216);
        if (c = g)
            e = d.g = d.g ?? new wn,
            P(e, 2, c),
            e = !1;
        0 !== b.He || 0 !== qU(a, 1, f) || b.qa && 0 === qU(a, 2, f) || ($i(d.g = d.g ?? new wn, 3, !0),
        e = !1);
        return e
    }
    function qU(a, b, c) {
        return OD({
            J: a,
            Xe: 3E3,
            Ze: a.innerWidth > vo ? 650 : 0,
            wa: c,
            Vf: b
        })
    }
    async function mU(a, b, c, d) {
        var e = F(b.Z, BS, 15);
        var f = new gU(b.i);
        for (var g of e)
            if (N(g, 3)) {
                e = O(g, 1);
                var h = f.i.has(e) ? f.i.get(e) : f.l++;
                f.i.set(e, h);
                f.A.set(h, e);
                var k = 0;
                for (var l = 0; l < e.length; l++) {
                    const m = e.charCodeAt(l);
                    f.g[k].contains(m) || (f.g.push(new hU),
                    f.g[f.size].A = k,
                    f.g[f.size].C = m,
                    f.g[k].j.set(m, f.size),
                    f.size++);
                    k = f.g[k].j.get(m)
                }
                f.g[k].l = !0;
                f.g[k].B = h;
                f.g[k].G = f.j.length;
                f.j.push(e.length)
            }
        g = [];
        for (g.push(0); 0 < g.length; ) {
            h = g.shift();
            e = f;
            k = e.g[h];
            if (0 === h)
                k.g = 0,
                k.i = 0;
            else if (0 === k.A)
                k.g = 0,
                k.i = k.l ? h : e.g[e.g[h].g].i;
            else {
                k = e.g[e.g[h].A].g;
                for (l = e.g[h].C; ; ) {
                    if (e.g[k].contains(l)) {
                        e.g[h].g = e.g[k].j.get(l);
                        break
                    }
                    if (0 === k) {
                        e.g[h].g = 0;
                        break
                    }
                    k = e.g[k].g
                }
                e.g[h].i = e.g[h].l ? h : e.g[e.g[h].g].i
            }
            for (const m of f.g[h].pa)
                g.push(m)
        }
        f = new fU(f);
        f.isEmpty() || await b.Da(898, rU(a, b, c, d, f, new TS(b.Za.Fj,b.Za.lf,b.Za.ne,b.Za.Wb)))
    }
    async function rU(a, b, c, d, e, f) {
        var g = new hT;
        let h = a.document.body;
        if (N(b.Z, 17) || D(b.Z, jr, 21))
            for (; h; ) {
                c.g.Ba(7) >= c.i && await KS(c, 8);
                if (h.nodeType === Node.TEXT_NODE && "" !== h.textContent && h.parentElement) {
                    const Pb = h.parentElement;
                    a: {
                        var k = a
                          , l = b
                          , m = Pb
                          , n = h.textContent
                          , p = d
                          , q = e
                          , v = f;
                        const Ab = [];
                        b: {
                            var A = n;
                            switch (l.i) {
                            case 1:
                                var B = A;
                                const rb = Array(B.length);
                                let Ea = 0;
                                for (let Qb = 0; Qb < B.length; Qb++)
                                    dU.test(B[Qb]) || Ea++,
                                    rb[Qb] = Ea;
                                var E = rb;
                                break b;
                            default:
                                var J = A;
                                const db = Array(J.length);
                                let sb = 0
                                  , Va = 0;
                                for (; Va < J.length; ) {
                                    for (; /\s/.test(J[Va]); )
                                        db[Va] = sb,
                                        Va++;
                                    let Qb = !1;
                                    for (; Va < J.length && !/\s/.test(J[Va]); )
                                        Qb = !0,
                                        db[Va] = sb,
                                        Va++;
                                    Qb && (sb++,
                                    db[Va - 1] = sb)
                                }
                                E = db
                            }
                        }
                        const qb = E;
                        if (n.includes("\u00bb"))
                            var G = [];
                        else {
                            const rb = q.match(n)
                              , Ea = new Map;
                            for (const db of rb) {
                                const sb = db.l;
                                if (Ea.has(sb)) {
                                    const Va = Ea.get(sb);
                                    db.length > Va.length && Ea.set(sb, db)
                                } else
                                    Ea.set(sb, db)
                            }
                            G = Array.from(Ea.values())
                        }
                        const Ri = G;
                        let He = -1;
                        for (const rb of Ri) {
                            const Ea = rb.l
                              , db = rb.A;
                            var K = v
                              , M = rb.g;
                            US(K.g, K.i + qb[Ea]);
                            var Ba = K
                              , Za = Ba.g
                              , Ib = M;
                            if (!((Za.g.has(Ib) ? Za.g.get(Ib).length : 0) < Ba.lf && K.g.j < K.ne))
                                continue;
                            const sb = k.getComputedStyle(m)
                              , Va = sb.fontSize.match(/\d+/);
                            if (!(Va && 12 <= Number(Va[0]) && 22 >= Number(Va[0]) && $a(jU, sb.display))) {
                                v.i += qb[qb.length - 1];
                                var U = [];
                                break a
                            }
                            const Qb = He + 1;
                            Qb < Ea && Ab.push(k.document.createTextNode(n.substring(Qb, Ea)));
                            const Ti = n.substring(Ea, db + 1);
                            var mb = n
                              , Nc = Ea
                              , uc = db + 1
                              , Ee = k
                              , aa = m
                              , nd = Ti
                              , Um = mb.substring(Math.max(Nc - 30, 0), Nc) + "~~" + mb.substring(uc, Math.min(uc + 30, mb.length))
                              , Vm = rb.g
                              , Wm = qb[Ea];
                            const Ui = aa.getBoundingClientRect();
                            var Xm = un(2);
                            var Ym = ej(Xm, 2, nd);
                            var Zm = ej(Ym, 3, Um);
                            var $m = ej(Zm, 4, Vm);
                            var an = bj($m, 5, Wm);
                            var bn = bj(an, 6, Math.round(Ui.x));
                            var cn = bj(bn, 7, Math.round(Ui.y));
                            const Oc = Ee.getComputedStyle(aa);
                            var dn = new tn;
                            var en = ej(dn, 1, Oc.fontFamily);
                            var fn = DT(Oc.color);
                            var gn = H(en, 7, fn);
                            var hn = DT(Oc.backgroundColor);
                            var jn = H(gn, 8, hn);
                            const Vi = Oc.fontSize.match(/^(\d+(\.\d+)?)px$/);
                            var hg = bj(jn, 4, Vi ? Math.round(Number(Vi[1])) : 0);
                            const rg = Math.round(Number(Oc.fontWeight));
                            isNaN(rg) || 400 === rg || bj(hg, 5, rg);
                            "none" !== Oc.textDecorationLine && ej(hg, 6, Oc.textDecorationLine);
                            var kn = H(cn, 8, hg);
                            const sg = [];
                            let Td = aa;
                            for (; Td && 20 > sg.length; ) {
                                var ig = sg
                                  , ln = ig.push
                                  , Fe = Td
                                  , Li = new Qm;
                                const Wi = ej(Li, 1, Fe.tagName);
                                "" !== Fe.className && oi(Wi, 2, Fe.className.split(" "), sh);
                                ln.call(ig, Wi);
                                if ("BODY" === Td.tagName)
                                    break;
                                Td = Td.parentElement
                            }
                            var Mi = sg.reverse();
                            var Ni = xi(kn, 9, Mi);
                            const on = HS(p, Ni);
                            Ab.push(sU(k, l, on, rb.g, Ti, m));
                            var Ge = v.g
                              , lg = rb.g
                              , Oi = v.i + qb[Ea];
                            let tg = [];
                            Ge.g.has(lg) && (tg = Ge.g.get(lg));
                            tg.push(Oi);
                            Ge.i++;
                            Ge.g.set(lg, tg);
                            He = db;
                            if (0 < v.Wb && v.g.j >= v.Wb)
                                break
                        }
                        const Ie = He + 1;
                        0 !== Ie && Ie < n.length && Ab.push(k.document.createTextNode(n.substring(Ie)));
                        v.i += qb[qb.length - 1];
                        U = Ab
                    }
                    const vc = U;
                    if (0 < vc.length && !N(b.Z, 17)) {
                        fT(g, a, b.Za.dg ? GS(a, b.Za.dg) : void 0, O(b.Z, 3), D(b.Z, jr, 21).i(), b.ba);
                        for (const Ab of vc)
                            Pb.insertBefore(Ab, h),
                            tU(Ab);
                        Pb.removeChild(h);
                        for (h = vc[vc.length - 1]; h.lastChild; )
                            h = h.lastChild;
                        if (0 < f.Wb && f.g.j >= f.Wb)
                            break
                    }
                }
                a: {
                    var pb = h
                      , Pi = f
                      , Qi = b.i;
                    if (pb.firstChild && (pb.nodeType !== Node.ELEMENT_NODE ? 0 : !pb.classList?.contains("google-anno-skip") && pb.offsetHeight)) {
                        b: {
                            switch (pb.tagName?.toUpperCase?.()) {
                            case "IFRAME":
                            case "A":
                            case "AUDIO":
                            case "BUTTON":
                            case "CANVAS":
                            case "CITE":
                            case "CODE":
                            case "EMBED":
                            case "FOOTER":
                            case "FORM":
                            case "KBD":
                            case "LABEL":
                            case "OBJECT":
                            case "PRE":
                            case "SAMP":
                            case "SCRIPT":
                            case "SELECT":
                            case "STYLE":
                            case "SUB":
                            case "SUPER":
                            case "SVG":
                            case "TEXTAREA":
                            case "TIME":
                            case "VAR":
                            case "VIDEO":
                            case null:
                                var mg = !1;
                                break b
                            }
                            mg = !(pb.className.toUpperCase?.()?.includes("CRUMB") || pb.id.toUpperCase?.()?.includes("CRUMB"))
                        }
                        if (mg) {
                            h = pb.firstChild;
                            break a
                        }
                        if (pb.textContent?.length) {
                            var ng = Pi;
                            b: {
                                var og = pb.textContent;
                                switch (Qi) {
                                case 1:
                                    var pg = og;
                                    let vc = 0;
                                    for (let qb = pg.length - 1; 0 <= qb; qb--)
                                        dU.test(pg[qb]) || vc++;
                                    var qg = vc;
                                    break b;
                                default:
                                    const Ab = og.trim();
                                    qg = "" === Ab ? 0 : Ab.split(/\s+/).length
                                }
                            }
                            US(ng.g, ng.i + qg)
                        }
                    }
                    let Pb = pb;
                    for (; ; ) {
                        if (Pb.nextSibling) {
                            h = Pb.nextSibling;
                            break a
                        }
                        if (!Pb.parentNode) {
                            h = null;
                            break a
                        }
                        Pb = Pb.parentNode
                    }
                }
            }
    }
    function nU(a, b) {
        return {
            la: b.la(),
            qa: b.qa,
            R: yo(a),
            U: S(a),
            Vc: b.L.Vc,
            Mc: b.L.Mc
        }
    }
    function oU(a, b, c, d, e) {
        e = e.filter(g=>N(g, 4) || !c.L.xd && 0 < hi(g, 5, uh, 3, void 0, !0).length).map(g=>O(g, 1));
        if (0 !== e.length) {
            var f = ET(a, c.L, nU(a, c));
            pU(a, c, f, d) && (c.L.gf && nb(e),
            cU(b, e, d, new aU(a,c,f)))
        }
    }
    function tU(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if ("A" === a.tagName) {
                var b = RS(PS(getComputedStyle(a.parentElement).color))
                  , c = RS(PS(getComputedStyle(a).color));
                var d = QS(a);
                if (d = b && c && d ? CM(c, d) < Math.min(CM(b, d), 2.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255))
                        throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = 16 > b ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    z(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++)
                tU(a.children[b])
        }
    }
    class uU {
        constructor() {
            this.g = null
        }
        get i() {
            return this.g
        }
    }
    function sU(a, b, c, d, e, f) {
        const g = a.document.createElement("SPAN");
        vU(g, b);
        g.appendChild(a.document.createTextNode(e));
        e = a.document.createElement("A");
        VS(e);
        z(e, {
            "text-decoration": "none",
            fill: "currentColor"
        });
        Ne(e);
        e.className = "google-anno";
        e.appendChild(wU(a, b, f));
        e.appendChild(a.document.createTextNode("\u00a0"));
        e.appendChild(g);
        b.L.Hc && z(e, {
            background: "#D3E3FD",
            "padding-left": "3px",
            "padding-right": "3px",
            "border-bottom": "1.6px",
            "border-bottom-style": "dotted",
            "border-bottom-color": "rgba(4, 12, 40, 2)",
            "border-bottom-left-radius": "1px",
            "border-bottom-right-radius": "1px"
        });
        const h = xU(b, c, e);
        QT(b, 999, e, k=>{
            try {
                var l = b.ba
                  , m = new Bn;
                var n = ej(m, 4, d);
                var p = cj(n, 1, c);
                var q = cj(p, 2, h.i);
                const v = XT(l, q);
                sT(a, b, v, d, !0, b.l.get(d) || "");
                return !1
            } finally {
                k.preventDefault(),
                k.stopImmediatePropagation()
            }
        }
        );
        return e
    }
    function wU(a, b, c) {
        a = WS(a.document, a.getComputedStyle(c).fontSize);
        b.L.Hc && z(a, {
            fill: "#041E49",
            "stroke-width": "50px",
            stroke: "#041E49"
        });
        return a
    }
    function xU(a, b, c) {
        const d = new uU;
        yU(a, e=>{
            for (const k of e)
                if (k.isIntersecting) {
                    var f = b;
                    e = a.ba;
                    var g = new Fn;
                    g = f = P(g, 1, f);
                    f = e.handle;
                    var h = gT(e, 11);
                    g = wi(h, 4, Ln, g);
                    e = f.call(e, g);
                    d.g = e
                } else
                    d.g && (e = a.ba,
                    f = new En,
                    g = f = P(f, 1, d.g),
                    f = e.handle,
                    h = gT(e, 12),
                    g = wi(h, 5, Ln, g),
                    f.call(e, g),
                    d.g = null)
        }
        ).observe(c);
        return d
    }
    function vU(a, b) {
        VS(a);
        b.L.Hc ? z(a, {
            border: "",
            color: "#041E49",
            "font-weight": "bolder"
        }) : (z(a, {
            "text-decoration": "underline"
        }),
        z(a, {
            "text-decoration-style": "dotted"
        }),
        z(a, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        }))
    }
    ;function qT(a, b) {
        var c = a.handle
          , d = gT(a, 15);
        b = wi(d, 9, Ln, b);
        c.call(a, b)
    }
    function XT(a, b) {
        var c = a.handle
          , d = gT(a, 10);
        b = wi(d, 8, Ln, b);
        return c.call(a, b)
    }
    function gT(a, b) {
        var c = new Kn;
        var d = a.A++;
        c = P(c, 1, d);
        b = P(c, 2, Math.round(a.g.Ba(b) - a.i));
        return H(b, 10, a.j)
    }
    var zU = class {
        constructor(a, b, c, d) {
            this.g = a;
            this.i = b;
            this.j = c;
            this.A = 1;
            this.l = [...d]
        }
        handle(a) {
            for (const b of this.l)
                b(a);
            return Di(a, 1)
        }
    }
    ;
    function pT(a, b, c, d, e) {
        c.setTimeout(AU(a, b, d), e)
    }
    function yT(a, b, c) {
        a = AU(a, 999, c);
        b.addEventListener("message", a);
        return a
    }
    function BT(a, b, c) {
        return b.setInterval(AU(a, 1066, c), 1E3)
    }
    function QT(a, b, c, d) {
        c.addEventListener("click", AU(a, b, d))
    }
    function yU(a, b) {
        return new IntersectionObserver(AU(a, 1065, b),{
            threshold: .98
        })
    }
    function AU(a, b, c) {
        return a.Va.La(b, c, void 0, d=>void BU(a, d))
    }
    function BU(a, b) {
        b.es = a.L.Xb.join(",");
        b.c = `${a.B}`
    }
    var DU = class {
        constructor(a, b, c, d, e, f, g, h, k, l, m, n, p=!1) {
            this.g = a;
            this.qa = b;
            this.He = c;
            this.Z = d;
            this.B = e;
            this.Va = f;
            this.ba = g;
            this.wa = h;
            this.A = k;
            this.Za = l;
            this.ie = m;
            this.he = p;
            this.L = new FS(n);
            this.i = $a(CU, O(d, 7)) ? 1 : 0;
            this.l = new Map;
            this.j = new Map;
            this.Pb = new Map;
            for (const q of F(this.Z, BS, 15))
                null != I(q, 6) && this.l.set(O(q, 1), O(q, 6)),
                null != I(q, 7) && this.j.set(O(q, 1), O(q, 7)),
                null != L(q, 10) && this.Pb.set(O(q, 1), Fi(q, 10))
        }
        Da(a, b) {
            this.Va.Da(a, b, c=>void BU(this, c));
            return b
        }
        Ba(a) {
            return this.A.Ba(a)
        }
        la() {
            return 2 === Fi(this.Z, 12)
        }
        Ne() {
            return this.Z.Ne()
        }
        Oe() {
            return this.Z.Oe()
        }
        wd() {
            return this.Z.wd()
        }
    }
    ;
    const CU = ["ja", "zh_CN", "zh_TW"];
    function EU(a, b) {
        return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }
    function FU(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }
    function GU() {
        const a = new Set
          , b = nC();
        try {
            if (!b)
                return a;
            const c = b.pubads();
            for (const d of c.getSlots())
                a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }
    function HU(a) {
        a = a.id;
        return null != a && (GU().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }
    function IU(a, b, c) {
        if (!a.sources)
            return !1;
        switch (JU(a)) {
        case 2:
            const d = KU(a);
            if (d)
                return c.some(f=>LU(d, f));
            break;
        case 1:
            const e = MU(a);
            if (e)
                return b.some(f=>LU(e, f))
        }
        return !1
    }
    function JU(a) {
        if (!a.sources)
            return 0;
        a = a.sources.filter(b=>b.previousRect && b.currentRect);
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top)
                return 2;
            if (a.previousRect.top > a.currentRect.top)
                return 1
        }
        return 0
    }
    function MU(a) {
        return NU(a, b=>b.currentRect)
    }
    function KU(a) {
        return NU(a, b=>b.previousRect)
    }
    function NU(a, b) {
        return a.sources.reduce((c,d)=>{
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }
        , null)
    }
    function LU(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }
    function OU() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(HU)
          , b = [...GU()].map(c=>document.getElementById(c)).filter(c=>null !== c);
        PU = window.scrollX;
        QU = window.scrollY;
        return RU = [...a, ...b].map(c=>c.getBoundingClientRect())
    }
    function SU(a, b) {
        const c = PU !== window.scrollX || QU !== window.scrollY ? [] : RU
          , d = OU();
        for (const e of b.getEntries())
            switch (b = e.entryType,
            b) {
            case "layout-shift":
                TU(a, e, c, d);
                break;
            case "largest-contentful-paint":
                b = e;
                a.Cb = Math.floor(b.renderTime || b.loadTime);
                a.Qa = b.size;
                break;
            case "first-input":
                b = e;
                a.xa = Number((b.processingStart - b.startTime).toFixed(3));
                a.Ga = !0;
                a.g.some(f=>f.entries.some(g=>e.duration === g.duration && e.startTime === g.startTime)) || UU(a, e);
                break;
            case "longtask":
                b = Math.max(0, e.duration - 50);
                a.C += b;
                a.H = Math.max(a.H, b);
                a.X += 1;
                break;
            case "event":
                UU(a, e);
                break;
            default:
                Se(b, void 0)
            }
    }
    function VU(a) {
        a.A || (a.A = new PerformanceObserver(kw(640, b=>{
            SU(a, b)
        }
        )));
        return a.A
    }
    function WU(a) {
        const b = kw(641, ()=>{
            2 === vN(document) && XU(a)
        }
        )
          , c = kw(641, ()=>void XU(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.pa = ()=>{
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            VU(a).disconnect()
        }
    }
    function XU(a) {
        if (!a.Df) {
            a.Df = !0;
            VU(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += FU("cls", a.G),
            b += FU("mls", a.I),
            b += EU("nls", a.T),
            window.LayoutShiftAttribution && (b += FU("cas", a.B),
            b += EU("nas", a.Cf),
            b += FU("was", a.Tf)),
            b += FU("wls", a.ea),
            b += FU("tls", a.Rf));
            window.LargestContentfulPaint && (b += EU("lcp", a.Cb),
            b += EU("lcps", a.Qa));
            window.PerformanceEventTiming && a.Ga && (b += EU("fid", a.xa));
            window.PerformanceLongTaskTiming && (b += EU("cbt", a.C),
            b += EU("mbt", a.H),
            b += EU("nlt", a.X));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe"))
                HU(c) && d++;
            b += EU("nif", d);
            b += EU("ifi", Vk(window));
            c = ho();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${r === r.top ? 1 : 0}`;
            b += a.Ff ? `&${"qqid"}=${encodeURIComponent(a.Ff)}` : EU("pvsid", Ff(r));
            window.googletag && (b += "&gpt=1");
            c = Math.min(a.g.length - 1, Math.floor((a.A ? a.Pa : performance.interactionCount || 0) / 50));
            0 <= c && (c = a.g[c].latency,
            0 <= c && (b += EU("inp", c)));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.pa()
        }
    }
    function TU(a, b, c, d) {
        if (!b.hadRecentInput) {
            a.G += Number(b.value);
            Number(b.value) > a.I && (a.I = Number(b.value));
            a.T += 1;
            if (c = IU(b, c, d))
                a.B += b.value,
                a.Cf++;
            if (5E3 < b.startTime - a.Wc || 1E3 < b.startTime - a.Ef)
                a.Wc = b.startTime,
                a.i = 0,
                a.j = 0;
            a.Ef = b.startTime;
            a.i += b.value;
            c && (a.j += b.value);
            a.i > a.ea && (a.ea = a.i,
            a.Tf = a.j,
            a.Rf = b.startTime + b.duration)
        }
    }
    function UU(a, b) {
        YU(a, b);
        const c = a.g[a.g.length - 1]
          , d = a.D[b.interactionId];
        if (d || 10 > a.g.length || b.duration > c.latency)
            d ? (d.entries.push(b),
            d.latency = Math.max(d.latency, b.duration)) : (b = {
                id: b.interactionId,
                latency: b.duration,
                entries: [b]
            },
            a.D[b.id] = b,
            a.g.push(b)),
            a.g.sort((e,f)=>f.latency - e.latency),
            a.g.splice(10).forEach(e=>{
                delete a.D[e.id]
            }
            )
    }
    function YU(a, b) {
        b.interactionId && (a.M = Math.min(a.M, b.interactionId),
        a.l = Math.max(a.l, b.interactionId),
        a.Pa = a.l ? (a.l - a.M) / 7 + 1 : 0)
    }
    var ZU = class {
        constructor() {
            this.j = this.i = this.T = this.I = this.G = 0;
            this.Ef = this.Wc = Number.NEGATIVE_INFINITY;
            this.g = [];
            this.D = {};
            this.Pa = 0;
            this.M = Infinity;
            this.xa = this.Qa = this.Cb = this.Cf = this.Tf = this.B = this.Rf = this.ea = this.l = 0;
            this.Ga = !1;
            this.X = this.H = this.C = 0;
            this.A = null;
            this.Df = !1;
            this.pa = ()=>{}
            ;
            const a = document.querySelector("[data-google-query-id]");
            this.Ff = a ? a.getAttribute("data-google-query-id") : null;
            this.ei = {
                ai: !1
            }
        }
        observe() {
            var a = window;
            if (!a.google_plmetrics && window.PerformanceObserver) {
                a.google_plmetrics = !0;
                a = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                this.ei.ai && a.push("event");
                for (const b of a)
                    a = {
                        type: b,
                        buffered: !0
                    },
                    "event" === b && (a.durationThreshold = 40),
                    VU(this).observe(a);
                WU(this)
            }
        }
    }
    , PU, QU, RU = [];
    async function $U(a, b, c, d, e, f, g, h) {
        var k = EA
          , l = DA;
        const m = ((h = UM(new YM(a), "__gads", h)) ? ff(h + "t2Z7mVic") % 20 : null) ?? Math.floor(20 * cf());
        var n = f.Ba(0);
        h = 488 > yo(a);
        const p = c.Z;
        var q = c.L
          , v = Cn(m);
        q = oi(v, 3, q.Xb, jh);
        e = new zU(f,n,q,e);
        k = new DU(d,h,c.He,p,m,k,e,l,f,c.Za,c.ie,c.L,c.he);
        d = new JS;
        b = await aV(a, a.document, b, k, g, d);
        f = f.Ba(9) - n;
        k = c.L;
        if (!k.rf && !N(p, 17) && d.entries.length && !N(p, 13)) {
            g = a.document;
            n = g.createElement("LINK");
            a: {
                k = k.ae ? wj`https://cse.google.com/cse.js?cx=${O(p, 16)}&language=${O(p, 7)}` : wj`https://www.google.com/adsense/search/ads.js`;
                if (k instanceof cd)
                    n.href = fd(k).toString();
                else {
                    if (-1 === Te.indexOf("prefetch"))
                        throw Error('TrustedResourceUrl href attribute required with rel="prefetch"');
                    k = k instanceof md ? od(k) : Me(k);
                    if (void 0 === k)
                        break a;
                    n.href = k
                }
                n.rel = "prefetch"
            }
            n.as = "script";
            n.fetchPriority = "low";
            g.head.appendChild(n)
        }
        c = IS(d, h, c.kd, a.location.hostname, c.Di, p, f, b, c.L.xd, c.L.hf);
        a = e.handle;
        h = gT(e, 9);
        c = wi(h, 3, Ln, c);
        a.call(e, c)
    }
    async function aV(a, b, c, d, e, f) {
        b = b.body;
        if (!b || !bV(b))
            return [Mm()];
        e.g.Ba(3) >= e.i && await KS(e, 4);
        b = (b = O(d.Z, 7)) ? (b = b.match(/^[a-z]{2,3}/i)) ? b[0].toLowerCase() : "" : "";
        f.i = b;
        b = [];
        if (a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]')) {
            var g = b.push;
            var h = new Nm;
            var k = new Lm;
            h = wi(h, 3, Om, k);
            g.call(b, h)
        }
        b.length || await kU(a, c, d, e, f);
        return b
    }
    function bV(a) {
        try {
            Sb(new ResizeObserver(()=>{}
            )),
            Sb(new MutationObserver(()=>{}
            ))
        } catch {
            return !1
        }
        return a.classList && void 0 !== a.classList.contains && void 0 !== a.attachShadow
    }
    function cV() {
        var a = Vb(ou)
          , b = EA;
        if (Math.random() < a)
            try {
                (new ZU).observe()
            } catch (c) {
                b.va(1161, c instanceof Error ? c : Error("Unknown error."))
            }
    }
    ;const dV = [Au, Bu, Cu, Du, Eu, Fu, Gu, Hu, Iu, Ju, Ku, Lu, Mu, Nu, Ou, Pu, Qu, Ru, Su, Tu, Uu, Vu, Wu, Xu, Yu, Zu, $u, av, bv, cv];
    async function eV(a, b, c, d, e, f, g) {
        xc() || (cV(),
        d.push(async()=>{
            delete window.google_plmetrics
        }
        ));
        x(tu) || (a = await fV(a, b, c, d, e, f, g),
        a.sb.length && gV(b, c, g, a))
    }
    async function fV(a, b, c, d, e, f, g) {
        const h = a.performance?.now ? new MS(a.performance) : new NS;
        a = new LS(a,h);
        if ("string" !== typeof e)
            return e = new Nm,
            b = new Lm,
            {
                Ib: null,
                sb: [wi(e, 12, Om, b)]
            };
        var k = ES(e);
        e = ti(k);
        if (!b)
            return b = new Nm,
            d = new Lm,
            b = wi(b, 9, Om, d),
            {
                Ib: e,
                sb: [b]
            };
        const l = c.google_ad_client;
        if ("string" !== typeof l)
            return b = new Nm,
            d = new Lm,
            b = wi(b, 11, Om, d),
            {
                Ib: e,
                sb: [b]
            };
        if (wc())
            return {
                Ib: e,
                sb: [Mm()]
            };
        if (hf())
            return b = new Nm,
            d = new Lm,
            b = wi(b, 13, Om, d),
            {
                Ib: e,
                sb: [b]
            };
        var m = w(gK)
          , n = hV(c)
          , p = x(dv) ? iV() : ho();
        c = "on" === c.google_adtest;
        const q = D(k, JO, 2);
        try {
            const B = b?.location?.hash?.match(/\bgoog_cpmi=([^&]*)/);
            if (B) {
                var v = decodeURIComponent(B[1]);
                var A = CS(v)
            } else
                A = null
        } catch (B) {
            A = null
        }
        A = A || ti(k);
        v = q?.g() && (488 > yo(b) || !q?.j()) ? 0 : 1;
        k = F(k, rr, 3);
        k = {
            Fj: Vb(Xt),
            lf: 2,
            ne: 5,
            Wb: 300,
            dg: k
        };
        g = {
            Z: A,
            kd: n,
            He: v,
            Di: g,
            Za: k,
            ie: {
                uf: Vb(wu)
            },
            L: new FS({
                Xb: p,
                Sg: Vb(ou),
                ae: x(xu),
                gf: x(pu),
                Fe: x($t),
                Ge: x(au),
                rf: x(uu),
                Ke: x(du),
                ke: Vb(Wt),
                je: Wb(eu),
                Ua: Wb(fu),
                Vc: x(bu),
                we: x(Zt),
                xd: x(hu),
                W: x(vu),
                Mc: Vb(mu),
                Hc: x(gu),
                jc: x(qu),
                hf: x(su)
            }),
            he: c
        };
        await jV(b, d, m, g, l, h, a, f);
        return {
            Ib: e,
            sb: []
        }
    }
    function iV() {
        const a = ho();
        for (const b of dV)
            a.push(...Xb(b).map(Number));
        a.sort((b,c)=>b - c);
        return a
    }
    function gV(a, b, c, d) {
        a = IS(new JS, !!a && 488 > yo(a), hV(b), a?.location?.hostname ?? "", c, d.Ib ?? new ui, 0, d.sb, x(hu), x(su));
        c = Math.floor(20 * cf());
        b = new Kn;
        b = P(b, 1, 1);
        b = P(b, 2, 0);
        c = Cn(c);
        d = x(dv) ? iV() : ho();
        c = oi(c, 3, d, jh);
        b = H(b, 10, c);
        a = wi(b, 3, Ln, a);
        b = w(gK);
        EA.Da(1214, kK(b, a, Date.now()), kV)
    }
    async function jV(a, b, c, d, e, f, g, h) {
        const k = tx(a);
        k.wasReactiveAdConfigReceived[42] || (k.wasReactiveAdConfigReceived[42] = !0,
        await $U(a, b, d, e, [l=>{
            EA.Da(1214, kK(c, l, f.Ba(17)), kV)
        }
        ], f, g, h))
    }
    function kV(a) {
        a.es = (x(dv) ? iV() : ho()).join(",")
    }
    function hV(a) {
        a = a.google_page_url;
        return "string" === typeof a ? a : ""
    }
    ;function lV({Xf: a, hh: b}) {
        return a || ("dev" === b ? "dev" : "")
    }
    ;function mV(a) {
        EA.nf(b=>{
            b.shv = String(a);
            b.mjsv = lV({
                Xf: "m202402200101",
                hh: a
            });
            b.eid = wQ(r)
        }
        )
    }
    ;var nV = "undefined" === typeof sttc ? void 0 : sttc;
    function oV(a) {
        var b = EA;
        try {
            return hj(a, zl),
            new LO(JSON.parse(a))
        } catch (c) {
            b.va(838, c instanceof Error ? c : Error(String(c)), void 0, d=>{
                d.jspb = String(a)
            }
            )
        }
        return new LO
    }
    ;const pV = (a,b)=>{
        (0,
        a.__uspapi)("getUSPData", 1, (c,d)=>{
            b.callback({
                nb: c ?? void 0,
                nd: d ? void 0 : 2
            })
        }
        )
    }
      , qV = {
        Lc: a=>a.callback,
        Tb: (a,b)=>({
            __uspapiCall: {
                callId: b,
                command: "getUSPData",
                version: 1
            }
        }),
        wb: (a,b)=>{
            b = b.__uspapiReturn;
            a({
                nb: b.returnValue ?? void 0,
                nd: b.success ? void 0 : 2
            })
        }
    };
    function rV(a) {
        let b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            ff: b.__uspapiReturn.callId
        }
    }
    function sV(a, b) {
        let c = {};
        if (NE(a.caller)) {
            var d = Hb(()=>{
                b(c)
            }
            );
            PE(a.caller, "getDataWithCallback", {
                callback: e=>{
                    e.nd || (c = e.nb);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else
            b(c)
    }
    var tV = class extends T {
        constructor(a) {
            super();
            this.timeoutMs = {}.timeoutMs ?? 500;
            this.caller = new QE(a,"__uspapiLocator",b=>"function" === typeof b.__uspapi,rV);
            this.caller.A.set("getDataWithCallback", pV);
            this.caller.j.set("getDataWithCallback", qV)
        }
        i() {
            this.caller.ka();
            super.i()
        }
    }
    ;
    function uV(a, b) {
        b = b && b[0];
        if (!b)
            return null;
        b = b.target;
        const c = b.getBoundingClientRect()
          , d = le(a.g.da() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width)
            return null;
        var e = vV(a, b, c, a.g.g.elementsFromPoint(Yd(c.left + c.width / 2, c.left, c.right - 1), Yd(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, [])
          , f = vV(a, b, c, a.g.g.elementsFromPoint(Yd(c.left + c.width / 2, c.left, c.right - 1), Yd(c.top + 2, c.top, c.bottom - 1)), 2, e.pb)
          , g = vV(a, b, c, a.g.g.elementsFromPoint(Yd(c.left + 2, c.left, c.right - 1), Yd(c.top + c.height / 2, c.top, c.bottom - 1)), 3, [...e.pb, ...f.pb]);
        const h = vV(a, b, c, a.g.g.elementsFromPoint(Yd(c.right - 1 - 2, c.left, c.right - 1), Yd(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.pb, ...f.pb, ...g.pb]);
        var k = wV(a, b, c)
          , l = n=>$a(a.j, n.overlapType) && $a(a.l, n.overlapDepth) && $a(a.i, n.overlapDetectionPoint);
        e = Ta([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = Ta(k, l);
        k = [...e, ...l];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < k.length || f;
        g = me(a.g.g);
        const m = new pk(c.left,c.top,c.width,c.height);
        e = [...Wa(e, n=>new pk(n.elementRect.left,n.elementRect.top,n.elementRect.width,n.elementRect.height)), ...lb(Wa(l, n=>rk(m, n.elementRect))), ...Ta(rk(m, new pk(0,0,d.width,d.height)), n=>0 <= n.top && n.top + n.height <= d.height)];
        return {
            entries: k,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? xV(m, e) : yV(c, e)
        }
    }
    function zV(a, b) {
        const c = a.g.da()
          , d = a.g.g;
        return new Promise((e,f)=>{
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k=>{
                                    const l = new ol
                                      , m = nl(l, ()=>uV(a, k));
                                    m && (l.i.length && (m.executionTime = Math.round(Number(l.i[0].duration))),
                                    h.disconnect(),
                                    e(m))
                                }
                                ,AV);
                                h.observe(b)
                            } else
                                f(Error("5"));
                        else
                            f(Error("4"));
                    else
                        f(Error("3"));
                else
                    f(Error("2"));
            else
                f(Error("1"))
        }
        )
    }
    function vV(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height)
            return {
                entries: [],
                pb: []
            };
        const g = []
          , h = [];
        for (let m = 0; m < d.length; m++) {
            const n = d[m];
            if (n === b)
                continue;
            if ($a(f, n))
                continue;
            h.push(n);
            const p = n.getBoundingClientRect();
            if (a.g.contains(n, b)) {
                g.push(BV(a, c, n, p, 1, e));
                continue
            }
            if (a.g.contains(b, n)) {
                g.push(BV(a, c, n, p, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b;
                const A = k.g.xi(l, n);
                if (!A) {
                    k = null;
                    break a
                }
                const {suspectAncestor: B, Hb: E} = CV(k, l, A, n) || {}
                  , {suspectAncestor: J, Hb: G} = CV(k, n, A, l) || {};
                k = B && E && J && G ? E <= G ? {
                    suspectAncestor: B,
                    overlapType: DV[E]
                } : {
                    suspectAncestor: J,
                    overlapType: EV[G]
                } : B && E ? {
                    suspectAncestor: B,
                    overlapType: DV[E]
                } : J && G ? {
                    suspectAncestor: J,
                    overlapType: EV[G]
                } : null
            }
            const {suspectAncestor: q, overlapType: v} = k || {};
            q && v ? g.push(BV(a, c, n, p, v, e, q)) : g.push(BV(a, c, n, p, 9, e))
        }
        return {
            entries: g,
            pb: h
        }
    }
    function wV(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = bf(b, a.g.da());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(BV(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX,
                !e && c.left < f.left - 2 ? d.push(BV(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(BV(a, c, b, f, 5, 4))))
            }
        }
        return d
    }
    function xV(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length)
            return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a
              , f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++,
            e = qk(e, b[g]),
            e)); g++)
                ;
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }
    function yV(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length)
            return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }
    function BV(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if ($a(a.j, e) && $a(a.i, f)) {
            b = new mk(b.top,b.right - 1,b.bottom - 1,b.left);
            if ((a = FV(a, c)) && ok(b, a))
                c = 4;
            else {
                a = GV(c, d);
                if (Cc) {
                    e = Mk(c, "paddingLeft");
                    f = Mk(c, "paddingRight");
                    var k = Mk(c, "paddingTop")
                      , l = Mk(c, "paddingBottom");
                    e = new mk(k,f,l,e)
                } else
                    e = Fk(c, "paddingLeft"),
                    f = Fk(c, "paddingRight"),
                    k = Fk(c, "paddingTop"),
                    l = Fk(c, "paddingBottom"),
                    e = new mk(parseFloat(k),parseFloat(f),parseFloat(l),parseFloat(e));
                ok(b, new mk(a.top + e.top,a.right - e.right,a.bottom - e.bottom,a.left + e.left)) ? c = 3 : (c = GV(c, d),
                c = ok(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }
    function CV(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement)
            e.unshift(f);
        c = a.g.da();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = bf(h, c);
            if (g) {
                if ("fixed" === g.position)
                    return {
                        suspectAncestor: h,
                        Hb: 1
                    };
                if ("sticky" === g.position && a.g.contains(h.parentElement, d))
                    return {
                        suspectAncestor: h,
                        Hb: 2
                    };
                if ("absolute" === g.position)
                    return {
                        suspectAncestor: h,
                        Hb: 3
                    };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const k = HV(a, e.slice(0, f), h);
                    if (g || k)
                        return {
                            suspectAncestor: h,
                            Hb: 4
                        }
                }
            }
        }
        return (a = HV(a, e, b)) ? {
            suspectAncestor: a,
            Hb: 5
        } : null
    }
    function HV(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d)
            return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.g.contains(f, c))
                continue;
            const g = f.getBoundingClientRect();
            if (!g)
                continue;
            const h = bf(f, a.g.da());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY)
                return f
        }
        return null
    }
    function FV(a, b) {
        var c = a.g.g;
        a = c.createRange();
        if (!a)
            return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d=>/^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(); )
            ;
        c = c.previousNode();
        if (!b || !c)
            return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new mk(a.top,a.right,a.bottom,a.left)
    }
    function GV(a, b) {
        if (!Cc || 9 <= Number(Rc)) {
            var c = Fk(a, "borderLeftWidth");
            d = Fk(a, "borderRightWidth");
            e = Fk(a, "borderTopWidth");
            a = Fk(a, "borderBottomWidth");
            c = new mk(parseFloat(e),parseFloat(d),parseFloat(a),parseFloat(c))
        } else {
            c = Ok(a, "borderLeft");
            var d = Ok(a, "borderRight")
              , e = Ok(a, "borderTop");
            a = Ok(a, "borderBottom");
            c = new mk(e,d,a,c)
        }
        return new mk(b.top + c.top,b.right - 1 - c.right,b.bottom - 1 - c.bottom,b.left + c.left)
    }
    class IV {
        constructor(a) {
            var b = JV;
            this.g = ie(a);
            this.j = [5, 8, 9];
            this.l = [3, 4];
            this.i = b
        }
    }
    const DV = {
        [1]: 3,
        [4]: 10,
        [3]: 12,
        [2]: 4,
        [5]: 5
    }
      , EV = {
        [1]: 6,
        [4]: 11,
        [3]: 13,
        [2]: 7,
        [5]: 8
    };
    Ta(ef({
        Cl: 1,
        Dl: 2,
        sn: 3,
        un: 4,
        wn: 5,
        yl: 6,
        zl: 7,
        Bl: 8,
        Em: 9,
        vn: 10,
        Al: 11,
        rn: 12,
        xl: 13
    }), a=>!$a([1, 2], a));
    ef({
        Kk: 1,
        Hm: 2,
        Vk: 3,
        xn: 4
    });
    const JV = ef({
        Lk: 1,
        An: 2,
        rm: 3,
        en: 4
    })
      , AV = {
        threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
    };
    function KV(a, b, c, d) {
        const e = new OK;
        let f = "";
        const g = k=>{
            try {
                const l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                f === l.paw_id && (Rb(a, "message", g),
                l.error ? e.g(Error(l.error)) : e.resolve(d(l)))
            } catch (l) {}
        }
        ;
        var h = "function" === typeof a.gmaSdk?.getQueryInfo ? a.gmaSdk : void 0;
        if (h)
            return Ob(a, "message", g),
            f = c(h),
            e.promise;
        c = "function" === typeof a.webkit?.messageHandlers?.getGmaQueryInfo?.postMessage || "function" === typeof a.webkit?.messageHandlers?.getGmaSig?.postMessage ? a.webkit.messageHandlers : void 0;
        return c ? (f = String(Math.floor(2147483647 * cf())),
        Ob(a, "message", g),
        b(c, f),
        e.promise) : null
    }
    function LV(a) {
        return KV(a, (b,c)=>void (b.getGmaQueryInfo ?? b.getGmaSig)?.postMessage(c), b=>b.getQueryInfo(), b=>b.signal)
    }
    ;const MV = (a,b)=>{
        try {
            const k = void 0 === N(b, 6) ? !0 : N(b, 6);
            var c = Jj(Fi(b, 2))
              , d = O(b, 3);
            a: switch (Fi(b, 4)) {
            case 1:
                var e = "pt";
                break a;
            case 2:
                e = "cr";
                break a;
            default:
                e = ""
            }
            var f = new Lj(c,d,e)
              , g = D(b, Ej, 5)?.g() ?? "";
            f.Ic = g;
            f.g = k;
            f.win = a;
            var h = f.build();
            Cj(h)
        } catch {}
    }
    ;
    function NV(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }),
        "complete" === a.document.readyState ? MV(a, b) : Ob(a, "load", ()=>void MV(a, b)))
    }
    ;function OV(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }
    function PV(a) {
        if (a === a.top || We(a.top))
            return Promise.resolve({
                status: 4
            });
        a: {
            try {
                var b = (a.top?.frames ?? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b)
            return Promise.resolve({
                status: 2
            });
        if (a.parent === a.top && OV(a.document.referrer))
            return Promise.resolve({
                status: 3
            });
        const c = new OK;
        a = new MessageChannel;
        a.port1.onmessage = d=>{
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                zc: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        }
        ;
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    }
    ;var Cl = {
        In: 0,
        En: 1,
        Fn: 9,
        Bn: 2,
        Cn: 3,
        Hn: 5,
        Gn: 7,
        Dn: 10
    };
    var QV = class extends R {
    }
      , RV = kj(QV)
      , SV = [1, 3];
    const TV = wj`https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;
    function UV(a) {
        const b = a.google_tag_topics_state ?? (a.google_tag_topics_state = {});
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c=>{
            function d(h) {
                return g.g(h).then(({data: k})=>k)
            }
            const e = af("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = fd(TV).toString();
            const f = (new URL(TV.toString())).origin
              , g = LM({
                destination: a,
                Na: e,
                origin: f,
                se: "goog:gRpYw:doubleclick"
            });
            g.g("goog:topics:frame:handshake:ack").then(({data: h})=>{
                "goog:topics:frame:handshake:ack" === h && c(d)
            }
            );
            b.messageChannelSendRequestFn = d;
            a.document.documentElement.appendChild(e)
        }
        )
    }
    function VV(a, b, c) {
        var d = EA
          , e = {
            skipTopicsObservation: x(wv)
        };
        const {ed: f, dd: g} = WV(c);
        b = b.google_tag_topics_state ?? (b.google_tag_topics_state = {});
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e.skipTopicsObservation,
            includeBuyerTopics: e.includeBuyerTopics
        }).then(h=>{
            let k = g;
            if (h instanceof Uint8Array)
                k || (k = !(f instanceof Uint8Array && jb(h, f)));
            else if (Bl()(h))
                k || (k = h !== f);
            else
                return d.va(989, Error(JSON.stringify(h))),
                7;
            if (k && c)
                try {
                    var l = new QV;
                    var m = cj(l, 2, fl());
                    h instanceof Uint8Array ? qi(m, 1, SV, Og(h, !1, !1)) : qi(m, 3, SV, dh(h));
                    c.setItem("goog:cached:topics", fj(m))
                } catch {}
            return h
        }
        ),
        b.getTopicsPromise = a);
        return f && !g ? Promise.resolve(f) : b.getTopicsPromise
    }
    function WV(a) {
        if (!a)
            return {
                ed: null,
                dd: !0
            };
        try {
            const m = a.getItem("goog:cached:topics");
            if (!m)
                return {
                    ed: null,
                    dd: !0
                };
            const n = RV(m);
            let p;
            const q = n.V;
            var b = ri(q, q[C], SV);
            switch (b) {
            case 0:
                p = null;
                break;
            case 1:
                var c;
                a = n;
                var d = si(n, SV, 1);
                const A = a.V;
                let B = A[C];
                const E = ai(A, B, d)
                  , J = Og(E, !0, !!(B & 34));
                null != J && J !== E && ci(A, B, d, J);
                var e = J;
                var f = null == e ? cg() : e;
                bg(Zf);
                var g = f.g;
                if (null == g || Xf(g))
                    var h = g;
                else {
                    if ("string" === typeof g) {
                        d = g;
                        Uf.test(d) && (d = d.replace(Uf, Wf));
                        let G;
                        G = atob(d);
                        const K = new Uint8Array(G.length);
                        for (d = 0; d < G.length; d++)
                            K[d] = G.charCodeAt(d);
                        var k = K
                    } else
                        k = null;
                    h = k
                }
                var l = h;
                p = (c = null == l ? l : f.g = l) ? new Uint8Array(c) : Yf || (Yf = new Uint8Array(0));
                break;
            case 3:
                p = Fi(n, si(n, SV, 3));
                break;
            default:
                Se(b, void 0)
            }
            const v = Di(n, 2) + 6048E5 < fl();
            return {
                ed: p,
                dd: v
            }
        } catch {
            return {
                ed: null,
                dd: !0
            }
        }
    }
    ;function RJ() {
        return navigator.cookieDeprecationLabel ? Promise.race([navigator.cookieDeprecationLabel.getValue().then(a=>({
            status: 1,
            label: a
        })).catch(()=>({
            status: 2
        })), Hf(Vb(ov), {
            status: 5
        })]) : Promise.resolve({
            status: 3
        })
    }
    function XV(a) {
        return x(pv) && a ? !!a.match(Wb(nv)) : !1
    }
    function YV(a) {
        a = a.innerInsElement;
        if (!a)
            throw Error("no_wrapper_element_in_loader_provided_slot");
        return a
    }
    async function ZV({na: a, sa: b, ub: c, slot: d}) {
        const e = d.vars
          , f = Ze(d.pubWin)
          , g = YV(d)
          , h = new CO({
            J: f,
            pubWin: d.pubWin,
            F: e,
            na: a,
            sa: b,
            ub: c,
            ha: g
        });
        h.D = Date.now();
        lk(1, [h.F]);
        GA(1032, ()=>{
            if (f && x(Iv)) {
                var k = h.F;
                Z(FJ(), 32, !1) || (KJ(FJ(), 32, !0),
                FQ(f, "sd" === k.google_loader_used ? 5 : 9))
            }
        }
        );
        try {
            await $V(h)
        } catch (k) {
            if (!JA(159, k))
                throw k;
        }
        GA(639, ()=>{
            var k;
            var l = h.F;
            (k = h.J) && 1 === l.google_responsive_auto_format && !0 === l.google_full_width_responsive_allowed ? (l = (l = k.document.getElementById(l.google_async_iframe_id)) ? te(l, "INS", "adsbygoogle") : null) ? (k = new BO(k,l),
            k.g = r.setInterval(Ga(k.i, k), 500),
            k.i(),
            k = !0) : k = !1 : k = !1;
            return k
        }
        );
        f?.location?.hash?.match(/\bgoog_cpmi=([^&]*)/) ? KA(1008, aW(d.pubWin, f, e, h.j, fj(bW()), h.g, O(a, 8)), kV) : kO(h.pubWin, "affa", k=>{
            k = aW(d.pubWin, f, e, h.j, k.config, h.g, O(a, 8));
            EA.Da(1008, k, kV);
            return !0
        }
        );
        return h
    }
    async function aW(a, b, c, d, e, f, g) {
        await eV(a, b, c, d, e, f, g)
    }
    function bW() {
        const a = new DS;
        if (!x(ru)) {
            var b = new JO;
            b = $i(b, 5, !0);
            H(a, 2, b)
        }
        if (!x(ku)) {
            b = new rr;
            b = bi(b, 2, dh(4));
            b = bi(b, 8, dh(1));
            var c = new tq;
            c = dj(c, 7, "#dpId");
            b = H(b, 1, c);
            yi(a, 3, rr, b)
        }
        return a
    }
    function $V(a) {
        if (/_sdo/.test(a.F.google_ad_format))
            return Promise.resolve();
        var b = a.pubWin;
        uQ(13, b);
        uQ(11, b);
        a.G = !!Gi(a.na, JO, 13, MO)?.l();
        b = FJ();
        var c = Z(b, 23, !1);
        c || KJ(b, 23, !0);
        if (!c) {
            b = a.F.google_ad_client;
            c = a.na;
            b = void 0 !== ei(c, JO, si(c, MO, 13)) ? D(Gi(c, JO, 13, MO), MK, 2) : jb(Gi(c, KO, 14, MO)?.g() ?? [], [b]) ? D(D(Gi(c, KO, 14, MO), JO, 2), MK, 2) : new MK;
            b = new NK(a.pubWin,a.F.google_ad_client,b,a.na.g(),N(a.na, 20));
            b.i = !0;
            c = D(b.B, sr, 1);
            if (b.i) {
                var d = b.g;
                if (b.j && !CE(c)) {
                    var e = new EK;
                    e = bi(e, 1, dh(1))
                } else
                    e = null;
                if (e) {
                    e = fj(e);
                    try {
                        d.localStorage.setItem("google_auto_fc_cmp_setting", e)
                    } catch (f) {}
                }
            }
            d = CE(c) && (b.j || b.A);
            c && d && DE(new EE(b.g,new kF(b.g,b.l),c,new Bx(b.g)))
        }
        b = !tk() && !tc();
        return !b || b && !cW(a) ? dW(a) : Promise.resolve()
    }
    function eW(a, b, c=!1) {
        b = TM(a.J, b);
        const d = xk() || PM(a.pubWin.top);
        if (!b || -12245933 === b.y || -12245933 === d.width || -12245933 === d.height || !d.height)
            return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = RM(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }
    function cW(a) {
        return fW(a) || gW(a)
    }
    function fW(a) {
        const b = a.F;
        if (!b.google_pause_ad_requests)
            return !1;
        const c = r.setTimeout(()=>{
            IA("abg:cmppar", {
                client: a.F.google_ad_client,
                url: a.F.google_page_url
            })
        }
        , 1E4)
          , d = HA(450, ()=>{
            b.google_pause_ad_requests = !1;
            r.clearTimeout(c);
            a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
            if (!cW(a)) {
                const e = dW(a);
                EA.Da(1222, e)
            }
        }
        );
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }
    function gW(a) {
        const b = a.pubWin.document
          , c = a.ha;
        if (3 === vN(b))
            return yN(HA(332, ()=>{
                if (!hW(a, iW().visible, c)) {
                    const g = dW(a);
                    EA.Da(1222, g)
                }
            }
            ), b),
            !0;
        const d = iW();
        if (0 > d.hidden && 0 > d.visible)
            return !1;
        const e = wN(b);
        if (!e)
            return !1;
        if (!xN(b))
            return hW(a, d.visible, c);
        if (eW(a, c) <= d.hidden)
            return !1;
        let f = HA(332, ()=>{
            if (!xN(b) && f) {
                Rb(b, e, f);
                if (!hW(a, d.visible, c)) {
                    const g = dW(a);
                    EA.Da(1222, g)
                }
                f = null
            }
        }
        );
        return Ob(b, e, f)
    }
    function iW() {
        const a = {
            hidden: 0,
            visible: 3
        };
        r.IntersectionObserver || (a.visible = -1);
        xe() && (a.visible *= 2);
        return a
    }
    function hW(a, b, c) {
        if (!c || 0 > b)
            return !1;
        var d = a.F;
        if (!Eo(d.google_reactive_ad_format) && (VN(d) || d.google_reactive_ads_config) || !SM(c) || eW(a, c) <= b)
            return !1;
        var e = FJ()
          , f = Z(e, 8, {});
        e = Z(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g)
            return !1;
        f = new Promise(h=>{
            const k = new r.IntersectionObserver((l,m)=>{
                Ra(l, n=>{
                    0 >= n.intersectionRatio || (m.unobserve(n.target),
                    h(void 0))
                }
                )
            }
            ,{
                rootMargin: `${100 * b}%`
            });
            a.H = k;
            k.observe(c)
        }
        );
        e = new Promise(h=>{
            c.addEventListener("adsbygoogle-close-to-visible-event", ()=>{
                h(void 0)
            }
            )
        }
        );
        ka(Promise, "any").call(Promise, [f, e]).then(()=>{
            GA(294, ()=>{
                const h = dW(a);
                EA.Da(1222, h)
            }
            )
        }
        );
        return !0
    }
    function dW(a) {
        GA(326, ()=>{
            if (1 === Vk(a.F)) {
                var c = x(Jv)
                  , d = c || x(Hv)
                  , e = a.pubWin;
                if (d && e === a.J) {
                    var f = new Zj;
                    d = new ak;
                    var g = f.setCorrelator(Ff(a.pubWin));
                    var h = wQ(a.pubWin);
                    g = ej(g, 5, h);
                    Q(g, 2, 1);
                    f = H(d, 1, f);
                    g = new Yj;
                    g = $i(g, 10, !0);
                    h = x(Cv);
                    g = $i(g, 8, h);
                    h = x(Dv);
                    g = $i(g, 12, h);
                    h = x(Gv);
                    g = $i(g, 7, h);
                    h = x(Fv);
                    g = $i(g, 13, h);
                    H(f, 2, g);
                    e.google_rum_config = d.toJSON();
                    $e(e.document, N(a.na, 9) && c ? a.sa.nj : a.sa.oj)
                } else
                    ml(FA)
            }
        }
        );
        a.F.google_ad_channel = jW(a, a.F.google_ad_channel);
        a.F.google_tag_partner = kW(a, a.F.google_tag_partner);
        lW(a);
        const b = a.F.google_start_time;
        "number" === typeof b && (no = b,
        a.F.google_start_time = null);
        OM(a);
        a.J && ZN(a.J, dd(a.sa.gi, SK()));
        NJ() && cL({
            win: a.pubWin,
            webPropertyCode: a.F.google_ad_client,
            jb: dd(a.sa.jb, SK())
        });
        VN(a.F) && (aL() && (a.F.google_adtest = a.F.google_adtest || "on"),
        a.F.google_pgb_reactive = a.F.google_pgb_reactive || 3);
        return mW(a)
    }
    function jW(a, b) {
        return (b ? [b] : []).concat(AJ(a.pubWin).ad_channels || []).join("+")
    }
    function kW(a, b) {
        return (b ? [b] : []).concat(AJ(a.pubWin).tag_partners || []).join("+")
    }
    function nW(a) {
        const b = af("IFRAME");
        df(a, (c,d)=>{
            null != c && b.setAttribute(d, c)
        }
        );
        return b
    }
    function oW(a, b, c) {
        return 9 === a.F.google_reactive_ad_format && te(a.ha, null, "fsi_container") ? (a.ha.appendChild(b),
        Promise.resolve(b)) : fO(a.sa.Yg, 525, d=>{
            a.ha.appendChild(b);
            d.createAdSlot(a.J, a.F, b, a.ha.parentElement, ck(c, a.pubWin));
            return b
        }
        )
    }
    function pW(a, b, c, d) {
        fK();
        w(gK).kd = a.F.google_page_url;
        NV(a.pubWin, Hj(Gj(Q(Q(Fj(new Ij, Dj(new Ej, String(Ff(a.pubWin)))), 4, 1), 2, 1), O(a.na, 2)), d.g()));
        const e = a.J;
        a.F.google_acr && a.F.google_acr(b);
        Ob(b, "load", ()=>{
            b && b.setAttribute("data-load-complete", !0);
            const g = e ? AJ(e).enable_overlap_observer || !1 : !1;
            (a.F.ovlp || g) && e && e === a.pubWin && qW(e, a, a.ha, b)
        }
        );
        d = g=>{
            g && a.j.push(()=>{
                g.ka()
            }
            )
        }
        ;
        const f = rW(a, b);
        sW(a, b);
        !e || VN(a.F) && !iO(a.F) || (d(new IP(e,b,a.ha)),
        d(new $O(a,b)),
        d(e.IntersectionObserver ? null : new bP(e,b,a.ha)),
        d(PP(e, b, a.F, a.ha, HA(1225, ()=>{
            f();
            for (const g of a.j)
                g();
            a.j.length = 0
        }
        ))));
        e && (d(UO(e, b, a.g)),
        a.j.push(vO(e, a.F)),
        w(AO).K(e),
        a.j.push(HO(e, a.ha, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.F.iaaso;
        if (null != c) {
            d = a.ha;
            const g = d.parentElement;
            (g && Zv.test(g.className) ? g : d).setAttribute("data-auto-ad-size", c)
        }
        c = a.ha;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label", "Advertisement");
        tW(a)
    }
    function rW(a, b) {
        const c = a.pubWin
          , d = a.F.google_ad_client
          , e = MJ();
        let f = null;
        const g = jO(c, "pvt", (h,k)=>{
            "string" === typeof h.token && k.source === b.contentWindow && (f = h.token,
            g(),
            e[d] = e[d] || [],
            e[d].push(f),
            100 < e[d].length && e[d].shift())
        }
        );
        a.j.push(g);
        return ()=>{
            f && Array.isArray(e[d]) && (ab(e[d], f),
            e[d].length || delete e[d],
            f = null)
        }
    }
    function uW(a, b) {
        var c = UM(a, "__gpi_opt_out", b.g);
        c && (c = Qj(Pj(Oj(Mj(c), 2147483647), "/"), b.pubWin.location.hostname),
        VM(a, "__gpi_opt_out", c, b.g))
    }
    function sW(a, b) {
        const c = jO(a.pubWin, "gpi-uoo", (d,e)=>{
            if (e.source === b.contentWindow) {
                e = Qj(Pj(Oj(Mj(d.userOptOut ? "1" : "0"), 2147483647), "/"), a.pubWin.location.hostname);
                var f = new YM(a.pubWin);
                VM(f, "__gpi_opt_out", e, a.g);
                if (d.userOptOut || d.clearAdsData)
                    WM(f, "__gads", a.g),
                    WM(f, "__gpi", a.g)
            }
        }
        );
        a.j.push(c)
    }
    function tW(a) {
        const b = tk(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                const c = d=>{
                    "fill_sticky" === d.data && b.renderStart && b.renderStart()
                }
                ;
                Ob(a.pubWin, "message", EA.La(616, c));
                a.j.push(()=>{
                    Rb(a.pubWin, "message", c)
                }
                )
            } else
                b.renderStart && b.renderStart()
    }
    function qW(a, b, c, d) {
        zV(new IV(a), c).then(e=>{
            lk(8, [e]);
            return e
        }
        ).then(e=>{
            const f = c.parentElement;
            (f && Zv.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }
        ).then(e=>{
            const f = b.F.armr || ""
              , g = e.executionTime || ""
              , h = null == b.F.iaaso ? "" : Number(b.F.iaaso)
              , k = Number(e.isOverlappingOrOutsideViewport)
              , l = Wa(e.entries, B=>`${B.overlapType}:${B.overlapDepth}:${B.overlapDetectionPoint}`)
              , m = Number(e.overlappedArea.toFixed(2))
              , n = d.dataset.googleQueryId || ""
              , p = m * e.targetRect.width * e.targetRect.height
              , q = `${e.scrollPosition.scrollX},${e.scrollPosition.scrollY}`
              , v = Wk(e.target)
              , A = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
            e = `${e.viewportSize.width}x${e.viewportSize.height}`;
            IA("ovlp", {
                adf: b.F.google_ad_dom_fingerprint,
                armr: f,
                client: b.F.google_ad_client,
                eid: wQ(b.F),
                et: g,
                fwrattr: b.F.google_full_width_responsive,
                iaaso: h,
                io: k,
                saldr: b.F.google_loader_used,
                oa: m,
                oe: l.join(","),
                qid: n,
                rafmt: b.F.google_responsive_auto_format,
                roa: p,
                slot: b.F.google_ad_slot,
                sp: q,
                tgt: v,
                tr: A,
                url: b.F.google_page_url,
                vp: e,
                pvc: Ff(a)
            }, 1)
        }
        ).catch(e=>{
            lk(8, ["Error:", e.message, c]);
            IA("ovlp-err", {
                err: e.message
            }, 1)
        }
        )
    }
    function vW(a, b) {
        b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a
    }
    function wW(a, b, c) {
        var d = a.F
          , e = d.google_async_iframe_id;
        const f = d.google_ad_width
          , g = d.google_ad_height
          , h = mO(d);
        e = {
            id: e,
            name: e
        };
        nQ("browsing-topics", a.pubWin.document) && xW(a) && !x(sv) && !XV(a.A?.label) && (e.browsingTopics = "true");
        e.style = h ? [`width:${f}px !IMPORTANT`, `height:${g}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${f}px;` + `height:${g}px;`;
        var k = qf();
        k["allow-top-navigation-by-user-activation"] && k["allow-popups-to-escape-sandbox"] && (x(Mt) && h || (k = "=" + encodeURIComponent("1"),
        b = Ae(b, "fsb" + k)),
        e.sandbox = pf().join(" "));
        !1 === d.google_video_play_muted && vW("autoplay", e);
        k = b;
        61440 < k.length && (k = k.substring(0, 61432),
        k = k.replace(/%\w?$/, ""),
        k = k.replace(/&[^=]*=?$/, ""),
        k += "&trunc=1");
        if (k !== b) {
            let l = b.lastIndexOf("&", 61432);
            -1 === l && (l = b.lastIndexOf("?", 61432));
            IA("trn", {
                ol: b.length,
                tr: -1 === l ? "" : b.substring(l + 1),
                url: b
            }, .01)
        }
        b = k;
        null != f && (e.width = String(f));
        null != g && (e.height = String(g));
        e.frameborder = "0";
        e.marginwidth = "0";
        e.marginheight = "0";
        e.vspace = "0";
        e.hspace = "0";
        e.allowtransparency = "true";
        e.scrolling = "no";
        d.dash && (e.srcdoc = d.dash);
        a.pubWin.document.featurePolicy?.features().includes("attribution-reporting") && vW("attribution-reporting", e);
        x(zv) && (d = a.pubWin,
        void 0 !== d.credentialless && (x(Av) || d.crossOriginIsolated) && (e.credentialless = "true"));
        if (h)
            e.src = b,
            e = nW(e),
            a = oW(a, e, c);
        else {
            c = {};
            c.dtd = FO((new Date).getTime(), no);
            c = Rk(c, b);
            e.src = c;
            c = a.pubWin;
            c = c == c.top;
            e = nW(e);
            c && a.j.push(zk(a.pubWin, e));
            a.ha.style.visibility = "visible";
            for (a = a.ha; c = a.firstChild; )
                a.removeChild(c);
            a.appendChild(e);
            a = Promise.resolve(e)
        }
        return a
    }
    async function yW(a) {
        var b = a.F
          , c = a.pubWin;
        const d = a.g;
        d.g() && uW(new YM(a.pubWin), a);
        var e = ck(d, a.pubWin);
        if (!(d.g() || x(qv) && a.G))
            return IA("afc_noc_req", {}, Vb(ht)),
            Promise.resolve();
        !x(mv) || x(qv) && !d.g() || (a.A = await QJ());
        if (!x(uv) && (!x(qv) || d.g())) {
            var f = nQ("shared-storage", a.pubWin.document)
              , g = nQ("browsing-topics", a.pubWin.document);
            if (f || g)
                try {
                    a.B = UV(a.pubWin)
                } catch (h) {
                    JA(984, h)
                }
        }
        x($s) || bN(d, a.pubWin, a.F.google_ad_client);
        vQ(a.pubWin, d);
        if (f = a.F.google_reactive_ads_config)
            eO(a.J, f),
            nO(f, a, ck(d)),
            f = f.page_level_pubvars,
            xa(f) && Zc(a.F, f);
        f = nQ("shared-storage", a.pubWin.document);
        a.B && d.g() && f && !x(hv) && !Z(FJ(), 34, !1) && (KJ(FJ(), 34, !0),
        f = a.B.then(h=>{
            h({
                message: "goog:spam:client_age",
                pvsid: Ff(a.pubWin),
                useObfuscatedKey: x(iv)
            })
        }
        ),
        EA.Da(1069, f));
        if (nQ("browsing-topics", a.pubWin.document) && a.B && !x(tv) && !XV(a.A?.label))
            if (xW(a)) {
                a.l = 1;
                const h = ck(a.g, a.pubWin);
                f = a.B.then(async k=>{
                    await VV(k, a.pubWin, h).then(l=>{
                        a.l = l
                    }
                    )
                }
                );
                x(vv) && (g = Vb(xv),
                0 < g ? await Promise.race([f, Hf(g)]) : await f)
            } else
                a.l = 5;
        f = "";
        mO(b) ? (e = a.sa.Jj,
        f = Wb(Ut),
        "inhead" === f ? e = a.sa.Hj : "nohtml" === f && (e = a.sa.Ij),
        x(Lt) && (e = dd(e, {
            hello: "world"
        })),
        f = e.toString() + "#" + (encodeURIComponent("RS-" + b.google_reactive_sra_index + "-") + "&" + Qk({
            adk: b.google_ad_unit_key,
            client: b.google_ad_client,
            fa: b.google_reactive_ad_format
        })),
        kS(b, FJ()),
        zW(b)) : (5 === b.google_pgb_reactive && b.google_reactive_ads_config || !WN(b) || UN(c, b, e)) && zW(b) && (f = bS(a, d));
        lk(2, [b, f]);
        if (!f)
            return Promise.resolve();
        b.google_async_iframe_id || Uk(c);
        e = Vk(b);
        b = a.pubWin === a.J ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)}`;
        c = 0 < eW(a, a.ha, !0);
        e = {
            ifi: e,
            uci: b
        };
        c && (c = FJ(),
        e.btvi = Z(c, 21, 1),
        LJ(c, 21));
        f = Rk(e, f);
        c = wW(a, f, d);
        a.F.rpe && GP(a.pubWin, a.ha, {
            height: a.F.google_ad_height,
            tf: "force",
            Yc: !0,
            kf: !0,
            ee: a.F.google_ad_client
        });
        c = await c;
        try {
            pW(a, c, b, d)
        } catch (h) {
            JA(223, h)
        }
    }
    function AW(a) {
        const b = new tV(a);
        return new Promise(c=>{
            sV(b, d=>{
                d && "string" === typeof d.uspString ? c(d.uspString) : c(null)
            }
            )
        }
        )
    }
    function BW(a) {
        var b = rf(r.top, "googlefcPresent");
        r.googlefc && !b && IA("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }
    function CW(a, b, c) {
        var d = c.Cj
          , e = c.uspString;
        c = c.Ei;
        d ? DO(a, d, b) : x(jv) || HK(a, !0);
        e && (b = dj(a, 1, e),
        e = e.toUpperCase(),
        4 == e.length && (-1 == e.indexOf("-") || "---" === e.substring(1)) && "1" <= e[0] && "9" >= e[0] && fL.hasOwnProperty(e[1]) && fL.hasOwnProperty(e[2]) && fL.hasOwnProperty(e[3]) ? (d = new eL,
        d = bj(d, 1, parseInt(e[0], 10)),
        d = Q(d, 2, fL[e[1]]),
        d = Q(d, 3, fL[e[2]]),
        e = Q(d, 4, fL[e[3]])) : e = null,
        e = 2 === e?.Bi(),
        Zi(b, 13, e));
        c && pN(a, c)
    }
    function DW(a) {
        const b = Vb(et);
        if (0 >= b)
            return null;
        const c = fl()
          , d = LV(a.pubWin);
        if (!d)
            return null;
        a.C = "0";
        return Promise.race([d, Hf(b, "0")]).then(e=>{
            IA("adsense_paw", {
                time: fl() - c
            });
            1E4 < e?.length ? JA(809, Error(`ML:${e.length}`)) : a.C = e
        }
        ).catch(e=>{
            JA(809, e)
        }
        )
    }
    function EW(a) {
        const b = fl();
        return Promise.race([GA(832, ()=>PV(a)), Hf(200)]).then(c=>{
            IA("afc_etu", {
                etus: c?.status ?? 100,
                sig: fl() - b,
                tms: 200
            });
            return c?.zc
        }
        )
    }
    async function FW(a) {
        const b = fl();
        x(gt) && hK(e=>{
            e = $i(e, 2, !!a.na?.g());
            Q(e, 1, 1)
        }
        );
        sM(a.pubWin);
        BW(a.F.google_ad_client);
        x(gt) && hK(e=>{
            Q(e, 1, 2)
        }
        );
        var c = new XE(a.pubWin);
        await (UE(c, ".google.cn" === O(a.na, 8)) ? VE(c) : Promise.resolve(null));
        x(gt) && hK(e=>{
            e = $i(e, 3, !0);
            Q(e, 1, 3)
        }
        );
        let d;
        a.g = new IK;
        x(jv) && (d = a.na.g(),
        HK(a.g, !d));
        c = [EO(a), AW(a.pubWin), x(at) ? qN(a) : null];
        c = await Promise.all(c);
        CW(a.g, d, {
            Cj: c[0],
            uspString: c[1],
            Ei: c[2]
        });
        if (x(gt)) {
            const e = fl();
            hK(f=>{
                f = $i(f, 3, 500 < e - b);
                f = $i(f, 4, !!a.g?.j());
                f = $i(f, 5, !!a.g?.g());
                Q(f, 1, 4)
            }
            )
        }
    }
    async function GW(a) {
        const b = DW(a)
          , c = GA(868, ()=>EW(a.pubWin));
        await FW(a);
        await b;
        a.zc = await c || "";
        await yW(a)
    }
    function xW(a) {
        const b = a.g;
        a = a.F;
        return !a.google_restrict_data_processing && 1 !== a.google_tag_for_under_age_of_consent && 1 !== a.google_tag_for_child_directed_treatment && !!b.g() && !b.l() && !OJ() && !N(b, 9) && !N(b, 13) && (!x(at) || !N(b, 12)) && ("string" !== typeof a.google_privacy_treatments || !a.google_privacy_treatments.split(",").includes("disablePersonalization"))
    }
    function mW(a) {
        If(a.pubWin) !== a.pubWin && (a.i |= 4);
        3 === vN(a.pubWin.document) && (a.i |= 32);
        var b;
        if (b = a.J) {
            b = a.J;
            const c = yo(b);
            b = !(Co(b).scrollWidth <= c)
        }
        b && (a.i |= 1024);
        a.pubWin.Prototype?.Version && (a.i |= 16384);
        a.F.google_loader_features_used && (a.i |= a.F.google_loader_features_used);
        return GW(a)
    }
    function zW(a) {
        const b = FJ()
          , c = a.google_ad_section;
        VN(a) && LJ(b, 15);
        if (Yk(a)) {
            if (100 < LJ(b, 5))
                return !1
        } else if (100 < LJ(b, 6) - Z(b, 15, 0) && "" === c)
            return !1;
        return !0
    }
    function lW(a) {
        const b = a.J;
        if (b && !AJ(b).ads_density_stats_processed && !tk(b) && (AJ(b).ads_density_stats_processed = !0,
        x(Qt) || .01 > cf())) {
            const c = ()=>{
                if (b) {
                    var d = pI(kI(b), a.F.google_ad_client, b.location.hostname, wQ(a.F).split(","));
                    IA("ama_stats", d, 1)
                }
            }
            ;
            Gf(b, ()=>{
                r.setTimeout(c, 1E3)
            }
            )
        }
    }
    ;(function(a, b, c) {
        GA(843, ()=>{
            if (!r.google_sa_impl) {
                var d = new bo(b);
                try {
                    Xg(k=>{
                        var l = new Rn;
                        var m = new Qn;
                        try {
                            var n = Ff(window);
                            P(m, 1, n)
                        } catch (A) {}
                        try {
                            var p = ho();
                            oi(m, 2, p, fh)
                        } catch (A) {}
                        try {
                            ej(m, 3, window.document.URL)
                        } catch (A) {}
                        l = H(l, 2, m);
                        m = new Pn;
                        m = Q(m, 1, 1192);
                        try {
                            var q = zl(k?.name) ? k.name : "Unknown error";
                            ej(m, 2, q)
                        } catch (A) {}
                        try {
                            var v = zl(k?.message) ? k.message : `Caught ${k}`;
                            ej(m, 3, v)
                        } catch (A) {}
                        try {
                            const A = zl(k?.stack) ? k.stack : Error().stack;
                            A && oi(m, 4, A.split(/\n\s*/), sh)
                        } catch (A) {}
                        k = H(l, 1, m);
                        q = new On;
                        try {
                            ej(q, 1, "m202402200101")
                        } catch {}
                        wi(k, 6, Sn, q);
                        P(k, 5, 1);
                        Un(d, k)
                    }
                    )
                } catch (k) {}
                var e = oV(a);
                mV(O(e, 2));
                PO(e.g());
                lk(16, [3, e.toJSON()]);
                var f = lV({
                    Xf: b,
                    hh: O(e, 2)
                })
                  , g = c(f, e);
                r.google_sa_impl = k=>ZV({
                    na: e,
                    sa: g,
                    ub: f,
                    slot: k
                });
                sQ(mQ(r));
                r.google_process_slots?.();
                var h = (r.Prototype || {}).Version;
                null != h && IA("prtpjs", {
                    version: h
                })
            }
        }
        )
    }
    )(nV, "m202402200101", function(a, b) {
        const c = 2012 < Ci(b, 1) ? `_fy${Ci(b, 1)}` : ""
          , d = O(b, 3);
        b = O(b, 2);
        return {
            oj: wj`https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            nj: wj`https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            Yg: wj`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}reactive_library${c}.js`,
            gi: wj`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}debug_card_library${c}.js`,
            Jj: wj`https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup${c}.html`,
            Hj: wj`https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup_inhead${c}.html`,
            Ij: wj`https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup_nohtml${c}.html`,
            fo: wj`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}slotcar_library${c}.js`,
            Un: wj`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
            jb: wj`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}autogames${c}.js`
        }
    });
}
).call(this, "[2021,\"r20240221\",\"r20110914\",null,null,null,null,\".google.com.pe\",null,null,null,null,null,null,null,null,null,-1,[44759875,44759926]]");
