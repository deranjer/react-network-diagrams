"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PowerNode = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Node = require("./Node");
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
var PowerNode = exports.PowerNode = /*#__PURE__*/function (_React$Component) {
  _inherits(PowerNode, _React$Component);
  var _super = _createSuper(PowerNode);
  function PowerNode(props) {
    var _this;
    _classCallCheck(this, PowerNode);
    _this = _super.call(this, props);
    _this.state = {
      highlighted: false
    };
    _this.handleMouseOut = _this.handleMouseOut.bind(_assertThisInitialized(_this));
    _this.handleMouseOver = _this.handleMouseOver.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * User hovers over the power node
   */
  _createClass(PowerNode, [{
    key: "handleMouseOver",
    value: function handleMouseOver() {
      if (!this.props.noNavigate) {
        this.setState({
          highlighted: true
        });
      }
    }

    /**
     * Use stops hovering over power node
     */
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut() {
      if (!this.props.noNavigate) {
        this.setState({
          highlighted: false
        });
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      if (this.props.onSelectionChange) {
        this.props.onSelectionChange("power Node", this.props.name);
      }
      e.stopPropagation();
    }
  }, {
    key: "drawLabel",
    value: function drawLabel(x, y, label, position, offset) {
      var cy = y;
      if (offset) {
        cy = y + 20;
      }
      var labelClassed = "power-node-label";
      var labelElement = /*#__PURE__*/_react["default"].createElement(_Label.Label, {
        key: "power-node-label",
        x: x,
        y: cy,
        classed: labelClassed,
        style: this.props.labelStyle.normal,
        label: label,
        labelPosition: position
      });
      return labelElement;
    }
  }, {
    key: "render",
    value: function render() {
      var powerNode = this.props.powerNode;
      var muted = false;
      if (powerNode.equipment.length === 0 && !this.props.selected) {
        muted = true;
      }
      return /*#__PURE__*/_react["default"].createElement("g", {
        key: "powerNode-".concat(powerNode.label),
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut,
        onClick: this.handleClick
      }, /*#__PURE__*/_react["default"].createElement(_Node.Node, {
        x: powerNode.x,
        y: powerNode.y,
        style: powerNode.style.node,
        radius: this.props.radius,
        shape: "circle",
        label: powerNode.label,
        labelPosition: "right",
        labelStyle: this.props.labelStyle,
        highlighted: this.state.highlighted,
        selected: this.props.selected,
        muted: muted
      }), this.drawLabel(powerNode.x, powerNode.y, "".concat(powerNode.type), "center"));
    }
  }]);
  return PowerNode;
}(_react["default"].Component);
PowerNode.propTypes = {
  radius: _propTypes["default"].number
};
PowerNode.defaultProps = {
  radius: 15
};