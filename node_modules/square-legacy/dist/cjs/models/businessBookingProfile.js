"use strict";
exports.__esModule = true;
exports.businessBookingProfileSchema = void 0;
var schema_1 = require("../schema");
var businessAppointmentSettings_1 = require("./businessAppointmentSettings");
exports.businessBookingProfileSchema = (0, schema_1.object)({
    sellerId: ['seller_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    bookingEnabled: ['booking_enabled', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    customerTimezoneChoice: ['customer_timezone_choice', (0, schema_1.optional)((0, schema_1.string)())],
    bookingPolicy: ['booking_policy', (0, schema_1.optional)((0, schema_1.string)())],
    allowUserCancel: ['allow_user_cancel', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    businessAppointmentSettings: [
        'business_appointment_settings',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return businessAppointmentSettings_1.businessAppointmentSettingsSchema; })),
    ],
    supportSellerLevelWrites: [
        'support_seller_level_writes',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ]
});
//# sourceMappingURL=businessBookingProfile.js.map