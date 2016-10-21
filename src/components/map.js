import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../scss/map.scss';
import marker from '../assets/marker.png';

export default
class MyMap extends Component {
    render() {
        let { location } = this.props;
        let { lat, lng } = location;
        const position = !lat || !lng ? null : [lat, lng];

        return (
            <div className="map">
                <Map center={position} zoom={16}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    {position ?
                        <Marker position={position} icon={
                            L.icon({
                                iconUrl: marker,
                                iconSize: [20, 32]
                            })
                        }/> : ''}
                </Map>
            </div>
        )
    }
}
