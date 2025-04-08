"use strict";
exports.__esModule = true;
exports.searchTeamMembersQuerySchema = void 0;
var schema_1 = require("../schema");
var searchTeamMembersFilter_1 = require("./searchTeamMembersFilter");
exports.searchTeamMembersQuerySchema = (0, schema_1.object)({ filter: ['filter', (0, schema_1.optional)((0, schema_1.lazy)(function () { return searchTeamMembersFilter_1.searchTeamMembersFilterSchema; }))] });
//# sourceMappingURL=searchTeamMembersQuery.js.map