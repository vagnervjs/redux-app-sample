'use strict';

import { validateCep } from '../validate';

describe('Validation Service Test', () => {
    describe('When empty', () => {
        it('Allow empty, if default config', () => {
            let value = '';
            let cfg = {};

            let { valid, error, cep } = validateCep(value, cfg);

            expect(valid).toEqual(true);
            expect(error).toEqual(false);
            expect(cep).toEqual('');
        });

        it('Not allow empty when isRequired: true', () => {
            let value = '';
            let cfg = {
                isRequired: true
            };

            let { valid, error, cep } = validateCep(value, cfg);

            expect(valid).toEqual(false);
            expect(error).toEqual('empty');
            expect(cep).toEqual('');
        });
    });

    describe('Sanitizing string', () => {
        it('Remove letters', () => {
            let value = 'a1b2c3d4e5';

            let { valid, error, cep } = validateCep(value);

            expect(valid).toEqual(false);
            expect(error).toEqual('invalid');
            expect(cep).toEqual('12345');
        });

        it('Remove special chars', () => {
            let value = '1.2#3$4*5-';

            let { valid, error, cep } = validateCep(value);

            expect(valid).toEqual(false);
            expect(error).toEqual('invalid');
            expect(cep).toEqual('12345');
        });

        it('Ignore when numeric only', () => {
            let value = '12345';

            let { valid, error, cep } = validateCep(value);

            expect(valid).toEqual(false);
            expect(error).toEqual('invalid');
            expect(cep).toEqual('12345');
        });
    });

    describe('When valid', () => {
        it('Valid, not change', () => {
            let value = '05728-040';

            let { valid, error, cep } = validateCep(value);

            expect(valid).toEqual(true);
            expect(error).toEqual(false);
            expect(cep).toEqual('05728-040');
        });

        it('Valid, add "-" to string', () => {
            let value = '05728040';

            let { valid, error, cep } = validateCep(value);

            expect(valid).toEqual(true);
            expect(error).toEqual(false);
            expect(cep).toEqual('05728-040');
        });

        it('Valid, with some letter', () => {
            let value = '05728040a';

            let { valid, error, cep } = validateCep(value);

            expect(valid).toEqual(true);
            expect(error).toEqual(false);
            expect(cep).toEqual('05728-040');
        });

        it('Do not exit, but valid', () => {
            let value = '00000000';

            let { valid, error, cep } = validateCep(value);

            expect(valid).toEqual(true);
            expect(error).toEqual(false);
            expect(cep).toEqual('00000-000');
        });
    });
});