(function(sttc) {
    'use strict';
    var p, aa = {};
    /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
    var u = this || self;
    function ba(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }
    function ca(a) {
        var b = ba(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    function da(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    function w(a) {
        return Object.prototype.hasOwnProperty.call(a, ea) && a[ea] || (a[ea] = ++fa)
    }
    var ea = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , fa = 0;
    function ha(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function ia(a, b, c) {
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
    function y(a, b, c) {
        y = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
        return y.apply(null, arguments)
    }
    function ja(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    function ka(a) {
        return a
    }
    ;var la;
    function ma(a) {
        u.setTimeout(()=>{
            throw a;
        }
        , 0)
    }
    ;var na, qa;
    a: {
        for (var ra = ["CLOSURE_FLAGS"], sa = u, ta = 0; ta < ra.length; ta++)
            if (sa = sa[ra[ta]],
            null == sa) {
                qa = null;
                break a
            }
        qa = sa
    }
    var ua = qa && qa[610401301];
    na = null != ua ? ua : !1;
    function va() {
        var a = u.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var wa;
    const xa = u.navigator;
    wa = xa ? xa.userAgentData || null : null;
    function ya(a) {
        return na ? wa ? wa.brands.some(({brand: b})=>b && -1 != b.indexOf(a)) : !1 : !1
    }
    function z(a) {
        return -1 != va().indexOf(a)
    }
    ;function za() {
        return na ? !!wa && 0 < wa.brands.length : !1
    }
    function Aa() {
        return za() ? !1 : z("Trident") || z("MSIE")
    }
    function Ba() {
        !z("Safari") || Ca() || (za() ? 0 : z("Coast")) || (za() ? 0 : z("Opera")) || (za() ? 0 : z("Edge")) || (za() ? ya("Microsoft Edge") : z("Edg/")) || za() && ya("Opera")
    }
    function Ca() {
        return za() ? ya("Chromium") : (z("Chrome") || z("CriOS")) && !(za() ? 0 : z("Edge")) || z("Silk")
    }
    ;function Da(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    function Ea(a, b) {
        const c = a.length
          , d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            e in d && b.call(void 0, d[e], e, a)
    }
    function Fa(a, b) {
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
    function Ga(a, b) {
        const c = a.length
          , d = Array(c)
          , e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
    function Ha(a, b) {
        const c = a.length
          , d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    function Ia(a, b) {
        return 0 <= Da(a, b)
    }
    function Ja(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function Ka(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (ca(d)) {
                const e = a.length || 0
                  , f = d.length || 0;
                a.length = e + f;
                for (let g = 0; g < f; g++)
                    a[e + g] = d[g]
            } else
                a.push(d)
        }
    }
    function La(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1))
              , e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    }
    ;function Ma(a) {
        Ma[" "](a);
        return a
    }
    Ma[" "] = function() {}
    ;
    var Na = za() ? !1 : z("Opera")
      , Oa = Aa()
      , Pa = z("Edge")
      , Qa = z("Gecko") && !(-1 != va().toLowerCase().indexOf("webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge")
      , Ra = -1 != va().toLowerCase().indexOf("webkit") && !z("Edge");
    function Sa() {
        var a = u.document;
        return a ? a.documentMode : void 0
    }
    var Ta;
    a: {
        var Ua = ""
          , Va = function() {
            var a = va();
            if (Qa)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Pa)
                return /Edge\/([\d\.]+)/.exec(a);
            if (Oa)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Ra)
                return /WebKit\/(\S+)/.exec(a);
            if (Na)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Va && (Ua = Va ? Va[1] : "");
        if (Oa) {
            var Wa = Sa();
            if (null != Wa && Wa > parseFloat(Ua)) {
                Ta = String(Wa);
                break a
            }
        }
        Ta = Ua
    }
    var Xa = Ta, Ya;
    if (u.document && Oa) {
        var Za = Sa();
        Ya = Za ? Za : parseInt(Xa, 10) || void 0
    } else
        Ya = void 0;
    var $a = Ya;
    !z("Android") || Ca();
    Ca();
    Ba();
    let ab = 0
      , bb = 0;
    function cb(a) {
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
        ab = c >>> 0;
        bb = a >>> 0
    }
    function db() {
        var a = ab
          , b = bb;
        if (b & 2147483648)
            var c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
        else
            b >>>= 0,
            a >>>= 0,
            2097151 >= b ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    }
    ;function eb(a) {
        return Array.prototype.slice.call(a)
    }
    ;var B = Symbol();
    function C(a, b, c) {
        return c ? a | b : a & ~b
    }
    var fb = (a,b)=>{
        a[B] = b;
        return a
    }
    ;
    function gb(a, b) {
        fb(b, (a | 0) & -14591)
    }
    function hb(a, b) {
        fb(b, (a | 34) & -14557)
    }
    function ib(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    }
    ;var kb = {}
      , lb = {};
    function mb(a) {
        return !(!a || "object" !== typeof a || a.g !== lb)
    }
    function nb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let ob;
    function pb(a, b, c) {
        if (!Array.isArray(a) || a.length)
            return !1;
        const d = a[B] | 0;
        if (d & 1)
            return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c))))
            return !1;
        fb(a, d | 1);
        return !0
    }
    var qb;
    const rb = [];
    fb(rb, 55);
    qb = Object.freeze(rb);
    function sb(a) {
        if (a & 2)
            throw Error();
    }
    class tb {
    }
    class ub {
    }
    Object.freeze(new tb);
    Object.freeze(new ub);
    let vb;
    function wb(a) {
        if (vb)
            throw Error("");
        vb = b=>{
            u.setTimeout(()=>{
                a(b)
            }
            , 0)
        }
    }
    function xb(a) {
        a = Error(a);
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = "warning";
        if (vb)
            try {
                vb(a)
            } catch (b) {
                throw b.cause = a,
                b;
            }
        return a
    }
    ;const yb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    function zb(a) {
        const b = typeof a;
        return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : yb.test(a)
    }
    function Ab(a) {
        if (null != a) {
            if (!Number.isFinite(a))
                throw xb("enum");
            a |= 0
        }
        return a
    }
    function Bb(a) {
        return null == a ? a : Number.isFinite(a) ? a | 0 : void 0
    }
    function Cb(a) {
        if ("number" !== typeof a)
            throw xb("int32");
        if (!Number.isFinite(a))
            throw xb("int32");
        return a | 0
    }
    function Db(a) {
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
    function Eb(a) {
        if (null != a) {
            var b = !!b;
            if (!zb(a))
                throw xb("int64");
            "string" === typeof a ? a = Fb(a) : b ? (a = Math.trunc(a),
            Number.isSafeInteger(a) ? a = String(a) : (b = String(a),
            Gb(b) ? a = b : (cb(a),
            a = db()))) : a = Hb(a)
        }
        return a
    }
    function Gb(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    }
    function Hb(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            cb(a);
            var b = ab
              , c = bb;
            if (a = c & 2147483648)
                b = ~b + 1 >>> 0,
                c = ~c >>> 0,
                0 == b && (c = c + 1 >>> 0);
            b = 4294967296 * c + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }
    function Fb(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b))
            return String(b);
        b = a.indexOf(".");
        -1 !== b && (a = a.substring(0, b));
        Gb(a) || (16 > a.length ? cb(Number(a)) : (a = BigInt(a),
        ab = Number(a & BigInt(4294967295)) >>> 0,
        bb = Number(a >> BigInt(32) & BigInt(4294967295))),
        a = db());
        return a
    }
    function Ib(a) {
        if ("string" !== typeof a)
            throw Error();
        return a
    }
    function Jb(a) {
        if (null != a && "string" !== typeof a)
            throw Error();
        return a
    }
    function Kb(a) {
        return null == a || "string" === typeof a ? a : void 0
    }
    function Lb(a, b, c) {
        if (null != a && "object" === typeof a && a.Jb === kb)
            return a;
        if (Array.isArray(a)) {
            var d = a[B] | 0
              , e = d;
            0 === e && (e |= c & 32);
            e |= c & 2;
            e !== d && fb(a, e);
            return new b(a)
        }
    }
    ;let Mb;
    function Nb(a, b) {
        Mb = b;
        a = new a(b);
        Mb = void 0;
        return a
    }
    ;function Ob(a, b) {
        return Pb(b)
    }
    function Pb(a) {
        switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a)
                if (Array.isArray(a)) {
                    if (pb(a, void 0, 0))
                        return
                } else if (null != a && a instanceof Uint8Array) {
                    let b = ""
                      , c = 0;
                    const d = a.length - 10240;
                    for (; c < d; )
                        b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                    return btoa(b)
                }
        }
        return a
    }
    ;function Qb(a, b, c) {
        a = eb(a);
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
    function Rb(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a))
                a = pb(a, void 0, 0) ? void 0 : e && (a[B] | 0) & 2 ? a : Sb(a, b, c, void 0 !== d, e);
            else if (nb(a)) {
                const f = {};
                for (let g in a)
                    Object.prototype.hasOwnProperty.call(a, g) && (f[g] = Rb(a[g], b, c, d, e));
                a = f
            } else
                a = b(a, d);
            return a
        }
    }
    function Sb(a, b, c, d, e) {
        const f = d || c ? a[B] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = eb(a);
        for (let g = 0; g < a.length; g++)
            a[g] = Rb(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }
    function Tb(a) {
        return a.Jb === kb ? a.toJSON() : Pb(a)
    }
    ;function Ub(a, b, c=hb) {
        if (null != a) {
            if (a instanceof Uint8Array)
                return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[B] | 0;
                if (d & 2)
                    return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? fb(a, (d | 34) & -12293) : Sb(a, Ub, d & 4 ? hb : c, !0, !0)
            }
            a.Jb === kb && (c = a.aa,
            d = c[B],
            a = d & 2 ? a : Nb(a.constructor, Vb(c, d, !0)));
            return a
        }
    }
    function Vb(a, b, c) {
        const d = c || b & 2 ? hb : gb
          , e = !!(b & 32);
        a = Qb(a, b, f=>Ub(f, e, d));
        a[B] = a[B] | 32 | (c ? 2 : 0);
        return a
    }
    function Wb(a) {
        const b = a.aa
          , c = b[B];
        return c & 2 ? Nb(a.constructor, Vb(b, c, !1)) : a
    }
    ;function Xb(a, b) {
        a = a.aa;
        return Yb(a, a[B], b)
    }
    function Yb(a, b, c, d) {
        if (-1 === c)
            return null;
        if (c >= ib(b)) {
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
    function Zb(a, b, c) {
        const d = a.aa;
        let e = d[B];
        sb(e);
        $b(d, e, b, c);
        return a
    }
    function $b(a, b, c, d, e) {
        const f = ib(b);
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
            g !== b && fb(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1],
        c in a && delete a[c]);
        return b
    }
    function ac(a, b) {
        a = Xb(a, b);
        return null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0
    }
    function bc(a, b, c) {
        a = a.aa;
        let d = a[B];
        const e = 2 & d ? 1 : 2;
        let f = cc(a, d, b);
        var g = f[B] | 0;
        if (!(4 & g)) {
            if (4 & g || Object.isFrozen(f))
                f = eb(f),
                g = dc(g, d, !1),
                d = $b(a, d, b, f);
            var h = 0;
            let k = 0;
            for (; h < f.length; h++) {
                const l = c(f[h]);
                null != l && (f[k++] = l)
            }
            k < h && (f.length = k);
            g = ec(g, d);
            g = C(g, 20, !0);
            g = C(g, 4096, !1);
            g = C(g, 8192, !1);
            fb(f, g);
            2 & g && Object.freeze(f)
        }
        fc(g) || (c = g,
        (h = 1 === e) ? g = C(g, 2, !0) : g = C(g, 32, !1),
        g !== c && fb(f, g),
        h && Object.freeze(f));
        2 === e && fc(g) && (f = eb(f),
        g = dc(g, d, !1),
        fb(f, g),
        $b(a, d, b, f));
        return f
    }
    function cc(a, b, c) {
        a = Yb(a, b, c);
        return Array.isArray(a) ? a : qb
    }
    function ec(a, b) {
        var c = !1;
        0 === a && (a = dc(a, b, c));
        return a = C(a, 1, !0)
    }
    function fc(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }
    function gc(a, b, c, d) {
        const e = a.aa;
        let f = e[B];
        sb(f);
        if (null == c)
            return $b(e, f, b),
            a;
        let g = c[B] | 0
          , h = g;
        var k = !!(2 & g) || Object.isFrozen(c);
        const l = !k && !1;
        if (!(4 & g))
            for (g = 21,
            k && (c = eb(c),
            h = 0,
            g = dc(g, f, !0)),
            k = 0; k < c.length; k++)
                c[k] = d(c[k]);
        l && (c = eb(c),
        h = 0,
        g = dc(g, f, !0));
        g !== h && fb(c, g);
        $b(e, f, b, c);
        return a
    }
    function hc(a, b, c, d) {
        const e = a.aa;
        let f = e[B];
        sb(f);
        $b(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    }
    function ic(a, b, c, d) {
        const e = a.aa;
        let f = e[B];
        sb(f);
        (c = jc(e, f, c)) && c !== b && null != d && (f = $b(e, f, c));
        $b(e, f, b, d);
        return a
    }
    function jc(a, b, c) {
        let d = 0;
        for (let e = 0; e < c.length; e++) {
            const f = c[e];
            null != Yb(a, b, f) && (0 !== d && (b = $b(a, b, d)),
            d = f)
        }
        return d
    }
    function kc(a, b, c) {
        a = a.aa;
        let d = a[B];
        const e = Yb(a, d, c, !1);
        b = Lb(e, b, d);
        b !== e && null != b && $b(a, d, c, b, !1);
        return b
    }
    function lc(a, b, c) {
        b = kc(a, b, c);
        if (null == b)
            return b;
        a = a.aa;
        let d = a[B];
        if (!(d & 2)) {
            const e = Wb(b);
            e !== b && (b = e,
            $b(a, d, c, b, !1))
        }
        return b
    }
    function mc(a, b, c) {
        a = a.aa;
        var d = a[B]
          , e = d
          , f = !(2 & d)
          , g = !!(2 & e)
          , h = g ? 1 : 2;
        d = 1 === h;
        h = 2 === h;
        f && (f = !g);
        g = cc(a, e, c);
        var k = g[B] | 0;
        const l = !!(4 & k);
        if (!l) {
            k = ec(k, e);
            var m = g
              , n = e;
            const q = !!(2 & k);
            q && (n = C(n, 2, !0));
            let r = !q
              , t = !0
              , v = 0
              , A = 0;
            for (; v < m.length; v++) {
                const D = Lb(m[v], b, n);
                if (D instanceof b) {
                    if (!q) {
                        const J = !!((D.aa[B] | 0) & 2);
                        r && (r = !J);
                        t && (t = J)
                    }
                    m[A++] = D
                }
            }
            A < v && (m.length = A);
            k = C(k, 4, !0);
            k = C(k, 16, t);
            k = C(k, 8, r);
            fb(m, k);
            q && Object.freeze(m)
        }
        b = !!(8 & k) || d && !g.length;
        if (f && !b) {
            fc(k) && (g = eb(g),
            k = dc(k, e, !1),
            e = $b(a, e, c, g));
            b = g;
            f = k;
            for (m = 0; m < b.length; m++)
                k = b[m],
                n = Wb(k),
                k !== n && (b[m] = n);
            f = C(f, 8, !0);
            f = C(f, 16, !b.length);
            fb(b, f);
            k = f
        }
        fc(k) || (b = k,
        d ? k = C(k, !g.length || 16 & k && (!l || 32 & k) ? 2 : 2048, !0) : k = C(k, 32, !1),
        k !== b && fb(g, k),
        d && Object.freeze(g));
        h && fc(k) && (g = eb(g),
        k = dc(k, e, !1),
        fb(g, k),
        $b(a, e, c, g));
        return g
    }
    function nc(a, b, c) {
        null == c && (c = void 0);
        return Zb(a, b, c)
    }
    function oc(a, b, c, d) {
        null == d && (d = void 0);
        return ic(a, b, c, d)
    }
    function dc(a, b, c) {
        a = C(a, 2, !!(2 & b));
        a = C(a, 32, !!(32 & b) && c);
        return a = C(a, 2048, !1)
    }
    function pc(a, b) {
        return Db(Xb(a, b))
    }
    function qc(a, b) {
        return Kb(Xb(a, b))
    }
    function rc(a, b, c=!1) {
        return ac(a, b) ?? c
    }
    function sc(a, b) {
        a = Xb(a, b);
        var c;
        null == a ? c = a : zb(a) ? "number" === typeof a ? c = Hb(a) : c = Fb(a) : c = void 0;
        return c ?? 0
    }
    ;var E = class {
        constructor(a) {
            a: {
                null == a && (a = Mb);
                Mb = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a))
                        throw Error();
                    b = a[B] | 0;
                    if (b & 64)
                        break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d,
                    nb(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (1024 <= c)
                            throw Error();
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                fb(a, b)
            }
            this.aa = a
        }
        toJSON() {
            return ob ? tc(this, this.aa, !1) : tc(this, Sb(this.aa, Tb, void 0, void 0, !1), !0)
        }
    }
    ;
    E.prototype.Jb = kb;
    function tc(a, b, c) {
        const d = a.constructor.Ha
          , e = (c ? a.aa : b)[B];
        a = b.length;
        if (!a)
            return b;
        let f, g;
        if (nb(c = b[a - 1])) {
            a: {
                var h = c;
                let m = {}
                  , n = !1;
                for (var k in h) {
                    if (!Object.prototype.hasOwnProperty.call(h, k))
                        continue;
                    let q = h[k];
                    if (Array.isArray(q)) {
                        let r = q;
                        if (pb(q, d, +k) || mb(q) && 0 === q.size)
                            q = null;
                        q != r && (n = !0)
                    }
                    null != q ? m[k] = q : n = !0
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
            if (!(null == c || pb(c, d, l) || mb(c) && 0 === c.size))
                break;
            g = !0
        }
        if (!f && !g)
            return b;
        b = Array.prototype.slice.call(b, 0, a);
        h && b.push(h);
        return b
    }
    ;function uc(a, b) {
        const c = vc;
        vc = void 0;
        if (!b(a))
            throw b = c ? c() + "\n" : "",
            Error(b + String(a));
    }
    function wc(a) {
        uc(a, xc);
        return a
    }
    let vc = void 0;
    function yc(a) {
        return b=>{
            if (null == b || "" == b)
                b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b))
                    throw Error(void 0);
                b[B] |= 32;
                b = Nb(a, b)
            }
            return b
        }
    }
    ;var zc = class {
        constructor(a, b=!1) {
            this.g = a;
            this.defaultValue = b
        }
    }
      , Ac = class {
        constructor() {
            this.defaultValue = 250
        }
    }
    ;
    var Bc = new zc(590317302)
      , Cc = new zc(597667424);
    function Dc() {
        return !1
    }
    function Ec() {
        return !0
    }
    function Fc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }
    function Gc(a) {
        let b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    function Hc(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }
    function Ic(a) {
        function b() {
            d = u.setTimeout(c, 100);
            let g = f;
            f = [];
            a.apply(void 0, g)
        }
        function c() {
            d = 0;
            e && (e = !1,
            b())
        }
        let d = 0
          , e = !1
          , f = [];
        return function(g) {
            f = arguments;
            d ? e = !0 : b()
        }
    }
    ;var Jc = {
        capture: !0
    }
      , Kc = {
        passive: !0
    }
      , Lc = Gc(function() {
        let a = !1;
        try {
            const b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            u.addEventListener("test", null, b)
        } catch (b) {}
        return a
    });
    function Mc(a) {
        return a ? a.passive && Lc() ? a : a.capture || !1 : !1
    }
    function G(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Mc(d)),
        !0) : !1
    }
    function H(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Mc(d)),
        !0) : !1
    }
    ;var I = a=>{
        var b = "Hb";
        if (a.Hb && a.hasOwnProperty(b))
            return a.Hb;
        b = new a;
        return a.Hb = b
    }
    ;
    var Oc = class {
        constructor() {
            const a = {};
            this.j = (b,c)=>null != a[b] ? a[b] : c;
            this.l = (b,c)=>null != a[b] ? a[b] : c;
            this.A = (b,c)=>null != a[b] ? a[b] : c;
            this.B = (b,c)=>null != a[b] ? a[b] : c;
            this.g = ()=>{}
        }
    }
    ;
    function K(a) {
        return I(Oc).j(a.g, a.defaultValue)
    }
    ;var Pc = Oa || Ra;
    var Qc;
    function Rc() {
        if (void 0 === Qc) {
            var a = null
              , b = u.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ka,
                        createScript: ka,
                        createScriptURL: ka
                    })
                } catch (c) {
                    u.console && u.console.error(c.message)
                }
                Qc = a
            } else
                Qc = a
        }
        return Qc
    }
    ;var Sc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    }
      , Tc = {};
    function Uc(a) {
        const b = Rc();
        a = b ? b.createScriptURL(a) : a;
        return new Sc(a,Tc)
    }
    ;var Vc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
      , Wc = {}
      , Xc = new Vc("about:invalid#zClosurez",Wc);
    const Yc = {};
    function Zc() {
        var a = $c`* { pointer-events: none; }`;
        return a instanceof ad && a.constructor === ad ? a.g : "type_error:SafeStyleSheet"
    }
    class ad {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    ;const bd = {};
    function cd(a) {
        return a instanceof dd && a.constructor === dd ? a.g : "type_error:SafeHtml"
    }
    class dd {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    var ed = new dd(u.trustedTypes && u.trustedTypes.emptyHTML || "",bd);
    var fd = Gc(function() {
        var a = document.createElement("div")
          , b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = cd(ed);
        return !b.parentElement
    });
    function gd(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }
    function hd(a) {
        return gd.apply(null, arguments) / arguments.length
    }
    ;function M(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    function id(a, b) {
        return new M(a.x - b.x,a.y - b.y)
    }
    M.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    M.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    M.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    function jd(a, b) {
        this.width = a;
        this.height = b
    }
    p = jd.prototype;
    p.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    p.isEmpty = function() {
        return !(this.width * this.height)
    }
    ;
    p.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    p.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    p.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    function kd(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : u.document.createElement("div");
        return a.replace(ld, function(e, f) {
            var g = c[e];
            if (g)
                return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)),
            isNaN(f) || (g = String.fromCharCode(f)));
            if (!g) {
                g = e + " ";
                g = (f = Rc()) ? f.createHTML(g) : g;
                g = new dd(g,bd);
                if (fd())
                    for (; d.lastChild; )
                        d.removeChild(d.lastChild);
                d.innerHTML = cd(g);
                g = d.firstChild.nodeValue.slice(0, -1)
            }
            return c[e] = g
        })
    }
    var ld = /&([^;\s<&]+);?/g;
    function md(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c)
            b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }
    function nd(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
    function od(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
    ;function pd(a) {
        return a ? new qd(rd(a)) : la || (la = new qd)
    }
    function sd(a) {
        a = a.document;
        a = td(a) ? a.documentElement : a.body;
        return new jd(a.clientWidth,a.clientHeight)
    }
    function ud(a) {
        var b = a.document
          , c = 0;
        if (b) {
            c = b.body;
            var d = b.documentElement;
            if (!d || !c)
                return 0;
            a = sd(a).height;
            if (td(b) && d.scrollHeight)
                c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
            else {
                b = d.scrollHeight;
                var e = d.offsetHeight;
                d.clientHeight != e && (b = c.scrollHeight,
                e = c.offsetHeight);
                c = b > a ? b > e ? b : e : b < e ? b : e
            }
        }
        return c
    }
    function vd(a) {
        return a ? a.parentWindow || a.defaultView : window
    }
    function wd(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }
    function td(a) {
        return "CSS1Compat" == a.compatMode
    }
    function xd(a, b) {
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
    function rd(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    function yd(a, b, c, d) {
        a && !c && (a = a.parentNode);
        for (c = 0; a && (null == d || c <= d); ) {
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null
    }
    function qd(a) {
        this.g = a || u.document || document
    }
    function zd(a, b) {
        return wd(a.g, b)
    }
    qd.prototype.contains = xd;
    function Ad() {
        return na && wa ? wa.mobile : !Bd() && (z("iPod") || z("iPhone") || z("Android") || z("IEMobile"))
    }
    function Bd() {
        return na && wa ? !wa.mobile && (z("iPad") || z("Android") || z("Silk")) : z("iPad") || z("Android") && !z("Mobile") || z("Silk")
    }
    ;var Cd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    /* 
 
 SPDX-License-Identifier: Apache-2.0 
*/
    class Dd {
        constructor(a) {
            this.Vc = a
        }
    }
    function Ed(a) {
        return new Dd(b=>b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Fd = [Ed("data"), Ed("http"), Ed("https"), Ed("mailto"), Ed("ftp"), new Dd(a=>/^[^:]*([/?#]|$)/.test(a))];
    function Gd(a, b=Fd) {
        if (a instanceof Vc)
            return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof Dd && d.Vc(a))
                return new Vc(a,Wc)
        }
    }
    var Hd = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
    function Id(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href)
                a: {
                    try {
                        Ma(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
            return b
        } catch {
            return !1
        }
    }
    function Jd(a) {
        return Id(a.top) ? a.top : null
    }
    function Kd(a, b) {
        const c = Ld("SCRIPT", a);
        c.src = b instanceof Sc && b.constructor === Sc ? b.g : "type_error:TrustedResourceUrl";
        (void 0)?.ae || (b = (b = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector?.("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }
    function Md(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }
    function Nd() {
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
    function Od(a, b) {
        if (a)
            for (const c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    function Pd(a) {
        const b = [];
        Od(a, function(c) {
            b.push(c)
        });
        return b
    }
    var Qd = /^([0-9.]+)px$/
      , Rd = /^(-?[0-9.]{1,30})$/;
    function Sd(a) {
        if (!Rd.test(a))
            return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }
    function Td(a) {
        return (a = Qd.exec(a)) ? +a[1] : null
    }
    var Ud = Gc(()=>Ad() ? 2 : Bd() ? 1 : 0)
      , N = (a,b)=>{
        Od(b, (c,d)=>{
            a.style.setProperty(d, c, "important")
        }
        )
    }
      , Vd = (a,b)=>{
        for (a = [a]; a.length; ) {
            var c = a.shift();
            !1 !== b(c) && (c = Fa(c.children || c.childNodes || [], d=>1 === d.nodeType),
            c.length && a.unshift(...c))
        }
    }
      , Xd = (a,b)=>{
        if ("length"in a.style) {
            a = a.style;
            const c = a.length;
            for (let d = 0; d < c; d++) {
                const e = a[d];
                b(a[e], e, a)
            }
        } else
            a = Wd(a.style.cssText),
            Od(a, b)
    }
      , Wd = a=>{
        const b = {};
        if (a) {
            const c = /\s*:\s*/;
            Ea((a || "").split(/\s*;\s*/), d=>{
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
      , Yd = (a,b=()=>!0)=>{
        const c = /!\s*important/i;
        Xd(a, (d,e)=>{
            !c.test(d) && b(e, d) ? a.style.setProperty(e, d, "important") : c.test(d) && !b(e, d) && a.style.setProperty(e, d, "")
        }
        )
    }
    ;
    const Zd = {
        ["http://googleads.g.doubleclick.net"]: !0,
        ["http://pagead2.googlesyndication.com"]: !0,
        ["https://googleads.g.doubleclick.net"]: !0,
        ["https://pagead2.googlesyndication.com"]: !0
    }
      , $d = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/
      , ae = /.*domain\.test$/
      , be = /\.prod\.google\.com(:\d+)?$/;
    var ce = a=>Zd[a] || $d.test(a) || ae.test(a) || be.test(a)
      , de = a=>{
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    ;
    function Ld(a, b=document) {
        return b.createElement(String(a).toLowerCase())
    }
    var ee = a=>{
        if (K(Bc) || Ca() && Ad()) {
            var b = Jd(a);
            if (b) {
                a = 0 === Ud();
                var c = !!b.document.querySelector('meta[name=viewport][content*="width=device-width"]')
                  , d = b.innerWidth;
                b = b.outerWidth;
                if (0 === d)
                    a = 1;
                else {
                    var e = Math.round(100 * (b / d + Number.EPSILON)) / 100;
                    a = 1 === e ? 1 : a || c ? e : Math.round(100 * (b / d / .4 + Number.EPSILON)) / 100
                }
            } else
                a = 1
        } else
            a = 1;
        return a
    }
    ;
    function fe(a, b, c=null, d=!1, e=!1) {
        ge(a, b, c, d, e)
    }
    function ge(a, b, c, d, e=!1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Ld("IMG", a.document);
        if (c || d) {
            const g = h=>{
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const k = Da(h, f);
                    0 <= k && Array.prototype.splice.call(h, k, 1)
                }
                H(f, "load", g);
                H(f, "error", g)
            }
            ;
            G(f, "load", g);
            G(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var ie = a=>{
        let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=rcs_internal";
        Od(a, (c,d)=>{
            if (c || 0 === c)
                b += `&${d}=${encodeURIComponent("" + c)}`
        }
        );
        he(b)
    }
      , he = a=>{
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : fe(b, a, void 0, !1, !1)
    }
    ;
    function je(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    p = je.prototype;
    p.getWidth = function() {
        return this.right - this.left
    }
    ;
    p.getHeight = function() {
        return this.bottom - this.top
    }
    ;
    function ke(a) {
        return new je(a.top,a.right,a.bottom,a.left)
    }
    p.contains = function(a) {
        return this && a ? a instanceof je ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    }
    ;
    p.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    p.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    p.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    function $c(a) {
        return new ad(a[0],Yc)
    }
    ;function le(a, ...b) {
        if (0 === b.length)
            return Uc(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return Uc(c)
    }
    ;function O(a, b, c) {
        if ("string" === typeof b)
            (b = me(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d]
                  , f = me(c, d);
                f && (c.style[f] = e)
            }
    }
    var ne = {};
    function me(a, b) {
        var c = ne[b];
        if (!c) {
            var d = nd(b);
            c = d;
            void 0 === a.style[d] && (d = (Ra ? "Webkit" : Qa ? "Moz" : Oa ? "ms" : null) + od(d),
            void 0 !== a.style[d] && (c = d));
            ne[b] = c
        }
        return c
    }
    function oe(a, b) {
        var c = rd(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
    function pe(a, b) {
        return oe(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }
    function qe(a) {
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
    function re(a) {
        var b = rd(a)
          , c = new M(0,0);
        var d = b ? rd(b) : document;
        d = !Oa || 9 <= Number($a) || td(pd(d).g) ? d.documentElement : d.body;
        if (a == d)
            return c;
        a = qe(a);
        d = pd(b).g;
        b = d.scrollingElement ? d.scrollingElement : !Ra && td(d) ? d.documentElement : d.body || d.documentElement;
        d = d.parentWindow || d.defaultView;
        b = Oa && d.pageYOffset != b.scrollTop ? new M(b.scrollLeft,b.scrollTop) : new M(d.pageXOffset || b.scrollLeft,d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
    function se(a) {
        if (1 == a.nodeType)
            return a = qe(a),
            new M(a.left,a.top);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new M(a.clientX,a.clientY)
    }
    function te(a, b) {
        if (b instanceof jd) {
            var c = b.height;
            b = b.width
        } else
            throw Error("missing height argument");
        a.style.width = ue(b, !0);
        a.style.height = ue(c, !0)
    }
    function ue(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }
    function ve(a) {
        var b = we;
        if ("none" != pe(a, "display"))
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
    function we(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = Ra && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = qe(a),
        new jd(a.right - a.left,a.bottom - a.top)) : new jd(b,c)
    }
    function xe(a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null;
        if (c)
            if (/^\d+px?$/.test(c))
                a = parseInt(c, 10);
            else {
                b = a.style.left;
                var d = a.runtimeStyle.left;
                a.runtimeStyle.left = a.currentStyle.left;
                a.style.left = c;
                c = a.style.pixelLeft;
                a.style.left = b;
                a.runtimeStyle.left = d;
                a = +c
            }
        else
            a = 0;
        return a
    }
    function ye(a, b) {
        if (Oa) {
            var c = xe(a, b + "Left")
              , d = xe(a, b + "Right")
              , e = xe(a, b + "Top");
            a = xe(a, b + "Bottom");
            return new je(e,d,a,c)
        }
        c = oe(a, b + "Left");
        d = oe(a, b + "Right");
        e = oe(a, b + "Top");
        a = oe(a, b + "Bottom");
        return new je(parseFloat(e),parseFloat(d),parseFloat(a),parseFloat(c))
    }
    ;var ze = a=>"number" === typeof a && 0 < a;
    class Ae {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    }
    ;const Be = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Ce = class {
        constructor(a, b) {
            this.g = a;
            this.j = b
        }
    }
      , De = class {
        constructor(a, b) {
            this.url = a;
            this.Xb = !!b;
            this.depth = null
        }
    }
    ;
    let Ee = null;
    function Fe() {
        const a = u.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }
    function Ge(a=u) {
        return (a = a.performance) && a.now ? a.now() : null
    }
    function He(a, b=u) {
        return b.performance?.timing?.[a] || 0
    }
    function Ie(a=u) {
        const b = Math.min(He("domLoading", a) || Infinity, He("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(He("responseEnd", a), He("navigationStart", a)) : b
    }
    ;var Je = class {
        constructor(a, b) {
            var c = Ge() || Fe();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    }
    ;
    const Ke = u.performance
      , Le = !!(Ke && Ke.mark && Ke.measure && Ke.clearMarks)
      , Me = Gc(()=>{
        var a;
        if (a = Le) {
            var b;
            if (null === Ee) {
                Ee = "";
                try {
                    a = "";
                    try {
                        a = u.top.location.hash
                    } catch (c) {
                        a = u.location.hash
                    }
                    a && (Ee = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                } catch (c) {}
            }
            b = Ee;
            a = !!b.indexOf && 0 <= b.indexOf("1337")
        }
        return a
    }
    );
    function Ne(a) {
        a && Ke && Me() && (Ke.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),
        Ke.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    function Oe(a) {
        a.g = !1;
        a.j != a.l.google_js_reporting_queue && (Me() && Ea(a.j, Ne),
        a.j.length = 0)
    }
    class Pe {
        constructor(a) {
            this.j = [];
            this.l = a || u;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [],
            this.j = a.google_js_reporting_queue,
            b = a.google_measure_js_timing);
            this.g = Me() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g)
                return null;
            a = new Je(a,b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Ke && Me() && Ke.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (Ge() || Fe()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Ke && Me() && Ke.mark(b);
                !this.g || 2048 < this.j.length || this.j.push(a)
            }
        }
    }
    ;function Qe(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }
    function Re(a, b, c, d, e) {
        const f = [];
        Od(a, function(g, h) {
            (g = Se(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }
    function Se(a, b, c, d, e) {
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
                    f.push(Se(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a)
            return e = e || 0,
            2 > e ? encodeURIComponent(Re(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
    function Te(a) {
        let b = 1;
        for (const c in a.j)
            b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    }
    function Ue(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b
          , d = Te(a) - b.length;
        if (0 > d)
            return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f]
              , h = a.j[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let l = Re(h[k], a.l, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.l;
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
    class Ve {
        constructor() {
            this.l = "&";
            this.j = {};
            this.A = 0;
            this.g = []
        }
    }
    ;function We(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                let d;
                for (; a != d; )
                    d = a,
                    a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (d) {
                b = c
            }
        }
        return b
    }
    var Ye = class {
        constructor(a, b, c=null) {
            this.B = a;
            this.I = b;
            this.g = c;
            this.j = null;
            this.l = !1;
            this.C = this.Ua
        }
        Mb(a) {
            this.j = a
        }
        A(a) {
            this.l = a
        }
        xa(a, b, c) {
            let d, e;
            try {
                this.g && this.g.g ? (e = this.g.start(a.toString(), 3),
                d = b(),
                this.g.end(e)) : d = b()
            } catch (f) {
                b = this.I;
                try {
                    Ne(e),
                    b = this.C(a, new Ae(f,{
                        message: We(f)
                    }), void 0, c)
                } catch (g) {
                    this.Ua(217, g)
                }
                if (b)
                    window.console?.error?.(f);
                else
                    throw f;
            }
            return d
        }
        U(a, b) {
            return (...c)=>this.xa(a, ()=>b.apply(void 0, c))
        }
        Ua(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const L = new Ve;
                var g = L;
                g.g.push(1);
                g.j[1] = Qe("context", a);
                b.error && b.meta && b.id || (b = new Ae(b,{
                    message: We(b)
                }));
                if (b.msg) {
                    let Q = b.msg;
                    null == Q.substring && (Q = `b/320546888 ${typeof Q} ${Q}`);
                    g = L;
                    var h = Q.substring(0, 512);
                    g.g.push(2);
                    g.j[2] = Qe("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.j)
                    try {
                        this.j(b)
                    } catch (Q) {}
                if (d)
                    try {
                        d(b)
                    } catch (Q) {}
                d = L;
                k = [k];
                d.g.push(3);
                d.j[3] = k;
                d = u;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (Id(l)) {
                        var m = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else
                        m = b,
                        b = null;
                    k.push(new De(m || ""));
                    try {
                        d = l.parent
                    } catch (Q) {
                        d = null
                    }
                } while (d && l != d);
                for (let Q = 0, jb = k.length - 1; Q <= jb; ++Q)
                    k[Q].depth = jb - Q;
                l = u;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (m = 1; m < k.length; ++m) {
                        var n = k[m];
                        n.url || (n.url = l.location.ancestorOrigins[m - 1] || "",
                        n.Xb = !0)
                    }
                var q = k;
                let oa = new De(u.location.href,!1);
                l = null;
                const pa = q.length - 1;
                for (n = pa; 0 <= n; --n) {
                    var r = q[n];
                    !l && Be.test(r.url) && (l = r);
                    if (r.url && !r.Xb) {
                        oa = r;
                        break
                    }
                }
                r = null;
                const Nc = q.length && q[pa].url;
                0 != oa.depth && Nc && (r = q[pa]);
                f = new Ce(oa,r);
                if (f.j) {
                    q = L;
                    var t = f.j.url || "";
                    q.g.push(4);
                    q.j[4] = Qe("top", t)
                }
                var v = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var A = f.g.url.match(Cd)
                      , D = A[1]
                      , J = A[3]
                      , x = A[4];
                    t = "";
                    D && (t += D + ":");
                    J && (t += "//",
                    t += J,
                    x && (t += ":" + x));
                    var F = t
                } else
                    F = "";
                D = L;
                v = [v, {
                    url: F
                }];
                D.g.push(5);
                D.j[5] = v;
                Xe(this.B, e, L, this.l, c)
            } catch (L) {
                try {
                    Xe(this.B, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: We(L),
                        url: f && f.g.url
                    }, this.l, c)
                } catch (oa) {}
            }
            return this.I
        }
    }
    ;
    var Ze = a=>"string" === typeof a
      , $e = a=>void 0 === a
      , xc = a=>"function" === typeof a;
    var af = class extends E {
        constructor() {
            super()
        }
    }
    ;
    function bf(a, b) {
        try {
            const c = d=>[{
                [d.vd]: d.Xc
            }];
            return JSON.stringify([a.filter(d=>d.bc).map(c), b.toJSON(), a.filter(d=>!d.bc).map(c)])
        } catch (c) {
            return cf(c, b),
            ""
        }
    }
    function cf(a, b) {
        try {
            var c = We(a instanceof Error ? a : Error(String(a)));
            var d = Bb(Xb(b, 1)) ?? 0;
            ie({
                m: c,
                b: d || null,
                v: (qc(b, 2) ?? "") || null
            })
        } catch (e) {}
    }
    var df = class {
        constructor(a, b) {
            var c = new af;
            a = hc(c, 1, Ab(a), 0);
            b = hc(a, 2, Jb(b), "");
            a = b.aa;
            c = a[B];
            this.l = c & 2 ? b : Nb(b.constructor, Vb(a, c, !0))
        }
    }
    ;
    var ff = class extends E {
        constructor() {
            super()
        }
        getNoShowReasons() {
            var a = this.aa;
            a = 4 === jc(a, a[B], ef) ? 4 : -1;
            return sc(this, a)
        }
    }
      , ef = [3, 4];
    var gf = class extends E {
        constructor() {
            super()
        }
    }
      , hf = [1, 2, 3, 4, 5];
    var jf = class extends E {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return sc(this, 2)
        }
    }
    ;
    jf.Ha = [4];
    var kf = class extends E {
        constructor() {
            super()
        }
    }
    ;
    var lf = class extends E {
        constructor() {
            super()
        }
    }
    ;
    lf.Ha = [4, 5];
    var mf = class extends E {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return sc(this, 1)
        }
    }
    ;
    mf.Ha = [2];
    var nf = class extends E {
        constructor() {
            super()
        }
    }
      , of = [4, 6];
    class pf extends df {
        constructor() {
            super(...arguments)
        }
    }
    function qf(a, ...b) {
        rf(a, ...b.map(c=>({
            bc: !0,
            vd: 3,
            Xc: c.toJSON()
        })))
    }
    var sf = class extends pf {
    }
    ;
    var tf = (a,b)=>{
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
    function rf(a, ...b) {
        try {
            a.g.push(...b),
            100 <= a.g.length && uf(a),
            a.g.length && null === a.j && (a.j = setTimeout(()=>{
                uf(a)
            }
            , 1E3))
        } catch (c) {
            cf(c, a.l)
        }
    }
    function uf(a) {
        null !== a.j && (clearTimeout(a.j),
        a.j = null);
        if (a.g.length) {
            var b = bf(a.g, a.l);
            a.A("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var vf = class extends sf {
        constructor() {
            super(2, "m202402200101");
            this.A = tf;
            this.g = [];
            this.j = null
        }
    }
      , wf = class extends vf {
    }
    ;
    function xf(a, b, c) {
        return b[a] || c
    }
    ;function yf(a, b) {
        a.g = ()=>xf(3, b, ()=>[])(1)
    }
    class zf {
        g() {
            return []
        }
    }
    ;function Xe(a, b, c, d=!1, e) {
        if ((d ? a.g : Math.random()) < (e || .01))
            try {
                let f;
                c instanceof Ve ? f = c : (f = new Ve,
                Od(c, (h,k)=>{
                    var l = f;
                    const m = l.A++;
                    h = Qe(k, h);
                    l.g.push(m);
                    l.j[m] = h
                }
                ));
                const g = Ue(f, "/pagead/gen_204?id=" + b + "&");
                g && fe(u, g)
            } catch (f) {}
    }
    function Af(a, b) {
        0 <= b && 1 >= b && (a.g = b)
    }
    class Bf {
        constructor() {
            this.g = Math.random()
        }
    }
    ;let Cf, Df;
    const Ef = new Pe(window);
    (a=>{
        Cf = a ?? new Bf;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Af(Cf, window.google_srt);
        Df = new Ye(Cf,!0,Ef);
        Df.Mb(()=>{}
        );
        Df.A(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || Oe(Ef) : Ef.g && G(window, "load", ()=>{
            window.google_measure_js_timing || Oe(Ef)
        }
        )
    }
    )();
    function Ff(a, b) {
        return void 0 !== a.g[Gf(b)]
    }
    function Hf(a) {
        const b = [];
        for (const c in a.g)
            void 0 !== a.g[c] && a.g.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const If = class {
        constructor() {
            this.g = {};
            this.j = {}
        }
        set(a, b) {
            const c = Gf(a);
            this.g[c] = b;
            this.j[c] = a
        }
        get(a, b) {
            a = Gf(a);
            return void 0 !== this.g[a] ? this.g[a] : b
        }
        Fb() {
            return Hf(this).length
        }
        clear() {
            this.g = {};
            this.j = {}
        }
    }
    ;
    function Gf(a) {
        return a instanceof Object ? String(w(a)) : a + ""
    }
    ;var Jf = class {
        constructor(a) {
            this.I = null != a.g ? a.g : !0;
            this.B = null != a.D ? a.D : 0;
            this.A = null != a.B ? a.B : .9;
            this.j = null != a.j ? a.j : 1.05;
            this.minWidth = null != a.C ? a.C : 0;
            this.C = null != a.A ? a.A : 25;
            this.l = null != a.l ? a.l : 0;
            this.G = null != a.I ? a.I : !1;
            this.D = a.G || null;
            this.g = a.P || null
        }
    }
      , Kf = class {
        build() {
            return new Jf(this)
        }
    }
    ;
    function Lf(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }
    ;var Mf = 728 * 1.38;
    function Nf(a) {
        return a.innerHeight >= a.innerWidth
    }
    function Of(a) {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }
    function P(a) {
        return Of(a).clientWidth
    }
    function Pf(a, b) {
        const c = Of(a);
        return b ? c.scrollHeight === Of(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
    }
    function Qf(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }
    function Rf(a) {
        const b = P(a);
        a = a.innerWidth;
        return .05 > Math.abs((b && a ? b / a : 0) - 1)
    }
    function R(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }
    function Sf(a) {
        return void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }
    function Tf(a) {
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
    function Uf(a) {
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
        Ea(Object.keys(b), c=>{
            var d = a.style[nd(c)];
            ("undefined" !== typeof d ? d : a.style[me(a, c)]) || O(a, c, b[c])
        }
        );
        Yd(a)
    }
    ;function Vf(a, b) {
        var c = P(a);
        var d = Of(a).clientHeight;
        if ("number" !== typeof c || "number" !== typeof d)
            throw Error("No VP width and/or height.");
        c = new jd(c,d);
        d = Sf(a);
        a = R(a);
        a = Wf(a, c.width + d, c.height + a, d);
        return (Lf(b, a) ? new je(Math.max(b.top, a.top),Math.min(b.right, a.right),Math.min(b.bottom, a.bottom),Math.max(b.left, a.left)) : null) || Wf(0, 0, 0, 0)
    }
    function Xf(a, b) {
        const c = Sf(b)
          , d = R(b);
        if (a.getBoundingClientRect)
            return a = a.getBoundingClientRect(),
            Yf(a) ? Wf(a.top + d, a.right + c, a.bottom + d, a.left + c) : Wf(0, 0, 0, 0);
        b = b.document.createRange();
        b.selectNodeContents(a);
        return b.collapsed ? Wf(0, 0, 0, 0) : b.getBoundingClientRect ? (a = b.getBoundingClientRect(),
        Yf(a) ? Wf(a.top + d, a.right + c, a.bottom + d, a.left + c) : Wf(0, 0, 0, 0)) : Wf(0, 0, 0, 0)
    }
    function Yf(a) {
        return !!a && "number" === typeof a.top && !isNaN(a.top) && "number" === typeof a.right && !isNaN(a.right) && "number" === typeof a.bottom && !isNaN(a.bottom) && "number" === typeof a.left && !isNaN(a.left)
    }
    const Wf = (a,b,c,d)=>new je(Math.ceil(a),Math.floor(b),Math.floor(c),Math.ceil(d));
    function Zf(a, b) {
        $f(a).forEach(b, void 0)
    }
    function $f(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d]);
        return b
    }
    ;const ag = class {
        constructor(a) {
            this.g = new If;
            if (a)
                for (var b = 0; b < a.length; ++b)
                    this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return Ff(this.g, a)
        }
    }
    ;
    class bg {
        constructor(a, b) {
            this.g = a[u.Symbol.iterator]();
            this.j = b
        }
        [Symbol.iterator]() {
            return this
        }
        next() {
            const a = this.g.next();
            return {
                value: a.done ? void 0 : this.j.call(void 0, a.value),
                done: a.done
            }
        }
    }
    function cg(a, b) {
        return new bg(a,b)
    }
    ;function dg() {}
    dg.prototype.next = function() {
        return eg
    }
    ;
    var eg = {
        done: !0,
        value: void 0
    };
    dg.prototype.Ba = function() {
        return this
    }
    ;
    function fg(a) {
        if (a instanceof dg)
            return a;
        if ("function" == typeof a.Ba)
            return a.Ba(!1);
        if (ca(a)) {
            let b = 0;
            const c = new dg;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        return eg;
                    if (b in a)
                        return {
                            value: a[b++],
                            done: !1
                        };
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
    function gg(a) {
        a = fg(a);
        const {done: b, value: c} = a.next();
        return b ? null : c
    }
    ;function hg(a) {
        if (a instanceof ig || a instanceof jg || a instanceof kg)
            return a;
        if ("function" == typeof a.next)
            return new ig(()=>a);
        if ("function" == typeof a[Symbol.iterator])
            return new ig(()=>a[Symbol.iterator]());
        if ("function" == typeof a.Ba)
            return new ig(()=>a.Ba());
        throw Error("Not an iterator or iterable.");
    }
    class ig {
        constructor(a) {
            this.g = a
        }
        Ba() {
            return new jg(this.g())
        }
        [Symbol.iterator]() {
            return new kg(this.g())
        }
        j() {
            return new kg(this.g())
        }
    }
    class jg extends dg {
        constructor(a) {
            super();
            this.g = a
        }
        next() {
            return this.g.next()
        }
        [Symbol.iterator]() {
            return new kg(this.g)
        }
        j() {
            return new kg(this.g)
        }
    }
    class kg extends ig {
        constructor(a) {
            super(()=>a);
            this.l = a
        }
        next() {
            return this.l.next()
        }
    }
    ;function lg(a, b) {
        this.j = {};
        this.g = [];
        this.l = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof lg)
                for (c = mg(a),
                d = 0; d < c.length; d++)
                    this.set(c[d], a.get(c[d]));
            else
                for (d in a)
                    this.set(d, a[d])
    }
    p = lg.prototype;
    p.Fb = function() {
        return this.size
    }
    ;
    function mg(a) {
        ng(a);
        return a.g.concat()
    }
    p.has = function(a) {
        return og(this.j, a)
    }
    ;
    p.isEmpty = function() {
        return 0 == this.size
    }
    ;
    p.clear = function() {
        this.j = {};
        this.l = this.size = this.g.length = 0
    }
    ;
    p.delete = function(a) {
        return og(this.j, a) ? (delete this.j[a],
        --this.size,
        this.l++,
        this.g.length > 2 * this.size && ng(this),
        !0) : !1
    }
    ;
    function ng(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length; ) {
                var d = a.g[b];
                og(a.j, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length; )
                d = a.g[b],
                og(e, d) || (a.g[c++] = d,
                e[d] = 1),
                b++;
            a.g.length = c
        }
    }
    p.get = function(a, b) {
        return og(this.j, a) ? this.j[a] : b
    }
    ;
    p.set = function(a, b) {
        og(this.j, a) || (this.size += 1,
        this.g.push(a),
        this.l++);
        this.j[a] = b
    }
    ;
    p.forEach = function(a, b) {
        for (var c = mg(this), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    p.keys = function() {
        return hg(this.Ba(!0)).j()
    }
    ;
    p.values = function() {
        return hg(this.Ba(!1)).j()
    }
    ;
    p.entries = function() {
        const a = this;
        return cg(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    }
    ;
    p.Ba = function(a) {
        ng(this);
        var b = 0
          , c = this.l
          , d = this
          , e = new dg;
        e.next = function() {
            if (c != d.l)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length)
                return eg;
            var f = d.g[b++];
            return {
                value: a ? f : d.j[f],
                done: !1
            }
        }
        ;
        return e
    }
    ;
    function og(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;function pg(a) {
        return "transparent" == a || "rgba" == a.substring(0, 4) && (a = a.split(","),
        4 == a.length && .5 > parseFloat(a[3])) ? !0 : !1
    }
    function qg() {
        Ea(rg, a=>{
            a.P = null;
            a.C = null
        }
        )
    }
    function sg(a) {
        if (!a.F.ownerDocument)
            throw Error("Wrapped node should have an owner document.");
        return a.F.ownerDocument
    }
    function tg(a) {
        a = sg(a);
        return a.defaultView || a.parentWindow
    }
    function ug(a) {
        const b = a.l.g(a.l.j);
        return b == a || b != a && xd(b.F, a.F)
    }
    function vg(a) {
        return $f(a.F.childNodes).map(b=>a.l.g(b)).filter(Fc(b=>null === b))
    }
    function wg(a) {
        if (!a.g())
            return null;
        const b = vg(a.g());
        a = Da(b, a);
        if (-1 == a)
            return null;
        for (a += 1; a < b.length; ++a)
            if (b[a].A() || b[a].L())
                return b[a];
        return null
    }
    function xg(a) {
        const b = wg(a);
        return b ? b : a.g() ? xg(a.g()) : null
    }
    function yg(a, b) {
        b.push(a);
        a = vg(a);
        for (let c = 0; c < a.length; ++c)
            yg(a[c], b)
    }
    function zg(a) {
        var b = a.j();
        if (0 != b.top || 0 != b.right || 0 != b.bottom || 0 != b.left) {
            var c = Sf(tg(a));
            a = R(tg(a));
            c = -c;
            a = -a;
            c instanceof M ? (b.left += c.x,
            b.right += c.x,
            b.top += c.y,
            b.bottom += c.y) : (b.left += c,
            b.right += c,
            "number" === typeof a && (b.top += a,
            b.bottom += a))
        }
        return b
    }
    function S(a, b) {
        if (1 != a.F.nodeType)
            return null;
        a.B = a.B || tg(a).getComputedStyle(a.F);
        return a.B ? a.B[b] || a.B.getPropertyValue(b) || "" : ""
    }
    function Ag(a, b, c) {
        if (void 0 !== a.D[b])
            return a.D[b];
        a.D[b] = Bg(a, b, c);
        return a.D[b]
    }
    function Cg(a) {
        if (void 0 !== a.K)
            return a.K;
        var b = S(a, "position");
        if ("fixed" == b || "sticky" == b)
            b = a;
        else {
            var c = a.g();
            b = c && "BODY" != a.F.tagName ? (c = Cg(c)) || "absolute" != b && "relative" != b ? c : a : null
        }
        a.K = b;
        return a.K
    }
    function Dg(a, b) {
        const c = Cg(a);
        if (c && "relative" != S(c, "position"))
            if (null != b)
                a: {
                    do {
                        const d = a.j();
                        if ((d.right - d.left) * (d.bottom - d.top) > b) {
                            b = !1;
                            break a
                        }
                        if (a == c)
                            break;
                        a = a.g()
                    } while (null !== a);
                    b = !0
                }
            else
                b = !0;
        else
            b = !1;
        return b
    }
    function Bg(a, b, c) {
        const d = S(a, "position");
        a: switch (b) {
        case 0:
            var e = "hidden" == S(a, "overflow") || "scroll" == S(a, "overflow") || "hidden" == S(a, "overflow-x") || "scroll" == S(a, "overflow-x");
            break a;
        case 1:
            e = "hidden" == S(a, "overflow") || "scroll" == S(a, "overflow") || "hidden" == S(a, "overflow-y") || "scroll" == S(a, "overflow-y");
            break a;
        default:
            throw Error("Unknown pageAxis: " + b);
        }
        switch (d) {
        case "fixed":
            if (e)
                return a;
            break;
        case "static":
        case "":
        case null:
            if (e && !c)
                return a;
            if (a.g())
                return Ag(a.g(), b, c);
            break;
        case "absolute":
        case "relative":
            if (e)
                return a;
            if (a.g())
                return Ag(a.g(), b, "absolute" == d);
            break;
        default:
            u.console.error("Unknown position value: " + d)
        }
        return null
    }
    function Eg(a) {
        var b = a.F.scrollHeight;
        const c = a.F.clientHeight
          , d = sg(a).createElement("div");
        d.style.width = "100%";
        d.style.height = Math.max(b, c) + 100 + "px";
        d.style.clear = "both";
        a.F.appendChild(d);
        b = a.F.scrollHeight > a.F.clientHeight && a.F.scrollHeight - b > a.F.clientHeight - c;
        a.F.removeChild(d);
        return b
    }
    function Fg(a) {
        return null !== a.G ? a.G : "1" != S(a, "opacity") || a.g() && !Fg(a.g()) ? a.G = !1 : a.G = !0
    }
    function Gg(a) {
        a = a.j();
        a = new je(Math.max(a.top, 0),Math.max(a.right, 0),Math.max(a.bottom, 0),Math.max(a.left, 0));
        return a.left < a.right && a.top < a.bottom
    }
    function Hg(a) {
        return null !== a.I ? a.I : a.g() && Hg(a.g()) || "0" == S(a, "opacity") || "none" == S(a, "display") || "hidden" == S(a, "visibility") || a.F.tagName && "input" == a.F.tagName.toLowerCase() && a.F.type && "hidden" == a.F.type ? a.I = !0 : a.I = !1
    }
    function Ig(a, b) {
        return b(a) ? !0 : a.g() ? Ig(a.g(), b) : !1
    }
    function Jg(a) {
        return !Ig(a, b=>"hidden" == S(b, "overflow-y"))
    }
    function Kg(a) {
        a = S(a, "position");
        return "absolute" == a || "relative" == a
    }
    function Lg(a) {
        return a.A() && (a = parseInt(S(a, "z-index"), 10),
        !isNaN(a)) ? a : 0
    }
    function Mg(a, b) {
        return Ig(a, c=>!!c.F.tagName && c.F.tagName == b)
    }
    function Ng(a, b) {
        return Ig(a, c=>{
            c = c.F;
            return !!c.id && !!c.id.match && !!c.id.match(b)
        }
        )
    }
    function Og(a, b) {
        return Ig(a, c=>{
            a: {
                c = Pg(c);
                for (let d = 0; d < c.length; ++d)
                    if (c[d].match(b)) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            return c
        }
        )
    }
    function Pg(a) {
        return (a = a.F.className) && "function" === typeof a.split ? /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1].split(/\s+/) : []
    }
    function Qg(a) {
        return "A" == a.F.tagName ? a.F.getAttribute("href") : (a = a.g()) ? Qg(a) : null
    }
    function Rg(a) {
        if (1 != a.F.nodeType) {
            var b = a.g();
            return b ? Rg(b) : 0
        }
        const c = sg(a).createTextNode("A");
        a.F.appendChild(c);
        b = a.l.g(c);
        if (!b)
            throw a.F.removeChild(c),
            Error("Unable to insert textnode");
        a = b.j();
        b.F.parentNode && b.F.parentNode.removeChild(b.F);
        return a.bottom - a.top
    }
    function Sg(a, b) {
        if (b || null == a.J) {
            if (b && !b(a))
                return 0;
            let c = 0;
            if (a.L())
                c = a.F.textContent.trim().length;
            else {
                const d = vg(a);
                for (let e = 0; e < d.length; e++)
                    c += Sg(d[e], b)
            }
            b || (a.J = c);
            return c
        }
        return a.J
    }
    class Tg {
        constructor(a, b) {
            this.F = a;
            this.l = b;
            this.I = this.G = this.ta = this.W = null;
            this.D = {};
            this.B = this.C = this.J = null;
            new lg
        }
        g() {
            return this.F != this.l.j && this.F.parentNode ? this.l.g(this.F.parentNode) : null
        }
        A() {
            return 1 == this.F.nodeType
        }
        L() {
            return 3 == this.F.nodeType
        }
        j() {
            if (!this.P) {
                this.C || (this.C = Xf(this.F, tg(this)));
                var a = ke(this.C);
                var b = S(this, "position");
                if ("fixed" == b)
                    b = Vf(tg(this), a);
                else if (this.g()) {
                    var c = Ag(this.g(), 0, "absolute" == b);
                    if (c) {
                        var d = c.j();
                        c = d.left;
                        d = d.right;
                        a = a.left >= d || a.right <= c ? null : Wf(a.top, Math.min(a.right, d), a.bottom, Math.max(a.left, c))
                    }
                    a && (b = Ag(this.g(), 1, "absolute" == b)) && (c = b.j(),
                    b = a,
                    a = c.top,
                    c = c.bottom,
                    a = b.top >= c || b.bottom <= a ? null : Wf(Math.max(b.top, a), b.right, Math.min(b.bottom, c), b.left));
                    b = a && Cg(this) && "fixed" == S(Cg(this), "position") ? Vf(tg(this), a) : a || new je(0,0,0,0)
                } else
                    b = a;
                this.P = b
            }
            return ke(this.P)
        }
        Na() {
            return !Gg(this) || Hg(this)
        }
        Ib() {
            var a = S(this, "background-color");
            if (a = a ? pg(a) : !0)
                a = S(this, "background-image"),
                a = !(a && "none" != a);
            return a
        }
        toString() {
            switch (this.F.nodeType) {
            case 1:
                const a = this.F;
                let b = a.tagName;
                a.id && (b += "#" + a.id);
                a.className && "function" === typeof a.className.split && (b += "." + a.className.split(/\s+/).join("."));
                return b;
            case 3:
                return "TEXT#" + this.F.textContent.substr(0, 10);
            default:
                return "HtmlNode"
            }
        }
    }
    function Ug(a, b) {
        const c = w(b);
        var d = a.A.get(c);
        if ("boolean" === typeof d)
            return d;
        d = a.B && 3 == b.nodeType ? !/\S/.test(b.data) : 1 != b.nodeType && 3 != b.nodeType && 9 != b.nodeType || b.tagName && ("SCRIPT" == b.tagName || "STYLE" == b.tagName) ? !0 : !1;
        !d && b.parentNode && b != a.j && (d = Ug(a, b.parentNode));
        a.A.set(c, d);
        return d
    }
    var Vg = class {
        constructor(a, b) {
            this.j = a;
            this.B = b;
            this.A = new If;
            this.l = new If
        }
        g(a) {
            const b = w(a)
              , c = this.l.get(b);
            if (c)
                return c;
            if (Ug(this, a))
                return null;
            a = new Tg(a,this);
            this.l.set(b, a);
            return a
        }
    }
      , rg = [];
    class Wg {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        g(a) {
            return Xg(this.l, a).contains(this.j)
        }
    }
    ;function Xg(a, b) {
        const c = w(b)
          , d = a.j.get(c);
        if (d)
            return d;
        b = a.g(b);
        a.j.set(c, b);
        return b
    }
    class Yg {
        constructor() {
            this.j = new If
        }
    }
    ;function Zg(a, b) {
        let c = Qg(b);
        if (a.l.g(b) && null !== c)
            return c;
        b = vg(b);
        if (1 > b.length)
            return null;
        c = Zg(a, b[0]);
        for (let d = 1; d < b.length; ++d)
            if (Zg(a, b[d]) != c)
                return null;
        return c
    }
    class $g extends Yg {
        constructor(a) {
            super();
            this.l = a
        }
        g(a) {
            return new ag(null !== Zg(this, a) ? [1] : [])
        }
    }
    ;class ah extends Yg {
        constructor(a) {
            super();
            this.l = a
        }
        g(a) {
            a: if (3 == a.F.nodeType)
                var b = this.l.g(a);
            else {
                b = !1;
                a = vg(a);
                for (let c of a) {
                    if ((a = S(c, "display")) && "inline" != a) {
                        b = !1;
                        break a
                    }
                    Xg(this, c).contains(0) && (b = !0)
                }
            }
            return new ag(b ? [0] : [])
        }
    }
    ;function bh(a, b) {
        return Sg(b, c=>!a.l.g(c))
    }
    class ch extends Yg {
        constructor(a, b, c) {
            super();
            this.A = a;
            this.l = b;
            this.B = c
        }
        g(a) {
            if (this.A.g(a) && !this.l.g(a) && !this.B.g(a) && 50 <= bh(this, a)) {
                var b = Rg(a);
                a = a.j();
                b = a.bottom - a.top >= 2 * b || !1
            } else
                b = !1;
            return new ag(b ? [3] : [])
        }
    }
    ;function dh(a) {
        return a.classList ? a.classList.contains("adsbygoogle") : Ia(a.classList ? a.classList : ("string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle")
    }
    ;function eh(a, b) {
        return a.l.g(b) ? Ig(b, function(c) {
            switch (c.F.tagName) {
            case "H1":
            case "H2":
            case "H3":
            case "H4":
            case "H5":
            case "H6":
                return !0
            }
            return !1
        }) || fh(b) && 5 <= Sg(b) ? !0 : (b = b.g()) ? Xg(a, b).contains(2) : !1 : !1
    }
    function fh(a) {
        a = Pg(a);
        for (let b of a)
            if (b.match(/title|titulo|hdg|heading|header|^h[1-6]$/) && !b.match(/subtitle/))
                return !0;
        return !1
    }
    class gh extends Yg {
        constructor(a) {
            super();
            this.l = a
        }
        g(a) {
            return new ag(eh(this, a) ? [2] : [])
        }
    }
    ;function hh(a) {
        const b = [];
        Ea(a, c=>{
            1 == c.F.nodeType && (ih(c, ":before", b),
            ih(c, ":after", b))
        }
        );
        return b
    }
    function jh(a) {
        a = S(a, "content");
        if (!a || "none" == a || /\(.*\)/.test(a))
            return !1;
        /^['"].*['"]$/.test(a) && (a = a.substring(1, a.length - 1));
        return 0 < a.trim().length
    }
    class kh extends Tg {
        constructor(a, b) {
            super(a.F, a.l);
            this.T = a;
            this.V = b;
            this.B = tg(a).getComputedStyle(a.F, this.V)
        }
        A() {
            return !1
        }
        L() {
            return !1
        }
        Na() {
            if (!jh(this) && this.Ib())
                var a = !0;
            else if (!(a = this.g().Na() || Hg(this) || !Gg(this))) {
                a = jh(this);
                const c = S(this, "width");
                var b = S(this, "height");
                b = a && "auto" == b || 0 < parseFloat(b);
                a = !((a && "auto" == c || 0 < parseFloat(c)) && b)
            }
            return a
        }
        g() {
            return this.T
        }
        Ib() {
            const a = pe(this.g().F, "backgroundColor")
              , b = S(this, "background-color");
            return null == b || b == a || pg(b) || "fixed" != S(this, "position")
        }
        j() {
            switch (S(this, "position")) {
            case "absolute":
                var a = this.g().j();
                const b = a.top + parseInt(S(this, "top"), 10);
                a = a.left + parseInt(S(this, "left"), 10);
                let c = parseInt(S(this, "width"), 10)
                  , d = parseInt(S(this, "height"), 10);
                return new je(b,a + c,b + d,a);
            case "fixed":
                return new je(0,parseInt(S(this, "width"), 10),parseInt(S(this, "height"), 10),0);
            default:
                return this.g().j()
            }
        }
    }
    const ih = (a,b,c)=>{
        if (":before" == b || ":after" == b) {
            var d = new kh(a,b);
            if (!d.Na())
                switch (c.push(d),
                b) {
                case ":before":
                    a.W = d;
                    break;
                case ":after":
                    a.ta = d;
                    break;
                default:
                    throw Error("Unsupported pseudo type " + b);
                }
        }
    }
    ;
    const lh = new ag("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
    class mh extends Yg {
        g(a) {
            var b = a.F
              , c = sg(a);
            if (3 == b.nodeType) {
                var d = b.data;
                c = -1 != d.indexOf("&") ? kd(d, c) : d;
                c = /\S/.test(c)
            } else
                c = !1;
            (c = c || (a instanceof kh ? jh(a) : !1)) || (c = (b = b.tagName) && lh.contains(b.toUpperCase()));
            a = c && !a.Na();
            return new ag(a ? [6] : [])
        }
    }
    ;function nh(a) {
        a.B || (a.B = new mh);
        return a.B
    }
    function oh(a) {
        a.j || (a.j = new ah(new Wg(nh(a),6)));
        return a.j
    }
    function ph(a) {
        a.l || (a.l = new gh(new Wg(oh(a),0)));
        return a.l
    }
    class qh {
        constructor() {
            this.A = this.l = this.g = this.j = this.B = null
        }
    }
    ;const rh = class {
        constructor() {
            this.g = new qh
        }
    }
    ;
    function sh(a) {
        const b = [];
        for (const c of a.g)
            b.push(c);
        return b
    }
    class th {
        constructor() {
            this.g = [];
            this.l = new ag
        }
        contains(a) {
            return this.l.contains(w(a))
        }
    }
    ;class uh {
        constructor(a, b, c) {
            this.g = a;
            this.j = b;
            this.l = c
        }
        fa() {
            return this.l
        }
    }
    const wh = (a,b,c)=>{
        b = vh(a.W, b, c);
        const d = new uh(a,0,b++);
        c.ra.push(d);
        for (var e of vg(a))
            b = wh(e, b, c);
        e = new uh(a,1,b++);
        c.ra.push(e);
        c.map.set(w(a), {
            start: d,
            end: e
        });
        return b = vh(a.ta, b, c)
    }
      , vh = (a,b,c)=>{
        if (!a)
            return b;
        const d = new uh(a,0,b++)
          , e = new uh(a,1,b++);
        c.ra.push(d);
        c.ra.push(e);
        c.map.set(w(a), {
            start: d,
            end: e
        });
        return b
    }
    ;
    function xh(a) {
        if (a instanceof kh)
            return !0;
        if (!a.A())
            return !1;
        const b = a.F
          , c = S(a, "position");
        if ("HTML" == b.tagName || "fixed" == c || "auto" != S(a, "z-index") && ("absolute" == c || "relative" == c))
            return !0;
        a = S(a, "opacity");
        return "1" != a && "" != a ? !0 : !1
    }
    function yh(a) {
        const b = a.g.g();
        return b ? zh(a.j, b) : null
    }
    class Ah {
        constructor(a, b) {
            this.g = a;
            this.j = b
        }
    }
    function Bh(a, b, c) {
        var d = zh(a.g, b);
        a = zh(a.g, c);
        d = Ch(d, a);
        if (!d)
            return 0;
        switch (d.Ab) {
        case 0:
            return Lg(b) - Lg(d.xb.g);
        case 1:
            return Lg(d.wb.g) - Lg(c);
        case 2:
            return Lg(d.wb.g) - Lg(d.xb.g);
        default:
            throw Error("Unhandled adjacency.");
        }
    }
    var Eh = class {
        constructor() {
            this.g = new Dh
        }
    }
    ;
    function zh(a, b) {
        const c = w(b);
        var d = a.g.get(c);
        if (d)
            return d;
        d = b.g();
        b = !d || xh(b) ? new Ah(b,a) : zh(a, d);
        a.g.set(c, b);
        return b
    }
    var Dh = class {
        constructor() {
            this.g = new If
        }
    }
    ;
    function Ch(a, b) {
        if (a == b)
            return null;
        const c = new If;
        var d = b;
        let e;
        for (; e = yh(d); ) {
            if (a == e)
                return {
                    wb: a,
                    Ab: 0,
                    xb: d
                };
            c.set(w(e), d);
            d = e
        }
        for (; e = yh(a); ) {
            if (e == b)
                return {
                    wb: a,
                    Ab: 1,
                    xb: b
                };
            if (d = c.get(w(e)))
                return {
                    wb: a,
                    Ab: 2,
                    xb: d
                };
            a = e
        }
        throw Error("Contexts not in same DOM.");
    }
    ;function Fh(a, b, c, d=[]) {
        a = [].concat(a, d);
        b = new Gh(b,c);
        for (let e of a)
            e.Ib() || e.Na() || (c = b,
            a = e,
            c.g.push(a),
            c.l.add(w(a)));
        return b
    }
    class Gh extends th {
        constructor(a, b) {
            super();
            this.j = a;
            this.B = b
        }
        A(a, b=!1) {
            const c = a.j();
            b = b ? sh(this) : this.g.slice(0);
            for (let f = 0; f < b.length; ++f) {
                var d = b[f];
                if (!ug(d))
                    continue;
                var e = d.j();
                if (!Lf(e, c))
                    continue;
                const g = Bh(this.B, d, a);
                !(e = 0 < g) && (e = 0 == g && !(d != a && xd(d.F, a.F))) && (e = a,
                Kg(d) && !Kg(e) ? e = !0 : !Kg(d) && Kg(e) ? e = !1 : (e = this.j.map.get(w(e)),
                d = this.j.map.get(w(d)),
                e = e && d && e.end.fa() < d.start.fa() ? !0 : !1));
                if (e)
                    return !0
            }
            return !1
        }
    }
    ;class Hh {
        constructor(a, b) {
            this.Wc = a;
            this.dd = b
        }
    }
    ;function Ih(a, b) {
        let c = 0
          , d = null;
        const e = a.g.slice(0);
        for (let f = 0; f < e.length; ++f) {
            const g = a.j.map.get(w(e[f]));
            g.end.fa() < b && g.end.fa() > c && (d = g,
            c = g.end.fa())
        }
        return d
    }
    class Jh extends th {
        constructor(a) {
            super();
            this.j = a
        }
    }
    ;const Kh = class extends Jh {
        constructor(a, b) {
            super(a);
            this.B = b
        }
        A(a, b=!1) {
            const c = a.j()
              , d = Dg(a);
            b = b ? sh(this) : this.g.slice(0);
            for (let e = 0; e < b.length; ++e) {
                const f = b[e];
                if (ug(f) && (d || !(0 < Bh(this.B, a, f))) && Lf(b[e].j(), c))
                    return !0
            }
            return !1
        }
    }
    ;
    const Lh = class {
        constructor(a, b, c) {
            this.j = a;
            this.l = b;
            this.g = c
        }
    }
    ;
    const Mh = class {
        constructor(a, b, c, d, e, f, g, h) {
            this.j = a;
            this.B = b;
            this.O = c;
            this.N = d;
            this.A = e;
            this.l = f;
            this.g = g;
            this.I = h
        }
    }
    ;
    const Nh = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.A = b;
            this.l = c;
            this.g = d
        }
    }
    ;
    class Oh {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            if (!a)
                return [9];
            a = a.j();
            a = a.right - a.left;
            return this.j <= a && a <= this.l ? [] : [4]
        }
    }
    ;const Ph = class {
        constructor(a, b) {
            this.g = a;
            this.j = b || null
        }
    }
    ;
    function Qh(a) {
        if (0 != a.l)
            throw Error("Already resolved/rejected.");
    }
    var Th = class {
        constructor() {
            this.g = new Rh(this);
            this.l = 0
        }
        resolve(a) {
            Qh(this);
            this.l = 1;
            this.B = a;
            Sh(this.g)
        }
        j(a) {
            Qh(this);
            this.l = 2;
            this.A = a;
            Sh(this.g)
        }
    }
    ;
    function Sh(a) {
        switch (a.g.l) {
        case 0:
            break;
        case 1:
            a.j && a.j(a.g.B);
            break;
        case 2:
            a.l && a.l(a.g.A);
            break;
        default:
            throw Error("Unhandled deferred state.");
        }
    }
    var Rh = class {
        constructor(a) {
            this.g = a
        }
        then(a, b) {
            if (this.j)
                throw Error("Then functions already set.");
            this.j = a;
            this.l = b;
            Sh(this)
        }
    }
    ;
    function Uh(a, b, c) {
        var d = new Th;
        a.g(new Ph(function() {
            d.resolve(b())
        }
        ,c));
        return d.g
    }
    function Vh(a, b, c, d) {
        a.g(new Ph(function() {
            b.resolve(c)
        }
        ,d))
    }
    function Wh(a, b) {
        a.g(new Ph(function() {
            b.j("n")
        }
        ,"rrej"))
    }
    var Xh = class {
    }
    ;
    class Yh {
        constructor(a) {
            this.g = a
        }
    }
    ;function Zh(a, b) {
        var c = new Th;
        a.g.g(new Ph(function() {
            $h(a, b, c)
        }
        ,"idom"));
        return c.g
    }
    function ai(a) {
        return Uh(a.g, function() {
            return new rh
        }, "icla")
    }
    function bi(a, b, c) {
        var d = new Th;
        ci(a, b, new Yh(c.g)).then(function(e) {
            di(a, b).then(function(f) {
                ei(a, b, e).then(function(g) {
                    d.resolve(new Lh(f,g,e))
                })
            })
        });
        return d.g
    }
    function fi(a, b, c) {
        var d = new Th;
        Zh(a, b).then(function(e) {
            ai(a).then(function(f) {
                bi(a, e, f).then(function(g) {
                    Vh(a.g, d, new Nh(e,g,f,c))
                }, y(d.j, d))
            }, y(d.j, d))
        }, y(d.j, d));
        return d.g
    }
    function $h(a, b, c) {
        var d = b.document.body;
        if (d) {
            var e = b.document.body.getBoundingClientRect().width;
            if (null == e)
                c.j("bw");
            else {
                var f = P(b)
                  , g = Of(b).clientHeight;
                if (null == f || null == g)
                    c.j("vp");
                else {
                    var h = (new Vg(d,!0)).g(d);
                    if (h) {
                        var k = new Eh;
                        gi(a, h).then(function(l) {
                            rg = l;
                            hi(a, h).then(function(m) {
                                c.resolve(new Mh(b,e,f,g,h,l,m,k))
                            })
                        })
                    } else
                        c.j("nt")
                }
            }
        } else
            c.j("b")
    }
    function gi(a, b) {
        return Uh(a.g, function() {
            const c = [];
            yg(b, c);
            return c
        }, "iflt")
    }
    function hi(a, b) {
        return Uh(a.g, function() {
            const c = {
                map: new If,
                ra: []
            };
            wh(b, 0, c);
            return c
        }, "intm")
    }
    function ci(a, b, c) {
        return Uh(a.g, function() {
            var d = b.l;
            const e = new Kh(b.g,b.I)
              , f = new Wg(nh(c.g),6);
            for (let h of d)
                if (f.g(h)) {
                    d = e;
                    var g = h;
                    d.g.push(g);
                    d.l.add(w(g))
                }
            return e
        }, "ivis")
    }
    function di(a, b) {
        return Uh(a.g, function() {
            var c = hh(b.l);
            return Fh(b.l, b.g, b.I, c)
        }, "ibck")
    }
    function ei(a, b, c) {
        return Uh(a.g, function() {
            var d = b.g;
            const e = new If;
            var f = 0;
            for (var g = 0; g < d.ra.length; ++g) {
                var h = d.ra[g], k = h.g, l;
                if (l = 1 == h.j)
                    l = S(k, "float"),
                    l = "left" == l || "right" == l;
                l && (k = k.j().bottom,
                k > f && (f = k));
                e.set(w(h), f)
            }
            f = new If;
            g = Number.MAX_VALUE;
            for (h = d.ra.length - 1; 0 <= h; --h)
                k = d.ra[h],
                l = k.g,
                0 == k.j && c.contains(l) && (l = l.j().top,
                l < g && (g = l)),
                f.set(w(k), g);
            d = new If;
            g = Hf(e);
            for (h = 0; h < g.length; ++h) {
                k = e.get(g[h]);
                l = f.get(g[h]);
                if ("number" !== typeof l)
                    throw Error("No entry in minSubsequentTopBounds for terminal UID!");
                d.set(g[h], new Hh(k,l))
            }
            return d
        }, "irel")
    }
    var ii = class {
        constructor(a) {
            this.g = a
        }
    }
    ;
    function ji(a) {
        var b = [];
        Zf(a.getElementsByTagName("p"), function(c) {
            100 <= ki(c) && b.push(c)
        });
        return b
    }
    function ki(a) {
        if (3 == a.nodeType)
            return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName)
            return 0;
        var b = 0;
        Zf(a.childNodes, function(c) {
            b += ki(c)
        });
        return b
    }
    function li(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }
    function mi(a, b) {
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
    const ni = class {
        constructor(a, b, c, d) {
            this.A = a;
            this.j = b;
            this.l = c;
            this.g = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.A)
            } catch (f) {}
            if (!b.length)
                return [];
            a = Ja(b);
            a = mi(this, a);
            "number" === typeof this.j && (b = this.j,
            0 > b && (b += a.length),
            a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.l) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = ji(a[c])
                      , e = this.l;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.A,
                occurrenceIndex: this.j,
                paragraphIndex: this.l,
                ignoreMode: this.g
            })
        }
    }
    ;
    function oi(a) {
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
    ;class pi {
        constructor(a=1) {
            this.g = a
        }
        next() {
            var a = 48271 * this.g % 2147483647;
            this.g = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.g / 2147483647
        }
    }
    ;function qi(a, b, c) {
        const d = [];
        for (const e of a.g)
            b(e) ? d.push(e) : c(e);
        return new ri(d)
    }
    function si(a, b) {
        return new ri(a.g.slice(0).sort(b))
    }
    function ti(a, b=1) {
        a = a.g.slice(0);
        const c = new pi(b);
        La(a, ()=>c.next());
        return new ri(a)
    }
    const ri = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b,c)=>void a(b, c, this))
        }
        filter(a) {
            return new ri(Fa(this.g, a))
        }
        apply(a) {
            return new ri(a(this.g.slice(0)))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = this.g.slice(0);
            b.push(a);
            return new ri(b)
        }
    }
    ;
    var ui = class extends E {
        getId() {
            return qc(this, 3)
        }
    }
    ;
    ui.Ha = [4];
    class vi {
        constructor(a, {Dc: b, Nd: c, Yd: d, ld: e}) {
            this.B = a;
            this.j = c;
            this.A = new ri(b || []);
            this.g = e;
            this.l = d
        }
    }
    ;var wi = a=>{
        var b = a.split("~").filter(c=>0 < c.length);
        a = new If;
        for (const c of b)
            b = c.indexOf("."),
            -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
        return a
    }
      , yi = a=>{
        var b = xi(a);
        a = [];
        for (let c of b)
            b = String(c.ab),
            a.push(c.Qa + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
        return a.join("~")
    }
    ;
    const xi = a=>{
        const b = []
          , c = a.A;
        c && c.g.length && b.push({
            Qa: "a",
            ab: zi(c)
        });
        null != a.j && b.push({
            Qa: "as",
            ab: a.j
        });
        null != a.l && b.push({
            Qa: "i",
            ab: String(a.l)
        });
        null != a.g && b.push({
            Qa: "rp",
            ab: String(a.g)
        });
        b.sort(function(d, e) {
            return d.Qa.localeCompare(e.Qa)
        });
        b.unshift({
            Qa: "t",
            ab: Ai(a.B)
        });
        return b
    }
      , Ai = a=>{
        switch (a) {
        case 0:
            return "aa";
        case 1:
            return "ma";
        default:
            throw Error("Invalid slot type" + a);
        }
    }
      , zi = a=>{
        a = a.g.slice(0).map(Bi);
        a = JSON.stringify(a);
        {
            const c = a.length;
            if (0 == c)
                a = 0;
            else {
                var b = 305419896;
                for (let d = 0; d < c; d++)
                    b ^= (b << 5) + (b >> 2) + a.charCodeAt(d) & 4294967295;
                a = 0 < b ? b : 4294967296 + b
            }
        }
        return a
    }
      , Bi = a=>{
        const b = {};
        null != qc(a, 7) && (b.q = qc(a, 7));
        null != pc(a, 2) && (b.o = pc(a, 2));
        null != pc(a, 5) && (b.p = pc(a, 5));
        return b
    }
    ;
    var Ci = class extends E {
        setLocation(a) {
            return Zb(this, 1, Ab(a))
        }
    }
    ;
    var Di = new zc(1196)
      , Ei = new zc(313)
      , Fi = new zc(573506525,!0)
      , Gi = new zc(573506524,!0)
      , Hi = new zc(595827158)
      , Ii = new zc(45618987)
      , Ji = new Ac
      , Ki = new zc(45459826)
      , Li = new zc(531007060)
      , Mi = new zc(45545724)
      , Ni = new zc(45430975)
      , Oi = new zc(531582260);
    function Pi(a, b, c) {
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
        oi(b) && (b.setAttribute("data-init-display", b.style.display),
        b.style.display = "block")
    }
    function Qi(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            oi(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    }
    ;var Si = (a,b,c)=>{
        if (K(Ei)) {
            var d = Ri(b, c);
            if (d.ua) {
                for (c = b = d.ua; c = d.Z(c); )
                    b = c;
                d = {
                    anchor: b,
                    position: d.ub
                }
            } else
                d = {
                    anchor: b,
                    position: c
                };
            a["google-ama-order-assurance"] = 0;
            Pi(a, d.anchor, d.position)
        } else
            Pi(a, b, c)
    }
    ;
    function Ri(a, b) {
        const c = e=>{
            e = Ti(e);
            return null == e ? !1 : 0 < e
        }
          , d = e=>{
            e = Ti(e);
            return null == e ? !1 : 0 > e
        }
        ;
        switch (b) {
        case 0:
            return {
                ua: Ui(a.previousSibling, c),
                Z: e=>Ui(e.previousSibling, c),
                ub: 0
            };
        case 2:
            return {
                ua: Ui(a.lastChild, c),
                Z: e=>Ui(e.previousSibling, c),
                ub: 0
            };
        case 3:
            return {
                ua: Ui(a.nextSibling, d),
                Z: e=>Ui(e.nextSibling, d),
                ub: 3
            };
        case 1:
            return {
                ua: Ui(a.firstChild, d),
                Z: e=>Ui(e.nextSibling, d),
                ub: 3
            }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }
    function Ti(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }
    function Ui(a, b) {
        return a && b(a) ? a : null
    }
    ;var Vi = {
        0: 0,
        1: 1,
        2: 2,
        3: 3
    };
    var Wi = {
        BODY: {
            ga: [1, 2],
            oa: !1,
            pa: 2,
            na: 4
        },
        HEADER: {
            ga: [0, 3, 1, 2],
            oa: !1,
            pa: 1,
            na: 3
        },
        NAV: {
            ga: [0, 3],
            oa: !1,
            pa: 1,
            na: 3
        },
        H1: {
            ga: [0],
            oa: !1,
            pa: 1,
            na: 2
        },
        IMG: {
            ga: [0, 3],
            oa: !0,
            pa: 0,
            na: 1
        },
        DIV: {
            ga: [0, 3, 1, 2],
            oa: !0,
            pa: 0,
            na: 1
        },
        TABLE: {
            ga: [0, 3],
            oa: !0,
            pa: 0,
            na: 1
        },
        TD: {
            ga: [1, 2],
            oa: !0,
            pa: 0,
            na: 1
        },
        ASIDE: {
            ga: [0, 3, 1, 2],
            oa: !0,
            pa: 0,
            na: 1
        },
        LI: {
            ga: [1, 2],
            oa: !0,
            pa: 0,
            na: 1
        },
        SECTION: {
            ga: [0, 3, 1, 2],
            oa: !0,
            pa: 0,
            na: 1
        }
    }
      , Xi = a=>({
        ga: a.ga.slice(0),
        oa: a.oa,
        pa: a.pa,
        na: a.na
    })
      , Yi = (a,b)=>{
        const c = Xi(a);
        c.ga = Fa(a.ga, d=>b[d]);
        return c
    }
    ;
    function Zi(a) {
        var b = a.length - 1
          , c = new dg;
        c.next = function() {
            return 0 > b ? eg : {
                value: a[b--],
                done: !1
            }
        }
        ;
        return c
    }
    ;var $i = {
        0: !0,
        1: !0
    }
      , aj = {
        2: !0,
        3: !0
    }
      , bj = {
        3: !0
    }
      , cj = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.g = c
        }
        Z() {
            for (var a = gg(this.j); null !== a; a = gg(this.j)) {
                var b = a.g;
                if (1 != b.F.nodeType)
                    b = null;
                else {
                    var c = Wi[b.F.tagName];
                    c ? (a = Yi(c, 0 == a.j ? $i : 0 < vg(a.g).length ? aj : bj),
                    b = {
                        node: b,
                        Bb: a,
                        identifier: {}
                    }) : b = null
                }
                if (b && (a = b.node.j().getWidth(),
                c = this.l,
                null == a || null == c ? 0 : a >= c * this.g.A && a <= c * this.g.j))
                    return a = new Th,
                    a.resolve(b),
                    a.g
            }
            b = new Th;
            b.j("na");
            return b.g
        }
    }
    ;
    var dj = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    function ej(a, b) {
        do {
            const c = Md(a, b);
            if (c && "fixed" == c.position)
                return !1
        } while (a = a.parentElement);
        return !0
    }
    ;function fj(a, b) {
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
    function gj(a, b, c, d, e) {
        if (a !== a.top)
            return Jd(a) ? 3 : 16;
        if (!(488 > P(a)))
            return 4;
        if (!Nf(a))
            return 5;
        const f = P(a);
        if (!f || (f - c) / f > d)
            a = 6;
        else {
            if (c = "true" !== e.google_full_width_responsive)
                a: {
                    c = b.parentElement;
                    for (b = P(a); c; c = c.parentElement)
                        if ((d = Md(c, a)) && (e = Td(d.width)) && !(e >= b) && "visible" !== d.overflow) {
                            c = !0;
                            break a
                        }
                    c = !1
                }
            a = c ? 7 : !0
        }
        return a
    }
    function hj(a, b, c) {
        a = a.style;
        "rtl" === b ? a.marginRight = c : a.marginLeft = c
    }
    function ij(a, b) {
        if (3 == b.nodeType)
            return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName))
                return !1;
            let c;
            try {
                c = Md(b, a)
            } catch (d) {}
            return !c || "none" !== c.display && !("absolute" === c.position && ("hidden" === c.visibility || "collapse" === c.visibility))
        }
        return !1
    }
    function jj(a, b, c) {
        a = fj(b, a);
        return "rtl" === c ? -a.x : a.x
    }
    function kj(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = Md(c, a)) ? c.direction : "" : "";
        if (c) {
            var d = b.style;
            d.border = d.borderStyle = d.outline = d.outlineStyle = d.transition = "none";
            d.borderSpacing = d.padding = "0";
            hj(b, c, "0px");
            d.width = `${P(a)}px`;
            if (0 !== jj(a, b, c)) {
                hj(b, c, "0px");
                var e = jj(a, b, c);
                hj(b, c, `${-1 * e}px`);
                a = jj(a, b, c);
                0 !== a && a !== e && hj(b, c, `${e / (a - e) * e}px`)
            }
            d.zIndex = "30"
        }
    }
    ;var lj = class {
        constructor(a, b) {
            this.Oa = a;
            this.l = b
        }
        height() {
            return this.l
        }
        g(a) {
            return 300 < a && 300 < this.l ? this.Oa : Math.min(1200, Math.round(a))
        }
        j() {}
    }
    ;
    var mj = (a,b,c,d=e=>e)=>{
        let e;
        return a.style && a.style[c] && d(a.style[c]) || (e = Md(a, b)) && e[c] && d(e[c]) || null
    }
      , nj = a=>b=>b.Oa <= a
      , sj = (a,b,c,d)=>{
        const e = a && oj(c, b)
          , f = pj(b, d);
        return g=>!(e && g.height() >= f)
    }
      , tj = a=>b=>b.height() <= a
      , oj = (a,b)=>{
        a = fj(a, b);
        return (a ? a.y : 0) < Of(b).clientHeight - 100
    }
      , uj = (a,b)=>{
        var c = mj(b, a, "height", Td);
        if (c)
            return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = mj(b, a, "height", Td);
        b.style.height = d;
        if (c)
            return c;
        c = Infinity;
        do
            (d = b.style && Td(b.style.height)) && (c = Math.min(c, d)),
            (d = mj(b, a, "maxHeight", Td)) && (c = Math.min(c, d));
        while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }
    ;
    const pj = (a,b)=>{
        const c = a.google_unique_id;
        return b && 0 == ("number" === typeof c ? c : 0) ? Math.max(250, 2 * Of(a).clientHeight / 3) : 250
    }
    ;
    function vj(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c]
              , e = nd(d.property);
            a[e] = d.value
        }
    }
    function wj(a, b, c) {
        var d = [];
        if (c = c && c.g())
            a.eb.className = c.join(" ");
        a = a.Ia;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        d.length && a.setAttribute("data-ad-channel", d.join("+"))
    }
    function xj(a, b) {
        var c = b.Db || !1;
        const d = zd(new qd(a), "DIV")
          , e = d.style;
        e.width = "100%";
        e.height = "auto";
        e.clear = c ? "both" : "none";
        c = d.style;
        c.textAlign = "center";
        b.tb && vj(c, b.tb);
        a = zd(new qd(a), "INS");
        c = a.style;
        c.display = "block";
        c.margin = "auto";
        c.backgroundColor = "transparent";
        b.Nb && (c.marginTop = b.Nb);
        b.Cb && (c.marginBottom = b.Cb);
        b.lb && vj(c, b.lb);
        d.appendChild(a);
        return {
            eb: d,
            Ia: a
        }
    }
    ;function yj(a, b=!1) {
        if (a.qa)
            return a.qa;
        if (b = a.C(b))
            qg(),
            !a.g && b && (a.g = b.j());
        return b
    }
    function zj(a) {
        return a.G.node || null
    }
    function Aj(a) {
        return (a = zj(a)) && a.A() ? oi(a.F) : !1
    }
    function Bj(a) {
        return Hf(a.P.g).map(b=>{
            switch (b) {
            case 1:
                return "IN ARTICLE";
            case 2:
                return "ABOVE FOOTER";
            case 3:
                return "ABOVE COMMENT";
            case 4:
                return "PEDESTAL";
            case 5:
                return "BELOW CONTENT";
            default:
                return null
            }
        }
        ).filter(b=>null != b).join(", ")
    }
    class Cj {
        constructor(a) {
            this.G = a.j;
            this.j = a.A;
            this.g = this.qa = null;
            this.A = !1;
            this.P = new ag(Hf(a.g.g))
        }
        I() {}
        C() {}
        D() {}
        l() {}
    }
    var Dj = class {
        constructor(a, b) {
            this.j = a;
            this.A = b;
            this.g = new ag;
            this.l = []
        }
        build() {}
    }
    ;
    function Ej(a, b) {
        Ka(a.l, b);
        return a
    }
    class Fj {
        constructor() {
            this.j = [];
            this.l = [];
            this.A = []
        }
        g(a) {
            if (a = zj(a)) {
                for (var b = 0; b < this.A.length; ++b)
                    if (Mg(a, this.A[b]))
                        return [6];
                for (b = 0; b < this.j.length; ++b)
                    if (Ng(a, this.j[b]))
                        return [6];
                for (b = 0; b < this.l.length; ++b)
                    if (Og(a, this.l[b]))
                        return [6]
            }
            return []
        }
    }
    var Gj = [/cookie/, /(^|(-|_))sticky((-|_)|$)/]
      , Hj = [/(^|(-|_))tab((-|_)|$)/, /(^|(-|_))tabs((-|_)|$)/]
      , Ij = [/(^|(-|_))slider((-|_)|$)/, /(^|(-|_))swiper((-|_)|$)/]
      , Jj = [/(^|(-|_))taboola((-|_)|$)/, /(^|(-|_))OUTBRAIN((-|_)|$)/, /(^|(-|_))revcontent((-|_)|$)/]
      , Kj = ["A", "FORM", "BUTTON"];
    function Lj(a) {
        return b=>!!(b.jb & a)
    }
    class T extends lj {
        constructor(a, b, c, d=!1) {
            super(a, b);
            this.jb = c;
            this.A = d
        }
        yb() {
            return this.jb
        }
        j(a, b, c) {
            c.style.height = this.height() + "px";
            b.rpe = !0
        }
    }
    ;const Mj = {
        image_stacked: 1 / 1.91,
        image_sidebyside: 1 / 3.82,
        mobile_banner_image_sidebyside: 1 / 3.82,
        pub_control_image_stacked: 1 / 1.91,
        pub_control_image_sidebyside: 1 / 3.82,
        pub_control_image_card_stacked: 1 / 1.91,
        pub_control_image_card_sidebyside: 1 / 3.74,
        pub_control_text: 0,
        pub_control_text_card: 0
    }
      , Nj = {
        image_stacked: 80,
        image_sidebyside: 0,
        mobile_banner_image_sidebyside: 0,
        pub_control_image_stacked: 80,
        pub_control_image_sidebyside: 0,
        pub_control_image_card_stacked: 85,
        pub_control_image_card_sidebyside: 0,
        pub_control_text: 80,
        pub_control_text_card: 80
    }
      , Oj = {
        pub_control_image_stacked: 100,
        pub_control_image_sidebyside: 200,
        pub_control_image_card_stacked: 150,
        pub_control_image_card_sidebyside: 250,
        pub_control_text: 100,
        pub_control_text_card: 150
    };
    function Pj(a) {
        var b = 0;
        a.Ga && b++;
        a.va && b++;
        a.wa && b++;
        if (3 > b)
            return {
                Aa: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
            };
        b = a.Ga.split(",");
        const c = a.wa.split(",");
        a = a.va.split(",");
        if (b.length !== c.length || b.length !== a.length)
            return {
                Aa: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
            };
        if (2 < b.length)
            return {
                Aa: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
            };
        const d = []
          , e = [];
        for (let g = 0; g < b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || 0 === f)
                return {
                    Aa: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
                };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || 0 === f)
                return {
                    Aa: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
                };
            e.push(f)
        }
        return {
            wa: d,
            va: e,
            Zb: b
        }
    }
    function Qj(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    }
    ;function Rj(a, b) {
        if (!a)
            return !1;
        a = a.hash;
        if (!a || !a.indexOf)
            return !1;
        if (-1 != a.indexOf(b))
            return !0;
        b = Sj(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }
    function Sj(a) {
        let b = "";
        Od(a.split("_"), c=>{
            b += c.substr(0, 2)
        }
        );
        return b
    }
    ;const Tj = Ma("script");
    class Uj {
        constructor(a, b, c=null, d=null, e=null, f=null, g=null, h=null, k=null, l=null, m=null, n=null) {
            this.I = a;
            this.J = b;
            this.jb = c;
            this.g = d;
            this.P = e;
            this.j = f;
            this.l = g;
            this.C = h;
            this.D = k;
            this.A = l;
            this.B = m;
            this.G = n
        }
        size() {
            return this.J
        }
    }
    ;class Vj extends Error {
        constructor(a="") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, Vj) : this.stack = Error().stack || ""
        }
    }
    ;var Wj = class extends lj {
        g(a) {
            return Math.min(1200, Math.max(this.Oa, Math.round(a)))
        }
    }
    ;
    function Xj(a, b) {
        Yj(a, b);
        if ("pedestal" === b.google_content_recommendation_ui_type)
            return new Uj(9,new Wj(a,Math.floor(a * b.google_phwr)));
        var c = Ad();
        468 > a ? c ? (c = a - 8 - 8,
        c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * Mj.mobile_banner_image_sidebyside + Nj.mobile_banner_image_sidebyside) + 96),
        a = {
            Za: a,
            Ya: c,
            va: 1,
            wa: 12,
            Ga: "mobile_banner_image_sidebyside"
        }) : (a = Qj(a),
        a = {
            Za: a.width,
            Ya: a.height,
            va: 1,
            wa: 13,
            Ga: "image_sidebyside"
        }) : (a = Qj(a),
        a = {
            Za: a.width,
            Ya: a.height,
            va: 4,
            wa: 2,
            Ga: "image_stacked"
        });
        Zj(b, a);
        return new Uj(9,new Wj(a.Za,a.Ya))
    }
    function ak(a, b) {
        Yj(a, b);
        var c = Pj({
            wa: b.google_content_recommendation_rows_num,
            va: b.google_content_recommendation_columns_num,
            Ga: b.google_content_recommendation_ui_type
        });
        if (c.Aa)
            a = {
                Za: 0,
                Ya: 0,
                va: 0,
                wa: 0,
                Ga: "image_stacked",
                Aa: c.Aa
            };
        else {
            var d = 2 === c.Zb.length && 468 <= a ? 1 : 0;
            var e = c.Zb[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = Oj[e];
            let g = c.va[d];
            for (; a / g < f && 1 < g; )
                g--;
            f = g;
            d = c.wa[d];
            c = Math.floor(((a - 8 * f - 8) / f * Mj[e] + Nj[e]) * d + 8 * d + 8);
            a = 1500 < a ? {
                width: 0,
                height: 0,
                rd: `Calculated slot width is too large: ${a}`
            } : 1500 < c ? {
                width: 0,
                height: 0,
                rd: `Calculated slot height is too large: ${c}`
            } : {
                width: a,
                height: c
            };
            a = {
                Za: a.width,
                Ya: a.height,
                va: f,
                wa: d,
                Ga: e
            }
        }
        if (a.Aa)
            throw new Vj(a.Aa);
        Zj(b, a);
        return new Uj(9,new Wj(a.Za,a.Ya))
    }
    function Yj(a, b) {
        if (0 >= a)
            throw new Vj(`Invalid responsive width from Matched Content slot ${b.google_ad_slot}: ${a}. Please ensure to put this Matched Content slot into a non-zero width div container.`);
    }
    function Zj(a, b) {
        a.google_content_recommendation_ui_type = b.Ga;
        a.google_content_recommendation_columns_num = b.va;
        a.google_content_recommendation_rows_num = b.wa
    }
    ;class bk extends lj {
        g() {
            return this.Oa
        }
        j(a, b, c) {
            kj(a, c);
            c.style.height = this.height() + "px";
            b.rpe = !0
        }
    }
    ;const ck = {
        "image-top": a=>600 >= a ? 284 + .414 * (a - 250) : 429,
        "image-middle": a=>500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500),
        "image-side": a=>500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500),
        "text-only": a=>500 >= a ? 187 - .228 * (a - 250) : 130,
        "in-article": a=>420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
    };
    var dk = class extends lj {
        g() {
            return Math.min(1200, this.Oa)
        }
    }
      , ek = (a,b,c,d,e)=>{
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f) {
            var g = a;
            if ("false" == e.google_full_width_responsive)
                a = g;
            else if (a = gj(b, c, g, .2, e),
            !0 !== a)
                e.gfwrnwer = a,
                a = g;
            else if (a = P(b))
                if (e.google_full_width_responsive_allowed = !0,
                c.parentElement) {
                    b: {
                        g = c;
                        for (let h = 0; 100 > h && g.parentElement; ++h) {
                            const k = g.parentElement.childNodes;
                            for (let l = 0; l < k.length; ++l) {
                                const m = k[l];
                                if (m !== g && ij(b, m))
                                    break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    kj(b, c)
                } else
                    a = g;
            else
                a = g
        }
        if (250 > a)
            throw new Vj("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f)
                throw new Vj("Fluid responsive ads must be at least 50px tall: height=" + f);
            return new Uj(11,new lj(a,f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            c = Math.pow(10, 3);
            if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                for (b = [],
                g = 0; g < e; g++)
                    b.push(parseInt(d[g], 36) / c);
            else
                b = null;
            if (!b)
                throw new Vj("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++)
                c += b[g] * d,
                d *= f;
            f = Math.ceil(1E3 * c - -725 + 10);
            if (isNaN(f))
                throw new Vj("Invalid height: height=" + f);
            if (50 > f)
                throw new Vj("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f)
                throw new Vj("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new Uj(11,new lj(a,f))
        }
        d = ck[f];
        if (!d)
            throw new Vj("Invalid data-ad-layout value: " + f);
        c = oj(c, b);
        b = P(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new Uj(11,"in-article" == f ? new dk(a,b) : new lj(a,b))
    }
    ;
    function fk(a) {
        return b=>{
            for (let c = a.length - 1; 0 <= c; --c)
                if (!a[c](b))
                    return !1;
            return !0
        }
    }
    function gk(a, b) {
        var c = hk.slice(0);
        const d = c.length;
        let e = null;
        for (let f = 0; f < d; ++f) {
            const g = c[f];
            if (a(g)) {
                if (null == b || b(g))
                    return g;
                null === e && (e = g)
            }
        }
        return e
    }
    ;var U = [new T(970,90,2), new T(728,90,2), new T(468,60,2), new T(336,280,1), new T(320,100,2), new T(320,50,2), new T(300,600,4), new T(300,250,1), new T(250,250,1), new T(234,60,2), new T(200,200,1), new T(180,150,1), new T(160,600,4), new T(125,125,1), new T(120,600,4), new T(120,240,4), new T(120,120,1,!0)]
      , hk = [U[6], U[12], U[3], U[0], U[7], U[14], U[1], U[8], U[10], U[4], U[15], U[2], U[11], U[5], U[13], U[9], U[16]];
    let ik, jk;
    const kk = new Pe(u);
    ((a,b=!0)=>{
        ik = a || new Bf;
        "number" !== typeof u.google_srt && (u.google_srt = Math.random());
        Af(ik, u.google_srt);
        jk = new Ye(ik,b,kk);
        jk.A(!0);
        "complete" == u.document.readyState ? u.google_measure_js_timing || Oe(kk) : kk.g && G(u, "load", ()=>{
            u.google_measure_js_timing || Oe(kk)
        }
        )
    }
    )();
    var lk = (a,b,c)=>jk.xa(a, b, c)
      , mk = (a,b)=>jk.U(a, b)
      , nk = (a,b,c)=>{
        const d = I(zf).g();
        !b.eid && d.length && (b.eid = d.toString());
        Xe(ik, a, b, !0, c)
    }
    ;
    function ok(a, b, c, d, e) {
        "false" == e.google_full_width_responsive ? c = {
            ja: a,
            ka: 1
        } : "autorelaxed" === b && e.google_full_width_responsive || "auto" === b || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(b) || e.google_ad_resize ? (b = gj(c, d, a, .3, e),
        !0 !== b ? e = b : "true" === e.google_full_width_responsive || ej(d, c) ? (e = P(c),
        b = e - a,
        e = e && 0 <= b ? !0 : e ? -10 > b ? 11 : 0 > b ? 14 : 12 : 10) : e = 9,
        c = !0 !== e ? {
            ja: a,
            ka: e
        } : {
            ja: P(c) || a,
            ka: !0
        }) : c = {
            ja: a,
            ka: 2
        };
        const {ja: f, ka: g} = c;
        return !0 !== g ? {
            ja: a,
            ka: g
        } : d.parentElement ? {
            ja: f,
            ka: g
        } : {
            ja: a,
            ka: g
        }
    }
    function pk(a, b, c, d, e) {
        const {ja: f, ka: g} = lk(247, ()=>ok(a, b, c, d, e));
        var h = !0 === g;
        const k = Td(d.style.width)
          , l = Td(d.style.height)
          , {Ra: m, Ma: n, yb: q, Yb: r} = qk(f, b, c, d, e, h);
        h = rk(b, q);
        var t;
        const v = (t = mj(d, c, "marginLeft", Td)) ? `${t}px` : ""
          , A = (t = mj(d, c, "marginRight", Td)) ? `${t}px` : "";
        t = mj(d, c, "zIndex") || "";
        return new Uj(h,m,q,null,r,g,n,v,A,l,k,t)
    }
    function qk(a, b, c, d, e, f) {
        b = sk(c, a, b);
        let g;
        var h = !1;
        let k = !1;
        var l = 488 > P(c);
        if (l) {
            g = ej(d, c);
            var m = oj(d, c);
            h = !m && g;
            k = m && g
        }
        m = [nj(a), Lj(b)];
        m.push(sj(l, c, d, k));
        null != e.google_max_responsive_height && m.push(tj(e.google_max_responsive_height));
        l = [t=>!t.A];
        if (h || k)
            h = uj(c, d),
            l.push(tj(h));
        const n = gk(fk(m), fk(l));
        if (!n)
            throw new Vj(`No slot size for availableWidth=${a}`);
        const {Ra: q, Ma: r} = lk(248, ()=>{
            var t;
            a: if (f) {
                if (e.gfwrnh && (t = Td(e.gfwrnh))) {
                    t = {
                        Ra: new bk(a,t),
                        Ma: !0
                    };
                    break a
                }
                t = a / 1.2;
                var v = Math;
                var A = v.min;
                if (e.google_resizing_allowed || "true" == e.google_full_width_responsive)
                    var D = Infinity;
                else {
                    D = d;
                    let x = Infinity;
                    do {
                        var J = mj(D, c, "height", Td);
                        J && (x = Math.min(x, J));
                        (J = mj(D, c, "maxHeight", Td)) && (x = Math.min(x, J))
                    } while ((D = D.parentElement) && "HTML" != D.tagName);
                    D = x
                }
                v = A.call(v, t, D);
                if (v < .5 * t || 100 > v)
                    v = t;
                t = {
                    Ra: new bk(a,Math.floor(v)),
                    Ma: v < t ? 102 : !0
                }
            } else
                t = {
                    Ra: n,
                    Ma: 100
                };
            return t
        }
        );
        return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" === c.location.hash ? {
            Ra: tk(a, c, d, q, e),
            Ma: !1,
            yb: b,
            Yb: g
        } : {
            Ra: q,
            Ma: r,
            yb: b,
            Yb: g
        }
    }
    function rk(a, b) {
        if ("auto" === a)
            return 1;
        switch (b) {
        case 2:
            return 2;
        case 1:
            return 3;
        case 4:
            return 4;
        case 3:
            return 5;
        case 6:
            return 6;
        case 5:
            return 7;
        case 7:
            return 8;
        default:
            throw Error("bad mask");
        }
    }
    function sk(a, b, c) {
        if ("auto" === c)
            c = Math.min(1200, P(a)),
            b = .25 >= b / c ? 4 : 3;
        else {
            b = 0;
            for (const d in dj)
                -1 !== c.indexOf(d) && (b |= dj[d])
        }
        return b
    }
    function tk(a, b, c, d, e) {
        const f = e.google_ad_height || mj(c, b, "height", Td);
        b = ek(a, b, c, f, e).size();
        return b.Oa * b.height() > a * d.height() ? new T(b.Oa,b.height(),1) : d
    }
    ;var uk = (a,b,c,d,e)=>{
        var f;
        (f = P(b)) ? 488 > P(b) ? Nf(b) ? (e.google_full_width_responsive_allowed = !0,
        kj(b, c),
        f = {
            ja: f,
            ka: !0
        }) : f = {
            ja: a,
            ka: 5
        } : f = {
            ja: a,
            ka: 4
        } : f = {
            ja: a,
            ka: 10
        };
        const {ja: g, ka: h} = f;
        if (!0 !== h || a == g)
            return new Uj(12,new lj(a,d),null,null,!0,h,100);
        const {Ra: k, Ma: l, yb: m} = qk(g, "auto", b, c, e, !0);
        return new Uj(1,k,m,2,!0,h,l)
    }
    ;
    const vk = (a,b,c,d,e)=>{
        const f = d.google_ad_height || mj(c, e, "height", Td);
        switch (a) {
        case 5:
            const {ja: g, ka: h} = lk(247, ()=>ok(b, d.google_ad_format, e, c, d));
            !0 === h && b != g && kj(e, c);
            !0 === h ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1,
            d.gfwrnwer = h);
            return Xj(g, d);
        case 9:
            return ak(b, d);
        case 8:
            return ek(b, e, c, f, d);
        case 10:
            return uk(b, e, c, f, d)
        }
    }
    ;
    class wk extends Cj {
        constructor(a) {
            super(a);
            this.B = ""
        }
        I() {
            return 1
        }
        C(a=!1) {
            const b = zj(this);
            if (!b)
                return null;
            Aj(this) && (this.B = b.F.style.display);
            var c = Bj(this)
              , d = sg(b)
              , e = xj(d, {
                Nb: "10px",
                Cb: "10px",
                Db: this.A
            });
            e.eb.className = "google-auto-placed";
            const f = e.Ia;
            var g = f.style;
            g.display = "inline-block";
            g.boxSizing = "border-box";
            g.width = "100%";
            g.height = a ? "auto" : "100px";
            g.backgroundColor = "#f60";
            g.border = "#000 solid 1px";
            c && (g = d.createElement("span"),
            g.style.fontSize = "small",
            g.appendChild(d.createTextNode(c)),
            f.appendChild(g));
            c = e.eb;
            e = e.Ia;
            Si(c, b.F, Vi[this.j]);
            if (a)
                try {
                    this.D(e, vd())
                } catch (h) {
                    e.style.height = "100px"
                }
            this.qa = b.l.g(c);
            this.qa || (c.parentNode.removeChild(c),
            Aj(this) && (b.F.style.display = this.B));
            return this.qa
        }
        D(a, b) {
            var c = {
                google_ad_format: "auto"
            }
              , d = 1
              , e = a.offsetWidth || (c.google_ad_resize || !1) && mj(a, b, "width", Td) || c.google_ad_width || 0;
            4 === d && (c.google_ad_format = "auto",
            d = 1);
            var f = (f = vk(d, e, a, c, b)) ? f : pk(e, c.google_ad_format, b, a, c);
            f.size().j(b, c, a);
            null != f.jb && (c.google_responsive_formats = f.jb);
            null != f.P && (c.google_safe_for_responsive_override = f.P);
            null != f.j && (!0 === f.j ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1,
            c.gfwrnwer = f.j));
            null != f.l && !0 !== f.l && (c.gfwrnher = f.l);
            b = f.B || c.google_ad_width;
            null != b && (c.google_resizing_width = b);
            b = f.A || c.google_ad_height;
            null != b && (c.google_resizing_height = b);
            b = f.size().g(e);
            const g = f.size().height();
            c.google_ad_width = b;
            c.google_ad_height = g;
            var h = f.size();
            e = h.g(e) + "x" + h.height();
            c.google_ad_format = e;
            c.google_responsive_auto_format = f.I;
            null != f.g && (c.armr = f.g);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === f.j && (c.gfwrnh = f.size().height() + "px");
            null != f.C && (c.gfwroml = f.C);
            null != f.D && (c.gfwromr = f.D);
            null != f.A && (c.gfwroh = f.A);
            null != f.B && (c.gfwrow = f.B);
            null != f.G && (c.gfwroz = f.G);
            e = Jd(window) || window;
            Rj(e.location, "google_responsive_dummy_ad") && (Ia([1, 2, 3, 4, 5, 6, 7, 8], f.I) || 1 === f.g) && 2 !== f.g && (e = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }),
            c.dash = `<${Tj}>window.top.postMessage('${e}', '*'); 
          </${Tj}> 
          <div id="dummyAd" style="width:${b}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${b}x${g}</p> 
            <p>Rendered size:${b}x${g}</p> 
          </div>`);
            1 != d && (c = f.size().height(),
            a.style.height = c + "px")
        }
        l() {
            if (this.qa) {
                var a = this.qa;
                a.F.parentNode && a.F.parentNode.removeChild(a.F);
                this.qa = null;
                Aj(this) && (zj(this).F.style.display = this.B);
                qg()
            }
        }
    }
    var xk = class extends Dj {
        build() {
            return new wk(this)
        }
    }
    ;
    new ag(["comments"]);
    new ag(["allcomments"]);
    new ag(["post-container", "post", "type-post"]);
    var zk = (a,b,c)=>{
        const d = [];
        a.map(e=>yk(e, b, c)).forEach(e=>Ka(d, e));
        return d
    }
      , yk = (a,b,c)=>{
        const d = a.Bb.ga
          , e = a.node;
        if (!e)
            return [];
        const f = [];
        e.g() && Ia(d, 0) && f.push(0);
        Ia(d, 1) && f.push(1);
        Ia(d, 2) && (!Ia(d, 1) || 0 < vg(e).length) && f.push(2);
        e.g() && Ia(d, 3) && f.push(3);
        return f.map(g=>{
            g = new xk(a,g);
            b.forEach(g.g.add, g.g);
            g.l.push(...c);
            return g.build()
        }
        )
    }
      , Ak = (a,b)=>{
        a = zj(b) ? a.map.get(w(zj(b))) : void 0;
        if (!a)
            return -1;
        switch (b.j) {
        case 0:
            return a.start.fa();
        case 1:
            return a.start.fa() + 1;
        case 2:
            return a.end.fa();
        case 3:
            return a.end.fa() + 1
        }
        return -1
    }
      , Bk = (a,b)=>{
        a = zj(b) ? a.map.get(w(zj(b))) : void 0;
        if (!a)
            return -1;
        switch (b.j) {
        case 0:
            return a.start.fa() - .1;
        case 3:
            return a.end.fa() + .1;
        case 1:
            return a.start.fa() + .1;
        case 2:
            return a.end.fa() - .1
        }
        return -1
    }
    ;
    function Ck(a, b) {
        b && a.g.push(b);
        return a
    }
    function Dk(a, b) {
        a.j.push(b);
        return a
    }
    function Ek(a, b) {
        return Uh(a.A, ()=>{
            const c = [];
            for (let d = 0; d < a.j.length; ++d) {
                const e = a.j[d].g(b);
                Ka(c, e);
                if (0 < e.length)
                    break
            }
            return c
        }
        , "flap")
    }
    function Fk(a, b) {
        return Uh(a.A, ()=>{
            if (0 == a.g.length)
                var c = [];
            else {
                var d = Math.floor(Bk(a.B, b));
                if ((d = -1 != d ? d + b.I() + "|" + b.A + "|10px|10px" : null) && Ff(a.l, d))
                    c = a.l.get(d);
                else {
                    var e = []
                      , f = yj(b);
                    try {
                        for (let g = 0; g < a.g.length; ++g)
                            if (c = a.g[g].g(f),
                            Ka(e, c),
                            0 < c.length) {
                                b.l();
                                break
                            }
                    } finally {
                        b.l()
                    }
                    null != d && a.l.set(d, e);
                    c = e
                }
            }
            return c
        }
        , "flfa")
    }
    function Gk(a, b) {
        const c = new Th;
        Ek(a, b).then(d=>{
            0 < d.length ? c.resolve(d) : Fk(a, b).then(e=>{
                c.resolve(d.concat(e))
            }
            )
        }
        );
        return c.g
    }
    class Hk {
        constructor(a, b) {
            this.A = a;
            this.g = [];
            this.j = [];
            this.B = b;
            this.l = new If
        }
    }
    ;class Ik {
        constructor(a) {
            this.j = a
        }
        g(a) {
            if (!a)
                return [];
            for (let b = 0; b < this.j.length; ++b)
                if (this.j[b].A(a, !1))
                    return [2];
            return []
        }
    }
    ;class Jk {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            if (!a)
                return [9];
            const b = Pf(this.j, !0);
            return null == b ? [16] : b - a.j().bottom < this.l ? [17] : []
        }
    }
    ;class Kk {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            for (a = Math.floor(Bk(this.j, a)); 0 < a; a--) {
                const b = this.j.ra[a];
                if (!b.g.Na()) {
                    if ((0 == b.j ? zg(b.g).top : zg(b.g).bottom) <= this.l)
                        break;
                    return []
                }
            }
            return [10]
        }
    }
    ;class Lk {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.l = c
        }
    }
    ;class Mk {
        constructor(a) {
            const b = [];
            a = a.g.slice(0);
            for (let c = 0; c < a.length; ++c)
                b.push(a[c].j());
            this.l = b;
            this.j = new If
        }
        g(a) {
            const b = w(a);
            if (Ff(this.j, b))
                return this.j.get(b);
            a: {
                var c = a.j();
                c = new Lk(c.left,c.top + a.F.scrollHeight,a.F.scrollWidth);
                for (e of this.l) {
                    b: {
                        if (c.g >= Math.floor(e.bottom)) {
                            var d = !1;
                            break b
                        }
                        d = Math.ceil(e.left);
                        const f = c.j + c.l;
                        d = !(Math.floor(e.right) <= c.j || f <= d)
                    }
                    if (d) {
                        var e = !0;
                        break a
                    }
                }
                e = !1
            }
            e = !e && a.F.scrollHeight > a.F.clientHeight && Jg(a);
            c = a.g();
            c = !c || this.g(c);
            a = e && c ? !0 : e ? Eg(a) : c && !Eg(a);
            this.j.set(b, a);
            return a
        }
    }
    ;class Nk {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        g(a) {
            const b = zj(a);
            if (!b)
                return [];
            switch (a.j) {
            case 0:
            case 3:
                return a = b.g(),
                b != this.l && a && this.j.g(a) ? [] : [14];
            case 1:
            case 2:
                return this.j.g(b) ? [] : [14];
            default:
                throw Error("Unhandled position.");
            }
        }
    }
    ;class Ok {
        constructor(a) {
            this.j = a
        }
        g(a) {
            return (a = zj(a)) && Dg(a, this.j) ? [11] : []
        }
    }
    ;class Pk {
    }
    ;function Qk(a=null) {
        ({googletag: a} = a ?? window);
        return a?.apiReady ? a : void 0
    }
    ;var Tk = (a,b)=>{
        var c = Ja(b.document.querySelectorAll(".google-auto-placed"));
        const d = Ja(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]"))
          , e = Ja(b.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
        var f;
        (f = Rk(b)) || (f = Ja(b.document.querySelectorAll("div[id^=div-gpt-ad]")));
        f = f.concat(Ja(b.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
        const g = Ja(b.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"))
          , h = Ja(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
          , k = Ja(b.document.querySelectorAll("div.googlepublisherpluginad"))
          , l = Ja(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let m = [].concat(Ja(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Ja(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [n,q] of [[a.Sd, c], [a.Vb, d], [a.Vd, e], [a.Td, f], [a.Wd, g], [a.Rd, h], [a.Ud, k], [a.Xd, l]])
            !1 === n ? b = b.concat(q) : m = m.concat(q);
        a = Sk(m);
        c = Sk(b);
        a = a.slice(0);
        for (const n of c)
            for (c = 0; c < a.length; c++)
                (n.contains(a[c]) || a[c].contains(n)) && a.splice(c, 1);
        return a
    }
      , Vk = a=>{
        const b = Rk(vd(rd(a))) || [];
        return !!yd(a, c=>{
            if (!da(c) || 1 != c.nodeType)
                return !1;
            const d = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector;
            return !d || Ia(b, c) || Ha(Pd(Uk), e=>d.call(c, e))
        }
        , !1, 20)
    }
    ;
    const Rk = a=>{
        const b = Qk(a);
        return b ? Fa(Ga(b.pubads().getSlots(), c=>a.document.getElementById(c.getSlotElementId())), c=>null != c) : null
    }
      , Uk = {
        Ad: "ins.adsbygoogle-ablated-ad-slot",
        Cd: "body ins.adsbygoogle",
        Bd: "iframe[id^=aswift_],iframe[id^=google_ads_frame]",
        Dd: ".google-auto-placed",
        Ed: "ins.adsbygoogle[data-anchor-status]",
        Gd: "iframe[id^=google_ads_iframe]",
        Jd: "div[id^=div-gpt-ad]",
        Kd: "ins.adsbygoogle[data-ad-format=autorelaxed]",
        Ld: "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]",
        Id: "div.googlepublisherpluginad",
        Md: "html > ins.adsbygoogle"
    };
    var Sk = a=>{
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
    var Wk = jk.U(453, Tk);
    function Xk(a) {
        a = Yk(a);
        Zk(a);
        return new $k(a)
    }
    function al(a) {
        return a.g.map(b=>b.box)
    }
    class $k {
        constructor(a) {
            this.g = a.slice(0)
        }
    }
    function Yk(a) {
        const b = Wk({
            Vb: !1
        }, a)
          , c = Sf(a)
          , d = R(a);
        return b.map(e=>{
            const f = e.getBoundingClientRect();
            return (e = !!e.className && -1 != e.className.indexOf("google-auto-placed")) || 1 < (f.bottom - f.top) * (f.right - f.left) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                Od: e ? 1 : 0
            } : null
        }
        ).filter(Fc(e=>null === e))
    }
    function Zk(a) {
        Ga(a, ()=>new Pk)
    }
    ;class bl {
        constructor(a, b, c) {
            this.j = Wk({}, c).map(y(a.g, a)).filter(Fc(d=>null === d));
            this.l = b
        }
        g(a) {
            if (!a)
                return [9];
            a = a.j();
            for (let d = 0; d < this.j.length; d++) {
                const e = this.j[d].j();
                var b;
                if (b = 1 < (e.bottom - e.top) * (e.right - e.left)) {
                    b = a.top;
                    var c = this.l;
                    (b = e.top - c < b && b < e.bottom + c) || (b = a.bottom,
                    c = this.l,
                    b = e.top - c < b && b < e.bottom + c)
                }
                if (b)
                    return [8]
            }
            return []
        }
    }
    ;class cl {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            if (Aj(a))
                return [];
            a = Bk(this.j.j, a);
            var b = Ih(this.j, a);
            if (!b)
                return [];
            const c = this.l.g(b.start.g);
            b = b.end.fa();
            return c && 10 >= a - b ? [5] : []
        }
    }
    ;const dl = "ASIDE DIV IMG LI SECTION TABLE TD".split(" ");
    class el {
        g(a) {
            a = zj(a);
            if (!a)
                return [12];
            if (!dl.includes(a.F.tagName) || a.F.id)
                return [];
            const b = Pg(a)
              , c = sg(a);
            for (const d of b)
                if (1 == c.getElementsByClassName(d).length)
                    return [];
            return 150 >= a.j().getHeight() ? [13] : []
        }
    }
    ;class fl {
        g(a) {
            return a && !a.Na() && Fg(a) ? [] : [3]
        }
    }
    ;function gl(a, b) {
        return 0 < a.g.length ? (b.resolve(a.g.shift()),
        !0) : !1
    }
    class hl {
        constructor(a, b) {
            this.j = a;
            this.B = b;
            this.C = [];
            this.A = [];
            this.g = []
        }
        Z() {
            const a = new Th;
            this.j.g(new Ph(y(this.l, this, a),"p"));
            return a.g
        }
        l(a) {
            gl(this, a) || this.B.Z().then(y(this.I, this, a), y(a.j, a))
        }
        I(a, b) {
            b = zk([b], this.C, this.A);
            Ka(this.g, b);
            gl(this, a) || this.j.g(new Ph(y(this.l, this, a),"p"))
        }
    }
    ;class il {
        constructor(a) {
            this.g = a.filter(b=>Aj(b));
            this.j = a.filter(b=>!Aj(b))
        }
        Z() {
            return this.g.shift() || this.j.shift() || null
        }
    }
    ;class jl {
    }
    ;function kl(a, b) {
        a.j.g(new Ph(()=>{
            const c = a.g ? a.g.Z() : null;
            c ? ll(a, b, c) : a.B.Z().then(y(a.I, a, b), y(a.D, a, b))
        }
        ,"r"))
    }
    function ll(a, b, c) {
        a.A && a.A.apply(c);
        a.l ? Gk(a.l, c).then(function(d) {
            0 == d.length ? (0 < a.g.g.length || (a.g = null),
            Vh(a.j, b, c, "rres")) : (a.C.push(new jl),
            kl(a, b))
        }) : Vh(a.j, b, c, "rres")
    }
    class ml {
        constructor(a, b, c, d) {
            this.j = a;
            this.B = b;
            this.A = c;
            this.l = d;
            this.g = null;
            this.C = []
        }
        Z() {
            const a = new Th;
            kl(this, a);
            return a.g
        }
        I(a, b) {
            this.g = b;
            kl(this, a)
        }
        D(a) {
            Wh(this.j, a)
        }
    }
    ;class nl {
        constructor(a) {
            this.g = a
        }
        Z() {
            const a = new Th;
            this.g.Z().then(b=>{
                a.resolve(new il([b]))
            }
            , y(a.j, a));
            return a.g
        }
    }
    ;class ol {
        constructor(a, b) {
            this.g = a;
            this.j = b
        }
        apply(a) {
            var b = Ak(this.g, a);
            b = this.j.get(w(this.g.ra[b]));
            a.A = b.Wc <= b.dd
        }
    }
    ;class pl {
        constructor(a) {
            this.j = a
        }
        g(a) {
            a: {
                const b = zj(a);
                if (b) {
                    switch (a.j) {
                    case 0:
                    case 3:
                        if (a = b.g())
                            break a;
                        throw Error("An ad placement with BEFORE or AFTER position cannot have an anchor with no parent.");
                    case 1:
                    case 2:
                        a = b;
                        break a
                    }
                    throw Error("Un-handled ad placement position.");
                }
                a = null
            }
            return a && Ia(this.j, a.F) ? [18] : []
        }
    }
    ;var ql = [{
        hostname: /^([a-z]+.)?m.wikihow.com$/,
        Pc: "mw-mf-viewport"
    }];
    const rl = a=>{
        if (!a.location || !a.location.hostname)
            return [];
        var b = a.location.hostname
          , c = [];
        Ea(ql, function(d) {
            b.match(d.hostname) && (d = a.document.getElementById(d.Pc)) && c.push(d)
        });
        return c
    }
    ;
    function sl(a, b) {
        a.j.g(new Ph(function() {
            if (a.g)
                if (a.l.g(a.g)) {
                    var c = a.g;
                    a.g = xg(a.g);
                    b.resolve(c)
                } else {
                    a: {
                        c = a.g;
                        const d = vg(c);
                        for (let e = 0; e < d.length; ++e)
                            if (d[e].A()) {
                                c = d[e];
                                break a
                            }
                        c = xg(c)
                    }
                    a.g = c;
                    sl(a, b)
                }
            else
                b.j(null)
        }
        ,"fpar"))
    }
    const tl = class {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.l = c
        }
        Z() {
            var a = new Th;
            sl(this, a);
            return a.g
        }
    }
    ;
    class ul {
        constructor(a) {
            this.j = a;
            this.g = []
        }
        reset() {
            const a = this.g;
            this.g = [];
            return a
        }
    }
    ;var vl = {
        ga: [3],
        oa: !1,
        pa: 0,
        na: 1
    }
      , wl = new ag(["LI", "TR", "TD", "TH"]);
    function xl(a, b) {
        a.j.g(new Ph(function() {
            a.B.Z().then(y(a.A, a, b), y(a.l, a, b))
        }
        ,"para"))
    }
    const yl = class {
        constructor(a, b, c) {
            this.j = a;
            this.B = b;
            this.g = new ul(c)
        }
        Z() {
            var a = new Th;
            xl(this, a);
            return a.g
        }
        A(a, b) {
            var c = this.g;
            if (c.g.length) {
                var d = c.g[c.g.length - 1];
                var e = c.j;
                const f = e.j.map.get(w(b));
                (e = f ? Ih(e, f.start.fa()) : null) ? (e = e.start.g,
                d = d == e || d != e && xd(d.F, e.F)) : d = !0
            } else
                d = !0;
            d ? c.g.push(b) : c.g = [b];
            b = this.g;
            (b = 3 <= b.g.length ? b.g[b.g.length - 3 + 1] : null) && !wl.contains(b.F.tagName) ? a.resolve({
                node: b,
                Bb: Xi(vl),
                identifier: {}
            }) : xl(this, a)
        }
        l(a) {
            a.j("na")
        }
    }
    ;
    const zl = class extends Xh {
        constructor() {
            super();
            this.j = [];
            this.l = !1
        }
        g(a) {
            this.j.push(a);
            if (!this.l) {
                this.l = !0;
                try {
                    for (; 0 < this.j.length; )
                        this.j.shift().g()
                } finally {
                    this.l = !1
                }
            }
        }
    }
    ;
    const Al = class {
        constructor() {
            this.g = Date.now();
            this.j = Date.now()
        }
    }
    ;
    var Bl;
    function Cl() {
        var a = u.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z("Presto") && (a = function() {
            var e = wd(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random()
              , h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = y(function(k) {
                if (("*" == h || k.origin == h) && k.data == g)
                    this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        }
        );
        if ("undefined" !== typeof a && !Aa()) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.cb;
                    c.cb = null;
                    e()
                }
            }
            ;
            return function(e) {
                d.next = {
                    cb: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            u.setTimeout(e, 0)
        }
    }
    ;class Dl {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.j = 0;
            this.g = null
        }
        get() {
            let a;
            0 < this.j ? (this.j--,
            a = this.g,
            this.g = a.next,
            a.next = null) : a = this.l();
            return a
        }
    }
    ;function El() {
        var a = Fl;
        let b = null;
        a.g && (b = a.g,
        a.g = a.g.next,
        a.g || (a.j = null),
        b.next = null);
        return b
    }
    class Gl {
        constructor() {
            this.j = this.g = null
        }
        add(a, b) {
            const c = Hl.get();
            c.set(a, b);
            this.j ? this.j.next = c : this.g = c;
            this.j = c
        }
    }
    var Hl = new Dl(()=>new Il,a=>a.reset());
    class Il {
        constructor() {
            this.next = this.g = this.j = null
        }
        set(a, b) {
            this.j = a;
            this.g = b;
            this.next = null
        }
        reset() {
            this.next = this.g = this.j = null
        }
    }
    ;let Jl, Kl = !1, Fl = new Gl, Ml = ()=>{
        if (u.Promise && u.Promise.resolve) {
            const a = u.Promise.resolve(void 0);
            Jl = ()=>{
                a.then(Ll)
            }
        } else
            Jl = ()=>{
                var a = Ll;
                "function" !== typeof u.setImmediate || u.Window && u.Window.prototype && (za() || !z("Edge")) && u.Window.prototype.setImmediate == u.setImmediate ? (Bl || (Bl = Cl()),
                Bl(a)) : u.setImmediate(a)
            }
    }
    ;
    var Ll = ()=>{
        for (var a; a = El(); ) {
            try {
                a.j.call(a.g)
            } catch (c) {
                ma(c)
            }
            var b = Hl;
            b.A(a);
            100 > b.j && (b.j++,
            a.next = b.g,
            b.g = a)
        }
        Kl = !1
    }
    ;
    var Nl = class extends Xh {
        constructor(a, b, c) {
            var d = new Al;
            super();
            this.G = a;
            this.j = d;
            this.I = b || null;
            this.A = c || null;
            this.l = [];
            this.B = !1
        }
        g(a) {
            this.l.push(a);
            this.B || (a = this.D,
            Jl || Ml(),
            Kl || (Jl(),
            Kl = !0),
            Fl.add(a, this))
        }
        D() {
            this.I ? this.I(y(this.C, this)) : this.C()
        }
        C() {
            if (!this.B) {
                this.B = !0;
                try {
                    for (this.j.g = Date.now(); 0 < this.l.length; ) {
                        var a = this.l.shift();
                        this.j.j = Date.now();
                        a.g();
                        this.A && this.A.j(Date.now() - this.j.j, a.j);
                        if (50 < Date.now() - this.j.g + 10)
                            break
                    }
                    0 < this.l.length && this.G.setTimeout(y(this.D, this), 0)
                } finally {
                    this.B = !1,
                    this.A && this.A.g(Date.now() - this.j.g)
                }
            }
        }
    }
    ;
    function Ol(a, b) {
        var c = new Th
          , d = b.G ? new Nl(a,ja(lk, b.g ? "lr:apf:" + b.g : "lr:apf"),b.D) : new zl;
        d.g(new Ph(function() {
            fi(new ii(d), a, b).then(function(e) {
                var f = e.j
                  , g = e.A
                  , h = e.l;
                a: {
                    var k = e.j
                      , l = e.g.B;
                    switch (l) {
                    case 2:
                        var m = k.A;
                        l = e.l.g;
                        l.A || (k = new Wg(oh(l),0),
                        l.g || (l.g = new $g(new Wg(oh(l),0))),
                        l.A = new ch(k,new Wg(l.g,1),new Wg(ph(l),2)));
                        m = new yl(d,new tl(d,m,new Wg(l.A,3)),e.A.g);
                        break a;
                    default:
                        m = k.B;
                        var n = k.g.ra;
                        k = e.g;
                        l = 1 == l ? Zi(n) : fg(n);
                        m = new cj(m,l,k)
                    }
                }
                m = new nl(new hl(d,m));
                l = new ol(f.g,g.l);
                k = new Hk(d,f.g);
                e.g.I && Dk(k, new Kk(f.g,f.N));
                n = rl(f.j);
                h = Dk(Dk(Dk(Dk(k, new pl(n)), new cl(g.g,new Wg(ph(h.g),2))), new el), new Nk(f.A,new Mk(g.g)));
                n = new Fj;
                Ka(n.j, Gj);
                n = Ej(Ej(n, Hj), Ij);
                Ka(n.A, Kj);
                Ka(n.j, Jj);
                h = Ck(Dk(Dk(h, Ej(n, Jj)), new Ok(f.O * f.N)), new fl);
                var q = e.g
                  , r = e.j.B;
                n = Math.max(r * q.A, q.minWidth);
                q = r * q.j;
                n = void 0 !== n ? n : 0;
                q = void 0 !== q ? q : Infinity;
                if (0 > n || 0 > q)
                    throw Error("apf::wf");
                Ck(Ck(Ck(h, 0 >= n && Infinity === q ? null : new Oh(n,q)), new bl(f.A.l,e.g.C,f.j)), new Ik([g.g, g.j]));
                0 < e.g.l && Ck(k, new Jk(f.j,e.g.l));
                Vh(d, c, new ml(d,m,l,k), "itres")
            }, y(c.j, c))
        }
        ,"i"));
        return c.g
    }
    ;class Pl {
        constructor(a) {
            this.g = new ag(a)
        }
        contains(a) {
            return this.g.contains(a)
        }
    }
    ;class Ql {
        constructor(a) {
            this.g = a
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return null != this.g ? (a = a(this.getValue()),
            a instanceof Ql ? a : new Ql({
                value: a
            })) : this
        }
    }
    ;function Rl(a) {
        return b=>{
            for (const c of a)
                c(b)
        }
    }
    ;var Sl = class extends E {
        getValue() {
            return qc(this, 2)
        }
    }
    ;
    var Tl = class extends E {
    }
    ;
    Tl.Ha = [3, 4];
    var Ul = class extends E {
    }
    ;
    var Vl = class extends E {
    }
    ;
    Vl.Ha = [6, 7, 9, 10, 11];
    var Wl = class extends E {
    }
      , Xl = yc(Wl);
    Wl.Ha = [1, 2, 5, 7];
    yi(new vi(0,{}));
    yi(new vi(1,{}));
    class Yl {
        constructor() {
            var a = le`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.j = !1;
            this.B = Math.random();
            this.l = this.Ua;
            this.I = a
        }
        Mb(a) {
            this.g = a
        }
        A(a) {
            this.j = a
        }
        Ua(a, b, c=.01, d, e="jserror") {
            if ((this.j ? this.B : Math.random()) > c)
                return !1;
            b.error && b.meta && b.id || (b = new Ae(b,{
                context: a,
                id: e
            }));
            if (d || this.g)
                b.meta = {},
                this.g && this.g(b.meta),
                d && d(b.meta);
            u.google_js_errors = u.google_js_errors || [];
            u.google_js_errors.push(b);
            u.error_rep_loaded || (Kd(u.document, this.I),
            u.error_rep_loaded = !0);
            return !1
        }
        xa(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.l(a, d, .01, c, "jserror"))
                    throw d;
            }
        }
        U(a, b) {
            return (...c)=>this.xa(a, ()=>b.apply(void 0, c))
        }
    }
    ;const Zl = (a,b)=>{
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    }
    ;
    var $l = (a,b,c)=>{
        const d = c || window
          , e = "undefined" !== typeof queueMicrotask;
        return function() {
            e && queueMicrotask(()=>{
                d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1;
                d.google_rum_task_id_counter += 1
            }
            );
            const f = Ge();
            let g, h = 3;
            try {
                g = a.apply(this, arguments)
            } catch (k) {
                h = 13;
                if (!b)
                    throw k;
                b(754, k)
            } finally {
                d.google_measure_js_timing && f && Zl({
                    label: (754).toString(),
                    value: f,
                    duration: (Ge() || 0) - f,
                    type: h,
                    ...(e && {
                        taskId: d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1
                    })
                }, d)
            }
            return g
        }
    }
      , am = (a,b)=>$l(a, (c,d)=>{
        (new Yl).Ua(c, d)
    }
    , b);
    function bm(a, b) {
        return am(a, b).apply()
    }
    var cm = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };
    function dm(a) {
        return null == a ? a : cm[a]
    }
    function em(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = qc(a[c], 1)
              , e = qc(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.property = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }
    function fm(a, b) {
        var c = {};
        a && (c.Nb = qc(a, 1),
        c.Cb = qc(a, 2),
        c.Db = !!ac(a, 3));
        b && (a = mc(b, Sl, 3),
        c.tb = em(a),
        b = mc(b, Sl, 4),
        c.lb = em(b));
        return c
    }
    var gm = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };
    const hm = class {
        constructor(a) {
            this.g = a
        }
        j(a, b, c, d) {
            c = xj(d.document, this.g);
            c.Ia.setAttribute("data-ad-format", "auto");
            wj(c, a, b);
            return c
        }
    }
    ;
    const im = class {
        constructor(a) {
            this.g = a
        }
        j(a, b, c, d) {
            var e = 0 < mc(this.g, Tl, 9).length ? mc(this.g, Tl, 9)[0] : null
              , f = fm(lc(this.g, Ul, 3), e);
            if (!e)
                return null;
            if (e = qc(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = zd(new qd(d), g);
                c.style.clear = f.Db ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.tb && vj(c.style, f.tb);
                d = zd(new qd(d), "INS");
                f.lb && vj(d.style, f.lb);
                c.appendChild(d);
                f = {
                    eb: c,
                    Ia: d
                };
                f.Ia.setAttribute("data-ad-type", "text");
                f.Ia.setAttribute("data-native-settings-key", e);
                wj(f, a, b);
                a = f
            } else
                a = null;
            return a
        }
    }
    ;
    function jm(a, b) {
        a = a.j.query(b.document);
        return 0 < a.length ? a[0] : null
    }
    const km = class {
        constructor(a, b) {
            this.j = a;
            this.g = b
        }
    }
    ;
    function lm(a) {
        return a.A
    }
    function mm(a) {
        return K(Di) ? (a.B || (a.B = jm(a.g, a.l)),
        a.B) : jm(a.g, a.l)
    }
    function nm(a) {
        var b = a.J;
        a = a.l.document.createElement("div");
        K(Di) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }
    function om(a, b) {
        Ff(a.I, 0) || a.I.set(0, []);
        a.I.get(0).push(b)
    }
    class pm {
        constructor(a, b, c, d, e, f, g, h=null, k=null) {
            this.g = a;
            this.P = b;
            this.J = c;
            this.ac = d;
            e || new Ci;
            this.l = f;
            this.D = g;
            this.C = h;
            (this.G = k) && lc(k, ui, 1) && pc(lc(k, ui, 1), 5);
            this.K = [];
            this.A = !1;
            this.I = new If;
            this.B = this.j = null
        }
        fa() {
            return this.D
        }
    }
    ;var qm = a=>{
        switch (a.ac) {
        case 0:
        case 1:
            var b = a.G;
            null == b ? a = null : (a = lc(b, ui, 1),
            null == a ? a = null : (b = Bb(Xb(b, 2)),
            a = null == b ? null : new vi(0,{
                Dc: [a],
                ld: b
            })));
            return null != a ? new Ql({
                value: a
            }) : new Ql(null);
        case 2:
            return new Ql(null);
        default:
            return new Ql(null)
        }
    }
    ;
    function rm(a) {
        a && "function" == typeof a.Ja && a.Ja()
    }
    ;function V() {
        this.I = this.I;
        this.P = this.P
    }
    V.prototype.I = !1;
    V.prototype.Ja = function() {
        this.I || (this.I = !0,
        this.ta())
    }
    ;
    function W(a, b) {
        X(a, ja(rm, b))
    }
    function X(a, b) {
        a.I ? b() : (a.P || (a.P = []),
        a.P.push(b))
    }
    V.prototype.ta = function() {
        if (this.P)
            for (; this.P.length; )
                this.P.shift()()
    }
    ;
    function sm(a) {
        return qm(a.sa).map(b=>yi(b))
    }
    function tm(a) {
        a.j = a.j || sm(a);
        return a.j
    }
    const um = class {
        constructor(a, b, c) {
            this.sa = a;
            this.g = b;
            this.Pa = c;
            this.j = null
        }
        fill(a, b) {
            var c = this.sa;
            if (a = c.P.j(a, b, this.g, c.l)) {
                b = a.eb;
                if (this.sa.A)
                    throw Error("AMA:AP:AP");
                Si(b, this.g, this.sa.g.g);
                c = this.sa;
                c.A = !0;
                K(Di) && (c.j && Qi(c.j),
                c.j = null);
                null != b && c.K.push(b)
            }
            return a
        }
    }
    ;
    function vm(a) {
        switch (a) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        default:
            return null
        }
    }
    ;function wm(a, b) {
        return bm(()=>{
            if (K(Di)) {
                var c = []
                  , d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e]
                      , g = mm(f);
                    if (g) {
                        if (!f.j && !f.A) {
                            var h = null;
                            try {
                                var k = mm(f);
                                if (k) {
                                    h = nm(f);
                                    Si(h, k, f.g.g);
                                    var l = h
                                } else
                                    l = null
                            } catch (r) {
                                throw Qi(h),
                                r;
                            }
                            f.j = l
                        }
                        (h = f.j) && d.push({
                            hd: f,
                            mb: g,
                            qa: h
                        })
                    }
                }
                if (0 < d.length)
                    for (l = R(b),
                    k = Sf(b),
                    e = 0; e < d.length; e++) {
                        const {hd: r, mb: t, qa: v} = d[e];
                        f = xm(v, k, l);
                        c.push(new um(r,t,f))
                    }
                l = c
            } else {
                l = [];
                k = [];
                try {
                    const r = [];
                    for (let t = 0; t < a.length; t++) {
                        var m = a[t]
                          , n = mm(m);
                        n && r.push({
                            vb: m,
                            mb: n
                        })
                    }
                    for (n = 0; n < r.length; n++) {
                        m = k;
                        g = m.push;
                        {
                            var q = r[n];
                            const t = q.mb
                              , v = q.vb
                              , A = nm(v);
                            try {
                                Si(A, t, v.g.g),
                                h = A
                            } catch (D) {
                                throw Qi(A),
                                D;
                            }
                        }
                        g.call(m, h)
                    }
                    c = R(b);
                    d = Sf(b);
                    for (g = 0; g < k.length; g++)
                        e = xm(k[g], d, c),
                        f = r[g],
                        l.push(new um(f.vb,f.mb,e))
                } finally {
                    for (c = 0; c < k.length; c++)
                        Qi(k[c])
                }
            }
            return l
        }
        , b)
    }
    function xm(a, b, c) {
        a = a.getBoundingClientRect();
        return new Lk(a.left + b,a.top + c,a.right - a.left)
    }
    ;function ym(a, b) {
        const c = {
            top: b.g - 25,
            right: b.j + b.l,
            bottom: b.g + 25,
            left: b.j
        };
        return !Ha(a, d=>Lf(d, c))
    }
    ;function zm(a) {
        return function(b) {
            return wm(b, a)
        }
    }
    function Am(a) {
        const b = al(Xk(a));
        return c=>ym(b, c.Pa)
    }
    function Bm(a) {
        if (!a.length)
            return Dc;
        const b = new Pl(a);
        return c=>b.contains(c.ac)
    }
    function Cm(a, b) {
        if (0 >= a)
            return Ec;
        const c = Of(b).scrollHeight - a;
        return function(d) {
            return d.Pa.g <= c
        }
    }
    const Dm = (a,b)=>b.Pa.g >= a
      , Em = (a,b,c)=>{
        c = c.Pa.l;
        return a <= c && c <= b
    }
    ;
    var Fm = class {
        La(a) {
            return Am(a)
        }
        Fa() {
            return 9
        }
    }
    ;
    var Gm = class {
        constructor(a) {
            this.g = a
        }
        La(a) {
            return Cm(this.g, a)
        }
        Fa() {
            return 13
        }
    }
    ;
    var Hm = class {
        La(a) {
            const b = Of(a).clientHeight;
            return b ? ja(Dm, b + R(a)) : Dc
        }
        Fa() {
            return 12
        }
    }
    ;
    var Im = class {
        constructor(a) {
            this.g = a
        }
        La() {
            return Bm(this.g)
        }
        Fa() {
            return 1
        }
    }
    ;
    var Jm = class {
        La() {
            return Fc(lm)
        }
        Fa() {
            return 7
        }
    }
    ;
    var Km = class {
        constructor(a, b) {
            this.minWidth = a;
            this.g = b
        }
        La() {
            return ja(Em, this.minWidth, this.g)
        }
        Fa() {
            return 10
        }
    }
    ;
    var Lm = class {
        constructor(a) {
            this.A = a.j.slice(0);
            this.j = a.g.slice(0);
            this.l = a.l;
            this.B = a.B;
            this.g = a.A
        }
    }
    ;
    function Mm(a=0, b=Infinity) {
        var c = new Nm
          , d = [0];
        c.A = d;
        c.j.push(new Im(d));
        c.j.push(new Jm);
        c.g.push(new Fm);
        c.g.push(new Km(a,b));
        return c
    }
    function Om(a, b=0) {
        a.g.push(new Gm(b));
        return a
    }
    var Nm = class {
        constructor() {
            this.l = 0;
            this.B = !1;
            this.j = [].slice(0);
            this.g = [].slice(0)
        }
        build() {
            return new Lm(this)
        }
    }
    ;
    function Pm(a, b, c) {
        Ff(a.g, b) || a.g.set(b, []);
        a.g.get(b).push(c)
    }
    class Qm {
        constructor() {
            this.g = new If
        }
    }
    ;function Rm(a, b, c) {
        const d = b.sa;
        if (!Ff(a.g, d)) {
            var e = a.g
              , f = e.set;
            b = tm(b);
            null != b.g && b.getValue();
            f.call(e, d, new Sm)
        }
        c(a.g.get(d))
    }
    function Tm(a, b) {
        Rm(a, b, c=>{
            c.g = !0
        }
        )
    }
    function Um(a, b) {
        Rm(a, b, c=>{
            c.j = !0
        }
        )
    }
    var Vm = class {
        constructor() {
            this.g = new If
        }
    }
    ;
    class Sm {
        constructor() {
            this.j = this.g = !1
        }
    }
    ;class Wm {
        constructor(a) {
            this.j = a;
            this.g = -1
        }
    }
    ;function Xm(a) {
        let b = 0;
        for (; a; )
            (!b || a.previousElementSibling || a.nextElementSibling) && b++,
            a = a.parentElement;
        return b
    }
    ;function Ym(a) {
        const b = null.Hd.filter(c=>Hf(c.Eb).every(d=>c.Eb.get(d) === a.get(d)));
        return 0 === b.length ? (null.Bc.push(19),
        null) : b.reduce((c,d)=>c.Eb.Fb() > d.Eb.Fb() ? c : d, b[0])
    }
    function Zm(a) {
        a = tm(a);
        if (null == a.g)
            return null.Bc.push(18),
            null;
        a = a.getValue();
        if (Ff(null.ec, a))
            return null.ec.get(a);
        var b = wi(a);
        b = Ym(b);
        null.ec.set(a, b);
        return b
    }
    ;function $m(a) {
        return 0 == a.g.length ? a : si(a, (b,c)=>(Zm(b)?.kd ?? Number.MAX_VALUE) - (Zm(c)?.kd ?? Number.MAX_VALUE))
    }
    function an(a, b) {
        var c = b.g;
        const d = b.sa.g.g;
        c = b.Pa.g + 200 * Math.min(20, 0 == d || 3 == d ? Xm(c.parentElement) : Xm(c));
        a = a.g;
        0 > a.g && (a.g = Of(a.j).scrollHeight || 0);
        b = a.g - b.Pa.g;
        return c + (1E3 < b ? 0 : 2 * (1E3 - b))
    }
    function bn(a, b) {
        return 0 == b.g.length ? b : si(b, (c,d)=>an(a, c) - an(a, d))
    }
    function cn(a, b) {
        return si(b, (c,d)=>{
            const e = c.sa.C
              , f = d.sa.C;
            var g;
            null == e || null == f ? g = null == e && null == f ? an(a, c) - an(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        }
        )
    }
    class dn {
        constructor(a) {
            this.g = new Wm(a)
        }
    }
    ;function en(a, b) {
        var c = a.l;
        for (var d of b.A)
            c = qi(c, d.La(a.g), fn(d.Fa()));
        d = c = c.apply(zm(a.g));
        for (const e of b.j)
            d = qi(d, e.La(a.g), Rl([gn(e.Fa()), f=>{
                (void 0)?.Zd(f, e.Fa())
            }
            ]));
        switch (b.l) {
        case 1:
            d = bn(a.j, d);
            break;
        case 2:
            d = cn(a.j, d);
            break;
        case 3:
            const e = I(Vm);
            d = $m(d);
            c.forEach(f=>{
                Tm(e, f);
                null?.Fd(f)
            }
            );
            d.forEach(f=>Um(e, f))
        }
        b.B && (d = ti(d, md(a.g.location.href + a.g.localStorage.google_experiment_mod)));
        1 === b.g?.length && Pm(a.A, b.g[0], {
            Pd: c.g.length,
            ee: d.g.length
        });
        return d.g.slice(0)
    }
    class hn {
        constructor(a, b) {
            this.l = new ri(a);
            this.j = new dn(b);
            this.g = b;
            this.A = new Qm
        }
    }
    const fn = a=>b=>om(b, a)
      , gn = a=>b=>om(b.sa, a);
    var jn = (a,b,c,d=null)=>{
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
        G(a, "message", e);
        let f = !1;
        return ()=>{
            let g = !1;
            f || (f = !0,
            g = H(a, "message", e));
            return g
        }
    }
      , kn = (a,b,c,d,e)=>{
        if (!(0 >= e) && (c.googMsgType = b,
        a.postMessage(JSON.stringify(c), d),
        a = a.frames))
            for (let f = 0; f < a.length; ++f)
                1 < e && kn(a[f], b, c, d, --e)
    }
    ;
    function ln(a, b, c, d) {
        return jn(a, "fullscreen", d.U(952, (e,f)=>{
            if (f.source === b) {
                if (!("eventType"in e))
                    throw Error(`bad message ${JSON.stringify(e)}`);
                delete e.googMsgType;
                c(e)
            }
        }
        ))
    }
    ;class mn {
        constructor() {
            this.promise = new Promise(a=>{
                this.resolve = a
            }
            )
        }
    }
    ;async function nn(a) {
        return a.A.promise
    }
    async function on(a) {
        return a.j.promise
    }
    async function pn(a) {
        return a.l.promise
    }
    function qn(a, b) {
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = .25;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.zb.td;
        b.version = a.zb.version;
        Xe(a.B, "fullscreen_tag", b, !1, .25)
    }
    class rn extends V {
        constructor(a, b, c, d, e) {
            super();
            this.slotType = 1;
            this.pubWin = a;
            this.Qb = b;
            this.M = c;
            this.B = d;
            this.zb = e;
            this.g = 1;
            this.qem = null;
            this.A = new mn;
            this.j = new mn;
            this.l = new mn
        }
        ua() {
            const a = ln(this.pubWin, this.Qb, b=>{
                if ("adError" === b.eventType)
                    this.l.resolve(),
                    this.g = 4;
                else if ("adReady" === b.eventType && 1 === this.g)
                    this.qem = b.qem,
                    b.slotType !== this.slotType && (qn(this, {
                        cur_st: this.g,
                        evt: b.eventType,
                        adp_tp: b.slotType
                    }),
                    this.g = 4),
                    this.A.resolve(),
                    this.g = 2;
                else if ("adClosed" === b.eventType && 2 === this.g)
                    this.j.resolve(b.result),
                    this.g = 3;
                else if ("adClosed" !== b.eventType || 3 !== this.g)
                    qn(this, {
                        cur_st: this.g,
                        evt: b.eventType
                    }),
                    this.g = 4
            }
            , this.M);
            X(this, a)
        }
    }
    function sn(a, b, c, d, e) {
        a = new rn(a,b,c,d,e);
        a.ua();
        return a
    }
    ;var tn = class extends E {
    }
    ;
    tn.Ha = [19];
    function Y(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set),
        null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map),
        null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new un;
        return a.google_reactive_ads_global_state
    }
    class un {
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
            this.floatingAdsStacking = new vn;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map;
            this.j = [];
            this.g = null
        }
    }
    var vn = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    }
    ;
    function wn(a, b) {
        a = Y(a)?.tagSpecificState[1];
        return null == a ? null : a.debugCard?.getAdType() === b ? a.debugCard : null
    }
    ;let xn = void 0;
    function yn(a) {
        uc(xn, $e);
        xn = a
    }
    ;function zn(a, b) {
        var c = b.adClient;
        if ("string" === typeof c && c) {
            a.j = c;
            a.A = !!b.adTest;
            c = b.pubVars;
            da(c) && (a.I = c);
            if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                a.g = {};
                for (d of b.fillMessage)
                    a.g[d.key] = d.value
            }
            a.B = b.adWidth;
            a.l = b.adHeight;
            a.G = !!b.delayVisibleUntilCreativeReadyMessage;
            ze(a.B) && ze(a.l) || nk("rctnosize", b);
            var d = !0
        } else
            d = !1;
        return d && a.C(b)
    }
    var An = class {
        constructor() {
            this.g = this.I = this.A = this.j = null;
            this.l = this.B = 0;
            this.G = !1
        }
        C() {
            return !0
        }
    }
    ;
    var Bn = class extends An {
        constructor() {
            super();
            this.g = null
        }
        C(a) {
            a.hasFillMessage || (this.g = null);
            return !0
        }
    }
    ;
    function Cn({qc: a, Rb: b, hc: c, rc: d, Sb: e, ic: f}) {
        const g = [];
        for (let n = 0; n < f; n++)
            for (let q = 0; q < c; q++) {
                var h = q
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
    function Dn(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    }
    ;function En(a, b) {
        for (const e of b) {
            var c;
            b = a;
            var d = Dn(b.R.document, e);
            if (d) {
                if (!(c = Fn(b, d, e)))
                    a: {
                        c = b.R.document;
                        for (d = d.offsetParent; d && d !== c.body; d = d.offsetParent) {
                            const f = Fn(b, d, e);
                            if (f) {
                                c = f;
                                break a
                            }
                        }
                        c = null
                    }
                b = c || null
            } else
                b = null;
            if (b)
                return b
        }
        return null
    }
    function Fn(a, b, c) {
        if ("fixed" !== pe(b, "position"))
            return null;
        var d = "GoogleActiveViewInnerContainer" === b.getAttribute("class") || 1 >= ve(b).width && 1 >= ve(b).height || a.g.Oc && !a.g.Oc(b) ? !0 : !1;
        a.g.Ub && a.g.Ub(b, c, d);
        return d ? null : b
    }
    var Gn = class {
        constructor(a) {
            this.R = a;
            this.g = {
                Ub: void 0
            }
        }
    }
    ;
    var Hn = a=>{
        const b = 812 === a.screen.height && 375 === a.screen.width || 812 === a.screen.width && 375 === a.screen.height || 414 === a.screen.width && 896 === a.screen.height || 896 === a.screen.width && 414 === a.screen.height;
        return null != (a.navigator && a.navigator.userAgent && a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/)) && b
    }
    ;
    const In = 90 * 1.38;
    Oa || Ba();
    function Jn() {
        var a = new Kn;
        {
            u.google_llp || (u.google_llp = {});
            var b = u.google_llp;
            let c = b[1];
            if (!c) {
                const {promise: d, resolve: e} = new mn;
                c = {
                    promise: d,
                    resolve: e
                };
                b[1] = c
            }
            b = c
        }
        b.resolve(a)
    }
    ;function Ln(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }
    ;function Mn(a) {
        const b = d=>{
            d.isTrusted && (a.A = !0,
            a.l(d.timeStamp))
        }
          , c = d=>{
            d.isTrusted && (a.A = !1,
            a.l(d.timeStamp))
        }
        ;
        G(a.g, "focus", b);
        G(a.g, "blur", c);
        X(a, ()=>void a.g.removeEventListener("focus", b));
        X(a, ()=>void a.g.removeEventListener("blur", c));
        a.A = a.g.document.hasFocus()
    }
    function Nn(a) {
        const b = c=>{
            c.isTrusted && (a.j = 1 === Ln(a.g.document) ? !0 : !1,
            a.l(c.timeStamp))
        }
        ;
        G(a.g.document, "visibilitychange", b);
        X(a, ()=>void a.g.document.removeEventListener("visibilitychange", b));
        a.j = 1 === Ln(a.g.document)
    }
    function On(a) {
        const b = a.g.document.body.getBoundingClientRect().top + 10
          , c = d=>{
            d.isTrusted && (a.B = d.clientY < b ? !0 : !1,
            a.l(d.timeStamp))
        }
        ;
        G(a.g.document.body, "mouseleave", c);
        G(a.g.document.body, "mouseenter", c);
        X(a, ()=>void a.g.document.body.removeEventListener("mouseleave", c));
        X(a, ()=>void a.g.document.body.removeEventListener("mouseenter", c));
        a.B = !1
    }
    var Pn = class extends V {
        constructor(a, b) {
            super();
            this.g = a;
            this.B = this.A = this.j = !1;
            if (Ge(a) && b.length)
                for (const c of b)
                    switch (c) {
                    case 0:
                        Mn(this);
                        break;
                    case 1:
                        Nn(this);
                        break;
                    case 2:
                        On(this)
                    }
            else
                this.Ja()
        }
        ua() {
            this.I || this.l(Ge(this.g))
        }
    }
    ;
    var Qn = class extends Pn {
        constructor() {
            super(...arguments);
            this.G = new mn;
            this.D = this.G.promise
        }
    }
    ;
    var Rn = class extends Qn {
        constructor(a) {
            super(a, [0, 1, 2]);
            this.C = 0;
            this.ua()
        }
        l(a) {
            switch (this.C) {
            case 0:
                this.A && !this.B && (this.C = 1);
                break;
            case 1:
                if (!this.A && this.j && this.B) {
                    this.C = 2;
                    const b = setTimeout(()=>{
                        this.l(a)
                    }
                    , 200);
                    X(this, ()=>void clearTimeout(b))
                }
                break;
            case 2:
                !this.A && this.j && this.B ? (this.G.resolve(a),
                this.Ja()) : this.C = 1
            }
        }
    }
    ;
    function Sn(a) {
        let b = !1;
        const c = ({isTrusted: e})=>{
            e && (b = !0)
        }
          , d = ({timeStamp: e, isTrusted: f})=>{
            if (f = f && !b)
                f = (f = a.g.document.referrer) && "function" === typeof URL ? (new URL(f)).origin === a.g.location.origin : !1;
            if (f) {
                e = {
                    kb: e
                };
                for (const g of a.j)
                    try {
                        g(e)
                    } catch (h) {}
            }
        }
        ;
        a.g.addEventListener("focus", d);
        a.g.addEventListener("blur", c);
        X(a, ()=>{
            a.g.removeEventListener("focus", d);
            a.g.removeEventListener("blur", c)
        }
        )
    }
    var Tn = class extends V {
        constructor(a) {
            super();
            this.g = a;
            this.j = [];
            this.l = Hc(()=>{
                Sn(this)
            }
            )
        }
        listen(a) {
            this.l();
            this.j.push(a)
        }
    }
    ;
    var Un = class extends Qn {
        constructor(a) {
            super(a, [1]);
            this.ua()
        }
        l(a) {
            this.C ?? (this.C = 0);
            switch (this.C) {
            case 0:
                this.j && (this.C = 1);
                break;
            case 1:
                this.j || (this.C = 2,
                this.K = a);
                break;
            case 2:
                this.j && (this.J = a - this.K,
                this.G.resolve(a),
                this.Ja())
            }
        }
    }
    ;
    var Vn = class extends V {
        constructor(a, b, c) {
            super();
            c.promise.then(()=>void this.Ja());
            for (const d of b)
                switch (d) {
                case 2:
                    b = new Un(a);
                    W(this, b);
                    b.D.then(()=>void c.resolve(d));
                    break;
                case 3:
                    if (0 !== Ud())
                        break;
                    b = new Rn(a);
                    W(this, b);
                    b.D.then(()=>void c.resolve(d));
                    break;
                case 4:
                    b = new Tn(a),
                    W(this, b),
                    b.listen(()=>void c.resolve(d))
                }
        }
    }
    ;
    function Wn(a, b=[]) {
        const c = Date.now();
        return Fa(b, d=>c - d < 1E3 * a)
    }
    function Xn(a, b) {
        try {
            const c = a.getItem("__lsv__");
            if (!c)
                return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || Ha(d, e=>!Number.isInteger(e)))
                return a.removeItem("__lsv__"),
                [];
            d = Wn(b, d);
            d.length || a?.removeItem("__lsv__");
            return d
        } catch (c) {
            return null
        }
    }
    ;const Yn = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1,
        NOSCRIPT: 1
    }
      , Zn = {
        IMG: " ",
        BR: "\n"
    };
    var $n = (a,b,c,d)=>{
        if (!(a.nodeName in Yn))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Zn)
                d && "IMG" == a.nodeName && a.hasAttribute("alt") && b.push(" " + a.getAttribute("alt")),
                b.push(Zn[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    $n(a, b, c, d),
                    a = a.nextSibling
    }
      , ao = / \xAD /g
      , bo = /\xAD/g
      , co = /\u200B/g
      , eo = / +/g
      , fo = /^\s*/;
    function go(a, b) {
        return null !== yd(a, c=>c.nodeType === Node.ELEMENT_NODE && b.has(c), !0)
    }
    function ho(a, b) {
        return yd(a, c=>c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position, !0)
    }
    function io(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }
    function jo(a, b) {
        const {top: c, left: d, bottom: e, right: f} = b.getBoundingClientRect();
        return 0 <= c && 0 <= d && e <= a.innerHeight && f <= a.innerWidth
    }
    function ko(a) {
        return Math.round(10 * Math.round(a / 10))
    }
    function lo(a) {
        return `${a.position}-${ko(a.O)}x${ko(a.N)}-${ko(a.scrollY + a.Va)}Y`
    }
    function mo(a) {
        return `f-${lo({
            position: a.position,
            Va: a.Va,
            scrollY: 0,
            O: a.O,
            N: a.N
        })}`
    }
    function no(a, b) {
        a = Math.min(a ?? Infinity, b ?? Infinity);
        return Infinity !== a ? a : 0
    }
    function oo(a, b, c) {
        const d = Y(c.R).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0)
                  , g = Math.min(e.bottom + 10, c.N)
                  , h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.O);
                for (var k = .3 * c.O; f <= g; f += 10) {
                    if (0 < e && h < k) {
                        var l = mo({
                            position: "left",
                            Va: f,
                            O: c.O,
                            N: c.N
                        });
                        b.set(l, no(b.get(l), h))
                    }
                    if (h < c.O && e > c.O - k) {
                        l = mo({
                            position: "right",
                            Va: f,
                            O: c.O,
                            N: c.N
                        });
                        const m = c.O - e;
                        b.set(l, no(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    }
    function po(a, b) {
        const c = b.R
          , d = b.Ta;
        var e = `f-${ko(b.O)}x${ko(b.N)}`;
        a.has(e) || (a.set(e, 0),
        e = io(c),
        d ? (qo(a, b, e.filter(f=>jo(c, f))),
        ro(c, e.filter(f=>!jo(c, f)))) : qo(a, b, e))
    }
    function qo(a, b, c) {
        var d = b.Sa;
        const e = b.R;
        Y(e).sideRailProcessedFixedElements.clear();
        d = new Set([...Array.from(e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...d]);
        for (const f of c)
            go(f, d) || oo(f, a, b)
    }
    function so(a) {
        if (1200 > a.O || 650 > a.N)
            return null;
        var b = Y(a.R).sideRailAvailableSpace;
        a.Uc || po(b, {
            R: a.R,
            O: a.O,
            N: a.N,
            Sa: a.Sa,
            Ta: a.Ta
        });
        const c = [];
        var d = .9 * a.N
          , e = R(a.R)
          , f = (a.N - d) / 2
          , g = f
          , h = d / 7;
        for (var k = 0; 8 > k; k++) {
            var l = c
              , m = l.push;
            a: {
                var n = g;
                var q = a.position
                  , r = b
                  , t = {
                    R: a.R,
                    O: a.O,
                    N: a.N,
                    Sa: a.Sa
                };
                const J = mo({
                    position: q,
                    Va: n,
                    O: t.O,
                    N: t.N
                })
                  , x = lo({
                    position: q,
                    Va: n,
                    scrollY: e,
                    O: t.O,
                    N: t.N
                });
                if (r.has(x)) {
                    n = no(r.get(J), r.get(x));
                    break a
                }
                const F = "left" === q ? 20 : t.O - 20;
                let L = F;
                q = .3 * t.O / 5 * ("left" === q ? 1 : -1);
                for (let oa = 0; 6 > oa; oa++) {
                    var v = Dn(t.R.document, {
                        x: Math.round(L),
                        y: Math.round(n)
                    })
                      , A = go(v, t.Sa)
                      , D = ho(v, t.R);
                    if (!A && null !== D) {
                        oo(D, r, t);
                        r.delete(x);
                        break
                    }
                    A || (A = t,
                    "true" === v.getAttribute("google-side-rail-overlap") ? A = !0 : "false" === v.getAttribute("google-side-rail-overlap") ? A = !1 : (D = v.offsetHeight >= .25 * A.N,
                    A = v.offsetWidth >= .9 * A.O && D));
                    if (A)
                        r.set(x, Math.round(Math.abs(L - F) + 20));
                    else if (L !== F)
                        L -= q,
                        q /= 2;
                    else {
                        r.set(x, 0);
                        break
                    }
                    L += q
                }
                n = no(r.get(J), r.get(x))
            }
            m.call(l, n);
            g += h
        }
        b = a.nd;
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
            r = n.width >= g && n.height >= a,
            0 === b && r) {
                m = n;
                break
            } else
                1 === b && r && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    }
    function ro(a, b) {
        const c = Y(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(()=>{
                setTimeout(()=>{
                    to(a);
                    for (const e of c.j)
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
    function uo(a, b) {
        Y(a).j.push(b)
    }
    function to(a) {
        ({sideRailAvailableSpace: a} = Y(a));
        const b = Array.from(a.keys()).filter(c=>c.startsWith("f-"));
        for (const c of b)
            a.delete(c)
    }
    function vo(a) {
        if (a.M)
            return a.M.xa(1228, ()=>so(a)) || null;
        try {
            return so(a)
        } catch {}
        return null
    }
    ;var wo = (a,b,c)=>{
        a.dataset.adsbygoogleStatus = "reserved";
        a.className += " adsbygoogle-noablate";
        c.adsbygoogle || (c.adsbygoogle = [],
        Kd(c.document, le`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
        c.adsbygoogle.push({
            element: a,
            params: b
        })
    }
    ;
    const xo = [1, 2];
    function yo(a, b, c) {
        const d = wd(document, "INS");
        d.className = "adsbygoogle";
        b.document.body.appendChild(d);
        const e = c.I || {};
        e.google_ad_client = c.j;
        e.google_ad_width = c.B;
        e.google_ad_height = c.l;
        e.google_reactive_ad_format = a.g;
        c.g && (e.google_reactive_fill_message = c.g);
        c.A && (e.google_adtest = "on");
        c.G && (e.gdvucrm = c.G);
        wo(d, e, b)
    }
    var zo = class {
        constructor(a) {
            this.g = a
        }
        verifyAndProcessConfig(a, b) {
            const c = Y(a);
            if (c.wasReactiveAdConfigReceived[this.g])
                return !1;
            const d = new Bn;
            if (!zn(d, b))
                return !1;
            xo.forEach(e=>{
                c.wasReactiveAdConfigReceived[e] = !0
            }
            );
            yo(this, a, d);
            return !0
        }
    }
    ;
    function Ao(a, b, c) {
        try {
            if (!ce(c.origin) || !Qf(c, a.J.contentWindow))
                return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.Ca[d]) && a.M.xa(168, ()=>{
            e.call(a, b, c)
        }
        )
    }
    class Bo extends V {
        constructor(a, b, c, d, e={}) {
            super();
            this.l = a;
            this.J = b;
            this.M = c;
            this.bb = d;
            this.Ca = {};
            this.pb = this.M.U(168, (f,g)=>void Ao(this, f, g));
            this.sb = this.M.U(169, (f,g)=>{
                Xe(this.bb, "ras::xsf", {
                    c: g.data.substring(0, 500),
                    u: this.l.location.href.substring(0, 500)
                }, !0, .1);
                return !0
            }
            );
            this.ba = [];
            this.W(this.Ca, e);
            this.ba.push(jn(this.l, "sth", this.pb, this.sb))
        }
        ta() {
            for (const a of this.ba)
                a();
            this.ba.length = 0;
            super.ta()
        }
    }
    ;class Co extends Bo {
        constructor(a, b) {
            super(a, b, jk, ik)
        }
    }
    ;function Do(a) {
        const b = c=>{
            try {
                const e = JSON.parse(c.data);
                if ("floating" === e.type && "loaded" === e.message) {
                    var d = a.g;
                    d.hb = !0;
                    const f = d.j;
                    d.ia && d.hb && f?.setAttribute("data-anchor-status", "ready-to-display");
                    Eo(a.g);
                    a.l.removeEventListener("message", b)
                }
            } catch {}
        }
        ;
        a.l.addEventListener("message", b);
        X(a, ()=>{
            a.l.removeEventListener("message", b)
        }
        )
    }
    var Lo = class extends Co {
        constructor(a, b, c, d=!1) {
            super(a, b.l);
            a = this.g = b;
            if ((b = a.j) && !a.A) {
                for (var e in Fo)
                    !Fo.hasOwnProperty(e) || e in c || (c[e] = Fo[e]);
                a.zc = "true" === c.use_manual_view || "top" === a.B || !!Y(a.g).wasReactiveAdConfigReceived[2];
                a.yc = "true" === c.use_important;
                if (e = c.af_l)
                    a.za = "true" === e;
                a.Y = "true" === c.wait_for_scroll || "top" == a.B;
                a.sb = a.Y && ("true" === c.tsec || "top" == a.B);
                Go(a, c);
                a.A = Ho(a, c);
                c = a.C.height + 5;
                "bottom" == a.B && Hn(a.g) && (c += 20);
                a.da = new jd(a.C.width,c);
                a.fb = a.qb >= a.jc;
                c = a.j;
                e = a.A && Io(a.A);
                c && e && ("top" == a.B ? c.appendChild(e) : c.insertBefore(e, c.firstChild));
                Jo(a);
                a.ca = !0;
                b.setAttribute("data-anchor-status", "ready-to-display")
            }
            d ? (d = this.g,
            d.ia = !0,
            d.j?.removeAttribute("data-anchor-status"),
            Do(this)) : Eo(this.g)
        }
        W(a) {
            a.dismiss = Hc(()=>{
                var b = this.g;
                b.A && Ko(b.A, !0)
            }
            )
        }
    }
    ;
    class Mo {
        constructor(a, b) {
            this.l = a;
            this.g = !1;
            this.A = b;
            this.j = this.A.U(264, c=>{
                this.g && (No || (c = Date.now()),
                this.l(c),
                No ? Oo.call(u, this.j) : u.setTimeout(this.j, 17))
            }
            )
        }
        start() {
            this.g || (this.g = !0,
            No ? Oo.call(u, this.j) : this.j(0))
        }
    }
    var Oo = u.requestAnimationFrame || u.webkitRequestAnimationFrame
      , No = !!Oo && !/'iPhone'/.test(u.navigator.userAgent);
    function Po(a) {
        return a * a * a
    }
    function Qo(a) {
        a = 1 - a;
        return 1 - a * a * a
    }
    function Ro(a) {
        a.P = !1;
        a.B.start()
    }
    class So {
        constructor(a, b, c, d) {
            this.j = a;
            this.I = b;
            this.J = c;
            this.progress = 0;
            this.g = null;
            this.P = !1;
            this.l = [];
            this.A = null;
            this.B = new Mo(y(this.K, this),d)
        }
        K(a) {
            if (this.P)
                this.B.g = !1;
            else {
                null === this.g && (this.g = a);
                this.progress = (a - this.g) / this.J;
                1 <= this.progress && (this.progress = 1);
                a = this.A ? this.A(this.progress) : this.progress;
                this.l = [];
                for (let b = 0; b < this.j.length; b++)
                    this.l.push((this.I[b] - this.j[b]) * a + this.j[b]);
                this.G();
                1 == this.progress && (this.B.g = !1,
                this.C())
            }
        }
        C() {}
        G() {}
        reset(a, b, c) {
            this.g = null;
            this.j = a;
            this.I = b;
            this.J = c;
            this.progress = 0
        }
    }
    ;class To extends So {
        constructor(a, b, c, d, e, f, g, h) {
            super([b], [c], d, f);
            this.L = a;
            this.ta = e;
            this.D = g ? g : null;
            this.A = h || null
        }
        G() {
            const a = {};
            a[this.ta] = this.l[0] + "px";
            O(this.L, a)
        }
        C() {
            this.D && this.D()
        }
    }
    ;function Uo(a) {
        a.g && H(a.g, a.j, a.l, Jc)
    }
    class Vo extends V {
        constructor(a, b, c) {
            super();
            this.g = a;
            this.j = b;
            this.l = c;
            G(this.g, this.j, this.l, Jc);
            X(this, ()=>void Uo(this))
        }
    }
    class Wo {
        constructor() {
            this.reset()
        }
        add(a) {
            const b = Date.now();
            this.g.push({
                time: b,
                coords: a
            });
            for (a = this.j; a < this.g.length; ++a)
                if (100 <= b - this.g[a].time)
                    delete this.g[a];
                else
                    break;
            this.j = a;
            a >= this.g.length && this.reset()
        }
        reset() {
            this.g = [];
            this.j = 0
        }
    }
    function Xo(a, b) {
        a.C && Yo(a);
        a.C = !0;
        a.l = a.W();
        a.j = Zo(b);
        a.g = a.j;
        a.B = new Wo;
        a.B.add(a.j);
        a.J = new Vo(a.A,"mousemove",y(a.da, a));
        W(a, a.J);
        a.L = new Vo(a.A,"touchmove",y(a.da, a));
        W(a, a.L);
        a.G = new Vo(a.A,"mouseup",y(a.ea, a));
        W(a, a.G);
        a.K = new Vo(a.A,"touchend",y(a.ea, a));
        W(a, a.K)
    }
    function Zo(a) {
        a = a.touches && a.touches[0] || a;
        return new M(a.clientX,a.clientY)
    }
    function Yo(a) {
        a.C = !1;
        a.D = !1;
        a.l = null;
        a.j = null;
        a.g = null;
        a.B = null;
        a.J && Uo(a.J);
        a.L && Uo(a.L);
        a.G && Uo(a.G);
        a.K && Uo(a.K)
    }
    class $o extends V {
        constructor(a, b, c) {
            super();
            this.A = a;
            this.target = b;
            this.handle = c || b;
            this.D = this.C = this.T = !1;
            this.B = this.g = this.j = this.l = this.K = this.G = this.L = this.J = null;
            this.ma = new Vo(this.handle,"mousedown",d=>{
                0 == d.button && Xo(this, d)
            }
            );
            W(this, this.ma);
            this.Ca = new Vo(this.handle,"touchstart",d=>Xo(this, d));
            W(this, this.Ca);
            this.la = new Vo(this.handle,"click",d=>{
                this.T ? this.T = !1 : d.stopPropagation()
            }
            );
            W(this, this.la)
        }
        ba() {
            if (this.l && this.j && this.g) {
                var a = this.l
                  , b = id(this.g, this.j);
                var c = new M(a.x + b.x,a.y + b.y);
                a = this.target;
                c instanceof M ? (b = c.x,
                c = c.y) : (b = c,
                c = void 0);
                a.style.left = ue(b, !1);
                a.style.top = ue(c, !1)
            }
        }
        X() {}
        W() {
            var a = this.target, b;
            a: {
                if (Pc && (b = a.parentElement))
                    break a;
                b = a.parentNode;
                b = da(b) && 1 == b.nodeType ? b : null
            }
            var c = b;
            b = se(a);
            c = se(c);
            b = new M(b.x - c.x,b.y - c.y);
            a = ye(a, "margin");
            return id(b, new M(a.left,a.top))
        }
        da(a) {
            if (this.C)
                if (a.preventDefault(),
                this.g = Zo(a),
                this.B.add(this.g),
                this.D)
                    this.ba();
                else {
                    var b = this.j
                      , c = this.g;
                    a = b.x - c.x;
                    b = b.y - c.y;
                    10 <= Math.sqrt(a * a + b * b) && (this.ba(),
                    this.D = !0)
                }
        }
        ea(a) {
            this.D ? (a.preventDefault(),
            this.g = Zo(a),
            this.X()) : this.T = !0;
            Yo(this)
        }
    }
    ;function ap(a) {
        const b = bp(a);
        Ea(a.g.maxZIndexListeners, c=>c(b))
    }
    function bp(a) {
        a = Pd(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    function cp(a, b) {
        a.g.maxZIndexListeners.push(b);
        b(bp(a))
    }
    class dp {
        constructor(a) {
            this.g = Y(a).floatingAdsStacking
        }
    }
    class ep {
        constructor(a) {
            this.j = a;
            this.g = null
        }
    }
    ;function fp(a) {
        var b = a.ownerDocument;
        const c = b.createElementNS("http://www.w3.org/2000/svg", "line");
        c.setAttribute("x1", "22");
        c.setAttribute("y1", "18");
        c.setAttribute("x2", "28");
        c.setAttribute("y2", "12");
        a.appendChild(c);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "28");
        b.setAttribute("y1", "12");
        b.setAttribute("x2", "34");
        b.setAttribute("y2", "18");
        a.appendChild(b)
    }
    function gp(a) {
        var b = a.ownerDocument;
        const c = b.createElementNS("http://www.w3.org/2000/svg", "line");
        c.setAttribute("x1", "22");
        c.setAttribute("y1", "12");
        c.setAttribute("x2", "28");
        c.setAttribute("y2", "18");
        a.appendChild(c);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "28");
        b.setAttribute("y1", "18");
        b.setAttribute("x2", "34");
        b.setAttribute("y2", "12");
        a.appendChild(b)
    }
    function Ko(a, b) {
        if (!a.A && a.j) {
            var c = parseInt(a.j.style[a.g], 10)
              , d = -(4 === a.l ? null.maxHeight : a.D.height) - (b ? 30 : 0)
              , e = (c - d) / .1;
            "bottom" == a.g && Hn(a.R) && a.M.xa(405, ()=>hp(a, "21px", e, "ease-in"));
            b || ip(a, !0);
            c === d ? b || (a.l = 0) : (a.A = !0,
            c = new To(a.j,c,d,e,a.g,a.M,()=>{
                a.A = !1;
                b || (a.l = 0);
                b || ip(a, !0);
                b && a.da();
                a.j.setAttribute("data-anchor-status", "dismissed")
            }
            ,Po),
            a.Y(),
            Ro(c))
        }
    }
    function jp(a, b) {
        Uf(b);
        N(b, {
            "background-color": "#FAFAFA",
            display: "block",
            position: "relative",
            "z-index": 1,
            height: "5px",
            "box-shadow": "top" == a.g ? "rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px" : "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
        });
        "top" == a.g && N(a.B ?? b, {
            position: "absolute",
            top: a.D.height + "px",
            width: "100%"
        });
        const c = Ld("SPAN", a.R.document);
        c.appendChild(kp(a));
        const d = e=>{
            e.target === c && (e.preventDefault && e.preventDefault(),
            e.stopImmediatePropagation && e.stopImmediatePropagation(),
            e.stopPropagation && e.stopPropagation())
        }
        ;
        G(c, "click", d);
        X(a, ()=>H(c, "click", d));
        lp(a, c);
        b.className = "ee";
        b.appendChild(c)
    }
    function kp(a) {
        let b;
        let c, d;
        switch (a.g) {
        case "top":
            var e = "dropShadowBottom";
            b = "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";
            var f = "0";
            c = "up";
            d = fp;
            break;
        case "bottom":
            e = "dropShadowTop",
            b = "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z",
            f = "25",
            c = "down",
            d = gp
        }
        const g = a.R.document
          , h = g.createElementNS("http://www.w3.org/2000/svg", "svg");
        h.style.setProperty("margin", "0 0 0 0px", "important");
        h.style.setProperty("position", "absolute", "important");
        h.style.setProperty(a.g, "0", "important");
        h.style.setProperty("left", "0%", "important");
        h.style.setProperty("display", "block", "important");
        h.style.setProperty("width", "80px", "important");
        h.style.setProperty("height", "30px", "important");
        h.style.setProperty("transform", "none", "important");
        h.style.setProperty("pointer-events", "initial", "important");
        a = g.createElementNS("http://www.w3.org/2000/svg", "defs");
        const k = g.createElementNS("http://www.w3.org/2000/svg", "filter");
        k.setAttribute("id", e);
        k.setAttribute("filterUnits", "userSpaceOnUse");
        k.setAttribute("color-interpolation-filters", "sRGB");
        var l = g.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer");
        l.setAttribute("in", "SourceAlpha");
        l.setAttribute("result", "TransferredAlpha");
        var m = g.createElementNS("http://www.w3.org/2000/svg", "feFuncR");
        m.setAttribute("type", "discrete");
        m.setAttribute("tableValues", "0.5");
        l.appendChild(m);
        m = g.createElementNS("http://www.w3.org/2000/svg", "feFuncG");
        m.setAttribute("type", "discrete");
        m.setAttribute("tableValues", "0.5");
        l.appendChild(m);
        m = g.createElementNS("http://www.w3.org/2000/svg", "feFuncB");
        m.setAttribute("type", "discrete");
        m.setAttribute("tableValues", "0.5");
        l.appendChild(m);
        k.appendChild(l);
        l = g.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        l.setAttribute("in", "TransferredAlpha");
        l.setAttribute("stdDeviation", "2");
        k.appendChild(l);
        l = g.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        l.setAttribute("dx", "0");
        l.setAttribute("dy", "0");
        l.setAttribute("result", "offsetblur");
        k.appendChild(l);
        l = g.createElementNS("http://www.w3.org/2000/svg", "feMerge");
        l.appendChild(g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode"));
        m = g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
        m.setAttribute("in", "SourceGraphic");
        l.appendChild(m);
        k.appendChild(l);
        a.appendChild(k);
        h.appendChild(a);
        a = g.createElementNS("http://www.w3.org/2000/svg", "path");
        a.setAttribute("d", b);
        a.setAttribute("stroke", "#FAFAFA");
        a.setAttribute("stroke-width", "1");
        a.setAttribute("fill", "#FAFAFA");
        a.style.setProperty("filter", `url(#${e})`);
        h.appendChild(a);
        e = g.createElementNS("http://www.w3.org/2000/svg", "rect");
        e.setAttribute("x", "0");
        e.setAttribute("y", f);
        e.setAttribute("width", "80");
        e.setAttribute("height", "5");
        e.style.setProperty("fill", "#FAFAFA");
        h.appendChild(e);
        f = g.createElementNS("http://www.w3.org/2000/svg", "g");
        f.setAttribute("class", c);
        f.setAttribute("stroke", "#616161");
        f.setAttribute("stroke-width", "2px");
        f.setAttribute("stroke-linecap", "square");
        d(f);
        h.appendChild(f);
        return h
    }
    function lp(a, b) {
        const c = b.getElementsByTagName("svg")[0];
        N(b, {
            display: "block",
            width: "80px",
            height: "45px",
            [a.g]: "0",
            left: "0%",
            marginLeft: "0px",
            "pointer-events": "none"
        });
        Yd(c)
    }
    function mp(a, b=a.K) {
        switch (a.l) {
        case 1:
            np(a);
            break;
        case 2:
            op(a);
            break;
        case 0:
            np(a);
            break;
        case 3:
            Ko(a, b);
            break;
        case 4:
            np(a)
        }
    }
    function Io(a) {
        return a.B ?? a.C
    }
    function ip(a, b) {
        const c = a.C.getElementsByTagName("svg")[0].getElementsByTagName("g")[0];
        for (var d; d = c.firstChild; )
            c.removeChild(d);
        switch (a.g) {
        case "top":
            (b ? gp : fp)(c);
            break;
        case "bottom":
            (b ? fp : gp)(c)
        }
    }
    function pp(a, b, c, d) {
        b = {
            i: b,
            dc: 0 === a.l ? "1" : "0",
            fdc: c ? "1" : "0",
            ds: a.K ? "1" : "0",
            expId: a.ia,
            sc: a.V ? "1" : "0",
            off: d,
            vw: P(a.R),
            req: a.G.src,
            tp: a.g,
            h: a.D.height,
            w: a.D.width,
            qemId: a.ea
        };
        Xe(a.ca, "flgr", b, !0, 1)
    }
    function np(a) {
        if (!a.A) {
            var b = parseInt(a.j.style[a.g], 10);
            if (b) {
                var c = ()=>{
                    a.A = !1;
                    a.l = 3;
                    qp(a);
                    a.j.setAttribute("data-anchor-status", "displayed");
                    a.j.setAttribute("data-anchor-shown", !0);
                    ip(a, !1)
                }
                ;
                a.A = !0;
                if (b) {
                    const d = -b / .1;
                    rp(a, d);
                    ip(a, !1);
                    b = new To(a.j,b,0,d,a.g,a.M,c,Qo);
                    a.T();
                    Ro(b)
                }
            }
        }
    }
    function op(a) {
        if (!a.A) {
            sp(a);
            var b = parseInt(a.j.style[a.g], 10)
              , c = ()=>{
                a.A = !1;
                a.l = 4;
                qp(a);
                a.j.setAttribute("data-anchor-status", "displayed");
                a.j.setAttribute("data-anchor-shown", !0);
                ip(a, !1)
            }
            ;
            if (b) {
                a.A = !0;
                const d = -b / .1;
                rp(a, d);
                ip(a, !1);
                b = new To(a.j,b,0,d,a.g,a.M,c,Qo);
                a.T();
                Ro(b)
            } else
                c()
        }
    }
    function sp(a) {
        const b = null.maxHeight;
        4 !== a.l && (a.j.style[a.g] = `-${b - (parseInt(a.j.style.height, 10) + parseInt(a.j.style[a.g], 10))}px`);
        a.j.style.height = `${b}px`;
        a.G.style["max-height"] = "none";
        a.G.height = "100%";
        a.L.V = b
    }
    function hp(a, b, c, d) {
        O(a.G, {
            transition: c / 1E3 + "s",
            "transition-timing-function": d,
            "margin-top": b
        })
    }
    function rp(a, b) {
        "bottom" == a.g && Hn(a.R) && a.M.xa(404, ()=>hp(a, "0px", b, "ease-out"))
    }
    function qp(a) {
        a.ba();
        a.ba = ()=>{}
    }
    function tp(a, b) {
        if ("bottom" !== a.g && "top" !== a.g)
            throw Error("unsupported reactive type");
        const c = g=>{
            g.preventDefault();
            a.A || (a.W = !0,
            mp(a),
            pp(a, "c", 0 !== a.l, 0))
        }
          , d = a.C;
        G(d, "click", c);
        X(a, ()=>H(d, "click", c));
        a.B && (G(a.B, "click", c),
        X(a, ()=>a.B && H(a.B, "click", c)));
        O(b, {
            opacity: 1
        });
        var e = a.R.document;
        if (e) {
            a.j = b;
            var f = null?.maxHeight ?? a.D.height;
            a.ma && (a.L = new ("top" == a.g ? up : vp)(a,e,f,b,a.C),
            W(a, a.L));
            e = {
                position: "fixed",
                left: "0px"
            };
            e[a.g] = -f - 30 + "px";
            O(b, e);
            N(b, {
                overflow: "visible",
                background: "#FAFAFA"
            });
            cp(a.la, g=>{
                const h = null == a.X ? 2147483647 : a.X;
                O(b, {
                    zIndex: null == g ? h : Math.min(g, h)
                })
            }
            );
            mp(a)
        }
    }
    class wp extends V {
        constructor(a, b, c, d, e, f, g, h, k, l, m) {
            super();
            this.config = a;
            this.R = b;
            this.G = c;
            this.D = d;
            this.da = f || (()=>{}
            );
            this.ba = g || (()=>{}
            );
            this.M = h;
            this.ca = k;
            this.Y = l;
            this.T = m;
            this.l = 1;
            X(this, ()=>Ko(this, !0));
            this.C = Ld("INS", b.document);
            X(this, ()=>this.C = null);
            this.B = null;
            HTMLElement.prototype.attachShadow && !this.M.xa(1013, ()=>{
                this.B = Ld("DIV", b.document);
                this.B.className = "grippy-host";
                this.B.attachShadow({
                    mode: "closed"
                }).appendChild(this.C);
                X(this, ()=>this.B = null);
                return !0
            }
            ) && (this.B = null);
            this.A = !1;
            this.J = 0;
            this.g = e;
            this.W = !1;
            this.j = this.L = null;
            this.N = b.innerHeight;
            this.V = "true" === this.config.scroll_detached;
            this.K = "true" === this.config.dismissable;
            this.ma = "true" === this.config.draggable || "top" != this.g;
            this.ia = this.config.expId || "";
            this.ea = this.config.qemId || "";
            a = parseInt(this.config.z_index_override, 10);
            this.X = isNaN(a) ? null : a;
            this.la = new dp(b);
            !this.K && u.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval(()=>{
                const n = this.R.innerHeight;
                if (2 > Math.abs(n - 460) || 2 > Math.abs(n - 529))
                    n < this.N && 2 > Math.abs(R(this.R) - this.J - 68) && (this.W = !0,
                    0 === this.l && mp(this)),
                    this.N = n
            }
            , 300);
            jp(this, this.C)
        }
    }
    class xp extends $o {
        constructor(a, b, c, d, e) {
            super(b, d, e);
            this.ia = a;
            this.V = c
        }
        X() {
            var a = this.ia;
            if (!a.A) {
                const b = parseInt(a.j.style[a.g], 10)
                  , c = b + parseInt(a.j.style.height, 10)
                  , d = a.D.height / 2;
                c >= Number.MAX_SAFE_INTEGER ? (op(a),
                pp(a, "d", !1, b)) : c >= d ? (np(a),
                pp(a, "d", !1, b)) : (Ko(a, a.K),
                pp(a, "d", !0, b))
            }
        }
        ba() {
            if (null !== this.l && null !== this.j && null !== this.g) {
                var a = this.ca(this.l.y, id(this.g, this.j).y);
                0 < a && (a = 0);
                a < -this.V && (a = -this.V);
                var b = {};
                b[this.Y()] = a + "px";
                O(this.target, b)
            }
        }
    }
    class up extends xp {
        W() {
            return new M(0,parseInt(this.target.style.top, 10))
        }
        ca(a, b) {
            return b - a
        }
        Y() {
            return "top"
        }
    }
    class vp extends xp {
        W() {
            return new M(0,parseInt(this.target.style.bottom, 10))
        }
        ca(a, b) {
            return a - b
        }
        Y() {
            return "bottom"
        }
    }
    ;function yp(a, b, c, d) {
        if (!a.W) {
            a.W = [];
            for (var e = a.l.parentElement; e; ) {
                a.W.push(e);
                if (a.ea(e))
                    break;
                e = e.parentNode && 1 === e.parentNode.nodeType ? e.parentNode : null
            }
        }
        e = a.W.slice();
        !c && a.ea(e[e.length - 1]) && e.pop();
        let f;
        if (d)
            for (c = e.length - 1; 0 <= c; --c)
                (f = e[c]) && b.call(a, f, c, e);
        else
            for (c = 0; c < e.length; ++c)
                (f = e[c]) && b.call(a, f, c, e)
    }
    var zp = class extends V {
        constructor(a, b, c) {
            super();
            this.l = a;
            this.g = b;
            this.j = c;
            this.W = null;
            X(this, ()=>this.W = null)
        }
        ea(a) {
            return this.j === a
        }
    }
    ;
    function Ap(a, b, c) {
        null !== b && null !== Sd(a.getAttribute("width")) && a.setAttribute("width", String(b));
        null !== c && null !== Sd(a.getAttribute("height")) && a.setAttribute("height", String(c));
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    ;function Eo(a) {
        a.mc = !0;
        if (!a.J && Bp(a) && (a.ma || !a.za)) {
            var b = a.j;
            b && (Cp(a),
            yp(a, c=>{
                Uf(c)
            }
            , !0),
            tp(a.A, b),
            Dp(a),
            a.J = !0,
            (a = a.l.contentWindow) && kn(a, "ig", {
                rr: "vis-aa"
            }, "*", 2))
        }
    }
    function Ep(a) {
        Fp(a);
        const b = a.g.innerWidth;
        a = ve(a.l).height || +a.l.height || 0;
        return new jd(b,a)
    }
    function Gp(a) {
        if (a.ba) {
            var b = a.j;
            b && (b.style.display = "none");
            Hp(a, a.X, !0, !0);
            a.ba = !1
        }
    }
    function Ip(a) {
        a.K = "touchcancel";
        u.setTimeout(a.M.U(274, ()=>{
            "touchcancel" === a.K && (a.L = 0,
            a.T = !1,
            Jp(a))
        }
        ), 1E3)
    }
    function Kp(a, b) {
        if (b && b.touches) {
            a.K = "touchend";
            var c = b.touches.length;
            2 > c ? u.setTimeout(a.M.U(256, ()=>{
                "touchend" === a.K && (a.L = c,
                a.T = !1,
                Jp(a))
            }
            ), 1E3) : (a.L = c,
            Jp(a));
            !a.J || a.la || Rf(a.g) || Ko(a.A, !0)
        }
    }
    function Lp(a) {
        const b = a.g;
        H(b, "orientationchange", a.ob);
        H(b, "resize", a.pb);
        H(b, "scroll", a.nc);
        H(b, "touchcancel", a.oc);
        H(b, "touchend", a.tc);
        H(b, "touchmove", a.uc);
        H(b, "touchstart", a.wc)
    }
    function Jo(a) {
        const b = a.g;
        G(b, "orientationchange", a.ob);
        G(b, "resize", a.pb);
        G(b, "scroll", a.nc);
        G(b, "touchcancel", a.oc);
        G(b, "touchend", a.tc);
        G(b, "touchmove", a.uc);
        G(b, "touchstart", a.wc);
        X(a, ()=>Lp(a))
    }
    function Go(a, b) {
        const c = parseInt(b.ht, 10)
          , d = 0 < c ? c : null;
        b = parseInt(b.wd, 10);
        const e = 0 < b ? b : null;
        null != d && (a.C.height = d);
        null != e && (a.C.width = e);
        yp(a, f=>{
            Ap(f, e, d)
        }
        , !1, !0);
        Ap(a.l, e, d)
    }
    function Ho(a, b) {
        b = new wp(b,a.g,a.l,a.C,a.B,()=>{
            if (!a.Da) {
                a.Da = !0;
                Lp(a);
                var c = a.j;
                c && c.parentNode && c.parentNode.removeChild(c);
                Hp(a, a.X, !0, !0);
                c && (c.style.display = "none")
            }
        }
        ,()=>void Mp(a),a.M,a.zd,()=>{
            a.V || (a.V = !0,
            Np(a, null))
        }
        ,()=>{
            a.V && (a.V = !1,
            Np(a, null))
        }
        );
        W(a, b);
        return b
    }
    function Mp(a) {
        a.zc && !a.kc && (a.kc = !0,
        a.M.xa(257, ()=>{
            const b = {
                msg_type: "manual-send-view"
            }
              , c = a.l.contentWindow;
            c && c.postMessage(a.g.JSON.stringify(b), "*")
        }
        ))
    }
    function Bp(a) {
        if (!a.Ea() || a.ia && !a.hb)
            return !1;
        const b = a.g;
        if (!a.J && a.Y)
            switch (a.sb && (a.G += Math.max(R(a.g) - a.bb, 0)),
            a.B) {
            case "bottom":
                return a.G >= a.Ac || a.fb;
            case "top":
                return a.G > Op(a)
            }
        return a.la || Rf(b)
    }
    function Cp(a) {
        const b = a.j;
        if (b && a.l.parentElement) {
            te(b, a.da);
            var c = a.g.innerWidth;
            Of(a.g).scrollWidth > c ? b.style.width = c : b.style.width = Pp(a);
            Qp(a)
        }
    }
    function Dp(a) {
        const b = a.j;
        if (b) {
            var c = a.A
              , d = c.R
              , e = R(d);
            if (!(10 > Math.abs(e - c.J))) {
                var f = 10 > e;
                d = e + 10 + Of(d).clientHeight > Pf(d);
                f = f || d;
                c.V || c.W || c.A || (0 === c.l || f ? 0 === c.l && f && mp(c) : mp(c, !1));
                c.J = e
            }
            a.ba || (c = Hp,
            Fp(a),
            e = ye(a.g.document.body, "padding"),
            "bottom" == a.B && (e.bottom += a.da.height + 25),
            c(a, e),
            b.style.display = "block",
            a.ba = !0)
        }
    }
    function Hp(a, b, c=!0, d=!1) {
        const e = a.D.top - b.top
          , f = R(a.g);
        f < e && !d || (d = a.g.document.body,
        d.style.paddingTop = b.top + "px",
        d.style.paddingRight = b.right + "px",
        d.style.paddingBottom = b.bottom + "px",
        d.style.paddingLeft = b.left + "px",
        a.D = b,
        c && a.g.scrollTo(0, f - e))
    }
    function Pp(a) {
        if (K(Cc))
            return "100%";
        const b = ee(a.g);
        return `${a.la ? 100 * (1 > b ? 1 : b) : 100}%`
    }
    function Qp(a) {
        yp(a, b=>{
            te(b, a.C);
            b.style.width = Pp(a)
        }
        , !1, !0);
        a.l.style.display = "block";
        a.l.style.margin = "0 auto";
        if (a.yc) {
            const b = a.j;
            Vd(b, c=>{
                Yd(c, d=>c === b && /display|bottom/i.test(d) ? !1 : !0);
                if ("svg" === c.nodeName)
                    return !1
            }
            )
        }
    }
    function Fp(a) {
        if ("bottom" !== a.B && "top" !== a.B)
            throw Error("Unexpected position: " + a.B);
    }
    function Jp(a) {
        !a.ca || a.Da || 2 <= a.L && a.T || !Bp(a) ? Gp(a) : (Eo(a),
        Dp(a))
    }
    function Np(a, b) {
        const c = a.ba ? Op(a, a.V) : a.X.top;
        if ("top" === a.B && a.g.document.body && a.ca && a.A && a.J && a.D.top !== c && 0 !== b) {
            var d = ke(a.D);
            null === b ? (d.top = c,
            Hp(a, d)) : (0 < b && a.D.top > c && (d.top = Math.max(c, a.D.top - b),
            Hp(a, d, !1)),
            0 > b && a.D.top < c && (d.top = Math.min(c, a.D.top - b),
            Hp(a, d, !1)))
        }
    }
    function Op(a, b=!1) {
        return b ? a.X.top + 30 : a.X.top + 30 + a.da.height - 5
    }
    class Rp extends zp {
        constructor(a, b, c, d, e, f, g=!1) {
            super(a, b, f);
            this.M = d;
            this.zd = e;
            this.G = this.Ka = this.bb = 0;
            this.Da = this.xc = !1;
            this.A = null;
            this.T = this.ca = !1;
            this.K = null;
            this.X = ye(b.document.body, "padding");
            this.D = ye(b.document.body, "padding");
            this.L = 0;
            this.mc = this.J = !1;
            this.ba = !0;
            this.B = c;
            this.C = Ep(this);
            this.da = null;
            this.hb = this.ia = this.Y = this.za = this.ma = this.kc = this.yc = this.zc = !1;
            this.Ac = sd(b || window).height / 2;
            this.qb = sd(b || window).height;
            this.jc = ud(b);
            this.sb = this.V = this.fb = !1;
            this.la = g;
            Gp(this);
            this.ob = this.M.U(266, ()=>{
                Jp(this)
            }
            );
            this.pb = this.M.U(267, ()=>{
                Jp(this)
            }
            );
            this.nc = this.M.U(268, ()=>{
                if (this.J && this.j && this.A) {
                    var h = this.A;
                    h.J = R(h.R)
                }
                h = R(this.g);
                const k = h - this.bb;
                Np(this, k);
                this.Y && (0 < k && (this.G += k),
                this.fb = this.jc - h <= this.qb,
                this.bb = h);
                Jp(this)
            }
            );
            this.oc = this.M.U(269, ()=>{
                Ip(this)
            }
            );
            this.tc = this.M.U(270, h=>{
                Kp(this, h)
            }
            );
            this.uc = this.M.U(271, h=>{
                if (h && h.touches) {
                    this.K = "touchmove";
                    this.L = h.touches.length;
                    this.T = !0;
                    Jp(this);
                    if (!this.xc && h.touches && 0 != h.touches.length && h.touches[0]) {
                        h = h.touches[0].pageY;
                        var k = h - this.Ka;
                        this.Ka = h;
                        h = k
                    } else
                        h = 0;
                    0 < h && (this.G += h);
                    Np(this, h)
                }
            }
            );
            this.wc = this.M.U(272, h=>{
                h && h.touches && h.touches[0] && (this.K = "touchstart",
                this.L = h.touches.length,
                this.T = !1,
                Jp(this),
                this.Ka = h.touches[0].pageY,
                this.xc = (h = h.target) && "top" == this.B && this.ca && this.A && Io(this.A) && 1 === h.nodeType ? xd(Io(this.A), h) : !1)
            }
            );
            this.gb = this.M.U(273, ()=>{
                this.Ca()
            }
            );
            G(a, "load", this.gb);
            X(this, ()=>H(a, "load", this.gb))
        }
        Ca() {
            if (this.ma)
                return !1;
            this.ma = !0;
            H(this.l, "load", this.gb);
            if (this.za && !this.mc)
                return !1;
            Jp(this);
            return !0
        }
        Ea() {
            return Nf(this.g)
        }
    }
    var Fo = {
        ui: "gr",
        gvar: "ar",
        scroll_detached: "true",
        dismissable: "false"
    };
    var Sp = class extends Rp {
        constructor(a, b, c, d) {
            super(a, b, c, jk, ik, d, K(Fi))
        }
        ea(a) {
            return dh(a)
        }
        Ca() {
            if (!super.Ca())
                return !1;
            const a = wn(this.g, "top" === this.B ? 3 : 2);
            a && a.displayAdLoadedContent(!this.Y && !this.ia);
            return !0
        }
        Ea() {
            if (this.C.width > Mf) {
                var a = this.g;
                var b = this.C.width;
                const c = K(Fi) ? ee(a) : 1;
                a = a.innerWidth * c >= b && a.innerHeight * c >= (b > Mf ? 650 : 0)
            } else
                a = super.Ea();
            return a
        }
    }
    ;
    var Tp = class extends E {
    }
      , Up = yc(Tp);
    function Vp(a) {
        Wp(a, !1);
        const b = a.j;
        yp(a, c=>{
            N(c, Xp);
            Uf(c)
        }
        , !0);
        a.l.setAttribute("width", "");
        a.l.setAttribute("height", "");
        O(a.l, Xp);
        O(a.l, Yp);
        O(b, Zp);
        Uf(b);
        Uf(a.l)
    }
    function Wp(a, b) {
        const c = a.j;
        b ? $p(a, c) : (N(c, {
            display: "none"
        }),
        a.A && N(a.A, {
            display: "none"
        }),
        a.C && (u.clearInterval(a.C),
        a.C = 0),
        aq(a))
    }
    function bq(a, b) {
        const c = a.j;
        if (!b)
            return !1;
        var d = zj(b);
        if (!d || !d.A())
            return !1;
        d = d.F;
        if (!d)
            return !1;
        a.A = a.g.document.createElement("ins");
        N(a.A, {
            display: "inline-block",
            width: "100%"
        });
        Si(a.A, d, Vi[b.j]);
        a.D();
        N(c, {
            position: "absolute"
        });
        Wp(a, !0);
        return !0
    }
    function $p(a, b) {
        N(b, {
            display: "block"
        });
        a.C = u.setInterval(()=>a.D, 250)
    }
    function aq(a) {
        null != a.G && (a.B.body.style.overflow = a.G);
        null != a.J && (a.B.documentElement.style.overflow = a.J)
    }
    function cq(a) {
        const b = a.j
          , c = a.g.innerHeight;
        N(b, {
            height: c + "px"
        });
        a.g.scrollTo(0, re(a.A).y);
        b && (N(b, {
            top: "0"
        }),
        a.A && N(a.A, {
            height: c + "px"
        }),
        N(b, {
            position: "fixed"
        }),
        a.B.body && "hidden" != a.B.body.style.overflow && (a.G = a.B.body.style.overflow,
        a.J = a.B.documentElement.style.overflow,
        a.B.body.style.overflow = "hidden",
        a.B.documentElement.style.overflow = "hidden"))
    }
    class dq extends zp {
        constructor(a, b, c) {
            super(a, b, c);
            this.G = null;
            this.C = 0;
            this.J = null;
            this.K = 0;
            this.B = b.document;
            this.A = null;
            this.L = 0;
            Vp(this)
        }
        D() {
            if ("hidden" != this.B.body.style.overflow && "fixed" != this.B.body.style.position) {
                var a = this.j;
                const b = this.g.innerHeight;
                if (this.L < b) {
                    const c = {
                        height: b + "px"
                    };
                    N(a, c);
                    this.A && N(this.A, c);
                    this.L = b
                }
                (a = this.j) && this.A && (this.K = re(this.A).y,
                a.style.top != this.K + "px" && N(a, {
                    top: this.K + "px"
                }))
            }
        }
    }
    var Zp = {
        backgroundColor: "white",
        opacity: "1",
        position: "fixed",
        left: "0px",
        top: "0px",
        display: "none !important",
        zIndex: "2147483646"
    }
      , Xp = {
        width: "100%",
        height: "100%",
        zIndex: "2147483646"
    }
      , Yp = {
        left: "0",
        position: "absolute",
        top: "0"
    };
    var eq = (a,b)=>{
        var c = a.document.body;
        if (!c || !b)
            return nk("sci_evt", {
                amacerr: 1
            }, .1),
            null;
        b = mc(b, Vl, 1);
        var d = [];
        for (let v = 0; v < b.length; v++) {
            var e = b[v];
            var f = v
              , g = a
              , h = lc(e, ui, 1);
            if (h) {
                var k = h;
                if (k) {
                    var l = qc(k, 7);
                    if (qc(k, 1) || k.getId() || 0 < bc(k, 4, Kb).length) {
                        var m = qc(k, 3)
                          , n = qc(k, 1)
                          , q = bc(k, 4, Kb);
                        l = pc(k, 2);
                        var r = pc(k, 5);
                        k = dm(Bb(Xb(k, 6)));
                        var t = "";
                        n && (t += n);
                        m && (t += "#" + li(m));
                        if (q)
                            for (m = 0; m < q.length; m++)
                                t += "." + li(q[m]);
                        l = (q = t) ? new ni(q,l,r,k) : null
                    } else
                        l = l ? new ni(l,pc(k, 2),pc(k, 5),dm(Bb(Xb(k, 6)))) : null
                } else
                    l = null;
                (r = l) ? (l = Bb(Xb(e, 2)),
                l = gm[l],
                q = void 0 === l ? null : l,
                null === q ? e = null : (l = (l = lc(e, Ul, 3)) ? ac(l, 3) : null,
                r = new km(r,q),
                q = bc(e, 10, Bb).slice(0),
                null != pc(h, 5) && q.push(1),
                h = pc(e, 12),
                q = void 0 !== kc(e, Ci, 4) ? lc(e, Ci, 4) : null,
                e = 1 == Bb(Xb(e, 8)) ? new pm(r,new hm(fm(lc(e, Ul, 3), null)),l,0,q,g,f,h,e) : 2 == Bb(Xb(e, 8)) ? new pm(r,new im(e),l,1,q,g,f,h,e) : null)) : e = null
            } else
                e = null;
            null !== e && d.push(e)
        }
        b = new hn(d,a);
        d = a.innerHeight;
        a = a.innerWidth;
        a = Om(Mm(.85 * a, a), d);
        a.g.push(new Hm);
        a.l = 1;
        a = a.build();
        a = en(b, a)[0] || null;
        if (!a)
            return null;
        c = {
            node: (new Vg(c,!1)).g(a.g) || void 0,
            Bb: void 0,
            identifier: {}
        };
        if (!c.node)
            throw Error("amac:n");
        b = vm(a.sa.g.g);
        if (null === b)
            throw Error("amac:p");
        return (c = (new xk(c,b)).build()) ? {
            vb: c,
            yd: a.Pa.g
        } : null
    }
      , fq = a=>{
        var b = new Kf;
        b.g = !0;
        b.B = .85;
        b.j = 1;
        b.A = 25;
        b.l = a.innerHeight;
        b.I = !0;
        b = b.build();
        return Ol(a, b)
    }
    ;
    function gq(a) {
        const b = Pf(a, !0)
          , c = Of(a).scrollWidth
          , d = Of(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = R(a);
        const g = [];
        var h = [];
        const k = []
          , l = [];
        var m = []
          , n = []
          , q = [];
        let r = 0
          , t = 0
          , v = Infinity
          , A = Infinity
          , D = null;
        var J = Tk({
            Vb: !1
        }, a);
        for (const pa of J) {
            J = pa.getBoundingClientRect();
            const Nc = b - (J.bottom + f);
            var x = void 0
              , F = void 0;
            if (pa.className && -1 != pa.className.indexOf("adsbygoogle-ablated-ad-slot")) {
                x = pa.getAttribute("google_element_uid");
                F = a.google_sv_map;
                if (!x || !F || !F[x])
                    continue;
                a: {
                    var L = F[x];
                    x = Number(L.google_ad_width);
                    F = Number(L.google_ad_height);
                    if (!(0 < x && 0 < F)) {
                        b: {
                            try {
                                const Q = String(L.google_ad_format);
                                if (Q && Q.match) {
                                    const jb = Q.match(/(\d+)x(\d+)/i);
                                    if (jb) {
                                        const qj = parseInt(jb[1], 10)
                                          , rj = parseInt(jb[2], 10);
                                        if (0 < qj && 0 < rj) {
                                            var oa = {
                                                width: qj,
                                                height: rj
                                            };
                                            break b
                                        }
                                    }
                                }
                            } catch (Q) {}
                            oa = null
                        }
                        L = oa;
                        if (!L) {
                            x = null;
                            break a
                        }
                        x = 0 < x ? x : L.width;
                        F = 0 < F ? F : L.height
                    }
                    x = {
                        width: x,
                        height: F
                    }
                }
                x = (F = x) ? F.height : 0;
                F = F ? F.width : 0
            } else if (x = J.bottom - J.top,
            F = J.right - J.left,
            1 >= x || 1 >= F)
                continue;
            g.push(x);
            k.push(F);
            l.push(x * F);
            pa.className && -1 != pa.className.indexOf("google-auto-placed") ? (t += 1,
            pa.className && -1 != pa.className.indexOf("pedestal_container") && (D = x)) : (v = Math.min(v, Nc),
            n.push(J),
            r += 1,
            h.push(x),
            m.push(x * F));
            A = Math.min(A, Nc);
            q.push(J)
        }
        v = Infinity === v ? null : v;
        A = Infinity === A ? null : A;
        f = hq(n);
        q = hq(q);
        h = iq(b, h);
        n = iq(b, g);
        m = iq(b * c, m);
        oa = iq(b * c, l);
        return new jq(a,{
            Mc: e,
            lc: b,
            fd: c,
            ed: d,
            fc: r,
            Ob: t,
            Pb: kq(g),
            Hc: kq(k),
            Gc: kq(l),
            cd: f,
            bd: q,
            Zc: v,
            Yc: A,
            Kc: h,
            Jc: n,
            Fc: m,
            Ec: oa,
            gd: D
        })
    }
    function lq(a, b=0) {
        a = gq(a);
        return ((a.g.Pb || 0) * (a.g.fc + a.g.Ob) + b) / (a.g.lc + b)
    }
    function mq(a, b) {
        const c = Ad() && !(900 <= P(a.j))
          , d = Fa([], e=>Ia(a.l, e)).join(",");
        return {
            wpc: "",
            su: b,
            eid: d,
            doc: a.g.Mc,
            pg_h: nq(a.g.lc),
            pg_w: nq(a.g.fd),
            pg_hs: nq(a.g.ed),
            c: nq(a.g.fc),
            aa_c: nq(a.g.Ob),
            av_h: nq(a.g.Pb),
            av_w: nq(a.g.Hc),
            av_a: nq(a.g.Gc),
            s: nq(a.g.cd),
            all_s: nq(a.g.bd),
            b: nq(a.g.Zc),
            all_b: nq(a.g.Yc),
            d: nq(a.g.Kc),
            all_d: nq(a.g.Jc),
            ard: nq(a.g.Fc),
            all_ard: nq(a.g.Ec),
            pd_h: nq(a.g.gd),
            dt: c ? "m" : "d"
        }
    }
    class jq {
        constructor(a, b) {
            this.j = a;
            this.g = b;
            this.l = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }
    function kq(a) {
        return hd.apply(null, Fa(a, b=>0 < b)) || null
    }
    function iq(a, b) {
        return 0 >= a ? null : gd.apply(null, b) / a
    }
    function hq(a) {
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
    function nq(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    }
    ;function oq(a, b, c) {
        var d;
        if (!(d = 0 >= c) && !(d = null == b)) {
            try {
                b.setItem("__storage_test__", "__storage_test__");
                const f = b.getItem("__storage_test__");
                b.removeItem("__storage_test__");
                var e = "__storage_test__" === f
            } catch (f) {
                e = !1
            }
            d = !e
        }
        b = d ? null : Xn(b, c);
        a.g = b;
        if (b = !!a.g)
            a = a.g,
            b = !!a && 1 > a.length;
        return b
    }
    function pq(a, b, c) {
        try {
            if (!b || !oq(a, b, c))
                return !1;
            a.g.push(Date.now());
            const d = JSON.stringify(a.g);
            b.setItem("__lsv__", d);
            return b.getItem("__lsv__") == d
        } catch (d) {
            return !1
        }
    }
    class qq {
        constructor() {
            this.g = null
        }
    }
    ;function rq(a, b) {
        if (a.la)
            Promise.resolve(!1);
        else {
            a.la = !0;
            b = Tf(b);
            a.ea = "true" === b["i-fvs"];
            var c = b.i_expid;
            c && (a.T = c);
            b.qid && (a.ca = b.qid);
            a.D = parseFloat(b.den_lim) || 0;
            b = parseInt(b.sti_lt, 10);
            isNaN(b) || (a.X = b);
            a.K = !0;
            if (sq(a))
                Promise.resolve(!1);
            else {
                var d = new mn
                  , e = ()=>{
                    const g = Pf(a.l, !0);
                    tq(a, {
                        nip: 1,
                        ph: g,
                        vh: a.l.innerHeight,
                        iplt: Date.now() - a.V,
                        ama: a.L,
                        url: a.l.location ? a.l.location.href : void 0
                    }, .1);
                    d.resolve(!1)
                }
                  , f = (g,h)=>{
                    tq(a, {
                        iplt: Date.now() - a.V,
                        ama: a.L,
                        y: h
                    }, .01);
                    d.resolve(uq(a, g))
                }
                ;
                a.V = Date.now();
                a.L ? (b = eq(a.l, a.Ka)) && a.K && !sq(a) ? f(b.vb, b.yd) : (tq(a, {
                    amacerr: 1
                }, .1),
                e()) : fq(a.l).then(g=>{
                    if (a.K && !sq(a))
                        return g.Z().then(h=>{
                            if (h.g)
                                var k = h.g;
                            else
                                h.qa || (yj(h, !1),
                                h.l()),
                                k = h.qa,
                                !h.g && k && (h.g = k.j()),
                                k = h.g;
                            f(h, k ? k.top : -1)
                        }
                        , e);
                    d.resolve(!1)
                }
                )
            }
        }
    }
    function sq(a) {
        return a.ea ? !1 : Y(a.l).wasReactiveAdVisible[8] ? (tq(a, {
            vigs: 1
        }, .1),
        !0) : !1
    }
    function tq(a, b, c) {
        b = b || {};
        a.ca && (b.qid = a.ca);
        a.T && (b.eid = a.T);
        a.g && (b.tsl = Date.now() - a.g);
        a.Y && (b.tslo = Date.now() - a.Y,
        b.tl = a.Da);
        a.J.src && (b.req = a.J.src);
        nk("sci_evt", b, c)
    }
    function uq(a, b) {
        vq(a) && wq(a) && bq(a.j, b) && (a.g = Date.now(),
        xq(a),
        a.ea ? yq(a) : a.da.call(a.l, ()=>zq(a)));
        return !!a.g
    }
    function Aq(a) {
        a.G = !0;
        a.A = !1;
        Wp(a.j, !1);
        a.B && (H(a.l, "orientationchange", a.B),
        a.B = null);
        a.C && (H(a.l, "resize", a.C),
        a.C = null)
    }
    function vq(a) {
        const b = a.l.innerHeight;
        if (!b)
            return !1;
        const c = !Nf(a.l);
        var d = a.l;
        const e = P(d);
        d = Of(d).scrollWidth <= e;
        let f;
        if (c)
            return tq(a, {
                lnd: 1
            }, .1),
            !1;
        if (a.D && (f = lq(a.l, b)) > a.D)
            return tq(a, Object.assign({
                den: f,
                lim: a.D
            }, mq(gq(a.l), a.l.location.hostname)), 1),
            !1;
        d || tq(a, {
            be: 1
        }, .1);
        return !0
    }
    function wq(a) {
        return a.ia ? !0 : oq(I(qq), a.ma, 3600)
    }
    function xq(a) {
        a.B = mk(519, ()=>{
            !a.G && a.A && tq(a, {
                tto: Date.now() - a.g,
                por: Nf(a.l) ? 1 : 0
            }, .1)
        }
        );
        G(a.l, "orientationchange", a.B);
        a.C = mk(520, ()=>{
            a.G || (a.j.D(),
            a.A && tq(a, {
                ttre: Date.now() - a.g
            }, .1))
        }
        );
        G(a.l, "resize", a.C)
    }
    function yq(a) {
        a.za || (a.J.contentWindow.postMessage(JSON.stringify({
            msg_type: "i-view"
        }), "https://googleads.g.doubleclick.net"),
        a.za = !0)
    }
    function zq(a) {
        if (!a.G)
            if (sq(a))
                Aq(a);
            else {
                var b = a.j.j.getBoundingClientRect().top
                  , c = a.l.innerHeight;
                a.j.D();
                .5 <= (c - b) / c && yq(a);
                b < c && (Y(a.l).wasReactiveAdVisible[9] = !0,
                a.ia || pq(I(qq), a.ma, 3600),
                a.Ea = !0);
                0 >= b ? (0 <= a.X && Bq(a),
                tq(a, {
                    sice: !0,
                    vh: c,
                    gvto: b
                }, .1)) : a.da && a.da.call(a.l, ()=>zq(a))
            }
    }
    function Bq(a) {
        a.Y = Date.now();
        a.A = !0;
        a.Da++;
        cq(a.j);
        u.setTimeout(()=>{
            if (a.A) {
                a.A = !1;
                var b = a.j;
                const c = b.j;
                N(c, {
                    top: re(b.A).y + "px"
                });
                N(c, {
                    position: "absolute"
                });
                aq(b)
            }
        }
        , Math.max(0, a.X))
    }
    class Cq extends Co {
        constructor(a, b, c, d, e, f) {
            super(a, b);
            this.ma = f;
            this.ia = d;
            this.G = !1;
            this.T = null;
            this.A = this.ea = this.K = this.la = !1;
            this.Da = this.Y = this.g = 0;
            this.C = this.B = this.ca = null;
            this.da = u.requestAnimationFrame || u.webkitRequestAnimationFrame || u.mozRequestAnimationFrame || u.oRequestAnimationFrame || u.msRequestAnimationFrame;
            this.za = !1;
            this.j = new dq(b,a,e);
            this.Ea = !1;
            this.V = this.X = 0;
            this.L = rc(c, 1, !1);
            this.Ka = lc(c, Wl, 2);
            this.D = 0
        }
        W(a) {
            a["sti-fill"] = b=>{
                rq(this, b)
            }
            ;
            a["i-no"] = ()=>{
                this.K = !1;
                !this.Ea && this.g && Aq(this)
            }
        }
    }
    ;var Dq = class extends An {
        constructor() {
            super(...arguments);
            this.P = !1;
            this.D = null
        }
        C(a) {
            this.P = !!a.enableAma;
            if (a = a.amaConfig)
                try {
                    var b = Xl(a)
                } catch (c) {
                    b = null
                }
            else
                b = null;
            this.D = b;
            return !0
        }
    }
    ;
    class Eq {
        verifyAndProcessConfig(a, b, c) {
            var d = Y(a);
            if (d.wasReactiveAdConfigReceived[9])
                return !1;
            const e = new Dq;
            if (!zn(e, b))
                return !1;
            d.wasReactiveAdConfigReceived[9] = !0;
            if (!e.A && !oq(I(qq), c, 3600))
                return !1;
            b = wd(document, "INS");
            b.className = "adsbygoogle";
            N(b, {
                display: "none"
            });
            a.document.documentElement.appendChild(b);
            c = e.I || {};
            c.google_ad_client = e.j;
            c.google_ad_height = Of(a).clientHeight || 0;
            c.google_ad_width = P(a) || 0;
            c.google_reactive_ad_format = 9;
            d = new Tp;
            var f = e.P;
            if (null != f && "boolean" !== typeof f)
                throw Error(`Expected boolean but got ${ba(f)}: ${f}`);
            d = Zb(d, 1, f);
            e.D && nc(d, 2, e.D);
            a: {
                ob = !0;
                try {
                    var g = JSON.stringify(d.toJSON(), Ob);
                    break a
                } finally {
                    ob = !1
                }
                g = void 0
            }
            c.google_rasc = g;
            e.A && (c.google_adtest = "on");
            wo(b, c, a);
            return !0
        }
    }
    ;var Hq = class extends Co {
        constructor(a, b) {
            super(a, b.l);
            this.g = b
        }
        W(a) {
            a.dismiss = ()=>{
                var b = this.g;
                Fq(b, -30);
                Gq(b, "dismissed")
            }
        }
    }
    ;
    const Iq = (a,b)=>{
        const c = Ld("STYLE", a);
        c.textContent = Zc();
        a?.head.appendChild(c);
        setTimeout(()=>{
            a?.head.removeChild(c)
        }
        , b)
    }
    ;
    var Kq = (a,b,c)=>{
        if (!a.body)
            return null;
        const d = new Jq;
        d.apply(a, b);
        return ()=>{
            var e = c || 0;
            0 < e && Iq(b.document, e);
            O(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.l,
                position: d.A,
                top: d.B
            });
            b.scrollTo(0, d.j)
        }
    }
    ;
    class Jq {
        constructor() {
            this.g = this.B = this.A = this.l = null;
            this.j = 0
        }
        apply(a, b) {
            this.l = a.body.style.overflow;
            this.A = a.body.style.position;
            this.B = a.body.style.top;
            this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.j = R(b);
            O(a.body, "top", -this.j + "px")
        }
    }
    ;function Lq(a, b) {
        const c = a.j;
        if (c)
            if (b) {
                b = a.C;
                if (null == b.g) {
                    var d = b.j;
                    const e = d.g.nextRestrictionId++;
                    d.g.maxZIndexRestrictions[e] = 2147483646;
                    ap(d);
                    b.g = e
                }
                N(c, {
                    display: "block"
                });
                a.B.body && !a.A && (a.A = Kq(a.B, a.g, a.J));
                c.setAttribute("tabindex", "0");
                c.setAttribute("aria-hidden", "false");
                a.B.body.setAttribute("aria-hidden", "true")
            } else
                b = a.C,
                null != b.g && (d = b.j,
                delete d.g.maxZIndexRestrictions[b.g],
                ap(d),
                b.g = null),
                N(c, {
                    display: "none"
                }),
                a.A && (a.A(),
                a.A = null),
                a.B.body.setAttribute("aria-hidden", "false"),
                c.setAttribute("aria-hidden", "true")
    }
    function Mq(a) {
        Lq(a, !1);
        const b = a.j;
        if (b) {
            var c = Nq(a.D, a.G);
            yp(a, d=>{
                N(d, c);
                Uf(d)
            }
            , !0);
            a.l.setAttribute("width", "");
            a.l.setAttribute("height", "");
            O(a.l, c);
            O(a.l, Oq);
            O(b, Pq);
            O(b, {
                background: "transparent"
            });
            N(b, {
                display: "none",
                position: "fixed"
            });
            Uf(b);
            Uf(a.l);
            1 >= ee(a.D) || (O(b, {
                overflow: "scroll",
                "max-width": "100vw"
            }),
            Yd(b))
        }
    }
    class Qq extends zp {
        constructor(a, b, c, d, e=!1) {
            super(a, b, c);
            this.A = null;
            this.B = b.document;
            this.J = d;
            a = new dp(b);
            this.C = new ep(a);
            this.G = e;
            this.D = b
        }
    }
    function Nq(a, b) {
        a = ee(a);
        b = b ? 100 * (1 > a ? 1 : a) : 100;
        return {
            width: `${b}vw`,
            height: `${b}vh`
        }
    }
    var Pq = {
        backgroundColor: "white",
        opacity: "1",
        position: "fixed",
        left: "0px",
        top: "0px",
        margin: "0px",
        padding: "0px",
        display: "none",
        zIndex: "2147483647"
    }
      , Oq = {
        left: "0",
        position: "absolute",
        top: "0"
    };
    var Rq = class extends Qq {
        constructor(a, b, c) {
            var d = I(Oc).l(550718588, Ji.defaultValue);
            super(b, a, c, d, K(Gi));
            Mq(this)
        }
        ea(a) {
            return dh(a)
        }
    }
    ;
    var Sq = class {
        log() {}
    }
    ;
    function Tq() {
        const {promise: a, resolve: b} = new mn;
        return {
            qd: (c,d)=>{
                d?.ports.length && b(new Uq(d.ports[0]))
            }
            ,
            pd: a
        }
    }
    var Uq = class extends V {
        constructor(a) {
            super();
            const {promise: b, resolve: c} = new mn;
            this.promise = b;
            a.onmessage = ()=>c();
            X(this, ()=>{
                a.close()
            }
            )
        }
    }
    ;
    const Vq = ["mousemove", "mousedown", "scroll", "keydown"];
    function Wq(a) {
        let b = null
          , c = null;
        const d = f=>{
            if (b && 3E4 < f.timeStamp - b) {
                var g = {
                    kb: f.timeStamp,
                    Tc: f.timeStamp - b,
                    xd: c
                };
                for (const h of a.j)
                    try {
                        h(g)
                    } catch (k) {}
            }
            b = f.timeStamp
        }
        ;
        for (const f of Vq)
            a.g.addEventListener(f, d);
        let e = null;
        a.g.navigator?.userActivation && a.g.performance?.now && (e = a.g.setInterval(()=>{
            a.g.navigator.userActivation.isActive && (c = a.g.performance.now())
        }
        , 1E3));
        X(a, ()=>{
            for (const f of Vq)
                a.g.removeEventListener(f, d);
            e && a.g.clearInterval(e)
        }
        )
    }
    var Xq = class extends V {
        constructor(a) {
            super();
            this.g = a;
            this.j = [];
            this.l = Hc(()=>{
                Wq(this)
            }
            )
        }
        listen(a) {
            this.l();
            this.j.push(a)
        }
    }
    ;
    function Yq(a) {
        let b = null;
        const c = ({timeStamp: e, isTrusted: f})=>{
            f && (b = e)
        }
          , d = ({timeStamp: e, isTrusted: f})=>{
            if (f) {
                e = {
                    kb: e,
                    ...(b ? {
                        ud: e - b
                    } : null)
                };
                for (const g of a.j)
                    try {
                        g(e)
                    } catch (h) {}
            }
        }
        ;
        a.g.addEventListener("focus", d);
        a.g.addEventListener("blur", c);
        X(a, ()=>{
            a.g.removeEventListener("focus", d);
            a.g.removeEventListener("blur", c)
        }
        )
    }
    var Zq = class extends V {
        constructor(a) {
            super();
            this.g = a;
            this.j = [];
            this.l = Hc(()=>{
                Yq(this)
            }
            )
        }
        listen(a) {
            this.l();
            this.j.push(a)
        }
    }
    ;
    var $q = class extends V {
        constructor(a, b, c, d, e) {
            super();
            this.j = c;
            this.A = d;
            this.l = Math.floor(2147483647 * Nd());
            this.g = (f,g,h={})=>{
                f = Object.assign({
                    etc: this.l,
                    e: f,
                    t: Math.round(g),
                    qqid: this.A,
                    ptt: 9
                }, h);
                Xe(this.j, "eit", f, !0, 1)
            }
            ;
            this.g(1, b);
            for (const f of e)
                switch (f) {
                case 101:
                    b = new Rn(a);
                    b.D.then(h=>void this.g(f, h));
                    W(this, b);
                    break;
                case 102:
                    const g = new Un(a);
                    g.D.then(h=>void this.g(f, h, {
                        tbd: Math.round(g.J || -1)
                    }));
                    W(this, g);
                    break;
                case 103:
                    b = new Zq(a);
                    b.listen(h=>{
                        this.g(f, h.kb, {
                            tsb: h.ud ?? -1
                        })
                    }
                    );
                    W(this, b);
                    break;
                case 104:
                    b = new Xq(a);
                    b.listen(h=>{
                        this.g(f, h.kb, {
                            it: h.Tc,
                            ualta: h.xd ?? -1
                        })
                    }
                    );
                    W(this, b);
                    break;
                case 105:
                    b = new Tn(a),
                    b.listen(h=>{
                        this.g(f, h.kb)
                    }
                    ),
                    W(this, b)
                }
        }
    }
    ;
    function ar(a) {
        var b = new jf;
        b = hc(b, 2, Eb(a.jd), "0");
        b = hc(b, 3, Jb(a.Qc), "");
        b = hc(b, 6, Jb(a.Nc), "");
        b = hc(b, 1, Eb(a.Qd ?? Fe()), "0");
        var c = I(zf).g();
        b = gc(b, 4, c, Cb);
        a.payload && (c = a.payload(),
        nc(b, 7, c));
        a.md && hc(b, 5, Eb(a.md), "0");
        return b
    }
    ;function Z(a) {
        return ar({
            ...a,
            payload: ()=>{
                var b = new gf;
                var c = new ff;
                c = ic(c, 3, ef, Ab(a.H));
                return oc(b, 4, hf, c)
            }
        })
    }
    ;function br(a) {
        a = a.match(Cd);
        const b = a[6];
        return (a[5] || "") + (b ? "?" + b : "") || "/"
    }
    function cr(a, b) {
        b ? a.g = new RegExp("\\b(" + b.join("|").toLowerCase() + ")\\b","ig") : a.g = null
    }
    function dr(a, b, c, d, e) {
        if (!c)
            return !1;
        switch (b.target) {
        case "_top":
        case "_parent":
            break;
        case "":
        case "_self":
            if (e)
                return !1;
            break;
        default:
            return !1
        }
        return !d || er(a, d) && br(c) == a.A ? !1 : !0
    }
    function er(a, b) {
        return b.replace(fr, "") == a.l.replace(fr, "")
    }
    function gr(a, b, c) {
        if (Ha(["data-google-vignette", "data-google-interstitial"], f=>"false" === b.getAttribute(f) || !1))
            return !1;
        const d = b.href
          , e = d && (d.match(Cd)[3] || null);
        if (!dr(a, b, d, e, c))
            return !1;
        a.j = !!e && er(a, e);
        return a.j || !c && !Vk(b) && /^https?:\/\//i.test(d) && !/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d)
    }
    function hr(a, b) {
        if (!b || !a.g)
            return [];
        var c = [];
        $n(b, c, !0, !0);
        b = c.join("");
        b = b.replace(ao, " ").replace(bo, "");
        b = b.replace(co, "");
        b = b.replace(eo, " ");
        " " != b && (b = b.replace(fo, ""));
        if (!b)
            return [];
        a = b.match(a.g);
        b = [];
        for (c = 0; a && c < a.length; c++) {
            const d = a[c].toLowerCase();
            0 <= Da(b, d) || b.push(d)
        }
        return b
    }
    class ir {
        constructor(a) {
            this.g = null;
            this.l = a.match(Cd)[3] || "";
            this.A = br(a);
            this.j = !1
        }
    }
    var fr = /^(www\.|m\.|mobile\.)*/i;
    function jr(a) {
        a.j?.setAttribute("data-vignette-loaded", "true")
    }
    function kr(a) {
        a.G && (nn(a.G).then(()=>{
            jr(a.T);
            a.C.rb || (a.C.rb = Fe())
        }
        ),
        on(a.G).then(()=>void lr(a)),
        pn(a.G).then(()=>void mr(a)))
    }
    function nr(a) {
        a.g.log(578856259, Z, {
            ...a.j,
            H: 41
        });
        if (a.B.ya)
            a.g.log(578856259, Z, {
                ...a.j,
                H: 42
            });
        else {
            a.B.ya = a.M.U(527, c=>{
                or(a, c)
            }
            );
            if (null !== a.B.ya) {
                const c = a.B.ya;
                G(a.l.document, "click", d=>{
                    c(d)
                }
                , Jc)
            }
            var b = a.l.frames;
            for (let c = 0; c < b.length; c++)
                try {
                    a.la(b[c].frameElement) || G(b[c].document, "click", a.B.ya, Jc)
                } catch (d) {}
            a.g.log(578856259, Z, {
                ...a.j,
                H: 43
            })
        }
    }
    function pr(a, b) {
        a.g.log(578856259, Z, {
            ...a.j,
            H: 28
        });
        if (qr(a)) {
            b = 1 === b;
            if (a.L.Lc) {
                let c;
                (c = a.A).nb || (c.nb = !b)
            }
            a.za() ? (a.A.ib = Date.now(),
            Y(a.l).wasReactiveAdVisible[8] = !0,
            b && a.B.ha && (a.A.Kb = a.B.ha.href),
            rr(a),
            a.B.ha && sr(a, a.B.ha.href),
            tr(a),
            G(a.l, "pagehide", a.M.U(528, ()=>{
                ur(a)
            }
            )),
            b && a.ob?.(a.A.ib),
            Lq(a.T, !0),
            a.ma?.Ja(),
            a.g.log(578856259, Z, {
                ...a.j,
                H: 32
            })) : (a.g.log(578856259, Z, {
                ...a.j,
                H: 30
            }),
            b && a.B.ha && (a.g.log(578856259, Z, {
                ...a.j,
                H: 31
            }),
            vr(a, a.B.ha.href)))
        } else
            a.g.log(578856259, Z, {
                ...a.j,
                H: 29
            })
    }
    function lr(a) {
        a.g.log(578856259, Z, {
            ...a.j,
            H: 33
        });
        a.A.nb ? (wr(a) ? (a.g.log(578856259, Z, {
            ...a.j,
            H: 34
        }),
        a.l.history.back()) : (a.g.log(578856259, Z, {
            ...a.j,
            H: 35
        }),
        ur(a)),
        a.g.log(578856259, Z, {
            ...a.j,
            H: 36
        })) : (u.setTimeout(()=>{
            ur(a)
        }
        , 1E3),
        a.A.Kb ? (a.A.Lb && (a.A.Gb = !1),
        vr(a, a.A.Kb)) : a.g.log(578856259, Z, {
            ...a.j,
            H: 37
        }))
    }
    function mr(a) {
        a.g.log(578856259, Z, {
            ...a.j,
            H: 23
        });
        a.C.Wb = !0
    }
    function wr(a) {
        return -1 !== a.l.location.hash.indexOf("google_vignette")
    }
    function ur(a) {
        a.g.log(578856259, Z, {
            ...a.j,
            H: 38
        });
        a.A.ib ? (a.A.Cc = !0,
        a.B.ya && (H(a.l.document, "click", a.B.ya),
        a.B.ya = void 0),
        a.A.Xa && a.A.Xa.parentNode && (a.A.Xa.parentNode.removeChild(a.A.Xa),
        a.A.Xa = void 0),
        a.A.Wa && a.A.Wa.parentNode && (a.A.Wa.parentNode.removeChild(a.A.Wa),
        a.A.Wa = void 0),
        Lq(a.T, !1),
        a.ia(),
        a.g.log(578856259, Z, {
            ...a.j,
            H: 40
        })) : a.g.log(578856259, Z, {
            ...a.j,
            H: 39
        })
    }
    function vr(a, b) {
        a = a.l.location;
        b = Gd(b, Fd) || Xc;
        b instanceof Vc ? b = b instanceof Vc && b.constructor === Vc ? b.g : "type_error:SafeUrl" : b = Hd.test(b) ? b : void 0;
        void 0 !== b && a.replace(b)
    }
    function tr(a) {
        wr(a) || (a.l.location.hash = "google_vignette");
        a.A.Lb = a.M.U(526, ()=>{
            a.g.log(578856259, Z, {
                ...a.j,
                H: 62
            });
            a.A.Gb ? (wr(a) ? (a.g.log(578856259, Z, {
                ...a.j,
                H: 64
            }),
            vr(a, a.B.ha.href)) : ur(a),
            a.g.log(578856259, Z, {
                ...a.j,
                H: 65
            })) : a.g.log(578856259, Z, {
                ...a.j,
                H: 63
            })
        }
        );
        u.setTimeout(ja(G, a.l, "hashchange", a.A.Lb), 0)
    }
    function qr(a, b) {
        a.g.log(578856259, Z, {
            ...a.j,
            H: 10
        });
        var c = Fe();
        const d = Y(a.l).wasReactiveAdVisible[9];
        b = b ? hr(a.D, b) : [];
        const e = a.L.Sc || Rf(a.l)
          , f = a.ea.width < a.ea.height === Nf(a.l);
        if (864E5 <= c - a.Ka)
            return a.g.log(578856259, Z, {
                ...a.j,
                H: 11
            }),
            !1;
        a: switch (a.Y.tag) {
        case 0:
            c = !0;
            break a;
        case 1:
            c = !1;
            break a;
        default:
            c = !1
        }
        if (!c)
            return a.g.log(578856259, Z, {
                ...a.j,
                H: 12
            }),
            !1;
        if (a.C.Wb)
            return a.g.log(578856259, Z, {
                ...a.j,
                H: 13
            }),
            !1;
        if (wr(a))
            return a.g.log(578856259, Z, {
                ...a.j,
                H: 14
            }),
            !1;
        if (!a.C.rb)
            return a.g.log(578856259, Z, {
                ...a.j,
                H: 15
            }),
            !1;
        if (!a.ca && d)
            return a.g.log(578856259, Z, {
                ...a.j,
                H: 16
            }),
            !1;
        a.ca && a.g.log(578856259, Z, {
            ...a.j,
            H: 17
        });
        d && a.g.log(578856259, Z, {
            ...a.j,
            H: 18
        });
        if (b.length)
            return a.g.log(578856259, Z, {
                ...a.j,
                H: 19
            }),
            !1;
        if (!e)
            return a.g.log(578856259, Z, {
                ...a.j,
                H: 20
            }),
            !1;
        if (!f)
            return a.g.log(578856259, Z, {
                ...a.j,
                H: 21
            }),
            !1;
        a.g.log(578856259, Z, {
            ...a.j,
            H: 22
        });
        return !0
    }
    function xr(a, b, c) {
        a = Ld("LINK", a.l.document);
        a.setAttribute("rel", c);
        a.setAttribute("href", b);
        return a
    }
    function sr(a, b) {
        a.A.Xa = xr(a, b, "prerender");
        a.A.Wa = xr(a, b, "prefetch");
        a.l.document.body.appendChild(a.A.Xa);
        a.l.document.body.appendChild(a.A.Wa)
    }
    function yr(a, b) {
        for (b = b.target; b; ) {
            if ("nodeName"in b && "A" === b.nodeName) {
                if (gr(a.D, b, b.ownerDocument !== a.l.document))
                    return b;
                break
            }
            b = "parentElement"in b ? b.parentElement : null
        }
        return null
    }
    function or(a, b) {
        a.g.log(578856259, Z, {
            ...a.j,
            H: 44
        });
        if (b)
            if (b.defaultPrevented)
                a.g.log(578856259, Z, {
                    ...a.j,
                    H: 46
                });
            else if (a.A.ib)
                a.g.log(578856259, Z, {
                    ...a.j,
                    H: 50
                });
            else if (a.A.Kb)
                a.g.log(578856259, Z, {
                    ...a.j,
                    H: 51
                });
            else if (a.I)
                a.g.log(578856259, Z, {
                    ...a.j,
                    H: 47
                });
            else if (a.B.ha)
                a.g.log(578856259, Z, {
                    ...a.j,
                    H: 52
                });
            else {
                var c = yr(a, b);
                c ? qr(a, c) ? (a.B.ha = c,
                de(b),
                b.preventDefault = ()=>b && (b.preventDefaultTriggered = !0),
                u.setTimeout(y(a.hb, a, b), 0),
                a.g.log(578856259, Z, {
                    ...a.j,
                    H: 53
                })) : a.g.log(578856259, Z, {
                    ...a.j,
                    H: 49
                }) : a.g.log(578856259, Z, {
                    ...a.j,
                    H: 48
                })
            }
        else
            a.g.log(578856259, Z, {
                ...a.j,
                H: 45
            })
    }
    function rr(a) {
        a.gb || (a.G ? u.IntersectionObserver || a.G.Qb.postMessage(JSON.stringify({
            eventType: "visible",
            googMsgType: "fullscreen"
        }), "*") : (a.J?.contentWindow).postMessage(JSON.stringify({
            msg_type: "i-view"
        }), "*"))
    }
    var zr = class extends Bo {
        constructor(a, b, c, d, e, f, g, h, k) {
            var l = new Sq
              , m = {
                Nc: window.location.href,
                Qc: "adsense",
                jd: 0
            };
            super(a, b, c, e, {
                fullscreenApi: h.vc,
                heavyAdInterventionResponse: h.Rc
            });
            this.T = d;
            this.ea = f;
            this.L = h;
            this.g = l;
            this.j = m;
            this.Ka = Fe();
            this.ca = "true" === g["i-fvs"];
            this.qb = g.qid;
            this.D = new ir(a.location.href);
            this.gb = "true" === g.iobs && "IntersectionObserver"in this.l;
            cr(this.D, g.stop_word?.split(";") ?? null);
            this.G = this.L.vc ? sn(a, b.contentWindow, c, e, this.L.zb) : null;
            this.C = {
                Wb: !1
            };
            this.B = {};
            this.Y = {
                tag: 0
            };
            this.A = {
                ce: !0,
                Cc: !1,
                nb: !1,
                Gb: !0
            };
            kr(this);
            nr(this);
            k.size && (b = new mn,
            b.promise.then(n=>{
                this.A.ib || this.I || pr(this, n)
            }
            ),
            this.ma = new Vn(a,k,b),
            W(this, this.ma));
            if (h.Tb?.length && (k = Ge(a))) {
                const n = new $q(a,k,e,this.qb,h.Tb);
                W(this, n);
                this.ob = q=>{
                    n.g(2, q - Ie(a))
                }
            }
        }
        W(a, b) {
            a["i-blur"] = ()=>{
                this.g.log(578856259, Z, {
                    ...this.j,
                    H: 27
                });
                this.A.nb = !0;
                this.A.Lb && (this.A.Gb = !0)
            }
            ;
            a["i-no"] = c=>{
                this.g.log(578856259, Z, {
                    ...this.j,
                    H: 26
                });
                this.Y = {
                    tag: 1,
                    de: c.i_tslv ? c.i_tslv : void 0
                }
            }
            ;
            if (b.heavyAdInterventionResponse) {
                const c = wc(b.heavyAdInterventionResponse);
                if (c) {
                    const {qd: d, pd: e} = Tq();
                    a["i-hai-aux"] = d;
                    e.then(f=>{
                        W(this, f);
                        f.promise.then(()=>c())
                    }
                    )
                }
            }
            b.fullscreenApi || (a["i-adframe-load"] = ()=>{
                jr(this.T);
                this.C.rb || (this.C.rb = Fe())
            }
            ,
            a["i-dismiss"] = ()=>{
                lr(this)
            }
            ,
            a.i_iif = ()=>{
                mr(this)
            }
            )
        }
        ta() {
            this.g.log(578856259, Z, {
                ...this.j,
                H: 24
            });
            super.ta();
            wr(this) && vr(this, this.B.ha.href);
            this.B.ya && (H(this.l.document, "click", this.B.ya),
            this.B.ya = void 0);
            this.g.log(578856259, Z, {
                ...this.j,
                H: 25
            })
        }
        ia() {}
        la() {
            return !1
        }
        hb(a) {
            this.g.log(578856259, Z, {
                ...this.j,
                H: 54
            });
            this.A.ib ? this.g.log(578856259, Z, {
                ...this.j,
                H: 56
            }) : this.I ? this.g.log(578856259, Z, {
                ...this.j,
                H: 57
            }) : this.B.ha ? a.preventDefaultTriggered ? (this.g.log(578856259, Z, {
                ...this.j,
                H: 59
            }),
            this.B.ha = void 0) : gr(this.D, this.B.ha, this.B.ha.ownerDocument !== this.l.document) ? qr(this) ? (pr(this, 1),
            this.g.log(578856259, Z, {
                ...this.j,
                H: 61
            })) : (this.g.log(578856259, Z, {
                ...this.j,
                H: 60
            }),
            vr(this, this.B.ha.href)) : (this.g.log(578856259, Z, {
                ...this.j,
                H: 55
            }),
            vr(this, this.B.ha.href)) : this.g.log(578856259, Z, {
                ...this.j,
                H: 58
            })
        }
        za() {
            return !0
        }
    }
    ;
    function Ar(a, b) {
        b = b || a.l.document;
        if (!b.getElementById("vignette-style-id")) {
            var c = zd(pd(b), "STYLE");
            c.id = "vignette-style-id";
            c.textContent = "a.google_vignette_inst {border:1px solid #000;color:#6c12b9}";
            b.head.appendChild(c);
            a.K.push(c)
        }
    }
    function Br(a, b, c) {
        let d = 0;
        for (let e = b.links.length; 0 <= e; e--) {
            const f = b.links[e];
            f && (f.classList.remove("google_vignette_inst"),
            gr(a.D, f, c) && !hr(a.D, f).length && (d++,
            f.classList.add("google_vignette_inst")))
        }
        return d
    }
    var Cr = class extends zr {
        constructor(a, b, c, d, e, f, g, h) {
            var k = jk;
            const l = [];
            K(Li) && 0 === Ud() && l.push(101);
            K(Oi) && l.push(102);
            K(Ni) && l.push(103);
            K(Ki) && l.push(104);
            K(Mi) && l.push(105);
            const m = new Set([2]);
            K(Hi) && m.add(3);
            K(Ii) && m.add(4);
            super(a, b, k, new Rq(a,b,e), ik, d, h, {
                vc: !0,
                Tb: l,
                Lc: !0,
                zb: {
                    td: 1,
                    version: "m202402200101"
                },
                Sc: K(Gi),
                Rc: null
            }, m);
            this.K = [];
            this.V = 0;
            this.Da = f;
            this.da = Rj(this.l.location, "google_ia_debug");
            this.Ea = c;
            this.fb = g;
            this.da && (this.X(),
            this.V = u.setInterval(y(this.X, this), 5E3))
        }
        ia() {
            if (this.da) {
                for (let b = 0; b < this.K.length; ++b) {
                    var a = this.K[b];
                    (a = a.ownerNode || a.owningElement || a) && a.parentNode && a.parentNode.removeChild(a)
                }
                this.K = [];
                this.V && u.clearInterval(this.V)
            }
        }
        X() {
            let a = Br(this, this.l.document, !1);
            Ar(this);
            var b = this.l.frames;
            for (let c = 0; c < b.length; c++)
                try {
                    a += Br(this, b[c].document, !0),
                    Ar(this, b[c].document)
                } catch (d) {}
            b = wn(this.l, 1);
            null != b && b.setLinksInstrumented(a)
        }
        za() {
            return this.Ea || pq(I(qq), this.Da, this.fb)
        }
        la(a) {
            return /aswift_[0-9]+/.test(a.id)
        }
    }
    ;
    function Dr(a) {
        const b = a.j.document.createElement("span")
          , c = Math.round((Er(a) - 50) / 2);
        N(b, {
            background: "#FAFAFA",
            position: "absolute",
            left: c + "px",
            right: c + "px",
            top: Fr(a) + 5 + "px",
            "box-shadow": "rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px"
        });
        b.className = `${a.l}-side-rail-dismiss-btn`;
        b.appendChild(Gr(a));
        const d = ()=>{
            a.D()
        }
        ;
        G(b, "click", d);
        X(a, ()=>H(b, "click", d));
        return b
    }
    function Fr(a) {
        return Number(ve(a.g).height || a.g.height)
    }
    function Er(a) {
        return Number(ve(a.g).width || a.g.width)
    }
    function Gr(a) {
        var b = a.j.document;
        const c = b.createElementNS("http://www.w3.org/2000/svg", "svg");
        N(c, {
            position: "absolute",
            top: "0px",
            display: "block",
            width: "50px",
            height: "30px",
            "margin-top": "-5px",
            transform: "none",
            "pointer-events": "initial"
        });
        var d = b.createElementNS("http://www.w3.org/2000/svg", "defs")
          , e = b.createElementNS("http://www.w3.org/2000/svg", "filter");
        a = `${a.l}-side-rail-drop-shadow`;
        e.setAttribute("id", a);
        e.setAttribute("filterUnits", "userSpaceOnUse");
        e.setAttribute("color-interpolation-filters", "sRGB");
        var f = b.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer");
        f.setAttribute("in", "SourceAlpha");
        f.setAttribute("result", "TransferredAlpha");
        var g = b.createElementNS("http://www.w3.org/2000/svg", "feFuncR");
        g.setAttribute("type", "discrete");
        g.setAttribute("tableValues", "0.5");
        f.appendChild(g);
        g = b.createElementNS("http://www.w3.org/2000/svg", "feFuncG");
        g.setAttribute("type", "discrete");
        g.setAttribute("tableValues", "0.5");
        f.appendChild(g);
        g = b.createElementNS("http://www.w3.org/2000/svg", "feFuncB");
        g.setAttribute("type", "discrete");
        g.setAttribute("tableValues", "0.5");
        f.appendChild(g);
        e.appendChild(f);
        f = b.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        f.setAttribute("in", "TransferredAlpha");
        f.setAttribute("stdDeviation", "2");
        e.appendChild(f);
        f = b.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        f.setAttribute("dx", "0");
        f.setAttribute("dy", "0");
        f.setAttribute("result", "offsetblur");
        e.appendChild(f);
        f = b.createElementNS("http://www.w3.org/2000/svg", "feMerge");
        f.appendChild(b.createElementNS("http://www.w3.org/2000/svg", "feMergeNode"));
        g = b.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
        g.setAttribute("in", "SourceGraphic");
        f.appendChild(g);
        e.appendChild(f);
        d.appendChild(e);
        c.appendChild(d);
        d = b.createElementNS("http://www.w3.org/2000/svg", "path");
        d.setAttribute("d", "M5,5 L5,17 A8,8 0 0,0 13,25 L37,25 A8,8 0 0,0 45,17 L45,5 Z");
        d.setAttribute("stroke", "#FAFAFA");
        d.setAttribute("stroke-width", "1");
        d.setAttribute("fill", "#FAFAFA");
        d.style.setProperty("filter", `url(#${a})`);
        c.appendChild(d);
        d = b.createElementNS("http://www.w3.org/2000/svg", "rect");
        d.setAttribute("x", "0");
        d.setAttribute("y", "0");
        d.setAttribute("width", "50");
        d.setAttribute("height", "5");
        d.style.setProperty("fill", "#FAFAFA");
        c.appendChild(d);
        d = b.createElementNS("http://www.w3.org/2000/svg", "g");
        d.setAttribute("stroke", "#616161");
        d.setAttribute("stroke-width", "2px");
        d.setAttribute("stroke-linecap", "square");
        e = b.createElementNS("http://www.w3.org/2000/svg", "line");
        e.setAttribute("x1", "18");
        e.setAttribute("y1", "18");
        e.setAttribute("x2", "25");
        e.setAttribute("y2", "12");
        d.appendChild(e);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "25");
        b.setAttribute("y1", "12");
        b.setAttribute("x2", "32");
        b.setAttribute("y2", "18");
        d.appendChild(b);
        c.appendChild(d);
        return c
    }
    var Hr = class extends V {
        constructor(a, b, c, d, e) {
            super();
            this.g = a;
            this.j = b;
            this.A = c;
            this.l = d;
            this.D = e;
            a = this.j.document.createElement("span");
            a.className = `${this.l}-side-rail-edge`;
            N(a, {
                background: "#FAFAFA",
                position: "absolute",
                left: "0px",
                top: Fr(this) + "px",
                width: Er(this) + "px",
                height: "5px",
                "box-shadow": "rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px"
            });
            this.B = a;
            this.C = Dr(this);
            this.A.appendChild(this.B);
            this.A.appendChild(this.C)
        }
    }
    ;
    function Gq(a, b) {
        "dismissed" !== a.A && (a.A = b,
        a.j.setAttribute("data-side-rail-status", a.A))
    }
    function Ir(a, b) {
        if ("dismissed" === a.A)
            var c = !1;
        else {
            c = a.j;
            var d = vo({
                R: a.g,
                Uc: !1,
                nd: 0,
                position: a.position,
                O: a.g.innerWidth,
                N: a.g.innerHeight,
                Sa: new Set([c]),
                minWidth: a.C.width + 15,
                minHeight: a.C.height + 35,
                M: a.M,
                Ta: a.Ta
            });
            if (d) {
                var e = Math.round(d.width - a.C.width - 15);
                a.B = Math.min(a.B ?? e, e);
                a.offsetY = Math.round(d.offsetY);
                N(c, {
                    margin: "0px",
                    padding: "0px",
                    position: "fixed",
                    [a.position]: a.B + "px",
                    top: a.offsetY + "px",
                    transition: "all 500ms ease-in",
                    overflow: "visible"
                });
                a.G || N(c, {
                    "z-index": "2147483647"
                });
                c = !0
            } else
                c = !1
        }
        c ? Jr(a, b) : Fq(a, b)
    }
    function Fq(a, b=0) {
        "displayed" === a.A && (N(a.j, {
            transition: "all 500ms ease-in",
            opacity: "0",
            top: a.offsetY + b + "px"
        }),
        clearTimeout(a.D),
        a.D = setTimeout(()=>{
            Gq(a, "idle");
            N(a.j, {
                display: "none"
            })
        }
        , 500))
    }
    function Jr(a, b=0) {
        "idle" === a.A && (N(a.j, {
            transition: "",
            display: "block",
            opacity: "0",
            top: a.offsetY - b + "px"
        }),
        clearTimeout(a.D),
        a.D = setTimeout(()=>{
            Gq(a, "displayed");
            N(a.j, {
                transition: "all 500ms ease-in",
                opacity: "1",
                top: a.offsetY + "px"
            })
        }
        , 10))
    }
    var Kr = class extends zp {
        constructor(a, b, c, d, e, f, g) {
            super(a, b, c);
            this.C = e;
            this.M = f;
            this.G = g;
            this.Ta = !1;
            this.A = "idle";
            this.offsetY = this.D = 0;
            this.B = null;
            this.J = 0;
            this.position = 3 === d ? "left" : "right";
            new Hr(a,b,c,this.position,()=>{
                Fq(this, -30);
                Gq(this, "dismissed")
            }
            );
            Gq(this, "idle");
            N(c, {
                display: "none"
            });
            const h = f.U(273, ()=>{
                Ir(this)
            }
            );
            G(a, "load", h);
            X(this, ()=>H(a, "load", h));
            const k = f.U(267, ()=>{
                this.B = null;
                Ir(this)
            }
            );
            G(b, "resize", k);
            X(this, ()=>H(b, "resize", k));
            const l = f.U(268, Ic(()=>{
                const m = R(this.g);
                Ir(this, this.C.height / 3 * Math.sign(this.J - m));
                this.J = m
            }
            ));
            G(b, "scroll", l, Kc);
            X(this, ()=>H(b, "scroll", l));
            this.G && cp(this.G, m=>{
                N(c, {
                    "z-index": String(m || 2147483647)
                })
            }
            );
            this.Ta && (uo(b, ()=>void Ir(this)),
            X(this, ()=>{
                const m = Y(b);
                m.g?.disconnect();
                m.g = null;
                m.j.length = 0
            }
            ))
        }
    }
    ;
    var Lr = class {
        constructor(a) {
            this.g = a
        }
        verifyAndProcessConfig(a, b) {
            if (3 !== this.g && 4 !== this.g)
                return !1;
            const c = new An;
            if (!zn(c, b))
                return !1;
            b = a.document.createElement("ins");
            b.className = "adsbygoogle";
            a.document.body.appendChild(b);
            const d = c.I || {};
            d.google_ad_client = c.j;
            d.google_ad_width = c.B;
            d.google_ad_height = c.l;
            d.google_reactive_ad_format = this.g;
            wo(b, d, a);
            return !0
        }
    }
    ;
    var Mr = class extends An {
        constructor() {
            super(...arguments);
            this.D = 86400
        }
        C(a) {
            a.capIntervalMinutes && (this.D = 60 * a.capIntervalMinutes);
            return !0
        }
    }
    ;
    var Nr = class {
        verifyAndProcessConfig(a, b) {
            var c = Y(a);
            if (c.wasReactiveAdConfigReceived[8])
                return !1;
            const d = new Mr;
            if (!zn(d, b))
                return !1;
            c.wasReactiveAdConfigReceived[8] = !0;
            b = Ld("INS");
            b.className = "adsbygoogle";
            N(b, {
                display: "none"
            });
            a.document.documentElement.appendChild(b);
            c = d.I || {};
            c.google_ad_client = d.j;
            c.google_ad_width = d.B;
            c.google_ad_height = d.l;
            c.google_reactive_ad_format = 8;
            c.vfcs = d.D;
            d.g && (c.google_reactive_fill_message = d.g);
            d.A && (c.google_adtest = "on");
            wo(b, c, a);
            return !0
        }
    }
    ;
    class Kn {
        configProcessorForAdFormat(a) {
            switch (a) {
            case 1:
            case 2:
                return new zo(a);
            case 3:
            case 4:
                return new Lr(a);
            case 8:
                return I(Nr);
            case 9:
                return I(Eq);
            default:
                return null
            }
        }
        createAdSlot(a, b, c, d, e) {
            a: {
                var f = b.google_reactive_ad_format;
                switch (f) {
                case 1:
                case 2:
                    e = a && Rj(a.location, "google_anchor_debug");
                    if (2 === f || e)
                        e = Cn({
                            qc: 0,
                            Rb: a.innerWidth,
                            hc: 3,
                            rc: 0,
                            Sb: Math.min(Math.round(a.innerWidth / 320 * 50), In) + 15,
                            ic: 3
                        }),
                        e = null != En(new Gn(a), e) ? "bottom" : "top";
                    else {
                        e = a.innerWidth;
                        var g = a.innerHeight;
                        f = Math.min(Math.round(a.innerWidth / 320 * 50), In) + 15;
                        const h = Cn({
                            qc: 0,
                            Rb: e,
                            hc: 3,
                            rc: g - f,
                            Sb: g,
                            ic: 3
                        });
                        25 < f && h.push({
                            x: e - 25,
                            y: g - 25
                        });
                        e = null != En(new Gn(a), h) ? "top" : "bottom"
                    }
                    c = new Sp(c,a,e,d);
                    new Lo(a,c,b.google_reactive_fill_message,b.gdvucrm);
                    break a;
                case 3:
                case 4:
                    new Hq(a,new Kr(c,a,d,f,new jd(b.google_ad_width,b.google_ad_height),jk,new dp(a)));
                    break a;
                case 8:
                    new Cr(a,c,"on" === b.google_adtest,new jd(b.google_ad_width,b.google_ad_height),d,e,b.vfcs,b.google_reactive_fill_message);
                    break a;
                case 9:
                    f = b.google_rasc;
                    if (void 0 === f || null === f)
                        g = null;
                    else
                        try {
                            g = Up(f)
                        } catch (h) {
                            nk("rasf_fsi_ama", {}, .1),
                            g = null
                        }
                    g = g || new Tp;
                    new Cq(a,c,g,"on" === b.google_adtest,d,e)
                }
            }
        }
    }
    ;function Or() {
        var a = window;
        return "on" === u.google_adtest || "on" === u.google_adbreak_test || a.location.host.endsWith("h5games.usercontent.goog") ? a.document.querySelector('meta[name="h5-games-eids"]')?.getAttribute("content")?.split(",").map(b=>Math.floor(Number(b))).filter(b=>!isNaN(b) && 0 < b) || [] : []
    }
    ;class Pr {
    }
    ;function Qr() {
        var a = u.ggeac || (u.ggeac = {});
        yf(I(zf), a);
        Rr(a);
        I(Pr);
        I(Oc).g()
    }
    function Rr(a) {
        const b = I(Oc);
        b.j = (c,d)=>xf(5, a, ()=>!1)(c, d, 1);
        b.l = (c,d)=>xf(6, a, ()=>0)(c, d, 1);
        b.A = (c,d)=>xf(7, a, ()=>"")(c, d, 1);
        b.B = (c,d)=>xf(8, a, ()=>[])(c, d, 1);
        b.g = ()=>{
            xf(15, a, ()=>{}
            )(1)
        }
    }
    ;function Sr({Ic: a, od: b}) {
        return a || ("dev" === b ? "dev" : "")
    }
    ;function Tr(a) {
        jk.Mb(b=>{
            b.shv = String(a);
            b.mjsv = Sr({
                Ic: "m202402200101",
                od: a
            });
            const c = I(zf).g()
              , d = Or();
            b.eid = c.concat(d).join(",")
        }
        )
    }
    ;var Ur = "undefined" === typeof sttc ? void 0 : sttc;
    function Vr() {
        var a = jk;
        try {
            return uc(Ur, Ze),
            new tn(JSON.parse(Ur))
        } catch (b) {
            a.Ua(838, b instanceof Error ? b : Error(String(b)), void 0, c=>{
                c.jspb = String(Ur)
            }
            )
        }
        return new tn
    }
    ;lk(210, ()=>{
        const a = new wf;
        try {
            wb(c=>{
                var d = new nf;
                var e = new mf;
                try {
                    var f = window;
                    if ("number" !== typeof f.goog_pvsid)
                        try {
                            var g = Object
                              , h = g.defineProperty
                              , k = Math.random;
                            var l = Math.floor(k() * 2 ** 52);
                            h.call(g, f, "goog_pvsid", {
                                value: l,
                                configurable: !1
                            })
                        } catch (r) {}
                    hc(e, 1, Eb(Number(f.goog_pvsid) || -1), "0")
                } catch (r) {}
                try {
                    var m = I(zf).g();
                    gc(e, 2, m, Cb)
                } catch (r) {}
                try {
                    hc(e, 3, Jb(window.document.URL), "")
                } catch (r) {}
                d = nc(d, 2, e);
                e = new lf;
                e = hc(e, 1, Ab(1195), 0);
                try {
                    var n = Ze(c?.name) ? c.name : "Unknown error";
                    hc(e, 2, Jb(n), "")
                } catch (r) {}
                try {
                    var q = Ze(c?.message) ? c.message : `Caught ${c}`;
                    hc(e, 3, Jb(q), "")
                } catch (r) {}
                try {
                    const r = Ze(c?.stack) ? c.stack : Error().stack;
                    r && gc(e, 4, r.split(/\n\s*/), Ib)
                } catch (r) {}
                c = nc(d, 1, e);
                n = new kf;
                try {
                    hc(n, 1, Jb("m202402200101"), "")
                } catch {}
                oc(c, 6, of, n);
                hc(c, 5, Eb(1), "0");
                qf(a, c)
            }
            )
        } catch (c) {}
        const b = Vr();
        Tr(qc(b, 2) ?? "");
        yn(rc(b, 6));
        Qr();
        Jn()
    }
    );
}
).call(this, "[2021,\"r20240221\",\"r20110914\",null,null,null,null,\".google.com.pe\",null,null,null,null,null,null,null,null,null,-1,[44759876,44759927]]");
