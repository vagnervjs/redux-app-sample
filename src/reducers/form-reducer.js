const defaultState = {
    cep: '',
    valid: true,
    error: false,
    validationEnabled: false
};

const formReducer = (state = defaultState, action) => {
    let { type } = action;
    let { cep, valid, error } = action;

    switch (type) {
        case 'CHANGE_CEP':
            return {
                ...state,
                validationEnabled: false,
                cep, valid, error
        };
        case 'VALIDATE':
            return {
                ...state,
                validationEnabled: true,
                cep, valid, error
        };
        default:
            return state;
    }
};

export default formReducer;
