"use strict";
exports.__esModule = true;
exports.bulkUpdateTeamMembersResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var updateTeamMemberResponse_1 = require("./updateTeamMemberResponse");
exports.bulkUpdateTeamMembersResponseSchema = (0, schema_1.object)({
    teamMembers: [
        'team_members',
        (0, schema_1.optional)((0, schema_1.dict)((0, schema_1.lazy)(function () { return updateTeamMemberResponse_1.updateTeamMemberResponseSchema; }))),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=bulkUpdateTeamMembersResponse.js.map