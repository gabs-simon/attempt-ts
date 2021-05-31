"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const success_1 = require("./success");
const failure_1 = require("./failure");
const attempt_1 = require("./attempt");
describe('Attempt', () => {
    it('Should correctly return value given Success', () => {
        const testFunction = (a) => a > 0 ? success_1.Success('yes') : failure_1.Failure(0);
        const result = testFunction(10);
        expect(attempt_1.Attempt(result)).toBe('yes');
    });
    it('Should correctly throw an exception given failure', () => {
        const testFunction = (a) => a > 0 ? success_1.Success('yes') : failure_1.Failure(0);
        const result = testFunction(-1);
        try {
            attempt_1.Attempt(result);
        }
        catch (err) {
            expect(err).toBe(0);
        }
    });
});
//# sourceMappingURL=attempt.test.js.map