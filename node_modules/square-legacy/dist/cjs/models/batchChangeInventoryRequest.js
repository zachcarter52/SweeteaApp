"use strict";
exports.__esModule = true;
exports.batchChangeInventoryRequestSchema = void 0;
var schema_1 = require("../schema");
var inventoryChange_1 = require("./inventoryChange");
exports.batchChangeInventoryRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    changes: [
        'changes',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return inventoryChange_1.inventoryChangeSchema; })))),
    ],
    ignoreUnchangedCounts: [
        'ignore_unchanged_counts',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ]
});
//# sourceMappingURL=batchChangeInventoryRequest.js.map