const defaultState = {
    address: {},
    location: {},
    showResult: false
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
                address,
                showResult: true
            };
        case 'LOCATION_FOUND':
            let { location } = action;
            return {
                ...state,
                location,
                showResult: true
            };
        case 'CLOSE_SEARCH_RESULT':
            return {
                ...state,
                showResult: false
            };
        default:
            return state;
    }
};

export default resultReducer;
