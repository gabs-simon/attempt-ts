"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const failure_1 = require("./failure");
describe('Failure', () => {
    describe('Should return correct value for truthy basic types', () => {
        it('Number', () => {
            const num = failure_1.Failure(1);
            expect(num.error).toBe(1);
        });
        it('String', () => {
            const str = failure_1.Failure('str');
            expect(str.error).toBe('str');
        });
        it('Array', () => {
            const arr = failure_1.Failure([1, 2, 3]);
            expect(arr.error).toEqual([1, 2, 3]);
        });
        it('Object', () => {
            const obj = failure_1.Failure({ a: 1, b: 'str', c: [1, 2], d: {} });
            expect(obj.error.a).toBe(1);
            expect(obj.error.b).toBe('str');
            expect(obj.error.c).toEqual([1, 2]);
            expect(obj.error.d).toEqual({});
        });
    });
    it('Should return correct attempt type', () => {
        expect(failure_1.Failure('').type).toBe(enums_1.AttemptType.FAILURE);
    });
});
//# sourceMappingURL=failure.test.js.map