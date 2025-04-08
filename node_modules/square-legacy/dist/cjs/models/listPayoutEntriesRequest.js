"use strict";
exports.__esModule = true;
exports.listPayoutEntriesRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listPayoutEntriesRequestSchema = (0, schema_1.object)({
    sortOrder: ['sort_order', (0, schema_1.optional)((0, schema_1.string)())],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))]
});
//# sourceMappingURL=listPayoutEntriesRequest.js.map