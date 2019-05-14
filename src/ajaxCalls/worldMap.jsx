import React, { Component } from "react";
import geoMapInfos from './map.geo.json';
import L from 'leaflet';

export class WorldMap extends Component {

    render() {
        return (
            <React.Fragment>
                <div id="map" style={{width: '600px', height: '400px'}}></div>
            </React.Fragment>
        );
    }

    componentDidMount() {
        const map = L.map('map').setView([25, 0], 2);
        L.geoJSON(
            geoMapInfos,
            {
                clickable: false,
                style: {
                    stroke: false,
                    fill: true,
                    fillColor: '#fff',
                    fillOpacity: 1
                }
            }
        ).addTo(map);
    }
}