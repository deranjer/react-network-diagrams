"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _underscore = _interopRequireDefault(require("underscore"));
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
 * Gets an x, y, labelPosition, textAnchor and rotation and
 * renders a label based on the position.
 * The label can be a single string, or an array of strings
 * to display on multiple lines.
 */
var Label = exports.Label = /*#__PURE__*/function (_React$Component) {
  _inherits(Label, _React$Component);
  var _super = _createSuper(Label);
  function Label() {
    _classCallCheck(this, Label);
    return _super.apply(this, arguments);
  }
  _createClass(Label, [{
    key: "render",
    value: function render() {
      var _this = this;
      var label = [];
      if (!_underscore["default"].isArray(this.props.label)) {
        label.push(this.props.label);
      } else {
        label = _underscore["default"].clone(this.props.label);
      }
      var elements = [];
      var labelX = this.props.x;
      var labelY = this.props.y;
      var labelR = this.props.r;
      var textAnchor = this.props.textAnchor ? this.props.textAnchor : "middle";
      var rotate = "rotate(".concat(labelR, " ").concat(labelX, ", ").concat(labelY, ")");
      var fontOffset = this.props.style.fontSize ? this.props.style.fontSize : 10;
      var yOffset = this.props.yOffset;
      var xOffset = this.props.xOffset;
      if (this.props.labelPosition === "top" || this.props.labelPosition === "center") {
        label.reverse();
      }
      var x;
      var y;
      var centerY;
      if (this.props.labelPosition === "center") {
        centerY = labelY + label.length / 2 * fontOffset;
      }
      _underscore["default"].each(label, function (line, lineIndex) {
        x = labelX + xOffset;
        switch (_this.props.labelPosition) {
          case "top":
            y = labelY - yOffset - lineIndex * fontOffset;
            break;
          case "bottom":
            y = labelY + yOffset + fontOffset + lineIndex * fontOffset;
            break;
          case "center":
            y = centerY - yOffset - lineIndex * fontOffset;
            break;
          default:
            break;
        }
        elements.push( /*#__PURE__*/_react["default"].createElement("tspan", {
          x: x,
          y: y,
          key: "label-line-" + lineIndex
        }, line));
      });
      return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("text", {
        textAnchor: textAnchor,
        style: this.props.style,
        key: "connection-label",
        transform: rotate,
        className: this.props.labelClassed
      }, elements));
    }
  }]);
  return Label;
}(_react["default"].Component);
Label.propTypes = {
  r: _propTypes["default"].number,
  /**
   * Horizontal distance from the center line to offset the connection label.
   */
  xOffset: _propTypes["default"].number,
  /**
   * Vertical distance from the center line to offset the connection label.
   */
  yOffset: _propTypes["default"].number
};
Label.defaultProps = {
  r: 0,
  xOffset: 0,
  yOffset: 0
};