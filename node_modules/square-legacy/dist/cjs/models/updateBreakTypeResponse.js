"use strict";
exports.__esModule = true;
exports.updateBreakTypeResponseSchema = void 0;
var schema_1 = require("../schema");
var breakType_1 = require("./breakType");
var error_1 = require("./error");
exports.updateBreakTypeResponseSchema = (0, schema_1.object)({
    breakType: ['break_type', (0, schema_1.optional)((0, schema_1.lazy)(function () { return breakType_1.breakTypeSchema; }))],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=updateBreakTypeResponse.js.map