'use strict';

import reducer from '../form-reducer';

const defaultState = undefined;

describe('Form Reducer Test', () => {
    it('CHANGE_CEP', () => {
        const action = {
            type: 'CHANGE_CEP',
            cep: '05728-040',
            valid: true,
            error: false
        };
        const expectedState = {
            cep: '05728-040',
            valid: true,
            error: false,
            validationEnabled: false
        };

        expect(reducer(defaultState, action)).toEqual(expectedState);
    });

    it('VALIDATE', () => {
        const action = {
            type: 'VALIDATE',
            cep: '05728-040',
            valid: true,
            error: false
        };
        const expectedState = {
            cep: '05728-040',
            valid: true,
            error: false,
            validationEnabled: true
        };

        expect(reducer(defaultState, action)).toEqual(expectedState);
    });
});