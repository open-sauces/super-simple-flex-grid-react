'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FlexRow = function FlexRow(_ref) {
  var children = _ref.children,
      customClass = _ref.customClass;

  var flexRowClass = (0, _classnames3.default)('flex-row', _defineProperty({}, customClass, customClass));

  return _react2.default.createElement(
    'div',
    { className: flexRowClass },
    children
  );
};

FlexRow.propTypes = {
  children: _react.PropTypes.any,
  customClass: _react.PropTypes.string
};

exports.default = FlexRow;