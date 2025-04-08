"use strict";
exports.__esModule = true;
exports.retrieveTeamMemberBookingProfileResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var teamMemberBookingProfile_1 = require("./teamMemberBookingProfile");
exports.retrieveTeamMemberBookingProfileResponseSchema = (0, schema_1.object)({
    teamMemberBookingProfile: [
        'team_member_booking_profile',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return teamMemberBookingProfile_1.teamMemberBookingProfileSchema; })),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=retrieveTeamMemberBookingProfileResponse.js.map