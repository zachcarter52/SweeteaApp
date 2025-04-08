"use strict";
exports.__esModule = true;
exports.orderFulfillmentFulfillmentEntrySchema = void 0;
var schema_1 = require("../schema");
exports.orderFulfillmentFulfillmentEntrySchema = (0, schema_1.object)({
    uid: ['uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    lineItemUid: ['line_item_uid', (0, schema_1.string)()],
    quantity: ['quantity', (0, schema_1.string)()],
    metadata: ['metadata', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.dict)((0, schema_1.string)())))]
});
//# sourceMappingURL=orderFulfillmentFulfillmentEntry.js.map