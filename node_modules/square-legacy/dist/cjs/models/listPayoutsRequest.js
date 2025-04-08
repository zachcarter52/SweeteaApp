"use strict";
exports.__esModule = true;
exports.listPayoutsRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listPayoutsRequestSchema = (0, schema_1.object)({
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    beginTime: ['begin_time', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    endTime: ['end_time', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    sortOrder: ['sort_order', (0, schema_1.optional)((0, schema_1.string)())],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))]
});
//# sourceMappingURL=listPayoutsRequest.js.map