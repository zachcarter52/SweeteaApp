"use strict";
exports.__esModule = true;
exports.listInvoicesRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listInvoicesRequestSchema = (0, schema_1.object)({
    locationId: ['location_id', (0, schema_1.string)()],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))]
});
//# sourceMappingURL=listInvoicesRequest.js.map