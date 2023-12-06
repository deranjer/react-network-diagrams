"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rack = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _LinearEdge = require("./LinearEdge");
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
var Rack = exports.Rack = /*#__PURE__*/function (_React$Component) {
  _inherits(Rack, _React$Component);
  var _super = _createSuper(Rack);
  function Rack() {
    _classCallCheck(this, Rack);
    return _super.apply(this, arguments);
  }
  _createClass(Rack, [{
    key: "drawSide",
    value: function drawSide(width, height, xCorner, yCorner, key) {
      return /*#__PURE__*/_react["default"].createElement("rect", {
        key: key,
        className: "rack-edge",
        width: width,
        height: height,
        style: this.props.rackStyle,
        x: xCorner,
        y: yCorner,
        fill: this.props.fill
      });
    }
  }, {
    key: "buildRmuArray",
    value: function buildRmuArray(childElements, rmuCount, inchToRmu) {
      //initialize an array of objects the size of the rack for the front and back

      var frontRmuArray = Array(rmuCount + 1).fill({});
      var rearRmuArray = Array(rmuCount + 1).fill({});

      //Lets place the equipment at the RMU position on the front and on the back
      //and fill the other spots up to its height
      childElements.forEach(function (child) {
        var childValues = child.props;
        var rmuHeight = childValues.equipmentHeight / inchToRmu;
        var start = Number(childValues.rmu);
        var end = start + rmuHeight;
        var values = {
          name: "".concat(childValues.label, "-").concat(childValues.rmu, "-").concat(childValues.facing)
        };
        if (childValues.facing === "Front" && start !== 0) {
          frontRmuArray.fill(values, start, end);
        } else if (childValues.facing === "Back" && start !== 0) {
          rearRmuArray.fill(values, start, end);
        }
      });
      var frontIndexedRmuArray = frontRmuArray.map(function (val, index) {
        return {
          name: val.name ? val.name : null,
          position: index
        };
      });
      var rearIndexedRmuArray = rearRmuArray.map(function (val, index) {
        return {
          name: val.name ? val.name : null,
          position: index
        };
      });
      return {
        front: frontIndexedRmuArray,
        back: rearIndexedRmuArray
      };
    }
  }, {
    key: "drawRack",
    value: function drawRack(rackPxHeight, rackPxWidth, rackPxOffset, inchToRmu, yOffsetTop, pxToInch) {
      var middle = this.props.width / 2;

      // get the 4 'x' coordinates of the rectangles
      var x1 = middle - rackPxWidth / 2;
      var x2 = middle + (rackPxWidth / 2 - rackPxOffset);
      var y1 = yOffsetTop;
      var y2 = y1 + rackPxOffset;
      var y3 = y2 + rackPxHeight;

      // define the points around the rack where power nodes may be present
      var elements = [];
      elements.push(this.drawSide(rackPxWidth, rackPxOffset, x1, y1, "topBar"));
      elements.push(this.drawSide(rackPxWidth, rackPxOffset, x1, y3, "bottomBar"));
      elements.push(this.drawSide(rackPxOffset, rackPxHeight, x1, y2, "leftBar"));
      elements.push(this.drawSide(rackPxOffset, rackPxHeight, x2, y2, "rightBar"));
      elements.push(this.drawLabel(middle, y3, this.props.label, "center", true));
      if (this.props.displayRmu) {
        elements.push(this.drawHeightMarkers(inchToRmu, middle, x1, y3, pxToInch));
      }
      return /*#__PURE__*/_react["default"].createElement("g", null, elements);
    }
  }, {
    key: "drawHeightMarkers",
    value: function drawHeightMarkers(inchToRmu, middle, x, initialY, pxToInch) {
      var x1 = x - 20 * pxToInch / 10;
      var x2 = x - 2 * pxToInch / 10;
      var labelStyle = {
        normal: {
          fill: "#9D9D9D",
          fontSize: pxToInch,
          fontFamily: "verdana, sans-serif"
        }
      };
      var elements = [];
      var classed = "height-marker";
      var y = initialY;
      if (this.props.descending) {
        for (var i = this.props.rackHeight + 1; i > 0; i--) {
          var name = void 0;
          var label = void 0;
          if (i === this.props.rackHeight + 1) {
            name = "";
            label = "";
          } else {
            name = i;
            name = name.toString();
            label = i;
            label = label.toString();
          }
          elements.push( /*#__PURE__*/_react["default"].createElement(_LinearEdge.LinearEdge, {
            x1: x1,
            x2: x2,
            y1: y,
            y2: y,
            key: name,
            label: label,
            labelPosition: "bottom",
            labelStyle: labelStyle,
            labelOffsetX: 6 * pxToInch / 10,
            labelOffsetY: 2 * pxToInch / 10,
            textAnchor: "end",
            color: this.props.rackStyle.stroke,
            width: this.props.rackStyle.strokewidth,
            classed: classed,
            position: 0
          }));
          y -= inchToRmu * pxToInch;
        }
      } else {
        for (var _i = 0; _i < this.props.rackHeight + 1; _i++) {
          var _name = void 0;
          var _label = void 0;
          if (_i === 0) {
            _name = "";
            _label = "";
          } else {
            _name = _i;
            _name = _name.toString();
            _label = _i;
            _label = _label.toString();
          }
          elements.push( /*#__PURE__*/_react["default"].createElement(_LinearEdge.LinearEdge, {
            x1: x1,
            x2: x2,
            y1: y,
            y2: y,
            key: _name,
            label: _label,
            labelPosition: "bottom",
            labelStyle: labelStyle,
            labelOffsetX: 6 * pxToInch / 10,
            labelOffsetY: 2 * pxToInch / 10,
            textAnchor: "end",
            color: this.props.rackStyle.stroke,
            width: this.props.rackStyle.strokewidth,
            classed: classed,
            position: 0
          }));
          y -= inchToRmu * pxToInch;
        }
      }
      return elements;
    }
  }, {
    key: "drawLabel",
    value: function drawLabel(x, y, label, position, offset) {
      var cy = y;
      if (offset) {
        cy = y + 20;
      }
      var labelClassed = "rack-label";
      var labelElement = /*#__PURE__*/_react["default"].createElement(_Label.Label, {
        key: "rack-label",
        x: x,
        y: cy,
        classed: labelClassed,
        style: this.props.labelStyle.normal,
        label: "".concat(label, " - ").concat(this.props.facing),
        labelPosition: position
      });
      return labelElement;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(childElements, rackPxHeight, rackPxWidth, rackPxOffset, inchToRmu, yOffsetTop, pxToInch, childMap) {
      var _this = this;
      var newChildren = _react["default"].Children.map(childElements, function (child) {
        var x;
        var heightFromBottom;
        var equipmentPxHeight = child.props.equipmentHeight * pxToInch;
        var rackPxStart = rackPxHeight + yOffsetTop + rackPxOffset;
        var middle = _this.props.width / 2;
        var equipmentPxWidth = child.props.equipmentWidth * pxToInch;
        if (child.props.rmu > 0) {
          heightFromBottom = inchToRmu * (child.props.rmu - 1) * pxToInch;
          x = middle - equipmentPxWidth / 2;
        } else {
          heightFromBottom = inchToRmu * 2 * pxToInch;
          switch (child.props.side) {
            case "L":
              x = middle - rackPxWidth / 2 - rackPxOffset * 2 - 40 * pxToInch / 10;
              break;
            case "R":
              x = middle + rackPxWidth / 2 + 40 * pxToInch / 10;
              break;
            default:
              x = middle - equipmentPxWidth / 2 * pxToInch / 10;
              break;
          }
        }
        var y = rackPxStart - equipmentPxHeight - heightFromBottom;

        // We get the position from the childMap where this child should sit in the rack
        // returning an array of U positions for front and back eg. [1,2]
        var currentRmuFrontPositions = childMap.front.filter(function (c) {
          return c.name === "".concat(child.props.label, "-").concat(child.props.rmu, "-").concat(child.props.facing);
        }).map(function (v) {
          return v.position;
        });
        var currentRmuBackPositions = childMap.back.filter(function (c) {
          return c.name === "".concat(child.props.label, "-").concat(child.props.rmu, "-").concat(child.props.facing);
        }).map(function (v) {
          return v.position;
        });

        // if the child was a front facing element, look in the back to see if there is a value
        // in the back facing rmu array at any position

        var overlappingBack,
          overlappingFront = false;
        if (child.props.facing === "Front") {
          overlappingFront = currentRmuFrontPositions.some(function (v) {
            return childMap.back[v].name !== null;
          });
        } else if (child.props.facing === "Back") {
          overlappingBack = currentRmuBackPositions.some(function (v) {
            return childMap.front[v].name !== null;
          });
        }
        var overlapping = overlappingFront || overlappingBack;

        /*
        XXX Scott: What about other props like
            selected={this.state.selectedStyle}
            muted={this.state.mutedStyle}
            textAnchor={this.state.textAnchor}
            labelOffsetX={this.state.labelOffsetX}
            labelOffsetY={this.state.labelOffsetY}
            noNavigate={this.state.noNavigate}
        */

        var props = {
          y: y,
          x: x,
          pxToInch: pxToInch,
          rackFacing: _this.props.facing,
          usePattern: _this.props.pattern ? true : false,
          overlapping: overlapping
        };
        var newChild = /*#__PURE__*/_react["default"].cloneElement(child, props);
        return newChild;
      });
      return newChildren;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      // 1 RMU is 1.75 inches
      var inchToRmu = 1.75;

      // Minimum total width is 350 at px to inch of 10, so divide anything
      // smaller than 350 by 35 to achieve the right ratio
      var pxToInch;
      if (this.props.width >= 350) {
        pxToInch = this.props.pxToInch;
      } else {
        pxToInch = this.props.width / 35;
      }

      // total height of a 42U rack is 73.5 inches
      // Pixel height is 730px
      var rackPxHeight = inchToRmu * this.props.rackHeight * pxToInch;

      // Width of the inside of a rack of actually 17.25 inches wide
      // Pixel width is 172.5
      var rackPxWidth = this.props.rackWidth * pxToInch;

      // Pixel offset is 8.75
      var rackPxOffset = this.props.widthOffset * pxToInch;
      var yOffsetTop = this.props.yOffsetTop;
      var yOffsetBottom = this.props.yOffsetBottom;
      var totalHeight = rackPxHeight + yOffsetTop + yOffsetBottom;
      var rackContainer = {
        normal: {
          borderTopStyle: "solid",
          borderBottomStyle: "solid",
          borderWidth: 1,
          borderTopColor: "#FFFFFF",
          borderBottomColor: "#FFFFFF",
          width: "100%",
          height: totalHeight
        }
      };
      var className = "rack-container";
      var svgStyle = rackContainer.normal;

      /**
       * If child Equipment elements are present, the rack injects the x and y for each child equipment.
       * It uses the rmu prop and the equipment height on each child element to derive the position
       * in the rack. It then injects an x, y and pixel to inch ratio prop to each child.
       * Other style based props for the equipment are also injected.
       */

      // We render the child elements in a layering fashion to display back and front elements
      // If the rack facing is front, the bottom elements are back facing and top elements are front facing and vice versa
      var childElementsBottom;
      var childElementsTop;
      var bottomChildren = [];
      var topChildren = [];
      this.props.children.forEach(function (child) {
        if (_this2.props.facing === "Front" && child.props.facing === "Front") {
          topChildren.push(child);
        } else if (_this2.props.facing === "Front" && child.props.facing === "Back") {
          bottomChildren.push(child);
        } else if (_this2.props.facing === "Back" && child.props.facing === "Back") {
          topChildren.push(child);
        } else if (_this2.props.facing === "Back" && child.props.facing === "Front") {
          bottomChildren.push(child);
        }
      });
      if (_react["default"].Children.count(this.props.children) >= 1) {
        var childMap = this.buildRmuArray(this.props.children, this.props.rackHeight, inchToRmu);
        childElementsBottom = this.renderChildren(this.props.children, rackPxHeight, rackPxWidth, rackPxOffset, inchToRmu, yOffsetTop, pxToInch, childMap);
        childElementsTop = this.renderChildren(this.props.children, rackPxHeight, rackPxWidth, rackPxOffset, inchToRmu, yOffsetTop, pxToInch, childMap);
      }
      return (
        /*#__PURE__*/
        // Draw in this order: Left Side, Right Side, Top Bar, Bottom Bar, RMU Units
        _react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("svg", {
          className: className,
          style: svgStyle
        }, /*#__PURE__*/_react["default"].createElement("defs", null, this.props.pattern), this.drawRack(rackPxHeight, rackPxWidth, rackPxOffset, inchToRmu, yOffsetTop, pxToInch), childElementsBottom, childElementsTop))
      );
    }
  }]);
  return Rack;
}(_react["default"].Component);
Rack.propTypes = {
  yOffsetTop: _propTypes["default"].number,
  yOffsetBottom: _propTypes["default"].number,
  width: _propTypes["default"].number,
  /** Expressed in RMU */
  rackHeight: _propTypes["default"].number,
  /** Expressed in Inches */
  rackWidth: _propTypes["default"].number,
  pxToInch: _propTypes["default"].number,
  widthOffset: _propTypes["default"].number,
  rackStyle: _propTypes["default"].object,
  labelStyle: _propTypes["default"].object
};
Rack.defaultProps = {
  yOffsetTop: 30,
  yOffsetBottom: 40,
  width: 851,
  rackHeight: 42,
  // Expressed in RMU
  rackWidth: 19,
  // Expressed in Inches
  pxToInch: 10,
  widthOffset: 0.875,
  rackStyle: {
    stroke: "#737373",
    strokeWidth: 1,
    fill: "#D5D5D5"
  },
  labelStyle: {
    normal: {
      fill: "#9D9D9D",
      fontSize: 10,
      fontFamily: "verdana, sans-serif"
    }
  }
};