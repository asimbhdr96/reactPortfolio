"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Main = function Main() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    "class": "main"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "container-fluid"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "entry-banner text-center"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    id: "hello"
  }, "Hello, I'm"), /*#__PURE__*/_react["default"].createElement("h1", {
    id: "name"
  }, "XXXX"), /*#__PURE__*/_react["default"].createElement("h1", {
    id: "person-description"
  }, "UI Developer. UX Desinger. Problem Solver."))), /*#__PURE__*/_react["default"].createElement("div", {
    "class": "row text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "banner-buttons"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    "class": "btn btn-default btn-border",
    href: "#about"
  }, "Info")), /*#__PURE__*/_react["default"].createElement("div", {
    "class": "col-sm-1 col-md-1"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    "class": "btn btn-default btn-border",
    href: "#projects"
  }, "Portfolio"))))));
};

var _default = Main;
exports["default"] = _default;