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
    // Returns 'yes' if success, throws 1 if failure - just for the heck of it
    const testFunctionPromise = (a) => a > 0 ? Promise.resolve(success_1.Success('yes')) : Promise.resolve(failure_1.Failure(1));
    // Async version, does pretty much the exact same thing but written in other way
    const testFunctionAsync = (a) => __awaiter(void 0, void 0, void 0, function* () {
        const result = success_1.Success('yes');
        if (a > 0)
            return result;
        return failure_1.Failure(1);
    });
    it('Should correctly return value given Success - written as Promise', () => __awaiter(void 0, void 0, void 0, function* () {
        const n = testFunctionPromise(10);
        const result = yield async_attempt_1.AsyncAttempt(n);
        expect(result).toBe('yes');
    }));
    it('Should correctly return value given Success - written as Async', () => __awaiter(void 0, void 0, void 0, function* () {
        const n = testFunctionAsync(10);
        const result = yield async_attempt_1.AsyncAttempt(n);
        expect(result).toBe('yes');
    }));
    it('Should correctly throw error given Failure - written as Promise', () => __awaiter(void 0, void 0, void 0, function* () {
        const n = testFunctionPromise(-10);
        try {
            yield async_attempt_1.AsyncAttempt(n);
        }
        catch (err) {
            expect(err).toEqual(1);
        }
    }));
    it('Should correctly throw error given Success - written as Async', () => __awaiter(void 0, void 0, void 0, function* () {
        const n = testFunctionAsync(-10);
        try {
            yield async_attempt_1.AsyncAttempt(n);
        }
        catch (err) {
            expect(err).toEqual(1);
        }
    }));
});
//# sourceMappingURL=async-attempt.test.js.map