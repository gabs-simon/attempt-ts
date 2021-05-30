"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const success_1 = require("./success");
const ok_1 = require("./ok");
describe('OK', () => {
    it('Should correctly return value given a valid Success', () => {
        const result = success_1.Success('Hello');
        expect(ok_1.OK(result)).toBe('Hello');
    });
});
//# sourceMappingURL=ok.test.js.map