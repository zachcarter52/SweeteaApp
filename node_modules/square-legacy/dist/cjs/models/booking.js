"use strict";
exports.__esModule = true;
exports.bookingSchema = void 0;
var schema_1 = require("../schema");
var address_1 = require("./address");
var appointmentSegment_1 = require("./appointmentSegment");
var bookingCreatorDetails_1 = require("./bookingCreatorDetails");
exports.bookingSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    startAt: ['start_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    customerId: ['customer_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    customerNote: ['customer_note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    sellerNote: ['seller_note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    appointmentSegments: [
        'appointment_segments',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return appointmentSegment_1.appointmentSegmentSchema; })))),
    ],
    transitionTimeMinutes: ['transition_time_minutes', (0, schema_1.optional)((0, schema_1.number)())],
    allDay: ['all_day', (0, schema_1.optional)((0, schema_1.boolean)())],
    locationType: ['location_type', (0, schema_1.optional)((0, schema_1.string)())],
    creatorDetails: [
        'creator_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return bookingCreatorDetails_1.bookingCreatorDetailsSchema; })),
    ],
    source: ['source', (0, schema_1.optional)((0, schema_1.string)())],
    address: ['address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))]
});
//# sourceMappingURL=booking.js.map