import React, {Component} from 'react';
import CepForm from './cep-form';
import '../scss/control-bar.scss';

export default
class ControlBar extends Component {
    render() {
        return (
            <div className="control-bar">
                <h2>Consultar</h2>
                <CepForm/>
            </div>
        )
    }
}