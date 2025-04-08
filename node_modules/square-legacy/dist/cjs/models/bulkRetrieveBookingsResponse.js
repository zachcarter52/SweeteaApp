"use strict";
exports.__esModule = true;
exports.bulkRetrieveBookingsResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var retrieveBookingResponse_1 = require("./retrieveBookingResponse");
exports.bulkRetrieveBookingsResponseSchema = (0, schema_1.object)({
    bookings: [
        'bookings',
        (0, schema_1.optional)((0, schema_1.dict)((0, schema_1.lazy)(function () { return retrieveBookingResponse_1.retrieveBookingResponseSchema; }))),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=bulkRetrieveBookingsResponse.js.map