"use strict";
exports.__esModule = true;
exports.batchChangeInventoryResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var inventoryChange_1 = require("./inventoryChange");
var inventoryCount_1 = require("./inventoryCount");
exports.batchChangeInventoryResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    counts: ['counts', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return inventoryCount_1.inventoryCountSchema; })))],
    changes: ['changes', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return inventoryChange_1.inventoryChangeSchema; })))]
});
//# sourceMappingURL=batchChangeInventoryResponse.js.map