"use strict";
exports.__esModule = true;
exports.batchRetrieveInventoryCountsRequestSchema = void 0;
var schema_1 = require("../schema");
exports.batchRetrieveInventoryCountsRequestSchema = (0, schema_1.object)({
    catalogObjectIds: [
        'catalog_object_ids',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)()))),
    ],
    locationIds: ['location_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    updatedAfter: ['updated_after', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    states: ['states', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))]
});
//# sourceMappingURL=batchRetrieveInventoryCountsRequest.js.map