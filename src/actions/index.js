import { getAddress } from '../services/api';

export const updateCep = (cep) => ({
    type: 'CHANGE_CEP',
    cep
});

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
                else
                    dispatch({
                        type: 'SEARCH_DONE',
                        address: result
                    });
            });
    }
};
