!function(e) {
    "function" == typeof define && define.amd ? define("app", e) : e();
}((function() {
    "use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function t(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports;
    }
    var n, i = t((function(t) {
        !function(e, n) {
            t.exports = e.document ? n(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e);
            };
        }("undefined" != typeof window ? window : e, (function(e, t) {
            var n = [], i = Object.getPrototypeOf, o = n.slice, r = n.flat ? function(e) {
                return n.flat.call(e);
            } : function(e) {
                return n.concat.apply([], e);
            }, s = n.push, a = n.indexOf, l = {}, c = l.toString, d = l.hasOwnProperty, u = d.toString, p = u.call(Object), f = {}, h = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
            }, v = function(e) {
                return null != e && e === e.window;
            }, g = e.document, y = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };
            function m(e, t, n) {
                var i, o, r = (n = n || g).createElement("script");
                if (r.text = e, t) for (i in y) (o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
                n.head.appendChild(r).parentNode.removeChild(r);
            }
            function b(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
            }
            var w = "3.6.4", x = function(e, t) {
                return new x.fn.init(e, t);
            };
            function k(e) {
                var t = !!e && "length" in e && e.length, n = b(e);
                return !h(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
            }
            x.fn = x.prototype = {
                jquery: w,
                constructor: x,
                length: 0,
                toArray: function() {
                    return o.call(this);
                },
                get: function(e) {
                    return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
                },
                pushStack: function(e) {
                    var t = x.merge(this.constructor(), e);
                    return t.prevObject = this, t;
                },
                each: function(e) {
                    return x.each(this, e);
                },
                map: function(e) {
                    return this.pushStack(x.map(this, (function(t, n) {
                        return e.call(t, n, t);
                    })));
                },
                slice: function() {
                    return this.pushStack(o.apply(this, arguments));
                },
                first: function() {
                    return this.eq(0);
                },
                last: function() {
                    return this.eq(-1);
                },
                even: function() {
                    return this.pushStack(x.grep(this, (function(e, t) {
                        return (t + 1) % 2;
                    })));
                },
                odd: function() {
                    return this.pushStack(x.grep(this, (function(e, t) {
                        return t % 2;
                    })));
                },
                eq: function(e) {
                    var t = this.length, n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
                },
                end: function() {
                    return this.prevObject || this.constructor();
                },
                push: s,
                sort: n.sort,
                splice: n.splice
            }, x.extend = x.fn.extend = function() {
                var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || h(s) || (s = {}), 
                a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) i = e[t], 
                "__proto__" !== t && s !== i && (c && i && (x.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[t], 
                r = o && !Array.isArray(n) ? [] : o || x.isPlainObject(n) ? n : {}, o = !1, s[t] = x.extend(c, r, i)) : void 0 !== i && (s[t] = i));
                return s;
            }, x.extend({
                expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e);
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = d.call(t, "constructor") && t.constructor) && u.call(n) === p);
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0;
                },
                globalEval: function(e, t, n) {
                    m(e, {
                        nonce: t && t.nonce
                    }, n);
                },
                each: function(e, t) {
                    var n, i = 0;
                    if (k(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                    return e;
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (k(Object(e)) ? x.merge(n, "string" == typeof e ? [ e ] : e) : s.call(n, e)), 
                    n;
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : a.call(t, e, n);
                },
                merge: function(e, t) {
                    for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                    return e.length = o, e;
                },
                grep: function(e, t, n) {
                    for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
                    return i;
                },
                map: function(e, t, n) {
                    var i, o, s = 0, a = [];
                    if (k(e)) for (i = e.length; s < i; s++) null != (o = t(e[s], s, n)) && a.push(o); else for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
                    return r(a);
                },
                guid: 1,
                support: f
            }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]), 
            x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                l["[object " + t + "]"] = t.toLowerCase();
            }));
            var T = function(e) {
                var t, n, i, o, r, s, a, l, c, d, u, p, f, h, v, g, y, m, b, w = "sizzle" + 1 * new Date, x = e.document, k = 0, T = 0, S = le(), C = le(), $ = le(), A = le(), E = function(e, t) {
                    return e === t && (u = !0), 0;
                }, j = {}.hasOwnProperty, O = [], D = O.pop, N = O.push, L = O.push, H = O.slice, P = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                    return -1;
                }, q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", z = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", I = "\\[" + M + "*(" + z + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + M + "*\\]", W = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", R = new RegExp(M + "+", "g"), F = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = new RegExp("^" + M + "*," + M + "*"), B = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(W), Y = new RegExp("^" + z + "$"), V = {
                    ID: new RegExp("^#(" + z + ")"),
                    CLASS: new RegExp("^\\.(" + z + ")"),
                    TAG: new RegExp("^(" + z + "|[*])"),
                    ATTR: new RegExp("^" + I),
                    PSEUDO: new RegExp("^" + W),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + q + ")$", "i"),
                    needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                }, G = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"), ne = function(e, t) {
                    var n = "0x" + e.slice(1) - 65536;
                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
                }, ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
                }, re = function() {
                    p();
                }, se = we((function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                }), {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    L.apply(O = H.call(x.childNodes), x.childNodes), O[x.childNodes.length].nodeType;
                } catch (e) {
                    L = {
                        apply: O.length ? function(e, t) {
                            N.apply(e, H.call(t));
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++]; ) ;
                            e.length = n - 1;
                        }
                    };
                }
                function ae(e, t, i, o) {
                    var r, a, c, d, u, h, y, m = t && t.ownerDocument, x = t ? t.nodeType : 9;
                    if (i = i || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return i;
                    if (!o && (p(t), t = t || f, v)) {
                        if (11 !== x && (u = Z.exec(e))) if (r = u[1]) {
                            if (9 === x) {
                                if (!(c = t.getElementById(r))) return i;
                                if (c.id === r) return i.push(c), i;
                            } else if (m && (c = m.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), 
                            i;
                        } else {
                            if (u[2]) return L.apply(i, t.getElementsByTagName(e)), i;
                            if ((r = u[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(r)), 
                            i;
                        }
                        if (n.qsa && !A[e + " "] && (!g || !g.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                            if (y = e, m = t, 1 === x && (U.test(e) || B.test(e))) {
                                for ((m = ee.test(e) && ye(t.parentNode) || t) === t && n.scope || ((d = t.getAttribute("id")) ? d = d.replace(ie, oe) : t.setAttribute("id", d = w)), 
                                a = (h = s(e)).length; a--; ) h[a] = (d ? "#" + d : ":scope") + " " + be(h[a]);
                                y = h.join(",");
                            }
                            try {
                                return L.apply(i, m.querySelectorAll(y)), i;
                            } catch (t) {
                                A(e, !0);
                            } finally {
                                d === w && t.removeAttribute("id");
                            }
                        }
                    }
                    return l(e.replace(F, "$1"), t, i, o);
                }
                function le() {
                    var e = [];
                    return function t(n, o) {
                        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o;
                    };
                }
                function ce(e) {
                    return e[w] = !0, e;
                }
                function de(e) {
                    var t = f.createElement("fieldset");
                    try {
                        return !!e(t);
                    } catch (e) {
                        return !1;
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null;
                    }
                }
                function ue(e, t) {
                    for (var n = e.split("|"), o = n.length; o--; ) i.attrHandle[n[o]] = t;
                }
                function pe(e, t) {
                    var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i) return i;
                    if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
                    return e ? 1 : -1;
                }
                function fe(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e;
                    };
                }
                function he(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e;
                    };
                }
                function ve(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e;
                    };
                }
                function ge(e) {
                    return ce((function(t) {
                        return t = +t, ce((function(n, i) {
                            for (var o, r = e([], n.length, t), s = r.length; s--; ) n[o = r[s]] && (n[o] = !(i[o] = n[o]));
                        }));
                    }));
                }
                function ye(e) {
                    return e && void 0 !== e.getElementsByTagName && e;
                }
                for (t in n = ae.support = {}, r = ae.isXML = function(e) {
                    var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
                    return !G.test(t || n && n.nodeName || "HTML");
                }, p = ae.setDocument = function(e) {
                    var t, o, s = e ? e.ownerDocument || e : x;
                    return s != f && 9 === s.nodeType && s.documentElement ? (h = (f = s).documentElement, 
                    v = !r(f), x != f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), 
                    n.scope = de((function(e) {
                        return h.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                    })), n.cssHas = de((function() {
                        try {
                            return f.querySelector(":has(*,:jqfake)"), !1;
                        } catch (e) {
                            return !0;
                        }
                    })), n.attributes = de((function(e) {
                        return e.className = "i", !e.getAttribute("className");
                    })), n.getElementsByTagName = de((function(e) {
                        return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length;
                    })), n.getElementsByClassName = K.test(f.getElementsByClassName), n.getById = de((function(e) {
                        return h.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length;
                    })), n.getById ? (i.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            return e.getAttribute("id") === t;
                        };
                    }, i.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && v) {
                            var n = t.getElementById(e);
                            return n ? [ n ] : [];
                        }
                    }) : (i.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t;
                        };
                    }, i.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && v) {
                            var n, i, o, r = t.getElementById(e);
                            if (r) {
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [ r ];
                                for (o = t.getElementsByName(e), i = 0; r = o[i++]; ) if ((n = r.getAttributeNode("id")) && n.value === e) return [ r ];
                            }
                            return [];
                        }
                    }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                    } : function(e, t) {
                        var n, i = [], o = 0, r = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (;n = r[o++]; ) 1 === n.nodeType && i.push(n);
                            return i;
                        }
                        return r;
                    }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && v) return t.getElementsByClassName(e);
                    }, y = [], g = [], (n.qsa = K.test(f.querySelectorAll)) && (de((function(e) {
                        var t;
                        h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                        e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + M + "*(?:''|\"\")"), 
                        e.querySelectorAll("[selected]").length || g.push("\\[" + M + "*(?:value|" + q + ")"), 
                        e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), (t = f.createElement("input")).setAttribute("name", ""), 
                        e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), 
                        e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]"), 
                        e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]");
                    })), de((function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = f.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + M + "*[*^$|!~]?="), 
                        2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), 
                        h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), 
                        e.querySelectorAll("*,:x"), g.push(",.*:");
                    }))), (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && de((function(e) {
                        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), y.push("!=", W);
                    })), n.cssHas || g.push(":has"), g = g.length && new RegExp(g.join("|")), y = y.length && new RegExp(y.join("|")), 
                    t = K.test(h.compareDocumentPosition), b = t || K.test(h.contains) ? function(e, t) {
                        var n = 9 === e.nodeType && e.documentElement || e, i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                    } : function(e, t) {
                        if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                        return !1;
                    }, E = t ? function(e, t) {
                        if (e === t) return u = !0, 0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == f || e.ownerDocument == x && b(x, e) ? -1 : t == f || t.ownerDocument == x && b(x, t) ? 1 : d ? P(d, e) - P(d, t) : 0 : 4 & i ? -1 : 1);
                    } : function(e, t) {
                        if (e === t) return u = !0, 0;
                        var n, i = 0, o = e.parentNode, r = t.parentNode, s = [ e ], a = [ t ];
                        if (!o || !r) return e == f ? -1 : t == f ? 1 : o ? -1 : r ? 1 : d ? P(d, e) - P(d, t) : 0;
                        if (o === r) return pe(e, t);
                        for (n = e; n = n.parentNode; ) s.unshift(n);
                        for (n = t; n = n.parentNode; ) a.unshift(n);
                        for (;s[i] === a[i]; ) i++;
                        return i ? pe(s[i], a[i]) : s[i] == x ? -1 : a[i] == x ? 1 : 0;
                    }, f) : f;
                }, ae.matches = function(e, t) {
                    return ae(e, null, null, t);
                }, ae.matchesSelector = function(e, t) {
                    if (p(e), n.matchesSelector && v && !A[t + " "] && (!y || !y.test(t)) && (!g || !g.test(t))) try {
                        var i = m.call(e, t);
                        if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
                    } catch (e) {
                        A(t, !0);
                    }
                    return ae(t, f, null, [ e ]).length > 0;
                }, ae.contains = function(e, t) {
                    return (e.ownerDocument || e) != f && p(e), b(e, t);
                }, ae.attr = function(e, t) {
                    (e.ownerDocument || e) != f && p(e);
                    var o = i.attrHandle[t.toLowerCase()], r = o && j.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !v) : void 0;
                    return void 0 !== r ? r : n.attributes || !v ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }, ae.escape = function(e) {
                    return (e + "").replace(ie, oe);
                }, ae.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }, ae.uniqueSort = function(e) {
                    var t, i = [], o = 0, r = 0;
                    if (u = !n.detectDuplicates, d = !n.sortStable && e.slice(0), e.sort(E), u) {
                        for (;t = e[r++]; ) t === e[r] && (o = i.push(r));
                        for (;o--; ) e.splice(i[o], 1);
                    }
                    return d = null, e;
                }, o = ae.getText = function(e) {
                    var t, n = "", i = 0, r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                        } else if (3 === r || 4 === r) return e.nodeValue;
                    } else for (;t = e[i++]; ) n += o(t);
                    return n;
                }, i = ae.selectors = {
                    cacheLength: 50,
                    createPseudo: ce,
                    match: V,
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
                            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), 
                            "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), 
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), 
                            e;
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                            e[2] = n.slice(0, t)), e.slice(0, 3));
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function() {
                                return !0;
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t;
                            };
                        },
                        CLASS: function(e) {
                            var t = S[e + " "];
                            return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && S(e, (function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                            }));
                        },
                        ATTR: function(e, t, n) {
                            return function(i) {
                                var o = ae.attr(i, e);
                                return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
                            };
                        },
                        CHILD: function(e, t, n, i, o) {
                            var r = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                            return 1 === i && 0 === o ? function(e) {
                                return !!e.parentNode;
                            } : function(t, n, l) {
                                var c, d, u, p, f, h, v = r !== s ? "nextSibling" : "previousSibling", g = t.parentNode, y = a && t.nodeName.toLowerCase(), m = !l && !a, b = !1;
                                if (g) {
                                    if (r) {
                                        for (;v; ) {
                                            for (p = t; p = p[v]; ) if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                            h = v = "only" === e && !h && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (h = [ s ? g.firstChild : g.lastChild ], s && m) {
                                        for (b = (f = (c = (d = (u = (p = g)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === k && c[1]) && c[2], 
                                        p = f && g.childNodes[f]; p = ++f && p && p[v] || (b = f = 0) || h.pop(); ) if (1 === p.nodeType && ++b && p === t) {
                                            d[e] = [ k, f, b ];
                                            break;
                                        }
                                    } else if (m && (b = f = (c = (d = (u = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === k && c[1]), 
                                    !1 === b) for (;(p = ++f && p && p[v] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++b || (m && ((d = (u = p[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [ k, b ]), 
                                    p !== t)); ) ;
                                    return (b -= o) === i || b % i == 0 && b / i >= 0;
                                }
                            };
                        },
                        PSEUDO: function(e, t) {
                            var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                            return o[w] ? o(t) : o.length > 1 ? (n = [ e, e, "", t ], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) {
                                for (var i, r = o(e, t), s = r.length; s--; ) e[i = P(e, r[s])] = !(n[i] = r[s]);
                            })) : function(e) {
                                return o(e, 0, n);
                            }) : o;
                        }
                    },
                    pseudos: {
                        not: ce((function(e) {
                            var t = [], n = [], i = a(e.replace(F, "$1"));
                            return i[w] ? ce((function(e, t, n, o) {
                                for (var r, s = i(e, null, o, []), a = e.length; a--; ) (r = s[a]) && (e[a] = !(t[a] = r));
                            })) : function(e, o, r) {
                                return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop();
                            };
                        })),
                        has: ce((function(e) {
                            return function(t) {
                                return ae(e, t).length > 0;
                            };
                        })),
                        contains: ce((function(e) {
                            return e = e.replace(te, ne), function(t) {
                                return (t.textContent || o(t)).indexOf(e) > -1;
                            };
                        })),
                        lang: ce((function(e) {
                            return Y.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), 
                            function(t) {
                                var n;
                                do {
                                    if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            };
                        })),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id;
                        },
                        root: function(e) {
                            return e === h;
                        },
                        focus: function(e) {
                            return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                        },
                        enabled: ve(!1),
                        disabled: ve(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected;
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function(e) {
                            return !i.pseudos.empty(e);
                        },
                        header: function(e) {
                            return J.test(e.nodeName);
                        },
                        input: function(e) {
                            return Q.test(e.nodeName);
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t;
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                        },
                        first: ge((function() {
                            return [ 0 ];
                        })),
                        last: ge((function(e, t) {
                            return [ t - 1 ];
                        })),
                        eq: ge((function(e, t, n) {
                            return [ n < 0 ? n + t : n ];
                        })),
                        even: ge((function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        })),
                        odd: ge((function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        })),
                        lt: ge((function(e, t, n) {
                            for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
                            return e;
                        })),
                        gt: ge((function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                            return e;
                        }))
                    }
                }, i.pseudos.nth = i.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[t] = fe(t);
                for (t in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[t] = he(t);
                function me() {}
                function be(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i;
                }
                function we(e, t, n) {
                    var i = t.dir, o = t.next, r = o || i, s = n && "parentNode" === r, a = T++;
                    return t.first ? function(t, n, o) {
                        for (;t = t[i]; ) if (1 === t.nodeType || s) return e(t, n, o);
                        return !1;
                    } : function(t, n, l) {
                        var c, d, u, p = [ k, a ];
                        if (l) {
                            for (;t = t[i]; ) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                        } else for (;t = t[i]; ) if (1 === t.nodeType || s) if (d = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), 
                        o && o === t.nodeName.toLowerCase()) t = t[i] || t; else {
                            if ((c = d[r]) && c[0] === k && c[1] === a) return p[2] = c[2];
                            if (d[r] = p, p[2] = e(t, n, l)) return !0;
                        }
                        return !1;
                    };
                }
                function xe(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
                        return !0;
                    } : e[0];
                }
                function ke(e, t, n, i, o) {
                    for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (r = e[a]) && (n && !n(r, i, o) || (s.push(r), 
                    c && t.push(a)));
                    return s;
                }
                function Te(e, t, n, i, o, r) {
                    return i && !i[w] && (i = Te(i)), o && !o[w] && (o = Te(o, r)), ce((function(r, s, a, l) {
                        var c, d, u, p = [], f = [], h = s.length, v = r || function(e, t, n) {
                            for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                            return n;
                        }(t || "*", a.nodeType ? [ a ] : a, []), g = !e || !r && t ? v : ke(v, p, e, a, l), y = n ? o || (r ? e : h || i) ? [] : s : g;
                        if (n && n(g, y, a, l), i) for (c = ke(y, f), i(c, [], a, l), d = c.length; d--; ) (u = c[d]) && (y[f[d]] = !(g[f[d]] = u));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (c = [], d = y.length; d--; ) (u = y[d]) && c.push(g[d] = u);
                                    o(null, y = [], c, l);
                                }
                                for (d = y.length; d--; ) (u = y[d]) && (c = o ? P(r, u) : p[d]) > -1 && (r[c] = !(s[c] = u));
                            }
                        } else y = ke(y === s ? y.splice(h, y.length) : y), o ? o(null, s, y, l) : L.apply(s, y);
                    }));
                }
                function Se(e) {
                    for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, d = we((function(e) {
                        return e === t;
                    }), a, !0), u = we((function(e) {
                        return P(t, e) > -1;
                    }), a, !0), p = [ function(e, n, i) {
                        var o = !s && (i || n !== c) || ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
                        return t = null, o;
                    } ]; l < r; l++) if (n = i.relative[e[l].type]) p = [ we(xe(p), n) ]; else {
                        if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                            for (o = ++l; o < r && !i.relative[e[o].type]; o++) ;
                            return Te(l > 1 && xe(p), l > 1 && be(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*" : ""
                            })).replace(F, "$1"), n, l < o && Se(e.slice(l, o)), o < r && Se(e = e.slice(o)), o < r && be(e));
                        }
                        p.push(n);
                    }
                    return xe(p);
                }
                return me.prototype = i.filters = i.pseudos, i.setFilters = new me, s = ae.tokenize = function(e, t) {
                    var n, o, r, s, a, l, c, d = C[e + " "];
                    if (d) return t ? 0 : d.slice(0);
                    for (a = e, l = [], c = i.preFilter; a; ) {
                        for (s in n && !(o = _.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), 
                        n = !1, (o = B.exec(a)) && (n = o.shift(), r.push({
                            value: n,
                            type: o[0].replace(F, " ")
                        }), a = a.slice(n.length)), i.filter) !(o = V[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), 
                        r.push({
                            value: n,
                            type: s,
                            matches: o
                        }), a = a.slice(n.length));
                        if (!n) break;
                    }
                    return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
                }, a = ae.compile = function(e, t) {
                    var n, o = [], r = [], a = $[e + " "];
                    if (!a) {
                        for (t || (t = s(e)), n = t.length; n--; ) (a = Se(t[n]))[w] ? o.push(a) : r.push(a);
                        a = $(e, function(e, t) {
                            var n = t.length > 0, o = e.length > 0, r = function(r, s, a, l, d) {
                                var u, h, g, y = 0, m = "0", b = r && [], w = [], x = c, T = r || o && i.find.TAG("*", d), S = k += null == x ? 1 : Math.random() || .1, C = T.length;
                                for (d && (c = s == f || s || d); m !== C && null != (u = T[m]); m++) {
                                    if (o && u) {
                                        for (h = 0, s || u.ownerDocument == f || (p(u), a = !v); g = e[h++]; ) if (g(u, s || f, a)) {
                                            l.push(u);
                                            break;
                                        }
                                        d && (k = S);
                                    }
                                    n && ((u = !g && u) && y--, r && b.push(u));
                                }
                                if (y += m, n && m !== y) {
                                    for (h = 0; g = t[h++]; ) g(b, w, s, a);
                                    if (r) {
                                        if (y > 0) for (;m--; ) b[m] || w[m] || (w[m] = D.call(l));
                                        w = ke(w);
                                    }
                                    L.apply(l, w), d && !r && w.length > 0 && y + t.length > 1 && ae.uniqueSort(l);
                                }
                                return d && (k = S, c = x), b;
                            };
                            return n ? ce(r) : r;
                        }(r, o)), a.selector = e;
                    }
                    return a;
                }, l = ae.select = function(e, t, n, o) {
                    var r, l, c, d, u, p = "function" == typeof e && e, f = !o && s(e = p.selector || e);
                    if (n = n || [], 1 === f.length) {
                        if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && v && i.relative[l[1].type]) {
                            if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                            p && (t = t.parentNode), e = e.slice(l.shift().value.length);
                        }
                        for (r = V.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[d = c.type]); ) if ((u = i.find[d]) && (o = u(c.matches[0].replace(te, ne), ee.test(l[0].type) && ye(t.parentNode) || t))) {
                            if (l.splice(r, 1), !(e = o.length && be(l))) return L.apply(n, o), n;
                            break;
                        }
                    }
                    return (p || a(e, f))(o, t, !v, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
                }, n.sortStable = w.split("").sort(E).join("") === w, n.detectDuplicates = !!u, 
                p(), n.sortDetached = de((function(e) {
                    return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
                })), de((function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
                })) || ue("type|href|height|width", (function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                })), n.attributes && de((function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) || ue("value", (function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                })), de((function(e) {
                    return null == e.getAttribute("disabled");
                })) || ue(q, (function(e, t, n) {
                    var i;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                })), ae;
            }(e);
            x.find = T, x.expr = T.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = T.uniqueSort, 
            x.text = T.getText, x.isXMLDoc = T.isXML, x.contains = T.contains, x.escapeSelector = T.escape;
            var S = function(e, t, n) {
                for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
                    if (o && x(e).is(n)) break;
                    i.push(e);
                }
                return i;
            }, C = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n;
            }, $ = x.expr.match.needsContext;
            function A(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function j(e, t, n) {
                return h(t) ? x.grep(e, (function(e, i) {
                    return !!t.call(e, i, e) !== n;
                })) : t.nodeType ? x.grep(e, (function(e) {
                    return e === t !== n;
                })) : "string" != typeof t ? x.grep(e, (function(e) {
                    return a.call(t, e) > -1 !== n;
                })) : x.filter(t, e, n);
            }
            x.filter = function(e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [ i ] : [] : x.find.matches(e, x.grep(t, (function(e) {
                    return 1 === e.nodeType;
                })));
            }, x.fn.extend({
                find: function(e) {
                    var t, n, i = this.length, o = this;
                    if ("string" != typeof e) return this.pushStack(x(e).filter((function() {
                        for (t = 0; t < i; t++) if (x.contains(o[t], this)) return !0;
                    })));
                    for (n = this.pushStack([]), t = 0; t < i; t++) x.find(e, o[t], n);
                    return i > 1 ? x.uniqueSort(n) : n;
                },
                filter: function(e) {
                    return this.pushStack(j(this, e || [], !1));
                },
                not: function(e) {
                    return this.pushStack(j(this, e || [], !0));
                },
                is: function(e) {
                    return !!j(this, "string" == typeof e && $.test(e) ? x(e) : e || [], !1).length;
                }
            });
            var O, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (x.fn.init = function(e, t, n) {
                var i, o;
                if (!e) return this;
                if (n = n || O, "string" == typeof e) {
                    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : D.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), 
                        E.test(i[1]) && x.isPlainObject(t)) for (i in t) h(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this;
                    }
                    return (o = g.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this);
            }).prototype = x.fn, O = x(g);
            var N = /^(?:parents|prev(?:Until|All))/, L = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            function H(e, t) {
                for (;(e = e[t]) && 1 !== e.nodeType; ) ;
                return e;
            }
            x.fn.extend({
                has: function(e) {
                    var t = x(e, this), n = t.length;
                    return this.filter((function() {
                        for (var e = 0; e < n; e++) if (x.contains(this, t[e])) return !0;
                    }));
                },
                closest: function(e, t) {
                    var n, i = 0, o = this.length, r = [], s = "string" != typeof e && x(e);
                    if (!$.test(e)) for (;i < o; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        r.push(n);
                        break;
                    }
                    return this.pushStack(r.length > 1 ? x.uniqueSort(r) : r);
                },
                index: function(e) {
                    return e ? "string" == typeof e ? a.call(x(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function(e, t) {
                    return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))));
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                }
            }), x.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function(e) {
                    return S(e, "parentNode");
                },
                parentsUntil: function(e, t, n) {
                    return S(e, "parentNode", n);
                },
                next: function(e) {
                    return H(e, "nextSibling");
                },
                prev: function(e) {
                    return H(e, "previousSibling");
                },
                nextAll: function(e) {
                    return S(e, "nextSibling");
                },
                prevAll: function(e) {
                    return S(e, "previousSibling");
                },
                nextUntil: function(e, t, n) {
                    return S(e, "nextSibling", n);
                },
                prevUntil: function(e, t, n) {
                    return S(e, "previousSibling", n);
                },
                siblings: function(e) {
                    return C((e.parentNode || {}).firstChild, e);
                },
                children: function(e) {
                    return C(e.firstChild);
                },
                contents: function(e) {
                    return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), 
                    x.merge([], e.childNodes));
                }
            }, (function(e, t) {
                x.fn[e] = function(n, i) {
                    var o = x.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = x.filter(i, o)), 
                    this.length > 1 && (L[e] || x.uniqueSort(o), N.test(e) && o.reverse()), this.pushStack(o);
                };
            }));
            var P = /[^\x20\t\r\n\f]+/g;
            function q(e) {
                return e;
            }
            function M(e) {
                throw e;
            }
            function z(e, t, n, i) {
                var o;
                try {
                    e && h(o = e.promise) ? o.call(e).done(t).fail(n) : e && h(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [ e ].slice(i));
                } catch (e) {
                    n.apply(void 0, [ e ]);
                }
            }
            x.Callbacks = function(e) {
                e = "string" == typeof e ? function(e) {
                    var t = {};
                    return x.each(e.match(P) || [], (function(e, n) {
                        t[n] = !0;
                    })), t;
                }(e) : x.extend({}, e);
                var t, n, i, o, r = [], s = [], a = -1, l = function() {
                    for (o = o || e.once, i = t = !0; s.length; a = -1) for (n = s.shift(); ++a < r.length; ) !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, 
                    n = !1);
                    e.memory || (n = !1), t = !1, o && (r = n ? [] : "");
                }, c = {
                    add: function() {
                        return r && (n && !t && (a = r.length - 1, s.push(n)), function t(n) {
                            x.each(n, (function(n, i) {
                                h(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== b(i) && t(i);
                            }));
                        }(arguments), n && !t && l()), this;
                    },
                    remove: function() {
                        return x.each(arguments, (function(e, t) {
                            for (var n; (n = x.inArray(t, r, n)) > -1; ) r.splice(n, 1), n <= a && a--;
                        })), this;
                    },
                    has: function(e) {
                        return e ? x.inArray(e, r) > -1 : r.length > 0;
                    },
                    empty: function() {
                        return r && (r = []), this;
                    },
                    disable: function() {
                        return o = s = [], r = n = "", this;
                    },
                    disabled: function() {
                        return !r;
                    },
                    lock: function() {
                        return o = s = [], n || t || (r = n = ""), this;
                    },
                    locked: function() {
                        return !!o;
                    },
                    fireWith: function(e, n) {
                        return o || (n = [ e, (n = n || []).slice ? n.slice() : n ], s.push(n), t || l()), 
                        this;
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this;
                    },
                    fired: function() {
                        return !!i;
                    }
                };
                return c;
            }, x.extend({
                Deferred: function(t) {
                    var n = [ [ "notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2 ], [ "resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected" ] ], i = "pending", o = {
                        state: function() {
                            return i;
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this;
                        },
                        catch: function(e) {
                            return o.then(null, e);
                        },
                        pipe: function() {
                            var e = arguments;
                            return x.Deferred((function(t) {
                                x.each(n, (function(n, i) {
                                    var o = h(e[i[4]]) && e[i[4]];
                                    r[i[1]]((function() {
                                        var e = o && o.apply(this, arguments);
                                        e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [ e ] : arguments);
                                    }));
                                })), e = null;
                            })).promise();
                        },
                        then: function(t, i, o) {
                            var r = 0;
                            function s(t, n, i, o) {
                                return function() {
                                    var a = this, l = arguments, c = function() {
                                        var e, c;
                                        if (!(t < r)) {
                                            if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, h(c) ? o ? c.call(e, s(r, n, q, o), s(r, n, M, o)) : (r++, 
                                            c.call(e, s(r, n, q, o), s(r, n, M, o), s(r, n, q, n.notifyWith))) : (i !== q && (a = void 0, 
                                            l = [ e ]), (o || n.resolveWith)(a, l));
                                        }
                                    }, d = o ? c : function() {
                                        try {
                                            c();
                                        } catch (e) {
                                            x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= r && (i !== M && (a = void 0, 
                                            l = [ e ]), n.rejectWith(a, l));
                                        }
                                    };
                                    t ? d() : (x.Deferred.getStackHook && (d.stackTrace = x.Deferred.getStackHook()), 
                                    e.setTimeout(d));
                                };
                            }
                            return x.Deferred((function(e) {
                                n[0][3].add(s(0, e, h(o) ? o : q, e.notifyWith)), n[1][3].add(s(0, e, h(t) ? t : q)), 
                                n[2][3].add(s(0, e, h(i) ? i : M));
                            })).promise();
                        },
                        promise: function(e) {
                            return null != e ? x.extend(e, o) : o;
                        }
                    }, r = {};
                    return x.each(n, (function(e, t) {
                        var s = t[2], a = t[5];
                        o[t[1]] = s.add, a && s.add((function() {
                            i = a;
                        }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), 
                        r[t[0]] = function() {
                            return r[t[0] + "With"](this === r ? void 0 : this, arguments), this;
                        }, r[t[0] + "With"] = s.fireWith;
                    })), o.promise(r), t && t.call(r, r), r;
                },
                when: function(e) {
                    var t = arguments.length, n = t, i = Array(n), r = o.call(arguments), s = x.Deferred(), a = function(e) {
                        return function(n) {
                            i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || s.resolveWith(i, r);
                        };
                    };
                    if (t <= 1 && (z(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || h(r[n] && r[n].then))) return s.then();
                    for (;n--; ) z(r[n], a(n), s.reject);
                    return s.promise();
                }
            });
            var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            x.Deferred.exceptionHook = function(t, n) {
                e.console && e.console.warn && t && I.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
            }, x.readyException = function(t) {
                e.setTimeout((function() {
                    throw t;
                }));
            };
            var W = x.Deferred();
            function R() {
                g.removeEventListener("DOMContentLoaded", R), e.removeEventListener("load", R), 
                x.ready();
            }
            x.fn.ready = function(e) {
                return W.then(e).catch((function(e) {
                    x.readyException(e);
                })), this;
            }, x.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== e && --x.readyWait > 0 || W.resolveWith(g, [ x ]));
                }
            }), x.ready.then = W.then, "complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll ? e.setTimeout(x.ready) : (g.addEventListener("DOMContentLoaded", R), 
            e.addEventListener("load", R));
            var F = function(e, t, n, i, o, r, s) {
                var a = 0, l = e.length, c = null == n;
                if ("object" === b(n)) for (a in o = !0, n) F(e, t, a, n[a], !0, r, s); else if (void 0 !== i && (o = !0, 
                h(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(x(e), n);
                })), t)) for (;a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
            }, _ = /^-ms-/, B = /-([a-z])/g;
            function U(e, t) {
                return t.toUpperCase();
            }
            function X(e) {
                return e.replace(_, "ms-").replace(B, U);
            }
            var Y = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            };
            function V() {
                this.expando = x.expando + V.uid++;
            }
            V.uid = 1, V.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t;
                },
                set: function(e, t, n) {
                    var i, o = this.cache(e);
                    if ("string" == typeof t) o[X(t)] = n; else for (i in t) o[X(i)] = t[i];
                    return o;
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
                    void 0 !== n ? n : t);
                },
                remove: function(e, t) {
                    var n, i = e[this.expando];
                    if (void 0 !== i) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in i ? [ t ] : t.match(P) || []).length;
                            for (;n--; ) delete i[t[n]];
                        }
                        (void 0 === t || x.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !x.isEmptyObject(t);
                }
            };
            var G = new V, Q = new V, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;
            function Z(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(K, "-$&").toLowerCase(), 
                "string" == typeof (n = e.getAttribute(i))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e);
                        }(n);
                    } catch (e) {}
                    Q.set(e, t, n);
                } else n = void 0;
                return n;
            }
            x.extend({
                hasData: function(e) {
                    return Q.hasData(e) || G.hasData(e);
                },
                data: function(e, t, n) {
                    return Q.access(e, t, n);
                },
                removeData: function(e, t) {
                    Q.remove(e, t);
                },
                _data: function(e, t, n) {
                    return G.access(e, t, n);
                },
                _removeData: function(e, t) {
                    G.remove(e, t);
                }
            }), x.fn.extend({
                data: function(e, t) {
                    var n, i, o, r = this[0], s = r && r.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = Q.get(r), 1 === r.nodeType && !G.get(r, "hasDataAttrs"))) {
                            for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = X(i.slice(5)), 
                            Z(r, i, o[i]));
                            G.set(r, "hasDataAttrs", !0);
                        }
                        return o;
                    }
                    return "object" == typeof e ? this.each((function() {
                        Q.set(this, e);
                    })) : F(this, (function(t) {
                        var n;
                        if (r && void 0 === t) return void 0 !== (n = Q.get(r, e)) || void 0 !== (n = Z(r, e)) ? n : void 0;
                        this.each((function() {
                            Q.set(this, e, t);
                        }));
                    }), null, t, arguments.length > 1, null, !0);
                },
                removeData: function(e) {
                    return this.each((function() {
                        Q.remove(this, e);
                    }));
                }
            }), x.extend({
                queue: function(e, t, n) {
                    var i;
                    if (e) return t = (t || "fx") + "queue", i = G.get(e, t), n && (!i || Array.isArray(n) ? i = G.access(e, t, x.makeArray(n)) : i.push(n)), 
                    i || [];
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = x.queue(e, t), i = n.length, o = n.shift(), r = x._queueHooks(e, t);
                    "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), 
                    delete r.stop, o.call(e, (function() {
                        x.dequeue(e, t);
                    }), r)), !i && r && r.empty.fire();
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return G.get(e, n) || G.access(e, n, {
                        empty: x.Callbacks("once memory").add((function() {
                            G.remove(e, [ t + "queue", n ]);
                        }))
                    });
                }
            }), x.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                        var n = x.queue(this, e, t);
                        x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e);
                    }));
                },
                dequeue: function(e) {
                    return this.each((function() {
                        x.dequeue(this, e);
                    }));
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", []);
                },
                promise: function(e, t) {
                    var n, i = 1, o = x.Deferred(), r = this, s = this.length, a = function() {
                        --i || o.resolveWith(r, [ r ]);
                    };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--; ) (n = G.get(r[s], e + "queueHooks")) && n.empty && (i++, 
                    n.empty.add(a));
                    return a(), o.promise(t);
                }
            });
            var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"), ne = [ "Top", "Right", "Bottom", "Left" ], ie = g.documentElement, oe = function(e) {
                return x.contains(e.ownerDocument, e);
            }, re = {
                composed: !0
            };
            ie.getRootNode && (oe = function(e) {
                return x.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument;
            });
            var se = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === x.css(e, "display");
            };
            function ae(e, t, n, i) {
                var o, r, s = 20, a = i ? function() {
                    return i.cur();
                } : function() {
                    return x.css(e, t, "");
                }, l = a(), c = n && n[3] || (x.cssNumber[t] ? "" : "px"), d = e.nodeType && (x.cssNumber[t] || "px" !== c && +l) && te.exec(x.css(e, t));
                if (d && d[3] !== c) {
                    for (l /= 2, c = c || d[3], d = +l || 1; s--; ) x.style(e, t, d + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), 
                    d /= r;
                    d *= 2, x.style(e, t, d + c), n = n || [];
                }
                return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, 
                i.start = d, i.end = o)), o;
            }
            var le = {};
            function ce(e) {
                var t, n = e.ownerDocument, i = e.nodeName, o = le[i];
                return o || (t = n.body.appendChild(n.createElement(i)), o = x.css(t, "display"), 
                t.parentNode.removeChild(t), "none" === o && (o = "block"), le[i] = o, o);
            }
            function de(e, t) {
                for (var n, i, o = [], r = 0, s = e.length; r < s; r++) (i = e[r]).style && (n = i.style.display, 
                t ? ("none" === n && (o[r] = G.get(i, "display") || null, o[r] || (i.style.display = "")), 
                "" === i.style.display && se(i) && (o[r] = ce(i))) : "none" !== n && (o[r] = "none", 
                G.set(i, "display", n)));
                for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
                return e;
            }
            x.fn.extend({
                show: function() {
                    return de(this, !0);
                },
                hide: function() {
                    return de(this);
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                        se(this) ? x(this).show() : x(this).hide();
                    }));
                }
            });
            var ue, pe, fe = /^(?:checkbox|radio)$/i, he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ve = /^$|^module$|\/(?:java|ecma)script/i;
            ue = g.createDocumentFragment().appendChild(g.createElement("div")), (pe = g.createElement("input")).setAttribute("type", "radio"), 
            pe.setAttribute("checked", "checked"), pe.setAttribute("name", "t"), ue.appendChild(pe), 
            f.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked, ue.innerHTML = "<textarea>x</textarea>", 
            f.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue, ue.innerHTML = "<option></option>", 
            f.option = !!ue.lastChild;
            var ge = {
                thead: [ 1, "<table>", "</table>" ],
                col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                _default: [ 0, "", "" ]
            };
            function ye(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
                void 0 === t || t && A(e, t) ? x.merge([ e ], n) : n;
            }
            function me(e, t) {
                for (var n = 0, i = e.length; n < i; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"));
            }
            ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, f.option || (ge.optgroup = ge.option = [ 1, "<select multiple='multiple'>", "</select>" ]);
            var be = /<|&#?\w+;/;
            function we(e, t, n, i, o) {
                for (var r, s, a, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++) if ((r = e[f]) || 0 === r) if ("object" === b(r)) x.merge(p, r.nodeType ? [ r ] : r); else if (be.test(r)) {
                    for (s = s || u.appendChild(t.createElement("div")), a = (he.exec(r) || [ "", "" ])[1].toLowerCase(), 
                    l = ge[a] || ge._default, s.innerHTML = l[1] + x.htmlPrefilter(r) + l[2], d = l[0]; d--; ) s = s.lastChild;
                    x.merge(p, s.childNodes), (s = u.firstChild).textContent = "";
                } else p.push(t.createTextNode(r));
                for (u.textContent = "", f = 0; r = p[f++]; ) if (i && x.inArray(r, i) > -1) o && o.push(r); else if (c = oe(r), 
                s = ye(u.appendChild(r), "script"), c && me(s), n) for (d = 0; r = s[d++]; ) ve.test(r.type || "") && n.push(r);
                return u;
            }
            var xe = /^([^.]*)(?:\.(.+)|)/;
            function ke() {
                return !0;
            }
            function Te() {
                return !1;
            }
            function Se(e, t) {
                return e === function() {
                    try {
                        return g.activeElement;
                    } catch (e) {}
                }() == ("focus" === t);
            }
            function Ce(e, t, n, i, o, r) {
                var s, a;
                if ("object" == typeof t) {
                    for (a in "string" != typeof n && (i = i || n, n = void 0), t) Ce(e, a, n, i, t[a], r);
                    return e;
                }
                if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, 
                i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Te; else if (!o) return e;
                return 1 === r && (s = o, o = function(e) {
                    return x().off(e), s.apply(this, arguments);
                }, o.guid = s.guid || (s.guid = x.guid++)), e.each((function() {
                    x.event.add(this, t, o, i, n);
                }));
            }
            function $e(e, t, n) {
                n ? (G.set(e, t, !1), x.event.add(e, t, {
                    namespace: !1,
                    handler: function(e) {
                        var i, r, s = G.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (s.length) (x.event.special[t] || {}).delegateType && e.stopPropagation(); else if (s = o.call(arguments), 
                            G.set(this, t, s), i = n(this, t), this[t](), s !== (r = G.get(this, t)) || i ? G.set(this, t, !1) : r = {}, 
                            s !== r) return e.stopImmediatePropagation(), e.preventDefault(), r && r.value;
                        } else s.length && (G.set(this, t, {
                            value: x.event.trigger(x.extend(s[0], x.Event.prototype), s.slice(1), this)
                        }), e.stopImmediatePropagation());
                    }
                })) : void 0 === G.get(e, t) && x.event.add(e, t, ke);
            }
            x.event = {
                global: {},
                add: function(e, t, n, i, o) {
                    var r, s, a, l, c, d, u, p, f, h, v, g = G.get(e);
                    if (Y(e)) for (n.handler && (n = (r = n).handler, o = r.selector), o && x.find.matchesSelector(ie, o), 
                    n.guid || (n.guid = x.guid++), (l = g.events) || (l = g.events = Object.create(null)), 
                    (s = g.handle) || (s = g.handle = function(t) {
                        return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0;
                    }), c = (t = (t || "").match(P) || [ "" ]).length; c--; ) f = v = (a = xe.exec(t[c]) || [])[1], 
                    h = (a[2] || "").split(".").sort(), f && (u = x.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, 
                    u = x.event.special[f] || {}, d = x.extend({
                        type: f,
                        origType: v,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && x.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)), 
                    u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), 
                    x.event.global[f] = !0);
                },
                remove: function(e, t, n, i, o) {
                    var r, s, a, l, c, d, u, p, f, h, v, g = G.hasData(e) && G.get(e);
                    if (g && (l = g.events)) {
                        for (c = (t = (t || "").match(P) || [ "" ]).length; c--; ) if (f = v = (a = xe.exec(t[c]) || [])[1], 
                        h = (a[2] || "").split(".").sort(), f) {
                            for (u = x.event.special[f] || {}, p = l[f = (i ? u.delegateType : u.bindType) || f] || [], 
                            a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--; ) d = p[r], 
                            !o && v !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(r, 1), 
                            d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                            s && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, g.handle) || x.removeEvent(e, f, g.handle), 
                            delete l[f]);
                        } else for (f in l) x.event.remove(e, f + t[c], n, i, !0);
                        x.isEmptyObject(l) && G.remove(e, "handle events");
                    }
                },
                dispatch: function(e) {
                    var t, n, i, o, r, s, a = new Array(arguments.length), l = x.event.fix(e), c = (G.get(this, "events") || Object.create(null))[l.type] || [], d = x.event.special[l.type] || {};
                    for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                    if (l.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
                        for (s = x.event.handlers.call(this, l, c), t = 0; (o = s[t++]) && !l.isPropagationStopped(); ) for (l.currentTarget = o.elem, 
                        n = 0; (r = o.handlers[n++]) && !l.isImmediatePropagationStopped(); ) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, 
                        l.data = r.data, void 0 !== (i = ((x.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), 
                        l.stopPropagation()));
                        return d.postDispatch && d.postDispatch.call(this, l), l.result;
                    }
                },
                handlers: function(e, t) {
                    var n, i, o, r, s, a = [], l = t.delegateCount, c = e.target;
                    if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (;c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? x(o, this).index(c) > -1 : x.find(o, this, null, [ c ]).length), 
                        s[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        });
                    }
                    return c = this, l < t.length && a.push({
                        elem: c,
                        handlers: t.slice(l)
                    }), a;
                },
                addProp: function(e, t) {
                    Object.defineProperty(x.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: h(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent);
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e];
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            });
                        }
                    });
                },
                fix: function(e) {
                    return e[x.expando] ? e : new x.Event(e);
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            return fe.test(t.type) && t.click && A(t, "input") && $e(t, "click", ke), !1;
                        },
                        trigger: function(e) {
                            var t = this || e;
                            return fe.test(t.type) && t.click && A(t, "input") && $e(t, "click"), !0;
                        },
                        _default: function(e) {
                            var t = e.target;
                            return fe.test(t.type) && t.click && A(t, "input") && G.get(t, "click") || A(t, "a");
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                        }
                    }
                }
            }, x.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n);
            }, x.Event = function(e, t) {
                if (!(this instanceof x.Event)) return new x.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Te, 
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
                this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
                t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0;
            }, x.Event.prototype = {
                constructor: x.Event,
                isDefaultPrevented: Te,
                isPropagationStopped: Te,
                isImmediatePropagationStopped: Te,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault();
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation();
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), 
                    this.stopPropagation();
                }
            }, x.each({
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
                code: !0,
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
                which: !0
            }, x.event.addProp), x.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                x.event.special[e] = {
                    setup: function() {
                        return $e(this, e, Se), !1;
                    },
                    trigger: function() {
                        return $e(this, e), !0;
                    },
                    _default: function(t) {
                        return G.get(t.target, e);
                    },
                    delegateType: t
                };
            })), x.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function(e, t) {
                x.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, i = e.relatedTarget, o = e.handleObj;
                        return i && (i === this || x.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
                        e.type = t), n;
                    }
                };
            })), x.fn.extend({
                on: function(e, t, n, i) {
                    return Ce(this, e, t, n, i);
                },
                one: function(e, t, n, i) {
                    return Ce(this, e, t, n, i, 1);
                },
                off: function(e, t, n) {
                    var i, o;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
                    this;
                    if ("object" == typeof e) {
                        for (o in e) this.off(o, t, e[o]);
                        return this;
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), 
                    this.each((function() {
                        x.event.remove(this, e, n, t);
                    }));
                }
            });
            var Ae = /<script|<style|<link/i, Ee = /checked\s*(?:[^=]|=\s*.checked.)/i, je = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
            function Oe(e, t) {
                return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e;
            }
            function De(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
            }
            function Ne(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
                e;
            }
            function Le(e, t) {
                var n, i, o, r, s, a;
                if (1 === t.nodeType) {
                    if (G.hasData(e) && (a = G.get(e).events)) for (o in G.remove(t, "handle events"), 
                    a) for (n = 0, i = a[o].length; n < i; n++) x.event.add(t, o, a[o][n]);
                    Q.hasData(e) && (r = Q.access(e), s = x.extend({}, r), Q.set(t, s));
                }
            }
            function He(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && fe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
            }
            function Pe(e, t, n, i) {
                t = r(t);
                var o, s, a, l, c, d, u = 0, p = e.length, v = p - 1, g = t[0], y = h(g);
                if (y || p > 1 && "string" == typeof g && !f.checkClone && Ee.test(g)) return e.each((function(o) {
                    var r = e.eq(o);
                    y && (t[0] = g.call(this, o, r.html())), Pe(r, t, n, i);
                }));
                if (p && (s = (o = we(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = s), 
                s || i)) {
                    for (l = (a = x.map(ye(o, "script"), De)).length; u < p; u++) c = o, u !== v && (c = x.clone(c, !0, !0), 
                    l && x.merge(a, ye(c, "script"))), n.call(e[u], c, u);
                    if (l) for (d = a[a.length - 1].ownerDocument, x.map(a, Ne), u = 0; u < l; u++) c = a[u], 
                    ve.test(c.type || "") && !G.access(c, "globalEval") && x.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? x._evalUrl && !c.noModule && x._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce")
                    }, d) : m(c.textContent.replace(je, ""), c, d));
                }
                return e;
            }
            function qe(e, t, n) {
                for (var i, o = t ? x.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || x.cleanData(ye(i)), 
                i.parentNode && (n && oe(i) && me(ye(i, "script")), i.parentNode.removeChild(i));
                return e;
            }
            x.extend({
                htmlPrefilter: function(e) {
                    return e;
                },
                clone: function(e, t, n) {
                    var i, o, r, s, a = e.cloneNode(!0), l = oe(e);
                    if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (s = ye(a), 
                    i = 0, o = (r = ye(e)).length; i < o; i++) He(r[i], s[i]);
                    if (t) if (n) for (r = r || ye(e), s = s || ye(a), i = 0, o = r.length; i < o; i++) Le(r[i], s[i]); else Le(e, a);
                    return (s = ye(a, "script")).length > 0 && me(s, !l && ye(e, "script")), a;
                },
                cleanData: function(e) {
                    for (var t, n, i, o = x.event.special, r = 0; void 0 !== (n = e[r]); r++) if (Y(n)) {
                        if (t = n[G.expando]) {
                            if (t.events) for (i in t.events) o[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                            n[G.expando] = void 0;
                        }
                        n[Q.expando] && (n[Q.expando] = void 0);
                    }
                }
            }), x.fn.extend({
                detach: function(e) {
                    return qe(this, e, !0);
                },
                remove: function(e) {
                    return qe(this, e);
                },
                text: function(e) {
                    return F(this, (function(e) {
                        return void 0 === e ? x.text(this) : this.empty().each((function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                        }));
                    }), null, e, arguments.length);
                },
                append: function() {
                    return Pe(this, arguments, (function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
                    }));
                },
                prepend: function() {
                    return Pe(this, arguments, (function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Oe(this, e);
                            t.insertBefore(e, t.firstChild);
                        }
                    }));
                },
                before: function() {
                    return Pe(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this);
                    }));
                },
                after: function() {
                    return Pe(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                    }));
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(ye(e, !1)), 
                    e.textContent = "");
                    return this;
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map((function() {
                        return x.clone(this, e, t);
                    }));
                },
                html: function(e) {
                    return F(this, (function(e) {
                        var t = this[0] || {}, n = 0, i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ae.test(e) && !ge[(he.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                            e = x.htmlPrefilter(e);
                            try {
                                for (;n < i; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(ye(t, !1)), 
                                t.innerHTML = e);
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    }), null, e, arguments.length);
                },
                replaceWith: function() {
                    var e = [];
                    return Pe(this, arguments, (function(t) {
                        var n = this.parentNode;
                        x.inArray(this, e) < 0 && (x.cleanData(ye(this)), n && n.replaceChild(t, this));
                    }), e);
                }
            }), x.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(e, t) {
                x.fn[e] = function(e) {
                    for (var n, i = [], o = x(e), r = o.length - 1, a = 0; a <= r; a++) n = a === r ? this : this.clone(!0), 
                    x(o[a])[t](n), s.apply(i, n.get());
                    return this.pushStack(i);
                };
            }));
            var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), ze = /^--/, Ie = function(t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e), n.getComputedStyle(t);
            }, We = function(e, t, n) {
                var i, o, r = {};
                for (o in t) r[o] = e.style[o], e.style[o] = t[o];
                for (o in i = n.call(e), t) e.style[o] = r[o];
                return i;
            }, Re = new RegExp(ne.join("|"), "i"), Fe = "[\\x20\\t\\r\\n\\f]", _e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");
            function Be(e, t, n) {
                var i, o, r, s, a = ze.test(t), l = e.style;
                return (n = n || Ie(e)) && (s = n.getPropertyValue(t) || n[t], a && s && (s = s.replace(_e, "$1") || void 0), 
                "" !== s || oe(e) || (s = x.style(e, t)), !f.pixelBoxStyles() && Me.test(s) && Re.test(t) && (i = l.width, 
                o = l.minWidth, r = l.maxWidth, l.minWidth = l.maxWidth = l.width = s, s = n.width, 
                l.width = i, l.minWidth = o, l.maxWidth = r)), void 0 !== s ? s + "" : s;
            }
            function Ue(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get;
                    }
                };
            }
            !function() {
                function t() {
                    if (d) {
                        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
                        d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
                        ie.appendChild(c).appendChild(d);
                        var t = e.getComputedStyle(d);
                        i = "1%" !== t.top, l = 12 === n(t.marginLeft), d.style.right = "60%", s = 36 === n(t.right), 
                        o = 36 === n(t.width), d.style.position = "absolute", r = 12 === n(d.offsetWidth / 3), 
                        ie.removeChild(c), d = null;
                    }
                }
                function n(e) {
                    return Math.round(parseFloat(e));
                }
                var i, o, r, s, a, l, c = g.createElement("div"), d = g.createElement("div");
                d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", 
                f.clearCloneStyle = "content-box" === d.style.backgroundClip, x.extend(f, {
                    boxSizingReliable: function() {
                        return t(), o;
                    },
                    pixelBoxStyles: function() {
                        return t(), s;
                    },
                    pixelPosition: function() {
                        return t(), i;
                    },
                    reliableMarginLeft: function() {
                        return t(), l;
                    },
                    scrollboxSize: function() {
                        return t(), r;
                    },
                    reliableTrDimensions: function() {
                        var t, n, i, o;
                        return null == a && (t = g.createElement("table"), n = g.createElement("tr"), i = g.createElement("div"), 
                        t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", 
                        n.style.height = "1px", i.style.height = "9px", i.style.display = "block", ie.appendChild(t).appendChild(n).appendChild(i), 
                        o = e.getComputedStyle(n), a = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === n.offsetHeight, 
                        ie.removeChild(t)), a;
                    }
                }));
            }();
            var Xe = [ "Webkit", "Moz", "ms" ], Ye = g.createElement("div").style, Ve = {};
            function Ge(e) {
                var t = x.cssProps[e] || Ve[e];
                return t || (e in Ye ? e : Ve[e] = function(e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--; ) if ((e = Xe[n] + t) in Ye) return e;
                }(e) || e);
            }
            var Qe = /^(none|table(?!-c[ea]).+)/, Je = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, Ke = {
                letterSpacing: "0",
                fontWeight: "400"
            };
            function Ze(e, t, n) {
                var i = te.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
            }
            function et(e, t, n, i, o, r) {
                var s = "width" === t ? 1 : 0, a = 0, l = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (;s < 4; s += 2) "margin" === n && (l += x.css(e, n + ne[s], !0, o)), i ? ("content" === n && (l -= x.css(e, "padding" + ne[s], !0, o)), 
                "margin" !== n && (l -= x.css(e, "border" + ne[s] + "Width", !0, o))) : (l += x.css(e, "padding" + ne[s], !0, o), 
                "padding" !== n ? l += x.css(e, "border" + ne[s] + "Width", !0, o) : a += x.css(e, "border" + ne[s] + "Width", !0, o));
                return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), 
                l;
            }
            function tt(e, t, n) {
                var i = Ie(e), o = (!f.boxSizingReliable() || n) && "border-box" === x.css(e, "boxSizing", !1, i), r = o, s = Be(e, t, i), a = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Me.test(s)) {
                    if (!n) return s;
                    s = "auto";
                }
                return (!f.boxSizingReliable() && o || !f.reliableTrDimensions() && A(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === x.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === x.css(e, "boxSizing", !1, i), 
                (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + et(e, t, n || (o ? "border" : "content"), r, i, s) + "px";
            }
            function nt(e, t, n, i, o) {
                return new nt.prototype.init(e, t, n, i, o);
            }
            x.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Be(e, "opacity");
                                return "" === n ? "1" : n;
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
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, r, s, a = X(t), l = ze.test(t), c = e.style;
                        if (l || (t = Ge(a)), s = x.cssHooks[t] || x.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                        "string" === (r = typeof n) && (o = te.exec(n)) && o[1] && (n = ae(e, t, o), r = "number"), 
                        null != n && n == n && ("number" !== r || l || (n += o && o[3] || (x.cssNumber[a] ? "" : "px")), 
                        f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), 
                        s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n));
                    }
                },
                css: function(e, t, n, i) {
                    var o, r, s, a = X(t);
                    return ze.test(t) || (t = Ge(a)), (s = x.cssHooks[t] || x.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), 
                    void 0 === o && (o = Be(e, t, i)), "normal" === o && t in Ke && (o = Ke[t]), "" === n || n ? (r = parseFloat(o), 
                    !0 === n || isFinite(r) ? r || 0 : o) : o;
                }
            }), x.each([ "height", "width" ], (function(e, t) {
                x.cssHooks[t] = {
                    get: function(e, n, i) {
                        if (n) return !Qe.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, i) : We(e, Je, (function() {
                            return tt(e, t, i);
                        }));
                    },
                    set: function(e, n, i) {
                        var o, r = Ie(e), s = !f.scrollboxSize() && "absolute" === r.position, a = (s || i) && "border-box" === x.css(e, "boxSizing", !1, r), l = i ? et(e, t, i, a, r) : 0;
                        return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - et(e, t, "border", !1, r) - .5)), 
                        l && (o = te.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = x.css(e, t)), 
                        Ze(0, n, l);
                    }
                };
            })), x.cssHooks.marginLeft = Ue(f.reliableMarginLeft, (function(e, t) {
                if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                    marginLeft: 0
                }, (function() {
                    return e.getBoundingClientRect().left;
                }))) + "px";
            })), x.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(e, t) {
                x.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [ n ]; i < 4; i++) o[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
                        return o;
                    }
                }, "margin" !== e && (x.cssHooks[e + t].set = Ze);
            })), x.fn.extend({
                css: function(e, t) {
                    return F(this, (function(e, t, n) {
                        var i, o, r = {}, s = 0;
                        if (Array.isArray(t)) {
                            for (i = Ie(e), o = t.length; s < o; s++) r[t[s]] = x.css(e, t[s], !1, i);
                            return r;
                        }
                        return void 0 !== n ? x.style(e, t, n) : x.css(e, t);
                    }), e, t, arguments.length > 1);
                }
            }), x.Tween = nt, nt.prototype = {
                constructor: nt,
                init: function(e, t, n, i, o, r) {
                    this.elem = e, this.prop = n, this.easing = o || x.easing._default, this.options = t, 
                    this.start = this.now = this.cur(), this.end = i, this.unit = r || (x.cssNumber[n] ? "" : "px");
                },
                cur: function() {
                    var e = nt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
                },
                run: function(e) {
                    var t, n = nt.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
                    this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
                    n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
                }
            }, nt.prototype.init.prototype = nt.prototype, nt.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                    },
                    set: function(e) {
                        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !x.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit);
                    }
                }
            }, nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                }
            }, x.easing = {
                linear: function(e) {
                    return e;
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2;
                },
                _default: "swing"
            }, x.fx = nt.prototype.init, x.fx.step = {};
            var it, ot, rt = /^(?:toggle|show|hide)$/, st = /queueHooks$/;
            function at() {
                ot && (!1 === g.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, x.fx.interval), 
                x.fx.tick());
            }
            function lt() {
                return e.setTimeout((function() {
                    it = void 0;
                })), it = Date.now();
            }
            function ct(e, t) {
                var n, i = 0, o = {
                    height: e
                };
                for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ne[i])] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e), o;
            }
            function dt(e, t, n) {
                for (var i, o = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), r = 0, s = o.length; r < s; r++) if (i = o[r].call(n, t, e)) return i;
            }
            function ut(e, t, n) {
                var i, o, r = 0, s = ut.prefilters.length, a = x.Deferred().always((function() {
                    delete l.elem;
                })), l = function() {
                    if (o) return !1;
                    for (var t = it || lt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
                    return a.notifyWith(e, [ c, i, n ]), i < 1 && s ? n : (s || a.notifyWith(e, [ c, 1, 0 ]), 
                    a.resolveWith(e, [ c ]), !1);
                }, c = a.promise({
                    elem: e,
                    props: x.extend({}, t),
                    opts: x.extend(!0, {
                        specialEasing: {},
                        easing: x.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: it || lt(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = x.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i;
                    },
                    stop: function(t) {
                        var n = 0, i = t ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) c.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [ c, 1, 0 ]), a.resolveWith(e, [ c, t ])) : a.rejectWith(e, [ c, t ]), 
                        this;
                    }
                }), d = c.props;
                for (!function(e, t) {
                    var n, i, o, r, s;
                    for (n in e) if (o = t[i = X(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), 
                    n !== i && (e[i] = r, delete e[n]), (s = x.cssHooks[i]) && "expand" in s) for (n in r = s.expand(r), 
                    delete e[i], r) n in e || (e[n] = r[n], t[n] = o); else t[i] = o;
                }(d, c.opts.specialEasing); r < s; r++) if (i = ut.prefilters[r].call(c, e, d, c.opts)) return h(i.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), 
                i;
                return x.map(d, dt, c), h(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), 
                x.fx.timer(x.extend(l, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })), c;
            }
            x.Animation = x.extend(ut, {
                tweeners: {
                    "*": [ function(e, t) {
                        var n = this.createTween(e, t);
                        return ae(n.elem, e, te.exec(t), n), n;
                    } ]
                },
                tweener: function(e, t) {
                    h(e) ? (t = e, e = [ "*" ]) : e = e.match(P);
                    for (var n, i = 0, o = e.length; i < o; i++) n = e[i], ut.tweeners[n] = ut.tweeners[n] || [], 
                    ut.tweeners[n].unshift(t);
                },
                prefilters: [ function(e, t, n) {
                    var i, o, r, s, a, l, c, d, u = "width" in t || "height" in t, p = this, f = {}, h = e.style, v = e.nodeType && se(e), g = G.get(e, "fxshow");
                    for (i in n.queue || (null == (s = x._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, 
                    a = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || a();
                    }), s.unqueued++, p.always((function() {
                        p.always((function() {
                            s.unqueued--, x.queue(e, "fx").length || s.empty.fire();
                        }));
                    }))), t) if (o = t[i], rt.test(o)) {
                        if (delete t[i], r = r || "toggle" === o, o === (v ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[i]) continue;
                            v = !0;
                        }
                        f[i] = g && g[i] || x.style(e, i);
                    }
                    if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(f)) for (i in u && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
                    null == (c = g && g.display) && (c = G.get(e, "display")), "none" === (d = x.css(e, "display")) && (c ? d = c : (de([ e ], !0), 
                    c = e.style.display || c, d = x.css(e, "display"), de([ e ]))), ("inline" === d || "inline-block" === d && null != c) && "none" === x.css(e, "float") && (l || (p.done((function() {
                        h.display = c;
                    })), null == c && (d = h.display, c = "none" === d ? "" : d)), h.display = "inline-block")), 
                    n.overflow && (h.overflow = "hidden", p.always((function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
                    }))), l = !1, f) l || (g ? "hidden" in g && (v = g.hidden) : g = G.access(e, "fxshow", {
                        display: c
                    }), r && (g.hidden = !v), v && de([ e ], !0), p.done((function() {
                        for (i in v || de([ e ]), G.remove(e, "fxshow"), f) x.style(e, i, f[i]);
                    }))), l = dt(v ? g[i] : 0, i, p), i in g || (g[i] = l.start, v && (l.end = l.start, 
                    l.start = 0));
                } ],
                prefilter: function(e, t) {
                    t ? ut.prefilters.unshift(e) : ut.prefilters.push(e);
                }
            }), x.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? x.extend({}, e) : {
                    complete: n || !n && t || h(e) && e,
                    duration: e,
                    easing: n && t || t && !h(t) && t
                };
                return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default), 
                null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    h(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue);
                }, i;
            }, x.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(se).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i);
                },
                animate: function(e, t, n, i) {
                    var o = x.isEmptyObject(e), r = x.speed(t, n, i), s = function() {
                        var t = ut(this, x.extend({}, e), r);
                        (o || G.get(this, "finish")) && t.stop(!0);
                    };
                    return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n);
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), 
                    this.each((function() {
                        var t = !0, o = null != e && e + "queueHooks", r = x.timers, s = G.get(this);
                        if (o) s[o] && s[o].stop && i(s[o]); else for (o in s) s[o] && s[o].stop && st.test(o) && i(s[o]);
                        for (o = r.length; o--; ) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), 
                        t = !1, r.splice(o, 1));
                        !t && n || x.dequeue(this, e);
                    }));
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each((function() {
                        var t, n = G.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = x.timers, s = i ? i.length : 0;
                        for (n.finish = !0, x.queue(this, e, []), o && o.stop && o.stop.call(this, !0), 
                        t = r.length; t--; ) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), 
                        r.splice(t, 1));
                        for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish;
                    }));
                }
            }), x.each([ "toggle", "show", "hide" ], (function(e, t) {
                var n = x.fn[t];
                x.fn[t] = function(e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, i, o);
                };
            })), x.each({
                slideDown: ct("show"),
                slideUp: ct("hide"),
                slideToggle: ct("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(e, t) {
                x.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i);
                };
            })), x.timers = [], x.fx.tick = function() {
                var e, t = 0, n = x.timers;
                for (it = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || x.fx.stop(), it = void 0;
            }, x.fx.timer = function(e) {
                x.timers.push(e), x.fx.start();
            }, x.fx.interval = 13, x.fx.start = function() {
                ot || (ot = !0, at());
            }, x.fx.stop = function() {
                ot = null;
            }, x.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, x.fn.delay = function(t, n) {
                return t = x.fx && x.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, i) {
                    var o = e.setTimeout(n, t);
                    i.stop = function() {
                        e.clearTimeout(o);
                    };
                }));
            }, function() {
                var e = g.createElement("input"), t = g.createElement("select").appendChild(g.createElement("option"));
                e.type = "checkbox", f.checkOn = "" !== e.value, f.optSelected = t.selected, (e = g.createElement("input")).value = "t", 
                e.type = "radio", f.radioValue = "t" === e.value;
            }();
            var pt, ft = x.expr.attrHandle;
            x.fn.extend({
                attr: function(e, t) {
                    return F(this, x.attr, e, t, arguments.length > 1);
                },
                removeAttr: function(e) {
                    return this.each((function() {
                        x.removeAttr(this, e);
                    }));
                }
            }), x.extend({
                attr: function(e, t, n) {
                    var i, o, r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === r && x.isXMLDoc(e) || (o = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? pt : void 0)), 
                    void 0 !== n ? null === n ? void x.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), 
                    n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = x.find.attr(e, t)) ? void 0 : i);
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!f.radioValue && "radio" === t && A(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t;
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, i = 0, o = t && t.match(P);
                    if (o && 1 === e.nodeType) for (;n = o[i++]; ) e.removeAttribute(n);
                }
            }), pt = {
                set: function(e, t, n) {
                    return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
                }
            }, x.each(x.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                var n = ft[t] || x.find.attr;
                ft[t] = function(e, t, i) {
                    var o, r, s = t.toLowerCase();
                    return i || (r = ft[s], ft[s] = o, o = null != n(e, t, i) ? s : null, ft[s] = r), 
                    o;
                };
            }));
            var ht = /^(?:input|select|textarea|button)$/i, vt = /^(?:a|area)$/i;
            function gt(e) {
                return (e.match(P) || []).join(" ");
            }
            function yt(e) {
                return e.getAttribute && e.getAttribute("class") || "";
            }
            function mt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
            }
            x.fn.extend({
                prop: function(e, t) {
                    return F(this, x.prop, e, t, arguments.length > 1);
                },
                removeProp: function(e) {
                    return this.each((function() {
                        delete this[x.propFix[e] || e];
                    }));
                }
            }), x.extend({
                prop: function(e, t, n) {
                    var i, o, r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return 1 === r && x.isXMLDoc(e) || (t = x.propFix[t] || t, 
                    o = x.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t];
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = x.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : ht.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1;
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), f.optSelected || (x.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                }
            }), x.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
                x.propFix[this.toLowerCase()] = this;
            })), x.fn.extend({
                addClass: function(e) {
                    var t, n, i, o, r, s;
                    return h(e) ? this.each((function(t) {
                        x(this).addClass(e.call(this, t, yt(this)));
                    })) : (t = mt(e)).length ? this.each((function() {
                        if (i = yt(this), n = 1 === this.nodeType && " " + gt(i) + " ") {
                            for (r = 0; r < t.length; r++) o = t[r], n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            s = gt(n), i !== s && this.setAttribute("class", s);
                        }
                    })) : this;
                },
                removeClass: function(e) {
                    var t, n, i, o, r, s;
                    return h(e) ? this.each((function(t) {
                        x(this).removeClass(e.call(this, t, yt(this)));
                    })) : arguments.length ? (t = mt(e)).length ? this.each((function() {
                        if (i = yt(this), n = 1 === this.nodeType && " " + gt(i) + " ") {
                            for (r = 0; r < t.length; r++) for (o = t[r]; n.indexOf(" " + o + " ") > -1; ) n = n.replace(" " + o + " ", " ");
                            s = gt(n), i !== s && this.setAttribute("class", s);
                        }
                    })) : this : this.attr("class", "");
                },
                toggleClass: function(e, t) {
                    var n, i, o, r, s = typeof e, a = "string" === s || Array.isArray(e);
                    return h(e) ? this.each((function(n) {
                        x(this).toggleClass(e.call(this, n, yt(this), t), t);
                    })) : "boolean" == typeof t && a ? t ? this.addClass(e) : this.removeClass(e) : (n = mt(e), 
                    this.each((function() {
                        if (a) for (r = x(this), o = 0; o < n.length; o++) i = n[o], r.hasClass(i) ? r.removeClass(i) : r.addClass(i); else void 0 !== e && "boolean" !== s || ((i = yt(this)) && G.set(this, "__className__", i), 
                        this.setAttribute && this.setAttribute("class", i || !1 === e ? "" : G.get(this, "__className__") || ""));
                    })));
                },
                hasClass: function(e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++]; ) if (1 === n.nodeType && (" " + gt(yt(n)) + " ").indexOf(t) > -1) return !0;
                    return !1;
                }
            });
            var bt = /\r/g;
            x.fn.extend({
                val: function(e) {
                    var t, n, i, o = this[0];
                    return arguments.length ? (i = h(e), this.each((function(n) {
                        var o;
                        1 === this.nodeType && (null == (o = i ? e.call(this, n, x(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = x.map(o, (function(e) {
                            return null == e ? "" : e + "";
                        }))), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
                    }))) : o ? (t = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(bt, "") : null == n ? "" : n : void 0;
                }
            }), x.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = x.find.attr(e, "value");
                            return null != t ? t : gt(x.text(e));
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, i, o = e.options, r = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], l = s ? r + 1 : o.length;
                            for (i = r < 0 ? l : s ? r : 0; i < l; i++) if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                if (t = x(n).val(), s) return t;
                                a.push(t);
                            }
                            return a;
                        },
                        set: function(e, t) {
                            for (var n, i, o = e.options, r = x.makeArray(t), s = o.length; s--; ) ((i = o[s]).selected = x.inArray(x.valHooks.option.get(i), r) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), r;
                        }
                    }
                }
            }), x.each([ "radio", "checkbox" ], (function() {
                x.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = x.inArray(x(e).val(), t) > -1;
                    }
                }, f.checkOn || (x.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                });
            })), f.focusin = "onfocusin" in e;
            var wt = /^(?:focusinfocus|focusoutblur)$/, xt = function(e) {
                e.stopPropagation();
            };
            x.extend(x.event, {
                trigger: function(t, n, i, o) {
                    var r, s, a, l, c, u, p, f, y = [ i || g ], m = d.call(t, "type") ? t.type : t, b = d.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (s = f = a = i = i || g, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + x.event.triggered) && (m.indexOf(".") > -1 && (b = m.split("."), 
                    m = b.shift(), b.sort()), c = m.indexOf(":") < 0 && "on" + m, (t = t[x.expando] ? t : new x.Event(m, "object" == typeof t && t)).isTrigger = o ? 2 : 3, 
                    t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                    t.result = void 0, t.target || (t.target = i), n = null == n ? [ t ] : x.makeArray(n, [ t ]), 
                    p = x.event.special[m] || {}, o || !p.trigger || !1 !== p.trigger.apply(i, n))) {
                        if (!o && !p.noBubble && !v(i)) {
                            for (l = p.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) y.push(s), 
                            a = s;
                            a === (i.ownerDocument || g) && y.push(a.defaultView || a.parentWindow || e);
                        }
                        for (r = 0; (s = y[r++]) && !t.isPropagationStopped(); ) f = s, t.type = r > 1 ? l : p.bindType || m, 
                        (u = (G.get(s, "events") || Object.create(null))[t.type] && G.get(s, "handle")) && u.apply(s, n), 
                        (u = c && s[c]) && u.apply && Y(s) && (t.result = u.apply(s, n), !1 === t.result && t.preventDefault());
                        return t.type = m, o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(y.pop(), n) || !Y(i) || c && h(i[m]) && !v(i) && ((a = i[c]) && (i[c] = null), 
                        x.event.triggered = m, t.isPropagationStopped() && f.addEventListener(m, xt), i[m](), 
                        t.isPropagationStopped() && f.removeEventListener(m, xt), x.event.triggered = void 0, 
                        a && (i[c] = a)), t.result;
                    }
                },
                simulate: function(e, t, n) {
                    var i = x.extend(new x.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    x.event.trigger(i, null, t);
                }
            }), x.fn.extend({
                trigger: function(e, t) {
                    return this.each((function() {
                        x.event.trigger(e, t, this);
                    }));
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return x.event.trigger(e, t, n, !0);
                }
            }), f.focusin || x.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                var n = function(e) {
                    x.event.simulate(t, e.target, x.event.fix(e));
                };
                x.event.special[t] = {
                    setup: function() {
                        var i = this.ownerDocument || this.document || this, o = G.access(i, t);
                        o || i.addEventListener(e, n, !0), G.access(i, t, (o || 0) + 1);
                    },
                    teardown: function() {
                        var i = this.ownerDocument || this.document || this, o = G.access(i, t) - 1;
                        o ? G.access(i, t, o) : (i.removeEventListener(e, n, !0), G.remove(i, t));
                    }
                };
            }));
            var kt = e.location, Tt = {
                guid: Date.now()
            }, St = /\?/;
            x.parseXML = function(t) {
                var n, i;
                if (!t || "string" != typeof t) return null;
                try {
                    n = (new e.DOMParser).parseFromString(t, "text/xml");
                } catch (e) {}
                return i = n && n.getElementsByTagName("parsererror")[0], n && !i || x.error("Invalid XML: " + (i ? x.map(i.childNodes, (function(e) {
                    return e.textContent;
                })).join("\n") : t)), n;
            };
            var Ct = /\[\]$/, $t = /\r?\n/g, At = /^(?:submit|button|image|reset|file)$/i, Et = /^(?:input|select|textarea|keygen)/i;
            function jt(e, t, n, i) {
                var o;
                if (Array.isArray(t)) x.each(t, (function(t, o) {
                    n || Ct.test(e) ? i(e, o) : jt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i);
                })); else if (n || "object" !== b(t)) i(e, t); else for (o in t) jt(e + "[" + o + "]", t[o], n, i);
            }
            x.param = function(e, t) {
                var n, i = [], o = function(e, t) {
                    var n = h(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                };
                if (null == e) return "";
                if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, (function() {
                    o(this.name, this.value);
                })); else for (n in e) jt(n, e[n], t, o);
                return i.join("&");
            }, x.fn.extend({
                serialize: function() {
                    return x.param(this.serializeArray());
                },
                serializeArray: function() {
                    return this.map((function() {
                        var e = x.prop(this, "elements");
                        return e ? x.makeArray(e) : this;
                    })).filter((function() {
                        var e = this.type;
                        return this.name && !x(this).is(":disabled") && Et.test(this.nodeName) && !At.test(e) && (this.checked || !fe.test(e));
                    })).map((function(e, t) {
                        var n = x(this).val();
                        return null == n ? null : Array.isArray(n) ? x.map(n, (function(e) {
                            return {
                                name: t.name,
                                value: e.replace($t, "\r\n")
                            };
                        })) : {
                            name: t.name,
                            value: n.replace($t, "\r\n")
                        };
                    })).get();
                }
            });
            var Ot = /%20/g, Dt = /#.*$/, Nt = /([?&])_=[^&]*/, Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ht = /^(?:GET|HEAD)$/, Pt = /^\/\//, qt = {}, Mt = {}, zt = "*/".concat("*"), It = g.createElement("a");
            function Wt(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var i, o = 0, r = t.toLowerCase().match(P) || [];
                    if (h(n)) for (;i = r[o++]; ) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
                };
            }
            function Rt(e, t, n, i) {
                var o = {}, r = e === Mt;
                function s(a) {
                    var l;
                    return o[a] = !0, x.each(e[a] || [], (function(e, a) {
                        var c = a(t, n, i);
                        return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), 
                        s(c), !1);
                    })), l;
                }
                return s(t.dataTypes[0]) || !o["*"] && s("*");
            }
            function Ft(e, t) {
                var n, i, o = x.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
                return i && x.extend(!0, e, i), e;
            }
            It.href = kt.href, x.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: kt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": zt,
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
                        "text xml": x.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Ft(Ft(e, x.ajaxSettings), t) : Ft(x.ajaxSettings, e);
                },
                ajaxPrefilter: Wt(qt),
                ajaxTransport: Wt(Mt),
                ajax: function(t, n) {
                    "object" == typeof t && (n = t, t = void 0), n = n || {};
                    var i, o, r, s, a, l, c, d, u, p, f = x.ajaxSetup({}, n), h = f.context || f, v = f.context && (h.nodeType || h.jquery) ? x(h) : x.event, y = x.Deferred(), m = x.Callbacks("once memory"), b = f.statusCode || {}, w = {}, k = {}, T = "canceled", S = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (c) {
                                if (!s) for (s = {}; t = Lt.exec(r); ) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = s[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function() {
                            return c ? r : null;
                        },
                        setRequestHeader: function(e, t) {
                            return null == c && (e = k[e.toLowerCase()] = k[e.toLowerCase()] || e, w[e] = t), 
                            this;
                        },
                        overrideMimeType: function(e) {
                            return null == c && (f.mimeType = e), this;
                        },
                        statusCode: function(e) {
                            var t;
                            if (e) if (c) S.always(e[S.status]); else for (t in e) b[t] = [ b[t], e[t] ];
                            return this;
                        },
                        abort: function(e) {
                            var t = e || T;
                            return i && i.abort(t), C(0, t), this;
                        }
                    };
                    if (y.promise(S), f.url = ((t || f.url || kt.href) + "").replace(Pt, kt.protocol + "//"), 
                    f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(P) || [ "" ], 
                    null == f.crossDomain) {
                        l = g.createElement("a");
                        try {
                            l.href = f.url, l.href = l.href, f.crossDomain = It.protocol + "//" + It.host != l.protocol + "//" + l.host;
                        } catch (e) {
                            f.crossDomain = !0;
                        }
                    }
                    if (f.data && f.processData && "string" != typeof f.data && (f.data = x.param(f.data, f.traditional)), 
                    Rt(qt, f, n, S), c) return S;
                    for (u in (d = x.event && f.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), 
                    f.type = f.type.toUpperCase(), f.hasContent = !Ht.test(f.type), o = f.url.replace(Dt, ""), 
                    f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ot, "+")) : (p = f.url.slice(o.length), 
                    f.data && (f.processData || "string" == typeof f.data) && (o += (St.test(o) ? "&" : "?") + f.data, 
                    delete f.data), !1 === f.cache && (o = o.replace(Nt, "$1"), p = (St.test(o) ? "&" : "?") + "_=" + Tt.guid++ + p), 
                    f.url = o + p), f.ifModified && (x.lastModified[o] && S.setRequestHeader("If-Modified-Since", x.lastModified[o]), 
                    x.etag[o] && S.setRequestHeader("If-None-Match", x.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && S.setRequestHeader("Content-Type", f.contentType), 
                    S.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : f.accepts["*"]), 
                    f.headers) S.setRequestHeader(u, f.headers[u]);
                    if (f.beforeSend && (!1 === f.beforeSend.call(h, S, f) || c)) return S.abort();
                    if (T = "abort", m.add(f.complete), S.done(f.success), S.fail(f.error), i = Rt(Mt, f, n, S)) {
                        if (S.readyState = 1, d && v.trigger("ajaxSend", [ S, f ]), c) return S;
                        f.async && f.timeout > 0 && (a = e.setTimeout((function() {
                            S.abort("timeout");
                        }), f.timeout));
                        try {
                            c = !1, i.send(w, C);
                        } catch (e) {
                            if (c) throw e;
                            C(-1, e);
                        }
                    } else C(-1, "No Transport");
                    function C(t, n, s, l) {
                        var u, p, g, w, k, T = n;
                        c || (c = !0, a && e.clearTimeout(a), i = void 0, r = l || "", S.readyState = t > 0 ? 4 : 0, 
                        u = t >= 200 && t < 300 || 304 === t, s && (w = function(e, t, n) {
                            for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), 
                            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (i) for (o in a) if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break;
                            }
                            if (l[0] in n) r = l[0]; else {
                                for (o in n) {
                                    if (!l[0] || e.converters[o + " " + l[0]]) {
                                        r = o;
                                        break;
                                    }
                                    s || (s = o);
                                }
                                r = r || s;
                            }
                            if (r) return r !== l[0] && l.unshift(r), n[r];
                        }(f, S, s)), !u && x.inArray("script", f.dataTypes) > -1 && x.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}), 
                        w = function(e, t, n, i) {
                            var o, r, s, a, l, c = {}, d = e.dataTypes.slice();
                            if (d[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                            for (r = d.shift(); r; ) if (e.responseFields[r] && (n[e.responseFields[r]] = t), 
                            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
                                if (!(s = c[l + " " + r] || c["* " + r])) for (o in c) if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], d.unshift(a[1]));
                                    break;
                                }
                                if (!0 !== s) if (s && e.throws) t = s(t); else try {
                                    t = s(t);
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: s ? e : "No conversion from " + l + " to " + r
                                    };
                                }
                            }
                            return {
                                state: "success",
                                data: t
                            };
                        }(f, w, S, u), u ? (f.ifModified && ((k = S.getResponseHeader("Last-Modified")) && (x.lastModified[o] = k), 
                        (k = S.getResponseHeader("etag")) && (x.etag[o] = k)), 204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, 
                        p = w.data, u = !(g = w.error))) : (g = T, !t && T || (T = "error", t < 0 && (t = 0))), 
                        S.status = t, S.statusText = (n || T) + "", u ? y.resolveWith(h, [ p, T, S ]) : y.rejectWith(h, [ S, T, g ]), 
                        S.statusCode(b), b = void 0, d && v.trigger(u ? "ajaxSuccess" : "ajaxError", [ S, f, u ? p : g ]), 
                        m.fireWith(h, [ S, T ]), d && (v.trigger("ajaxComplete", [ S, f ]), --x.active || x.event.trigger("ajaxStop")));
                    }
                    return S;
                },
                getJSON: function(e, t, n) {
                    return x.get(e, t, n, "json");
                },
                getScript: function(e, t) {
                    return x.get(e, void 0, t, "script");
                }
            }), x.each([ "get", "post" ], (function(e, t) {
                x[t] = function(e, n, i, o) {
                    return h(n) && (o = o || i, i = n, n = void 0), x.ajax(x.extend({
                        url: e,
                        type: t,
                        dataType: o,
                        data: n,
                        success: i
                    }, x.isPlainObject(e) && e));
                };
            })), x.ajaxPrefilter((function(e) {
                var t;
                for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
            })), x._evalUrl = function(e, t, n) {
                return x.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(e) {
                        x.globalEval(e, t, n);
                    }
                });
            }, x.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (h(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), 
                    this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                        for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                        return e;
                    })).append(this)), this;
                },
                wrapInner: function(e) {
                    return h(e) ? this.each((function(t) {
                        x(this).wrapInner(e.call(this, t));
                    })) : this.each((function() {
                        var t = x(this), n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                    }));
                },
                wrap: function(e) {
                    var t = h(e);
                    return this.each((function(n) {
                        x(this).wrapAll(t ? e.call(this, n) : e);
                    }));
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each((function() {
                        x(this).replaceWith(this.childNodes);
                    })), this;
                }
            }), x.expr.pseudos.hidden = function(e) {
                return !x.expr.pseudos.visible(e);
            }, x.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
            }, x.ajaxSettings.xhr = function() {
                try {
                    return new e.XMLHttpRequest;
                } catch (e) {}
            };
            var _t = {
                0: 200,
                1223: 204
            }, Bt = x.ajaxSettings.xhr();
            f.cors = !!Bt && "withCredentials" in Bt, f.ajax = Bt = !!Bt, x.ajaxTransport((function(t) {
                var n, i;
                if (f.cors || Bt && !t.crossDomain) return {
                    send: function(o, r) {
                        var s, a = t.xhr();
                        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                        for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), 
                        o) a.setRequestHeader(s, o[s]);
                        n = function(e) {
                            return function() {
                                n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, 
                                "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(_t[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()));
                            };
                        }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                            4 === a.readyState && e.setTimeout((function() {
                                n && i();
                            }));
                        }, n = n("abort");
                        try {
                            a.send(t.hasContent && t.data || null);
                        } catch (e) {
                            if (n) throw e;
                        }
                    },
                    abort: function() {
                        n && n();
                    }
                };
            })), x.ajaxPrefilter((function(e) {
                e.crossDomain && (e.contents.script = !1);
            })), x.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return x.globalEval(e), e;
                    }
                }
            }), x.ajaxPrefilter("script", (function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
            })), x.ajaxTransport("script", (function(e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs) return {
                    send: function(i, o) {
                        t = x("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
                        }), g.head.appendChild(t[0]);
                    },
                    abort: function() {
                        n && n();
                    }
                };
            }));
            var Ut, Xt = [], Yt = /(=)\?(?=&|$)|\?\?/;
            x.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Xt.pop() || x.expando + "_" + Tt.guid++;
                    return this[e] = !0, e;
                }
            }), x.ajaxPrefilter("json jsonp", (function(t, n, i) {
                var o, r, s, a = !1 !== t.jsonp && (Yt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(t.data) && "data");
                if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
                a ? t[a] = t[a].replace(Yt, "$1" + o) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), 
                t.converters["script json"] = function() {
                    return s || x.error(o + " was not called"), s[0];
                }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
                    s = arguments;
                }, i.always((function() {
                    void 0 === r ? x(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, 
                    Xt.push(o)), s && h(r) && r(s[0]), s = r = void 0;
                })), "script";
            })), f.createHTMLDocument = ((Ut = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
            2 === Ut.childNodes.length), x.parseHTML = function(e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (f.createHTMLDocument ? ((i = (t = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href, 
                t.head.appendChild(i)) : t = g), r = !n && [], (o = E.exec(e)) ? [ t.createElement(o[1]) ] : (o = we([ e ], t, r), 
                r && r.length && x(r).remove(), x.merge([], o.childNodes)));
                var i, o, r;
            }, x.fn.load = function(e, t, n) {
                var i, o, r, s = this, a = e.indexOf(" ");
                return a > -1 && (i = gt(e.slice(a)), e = e.slice(0, a)), h(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 
                s.length > 0 && x.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done((function(e) {
                    r = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e);
                })).always(n && function(e, t) {
                    s.each((function() {
                        n.apply(this, r || [ e.responseText, t, e ]);
                    }));
                }), this;
            }, x.expr.pseudos.animated = function(e) {
                return x.grep(x.timers, (function(t) {
                    return e === t.elem;
                })).length;
            }, x.offset = {
                setOffset: function(e, t, n) {
                    var i, o, r, s, a, l, c = x.css(e, "position"), d = x(e), u = {};
                    "static" === c && (e.style.position = "relative"), a = d.offset(), r = x.css(e, "top"), 
                    l = x.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = d.position()).top, 
                    o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), h(t) && (t = t.call(e, n, x.extend({}, a))), 
                    null != t.top && (u.top = t.top - a.top + s), null != t.left && (u.left = t.left - a.left + o), 
                    "using" in t ? t.using.call(e, u) : d.css(u);
                }
            }, x.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                        x.offset.setOffset(this, e, t);
                    }));
                    var t, n, i = this[0];
                    return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, 
                    {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0;
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, i = this[0], o = {
                            top: 0,
                            left: 0
                        };
                        if ("fixed" === x.css(i, "position")) t = i.getBoundingClientRect(); else {
                            for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position"); ) e = e.parentNode;
                            e && e !== i && 1 === e.nodeType && ((o = x(e).offset()).top += x.css(e, "borderTopWidth", !0), 
                            o.left += x.css(e, "borderLeftWidth", !0));
                        }
                        return {
                            top: t.top - o.top - x.css(i, "marginTop", !0),
                            left: t.left - o.left - x.css(i, "marginLeft", !0)
                        };
                    }
                },
                offsetParent: function() {
                    return this.map((function() {
                        for (var e = this.offsetParent; e && "static" === x.css(e, "position"); ) e = e.offsetParent;
                        return e || ie;
                    }));
                }
            }), x.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(e, t) {
                var n = "pageYOffset" === t;
                x.fn[e] = function(i) {
                    return F(this, (function(e, i, o) {
                        var r;
                        if (v(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
                        r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o;
                    }), e, i, arguments.length);
                };
            })), x.each([ "top", "left" ], (function(e, t) {
                x.cssHooks[t] = Ue(f.pixelPosition, (function(e, n) {
                    if (n) return n = Be(e, t), Me.test(n) ? x(e).position()[t] + "px" : n;
                }));
            })), x.each({
                Height: "height",
                Width: "width"
            }, (function(e, t) {
                x.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, (function(n, i) {
                    x.fn[i] = function(o, r) {
                        var s = arguments.length && (n || "boolean" != typeof o), a = n || (!0 === o || !0 === r ? "margin" : "border");
                        return F(this, (function(t, n, o) {
                            var r;
                            return v(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, 
                            Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? x.css(t, n, a) : x.style(t, n, o, a);
                        }), t, s ? o : void 0, s);
                    };
                }));
            })), x.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(e, t) {
                x.fn[t] = function(e) {
                    return this.on(t, e);
                };
            })), x.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n);
                },
                unbind: function(e, t) {
                    return this.off(e, null, t);
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i);
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                }
            }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                x.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                };
            }));
            var Vt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
            x.proxy = function(e, t) {
                var n, i, r;
                if ("string" == typeof t && (n = e[t], t = e, e = n), h(e)) return i = o.call(arguments, 2), 
                r = function() {
                    return e.apply(t || this, i.concat(o.call(arguments)));
                }, r.guid = e.guid = e.guid || x.guid++, r;
            }, x.holdReady = function(e) {
                e ? x.readyWait++ : x.ready(!0);
            }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = A, x.isFunction = h, 
            x.isWindow = v, x.camelCase = X, x.type = b, x.now = Date.now, x.isNumeric = function(e) {
                var t = x.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
            }, x.trim = function(e) {
                return null == e ? "" : (e + "").replace(Vt, "$1");
            };
            var Gt = e.jQuery, Qt = e.$;
            return x.noConflict = function(t) {
                return e.$ === x && (e.$ = Qt), t && e.jQuery === x && (e.jQuery = Gt), x;
            }, void 0 === t && (e.jQuery = e.$ = x), x;
        }));
    })), o = t((function(e, t) {
        e.exports = function(e) {
            function t(i) {
                if (n[i]) return n[i].exports;
                var o = n[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports;
            }
            var n = {};
            return t.m = e, t.c = n, t.p = "dist/", t(0);
        }([ function(e, t, n) {
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
            }, r = (i(n(1)), n(6)), s = i(r), a = i(n(7)), l = i(n(8)), c = i(n(9)), d = i(n(10)), u = i(n(11)), p = i(n(14)), f = [], h = !1, v = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            }, g = function() {
                if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (h = !0), 
                h) return f = (0, u.default)(f, v), (0, d.default)(f, v.once), f;
            }, y = function() {
                f = (0, p.default)(), g();
            }, m = function() {
                f.forEach((function(e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), 
                    e.node.removeAttribute("data-aos-delay");
                }));
            }, b = function(e) {
                return !0 === e || "mobile" === e && c.default.mobile() || "phone" === e && c.default.phone() || "tablet" === e && c.default.tablet() || "function" == typeof e && !0 === e();
            }, w = function(e) {
                v = o(v, e), f = (0, p.default)();
                var t = document.all && !window.atob;
                return b(v.disable) || t ? m() : (v.disableMutationObserver || l.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), 
                v.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", v.easing), 
                document.querySelector("body").setAttribute("data-aos-duration", v.duration), document.querySelector("body").setAttribute("data-aos-delay", v.delay), 
                "DOMContentLoaded" === v.startEvent && [ "complete", "interactive" ].indexOf(document.readyState) > -1 ? g(!0) : "load" === v.startEvent ? window.addEventListener(v.startEvent, (function() {
                    g(!0);
                })) : document.addEventListener(v.startEvent, (function() {
                    g(!0);
                })), window.addEventListener("resize", (0, a.default)(g, v.debounceDelay, !0)), 
                window.addEventListener("orientationchange", (0, a.default)(g, v.debounceDelay, !0)), 
                window.addEventListener("scroll", (0, s.default)((function() {
                    (0, d.default)(f, v.once);
                }), v.throttleDelay)), v.disableMutationObserver || l.default.ready("[data-aos]", y), 
                f);
            };
            e.exports = {
                init: w,
                refresh: g,
                refreshHard: y
            };
        }, function(e, t) {}, , , , , function(e, t) {
            (function(t) {
                function n(e, t, n) {
                    function i(t) {
                        var n = v, i = g;
                        return v = g = void 0, S = t, m = e.apply(i, n);
                    }
                    function r(e) {
                        return S = e, b = setTimeout(d, t), C ? i(e) : m;
                    }
                    function s(e) {
                        var n = t - (e - w);
                        return $ ? k(n, y - (e - S)) : n;
                    }
                    function l(e) {
                        var n = e - w;
                        return void 0 === w || n >= t || n < 0 || $ && e - S >= y;
                    }
                    function d() {
                        var e = T();
                        return l(e) ? u(e) : void (b = setTimeout(d, s(e)));
                    }
                    function u(e) {
                        return b = void 0, A && v ? i(e) : (v = g = void 0, m);
                    }
                    function p() {
                        void 0 !== b && clearTimeout(b), S = 0, v = w = g = b = void 0;
                    }
                    function f() {
                        return void 0 === b ? m : u(T());
                    }
                    function h() {
                        var e = T(), n = l(e);
                        if (v = arguments, g = this, w = e, n) {
                            if (void 0 === b) return r(w);
                            if ($) return b = setTimeout(d, t), i(w);
                        }
                        return void 0 === b && (b = setTimeout(d, t)), m;
                    }
                    var v, g, y, m, b, w, S = 0, C = !1, $ = !1, A = !0;
                    if ("function" != typeof e) throw new TypeError(c);
                    return t = a(t) || 0, o(n) && (C = !!n.leading, y = ($ = "maxWait" in n) ? x(a(n.maxWait) || 0, t) : y, 
                    A = "trailing" in n ? !!n.trailing : A), h.cancel = p, h.flush = f, h;
                }
                function i(e, t, i) {
                    var r = !0, s = !0;
                    if ("function" != typeof e) throw new TypeError(c);
                    return o(i) && (r = "leading" in i ? !!i.leading : r, s = "trailing" in i ? !!i.trailing : s), 
                    n(e, t, {
                        leading: r,
                        maxWait: t,
                        trailing: s
                    });
                }
                function o(e) {
                    var t = void 0 === e ? "undefined" : l(e);
                    return !!e && ("object" == t || "function" == t);
                }
                function r(e) {
                    return !!e && "object" == (void 0 === e ? "undefined" : l(e));
                }
                function s(e) {
                    return "symbol" == (void 0 === e ? "undefined" : l(e)) || r(e) && w.call(e) == u;
                }
                function a(e) {
                    if ("number" == typeof e) return e;
                    if (s(e)) return d;
                    if (o(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = o(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(p, "");
                    var n = h.test(e);
                    return n || v.test(e) ? g(e.slice(2), n ? 2 : 8) : f.test(e) ? d : +e;
                }
                var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, c = "Expected a function", d = NaN, u = "[object Symbol]", p = /^\s+|\s+$/g, f = /^[-+]0x[0-9a-f]+$/i, h = /^0b[01]+$/i, v = /^0o[0-7]+$/i, g = parseInt, y = "object" == (void 0 === t ? "undefined" : l(t)) && t && t.Object === Object && t, m = "object" == ("undefined" == typeof self ? "undefined" : l(self)) && self && self.Object === Object && self, b = y || m || Function("return this")(), w = Object.prototype.toString, x = Math.max, k = Math.min, T = function() {
                    return b.Date.now();
                };
                e.exports = i;
            }).call(t, function() {
                return this;
            }());
        }, function(e, t) {
            (function(t) {
                function n(e, t, n) {
                    function o(t) {
                        var n = v, i = g;
                        return v = g = void 0, S = t, m = e.apply(i, n);
                    }
                    function r(e) {
                        return S = e, b = setTimeout(d, t), C ? o(e) : m;
                    }
                    function a(e) {
                        var n = t - (e - T);
                        return $ ? x(n, y - (e - S)) : n;
                    }
                    function c(e) {
                        var n = e - T;
                        return void 0 === T || n >= t || n < 0 || $ && e - S >= y;
                    }
                    function d() {
                        var e = k();
                        return c(e) ? u(e) : void (b = setTimeout(d, a(e)));
                    }
                    function u(e) {
                        return b = void 0, A && v ? o(e) : (v = g = void 0, m);
                    }
                    function p() {
                        void 0 !== b && clearTimeout(b), S = 0, v = T = g = b = void 0;
                    }
                    function f() {
                        return void 0 === b ? m : u(k());
                    }
                    function h() {
                        var e = k(), n = c(e);
                        if (v = arguments, g = this, T = e, n) {
                            if (void 0 === b) return r(T);
                            if ($) return b = setTimeout(d, t), o(T);
                        }
                        return void 0 === b && (b = setTimeout(d, t)), m;
                    }
                    var v, g, y, m, b, T, S = 0, C = !1, $ = !1, A = !0;
                    if ("function" != typeof e) throw new TypeError(l);
                    return t = s(t) || 0, i(n) && (C = !!n.leading, y = ($ = "maxWait" in n) ? w(s(n.maxWait) || 0, t) : y, 
                    A = "trailing" in n ? !!n.trailing : A), h.cancel = p, h.flush = f, h;
                }
                function i(e) {
                    var t = void 0 === e ? "undefined" : a(e);
                    return !!e && ("object" == t || "function" == t);
                }
                function o(e) {
                    return !!e && "object" == (void 0 === e ? "undefined" : a(e));
                }
                function r(e) {
                    return "symbol" == (void 0 === e ? "undefined" : a(e)) || o(e) && b.call(e) == d;
                }
                function s(e) {
                    if ("number" == typeof e) return e;
                    if (r(e)) return c;
                    if (i(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = i(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(u, "");
                    var n = f.test(e);
                    return n || h.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? c : +e;
                }
                var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, l = "Expected a function", c = NaN, d = "[object Symbol]", u = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, f = /^0b[01]+$/i, h = /^0o[0-7]+$/i, v = parseInt, g = "object" == (void 0 === t ? "undefined" : a(t)) && t && t.Object === Object && t, y = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self, m = g || y || Function("return this")(), b = Object.prototype.toString, w = Math.max, x = Math.min, k = function() {
                    return m.Date.now();
                };
                e.exports = n;
            }).call(t, function() {
                return this;
            }());
        }, function(e, t) {
            function n(e) {
                var t = void 0, i = void 0;
                for (t = 0; t < e.length; t += 1) {
                    if ((i = e[t]).dataset && i.dataset.aos) return !0;
                    if (i.children && n(i.children)) return !0;
                }
                return !1;
            }
            function i() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            }
            function o() {
                return !!i();
            }
            function r(e, t) {
                var n = window.document, o = new (i())(s);
                a = t, o.observe(n.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                });
            }
            function s(e) {
                e && e.forEach((function(e) {
                    var t = Array.prototype.slice.call(e.addedNodes), i = Array.prototype.slice.call(e.removedNodes);
                    if (n(t.concat(i))) return a();
                }));
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = function() {};
            t.default = {
                isSupported: o,
                ready: r
            };
        }, function(e, t) {
            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function i() {
                return navigator.userAgent || navigator.vendor || window.opera || "";
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                        Object.defineProperty(e, i.key, i);
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t;
                };
            }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, a = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, l = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, c = function() {
                function e() {
                    n(this, e);
                }
                return o(e, [ {
                    key: "phone",
                    value: function() {
                        var e = i();
                        return !(!r.test(e) && !s.test(e.substr(0, 4)));
                    }
                }, {
                    key: "mobile",
                    value: function() {
                        var e = i();
                        return !(!a.test(e) && !l.test(e.substr(0, 4)));
                    }
                }, {
                    key: "tablet",
                    value: function() {
                        return this.mobile() && !this.phone();
                    }
                } ]), e;
            }();
            t.default = new c;
        }, function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e, t, n) {
                var i = e.node.getAttribute("data-aos-once");
                t > e.position ? e.node.classList.add("aos-animate") : void 0 !== i && ("false" === i || !n && "true" !== i) && e.node.classList.remove("aos-animate");
            }, i = function(e, t) {
                var i = window.pageYOffset, o = window.innerHeight;
                e.forEach((function(e, r) {
                    n(e, o + i, t);
                }));
            };
            t.default = i;
        }, function(e, t, n) {
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(n(12)), r = function(e, t) {
                return e.forEach((function(e, n) {
                    e.node.classList.add("aos-init"), e.position = (0, o.default)(e.node, t.offset);
                })), e;
            };
            t.default = r;
        }, function(e, t, n) {
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(n(13)), r = function(e, t) {
                var n = 0, i = 0, r = window.innerHeight, s = {
                    offset: e.getAttribute("data-aos-offset"),
                    anchor: e.getAttribute("data-aos-anchor"),
                    anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                };
                switch (s.offset && !isNaN(s.offset) && (i = parseInt(s.offset)), s.anchor && document.querySelectorAll(s.anchor) && (e = document.querySelectorAll(s.anchor)[0]), 
                n = (0, o.default)(e).top, s.anchorPlacement) {
                  case "top-bottom":
                    break;

                  case "center-bottom":
                    n += e.offsetHeight / 2;
                    break;

                  case "bottom-bottom":
                    n += e.offsetHeight;
                    break;

                  case "top-center":
                    n += r / 2;
                    break;

                  case "bottom-center":
                    n += r / 2 + e.offsetHeight;
                    break;

                  case "center-center":
                    n += r / 2 + e.offsetHeight / 2;
                    break;

                  case "top-top":
                    n += r;
                    break;

                  case "bottom-top":
                    n += e.offsetHeight + r;
                    break;

                  case "center-top":
                    n += e.offsetHeight / 2 + r;
                }
                return s.anchorPlacement || s.offset || isNaN(t) || (i = t), n + i;
            };
            t.default = r;
        }, function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e) {
                for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); ) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), 
                n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                return {
                    top: n,
                    left: t
                };
            };
            t.default = n;
        }, function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e) {
                return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, (function(e) {
                    return {
                        node: e
                    };
                }));
            };
            t.default = n;
        } ]);
    }));
    (n = o) && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") && n.default, 
    o.AOS, t((function(e, t) {
        e.exports = function(e) {
            var t = window.Slick || {};
            (t = function() {
                var t = 0;
                function n(n, i) {
                    var o, r = this;
                    r.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: e(n),
                        appendDots: e(n),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(t, n) {
                            return e('<button type="button" />').text(n + 1);
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        focusOnChange: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnFocus: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rows: 1,
                        rtl: !1,
                        slide: "",
                        slidesPerRow: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        useTransform: !0,
                        variableWidth: !1,
                        vertical: !1,
                        verticalSwiping: !1,
                        waitForAnimate: !0,
                        zIndex: 1e3
                    }, r.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        scrolling: !1,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        swiping: !1,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1
                    }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, 
                    r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, 
                    r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, 
                    r.rowCount = 1, r.shouldClick = !0, r.$slider = e(n), r.$slidesCache = null, r.transformType = null, 
                    r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, 
                    r.windowTimer = null, o = e(n).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), 
                    r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", 
                    r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", 
                    r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), 
                    r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), 
                    r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), 
                    r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), 
                    r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), 
                    r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, 
                    r.registerBreakpoints(), r.init(!0);
                }
                return n;
            }()).prototype.activateADA = function() {
                this.$slideTrack.find(".slick-active").attr({
                    "aria-hidden": "false"
                }).find("a, input, button, select").attr({
                    tabindex: "0"
                });
            }, t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
                var o = this;
                if ("boolean" == typeof n) i = n, n = null; else if (n < 0 || n >= o.slideCount) return !1;
                o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), 
                o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), 
                o.$slideTrack.append(o.$slides), o.$slides.each((function(t, n) {
                    e(n).attr("data-slick-index", t);
                })), o.$slidesCache = o.$slides, o.reinit();
            }, t.prototype.animateHeight = function() {
                var e = this;
                if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.animate({
                        height: t
                    }, e.options.speed);
                }
            }, t.prototype.animateSlide = function(t, n) {
                var i = {}, o = this;
                o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), 
                !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
                    left: t
                }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
                    top: t
                }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), 
                e({
                    animStart: o.currentLeft
                }).animate({
                    animStart: t
                }, {
                    duration: o.options.speed,
                    easing: o.options.easing,
                    step: function(e) {
                        e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", 
                        o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i));
                    },
                    complete: function() {
                        n && n.call();
                    }
                })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", 
                o.$slideTrack.css(i), n && setTimeout((function() {
                    o.disableTransition(), n.call();
                }), o.options.speed));
            }, t.prototype.getNavTarget = function() {
                var t = this, n = t.options.asNavFor;
                return n && null !== n && (n = e(n).not(t.$slider)), n;
            }, t.prototype.asNavFor = function(t) {
                var n = this.getNavTarget();
                null !== n && "object" == typeof n && n.each((function() {
                    var n = e(this).slick("getSlick");
                    n.unslicked || n.slideHandler(t, !0);
                }));
            }, t.prototype.applyTransition = function(e) {
                var t = this, n = {};
                !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, 
                !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
            }, t.prototype.autoPlay = function() {
                var e = this;
                e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
            }, t.prototype.autoPlayClear = function() {
                var e = this;
                e.autoPlayTimer && clearInterval(e.autoPlayTimer);
            }, t.prototype.autoPlayIterator = function() {
                var e = this, t = e.currentSlide + e.options.slidesToScroll;
                e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, 
                e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t));
            }, t.prototype.buildArrows = function() {
                var t = this;
                !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), 
                t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), 
                t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), 
                t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), 
                !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                    "aria-disabled": "true",
                    tabindex: "-1"
                }));
            }, t.prototype.buildDots = function() {
                var t, n, i = this;
                if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                    for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), 
                    t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
                    i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active");
                }
            }, t.prototype.buildOut = function() {
                var t = this;
                t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), 
                t.slideCount = t.$slides.length, t.$slides.each((function(t, n) {
                    e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "");
                })), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), 
                t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), 
                !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), 
                e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), 
                t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), 
                !0 === t.options.draggable && t.$list.addClass("draggable");
            }, t.prototype.buildRows = function() {
                var e, t, n, i, o, r, s, a = this;
                if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 0) {
                    for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                        var l = document.createElement("div");
                        for (t = 0; t < a.options.rows; t++) {
                            var c = document.createElement("div");
                            for (n = 0; n < a.options.slidesPerRow; n++) {
                                var d = e * s + (t * a.options.slidesPerRow + n);
                                r.get(d) && c.appendChild(r.get(d));
                            }
                            l.appendChild(c);
                        }
                        i.appendChild(l);
                    }
                    a.$slider.empty().append(i), a.$slider.children().children().children().css({
                        width: 100 / a.options.slidesPerRow + "%",
                        display: "inline-block"
                    });
                }
            }, t.prototype.checkResponsive = function(t, n) {
                var i, o, r, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || e(window).width();
                if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), 
                s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                    for (i in o = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
                    null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, 
                    "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), 
                    !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, 
                    "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), 
                    !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, 
                    s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), 
                    s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [ s, a ]);
                }
            }, t.prototype.changeSlide = function(t, n) {
                var i, o, r = this, s = e(t.currentTarget);
                switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, 
                t.data.message) {
                  case "previous":
                    o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
                    break;

                  case "next":
                    o = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
                    break;

                  case "index":
                    var a = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(a), !1, n), s.children().trigger("focus");
                    break;

                  default:
                    return;
                }
            }, t.prototype.checkNavigable = function(e) {
                var t, n;
                if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1]; else for (var i in t) {
                    if (e < t[i]) {
                        e = n;
                        break;
                    }
                    n = t[i];
                }
                return e;
            }, t.prototype.cleanUpEvents = function() {
                var t = this;
                t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), 
                !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), 
                !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), 
                t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), 
                t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), 
                t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), 
                t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), 
                e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), 
                !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), 
                e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), 
                e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), 
                e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
            }, t.prototype.cleanUpSlideEvents = function() {
                var t = this;
                t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
            }, t.prototype.cleanUpRows = function() {
                var e, t = this;
                t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr("style"), 
                t.$slider.empty().append(e));
            }, t.prototype.clickHandler = function(e) {
                !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
            }, t.prototype.destroy = function(t) {
                var n = this;
                n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), 
                n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
                n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
                n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
                    e(this).attr("style", e(this).data("originalStyling"));
                })), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), 
                n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), 
                n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), 
                n.unslicked = !0, t || n.$slider.trigger("destroy", [ n ]);
            }, t.prototype.disableTransition = function(e) {
                var t = this, n = {};
                n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
            }, t.prototype.fadeSlide = function(e, t) {
                var n = this;
                !1 === n.cssTransitions ? (n.$slides.eq(e).css({
                    zIndex: n.options.zIndex
                }), n.$slides.eq(e).animate({
                    opacity: 1
                }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
                    opacity: 1,
                    zIndex: n.options.zIndex
                }), t && setTimeout((function() {
                    n.disableTransition(e), t.call();
                }), n.options.speed));
            }, t.prototype.fadeSlideOut = function(e) {
                var t = this;
                !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                    opacity: 0,
                    zIndex: t.options.zIndex - 2
                }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                    opacity: 0,
                    zIndex: t.options.zIndex - 2
                }));
            }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
                var t = this;
                null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), 
                t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
            }, t.prototype.focusHandler = function() {
                var t = this;
                t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(n) {
                    n.stopImmediatePropagation();
                    var i = e(this);
                    setTimeout((function() {
                        t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay());
                    }), 0);
                }));
            }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
                return this.currentSlide;
            }, t.prototype.getDotCount = function() {
                var e = this, t = 0, n = 0, i = 0;
                if (!0 === e.options.infinite) if (e.slideCount <= e.options.slidesToShow) ++i; else for (;t < e.slideCount; ) ++i, 
                t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (!0 === e.options.centerMode) i = e.slideCount; else if (e.options.asNavFor) for (;t < e.slideCount; ) ++i, 
                t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                return i - 1;
            }, t.prototype.getLeft = function(e) {
                var t, n, i, o, r = this, s = 0;
                return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, 
                o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), 
                s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, 
                s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, 
                s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, 
                s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, 
                s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, 
                r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, 
                !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), 
                t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, 
                !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), 
                t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, 
                t += (r.$list.width() - i.outerWidth()) / 2)), t;
            }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
                return this.options[e];
            }, t.prototype.getNavigableIndexes = function() {
                var e, t = this, n = 0, i = 0, o = [];
                for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, 
                i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e; ) o.push(n), n = i + t.options.slidesToScroll, 
                i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                return o;
            }, t.prototype.getSlick = function() {
                return this;
            }, t.prototype.getSlideCount = function() {
                var t, n, i = this;
                return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, 
                !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each((function(o, r) {
                    if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft) return t = r, !1;
                })), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll;
            }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
                this.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(e)
                    }
                }, t);
            }, t.prototype.init = function(t) {
                var n = this;
                e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), 
                n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), 
                n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [ n ]), 
                !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, 
                n.autoPlay());
            }, t.prototype.initADA = function() {
                var t = this, n = Math.ceil(t.slideCount / t.options.slidesToShow), i = t.getNavigableIndexes().filter((function(e) {
                    return e >= 0 && e < t.slideCount;
                }));
                t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                    "aria-hidden": "true",
                    tabindex: "-1"
                }).find("a, input, button, select").attr({
                    tabindex: "-1"
                }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function(n) {
                    var o = i.indexOf(n);
                    if (e(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + t.instanceUid + n,
                        tabindex: -1
                    }), -1 !== o) {
                        var r = "slick-slide-control" + t.instanceUid + o;
                        e("#" + r).length && e(this).attr({
                            "aria-describedby": r
                        });
                    }
                })), t.$dots.attr("role", "tablist").find("li").each((function(o) {
                    var r = i[o];
                    e(this).attr({
                        role: "presentation"
                    }), e(this).find("button").first().attr({
                        role: "tab",
                        id: "slick-slide-control" + t.instanceUid + o,
                        "aria-controls": "slick-slide" + t.instanceUid + r,
                        "aria-label": o + 1 + " of " + n,
                        "aria-selected": null,
                        tabindex: "-1"
                    });
                })).eq(t.currentSlide).find("button").attr({
                    "aria-selected": "true",
                    tabindex: "0"
                }).end());
                for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.options.focusOnChange ? t.$slides.eq(o).attr({
                    tabindex: "0"
                }) : t.$slides.eq(o).removeAttr("tabindex");
                t.activateADA();
            }, t.prototype.initArrowEvents = function() {
                var e = this;
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                    message: "previous"
                }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                    message: "next"
                }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), 
                e.$nextArrow.on("keydown.slick", e.keyHandler)));
            }, t.prototype.initDotEvents = function() {
                var t = this;
                !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
                    message: "index"
                }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), 
                !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
            }, t.prototype.initSlideEvents = function() {
                var t = this;
                t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), 
                t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
            }, t.prototype.initializeEvents = function() {
                var t = this;
                t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), 
                !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), 
                e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), 
                e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), 
                e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition);
            }, t.prototype.initUI = function() {
                var e = this;
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), 
                e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
            }, t.prototype.keyHandler = function(e) {
                var t = this;
                e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                    data: {
                        message: !0 === t.options.rtl ? "next" : "previous"
                    }
                }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                    data: {
                        message: !0 === t.options.rtl ? "previous" : "next"
                    }
                }));
            }, t.prototype.lazyLoad = function() {
                var t, n, i, o = this;
                function r(t) {
                    e("img[data-lazy]", t).each((function() {
                        var t = e(this), n = e(this).attr("data-lazy"), i = e(this).attr("data-srcset"), r = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"), s = document.createElement("img");
                        s.onload = function() {
                            t.animate({
                                opacity: 0
                            }, 100, (function() {
                                i && (t.attr("srcset", i), r && t.attr("sizes", r)), t.attr("src", n).animate({
                                    opacity: 1
                                }, 200, (function() {
                                    t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                })), o.$slider.trigger("lazyLoaded", [ o, t, n ]);
                            }));
                        }, s.onerror = function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
                            o.$slider.trigger("lazyLoadError", [ o, t, n ]);
                        }, s.src = n;
                    }));
                }
                if (!0 === o.options.centerMode ? !0 === o.options.infinite ? i = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), 
                i = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, 
                i = Math.ceil(n + o.options.slidesToShow), !0 === o.options.fade && (n > 0 && n--, 
                i <= o.slideCount && i++)), t = o.$slider.find(".slick-slide").slice(n, i), "anticipated" === o.options.lazyLoad) for (var s = n - 1, a = i, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++) s < 0 && (s = o.slideCount - 1), 
                t = (t = t.add(l.eq(s))).add(l.eq(a)), s--, a++;
                r(t), o.slideCount <= o.options.slidesToShow ? r(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? r(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && r(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow));
            }, t.prototype.loadSlider = function() {
                var e = this;
                e.setPosition(), e.$slideTrack.css({
                    opacity: 1
                }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
            }, t.prototype.next = t.prototype.slickNext = function() {
                this.changeSlide({
                    data: {
                        message: "next"
                    }
                });
            }, t.prototype.orientationChange = function() {
                var e = this;
                e.checkResponsive(), e.setPosition();
            }, t.prototype.pause = t.prototype.slickPause = function() {
                var e = this;
                e.autoPlayClear(), e.paused = !0;
            }, t.prototype.play = t.prototype.slickPlay = function() {
                var e = this;
                e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1;
            }, t.prototype.postSlide = function(t) {
                var n = this;
                n.unslicked || (n.$slider.trigger("afterChange", [ n, t ]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), 
                n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), 
                n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()));
            }, t.prototype.prev = t.prototype.slickPrev = function() {
                this.changeSlide({
                    data: {
                        message: "previous"
                    }
                });
            }, t.prototype.preventDefault = function(e) {
                e.preventDefault();
            }, t.prototype.progressiveLazyLoad = function(t) {
                t = t || 1;
                var n, i, o, r, s, a = this, l = e("img[data-lazy]", a.$slider);
                l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), r = n.attr("data-sizes") || a.$slider.attr("data-sizes"), 
                (s = document.createElement("img")).onload = function() {
                    o && (n.attr("srcset", o), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), 
                    !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [ a, n, i ]), 
                    a.progressiveLazyLoad();
                }, s.onerror = function() {
                    t < 3 ? setTimeout((function() {
                        a.progressiveLazyLoad(t + 1);
                    }), 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
                    a.$slider.trigger("lazyLoadError", [ a, n, i ]), a.progressiveLazyLoad());
                }, s.src = i) : a.$slider.trigger("allImagesLoaded", [ a ]);
            }, t.prototype.refresh = function(t) {
                var n, i, o = this;
                i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), 
                o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, 
                o.destroy(!0), e.extend(o, o.initials, {
                    currentSlide: n
                }), o.init(), t || o.changeSlide({
                    data: {
                        message: "index",
                        index: n
                    }
                }, !1);
            }, t.prototype.registerBreakpoints = function() {
                var t, n, i, o = this, r = o.options.responsive || null;
                if ("array" === e.type(r) && r.length) {
                    for (t in o.respondTo = o.options.respondTo || "window", r) if (i = o.breakpoints.length - 1, 
                    r.hasOwnProperty(t)) {
                        for (n = r[t].breakpoint; i >= 0; ) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), 
                        i--;
                        o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings;
                    }
                    o.breakpoints.sort((function(e, t) {
                        return o.options.mobileFirst ? e - t : t - e;
                    }));
                }
            }, t.prototype.reinit = function() {
                var t = this;
                t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, 
                t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), 
                t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), 
                t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), 
                t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), 
                t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), 
                t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), 
                t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [ t ]);
            }, t.prototype.resize = function() {
                var t = this;
                e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout((function() {
                    t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition();
                }), 50));
            }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
                var i = this;
                if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, 
                i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
                i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), 
                i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), 
                i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit();
            }, t.prototype.setCSS = function(e) {
                var t, n, i = this, o = {};
                !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", 
                n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, 
                !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", 
                i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", 
                i.$slideTrack.css(o)));
            }, t.prototype.setDimensions = function() {
                var e = this;
                !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                    padding: "0px " + e.options.centerPadding
                }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), 
                !0 === e.options.centerMode && e.$list.css({
                    padding: e.options.centerPadding + " 0px"
                })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), 
                e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), 
                e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
            }, t.prototype.setFade = function() {
                var t, n = this;
                n.$slides.each((function(i, o) {
                    t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
                        position: "relative",
                        right: t,
                        top: 0,
                        zIndex: n.options.zIndex - 2,
                        opacity: 0
                    }) : e(o).css({
                        position: "relative",
                        left: t,
                        top: 0,
                        zIndex: n.options.zIndex - 2,
                        opacity: 0
                    });
                })), n.$slides.eq(n.currentSlide).css({
                    zIndex: n.options.zIndex - 1,
                    opacity: 1
                });
            }, t.prototype.setHeight = function() {
                var e = this;
                if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.css("height", t);
                }
            }, t.prototype.setOption = t.prototype.slickSetOption = function() {
                var t, n, i, o, r, s = this, a = !1;
                if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], 
                o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), 
                "single" === r) s.options[i] = o; else if ("multiple" === r) e.each(i, (function(e, t) {
                    s.options[e] = t;
                })); else if ("responsive" === r) for (n in o) if ("array" !== e.type(s.options.responsive)) s.options.responsive = [ o[n] ]; else {
                    for (t = s.options.responsive.length - 1; t >= 0; ) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), 
                    t--;
                    s.options.responsive.push(o[n]);
                }
                a && (s.unload(), s.reinit());
            }, t.prototype.setPosition = function() {
                var e = this;
                e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), 
                e.$slider.trigger("setPosition", [ e ]);
            }, t.prototype.setProps = function() {
                var e = this, t = document.body.style;
                e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), 
                void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), 
                e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), 
                void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", 
                e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), 
                void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", 
                e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), 
                void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", 
                e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), 
                void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", 
                e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), 
                void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", 
                e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType;
            }, t.prototype.setSlideClasses = function(e) {
                var t, n, i, o, r = this;
                if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), 
                r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
                    var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                    t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, 
                    n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 
                    0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), 
                    r.$slides.eq(e).addClass("slick-center");
                } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, 
                i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad();
            }, t.prototype.setupInfinite = function() {
                var t, n, i, o = this;
                if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, 
                o.slideCount > o.options.slidesToShow)) {
                    for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, 
                    t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                    for (t = 0; t < i + o.slideCount; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                    o.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                        e(this).attr("id", "");
                    }));
                }
            }, t.prototype.interrupt = function(e) {
                var t = this;
                e || t.autoPlay(), t.interrupted = e;
            }, t.prototype.selectHandler = function(t) {
                var n = this, i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"), o = parseInt(i.attr("data-slick-index"));
                o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o);
            }, t.prototype.slideHandler = function(e, t, n) {
                var i, o, r, s, a, l = null, c = this;
                if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e)) if (!1 === t && c.asNavFor(e), 
                i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, 
                !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, 
                !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, (function() {
                    c.postSlide(i);
                })) : c.postSlide(i)); else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, 
                !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, (function() {
                    c.postSlide(i);
                })) : c.postSlide(i)); else {
                    if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, 
                    c.animating = !0, c.$slider.trigger("beforeChange", [ c, c.currentSlide, o ]), r = c.currentSlide, 
                    c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), 
                    c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(r), 
                    c.fadeSlide(o, (function() {
                        c.postSlide(o);
                    }))) : c.postSlide(o), void c.animateHeight();
                    !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(l, (function() {
                        c.postSlide(o);
                    })) : c.postSlide(o);
                }
            }, t.prototype.startLoad = function() {
                var e = this;
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), 
                e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), 
                e.$slider.addClass("slick-loading");
            }, t.prototype.swipeDirection = function() {
                var e, t, n, i, o = this;
                return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, 
                n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), 
                i <= 45 && i >= 0 || i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical";
            }, t.prototype.swipeEnd = function(e) {
                var t, n, i = this;
                if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
                if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
                if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [ i, i.swipeDirection() ]), 
                i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                    switch (n = i.swipeDirection()) {
                      case "left":
                      case "down":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), 
                        i.currentDirection = 0;
                        break;

                      case "right":
                      case "up":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), 
                        i.currentDirection = 1;
                    }
                    "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [ i, n ]));
                } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), 
                i.touchObject = {});
            }, t.prototype.swipeHandler = function(e) {
                var t = this;
                if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, 
                t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), 
                e.data.action) {
                  case "start":
                    t.swipeStart(e);
                    break;

                  case "move":
                    t.swipeMove(e);
                    break;

                  case "end":
                    t.swipeEnd(e);
                }
            }, t.prototype.swipeMove = function(e) {
                var t, n, i, o, r, s, a = this;
                return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), 
                a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, 
                a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), 
                s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), 
                !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), 
                n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, 
                e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), 
                !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), 
                i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, 
                a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, 
                !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, 
                !1) : void a.setCSS(a.swipeLeft))));
            }, t.prototype.swipeStart = function(e) {
                var t, n = this;
                if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, 
                !1;
                void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), 
                n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, 
                n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, 
                n.dragging = !0;
            }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
                var e = this;
                null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), 
                e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
            }, t.prototype.unload = function() {
                var t = this;
                e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), 
                t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
            }, t.prototype.unslick = function(e) {
                var t = this;
                t.$slider.trigger("unslick", [ t, e ]), t.destroy();
            }, t.prototype.updateArrows = function() {
                var e = this;
                Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 
                e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
                e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
                e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
            }, t.prototype.updateDots = function() {
                var e = this;
                null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"));
            }, t.prototype.visibility = function() {
                var e = this;
                e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1);
            }, e.fn.slick = function() {
                var e, n, i = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = i.length;
                for (e = 0; e < s; e++) if ("object" == typeof o || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), 
                void 0 !== n) return n;
                return i;
            };
        }(i);
    }));
    const r = () => {
        const e = ".kdz-accordion", t = ".kdz-accItem", n = ".kdz-accPane", i = ".kdz-accHead", o = "yes" === $(e).data("closed-other");
        $(`${t} ${i}`).on("click", (function(e) {
            e.preventDefault();
            const i = $(this).closest(t), r = i.hasClass("active"), s = $(n, i);
            r ? (i.removeClass("active"), s.stop().slideUp()) : (o && ($(t).removeClass("active"), 
            $(n).stop().slideUp()), i.addClass("active"), s.stop().slideDown());
        })), "yes" === $(e).data("first-open") && $(`${t}:first-child ${i}`).trigger("click"), 
        window.location.hash && (((e, t, n) => {
            const i = $(`${t}${e} ${n}`);
            $("html,body").animate({
                scrollTop: i.offset().top
            }, "slow");
        })(window.location.hash, t, i), $(`${t}${window.location.hash} ${i}`).trigger("click"));
    };
    window.$ = window.jQuery = i, i((function() {
        $(".single-item").slick(), alert(1), r(), console.log("hello");
    }));
}));
