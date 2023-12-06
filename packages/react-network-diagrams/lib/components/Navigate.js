"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigate = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
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
 * Draws a navigation triangle used to navigate back up to the parent. This is
 * probably overblown at this point. This is only really used now to navigate
 * back up to the parent circuit, but could be expanded if we want more
 * complicated navigation in the future.
 */
var Navigate = exports.Navigate = /*#__PURE__*/function (_React$Component) {
  _inherits(Navigate, _React$Component);
  var _super = _createSuper(Navigate);
  function Navigate(props) {
    var _this;
    _classCallCheck(this, Navigate);
    _this = _super.call(this, props);
    _this.state = {
      hover: false
    };
    _this.handleMouseClick = _this.handleMouseClick.bind(_assertThisInitialized(_this));
    _this.handleMouseOut = _this.handleMouseOut.bind(_assertThisInitialized(_this));
    _this.handleMouseOver = _this.handleMouseOver.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * User hovers over the navigational arrow
   */
  _createClass(Navigate, [{
    key: "handleMouseOver",
    value: function handleMouseOver() {
      this.setState({
        hover: true
      });
    }

    /**
     * User stops hovering over navigational arrow
     */
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut() {
      this.setState({
        hover: false
      });
    }
  }, {
    key: "handleMouseClick",
    value: function handleMouseClick() {
      if (this.props.id) {
        this.props.onSelectionChange(this.props.direction, this.props.id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var x = this.props.xpos >= 0 ? this.props.xpos : this.props.width / 2;
      var y = this.props.ypos >= 0 ? this.props.ypos : this.props.height - 25;
      var dx = 5;
      var dy = 10;
      var yflip;
      if (this.props.direction === _constants.Directions.NORTH) {
        yflip = 1;
      } else if (this.props.direction === _constants.Directions.SOUTH) {
        yflip = -1;
      }

      // Arrow points
      var path = "";
      path += "M" + x + "," + y;
      path += " L " + (x + dx) + "," + (y + yflip * dy);
      path += " L " + (x - dx) + "," + (y + yflip * dy);
      path += " L " + x + "," + y;
      var style = {
        normal: {
          fill: "#4EC1E0",
          opacity: 0.65
        },
        highlighted: {
          cursor: "pointer",
          fill: "#4EC1E0",
          opacity: 0.95
        }
      };
      var hitStyle = {
        cursor: "pointer",
        fillOpacity: 0
      };
      var navStyle = style.normal;
      if (this.state.hover) {
        navStyle = style.highlighted;
      }

      // Hit area
      var hitRect;
      if (this.props.direction === _constants.Directions.NORTH) {
        hitRect = /*#__PURE__*/_react["default"].createElement("rect", {
          className: "circuit-hitrect",
          style: hitStyle,
          x: x - dx * 2,
          y: y - dy / 2,
          width: dx * 4,
          height: dy * 2,
          onMouseOver: this.handleMouseOver,
          onMouseOut: this.handleMouseOut,
          onClick: this.handleMouseClick
        });
      } else if (this.props.direction === _constants.Directions.SOUTH) {
        hitRect = /*#__PURE__*/_react["default"].createElement("rect", {
          className: "circuit-hitrect",
          style: hitStyle,
          x: x - dx * 2,
          y: y - dy / 2 * 3,
          width: dx * 4,
          height: dy * 2,
          onMouseOver: this.handleMouseOver,
          onMouseOut: this.handleMouseOut,
          onClick: this.handleMouseClick
        });
      }
      if (this.props.id) {
        return /*#__PURE__*/_react["default"].createElement("g", {
          key: "navigation-group"
        }, /*#__PURE__*/_react["default"].createElement("path", {
          d: path,
          className: "circuit-navigate",
          style: navStyle
        }), hitRect);
      } else {
        return null;
      }
    }
  }]);
  return Navigate;
}(_react["default"].Component);
Navigate.propTypes = {
  navTo: _propTypes["default"].oneOfType([
  // Value passed down to the click
  _propTypes["default"].string,
  // handler at the lowest level primitive.
  _propTypes["default"].number // Will return to the onSelectionChange
  ]),
  direction: _propTypes["default"].oneOf([
  // Should the navigation go at the top or
  _constants.Directions.NORTH,
  // bottom of the container
  _constants.Directions.SOUTH]),
  margin: _propTypes["default"].number,
  // How far to inset the navigation
  width: _propTypes["default"].number,
  // Height and width of the container to
  height: _propTypes["default"].number,
  // guide positioning of the navigation
  onSelectionChange: _propTypes["default"].func // Callback for when the navigation is pressed
};
Navigate.defaultProps = {
  direction: _constants.Directions.SOUTH,
  margin: 50,
  width: 851,
  height: 200
};