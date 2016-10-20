import React, {Component} from 'react';

export default
class CepForm extends Component {
    render() {
        return (
            <div className="cep-form">
                <label htmlFor="cep">CEP</label>
                <input type="text" id="cep" name="cep"/>
                <button className="btn btn-primary">Buscar</button>
            </div>
        )
    }
}