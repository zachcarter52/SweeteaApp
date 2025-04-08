"use strict";
exports.__esModule = true;
exports.createBookingRequestSchema = void 0;
var schema_1 = require("../schema");
var booking_1 = require("./booking");
exports.createBookingRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.optional)((0, schema_1.string)())],
    booking: ['booking', (0, schema_1.lazy)(function () { return booking_1.bookingSchema; })]
});
//# sourceMappingURL=createBookingRequest.js.map