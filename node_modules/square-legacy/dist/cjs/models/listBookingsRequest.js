"use strict";
exports.__esModule = true;
exports.listBookingsRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listBookingsRequestSchema = (0, schema_1.object)({
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    customerId: ['customer_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    teamMemberId: ['team_member_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    startAtMin: ['start_at_min', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    startAtMax: ['start_at_max', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=listBookingsRequest.js.map