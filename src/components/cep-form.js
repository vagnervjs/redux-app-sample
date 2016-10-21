import React, {Component} from 'react';

export default
class CepForm extends Component {
    render() {
        let { cep, valid, error, validationEnabled } = this.props;
        let { onChange, onClickSearch } = this.props;
        let hasError = validationEnabled && !valid;

        return (
            <div className="cep-form">
                <label htmlFor="cep">CEP</label>

                <div className={`form-group ${hasError ? 'has-error' : ''}`}>
                    <input type="text"
                           id="cep"
                           name="cep"
                           placeholder="01230-010"
                           value={cep}
                           onChange={({target}) => onChange(target.value)}
                    />
                    {hasError ?
                        <span className="help-block">
                            {error === 'empty' ?
                                'Informe o CEP para consulta' :
                            error === 'invalid' ?
                                'CEP inválido' :
                                'Erro'}
                        </span> : ''}
                </div>

                <button className="btn btn-primary"
                        disabled={hasError}
                    onClick={() => onClickSearch(cep)}>
                    Buscar
                </button>
            </div>
        )
    }
}
