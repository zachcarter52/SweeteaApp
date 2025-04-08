"use strict";
exports.__esModule = true;
exports.bulkDeleteBookingCustomAttributesRequestSchema = void 0;
var schema_1 = require("../schema");
var bookingCustomAttributeDeleteRequest_1 = require("./bookingCustomAttributeDeleteRequest");
exports.bulkDeleteBookingCustomAttributesRequestSchema = (0, schema_1.object)({
    values: [
        'values',
        (0, schema_1.dict)((0, schema_1.lazy)(function () { return bookingCustomAttributeDeleteRequest_1.bookingCustomAttributeDeleteRequestSchema; })),
    ]
});
//# sourceMappingURL=bulkDeleteBookingCustomAttributesRequest.js.map