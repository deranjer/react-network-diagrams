"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Equipment = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _EquipmentBase = require("./EquipmentBase");
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
/**
 * An equipment is an svg rect that needs to know its width, height, and style.
 * It receives its x and y starting position from the parent rack element, or a
 * default derived from a specified offset value.
 *
 * It takes a label as well in the form of a string or list of strings if multilines are desired
 */
var Equipment = exports.Equipment = /*#__PURE__*/function (_React$Component) {
  _inherits(Equipment, _React$Component);
  var _super = _createSuper(Equipment);
  function Equipment(props) {
    var _this;
    _classCallCheck(this, Equipment);
    _this = _super.call(this, props);
    _this.state = {
      highlighted: false,
      noNavigate: _this.props.facing === "Front" && _this.props.rackFacing === "Back" || _this.props.facing === "Back" && _this.props.rackFacing === "Front" ? true : _this.props.noNavigate
    };
    _this.handleMouseOut = _this.handleMouseOut.bind(_assertThisInitialized(_this));
    _this.handleMouseOver = _this.handleMouseOver.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * User hovers over the equipment
   */
  _createClass(Equipment, [{
    key: "handleMouseOver",
    value: function handleMouseOver() {
      if (!this.state.noNavigate) {
        this.setState({
          highlighted: true
        });
      }
    }

    /**
     * Use stops hovering over equipment
     */
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut() {
      if (!this.state.noNavigate) {
        this.setState({
          highlighted: false
        });
      }
    }
  }, {
    key: "handleSelectionChanged",
    value: function handleSelectionChanged(e, value) {
      if (!this.state.noNavigate) {
        this.props.onSelectionChange(e, value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var hitStyle = {
        cursor: this.props.noNavigate ? "default" : "pointer",
        stroke: "#FFF",
        strokeWidth: 8
      };
      var navTo = this.props.navTo;
      var width;
      var stroke;
      var fill;
      var backFill = this.props.backStyle.fill;
      var overlapFill = this.props.overlapStyle.fill;
      if (this.state.highlighted && !this.props.selected) {
        width = this.props.style.line.highlighted.strokeWidth;
        stroke = this.props.style.line.highlighted.stroke;
        fill = this.props.style.line.highlighted.fill;
      } else if (this.props.selected) {
        width = this.props.style.line.selected.strokeWidth;
        stroke = this.props.style.line.selected.stroke;
        fill = this.props.style.line.selected.fill;
      } else {
        width = this.props.style.line.normal.strokeWidth;
        stroke = this.props.style.line.normal.stroke;
        fill = this.props.style.line.normal.fill;
      }
      return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement(_EquipmentBase.EquipmentBase, {
        key: "equipment-base",
        positionX: this.props.x,
        positionY: this.props.y,
        equipmentHeight: this.props.equipmentHeight,
        equipmentWidth: this.props.equipmentWidth,
        pxToInch: this.props.pxToInch,
        classed: this.props.classed,
        selected: this.props.selected,
        muted: this.props.muted,
        color: stroke,
        width: width,
        fill: fill,
        backFill: backFill,
        textAnchor: this.props.textAnchor,
        labelPosition: this.props.labelPosition,
        labelStyle: this.props.style.label,
        label: this.props.label,
        labelDirection: this.props.labelDirection,
        labelOffsetX: this.props.labelOffsetX,
        labelOffsetY: this.props.labelOffsetY,
        showHeight: this.props.showHeight,
        name: navTo,
        facing: this.props.facing,
        rackFacing: this.props.rackFacing,
        usePattern: this.props.usePattern,
        overlapping: this.props.overlapping,
        overlapFill: overlapFill
      })), /*#__PURE__*/_react["default"].createElement("g", {
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut
      }, /*#__PURE__*/_react["default"].createElement(_EquipmentBase.EquipmentBase, {
        key: "equipment-base-hit",
        positionX: this.props.x,
        positionY: this.props.y,
        equipmentHeight: this.props.equipmentHeight,
        equipmentWidth: this.props.equipmentWidth,
        pxToInch: this.props.pxToInch,
        classed: this.props.classed,
        selected: this.props.selected,
        muted: this.props.muted,
        color: hitStyle.stroke,
        width: hitStyle.strokeWidth,
        fill: fill,
        backFill: backFill,
        textAnchor: this.props.textAnchor,
        labelPosition: this.props.labelPosition,
        labelStyle: this.props.style.label,
        label: this.props.label,
        labelDirection: this.props.labelDirection,
        labelOffsetX: this.props.labelOffsetX,
        labelOffsetY: this.props.labelOffsetY,
        name: navTo,
        onSelectionChange: function onSelectionChange(e, value) {
          return _this2.handleSelectionChanged(e, value);
        },
        showHeight: this.props.showHeight,
        invisible: true,
        facing: this.props.facing,
        rackFacing: this.props.rackFacing,
        usePattern: this.props.usePattern,
        overlapping: this.props.overlapping,
        overlapFill: overlapFill
      })));
    }
  }]);
  return Equipment;
}(_react["default"].Component);
Equipment.propTypes = {
  noNavigate: _propTypes["default"].bool,
  labelPosition: _propTypes["default"].string,
  classed: _propTypes["default"].string,
  labelDirection: _propTypes["default"].string,
  selected: _propTypes["default"].bool,
  muted: _propTypes["default"].bool
};
Equipment.defaultProps = {
  noNavigate: false,
  labelPosition: "top",
  classed: "equipment",
  labelDirection: "horizontal",
  selected: false,
  muted: false
};