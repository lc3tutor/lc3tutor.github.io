!function e(t, n, r) {
    function o(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                var u = "function" == typeof require && require;
                if (!s && u)
                    return u(a, !0);
                if (i)
                    return i(a, !0);
                var l = new Error("Cannot find module '" + a + "'");
                throw l.code = "MODULE_NOT_FOUND",
                l
            }
            var c = n[a] = {
                exports: {}
            };
            t[a][0].call(c.exports, function(e) {
                var n = t[a][1][e];
                return o(n ? n : e)
            }, c, c.exports, e, t, n, r)
        }
        return n[a].exports
    }
    for (var i = "function" == typeof require && require, a = 0; a < r.length; a++)
        o(r[a]);
    return o
}({
    1: [function(e, t, n) {
        !function(e, n) {
            "use strict";
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return n(e)
            }
            : n(e)
        }("undefined" != typeof window ? window : this, function(e, t) {
            "use strict";
            function n(e, t) {
                t = t || te;
                var n = t.createElement("script");
                n.text = e,
                t.head.appendChild(n).parentNode.removeChild(n)
            }
            function r(e) {
                var t = !!e && "length"in e && e.length
                  , n = de.type(e);
                return "function" !== n && !de.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            function o(e, t, n) {
                return de.isFunction(t) ? de.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                }) : t.nodeType ? de.grep(e, function(e) {
                    return e === t !== n
                }) : "string" != typeof t ? de.grep(e, function(e) {
                    return ae.call(t, e) > -1 !== n
                }) : ke.test(t) ? de.filter(t, e, n) : (t = de.filter(t, e),
                de.grep(e, function(e) {
                    return ae.call(t, e) > -1 !== n && 1 === e.nodeType
                }))
            }
            function i(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; )
                    ;
                return e
            }
            function a(e) {
                var t = {};
                return de.each(e.match(qe) || [], function(e, n) {
                    t[n] = !0
                }),
                t
            }
            function s(e) {
                return e
            }
            function u(e) {
                throw e
            }
            function l(e, t, n) {
                var r;
                try {
                    e && de.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && de.isFunction(r = e.then) ? r.call(e, t, n) : t.call(void 0, e)
                } catch (e) {
                    n.call(void 0, e)
                }
            }
            function c() {
                te.removeEventListener("DOMContentLoaded", c),
                e.removeEventListener("load", c),
                de.ready()
            }
            function f() {
                this.expando = de.expando + f.uid++
            }
            function p(e) {
                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ie.test(e) ? JSON.parse(e) : e)
            }
            function h(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(Re, "-$&").toLowerCase(),
                    n = e.getAttribute(r),
                    "string" == typeof n) {
                        try {
                            n = p(n)
                        } catch (e) {}
                        Pe.set(e, t, n)
                    } else
                        n = void 0;
                return n
            }
            function d(e, t, n, r) {
                var o, i = 1, a = 20, s = r ? function() {
                    return r.cur()
                }
                : function() {
                    return de.css(e, t, "")
                }
                , u = s(), l = n && n[3] || (de.cssNumber[t] ? "" : "px"), c = (de.cssNumber[t] || "px" !== l && +u) && $e.exec(de.css(e, t));
                if (c && c[3] !== l) {
                    l = l || c[3],
                    n = n || [],
                    c = +u || 1;
                    do
                        i = i || ".5",
                        c /= i,
                        de.style(e, t, c + l);
                    while (i !== (i = s() / u) && 1 !== i && --a)
                }
                return n && (c = +c || +u || 0,
                o = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
                r && (r.unit = l,
                r.start = c,
                r.end = o)),
                o
            }
            function g(e) {
                var t, n = e.ownerDocument, r = e.nodeName, o = Ue[r];
                return o ? o : (t = n.body.appendChild(n.createElement(r)),
                o = de.css(t, "display"),
                t.parentNode.removeChild(t),
                "none" === o && (o = "block"),
                Ue[r] = o,
                o)
            }
            function m(e, t) {
                for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
                    r = e[i],
                    r.style && (n = r.style.display,
                    t ? ("none" === n && (o[i] = Fe.get(r, "display") || null,
                    o[i] || (r.style.display = "")),
                    "" === r.style.display && We(r) && (o[i] = g(r))) : "none" !== n && (o[i] = "none",
                    Fe.set(r, "display", n)));
                for (i = 0; i < a; i++)
                    null != o[i] && (e[i].style.display = o[i]);
                return e
            }
            function v(e, t) {
                var n;
                return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
                void 0 === t || t && de.nodeName(e, t) ? de.merge([e], n) : n
            }
            function y(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    Fe.set(e[n], "globalEval", !t || Fe.get(t[n], "globalEval"))
            }
            function b(e, t, n, r, o) {
                for (var i, a, s, u, l, c, f = t.createDocumentFragment(), p = [], h = 0, d = e.length; h < d; h++)
                    if (i = e[h],
                    i || 0 === i)
                        if ("object" === de.type(i))
                            de.merge(p, i.nodeType ? [i] : i);
                        else if (Ge.test(i)) {
                            for (a = a || f.appendChild(t.createElement("div")),
                            s = (Xe.exec(i) || ["", ""])[1].toLowerCase(),
                            u = Ve[s] || Ve._default,
                            a.innerHTML = u[1] + de.htmlPrefilter(i) + u[2],
                            c = u[0]; c--; )
                                a = a.lastChild;
                            de.merge(p, a.childNodes),
                            a = f.firstChild,
                            a.textContent = ""
                        } else
                            p.push(t.createTextNode(i));
                for (f.textContent = "",
                h = 0; i = p[h++]; )
                    if (r && de.inArray(i, r) > -1)
                        o && o.push(i);
                    else if (l = de.contains(i.ownerDocument, i),
                    a = v(f.appendChild(i), "script"),
                    l && y(a),
                    n)
                        for (c = 0; i = a[c++]; )
                            Ke.test(i.type || "") && n.push(i);
                return f
            }
            function x() {
                return !0
            }
            function w() {
                return !1
            }
            function C() {
                try {
                    return te.activeElement
                } catch (e) {}
            }
            function T(e, t, n, r, o, i) {
                var a, s;
                if ("object" == typeof t) {
                    "string" != typeof n && (r = r || n,
                    n = void 0);
                    for (s in t)
                        T(e, s, n, r, t[s], i);
                    return e
                }
                if (null == r && null == o ? (o = n,
                r = n = void 0) : null == o && ("string" == typeof n ? (o = r,
                r = void 0) : (o = r,
                r = n,
                n = void 0)),
                o === !1)
                    o = w;
                else if (!o)
                    return e;
                return 1 === i && (a = o,
                o = function(e) {
                    return de().off(e),
                    a.apply(this, arguments)
                }
                ,
                o.guid = a.guid || (a.guid = de.guid++)),
                e.each(function() {
                    de.event.add(this, t, o, r, n)
                })
            }
            function k(e, t) {
                return de.nodeName(e, "table") && de.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
            }
            function j(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                e
            }
            function E(e) {
                var t = rt.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                e
            }
            function N(e, t) {
                var n, r, o, i, a, s, u, l;
                if (1 === t.nodeType) {
                    if (Fe.hasData(e) && (i = Fe.access(e),
                    a = Fe.set(t, i),
                    l = i.events)) {
                        delete a.handle,
                        a.events = {};
                        for (o in l)
                            for (n = 0,
                            r = l[o].length; n < r; n++)
                                de.event.add(t, o, l[o][n])
                    }
                    Pe.hasData(e) && (s = Pe.access(e),
                    u = de.extend({}, s),
                    Pe.set(t, u))
                }
            }
            function S(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
            function A(e, t, r, o) {
                t = oe.apply([], t);
                var i, a, s, u, l, c, f = 0, p = e.length, h = p - 1, d = t[0], g = de.isFunction(d);
                if (g || p > 1 && "string" == typeof d && !pe.checkClone && nt.test(d))
                    return e.each(function(n) {
                        var i = e.eq(n);
                        g && (t[0] = d.call(this, n, i.html())),
                        A(i, t, r, o)
                    });
                if (p && (i = b(t, e[0].ownerDocument, !1, e, o),
                a = i.firstChild,
                1 === i.childNodes.length && (i = a),
                a || o)) {
                    for (s = de.map(v(i, "script"), j),
                    u = s.length; f < p; f++)
                        l = i,
                        f !== h && (l = de.clone(l, !0, !0),
                        u && de.merge(s, v(l, "script"))),
                        r.call(e[f], l, f);
                    if (u)
                        for (c = s[s.length - 1].ownerDocument,
                        de.map(s, E),
                        f = 0; f < u; f++)
                            l = s[f],
                            Ke.test(l.type || "") && !Fe.access(l, "globalEval") && de.contains(c, l) && (l.src ? de._evalUrl && de._evalUrl(l.src) : n(l.textContent.replace(ot, ""), c))
                }
                return e
            }
            function q(e, t, n) {
                for (var r, o = t ? de.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
                    n || 1 !== r.nodeType || de.cleanData(v(r)),
                    r.parentNode && (n && de.contains(r.ownerDocument, r) && y(v(r, "script")),
                    r.parentNode.removeChild(r));
                return e
            }
            function D(e, t, n) {
                var r, o, i, a, s = e.style;
                return n = n || st(e),
                n && (a = n.getPropertyValue(t) || n[t],
                "" !== a || de.contains(e.ownerDocument, e) || (a = de.style(e, t)),
                !pe.pixelMarginRight() && at.test(a) && it.test(t) && (r = s.width,
                o = s.minWidth,
                i = s.maxWidth,
                s.minWidth = s.maxWidth = s.width = a,
                a = n.width,
                s.width = r,
                s.minWidth = o,
                s.maxWidth = i)),
                void 0 !== a ? a + "" : a
            }
            function O(e, t) {
                return {
                    get: function() {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }
            function L(e) {
                if (e in pt)
                    return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--; )
                    if (e = ft[n] + t,
                    e in pt)
                        return e
            }
            function H(e, t, n) {
                var r = $e.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }
            function F(e, t, n, r, o) {
                var i, a = 0;
                for (i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; i < 4; i += 2)
                    "margin" === n && (a += de.css(e, n + _e[i], !0, o)),
                    r ? ("content" === n && (a -= de.css(e, "padding" + _e[i], !0, o)),
                    "margin" !== n && (a -= de.css(e, "border" + _e[i] + "Width", !0, o))) : (a += de.css(e, "padding" + _e[i], !0, o),
                    "padding" !== n && (a += de.css(e, "border" + _e[i] + "Width", !0, o)));
                return a
            }
            function P(e, t, n) {
                var r, o = !0, i = st(e), a = "border-box" === de.css(e, "boxSizing", !1, i);
                if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]),
                r <= 0 || null == r) {
                    if (r = D(e, t, i),
                    (r < 0 || null == r) && (r = e.style[t]),
                    at.test(r))
                        return r;
                    o = a && (pe.boxSizingReliable() || r === e.style[t]),
                    r = parseFloat(r) || 0
                }
                return r + F(e, t, n || (a ? "border" : "content"), o, i) + "px"
            }
            function I(e, t, n, r, o) {
                return new I.prototype.init(e,t,n,r,o)
            }
            function R() {
                dt && (e.requestAnimationFrame(R),
                de.fx.tick())
            }
            function M() {
                return e.setTimeout(function() {
                    ht = void 0
                }),
                ht = de.now()
            }
            function $(e, t) {
                var n, r = 0, o = {
                    height: e
                };
                for (t = t ? 1 : 0; r < 4; r += 2 - t)
                    n = _e[r],
                    o["margin" + n] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e),
                o
            }
            function _(e, t, n) {
                for (var r, o = (U.tweeners[t] || []).concat(U.tweeners["*"]), i = 0, a = o.length; i < a; i++)
                    if (r = o[i].call(n, t, e))
                        return r
            }
            function W(e, t, n) {
                var r, o, i, a, s, u, l, c, f = "width"in t || "height"in t, p = this, h = {}, d = e.style, g = e.nodeType && We(e), v = Fe.get(e, "fxshow");
                n.queue || (a = de._queueHooks(e, "fx"),
                null == a.unqueued && (a.unqueued = 0,
                s = a.empty.fire,
                a.empty.fire = function() {
                    a.unqueued || s()
                }
                ),
                a.unqueued++,
                p.always(function() {
                    p.always(function() {
                        a.unqueued--,
                        de.queue(e, "fx").length || a.empty.fire()
                    })
                }));
                for (r in t)
                    if (o = t[r],
                    gt.test(o)) {
                        if (delete t[r],
                        i = i || "toggle" === o,
                        o === (g ? "hide" : "show")) {
                            if ("show" !== o || !v || void 0 === v[r])
                                continue;
                            g = !0
                        }
                        h[r] = v && v[r] || de.style(e, r)
                    }
                if (u = !de.isEmptyObject(t),
                u || !de.isEmptyObject(h)) {
                    f && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
                    l = v && v.display,
                    null == l && (l = Fe.get(e, "display")),
                    c = de.css(e, "display"),
                    "none" === c && (l ? c = l : (m([e], !0),
                    l = e.style.display || l,
                    c = de.css(e, "display"),
                    m([e]))),
                    ("inline" === c || "inline-block" === c && null != l) && "none" === de.css(e, "float") && (u || (p.done(function() {
                        d.display = l
                    }),
                    null == l && (c = d.display,
                    l = "none" === c ? "" : c)),
                    d.display = "inline-block")),
                    n.overflow && (d.overflow = "hidden",
                    p.always(function() {
                        d.overflow = n.overflow[0],
                        d.overflowX = n.overflow[1],
                        d.overflowY = n.overflow[2]
                    })),
                    u = !1;
                    for (r in h)
                        u || (v ? "hidden"in v && (g = v.hidden) : v = Fe.access(e, "fxshow", {
                            display: l
                        }),
                        i && (v.hidden = !g),
                        g && m([e], !0),
                        p.done(function() {
                            g || m([e]),
                            Fe.remove(e, "fxshow");
                            for (r in h)
                                de.style(e, r, h[r])
                        })),
                        u = _(g ? v[r] : 0, r, p),
                        r in v || (v[r] = u.start,
                        g && (u.end = u.start,
                        u.start = 0))
                }
            }
            function B(e, t) {
                var n, r, o, i, a;
                for (n in e)
                    if (r = de.camelCase(n),
                    o = t[r],
                    i = e[n],
                    de.isArray(i) && (o = i[1],
                    i = e[n] = i[0]),
                    n !== r && (e[r] = i,
                    delete e[n]),
                    a = de.cssHooks[r],
                    a && "expand"in a) {
                        i = a.expand(i),
                        delete e[r];
                        for (n in i)
                            n in e || (e[n] = i[n],
                            t[n] = o)
                    } else
                        t[r] = o
            }
            function U(e, t, n) {
                var r, o, i = 0, a = U.prefilters.length, s = de.Deferred().always(function() {
                    delete u.elem
                }), u = function() {
                    if (o)
                        return !1;
                    for (var t = ht || M(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, i = 1 - r, a = 0, u = l.tweens.length; a < u; a++)
                        l.tweens[a].run(i);
                    return s.notifyWith(e, [l, i, n]),
                    i < 1 && u ? n : (s.resolveWith(e, [l]),
                    !1)
                }, l = s.promise({
                    elem: e,
                    props: de.extend({}, t),
                    opts: de.extend(!0, {
                        specialEasing: {},
                        easing: de.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ht || M(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = de.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r),
                        r
                    },
                    stop: function(t) {
                        var n = 0
                          , r = t ? l.tweens.length : 0;
                        if (o)
                            return this;
                        for (o = !0; n < r; n++)
                            l.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [l, 1, 0]),
                        s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                        this
                    }
                }), c = l.props;
                for (B(c, l.opts.specialEasing); i < a; i++)
                    if (r = U.prefilters[i].call(l, e, c, l.opts))
                        return de.isFunction(r.stop) && (de._queueHooks(l.elem, l.opts.queue).stop = de.proxy(r.stop, r)),
                        r;
                return de.map(c, _, l),
                de.isFunction(l.opts.start) && l.opts.start.call(e, l),
                de.fx.timer(de.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })),
                l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
            }
            function z(e) {
                var t = e.match(qe) || [];
                return t.join(" ")
            }
            function X(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            function K(e, t, n, r) {
                var o;
                if (de.isArray(t))
                    de.each(t, function(t, o) {
                        n || Et.test(e) ? r(e, o) : K(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
                    });
                else if (n || "object" !== de.type(t))
                    r(e, t);
                else
                    for (o in t)
                        K(e + "[" + o + "]", t[o], n, r)
            }
            function V(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t,
                    t = "*");
                    var r, o = 0, i = t.toLowerCase().match(qe) || [];
                    if (de.isFunction(n))
                        for (; r = i[o++]; )
                            "+" === r[0] ? (r = r.slice(1) || "*",
                            (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
            function G(e, t, n, r) {
                function o(s) {
                    var u;
                    return i[s] = !0,
                    de.each(e[s] || [], function(e, s) {
                        var l = s(t, n, r);
                        return "string" != typeof l || a || i[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                        o(l),
                        !1)
                    }),
                    u
                }
                var i = {}
                  , a = e === Rt;
                return o(t.dataTypes[0]) || !i["*"] && o("*")
            }
            function Y(e, t) {
                var n, r, o = de.ajaxSettings.flatOptions || {};
                for (n in t)
                    void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
                return r && de.extend(!0, e, r),
                e
            }
            function Q(e, t, n) {
                for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                    u.shift(),
                    void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                    for (o in s)
                        if (s[o] && s[o].test(r)) {
                            u.unshift(o);
                            break
                        }
                if (u[0]in n)
                    i = u[0];
                else {
                    for (o in n) {
                        if (!u[0] || e.converters[o + " " + u[0]]) {
                            i = o;
                            break
                        }
                        a || (a = o)
                    }
                    i = i || a
                }
                if (i)
                    return i !== u[0] && u.unshift(i),
                    n[i]
            }
            function J(e, t, n, r) {
                var o, i, a, s, u, l = {}, c = e.dataTypes.slice();
                if (c[1])
                    for (a in e.converters)
                        l[a.toLowerCase()] = e.converters[a];
                for (i = c.shift(); i; )
                    if (e.responseFields[i] && (n[e.responseFields[i]] = t),
                    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    u = i,
                    i = c.shift())
                        if ("*" === i)
                            i = u;
                        else if ("*" !== u && u !== i) {
                            if (a = l[u + " " + i] || l["* " + i],
                            !a)
                                for (o in l)
                                    if (s = o.split(" "),
                                    s[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                        a === !0 ? a = l[o] : l[o] !== !0 && (i = s[0],
                                        c.unshift(s[1]));
                                        break
                                    }
                            if (a !== !0)
                                if (a && e.throws)
                                    t = a(t);
                                else
                                    try {
                                        t = a(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + u + " to " + i
                                        }
                                    }
                        }
                return {
                    state: "success",
                    data: t
                }
            }
            function Z(e) {
                return de.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }
            var ee = []
              , te = e.document
              , ne = Object.getPrototypeOf
              , re = ee.slice
              , oe = ee.concat
              , ie = ee.push
              , ae = ee.indexOf
              , se = {}
              , ue = se.toString
              , le = se.hasOwnProperty
              , ce = le.toString
              , fe = ce.call(Object)
              , pe = {}
              , he = "3.1.1"
              , de = function(e, t) {
                return new de.fn.init(e,t)
            }
              , ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
              , me = /^-ms-/
              , ve = /-([a-z])/g
              , ye = function(e, t) {
                return t.toUpperCase()
            };
            de.fn = de.prototype = {
                jquery: he,
                constructor: de,
                length: 0,
                toArray: function() {
                    return re.call(this)
                },
                get: function(e) {
                    return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = de.merge(this.constructor(), e);
                    return t.prevObject = this,
                    t
                },
                each: function(e) {
                    return de.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(de.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(re.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length
                      , n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: ie,
                sort: ee.sort,
                splice: ee.splice
            },
            de.extend = de.fn.extend = function() {
                var e, t, n, r, o, i, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
                for ("boolean" == typeof a && (l = a,
                a = arguments[s] || {},
                s++),
                "object" == typeof a || de.isFunction(a) || (a = {}),
                s === u && (a = this,
                s--); s < u; s++)
                    if (null != (e = arguments[s]))
                        for (t in e)
                            n = a[t],
                            r = e[t],
                            a !== r && (l && r && (de.isPlainObject(r) || (o = de.isArray(r))) ? (o ? (o = !1,
                            i = n && de.isArray(n) ? n : []) : i = n && de.isPlainObject(n) ? n : {},
                            a[t] = de.extend(l, i, r)) : void 0 !== r && (a[t] = r));
                return a
            }
            ,
            de.extend({
                expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === de.type(e)
                },
                isArray: Array.isArray,
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    var t = de.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                },
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== ue.call(e)) && (!(t = ne(e)) || (n = le.call(t, "constructor") && t.constructor,
                    "function" == typeof n && ce.call(n) === fe))
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e)
                        return !1;
                    return !0
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[ue.call(e)] || "object" : typeof e
                },
                globalEval: function(e) {
                    n(e)
                },
                camelCase: function(e) {
                    return e.replace(me, "ms-").replace(ve, ye)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t) {
                    var n, o = 0;
                    if (r(e))
                        for (n = e.length; o < n && t.call(e[o], o, e[o]) !== !1; o++)
                            ;
                    else
                        for (o in e)
                            if (t.call(e[o], o, e[o]) === !1)
                                break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(ge, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (r(Object(e)) ? de.merge(n, "string" == typeof e ? [e] : e) : ie.call(n, e)),
                    n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : ae.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                        e[o++] = t[r];
                    return e.length = o,
                    e
                },
                grep: function(e, t, n) {
                    for (var r, o = [], i = 0, a = e.length, s = !n; i < a; i++)
                        r = !t(e[i], i),
                        r !== s && o.push(e[i]);
                    return o
                },
                map: function(e, t, n) {
                    var o, i, a = 0, s = [];
                    if (r(e))
                        for (o = e.length; a < o; a++)
                            i = t(e[a], a, n),
                            null != i && s.push(i);
                    else
                        for (a in e)
                            i = t(e[a], a, n),
                            null != i && s.push(i);
                    return oe.apply([], s)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, r, o;
                    if ("string" == typeof t && (n = e[t],
                    t = e,
                    e = n),
                    de.isFunction(e))
                        return r = re.call(arguments, 2),
                        o = function() {
                            return e.apply(t || this, r.concat(re.call(arguments)))
                        }
                        ,
                        o.guid = e.guid = e.guid || de.guid++,
                        o
                },
                now: Date.now,
                support: pe
            }),
            "function" == typeof Symbol && (de.fn[Symbol.iterator] = ee[Symbol.iterator]),
            de.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                se["[object " + t + "]"] = t.toLowerCase()
            });
            var be = function(e) {
                function t(e, t, n, r) {
                    var o, i, a, s, u, l, c, p = t && t.ownerDocument, d = t ? t.nodeType : 9;
                    if (n = n || [],
                    "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d)
                        return n;
                    if (!r && ((t ? t.ownerDocument || t : _) !== L && O(t),
                    t = t || L,
                    F)) {
                        if (11 !== d && (u = ve.exec(e)))
                            if (o = u[1]) {
                                if (9 === d) {
                                    if (!(a = t.getElementById(o)))
                                        return n;
                                    if (a.id === o)
                                        return n.push(a),
                                        n
                                } else if (p && (a = p.getElementById(o)) && M(t, a) && a.id === o)
                                    return n.push(a),
                                    n
                            } else {
                                if (u[2])
                                    return J.apply(n, t.getElementsByTagName(e)),
                                    n;
                                if ((o = u[3]) && C.getElementsByClassName && t.getElementsByClassName)
                                    return J.apply(n, t.getElementsByClassName(o)),
                                    n
                            }
                        if (C.qsa && !X[e + " "] && (!P || !P.test(e))) {
                            if (1 !== d)
                                p = t,
                                c = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(we, Ce) : t.setAttribute("id", s = $),
                                l = E(e),
                                i = l.length; i--; )
                                    l[i] = "#" + s + " " + h(l[i]);
                                c = l.join(","),
                                p = ye.test(e) && f(t.parentNode) || t
                            }
                            if (c)
                                try {
                                    return J.apply(n, p.querySelectorAll(c)),
                                    n
                                } catch (e) {} finally {
                                    s === $ && t.removeAttribute("id")
                                }
                        }
                    }
                    return S(e.replace(se, "$1"), t, n, r)
                }
                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                        e[n + " "] = r
                    }
                    var t = [];
                    return e
                }
                function r(e) {
                    return e[$] = !0,
                    e
                }
                function o(e) {
                    var t = L.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null
                    }
                }
                function i(e, t) {
                    for (var n = e.split("|"), r = n.length; r--; )
                        T.attrHandle[n[r]] = t
                }
                function a(e, t) {
                    var n = t && e
                      , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r)
                        return r;
                    if (n)
                        for (; n = n.nextSibling; )
                            if (n === t)
                                return -1;
                    return e ? 1 : -1
                }
                function s(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }
                function u(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }
                function l(e) {
                    return function(t) {
                        return "form"in t ? t.parentNode && t.disabled === !1 ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ke(t) === e : t.disabled === e : "label"in t && t.disabled === e
                    }
                }
                function c(e) {
                    return r(function(t) {
                        return t = +t,
                        r(function(n, r) {
                            for (var o, i = e([], n.length, t), a = i.length; a--; )
                                n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                        })
                    })
                }
                function f(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }
                function p() {}
                function h(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++)
                        r += e[t].value;
                    return r
                }
                function d(e, t, n) {
                    var r = t.dir
                      , o = t.next
                      , i = o || r
                      , a = n && "parentNode" === i
                      , s = B++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[r]; )
                            if (1 === t.nodeType || a)
                                return e(t, n, o);
                        return !1
                    }
                    : function(t, n, u) {
                        var l, c, f, p = [W, s];
                        if (u) {
                            for (; t = t[r]; )
                                if ((1 === t.nodeType || a) && e(t, n, u))
                                    return !0
                        } else
                            for (; t = t[r]; )
                                if (1 === t.nodeType || a)
                                    if (f = t[$] || (t[$] = {}),
                                    c = f[t.uniqueID] || (f[t.uniqueID] = {}),
                                    o && o === t.nodeName.toLowerCase())
                                        t = t[r] || t;
                                    else {
                                        if ((l = c[i]) && l[0] === W && l[1] === s)
                                            return p[2] = l[2];
                                        if (c[i] = p,
                                        p[2] = e(t, n, u))
                                            return !0
                                    }
                        return !1
                    }
                }
                function g(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var o = e.length; o--; )
                            if (!e[o](t, n, r))
                                return !1;
                        return !0
                    }
                    : e[0]
                }
                function m(e, n, r) {
                    for (var o = 0, i = n.length; o < i; o++)
                        t(e, n[o], r);
                    return r
                }
                function v(e, t, n, r, o) {
                    for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                        (i = e[s]) && (n && !n(i, r, o) || (a.push(i),
                        l && t.push(s)));
                    return a
                }
                function y(e, t, n, o, i, a) {
                    return o && !o[$] && (o = y(o)),
                    i && !i[$] && (i = y(i, a)),
                    r(function(r, a, s, u) {
                        var l, c, f, p = [], h = [], d = a.length, g = r || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? g : v(g, p, e, s, u), b = n ? i || (r ? e : d || o) ? [] : a : y;
                        if (n && n(y, b, s, u),
                        o)
                            for (l = v(b, h),
                            o(l, [], s, u),
                            c = l.length; c--; )
                                (f = l[c]) && (b[h[c]] = !(y[h[c]] = f));
                        if (r) {
                            if (i || e) {
                                if (i) {
                                    for (l = [],
                                    c = b.length; c--; )
                                        (f = b[c]) && l.push(y[c] = f);
                                    i(null, b = [], l, u)
                                }
                                for (c = b.length; c--; )
                                    (f = b[c]) && (l = i ? ee(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
                            }
                        } else
                            b = v(b === a ? b.splice(d, b.length) : b),
                            i ? i(null, a, b, u) : J.apply(a, b)
                    })
                }
                function b(e) {
                    for (var t, n, r, o = e.length, i = T.relative[e[0].type], a = i || T.relative[" "], s = i ? 1 : 0, u = d(function(e) {
                        return e === t
                    }, a, !0), l = d(function(e) {
                        return ee(t, e) > -1
                    }, a, !0), c = [function(e, n, r) {
                        var o = !i && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                        return t = null,
                        o
                    }
                    ]; s < o; s++)
                        if (n = T.relative[e[s].type])
                            c = [d(g(c), n)];
                        else {
                            if (n = T.filter[e[s].type].apply(null, e[s].matches),
                            n[$]) {
                                for (r = ++s; r < o && !T.relative[e[r].type]; r++)
                                    ;
                                return y(s > 1 && g(c), s > 1 && h(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(se, "$1"), n, s < r && b(e.slice(s, r)), r < o && b(e = e.slice(r)), r < o && h(e))
                            }
                            c.push(n)
                        }
                    return g(c)
                }
                function x(e, n) {
                    var o = n.length > 0
                      , i = e.length > 0
                      , a = function(r, a, s, u, l) {
                        var c, f, p, h = 0, d = "0", g = r && [], m = [], y = A, b = r || i && T.find.TAG("*", l), x = W += null == y ? 1 : Math.random() || .1, w = b.length;
                        for (l && (A = a === L || a || l); d !== w && null != (c = b[d]); d++) {
                            if (i && c) {
                                for (f = 0,
                                a || c.ownerDocument === L || (O(c),
                                s = !F); p = e[f++]; )
                                    if (p(c, a || L, s)) {
                                        u.push(c);
                                        break
                                    }
                                l && (W = x)
                            }
                            o && ((c = !p && c) && h--,
                            r && g.push(c))
                        }
                        if (h += d,
                        o && d !== h) {
                            for (f = 0; p = n[f++]; )
                                p(g, m, a, s);
                            if (r) {
                                if (h > 0)
                                    for (; d--; )
                                        g[d] || m[d] || (m[d] = Y.call(u));
                                m = v(m)
                            }
                            J.apply(u, m),
                            l && !r && m.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                        }
                        return l && (W = x,
                        A = y),
                        g
                    };
                    return o ? r(a) : a
                }
                var w, C, T, k, j, E, N, S, A, q, D, O, L, H, F, P, I, R, M, $ = "sizzle" + 1 * new Date, _ = e.document, W = 0, B = 0, U = n(), z = n(), X = n(), K = function(e, t) {
                    return e === t && (D = !0),
                    0
                }, V = {}.hasOwnProperty, G = [], Y = G.pop, Q = G.push, J = G.push, Z = G.slice, ee = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t)
                            return n;
                    return -1
                }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\0-\\xa0]|:)+", oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", ie = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", ae = new RegExp(ne + "+","g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), ue = new RegExp("^" + ne + "*," + ne + "*"), le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), fe = new RegExp(ie), pe = new RegExp("^" + re + "$"), he = {
                    ID: new RegExp("^#(" + re + ")"),
                    CLASS: new RegExp("^\\.(" + re + ")"),
                    TAG: new RegExp("^(" + re + "|[*])"),
                    ATTR: new RegExp("^" + oe),
                    PSEUDO: new RegExp("^" + ie),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
                    bool: new RegExp("^(?:" + te + ")$","i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
                }, de = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), xe = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                }, we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Ce = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }, Te = function() {
                    O()
                }, ke = d(function(e) {
                    return e.disabled === !0 && ("form"in e || "label"in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    J.apply(G = Z.call(_.childNodes), _.childNodes),
                    G[_.childNodes.length].nodeType
                } catch (e) {
                    J = {
                        apply: G.length ? function(e, t) {
                            Q.apply(e, Z.call(t))
                        }
                        : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++]; )
                                ;
                            e.length = n - 1
                        }
                    }
                }
                C = t.support = {},
                j = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }
                ,
                O = t.setDocument = function(e) {
                    var t, n, r = e ? e.ownerDocument || e : _;
                    return r !== L && 9 === r.nodeType && r.documentElement ? (L = r,
                    H = L.documentElement,
                    F = !j(L),
                    _ !== L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)),
                    C.attributes = o(function(e) {
                        return e.className = "i",
                        !e.getAttribute("className")
                    }),
                    C.getElementsByTagName = o(function(e) {
                        return e.appendChild(L.createComment("")),
                        !e.getElementsByTagName("*").length
                    }),
                    C.getElementsByClassName = me.test(L.getElementsByClassName),
                    C.getById = o(function(e) {
                        return H.appendChild(e).id = $,
                        !L.getElementsByName || !L.getElementsByName($).length
                    }),
                    C.getById ? (T.filter.ID = function(e) {
                        var t = e.replace(be, xe);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }
                    ,
                    T.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && F) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }
                    ) : (T.filter.ID = function(e) {
                        var t = e.replace(be, xe);
                        return function(e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }
                    ,
                    T.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && F) {
                            var n, r, o, i = t.getElementById(e);
                            if (i) {
                                if (n = i.getAttributeNode("id"),
                                n && n.value === e)
                                    return [i];
                                for (o = t.getElementsByName(e),
                                r = 0; i = o[r++]; )
                                    if (n = i.getAttributeNode("id"),
                                    n && n.value === e)
                                        return [i]
                            }
                            return []
                        }
                    }
                    ),
                    T.find.TAG = C.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : C.qsa ? t.querySelectorAll(e) : void 0
                    }
                    : function(e, t) {
                        var n, r = [], o = 0, i = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = i[o++]; )
                                1 === n.nodeType && r.push(n);
                            return r
                        }
                        return i
                    }
                    ,
                    T.find.CLASS = C.getElementsByClassName && function(e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && F)
                            return t.getElementsByClassName(e)
                    }
                    ,
                    I = [],
                    P = [],
                    (C.qsa = me.test(L.querySelectorAll)) && (o(function(e) {
                        H.appendChild(e).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"),
                        e.querySelectorAll("[id~=" + $ + "-]").length || P.push("~="),
                        e.querySelectorAll(":checked").length || P.push(":checked"),
                        e.querySelectorAll("a#" + $ + "+*").length || P.push(".#.+[+~]")
                    }),
                    o(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = L.createElement("input");
                        t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length && P.push(":enabled", ":disabled"),
                        H.appendChild(e).disabled = !0,
                        2 !== e.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        P.push(",.*:")
                    })),
                    (C.matchesSelector = me.test(R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
                        C.disconnectedMatch = R.call(e, "*"),
                        R.call(e, "[s!='']:x"),
                        I.push("!=", ie)
                    }),
                    P = P.length && new RegExp(P.join("|")),
                    I = I.length && new RegExp(I.join("|")),
                    t = me.test(H.compareDocumentPosition),
                    M = t || me.test(H.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e
                          , r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    }
                    : function(e, t) {
                        if (t)
                            for (; t = t.parentNode; )
                                if (t === e)
                                    return !0;
                        return !1
                    }
                    ,
                    K = t ? function(e, t) {
                        if (e === t)
                            return D = !0,
                            0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                        1 & n || !C.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === _ && M(_, e) ? -1 : t === L || t.ownerDocument === _ && M(_, t) ? 1 : q ? ee(q, e) - ee(q, t) : 0 : 4 & n ? -1 : 1)
                    }
                    : function(e, t) {
                        if (e === t)
                            return D = !0,
                            0;
                        var n, r = 0, o = e.parentNode, i = t.parentNode, s = [e], u = [t];
                        if (!o || !i)
                            return e === L ? -1 : t === L ? 1 : o ? -1 : i ? 1 : q ? ee(q, e) - ee(q, t) : 0;
                        if (o === i)
                            return a(e, t);
                        for (n = e; n = n.parentNode; )
                            s.unshift(n);
                        for (n = t; n = n.parentNode; )
                            u.unshift(n);
                        for (; s[r] === u[r]; )
                            r++;
                        return r ? a(s[r], u[r]) : s[r] === _ ? -1 : u[r] === _ ? 1 : 0
                    }
                    ,
                    L) : L
                }
                ,
                t.matches = function(e, n) {
                    return t(e, null, null, n)
                }
                ,
                t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== L && O(e),
                    n = n.replace(ce, "='$1']"),
                    C.matchesSelector && F && !X[n + " "] && (!I || !I.test(n)) && (!P || !P.test(n)))
                        try {
                            var r = R.call(e, n);
                            if (r || C.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                return r
                        } catch (e) {}
                    return t(n, L, null, [e]).length > 0
                }
                ,
                t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== L && O(e),
                    M(e, t)
                }
                ,
                t.attr = function(e, t) {
                    (e.ownerDocument || e) !== L && O(e);
                    var n = T.attrHandle[t.toLowerCase()]
                      , r = n && V.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
                    return void 0 !== r ? r : C.attributes || !F ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }
                ,
                t.escape = function(e) {
                    return (e + "").replace(we, Ce)
                }
                ,
                t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }
                ,
                t.uniqueSort = function(e) {
                    var t, n = [], r = 0, o = 0;
                    if (D = !C.detectDuplicates,
                    q = !C.sortStable && e.slice(0),
                    e.sort(K),
                    D) {
                        for (; t = e[o++]; )
                            t === e[o] && (r = n.push(o));
                        for (; r--; )
                            e.splice(n[r], 1)
                    }
                    return q = null,
                    e
                }
                ,
                k = t.getText = function(e) {
                    var t, n = "", r = 0, o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                n += k(e)
                        } else if (3 === o || 4 === o)
                            return e.nodeValue
                    } else
                        for (; t = e[r++]; )
                            n += k(t);
                    return n
                }
                ,
                T = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: he,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(be, xe),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                            e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                            e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(be, xe).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            }
                            : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = U[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && U(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, n, r) {
                            return function(o) {
                                var i = t.attr(o, e);
                                return null == i ? "!=" === n : !n || (i += "",
                                "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"))
                            }
                        },
                        CHILD: function(e, t, n, r, o) {
                            var i = "nth" !== e.slice(0, 3)
                              , a = "last" !== e.slice(-4)
                              , s = "of-type" === t;
                            return 1 === r && 0 === o ? function(e) {
                                return !!e.parentNode
                            }
                            : function(t, n, u) {
                                var l, c, f, p, h, d, g = i !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s, b = !1;
                                if (m) {
                                    if (i) {
                                        for (; g; ) {
                                            for (p = t; p = p[g]; )
                                                if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                                    return !1;
                                            d = g = "only" === e && !d && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (d = [a ? m.firstChild : m.lastChild],
                                    a && y) {
                                        for (p = m,
                                        f = p[$] || (p[$] = {}),
                                        c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                        l = c[e] || [],
                                        h = l[0] === W && l[1],
                                        b = h && l[2],
                                        p = h && m.childNodes[h]; p = ++h && p && p[g] || (b = h = 0) || d.pop(); )
                                            if (1 === p.nodeType && ++b && p === t) {
                                                c[e] = [W, h, b];
                                                break
                                            }
                                    } else if (y && (p = t,
                                    f = p[$] || (p[$] = {}),
                                    c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                    l = c[e] || [],
                                    h = l[0] === W && l[1],
                                    b = h),
                                    b === !1)
                                        for (; (p = ++h && p && p[g] || (b = h = 0) || d.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (f = p[$] || (p[$] = {}),
                                        c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                        c[e] = [W, b]),
                                        p !== t)); )
                                            ;
                                    return b -= o,
                                    b === r || b % r === 0 && b / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, n) {
                            var o, i = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return i[$] ? i(n) : i.length > 1 ? (o = [e, e, "", n],
                            T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                for (var r, o = i(e, n), a = o.length; a--; )
                                    r = ee(e, o[a]),
                                    e[r] = !(t[r] = o[a])
                            }) : function(e) {
                                return i(e, 0, o)
                            }
                            ) : i
                        }
                    },
                    pseudos: {
                        not: r(function(e) {
                            var t = []
                              , n = []
                              , o = N(e.replace(se, "$1"));
                            return o[$] ? r(function(e, t, n, r) {
                                for (var i, a = o(e, null, r, []), s = e.length; s--; )
                                    (i = a[s]) && (e[s] = !(t[s] = i))
                            }) : function(e, r, i) {
                                return t[0] = e,
                                o(t, null, i, n),
                                t[0] = null,
                                !n.pop()
                            }
                        }),
                        has: r(function(e) {
                            return function(n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: r(function(e) {
                            return e = e.replace(be, xe),
                            function(t) {
                                return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                            }
                        }),
                        lang: r(function(e) {
                            return pe.test(e || "") || t.error("unsupported lang: " + e),
                            e = e.replace(be, xe).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return n = n.toLowerCase(),
                                        n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === H
                        },
                        focus: function(e) {
                            return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: l(!1),
                        disabled: l(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex,
                            e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !T.pseudos.empty(e)
                        },
                        header: function(e) {
                            return ge.test(e.nodeName)
                        },
                        input: function(e) {
                            return de.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(e, t) {
                            return [t - 1]
                        }),
                        eq: c(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: c(function(e, t) {
                            for (var n = 0; n < t; n += 2)
                                e.push(n);
                            return e
                        }),
                        odd: c(function(e, t) {
                            for (var n = 1; n < t; n += 2)
                                e.push(n);
                            return e
                        }),
                        lt: c(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0; )
                                e.push(r);
                            return e
                        }),
                        gt: c(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t; )
                                e.push(r);
                            return e
                        })
                    }
                },
                T.pseudos.nth = T.pseudos.eq;
                for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    T.pseudos[w] = s(w);
                for (w in {
                    submit: !0,
                    reset: !0
                })
                    T.pseudos[w] = u(w);
                return p.prototype = T.filters = T.pseudos,
                T.setFilters = new p,
                E = t.tokenize = function(e, n) {
                    var r, o, i, a, s, u, l, c = z[e + " "];
                    if (c)
                        return n ? 0 : c.slice(0);
                    for (s = e,
                    u = [],
                    l = T.preFilter; s; ) {
                        r && !(o = ue.exec(s)) || (o && (s = s.slice(o[0].length) || s),
                        u.push(i = [])),
                        r = !1,
                        (o = le.exec(s)) && (r = o.shift(),
                        i.push({
                            value: r,
                            type: o[0].replace(se, " ")
                        }),
                        s = s.slice(r.length));
                        for (a in T.filter)
                            !(o = he[a].exec(s)) || l[a] && !(o = l[a](o)) || (r = o.shift(),
                            i.push({
                                value: r,
                                type: a,
                                matches: o
                            }),
                            s = s.slice(r.length));
                        if (!r)
                            break
                    }
                    return n ? s.length : s ? t.error(e) : z(e, u).slice(0)
                }
                ,
                N = t.compile = function(e, t) {
                    var n, r = [], o = [], i = X[e + " "];
                    if (!i) {
                        for (t || (t = E(e)),
                        n = t.length; n--; )
                            i = b(t[n]),
                            i[$] ? r.push(i) : o.push(i);
                        i = X(e, x(o, r)),
                        i.selector = e
                    }
                    return i
                }
                ,
                S = t.select = function(e, t, n, r) {
                    var o, i, a, s, u, l = "function" == typeof e && e, c = !r && E(e = l.selector || e);
                    if (n = n || [],
                    1 === c.length) {
                        if (i = c[0] = c[0].slice(0),
                        i.length > 2 && "ID" === (a = i[0]).type && 9 === t.nodeType && F && T.relative[i[1].type]) {
                            if (t = (T.find.ID(a.matches[0].replace(be, xe), t) || [])[0],
                            !t)
                                return n;
                            l && (t = t.parentNode),
                            e = e.slice(i.shift().value.length)
                        }
                        for (o = he.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o],
                        !T.relative[s = a.type]); )
                            if ((u = T.find[s]) && (r = u(a.matches[0].replace(be, xe), ye.test(i[0].type) && f(t.parentNode) || t))) {
                                if (i.splice(o, 1),
                                e = r.length && h(i),
                                !e)
                                    return J.apply(n, r),
                                    n;
                                break
                            }
                    }
                    return (l || N(e, c))(r, t, !F, n, !t || ye.test(e) && f(t.parentNode) || t),
                    n
                }
                ,
                C.sortStable = $.split("").sort(K).join("") === $,
                C.detectDuplicates = !!D,
                O(),
                C.sortDetached = o(function(e) {
                    return 1 & e.compareDocumentPosition(L.createElement("fieldset"))
                }),
                o(function(e) {
                    return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
                }) || i("type|href|height|width", function(e, t, n) {
                    if (!n)
                        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }),
                C.attributes && o(function(e) {
                    return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                }) || i("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue
                }),
                o(function(e) {
                    return null == e.getAttribute("disabled")
                }) || i(te, function(e, t, n) {
                    var r;
                    if (!n)
                        return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }),
                t
            }(e);
            de.find = be,
            de.expr = be.selectors,
            de.expr[":"] = de.expr.pseudos,
            de.uniqueSort = de.unique = be.uniqueSort,
            de.text = be.getText,
            de.isXMLDoc = be.isXML,
            de.contains = be.contains,
            de.escapeSelector = be.escape;
            var xe = function(e, t, n) {
                for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                    if (1 === e.nodeType) {
                        if (o && de(e).is(n))
                            break;
                        r.push(e)
                    }
                return r
            }
              , we = function(e, t) {
                for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n
            }
              , Ce = de.expr.match.needsContext
              , Te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
              , ke = /^.[^:#\[\.,]*$/;
            de.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === r.nodeType ? de.find.matchesSelector(r, e) ? [r] : [] : de.find.matches(e, de.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }
            ,
            de.fn.extend({
                find: function(e) {
                    var t, n, r = this.length, o = this;
                    if ("string" != typeof e)
                        return this.pushStack(de(e).filter(function() {
                            for (t = 0; t < r; t++)
                                if (de.contains(o[t], this))
                                    return !0
                        }));
                    for (n = this.pushStack([]),
                    t = 0; t < r; t++)
                        de.find(e, o[t], n);
                    return r > 1 ? de.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(o(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(o(this, e || [], !0))
                },
                is: function(e) {
                    return !!o(this, "string" == typeof e && Ce.test(e) ? de(e) : e || [], !1).length
                }
            });
            var je, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Ne = de.fn.init = function(e, t, n) {
                var r, o;
                if (!e)
                    return this;
                if (n = n || je,
                "string" == typeof e) {
                    if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ee.exec(e),
                    !r || !r[1] && t)
                        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof de ? t[0] : t,
                        de.merge(this, de.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : te, !0)),
                        Te.test(r[1]) && de.isPlainObject(t))
                            for (r in t)
                                de.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return o = te.getElementById(r[2]),
                    o && (this[0] = o,
                    this.length = 1),
                    this
                }
                return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : de.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(de) : de.makeArray(e, this)
            }
            ;
            Ne.prototype = de.fn,
            je = de(te);
            var Se = /^(?:parents|prev(?:Until|All))/
              , Ae = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            de.fn.extend({
                has: function(e) {
                    var t = de(e, this)
                      , n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (de.contains(this, t[e]))
                                return !0
                    })
                },
                closest: function(e, t) {
                    var n, r = 0, o = this.length, i = [], a = "string" != typeof e && de(e);
                    if (!Ce.test(e))
                        for (; r < o; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && de.find.matchesSelector(n, e))) {
                                    i.push(n);
                                    break
                                }
                    return this.pushStack(i.length > 1 ? de.uniqueSort(i) : i)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? ae.call(de(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(de.uniqueSort(de.merge(this.get(), de(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }),
            de.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return xe(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return xe(e, "parentNode", n)
                },
                next: function(e) {
                    return i(e, "nextSibling")
                },
                prev: function(e) {
                    return i(e, "previousSibling")
                },
                nextAll: function(e) {
                    return xe(e, "nextSibling")
                },
                prevAll: function(e) {
                    return xe(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return xe(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return xe(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return we((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return we(e.firstChild)
                },
                contents: function(e) {
                    return e.contentDocument || de.merge([], e.childNodes)
                }
            }, function(e, t) {
                de.fn[e] = function(n, r) {
                    var o = de.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (o = de.filter(r, o)),
                    this.length > 1 && (Ae[e] || de.uniqueSort(o),
                    Se.test(e) && o.reverse()),
                    this.pushStack(o)
                }
            });
            var qe = /[^\x20\t\r\n\f]+/g;
            de.Callbacks = function(e) {
                e = "string" == typeof e ? a(e) : de.extend({}, e);
                var t, n, r, o, i = [], s = [], u = -1, l = function() {
                    for (o = e.once,
                    r = t = !0; s.length; u = -1)
                        for (n = s.shift(); ++u < i.length; )
                            i[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = i.length,
                            n = !1);
                    e.memory || (n = !1),
                    t = !1,
                    o && (i = n ? [] : "")
                }, c = {
                    add: function() {
                        return i && (n && !t && (u = i.length - 1,
                        s.push(n)),
                        function t(n) {
                            de.each(n, function(n, r) {
                                de.isFunction(r) ? e.unique && c.has(r) || i.push(r) : r && r.length && "string" !== de.type(r) && t(r)
                            })
                        }(arguments),
                        n && !t && l()),
                        this
                    },
                    remove: function() {
                        return de.each(arguments, function(e, t) {
                            for (var n; (n = de.inArray(t, i, n)) > -1; )
                                i.splice(n, 1),
                                n <= u && u--
                        }),
                        this
                    },
                    has: function(e) {
                        return e ? de.inArray(e, i) > -1 : i.length > 0
                    },
                    empty: function() {
                        return i && (i = []),
                        this
                    },
                    disable: function() {
                        return o = s = [],
                        i = n = "",
                        this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return o = s = [],
                        n || t || (i = n = ""),
                        this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(e, n) {
                        return o || (n = n || [],
                        n = [e, n.slice ? n.slice() : n],
                        s.push(n),
                        t || l()),
                        this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !!r
                    }
                };
                return c
            }
            ,
            de.extend({
                Deferred: function(t) {
                    var n = [["notify", "progress", de.Callbacks("memory"), de.Callbacks("memory"), 2], ["resolve", "done", de.Callbacks("once memory"), de.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", de.Callbacks("once memory"), de.Callbacks("once memory"), 1, "rejected"]]
                      , r = "pending"
                      , o = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments),
                            this
                        },
                        catch: function(e) {
                            return o.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return de.Deferred(function(t) {
                                de.each(n, function(n, r) {
                                    var o = de.isFunction(e[r[4]]) && e[r[4]];
                                    i[r[1]](function() {
                                        var e = o && o.apply(this, arguments);
                                        e && de.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, o ? [e] : arguments)
                                    })
                                }),
                                e = null
                            }).promise()
                        },
                        then: function(t, r, o) {
                            function i(t, n, r, o) {
                                return function() {
                                    var l = this
                                      , c = arguments
                                      , f = function() {
                                        var e, f;
                                        if (!(t < a)) {
                                            if (e = r.apply(l, c),
                                            e === n.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                            de.isFunction(f) ? o ? f.call(e, i(a, n, s, o), i(a, n, u, o)) : (a++,
                                            f.call(e, i(a, n, s, o), i(a, n, u, o), i(a, n, s, n.notifyWith))) : (r !== s && (l = void 0,
                                            c = [e]),
                                            (o || n.resolveWith)(l, c))
                                        }
                                    }
                                      , p = o ? f : function() {
                                        try {
                                            f()
                                        } catch (e) {
                                            de.Deferred.exceptionHook && de.Deferred.exceptionHook(e, p.stackTrace),
                                            t + 1 >= a && (r !== u && (l = void 0,
                                            c = [e]),
                                            n.rejectWith(l, c))
                                        }
                                    }
                                    ;
                                    t ? p() : (de.Deferred.getStackHook && (p.stackTrace = de.Deferred.getStackHook()),
                                    e.setTimeout(p))
                                }
                            }
                            var a = 0;
                            return de.Deferred(function(e) {
                                n[0][3].add(i(0, e, de.isFunction(o) ? o : s, e.notifyWith)),
                                n[1][3].add(i(0, e, de.isFunction(t) ? t : s)),
                                n[2][3].add(i(0, e, de.isFunction(r) ? r : u))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? de.extend(e, o) : o
                        }
                    }
                      , i = {};
                    return de.each(n, function(e, t) {
                        var a = t[2]
                          , s = t[5];
                        o[t[1]] = a.add,
                        s && a.add(function() {
                            r = s
                        }, n[3 - e][2].disable, n[0][2].lock),
                        a.add(t[3].fire),
                        i[t[0]] = function() {
                            return i[t[0] + "With"](this === i ? void 0 : this, arguments),
                            this
                        }
                        ,
                        i[t[0] + "With"] = a.fireWith
                    }),
                    o.promise(i),
                    t && t.call(i, i),
                    i
                },
                when: function(e) {
                    var t = arguments.length
                      , n = t
                      , r = Array(n)
                      , o = re.call(arguments)
                      , i = de.Deferred()
                      , a = function(e) {
                        return function(n) {
                            r[e] = this,
                            o[e] = arguments.length > 1 ? re.call(arguments) : n,
                            --t || i.resolveWith(r, o)
                        }
                    };
                    if (t <= 1 && (l(e, i.done(a(n)).resolve, i.reject),
                    "pending" === i.state() || de.isFunction(o[n] && o[n].then)))
                        return i.then();
                    for (; n--; )
                        l(o[n], a(n), i.reject);
                    return i.promise()
                }
            });
            var De = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            de.Deferred.exceptionHook = function(t, n) {
                e.console && e.console.warn && t && De.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
            }
            ,
            de.readyException = function(t) {
                e.setTimeout(function() {
                    throw t
                })
            }
            ;
            var Oe = de.Deferred();
            de.fn.ready = function(e) {
                return Oe.then(e).catch(function(e) {
                    de.readyException(e)
                }),
                this
            }
            ,
            de.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? de.readyWait++ : de.ready(!0)
                },
                ready: function(e) {
                    (e === !0 ? --de.readyWait : de.isReady) || (de.isReady = !0,
                    e !== !0 && --de.readyWait > 0 || Oe.resolveWith(te, [de]))
                }
            }),
            de.ready.then = Oe.then,
            "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(de.ready) : (te.addEventListener("DOMContentLoaded", c),
            e.addEventListener("load", c));
            var Le = function(e, t, n, r, o, i, a) {
                var s = 0
                  , u = e.length
                  , l = null == n;
                if ("object" === de.type(n)) {
                    o = !0;
                    for (s in n)
                        Le(e, t, s, n[s], !0, i, a)
                } else if (void 0 !== r && (o = !0,
                de.isFunction(r) || (a = !0),
                l && (a ? (t.call(e, r),
                t = null) : (l = t,
                t = function(e, t, n) {
                    return l.call(de(e), n)
                }
                )),
                t))
                    for (; s < u; s++)
                        t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
            }
              , He = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
            f.uid = 1,
            f.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {},
                    He(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))),
                    t
                },
                set: function(e, t, n) {
                    var r, o = this.cache(e);
                    if ("string" == typeof t)
                        o[de.camelCase(t)] = n;
                    else
                        for (r in t)
                            o[de.camelCase(r)] = t[r];
                    return o
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][de.camelCase(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            de.isArray(t) ? t = t.map(de.camelCase) : (t = de.camelCase(t),
                            t = t in r ? [t] : t.match(qe) || []),
                            n = t.length;
                            for (; n--; )
                                delete r[t[n]]
                        }
                        (void 0 === t || de.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !de.isEmptyObject(t)
                }
            };
            var Fe = new f
              , Pe = new f
              , Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , Re = /[A-Z]/g;
            de.extend({
                hasData: function(e) {
                    return Pe.hasData(e) || Fe.hasData(e)
                },
                data: function(e, t, n) {
                    return Pe.access(e, t, n)
                },
                removeData: function(e, t) {
                    Pe.remove(e, t)
                },
                _data: function(e, t, n) {
                    return Fe.access(e, t, n)
                },
                _removeData: function(e, t) {
                    Fe.remove(e, t)
                }
            }),
            de.fn.extend({
                data: function(e, t) {
                    var n, r, o, i = this[0], a = i && i.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = Pe.get(i),
                        1 === i.nodeType && !Fe.get(i, "hasDataAttrs"))) {
                            for (n = a.length; n--; )
                                a[n] && (r = a[n].name,
                                0 === r.indexOf("data-") && (r = de.camelCase(r.slice(5)),
                                h(i, r, o[r])));
                            Fe.set(i, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each(function() {
                        Pe.set(this, e)
                    }) : Le(this, function(t) {
                        var n;
                        if (i && void 0 === t) {
                            if (n = Pe.get(i, e),
                            void 0 !== n)
                                return n;
                            if (n = h(i, e),
                            void 0 !== n)
                                return n
                        } else
                            this.each(function() {
                                Pe.set(this, e, t)
                            })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        Pe.remove(this, e)
                    })
                }
            }),
            de.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e)
                        return t = (t || "fx") + "queue",
                        r = Fe.get(e, t),
                        n && (!r || de.isArray(n) ? r = Fe.access(e, t, de.makeArray(n)) : r.push(n)),
                        r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = de.queue(e, t)
                      , r = n.length
                      , o = n.shift()
                      , i = de._queueHooks(e, t)
                      , a = function() {
                        de.dequeue(e, t)
                    };
                    "inprogress" === o && (o = n.shift(),
                    r--),
                    o && ("fx" === t && n.unshift("inprogress"),
                    delete i.stop,
                    o.call(e, a, i)),
                    !r && i && i.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return Fe.get(e, n) || Fe.access(e, n, {
                        empty: de.Callbacks("once memory").add(function() {
                            Fe.remove(e, [t + "queue", n])
                        })
                    })
                }
            }),
            de.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e,
                    e = "fx",
                    n--),
                    arguments.length < n ? de.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = de.queue(this, e, t);
                        de._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && de.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        de.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1, o = de.Deferred(), i = this, a = this.length, s = function() {
                        --r || o.resolveWith(i, [i])
                    };
                    for ("string" != typeof e && (t = e,
                    e = void 0),
                    e = e || "fx"; a--; )
                        n = Fe.get(i[a], e + "queueHooks"),
                        n && n.empty && (r++,
                        n.empty.add(s));
                    return s(),
                    o.promise(t)
                }
            });
            var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
              , $e = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$","i")
              , _e = ["Top", "Right", "Bottom", "Left"]
              , We = function(e, t) {
                return e = t || e,
                "none" === e.style.display || "" === e.style.display && de.contains(e.ownerDocument, e) && "none" === de.css(e, "display")
            }
              , Be = function(e, t, n, r) {
                var o, i, a = {};
                for (i in t)
                    a[i] = e.style[i],
                    e.style[i] = t[i];
                o = n.apply(e, r || []);
                for (i in t)
                    e.style[i] = a[i];
                return o
            }
              , Ue = {};
            de.fn.extend({
                show: function() {
                    return m(this, !0)
                },
                hide: function() {
                    return m(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        We(this) ? de(this).show() : de(this).hide()
                    })
                }
            });
            var ze = /^(?:checkbox|radio)$/i
              , Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
              , Ke = /^$|\/(?:java|ecma)script/i
              , Ve = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            Ve.optgroup = Ve.option,
            Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead,
            Ve.th = Ve.td;
            var Ge = /<|&#?\w+;/;
            !function() {
                var e = te.createDocumentFragment()
                  , t = e.appendChild(te.createElement("div"))
                  , n = te.createElement("input");
                n.setAttribute("type", "radio"),
                n.setAttribute("checked", "checked"),
                n.setAttribute("name", "t"),
                t.appendChild(n),
                pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
                t.innerHTML = "<textarea>x</textarea>",
                pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var Ye = te.documentElement
              , Qe = /^key/
              , Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
              , Ze = /^([^.]*)(?:\.(.+)|)/;
            de.event = {
                global: {},
                add: function(e, t, n, r, o) {
                    var i, a, s, u, l, c, f, p, h, d, g, m = Fe.get(e);
                    if (m)
                        for (n.handler && (i = n,
                        n = i.handler,
                        o = i.selector),
                        o && de.find.matchesSelector(Ye, o),
                        n.guid || (n.guid = de.guid++),
                        (u = m.events) || (u = m.events = {}),
                        (a = m.handle) || (a = m.handle = function(t) {
                            return "undefined" != typeof de && de.event.triggered !== t.type ? de.event.dispatch.apply(e, arguments) : void 0
                        }
                        ),
                        t = (t || "").match(qe) || [""],
                        l = t.length; l--; )
                            s = Ze.exec(t[l]) || [],
                            h = g = s[1],
                            d = (s[2] || "").split(".").sort(),
                            h && (f = de.event.special[h] || {},
                            h = (o ? f.delegateType : f.bindType) || h,
                            f = de.event.special[h] || {},
                            c = de.extend({
                                type: h,
                                origType: g,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: o,
                                needsContext: o && de.expr.match.needsContext.test(o),
                                namespace: d.join(".")
                            }, i),
                            (p = u[h]) || (p = u[h] = [],
                            p.delegateCount = 0,
                            f.setup && f.setup.call(e, r, d, a) !== !1 || e.addEventListener && e.addEventListener(h, a)),
                            f.add && (f.add.call(e, c),
                            c.handler.guid || (c.handler.guid = n.guid)),
                            o ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            de.event.global[h] = !0)
                },
                remove: function(e, t, n, r, o) {
                    var i, a, s, u, l, c, f, p, h, d, g, m = Fe.hasData(e) && Fe.get(e);
                    if (m && (u = m.events)) {
                        for (t = (t || "").match(qe) || [""],
                        l = t.length; l--; )
                            if (s = Ze.exec(t[l]) || [],
                            h = g = s[1],
                            d = (s[2] || "").split(".").sort(),
                            h) {
                                for (f = de.event.special[h] || {},
                                h = (r ? f.delegateType : f.bindType) || h,
                                p = u[h] || [],
                                s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                a = i = p.length; i--; )
                                    c = p[i],
                                    !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(i, 1),
                                    c.selector && p.delegateCount--,
                                    f.remove && f.remove.call(e, c));
                                a && !p.length && (f.teardown && f.teardown.call(e, d, m.handle) !== !1 || de.removeEvent(e, h, m.handle),
                                delete u[h])
                            } else
                                for (h in u)
                                    de.event.remove(e, h + t[l], n, r, !0);
                        de.isEmptyObject(u) && Fe.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, r, o, i, a, s = de.event.fix(e), u = new Array(arguments.length), l = (Fe.get(this, "events") || {})[s.type] || [], c = de.event.special[s.type] || {};
                    for (u[0] = s,
                    t = 1; t < arguments.length; t++)
                        u[t] = arguments[t];
                    if (s.delegateTarget = this,
                    !c.preDispatch || c.preDispatch.call(this, s) !== !1) {
                        for (a = de.event.handlers.call(this, s, l),
                        t = 0; (o = a[t++]) && !s.isPropagationStopped(); )
                            for (s.currentTarget = o.elem,
                            n = 0; (i = o.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                                s.rnamespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i,
                                s.data = i.data,
                                r = ((de.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u),
                                void 0 !== r && (s.result = r) === !1 && (s.preventDefault(),
                                s.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, s),
                        s.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, o, i, a, s = [], u = t.delegateCount, l = e.target;
                    if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && ("click" !== e.type || l.disabled !== !0)) {
                                for (i = [],
                                a = {},
                                n = 0; n < u; n++)
                                    r = t[n],
                                    o = r.selector + " ",
                                    void 0 === a[o] && (a[o] = r.needsContext ? de(o, this).index(l) > -1 : de.find(o, this, null, [l]).length),
                                    a[o] && i.push(r);
                                i.length && s.push({
                                    elem: l,
                                    handlers: i
                                })
                            }
                    return l = this,
                    u < t.length && s.push({
                        elem: l,
                        handlers: t.slice(u)
                    }),
                    s
                },
                addProp: function(e, t) {
                    Object.defineProperty(de.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: de.isFunction(t) ? function() {
                            if (this.originalEvent)
                                return t(this.originalEvent)
                        }
                        : function() {
                            if (this.originalEvent)
                                return this.originalEvent[e]
                        }
                        ,
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[de.expando] ? e : new de.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== C() && this.focus)
                                return this.focus(),
                                !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === C() && this.blur)
                                return this.blur(),
                                !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && de.nodeName(this, "input"))
                                return this.click(),
                                !1
                        },
                        _default: function(e) {
                            return de.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            },
            de.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }
            ,
            de.Event = function(e, t) {
                return this instanceof de.Event ? (e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? x : w,
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                this.currentTarget = e.currentTarget,
                this.relatedTarget = e.relatedTarget) : this.type = e,
                t && de.extend(this, t),
                this.timeStamp = e && e.timeStamp || de.now(),
                void (this[de.expando] = !0)) : new de.Event(e,t)
            }
            ,
            de.Event.prototype = {
                constructor: de.Event,
                isDefaultPrevented: w,
                isPropagationStopped: w,
                isImmediatePropagationStopped: w,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = x,
                    e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = x,
                    e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = x,
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            de.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && Qe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, de.event.addProp),
            de.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                de.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this, o = e.relatedTarget, i = e.handleObj;
                        return o && (o === r || de.contains(r, o)) || (e.type = i.origType,
                        n = i.handler.apply(this, arguments),
                        e.type = t),
                        n
                    }
                }
            }),
            de.fn.extend({
                on: function(e, t, n, r) {
                    return T(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return T(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, o;
                    if (e && e.preventDefault && e.handleObj)
                        return r = e.handleObj,
                        de(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                    if ("object" == typeof e) {
                        for (o in e)
                            this.off(o, t, e[o]);
                        return this
                    }
                    return t !== !1 && "function" != typeof t || (n = t,
                    t = void 0),
                    n === !1 && (n = w),
                    this.each(function() {
                        de.event.remove(this, e, n, t)
                    })
                }
            });
            var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
              , tt = /<script|<style|<link/i
              , nt = /checked\s*(?:[^=]|=\s*.checked.)/i
              , rt = /^true\/(.*)/
              , ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            de.extend({
                htmlPrefilter: function(e) {
                    return e.replace(et, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var r, o, i, a, s = e.cloneNode(!0), u = de.contains(e.ownerDocument, e);
                    if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || de.isXMLDoc(e)))
                        for (a = v(s),
                        i = v(e),
                        r = 0,
                        o = i.length; r < o; r++)
                            S(i[r], a[r]);
                    if (t)
                        if (n)
                            for (i = i || v(e),
                            a = a || v(s),
                            r = 0,
                            o = i.length; r < o; r++)
                                N(i[r], a[r]);
                        else
                            N(e, s);
                    return a = v(s, "script"),
                    a.length > 0 && y(a, !u && v(e, "script")),
                    s
                },
                cleanData: function(e) {
                    for (var t, n, r, o = de.event.special, i = 0; void 0 !== (n = e[i]); i++)
                        if (He(n)) {
                            if (t = n[Fe.expando]) {
                                if (t.events)
                                    for (r in t.events)
                                        o[r] ? de.event.remove(n, r) : de.removeEvent(n, r, t.handle);
                                n[Fe.expando] = void 0
                            }
                            n[Pe.expando] && (n[Pe.expando] = void 0)
                        }
                }
            }),
            de.fn.extend({
                detach: function(e) {
                    return q(this, e, !0)
                },
                remove: function(e) {
                    return q(this, e)
                },
                text: function(e) {
                    return Le(this, function(e) {
                        return void 0 === e ? de.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return A(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = k(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return A(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = k(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return A(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return A(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++)
                        1 === e.nodeType && (de.cleanData(v(e, !1)),
                        e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return de.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return Le(this, function(e) {
                        var t = this[0] || {}
                          , n = 0
                          , r = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if ("string" == typeof e && !tt.test(e) && !Ve[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = de.htmlPrefilter(e);
                            try {
                                for (; n < r; n++)
                                    t = this[n] || {},
                                    1 === t.nodeType && (de.cleanData(v(t, !1)),
                                    t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return A(this, arguments, function(t) {
                        var n = this.parentNode;
                        de.inArray(this, e) < 0 && (de.cleanData(v(this)),
                        n && n.replaceChild(t, this))
                    }, e)
                }
            }),
            de.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                de.fn[e] = function(e) {
                    for (var n, r = [], o = de(e), i = o.length - 1, a = 0; a <= i; a++)
                        n = a === i ? this : this.clone(!0),
                        de(o[a])[t](n),
                        ie.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var it = /^margin/
              , at = new RegExp("^(" + Me + ")(?!px)[a-z%]+$","i")
              , st = function(t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e),
                n.getComputedStyle(t)
            };
            !function() {
                function t() {
                    if (s) {
                        s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                        s.innerHTML = "",
                        Ye.appendChild(a);
                        var t = e.getComputedStyle(s);
                        n = "1%" !== t.top,
                        i = "2px" === t.marginLeft,
                        r = "4px" === t.width,
                        s.style.marginRight = "50%",
                        o = "4px" === t.marginRight,
                        Ye.removeChild(a),
                        s = null
                    }
                }
                var n, r, o, i, a = te.createElement("div"), s = te.createElement("div");
                s.style && (s.style.backgroundClip = "content-box",
                s.cloneNode(!0).style.backgroundClip = "",
                pe.clearCloneStyle = "content-box" === s.style.backgroundClip,
                a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                a.appendChild(s),
                de.extend(pe, {
                    pixelPosition: function() {
                        return t(),
                        n
                    },
                    boxSizingReliable: function() {
                        return t(),
                        r
                    },
                    pixelMarginRight: function() {
                        return t(),
                        o
                    },
                    reliableMarginLeft: function() {
                        return t(),
                        i
                    }
                }))
            }();
            var ut = /^(none|table(?!-c[ea]).+)/
              , lt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
              , ct = {
                letterSpacing: "0",
                fontWeight: "400"
            }
              , ft = ["Webkit", "Moz", "ms"]
              , pt = te.createElement("div").style;
            de.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = D(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, i, a, s = de.camelCase(t), u = e.style;
                        return t = de.cssProps[s] || (de.cssProps[s] = L(s) || s),
                        a = de.cssHooks[t] || de.cssHooks[s],
                        void 0 === n ? a && "get"in a && void 0 !== (o = a.get(e, !1, r)) ? o : u[t] : (i = typeof n,
                        "string" === i && (o = $e.exec(n)) && o[1] && (n = d(e, t, o),
                        i = "number"),
                        null != n && n === n && ("number" === i && (n += o && o[3] || (de.cssNumber[s] ? "" : "px")),
                        pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                        a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n)),
                        void 0)
                    }
                },
                css: function(e, t, n, r) {
                    var o, i, a, s = de.camelCase(t);
                    return t = de.cssProps[s] || (de.cssProps[s] = L(s) || s),
                    a = de.cssHooks[t] || de.cssHooks[s],
                    a && "get"in a && (o = a.get(e, !0, n)),
                    void 0 === o && (o = D(e, t, r)),
                    "normal" === o && t in ct && (o = ct[t]),
                    "" === n || n ? (i = parseFloat(o),
                    n === !0 || isFinite(i) ? i || 0 : o) : o
                }
            }),
            de.each(["height", "width"], function(e, t) {
                de.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n)
                            return !ut.test(de.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? P(e, t, r) : Be(e, lt, function() {
                                return P(e, t, r)
                            })
                    },
                    set: function(e, n, r) {
                        var o, i = r && st(e), a = r && F(e, t, r, "border-box" === de.css(e, "boxSizing", !1, i), i);
                        return a && (o = $e.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                        n = de.css(e, t)),
                        H(e, n, a)
                    }
                }
            }),
            de.cssHooks.marginLeft = O(pe.reliableMarginLeft, function(e, t) {
                if (t)
                    return (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
                        marginLeft: 0
                    }, function() {
                        return e.getBoundingClientRect().left
                    })) + "px"
            }),
            de.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                de.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                            o[e + _e[r] + t] = i[r] || i[r - 2] || i[0];
                        return o
                    }
                },
                it.test(e) || (de.cssHooks[e + t].set = H)
            }),
            de.fn.extend({
                css: function(e, t) {
                    return Le(this, function(e, t, n) {
                        var r, o, i = {}, a = 0;
                        if (de.isArray(t)) {
                            for (r = st(e),
                            o = t.length; a < o; a++)
                                i[t[a]] = de.css(e, t[a], !1, r);
                            return i
                        }
                        return void 0 !== n ? de.style(e, t, n) : de.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }),
            de.Tween = I,
            I.prototype = {
                constructor: I,
                init: function(e, t, n, r, o, i) {
                    this.elem = e,
                    this.prop = n,
                    this.easing = o || de.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = i || (de.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = I.propHooks[this.prop];
                    return e && e.get ? e.get(this) : I.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = I.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = de.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : I.propHooks._default.set(this),
                    this
                }
            },
            I.prototype.init.prototype = I.prototype,
            I.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = de.css(e.elem, e.prop, ""),
                        t && "auto" !== t ? t : 0)
                    },
                    set: function(e) {
                        de.fx.step[e.prop] ? de.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[de.cssProps[e.prop]] && !de.cssHooks[e.prop] ? e.elem[e.prop] = e.now : de.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            },
            I.propHooks.scrollTop = I.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            de.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            },
            de.fx = I.prototype.init,
            de.fx.step = {};
            var ht, dt, gt = /^(?:toggle|show|hide)$/, mt = /queueHooks$/;
            de.Animation = de.extend(U, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return d(n.elem, e, $e.exec(t), n),
                        n
                    }
                    ]
                },
                tweener: function(e, t) {
                    de.isFunction(e) ? (t = e,
                    e = ["*"]) : e = e.match(qe);
                    for (var n, r = 0, o = e.length; r < o; r++)
                        n = e[r],
                        U.tweeners[n] = U.tweeners[n] || [],
                        U.tweeners[n].unshift(t)
                },
                prefilters: [W],
                prefilter: function(e, t) {
                    t ? U.prefilters.unshift(e) : U.prefilters.push(e)
                }
            }),
            de.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? de.extend({}, e) : {
                    complete: n || !n && t || de.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !de.isFunction(t) && t
                };
                return de.fx.off || te.hidden ? r.duration = 0 : "number" != typeof r.duration && (r.duration in de.fx.speeds ? r.duration = de.fx.speeds[r.duration] : r.duration = de.fx.speeds._default),
                null != r.queue && r.queue !== !0 || (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function() {
                    de.isFunction(r.old) && r.old.call(this),
                    r.queue && de.dequeue(this, r.queue)
                }
                ,
                r
            }
            ,
            de.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(We).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var o = de.isEmptyObject(e)
                      , i = de.speed(t, n, r)
                      , a = function() {
                        var t = U(this, de.extend({}, e), i);
                        (o || Fe.get(this, "finish")) && t.stop(!0)
                    };
                    return a.finish = a,
                    o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop,
                        t(n)
                    };
                    return "string" != typeof e && (n = t,
                    t = e,
                    e = void 0),
                    t && e !== !1 && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0
                          , o = null != e && e + "queueHooks"
                          , i = de.timers
                          , a = Fe.get(this);
                        if (o)
                            a[o] && a[o].stop && r(a[o]);
                        else
                            for (o in a)
                                a[o] && a[o].stop && mt.test(o) && r(a[o]);
                        for (o = i.length; o--; )
                            i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n),
                            t = !1,
                            i.splice(o, 1));
                        !t && n || de.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"),
                    this.each(function() {
                        var t, n = Fe.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = de.timers, a = r ? r.length : 0;
                        for (n.finish = !0,
                        de.queue(this, e, []),
                        o && o.stop && o.stop.call(this, !0),
                        t = i.length; t--; )
                            i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0),
                            i.splice(t, 1));
                        for (t = 0; t < a; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }),
            de.each(["toggle", "show", "hide"], function(e, t) {
                var n = de.fn[t];
                de.fn[t] = function(e, r, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, r, o)
                }
            }),
            de.each({
                slideDown: $("show"),
                slideUp: $("hide"),
                slideToggle: $("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                de.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }),
            de.timers = [],
            de.fx.tick = function() {
                var e, t = 0, n = de.timers;
                for (ht = de.now(); t < n.length; t++)
                    e = n[t],
                    e() || n[t] !== e || n.splice(t--, 1);
                n.length || de.fx.stop(),
                ht = void 0
            }
            ,
            de.fx.timer = function(e) {
                de.timers.push(e),
                e() ? de.fx.start() : de.timers.pop()
            }
            ,
            de.fx.interval = 13,
            de.fx.start = function() {
                dt || (dt = e.requestAnimationFrame ? e.requestAnimationFrame(R) : e.setInterval(de.fx.tick, de.fx.interval))
            }
            ,
            de.fx.stop = function() {
                e.cancelAnimationFrame ? e.cancelAnimationFrame(dt) : e.clearInterval(dt),
                dt = null
            }
            ,
            de.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            de.fn.delay = function(t, n) {
                return t = de.fx ? de.fx.speeds[t] || t : t,
                n = n || "fx",
                this.queue(n, function(n, r) {
                    var o = e.setTimeout(n, t);
                    r.stop = function() {
                        e.clearTimeout(o)
                    }
                })
            }
            ,
            function() {
                var e = te.createElement("input")
                  , t = te.createElement("select")
                  , n = t.appendChild(te.createElement("option"));
                e.type = "checkbox",
                pe.checkOn = "" !== e.value,
                pe.optSelected = n.selected,
                e = te.createElement("input"),
                e.value = "t",
                e.type = "radio",
                pe.radioValue = "t" === e.value
            }();
            var vt, yt = de.expr.attrHandle;
            de.fn.extend({
                attr: function(e, t) {
                    return Le(this, de.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        de.removeAttr(this, e)
                    })
                }
            }),
            de.extend({
                attr: function(e, t, n) {
                    var r, o, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i)
                        return "undefined" == typeof e.getAttribute ? de.prop(e, t, n) : (1 === i && de.isXMLDoc(e) || (o = de.attrHooks[t.toLowerCase()] || (de.expr.match.bool.test(t) ? vt : void 0)),
                        void 0 !== n ? null === n ? void de.removeAttr(e, t) : o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                        n) : o && "get"in o && null !== (r = o.get(e, t)) ? r : (r = de.find.attr(e, t),
                        null == r ? void 0 : r))
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!pe.radioValue && "radio" === t && de.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0, o = t && t.match(qe);
                    if (o && 1 === e.nodeType)
                        for (; n = o[r++]; )
                            e.removeAttribute(n)
                }
            }),
            vt = {
                set: function(e, t, n) {
                    return t === !1 ? de.removeAttr(e, n) : e.setAttribute(n, n),
                    n
                }
            },
            de.each(de.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = yt[t] || de.find.attr;
                yt[t] = function(e, t, r) {
                    var o, i, a = t.toLowerCase();
                    return r || (i = yt[a],
                    yt[a] = o,
                    o = null != n(e, t, r) ? a : null,
                    yt[a] = i),
                    o
                }
            });
            var bt = /^(?:input|select|textarea|button)$/i
              , xt = /^(?:a|area)$/i;
            de.fn.extend({
                prop: function(e, t) {
                    return Le(this, de.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[de.propFix[e] || e]
                    })
                }
            }),
            de.extend({
                prop: function(e, t, n) {
                    var r, o, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i)
                        return 1 === i && de.isXMLDoc(e) || (t = de.propFix[t] || t,
                        o = de.propHooks[t]),
                        void 0 !== n ? o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get"in o && null !== (r = o.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = de.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : bt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }),
            pe.optSelected || (de.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex,
                    null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex)
                }
            }),
            de.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                de.propFix[this.toLowerCase()] = this
            }),
            de.fn.extend({
                addClass: function(e) {
                    var t, n, r, o, i, a, s, u = 0;
                    if (de.isFunction(e))
                        return this.each(function(t) {
                            de(this).addClass(e.call(this, t, X(this)))
                        });
                    if ("string" == typeof e && e)
                        for (t = e.match(qe) || []; n = this[u++]; )
                            if (o = X(n),
                            r = 1 === n.nodeType && " " + z(o) + " ") {
                                for (a = 0; i = t[a++]; )
                                    r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                s = z(r),
                                o !== s && n.setAttribute("class", s)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, o, i, a, s, u = 0;
                    if (de.isFunction(e))
                        return this.each(function(t) {
                            de(this).removeClass(e.call(this, t, X(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(qe) || []; n = this[u++]; )
                            if (o = X(n),
                            r = 1 === n.nodeType && " " + z(o) + " ") {
                                for (a = 0; i = t[a++]; )
                                    for (; r.indexOf(" " + i + " ") > -1; )
                                        r = r.replace(" " + i + " ", " ");
                                s = z(r),
                                o !== s && n.setAttribute("class", s)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : de.isFunction(e) ? this.each(function(n) {
                        de(this).toggleClass(e.call(this, n, X(this), t), t)
                    }) : this.each(function() {
                        var t, r, o, i;
                        if ("string" === n)
                            for (r = 0,
                            o = de(this),
                            i = e.match(qe) || []; t = i[r++]; )
                                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else
                            void 0 !== e && "boolean" !== n || (t = X(this),
                            t && Fe.set(this, "__className__", t),
                            this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Fe.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++]; )
                        if (1 === n.nodeType && (" " + z(X(n)) + " ").indexOf(t) > -1)
                            return !0;
                    return !1
                }
            });
            var wt = /\r/g;
            de.fn.extend({
                val: function(e) {
                    var t, n, r, o = this[0];
                    {
                        if (arguments.length)
                            return r = de.isFunction(e),
                            this.each(function(n) {
                                var o;
                                1 === this.nodeType && (o = r ? e.call(this, n, de(this).val()) : e,
                                null == o ? o = "" : "number" == typeof o ? o += "" : de.isArray(o) && (o = de.map(o, function(e) {
                                    return null == e ? "" : e + ""
                                })),
                                t = de.valHooks[this.type] || de.valHooks[this.nodeName.toLowerCase()],
                                t && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                            });
                        if (o)
                            return t = de.valHooks[o.type] || de.valHooks[o.nodeName.toLowerCase()],
                            t && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value,
                            "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)
                    }
                }
            }),
            de.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = de.find.attr(e, "value");
                            return null != t ? t : z(de.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, o = e.options, i = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? i + 1 : o.length;
                            for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                                if (n = o[r],
                                (n.selected || r === i) && !n.disabled && (!n.parentNode.disabled || !de.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = de(n).val(),
                                    a)
                                        return t;
                                    s.push(t)
                                }
                            return s
                        },
                        set: function(e, t) {
                            for (var n, r, o = e.options, i = de.makeArray(t), a = o.length; a--; )
                                r = o[a],
                                (r.selected = de.inArray(de.valHooks.option.get(r), i) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1),
                            i
                        }
                    }
                }
            }),
            de.each(["radio", "checkbox"], function() {
                de.valHooks[this] = {
                    set: function(e, t) {
                        if (de.isArray(t))
                            return e.checked = de.inArray(de(e).val(), t) > -1
                    }
                },
                pe.checkOn || (de.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
                )
            });
            var Ct = /^(?:focusinfocus|focusoutblur)$/;
            de.extend(de.event, {
                trigger: function(t, n, r, o) {
                    var i, a, s, u, l, c, f, p = [r || te], h = le.call(t, "type") ? t.type : t, d = le.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (a = s = r = r || te,
                    3 !== r.nodeType && 8 !== r.nodeType && !Ct.test(h + de.event.triggered) && (h.indexOf(".") > -1 && (d = h.split("."),
                    h = d.shift(),
                    d.sort()),
                    l = h.indexOf(":") < 0 && "on" + h,
                    t = t[de.expando] ? t : new de.Event(h,"object" == typeof t && t),
                    t.isTrigger = o ? 2 : 3,
                    t.namespace = d.join("."),
                    t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    t.result = void 0,
                    t.target || (t.target = r),
                    n = null == n ? [t] : de.makeArray(n, [t]),
                    f = de.event.special[h] || {},
                    o || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                        if (!o && !f.noBubble && !de.isWindow(r)) {
                            for (u = f.delegateType || h,
                            Ct.test(u + h) || (a = a.parentNode); a; a = a.parentNode)
                                p.push(a),
                                s = a;
                            s === (r.ownerDocument || te) && p.push(s.defaultView || s.parentWindow || e)
                        }
                        for (i = 0; (a = p[i++]) && !t.isPropagationStopped(); )
                            t.type = i > 1 ? u : f.bindType || h,
                            c = (Fe.get(a, "events") || {})[t.type] && Fe.get(a, "handle"),
                            c && c.apply(a, n),
                            c = l && a[l],
                            c && c.apply && He(a) && (t.result = c.apply(a, n),
                            t.result === !1 && t.preventDefault());
                        return t.type = h,
                        o || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !He(r) || l && de.isFunction(r[h]) && !de.isWindow(r) && (s = r[l],
                        s && (r[l] = null),
                        de.event.triggered = h,
                        r[h](),
                        de.event.triggered = void 0,
                        s && (r[l] = s)),
                        t.result
                    }
                },
                simulate: function(e, t, n) {
                    var r = de.extend(new de.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    de.event.trigger(r, null, t)
                }
            }),
            de.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        de.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n)
                        return de.event.trigger(e, t, n, !0)
                }
            }),
            de.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                de.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }),
            de.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }),
            pe.focusin = "onfocusin"in e,
            pe.focusin || de.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    de.event.simulate(t, e.target, de.event.fix(e))
                };
                de.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this
                          , o = Fe.access(r, t);
                        o || r.addEventListener(e, n, !0),
                        Fe.access(r, t, (o || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this
                          , o = Fe.access(r, t) - 1;
                        o ? Fe.access(r, t, o) : (r.removeEventListener(e, n, !0),
                        Fe.remove(r, t))
                    }
                }
            });
            var Tt = e.location
              , kt = de.now()
              , jt = /\?/;
            de.parseXML = function(t) {
                var n;
                if (!t || "string" != typeof t)
                    return null;
                try {
                    n = (new e.DOMParser).parseFromString(t, "text/xml")
                } catch (e) {
                    n = void 0
                }
                return n && !n.getElementsByTagName("parsererror").length || de.error("Invalid XML: " + t),
                n
            }
            ;
            var Et = /\[\]$/
              , Nt = /\r?\n/g
              , St = /^(?:submit|button|image|reset|file)$/i
              , At = /^(?:input|select|textarea|keygen)/i;
            de.param = function(e, t) {
                var n, r = [], o = function(e, t) {
                    var n = de.isFunction(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
                if (de.isArray(e) || e.jquery && !de.isPlainObject(e))
                    de.each(e, function() {
                        o(this.name, this.value)
                    });
                else
                    for (n in e)
                        K(n, e[n], t, o);
                return r.join("&")
            }
            ,
            de.fn.extend({
                serialize: function() {
                    return de.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = de.prop(this, "elements");
                        return e ? de.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !de(this).is(":disabled") && At.test(this.nodeName) && !St.test(e) && (this.checked || !ze.test(e))
                    }).map(function(e, t) {
                        var n = de(this).val();
                        return null == n ? null : de.isArray(n) ? de.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Nt, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Nt, "\r\n")
                        }
                    }).get()
                }
            });
            var qt = /%20/g
              , Dt = /#.*$/
              , Ot = /([?&])_=[^&]*/
              , Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm
              , Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
              , Ft = /^(?:GET|HEAD)$/
              , Pt = /^\/\//
              , It = {}
              , Rt = {}
              , Mt = "*/".concat("*")
              , $t = te.createElement("a");
            $t.href = Tt.href,
            de.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Tt.href,
                    type: "GET",
                    isLocal: Ht.test(Tt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Mt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": de.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Y(Y(e, de.ajaxSettings), t) : Y(de.ajaxSettings, e)
                },
                ajaxPrefilter: V(It),
                ajaxTransport: V(Rt),
                ajax: function(t, n) {
                    function r(t, n, r, s) {
                        var l, p, h, x, w, C = n;
                        c || (c = !0,
                        u && e.clearTimeout(u),
                        o = void 0,
                        a = s || "",
                        T.readyState = t > 0 ? 4 : 0,
                        l = t >= 200 && t < 300 || 304 === t,
                        r && (x = Q(d, T, r)),
                        x = J(d, x, T, l),
                        l ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"),
                        w && (de.lastModified[i] = w),
                        w = T.getResponseHeader("etag"),
                        w && (de.etag[i] = w)),
                        204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state,
                        p = x.data,
                        h = x.error,
                        l = !h)) : (h = C,
                        !t && C || (C = "error",
                        t < 0 && (t = 0))),
                        T.status = t,
                        T.statusText = (n || C) + "",
                        l ? v.resolveWith(g, [p, C, T]) : v.rejectWith(g, [T, C, h]),
                        T.statusCode(b),
                        b = void 0,
                        f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [T, d, l ? p : h]),
                        y.fireWith(g, [T, C]),
                        f && (m.trigger("ajaxComplete", [T, d]),
                        --de.active || de.event.trigger("ajaxStop")))
                    }
                    "object" == typeof t && (n = t,
                    t = void 0),
                    n = n || {};
                    var o, i, a, s, u, l, c, f, p, h, d = de.ajaxSetup({}, n), g = d.context || d, m = d.context && (g.nodeType || g.jquery) ? de(g) : de.event, v = de.Deferred(), y = de.Callbacks("once memory"), b = d.statusCode || {}, x = {}, w = {}, C = "canceled", T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (c) {
                                if (!s)
                                    for (s = {}; t = Lt.exec(a); )
                                        s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return c ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                            x[e] = t),
                            this
                        },
                        overrideMimeType: function(e) {
                            return null == c && (d.mimeType = e),
                            this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (c)
                                    T.always(e[T.status]);
                                else
                                    for (t in e)
                                        b[t] = [b[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || C;
                            return o && o.abort(t),
                            r(0, t),
                            this
                        }
                    };
                    if (v.promise(T),
                    d.url = ((t || d.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"),
                    d.type = n.method || n.type || d.method || d.type,
                    d.dataTypes = (d.dataType || "*").toLowerCase().match(qe) || [""],
                    null == d.crossDomain) {
                        l = te.createElement("a");
                        try {
                            l.href = d.url,
                            l.href = l.href,
                            d.crossDomain = $t.protocol + "//" + $t.host != l.protocol + "//" + l.host
                        } catch (e) {
                            d.crossDomain = !0
                        }
                    }
                    if (d.data && d.processData && "string" != typeof d.data && (d.data = de.param(d.data, d.traditional)),
                    G(It, d, n, T),
                    c)
                        return T;
                    f = de.event && d.global,
                    f && 0 === de.active++ && de.event.trigger("ajaxStart"),
                    d.type = d.type.toUpperCase(),
                    d.hasContent = !Ft.test(d.type),
                    i = d.url.replace(Dt, ""),
                    d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(qt, "+")) : (h = d.url.slice(i.length),
                    d.data && (i += (jt.test(i) ? "&" : "?") + d.data,
                    delete d.data),
                    d.cache === !1 && (i = i.replace(Ot, "$1"),
                    h = (jt.test(i) ? "&" : "?") + "_=" + kt++ + h),
                    d.url = i + h),
                    d.ifModified && (de.lastModified[i] && T.setRequestHeader("If-Modified-Since", de.lastModified[i]),
                    de.etag[i] && T.setRequestHeader("If-None-Match", de.etag[i])),
                    (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType),
                    T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : d.accepts["*"]);
                    for (p in d.headers)
                        T.setRequestHeader(p, d.headers[p]);
                    if (d.beforeSend && (d.beforeSend.call(g, T, d) === !1 || c))
                        return T.abort();
                    if (C = "abort",
                    y.add(d.complete),
                    T.done(d.success),
                    T.fail(d.error),
                    o = G(Rt, d, n, T)) {
                        if (T.readyState = 1,
                        f && m.trigger("ajaxSend", [T, d]),
                        c)
                            return T;
                        d.async && d.timeout > 0 && (u = e.setTimeout(function() {
                            T.abort("timeout")
                        }, d.timeout));
                        try {
                            c = !1,
                            o.send(x, r)
                        } catch (e) {
                            if (c)
                                throw e;
                            r(-1, e)
                        }
                    } else
                        r(-1, "No Transport");
                    return T
                },
                getJSON: function(e, t, n) {
                    return de.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return de.get(e, void 0, t, "script")
                }
            }),
            de.each(["get", "post"], function(e, t) {
                de[t] = function(e, n, r, o) {
                    return de.isFunction(n) && (o = o || r,
                    r = n,
                    n = void 0),
                    de.ajax(de.extend({
                        url: e,
                        type: t,
                        dataType: o,
                        data: n,
                        success: r
                    }, de.isPlainObject(e) && e))
                }
            }),
            de._evalUrl = function(e) {
                return de.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }
            ,
            de.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (de.isFunction(e) && (e = e.call(this[0])),
                    t = de(e, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function() {
                        for (var e = this; e.firstElementChild; )
                            e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this
                },
                wrapInner: function(e) {
                    return de.isFunction(e) ? this.each(function(t) {
                        de(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = de(this)
                          , n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = de.isFunction(e);
                    return this.each(function(n) {
                        de(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        de(this).replaceWith(this.childNodes)
                    }),
                    this
                }
            }),
            de.expr.pseudos.hidden = function(e) {
                return !de.expr.pseudos.visible(e)
            }
            ,
            de.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }
            ,
            de.ajaxSettings.xhr = function() {
                try {
                    return new e.XMLHttpRequest
                } catch (e) {}
            }
            ;
            var _t = {
                0: 200,
                1223: 204
            }
              , Wt = de.ajaxSettings.xhr();
            pe.cors = !!Wt && "withCredentials"in Wt,
            pe.ajax = Wt = !!Wt,
            de.ajaxTransport(function(t) {
                var n, r;
                if (pe.cors || Wt && !t.crossDomain)
                    return {
                        send: function(o, i) {
                            var a, s = t.xhr();
                            if (s.open(t.type, t.url, t.async, t.username, t.password),
                            t.xhrFields)
                                for (a in t.xhrFields)
                                    s[a] = t.xhrFields[a];
                            t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                            t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                            for (a in o)
                                s.setRequestHeader(a, o[a]);
                            n = function(e) {
                                return function() {
                                    n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null,
                                    "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(_t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                        binary: s.response
                                    } : {
                                        text: s.responseText
                                    }, s.getAllResponseHeaders()))
                                }
                            }
                            ,
                            s.onload = n(),
                            r = s.onerror = n("error"),
                            void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                                4 === s.readyState && e.setTimeout(function() {
                                    n && r()
                                })
                            }
                            ,
                            n = n("abort");
                            try {
                                s.send(t.hasContent && t.data || null)
                            } catch (e) {
                                if (n)
                                    throw e
                            }
                        },
                        abort: function() {
                            n && n()
                        }
                    }
            }),
            de.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }),
            de.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return de.globalEval(e),
                        e
                    }
                }
            }),
            de.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET")
            }),
            de.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function(r, o) {
                            t = de("<script>").prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(),
                                n = null,
                                e && o("error" === e.type ? 404 : 200, e.type)
                            }
                            ),
                            te.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }
            });
            var Bt = []
              , Ut = /(=)\?(?=&|$)|\?\?/;
            de.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Bt.pop() || de.expando + "_" + kt++;
                    return this[e] = !0,
                    e
                }
            }),
            de.ajaxPrefilter("json jsonp", function(t, n, r) {
                var o, i, a, s = t.jsonp !== !1 && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
                if (s || "jsonp" === t.dataTypes[0])
                    return o = t.jsonpCallback = de.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                    s ? t[s] = t[s].replace(Ut, "$1" + o) : t.jsonp !== !1 && (t.url += (jt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
                    t.converters["script json"] = function() {
                        return a || de.error(o + " was not called"),
                        a[0]
                    }
                    ,
                    t.dataTypes[0] = "json",
                    i = e[o],
                    e[o] = function() {
                        a = arguments
                    }
                    ,
                    r.always(function() {
                        void 0 === i ? de(e).removeProp(o) : e[o] = i,
                        t[o] && (t.jsonpCallback = n.jsonpCallback,
                        Bt.push(o)),
                        a && de.isFunction(i) && i(a[0]),
                        a = i = void 0
                    }),
                    "script"
            }),
            pe.createHTMLDocument = function() {
                var e = te.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>",
                2 === e.childNodes.length
            }(),
            de.parseHTML = function(e, t, n) {
                if ("string" != typeof e)
                    return [];
                "boolean" == typeof t && (n = t,
                t = !1);
                var r, o, i;
                return t || (pe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""),
                r = t.createElement("base"),
                r.href = te.location.href,
                t.head.appendChild(r)) : t = te),
                o = Te.exec(e),
                i = !n && [],
                o ? [t.createElement(o[1])] : (o = b([e], t, i),
                i && i.length && de(i).remove(),
                de.merge([], o.childNodes))
            }
            ,
            de.fn.load = function(e, t, n) {
                var r, o, i, a = this, s = e.indexOf(" ");
                return s > -1 && (r = z(e.slice(s)),
                e = e.slice(0, s)),
                de.isFunction(t) ? (n = t,
                t = void 0) : t && "object" == typeof t && (o = "POST"),
                a.length > 0 && de.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    i = arguments,
                    a.html(r ? de("<div>").append(de.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    a.each(function() {
                        n.apply(this, i || [e.responseText, t, e])
                    })
                }
                ),
                this
            }
            ,
            de.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                de.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }),
            de.expr.pseudos.animated = function(e) {
                return de.grep(de.timers, function(t) {
                    return e === t.elem
                }).length
            }
            ,
            de.offset = {
                setOffset: function(e, t, n) {
                    var r, o, i, a, s, u, l, c = de.css(e, "position"), f = de(e), p = {};
                    "static" === c && (e.style.position = "relative"),
                    s = f.offset(),
                    i = de.css(e, "top"),
                    u = de.css(e, "left"),
                    l = ("absolute" === c || "fixed" === c) && (i + u).indexOf("auto") > -1,
                    l ? (r = f.position(),
                    a = r.top,
                    o = r.left) : (a = parseFloat(i) || 0,
                    o = parseFloat(u) || 0),
                    de.isFunction(t) && (t = t.call(e, n, de.extend({}, s))),
                    null != t.top && (p.top = t.top - s.top + a),
                    null != t.left && (p.left = t.left - s.left + o),
                    "using"in t ? t.using.call(e, p) : f.css(p)
                }
            },
            de.fn.extend({
                offset: function(e) {
                    if (arguments.length)
                        return void 0 === e ? this : this.each(function(t) {
                            de.offset.setOffset(this, e, t)
                        });
                    var t, n, r, o, i = this[0];
                    if (i)
                        return i.getClientRects().length ? (r = i.getBoundingClientRect(),
                        r.width || r.height ? (o = i.ownerDocument,
                        n = Z(o),
                        t = o.documentElement,
                        {
                            top: r.top + n.pageYOffset - t.clientTop,
                            left: r.left + n.pageXOffset - t.clientLeft
                        }) : r) : {
                            top: 0,
                            left: 0
                        }
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n = this[0], r = {
                            top: 0,
                            left: 0
                        };
                        return "fixed" === de.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                        t = this.offset(),
                        de.nodeName(e[0], "html") || (r = e.offset()),
                        r = {
                            top: r.top + de.css(e[0], "borderTopWidth", !0),
                            left: r.left + de.css(e[0], "borderLeftWidth", !0)
                        }),
                        {
                            top: t.top - r.top - de.css(n, "marginTop", !0),
                            left: t.left - r.left - de.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === de.css(e, "position"); )
                            e = e.offsetParent;
                        return e || Ye
                    })
                }
            }),
            de.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                de.fn[e] = function(r) {
                    return Le(this, function(e, r, o) {
                        var i = Z(e);
                        return void 0 === o ? i ? i[t] : e[r] : void (i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o)
                    }, e, r, arguments.length)
                }
            }),
            de.each(["top", "left"], function(e, t) {
                de.cssHooks[t] = O(pe.pixelPosition, function(e, n) {
                    if (n)
                        return n = D(e, t),
                        at.test(n) ? de(e).position()[t] + "px" : n
                })
            }),
            de.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                de.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, r) {
                    de.fn[r] = function(o, i) {
                        var a = arguments.length && (n || "boolean" != typeof o)
                          , s = n || (o === !0 || i === !0 ? "margin" : "border");
                        return Le(this, function(t, n, o) {
                            var i;
                            return de.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                            Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? de.css(t, n, s) : de.style(t, n, o, s)
                        }, t, a ? o : void 0, a)
                    }
                })
            }),
            de.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }),
            de.parseJSON = JSON.parse,
            "function" == typeof define && define.amd && define("jquery", [], function() {
                return de
            });
            var zt = e.jQuery
              , Xt = e.$;
            return de.noConflict = function(t) {
                return e.$ === de && (e.$ = Xt),
                t && e.jQuery === de && (e.jQuery = zt),
                de
            }
            ,
            t || (e.jQuery = e.$ = de),
            de
        })
    }
    , {}],
    2: [function(e, t, n) {
        !function(e, n, r) {
            function o(e, t, n) {
                return e.addEventListener ? void e.addEventListener(t, n, !1) : void e.attachEvent("on" + t, n)
            }
            function i(e) {
                if ("keypress" == e.type) {
                    var t = String.fromCharCode(e.which);
                    return e.shiftKey || (t = t.toLowerCase()),
                    t
                }
                return y[e.which] ? y[e.which] : b[e.which] ? b[e.which] : String.fromCharCode(e.which).toLowerCase()
            }
            function a(e, t) {
                return e.sort().join(",") === t.sort().join(",")
            }
            function s(e) {
                var t = [];
                return e.shiftKey && t.push("shift"),
                e.altKey && t.push("alt"),
                e.ctrlKey && t.push("ctrl"),
                e.metaKey && t.push("meta"),
                t
            }
            function u(e) {
                return e.preventDefault ? void e.preventDefault() : void (e.returnValue = !1)
            }
            function l(e) {
                return e.stopPropagation ? void e.stopPropagation() : void (e.cancelBubble = !0)
            }
            function c(e) {
                return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e
            }
            function f() {
                if (!v) {
                    v = {};
                    for (var e in y)
                        e > 95 && e < 112 || y.hasOwnProperty(e) && (v[y[e]] = e)
                }
                return v
            }
            function p(e, t, n) {
                return n || (n = f()[e] ? "keydown" : "keypress"),
                "keypress" == n && t.length && (n = "keydown"),
                n
            }
            function h(e) {
                return "+" === e ? ["+"] : (e = e.replace(/\+{2}/g, "+plus"),
                e.split("+"))
            }
            function d(e, t) {
                var n, r, o, i = [];
                for (n = h(e),
                o = 0; o < n.length; ++o)
                    r = n[o],
                    w[r] && (r = w[r]),
                    t && "keypress" != t && x[r] && (r = x[r],
                    i.push("shift")),
                    c(r) && i.push(r);
                return t = p(r, i, t),
                {
                    key: r,
                    modifiers: i,
                    action: t
                }
            }
            function g(e, t) {
                return null !== e && e !== n && (e === t || g(e.parentNode, t))
            }
            function m(e) {
                function t(e) {
                    e = e || {};
                    var t, n = !1;
                    for (t in x)
                        e[t] ? n = !0 : x[t] = 0;
                    n || (T = !1)
                }
                function r(e, t, n, r, o, i) {
                    var s, u, l = [], f = n.type;
                    if (!y._callbacks[e])
                        return [];
                    for ("keyup" == f && c(e) && (t = [e]),
                    s = 0; s < y._callbacks[e].length; ++s)
                        if (u = y._callbacks[e][s],
                        (r || !u.seq || x[u.seq] == u.level) && f == u.action && ("keypress" == f && !n.metaKey && !n.ctrlKey || a(t, u.modifiers))) {
                            var p = !r && u.combo == o
                              , h = r && u.seq == r && u.level == i;
                            (p || h) && y._callbacks[e].splice(s, 1),
                            l.push(u)
                        }
                    return l
                }
                function f(e, t, n, r) {
                    y.stopCallback(t, t.target || t.srcElement, n, r) || e(t, n) === !1 && (u(t),
                    l(t))
                }
                function p(e) {
                    "number" != typeof e.which && (e.which = e.keyCode);
                    var t = i(e);
                    if (t)
                        return "keyup" == e.type && w === t ? void (w = !1) : void y.handleKey(t, s(e), e)
                }
                function h() {
                    clearTimeout(b),
                    b = setTimeout(t, 1e3)
                }
                function g(e, n, r, o) {
                    function a(t) {
                        return function() {
                            T = t,
                            ++x[e],
                            h()
                        }
                    }
                    function s(n) {
                        f(r, n, e),
                        "keyup" !== o && (w = i(n)),
                        setTimeout(t, 10)
                    }
                    x[e] = 0;
                    for (var u = 0; u < n.length; ++u) {
                        var l = u + 1 === n.length
                          , c = l ? s : a(o || d(n[u + 1]).action);
                        v(n[u], c, o, e, u)
                    }
                }
                function v(e, t, n, o, i) {
                    y._directMap[e + ":" + n] = t,
                    e = e.replace(/\s+/g, " ");
                    var a, s = e.split(" ");
                    return s.length > 1 ? void g(e, s, t, n) : (a = d(e, n),
                    y._callbacks[a.key] = y._callbacks[a.key] || [],
                    r(a.key, a.modifiers, {
                        type: a.action
                    }, o, e, i),
                    void y._callbacks[a.key][o ? "unshift" : "push"]({
                        callback: t,
                        modifiers: a.modifiers,
                        action: a.action,
                        seq: o,
                        level: i,
                        combo: e
                    }))
                }
                var y = this;
                if (e = e || n,
                !(y instanceof m))
                    return new m(e);
                y.target = e,
                y._callbacks = {},
                y._directMap = {};
                var b, x = {}, w = !1, C = !1, T = !1;
                y._handleKey = function(e, n, o) {
                    var i, a = r(e, n, o), s = {}, u = 0, l = !1;
                    for (i = 0; i < a.length; ++i)
                        a[i].seq && (u = Math.max(u, a[i].level));
                    for (i = 0; i < a.length; ++i)
                        if (a[i].seq) {
                            if (a[i].level != u)
                                continue;
                            l = !0,
                            s[a[i].seq] = 1,
                            f(a[i].callback, o, a[i].combo, a[i].seq)
                        } else
                            l || f(a[i].callback, o, a[i].combo);
                    var p = "keypress" == o.type && C;
                    o.type != T || c(e) || p || t(s),
                    C = l && "keydown" == o.type
                }
                ,
                y._bindMultiple = function(e, t, n) {
                    for (var r = 0; r < e.length; ++r)
                        v(e[r], t, n)
                }
                ,
                o(e, "keypress", p),
                o(e, "keydown", p),
                o(e, "keyup", p)
            }
            if (e) {
                for (var v, y = {
                    8: "backspace",
                    9: "tab",
                    13: "enter",
                    16: "shift",
                    17: "ctrl",
                    18: "alt",
                    20: "capslock",
                    27: "esc",
                    32: "space",
                    33: "pageup",
                    34: "pagedown",
                    35: "end",
                    36: "home",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down",
                    45: "ins",
                    46: "del",
                    91: "meta",
                    93: "meta",
                    224: "meta"
                }, b = {
                    106: "*",
                    107: "+",
                    109: "-",
                    110: ".",
                    111: "/",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'"
                }, x = {
                    "~": "`",
                    "!": "1",
                    "@": "2",
                    "#": "3",
                    $: "4",
                    "%": "5",
                    "^": "6",
                    "&": "7",
                    "*": "8",
                    "(": "9",
                    ")": "0",
                    _: "-",
                    "+": "=",
                    ":": ";",
                    '"': "'",
                    "<": ",",
                    ">": ".",
                    "?": "/",
                    "|": "\\"
                }, w = {
                    option: "alt",
                    command: "meta",
                    return: "enter",
                    escape: "esc",
                    plus: "+",
                    mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
                }, C = 1; C < 20; ++C)
                    y[111 + C] = "f" + C;
                for (C = 0; C <= 9; ++C)
                    y[C + 96] = C;
                m.prototype.bind = function(e, t, n) {
                    var r = this;
                    return e = e instanceof Array ? e : [e],
                    r._bindMultiple.call(r, e, t, n),
                    r
                }
                ,
                m.prototype.unbind = function(e, t) {
                    var n = this;
                    return n.bind.call(n, e, function() {}, t)
                }
                ,
                m.prototype.trigger = function(e, t) {
                    var n = this;
                    return n._directMap[e + ":" + t] && n._directMap[e + ":" + t]({}, e),
                    n
                }
                ,
                m.prototype.reset = function() {
                    var e = this;
                    return e._callbacks = {},
                    e._directMap = {},
                    e
                }
                ,
                m.prototype.stopCallback = function(e, t) {
                    var n = this;
                    return !((" " + t.className + " ").indexOf(" mousetrap ") > -1) && (!g(t, n.target) && ("INPUT" == t.tagName || "SELECT" == t.tagName || "TEXTAREA" == t.tagName || t.isContentEditable))
                }
                ,
                m.prototype.handleKey = function() {
                    var e = this;
                    return e._handleKey.apply(e, arguments)
                }
                ,
                m.addKeycodes = function(e) {
                    for (var t in e)
                        e.hasOwnProperty(t) && (y[t] = e[t]);
                    v = null
                }
                ,
                m.init = function() {
                    var e = m(n);
                    for (var t in e)
                        "_" !== t.charAt(0) && (m[t] = function(t) {
                            return function() {
                                return e[t].apply(e, arguments)
                            }
                        }(t))
                }
                ,
                m.init(),
                e.Mousetrap = m,
                "undefined" != typeof t && t.exports && (t.exports = m),
                "function" == typeof define && define.amd && define(function() {
                    return m
                })
            }
        }("undefined" != typeof window ? window : null, "undefined" != typeof window ? document : null)
    }
    , {}],
    3: [function(e, t, n) {
        (function(e) {
            !function(r) {
                function o(e) {
                    throw new RangeError(L[e])
                }
                function i(e, t) {
                    for (var n = e.length, r = []; n--; )
                        r[n] = t(e[n]);
                    return r
                }
                function a(e, t) {
                    var n = e.split("@")
                      , r = "";
                    n.length > 1 && (r = n[0] + "@",
                    e = n[1]),
                    e = e.replace(O, ".");
                    var o = e.split(".")
                      , a = i(o, t).join(".");
                    return r + a
                }
                function s(e) {
                    for (var t, n, r = [], o = 0, i = e.length; o < i; )
                        t = e.charCodeAt(o++),
                        t >= 55296 && t <= 56319 && o < i ? (n = e.charCodeAt(o++),
                        56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t),
                        o--)) : r.push(t);
                    return r
                }
                function u(e) {
                    return i(e, function(e) {
                        var t = "";
                        return e > 65535 && (e -= 65536,
                        t += P(e >>> 10 & 1023 | 55296),
                        e = 56320 | 1023 & e),
                        t += P(e)
                    }).join("")
                }
                function l(e) {
                    return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : C
                }
                function c(e, t) {
                    return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                }
                function f(e, t, n) {
                    var r = 0;
                    for (e = n ? F(e / E) : e >> 1,
                    e += F(e / t); e > H * k >> 1; r += C)
                        e = F(e / H);
                    return F(r + (H + 1) * e / (e + j))
                }
                function p(e) {
                    var t, n, r, i, a, s, c, p, h, d, g = [], m = e.length, v = 0, y = S, b = N;
                    for (n = e.lastIndexOf(A),
                    n < 0 && (n = 0),
                    r = 0; r < n; ++r)
                        e.charCodeAt(r) >= 128 && o("not-basic"),
                        g.push(e.charCodeAt(r));
                    for (i = n > 0 ? n + 1 : 0; i < m; ) {
                        for (a = v,
                        s = 1,
                        c = C; i >= m && o("invalid-input"),
                        p = l(e.charCodeAt(i++)),
                        (p >= C || p > F((w - v) / s)) && o("overflow"),
                        v += p * s,
                        h = c <= b ? T : c >= b + k ? k : c - b,
                        !(p < h); c += C)
                            d = C - h,
                            s > F(w / d) && o("overflow"),
                            s *= d;
                        t = g.length + 1,
                        b = f(v - a, t, 0 == a),
                        F(v / t) > w - y && o("overflow"),
                        y += F(v / t),
                        v %= t,
                        g.splice(v++, 0, y)
                    }
                    return u(g)
                }
                function h(e) {
                    var t, n, r, i, a, u, l, p, h, d, g, m, v, y, b, x = [];
                    for (e = s(e),
                    m = e.length,
                    t = S,
                    n = 0,
                    a = N,
                    u = 0; u < m; ++u)
                        g = e[u],
                        g < 128 && x.push(P(g));
                    for (r = i = x.length,
                    i && x.push(A); r < m; ) {
                        for (l = w,
                        u = 0; u < m; ++u)
                            g = e[u],
                            g >= t && g < l && (l = g);
                        for (v = r + 1,
                        l - t > F((w - n) / v) && o("overflow"),
                        n += (l - t) * v,
                        t = l,
                        u = 0; u < m; ++u)
                            if (g = e[u],
                            g < t && ++n > w && o("overflow"),
                            g == t) {
                                for (p = n,
                                h = C; d = h <= a ? T : h >= a + k ? k : h - a,
                                !(p < d); h += C)
                                    b = p - d,
                                    y = C - d,
                                    x.push(P(c(d + b % y, 0))),
                                    p = F(b / y);
                                x.push(P(c(p, 0))),
                                a = f(n, v, r == i),
                                n = 0,
                                ++r
                            }
                        ++n,
                        ++t
                    }
                    return x.join("")
                }
                function d(e) {
                    return a(e, function(e) {
                        return q.test(e) ? p(e.slice(4).toLowerCase()) : e
                    })
                }
                function g(e) {
                    return a(e, function(e) {
                        return D.test(e) ? "xn--" + h(e) : e
                    })
                }
                var m = "object" == typeof n && n && !n.nodeType && n
                  , v = "object" == typeof t && t && !t.nodeType && t
                  , y = "object" == typeof e && e;
                y.global !== y && y.window !== y && y.self !== y || (r = y);
                var b, x, w = 2147483647, C = 36, T = 1, k = 26, j = 38, E = 700, N = 72, S = 128, A = "-", q = /^xn--/, D = /[^\x20-\x7E]/, O = /[\x2E\u3002\uFF0E\uFF61]/g, L = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                }, H = C - T, F = Math.floor, P = String.fromCharCode;
                if (b = {
                    version: "1.4.1",
                    ucs2: {
                        decode: s,
                        encode: u
                    },
                    decode: p,
                    encode: h,
                    toASCII: g,
                    toUnicode: d
                },
                "function" == typeof define && "object" == typeof define.amd && define.amd)
                    define("punycode", function() {
                        return b
                    });
                else if (m && v)
                    if (t.exports == m)
                        v.exports = b;
                    else
                        for (x in b)
                            b.hasOwnProperty(x) && (m[x] = b[x]);
                else
                    r.punycode = b
            }(this)
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    4: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.exports = function(e, t, n, i) {
            t = t || "&",
            n = n || "=";
            var a = {};
            if ("string" != typeof e || 0 === e.length)
                return a;
            var s = /\+/g;
            e = e.split(t);
            var u = 1e3;
            i && "number" == typeof i.maxKeys && (u = i.maxKeys);
            var l = e.length;
            u > 0 && l > u && (l = u);
            for (var c = 0; c < l; ++c) {
                var f, p, h, d, g = e[c].replace(s, "%20"), m = g.indexOf(n);
                m >= 0 ? (f = g.substr(0, m),
                p = g.substr(m + 1)) : (f = g,
                p = ""),
                h = decodeURIComponent(f),
                d = decodeURIComponent(p),
                r(a, h) ? o(a[h]) ? a[h].push(d) : a[h] = [a[h], d] : a[h] = d
            }
            return a
        }
        ;
        var o = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    }
    , {}],
    5: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (e.map)
                return e.map(t);
            for (var n = [], r = 0; r < e.length; r++)
                n.push(t(e[r], r));
            return n
        }
        var o = function(e) {
            switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
            }
        };
        t.exports = function(e, t, n, s) {
            return t = t || "&",
            n = n || "=",
            null === e && (e = void 0),
            "object" == typeof e ? r(a(e), function(a) {
                var s = encodeURIComponent(o(a)) + n;
                return i(e[a]) ? r(e[a], function(e) {
                    return s + encodeURIComponent(o(e))
                }).join(t) : s + encodeURIComponent(o(e[a]))
            }).join(t) : s ? encodeURIComponent(o(s)) + n + encodeURIComponent(o(e)) : ""
        }
        ;
        var i = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
          , a = Object.keys || function(e) {
            var t = [];
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t
        }
    }
    , {}],
    6: [function(e, t, n) {
        "use strict";
        n.decode = n.parse = e("./decode"),
        n.encode = n.stringify = e("./encode")
    }
    , {
        "./decode": 4,
        "./encode": 5
    }],
    7: [function(e, t, n) {
        "use strict";
        function r() {
            this.protocol = null,
            this.slashes = null,
            this.auth = null,
            this.host = null,
            this.port = null,
            this.hostname = null,
            this.hash = null,
            this.search = null,
            this.query = null,
            this.pathname = null,
            this.path = null,
            this.href = null
        }
        function o(e, t, n) {
            if (e && l.isObject(e) && e instanceof r)
                return e;
            var o = new r;
            return o.parse(e, t, n),
            o
        }
        function i(e) {
            return l.isString(e) && (e = o(e)),
            e instanceof r ? e.format() : r.prototype.format.call(e)
        }
        function a(e, t) {
            return o(e, !1, !0).resolve(t)
        }
        function s(e, t) {
            return e ? o(e, !1, !0).resolveObject(t) : t
        }
        var u = e("punycode")
          , l = e("./util");
        n.parse = o,
        n.resolve = a,
        n.resolveObject = s,
        n.format = i,
        n.Url = r;
        var c = /^([a-z0-9.+-]+:)/i
          , f = /:[0-9]*$/
          , p = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/
          , h = ["<", ">", '"', "`", " ", "\r", "\n", "\t"]
          , d = ["{", "}", "|", "\\", "^", "`"].concat(h)
          , g = ["'"].concat(d)
          , m = ["%", "/", "?", ";", "#"].concat(g)
          , v = ["/", "?", "#"]
          , y = 255
          , b = /^[+a-z0-9A-Z_-]{0,63}$/
          , x = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
          , w = {
            javascript: !0,
            "javascript:": !0
        }
          , C = {
            javascript: !0,
            "javascript:": !0
        }
          , T = {
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
        }
          , k = e("querystring");
        r.prototype.parse = function(e, t, n) {
            if (!l.isString(e))
                throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
            var r = e.indexOf("?")
              , o = r !== -1 && r < e.indexOf("#") ? "?" : "#"
              , i = e.split(o)
              , a = /\\/g;
            i[0] = i[0].replace(a, "/"),
            e = i.join(o);
            var s = e;
            if (s = s.trim(),
            !n && 1 === e.split("#").length) {
                var f = p.exec(s);
                if (f)
                    return this.path = s,
                    this.href = s,
                    this.pathname = f[1],
                    f[2] ? (this.search = f[2],
                    t ? this.query = k.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "",
                    this.query = {}),
                    this
            }
            var h = c.exec(s);
            if (h) {
                h = h[0];
                var d = h.toLowerCase();
                this.protocol = d,
                s = s.substr(h.length)
            }
            if (n || h || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var j = "//" === s.substr(0, 2);
                !j || h && C[h] || (s = s.substr(2),
                this.slashes = !0)
            }
            if (!C[h] && (j || h && !T[h])) {
                for (var E = -1, N = 0; N < v.length; N++) {
                    var S = s.indexOf(v[N]);
                    S !== -1 && (E === -1 || S < E) && (E = S)
                }
                var A, q;
                q = E === -1 ? s.lastIndexOf("@") : s.lastIndexOf("@", E),
                q !== -1 && (A = s.slice(0, q),
                s = s.slice(q + 1),
                this.auth = decodeURIComponent(A)),
                E = -1;
                for (var N = 0; N < m.length; N++) {
                    var S = s.indexOf(m[N]);
                    S !== -1 && (E === -1 || S < E) && (E = S)
                }
                E === -1 && (E = s.length),
                this.host = s.slice(0, E),
                s = s.slice(E),
                this.parseHost(),
                this.hostname = this.hostname || "";
                var D = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!D)
                    for (var O = this.hostname.split(/\./), N = 0, L = O.length; N < L; N++) {
                        var H = O[N];
                        if (H && !H.match(b)) {
                            for (var F = "", P = 0, I = H.length; P < I; P++)
                                F += H.charCodeAt(P) > 127 ? "x" : H[P];
                            if (!F.match(b)) {
                                var R = O.slice(0, N)
                                  , M = O.slice(N + 1)
                                  , $ = H.match(x);
                                $ && (R.push($[1]),
                                M.unshift($[2])),
                                M.length && (s = "/" + M.join(".") + s),
                                this.hostname = R.join(".");
                                break
                            }
                        }
                    }
                this.hostname.length > y ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(),
                D || (this.hostname = u.toASCII(this.hostname));
                var _ = this.port ? ":" + this.port : ""
                  , W = this.hostname || "";
                this.host = W + _,
                this.href += this.host,
                D && (this.hostname = this.hostname.substr(1, this.hostname.length - 2),
                "/" !== s[0] && (s = "/" + s))
            }
            if (!w[d])
                for (var N = 0, L = g.length; N < L; N++) {
                    var B = g[N];
                    if (s.indexOf(B) !== -1) {
                        var U = encodeURIComponent(B);
                        U === B && (U = escape(B)),
                        s = s.split(B).join(U)
                    }
                }
            var z = s.indexOf("#");
            z !== -1 && (this.hash = s.substr(z),
            s = s.slice(0, z));
            var X = s.indexOf("?");
            if (X !== -1 ? (this.search = s.substr(X),
            this.query = s.substr(X + 1),
            t && (this.query = k.parse(this.query)),
            s = s.slice(0, X)) : t && (this.search = "",
            this.query = {}),
            s && (this.pathname = s),
            T[d] && this.hostname && !this.pathname && (this.pathname = "/"),
            this.pathname || this.search) {
                var _ = this.pathname || ""
                  , K = this.search || "";
                this.path = _ + K
            }
            return this.href = this.format(),
            this
        }
        ,
        r.prototype.format = function() {
            var e = this.auth || "";
            e && (e = encodeURIComponent(e),
            e = e.replace(/%3A/i, ":"),
            e += "@");
            var t = this.protocol || ""
              , n = this.pathname || ""
              , r = this.hash || ""
              , o = !1
              , i = "";
            this.host ? o = e + this.host : this.hostname && (o = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"),
            this.port && (o += ":" + this.port)),
            this.query && l.isObject(this.query) && Object.keys(this.query).length && (i = k.stringify(this.query));
            var a = this.search || i && "?" + i || "";
            return t && ":" !== t.substr(-1) && (t += ":"),
            this.slashes || (!t || T[t]) && o !== !1 ? (o = "//" + (o || ""),
            n && "/" !== n.charAt(0) && (n = "/" + n)) : o || (o = ""),
            r && "#" !== r.charAt(0) && (r = "#" + r),
            a && "?" !== a.charAt(0) && (a = "?" + a),
            n = n.replace(/[?#]/g, function(e) {
                return encodeURIComponent(e)
            }),
            a = a.replace("#", "%23"),
            t + o + n + a + r
        }
        ,
        r.prototype.resolve = function(e) {
            return this.resolveObject(o(e, !1, !0)).format()
        }
        ,
        r.prototype.resolveObject = function(e) {
            if (l.isString(e)) {
                var t = new r;
                t.parse(e, !1, !0),
                e = t
            }
            for (var n = new r, o = Object.keys(this), i = 0; i < o.length; i++) {
                var a = o[i];
                n[a] = this[a]
            }
            if (n.hash = e.hash,
            "" === e.href)
                return n.href = n.format(),
                n;
            if (e.slashes && !e.protocol) {
                for (var s = Object.keys(e), u = 0; u < s.length; u++) {
                    var c = s[u];
                    "protocol" !== c && (n[c] = e[c])
                }
                return T[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"),
                n.href = n.format(),
                n
            }
            if (e.protocol && e.protocol !== n.protocol) {
                if (!T[e.protocol]) {
                    for (var f = Object.keys(e), p = 0; p < f.length; p++) {
                        var h = f[p];
                        n[h] = e[h]
                    }
                    return n.href = n.format(),
                    n
                }
                if (n.protocol = e.protocol,
                e.host || C[e.protocol])
                    n.pathname = e.pathname;
                else {
                    for (var d = (e.pathname || "").split("/"); d.length && !(e.host = d.shift()); )
                        ;
                    e.host || (e.host = ""),
                    e.hostname || (e.hostname = ""),
                    "" !== d[0] && d.unshift(""),
                    d.length < 2 && d.unshift(""),
                    n.pathname = d.join("/")
                }
                if (n.search = e.search,
                n.query = e.query,
                n.host = e.host || "",
                n.auth = e.auth,
                n.hostname = e.hostname || e.host,
                n.port = e.port,
                n.pathname || n.search) {
                    var g = n.pathname || ""
                      , m = n.search || "";
                    n.path = g + m
                }
                return n.slashes = n.slashes || e.slashes,
                n.href = n.format(),
                n
            }
            var v = n.pathname && "/" === n.pathname.charAt(0)
              , y = e.host || e.pathname && "/" === e.pathname.charAt(0)
              , b = y || v || n.host && e.pathname
              , x = b
              , w = n.pathname && n.pathname.split("/") || []
              , d = e.pathname && e.pathname.split("/") || []
              , k = n.protocol && !T[n.protocol];
            if (k && (n.hostname = "",
            n.port = null,
            n.host && ("" === w[0] ? w[0] = n.host : w.unshift(n.host)),
            n.host = "",
            e.protocol && (e.hostname = null,
            e.port = null,
            e.host && ("" === d[0] ? d[0] = e.host : d.unshift(e.host)),
            e.host = null),
            b = b && ("" === d[0] || "" === w[0])),
            y)
                n.host = e.host || "" === e.host ? e.host : n.host,
                n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname,
                n.search = e.search,
                n.query = e.query,
                w = d;
            else if (d.length)
                w || (w = []),
                w.pop(),
                w = w.concat(d),
                n.search = e.search,
                n.query = e.query;
            else if (!l.isNullOrUndefined(e.search)) {
                if (k) {
                    n.hostname = n.host = w.shift();
                    var j = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                    j && (n.auth = j.shift(),
                    n.host = n.hostname = j.shift())
                }
                return n.search = e.search,
                n.query = e.query,
                l.isNull(n.pathname) && l.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
                n.href = n.format(),
                n
            }
            if (!w.length)
                return n.pathname = null,
                n.search ? n.path = "/" + n.search : n.path = null,
                n.href = n.format(),
                n;
            for (var E = w.slice(-1)[0], N = (n.host || e.host || w.length > 1) && ("." === E || ".." === E) || "" === E, S = 0, A = w.length; A >= 0; A--)
                E = w[A],
                "." === E ? w.splice(A, 1) : ".." === E ? (w.splice(A, 1),
                S++) : S && (w.splice(A, 1),
                S--);
            if (!b && !x)
                for (; S--; S)
                    w.unshift("..");
            !b || "" === w[0] || w[0] && "/" === w[0].charAt(0) || w.unshift(""),
            N && "/" !== w.join("/").substr(-1) && w.push("");
            var q = "" === w[0] || w[0] && "/" === w[0].charAt(0);
            if (k) {
                n.hostname = n.host = q ? "" : w.length ? w.shift() : "";
                var j = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                j && (n.auth = j.shift(),
                n.host = n.hostname = j.shift())
            }
            return b = b || n.host && w.length,
            b && !q && w.unshift(""),
            w.length ? n.pathname = w.join("/") : (n.pathname = null,
            n.path = null),
            l.isNull(n.pathname) && l.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
            n.auth = e.auth || n.auth,
            n.slashes = n.slashes || e.slashes,
            n.href = n.format(),
            n
        }
        ,
        r.prototype.parseHost = function() {
            var e = this.host
              , t = f.exec(e);
            t && (t = t[0],
            ":" !== t && (this.port = t.substr(1)),
            e = e.substr(0, e.length - t.length)),
            e && (this.hostname = e)
        }
    }
    , {
        "./util": 8,
        punycode: 3,
        querystring: 6
    }],
    8: [function(e, t, n) {
        "use strict";
        t.exports = {
            isString: function(e) {
                return "string" == typeof e
            },
            isObject: function(e) {
                return "object" == typeof e && null !== e
            },
            isNull: function(e) {
                return null === e
            },
            isNullOrUndefined: function(e) {
                return null == e
            }
        }
    }
    , {}],
    9: [function(e, t, n) {
        function r(e) {
            var t = a(e.currentTarget).parent().find(".dropdown-menu");
            t.toggleClass("open"),
            e.stopPropagation(),
            e.preventDefault()
        }
        function o(e) {
            a(".dropdown-menu").removeClass("open")
        }
        function i() {
            a(document).on("click", ".toggle-dropdown", r),
            a(document).on("click", ".dropdown-menu", function(e) {
                e.stopPropagation()
            }),
            a(document).on("click", o)
        }
        var a = e("jquery");
        t.exports = {
            init: i
        }
    }
    , {
        jquery: 1
    }],
    10: [function(e, t, n) {
        function r() {
            s.init(),
            i.init(),
            o.init(),
            a.init(),
            u.createButton({
                index: 0,
                icon: "fa fa-align-justify",
                onClick: function(e) {
                    e.preventDefault(),
                    s.toggle()
                }
            })
        }
        var o = e("./dropdown")
          , i = e("./keyboard")
          , a = e("./navigation")
          , s = e("./sidebar")
          , u = e("./toolbar")
          , l = window.gitbook;
        l.events.on("start", r),
        l.keyboard = i,
        l.navigation = a,
        l.sidebar = s,
        l.toolbar = u
    }
    , {
        "./dropdown": 9,
        "./keyboard": 11,
        "./navigation": 13,
        "./sidebar": 15,
        "./toolbar": 16
    }],
    11: [function(e, t, n) {
        function r(e, t) {
            i.bind(e, function(e) {
                return t(),
                !1
            })
        }
        function o() {
            r(["right"], function(e) {
                a.goNext()
            }),
            r(["left"], function(e) {
                a.goPrev()
            }),
            r(["s"], function(e) {
                s.toggle()
            })
        }
        var i = e("mousetrap")
          , a = e("./navigation")
          , s = e("./sidebar");
        t.exports = {
            init: o,
            bind: r
        }
    }
    , {
        "./navigation": 13,
        "./sidebar": 15,
        mousetrap: 2
    }],
    12: [function(e, t, n) {
        function r(e) {
            return o.state.$book.addClass("is-loading"),
            e.always(function() {
                o.state.$book.removeClass("is-loading")
            }),
            e
        }
        var o = window.gitbook;
        t.exports = {
            show: r
        }
    }
    , {}],
    13: [function(e, t, n) {
        function r() {
            return T(E.isSmallScreen() ? ".book-body" : ".body-inner")
        }
        function o(e) {
            var t = r()
              , n = 0;
            i(e) && (e && (n = u(e)),
            t.unbind("scroll"),
            t.animate({
                scrollTop: n
            }, 800, "swing", function() {
                t.scroll(f)
            }),
            l(null, e))
        }
        function i(e) {
            var t = r()
              , n = t.find(e);
            return !!n.length
        }
        function a(e) {
            return 0 === e.length
        }
        function s(e, t) {
            return e.length > 0 && e.filter(t).length > 0
        }
        function u(e) {
            var t = r()
              , n = t.find(".page-inner")
              , o = t.find(e)
              , i = o.offsetParent()
              , u = 0;
            if (s([t, n, o, i], a))
                return 0;
            u = o.position().top;
            for (var l = 10, c = 0; c < l && (!i.is(n) && !i.is(i.offsetParent())); c++)
                o = i,
                u += o.position().top,
                i = o.offsetParent();
            return Math.floor(u)
        }
        function l(e, t) {
            if (e || t || (e = w.first()),
            t && (e = w.length > 1 ? w.filter(function() {
                var e = c(T(this));
                return e == t
            }).first() : w.first()),
            !e.is(C)) {
                C = e,
                w.removeClass("active"),
                e.addClass("active"),
                t = c(e);
                var n = window.location.pathname + window.location.hash
                  , r = window.location.pathname + t;
                r != n && history.replaceState({
                    path: r
                }, null, r)
            }
        }
        function c(e) {
            var t = e.children("a")
              , n = t.attr("href").split("#")[1];
            return n && (n = "#" + n),
            n ? n : ""
        }
        function f() {
            var e = r()
              , t = e.scrollTop()
              , n = e.prop("scrollHeight")
              , o = e.prop("clientHeight")
              , i = w.length
              , a = null;
            T(w.get().reverse()).each(function(e) {
                var n, r = c(T(this));
                r && !a && (n = u(r),
                t >= n && (a = T(this))),
                e != i - 1 || a || (a = T(this))
            }),
            a || t || (a = w.first()),
            t && n - t == o && (a = w.last()),
            l(a)
        }
        function p(e, t) {
            var n = k.parse(A)
              , r = k.resolve(window.location.pathname, e)
              , i = k.parse(r)
              , a = i.hash
              , s = i.pathname !== n.pathname
              , u = Boolean(i.hostname);
            if (!S || u)
                return void (location.href = e);
            if (!s)
                return t && history.pushState({
                    path: r
                }, null, r),
                o(a);
            A = r;
            var l = T.Deferred(function(e) {
                T.ajax({
                    type: "GET",
                    url: r,
                    cache: !0,
                    headers: {
                        "Access-Control-Expose-Headers": "X-Current-Location"
                    },
                    success: function(n, i, s) {
                        var u = s.getResponseHeader("X-Current-Location") || r;
                        n = n.replace(/<(\/?)(html|head|body)([^>]*)>/gi, function(e, t, n, r) {
                            return "<" + t + "div" + (t ? "" : ' data-element="' + n + '"') + r + ">"
                        });
                        var l, c = T(n), f = c.find(".book");
                        if (0 === f.length) {
                            var p = new Error("Invalid gitbook page, redirecting...");
                            return e.reject(p)
                        }
                        t && history.pushState({
                            path: u
                        }, null, u),
                        c = T(n),
                        l = c.find("[data-element=head]"),
                        f = c.find(".book"),
                        document.title = l.find("title").text();
                        var h = T("head");
                        h.find("link[rel=prev]").remove(),
                        h.find("link[rel=next]").remove(),
                        h.append(l.find("link[rel=prev]")),
                        h.append(l.find("link[rel=next]"));
                        var g = T(".book").attr("class")
                          , m = T(".book-summary").scrollTop();
                        f.toggleClass("with-summary", T(".book").hasClass("with-summary")),
                        T(".book").replaceWith(f),
                        T(".book").attr("class", g),
                        T(".book-summary").scrollTop(m),
                        N.state.$book = T(".book"),
                        d(!a),
                        a && o(a),
                        e.resolve()
                    }
                })
            }).promise();
            return j.show(l.fail(function(e) {
                console.log(e)
            }))
        }
        function h() {
            var e, t;
            e = parseInt(T(".body-inner").css("width"), 10),
            t = parseInt(T(".page-wrapper").css("width"), 10),
            T(".navigation-next").css("margin-right", e - t + "px");
            var n = r();
            n.unbind("scroll"),
            n.scroll(f)
        }
        function d(e) {
            var t = T(".book-body")
              , n = t.find(".body-inner")
              , o = n.find(".page-wrapper");
            h(),
            o.focus();
            var i = r();
            e !== !1 && i.scrollTop(0),
            w = T(".book-summary .summary .chapter").filter(function() {
                var e = T(this).children("a")
                  , t = null;
                if (!e.length)
                    return !1;
                t = e.attr("href").split("#")[0];
                var n = k.resolve(window.location.pathname, t);
                return window.location.pathname == n
            }),
            w.length > 1 ? i.scroll(f) : C = w.first()
        }
        function g(e) {
            return 0 === e.button
        }
        function m(e) {
            return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
        }
        function v(e) {
            var t = T(this)
              , n = t.attr("target");
            if (!m(e) && g(e) && !n) {
                e.stopPropagation(),
                e.preventDefault();
                var r = t.attr("href");
                r && p(r, !0)
            }
        }
        function y() {
            var e = T(".navigation-next").attr("href");
            e && p(e, !0)
        }
        function b() {
            var e = T(".navigation-prev").attr("href");
            e && p(e, !0)
        }
        function x() {
            T.ajaxSetup({
                cache: !1
            }),
            history.replaceState({
                path: window.location.href
            }, ""),
            window.onpopstate = function(e) {
                if (null !== e.state)
                    return p(e.state.path, !1)
            }
            ,
            T(document).on("click", ".navigation-prev", v),
            T(document).on("click", ".navigation-next", v),
            T(document).on("click", ".summary [data-path] a", v),
            T(document).on("click", ".page-inner a", v),
            T(window).resize(h),
            d(!1)
        }
        var w, C, T = e("jquery"), k = e("url"), j = e("./loading"), E = e("./platform"), N = window.gitbook, S = "undefined" != typeof history.pushState, A = location.href;
        t.exports = {
            init: x,
            goNext: y,
            goPrev: b
        }
    }
    , {
        "./loading": 12,
        "./platform": 14,
        jquery: 1,
        url: 7
    }],
    14: [function(e, t, n) {
        var r = e("jquery");
        t.exports = {
            isMobile: function() {
                return r(document).width() <= 600
            },
            isSmallScreen: function() {
                return r(document).width() <= 1240
            }
        }
    }
    , {
        jquery: 1
    }],
    15: [function(e, t, n) {
        function r(e, t) {
            null != l.state && o() == e || (null == t && (t = !0),
            l.state.$book.toggleClass("without-animation", !t),
            l.state.$book.toggleClass("with-summary", e),
            l.storage.set("sidebar", o()))
        }
        function o() {
            return l.state.$book.hasClass("with-summary")
        }
        function i() {
            u.isMobile() || r(l.storage.get("sidebar", !0), !1),
            s(document).on("click", ".book-summary li.chapter a", function(e) {
                u.isMobile() && r(!1, !1)
            })
        }
        function a(e) {
            var t = s(".book-summary");
            t.find("li").each(function() {
                var t = s(this).data("path")
                  , n = null == e || e.indexOf(t) !== -1;
                s(this).toggle(n),
                n && s(this).parents("li").show()
            })
        }
        var s = e("jquery")
          , u = e("./platform")
          , l = window.gitbook;
        t.exports = {
            init: i,
            isOpen: o,
            toggle: r,
            filter: a
        }
    }
    , {
        "./platform": 14,
        jquery: 1
    }],
    16: [function(e, t, n) {
        function r() {
            return "btn-" + g++
        }
        function o(e, t, n, r) {
            var o = e.children(t).length;
            n < 0 && (n = Math.max(0, o + 1 + n)),
            e.append(r),
            n < o && e.children(t).eq(n).before(e.children(t).last())
        }
        function i(e) {
            e.preventDefault()
        }
        function a(e) {
            var t = p("<div>", {
                class: "dropdown-menu",
                html: '<div class="dropdown-caret"><span class="caret-outer"></span><span class="caret-inner"></span></div>'
            });
            if ("string" == typeof e)
                t.append(e);
            else {
                var n = e.map(function(e) {
                    return p.isArray(e) ? e : [e]
                });
                n.forEach(function(e) {
                    var n = p("<div>", {
                        class: "buttons"
                    })
                      , r = "size-" + e.length;
                    e.forEach(function(e) {
                        e = p.extend({
                            text: "",
                            className: "",
                            onClick: i
                        }, e || {});
                        var t = p("<button>", {
                            class: "button " + r + " " + e.className,
                            text: e.text
                        });
                        t.click(e.onClick),
                        n.append(t)
                    }),
                    t.append(n)
                })
            }
            return t
        }
        function s(e) {
            return e = p.extend({
                label: "",
                icon: "",
                text: "",
                position: "left",
                className: "",
                onClick: i,
                dropdown: null,
                index: null,
                id: r()
            }, e || {}),
            d.push(e),
            u(e),
            e.id
        }
        function u(e) {
            var t, n = p(".book-header"), r = n.find("h1"), i = "pull-" + e.position, s = p("<a>", {
                class: "btn",
                text: e.text ? " " + e.text : "",
                "aria-label": e.label,
                href: "#"
            });
            if (s.click(e.onClick),
            e.icon && p("<i>", {
                class: e.icon
            }).prependTo(s),
            e.dropdown) {
                var u = p("<div>", {
                    class: "dropdown " + i + " " + e.className
                });
                s.addClass("toggle-dropdown"),
                u.append(s);
                var l = a(e.dropdown);
                l.addClass("dropdown-" + ("right" == e.position ? "left" : "right")),
                u.append(l),
                t = u
            } else
                s.addClass(i),
                s.addClass(e.className),
                t = s;
            t.addClass("js-toolbar-action"),
            p.isNumeric(e.index) && e.index >= 0 ? o(n, ".btn, .dropdown, h1", e.index, t) : t.insertBefore(r)
        }
        function l() {
            p(".js-toolbar-action").remove(),
            d.forEach(u)
        }
        function c(e) {
            d = p.grep(d, function(t) {
                return t.id != e
            }),
            l()
        }
        function f(e) {
            d = p.grep(d, function(t) {
                return e.indexOf(t.id) == -1
            }),
            l()
        }
        var p = e("jquery")
          , h = window.gitbook
          , d = []
          , g = 0;
        h.events.on("page.change", function() {
            l()
        }),
        t.exports = {
            createButton: s,
            removeButton: c,
            removeButtons: f
        }
    }
    , {
        jquery: 1
    }]
}, {}, [10]);
