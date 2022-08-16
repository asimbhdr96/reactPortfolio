"use strict";

var _client = _interopRequireDefault(require("react-dom/client"));

var _react = _interopRequireDefault(require("react"));

var _App = _interopRequireDefault(require("./App"));

var _Main = _interopRequireDefault(require("./components/Main"));

var _reactRouterDom = require("react-router-dom");

require("./style.css");

require("./boostrap/css/bootstrap.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var root = _client["default"].createRoot(document.getElementById('root'));

root.render( /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_App["default"], null), /*#__PURE__*/_react["default"].createElement(_Main["default"], null)));