const defaultState = {
    loading: false,
    error: false,
    notFound: false
};

const statusReducer = (state = defaultState, action) => {
    let { type } = action;

    switch (type) {
        case 'SEARCH_START':
            return {
                ...defaultState,
                loading: true
            };
        case 'SEARCH_DONE':
            return defaultState;
        case 'SEARCH_NOT_FOUND':
            return {
                loading: false,
                error: false,
                notFound: true
            };
        case 'SEARCH_ERROR':
            let { error } = action;
            return {
                loading: false,
                error,
                notFound: false
            };
        default:
            return state;
    }
};

export default statusReducer;
