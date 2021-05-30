"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attempt = void 0;
const ok_1 = require("./ok");
const why_1 = require("./why");
const enums_1 = require("./enums");
// Checks if a given result is a success or a failure.
const Attempt = (a) => {
    if (a.type === enums_1.AttemptType.SUCCESS) {
        return ok_1.OK(a);
    }
    if (a.type === enums_1.AttemptType.FAILURE) {
        throw why_1.Why(a);
    }
};
exports.Attempt = Attempt;
//# sourceMappingURL=attempt.js.map