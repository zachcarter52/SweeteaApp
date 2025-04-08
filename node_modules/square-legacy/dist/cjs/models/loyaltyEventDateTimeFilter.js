"use strict";
exports.__esModule = true;
exports.loyaltyEventDateTimeFilterSchema = void 0;
var schema_1 = require("../schema");
var timeRange_1 = require("./timeRange");
exports.loyaltyEventDateTimeFilterSchema = (0, schema_1.object)({ createdAt: ['created_at', (0, schema_1.lazy)(function () { return timeRange_1.timeRangeSchema; })] });
//# sourceMappingURL=loyaltyEventDateTimeFilter.js.map