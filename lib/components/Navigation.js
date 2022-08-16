"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Navigation = function Navigation() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "navigation"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "logo"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "index.html"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "images/logo.svg"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "primary-nav"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "index.html"
  }, "Home")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "portfolio.html"
  }, "Portfolio")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "contact.html"
  }, "Contact"))))))));
};

var _default = Navigation;
exports["default"] = _default;