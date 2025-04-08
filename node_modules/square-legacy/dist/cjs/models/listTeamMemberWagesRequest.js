"use strict";
exports.__esModule = true;
exports.listTeamMemberWagesRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listTeamMemberWagesRequestSchema = (0, schema_1.object)({
    teamMemberId: ['team_member_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=listTeamMemberWagesRequest.js.map