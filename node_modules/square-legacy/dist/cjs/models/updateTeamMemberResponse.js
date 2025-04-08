"use strict";
exports.__esModule = true;
exports.updateTeamMemberResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var teamMember_1 = require("./teamMember");
exports.updateTeamMemberResponseSchema = (0, schema_1.object)({
    teamMember: ['team_member', (0, schema_1.optional)((0, schema_1.lazy)(function () { return teamMember_1.teamMemberSchema; }))],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=updateTeamMemberResponse.js.map