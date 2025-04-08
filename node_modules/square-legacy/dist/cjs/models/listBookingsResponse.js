"use strict";
exports.__esModule = true;
exports.listBookingsResponseSchema = void 0;
var schema_1 = require("../schema");
var booking_1 = require("./booking");
var error_1 = require("./error");
exports.listBookingsResponseSchema = (0, schema_1.object)({
    bookings: ['bookings', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return booking_1.bookingSchema; })))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=listBookingsResponse.js.map