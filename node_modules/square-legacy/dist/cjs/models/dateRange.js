"use strict";
exports.__esModule = true;
exports.dateRangeSchema = void 0;
var schema_1 = require("../schema");
exports.dateRangeSchema = (0, schema_1.object)({
    startDate: ['start_date', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    endDate: ['end_date', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=dateRange.js.map