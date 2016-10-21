const defaultState = {
    cep: '',
    valid: true,
    error: false
};

const formReducer = (state = defaultState, action) => {
    let { type } = action;

    switch (type) {
        case 'CHANGE_CEP':
            let { cep, valid, error } = action;
            return { ...state, cep, valid, error };
        default:
            return state;
    }
};

export default formReducer;
