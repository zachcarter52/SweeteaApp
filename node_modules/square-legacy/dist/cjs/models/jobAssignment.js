"use strict";
exports.__esModule = true;
exports.jobAssignmentSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.jobAssignmentSchema = (0, schema_1.object)({
    jobTitle: ['job_title', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    payType: ['pay_type', (0, schema_1.string)()],
    hourlyRate: ['hourly_rate', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    annualRate: ['annual_rate', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    weeklyHours: ['weekly_hours', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    jobId: ['job_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=jobAssignment.js.map