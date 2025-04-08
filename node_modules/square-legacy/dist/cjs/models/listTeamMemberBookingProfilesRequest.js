"use strict";
exports.__esModule = true;
exports.listTeamMemberBookingProfilesRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listTeamMemberBookingProfilesRequestSchema = (0, schema_1.object)({
    bookableOnly: ['bookable_only', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=listTeamMemberBookingProfilesRequest.js.map