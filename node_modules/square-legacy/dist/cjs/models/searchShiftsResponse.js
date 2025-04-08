"use strict";
exports.__esModule = true;
exports.searchShiftsResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var shift_1 = require("./shift");
exports.searchShiftsResponseSchema = (0, schema_1.object)({
    shifts: ['shifts', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return shift_1.shiftSchema; })))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=searchShiftsResponse.js.map