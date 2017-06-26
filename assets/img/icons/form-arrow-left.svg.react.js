"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 160 160" }, this.props),
        _react2.default.createElement(
          "title",
          null,
          "Form Arrow - Left"
        ),
        _react2.default.createElement("path", { className: "cls-1", d: "M0 0h160v160H0z" }),
        _react2.default.createElement("path", { className: "cls-2", d: "M80 160H0V0h80a80 80 0 0 1 80 80 80 80 0 0 1-80 80z" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "102.47", cy: "80", r: "4.53" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M73.702 59.304l6.258 6.258-20.704 20.704-6.258-6.258z" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "76.83", cy: "62.42", r: "4.42", transform: "rotate(-45 76.828 62.427)" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M59.236 86.237l6.257-6.258 14.468 14.468-6.258 6.258z" }),
        _react2.default.createElement("circle", { className: "cls-3", cx: "76.83", cy: "97.58", r: "4.42", transform: "rotate(-45 76.836 97.573)" }),
        _react2.default.createElement("path", { className: "cls-3", d: "M61.39 84.53v-9.06h41.08v9.06z" })
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

exports.default = SVG;
module.exports = exports["default"];
//# sourceMappingURL=form-arrow-left.svg.react.js.map