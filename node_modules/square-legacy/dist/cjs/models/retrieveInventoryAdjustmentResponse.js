"use strict";
exports.__esModule = true;
exports.retrieveInventoryAdjustmentResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var inventoryAdjustment_1 = require("./inventoryAdjustment");
exports.retrieveInventoryAdjustmentResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    adjustment: ['adjustment', (0, schema_1.optional)((0, schema_1.lazy)(function () { return inventoryAdjustment_1.inventoryAdjustmentSchema; }))]
});
//# sourceMappingURL=retrieveInventoryAdjustmentResponse.js.map