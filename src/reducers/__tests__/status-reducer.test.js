'use strict';

import reducer from '../status-reducer';

let state = {
    loading: false,
    error: false,
    notFound: false
};

describe('Status Reducer Test', () => {

    it('SEARCH_START', () => {
        const action = {
            type: 'SEARCH_START'
        };
        const expectedState = {
            ...state,
            loading: true
        };

        state = reducer(state, action);
        expect(state).toEqual(expectedState);
    });

    it('SEARCH_DONE', () => {
        const action = {
            type: 'SEARCH_DONE'
        };
        const expectedState = {
            ...state,
            loading: false
        };

        state = reducer(state, action);
        expect(state).toEqual(expectedState);
    });

    it('SEARCH_NOT_FOUND', () => {
        const action = {
            type: 'SEARCH_NOT_FOUND'
        };
        const expectedState = {
            ...state,
            notFound: true
        };

        state = reducer(state, action);
        expect(state).toEqual(expectedState);
    });

    it('SEARCH_ERROR', () => {
        const action = {
            type: 'SEARCH_ERROR',
            error: 'error foo'
        };
        const expectedState = {
            loading: false,
            notFound: false,
            error: 'error foo'
        };

        state = reducer(state, action);
        expect(state).toEqual(expectedState);
    });
});