(function(sttc) {
    var window = this;
    if (window.googletag && googletag.evalScripts) {
        googletag.evalScripts();
    }
    if (window.googletag && googletag._loaded_)
        return;
    var n, aa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    , ca = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }, da = ca(this), ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x"), t = {}, fa = {}, u = function(a, b, c) {
        if (!c || null != a) {
            c = fa[b];
            if (null == c)
                return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    }, v = function(a, b, c) {
        if (b)
            a: {
                var d = a.split(".");
                a = 1 === d.length;
                var e = d[0], f;
                !a && e in t ? f = t : f = da;
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f))
                        break a;
                    f = f[g]
                }
                d = d[d.length - 1];
                c = ea && "es6" === c ? f[d] : null;
                b = b(c);
                null != b && (a ? ba(t, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (void 0 === fa[d] && (a = 1E9 * Math.random() >>> 0,
                fa[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d),
                ba(f, fa[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
    };
    v("Symbol", function(a) {
        if (a)
            return a;
        var b = function(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.g
        }
        ;
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
          , d = 0
          , e = function(f) {
            if (this instanceof e)
                throw new TypeError("Symbol is not a constructor");
            return new b(c + (f || "") + "_" + d++,f)
        };
        return e
    }, "es6");
    v("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = (0,
        t.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ha(aa(this))
                }
            })
        }
        return a
    }, "es6");
    var ha = function(a) {
        a = {
            next: a
        };
        a[u(t.Symbol, "iterator")] = function() {
            return this
        }
        ;
        return a
    }
      , ia = function(a) {
        return a.raw = a
    }
      , w = function(a) {
        var b = "undefined" != typeof t.Symbol && u(t.Symbol, "iterator") && a[u(t.Symbol, "iterator")];
        if (b)
            return b.call(a);
        if ("number" == typeof a.length)
            return {
                next: aa(a)
            };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }
      , y = function(a) {
        if (!(a instanceof Array)) {
            a = w(a);
            for (var b, c = []; !(b = a.next()).done; )
                c.push(b.value);
            a = c
        }
        return a
    }
      , z = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
      , ja = ea && "function" == typeof u(Object, "assign") ? u(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    z(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    v("Object.assign", function(a) {
        return a || ja
    }, "es6");
    var ka = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , la;
    if (ea && "function" == typeof Object.setPrototypeOf)
        la = Object.setPrototypeOf;
    else {
        var ma;
        a: {
            var na = {
                a: !0
            }
              , oa = {};
            try {
                oa.__proto__ = na;
                ma = oa.a;
                break a
            } catch (a) {}
            ma = !1
        }
        la = ma ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var pa = la
      , A = function(a, b) {
        a.prototype = ka(b.prototype);
        a.prototype.constructor = a;
        if (pa)
            pa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.nb = b.prototype
    }
      , ra = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    };
    v("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;
                d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    v("WeakMap", function(a) {
        function b() {}
        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
            if (!a || !Object.seal)
                return !1;
            try {
                var g = Object.seal({})
                  , h = Object.seal({})
                  , k = new a([[g, 2], [h, 3]]);
                if (2 != k.get(g) || 3 != k.get(h))
                    return !1;
                k.delete(g);
                k.set(h, 4);
                return !k.has(g) && 4 == k.get(h)
            } catch (l) {
                return !1
            }
        }())
            return a;
        var d = "$jscomp_hidden_" + Math.random()
          , e = 0
          , f = function(g) {
            this.g = (e += Math.random() + 1).toString();
            if (g) {
                g = w(g);
                for (var h; !(h = g.next()).done; )
                    h = h.value,
                    this.set(h[0], h[1])
            }
        };
        f.prototype.set = function(g, h) {
            if (!c(g))
                throw Error("Invalid WeakMap key");
            if (!z(g, d)) {
                var k = new b;
                ba(g, d, {
                    value: k
                })
            }
            if (!z(g, d))
                throw Error("WeakMap key fail: " + g);
            g[d][this.g] = h;
            return this
        }
        ;
        f.prototype.get = function(g) {
            return c(g) && z(g, d) ? g[d][this.g] : void 0
        }
        ;
        f.prototype.has = function(g) {
            return c(g) && z(g, d) && z(g[d], this.g)
        }
        ;
        f.prototype.delete = function(g) {
            return c(g) && z(g, d) && z(g[d], this.g) ? delete g[d][this.g] : !1
        }
        ;
        return f
    }, "es6");
    v("Map", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !u(a.prototype, "entries") || "function" != typeof Object.seal)
                return !1;
            try {
                var h = Object.seal({
                    x: 4
                })
                  , k = new a(w([[h, "s"]]));
                if ("s" != k.get(h) || 1 != k.size || k.get({
                    x: 4
                }) || k.set({
                    x: 4
                }, "t") != k || 2 != k.size)
                    return !1;
                var l = u(k, "entries").call(k)
                  , m = l.next();
                if (m.done || m.value[0] != h || "s" != m.value[1])
                    return !1;
                m = l.next();
                return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
            } catch (q) {
                return !1
            }
        }())
            return a;
        var b = new t.WeakMap
          , c = function(h) {
            this[0] = {};
            this[1] = f();
            this.size = 0;
            if (h) {
                h = w(h);
                for (var k; !(k = h.next()).done; )
                    k = k.value,
                    this.set(k[0], k[1])
            }
        };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.u ? l.u.value = k : (l.u = {
                next: this[1],
                D: this[1].D,
                head: this[1],
                key: h,
                value: k
            },
            l.list.push(l.u),
            this[1].D.next = l.u,
            this[1].D = l.u,
            this.size++);
            return this
        }
        ;
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.u && h.list ? (h.list.splice(h.index, 1),
            h.list.length || delete this[0][h.id],
            h.u.D.next = h.u.next,
            h.u.next.D = h.u.D,
            h.u.head = null,
            this.size--,
            !0) : !1
        }
        ;
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].D = f();
            this.size = 0
        }
        ;
        c.prototype.has = function(h) {
            return !!d(this, h).u
        }
        ;
        c.prototype.get = function(h) {
            return (h = d(this, h).u) && h.value
        }
        ;
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        }
        ;
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        }
        ;
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        }
        ;
        c.prototype.forEach = function(h, k) {
            for (var l = u(this, "entries").call(this), m; !(m = l.next()).done; )
                m = m.value,
                h.call(k, m[1], m[0], this)
        }
        ;
        c.prototype[u(t.Symbol, "iterator")] = u(c.prototype, "entries");
        var d = function(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g,
            b.set(k, l)) : l = "p_" + k;
            var m = h[0][l];
            if (m && z(h[0], l))
                for (h = 0; h < m.length; h++) {
                    var q = m[h];
                    if (k !== k && q.key !== q.key || k === q.key)
                        return {
                            id: l,
                            list: m,
                            index: h,
                            u: q
                        }
                }
            return {
                id: l,
                list: m,
                index: -1,
                u: void 0
            }
        }
          , e = function(h, k) {
            var l = h[1];
            return ha(function() {
                if (l) {
                    for (; l.head != h[1]; )
                        l = l.D;
                    for (; l.next != l.head; )
                        return l = l.next,
                        {
                            done: !1,
                            value: k(l)
                        };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }
          , f = function() {
            var h = {};
            return h.D = h.next = h.head = h
        }
          , g = 0;
        return c
    }, "es6");
    v("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    }, "es6");
    v("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    v("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return u(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    v("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return u(Number, "isInteger").call(Number, b) && Math.abs(b) <= u(Number, "MAX_SAFE_INTEGER")
        }
    }, "es6");
    v("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b)
                return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    }, "es6");
    v("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                z(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    v("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    v("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || u(Object, "is").call(Object, f, b))
                    return !0
            }
            return !1
        }
    }, "es7");
    var sa = function(a, b, c) {
        if (null == a)
            throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    v("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== sa(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    var ta = function(a, b) {
        a instanceof String && (a += "");
        var c = 0
          , d = !1
          , e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
        e[u(t.Symbol, "iterator")] = function() {
            return e
        }
        ;
        return e
    };
    v("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return ta(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    v("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ta(this, function(b) {
                return b
            })
        }
    }, "es6");
    v("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ta(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    v("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            }
            ;
            var e = []
              , f = "undefined" != typeof t.Symbol && u(t.Symbol, "iterator") && b[u(t.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done; )
                    e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length,
                g = 0; g < f; g++)
                    e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    v("Set", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !u(a.prototype, "entries") || "function" != typeof Object.seal)
                return !1;
            try {
                var c = Object.seal({
                    x: 4
                })
                  , d = new a(w([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                    x: 4
                }) != d || 2 != d.size)
                    return !1;
                var e = u(d, "entries").call(d)
                  , f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c)
                    return !1;
                f = e.next();
                return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (g) {
                return !1
            }
        }())
            return a;
        var b = function(c) {
            this.g = new t.Map;
            if (c) {
                c = w(c);
                for (var d; !(d = c.next()).done; )
                    this.add(d.value)
            }
            this.size = this.g.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        }
        ;
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        }
        ;
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        }
        ;
        b.prototype.has = function(c) {
            return this.g.has(c)
        }
        ;
        b.prototype.entries = function() {
            return u(this.g, "entries").call(this.g)
        }
        ;
        b.prototype.values = function() {
            return u(this.g, "values").call(this.g)
        }
        ;
        b.prototype.keys = u(b.prototype, "values");
        b.prototype[u(t.Symbol, "iterator")] = u(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        }
        ;
        return b
    }, "es6");
    v("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                z(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    v("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = sa(this, b, "startsWith")
              , e = d.length
              , f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; )
                if (d[c++] != b[g++])
                    return !1;
            return g >= f
        }
    }, "es6");
    v("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = sa(this, null, "repeat");
            if (0 > b || 1342177279 < b)
                throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b; )
                if (b & 1 && (d += c),
                b >>>= 1)
                    c += c;
            return d
        }
    }, "es6");
    v("globalThis", function(a) {
        return a || da
    }, "es_2020");
    v("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = sa(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? u(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
    var B = this || self
      , ua = function(a) {
        a = a.split(".");
        for (var b = B, c = 0; c < a.length; c++)
            if (b = b[a[c]],
            null == b)
                return null;
        return b
    }
      , va = function(a, b, c) {
        a = a.split(".");
        c = c || B;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    var wa = function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
      , ya = function(a, b) {
        var c = 0;
        a = wa(String(a)).split(".");
        b = wa(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || ""
              , g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length)
                    break;
                c = xa(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || xa(0 == f[2].length, 0 == g[2].length) || xa(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }
      , xa = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var za, Aa = ua("CLOSURE_FLAGS"), Ba = Aa && Aa[610401301];
    za = null != Ba ? Ba : !1;
    var Ca, Da = B.navigator;
    Ca = Da ? Da.userAgentData || null : null;
    function Ea(a) {
        return za ? Ca ? Ca.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    }
    function C(a) {
        var b;
        a: {
            if (b = B.navigator)
                if (b = b.userAgent)
                    break a;
            b = ""
        }
        return -1 != b.indexOf(a)
    }
    ;function Fa() {
        return za ? !!Ca && 0 < Ca.brands.length : !1
    }
    function Ga() {
        return Fa() ? Ea("Chromium") : (C("Chrome") || C("CriOS")) && !(Fa() ? 0 : C("Edge")) || C("Silk")
    }
    ;var Ha = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    }
      , Ia = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    function Ja(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    ;var Ka = function(a) {
        Ka[" "](a);
        return a
    };
    Ka[" "] = function() {}
    ;
    var La = Fa() ? !1 : C("Trident") || C("MSIE");
    !C("Android") || Ga();
    Ga();
    C("Safari") && (Ga() || (Fa() ? 0 : C("Coast")) || (Fa() ? 0 : C("Opera")) || (Fa() ? 0 : C("Edge")) || (Fa() ? Ea("Microsoft Edge") : C("Edg/")) || Fa() && Ea("Opera"));
    var Ma = {}
      , Na = null
      , Pa = function(a) {
        var b = [];
        Oa(a, function(c) {
            b.push(c)
        });
        return b
    }
      , Oa = function(a, b) {
        function c(k) {
            for (; d < a.length; ) {
                var l = a.charAt(d++)
                  , m = Na[l];
                if (null != m)
                    return m;
                if (!/^[\s\xa0]*$/.test(l))
                    throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        Qa();
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
      , Qa = function() {
        if (!Na) {
            Na = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Ma[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Na[f] && (Na[f] = e)
                }
            }
        }
    };
    var Ra = "undefined" !== typeof Uint8Array
      , Sa = !La && "function" === typeof btoa;
    function Ta() {
        return "function" === typeof BigInt
    }
    ;var D = 0
      , Ua = 0;
    function Va(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = w(Wa(c, a)),
        b = c.next().value,
        a = c.next().value,
        c = b);
        D = c >>> 0;
        Ua = a >>> 0
    }
    function Xa(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (2097151 >= b)
            var c = "" + (4294967296 * b + a);
        else
            Ta() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215,
            b = b >> 16 & 65535,
            a = (a & 16777215) + 6777216 * c + 6710656 * b,
            c += 8147497 * b,
            b *= 2,
            1E7 <= a && (c += Math.floor(a / 1E7),
            a %= 1E7),
            1E7 <= c && (b += Math.floor(c / 1E7),
            c %= 1E7),
            c = b + Ya(c) + Ya(a));
        return c
    }
    function Ya(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }
    function Za() {
        var a = D
          , b = Ua;
        b & 2147483648 ? Ta() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = w(Wa(a, b)),
        a = b.next().value,
        b = b.next().value,
        a = "-" + Xa(a, b)) : a = Xa(a, b);
        return a
    }
    function Wa(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    }
    ;function $a(a) {
        return Array.prototype.slice.call(a)
    }
    ;function ab(a) {
        return "function" === typeof t.Symbol && "symbol" === typeof (0,
        t.Symbol)() ? (0,
        t.Symbol)() : a
    }
    var bb = ab()
      , cb = ab("0di");
    var db = bb ? function(a, b) {
        a[bb] |= b
    }
    : function(a, b) {
        void 0 !== a.g ? a.g |= b : Object.defineProperties(a, {
            g: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }
    ;
    function F(a, b, c) {
        return c ? a | b : a & ~b
    }
    var G = bb ? function(a) {
        return a[bb] | 0
    }
    : function(a) {
        return a.g | 0
    }
      , H = bb ? function(a) {
        return a[bb]
    }
    : function(a) {
        return a.g
    }
      , K = bb ? function(a, b) {
        a[bb] = b;
        return a
    }
    : function(a, b) {
        void 0 !== a.g ? a.g = b : Object.defineProperties(a, {
            g: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return a
    }
    ;
    function eb(a, b) {
        K(b, (a | 0) & -14591)
    }
    function fb(a, b) {
        K(b, (a | 34) & -14557)
    }
    function gb(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    }
    ;var hb = {}
      , ib = {};
    function jb(a) {
        return !(!a || "object" !== typeof a || a.g !== ib)
    }
    function kb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var lb;
    function mb(a, b, c) {
        if (!Array.isArray(a) || a.length)
            return !1;
        var d = G(a);
        if (d & 1)
            return !0;
        if (!(b && (Array.isArray(b) ? u(b, "includes").call(b, c) : b.has(c))))
            return !1;
        K(a, d | 1);
        return !0
    }
    var nb, ob = [];
    K(ob, 55);
    nb = Object.freeze(ob);
    function pb(a) {
        if (a & 2)
            throw Error();
    }
    Object.freeze(new function() {}
    );
    Object.freeze(new function() {}
    );
    var qb;
    function rb(a) {
        if (qb)
            throw Error("");
        qb = function(b) {
            B.setTimeout(function() {
                a(b)
            }, 0)
        }
    }
    function sb(a) {
        a = Error(a);
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = "warning";
        if (qb)
            try {
                qb(a)
            } catch (b) {
                throw b.cause = a,
                b;
            }
        return a
    }
    ;function tb(a) {
        if ("boolean" !== typeof a) {
            var b = typeof a;
            throw Error("Expected boolean but got " + ("object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null") + ": " + a);
        }
        return a
    }
    var ub = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    function vb(a) {
        var b = typeof a;
        return "number" === b ? u(Number, "isFinite").call(Number, a) : "string" !== b ? !1 : ub.test(a)
    }
    function L(a) {
        if (null != a) {
            if (!u(Number, "isFinite").call(Number, a))
                throw sb("enum");
            a |= 0
        }
        return a
    }
    function wb(a) {
        if ("number" !== typeof a)
            throw sb("int32");
        if (!u(Number, "isFinite").call(Number, a))
            throw sb("int32");
        return a | 0
    }
    function xb(a) {
        return null == a ? a : wb(a)
    }
    function yb(a) {
        if (null == a)
            return a;
        if ("string" === typeof a) {
            if (!a)
                return;
            a = +a
        }
        if ("number" === typeof a)
            return u(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    }
    function zb(a) {
        if (null == a)
            return a;
        if ("string" === typeof a) {
            if (!a)
                return;
            a = +a
        }
        if ("number" === typeof a)
            return u(Number, "isFinite").call(Number, a) ? a >>> 0 : void 0
    }
    function Ab(a) {
        if (null != a) {
            var b = !!b;
            if (!vb(a))
                throw sb("int64");
            "string" === typeof a ? a = Bb(a) : b ? (a = u(Math, "trunc").call(Math, a),
            u(Number, "isSafeInteger").call(Number, a) ? a = String(a) : (b = String(a),
            Cb(b) ? a = b : (Va(a),
            a = Za()))) : a = Db(a)
        }
        return a
    }
    function Cb(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    }
    function Db(a) {
        a = u(Math, "trunc").call(Math, a);
        if (!u(Number, "isSafeInteger").call(Number, a)) {
            Va(a);
            var b = D
              , c = Ua;
            if (a = c & 2147483648)
                b = ~b + 1 >>> 0,
                c = ~c >>> 0,
                0 == b && (c = c + 1 >>> 0);
            b = 4294967296 * c + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }
    function Bb(a) {
        var b = u(Math, "trunc").call(Math, Number(a));
        if (u(Number, "isSafeInteger").call(Number, b))
            return String(b);
        b = a.indexOf(".");
        -1 !== b && (a = a.substring(0, b));
        if (!Cb(a)) {
            if (16 > a.length)
                Va(Number(a));
            else if (Ta())
                a = BigInt(a),
                D = Number(a & BigInt(4294967295)) >>> 0,
                Ua = Number(a >> BigInt(32) & BigInt(4294967295));
            else {
                b = +("-" === a[0]);
                Ua = D = 0;
                for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e,
                e += 6)
                    d = Number(a.slice(d, e)),
                    Ua *= 1E6,
                    D = 1E6 * D + d,
                    4294967296 <= D && (Ua += u(Math, "trunc").call(Math, D / 4294967296),
                    Ua >>>= 0,
                    D >>>= 0);
                b && (b = w(Wa(D, Ua)),
                a = b.next().value,
                b = b.next().value,
                D = a,
                Ua = b)
            }
            a = Za()
        }
        return a
    }
    function Eb(a) {
        if ("string" !== typeof a)
            throw Error();
        return a
    }
    function M(a) {
        if (null != a && "string" !== typeof a)
            throw Error();
        return a
    }
    function Fb(a) {
        return null == a || "string" === typeof a ? a : void 0
    }
    function Gb(a, b, c) {
        if (null != a && "object" === typeof a && a.Y === hb)
            return a;
        if (Array.isArray(a)) {
            var d = G(a)
              , e = d;
            0 === e && (e |= c & 32);
            e |= c & 2;
            e !== d && K(a, e);
            return new b(a)
        }
    }
    ;var Hb;
    function Ib(a, b) {
        Hb = b;
        a = new a(b);
        Hb = void 0;
        return a
    }
    function N(a, b, c) {
        null == a && (a = Hb);
        Hb = void 0;
        if (null == a) {
            var d = 96;
            c ? (a = [c],
            d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a))
                throw Error();
            d = G(a);
            if (d & 64)
                return a;
            d |= 64;
            if (c && (d |= 512,
            c !== a[0]))
                throw Error();
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1;
                    if (kb(c[f])) {
                        d |= 256;
                        b = f - (+!!(d & 512) - 1);
                        if (1024 <= b)
                            throw Error();
                        d = d & -16760833 | (b & 1023) << 14;
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, e - (+!!(d & 512) - 1));
                    if (1024 < b)
                        throw Error();
                    d = d & -16760833 | (b & 1023) << 14
                }
            }
        }
        K(a, d);
        return a
    }
    ;function Jb(a, b) {
        return Kb(b)
    }
    function Kb(a) {
        switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a)
                if (Array.isArray(a)) {
                    if (mb(a, void 0, 0))
                        return
                } else if (Ra && null != a && a instanceof Uint8Array) {
                    if (Sa) {
                        for (var b = "", c = 0, d = a.length - 10240; c < d; )
                            b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        a = btoa(b)
                    } else {
                        void 0 === b && (b = 0);
                        Qa();
                        b = Ma[b];
                        c = Array(Math.floor(a.length / 3));
                        d = b[64] || "";
                        for (var e = 0, f = 0; e < a.length - 2; e += 3) {
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
                        a = c.join("")
                    }
                    return a
                }
        }
        return a
    }
    ;function Lb(a, b, c) {
        a = $a(a);
        var d = a.length
          , e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++)
            a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (var f in e)
                Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }
    function Mb(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a))
                a = mb(a, void 0, 0) ? void 0 : e && G(a) & 2 ? a : Nb(a, b, c, void 0 !== d, e);
            else if (kb(a)) {
                var f = {}, g;
                for (g in a)
                    Object.prototype.hasOwnProperty.call(a, g) && (f[g] = Mb(a[g], b, c, d, e));
                a = f
            } else
                a = b(a, d);
            return a
        }
    }
    function Nb(a, b, c, d, e) {
        var f = d || c ? G(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = $a(a);
        for (var g = 0; g < a.length; g++)
            a[g] = Mb(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }
    function Ob(a) {
        return a.Y === hb ? a.toJSON() : Kb(a)
    }
    ;function Pb(a, b, c) {
        c = void 0 === c ? fb : c;
        if (null != a) {
            if (Ra && a instanceof Uint8Array)
                return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = G(a);
                if (d & 2)
                    return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? K(a, (d | 34) & -12293) : Nb(a, Pb, d & 4 ? fb : c, !0, !0)
            }
            a.Y === hb && (c = a.h,
            d = H(c),
            a = d & 2 ? a : Ib(a.constructor, Qb(c, d, !0)));
            return a
        }
    }
    function Qb(a, b, c) {
        var d = c || b & 2 ? fb : eb
          , e = !!(b & 32);
        a = Lb(a, b, function(f) {
            return Pb(f, e, d)
        });
        db(a, 32 | (c ? 2 : 0));
        return a
    }
    function Rb(a) {
        var b = a.h
          , c = H(b);
        return c & 2 ? Ib(a.constructor, Qb(b, c, !1)) : a
    }
    ;var Tb = function(a, b) {
        a = a.h;
        return Sb(a, H(a), b)
    }
      , Sb = function(a, b, c, d) {
        if (-1 === c)
            return null;
        if (c >= gb(b)) {
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
      , P = function(a, b, c) {
        var d = a.h
          , e = H(d);
        pb(e);
        O(d, e, b, c);
        return a
    };
    function O(a, b, c, d, e) {
        var f = gb(b);
        if (c >= f || e) {
            var g = b;
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
            g !== b && K(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1],
        c in a && delete a[c]);
        return b
    }
    function Vb(a, b, c) {
        a = a.h;
        var d = H(a)
          , e = 2 & d ? 1 : 2
          , f = Wb(a, d, b)
          , g = G(f);
        if (!(4 & g)) {
            if (4 & g || Object.isFrozen(f))
                f = $a(f),
                g = Xb(g, d, !1),
                d = O(a, d, b, f);
            for (var h = 0, k = 0; h < f.length; h++) {
                var l = c(f[h]);
                null != l && (f[k++] = l)
            }
            k < h && (f.length = k);
            g = Yb(g, d);
            g = F(g, 20, !0);
            g = F(g, 4096, !1);
            g = F(g, 8192, !1);
            K(f, g);
            2 & g && Object.freeze(f)
        }
        Zb(g) || (c = g,
        (h = 1 === e) ? g = F(g, 2, !0) : g = F(g, 32, !1),
        g !== c && K(f, g),
        h && Object.freeze(f));
        2 === e && Zb(g) && (f = $a(f),
        g = Xb(g, d, !1),
        K(f, g),
        O(a, d, b, f));
        return f
    }
    function Wb(a, b, c) {
        a = Sb(a, b, c);
        return Array.isArray(a) ? a : nb
    }
    function Yb(a, b) {
        var c = !1;
        0 === a && (a = Xb(a, b, c));
        return a = F(a, 1, !0)
    }
    function Zb(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }
    function $b(a, b, c, d) {
        var e = a.h
          , f = H(e);
        pb(f);
        if (null == c)
            return O(e, f, b),
            a;
        var g = G(c)
          , h = g
          , k = !!(2 & g) || Object.isFrozen(c)
          , l = !k && !1;
        if (!(4 & g))
            for (g = 21,
            k && (c = $a(c),
            h = 0,
            g = Xb(g, f, !0)),
            k = 0; k < c.length; k++)
                c[k] = d(c[k]);
        l && (c = $a(c),
        h = 0,
        g = Xb(g, f, !0));
        g !== h && K(c, g);
        O(e, f, b, c);
        return a
    }
    function Q(a, b, c, d) {
        var e = a.h
          , f = H(e);
        pb(f);
        O(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    }
    var bc = function(a, b, c, d) {
        var e = a.h
          , f = H(e);
        pb(f);
        (c = ac(e, f, c)) && c !== b && null != d && (f = O(e, f, c));
        O(e, f, b, d);
        return a
    }
      , cc = function(a, b, c) {
        a = a.h;
        return ac(a, H(a), b) === c ? c : -1
    }
      , dc = function(a, b) {
        a = a.h;
        return ac(a, H(a), b)
    };
    function ac(a, b, c) {
        for (var d = 0, e = 0; e < c.length; e++) {
            var f = c[e];
            null != Sb(a, b, f) && (0 !== d && (b = O(a, b, d)),
            d = f)
        }
        return d
    }
    function ec(a, b, c, d) {
        a = a.h;
        var e = H(a)
          , f = Sb(a, e, c, d);
        b = Gb(f, b, e);
        b !== f && null != b && O(a, e, c, b, d);
        return b
    }
    var fc = function(a, b) {
        (a = ec(a, b, 1, !1)) ? b = a : (a = b[cb]) ? b = a : (a = new b,
        db(a.h, 34),
        b = b[cb] = a);
        return b
    }
      , R = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = ec(a, b, c, d);
        if (null == b)
            return b;
        a = a.h;
        var e = H(a);
        if (!(e & 2)) {
            var f = Rb(b);
            f !== b && (b = f,
            O(a, e, c, b, d))
        }
        return b
    }
      , S = function(a, b, c) {
        a = a.h;
        var d = H(a)
          , e = d
          , f = !(2 & d)
          , g = !!(2 & e)
          , h = g ? 1 : 2;
        d = 1 === h;
        h = 2 === h;
        f && (f = !g);
        g = Wb(a, e, c);
        var k = G(g)
          , l = !!(4 & k);
        if (!l) {
            k = Yb(k, e);
            var m = g
              , q = e
              , p = !!(2 & k);
            p && (q = F(q, 2, !0));
            for (var r = !p, J = !0, x = 0, E = 0; x < m.length; x++) {
                var I = Gb(m[x], b, q);
                if (I instanceof b) {
                    if (!p) {
                        var qa = !!(G(I.h) & 2);
                        r && (r = !qa);
                        J && (J = qa)
                    }
                    m[E++] = I
                }
            }
            E < x && (m.length = E);
            k = F(k, 4, !0);
            k = F(k, 16, J);
            k = F(k, 8, r);
            K(m, k);
            p && Object.freeze(m)
        }
        b = !!(8 & k) || d && !g.length;
        if (f && !b) {
            Zb(k) && (g = $a(g),
            k = Xb(k, e, !1),
            e = O(a, e, c, g));
            b = g;
            f = k;
            for (m = 0; m < b.length; m++)
                k = b[m],
                q = Rb(k),
                k !== q && (b[m] = q);
            f = F(f, 8, !0);
            f = F(f, 16, !b.length);
            K(b, f);
            k = f
        }
        Zb(k) || (b = k,
        d ? k = F(k, !g.length || 16 & k && (!l || 32 & k) ? 2 : 2048, !0) : k = F(k, 32, !1),
        k !== b && K(g, k),
        d && Object.freeze(g));
        h && Zb(k) && (g = $a(g),
        k = Xb(k, e, !1),
        K(g, k),
        O(a, e, c, g));
        return g
    }
      , gc = function(a, b, c) {
        null == c && (c = void 0);
        return P(a, b, c)
    }
      , hc = function(a, b, c, d) {
        null == d && (d = void 0);
        return bc(a, b, c, d)
    }
      , ic = function(a, b, c) {
        var d = a.h
          , e = H(d);
        pb(e);
        if (null == c)
            return O(d, e, b),
            a;
        for (var f = G(c), g = f, h = !!(2 & f) || !!(2048 & f), k = h || Object.isFrozen(c), l = !0, m = !0, q = 0; q < c.length; q++) {
            var p = c[q];
            h || (p = !!(G(p.h) & 2),
            l && (l = !p),
            m && (m = p))
        }
        h || (f = F(f, 5, !0),
        f = F(f, 8, l),
        f = F(f, 16, m));
        k && f !== g && (c = $a(c),
        g = 0,
        f = Xb(f, e, !0));
        f !== g && K(c, f);
        O(d, e, b, c);
        return a
    };
    function Xb(a, b, c) {
        a = F(a, 2, !!(2 & b));
        a = F(a, 32, !!(32 & b) && c);
        return a = F(a, 2048, !1)
    }
    function jc(a, b) {
        return null != a ? a : b
    }
    var kc = function(a, b) {
        a = Tb(a, b);
        return jc(null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0, !1)
    }
      , lc = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return jc(yb(Tb(a, b)), c)
    }
      , mc = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return jc(zb(Tb(a, b)), c)
    }
      , nc = function(a, b) {
        var c = void 0 === c ? 0 : c;
        a = Tb(a, b);
        var d;
        null == a ? d = a : vb(a) ? "number" === typeof a ? d = Db(a) : d = Bb(a) : d = void 0;
        return jc(d, c)
    }
      , oc = function(a, b) {
        var c = void 0 === c ? 0 : c;
        a = a.h;
        var d = H(a)
          , e = Sb(a, d, b);
        var f = null == e || "number" === typeof e ? e : "NaN" === e || "Infinity" === e || "-Infinity" === e ? Number(e) : void 0;
        null != f && f !== e && O(a, d, b, f);
        return jc(f, c)
    }
      , T = function(a, b) {
        return jc(Fb(Tb(a, b)), "")
    }
      , U = function(a, b) {
        var c = 0;
        c = void 0 === c ? 0 : c;
        a = Tb(a, b);
        a = null == a ? a : u(Number, "isFinite").call(Number, a) ? a | 0 : void 0;
        return jc(a, c)
    };
    var V = function(a, b, c) {
        this.h = N(a, b, c)
    };
    V.prototype.toJSON = function() {
        return lb ? pc(this, this.h, !1) : pc(this, Nb(this.h, Ob, void 0, void 0, !1), !0)
    }
    ;
    var qc = function(a) {
        lb = !0;
        try {
            return JSON.stringify(a.toJSON(), Jb)
        } finally {
            lb = !1
        }
    };
    V.prototype.Y = hb;
    function pc(a, b, c) {
        var d = a.constructor.o
          , e = H(c ? a.h : b);
        a = b.length;
        if (!a)
            return b;
        var f;
        if (kb(c = b[a - 1])) {
            a: {
                var g = c;
                var h = {}, k = !1, l;
                for (l in g)
                    if (Object.prototype.hasOwnProperty.call(g, l)) {
                        var m = g[l];
                        if (Array.isArray(m)) {
                            var q = m;
                            if (mb(m, d, +l) || jb(m) && 0 === m.size)
                                m = null;
                            m != q && (k = !0)
                        }
                        null != m ? h[l] = m : k = !0
                    }
                if (k) {
                    for (var p in h) {
                        g = h;
                        break a
                    }
                    g = null
                }
            }
            g != c && (f = !0);
            a--
        }
        for (l = +!!(e & 512) - 1; 0 < a; a--) {
            p = a - 1;
            c = b[p];
            p -= l;
            if (!(null == c || mb(c, d, p) || jb(c) && 0 === c.size))
                break;
            var r = !0
        }
        if (!f && !r)
            return b;
        b = Array.prototype.slice.call(b, 0, a);
        g && b.push(g);
        return b
    }
    ;function rc() {
        var a = !W(sc).g
          , b = tc();
        if (!a)
            throw Error(b && b() || String(a));
    }
    var uc = void 0;
    function tc() {
        var a = uc;
        uc = void 0;
        return a
    }
    ;function vc(a) {
        return function(b) {
            if (null == b || "" == b)
                b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b))
                    throw Error(void 0);
                db(b, 32);
                b = Ib(a, b)
            }
            return b
        }
    }
    ;var wc = function(a) {
        this.h = N(a)
    };
    A(wc, V);
    wc.o = [6, 4];
    var xc = function(a) {
        this.h = N(a)
    };
    A(xc, V);
    var yc = vc(xc);
    xc.o = [4, 5, 6];
    var Bc = function(a, b) {
        this.g = a === zc && b || "";
        this.i = Ac
    };
    Bc.prototype.toString = function() {
        return this.g
    }
    ;
    var Ac = {}
      , zc = {};
    var Cc = function(a) {
        this.g = a;
        this.defaultValue = !1
    }
      , Dc = function(a) {
        this.g = a;
        this.defaultValue = 0
    };
    var Ec = new Cc(203);
    var Fc = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    };
    var Gc = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    var W = function(a) {
        var b = "V";
        if (a.V && a.hasOwnProperty(b))
            return a.V;
        b = new a;
        return a.V = b
    };
    var Hc = function() {
        var a = {};
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.g = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.s = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.l = function() {}
    };
    function Ic(a) {
        return W(Hc).i(a.g, a.defaultValue)
    }
    function Jc() {
        var a = Kc;
        return W(Hc).j(a.g, a.defaultValue)
    }
    ;function Lc(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    ;var Mc = function(a) {
        this.g = a
    };
    Mc.prototype.toString = function() {
        return this.g + ""
    }
    ;
    var Nc = function(a) {
        return a instanceof Mc && a.constructor === Mc ? a.g : "type_error:TrustedResourceUrl"
    }
      , Oc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
      , Pc = {}
      , Qc = function(a, b, c) {
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
    };
    var Rc = {}
      , Sc = function(a) {
        this.g = a
    };
    Sc.prototype.toString = function() {
        return this.g.toString()
    }
    ;
    var Tc = function() {
        return za && Ca ? !Ca.mobile && (C("iPad") || C("Android") || C("Silk")) : C("iPad") || C("Android") && !C("Mobile") || C("Silk")
    };
    var Uc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$")
      , Vc = function(a) {
        return a ? decodeURI(a) : a
    }
      , Wc = /#|$/
      , Xc = function(a, b) {
        var c = a.search(Wc);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e),
                    !f || 61 == f || 38 == f || 35 == f)
                        break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d)
            return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };
    /* 
 
 SPDX-License-Identifier: Apache-2.0 
*/
    function Yc(a) {
        var b, c;
        return (a = null == (c = (b = a.document).querySelector) ? void 0 : c.call(b, "script[nonce]")) ? a.nonce || a.getAttribute("nonce") || "" : ""
    }
    ;function Zc(a, b) {
        a.src = Nc(b);
        (b = Yc(a.ownerDocument && a.ownerDocument.defaultView || window)) && a.setAttribute("nonce", b)
    }
    ;function $c(a, b) {
        a.write(b instanceof Sc && b.constructor === Sc ? b.g : "type_error:SafeHtml")
    }
    ;var ad = function(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href)
                a: {
                    try {
                        Ka(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
            return b
        } catch (c) {
            return !1
        }
    }
      , bd = function(a) {
        var b = void 0 === b ? !1 : b;
        var c = void 0 === c ? B : c;
        for (var d = 0; c && 40 > d++ && (!b && !ad(c) || !a(c)); )
            a: {
                try {
                    var e = c.parent;
                    if (e && e != c) {
                        c = e;
                        break a
                    }
                } catch (f) {}
                c = null
            }
    }
      , cd = function(a) {
        var b = a;
        bd(function(c) {
            b = c;
            return !1
        });
        return b
    }
      , dd = function(a) {
        return ad(a.top) ? a.top : null
    }
      , ed = function() {
        if (!t.globalThis.crypto)
            return Math.random();
        try {
            var a = new Uint32Array(1);
            t.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }
      , fd = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
      , gd = function(a) {
        var b = a.length;
        if (0 == b)
            return 0;
        for (var c = 305419896, d = 0; d < b; d++)
            c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
      , hd = /^(-?[0-9.]{1,30})$/
      , id = Fc(function() {
        return (za && Ca ? Ca.mobile : !Tc() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"))) ? 2 : Tc() ? 1 : 0
    });
    function jd(a, b) {
        if (a.length && b.head) {
            a = w(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = kd("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    }
    var ld = function(a) {
        if ("number" !== typeof a.goog_pvsid)
            try {
                var b = Object
                  , c = b.defineProperty
                  , d = void 0;
                d = void 0 === d ? Math.random : d;
                var e = Math.floor(d() * Math.pow(2, 52));
                c.call(b, a, "goog_pvsid", {
                    value: e,
                    configurable: !1
                })
            } catch (f) {}
        return Number(a.goog_pvsid) || -1
    }
      , kd = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    function md(a, b) {
        b = void 0 === b ? {} : b;
        a = '<script src="' + nd(Nc(a).toString()) + '"';
        b.async && (a += " async");
        b.Ba && (a += ' custom-element="' + nd(b.Ba) + '"');
        b.defer && (a += " defer");
        b.id && (a += ' id="' + nd(b.id) + '"');
        b.nonce && (a += ' nonce="' + nd(b.nonce) + '"');
        b.type && (a += ' type="' + nd(b.type) + '"');
        return new Sc(a + ">\x3c/script>",Rc)
    }
    function nd(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    ;function od(a) {
        var b = a.split(/\?|#/)
          , c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            Ka: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    }
    function pd(a) {
        var b = ra.apply(1, arguments);
        if (0 === b.length)
            return new Mc(a[0],Pc);
        for (var c = a[0], d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return new Mc(c,Pc)
    }
    function qd(a, b) {
        a = od(Nc(a).toString());
        var c = a.Ka
          , d = c.length ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)),
                d = "&")
            }
        });
        return new Mc(a.path + c + a.hash,Pc)
    }
    ;var rd = {
        bb: 0,
        ab: 1,
        Xa: 2,
        Sa: 3,
        Ya: 4,
        Ta: 5,
        Za: 6,
        Va: 7,
        Wa: 8,
        Ra: 9,
        Ua: 10,
        cb: 11
    };
    var sd = {
        fb: 0,
        gb: 1,
        eb: 2
    };
    var td = function(a) {
        this.h = N(a)
    };
    A(td, V);
    td.prototype.getVersion = function() {
        return lc(this, 2)
    }
    ;
    td.o = [3];
    function ud(a) {
        return Pa(0 !== a.length % 4 ? a + "A" : a).map(function(b) {
            return (n = b.toString(2),
            u(n, "padStart")).call(n, 8, "0")
        }).join("")
    }
    function vd(a) {
        if (!/^[0-1]+$/.test(a))
            throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    }
    function wd(a) {
        if (!/^[0-1]+$/.test(a))
            throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++)
            b.length <= d && b.push(b[d - 1] + b[d - 2]),
            c += parseInt(a[d], 2) * b[d];
        return c
    }
    ;function xd(a) {
        var b = ud(a)
          , c = vd(b.slice(0, 6));
        a = vd(b.slice(6, 12));
        var d = new td;
        c = Q(d, 1, xb(c), 0);
        a = Q(c, 2, xb(a), 0);
        b = b.slice(12);
        c = vd(b.slice(0, 12));
        d = [];
        for (var e = b.slice(12).replace(/0+$/, ""), f = 0; f < c; f++) {
            if (0 === e.length)
                throw Error("Found " + f + " of " + c + " sections [" + d + "] but reached end of input [" + b + "]");
            var g = 0 === vd(e[0]);
            e = e.slice(1);
            var h = yd(e, b)
              , k = 0 === d.length ? 0 : d[d.length - 1];
            k = wd(h) + k;
            e = e.slice(h.length);
            if (g)
                d.push(k);
            else {
                g = yd(e, b);
                h = wd(g);
                for (var l = 0; l <= h; l++)
                    d.push(k + l);
                e = e.slice(g.length)
            }
        }
        if (0 < e.length)
            throw Error("Found " + c + " sections [" + d + "] but has remaining input [" + e + "], entire input [" + b + "]");
        return $b(a, 3, d, wb)
    }
    function yd(a, b) {
        var c = a.indexOf("11");
        if (-1 === c)
            throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    }
    ;var zd = "a".charCodeAt()
      , Ad = Lc(rd)
      , Bd = Lc(sd);
    var Cd = function(a) {
        this.h = N(a)
    };
    A(Cd, V);
    var Dd = function() {
        var a = new Cd;
        return Q(a, 1, Ab(0), "0")
    }
      , Ed = function(a) {
        var b = nc(a, 1);
        a = lc(a, 2);
        return new Date(1E3 * b + a / 1E6)
    };
    var Fd = function(a) {
        if (/[^01]/.test(a))
            throw Error("Input bitstring " + a + " is malformed!");
        this.i = a;
        this.g = 0
    }
      , Id = function(a) {
        var b = X(a, 16);
        return !0 === !!X(a, 1) ? (a = Gd(a),
        a.forEach(function(c) {
            if (c > b)
                throw Error("ID " + c + " is past MaxVendorId " + b + "!");
        }),
        a) : Hd(a, b)
    }
      , Gd = function(a) {
        for (var b = X(a, 12), c = []; b--; ) {
            var d = !0 === !!X(a, 1)
              , e = X(a, 16);
            if (d)
                for (d = X(a, 16); e <= d; e++)
                    c.push(e);
            else
                c.push(e)
        }
        c.sort(function(f, g) {
            return f - g
        });
        return c
    }
      , Hd = function(a, b, c) {
        for (var d = [], e = 0; e < b; e++)
            if (X(a, 1)) {
                var f = e + 1;
                if (c && -1 === c.indexOf(f))
                    throw Error("ID: " + f + " is outside of allowed values!");
                d.push(f)
            }
        return d
    }
      , X = function(a, b) {
        if (a.g + b > a.i.length)
            throw Error("Requested length " + b + " is past end of string.");
        var c = a.i.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    };
    Fd.prototype.skip = function(a) {
        this.g += a
    }
    ;
    var Kd = function(a) {
        try {
            var b = Pa(a.split(".")[0]).map(function(d) {
                return (n = d.toString(2),
                u(n, "padStart")).call(n, 8, "0")
            }).join("")
              , c = new Fd(b);
            b = {};
            b.tcString = a;
            b.gdprApplies = !0;
            c.skip(78);
            b.cmpId = X(c, 12);
            b.cmpVersion = X(c, 12);
            c.skip(30);
            b.tcfPolicyVersion = X(c, 6);
            b.isServiceSpecific = !!X(c, 1);
            b.useNonStandardStacks = !!X(c, 1);
            b.specialFeatureOptins = Jd(Hd(c, 12, Bd), Bd);
            b.purpose = {
                consents: Jd(Hd(c, 24, Ad), Ad),
                legitimateInterests: Jd(Hd(c, 24, Ad), Ad)
            };
            b.purposeOneTreatment = !!X(c, 1);
            b.publisherCC = String.fromCharCode(zd + X(c, 6)) + String.fromCharCode(zd + X(c, 6));
            b.vendor = {
                consents: Jd(Id(c), null),
                legitimateInterests: Jd(Id(c), null)
            };
            return b
        } catch (d) {
            return null
        }
    }
      , Jd = function(a, b) {
        var c = {};
        if (Array.isArray(b) && 0 !== b.length) {
            b = w(b);
            for (var d = b.next(); !d.done; d = b.next())
                d = d.value,
                c[d] = -1 !== a.indexOf(d)
        } else
            for (a = w(a),
            b = a.next(); !b.done; b = a.next())
                c[b.value] = !0;
        delete c[0];
        return c
    };
    var Ld = function(a) {
        this.h = N(a)
    };
    A(Ld, V);
    var Md = function(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Nd = null;
    function Od(a) {
        a = void 0 === a ? B : a;
        return (a = a.performance) && a.now ? a.now() : null
    }
    ;function Pd(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = kd("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests
                      , h = Array.prototype.indexOf.call(g, e, void 0);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            Gc(e, "load", f);
            Gc(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Rd = function(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        fd(a, function(e, f) {
            if (e || 0 === e)
                d += "&" + f + "=" + encodeURIComponent("" + e)
        });
        Qd(d, c)
    }
      , Qd = function(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        var d = void 0 === d ? !1 : d;
        c.fetch ? (b = {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        },
        d && (b.mode = "cors",
        "setAttributionReporting"in XMLHttpRequest.prototype ? b.attributionReporting = {
            eventSourceEligible: "true",
            triggerEligible: "false"
        } : b.headers = {
            "Attribution-Reporting-Eligible": "event-source"
        }),
        c.fetch(a, b)) : Pd(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
    };
    function Sd(a, b) {
        try {
            var c = function(d) {
                var e = {};
                return [(e[d.ya] = d.ua,
                e)]
            };
            return JSON.stringify([a.filter(function(d) {
                return d.W
            }).map(c), b.toJSON(), a.filter(function(d) {
                return !d.W
            }).map(c)])
        } catch (d) {
            return Td(d, b),
            ""
        }
    }
    function Td(a, b) {
        try {
            var c = a instanceof Error ? a : Error(String(a))
              , d = c.toString();
            c.name && -1 == d.indexOf(c.name) && (d += ": " + c.name);
            c.message && -1 == d.indexOf(c.message) && (d += ": " + c.message);
            if (c.stack) {
                var e = c.stack;
                a = d;
                try {
                    -1 == e.indexOf(a) && (e = a + "\n" + e);
                    for (var f; e != f; )
                        f = e,
                        e = e.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                    d = e.replace(RegExp("\n *", "g"), "\n")
                } catch (g) {
                    d = a
                }
            }
            Rd({
                m: d,
                b: U(b, 1) || null,
                v: T(b, 2) || null
            }, "rcs_internal")
        } catch (g) {}
    }
    var Ud = function(a, b) {
        var c = new Ld;
        a = Q(c, 1, L(a), 0);
        b = Q(a, 2, M(b), "");
        a = b.h;
        c = H(a);
        this.j = c & 2 ? b : Ib(b.constructor, Qb(a, c, !0))
    };
    var Vd = function(a) {
        this.h = N(a)
    };
    A(Vd, V);
    var Wd = function(a) {
        this.h = N(a)
    };
    A(Wd, V);
    var Xd = function(a, b) {
        return Q(a, 1, L(b), 0)
    }
      , Yd = function(a, b) {
        return Q(a, 2, L(b), 0)
    };
    var Zd = function(a) {
        this.h = N(a)
    };
    A(Zd, V);
    var $d = [1, 2];
    var ae = function(a) {
        this.h = N(a)
    };
    A(ae, V);
    var be = function(a, b) {
        return gc(a, 1, b)
    }
      , ce = function(a, b) {
        return ic(a, 2, b)
    }
      , de = function(a, b) {
        return $b(a, 4, b, wb)
    }
      , ee = function(a, b) {
        return ic(a, 5, b)
    }
      , fe = function(a, b) {
        return Q(a, 6, L(b), 0)
    };
    ae.o = [2, 4, 5];
    var ge = function(a) {
        this.h = N(a)
    };
    A(ge, V);
    ge.o = [5];
    var he = [1, 2, 3, 4];
    var ie = function(a) {
        this.h = N(a)
    };
    A(ie, V);
    ie.o = [2, 3];
    var je = function(a) {
        this.h = N(a)
    };
    A(je, V);
    je.prototype.getTagSessionCorrelator = function() {
        return nc(this, 2)
    }
    ;
    var le = function(a) {
        var b = new je;
        return hc(b, 4, ke, a)
    }
      , ke = [4, 5, 7, 8];
    var me = function(a) {
        this.h = N(a)
    };
    A(me, V);
    me.o = [3];
    var ne = function(a) {
        this.h = N(a)
    };
    A(ne, V);
    ne.o = [4, 5];
    var oe = function(a) {
        this.h = N(a)
    };
    A(oe, V);
    oe.prototype.getTagSessionCorrelator = function() {
        return nc(this, 1)
    }
    ;
    oe.o = [2];
    var pe = function(a) {
        this.h = N(a)
    };
    A(pe, V);
    var qe = [4, 6];
    var re = function() {
        Ud.apply(this, arguments)
    };
    A(re, Ud);
    var se = function() {
        re.apply(this, arguments)
    };
    A(se, re);
    se.prototype.Pa = function() {
        this.G.apply(this, y(ra.apply(0, arguments).map(function(a) {
            return {
                W: !0,
                ya: 2,
                ua: a.toJSON()
            }
        })))
    }
    ;
    se.prototype.Z = function() {
        this.G.apply(this, y(ra.apply(0, arguments).map(function(a) {
            return {
                W: !0,
                ya: 4,
                ua: a.toJSON()
            }
        })))
    }
    ;
    var te = function(a, b) {
        if (t.globalThis.fetch)
            t.globalThis.fetch(a, {
                method: "POST",
                body: b,
                keepalive: 65536 > b.length,
                credentials: "omit",
                mode: "no-cors",
                redirect: "follow"
            }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var ue = function(a, b, c, d, e, f, g, h) {
        se.call(this, a, b);
        this.J = c;
        this.I = d;
        this.K = e;
        this.L = f;
        this.M = g;
        this.l = h;
        this.g = [];
        this.i = null;
        this.s = !1
    };
    A(ue, se);
    var ve = function(a) {
        null !== a.i && (clearTimeout(a.i),
        a.i = null);
        if (a.g.length) {
            var b = Sd(a.g, a.j);
            a.I(a.J + "?e=1", b);
            a.g = []
        }
    };
    ue.prototype.G = function() {
        var a = ra.apply(0, arguments)
          , b = this;
        try {
            this.M && 65536 <= Sd(this.g.concat(a), this.j).length && ve(this),
            this.l && !this.s && (this.s = !0,
            this.l.g(function() {
                ve(b)
            })),
            this.g.push.apply(this.g, y(a)),
            this.g.length >= this.L && ve(this),
            this.g.length && null === this.i && (this.i = setTimeout(function() {
                ve(b)
            }, this.K))
        } catch (c) {
            Td(c, this.j)
        }
    }
    ;
    var we = function(a, b, c, d, e, f) {
        ue.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", te, void 0 === c ? 1E3 : c, void 0 === d ? 100 : d, (void 0 === e ? !1 : e) && !!t.globalThis.fetch, f)
    };
    A(we, ue);
    var xe = new Cc(501898423)
      , ye = new Dc(523264412)
      , ze = new Dc(24)
      , Kc = new function(a, b) {
        b = void 0 === b ? [] : b;
        this.g = a;
        this.defaultValue = b
    }
    (1934,["As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "A/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U/roYjp4Yau0T3YSuc63vmAs/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]);
    var Ae = function(a) {
        this.h = N(a)
    };
    A(Ae, V);
    var Be = function(a) {
        this.h = N(a)
    };
    A(Be, V);
    var Ce = function(a) {
        this.h = N(a)
    };
    A(Ce, V);
    var De = function(a) {
        this.h = N(a)
    };
    A(De, V);
    var Ee = vc(De);
    De.o = [7];
    var Fe = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    Fe.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.lb;
            d = c.mb || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Ia
        }
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    }
    ;
    Fe.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = wa(d[e]);
            if (0 == f.lastIndexOf(c, 0))
                return f.slice(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    Fe.prototype.isEmpty = function() {
        return !this.g.cookie
    }
    ;
    Fe.prototype.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++)
            e = wa(a[f]),
            d = e.indexOf("="),
            -1 == d ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--)
            c = b[a],
            this.get(c),
            this.set(c, "", {
                Ia: 0,
                path: void 0,
                domain: void 0
            })
    }
    ;
    function Ge(a) {
        a = He(a);
        try {
            var b = a ? Ee(a) : null
        } catch (c) {
            b = null
        }
        return b ? R(b, Ce, 4) || null : null
    }
    function He(a) {
        a = (new Fe(a)).get("FCCDCF", "");
        if (a)
            if (u(a, "startsWith").call(a, "%"))
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
    ;var Ie = function(a) {
        this.g = a;
        this.i = null
    }
      , Ke = function(a) {
        a.__uspapiPostMessageReady || Je(new Ie(a))
    }
      , Je = function(a) {
        a.i = function(b) {
            var c = "string" === typeof b.data;
            try {
                var d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            var e = d.__uspapiCall;
            e && "getUSPData" === e.command && a.g.__uspapi(e.command, e.version, function(f, g) {
                var h = {};
                h.__uspapiReturn = {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                return f
            })
        }
        ;
        a.g.addEventListener("message", a.i);
        a.g.__uspapiPostMessageReady = !0
    };
    Lc(rd).map(function(a) {
        return Number(a)
    });
    Lc(sd).map(function(a) {
        return Number(a)
    });
    var Le = function(a) {
        this.g = a;
        this.i = null
    }
      , Oe = function(a) {
        a.__tcfapiPostMessageReady || Ne(new Le(a))
    }
      , Ne = function(a) {
        a.i = function(b) {
            var c = "string" == typeof b.data;
            try {
                var d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            var e = d.__tcfapiCall;
            !e || "ping" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, function(f, g) {
                var h = {};
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
            }, e.parameter)
        }
        ;
        a.g.addEventListener("message", a.i);
        a.g.__tcfapiPostMessageReady = !0
    };
    var Pe = function(a) {
        this.h = N(a)
    };
    A(Pe, V);
    var Qe = function(a) {
        this.h = N(a)
    };
    A(Qe, V);
    var Re = vc(Qe);
    Qe.o = [2];
    function Se(a, b) {
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
            for (var m = [], q = 0, p = 0; p < l.length / 2; p++)
                m.push(vd(l.slice(q, q + 2))),
                q += 2;
            return m
        }
        function g(l) {
            return l.every(function(m) {
                return 1 === m
            }) ? "Y" : "N"
        }
        function h(l) {
            return l.some(function(m) {
                return 1 === m
            }) ? "Y" : "N"
        }
        if (0 === a.length)
            return null;
        a = a.split(".");
        if (2 < a.length)
            return null;
        a = ud(a[0]);
        var k = vd(a.slice(0, 6));
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
    ;var Te = function(a, b) {
        var c = a.document
          , d = function() {
            if (!a.frames[b])
                if (c.body) {
                    var e = kd("IFRAME", c);
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
        };
        d()
    };
    var We = function(a) {
        this.g = a;
        var b = He(this.g.document);
        try {
            var c = b ? Ee(b) : null
        } catch (e) {
            c = null
        }
        (b = c) ? (c = R(b, Be, 5) || null,
        b = S(b, Ae, 7),
        b = Ue(null != b ? b : []),
        c = {
            oa: c,
            ra: b
        }) : c = {
            oa: null,
            ra: null
        };
        b = c;
        c = Ve(b.ra);
        b = b.oa;
        if (null != b && null != Fb(Tb(b, 2)) && 0 !== T(b, 2).length) {
            var d = void 0 !== ec(b, Cd, 1, !1) ? R(b, Cd, 1) : Dd();
            b = {
                N: T(b, 2),
                T: Ed(d)
            }
        } else
            b = null;
        this.l = b && c ? c.T > b.T ? c.N : b.N : b ? b.N : c ? c.N : null;
        this.i = (c = Ge(a.document)) && null != Fb(Tb(c, 1)) ? T(c, 1) : null;
        this.j = (a = Ge(a.document)) && null != Fb(Tb(a, 2)) ? T(a, 2) : null
    }
      , Ze = function(a) {
        a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new We(a),
        Xe(a),
        Ye(a))
    }
      , Xe = function(a) {
        !a.l || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc",
        Te(a.g, "__uspapiLocator"),
        va("__uspapi", function() {
            return a.G.apply(a, y(ra.apply(0, arguments)))
        }, a.g),
        Ke(a.g))
    };
    We.prototype.G = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.l
        }, !0)
    }
    ;
    var Ue = function(a) {
        a = u(a, "find").call(a, function(b) {
            return 13 === U(b, 1)
        });
        if (null == a ? 0 : null != Fb(Tb(a, 2)))
            try {
                return Re(T(a, 2))
            } catch (b) {}
        return null
    }
      , Ve = function(a) {
        if (null == a || null == Fb(Tb(a, 1)) || 0 === T(a, 1).length || 0 == S(a, Pe, 2).length)
            return null;
        var b = T(a, 1);
        try {
            var c = xd(b.split("~")[0]);
            var d = u(b, "includes").call(b, "~") ? b.split("~").slice(1) : []
        } catch (e) {
            return null
        }
        a = S(a, Pe, 2).reduce(function(e, f) {
            return nc($e(e), 1) > nc($e(f), 1) ? e : f
        });
        c = Vb(c, 3, yb).indexOf(lc(a, 1));
        return -1 === c || c >= d.length ? null : {
            N: Se(d[c], lc(a, 1)),
            T: Ed($e(a))
        }
    }
      , $e = function(a) {
        return void 0 !== ec(a, Cd, 2, !1) ? R(a, Cd, 2) : Dd()
    }
      , Ye = function(a) {
        !a.i || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc",
        Te(a.g, "__tcfapiLocator"),
        a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [],
        va("__tcfapi", function() {
            return a.s.apply(a, y(ra.apply(0, arguments)))
        }, a.g),
        Oe(a.g))
    };
    We.prototype.s = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && (2.2 < b || 1 >= b))
                c(null, !1);
            else
                switch (b = this.g.__tcfapiEventListeners,
                a) {
                case "getTCData":
                    c(null, !1);
                    break;
                case "ping":
                    c({
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
                    a = b.push(c) - 1;
                    this.i ? (d = Kd(this.i),
                    d.addtlConsent = null != this.j ? this.j : void 0,
                    d.cmpStatus = "loaded",
                    d.eventStatus = "tcloaded",
                    null != a && (d.listenerId = a),
                    a = d) : a = null;
                    c(a, !0);
                    break;
                case "removeEventListener":
                    b[d] ? (b[d] = null,
                    c(!0)) : c(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    c(null, !1)
                }
    }
    ;
    var af = function(a) {
        return "string" === typeof a
    };
    var bf = function(a) {
        this.h = N(a)
    };
    A(bf, V);
    bf.o = [2, 8];
    var cf = [3, 4, 5]
      , df = [6, 7];
    function ef(a) {
        return null != a ? !a : a
    }
    function ff(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b)
                return e;
            null == e && (c = !0)
        }
        if (!c)
            return !b
    }
    function gf(a, b) {
        var c = S(a, bf, 2);
        if (!c.length)
            return hf(a, b);
        a = U(a, 1);
        if (1 === a)
            return ef(gf(c[0], b));
        c = Ia(c, function(d) {
            return function() {
                return gf(d, b)
            }
        });
        switch (a) {
        case 2:
            return ff(c, !1);
        case 3:
            return ff(c, !0)
        }
    }
    function hf(a, b) {
        var c = dc(a, cf);
        a: {
            switch (c) {
            case 3:
                var d = U(a, cc(a, cf, 3));
                break a;
            case 4:
                d = U(a, cc(a, cf, 4));
                break a;
            case 5:
                d = U(a, cc(a, cf, 5));
                break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply;
                var f = Vb(a, 8, Fb);
                var g = e.call(b, null, y(f))
            } catch (h) {
                return
            }
            e = U(a, 1);
            if (4 === e)
                return !!g;
            if (5 === e)
                return null != g;
            if (12 === e)
                a = T(a, cc(a, df, 7));
            else
                a: {
                    switch (c) {
                    case 4:
                        a = oc(a, cc(a, df, 6));
                        break a;
                    case 5:
                        a = T(a, cc(a, df, 7));
                        break a
                    }
                    a = void 0
                }
            if (null != a) {
                if (6 === e)
                    return g === a;
                if (9 === e)
                    return null != g && 0 === ya(String(g), a);
                if (null != g)
                    switch (e) {
                    case 7:
                        return g < a;
                    case 8:
                        return g > a;
                    case 12:
                        return af(a) && af(g) && (new RegExp(a)).test(g);
                    case 10:
                        return null != g && -1 === ya(String(g), a);
                    case 11:
                        return null != g && 1 === ya(String(g), a)
                    }
            }
        }
    }
    function jf(a, b) {
        return !a || !(!b || !gf(a, b))
    }
    ;var kf = function(a) {
        this.h = N(a)
    };
    A(kf, V);
    kf.o = [4];
    var lf = function(a) {
        this.h = N(a)
    };
    A(lf, V);
    var mf = function(a) {
        this.h = N(a)
    };
    A(mf, V);
    var nf = vc(mf);
    mf.o = [5];
    var of = [1, 2, 3, 6, 7];
    var pf = function(a, b, c) {
        var d = void 0 === d ? new we(6,"unknown",b) : d;
        this.s = a;
        this.l = c;
        this.i = d;
        this.g = [];
        this.j = 0 < a && ed() < 1 / a
    }
      , rf = function(a, b, c, d, e, f) {
        if (a.j) {
            var g = Yd(Xd(new Wd, b), c);
            b = fe(ce(be(ee(de(new ae, d), e), g), a.g.slice()), f);
            b = le(b);
            a.i.Z(qf(a, b));
            if (1 === f || 3 === f || 4 === f && !a.g.some(function(h) {
                return U(h, 1) === U(g, 1) && U(h, 2) === c
            }))
                a.g.push(g),
                100 < a.g.length && a.g.shift()
        }
    }
      , sf = function(a, b, c, d) {
        if (a.j && a.l) {
            var e = new ie;
            b = ic(e, 2, b);
            c = ic(b, 3, c);
            d && Q(c, 1, xb(d), 0);
            d = new je;
            d = hc(d, 7, ke, c);
            a.i.Z(qf(a, d))
        }
    }
      , tf = function(a, b, c, d) {
        if (a.j) {
            var e = new Vd;
            b = P(e, 1, xb(b));
            c = P(b, 2, xb(c));
            d = P(c, 3, L(d));
            c = new je;
            d = hc(c, 8, ke, d);
            a.i.Z(qf(a, d))
        }
    }
      , qf = function(a, b) {
        var c = Date.now();
        c = u(Number, "isFinite").call(Number, c) ? Math.round(c) : 0;
        b = Q(b, 1, Ab(c), "0");
        c = ld(window);
        b = Q(b, 2, Ab(c), "0");
        return Q(b, 6, Ab(a.s), "0")
    };
    var uf = function() {
        var a = {};
        this.A = (a[3] = {},
        a[4] = {},
        a[5] = {},
        a)
    };
    var vf = /^true$/.test("false");
    function wf(a, b) {
        switch (b) {
        case 1:
            return U(a, cc(a, of, 1));
        case 2:
            return U(a, cc(a, of, 2));
        case 3:
            return U(a, cc(a, of, 3));
        case 6:
            return U(a, cc(a, of, 6));
        default:
            return null
        }
    }
    function xf(a, b) {
        if (!a)
            return null;
        switch (b) {
        case 1:
            return kc(a, 1);
        case 7:
            return T(a, 3);
        case 2:
            return oc(a, 2);
        case 3:
            return T(a, 3);
        case 6:
            return Vb(a, 4, Fb);
        default:
            return null
        }
    }
    var yf = Fc(function() {
        if (!vf)
            return {};
        try {
            var a;
            var b = void 0 === b ? window : b;
            try {
                var c = b.sessionStorage
            } catch (e) {
                c = null
            }
            var d = null == (a = c) ? void 0 : a.getItem("GGDFSSK");
            if (d)
                return JSON.parse(d)
        } catch (e) {}
        return {}
    });
    function zf(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d, f, g;
        W(Af).j[e] = null != (g = null == (f = W(Af).j[e]) ? void 0 : f.add(b)) ? g : (new t.Set).add(b);
        e = yf();
        if (null != e[b])
            return e[b];
        b = Bf(d)[b];
        if (!b)
            return c;
        b = nf(JSON.stringify(b));
        b = Cf(b);
        a = xf(b, a);
        return null != a ? a : c
    }
    function Cf(a) {
        var b = W(uf).A;
        if (b) {
            var c = Ja(S(a, lf, 5), function(f) {
                return jf(R(f, bf, 1), b)
            });
            if (c) {
                var d;
                return null != (d = R(c, kf, 2)) ? d : null
            }
        }
        var e;
        return null != (e = R(a, kf, 4)) ? e : null
    }
    var Af = function() {
        this.i = {};
        this.l = [];
        this.j = {};
        this.g = new t.Map
    };
    function Df(a, b, c) {
        return !!zf(1, a, void 0 === b ? !1 : b, c)
    }
    function Ef(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(zf(2, a, b, c));
        return isNaN(a) ? b : a
    }
    function Ff(a, b, c) {
        b = void 0 === b ? "" : b;
        a = zf(3, a, b, c);
        return "string" === typeof a ? a : b
    }
    function Gf(a, b, c) {
        b = void 0 === b ? [] : b;
        a = zf(6, a, b, c);
        return Array.isArray(a) ? a : b
    }
    function Bf(a) {
        return W(Af).i[a] || (W(Af).i[a] = {})
    }
    function Hf(a, b) {
        var c = Bf(b);
        fd(a, function(d, e) {
            return c[e] = d
        })
    }
    function If(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = []
          , g = [];
        Ha(b, function(h) {
            var k = Bf(h);
            Ha(a, function(l) {
                var m = dc(l, of)
                  , q = wf(l, m);
                if (q) {
                    var p, r, J;
                    var x = null != (J = null == (p = W(Af).g.get(h)) ? void 0 : null == (r = p.get(q)) ? void 0 : r.slice(0)) ? J : [];
                    a: {
                        p = new ge;
                        switch (m) {
                        case 1:
                            bc(p, 1, he, L(q));
                            break;
                        case 2:
                            bc(p, 2, he, L(q));
                            break;
                        case 3:
                            bc(p, 3, he, L(q));
                            break;
                        case 6:
                            bc(p, 4, he, L(q));
                            break;
                        default:
                            m = void 0;
                            break a
                        }
                        $b(p, 5, x, wb);
                        m = p
                    }
                    if (x = m) {
                        var E;
                        x = !(null == (E = W(Af).j[h]) || !E.has(q))
                    }
                    x && f.push(m);
                    if (E = m) {
                        var I;
                        E = !(null == (I = W(Af).g.get(h)) || !I.has(q))
                    }
                    E && g.push(m);
                    e || (I = W(Af),
                    I.g.has(h) || I.g.set(h, new t.Map),
                    I.g.get(h).has(q) || I.g.get(h).set(q, []),
                    d && I.g.get(h).get(q).push(d));
                    k[q] = l.toJSON()
                }
            })
        });
        (f.length || g.length) && sf(c, f, g, null != d ? d : void 0)
    }
    function Jf(a, b) {
        var c = Bf(b);
        Ha(a, function(d) {
            var e = nf(JSON.stringify(d))
              , f = dc(e, of);
            (e = wf(e, f)) && (c[e] || (c[e] = d))
        })
    }
    function Kf() {
        return Ia(u(Object, "keys").call(Object, W(Af).i), function(a) {
            return Number(a)
        })
    }
    function Lf(a) {
        var b = W(Af).l;
        0 <= Array.prototype.indexOf.call(b, a, void 0) || Hf(Bf(4), a)
    }
    ;function Y(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }
    function Mf(a, b, c) {
        return b[a] || c
    }
    function Nf(a) {
        Y(5, Df, a);
        Y(6, Ef, a);
        Y(7, Ff, a);
        Y(8, Gf, a);
        Y(13, Jf, a);
        Y(15, Lf, a)
    }
    function Of(a) {
        Y(4, function(b) {
            W(uf).A = b
        }, a);
        Y(9, function(b, c) {
            var d = W(uf);
            null == d.A[3][b] && (d.A[3][b] = c)
        }, a);
        Y(10, function(b, c) {
            var d = W(uf);
            null == d.A[4][b] && (d.A[4][b] = c)
        }, a);
        Y(11, function(b, c) {
            var d = W(uf);
            null == d.A[5][b] && (d.A[5][b] = c)
        }, a);
        Y(14, function(b) {
            for (var c = W(uf), d = w([3, 4, 5]), e = d.next(); !e.done; e = d.next())
                e = e.value,
                u(Object, "assign").call(Object, c.A[e], b[e])
        }, a)
    }
    function Pf(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    }
    ;var Qf = function() {};
    Qf.prototype.i = function() {}
    ;
    Qf.prototype.g = function() {
        return []
    }
    ;
    var Rf = function(a, b, c) {
        a.i = function(d, e) {
            Mf(2, b, function() {
                return []
            })(d, c, e)
        }
        ;
        a.g = function() {
            return Mf(3, b, function() {
                return []
            })(c)
        }
    };
    function Sf(a, b) {
        try {
            var c = a.split(".");
            a = B;
            for (var d = 0, e; null != a && d < c.length; d++)
                e = a,
                a = a[c[d]],
                "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b)
                return f
        } catch (g) {}
    }
    var Tf = {}
      , Uf = {}
      , Vf = {}
      , Wf = {}
      , Xf = (Wf[3] = (Tf[8] = function(a) {
        try {
            return null != ua(a)
        } catch (b) {}
    }
    ,
    Tf[9] = function(a) {
        try {
            var b = ua(a)
        } catch (c) {
            return
        }
        if (a = "function" === typeof b)
            b = b && b.toString && b.toString(),
            a = "string" === typeof b && -1 != b.indexOf("[native code]");
        return a
    }
    ,
    Tf[10] = function() {
        return window === window.top
    }
    ,
    Tf[6] = function(a) {
        var b = W(Qf).g();
        return 0 <= Array.prototype.indexOf.call(b, Number(a), void 0)
    }
    ,
    Tf[27] = function(a) {
        a = Sf(a, "boolean");
        return void 0 !== a ? a : void 0
    }
    ,
    Tf[60] = function(a) {
        try {
            return !!B.document.querySelector(a)
        } catch (b) {}
    }
    ,
    Tf[69] = function(a) {
        var b = B.document;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(n = c.features(),
        u(n, "includes")).call(n, a))
    }
    ,
    Tf[70] = function(a) {
        var b = B.document;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(n = c.allowedFeatures(),
        u(n, "includes")).call(n, a))
    }
    ,
    Tf),
    Wf[4] = (Uf[3] = function() {
        return id()
    }
    ,
    Uf[6] = function(a) {
        a = Sf(a, "number");
        return void 0 !== a ? a : void 0
    }
    ,
    Uf),
    Wf[5] = (Vf[2] = function() {
        return window.location.href
    }
    ,
    Vf[3] = function() {
        try {
            return window.top.location.hash
        } catch (a) {
            return ""
        }
    }
    ,
    Vf[4] = function(a) {
        a = Sf(a, "string");
        return void 0 !== a ? a : void 0
    }
    ,
    Vf),
    Wf);
    function Yf() {
        var a = void 0 === a ? B : a;
        return a.ggeac || (a.ggeac = {})
    }
    ;var Zf = function(a) {
        this.h = N(a)
    };
    A(Zf, V);
    Zf.prototype.getId = function() {
        return lc(this, 1)
    }
    ;
    Zf.o = [2];
    var $f = function(a) {
        this.h = N(a)
    };
    A($f, V);
    $f.o = [2];
    var ag = function(a) {
        this.h = N(a)
    };
    A(ag, V);
    ag.o = [2];
    var bg = function(a) {
        this.h = N(a)
    };
    A(bg, V);
    var cg = function(a) {
        this.h = N(a)
    };
    A(cg, V);
    cg.o = [1, 4, 2, 3];
    function dg(a) {
        var b = {};
        return eg((b[0] = new t.Map,
        b[1] = new t.Map,
        b[2] = new t.Map,
        b), a)
    }
    function eg(a, b) {
        for (var c = new t.Map, d = w(u(a[1], "entries").call(a[1])), e = d.next(); !e.done; e = d.next()) {
            var f = w(e.value);
            e = f.next().value;
            f = f.next().value;
            f = f[f.length - 1];
            c.set(e, f.xa + f.va * f.wa)
        }
        b = w(b);
        for (d = b.next(); !d.done; d = b.next())
            for (d = d.value,
            e = S(d, $f, 2),
            e = w(e),
            f = e.next(); !f.done; f = e.next())
                if (f = f.value,
                0 !== S(f, Zf, 2).length) {
                    var g = mc(f, 8);
                    if (U(f, 4) && !U(f, 13)) {
                        var h = void 0;
                        g = null != (h = c.get(U(f, 4))) ? h : 0;
                        h = mc(f, 1) * S(f, Zf, 2).length;
                        c.set(U(f, 4), g + h)
                    }
                    h = [];
                    for (var k = 0; k < S(f, Zf, 2).length; k++) {
                        var l = {
                            xa: g,
                            va: mc(f, 1),
                            wa: S(f, Zf, 2).length,
                            Ja: k,
                            qa: U(d, 1),
                            O: f,
                            F: S(f, Zf, 2)[k]
                        };
                        h.push(l)
                    }
                    fg(a[2], U(f, 10), h) || fg(a[1], U(f, 4), h) || fg(a[0], S(f, Zf, 2)[0].getId(), h)
                }
        return a
    }
    function fg(a, b, c) {
        if (!b)
            return !1;
        a.has(b) || a.set(b, []);
        var d;
        (d = a.get(b)).push.apply(d, y(c));
        return !0
    }
    ;function gg(a) {
        a = void 0 === a ? ed() : a;
        return function(b) {
            return gd(b + " + " + a) % 1E3
        }
    }
    ;var hg = [12, 13, 20]
      , ig = function(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = void 0 === d.U ? !1 : d.U;
        d = void 0 === d.Na ? [] : d.Na;
        this.H = a;
        this.B = c;
        this.l = {};
        this.U = e;
        a = {};
        this.g = (a[b] = [],
        a[4] = [],
        a);
        this.i = {};
        this.j = {};
        var f;
        if (null === Nd) {
            Nd = "";
            try {
                b = "";
                try {
                    b = B.top.location.hash
                } catch (g) {
                    b = B.location.hash
                }
                b && (Nd = (f = b.match(/\bdeid=([\d,]+)/)) ? f[1] : "")
            } catch (g) {}
        }
        if (f = Nd)
            for (f = w(f.split(",") || []),
            b = f.next(); !b.done; b = f.next())
                (b = Number(b.value)) && (this.i[b] = !0);
        d = w(d);
        for (f = d.next(); !f.done; f = d.next())
            this.i[f.value] = !0
    }
      , kg = function(a, b, c, d) {
        var e = [], f;
        if (f = 9 !== b)
            a.l[b] ? f = !0 : (a.l[b] = !0,
            f = !1);
        if (f)
            return rf(a.B, b, c, e, [], 4),
            e;
        f = u(hg, "includes").call(hg, b);
        for (var g = [], h = W(uf).A, k = [], l = w([0, 1, 2]), m = l.next(); !m.done; m = l.next()) {
            m = m.value;
            for (var q = w(u(a.H[m], "entries").call(a.H[m])), p = q.next(); !p.done; p = q.next()) {
                var r = w(p.value);
                p = r.next().value;
                r = r.next().value;
                var J = p
                  , x = r;
                p = new Zd;
                r = x.filter(function(Ub) {
                    return Ub.qa === b && !!a.i[Ub.F.getId()] && jf(R(Ub.O, bf, 3), h) && jf(R(Ub.F, bf, 3), h)
                });
                if (r.length)
                    for (p = w(r),
                    r = p.next(); !r.done; r = p.next())
                        k.push(r.value.F);
                else if (!a.U) {
                    r = void 0;
                    2 === m ? (r = d[1],
                    bc(p, 2, $d, L(J))) : r = d[0];
                    var E = void 0
                      , I = void 0;
                    r = null != (I = null == (E = r) ? void 0 : E(String(J))) ? I : 2 === m && 1 === U(x[0].O, 11) ? void 0 : d[0](String(J));
                    if (void 0 !== r) {
                        J = w(x);
                        for (x = J.next(); !x.done; x = J.next())
                            if (x = x.value,
                            x.qa === b) {
                                E = r - x.xa;
                                var qa = x;
                                I = qa.va;
                                var Me = qa.wa;
                                qa = qa.Ja;
                                0 <= E && E < I * Me && E % Me === qa && jf(R(x.O, bf, 3), h) && jf(R(x.F, bf, 3), h) && (E = U(x.O, 13),
                                0 !== E && void 0 !== E && (I = a.j[String(E)],
                                void 0 !== I && I !== x.F.getId() ? tf(a.B, a.j[String(E)], x.F.getId(), E) : a.j[String(E)] = x.F.getId()),
                                k.push(x.F))
                            }
                        0 !== dc(p, $d) && (Q(p, 3, xb(r), 0),
                        g.push(p))
                    }
                }
            }
        }
        d = w(k);
        for (k = d.next(); !k.done; k = d.next())
            k = k.value,
            l = k.getId(),
            e.push(l),
            jg(a, l, f ? 4 : c),
            If(S(k, mf, 2), f ? Kf() : [c], a.B, l);
        rf(a.B, b, c, e, g, 1);
        return e
    }
      , jg = function(a, b, c) {
        a.g[c] || (a.g[c] = []);
        a = a.g[c];
        u(a, "includes").call(a, b) || a.push(b)
    }
      , lg = function(a, b) {
        b = b.map(function(c) {
            return new ag(c)
        }).filter(function(c) {
            return !u(hg, "includes").call(hg, U(c, 1))
        });
        a.H = eg(a.H, b)
    }
      , mg = function(a, b) {
        Y(1, function(c) {
            a.i[c] = !0
        }, b);
        Y(2, function(c, d, e) {
            return kg(a, c, d, e)
        }, b);
        Y(3, function(c) {
            return (a.g[c] || []).concat(a.g[4])
        }, b);
        Y(12, function(c) {
            return void lg(a, c)
        }, b);
        Y(16, function(c, d) {
            return void jg(a, c, d)
        }, b)
    };
    var ng = function() {
        this.g = function() {}
    }
      , og = function(a, b) {
        a.g = Mf(14, b, function() {})
    };
    function pg(a) {
        W(ng).g(a)
    }
    ;var qg, rg, sg, tg, ug, vg;
    function wg(a) {
        var b = a.Ea
          , c = a.A
          , d = a.config
          , e = void 0 === a.Aa ? Yf() : a.Aa
          , f = void 0 === a.na ? 0 : a.na
          , g = void 0 === a.B ? new pf(null != (tg = null == (qg = R(b, bg, 5)) ? void 0 : nc(qg, 2)) ? tg : 0,null != (ug = null == (rg = R(b, bg, 5)) ? void 0 : nc(rg, 4)) ? ug : 0,null != (vg = null == (sg = R(b, bg, 5)) ? void 0 : kc(sg, 3)) ? vg : !1) : a.B;
        a = void 0 === a.H ? dg(S(b, ag, 2)) : a.H;
        e.hasOwnProperty("init-done") ? (Mf(12, e, function() {})(S(b, ag, 2).map(function(h) {
            return h.toJSON()
        })),
        Mf(13, e, function() {})(S(b, mf, 1).map(function(h) {
            return h.toJSON()
        }), f),
        c && Mf(14, e, function() {})(c),
        xg(f, e)) : (mg(new ig(a,f,g,d), e),
        Nf(e),
        Of(e),
        Pf(e),
        xg(f, e),
        If(S(b, mf, 1), [f], g, void 0, !0),
        vf = vf || !(!d || !d.ib),
        pg(Xf),
        c && pg(c))
    }
    function xg(a, b) {
        var c = b = void 0 === b ? Yf() : b;
        Rf(W(Qf), c, a);
        yg(b, a);
        a = b;
        og(W(ng), a);
        W(Hc).l()
    }
    function yg(a, b) {
        var c = W(Hc);
        c.i = function(d, e) {
            return Mf(5, a, function() {
                return !1
            })(d, e, b)
        }
        ;
        c.g = function(d, e) {
            return Mf(6, a, function() {
                return 0
            })(d, e, b)
        }
        ;
        c.s = function(d, e) {
            return Mf(7, a, function() {
                return ""
            })(d, e, b)
        }
        ;
        c.j = function(d, e) {
            return Mf(8, a, function() {
                return []
            })(d, e, b)
        }
        ;
        c.l = function() {
            Mf(15, a, function() {})(b)
        }
    }
    ;var zg = ia(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"])
      , Ag = function() {
        var a = void 0 === a ? "jserror" : a;
        var b = void 0 === b ? .01 : b;
        var c = void 0 === c ? pd(zg) : c;
        this.j = a;
        this.i = b;
        this.g = c
    };
    var Bg = function(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    }
      , Cg = function(a, b) {
        var c = Od(b);
        c && Bg({
            label: a,
            type: 9,
            value: c
        }, b)
    }
      , Dg = function(a, b, c) {
        var d = !1;
        d = void 0 === d ? !1 : d;
        var e = window
          , f = "undefined" !== typeof queueMicrotask;
        return function() {
            d && f && queueMicrotask(function() {
                e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                e.google_rum_task_id_counter += 1
            });
            var g = Od()
              , h = 3;
            try {
                var k = b.apply(this, arguments)
            } catch (l) {
                h = 13;
                if (!c)
                    throw l;
                c(a, l)
            } finally {
                e.google_measure_js_timing && g && Bg(u(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: g,
                    duration: (Od() || 0) - g,
                    type: h
                }, d && f && {
                    taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                }), e)
            }
            return k
        }
    }
      , Eg = function(a, b) {
        return Dg(a, b, function(c, d) {
            var e = new Ag;
            var f = void 0 === f ? e.i : f;
            var g = void 0 === g ? e.j : g;
            Math.random() > f || (d.error && d.meta && d.id || (d = new Md(d,{
                context: c,
                id: g
            })),
            B.google_js_errors = B.google_js_errors || [],
            B.google_js_errors.push(d),
            B.error_rep_loaded || (f = B.document,
            c = kd("SCRIPT", f),
            Zc(c, e.g),
            (e = f.getElementsByTagName("script")[0]) && e.parentNode && e.parentNode.insertBefore(c, e),
            B.error_rep_loaded = !0))
        })
    };
    function Z(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }
    function Fg(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }
    function Gg() {
        var a = new t.Set;
        var b = window.googletag;
        b = (null == b ? 0 : b.apiReady) ? b : void 0;
        try {
            if (!b)
                return a;
            for (var c = b.pubads(), d = w(c.getSlots()), e = d.next(); !e.done; e = d.next())
                a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }
    function Hg(a) {
        a = a.id;
        return null != a && (Gg().has(a) || u(a, "startsWith").call(a, "google_ads_iframe_") || u(a, "startsWith").call(a, "aswift"))
    }
    function Ig(a, b, c) {
        if (!a.sources)
            return !1;
        switch (Jg(a)) {
        case 2:
            var d = Kg(a);
            if (d)
                return c.some(function(f) {
                    return Lg(d, f)
                });
            break;
        case 1:
            var e = Mg(a);
            if (e)
                return b.some(function(f) {
                    return Lg(e, f)
                })
        }
        return !1
    }
    function Jg(a) {
        if (!a.sources)
            return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top)
                return 2;
            if (a.previousRect.top > a.currentRect.top)
                return 1
        }
        return 0
    }
    function Mg(a) {
        return Ng(a, function(b) {
            return b.currentRect
        })
    }
    function Kg(a) {
        return Ng(a, function(b) {
            return b.previousRect
        })
    }
    function Ng(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }
    function Lg(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }
    var Og = function() {
        var a = {
            pa: !0
        };
        a = void 0 === a ? {
            pa: !1
        } : a;
        this.j = this.i = this.P = this.J = this.L = 0;
        this.ja = this.ga = Number.NEGATIVE_INFINITY;
        this.g = [];
        this.M = {};
        this.da = 0;
        this.K = Infinity;
        this.ba = this.ea = this.fa = this.ha = this.ma = this.s = this.la = this.S = this.l = 0;
        this.ca = !1;
        this.R = this.I = this.G = 0;
        this.B = null;
        this.ia = !1;
        this.aa = function() {}
        ;
        var b = document.querySelector("[data-google-query-id]");
        this.ka = b ? b.getAttribute("data-google-query-id") : null;
        this.za = a
    }, Pg, Qg, Tg = function() {
        var a = new Og;
        if (Ic(Ec)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                a.za.pa && b.push("event");
                b = w(b);
                for (var c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    var d = {
                        type: c,
                        buffered: !0
                    };
                    "event" === c && (d.durationThreshold = 40);
                    Rg(a).observe(d)
                }
                Sg(a)
            }
        }
    }, Rg = function(a) {
        a.B || (a.B = new PerformanceObserver(Eg(640, function(b) {
            Ug(a, b)
        })));
        return a.B
    }, Sg = function(a) {
        var b = Eg(641, function() {
            var d = document;
            2 === (d.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && Vg(a)
        })
          , c = Eg(641, function() {
            return void Vg(a)
        });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.aa = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            Rg(a).disconnect()
        }
    }, Vg = function(a) {
        if (!a.ia) {
            a.ia = !0;
            Rg(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Fg("cls", a.L),
            b += Fg("mls", a.J),
            b += Z("nls", a.P),
            window.LayoutShiftAttribution && (b += Fg("cas", a.s),
            b += Z("nas", a.ha),
            b += Fg("was", a.ma)),
            b += Fg("wls", a.S),
            b += Fg("tls", a.la));
            window.LargestContentfulPaint && (b += Z("lcp", a.fa),
            b += Z("lcps", a.ea));
            window.PerformanceEventTiming && a.ca && (b += Z("fid", a.ba));
            window.PerformanceLongTaskTiming && (b += Z("cbt", a.G),
            b += Z("mbt", a.I),
            b += Z("nlt", a.R));
            for (var c = 0, d = w(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next())
                Hg(e.value) && c++;
            b += Z("nif", c);
            c = window.google_unique_id;
            b += Z("ifi", "number" === typeof c ? c : 0);
            c = W(Qf).g();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (B === B.top ? 1 : 0);
            b += a.ka ? "&qqid=" + encodeURIComponent(a.ka) : Z("pvsid", ld(B));
            window.googletag && (b += "&gpt=1");
            c = Math.min(a.g.length - 1, Math.floor((a.B ? a.da : performance.interactionCount || 0) / 50));
            0 <= c && (c = a.g[c].latency,
            0 <= c && (b += Z("inp", c)));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.aa()
        }
    }, Wg = function(a, b, c, d) {
        if (!b.hadRecentInput) {
            a.L += Number(b.value);
            Number(b.value) > a.J && (a.J = Number(b.value));
            a.P += 1;
            if (c = Ig(b, c, d))
                a.s += b.value,
                a.ha++;
            if (5E3 < b.startTime - a.ga || 1E3 < b.startTime - a.ja)
                a.ga = b.startTime,
                a.i = 0,
                a.j = 0;
            a.ja = b.startTime;
            a.i += b.value;
            c && (a.j += b.value);
            a.i > a.S && (a.S = a.i,
            a.ma = a.j,
            a.la = b.startTime + b.duration)
        }
    }, Ug = function(a, b) {
        var c = Pg !== window.scrollX || Qg !== window.scrollY ? [] : Xg
          , d = Yg();
        b = w(b.getEntries());
        for (var e = b.next(), f = {}; !e.done; f = {
            C: void 0
        },
        e = b.next())
            switch (f.C = e.value,
            e = f.C.entryType,
            e) {
            case "layout-shift":
                Wg(a, f.C, c, d);
                break;
            case "largest-contentful-paint":
                f = f.C;
                a.fa = Math.floor(f.renderTime || f.loadTime);
                a.ea = f.size;
                break;
            case "first-input":
                e = f.C;
                a.ba = Number((e.processingStart - e.startTime).toFixed(3));
                a.ca = !0;
                a.g.some(function(g) {
                    return function(h) {
                        return u(h, "entries").some(function(k) {
                            return g.C.duration === k.duration && g.C.startTime === k.startTime
                        })
                    }
                }(f)) || Zg(a, f.C);
                break;
            case "longtask":
                f = Math.max(0, f.C.duration - 50);
                a.G += f;
                a.I = Math.max(a.I, f);
                a.R += 1;
                break;
            case "event":
                Zg(a, f.C);
                break;
            default:
                throw Error("unexpected value " + e + "!");
            }
    }, Zg = function(a, b) {
        $g(a, b);
        var c = a.g[a.g.length - 1]
          , d = a.M[b.interactionId];
        if (d || 10 > a.g.length || b.duration > c.latency)
            d ? (u(d, "entries").push(b),
            d.latency = Math.max(d.latency, b.duration)) : (b = {
                id: b.interactionId,
                latency: b.duration,
                entries: [b]
            },
            a.M[b.id] = b,
            a.g.push(b)),
            a.g.sort(function(e, f) {
                return f.latency - e.latency
            }),
            a.g.splice(10).forEach(function(e) {
                delete a.M[e.id]
            })
    }, $g = function(a, b) {
        b.interactionId && (a.K = Math.min(a.K, b.interactionId),
        a.l = Math.max(a.l, b.interactionId),
        a.da = a.l ? (a.l - a.K) / 7 + 1 : 0)
    }, Yg = function() {
        var a = u(Array, "from").call(Array, document.getElementsByTagName("iframe")).filter(Hg)
          , b = [].concat(y(Gg())).map(function(c) {
            return document.getElementById(c)
        }).filter(function(c) {
            return null !== c
        });
        Pg = window.scrollX;
        Qg = window.scrollY;
        return Xg = [].concat(y(a), y(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }, Xg = [];
    var ah = function(a) {
        this.h = N(a)
    };
    A(ah, V);
    ah.prototype.getVersion = function() {
        return T(this, 2)
    }
    ;
    var bh = function(a) {
        this.h = N(a)
    };
    A(bh, V);
    var ch = function(a, b) {
        return P(a, 2, M(b))
    }
      , dh = function(a, b) {
        return P(a, 3, M(b))
    }
      , eh = function(a, b) {
        return P(a, 4, M(b))
    }
      , fh = function(a, b) {
        return P(a, 5, M(b))
    }
      , gh = function(a, b) {
        return P(a, 9, M(b))
    }
      , hh = function(a, b) {
        return ic(a, 10, b)
    }
      , ih = function(a, b) {
        return P(a, 11, null == b ? b : tb(b))
    }
      , jh = function(a, b) {
        return P(a, 1, M(b))
    }
      , kh = function(a, b) {
        return P(a, 7, null == b ? b : tb(b))
    };
    bh.o = [10, 6];
    var lh = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function mh(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }
    function nh(a) {
        var b, c;
        return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }
    function oh(a) {
        if (!nh(a))
            return null;
        var b = mh(a);
        if (b.uach_promise)
            return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(lh).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }
    function ph(a) {
        var b;
        return ih(hh(fh(ch(jh(eh(kh(gh(dh(new bh, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new ah;
            d = P(d, 1, M(c.brand));
            return P(d, 2, M(c.version))
        })) || []), a.wow64 || !1)
    }
    function qh(a) {
        var b, c;
        return null != (c = null == (b = oh(a)) ? void 0 : b.then(function(d) {
            return ph(d)
        })) ? c : null
    }
    ;function rh(a, b) {
        var c = {};
        b = (c[0] = gg(b.La),
        c);
        W(Qf).i(a, b)
    }
    ;var sh = {}
      , th = (sh[253] = !1,
    sh[246] = [],
    sh[150] = "",
    sh[221] = !1,
    sh[36] = /^true$/.test("false"),
    sh[172] = null,
    sh[260] = void 0,
    sh[251] = null,
    sh)
      , sc = function() {
        this.g = !1
    };
    function uh(a) {
        W(sc).g = !0;
        return th[a]
    }
    function vh(a, b) {
        W(sc).g = !0;
        th[a] = b
    }
    ;var wh = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js|\/pagead\/managed\/js\/gpt\.js)/;
    function xh(a) {
        return a ? !wh.test(a.src) : !0
    }
    ;function yh(a) {
        var b = a.Ha
          , c = a.Qa
          , d = a.Ga
          , e = a.Da
          , f = a.Fa
          , g = xh(a.sa);
        a = {};
        var h = {}
          , k = {};
        return k[3] = (a[3] = function() {
            return !g
        }
        ,
        a[59] = function() {
            var l = ra.apply(0, arguments), m = u(l, "includes"), q = String, p;
            var r = void 0 === r ? window : r;
            var J;
            r = null != (J = null == (p = Vc(r.location.href.match(Uc)[3] || null)) ? void 0 : p.split(".")) ? J : [];
            p = 2 > r.length ? null : "uk" === r[r.length - 1] ? 3 > r.length ? null : gd(r.splice(r.length - 3).join(".")) : gd(r.splice(r.length - 2).join("."));
            return m.call(l, q(p))
        }
        ,
        a[61] = function() {
            return d
        }
        ,
        a[63] = function() {
            return d || ".google.ch" === f
        }
        ,
        a[73] = function(l) {
            return u(c, "includes").call(c, Number(l))
        }
        ,
        a),
        k[4] = (h[1] = function() {
            return e
        }
        ,
        h[4] = function() {
            if (hd.test("0")) {
                var l = Number("0");
                l = isNaN(l) ? null : l
            } else
                l = null;
            return l || 0
        }
        ,
        h[13] = function() {
            return b || 0
        }
        ,
        h),
        k[5] = {},
        k
    }
    ;function zh(a, b) {
        var c = new cg(uh(246));
        if (!S(c, mf, 1).length && S(a, mf, 1).length) {
            var d = S(a, mf, 1);
            ic(c, 1, d)
        }
        !S(c, ag, 2).length && S(a, ag, 2).length && (d = S(a, ag, 2),
        ic(c, 2, d));
        void 0 === ec(c, bg, 5, !1) && void 0 !== ec(a, bg, 5, !1) && (a = R(a, bg, 5),
        gc(c, 5, a));
        wg({
            Ea: c,
            A: yh(b),
            na: 2
        })
    }
    ;function Ah(a, b, c, d, e) {
        a = a.location.host;
        var f = Xc(b.src, "domain");
        b = Xc(b.src, "network-code");
        if (a || f || b) {
            var g = {};
            a && (g.ippd = a);
            f && (g.pppd = f);
            b && (g.pppnc = b);
            W(Hc).g(ye.g, ye.defaultValue) && (g.ppc_eid = W(Hc).g(ye.g, ye.defaultValue).toString());
            a = g
        } else
            a = void 0;
        if (a) {
            c = [c ? new Bc(zc,"https://pagead2.googlesyndication.com") : new Bc(zc,"https://securepubads.g.doubleclick.net"), new Bc(zc,"/pagead/ppub_config")];
            f = "";
            for (b = 0; b < c.length; b++)
                g = c[b],
                f += g instanceof Bc && g.constructor === Bc && g.i === Ac ? g.g : "type_error:Const";
            c = new Mc(f,Pc);
            c = Oc.exec(Nc(c).toString());
            f = c[3] || "";
            c = new Mc(c[1] + Qc("?", c[2] || "", a) + Qc("#", f),Pc);
            Bh(c, d, e)
        } else
            e(new t.globalThis.Error("no provided or inferred data"))
    }
    function Bh(a, b, c) {
        var d = new t.globalThis.XMLHttpRequest;
        d.open("GET", a.toString(), !0);
        d.withCredentials = !1;
        d.onload = function() {
            300 > d.status ? (Cg("13", window),
            b(204 === d.status ? "" : d.responseText)) : c(new t.globalThis.Error("resp:" + d.status))
        }
        ;
        d.onerror = function() {
            return void c(new t.globalThis.Error("s:" + d.status + " rs:" + d.readyState))
        }
        ;
        d.send()
    }
    ;var Ch = function() {
        this.l = [];
        this.j = []
    }
      , Fh = function(a, b, c, d, e) {
        if (cd(b) === dd(b) && c) {
            Dh(a);
            var f = null == e ? void 0 : T(fc(e, wc), 1);
            f && f.length && u(b.location.hostname, "includes").call(b.location.hostname, f) ? Eh(a, void 0, e) : Ah(b.top, c, d, function(g) {
                return void Eh(a, g)
            }, function(g) {
                Eh(a, void 0, void 0, g)
            })
        }
    }
      , Dh = function(a) {
        uh(260);
        vh(260, function(b) {
            void 0 !== a.g || a.i ? b(a.g, a.i) : a.l.push(b)
        })
    }
      , Eh = function(a, b, c, d) {
        a.g = null != b ? b : null == c ? void 0 : qc(c);
        a.s = c;
        !a.s && a.g && a.j.length && (a.s = yc(a.g));
        a.i = d;
        b = w(a.l);
        for (c = b.next(); !c.done; c = b.next())
            c = c.value,
            c(a.g, a.i);
        b = w(a.j);
        for (c = b.next(); !c.done; c = b.next())
            c = c.value,
            c(a.s, a.i);
        a.l.length = 0;
        a.j.length = 0
    };
    var Gh = function(a) {
        this.h = N(a)
    };
    A(Gh, V);
    var Hh = vc(Gh);
    Gh.o = [10];
    var Jh = function() {
        return [].concat(y(u(Ih, "values").call(Ih))).reduce(function(a, b) {
            return a + b
        }, 0)
    }
      , Ih = new t.Map;
    function Kh(a, b, c) {
        if (a.Oa) {
            c = c.error && c.meta && c.id ? c.error : c;
            var d = new pe
              , e = new oe;
            try {
                var f = ld(window);
                Q(e, 1, Ab(f), "0")
            } catch (p) {}
            try {
                var g = W(Qf).g();
                $b(e, 2, g, wb)
            } catch (p) {}
            try {
                Q(e, 3, M(window.document.URL), "")
            } catch (p) {}
            f = gc(d, 2, e);
            g = new ne;
            b = Q(g, 1, L(b), 0);
            try {
                var h = af(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                Q(b, 2, M(h), "")
            } catch (p) {}
            try {
                var k = af(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                Q(b, 3, M(k), "")
            } catch (p) {}
            try {
                var l = af(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && $b(b, 4, l.split(/\n\s*/), Eb)
            } catch (p) {}
            h = gc(f, 1, b);
            k = new me;
            try {
                Q(k, 1, M(a.X || a.ta), "")
            } catch (p) {}
            try {
                var m = Jh();
                Q(k, 2, xb(m), 0)
            } catch (p) {}
            try {
                var q = [].concat(y(u(Ih, "keys").call(Ih)));
                $b(k, 3, q, Eb)
            } catch (p) {}
            hc(h, 4, qe, k);
            Q(h, 5, Ab(a.Ca), "0");
            a.Ma.Pa(h)
        }
    }
    ;function Lh(a, b) {
        try {
            var c = tc();
            if (!af(a)) {
                var d = c ? c() + "\n" : "";
                throw Error(d + String(a));
            }
            return Hh(a)
        } catch (e) {
            return Kh(b, 838, e),
            new Gh
        }
    }
    ;function Mh() {
        var a;
        return null != (a = B.googletag) ? a : B.googletag = {
            cmd: []
        }
    }
    function Nh(a, b) {
        var c = Mh();
        c.hasOwnProperty(a) || (c[a] = b)
    }
    ;var Oh = ia(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl.js"])
      , Ph = ia(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", ".js"])
      , Qh = ia(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl.js"])
      , Rh = ia(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", ".js"]);
    function Sh() {
        var a = sttc
          , b = Th();
        rb(function(x) {
            Kh(b, 1189, x)
        });
        var c = Mh();
        a = Lh(a, b);
        rc();
        u(Object, "assign").call(Object, th, c._vars_);
        c._vars_ = th;
        a && (kc(a, 3) && vh(36, !0),
        kc(a, 5) && vh(221, !0),
        T(a, 6) && vh(150, T(a, 6)));
        var d = fc(a, cg)
          , e = {
            Ga: kc(a, 5),
            Ha: lc(a, 2),
            Qa: Vb(a, 10, yb),
            Da: lc(a, 7),
            Fa: T(a, 6)
        };
        a = R(a, xc, 9);
        var f, g = null != (f = c.fifWin) ? f : window, h = g.document;
        f = c.fifWin ? window : g;
        Nh("_loaded_", !0);
        var k = Uh(b);
        Nh("cmd", []);
        var l, m = null != (l = Vh(h)) ? l : Wh(h);
        Xh(d, g, u(Object, "assign").call(Object, {}, {
            sa: m
        }, e), k);
        try {
            Tg()
        } catch (x) {}
        Cg("1", g);
        l = Yh(k, m);
        d = !1;
        if (!Zh(h)) {
            e = "gpt-impl-" + Math.random();
            try {
                $c(h, md(l, {
                    id: e,
                    nonce: Yc(window)
                }))
            } catch (x) {}
            h.getElementById(e) && (Ic(xe) ? d = !0 : c._loadStarted_ = !0)
        }
        if (Ic(xe) ? !d : !c._loadStarted_) {
            var q = kd("SCRIPT");
            Zc(q, l);
            q.async = !0;
            h = c.fifWin ? f.document : h;
            l = h.body;
            d = h.documentElement;
            var p, r, J = null != (r = null != (p = h.head) ? p : l) ? r : d;
            "complete" !== f.document.readyState && c.fifWin ? Gc(f, "load", function() {
                return void J.appendChild(q)
            }) : J.appendChild(q);
            Ic(xe) || (c._loadStarted_ = !0)
        }
        if (f === f.top)
            try {
                Ze(f)
            } catch (x) {
                Kh(k, 1209, x)
            }
        Fh(new Ch, f, m, $h(m), a)
    }
    function Th() {
        return {
            ta: "1",
            X: "m202402200101",
            La: ld(window),
            Ma: new we(11,"m202402200101"),
            Oa: .01 > ed(),
            Ca: 100
        }
    }
    function Uh(a) {
        var b = new Bc(zc,"1");
        var c = a.X;
        /m\d+/.test(c) ? c = Number(c.substring(1)) : (c && Rd({
            mjsv: c
        }, "gpt_inv_ver"),
        c = void 0);
        return u(Object, "assign").call(Object, {}, a, {
            hb: b,
            jb: c,
            kb: new Bc(zc,"m202402200101")
        })
    }
    function Vh(a) {
        return (a = a.currentScript) ? a : null
    }
    function Wh(a) {
        var b;
        a = w(null != (b = a.scripts) ? b : []);
        for (b = a.next(); !b.done; b = a.next())
            if (b = b.value,
            u(b.src, "includes").call(b.src, "/tag/js/gpt"))
                return b;
        return null
    }
    function Yh(a, b) {
        var c = a.ta;
        a = a.X;
        b = $h(b) ? a ? pd(Oh, a) : pd(Ph, c) : a ? pd(Qh, a) : pd(Rh, c);
        return (c = W(Hc).g(ze.g, ze.defaultValue)) ? qd(b, new t.Map([["cb", c]])) : b
    }
    function Xh(a, b, c, d) {
        vh(172, c.sa);
        zh(a, c);
        rh(12, d);
        rh(5, d);
        (a = qh(b)) && a.then(function(e) {
            return void vh(251, qc(e))
        });
        jd(Jc(), b.document)
    }
    function Zh(a) {
        var b = Vh(a);
        return "complete" === a.readyState || "loaded" === a.readyState || !(null == b || !b.async)
    }
    function $h(a) {
        return !(null == a || !a.src) && "pagead2.googlesyndication.com" === Vc(a.src.match(Uc)[3] || null)
    }
    ;try {
        Sh()
    } catch (a) {
        try {
            Kh(Th(), 420, a)
        } catch (b) {}
    }
    ;
}
).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, "[[[[577939489,null,null,[1]],[null,7,null,[null,0.1]],[561694963,null,null,[1]],[476475256,null,null,[1]],[null,427198696,null,[null,1]],[null,578655462,null,[null,20]],[571050247,null,null,[1]],[570864697,null,null,[1]],[586621833,null,null,[1]],[577861852,null,null,[1]],[573236024,null,null,[1]],[580562135,null,null,[1]],[null,null,null,[],null,489560439],[null,null,null,[],null,505762507],[null,1921,null,[null,72]],[null,1920,null,[null,12]],[null,426169222,null,[null,1000]],[null,1916,null,[null,0.001]],[null,377289019,null,[null,10000]],[null,529,null,[null,20]],[null,573282293,null,[null,0.01]],[549005203,null,null,[1]],[599936051,null,null,[1]],[579875511,null,null,[1]],[null,447000223,null,[null,0.01]],[360245597,null,null,[1]],[540043576,null,null,[1]],[45401685,null,null,[1]],[561164161,null,null,[1]],[null,550718589,null,[null,250],[[[3,[[4,null,15,null,null,null,null,[\"22814497764\"]],[4,null,15,null,null,null,null,[\"6581\"]],[4,null,15,null,null,null,null,[\"18190176\"]],[4,null,15,null,null,null,null,[\"21881754602\"]],[4,null,15,null,null,null,null,[\"6782\"]],[4,null,15,null,null,null,null,[\"309565630\"]],[4,null,15,null,null,null,null,[\"22306534072\"]],[4,null,15,null,null,null,null,[\"7229\"]],[4,null,15,null,null,null,null,[\"28253241\"]],[4,null,15,null,null,null,null,[\"1254144\"]],[4,null,15,null,null,null,null,[\"21732118914\"]],[4,null,15,null,null,null,null,[\"5441\"]],[4,null,15,null,null,null,null,[\"162717810\"]],[4,null,15,null,null,null,null,[\"51912183\"]],[4,null,15,null,null,null,null,[\"23202586\"]],[4,null,15,null,null,null,null,[\"44520695\"]],[4,null,15,null,null,null,null,[\"1030006\"]],[4,null,15,null,null,null,null,[\"21830601346\"]],[4,null,15,null,null,null,null,[\"23081961\"]],[4,null,15,null,null,null,null,[\"21880406607\"]],[4,null,15,null,null,null,null,[\"93656639\"]],[4,null,15,null,null,null,null,[\"1020351\"]],[4,null,15,null,null,null,null,[\"5931321\"]],[4,null,15,null,null,null,null,[\"3355436\"]],[4,null,15,null,null,null,null,[\"22106840220\"]],[4,null,15,null,null,null,null,[\"22875833199\"]],[4,null,15,null,null,null,null,[\"32866417\"]],[4,null,15,null,null,null,null,[\"8095840\"]],[4,null,15,null,null,null,null,[\"71161633\"]],[4,null,15,null,null,null,null,[\"22668755367\"]],[4,null,15,null,null,null,null,[\"6177\"]],[4,null,15,null,null,null,null,[\"147246189\"]],[4,null,15,null,null,null,null,[\"22152718\"]],[4,null,15,null,null,null,null,[\"21751243814\"]],[4,null,15,null,null,null,null,[\"22013536576\"]],[4,null,15,null,null,null,null,[\"4444\"]],[4,null,15,null,null,null,null,[\"44890869\"]],[4,null,15,null,null,null,null,[\"248415179\"]],[4,null,15,null,null,null,null,[\"5293\"]],[4,null,15,null,null,null,null,[\"21675937462\"]],[4,null,15,null,null,null,null,[\"21726375739\"]],[4,null,15,null,null,null,null,[\"1002212\"]],[4,null,15,null,null,null,null,[\"6718395\"]]]],[null,500]]]],[600451522,null,null,[1]],[null,575880738,null,[null,10]],[599186119,null,null,[1]],[531615531,null,null,null,[[[3,[[4,null,15,null,null,null,null,[\"22814497764\"]],[4,null,15,null,null,null,null,[\"6581\"]],[4,null,15,null,null,null,null,[\"18190176\"]],[4,null,15,null,null,null,null,[\"21881754602\"]],[4,null,15,null,null,null,null,[\"6782\"]],[4,null,15,null,null,null,null,[\"309565630\"]],[4,null,15,null,null,null,null,[\"22306534072\"]],[4,null,15,null,null,null,null,[\"7229\"]],[4,null,15,null,null,null,null,[\"28253241\"]],[4,null,15,null,null,null,null,[\"1254144\"]],[4,null,15,null,null,null,null,[\"21732118914\"]],[4,null,15,null,null,null,null,[\"5441\"]],[4,null,15,null,null,null,null,[\"162717810\"]],[4,null,15,null,null,null,null,[\"51912183\"]],[4,null,15,null,null,null,null,[\"23202586\"]],[4,null,15,null,null,null,null,[\"44520695\"]],[4,null,15,null,null,null,null,[\"1030006\"]],[4,null,15,null,null,null,null,[\"21830601346\"]],[4,null,15,null,null,null,null,[\"23081961\"]],[4,null,15,null,null,null,null,[\"21880406607\"]],[4,null,15,null,null,null,null,[\"93656639\"]],[4,null,15,null,null,null,null,[\"1020351\"]],[4,null,15,null,null,null,null,[\"5931321\"]],[4,null,15,null,null,null,null,[\"3355436\"]],[4,null,15,null,null,null,null,[\"22106840220\"]],[4,null,15,null,null,null,null,[\"22875833199\"]],[4,null,15,null,null,null,null,[\"32866417\"]],[4,null,15,null,null,null,null,[\"8095840\"]],[4,null,15,null,null,null,null,[\"71161633\"]],[4,null,15,null,null,null,null,[\"22668755367\"]],[4,null,15,null,null,null,null,[\"6177\"]],[4,null,15,null,null,null,null,[\"147246189\"]],[4,null,15,null,null,null,null,[\"22152718\"]],[4,null,15,null,null,null,null,[\"21751243814\"]],[4,null,15,null,null,null,null,[\"22013536576\"]],[4,null,15,null,null,null,null,[\"4444\"]],[4,null,15,null,null,null,null,[\"44890869\"]],[4,null,15,null,null,null,null,[\"248415179\"]],[4,null,15,null,null,null,null,[\"5293\"]],[4,null,15,null,null,null,null,[\"21675937462\"]],[4,null,15,null,null,null,null,[\"21726375739\"]],[4,null,15,null,null,null,null,[\"1002212\"]],[4,null,15,null,null,null,null,[\"6718395\"]]]],[1]]]],[null,532520346,null,[null,120]],[557870754,null,null,[1]],[596058628,null,null,[1]],[31077334,null,null,[1]],[null,398776877,null,[null,60000]],[null,374201269,null,[null,60000]],[null,371364213,null,[null,60000]],[null,376149757,null,[null,0.0025]],[599935511,null,null,[1]],[583154251,null,null,[1]],[570764855,null,null,[1]],[null,null,579921177,[null,null,\"control_1\\\\.\\\\d\"]],[null,570764854,null,[null,50]],[578725095,null,null,[1]],[602857211,null,null,[1]],[603124742,null,null,[1]],[377936516,null,null,[1]],[null,599575765,null,[null,1000]],[null,null,2,[null,null,\"1-0-40\"]],[605709165,null,null,[1]],[null,506394061,null,[null,100]],[568353453,null,null,[1]],[null,null,null,[],null,489],[392065905,null,null,null,[[[4,null,68],[1]]]],[null,360245595,null,[null,500]],[45397804,null,null,[1]],[45398607,null,null,[1]],[563462360,null,null,[1]],[555237688,null,null,[],[[[2,[[4,null,70,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,27,null,null,null,null,[\"isSecureContext\"]]]]]],[1]]]],[555237686,null,null,[]],[507033477,null,null,[1]],[null,514795754,null,[null,2]],[564724551,null,null,null,[[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)(?!11[0-6])\\\\d{3,})\",[\"navigator.userAgent\"]],[1]]]],[567489814,null,null,[1]],[45415915,null,null,[1]],[582338617,null,null,[1]],[582287318,null,null,[1]],[null,596918936,null,[null,500]],[588918521,null,null,[1]],[null,null,null,[null,null,null,[\"As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ\/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX\/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A\/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U\/roYjp4Yau0T3YSuc63vmAs\/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934],[485990406,null,null,[]]],[[3,[[null,[[1337,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]],[84,null,null,[1]],[188,null,null,[1]]]]]],[1000,[[31072561]],[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[12,null,null,null,4,null,\"FLEDGE_GAM_EXTERNAL_TESTER\",[\"navigator.userAgent\"]]]]],[1,[[31075124,[[null,514795754,null,[null,4]]]]],[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]],59],[1000,[[31078531,null,[2,[[4,null,6,null,null,null,null,[\"31078528\"]],[1,[[4,null,9,null,null,null,null,[\"fetch\"]]]]]]]],[2,[[2,[[4,null,8,null,null,null,null,[\"fetch\"]],[4,null,8,null,null,null,null,[\"TextDecoderStream\"]]]],[3,[[1,[[4,null,9,null,null,null,null,[\"fetch\"]]]],[1,[[4,null,9,null,null,null,null,[\"TextDecoderStream\"]]]]]]]],94,null,null,null,null,null,null,null,null,11],[1000,[[31078532,null,[2,[[4,null,6,null,null,null,null,[\"31078530\"]],[1,[[4,null,9,null,null,null,null,[\"fetch\"]]]]]]]],[2,[[2,[[4,null,8,null,null,null,null,[\"fetch\"]],[4,null,8,null,null,null,null,[\"TextDecoderStream\"]]]],[3,[[1,[[4,null,9,null,null,null,null,[\"fetch\"]]]],[1,[[4,null,9,null,null,null,null,[\"TextDecoderStream\"]]]]]]]],94,null,null,null,null,null,null,null,null,11],[10,[[31079962],[31079963]]],[10,[[31080344],[31080345],[31080346,[[null,514795754,null,[null,4]]]],[31080407],[31080408,[[null,514795754,null,[null,4]]]]],[2,[[4,null,9,null,null,null,null,[\"fetch\"]],[4,null,9,null,null,null,null,[\"navigator.getInterestGroupAdAuctionData\"]],[1,[[12,null,null,null,4,null,\"Chrome\\\\\/115\",[\"navigator.userAgent\"]]]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]]]]]],59],[1000,[[31080500,null,[2,[[4,null,6,null,null,null,null,[\"31078528\"]],[4,null,9,null,null,null,null,[\"fetch\"]]]]]],[2,[[2,[[4,null,8,null,null,null,null,[\"fetch\"]],[4,null,8,null,null,null,null,[\"TextDecoderStream\"]]]],[3,[[1,[[4,null,9,null,null,null,null,[\"fetch\"]]]],[1,[[4,null,9,null,null,null,null,[\"TextDecoderStream\"]]]]]]]],94,null,null,null,null,null,null,null,null,11],[1000,[[31080501,null,[2,[[4,null,6,null,null,null,null,[\"31078530\"]],[4,null,9,null,null,null,null,[\"fetch\"]]]]]],[2,[[2,[[4,null,8,null,null,null,null,[\"fetch\"]],[4,null,8,null,null,null,null,[\"TextDecoderStream\"]]]],[3,[[1,[[4,null,9,null,null,null,null,[\"fetch\"]]]],[1,[[4,null,9,null,null,null,null,[\"TextDecoderStream\"]]]]]]]],94,null,null,null,null,null,null,null,null,11],[1000,[[31080985,null,[4,null,6,null,null,null,null,[\"31080982\"]]]],[4,null,61],107,null,null,null,null,null,null,null,null,18],[1000,[[31080986,null,[4,null,6,null,null,null,null,[\"31080983\"]]]],[4,null,61],107,null,null,null,null,null,null,null,null,18],[1000,[[31080987,null,[4,null,6,null,null,null,null,[\"31080984\"]]]],[4,null,61],107,null,null,null,null,null,null,null,null,18],[null,[[44798283,[[null,514795754,null,[null,4]]]]],[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,63]]]]],59],[50,[[44807746],[44807747,[[547020083,null,null,[1]]]]],null,105],[10,[[44807748,[[547020083,null,null,[1]]]],[95320512]],null,105],[null,[[676982960],[676982998]]]]],[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31078663,null,[2,[[4,null,70,null,null,null,null,[\"browsing-topics\"]],[4,null,8,null,null,null,null,[\"document.browsingTopics\"]]]]]]],[1000,[[31078664,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]]],[1000,[[31078665,null,[2,[[4,null,8,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]],[1000,[[31078666,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]]],[1000,[[31078667,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]]],[1000,[[31078668,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[1000,[[31078669,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]]],[1000,[[31078670,null,[4,null,70,null,null,null,null,[\"shared-storage\"]]]]],[1000,[[31078671,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]]]]],[5,[[50,[[31067420],[31067421,[[360245597,null,null,[]]]],[31077191],[44776367],[44804780],[44806358]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[1,[[31078528],[31078530,[[489217043,null,null,[1]]]]],null,59],[10,[[31079088],[44776366],[44779256]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[50,[[31079233],[31079234,[[570864697,null,null,[]]]]],null,98],[50,[[31079239],[31079240,[[571050247,null,null,[]]]]],null,97],[1,[[31079732],[31079733]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[50,[[31079795],[31079796,[[360245597,null,null,[]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[200,[[31079956],[31079957,[[561985307,null,null,[1]]]],[44809527,[[561985307,null,null,[1]]]]]],[50,[[31080856],[31080857,[[597667424,null,null,[1]]]]]],[50,[[31080982],[31080983,[[582386403,null,null,[1]]]],[31080984,[[582386403,null,null,[1]],[603086552,null,null,[1]]]]]],[null,[[31081110],[31081111,[[602464517,null,null,[1]]]]]],[10,[[31081138],[31081139,[[45401686,null,null,[1]]]]]],[100,[[31081146],[31081147,[[595824397,null,null,[1]]]]]],[100,[[31081195],[31081196,[[590730356,null,null,[1]]]]]],[1000,[[31081346,[[null,24,null,[null,31081346]]],[6,null,null,13,null,31081346]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31081347,[[null,24,null,[null,31081347]]],[6,null,null,13,null,31081347]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[50,[[31081350],[31081351,[[605401295,null,null,[1]]]]],null,108],[1000,[[31081366,[[null,24,null,[null,31081366]]],[6,null,null,13,null,31081366]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31081367,[[null,24,null,[null,31081367]]],[6,null,null,13,null,31081367]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1,[[31081388],[31081389,[[null,599575765,null,[null,15000]],[605401295,null,null,[1]]]],[31081390,[[null,599575765,null,[null,20000]],[605401295,null,null,[1]]]],[31081391,[[null,599575765,null,[null,25000]],[605401295,null,null,[1]]]]],null,108],[1000,[[31081418,null,[2,[[2,[[8,null,null,1,null,-1],[7,null,null,1,null,10]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[1000,[[31081419,null,[2,[[2,[[8,null,null,1,null,9],[7,null,null,1,null,20]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[50,[[95323523],[95323524,[[561694963,null,null,[1]]]]]]]],[25,[[10,[[31068825],[31068826,[[null,462420536,null,[null,0.1]]]]]]]],[2,[[50,[[31080115],[31080116],[31080117]],null,null,null,null,null,300,null,102],[1,[[31080988],[31080989,[[null,586681283,null,[null,1]]]]],null,null,null,null,null,800,null,102],[10,[[95322895],[95322896]],null,null,null,null,32,null,null,142,1]]],[4,[[null,[[44714449,[[null,7,null,[null,1]]]],[676982961,[[null,7,null,[null,0.4]],[212,null,null,[1]]]],[676982996,[[null,7,null,[null,1]]]]],null,78]]]],null,null,[null,1000,1,1000]],null,null,null,null,\".google.com.pe\",305,2021,[[\"eldni.com\",null,\"https:\/\/eldni.com\/\",null,null,[\"22247651397\"]],[],[],null,null,null,null,[[[\"22247651397\",1]]]]]")
