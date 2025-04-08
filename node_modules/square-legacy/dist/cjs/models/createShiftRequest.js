"use strict";
exports.__esModule = true;
exports.createShiftRequestSchema = void 0;
var schema_1 = require("../schema");
var shift_1 = require("./shift");
exports.createShiftRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.optional)((0, schema_1.string)())],
    shift: ['shift', (0, schema_1.lazy)(function () { return shift_1.shiftSchema; })]
});
//# sourceMappingURL=createShiftRequest.js.map