"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Failure = void 0;
const enums_1 = require("./enums");
// Returns a Failure for a given value
const Failure = (error) => ({
    type: enums_1.AttemptType.FAILURE,
    error,
});
exports.Failure = Failure;
//# sourceMappingURL=failure.js.map