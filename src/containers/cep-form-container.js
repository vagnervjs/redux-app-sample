import { connect } from 'react-redux';
import { updateCep, searchAddress } from '../actions';
import CepForm from '../components/cep-form';

const mapStateToProps = ({form}) => {
    let { cep } = form;
    return {
        value: cep
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (cep) => {
            dispatch(updateCep(cep));
        },
        onClickSearch: (cep) => {
            dispatch(searchAddress(cep))
        }
    }
};

export default
connect(mapStateToProps, mapDispatchToProps)(CepForm);
