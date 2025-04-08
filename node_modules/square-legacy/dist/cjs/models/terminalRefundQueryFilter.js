"use strict";
exports.__esModule = true;
exports.terminalRefundQueryFilterSchema = void 0;
var schema_1 = require("../schema");
var timeRange_1 = require("./timeRange");
exports.terminalRefundQueryFilterSchema = (0, schema_1.object)({
    deviceId: ['device_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.lazy)(function () { return timeRange_1.timeRangeSchema; }))],
    status: ['status', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=terminalRefundQueryFilter.js.map