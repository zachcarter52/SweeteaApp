"use strict";
exports.__esModule = true;
exports.listLocationBookingProfilesResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var locationBookingProfile_1 = require("./locationBookingProfile");
exports.listLocationBookingProfilesResponseSchema = (0, schema_1.object)({
    locationBookingProfiles: [
        'location_booking_profiles',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return locationBookingProfile_1.locationBookingProfileSchema; }))),
    ],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=listLocationBookingProfilesResponse.js.map