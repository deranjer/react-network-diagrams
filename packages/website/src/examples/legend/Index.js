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
import { MapLegend } from "react-network-diagrams";

import legend_docs from "./legend_docs.md";
import legend_thumbnail from "./legend_thumbnail.png";

//
// Legend example
//

class legend extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectionType: null,
            selection: null
        };

        this.handleSelectionChanged = this.handleSelectionChanged.bind(this);
    }

    handleSelectionChanged(selectionType, selection) {
        this.setState({selectionType, selection});
    }

    render() {
        const trafficLegendData = [
            {color: "#990000", label: "50+ Gbps", range: [50, 100]},
            {color: "#bd0026", label: "20 - 50", range: [20, 50]},
            {color: "#cc4c02", label: "10 - 20", range: [10, 20]},
            {color: "#016c59", label: "5 - 10", range: [5, 10]},
            {color: "#238b45", label: "2 - 5", range: [2, 5]},
            {color: "#3690c0", label: "1 - 2", range: [1, 2]},
            {color: "#74a9cf", label: "0 - 1", range: [0, 1]}
        ];

        const capacityMap = {
            "100 Gbps": 7,
            "40 Gbps": 4,
            "10 Gbps": 1,
            "1 Gbps": 0.5
        };

        const nodeLegendData = [
            {color: "#B0B0B0", label: "Site", classed: "esnet_site", radius: 7, shape: "square"},
            {color: "#CBCBCB", label: "Hub", classed: "hub", radius: 7, shape: "circle"},
        ];

        const edgeTypes = _.map(capacityMap, (width, name) => {
            let label = name;
            return {
                text: label,
                strokeWidth: width
            };
        });

        const colorSwatches = _.map(trafficLegendData, (color) => {
            return {
                text: color.label,
                stroke: color.color,
                fill: color.color
            };
        });

        const nodeTypes = _.map(nodeLegendData, (nodeInfo) => {
            return {
                text: nodeInfo.label,
                stroke: nodeInfo.color,
                fill: nodeInfo.color,
                radius: nodeInfo.radius,
                classed: nodeInfo.classed,
                shape: nodeInfo.shape,
            };
        });

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <svg width="360" height="100">
                            <MapLegend
                                x={10}
                                y={10}
                                itemsPerColumn={4}
                                edgeTypes={edgeTypes}
                                nodeTypes={nodeTypes}
                                colorSwatches={colorSwatches}
                                edgeColor={"#6D6E71"}
                                columnWidth={95}
                                exampleWidth={15}
                            />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
};

// Export example
export default {legend, legend_docs, legend_thumbnail};
