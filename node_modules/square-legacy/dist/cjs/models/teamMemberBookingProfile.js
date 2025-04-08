"use strict";
exports.__esModule = true;
exports.teamMemberBookingProfileSchema = void 0;
var schema_1 = require("../schema");
exports.teamMemberBookingProfileSchema = (0, schema_1.object)({
    teamMemberId: ['team_member_id', (0, schema_1.optional)((0, schema_1.string)())],
    description: ['description', (0, schema_1.optional)((0, schema_1.string)())],
    displayName: ['display_name', (0, schema_1.optional)((0, schema_1.string)())],
    isBookable: ['is_bookable', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    profileImageUrl: ['profile_image_url', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=teamMemberBookingProfile.js.map