import React, {Component} from 'react';
import FullAddress from './full-address';
import Map from './map';
import '../scss/result-area.scss';

export default
class ResultArea extends Component {
    render() {
        let { address, location } = this.props;

        if (!Object.keys(address).length) return null;

        return (
            <div className="result-area">
                <FullAddress address={address}/>
                <Map location={location}/>
            </div>
        )
    }
}
