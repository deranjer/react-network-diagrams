"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicCircuit = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Connection = require("./Connection");
var _Endpoint = require("./Endpoint");
var _Navigate = require("./Navigate");
var _constants = require("../js/constants");
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
 * Renders a horizontal circuit by determining `x1`, `x2`, `y1`, `y2`
 * coordinates on the page and then render a basic circuit by combining the
 * connection and endpoint props. Connection shape, style, and label information,
 * are passed in as props
 */
var BasicCircuit = exports.BasicCircuit = /*#__PURE__*/function (_React$Component) {
  _inherits(BasicCircuit, _React$Component);
  var _super = _createSuper(BasicCircuit);
  function BasicCircuit() {
    _classCallCheck(this, BasicCircuit);
    return _super.apply(this, arguments);
  }
  _createClass(BasicCircuit, [{
    key: "renderCircuitTitle",
    value: function renderCircuitTitle(title) {
      var titleStyle = {
        textAnchor: "left",
        fill: "#9D9D9D",
        fontFamily: "verdana, sans-serif",
        fontSize: 14
      };
      if (!this.props.hideTitle) {
        return /*#__PURE__*/_react["default"].createElement("text", {
          className: "circuit-title",
          key: "circuit-title",
          style: titleStyle,
          x: this.props.titleOffsetX,
          y: this.props.titleOffsetY
        }, title);
      } else {
        return null;
      }
    }
  }, {
    key: "renderParentNavigation",
    value: function renderParentNavigation(parentId) {
      if (parentId) {
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement(_Navigate.Navigate, {
          direction: _constants.Directions.NORTH,
          width: this.props.width,
          height: this.props.height,
          ypos: 0,
          id: this.props.parentId,
          onSelectionChange: this.props.onSelectionChange
        }));
      } else {
        return null;
      }
    }
  }, {
    key: "renderDisabledOverlay",
    value: function renderDisabledOverlay(disabled) {
      if (disabled) {
        var overlayStyle = {
          fill: "#FDFDFD",
          fillOpacity: "0.65"
        };
        return /*#__PURE__*/_react["default"].createElement("rect", {
          className: "circuit-overlay",
          style: overlayStyle,
          x: "0",
          y: "0",
          width: this.props.width,
          height: this.props.height
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderCircuitElements",
    value: function renderCircuitElements() {
      var elements = [];
      var middle = this.props.width / 2;
      var x1;
      var x2;

      // Render a square in the middle of the SVG grid by default
      if (this.props.lineShape === "square") {
        x1 = middle - this.props.squareWidth / 2;
        x2 = middle + this.props.squareWidth / 2;
      } else {
        x1 = this.props.margin;
        x2 = this.props.width - this.props.margin;
      }
      var y1 = this.props.height / 4;
      var y2 = y1;
      var labelOffset = this.props.size ? this.props.size / 2 : 0;

      // The two endpoints of this circuit
      elements.push( /*#__PURE__*/_react["default"].createElement(_Endpoint.Endpoint, {
        x: x1,
        y: y1,
        key: "a",
        style: this.props.endpointStyle,
        labelPosition: this.props.endpointLabelPosition,
        offset: labelOffset,
        label: this.props.endpointLabelA
      }));
      elements.push( /*#__PURE__*/_react["default"].createElement(_Endpoint.Endpoint, {
        x: x2,
        y: y2,
        key: "z",
        style: this.props.endpointStyle,
        labelPosition: this.props.endpointLabelPosition,
        offset: labelOffset,
        label: this.props.endpointLabelZ
      }));

      // The connection
      elements.push( /*#__PURE__*/_react["default"].createElement(_Connection.Connection, {
        x1: x1,
        x2: x2,
        y1: y1,
        y2: y2,
        key: "line",
        roundedX: this.props.roundedX,
        roundedY: this.props.roundedY,
        style: this.props.lineStyle,
        lineShape: this.props.lineShape,
        label: this.props.circuitLabel,
        labelPosition: this.props.connectionLabelPosition,
        labelOffsetY: this.props.yOffset,
        noNavigate: this.props.noNavigate,
        navTo: this.props.navTo,
        size: this.props.size,
        centerLine: this.props.centerLine,
        onSelectionChange: this.props.onSelectionChange
      }));
      return /*#__PURE__*/_react["default"].createElement("g", null, elements);
    }
  }, {
    key: "render",
    value: function render() {
      var circuitContainer = {
        normal: {
          borderTopStyle: "solid",
          borderBottomStyle: "solid",
          borderWidth: 1,
          borderTopColor: "#FFFFFF",
          borderBottomColor: "#EFEFEF",
          width: "100%",
          height: this.props.height
        },
        disabled: {
          width: "100%",
          height: this.props.height
        }
      };
      var className = "circuit-container";
      var svgStyle;
      if (this.props.disabled) {
        className += " disabled";
        svgStyle = circuitContainer.disabled;
      } else {
        svgStyle = circuitContainer.normal;
      }
      return /*#__PURE__*/_react["default"].createElement("svg", {
        className: className,
        style: svgStyle,
        onClick: this._deselect
      }, this.renderCircuitTitle(this.props.title), this.renderCircuitElements(), this.renderParentNavigation(this.props.parentId), this.renderDisabledOverlay(this.props.disabled));
    }
  }]);
  return BasicCircuit;
}(_react["default"].Component);
BasicCircuit.propTypes = {
  /** The style of the line */
  lineStyle: _propTypes["default"].object.isRequired,
  /** Text value describing the shape of the line, "linear", "curved", etc. */
  lineShape: _propTypes["default"].oneOf(["linear", "curved", "square", "angled"]),
  /**
   * Describes the position of the connection label.
   */
  connectionLabelPosition: _propTypes["default"].oneOf(["top", "center", "bottom"]),
  /**
   * String to be displayed for the connection. If an array of strings is
   * supplied they will be displayed in a multi-line layout.
   */
  circuitLabel: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  /**
   * Vertical distance from the center line to offset the connection label.
   */
  yOffset: _propTypes["default"].number,
  /**
   * The string to display in the top left corner of the diagram.
   */
  title: _propTypes["default"].string,
  /**
   * Boolean value that determines if the element uses the onSelectionChange
   * change and can be clicked
   */
  noNavigate: _propTypes["default"].bool,
  /** Controls the size of the square */
  size: _propTypes["default"].number,
  /** controls if a horizontal line is drawn down the center of a square */
  centerLine: _propTypes["default"].bool,
  /**
   * This value is used to determine X coordinates for a square, if you want
   * the square to be smaller than the default line width. Overrides the
   * margin prop if a square is displayed
   */
  squareWidth: _propTypes["default"].number,
  /**
   * The style of the endpoint.
   * TODO: be more explicit here about the expected shape.
   */
  endpointStyle: _propTypes["default"].object,
  /**
   * The position of the label around the endpoint.
   */
  endpointLabelPosition: _propTypes["default"].oneOf(["left", "right", "top", "topright", "topleft", "bottom", "bottomright", "bottomleft", "bottomleftangled", "bottomrightangled", "topleftangled", "toprightangled"]),
  /**
   * Left side endpoint label
   */
  endpointLabelA: _propTypes["default"].string,
  /**
   * Right side endpoint label
   */
  endpointLabelZ: _propTypes["default"].string,
  /**
   * Disables the circuit by muting the colors and disabling events.
   */
  disabled: _propTypes["default"].bool,
  /**
   * Callback specified to handle selection of the circuit. The value supplied
   * to the callback is whatever was specified in the navTo prop.
   */
  onSelectionChange: _propTypes["default"].func,
  /**
   * Value passed down to the click handler at the lowest level primitive.
   * Will return to the onSelectionChange its value.
   */
  navTo: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  /**
   * If provided, will render a small nav arrow that when clicked,
   * navigates to that element. Used mainly when we want to show a parent / child
   * relationship between two circuits.
   */
  parentId: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  /** The width of the circuit diagram */
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  titleOffsetX: _propTypes["default"].number,
  titleOffsetY: _propTypes["default"].number,
  /** The blank margin around the diagram drawing */
  margin: _propTypes["default"].number,
  roundedX: _propTypes["default"].number,
  roundedY: _propTypes["default"].number
};
BasicCircuit.defaultProps = {
  width: 851,
  height: 250,
  disabled: false,
  titleOffsetX: 10,
  titleOffsetY: 15,
  margin: 100,
  noNavigate: false,
  squareWidth: 25,
  roundedX: 5,
  roundedY: 5
};