"use strict";
exports.__esModule = true;
exports.inventoryCountSchema = void 0;
var schema_1 = require("../schema");
exports.inventoryCountSchema = (0, schema_1.object)({
    catalogObjectId: ['catalog_object_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    catalogObjectType: ['catalog_object_type', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    state: ['state', (0, schema_1.optional)((0, schema_1.string)())],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    quantity: ['quantity', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    calculatedAt: ['calculated_at', (0, schema_1.optional)((0, schema_1.string)())],
    isEstimated: ['is_estimated', (0, schema_1.optional)((0, schema_1.boolean)())]
});
//# sourceMappingURL=inventoryCount.js.map