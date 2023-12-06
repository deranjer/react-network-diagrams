"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EquipmentBase = void 0;
var _react = _interopRequireDefault(require("react"));
var _underscore = _interopRequireDefault(require("underscore"));
var _Label = require("./Label");
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
//17.52(w) 25.39(d) 24.49(h)
/**
 * An equipment is an svg rect that needs to know its width, height, and style.
 * It receives its x and y starting position from the parent rack element, or a
 * default derived from a specified offset value.
 *
 * It takes a label as well in the form of a string or list of strings if multilines are desired
 */
var EquipmentBase = exports.EquipmentBase = /*#__PURE__*/function (_React$Component) {
  _inherits(EquipmentBase, _React$Component);
  var _super = _createSuper(EquipmentBase);
  function EquipmentBase(props) {
    var _this;
    _classCallCheck(this, EquipmentBase);
    _this = _super.call(this, props);
    _this.state = {
      yOffset: 25,
      xOffset: 25,
      pxToInch: 10,
      labelStyle: _this.props.labelStyle
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(EquipmentBase, [{
    key: "handleClick",
    value: function handleClick(e) {
      if (this.props.onSelectionChange) {
        this.props.onSelectionChange("equipment", this.props.name);
      }
      e.stopPropagation();
    }
  }, {
    key: "render",
    value: function render() {
      var classed = "equipment";
      var labelClassed = "equipment-label";
      var styleModifier = "normal";
      if (!_underscore["default"].isUndefined(this.props.classed)) {
        classed += " " + this.props.classed;
      }
      if (this.props.selected) {
        classed += " selected";
        labelClassed += "selected";
        styleModifier = "selected";
      }
      if (this.props.muted) {
        classed += " muted";
        labelClassed += "muted";
        styleModifier = "muted";
      }
      var opacity = 1.0;
      if (this.props.invisible) {
        opacity = 0.0;
      } else if (this.props.muted) {
        opacity = 0.3;
      }

      // Height is 244.9 px
      var equipmentPxHeight = this.props.equipmentHeight * this.props.pxToInch;

      // Width is 175.2 px
      var equipmentPxWidth = this.props.equipmentWidth * this.props.pxToInch;
      var posX = this.props.positionX || 25;
      var posY = this.props.positionY || 25;
      var centerX = equipmentPxWidth / 2 + posX;
      var centerY = equipmentPxHeight / 2 + posY;
      var labelOffsetX = this.props.labelOffsetX || 0;
      var labelOffsetY = this.props.labelOffsetY || 0;
      var cx;
      var cy;
      var cr = 0;
      if (this.props.labelDirection === "vertical") {
        cr = 90;
      }
      switch (this.props.labelPosition) {
        case "top":
          cx = centerX;
          cy = posY + 12 * (this.props.pxToInch / 10);
          break;
        case "bottom":
          cx = centerX;
          cy = posY + equipmentPxHeight - 15 * (this.props.pxToInch / 10);
          break;
        default:
          cx = centerX;
          cy = centerY;
          break;
      }
      var equipmentLabel = null;
      var newLabelStyle = _underscore["default"].clone(this.state.labelStyle[styleModifier]);
      newLabelStyle.fontSize = this.props.pxToInch;
      if (this.props.selected) {
        newLabelStyle.fontSize = this.props.pxToInch * 1.2;
      } else if (this.props.muted) {
        newLabelStyle.fontSize = this.props.pxToInch * 0.8;
      }
      if (this.props.label && !(this.props.facing === "Front" && this.props.rackFacing === "Back") && !(this.props.facing === "Back" && this.props.rackFacing === "Front") && this.props.overlapping) {
        equipmentLabel = /*#__PURE__*/_react["default"].createElement(_Label.Label, {
          x: cx,
          y: cy,
          r: cr,
          textAnchor: this.props.textAnchor,
          classed: labelClassed,
          style: newLabelStyle,
          label: "**".concat(this.props.label),
          xOffset: labelOffsetX,
          yOffset: labelOffsetY,
          labelPosition: this.props.labelPosition
        });
      } else if (this.props.label && !(this.props.facing === "Front" && this.props.rackFacing === "Back") && !(this.props.facing === "Back" && this.props.rackFacing === "Front")) {
        equipmentLabel = /*#__PURE__*/_react["default"].createElement(_Label.Label, {
          x: cx,
          y: cy,
          r: cr,
          textAnchor: this.props.textAnchor,
          classed: labelClassed,
          style: newLabelStyle,
          label: this.props.label,
          xOffset: labelOffsetX,
          yOffset: labelOffsetY,
          labelPosition: this.props.labelPosition
        });
      }

      // let widthLine = null;

      var factor = this.props.pxToInch / 10;
      var vPath = "";
      vPath += "M" + (posX + 10 * factor) + "," + (posY + 5 * factor);
      vPath += " L " + (posX + 10 * factor) + " " + (posY + equipmentPxHeight - 5 * factor);
      var hTopPath = "";
      hTopPath += "M" + (posX + 7 * factor) + "," + (posY + 5 * factor);
      hTopPath += " L " + (posX + 13 * factor) + " " + (posY + 5 * factor);
      var hBottomPath = "";
      hBottomPath += "M" + (posX + 7 * factor) + "," + (posY + equipmentPxHeight - 5 * factor);
      hBottomPath += " L " + (posX + 13 * factor) + " " + (posY + equipmentPxHeight - 5 * factor);
      var heightFill = this.props.labelStyle[styleModifier];
      var heightPath = /*#__PURE__*/_react["default"].createElement("g", {
        strokeWidth: this.props.width,
        stroke: heightFill.fill,
        opacity: opacity
      }, /*#__PURE__*/_react["default"].createElement("path", {
        className: labelClassed,
        d: vPath,
        fill: heightFill.fill
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: labelClassed,
        d: hTopPath,
        fill: heightFill.fill
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: labelClassed,
        d: hBottomPath,
        fill: heightFill.fill
      }));
      var heightInRmu = this.props.equipmentHeight / 1.75;
      var heightLabel = /*#__PURE__*/_react["default"].createElement(_Label.Label, {
        x: posX + 15 * factor,
        y: centerY,
        textAnchor: "begin",
        classed: labelClassed,
        style: newLabelStyle,
        label: "".concat(heightInRmu, "U"),
        labelPosition: "center"
      });
      var backStyle = {
        fill: this.props.backFill,
        fillOpacity: "0.7"
      };
      if (this.props.usePattern) {
        backStyle = {
          fill: "url(#Pattern)"
        };
      }
      var frontStyle = {
        fill: this.props.fill
      };
      var overlapStyle = this.props.overlapFill ? {
        fill: this.props.overlapFill
      } : frontStyle;

      /**
       * Default to the front view. Only show the back view if the
       * equipment is back facing on the front of the rack,
       * or front facing on the back of the rack
       */

      var eqStyle = frontStyle;
      if (this.props.overlapping) {
        eqStyle = overlapStyle;
      }
      if (this.props.rackFacing === "Front" && this.props.facing === "Back") {
        eqStyle = backStyle;
        heightLabel = /*#__PURE__*/_react["default"].createElement("g", null);
        heightPath = /*#__PURE__*/_react["default"].createElement("g", null);
      } else if (this.props.rackFacing === "Back" && this.props.facing === "Front") {
        eqStyle = backStyle;
        heightLabel = /*#__PURE__*/_react["default"].createElement("g", null);
        heightPath = /*#__PURE__*/_react["default"].createElement("g", null);
      }

      // const eqStyle = this.props.facing === "Front" && ? frontStyle : backStyle;);

      if (!this.props.showHeight) {
        return /*#__PURE__*/_react["default"].createElement("g", {
          onClick: this.handleClick
        }, /*#__PURE__*/_react["default"].createElement("g", {
          strokeWidth: this.props.width,
          stroke: this.props.color,
          opacity: opacity
        }, /*#__PURE__*/_react["default"].createElement("rect", {
          className: classed,
          width: equipmentPxWidth,
          height: equipmentPxHeight,
          x: posX,
          y: posY,
          style: eqStyle
        })), equipmentLabel);
      } else {
        return /*#__PURE__*/_react["default"].createElement("g", {
          onClick: this.handleClick
        }, /*#__PURE__*/_react["default"].createElement("g", {
          strokeWidth: this.props.width,
          stroke: this.props.color,
          opacity: opacity
        }, /*#__PURE__*/_react["default"].createElement("rect", {
          className: classed,
          width: equipmentPxWidth,
          height: equipmentPxHeight,
          x: posX,
          y: posY,
          style: eqStyle
        })), equipmentLabel, heightPath, heightLabel);
      }
    }
  }]);
  return EquipmentBase;
}(_react["default"].Component);