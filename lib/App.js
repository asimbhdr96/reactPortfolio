"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _HomePage = _interopRequireDefault(require("./components/pages/HomePage"));

var _PortfolioPage = _interopRequireDefault(require("./components/pages/PortfolioPage"));

var _ContactPage = _interopRequireDefault(require("./components/pages/ContactPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = function App() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react["default"].createElement(_HomePage["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/portfolio",
    element: /*#__PURE__*/_react["default"].createElement(_PortfolioPage["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/contact",
    element: /*#__PURE__*/_react["default"].createElement(_ContactPage["default"], null)
  })));
};

var _default = App;
exports["default"] = _default;