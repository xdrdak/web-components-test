(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var r;
  var o = {};
  var f = [];
  var e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function c(n2, l4) {
    for (var u4 in l4)
      n2[u4] = l4[u4];
    return n2;
  }
  function s(n2) {
    var l4 = n2.parentNode;
    l4 && l4.removeChild(n2);
  }
  function a(n2, l4, u4) {
    var i4, t3, r4, o3 = arguments, f3 = {};
    for (r4 in l4)
      r4 == "key" ? i4 = l4[r4] : r4 == "ref" ? t3 = l4[r4] : f3[r4] = l4[r4];
    if (arguments.length > 3)
      for (u4 = [u4], r4 = 3; r4 < arguments.length; r4++)
        u4.push(o3[r4]);
    if (u4 != null && (f3.children = u4), typeof n2 == "function" && n2.defaultProps != null)
      for (r4 in n2.defaultProps)
        f3[r4] === void 0 && (f3[r4] = n2.defaultProps[r4]);
    return v(n2, f3, i4, t3, null);
  }
  function v(l4, u4, i4, t3, r4) {
    var o3 = {type: l4, props: u4, key: i4, ref: t3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r4 == null ? ++n.__v : r4};
    return n.vnode != null && n.vnode(o3), o3;
  }
  function y(n2) {
    return n2.children;
  }
  function p(n2, l4) {
    this.props = n2, this.context = l4;
  }
  function d(n2, l4) {
    if (l4 == null)
      return n2.__ ? d(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u4; l4 < n2.__k.length; l4++)
      if ((u4 = n2.__k[l4]) != null && u4.__e != null)
        return u4.__e;
    return typeof n2.type == "function" ? d(n2) : null;
  }
  function _(n2) {
    var l4, u4;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l4 = 0; l4 < n2.__k.length; l4++)
        if ((u4 = n2.__k[l4]) != null && u4.__e != null) {
          n2.__e = n2.__c.base = u4.__e;
          break;
        }
      return _(n2);
    }
  }
  function k(l4) {
    (!l4.__d && (l4.__d = true) && u.push(l4) && !m.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(m);
  }
  function m() {
    for (var n2; m.__r = u.length; )
      n2 = u.sort(function(n3, l4) {
        return n3.__v.__b - l4.__v.__b;
      }), u = [], n2.some(function(n3) {
        var l4, u4, i4, t3, r4, o3;
        n3.__d && (r4 = (t3 = (l4 = n3).__v).__e, (o3 = l4.__P) && (u4 = [], (i4 = c({}, t3)).__v = t3.__v + 1, T(o3, t3, i4, l4.__n, o3.ownerSVGElement !== void 0, t3.__h != null ? [r4] : null, u4, r4 == null ? d(t3) : r4, t3.__h), j(u4, t3), t3.__e != r4 && _(t3)));
      });
  }
  function b(n2, l4, u4, i4, t3, r4, e3, c4, s3, a4) {
    var h, p3, _2, k2, m3, b3, w2, A2 = i4 && i4.__k || f, P2 = A2.length;
    for (u4.__k = [], h = 0; h < l4.length; h++)
      if ((k2 = u4.__k[h] = (k2 = l4[h]) == null || typeof k2 == "boolean" ? null : typeof k2 == "string" || typeof k2 == "number" ? v(null, k2, null, null, k2) : Array.isArray(k2) ? v(y, {children: k2}, null, null, null) : k2.__b > 0 ? v(k2.type, k2.props, k2.key, null, k2.__v) : k2) != null) {
        if (k2.__ = u4, k2.__b = u4.__b + 1, (_2 = A2[h]) === null || _2 && k2.key == _2.key && k2.type === _2.type)
          A2[h] = void 0;
        else
          for (p3 = 0; p3 < P2; p3++) {
            if ((_2 = A2[p3]) && k2.key == _2.key && k2.type === _2.type) {
              A2[p3] = void 0;
              break;
            }
            _2 = null;
          }
        T(n2, k2, _2 = _2 || o, t3, r4, e3, c4, s3, a4), m3 = k2.__e, (p3 = k2.ref) && _2.ref != p3 && (w2 || (w2 = []), _2.ref && w2.push(_2.ref, null, k2), w2.push(p3, k2.__c || m3, k2)), m3 != null ? (b3 == null && (b3 = m3), typeof k2.type == "function" && k2.__k != null && k2.__k === _2.__k ? k2.__d = s3 = g(k2, s3, n2) : s3 = x(n2, k2, _2, A2, m3, s3), a4 || u4.type !== "option" ? typeof u4.type == "function" && (u4.__d = s3) : n2.value = "") : s3 && _2.__e == s3 && s3.parentNode != n2 && (s3 = d(_2));
      }
    for (u4.__e = b3, h = P2; h--; )
      A2[h] != null && (typeof u4.type == "function" && A2[h].__e != null && A2[h].__e == u4.__d && (u4.__d = d(i4, h + 1)), L(A2[h], A2[h]));
    if (w2)
      for (h = 0; h < w2.length; h++)
        I(w2[h], w2[++h], w2[++h]);
  }
  function g(n2, l4, u4) {
    var i4, t3;
    for (i4 = 0; i4 < n2.__k.length; i4++)
      (t3 = n2.__k[i4]) && (t3.__ = n2, l4 = typeof t3.type == "function" ? g(t3, l4, u4) : x(u4, t3, t3, n2.__k, t3.__e, l4));
    return l4;
  }
  function x(n2, l4, u4, i4, t3, r4) {
    var o3, f3, e3;
    if (l4.__d !== void 0)
      o3 = l4.__d, l4.__d = void 0;
    else if (u4 == null || t3 != r4 || t3.parentNode == null)
      n:
        if (r4 == null || r4.parentNode !== n2)
          n2.appendChild(t3), o3 = null;
        else {
          for (f3 = r4, e3 = 0; (f3 = f3.nextSibling) && e3 < i4.length; e3 += 2)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, r4), o3 = r4;
        }
    return o3 !== void 0 ? o3 : t3.nextSibling;
  }
  function A(n2, l4, u4, i4, t3) {
    var r4;
    for (r4 in u4)
      r4 === "children" || r4 === "key" || r4 in l4 || C(n2, r4, null, u4[r4], i4);
    for (r4 in l4)
      t3 && typeof l4[r4] != "function" || r4 === "children" || r4 === "key" || r4 === "value" || r4 === "checked" || u4[r4] === l4[r4] || C(n2, r4, l4[r4], u4[r4], i4);
  }
  function P(n2, l4, u4) {
    l4[0] === "-" ? n2.setProperty(l4, u4) : n2[l4] = u4 == null ? "" : typeof u4 != "number" || e.test(l4) ? u4 : u4 + "px";
  }
  function C(n2, l4, u4, i4, t3) {
    var r4;
    n:
      if (l4 === "style")
        if (typeof u4 == "string")
          n2.style.cssText = u4;
        else {
          if (typeof i4 == "string" && (n2.style.cssText = i4 = ""), i4)
            for (l4 in i4)
              u4 && l4 in u4 || P(n2.style, l4, "");
          if (u4)
            for (l4 in u4)
              i4 && u4[l4] === i4[l4] || P(n2.style, l4, u4[l4]);
        }
      else if (l4[0] === "o" && l4[1] === "n")
        r4 = l4 !== (l4 = l4.replace(/Capture$/, "")), l4 = l4.toLowerCase() in n2 ? l4.toLowerCase().slice(2) : l4.slice(2), n2.l || (n2.l = {}), n2.l[l4 + r4] = u4, u4 ? i4 || n2.addEventListener(l4, r4 ? H : $, r4) : n2.removeEventListener(l4, r4 ? H : $, r4);
      else if (l4 !== "dangerouslySetInnerHTML") {
        if (t3)
          l4 = l4.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (l4 !== "href" && l4 !== "list" && l4 !== "form" && l4 !== "download" && l4 in n2)
          try {
            n2[l4] = u4 == null ? "" : u4;
            break n;
          } catch (n3) {
          }
        typeof u4 == "function" || (u4 != null && (u4 !== false || l4[0] === "a" && l4[1] === "r") ? n2.setAttribute(l4, u4) : n2.removeAttribute(l4));
      }
  }
  function $(l4) {
    this.l[l4.type + false](n.event ? n.event(l4) : l4);
  }
  function H(l4) {
    this.l[l4.type + true](n.event ? n.event(l4) : l4);
  }
  function T(l4, u4, i4, t3, r4, o3, f3, e3, s3) {
    var a4, v3, h, d2, _2, k2, m3, g3, w2, x3, A2, P2 = u4.type;
    if (u4.constructor !== void 0)
      return null;
    i4.__h != null && (s3 = i4.__h, e3 = u4.__e = i4.__e, u4.__h = null, o3 = [e3]), (a4 = n.__b) && a4(u4);
    try {
      n:
        if (typeof P2 == "function") {
          if (g3 = u4.props, w2 = (a4 = P2.contextType) && t3[a4.__c], x3 = a4 ? w2 ? w2.props.value : a4.__ : t3, i4.__c ? m3 = (v3 = u4.__c = i4.__c).__ = v3.__E : ("prototype" in P2 && P2.prototype.render ? u4.__c = v3 = new P2(g3, x3) : (u4.__c = v3 = new p(g3, x3), v3.constructor = P2, v3.render = M), w2 && w2.sub(v3), v3.props = g3, v3.state || (v3.state = {}), v3.context = x3, v3.__n = t3, h = v3.__d = true, v3.__h = []), v3.__s == null && (v3.__s = v3.state), P2.getDerivedStateFromProps != null && (v3.__s == v3.state && (v3.__s = c({}, v3.__s)), c(v3.__s, P2.getDerivedStateFromProps(g3, v3.__s))), d2 = v3.props, _2 = v3.state, h)
            P2.getDerivedStateFromProps == null && v3.componentWillMount != null && v3.componentWillMount(), v3.componentDidMount != null && v3.__h.push(v3.componentDidMount);
          else {
            if (P2.getDerivedStateFromProps == null && g3 !== d2 && v3.componentWillReceiveProps != null && v3.componentWillReceiveProps(g3, x3), !v3.__e && v3.shouldComponentUpdate != null && v3.shouldComponentUpdate(g3, v3.__s, x3) === false || u4.__v === i4.__v) {
              v3.props = g3, v3.state = v3.__s, u4.__v !== i4.__v && (v3.__d = false), v3.__v = u4, u4.__e = i4.__e, u4.__k = i4.__k, v3.__h.length && f3.push(v3);
              break n;
            }
            v3.componentWillUpdate != null && v3.componentWillUpdate(g3, v3.__s, x3), v3.componentDidUpdate != null && v3.__h.push(function() {
              v3.componentDidUpdate(d2, _2, k2);
            });
          }
          v3.context = x3, v3.props = g3, v3.state = v3.__s, (a4 = n.__r) && a4(u4), v3.__d = false, v3.__v = u4, v3.__P = l4, a4 = v3.render(v3.props, v3.state, v3.context), v3.state = v3.__s, v3.getChildContext != null && (t3 = c(c({}, t3), v3.getChildContext())), h || v3.getSnapshotBeforeUpdate == null || (k2 = v3.getSnapshotBeforeUpdate(d2, _2)), A2 = a4 != null && a4.type === y && a4.key == null ? a4.props.children : a4, b(l4, Array.isArray(A2) ? A2 : [A2], u4, i4, t3, r4, o3, f3, e3, s3), v3.base = u4.__e, u4.__h = null, v3.__h.length && f3.push(v3), m3 && (v3.__E = v3.__ = null), v3.__e = false;
        } else
          o3 == null && u4.__v === i4.__v ? (u4.__k = i4.__k, u4.__e = i4.__e) : u4.__e = z(i4.__e, u4, i4, t3, r4, o3, f3, s3);
      (a4 = n.diffed) && a4(u4);
    } catch (l5) {
      u4.__v = null, (s3 || o3 != null) && (u4.__e = e3, u4.__h = !!s3, o3[o3.indexOf(e3)] = null), n.__e(l5, u4, i4);
    }
  }
  function j(l4, u4) {
    n.__c && n.__c(u4, l4), l4.some(function(u5) {
      try {
        l4 = u5.__h, u5.__h = [], l4.some(function(n2) {
          n2.call(u5);
        });
      } catch (l5) {
        n.__e(l5, u5.__v);
      }
    });
  }
  function z(n2, l4, u4, i4, t3, r4, e3, c4) {
    var a4, v3, h, y2, p3 = u4.props, d2 = l4.props, _2 = l4.type, k2 = 0;
    if (_2 === "svg" && (t3 = true), r4 != null) {
      for (; k2 < r4.length; k2++)
        if ((a4 = r4[k2]) && (a4 === n2 || (_2 ? a4.localName == _2 : a4.nodeType == 3))) {
          n2 = a4, r4[k2] = null;
          break;
        }
    }
    if (n2 == null) {
      if (_2 === null)
        return document.createTextNode(d2);
      n2 = t3 ? document.createElementNS("http://www.w3.org/2000/svg", _2) : document.createElement(_2, d2.is && d2), r4 = null, c4 = false;
    }
    if (_2 === null)
      p3 === d2 || c4 && n2.data === d2 || (n2.data = d2);
    else {
      if (r4 = r4 && f.slice.call(n2.childNodes), v3 = (p3 = u4.props || o).dangerouslySetInnerHTML, h = d2.dangerouslySetInnerHTML, !c4) {
        if (r4 != null)
          for (p3 = {}, y2 = 0; y2 < n2.attributes.length; y2++)
            p3[n2.attributes[y2].name] = n2.attributes[y2].value;
        (h || v3) && (h && (v3 && h.__html == v3.__html || h.__html === n2.innerHTML) || (n2.innerHTML = h && h.__html || ""));
      }
      if (A(n2, d2, p3, t3, c4), h)
        l4.__k = [];
      else if (k2 = l4.props.children, b(n2, Array.isArray(k2) ? k2 : [k2], l4, u4, i4, t3 && _2 !== "foreignObject", r4, e3, n2.firstChild, c4), r4 != null)
        for (k2 = r4.length; k2--; )
          r4[k2] != null && s(r4[k2]);
      c4 || ("value" in d2 && (k2 = d2.value) !== void 0 && (k2 !== n2.value || _2 === "progress" && !k2) && C(n2, "value", k2, p3.value, false), "checked" in d2 && (k2 = d2.checked) !== void 0 && k2 !== n2.checked && C(n2, "checked", k2, p3.checked, false));
    }
    return n2;
  }
  function I(l4, u4, i4) {
    try {
      typeof l4 == "function" ? l4(u4) : l4.current = u4;
    } catch (l5) {
      n.__e(l5, i4);
    }
  }
  function L(l4, u4, i4) {
    var t3, r4, o3;
    if (n.unmount && n.unmount(l4), (t3 = l4.ref) && (t3.current && t3.current !== l4.__e || I(t3, null, u4)), i4 || typeof l4.type == "function" || (i4 = (r4 = l4.__e) != null), l4.__e = l4.__d = void 0, (t3 = l4.__c) != null) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (l5) {
          n.__e(l5, u4);
        }
      t3.base = t3.__P = null;
    }
    if (t3 = l4.__k)
      for (o3 = 0; o3 < t3.length; o3++)
        t3[o3] && L(t3[o3], u4, i4);
    r4 != null && s(r4);
  }
  function M(n2, l4, u4) {
    return this.constructor(n2, u4);
  }
  function N(l4, u4, i4) {
    var t3, r4, e3;
    n.__ && n.__(l4, u4), r4 = (t3 = typeof i4 == "function") ? null : i4 && i4.__k || u4.__k, e3 = [], T(u4, l4 = (!t3 && i4 || u4).__k = a(y, null, [l4]), r4 || o, o, u4.ownerSVGElement !== void 0, !t3 && i4 ? [i4] : r4 ? null : u4.firstChild ? f.slice.call(u4.childNodes) : null, e3, !t3 && i4 ? i4 : r4 ? r4.__e : u4.firstChild, t3), j(e3, l4);
  }
  function O(n2, l4) {
    N(n2, l4, O);
  }
  function S(n2, l4, u4) {
    var i4, t3, r4, o3 = arguments, f3 = c({}, n2.props);
    for (r4 in l4)
      r4 == "key" ? i4 = l4[r4] : r4 == "ref" ? t3 = l4[r4] : f3[r4] = l4[r4];
    if (arguments.length > 3)
      for (u4 = [u4], r4 = 3; r4 < arguments.length; r4++)
        u4.push(o3[r4]);
    return u4 != null && (f3.children = u4), v(n2.type, f3, i4 || n2.key, t3 || n2.ref, null);
  }
  n = {__e: function(n2, l4) {
    for (var u4, i4, t3; l4 = l4.__; )
      if ((u4 = l4.__c) && !u4.__)
        try {
          if ((i4 = u4.constructor) && i4.getDerivedStateFromError != null && (u4.setState(i4.getDerivedStateFromError(n2)), t3 = u4.__d), u4.componentDidCatch != null && (u4.componentDidCatch(n2), t3 = u4.__d), t3)
            return u4.__E = u4;
        } catch (l5) {
          n2 = l5;
        }
    throw n2;
  }, __v: 0}, l = function(n2) {
    return n2 != null && n2.constructor === void 0;
  }, p.prototype.setState = function(n2, l4) {
    var u4;
    u4 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = c({}, this.state), typeof n2 == "function" && (n2 = n2(c({}, u4), this.props)), n2 && c(u4, n2), n2 != null && this.__v && (l4 && this.__h.push(l4), k(this));
  }, p.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), k(this));
  }, p.prototype.render = y, u = [], i = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, m.__r = 0, r = 0;

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var u2;
  var r2;
  var o2 = 0;
  var i2 = [];
  var c2 = n.__b;
  var f2 = n.__r;
  var e2 = n.diffed;
  var a2 = n.__c;
  var v2 = n.unmount;
  function m2(t3, r4) {
    n.__h && n.__h(u2, t3, o2 || r4), o2 = 0;
    var i4 = u2.__H || (u2.__H = {__: [], __h: []});
    return t3 >= i4.__.length && i4.__.push({}), i4.__[t3];
  }
  function l2(n2) {
    return o2 = 1, p2(w, n2);
  }
  function p2(n2, r4, o3) {
    var i4 = m2(t2++, 2);
    return i4.t = n2, i4.__c || (i4.__ = [o3 ? o3(r4) : w(void 0, r4), function(n3) {
      var t3 = i4.t(i4.__[0], n3);
      i4.__[0] !== t3 && (i4.__ = [t3, i4.__[1]], i4.__c.setState({}));
    }], i4.__c = u2), i4.__;
  }
  function x2() {
    i2.forEach(function(t3) {
      if (t3.__P)
        try {
          t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), t3.__H.__h = [];
        } catch (u4) {
          t3.__H.__h = [], n.__e(u4, t3.__v);
        }
    }), i2 = [];
  }
  n.__b = function(n2) {
    u2 = null, c2 && c2(n2);
  }, n.__r = function(n2) {
    f2 && f2(n2), t2 = 0;
    var r4 = (u2 = n2.__c).__H;
    r4 && (r4.__h.forEach(g2), r4.__h.forEach(j2), r4.__h = []);
  }, n.diffed = function(t3) {
    e2 && e2(t3);
    var o3 = t3.__c;
    o3 && o3.__H && o3.__H.__h.length && (i2.push(o3) !== 1 && r2 === n.requestAnimationFrame || ((r2 = n.requestAnimationFrame) || function(n2) {
      var t4, u4 = function() {
        clearTimeout(r4), b2 && cancelAnimationFrame(t4), setTimeout(n2);
      }, r4 = setTimeout(u4, 100);
      b2 && (t4 = requestAnimationFrame(u4));
    })(x2)), u2 = void 0;
  }, n.__c = function(t3, u4) {
    u4.some(function(t4) {
      try {
        t4.__h.forEach(g2), t4.__h = t4.__h.filter(function(n2) {
          return !n2.__ || j2(n2);
        });
      } catch (r4) {
        u4.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), u4 = [], n.__e(r4, t4.__v);
      }
    }), a2 && a2(t3, u4);
  }, n.unmount = function(t3) {
    v2 && v2(t3);
    var u4 = t3.__c;
    if (u4 && u4.__H)
      try {
        u4.__H.__.forEach(g2);
      } catch (t4) {
        n.__e(t4, u4.__v);
      }
  };
  var b2 = typeof requestAnimationFrame == "function";
  function g2(n2) {
    var t3 = u2;
    typeof n2.__c == "function" && n2.__c(), u2 = t3;
  }
  function j2(n2) {
    var t3 = u2;
    n2.__c = n2.__(), u2 = t3;
  }
  function w(n2, t3) {
    return typeof t3 == "function" ? t3(n2) : t3;
  }

  // node_modules/preact-custom-element/dist/preact-custom-element.esm.js
  function r3() {
    return (r3 = Object.assign || function(t3) {
      for (var e3 = 1; e3 < arguments.length; e3++) {
        var n2 = arguments[e3];
        for (var o3 in n2)
          Object.prototype.hasOwnProperty.call(n2, o3) && (t3[o3] = n2[o3]);
      }
      return t3;
    }).apply(this, arguments);
  }
  function i3(t3) {
    this.getChildContext = function() {
      return t3.context;
    };
    var e3 = t3.children, n2 = function(t4, e4) {
      if (t4 == null)
        return {};
      var n3, o3, r4 = {}, i4 = Object.keys(t4);
      for (o3 = 0; o3 < i4.length; o3++)
        e4.indexOf(n3 = i4[o3]) >= 0 || (r4[n3] = t4[n3]);
      return r4;
    }(t3, ["context", "children"]);
    return S(e3, n2);
  }
  function a3() {
    var o3 = new CustomEvent("_preact", {detail: {}, bubbles: true, cancelable: true});
    this.dispatchEvent(o3), this._vdom = a(i3, r3({}, this._props, {context: o3.detail.context}), function e3(n2, o4) {
      if (n2.nodeType === 3)
        return n2.data;
      if (n2.nodeType !== 1)
        return null;
      var r4 = [], i4 = {}, a4 = 0, c4 = n2.attributes, l4 = n2.childNodes;
      for (a4 = c4.length; a4--; )
        c4[a4].name !== "slot" && (i4[c4[a4].name] = c4[a4].value, i4[s2(c4[a4].name)] = c4[a4].value);
      for (a4 = l4.length; a4--; ) {
        var p3 = e3(l4[a4], null), d2 = l4[a4].slot;
        d2 ? i4[d2] = a(u3, {name: d2}, p3) : r4[a4] = p3;
      }
      var h = o4 ? a(u3, null, r4) : r4;
      return a(o4 || n2.nodeName.toLowerCase(), i4, h);
    }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? O : N)(this._vdom, this._root);
  }
  function s2(t3) {
    return t3.replace(/-(\w)/g, function(t4, e3) {
      return e3 ? e3.toUpperCase() : "";
    });
  }
  function c3(t3, e3, r4) {
    if (this._vdom) {
      var i4 = {};
      i4[t3] = r4 = r4 == null ? void 0 : r4, i4[s2(t3)] = r4, this._vdom = S(this._vdom, i4), N(this._vdom, this._root);
    }
  }
  function l3() {
    N(this._vdom = null, this._root);
  }
  function u3(e3, n2) {
    var o3 = this;
    return a("slot", r3({}, e3, {ref: function(t3) {
      t3 ? (o3.ref = t3, o3._listener || (o3._listener = function(t4) {
        t4.stopPropagation(), t4.detail.context = n2;
      }, t3.addEventListener("_preact", o3._listener))) : o3.ref.removeEventListener("_preact", o3._listener);
    }}));
  }
  function preact_custom_element_esm_default(t3, e3, n2, o3) {
    function r4() {
      var e4 = Reflect.construct(HTMLElement, [], r4);
      return e4._vdomComponent = t3, e4._root = o3 && o3.shadow ? e4.attachShadow({mode: "open"}) : e4, e4;
    }
    return (r4.prototype = Object.create(HTMLElement.prototype)).constructor = r4, r4.prototype.connectedCallback = a3, r4.prototype.attributeChangedCallback = c3, r4.prototype.disconnectedCallback = l3, n2 = n2 || t3.observedAttributes || Object.keys(t3.propTypes || {}), r4.observedAttributes = n2, n2.forEach(function(t4) {
      Object.defineProperty(r4.prototype, t4, {get: function() {
        return this._vdom.props[t4];
      }, set: function(e4) {
        this._vdom ? this.attributeChangedCallback(t4, null, e4) : (this._props || (this._props = {}), this._props[t4] = e4, this.connectedCallback());
        var n3 = typeof e4;
        e4 != null && n3 !== "string" && n3 !== "boolean" && n3 !== "number" || this.setAttribute(t4, e4);
      }});
    }), customElements.define(e3 || t3.tagName || t3.displayName || t3.name, r4);
  }

  // index.js
  var Greeting = ({name = "World"}) => {
    const [count, setCount] = l2(0);
    const increment = () => setCount(count + 1);
    return /* @__PURE__ */ a("div", null, /* @__PURE__ */ a("p", null, "Hello, ", name, "!"), /* @__PURE__ */ a("button", {
      type: "button",
      onClick: () => {
        console.log("Hello", name);
      }
    }, "I will log out the name"), /* @__PURE__ */ a("br", null), /* @__PURE__ */ a("br", null), "Count: ", count, /* @__PURE__ */ a("button", {
      type: "button",
      onClick: () => {
        increment();
      }
    }, "increment"), /* @__PURE__ */ a("br", null), /* @__PURE__ */ a("br", null), /* @__PURE__ */ a("button", {
      type: "button",
      onClick: (e3) => {
        const event = new CustomEvent("magicgreet", {
          bubbles: true,
          detail: {count}
        });
        e3.target.dispatchEvent(event);
      }
    }, "I will dispatch an event called magic greet that has the count"));
  };
  preact_custom_element_esm_default(Greeting, "x-greeting", ["name"]);
})();
