import { connect } from 'react-redux';
import { searchAddress } from '../actions';
import App from '../components/app';

const mapDispatchToProps = (dispatch) => {
    return {
        init: (cep) => {
            dispatch(searchAddress(cep))
        }
    }
};

export default
connect(null, mapDispatchToProps)(App);
