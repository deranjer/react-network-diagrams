"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Connection = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Endpoint = require("./Endpoint");
var _SimpleEdge = require("./SimpleEdge");
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
 * The `x1`, `x2`, `y1`, and `y2` properties determine the position of the endpoints on the `<svg>` element.
 * A path is then drawn betwween the endpoints. If the lineShape property is set to "square",
 * the width of the square will be the distance between x1 and x2, with the height of the square
 * determined by the size prop.
 *
 * The `labelPosition`, determines where the label will be positioned around the line. The `xOffset` and
 * `yOffset` properties allow you to customize the distance the label is from the `x` and `y` properties.
 *
 * The `label` property is the name that will be displayed on the line. If you want to display multiple
 * lines, the label can take an array of strings, with each array element displayed on a separate line.
 */
var Connection = exports.Connection = /*#__PURE__*/function (_React$Component) {
  _inherits(Connection, _React$Component);
  var _super = _createSuper(Connection);
  function Connection(props) {
    var _this;
    _classCallCheck(this, Connection);
    _this = _super.call(this, props);
    _this.state = {
      highlighted: false
    };
    _this.handleMouseOut = _this.handleMouseOut.bind(_assertThisInitialized(_this));
    _this.handleMouseOver = _this.handleMouseOver.bind(_assertThisInitialized(_this));
    _this.handleSelectionChanged = _this.handleSelectionChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * User hovers over the circuit
   */
  _createClass(Connection, [{
    key: "handleMouseOver",
    value: function handleMouseOver() {
      if (!this.props.noNavigate) {
        this.setState({
          highlighted: true
        });
      }
    }

    /**
     * Use stops hovering over circuit
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
    key: "handleSelectionChanged",
    value: function handleSelectionChanged(e, value) {
      if (!this.props.noNavigate) {
        this.props.onSelectionChange(e, value);
      }
    }
  }, {
    key: "renderEndpoints",
    value: function renderEndpoints() {
      if (this.props.arrow) {
        return /*#__PURE__*/_react["default"].createElement("g", null);
      } else {
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement(_Endpoint.Endpoint, {
          x: this.props.x1,
          y: this.props.y1,
          key: "line-begin",
          style: this.props.style,
          radius: this.props.radius,
          shape: this.props.endpointShape,
          roundedX: this.props.endPointRoundedX,
          roundedY: this.props.endPointRoundedY,
          highlighted: this.state.highlighted,
          muted: this.props.muted,
          selected: this.props.selected
        }), /*#__PURE__*/_react["default"].createElement(_Endpoint.Endpoint, {
          x: this.props.x2,
          y: this.props.y2,
          key: "line-end",
          style: this.props.style,
          radius: this.props.radius,
          shape: this.props.endpointShape,
          roundedX: this.props.endPointRoundedX,
          roundedY: this.props.endPointRoundedY,
          highlighted: this.state.highlighted,
          muted: this.props.muted,
          selected: this.props.selected
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var xOffset;
      var yOffset;
      if (this.props.labelOffsetX === undefined) {
        xOffset = this.props.radius * 1.33;
      } else {
        xOffset = this.props.labelOffsetX;
      }
      if (this.props.labelOffsetY === undefined) {
        yOffset = this.props.radius * 1.33;
      } else {
        yOffset = this.props.labelOffsetY;
      }
      var hitStyle = {
        cursor: this.props.noNavigate ? "default" : "pointer",
        stroke: "#FFF",
        strokeWidth: 8
      };
      var navTo = this.props.navTo;
      var width;
      var stroke;
      var fill;
      var offset;
      if (this.props.lineShape === "angled") {
        offset = this.props.bendOffset;
      } else {
        offset = this.props.curveOffset;
      }
      if (this.state.highlighted) {
        width = this.props.style.line.highlighted.strokeWidth;
        stroke = this.props.style.line.highlighted.stroke;
        fill = this.props.style.line.highlighted.fill;
      } else {
        width = this.props.style.line.normal.strokeWidth;
        stroke = this.props.style.line.normal.stroke;
        fill = this.props.style.line.normal.fill;
      }
      return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement(_SimpleEdge.SimpleEdge, {
        x1: this.props.x1,
        x2: this.props.x2,
        y1: this.props.y1,
        y2: this.props.y2,
        shape: this.props.lineShape,
        key: "line-path",
        label: this.props.label,
        labelPosition: this.props.labelPosition,
        labelStyle: this.props.style.label,
        labelOffsetX: xOffset,
        labelOffsetY: yOffset,
        textAnchor: this.props.textAnchor,
        color: stroke,
        width: width,
        muted: this.props.muted,
        selected: this.props.selected,
        classed: this.props.classed,
        roundedX: this.props.roundedX,
        roundedY: this.props.roundedY,
        fillColor: fill,
        size: this.props.size,
        centerLine: this.props.centerLine,
        arrow: this.props.arrow,
        arrowWidth: this.props.arrowWidth,
        arrowHeight: this.props.arrowHeight,
        position: this.props.position,
        offset: offset,
        curveDirection: this.props.curveDirection,
        name: navTo
      })), /*#__PURE__*/_react["default"].createElement("g", {
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut
      }, /*#__PURE__*/_react["default"].createElement(_SimpleEdge.SimpleEdge
      // Positional Props used by all shapes
      , {
        x1: this.props.x1,
        x2: this.props.x2,
        y1: this.props.y1,
        y2: this.props.y2
        // Identity Props used by all shapes
        ,
        shape: this.props.lineShape // controls shape of the line
        ,
        key: "line-path-hit" // needed for react element
        // Label Props used by all shapes
        ,
        label: this.props.label // provides label to be displayed
        ,
        labelPosition: this.props.labelPosition // controls where label
        // is situated around the line
        ,
        labelStyle: this.props.style.label // controls the
        // style of the label
        ,
        labelOffsetX: xOffset // controls the +/- x offset from labelPosition
        ,
        labelOffsetY: yOffset // controls the +/- y offset from labelPosition
        ,
        textAnchor: this.props.textAnchor // controls the positioning of the text
        // Style Props
        ,
        color: hitStyle.stroke // controls color of the line
        ,
        width: hitStyle.strokeWidth // controls the stroke thickness
        ,
        muted: this.props.muted // controls style
        ,
        selected: this.props.selected // controls style
        ,
        classed: this.props.classed // provides a psuedo css class for the line
        // Square props
        ,
        roundedX: this.props.roundedX // controls corner rounding
        ,
        roundedY: this.props.roundedY // controls corner rounding
        ,
        fillColor: fill // controls color of the fill
        ,
        size: this.props.size // controls height of square
        ,
        centerLine: this.props.centerLine // controls display of horizontal center line
        // Arrow props, not used by square
        ,
        arrow: this.props.arrow // determines whether to
        // display nodes or arrows at ends of line
        ,
        arrowWidth: this.props.arrowWidth // controls width of arrow
        ,
        arrowHeight: this.props.arrowHeight // controls height of arrow
        // Line offset props, used by angle and arc
        ,
        position: this.props.position // controls angle of offset
        ,
        offset: offset // controls length of offset line
        ,
        curveDirection: this.props.curveDirection // controls left / right
        // line path with reference
        // to line center

        // Navigation props
        ,
        name: navTo // returned value for _onSelection change - all
        ,
        onSelectionChange: this.handleSelectionChanged // callback function to
        // control what happens if the
        // element is clicked
        ,
        invisible: true // Internal prop for hiding this line
      })), /*#__PURE__*/_react["default"].createElement("g", null, this.renderEndpoints()));
    }
  }]);
  return Connection;
}(_react["default"].Component);
Connection.propTypes = {
  /**
   * Controls shape of the line, can be "linear", "square", "angled", "arc".
   */
  lineShape: _propTypes["default"].oneOf(["linear", "square", "angled", "arc"]),
  //
  // Positional Props used by all shapes
  //

  /** Controls the x-coordinate of the line beginning. */
  x1: _propTypes["default"].number,
  /** Controls the x-coordinate of the line end. */
  x2: _propTypes["default"].number,
  /** Controls the y-coordinate of the line beginning. */
  y1: _propTypes["default"].number,
  /** Controls the y-coordinate of the line end. */
  y2: _propTypes["default"].number,
  //
  // Label Props used by all shapes
  //

  /**
   * Provides label to be displayed; Takes either a string, or an array of
   * strings for multi-line labels.
   */
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  /**
   * Controls where label is situated around the line.
   */
  labelPosition: _propTypes["default"].oneOf(["top", "bottom", "center"]),
  /**
   * Controls the x pixel offset from labelPosition
   */
  labelOffsetX: _propTypes["default"].number,
  /**
   * Controls the y pixel offset from labelPosition
   */
  labelOffsetY: _propTypes["default"].number,
  /**
   * Controls the justification of the text label
   */
  textAnchor: _propTypes["default"].oneOf(["begin", "middle", "end"]),
  //
  // Style Props, used by all shapes
  //

  /**
   * Object prop that controls the inline style for the react element.
   *
   * The style has three components, one for the two Line-caps (`node`),
   * one for the label (`label`) and one for the line (`line`). Each group
   * has up to four different possible options depending on the way the
   * line and endpoint should be rendered:
   *  * `normal` - provides the standard view of the component
   *  * `selected` - for when the component is clicked
   *  * `muted` - for when the component is in the background
   *  * `highlighted` - is used when the component is hovered over
   *
   * The muted and selected props are boolean values that tell the lower
   * level primitive that you want to use these styles. They will default
   * to false unless specified. The `fill` css style on each category is used
   * for line-caps and square connections, allowing different colors to be
   * specified for the interior of the shapes.
   */
  style: _propTypes["default"].object,
  /** Display the endpoint muted */
  muted: _propTypes["default"].bool,
  /** Display the endpoint selected */
  selected: _propTypes["default"].bool,
  //
  // Props for "square" shape
  //

  /** When the endpoint shape is a `square`, this controls the radius of corners. */
  roundedX: _propTypes["default"].number,
  /** When the endpoint shape is a `square`, this controls the radius of corners. */
  roundedY: _propTypes["default"].number,
  /**
   * Used to determine the height of the square if the endpoint shape is a `square`,
   * as well as when calculating the label position around a square.
   */
  size: _propTypes["default"].number,
  /** Boolean value that controls if a horizontal line is drawn down the center of a square. */
  centerLine: _propTypes["default"].bool,
  //
  // Line offset Props, used by "angle" and "curved" shapes
  //

  /**
   * Controls the angle of the offset from the center of the line.
   */
  position: _propTypes["default"].number,
  /**
   * Controls the distance from the center x axis the curve will arc through
   */
  curveOffset: _propTypes["default"].number,
  /**
   * Controls the length of the offset line
   */
  bendOffset: _propTypes["default"].number,
  /**
   * The curveDirection property determines whether the curve moves to the
   * left or the right of the non-horizontal vector between x1,y1 and x2,y2.
   * The curveOffset property specifies the distance of the curve from the vector
   * between x1, y1 and x2, y2. When position is specified, this will offset a linear,
   * or curved line from the x1, y1, x2, y2 corrdinates using a combination of
   * vectors.
   *
   * This functions slightly differently for angled connections and
   * will instead rotate a point offset from the x and y by an angle. If the
   * curveDirection is left, this will move clockwise, and will move counterClockwise if right.
   */
  curveDirection: _propTypes["default"].oneOf(["left", "right"]),
  //
  // Linecap props, used by all shapes
  //

  /**
   * Controls the size of the Line-cap
   */
  radius: _propTypes["default"].number,
  /**
   * Controls the shape of the line-cap.
   */
  endpointShape: _propTypes["default"].oneOf(["circle", "square", "cloud"]),
  /**
   * If a square endpoint shape is used, controls the corner rounding of the x-axis of the square
   */
  endPointRoundedX: _propTypes["default"].number,
  /**
   * If a square endpoint shape is used, controls the corner rounding of the y-axis of the square
   */
  endPointRoundedY: _propTypes["default"].number,
  //
  // Arrow props, not used by "square"
  //

  /**
   * Boolean value that controls if a directional arrow is drawn instead of line-caps.
   * When arrow is set to "true", the vector between x1, y1 and x2, y2 will have the
   * Line-caps replaced with a directional arrow. Arrowheads can be sized using the
   * arrowWidth and arrowHeight property.
   */
  arrow: _propTypes["default"].bool,
  /**
   * Controls the width of an arrow head
   */
  arrowWidth: _propTypes["default"].number,
  /**
   * Controls the height of an arrow head
   */
  arrowHeight: _propTypes["default"].number,
  //
  // Navigation Props, used by all shapes
  //

  /**
   * Boolean value that determines if the element uses the onSelectionChange change and can be clicked
   */
  noNavigate: _propTypes["default"].bool,
  /**
   * Callback specified to handle selection of the circuit. The value supplied
   * to the callback is whatever was specified in the navTo prop.
   */
  onSelectionChange: _propTypes["default"].func,
  /**
   * Value passed down to the click handler at the lowest level primitive.
   * Will return to the onSelectionChange its value.
   */
  navTo: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
Connection.defaultProps = {
  noNavigate: false,
  labelPosition: "top",
  radius: 2,
  endpointShape: "circle",
  classed: "circuit",
  lineShape: "linear",
  selected: false,
  muted: false,
  position: 0,
  arrow: false,
  arrowWidth: 10,
  arrowHeight: 10,
  curveDirection: "right",
  curveOffset: 20,
  size: 40
};