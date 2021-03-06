"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Why = exports.OK = exports.AsyncAttempt = exports.Attempt = exports.Failure = exports.Success = void 0;
var success_1 = require("./success");
Object.defineProperty(exports, "Success", { enumerable: true, get: function () { return success_1.Success; } });
var failure_1 = require("./failure");
Object.defineProperty(exports, "Failure", { enumerable: true, get: function () { return failure_1.Failure; } });
var attempt_1 = require("./attempt");
Object.defineProperty(exports, "Attempt", { enumerable: true, get: function () { return attempt_1.Attempt; } });
var async_attempt_1 = require("./async-attempt");
Object.defineProperty(exports, "AsyncAttempt", { enumerable: true, get: function () { return async_attempt_1.AsyncAttempt; } });
var ok_1 = require("./ok");
Object.defineProperty(exports, "OK", { enumerable: true, get: function () { return ok_1.OK; } });
var why_1 = require("./why");
Object.defineProperty(exports, "Why", { enumerable: true, get: function () { return why_1.Why; } });
//# sourceMappingURL=index.js.map