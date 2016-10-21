import 'whatwg-fetch'; // window.fetch polyfill

const BASE_URL = 'https://viacep.com.br/ws/';

// Requests
export const getAddress = (cep) => {
    return fetch(`${BASE_URL}${cep}/json`)
        .then(response => response.json())
        .catch(response => ({
            error: response.message
        }))
};
