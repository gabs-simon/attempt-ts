"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const failure_1 = require("./failure");
const why_1 = require("./why");
describe('Why', () => {
    it('Should correctly return value given a valid Failure', () => {
        const result = failure_1.Failure('Hello');
        expect(why_1.Why(result)).toBe('Hello');
    });
});
//# sourceMappingURL=why.test.js.map