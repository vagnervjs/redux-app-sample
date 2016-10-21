'use strict';

import { getFromQueryString, updateQueryString } from '../url';

describe('URL Service Test', () => {
    describe('getFromQueryString', () => {
        it('When valid query string', () => {
            let search = '?cep=05728040';
            let cep = getFromQueryString(search);

            expect(cep).toEqual('05728040');
        });

        it('When query string is empty', () => {
            let search = '?cep=';
            let cep = getFromQueryString(search);

            expect(cep).toEqual(false);
        });

        it('When query string is invalid', () => {
            let search = '?abc=05728040';
            let cep = getFromQueryString(search);

            expect(cep).toEqual(false);
        });

        it('When query does not exist', () => {
            let search = null;
            let cep = getFromQueryString(search);

            expect(cep).toEqual(false);
        });
    });

    describe('updateQueryString', () => {
        it('When invalid value', () => {
            expect(updateQueryString(null)).toEqual(false);
        });
    });
});