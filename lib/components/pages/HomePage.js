"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Navigation = _interopRequireDefault(require("../Navigation"));

var _Main = _interopRequireDefault(require("../Main"));

var _Footer = _interopRequireDefault(require("../Footer"));

var _About = _interopRequireDefault(require("../About"));

var _Summary = _interopRequireDefault(require("../Summary"));

var _Projects = _interopRequireDefault(require("../Projects"));

var _Contact = _interopRequireDefault(require("../Contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HomePage = function HomePage() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Navigation["default"], null), /*#__PURE__*/_react["default"].createElement(_Main["default"], null), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null), /*#__PURE__*/_react["default"].createElement(_About["default"], null), /*#__PURE__*/_react["default"].createElement(_Summary["default"], null), /*#__PURE__*/_react["default"].createElement(_Projects["default"], null), /*#__PURE__*/_react["default"].createElement(_Contact["default"], null));
};

var _default = HomePage;
exports["default"] = _default;