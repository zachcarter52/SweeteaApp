"use strict";
exports.__esModule = true;
exports.standardUnitDescriptionGroupSchema = void 0;
var schema_1 = require("../schema");
var standardUnitDescription_1 = require("./standardUnitDescription");
exports.standardUnitDescriptionGroupSchema = (0, schema_1.object)({
    standardUnitDescriptions: [
        'standard_unit_descriptions',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return standardUnitDescription_1.standardUnitDescriptionSchema; })))),
    ],
    languageCode: ['language_code', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=standardUnitDescriptionGroup.js.map