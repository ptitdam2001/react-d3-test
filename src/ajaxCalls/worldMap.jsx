import React, { Component } from "react";
// import geoMapInfos from './departments.geo.json';
import geoMapInfos from './map.geo.json';
import {geoPath, geoEquirectangular } from 'd3-geo';
import {select, selectAll} from 'd3-selection';
import {isEqual} from 'lodash';

export class WorldMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 600,
            width: 800,
            country: props.country
        };
    }
    render() {
        const mapStyle = {
            width: this.state.width + 'px',
            height:this.state.height + 'px',
        };
        return (
            <React.Fragment>
                <div id="map" style={mapStyle}></div>
            </React.Fragment>
        );
    }

    componentWillReceiveProps(props) {
        if (!isEqual(props.country, this.props.country)) {
            this._loadMap(props);
        }
    }

    componentDidMount() {
        this._loadMap(this.props);
    }

    _loadMap(props) {

        const path = geoPath();

        // const center = [this.props.country.latlng[0], this.props.country.latlng[1]];
        const center = [40, 0]
        const scale = Math.min(this.state.height * 0.20, this.state.width * 0.20);

        const projection = geoEquirectangular().center(center)
            .scale(scale)
            // .scale(85)
            .translate([this.state.width/2, this.state.height/2])
            // .precision(0.1);

        path.projection(projection);

        // const current = geoMapInfos.features.filter(elt => elt.properties.iso_a3 === this.props.country.alpha3Code);

        selectAll('#svg').remove().exit();

        const svg = select('#map')
            .append('svg')
            .attr('id','svg')
            .attr('width', this.state.width)
            .attr('height', this.state.height);

        const deps = svg.append('g');
        this.path = deps.selectAll('path')
            .data(geoMapInfos.features)
            .enter()
            .append('path')
            .attr('d', path);

        this.path.filter(geo => geo.properties.iso_a3.toLowerCase() === props.country.alpha3Code.toLowerCase())
            .style('fill', 'green');

        this.setState({country: props.country});
    }
}