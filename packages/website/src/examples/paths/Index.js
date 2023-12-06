/**
 *  Copyright (c) 2018, The Regents of the University of California,
 *  through Lawrence Berkeley National Laboratory (subject to receipt
 *  of any required approvals from the U.S. Dept. of Energy).
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import React from "react";
import _ from "underscore";
import { TrafficMap } from "react-network-diagrams";
import * as Immutable from "immutable";
import { TimeEvent } from "pondjs";

import paths_docs from "./paths_docs.md";
import paths_thumbnail from "./paths_thumbnail.png";

// Test data
import topo from "./topo.json";

class OptionsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: this.props.initialChoice};
    }

    handleChange(e) {
        // State changes
        this.setState({value: e.target.value});

        // Callbacks
        if (this.props.onChange) {
            this.props.onChange(this.props.attr, e.target.value);
        }
    }

    render() {
        const classes = "btn-group btn-group-xs";
        const overlayStyle = {position: "absolute", top: 10, right: 20, zIndex: 10};
        if (!this.props.initialChoiceList) {
            console.warn("No initial choice list supplied for attr", this.props.attr);
        }

        const buttonElements = _.map(this.props.initialChoiceList, (choice, i) => {
            if (Number(i) === Number(this.props.initialChoice)) {
                return (
                    <button type="button" className="active btn btn-default"
                            key={i} value={i} onClick={e => this.handleChange(e)}>{choice} </button>
                );
            } else {
                return (
                    <button type="button" className="btn btn-default"
                            key={i} value={i} onClick={e => this.handleChange(e)}>{choice}</button>
                );
            }
        });

        const width = this.props.width ? `${this.props.width}px` : "400px";

        // Key based on the choice list
        const list = _.map(this.props.initialChoiceList, choice => choice).join("-");

        return (
            <div className={classes} style={overlayStyle} key={list} width={width}>
                {buttonElements}
            </div>
        );
    }
};

//
// Example
//

class paths extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectionType: null,
            selection: null,
            mapMode: 0
        };

        this.handleMapToggle = this.handleMapToggle.bind(this);
    }

    handleSelectionChanged(selectionType, selection) {
        this.setState({selectionType, selection});
    }

    handleMapToggle(key, value) {
        this.setState({mapMode: Number(value)});
    }

    render() {
        const mapSelection = {
            nodes: this.state.selectionType === "node" ?
                [this.state.selection] : [],
            edges: this.state.selectionType === "edge" ?
                [this.state.selection] : []
        };
        
        // Maps link capacity to line thickness
        const edgeThicknessMap = {
            "100G": 5,
            "10G": 3,
            "1G": 1.5,
            subG: 1
        };

        // Maps edge name to edge shape. Current options are linear (default)
        // or curved. If curved you can specify the direction and offset
        // to control the curve.
        const edgeShapeMap = {
            "AMST--BOST": {
                shape: "curved",
                direction: "right",
                offset: 15
            },
            "LOND--NEWY": {
                shape: "curved",
                direction: "right",
                offset: 15
            },
            "AOFA--LOND": {
                shape: "curved",
                direction: "right",
                offset: 15
            },
            "CERN--WASH": {
                shape: "curved",
                direction: "right",
                offset: 15
            }
        };

        // The color map maps an edge value (within the range) to a color
        const edgeColorMap = [
            {color: "#990000", label: ">=50 Gbps", range: [50, 100]},
            {color: "#bd0026", label: "20 - 50", range: [20, 50]},
            {color: "#cc4c02", label: "10 - 20", range: [10, 20]},
            {color: "#016c59", label: "5 - 10", range: [5, 10]},
            {color: "#238b45", label: "2 - 5", range: [2, 5]},
            {color: "#3690c0", label: "1 - 2", range: [1, 2]},
            {color: "#74a9cf", label: "0 - 1", range: [0, 1]}
        ];

        // Mapping of node type to size of shape
        const nodeSizeMap = {
            hub: 5.5,
            esnet_site: 7
        };

        // Mapping of node name to shape (default is circle, other
        // options are cloud or square currently)
        const nodeShapeMap = {
            CERN: "square"
        };

        const siteStyle = {
            node: {
                normal: {fill: "#B0B0B0", stroke: "#9E9E9E", cursor: "pointer"},
                selected: {fill: "#37B6D3", stroke: "rgba(55, 182, 211, 0.22)",
                           strokeWidth: 10, cursor: "pointer"},
                muted: {fill: "#B0B0B0", stroke: "#9E9E9E", opacity: 0.6,
                        cursor: "pointer"}
            },
            label: {
                normal: {fill: "#696969", stroke: "none", fontSize: 9},
                selected: {fill: "#333", stroke: "none", fontSize: 11},
                muted: {fill: "#696969", stroke: "none", fontSize: 8,
                        opacity: 0.6}
            }
        };

        const hubStyle = {
            node: {
                normal: {fill: "#CBCBCB",stroke: "#BEBEBE",
                         cursor: "pointer"},
                selected: {fill: "#37B6D3", stroke: "rgba(55, 182, 211, 0.22)",
                           strokeWidth: 10, cursor: "pointer"},
                muted: {fill: "#CBCBCB", stroke: "#BEBEBE", opacity: 0.6,
                        cursor: "pointer"}
            },
            label: {
                normal: {fill: "#696969", stroke: "none", fontSize: 9},
                selected: {fill: "#333",stroke: "none", fontSize: 11},
                muted: {fill: "#696969", stroke: "none", fontSize: 8,
                opacity: 0.6}
            }
        };

        // Mapping of node type to style
        const stylesMap = {
            hub: hubStyle,
            esnet_site: siteStyle
        };

        const pathColorMap = {
            NASA_south: "#ff7f0e",
            NASA_north: "#aec7e8",
            MDTM: "#d62728",
            Caltech_NERSC: "#9467bd",
            Caltech_CERN: "#9467bd",
            NRL_direct: "#c49c94"
        };

        const pathWidthMap = {
            NASA_south: 4,
            NASA_north: 4,
            MDTM: 4,
            Caltech_NERSC: 4,
            Caltech_CERN: 4,
            NRL_direct: 4
        };

        //
        // Traffic
        //

        const timestamp = new Date();
        const traffic = new TimeEvent(timestamp, Immutable.Map({
            "NASA_south--AtoZ": 20000000000,
            "NASA_south--ZtoA": 3000000000,
            "NASA_north--AtoZ": 40000000000,
            "NASA_north--ZtoA": 5000000000
        }));

        const drawingMethod = this.state.mapMode === 0 ?
            "simple" : "pathBidirectionalArrow";
        const showPaths = ["NASA_north", "NASA_south"];

        return (
            <div>
                <div className="row">
                    <div className="col-md-12" style={{position: "relative"}}>
                        <OptionsView
                            attr="map" initialChoiceList={["Route", "Traffic"]}
                            key={this.state.mapMode}
                            initialChoice={Number(this.state.mapMode)}
                            onChange={this.handleMapToggle}/>
                          <TrafficMap
                            topology={topo}
                            style={{
                                background: "#0a1d52",
                                borderRadius: 5,
                                borderStyle: "solid",
                                borderWidth: 2,
                                borderColor: "black"
                            }}
                            traffic={traffic}
                            bounds={{x1: -5, y1: 5, x2: 240, y2: 120}}
                            edgeColor="#4e6185"
                            edgeColorMap={edgeColorMap}
                            edgeDrawingMethod={drawingMethod}
                            edgeThicknessMap={edgeThicknessMap}
                            edgeShapeMap={edgeShapeMap}
                            nodeSizeMap={nodeSizeMap}
                            nodeShapeMap={nodeShapeMap}
                            stylesMap={stylesMap}
                            pathColorMap={pathColorMap}
                            pathWidthMap={pathWidthMap}
                            showPaths={showPaths}
                            selection={mapSelection}
                            onSelectionChange={(selectionType, selection) => this.handleSelectionChanged(selectionType, selection)} />  
                    </div>
                </div>
            </div>
        );
    }
};

// Export example
export default {paths, paths_docs, paths_thumbnail};
