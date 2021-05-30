"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Success = void 0;
const enums_1 = require("./enums");
const Success = (value) => ({
    type: enums_1.AttemptType.SUCCESS,
    value,
});
exports.Success = Success;
//# sourceMappingURL=success.js.map