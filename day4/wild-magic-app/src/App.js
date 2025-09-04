"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function App() {
  var combatMesage = "PANICC!";
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
  }), /*#__PURE__*/React.createElement("div", {
    className: "combatLog"
  }, /*#__PURE__*/React.createElement("p", null, combatMesage)), /*#__PURE__*/React.createElement("button", {
    className: "castSpellButton" /* onClick={castSpell} */
  }, "Unleash the magic!")));
}
var _default = exports.default = App;