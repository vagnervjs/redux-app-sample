import { getAddress, getLocation } from '../services/api';
import { validateCep } from '../services/validate';

export const updateCep = (cep) => {
    return dispatch => dispatch({
        type: 'CHANGE_CEP',
        ...validateCep(cep)
    });
};

export const searchAddress = (cep) => {
    return dispatch => {
        dispatch({
            type: 'SEARCH_START'
        });

        return getAddress(cep)
            .then((result) => {
                if (result.error)
                    dispatch({
                        type: 'SEARCH_ERROR',
                        error: result.error
                    });
                else if (result.erro)
                    dispatch({
                        type: 'SEARCH_NOT_FOUND'
                    });
                else {
                    getLocation(cep)
                        .then(result => setLocation(result, dispatch));

                    dispatch({
                        type: 'SEARCH_DONE',
                        address: result
                    });
                }
            });
    }
};

const setLocation = (result, dispatch) => {
    if (result.status !== 'OK' || (result.results && !result.results.length))
        return;

    let data = result.results[0];
    let { geometry } = data;
    let { location } = geometry;

    dispatch({
        type: 'LOCATION_FOUND',
        location
    });
};
