'use strict';

import reducer from '../result-reducer';

let state = undefined;

const returnDefaultState = (action) => {
    const expectedState = {
        address: {},
        location: {},
        showResult: false
    };

    state = reducer(state, action);
    expect(state).toEqual(expectedState);
};

describe('Result Reducer Test', () => {
    let location, address;

    beforeEach(function () {
        location = {
            lat: 99,
            lng: -99
        };
        address = {
            logradouro: 'Rua abcd',
            cep: '00000-00',
        };
    });

    it('SEARCH_START', () => {
        returnDefaultState({
            type: 'SEARCH_START'
        });
    });

    it('SEARCH_NOT_FOUND', () => {
        returnDefaultState({
            type: 'SEARCH_NOT_FOUND'
        });
    });

    it('SEARCH_ERROR', () => {
        returnDefaultState({
            type: 'SEARCH_ERROR'
        });
    });

    it('SEARCH_DONE', () => {
        const action = {
            type: 'SEARCH_DONE',
            address
        };
        const expectedState = {
            ...state,
            address,
            showResult: true
        };

        state = reducer(state, action);
        expect(state).toEqual(expectedState);
    });

    it('LOCATION_FOUND', () => {
        const action = {
            type: 'LOCATION_FOUND',
            location
        };
        const expectedState = {
            ...state,
            location,
            showResult: true
        };

        state = reducer(state, action);
        expect(state).toEqual(expectedState);
    });

    it('CLOSE_SEARCH_RESULT', () => {
        const action = {
            type: 'CLOSE_SEARCH_RESULT'
        };
        const expectedState = {
            ...state,
            showResult: false
        };

        state = reducer(state, action);
        expect(state).toEqual(expectedState);
    });
});