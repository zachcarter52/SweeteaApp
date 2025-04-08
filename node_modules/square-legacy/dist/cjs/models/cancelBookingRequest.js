"use strict";
exports.__esModule = true;
exports.cancelBookingRequestSchema = void 0;
var schema_1 = require("../schema");
exports.cancelBookingRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    bookingVersion: ['booking_version', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))]
});
//# sourceMappingURL=cancelBookingRequest.js.map