"use strict";
exports.__esModule = true;
exports.standardUnitDescriptionSchema = void 0;
var schema_1 = require("../schema");
var measurementUnit_1 = require("./measurementUnit");
exports.standardUnitDescriptionSchema = (0, schema_1.object)({
    unit: ['unit', (0, schema_1.optional)((0, schema_1.lazy)(function () { return measurementUnit_1.measurementUnitSchema; }))],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    abbreviation: ['abbreviation', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=standardUnitDescription.js.map