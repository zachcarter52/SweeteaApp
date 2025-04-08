"use strict";
exports.__esModule = true;
exports.retrieveLocationBookingProfileResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var locationBookingProfile_1 = require("./locationBookingProfile");
exports.retrieveLocationBookingProfileResponseSchema = (0, schema_1.object)({
    locationBookingProfile: [
        'location_booking_profile',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return locationBookingProfile_1.locationBookingProfileSchema; })),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=retrieveLocationBookingProfileResponse.js.map