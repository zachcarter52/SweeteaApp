"use strict";
exports.__esModule = true;
exports.v1OrderHistoryEntrySchema = void 0;
var schema_1 = require("../schema");
exports.v1OrderHistoryEntrySchema = (0, schema_1.object)({
    action: ['action', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=v1OrderHistoryEntry.js.map