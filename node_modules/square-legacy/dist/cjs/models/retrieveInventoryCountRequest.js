"use strict";
exports.__esModule = true;
exports.retrieveInventoryCountRequestSchema = void 0;
var schema_1 = require("../schema");
exports.retrieveInventoryCountRequestSchema = (0, schema_1.object)({
    locationIds: ['location_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=retrieveInventoryCountRequest.js.map