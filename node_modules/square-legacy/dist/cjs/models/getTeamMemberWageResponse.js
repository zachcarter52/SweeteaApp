"use strict";
exports.__esModule = true;
exports.getTeamMemberWageResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var teamMemberWage_1 = require("./teamMemberWage");
exports.getTeamMemberWageResponseSchema = (0, schema_1.object)({
    teamMemberWage: [
        'team_member_wage',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return teamMemberWage_1.teamMemberWageSchema; })),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=getTeamMemberWageResponse.js.map