"use strict";
exports.__esModule = true;
exports.bulkCreateTeamMembersResponseSchema = void 0;
var schema_1 = require("../schema");
var createTeamMemberResponse_1 = require("./createTeamMemberResponse");
var error_1 = require("./error");
exports.bulkCreateTeamMembersResponseSchema = (0, schema_1.object)({
    teamMembers: [
        'team_members',
        (0, schema_1.optional)((0, schema_1.dict)((0, schema_1.lazy)(function () { return createTeamMemberResponse_1.createTeamMemberResponseSchema; }))),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=bulkCreateTeamMembersResponse.js.map