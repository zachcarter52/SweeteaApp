"use strict";
exports.__esModule = true;
exports.bulkRetrieveTeamMemberBookingProfilesResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var retrieveTeamMemberBookingProfileResponse_1 = require("./retrieveTeamMemberBookingProfileResponse");
exports.bulkRetrieveTeamMemberBookingProfilesResponseSchema = (0, schema_1.object)({
    teamMemberBookingProfiles: [
        'team_member_booking_profiles',
        (0, schema_1.optional)((0, schema_1.dict)((0, schema_1.lazy)(function () { return retrieveTeamMemberBookingProfileResponse_1.retrieveTeamMemberBookingProfileResponseSchema; }))),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=bulkRetrieveTeamMemberBookingProfilesResponse.js.map