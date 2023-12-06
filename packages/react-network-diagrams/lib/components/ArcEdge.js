"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArcEdge = void 0;
var _underscore = _interopRequireDefault(require("underscore"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _victor = _interopRequireDefault(require("victor"));
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
// Alias
var Vector = _victor["default"];

/**
 * This component draws a curved path between a source and target. The
 * source and target are specified as props x1, y1 and x2, y2.
 *
 * The curve of the path arcs through a point offset from the mid-point
 * of the line between source and target. This is specified as the prop
 * offset. The offset may be "left" or "right" as specified as curveDirection.
 *
 * An arrow may be added by passing an 'arrow' prop of true and may be
 * customized by supplying arrowWidth and/or arrowHeight. It defaults to
 * being the width*1.5 wide and width*2 long.0
 *
 * Stroke color and width can also be supplied.
 */
var ArcEdge = exports.ArcEdge = /*#__PURE__*/function (_React$Component) {
  _inherits(ArcEdge, _React$Component);
  var _super = _createSuper(ArcEdge);
  function ArcEdge() {
    _classCallCheck(this, ArcEdge);
    return _super.apply(this, arguments);
  }
  _createClass(ArcEdge, [{
    key: "handleClick",
    value: function handleClick(e) {
      e.stopPropagation();
      if (this.props.onSelectionChange) {
        this.props.onSelectionChange("edge", this.props.name);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      // Class
      var classed = "edge-curved";
      var labelClassed = "edge-label";
      var styleModifier = "normal";
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
      if (this.props.invisible) {
        classed += " edge-event-region";
        labelClassed += " edge-event-region";
      }
      if (!_underscore["default"].isUndefined(this.props.classed)) {
        classed += " " + this.props.classed;
      }
      var source = new Vector(this.props.x1, this.props.y1);
      var target = new Vector(this.props.x2, this.props.y2);
      var diff = target.clone().subtract(source);
      var norm = diff.clone().norm();
      var len = diff.length();

      //
      // XXX(jdugan): this doesn't work for horizontal lines
      //
      var angle = 90;
      if (diff.y < 0 && this.props.curveDirection === "left" || diff.y > 0 && this.props.curveDirection === "right") {
        angle = -90;
      }
      var perp = norm.clone().rotateDeg(angle);
      var mid = new Vector(len / 2, len / 2);
      var midpt = norm.clone().multiply(mid).add(source);
      var offset = new Vector(this.props.offset, this.props.offset);
      offset.multiply(perp);
      var control = midpt.clone().add(offset);

      //
      // If the curved edge has multiple paths, with this path being at
      // 'position' (this.props.position) then calculate those the curve
      // to be offset from the centerline of the arced path
      //

      var position = this.props.position;
      var arrowWidth = this.props.arrowWidth || this.props.width * 1.5;
      var arrowLength = this.props.arrowHeight || this.props.width * 2;

      // Positioned lines bend from source, to sourceBendControl, to
      // targetBendControl, and end at target.
      var bendOffset = 15;
      var bendScalar = new Vector(bendOffset, bendOffset);
      var sourceToControl = control.clone().subtract(source);
      var sourceToControlNormalize = sourceToControl.clone().norm();
      var targetToControl = control.clone().subtract(target);
      var targetToControlNormalize = targetToControl.clone().norm();
      var sourceBend = sourceToControlNormalize.clone().multiply(bendScalar).add(source);
      var targetBend = targetToControlNormalize.clone().multiply(bendScalar).add(target);
      var sourceBendPerp = new Vector(-sourceToControlNormalize.y, sourceToControlNormalize.x);
      var sourceBendPerpScalar = new Vector(position, position);
      var sourceBendControl = sourceBendPerp.clone().multiply(sourceBendPerpScalar).add(sourceBend);
      var targetBendPerp = new Vector(-targetToControlNormalize.y, targetToControlNormalize.x);
      var targetBendPerpScalar = new Vector(-position, -position);
      var targetBendControl = targetBendPerp.clone().multiply(targetBendPerpScalar).add(targetBend);

      // Draw an arrow at the target end
      var arrowLengthScalar = new Vector(-arrowLength, -arrowLength);
      var arrowLeftScalar = new Vector(arrowWidth / 2, arrowWidth / 2);
      var arrowRightScalar = new Vector(-arrowWidth / 2, -arrowWidth / 2);
      var arrowHead = targetToControlNormalize.clone().multiply(arrowLengthScalar).add(targetBendControl);
      var arrowBaseLeft = targetBendPerp.clone().multiply(arrowLeftScalar).add(targetBendControl);
      var arrowBaseRight = targetBendPerp.clone().multiply(arrowRightScalar).add(targetBendControl);

      // Arc options
      var y = this.props.offset;
      var radius = (len * len + 4 * y * y) / (8 * y);
      var rotation = 0;
      var largeArcFlag = 0;
      var sweepFlag = angle === 90 ? 0 : 1;

      // Line and Arc SVG path
      var path = "";
      path += "M" + source.x + "," + source.y;
      path += " L " + sourceBendControl.x + " " + sourceBendControl.y;
      path += " A " + radius + " " + radius + " " + rotation + " " + largeArcFlag + " " + sweepFlag + " " + targetBendControl.x + " " + targetBendControl.y;
      if (!this.props.arrow) {
        path += " L " + target.x + " " + target.y;
      }

      // Arrow SVG path
      var arrow = "M" + arrowHead.x + "," + arrowHead.y + " ";
      arrow += "L" + arrowBaseLeft.x + "," + arrowBaseLeft.y;
      arrow += "L" + arrowBaseRight.x + "," + arrowBaseRight.y;
      var opacity = 1.0;
      if (this.props.invisible) {
        opacity = 0;
      } else if (this.props.muted) {
        opacity = 0.3;
      }

      // Label Positioning
      var ry = Math.abs(targetBendControl.y - sourceBendControl.y);
      var rx = Math.abs(targetBendControl.x - sourceBendControl.x);
      var labelAngle = Math.atan2(ry, rx) * 180 / Math.PI;
      var cx = control.x;
      var cy = control.y + this.props.position;
      if (target.y < source.y && source.x < target.x || source.x > target.x && target.y > source.y) {
        labelAngle = -labelAngle;
      }
      if (source.x > target.x) {
        cy = control.y - this.props.position;
      }
      var labelElement = null;
      if (this.props.label) {
        labelElement = /*#__PURE__*/_react["default"].createElement(_Label.Label, {
          x: cx,
          y: cy,
          r: labelAngle,
          textAnchor: this.props.textAnchor,
          classed: labelClassed,
          style: this.props.labelStyle[styleModifier],
          label: this.props.label,
          xOffset: this.props.labelOffsetX,
          yOffset: this.props.labelOffsetY,
          labelPosition: this.props.labelPosition
        });
      }
      if (this.props.arrow) {
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("g", {
          strokeWidth: this.props.width,
          stroke: this.props.color,
          opacity: opacity
        }, /*#__PURE__*/_react["default"].createElement("path", {
          d: path,
          fill: "none",
          className: classed,
          onClick: function onClick(e) {
            return _this.handleClick(e);
          }
        }), /*#__PURE__*/_react["default"].createElement("path", {
          d: arrow,
          className: classed,
          stroke: this.props.color,
          fill: this.props.color,
          strokeWidth: "1"
        })), labelElement);
      } else {
        return /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("g", {
          strokeWidth: this.props.width,
          stroke: this.props.color,
          opacity: opacity
        }, /*#__PURE__*/_react["default"].createElement("path", {
          d: path,
          fill: "none",
          className: classed,
          onClick: function onClick(e) {
            return _this.handleClick(e);
          }
        })), labelElement);
      }
    }
  }]);
  return ArcEdge;
}(_react["default"].Component);
ArcEdge.propTypes = {
  /** An offset to the position of the label which can be used for fine tuning */
  offset: _propTypes["default"].number,
  /** The width of the circuit diagram */
  width: _propTypes["default"].number,
  color: _propTypes["default"].string,
  curveDirection: _propTypes["default"].string,
  /**
   * Boolean value that controls if a directional arrow is drawn instead of line-caps.
   * When arrow is set to "true", the vector between x1, y1 and x2, y2 will have the
   * Line-caps replaced with a directional arrow. Arrowheads can be sized using the
   * arrowWidth and arrowHeight property.
   */
  arrow: _propTypes["default"].bool,
  /**
   * Controls the angle of the offset from the center of the line.
   */
  position: _propTypes["default"].number,
  /** Display the endpoint selected */
  selected: _propTypes["default"].bool,
  /** Display the endpoint muted */
  muted: _propTypes["default"].bool
};
ArcEdge.defaultProps = {
  offset: 20,
  width: 1,
  color: "#ddd",
  curveDirection: "left",
  arrow: false,
  position: 0,
  selected: false,
  muted: false
};