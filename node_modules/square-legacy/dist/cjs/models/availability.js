"use strict";
exports.__esModule = true;
exports.availabilitySchema = void 0;
var schema_1 = require("../schema");
var appointmentSegment_1 = require("./appointmentSegment");
exports.availabilitySchema = (0, schema_1.object)({
    startAt: ['start_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.string)())],
    appointmentSegments: [
        'appointment_segments',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return appointmentSegment_1.appointmentSegmentSchema; })))),
    ]
});
//# sourceMappingURL=availability.js.map