"use strict";
exports.__esModule = true;
exports.updateBreakTypeRequestSchema = void 0;
var schema_1 = require("../schema");
var breakType_1 = require("./breakType");
exports.updateBreakTypeRequestSchema = (0, schema_1.object)({ breakType: ['break_type', (0, schema_1.lazy)(function () { return breakType_1.breakTypeSchema; })] });
//# sourceMappingURL=updateBreakTypeRequest.js.map