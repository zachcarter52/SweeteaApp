"use strict";
exports.__esModule = true;
exports.teamMemberWageSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.teamMemberWageSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    teamMemberId: ['team_member_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    title: ['title', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    hourlyRate: ['hourly_rate', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    jobId: ['job_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    tipEligible: ['tip_eligible', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=teamMemberWage.js.map