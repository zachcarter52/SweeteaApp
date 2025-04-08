"use strict";
exports.__esModule = true;
exports.searchTeamMembersFilterSchema = void 0;
var schema_1 = require("../schema");
exports.searchTeamMembersFilterSchema = (0, schema_1.object)({
    locationIds: ['location_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    isOwner: ['is_owner', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=searchTeamMembersFilter.js.map