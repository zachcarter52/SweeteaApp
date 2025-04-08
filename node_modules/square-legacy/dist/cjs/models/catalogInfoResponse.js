"use strict";
exports.__esModule = true;
exports.catalogInfoResponseSchema = void 0;
var schema_1 = require("../schema");
var catalogInfoResponseLimits_1 = require("./catalogInfoResponseLimits");
var error_1 = require("./error");
var standardUnitDescriptionGroup_1 = require("./standardUnitDescriptionGroup");
exports.catalogInfoResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    limits: ['limits', (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogInfoResponseLimits_1.catalogInfoResponseLimitsSchema; }))],
    standardUnitDescriptionGroup: [
        'standard_unit_description_group',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return standardUnitDescriptionGroup_1.standardUnitDescriptionGroupSchema; })),
    ]
});
//# sourceMappingURL=catalogInfoResponse.js.map