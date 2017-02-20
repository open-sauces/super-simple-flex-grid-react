'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testClassList = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _style = require('super-simple-flex-grid/src/style.scss');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var testClassList = function testClassList(prop) {
  return {
    center: 'test-center',
    centerH: 'test-center-h',
    centerV: 'test-center-v',
    startH: 'test-start-h',
    endH: 'test-end-h',
    startV: 'test-start-v',
    endV: 'test-end-v',
    spaceAround: 'test-space-around',
    spaceBetween: 'test-space-between',
    grow: 'test-grow-' + prop,
    shrink: 'test-shrink',
    ellipsis: 'test-ellipsis',
    noMargin: 'test-no-margin'
  };
};

var FlexCell = function FlexCell(_ref) {
  var _classnames;

  var children = _ref.children,
      customClass = _ref.customClass,
      center = _ref.center,
      centerH = _ref.centerH,
      centerV = _ref.centerV,
      startH = _ref.startH,
      startV = _ref.startV,
      endH = _ref.endH,
      endV = _ref.endV,
      spaceAround = _ref.spaceAround,
      spaceBetween = _ref.spaceBetween,
      grow = _ref.grow,
      shrink = _ref.shrink,
      ellipsis = _ref.ellipsis,
      noMargin = _ref.noMargin;

  var flexCellClass = 'flex-row__cell';
  var setClass = function setClass(modifier) {
    return flexCellClass + '--' + modifier;
  };

  var flexCellClassWithModifier = (0, _classnames3.default)(flexCellClass, (_classnames = {}, _defineProperty(_classnames, customClass, customClass), _defineProperty(_classnames, setClass(_style2.default.center || testClassList().center), center), _defineProperty(_classnames, setClass(_style2.default.centerH || testClassList().centerH), centerH), _defineProperty(_classnames, setClass(_style2.default.centerV || testClassList().centerV), centerV), _defineProperty(_classnames, setClass(_style2.default.startH || testClassList().startH), startH), _defineProperty(_classnames, setClass(_style2.default.endH || testClassList().endH), endH), _defineProperty(_classnames, setClass(_style2.default.startV || testClassList().startV), startV), _defineProperty(_classnames, setClass(_style2.default.endV || testClassList().endV), endV), _defineProperty(_classnames, setClass(_style2.default.spaceAround || testClassList().spaceAround), spaceAround), _defineProperty(_classnames, setClass(_style2.default.spaceBetween || testClassList().spaceBetween), spaceBetween), _defineProperty(_classnames, setClass('' + (_style2.default.grow || testClassList(grow).grow)), grow), _defineProperty(_classnames, setClass(_style2.default.shrink || testClassList().shrink), shrink), _defineProperty(_classnames, setClass(_style2.default.ellipsis || testClassList().ellipsis), ellipsis), _defineProperty(_classnames, setClass(_style2.default.noMargin || testClassList().noMargin), noMargin), _classnames));

  return _react2.default.createElement(
    'div',
    { className: flexCellClassWithModifier },
    !ellipsis && children,
    ellipsis && _react2.default.createElement(
      'div',
      { className: flexCellClass + '--' + (0, _classnames3.default)(_style2.default.ellipsisContent) },
      children
    )
  );
};

FlexCell.propTypes = {
  customClass: _react.PropTypes.string,
  children: _react.PropTypes.any,
  center: _react.PropTypes.bool,
  centerH: _react.PropTypes.bool,
  centerV: _react.PropTypes.bool,
  startH: _react.PropTypes.bool,
  startV: _react.PropTypes.bool,
  endH: _react.PropTypes.bool,
  endV: _react.PropTypes.bool,
  spaceAround: _react.PropTypes.bool,
  spaceBetween: _react.PropTypes.bool,
  grow: _react.PropTypes.number,
  shrink: _react.PropTypes.bool,
  ellipsis: _react.PropTypes.bool,
  noMargin: _react.PropTypes.bool
};

exports.testClassList = testClassList;
exports.default = FlexCell;