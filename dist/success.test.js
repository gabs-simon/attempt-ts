"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const success_1 = require("./success");
describe('Success', () => {
    describe('Should return correct value for truthy basic types', () => {
        it('Number', () => {
            const num = success_1.Success(1);
            expect(num.value).toBe(1);
        });
        it('String', () => {
            const str = success_1.Success('str');
            expect(str.value).toBe('str');
        });
        it('Array', () => {
            const arr = success_1.Success([1, 2, 3]);
            expect(arr.value).toEqual([1, 2, 3]);
        });
        it('Object', () => {
            const obj = success_1.Success({ a: 1, b: 'str', c: [1, 2], d: {} });
            expect(obj.value.a).toBe(1);
            expect(obj.value.b).toBe('str');
            expect(obj.value.c).toEqual([1, 2]);
            expect(obj.value.d).toEqual({});
        });
    });
    it('Should return correct attempt type', () => {
        expect(success_1.Success('').type).toBe(enums_1.AttemptType.SUCCESS);
    });
});
//# sourceMappingURL=success.test.js.map