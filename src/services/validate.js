export const validateCep = (cep) => {
    let valid = false;
    let error = false;

    let value = (cep + '').replace(/\D/g,''); // strip non-numeric chars

    if (!value || typeof value === 'undefined') {
        error = 'empty';
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