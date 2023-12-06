"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleEdge = void 0;
var _underscore = _interopRequireDefault(require("underscore"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _AngledEdge = require("./AngledEdge");
var _ArcEdge = require("./ArcEdge");
var _LinearEdge = require("./LinearEdge");
var _SquareEdge = require("./SquareEdge");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); } /**
 *  Copyright (c) 2018, The Regents of the University of California,
 *  through Lawrence Berkeley National Laboratory (subject to receipt
 *  of any required approvals from the U.S. Dept. of Energy).
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree.
 */
var SimpleEdge = exports.SimpleEdge = /*#__PURE__*/function (_React$Component) {
  _inherits(SimpleEdge, _React$Component);
  var _super = _createSuper(SimpleEdge);
  function SimpleEdge() {
    _classCallCheck(this, SimpleEdge);
    return _super.apply(this, arguments);
  }
  _createClass(SimpleEdge, [{
    key: "render",
    value: function render() {
      // Class for edge
      var classed = "edge";
      if (this.props.selected) {
        classed += " selected";
      }
      if (this.props.muted) {
        classed += " muted";
      }
      if (!_underscore["default"].isUndefined(this.props.classed)) {
        classed += " " + this.props.classed;
      }

      // Render based on shape
      if (this.props.shape === "curved") {
        return /*#__PURE__*/_react["default"].createElement(_ArcEdge.ArcEdge, {
          x1: this.props.x1,
          x2: this.props.x2,
          y1: this.props.y1,
          y2: this.props.y2,
          key: this.props.name,
          label: this.props.label,
          labelPosition: this.props.labelPosition,
          labelStyle: this.props.labelStyle,
          labelOffsetX: this.props.labelOffsetX,
          labelOffsetY: this.props.labelOffsetY,
          textAnchor: this.props.textAnchor,
          color: this.props.color,
          width: this.props.width,
          selected: this.props.selected,
          muted: this.props.muted,
          classed: classed,
          arrow: this.props.arrow,
          arrowWidth: this.props.arrowWidth,
          arrowHeight: this.props.arrowHeight,
          position: this.props.position,
          curveDirection: this.props.curveDirection,
          offset: this.props.offset,
          name: this.props.name,
          invisible: this.props.invisible,
          onSelectionChange: this.props.onSelectionChange
        });
      } else if (this.props.shape === "square") {
        return /*#__PURE__*/_react["default"].createElement(_SquareEdge.SquareEdge, {
          x1: this.props.x1,
          x2: this.props.x2,
          y1: this.props.y1,
          y2: this.props.y2,
          key: this.props.name,
          label: this.props.label,
          labelPosition: this.props.labelPosition,
          labelStyle: this.props.labelStyle,
          labelOffsetX: this.props.labelOffsetX,
          labelOffsetY: this.props.labelOffsetY,
          textAnchor: this.props.textAnchor,
          color: this.props.color,
          width: this.props.width,
          selected: this.props.selected,
          muted: this.props.muted,
          classed: classed,
          roundedX: this.props.roundedX,
          roundedY: this.props.roundedY,
          fillColor: this.props.fillColor,
          size: this.props.size,
          centerLine: this.props.centerLine,
          name: this.props.name,
          invisible: this.props.invisible,
          onSelectionChange: this.props.onSelectionChange
        });
      } else if (this.props.shape === "angled") {
        return /*#__PURE__*/_react["default"].createElement(_AngledEdge.AngledEdge, {
          x1: this.props.x1,
          x2: this.props.x2,
          y1: this.props.y1,
          y2: this.props.y2,
          key: this.props.name,
          label: this.props.label,
          labelPosition: this.props.labelPosition,
          labelStyle: this.props.labelStyle,
          labelOffsetX: this.props.labelOffsetX,
          labelOffsetY: this.props.labelOffsetY,
          textAnchor: this.props.textAnchor,
          color: this.props.color,
          width: this.props.width,
          selected: this.props.selected,
          muted: this.props.muted,
          classed: classed,
          arrow: this.props.arrow,
          arrowWidth: this.props.arrowWidth,
          arrowHeight: this.props.arrowHeight,
          position: this.props.position,
          curveDirection: this.props.curveDirection,
          offset: this.props.offset,
          name: this.props.name,
          invisible: this.props.invisible,
          onSelectionChange: this.props.onSelectionChange
        });
      } else {
        return /*#__PURE__*/_react["default"].createElement(_LinearEdge.LinearEdge, {
          x1: this.props.x1,
          x2: this.props.x2,
          y1: this.props.y1,
          y2: this.props.y2,
          key: this.props.name,
          label: this.props.label,
          labelPosition: this.props.labelPosition,
          labelStyle: this.props.labelStyle,
          labelOffsetX: this.props.labelOffsetX,
          labelOffsetY: this.props.labelOffsetY,
          textAnchor: this.props.textAnchor,
          color: this.props.color,
          width: this.props.width,
          selected: this.props.selected,
          muted: this.props.muted,
          classed: classed,
          arrow: this.props.arrow,
          arrowWidth: this.props.arrowWidth,
          arrowHeight: this.props.arrowHeight,
          position: this.props.position,
          name: this.props.name,
          invisible: this.props.invisible,
          onSelectionChange: this.props.onSelectionChange
        });
      }
    }
  }]);
  return SimpleEdge;
}(_react["default"].Component);
SimpleEdge.propTypes = {
  color: _propTypes["default"].string,
  /** The width of the circuit diagram */
  width: _propTypes["default"].number,
  /**
   * Controls the angle of the offset from the center of the line.
   */
  position: _propTypes["default"].number,
  /** Display the edge selected */
  selected: _propTypes["default"].bool,
  /** Display the edge muted */
  muted: _propTypes["default"].bool,
  /** Display the edge invisible */
  invisible: _propTypes["default"].bool,
  /**
   * Boolean value that controls if a directional arrow is drawn instead of line-caps.
   * When arrow is set to "true", the vector between x1, y1 and x2, y2 will have the
   * Line-caps replaced with a directional arrow. Arrowheads can be sized using the
   * arrowWidth and arrowHeight property.
   */
  arrow: _propTypes["default"].bool,
  /** Color of the edge */
  fillColor: _propTypes["default"].string
};
SimpleEdge.defaultProps = {
  color: "#ddd",
  width: 4,
  position: 0,
  selected: false,
  muted: false,
  invisible: false,
  arrow: false,
  fillColor: "none"
};