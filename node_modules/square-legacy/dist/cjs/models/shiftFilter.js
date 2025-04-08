"use strict";
exports.__esModule = true;
exports.shiftFilterSchema = void 0;
var schema_1 = require("../schema");
var shiftWorkday_1 = require("./shiftWorkday");
var timeRange_1 = require("./timeRange");
exports.shiftFilterSchema = (0, schema_1.object)({
    locationIds: ['location_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    employeeIds: ['employee_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    start: ['start', (0, schema_1.optional)((0, schema_1.lazy)(function () { return timeRange_1.timeRangeSchema; }))],
    end: ['end', (0, schema_1.optional)((0, schema_1.lazy)(function () { return timeRange_1.timeRangeSchema; }))],
    workday: ['workday', (0, schema_1.optional)((0, schema_1.lazy)(function () { return shiftWorkday_1.shiftWorkdaySchema; }))],
    teamMemberIds: ['team_member_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))]
});
//# sourceMappingURL=shiftFilter.js.map