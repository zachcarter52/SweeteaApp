"use strict";
exports.__esModule = true;
exports.shiftWorkdaySchema = void 0;
var schema_1 = require("../schema");
var dateRange_1 = require("./dateRange");
exports.shiftWorkdaySchema = (0, schema_1.object)({
    dateRange: ['date_range', (0, schema_1.optional)((0, schema_1.lazy)(function () { return dateRange_1.dateRangeSchema; }))],
    matchShiftsBy: ['match_shifts_by', (0, schema_1.optional)((0, schema_1.string)())],
    defaultTimezone: ['default_timezone', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=shiftWorkday.js.map