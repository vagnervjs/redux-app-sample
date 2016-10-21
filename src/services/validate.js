const defaultOptions = {
    isRequired: false
};

export const validateCep = (cep, options = defaultOptions) => {
    let valid = false;
    let error = false;

    let value = (cep + '').replace(/\D/g,''); // strip non-numeric chars
    let isEmpty = (!value || typeof value === 'undefined');

    if (isEmpty) {
        if (options.isRequired)
            error = 'empty';
        else valid = true;
    }
    else if (typeof value === 'string' && value.length === 8) {
        valid = true;
        value = value.slice(0,5) + '-' + value.slice(5);
    }
    else {
        error = 'invalid';
    }

    return { valid, error, cep: value };
};