"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Positions = exports.EndpointLinks = exports.Directions = exports.CircuitTypes = exports.CircuitSegmentTypes = void 0;
var _keymirror = _interopRequireDefault(require("keymirror"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 *  Copyright (c) 2018, The Regents of the University of California,
 *  through Lawrence Berkeley National Laboratory (subject to receipt
 *  of any required approvals from the U.S. Dept. of Energy).
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree.
 */

var Positions = exports.Positions = (0, _keymirror["default"])({
  TOP: null,
  BOTTOM: null,
  LEFT: null,
  RIGHT: null
});
var Directions = exports.Directions = (0, _keymirror["default"])({
  NORTH: null,
  SOUTH: null,
  EAST: null,
  WEST: null
});
var CircuitTypes = exports.CircuitTypes = (0, _keymirror["default"])({
  BASIC_CIRCUIT: null,
  CONCATENATED_CIRCUIT: null,
  PARALLEL_CIRCUIT: null
});
var EndpointLinks = exports.EndpointLinks = (0, _keymirror["default"])({
  PARENT_BEGIN: null,
  PARENT_END: null,
  PREVIOUS_END: null,
  NEXT_BEGIN: null
});
var CircuitSegmentTypes = exports.CircuitSegmentTypes = (0, _keymirror["default"])({
  CIRCUIT: null,
  ENDPOINT: null
});