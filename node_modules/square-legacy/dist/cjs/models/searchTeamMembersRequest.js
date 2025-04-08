"use strict";
exports.__esModule = true;
exports.searchTeamMembersRequestSchema = void 0;
var schema_1 = require("../schema");
var searchTeamMembersQuery_1 = require("./searchTeamMembersQuery");
exports.searchTeamMembersRequestSchema = (0, schema_1.object)({
    query: ['query', (0, schema_1.optional)((0, schema_1.lazy)(function () { return searchTeamMembersQuery_1.searchTeamMembersQuerySchema; }))],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.number)())],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=searchTeamMembersRequest.js.map