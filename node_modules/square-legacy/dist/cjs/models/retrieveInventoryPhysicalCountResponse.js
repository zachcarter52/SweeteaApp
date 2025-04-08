"use strict";
exports.__esModule = true;
exports.retrieveInventoryPhysicalCountResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var inventoryPhysicalCount_1 = require("./inventoryPhysicalCount");
exports.retrieveInventoryPhysicalCountResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    count: ['count', (0, schema_1.optional)((0, schema_1.lazy)(function () { return inventoryPhysicalCount_1.inventoryPhysicalCountSchema; }))]
});
//# sourceMappingURL=retrieveInventoryPhysicalCountResponse.js.map