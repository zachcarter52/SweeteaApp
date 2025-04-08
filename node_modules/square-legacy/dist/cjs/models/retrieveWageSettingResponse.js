"use strict";
exports.__esModule = true;
exports.retrieveWageSettingResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var wageSetting_1 = require("./wageSetting");
exports.retrieveWageSettingResponseSchema = (0, schema_1.object)({
    wageSetting: ['wage_setting', (0, schema_1.optional)((0, schema_1.lazy)(function () { return wageSetting_1.wageSettingSchema; }))],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=retrieveWageSettingResponse.js.map