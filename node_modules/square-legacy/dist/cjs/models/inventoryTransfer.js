"use strict";
exports.__esModule = true;
exports.inventoryTransferSchema = void 0;
var schema_1 = require("../schema");
var sourceApplication_1 = require("./sourceApplication");
exports.inventoryTransferSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    state: ['state', (0, schema_1.optional)((0, schema_1.string)())],
    fromLocationId: ['from_location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    toLocationId: ['to_location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    catalogObjectId: ['catalog_object_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    catalogObjectType: ['catalog_object_type', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    quantity: ['quantity', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    occurredAt: ['occurred_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    source: ['source', (0, schema_1.optional)((0, schema_1.lazy)(function () { return sourceApplication_1.sourceApplicationSchema; }))],
    employeeId: ['employee_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    teamMemberId: ['team_member_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=inventoryTransfer.js.map