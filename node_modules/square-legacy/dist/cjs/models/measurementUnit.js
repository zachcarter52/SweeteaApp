"use strict";
exports.__esModule = true;
exports.measurementUnitSchema = void 0;
var schema_1 = require("../schema");
var measurementUnitCustom_1 = require("./measurementUnitCustom");
exports.measurementUnitSchema = (0, schema_1.object)({
    customUnit: [
        'custom_unit',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return measurementUnitCustom_1.measurementUnitCustomSchema; })),
    ],
    areaUnit: ['area_unit', (0, schema_1.optional)((0, schema_1.string)())],
    lengthUnit: ['length_unit', (0, schema_1.optional)((0, schema_1.string)())],
    volumeUnit: ['volume_unit', (0, schema_1.optional)((0, schema_1.string)())],
    weightUnit: ['weight_unit', (0, schema_1.optional)((0, schema_1.string)())],
    genericUnit: ['generic_unit', (0, schema_1.optional)((0, schema_1.string)())],
    timeUnit: ['time_unit', (0, schema_1.optional)((0, schema_1.string)())],
    type: ['type', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=measurementUnit.js.map