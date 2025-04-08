"use strict";
exports.__esModule = true;
exports.orderQuantityUnitSchema = void 0;
var schema_1 = require("../schema");
var measurementUnit_1 = require("./measurementUnit");
exports.orderQuantityUnitSchema = (0, schema_1.object)({
    measurementUnit: [
        'measurement_unit',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return measurementUnit_1.measurementUnitSchema; })),
    ],
    precision: ['precision', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    catalogObjectId: ['catalog_object_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    catalogVersion: ['catalog_version', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))]
});
//# sourceMappingURL=orderQuantityUnit.js.map