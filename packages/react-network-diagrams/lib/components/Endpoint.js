"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Endpoint = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Node = require("./Node");
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
 * Endpoint drawing primative. This essentially renders the shape we use to represent
 * for an endpoint on the circuit diagrams. The result is a `<g>` element containing
 * the endpoint rendering, so this needs to be used within the context of an `<svg>` block, or
 * more likely, just use a `<Circuit>`.
 *
 * The `x` and `y` props determine the position of the endpoint on the svg grid, while
 * 'labelPosition' determines where the label for the endpoint will be positioned around
 * the endpoint. The `offset` property allow you to customize the distance the label has
 * from the endpoint's `x` and `y` as the initial position of the label is determined
 * based on these props. The `offset` property has no effect on the angled labels, as
 * these require pre-determined offset distances based on the rotation. The `label` prop
 * is the name that will be displayed on the endpoint.
 */
var Endpoint = exports.Endpoint = /*#__PURE__*/function (_React$Component) {
  _inherits(Endpoint, _React$Component);
  var _super = _createSuper(Endpoint);
  function Endpoint() {
    _classCallCheck(this, Endpoint);
    return _super.apply(this, arguments);
  }
  _createClass(Endpoint, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement(_Node.Node, {
        x: this.props.x,
        y: this.props.y,
        key: this.props.label,
        style: this.props.style.node,
        labelStyle: this.props.style.label,
        labelPosition: this.props.labelPosition,
        label: this.props.label,
        radius: this.props.radius,
        rx: this.props.roundedX,
        ry: this.props.roundedY,
        offset: this.props.offset,
        shape: this.props.shape,
        muted: this.props.muted,
        selected: this.props.selected,
        highlighted: this.props.highlighted
      }));
    }
  }]);
  return Endpoint;
}(_react["default"].Component);
Endpoint.propTypes = {
  /** The label for the endpoint */
  label: _propTypes["default"].string,
  /**
   * Where the label is positioned relative to the endpoint node as well
   * as how the label is drawn (angled or not).
   */
  labelPosition: _propTypes["default"].oneOf(["left", "right", "top", "topright", "topleft", "bottom", "bottomright", "bottomleft", "bottomleftangled", "bottomrightangled", "topleftangled", "toprightangled"]),
  /** An offset to the position of the label which can be used for fine tuning */
  offset: _propTypes["default"].number,
  /** The shape of the endpoint */
  shape: _propTypes["default"].oneOf(["circle", "square", "cloud"]),
  /** When the endpoint shape is a `circle`, this controls the size of the endpoint */
  radius: _propTypes["default"].number,
  /** When the endpoint shape is a `square`, this controls the radius of corners */
  roundedX: _propTypes["default"].number,
  /** When the endpoint shape is a `square`, this controls the radius of corners */
  roundedY: _propTypes["default"].number,
  /**
   * The style of the `<Endpoint>` has two components, one for the
   * endpoint itself (node) and one for the label (the label). Each group
   * has three different possible options depending on the way the
   * endpoint should be rendered:
   *
   *  * `normal` provides the standard view of the endpoint
   *  * `selected` for when the endpoint is moused over
   *  * `muted` for when the endpoint is not selected.
   *
   * For example:
   *
   * ```
   * const endpointStyle = {
   *     node: {
   *         normal: {fill: "none", stroke: "#DBDBDB", strokeWidth: 4},
   *         selected: {fill: "none", stroke: "#B1B1B1", strokeWidth: 6},
   *         muted: {fill: "none", stroke: "#DBDBDB", strokeWidth: 2, opacity: 0.6, cursor: "pointer"}
   *     },
   *     label: {
   *         normal: {fill: "#9D9D9D", fontSize: 10, fontFamily: "verdana, sans-serif"},
   *         selected: {fill: "#333",stroke: "none", fontSize: 11},
   *         muted: {fill: "#696969", stroke: "none", fontSize: 9, opacity: 0.6}
   *     }
   * }
   * ```
   */
  style: _propTypes["default"].object,
  /** Display the endpoint muted */
  muted: _propTypes["default"].bool,
  /** Display the endpoint as selected */
  selected: _propTypes["default"].bool,
  /** Display the endpoint highlighted  */
  highlighted: _propTypes["default"].bool
};
Endpoint.defaultProps = {
  radius: 7,
  shape: "circle",
  offset: 0,
  labelPosition: "top",
  muted: false,
  selected: false,
  highlighted: false
};