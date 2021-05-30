"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const success_1 = require("./success");
const failure_1 = require("./failure");
const async_attempt_1 = require("./async-attempt");
describe('AsyncAttempt', () => {
    it('Should correctly return value given Success', () => __awaiter(void 0, void 0, void 0, function* () {
        const testFunction = (a) => a > 0
            ? Promise.resolve(success_1.Success('yes'))
            : Promise.reject(failure_1.Failure(0));
        const n = testFunction(10);
        const result = yield async_attempt_1.AsyncAttempt(n);
        expect(result).toBe('yes');
    }));
    it('Should correctly return error given Failure', () => __awaiter(void 0, void 0, void 0, function* () {
        const testFunction = (a) => a > 0
            ? Promise.resolve(success_1.Success('yes'))
            : Promise.reject(failure_1.Failure(0));
        const n = testFunction(-1);
        try {
            yield async_attempt_1.AsyncAttempt(n);
        }
        catch (err) {
            expect(err).toEqual({ error: 0 });
        }
    }));
});
//# sourceMappingURL=async-attempt.test.js.map