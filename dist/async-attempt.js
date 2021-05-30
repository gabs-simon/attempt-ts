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
exports.AsyncAttempt = void 0;
// Calls a promise and returns its result as an Attempt
const AsyncAttempt = (a) => __awaiter(void 0, void 0, void 0, function* () {
    return a
        .then((s) => s.value)
        .catch((e) => { throw { error: e.error }; });
});
exports.AsyncAttempt = AsyncAttempt;
//# sourceMappingURL=async-attempt.js.map