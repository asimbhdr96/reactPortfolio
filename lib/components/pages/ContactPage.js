"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Navigation = _interopRequireDefault(require("../Navigation"));

var _Contact = _interopRequireDefault(require("../Contact"));

var _Footer = _interopRequireDefault(require("../Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ContactPage = function ContactPage() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Navigation["default"], null), /*#__PURE__*/_react["default"].createElement(_Contact["default"], null), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null));
};

var _default = ContactPage;
exports["default"] = _default;