"use strict";
exports.__esModule = true;
exports.bulkUpsertBookingCustomAttributesResponseSchema = void 0;
var schema_1 = require("../schema");
var bookingCustomAttributeUpsertResponse_1 = require("./bookingCustomAttributeUpsertResponse");
var error_1 = require("./error");
exports.bulkUpsertBookingCustomAttributesResponseSchema = (0, schema_1.object)({
    values: [
        'values',
        (0, schema_1.optional)((0, schema_1.dict)((0, schema_1.lazy)(function () { return bookingCustomAttributeUpsertResponse_1.bookingCustomAttributeUpsertResponseSchema; }))),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=bulkUpsertBookingCustomAttributesResponse.js.map