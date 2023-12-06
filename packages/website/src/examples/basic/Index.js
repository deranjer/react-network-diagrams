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
import { BasicCircuit, Resizable } from "react-network-diagrams";

import { stylesMap } from "../../styles/styles";

import basic_docs from "./basic_docs.md";
import basic_thumbnail from "./basic_thumbnail.png";

const circuitTypeList = [
    "Optical",
    "Leased",
    "Dark Fiber",
    "Equipment-Equipment",
    "Cross-Connect",
    "Panel Coupler",
    "Backplane Mate"
];
const labelPositionChoiceList = ["top", "bottom"];
const endpointPositionChoiceList = [
    "top",
    "bottom",
    "bottomleftangled",
    "bottomrightangled"
];

const circuitTypeProperties = {
    optical: {
        style: stylesMap.optical,
        lineShape: "linear"
    },
    leased: {
        style: stylesMap.leased,
        lineShape: "linear"
    },
    darkFiber: {
        style: stylesMap.darkFiber,
        lineShape: "linear"
    },
    equipmentToEquipment: {
        style: stylesMap.equipmentToEquipment,
        lineShape: "linear"
    },
    crossConnect: {
        style: stylesMap.crossConnect,
        lineShape: "linear"
    },
    coupler: {
        style: stylesMap.coupler,
        lineShape: "square",
        size: 36,
        squareWidth: 25,
        noNavigate: true
    },
    backplaneMate: {
        style: stylesMap.coupler,
        lineShape: "square",
        size: 36,
        squareWidth: 40,
        centerLine: true
    }
};

class Selector extends React.Component {

    handleChange(e) {
        const value = e.target.value;
        this.props.handleChange(value);
    }

    render() {
        const options = _.map(this.props.selectionList, option => {
            return (
                <option value={option} key={option}>{option}</option>
            );
        });
        return (
            <select ref="menu" value={this.props.selected} onChange={this.handleChange.bind(this)}>
                {options}
            </select>
        );
    }
};

class basic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            circuitType: circuitTypeProperties.crossConnect,
            circuitTypeChoice: circuitTypeList[4],
            circuitLabelPositionChoice: labelPositionChoiceList[0],
            endpointLabelPositionChoice: endpointPositionChoiceList[2],
            disabled: false
        };

        this.handleDisabledChange = this.handleDisabledChange.bind(this);
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    handleSelectionChange(e, value) {
        const message = `You clicked connection ${e} with name ${value}`;
        window.alert(message);
    }

    handleTypeChange(l) {
        switch (l) {
            case "Optical":
                this.setState({circuitType: circuitTypeProperties.optical});
                break;
            case "Leased":
                this.setState({circuitType: circuitTypeProperties.leased});
                break;
            case "Dark Fiber":
                this.setState({circuitType: circuitTypeProperties.darkFiber});
                break;
            case "Equipment-Equipment":
                this.setState({circuitType: circuitTypeProperties.equipmentToEquipment});
                break;
            case "Cross-Connect":
                this.setState({circuitType: circuitTypeProperties.crossConnect});
                break;
            case "Panel Coupler":
                this.setState({circuitType: circuitTypeProperties.coupler});
                break;
            case "Backplane Mate":
                this.setState({circuitType: circuitTypeProperties.backplaneMate});
                break;
            default:
                break;
        }
        this.setState({circuitTypeChoice: l});
    }

    handleDisabledChange() {
        this.setState({
            disabled: this.state.disabled ? false : true
        });
    }

    renderChoices() {
        return (
            <div>
                <div>
                    <Selector
                        selected={this.state.circuitTypeChoice}
                        selectionList={circuitTypeList}
                        handleChange={this.handleTypeChange} />
                    <p>Select type of circuit</p>
                </div>

                <div>
                    <Selector
                        selected={this.state.circuitLabelPositionChoice}
                        selectionList={labelPositionChoiceList}
                        handleChange={circuitLabelPositionChoice => {
                            this.setState({circuitLabelPositionChoice});
                        }} />
                    <p>Select the position of the circuit label</p>
                </div>
                <div>
                    <Selector
                        selected={this.state.endpointLabelPositionChoice}
                        selectionList={endpointPositionChoiceList}
                        handleChange={endpointLabelPositionChoice => {
                            this.setState({endpointLabelPositionChoice});
                        }} />
                    <p>Select the position of the endpoint labels</p>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="disable"
                        value={this.state.disabled}
                        onChange={this.handleDisabledChange} /> Disable
                    <p>Select whether to render the circuit as disabled</p>
                </div>
            </div>
        );
    }

    render() {
        const label = this.state.circuitTypeChoice;
        const circuitType = this.state.circuitType;
        const {
            style,
            lineShape,
            noNavigate,
            centerLine,
            squareWidth,
            size } = circuitType;
        const connectionLabelPosition = this.state.circuitLabelPositionChoice;
        const endpointLabelPosition = this.state.endpointLabelPositionChoice;

        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        {this.renderChoices()}
                    </div>
                    <div className="col-md-9">
                        <Resizable>
                            <BasicCircuit
                                title={label}
                                lineStyle={style}
                                lineShape={lineShape}
                                connectionLabelPosition={connectionLabelPosition}
                                circuitLabel={label}
                                yOffset={7}
                                noNavigate={noNavigate}
                                size={size}
                                centerLine={centerLine}
                                squareWidth={squareWidth}
                                endpointStyle={stylesMap.endpoint}
                                endpointLabelPosition={endpointLabelPosition}
                                endpointLabelA="Endpoint Label A"
                                endpointLabelZ="Endpoint Label Z"
                                disabled={this.state.disabled}
                                onSelectionChange={this.handleSelectionChange}
                                navTo={this.state.circuitTypeChoice}
                                parentId="Test Navigation" />
                        </Resizable>
                    </div>
                </div>
            </div>
        );
    }
};

// Export example
export default {basic, basic_docs, basic_thumbnail};
