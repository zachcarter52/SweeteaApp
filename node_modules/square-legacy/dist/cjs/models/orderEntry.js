"use strict";
exports.__esModule = true;
exports.orderEntrySchema = void 0;
var schema_1 = require("../schema");
exports.orderEntrySchema = (0, schema_1.object)({
    orderId: ['order_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=orderEntry.js.map