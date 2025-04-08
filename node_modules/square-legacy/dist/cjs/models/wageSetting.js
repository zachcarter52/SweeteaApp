"use strict";
exports.__esModule = true;
exports.wageSettingSchema = void 0;
var schema_1 = require("../schema");
var jobAssignment_1 = require("./jobAssignment");
exports.wageSettingSchema = (0, schema_1.object)({
    teamMemberId: ['team_member_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    jobAssignments: [
        'job_assignments',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return jobAssignment_1.jobAssignmentSchema; })))),
    ],
    isOvertimeExempt: ['is_overtime_exempt', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=wageSetting.js.map