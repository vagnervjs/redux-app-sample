import React, {Component} from 'react';
import FullAddress from './full-address';
import Map from './map';
import '../scss/search-result.scss';

export default
class SearchResult extends Component {
    render() {
        return (
            <div className="search-result">
                <FullAddress/>
                <Map/>
            </div>
        )
    }
}