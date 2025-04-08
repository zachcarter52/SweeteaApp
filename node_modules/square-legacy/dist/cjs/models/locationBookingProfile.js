"use strict";
exports.__esModule = true;
exports.locationBookingProfileSchema = void 0;
var schema_1 = require("../schema");
exports.locationBookingProfileSchema = (0, schema_1.object)({
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    bookingSiteUrl: ['booking_site_url', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    onlineBookingEnabled: [
        'online_booking_enabled',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ]
});
//# sourceMappingURL=locationBookingProfile.js.map