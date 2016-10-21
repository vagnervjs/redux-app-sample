import React, {Component} from 'react';

export default
class CepForm extends Component {
    render() {
        let { value, onChange, onClickSearch } = this.props;

        return (
            <div className="cep-form">
                <label htmlFor="cep">CEP</label>
                <input type="text"
                       id="cep"
                       name="cep"
                       placeholder="01230-010"
                       value={value}
                       onChange={({target}) => onChange(target.value)}
                />
                <button className="btn btn-primary"
                    onClick={() => onClickSearch(value)}>
                    Buscar
                </button>
            </div>
        )
    }
}
