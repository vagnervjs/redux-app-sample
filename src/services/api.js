import 'whatwg-fetch'; // window.fetch polyfill

const URLS = {
    cep: 'https://viacep.com.br/ws/',
    location: 'http://maps.googleapis.com/maps/api/geocode/json?address='
};

// Requests
export const getAddress = (cep) => {
    return fetch(`${URLS.cep}${cep}/json`)
        .then(response => response.json())
        .catch(response => ({
            error: response.message
        }))
};

export const getLocation = (cep) => {
    return fetch(URLS.location + cep)
        .then(response => response.json())
        .catch(response => ({
            error: response.message
        }))
};
