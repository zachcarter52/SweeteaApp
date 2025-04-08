"use strict";
exports.__esModule = true;
exports.searchSubscriptionsFilterSchema = void 0;
var schema_1 = require("../schema");
exports.searchSubscriptionsFilterSchema = (0, schema_1.object)({
    customerIds: ['customer_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    locationIds: ['location_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    sourceNames: ['source_names', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))]
});
//# sourceMappingURL=searchSubscriptionsFilter.js.map