import React, {Component} from 'react';
import CepFormContainer from '../containers/cep-form-container';
import '../scss/control-bar.scss';

export default
class ControlBar extends Component {
    render() {
        return (
            <div className="control-bar">
                <h2>Consultar</h2>
                <CepFormContainer/>
            </div>
        )
    }
}