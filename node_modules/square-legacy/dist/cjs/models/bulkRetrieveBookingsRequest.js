"use strict";
exports.__esModule = true;
exports.bulkRetrieveBookingsRequestSchema = void 0;
var schema_1 = require("../schema");
exports.bulkRetrieveBookingsRequestSchema = (0, schema_1.object)({ bookingIds: ['booking_ids', (0, schema_1.array)((0, schema_1.string)())] });
//# sourceMappingURL=bulkRetrieveBookingsRequest.js.map