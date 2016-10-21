import React, {Component} from 'react';
import '../scss/full-address.scss';

export default
class FullAddress extends Component {
    render() {
        let { address } = this.props;
        let {bairro, cep, localidade, logradouro, uf} = address;

        return (
            <address className="full-address">
                <strong>{logradouro}</strong>
                <p>{bairro}</p>
                <p>{localidade} - {uf}</p>
                <p>{cep}</p>
            </address>
        )
    }
}
