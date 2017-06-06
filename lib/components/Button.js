'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'renderButtonIcon',
    value: function renderButtonIcon() {
      var _props = this.props,
          icon = _props.icon,
          iconPosition = _props.iconPosition;


      var iconClassNames = (0, _classnames2.default)({
        'button__icon': true,
        'button__icon--right': iconPosition === 'right'
      });

      var iconElement = null;
      if (icon) {
        if (typeof icon === 'string') {
          var Icon = require('./Icon').default;
          iconElement = _react2.default.createElement(Icon, { name: icon, className: iconClassNames });
        } else {
          iconElement = _react2.default.cloneElement(this.props.icon, { className: iconClassNames });
        }
      }
      console.log(icon);
      return iconElement;
    }
  }, {
    key: 'render',
    value: function render() {
      var _cx;

      var _props2 = this.props,
          color = _props2.color,
          size = _props2.size;


      var buttonClassNames = (0, _classnames2.default)((_cx = {
        'button': true
      }, _defineProperty(_cx, 'button--' + color, !!color), _defineProperty(_cx, 'button--' + size, !!size), _cx));

      return _react2.default.createElement(
        'button',
        { className: buttonClassNames },
        this.renderButtonIcon(),
        _react2.default.createElement(
          'span',
          { className: 'button__content' },
          this.props.children || this.props.content
        )
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  children: _propTypes2.default.node,
  icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.object]),
  iconPosition: _propTypes2.default.oneOf(['left', 'right']),
  size: _propTypes2.default.string,
  color: _propTypes2.default.string
};
exports.default = Button;
module.exports = exports['default'];
//# sourceMappingURL=Button.js.map