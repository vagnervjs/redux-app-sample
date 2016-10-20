import React, {Component} from 'react';
import '../scss/full-address.scss';

export default
class FullAddress extends Component {
    render() {
        return (
            <address className="full-address">
                <strong>Rua Miguel Mentem</strong>
                <p>Vila Guilherme</p>
                <p>São Paulo - SP</p>
                <p>02050-010</p>
            </address>
        )
    }
}