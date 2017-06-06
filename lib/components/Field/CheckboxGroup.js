'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _Checkboxes = require('./Checkboxes');

var _Checkboxes2 = _interopRequireDefault(_Checkboxes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
  * A checkbox list that sets thes field value to a key/value object of boolean properties
  */
var CheckboxGroup = function (_Component) {
  _inherits(CheckboxGroup, _Component);

  function CheckboxGroup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CheckboxGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call.apply(_ref, [this].concat(args))), _this), _this.onClickOption = function (clickedOption) {
      var _this$props$input = _this.props.input,
          value = _this$props$input.value,
          onChange = _this$props$input.onChange;


      onChange(_extends({}, (0, _lodash.fromPairs)((0, _lodash.map)(_this.props.options, function (option) {
        return [option, false];
      })), value || {}, _defineProperty({}, clickedOption, !value[clickedOption])));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CheckboxGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          meta = _props.meta,
          _props$input = _props.input,
          name = _props$input.name,
          value = _props$input.value;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          label
        ),
        _react2.default.createElement(_Checkboxes2.default, {
          name: name,
          options: value || (0, _lodash.fromPairs)((0, _lodash.map)(this.props.options, function (option) {
            return [option, false];
          })),
          onClickOption: this.onClickOption
        }),
        meta.invalid && _react2.default.createElement(
          'div',
          null,
          meta.error
        )
      );
    }
  }]);

  return CheckboxGroup;
}(_react.Component);

CheckboxGroup.propTypes = {
  input: _propTypes2.default.object.isRequired,
  options: _propTypes2.default.array.isRequired,
  label: _propTypes2.default.string.isRequired,
  meta: _propTypes2.default.object.isRequired
};

exports.default = CheckboxGroup;
module.exports = exports['default'];
//# sourceMappingURL=CheckboxGroup.js.map