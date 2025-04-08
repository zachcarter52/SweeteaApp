"use strict";
exports.__esModule = true;
exports.inventoryChangeSchema = void 0;
var schema_1 = require("../schema");
var catalogMeasurementUnit_1 = require("./catalogMeasurementUnit");
var inventoryAdjustment_1 = require("./inventoryAdjustment");
var inventoryPhysicalCount_1 = require("./inventoryPhysicalCount");
var inventoryTransfer_1 = require("./inventoryTransfer");
exports.inventoryChangeSchema = (0, schema_1.object)({
    type: ['type', (0, schema_1.optional)((0, schema_1.string)())],
    physicalCount: [
        'physical_count',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return inventoryPhysicalCount_1.inventoryPhysicalCountSchema; })),
    ],
    adjustment: ['adjustment', (0, schema_1.optional)((0, schema_1.lazy)(function () { return inventoryAdjustment_1.inventoryAdjustmentSchema; }))],
    transfer: ['transfer', (0, schema_1.optional)((0, schema_1.lazy)(function () { return inventoryTransfer_1.inventoryTransferSchema; }))],
    measurementUnit: [
        'measurement_unit',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogMeasurementUnit_1.catalogMeasurementUnitSchema; })),
    ],
    measurementUnitId: ['measurement_unit_id', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=inventoryChange.js.map