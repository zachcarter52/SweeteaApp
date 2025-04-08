"use strict";
exports.__esModule = true;
exports.createTeamMemberRequestSchema = void 0;
var schema_1 = require("../schema");
var teamMember_1 = require("./teamMember");
exports.createTeamMemberRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.optional)((0, schema_1.string)())],
    teamMember: ['team_member', (0, schema_1.optional)((0, schema_1.lazy)(function () { return teamMember_1.teamMemberSchema; }))]
});
//# sourceMappingURL=createTeamMemberRequest.js.map