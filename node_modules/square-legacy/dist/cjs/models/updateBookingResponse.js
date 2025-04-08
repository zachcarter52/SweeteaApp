"use strict";
exports.__esModule = true;
exports.updateBookingResponseSchema = void 0;
var schema_1 = require("../schema");
var booking_1 = require("./booking");
var error_1 = require("./error");
exports.updateBookingResponseSchema = (0, schema_1.object)({
    booking: ['booking', (0, schema_1.optional)((0, schema_1.lazy)(function () { return booking_1.bookingSchema; }))],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=updateBookingResponse.js.map