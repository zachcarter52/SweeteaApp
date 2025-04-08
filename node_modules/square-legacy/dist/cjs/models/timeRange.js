"use strict";
exports.__esModule = true;
exports.timeRangeSchema = void 0;
var schema_1 = require("../schema");
exports.timeRangeSchema = (0, schema_1.object)({
    startAt: ['start_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    endAt: ['end_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=timeRange.js.map