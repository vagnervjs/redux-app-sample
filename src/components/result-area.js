import React, {Component} from 'react';
import FullAddress from './full-address';
import Map from './map';
import '../scss/result-area.scss';

export default
class ResultArea extends Component {
    render() {
        let { showResult, address, location, onClose } = this.props;

        if (!showResult || !Object.keys(address).length) return null;

        return (
            <div className="result-area">
                <button className="btn-close"
                        title="Fechar"
                        onClick={onClose}/>
                <FullAddress address={address}/>
                <Map location={location}/>
            </div>
        )
    }
}
