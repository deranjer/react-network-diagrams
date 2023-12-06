"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Node = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var Node = exports.Node = /*#__PURE__*/function (_React$Component) {
  _inherits(Node, _React$Component);
  var _super = _createSuper(Node);
  function Node() {
    _classCallCheck(this, Node);
    return _super.apply(this, arguments);
  }
  _createClass(Node, [{
    key: "handMouseClick",
    value: function handMouseClick(e) {
      e.stopPropagation();
      var id = this.props.id || this.props.name;
      if (this.props.onSelectionChange) {
        this.props.onSelectionChange("node", id);
      }
    }
  }, {
    key: "handleMouseOver",
    value: function handleMouseOver() {}
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      e.stopPropagation();
      var id = this.props.id || this.props.name;
      if (this.props.onMouseDown) {
        this.props.onMouseDown(id, e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      var nodeClasses = "map-node";
      var labelClasses = "map-node-label";
      var styleModifier = "normal";
      if (this.props.selected) {
        styleModifier = "selected";
        nodeClasses += " selected";
        labelClasses += " selected";
      }
      if (this.props.muted) {
        styleModifier = "muted";
        nodeClasses += " muted";
        labelClasses += " muted";
      }
      if (this.props.highlighted) {
        styleModifier = "highlighted";
        nodeClasses += " highlighted";
        labelClasses += " highlighted";
      }
      var basicOffset = this.props.offset ? this.props.offset : this.props.radius * 1.33;

      // 0.8 * font size? ish..
      var fontOffset = 8;
      var labelX = this.props.x;
      var labelY = this.props.y;
      var labelR = 0;
      var textAnchor = "middle";
      var rotate = "rotate(".concat(labelR, " ").concat(labelX, ", ").concat(labelY, ")");
      var labelPosition;
      if (_typeof(this.props.labelPosition) === "object") {
        labelPosition = this.props.labelPosition.value;
      } else {
        labelPosition = this.props.labelPosition;
      }
      switch (labelPosition) {
        case "left":
          labelX -= basicOffset;
          labelY += 5;
          textAnchor = "end";
          break;
        case "right":
          labelX += basicOffset;
          labelY += 5;
          textAnchor = "start";
          break;
        case "top":
          labelY -= basicOffset;
          break;
        case "topright":
          labelY -= basicOffset;
          labelX += basicOffset;
          textAnchor = "start";
          break;
        case "topleft":
          labelY -= basicOffset;
          labelX -= basicOffset;
          textAnchor = "end";
          break;
        case "bottom":
          labelY += basicOffset + fontOffset;
          break;
        case "bottomright":
          labelY += basicOffset + fontOffset;
          labelX += basicOffset;
          textAnchor = "start";
          break;
        case "bottomleft":
          labelY += basicOffset + fontOffset;
          labelX -= basicOffset;
          textAnchor = "end";
          break;
        case "bottomleftangled":
          labelX += 2;
          labelY += basicOffset + fontOffset;
          labelR = -45;
          rotate = "rotate(".concat(labelR, " ").concat(labelX, ", ").concat(labelY, ")");
          textAnchor = "end";
          break;
        case "bottomrightangled":
          labelX -= 2;
          labelY += basicOffset + fontOffset;
          labelR = 45;
          rotate = "rotate(".concat(labelR, " ").concat(labelX, ", ").concat(labelY, ")");
          textAnchor = "start";
          break;
        case "topleftangled":
          labelY -= basicOffset;
          labelR = 45;
          rotate = "rotate(".concat(labelR, " ").concat(labelX, ", ").concat(labelY, ")");
          textAnchor = "end";
          break;
        case "toprightangled":
          labelY -= basicOffset;
          labelR = -45;
          rotate = "rotate(".concat(labelR, " ").concat(labelX, ", ").concat(labelY, ")");
          textAnchor = "start";
          break;
        default:
          break;
      }
      labelX += this.props.labelOffsetX;
      labelY += this.props.labelOffsetY;
      var nodeElement;
      if (this.props.shape === "cloud") {
        nodeClasses += " map-node-shape-cloud";
        labelClasses += " map-node-label-cloud";
        var cloudPath = "M".concat(this.props.x, ",").concat(this.props.y + 5);
        cloudPath += "l-25,0 c-10,0 -10,-10 -5,-15";
        cloudPath += "c5,-5 15,-5 15,0 c0,-15 25,-15 25,-5 c10,-10 25,15 10,20 Z";
        nodeElement = /*#__PURE__*/_react["default"].createElement("path", {
          d: cloudPath,
          style: this.props.style[styleModifier],
          className: nodeClasses
        });
        switch (this.props.labelPosition) {
          case "top":
          case "topright":
          case "topleft":
            labelY += 7;
            break;
          case "bottom":
          case "bottomleft":
          case "bottomright":
            labelY -= 15;
            break;
          default:
            break;
        }
        labelX -= 3;
      } else if (this.props.shape === "square") {
        nodeClasses += " map-node-shape-square";
        labelClasses += " map-node-shape-square";
        var x = this.props.x - this.props.radius;
        var y = this.props.y - this.props.radius;
        var width = 2 * this.props.radius;
        nodeElement = /*#__PURE__*/_react["default"].createElement("rect", {
          x: x,
          y: y,
          rx: this.props.rx,
          ry: this.props.ry,
          width: width,
          height: width,
          style: this.props.style[styleModifier],
          className: nodeClasses
        });
        switch (this.props.labelPosition) {
          case "left":
            labelX -= 2;
            break;
          case "right":
            labelX += 2;
            break;
          default:
            break;
        }
      } else {
        nodeClasses += " map-node-shape-circle";
        labelClasses += " map-node-label-circle";
        nodeElement = /*#__PURE__*/_react["default"].createElement("circle", {
          cx: this.props.x,
          cy: this.props.y,
          r: this.props.radius,
          style: this.props.style[styleModifier],
          className: nodeClasses
        });
      }
      if (this.props.label) {
        return /*#__PURE__*/_react["default"].createElement("g", {
          onClick: function onClick(e) {
            return _this.handMouseClick(e);
          },
          onMouseOver: this.handleMouseOver,
          onMouseDown: function onMouseDown(e) {
            return _this.handleMouseDown(e);
          },
          onMouseMove: this.handleMouseMove
        }, nodeElement, /*#__PURE__*/_react["default"].createElement("text", {
          x: labelX,
          y: labelY,
          textAnchor: textAnchor,
          transform: rotate,
          style: this.props.labelStyle[styleModifier],
          className: labelClasses
        }, this.props.label));
      } else {
        return /*#__PURE__*/_react["default"].createElement("g", {
          onClick: function onClick(e) {
            return _this.handMouseClick(e);
          },
          onMouseOver: this.handleMouseOver,
          onMouseDown: function onMouseDown(e) {
            return _this.handleMouseDown(e);
          },
          onMouseMove: this.handleMouseMove,
          onMouseUp: this.handleMouseUp
        }, nodeElement);
      }
    }
  }], [{
    key: "spec",
    value:
    /**
     * Provides a spec for the editor UI to render properties
     * for this node
     */
    function spec() {
      return [{
        attr: "name",
        label: "Name",
        type: "text"
      }, {
        attr: "x",
        label: "Position x",
        type: "integer"
      }, {
        attr: "y",
        label: "Position y",
        type: "integer"
      }, {
        attr: "label_dx",
        label: "Label offset x",
        type: "integer"
      }, {
        attr: "label_dy",
        label: "Label offset y",
        type: "integer"
      }, {
        attr: "label_position",
        label: "Label position",
        type: "choice",
        options: [{
          value: "top",
          label: "Top"
        }, {
          value: "bottom",
          label: "Bottom"
        }, {
          value: "left",
          label: "Left"
        }, {
          value: "right",
          label: "Right"
        }, {
          value: "topleft",
          label: "Top left"
        }, {
          value: "topright",
          label: "Top right"
        }, {
          value: "bottomleft",
          label: "Bottom left"
        }, {
          value: "bottomright",
          label: "Bottom right"
        }]
      }];
    }
  }]);
  return Node;
}(_react["default"].Component);
Node.propTypes = {
  /** When the node shape is a `circle`, this controls the size of the node */
  radius: _propTypes["default"].number,
  /** Display the node as selected */
  selected: _propTypes["default"].bool,
  /** The shape of the node */
  shape: _propTypes["default"].oneOf(["circle", "square", "cloud"]),
  /**
   * The style of the `<Node>` has two components, one for the
   * node itself and one for the label (the label). Each group
   * has three different possible options depending on the way the
   * node should be rendered:
   *
   *  * `normal` provides the standard view of the node
   *  * `selected` for when the node is moused over
   *  * `muted` for when the node is not selected.
   *
   * For example:
   *
   * ```
   * const nodeStyle = {
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
  isDragging: _propTypes["default"].bool,
  /**
   * Controls the x pixel offset from labelPosition
   */
  labelOffsetX: _propTypes["default"].number,
  /**
   * Controls the y pixel offset from labelPosition
   */
  labelOffsetY: _propTypes["default"].number,
  /** When the node shape is a `square`, this controls the radius of corners. */
  rx: _propTypes["default"].number,
  /** When the node shape is a `square`, this controls the radius of corners. */
  ry: _propTypes["default"].number
};
Node.defaultProps = {
  radius: 5,
  selected: false,
  shape: "circle",
  style: {},
  isDragging: false,
  labelOffsetX: 0,
  labelOffsetY: 0,
  rx: 0,
  ry: 0
};