"use strict";
exports.__esModule = true;
exports.createBreakTypeRequestSchema = void 0;
var schema_1 = require("../schema");
var breakType_1 = require("./breakType");
exports.createBreakTypeRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.optional)((0, schema_1.string)())],
    breakType: ['break_type', (0, schema_1.lazy)(function () { return breakType_1.breakTypeSchema; })]
});
//# sourceMappingURL=createBreakTypeRequest.js.map