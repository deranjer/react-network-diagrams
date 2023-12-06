"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrafficMap = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _underscore = _interopRequireDefault(require("underscore"));
var _BaseMap = require("./BaseMap");
var _Resizable = require("./Resizable");
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
 * A high level component for showing network topology, including visualizing
 * network traffic as a heat map.
 */
var TrafficMap = exports.TrafficMap = /*#__PURE__*/function (_React$Component) {
  _inherits(TrafficMap, _React$Component);
  var _super = _createSuper(TrafficMap);
  function TrafficMap() {
    _classCallCheck(this, TrafficMap);
    return _super.apply(this, arguments);
  }
  _createClass(TrafficMap, [{
    key: "bounds",
    value: function bounds() {
      if (this.props.bounds) {
        return this.props.bounds;
      }
      var minX = _underscore["default"].min(this.props.topology.nodes, function (node) {
        return node.x;
      }).x;
      var minY = _underscore["default"].min(this.props.topology.nodes, function (node) {
        return node.y;
      }).y;
      var maxX = _underscore["default"].max(this.props.topology.nodes, function (node) {
        return node.x;
      }).x;
      var maxY = _underscore["default"].max(this.props.topology.nodes, function (node) {
        return node.y;
      }).y;
      return {
        x1: minX,
        x2: maxX,
        y1: minY,
        y2: maxY
      };
    }
  }, {
    key: "nodeSize",
    value: function nodeSize(name) {
      return this.props.nodeSizeMap[name] || 7;
    }
  }, {
    key: "nodeShape",
    value: function nodeShape(name) {
      return this.props.nodeShapeMap[name] || "circle";
    }
  }, {
    key: "edgeThickness",
    value: function edgeThickness(capacity) {
      return this.props.edgeThicknessMap[capacity] || 5;
    }
  }, {
    key: "edgeShape",
    value: function edgeShape(name) {
      if (_underscore["default"].has(this.props.edgeShapeMap, name)) {
        return this.props.edgeShapeMap[name].shape;
      } else {
        return "linear";
      }
    }
  }, {
    key: "edgeCurveDirection",
    value: function edgeCurveDirection(name) {
      var direction;
      if (_underscore["default"].has(this.props.edgeShapeMap, name)) {
        if (this.props.edgeShapeMap[name].shape === "curved") {
          return this.props.edgeShapeMap[name].direction;
        }
      }
      return direction;
    }
  }, {
    key: "edgeCurveOffset",
    value: function edgeCurveOffset(name) {
      var offset;
      if (_underscore["default"].has(this.props.edgeShapeMap, name)) {
        if (this.props.edgeShapeMap[name].shape === "curved") {
          return this.props.edgeShapeMap[name].offset;
        }
      }
      return offset;
    }
  }, {
    key: "selectEdgeColor",
    value: function selectEdgeColor(bps) {
      var gbps = bps / 1.0e9;
      for (var i = 0; i < this.props.edgeColorMap.length; i++) {
        var row = this.props.edgeColorMap[i];
        if (gbps >= row.range[0]) {
          return row.color;
        }
      }
      return "#C9CACC";
    }
  }, {
    key: "filteredPaths",
    value: function filteredPaths() {
      var _this = this;
      return _underscore["default"].filter(this.props.topology.paths, function (path) {
        if (_underscore["default"].isArray(_this.props.showPaths)) {
          return _underscore["default"].contains(_this.props.showPaths, path.name);
        }
        return true;
      });
    }
  }, {
    key: "buildTopology",
    value: function buildTopology() {
      var _this2 = this;
      var topology = {};
      if (_underscore["default"].isNull(this.props.topology)) {
        return null;
      }
      var genericStyle = {
        node: {
          normal: {
            fill: "#B0B0B0",
            stroke: "#9E9E9E",
            cursor: "pointer"
          },
          selected: {
            fill: "#37B6D3",
            stroke: "rgba(55, 182, 211, 0.22)",
            strokeWidth: 10,
            cursor: "pointer"
          },
          muted: {
            fill: "#B0B0B0",
            stroke: "#9E9E9E",
            opacity: 0.6,
            cursor: "pointer"
          }
        },
        label: {
          normal: {
            fill: "#696969",
            stroke: "none",
            fontSize: 9
          },
          selected: {
            fill: "#333",
            stroke: "none",
            fontSize: 11
          },
          muted: {
            fill: "#696969",
            stroke: "none",
            fontSize: 8,
            opacity: 0.6
          }
        }
      };

      // Create a node list
      topology.nodes = _underscore["default"].map(this.props.topology.nodes, function (node) {
        var n = _underscore["default"].clone(node);

        // Radius is based on the type of node, given in the nodeSizeMap
        n.radius = _this2.nodeSize(node.type);
        n.labelPosition = node.label_position;
        n.labelOffsetX = node.label_dx;
        n.labelOffsetY = node.label_dy;
        var styleMap = _underscore["default"].has(_this2.props.stylesMap, node.type) ? _this2.props.stylesMap[node.type] : genericStyle;
        n.style = styleMap.node;
        n.labelStyle = styleMap.label;
        n.shape = _this2.nodeShape(node.name);
        return n;
      });

      // Create the edge list
      topology.edges = _underscore["default"].map(this.props.topology.edges, function (edge) {
        var edgeName = "".concat(edge.source, "--").concat(edge.target);
        return {
          width: _this2.edgeThickness(edge.capacity),
          classed: edge.capacity,
          source: edge.source,
          target: edge.target,
          totalCapacity: edge.total_capacity,
          ifaces: edge.ifaces,
          name: edgeName,
          shape: _this2.edgeShape(edgeName),
          curveDirection: _this2.edgeCurveDirection(edgeName),
          offset: _this2.edgeCurveOffset(edgeName)
        };
      });

      // Create the path list, filtering based on what is in showPaths
      if (this.props.showPaths) {
        topology.paths = _underscore["default"].map(this.filteredPaths(), function (path) {
          var color = _underscore["default"].has(_this2.props.pathColorMap, path.name) ? _this2.props.pathColorMap[path.name] : "lightsteelblue";
          var width = _underscore["default"].has(_this2.props.pathWidthMap, path.name) ? _this2.props.pathWidthMap[path.name] : 4;
          return {
            name: path.name,
            steps: path.steps,
            color: color,
            width: width
          };
        });
      }

      // Colorize the topology
      if (this.props.traffic) {
        if (!this.props.showPaths && this.props.edgeDrawingMethod === "bidirectionalArrow") {
          _underscore["default"].each(topology.edges, function (edge) {
            var sourceTargetName = "".concat(edge.source, "--").concat(edge.target);
            var targetSourceName = "".concat(edge.target, "--").concat(edge.source);
            var sourceTargetTraffic = _this2.props.traffic.get(sourceTargetName);
            var targetSourceTraffic = _this2.props.traffic.get(targetSourceName);
            edge.sourceTargetColor = _this2.selectEdgeColor(sourceTargetTraffic);
            edge.targetSourceColor = _this2.selectEdgeColor(targetSourceTraffic);
          });
        } else {
          var edgeMap = {};
          _underscore["default"].each(this.filteredPaths(), function (path) {
            var pathAtoZTraffic = _this2.props.traffic.get("".concat(path.name, "--AtoZ"));
            var pathZtoATraffic = _this2.props.traffic.get("".concat(path.name, "--ZtoA"));
            var prev = null;
            _underscore["default"].each(path.steps, function (step) {
              if (prev) {
                var sourceTargetName = "".concat(prev, "--").concat(step);
                if (!_underscore["default"].has(edgeMap, sourceTargetName)) {
                  edgeMap[sourceTargetName] = 0;
                }
                edgeMap[sourceTargetName] += pathAtoZTraffic;
                var targetSourceName = "".concat(step, "--").concat(prev);
                if (!_underscore["default"].has(edgeMap, targetSourceName)) {
                  edgeMap[targetSourceName] = 0;
                }
                edgeMap[targetSourceName] += pathZtoATraffic;
              }
              prev = step;
            });
          });
          _underscore["default"].each(topology.edges, function (edge) {
            edge.stroke = _this2.props.edgeColor ? _this2.props.edgeColor : "#DDD";
            var sourceTargetName = "".concat(edge.source, "--").concat(edge.target);
            var targetSourceName = "".concat(edge.target, "--").concat(edge.source);
            if (_underscore["default"].has(edgeMap, sourceTargetName)) {
              var sourceTargetTraffic = edgeMap[sourceTargetName];
              edge.sourceTargetColor = _this2.selectEdgeColor(sourceTargetTraffic);
            }
            if (_underscore["default"].has(edgeMap, targetSourceName)) {
              var targetSourceTraffic = edgeMap[targetSourceName];
              edge.targetSourceColor = _this2.selectEdgeColor(targetSourceTraffic);
            }
          });
        }
      }
      topology.name = this.props.topology.name;
      topology.description = this.props.topology.description;
      return topology;
    }
  }, {
    key: "handleSelectionChanged",
    value: function handleSelectionChanged(selectionType, selection) {
      if (this.props.onSelectionChange) {
        this.props.onSelectionChange(selectionType, selection);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var topo = this.buildTopology();
      var bounds = this.bounds();
      var aspect = (bounds.x2 - bounds.x1) / (bounds.y2 - bounds.y1);
      var autoSize = this.props.autoSize;
      var defaultStyle = {
        background: "#F6F6F6",
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: "#E6E6E6"
      };
      var style = this.props.style ? this.props.style : defaultStyle;
      if (autoSize) {
        return /*#__PURE__*/_react["default"].createElement(_Resizable.Resizable, {
          aspect: aspect,
          style: style
        }, /*#__PURE__*/_react["default"].createElement(_BaseMap.BaseMap, {
          topology: topo,
          paths: topo.paths,
          bounds: bounds,
          width: this.props.width,
          height: this.props.height,
          margin: this.props.margin,
          selection: this.props.selection,
          edgeDrawingMethod: this.props.edgeDrawingMethod,
          onSelectionChange: function onSelectionChange(selectionType, selection) {
            return _this3.handleSelectionChanged(selectionType, selection);
          }
        }));
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: style
        }, /*#__PURE__*/_react["default"].createElement(_BaseMap.BaseMap, {
          topology: topo,
          paths: topo.paths,
          bounds: bounds,
          width: this.props.width,
          height: this.props.height,
          margin: this.props.margin,
          selection: this.props.selection,
          edgeDrawingMethod: this.props.edgeDrawingMethod,
          onSelectionChange: function onSelectionChange(selectionType, selection) {
            return _this3.handleSelectionChanged(selectionType, selection);
          }
        }));
      }
    }
  }]);
  return TrafficMap;
}(_react["default"].Component);
TrafficMap.defaultProps = {
  edgeThicknessMap: {
    "100G": 5,
    "10G": 3,
    "1G": 1.5,
    subG: 1
  },
  edgeColor: "#DDD",
  edgeColorMap: [],
  nodeSizeMap: {},
  nodeShapeMap: {},
  edgeShapeMap: {},
  selected: false,
  shape: "circle",
  stylesMap: {},
  showPaths: false,
  autoSize: true
};
TrafficMap.propTypes = {
  /** The width of the circuit diagram */
  width: _propTypes["default"].number,
  /**
   * The topology structure, as detailed above. This contains the
   * descriptions of nodes, edges and paths used to render the topology
   */
  topology: _propTypes["default"].object,
  /**
   * Specified as an object containing x1, y1 and x2, y2. This is the region
   * to display on the map. If this isn't specified the bounds will be
   * calculated from the nodes in the Map.
   */
  bounds: _propTypes["default"].shape({
    x1: _propTypes["default"].number,
    y1: _propTypes["default"].number,
    x2: _propTypes["default"].number,
    y2: _propTypes["default"].number
  }),
  /**
   * The is the overall rendering style for the edge connections. Maybe
   * one of the following strings:
   *
   *  * "simple" - simple line connections between nodes
   *  * "bidirectionalArrow" - network traffic represented by bi-directional arrows
   *  * "pathBidirectionalArrow" - similar to "bidirectionalArrow", but only for
   *  edges that are used in the currently displayed path(s).
   */
  edgeDrawingMethod: _propTypes["default"].oneOf(["simple", "bidirectionalArrow", "pathBidirectionalArrow"]),
  /**
   * Either a boolean or a list of path names. If a bool, and true, then all
   * paths will be shown. If a list then only the paths in that list will be
   * shown. The default is to show no paths.
   */
  showPaths: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  /**
   * A mapping of the capacity field within the tologogy edge object
   * to a line thickness for rendering the edges.
   *
   * Example:
   *
   * ```
   * const edgeThicknessMap = {
   *     "100G": 5,
   *     "10G": 3,
   *     "1G": 1.5,
   *     "subG": 1
   * };
   * ```
   */
  edgeThicknessMap: _propTypes["default"].object,
  /**
   * The default color for an edge which isn't colored using the `edgeColorMap`.
   */
  edgeColor: _propTypes["default"].string,
  /**
   * A mapping of traffic on the link, in Gbps, to a color and label. The label is because the same
   * mapping can be used to create a legend for the map.
   *
   * Example:
   *
   * ```
   * const edgeColorMap = [
   *     { color: "#990000", label: ">=50 Gbps", range: [50, 100] },
   *     { color: "#bd0026", label: "20 - 50", range: [20, 50] },
   *     { color: "#cc4c02", label: "10 - 20", range: [10, 20] },
   *     { color: "#016c59", label: "5 - 10", range: [5, 10] },
   *     { color: "#238b45", label: "2 - 5", range: [2, 5] },
   *     { color: "#3690c0", label: "1 - 2", range: [1, 2] },
   *     { color: "#74a9cf", label: "0 - 1", range: [0, 1] }
   * ];
   * ```
   */
  edgeColorMap: _propTypes["default"].array,
  /**
   * A mapping from the type field in the node object to a size to draw the shape
   *
   * Example:
   * ```
   * const nodeSizeMap = {
   *     hub: 5.5,
   *     esnet_site: 7
   * };
   * ```
   */
  nodeSizeMap: _propTypes["default"].object,
  /**
   * Mapping of node name to shape (default is "circle", other options are
   * "cloud" or "square", currently).
   *
   * Example:
   * ```
   * const nodeShapeMap = {
   *     DENV: "square"
   * };
   * ```
   */
  nodeShapeMap: _propTypes["default"].object,
  /**
   * A mapping of the edge name (which is source + "--" + target) to a
   * dict of edge shape options:
   *  * `shape` (either "linear" or "curved")
   *  * `direction` (if shape is curved, either "left" or "right")
   *  * `offset` (if shape is curved, the amount of curve, which is
   *  pixel offset from a straight line between the source and target at the midpoint)
   *
   * Example:
   * ```
   * const edgeShapeMap = {
   *     "ALBQ--DENV": {
   *     "shape": "curved",
   *     "direction": "right",
   *     "offset": 15
   * }
   * ```
   */
  edgeShapeMap: _propTypes["default"].object,
  /** Display the endpoint selected */
  selected: _propTypes["default"].bool,
  /** The shape of the endpoint */
  shape: _propTypes["default"].oneOf(["circle", "square", "cloud"]),
  stylesMap: _propTypes["default"].object,
  autoSize: _propTypes["default"].bool
};