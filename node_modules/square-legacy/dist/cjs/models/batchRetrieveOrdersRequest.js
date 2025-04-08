"use strict";
exports.__esModule = true;
exports.batchRetrieveOrdersRequestSchema = void 0;
var schema_1 = require("../schema");
exports.batchRetrieveOrdersRequestSchema = (0, schema_1.object)({
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    orderIds: ['order_ids', (0, schema_1.array)((0, schema_1.string)())]
});
//# sourceMappingURL=batchRetrieveOrdersRequest.js.map