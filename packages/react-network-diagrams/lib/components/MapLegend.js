"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapLegend = void 0;
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
var MapLegend = exports.MapLegend = /*#__PURE__*/function (_React$Component) {
  _inherits(MapLegend, _React$Component);
  var _super = _createSuper(MapLegend);
  function MapLegend() {
    _classCallCheck(this, MapLegend);
    return _super.apply(this, arguments);
  }
  _createClass(MapLegend, [{
    key: "render",
    value: function render() {
      var _this = this;
      var curX = this.props.x;
      var curY = this.props.y;
      var lineCenter = this.props.lineHeight / 2;
      var elements = [];
      if (this.props.nodeTypes.length > 0) {
        _underscore["default"].each(this.props.nodeTypes, function (node, i) {
          if (node.shape === "square") {
            var classed = "map-node-shape-square-" + node.classed;
            var x = curX - node.radius;
            var y = curY;
            var width = 2 * node.radius;
            var style = {
              stroke: node.stroke,
              fill: node.fill
            };
            var textX = curX + _this.props.exampleWidth;
            var textY = curY + lineCenter;
            elements.push( /*#__PURE__*/_react["default"].createElement("g", {
              key: "node-".concat(i)
            }, /*#__PURE__*/_react["default"].createElement("rect", {
              x: x,
              y: y,
              width: width,
              height: width,
              style: style,
              className: classed
            }), /*#__PURE__*/_react["default"].createElement("text", {
              x: textX,
              y: textY + 4,
              textAnchor: "begin"
            }, node.text)));
            curY += _this.props.lineHeight;
          } else {
            var _textX = curX + _this.props.exampleWidth;
            var _textY = curY + lineCenter;
            var _classed = "map-node-shape-circle-" + node.classed;
            var _style = {
              stroke: node.stroke,
              fill: node.fill
            };
            elements.push( /*#__PURE__*/_react["default"].createElement("g", {
              key: "node-".concat(i)
            }, /*#__PURE__*/_react["default"].createElement("circle", {
              style: _style,
              cx: curX,
              cy: _textY,
              r: node.radius,
              className: _classed
            }), /*#__PURE__*/_react["default"].createElement("text", {
              x: _textX,
              y: _textY + 4,
              textAnchor: "begin"
            }, node.text)));
            curY += _this.props.lineHeight;
          }
        });
        if (this.props.columns) {
          curX += this.props.columnWidth;
          curY = this.props.y;
        }
      }
      if (this.props.edgeTypes.length > 0) {
        _underscore["default"].each(this.props.edgeTypes, function (edge, i) {
          var x = curX;
          var y = curY + lineCenter - edge.strokeWidth / 2;
          var textX = x + _this.props.exampleWidth + _this.props.gutter;
          var textY = curY + lineCenter;
          elements.push( /*#__PURE__*/_react["default"].createElement("g", {
            key: "edge-".concat(i)
          }, /*#__PURE__*/_react["default"].createElement("line", {
            x1: x,
            y1: y,
            x2: x + _this.props.exampleWidth,
            y2: y,
            stroke: _this.props.edgeColor,
            strokeWidth: edge.strokeWidth
          }), /*#__PURE__*/_react["default"].createElement("text", {
            x: textX,
            y: textY,
            textAnchor: "begin"
          }, edge.text)));
          curY += _this.props.lineHeight;
        });
        if (this.props.columns) {
          curX += this.props.columnWidth;
          curY = this.props.y;
        }
      }
      if (this.props.colorSwatches.length > 0) {
        var width = this.props.exampleWidth;
        var height = this.props.lineHeight - 4;
        var itemCount = 0;
        _underscore["default"].each(this.props.colorSwatches, function (color, i) {
          if (itemCount && itemCount % _this.props.itemsPerColumn === 0) {
            curX += _this.props.columnWidth;
            curY = _this.props.y;
          }
          var x = curX;
          var y = curY;
          var textX = x + _this.props.exampleWidth + _this.props.gutter;
          var textY = curY + lineCenter;
          elements.push( /*#__PURE__*/_react["default"].createElement("g", {
            key: "color-".concat(i)
          }, /*#__PURE__*/_react["default"].createElement("rect", {
            x: x,
            y: y,
            width: width,
            height: height,
            stroke: color.stroke,
            fill: color.fill
          }), /*#__PURE__*/_react["default"].createElement("text", {
            x: textX,
            y: textY,
            textAnchor: "begin"
          }, color.text)));
          curY += _this.props.lineHeight;
          itemCount += 1;
        });
        if (this.props.columns) {
          curX += this.props.columnWidth;
          curY = this.props.y;
        }
      }
      return /*#__PURE__*/_react["default"].createElement("g", null, elements);
    }
  }]);
  return MapLegend;
}(_react["default"].Component);
MapLegend.propTypes = {
  /**
   * Controls the starting x co-ordinate
   */
  x: _propTypes["default"].number,
  /**
   * Controls the starting y co-ordinate
   */
  y: _propTypes["default"].number,
  /**
   * Controls the height of the line
   */
  lineHeight: _propTypes["default"].number,
  /**
   * Boolean variable whether we want to have columns or not
   */
  columns: _propTypes["default"].bool,
  /**
   * If we have columns, how many items do we want in each column
   */
  itemsPerColumn: _propTypes["default"].number,
  /**
   * Width of each column
   */
  columnWidth: _propTypes["default"].number,
  /**
   * Used to denote the width of a line when displaying the capacity or
   * the distance between the icon and the text in the legend
   */
  exampleWidth: _propTypes["default"].number,
  gutter: _propTypes["default"].number,
  /**
   * Color for the lines in the capacity map. The capacity map is a map where
   * the key is the capacity and the value represents the width of the line
   * that is drawn on the map
   */
  edgeColor: _propTypes["default"].string,
  /**
   * An array that describes the different types of nodes on the map.
   *
   * Eg : [
   *      { classed: "esnet_site", fill: "#B0B0B0", radius: 7, shape: "square", stroke: "#B0B0B0", text: "Site"},
   *      { classed: "hub", fill: "#CBCBCB", radius: 7, shape: "circle", stroke: "#CBCBCB", text: "Hub" }
   * ];
   */
  nodeTypes: _propTypes["default"].array,
  /**
   * An array that describes the different sizes of the edges on the map.
   *
   * Eg : [
   *      { strokeWidth: 7, text: "100 Gbps" }
   *      { strokeWidth: 4, text: "40 Gbps"}
   * ];
   */
  edgeTypes: _propTypes["default"].array,
  /**
   * An array that describes the colors corresponding to the traffic on the map
   * and how to display that in the legend
   *
   * Eg : [
   *      { fill: "#990000", stroke: "#990000", text: "50+ Gbps" },
   *      { fill: "#bd0026", stroke: "#bd0026", text: "20 - 50" },
   *      { fill: "#cc4c02", stroke: "#cc4c02", text: "10 - 20" }
   * ];
   */
  colorSwatches: _propTypes["default"].array
};
MapLegend.defaultProps = {
  x: 0,
  y: 0,
  lineHeight: 20,
  columns: true,
  itemsPerColumn: 4,
  columnWidth: 100,
  exampleWidth: 20,
  gutter: 8,
  edgeColor: "#333",
  nodeTypes: [],
  edgeTypes: [],
  colorSwatches: []
};