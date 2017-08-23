'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _InputLabel = require('./InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable */

var TextInput = function TextInput(_ref) {
  var input = _ref.input,
      meta = _ref.meta,
      className = _ref.className,
      label = _ref.label,
      isNumericOnly = _ref.isNumericOnly,
      placeholder = _ref.placeholder,
      rest = _objectWithoutProperties(_ref, ['input', 'meta', 'className', 'label', 'isNumericOnly', 'placeholder']);

  var inputLabelClassName = (0, _classnames2.default)({
    input__label: true,
    'input__label--active': meta.active
  });

  var showPlaceholder = meta.active || meta.dirty ? placeholder : null;

  return _react2.default.createElement(
    'div',
    { className: 'input__container' },
    _react2.default.createElement('input', _extends({
      className: (0, _classnames2.default)(['input', className]),
      autoComplete: 'off',
      type: isNumericOnly ? 'number' : 'text',
      placeholder: showPlaceholder
    }, rest, input)),
    _react2.default.createElement(_InputLabel2.default, {
      active: meta.active,
      name: input.name,
      label: label,
      className: inputLabelClassName,
      errorText: meta.error
    })
  );
};

exports.default = TextInput;
module.exports = exports['default'];
//# sourceMappingURL=TextInput.js.map