"use strict";
exports.__esModule = true;
exports.getShiftResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var shift_1 = require("./shift");
exports.getShiftResponseSchema = (0, schema_1.object)({
    shift: ['shift', (0, schema_1.optional)((0, schema_1.lazy)(function () { return shift_1.shiftSchema; }))],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=getShiftResponse.js.map