"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BidirectionalEdge = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ArcEdge = require("./ArcEdge");
var _LinearEdge = require("./LinearEdge");
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
var BidirectionalEdge = exports.BidirectionalEdge = /*#__PURE__*/function (_React$Component) {
  _inherits(BidirectionalEdge, _React$Component);
  var _super = _createSuper(BidirectionalEdge);
  function BidirectionalEdge() {
    _classCallCheck(this, BidirectionalEdge);
    return _super.apply(this, arguments);
  }
  _createClass(BidirectionalEdge, [{
    key: "render",
    value: function render() {
      var sourceToTargetName = "".concat(this.props.source, "--").concat(this.props.target);
      var targetToSourceName = "".concat(this.props.target, "--").concat(this.props.source);

      // Position of the bidirectional lines relative to the center line
      var position = this.props.width * 0.75;
      if (this.props.shape === "curved") {
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement(_ArcEdge.ArcEdge, {
          name: this.props.name,
          x1: this.props.x1,
          y1: this.props.y1,
          x2: this.props.x2,
          y2: this.props.y2,
          arrow: true,
          position: position,
          color: this.props.sourceTargetColor,
          width: this.props.width,
          classed: this.props.classed,
          key: sourceToTargetName,
          curveDirection: this.props.curveDirection,
          offset: this.props.offset,
          selected: this.props.selected,
          onSelectionChange: this.props.onSelectionChange,
          muted: this.props.muted
        }), /*#__PURE__*/_react["default"].createElement(_ArcEdge.ArcEdge, {
          name: this.props.name,
          x1: this.props.x2,
          y1: this.props.y2,
          x2: this.props.x1,
          y2: this.props.y1,
          arrow: true,
          position: position,
          color: this.props.targetSourceColor,
          width: this.props.width,
          classed: this.props.classed,
          key: targetToSourceName,
          curveDirection: this.props.curveDirection,
          offset: this.props.offset,
          selected: this.props.selected,
          onSelectionChange: this.props.onSelectionChange,
          muted: this.props.muted
        }), /*#__PURE__*/_react["default"].createElement(_ArcEdge.ArcEdge, {
          name: this.props.name,
          x1: this.props.x2,
          y1: this.props.y2,
          x2: this.props.x1,
          y2: this.props.y1,
          position: 0,
          width: 5,
          classed: this.props.classed,
          key: "".concat(sourceToTargetName, "-event-region"),
          onSelectionChange: this.props.onSelectionChange,
          curveDirection: this.props.curveDirection,
          offset: this.props.offset,
          invisible: true
        }));
      } else {
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement(_LinearEdge.LinearEdge, {
          name: this.props.name,
          x1: this.props.x1,
          y1: this.props.y1,
          x2: this.props.x2,
          y2: this.props.y2,
          arrow: true,
          color: this.props.sourceTargetColor,
          width: this.props.width,
          position: position,
          className: this.props.classed,
          key: sourceToTargetName,
          selected: this.props.selected,
          muted: this.props.muted,
          onSelectionChange: this.props.onSelectionChange
        }), /*#__PURE__*/_react["default"].createElement(_LinearEdge.LinearEdge, {
          name: this.props.name,
          x1: this.props.x2,
          y1: this.props.y2,
          x2: this.props.x1,
          y2: this.props.y1,
          arrow: true,
          color: this.props.targetSourceColor,
          width: this.props.width,
          position: position,
          className: this.props.classed,
          key: targetToSourceName,
          selected: this.props.selected,
          muted: this.props.muted,
          onSelectionChange: this.props.onSelectionChange
        }), /*#__PURE__*/_react["default"].createElement(_LinearEdge.LinearEdge, {
          name: this.props.name,
          x1: this.props.x2,
          y1: this.props.y2,
          x2: this.props.x1,
          y2: this.props.y1,
          width: 5,
          position: 0,
          className: this.props.classed,
          key: "".concat(targetToSourceName, "-event-region"),
          onSelectionChange: this.props.onSelectionChange,
          invisible: true
        }));
      }
    }
  }]);
  return BidirectionalEdge;
}(_react["default"].Component);
BidirectionalEdge.propTypes = {
  /** The width of the circuit diagram */
  width: _propTypes["default"].number,
  /**
   * This is the vertical spacing
   */
  spacing: _propTypes["default"].number,
  /** An offset to the position of the label which can be used for fine tuning */
  offset: _propTypes["default"].number,
  sourceTargetColor: _propTypes["default"].string,
  targetSourceColor: _propTypes["default"].string,
  /** Display the endpoint selected */
  selected: _propTypes["default"].bool,
  /** Display the endpoint muted */
  muted: _propTypes["default"].bool
};
BidirectionalEdge.defaultProps = {
  width: 1,
  spacing: 3.5,
  offset: 18,
  sourceTargetColor: "#C9CACC",
  targetSourceColor: "#C9CACC",
  selected: false,
  muted: false
};