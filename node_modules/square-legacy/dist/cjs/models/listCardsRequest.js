"use strict";
exports.__esModule = true;
exports.listCardsRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listCardsRequestSchema = (0, schema_1.object)({
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    customerId: ['customer_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    includeDisabled: ['include_disabled', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    sortOrder: ['sort_order', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=listCardsRequest.js.map