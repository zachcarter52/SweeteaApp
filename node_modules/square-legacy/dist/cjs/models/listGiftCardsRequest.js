"use strict";
exports.__esModule = true;
exports.listGiftCardsRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listGiftCardsRequestSchema = (0, schema_1.object)({
    type: ['type', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    state: ['state', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    customerId: ['customer_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=listGiftCardsRequest.js.map