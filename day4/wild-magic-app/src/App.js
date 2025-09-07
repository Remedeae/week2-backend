"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _orc = _interopRequireDefault(require("./assets/orc.svg"));
var _defeat = _interopRequireDefault(require("./assets/defeat.svg"));
var _escape = _interopRequireDefault(require("./assets/escape.svg"));
var _victory = _interopRequireDefault(require("./assets/victory.svg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function App() {
  var _useState = (0, _react.useState)("After a long battle you are exhausted, yet before you still stands a final towering orc, he's just as tired as you and just wants to go home. As he raises his blade to finish you off you feel a final spark of magic emerging from deep within you."),
    _useState2 = _slicedToArray(_useState, 2),
    combatMessage = _useState2[0],
    setCombatMessage = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    chooseSpell = _useState4[0],
    setChooseSpell = _useState4[1];
  var _useState5 = (0, _react.useState)(_orc.default),
    _useState6 = _slicedToArray(_useState5, 2),
    image = _useState6[0],
    setImage = _useState6[1];
  var fetchSpellData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(spellURL) {
      var response, data, spellEffect, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return fetch("https://www.dnd5eapi.co".concat(spellURL));
          case 1:
            response = _context.v;
            _context.n = 2;
            return response.json();
          case 2:
            data = _context.v;
            spellEffect = data.damage !== undefined ? "which deals ".concat(data.damage.damage_type.index, " damage to your foe. The orc perisches and you emerge victorious.") : "which distracts your foe and you barely manages to escape. You may live another day, but somewhere out there an orc is waiting for his time to strike you down.";
            data.damage !== undefined ? setImage(_victory.default) : setImage(_escape.default);
            return _context.a(2, spellEffect);
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.log("Error fetching spell details: ", _t);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 3]]);
    }));
    return function fetchSpellData(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var fetchSpell = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var response, data, spellID, spell, damage, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return fetch("https://www.dnd5eapi.co/api/2014/spells");
          case 1:
            response = _context2.v;
            _context2.n = 2;
            return response.json();
          case 2:
            data = _context2.v;
            spellID = Math.floor(Math.random() * data.results.length);
            spell = data.results[spellID].name;
            _context2.n = 3;
            return fetchSpellData(data.results[spellID].url);
          case 3:
            damage = _context2.v;
            return _context2.a(2, "\"".concat(spell, "\" ").concat(damage));
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            console.error("Error fetching spell: ", _t2);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 4]]);
    }));
    return function fetchSpell() {
      return _ref2.apply(this, arguments);
    };
  }();
  var rollSpellSuccess = function rollSpellSuccess() {
    return new Promise(function (resolve, reject) {
      var outcome = Math.random() * 4;
      //console.log(outcome)
      outcome >= 1 ? resolve("You cast") : reject("Your spell fizzles. The orc laughs manically at you as his blade rips your flesh and life fades from your veins .");
    });
  };
  var castSpell = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var spellSuccess, fetchedSpell, message, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            _context3.n = 1;
            return rollSpellSuccess();
          case 1:
            spellSuccess = _context3.v;
            _context3.n = 2;
            return fetchSpell();
          case 2:
            fetchedSpell = _context3.v;
            message = "".concat(spellSuccess, " ").concat(fetchedSpell);
            setCombatMessage(message);
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            setCombatMessage("".concat(_t3));
            setImage(_defeat.default);
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 3]]);
    }));
    return function castSpell() {
      return _ref3.apply(this, arguments);
    };
  }();
  var fetchSpellRequested = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(requestedSpell) {
      var response, data, spellObject, damage, spell, outcome, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            _context4.n = 1;
            return fetch("https://www.dnd5eapi.co/api/2014/spells");
          case 1:
            response = _context4.v;
            _context4.n = 2;
            return response.json();
          case 2:
            data = _context4.v;
            spellObject = data.results.filter(function (item) {
              return item.name.toLowerCase() === requestedSpell.toLowerCase();
            });
            _context4.n = 3;
            return fetchSpellData(spellObject[0].url);
          case 3:
            damage = _context4.v;
            spell = spellObject[0].name;
            outcome = "".concat(spell, " ").concat(damage); //console.log(`${spell} ${damage}`);
            setCombatMessage("You cast ".concat(outcome));
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t4 = _context4.v;
            setCombatMessage("Hubris! You did not know your spells and now you suffer a grusome death at the hands of this orc.");
            setImage(_defeat.default);
          case 5:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 4]]);
    }));
    return function fetchSpellRequested(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "home"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "home__header"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-hand-sparkles"
  }), /*#__PURE__*/React.createElement("h1", null, "Wild Magic"), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-wand-sparkles"
  })), /*#__PURE__*/React.createElement("div", {
    className: "enemy"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "Orc Enemy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "combatLog"
  }, /*#__PURE__*/React.createElement("p", null, combatMessage)), /*#__PURE__*/React.createElement("button", {
    className: "castSpellButton",
    onClick: castSpell
  }, "Unleash the magic!"), /*#__PURE__*/React.createElement("label", {
    htmlFor: "chooseSpell"
  }, "HA! I'm no random spellcaster, I cast;"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    id: "chooseSpell",
    type: "text",
    placeholder: "Enter spell name here",
    value: chooseSpell,
    onChange: function onChange(e) {
      return setChooseSpell(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "chooseCastButton",
    onClick: function onClick() {
      return fetchSpellRequested(chooseSpell);
    }
  }, "Cast!"))));
}
var _default = exports.default = App;