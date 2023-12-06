"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PowerNodeList = void 0;
var _react = _interopRequireDefault(require("react"));
var _underscore = _interopRequireDefault(require("underscore"));
var _PowerNode = require("./PowerNode");
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
var PowerNodeList = exports.PowerNodeList = /*#__PURE__*/function (_React$Component) {
  _inherits(PowerNodeList, _React$Component);
  var _super = _createSuper(PowerNodeList);
  function PowerNodeList() {
    _classCallCheck(this, PowerNodeList);
    return _super.apply(this, arguments);
  }
  _createClass(PowerNodeList, [{
    key: "assignPowerNodes",
    value: function assignPowerNodes(power) {
      /**
       * Power nodes are positioned around a rack in one of 9 potential locations
       * in the format Vertical - Horizontal:
       * Above - Left
       * Above - Middle
       * Above - Right
       * Center - Left
       * Center - Middle
       * Center - Right
       * Below - Left
       * Below - Middle
       * Below - Right
       *
       * There may be multiple nodes at each location, and will need to be rendered next to each other
       */

      var nodes = {
        "Above-Left": [],
        "Above-Center": [],
        "Above-Right": [],
        "Center-Left": [],
        "Center-Center": [],
        "Center-Right": [],
        "Below-Left": [],
        "Below-Center": [],
        "Below-Right": []
      };

      // Assign nodes to their position.  Each position will have 0 or more nodes
      _underscore["default"].each(power, function (powerNode) {
        var position = "".concat(powerNode.vPos, "-").concat(powerNode.hPos);
        // get the current length of the nodes position
        nodes[position].push(powerNode);
      });
      var newNodes = {};
      _underscore["default"].each(nodes, function (node, name) {
        if (node.length > 0) {
          newNodes[name] = node;
        }
      });
      return [_underscore["default"].flatten(_underscore["default"].values(nodes)), newNodes];
    }
  }, {
    key: "renderPositionLabel",
    value: function renderPositionLabel(label, x, y) {
      return /*#__PURE__*/_react["default"].createElement("text", {
        key: "position-".concat(label),
        x: x,
        y: y,
        textAnchor: "start",
        style: this.props.positionLabelStyle
      }, label);
    }
  }, {
    key: "drawPowerNode",
    value: function drawPowerNode(powerNode, key) {
      return /*#__PURE__*/_react["default"].createElement(_PowerNode.PowerNode, {
        powerNode: powerNode,
        name: powerNode.navTo,
        selected: powerNode.id === this.props.selected,
        key: key,
        labelStyle: powerNode.style.label,
        onSelectionChange: this.props.onSelectionChange
      });
    }
  }, {
    key: "positionPowerNodes",
    value: function positionPowerNodes(newNodes) {
      var _this = this;
      var elements = [];
      var xStart = this.props.xOffset;
      var yStart = this.props.yOffset;
      _underscore["default"].each(newNodes, function (group, groupName) {
        var label = _this.renderPositionLabel(groupName, xStart, yStart);
        yStart += 30;
        elements.push(label);
        _underscore["default"].each(group, function (powerNode, val) {
          var key = "".concat(groupName, "-").concat(val);
          powerNode["x"] = xStart + 20;
          powerNode["y"] = yStart;
          elements.push(_this.drawPowerNode(powerNode, key));
          yStart += 55;
        });
      });
      return elements;
    }
  }, {
    key: "render",
    value: function render() {
      var powerElements = this.assignPowerNodes(this.props.powerNodes);
      var groups = _underscore["default"].map(powerElements[1], function (group, groupName) {
        return groupName;
      });
      var groupCount = groups.length;
      var nodeCount = powerElements[0].length;
      var totalHeight = groupCount * 12 + nodeCount * 60 + this.props.yOffset * 2;
      var powerContainer = {
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
      var svgStyle = powerContainer.normal;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("svg", {
        className: className,
        style: svgStyle
      }, this.positionPowerNodes(powerElements[1])));
    }
  }]);
  return PowerNodeList;
}(_react["default"].Component);
PowerNodeList.defaultProps = {
  xOffset: 10,
  yOffset: 30,
  positionLabelStyle: {
    fill: "#9D9D9D",
    fontSize: 10,
    fontFamily: "verdana, sans-serif"
  }
};