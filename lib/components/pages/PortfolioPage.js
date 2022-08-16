"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Navigation = _interopRequireDefault(require("../Navigation"));

var _Footer = _interopRequireDefault(require("../Footer"));

var _Projects = _interopRequireDefault(require("../Projects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PortfolioPage = function PortfolioPage() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Navigation["default"], null), /*#__PURE__*/_react["default"].createElement(_Projects["default"], null), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null));
};

var _default = PortfolioPage;
exports["default"] = _default;