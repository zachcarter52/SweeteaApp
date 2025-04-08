"use strict";
exports.__esModule = true;
exports.retrieveBusinessBookingProfileResponseSchema = void 0;
var schema_1 = require("../schema");
var businessBookingProfile_1 = require("./businessBookingProfile");
var error_1 = require("./error");
exports.retrieveBusinessBookingProfileResponseSchema = (0, schema_1.object)({
    businessBookingProfile: [
        'business_booking_profile',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return businessBookingProfile_1.businessBookingProfileSchema; })),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=retrieveBusinessBookingProfileResponse.js.map