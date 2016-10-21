const defaultState = {
    address: {},
    location: {}
};

const resultReducer = (state = defaultState, action) => {
    let { type } = action;

    switch (type) {
        case 'SEARCH_START':
        case 'SEARCH_NOT_FOUND':
        case 'SEARCH_ERROR':
            return defaultState;

        case 'SEARCH_DONE':
            let { address } = action;
            return {
                ...state,
                address
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

export default resultReducer;
