import { getAddress, getLocation } from '../services/api';
import { validateCep } from '../services/validate';
import { updateQueryString } from '../services/url';

export const updateCep = (value) => {
    return dispatch => dispatch({
        type: 'CHANGE_CEP',
        ...validateCep(value)
    });
};

export const searchAddress = (cep) => {
    return dispatch => {
        let validationConfig = {isRequired: true};
        let { valid, error } = validateCep(cep, validationConfig);

        dispatch({
            type: 'VALIDATE',
            cep, valid, error,
        });

        if (!valid) return;

        dispatch({
            type: 'SEARCH_START'
        });

        updateQueryString(cep);

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

export const closeSearchResult = {
    type: 'CLOSE_SEARCH_RESULT'
};
