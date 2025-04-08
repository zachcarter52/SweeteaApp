"use strict";
exports.__esModule = true;
exports.listPaymentsRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listPaymentsRequestSchema = (0, schema_1.object)({
    beginTime: ['begin_time', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    endTime: ['end_time', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    sortOrder: ['sort_order', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    total: ['total', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    last4: ['last_4', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    cardBrand: ['card_brand', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    isOfflinePayment: ['is_offline_payment', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    offlineBeginTime: ['offline_begin_time', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    offlineEndTime: ['offline_end_time', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    updatedAtBeginTime: ['updated_at_begin_time', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    updatedAtEndTime: ['updated_at_end_time', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    sortField: ['sort_field', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=listPaymentsRequest.js.map