const defaultState = {
    cep: '',
    address: {},
    location: {},
    loading: false,
    error: false,
    notFound: false
};

const appReducer = (state = defaultState, action) => {
    let { type } = action;

    switch (type) {
        case 'CHANGE_CEP':
            let { cep } = action;
            return {
                ...state,
                cep
            };
        case 'SEARCH_START':
            return {
                ...state,
                loading: true
            };
        case 'SEARCH_DONE':
            let { address } = action;
            return {
                ...state,
                address,
                loading: false,
                error: false,
                notFound: false
            };
        case 'SEARCH_NOT_FOUND':
            return {
                ...state,
                address: {},
                location: {},
                loading: false,
                error: false,
                notFound: true
            };
        case 'SEARCH_ERROR':
            let { error } = action;
            return {
                ...state,
                address: {},
                location: {},
                loading: false,
                error,
                notFound: false
            };
        case 'LOCATION_FOUND':
            let { location } = action;
            return {
                ...state,
                location
            };
        default:
            return state;
    }
};

export default appReducer;
