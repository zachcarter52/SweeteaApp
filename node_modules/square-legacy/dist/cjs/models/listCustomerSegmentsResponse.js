"use strict";
exports.__esModule = true;
exports.listCustomerSegmentsResponseSchema = void 0;
var schema_1 = require("../schema");
var customerSegment_1 = require("./customerSegment");
var error_1 = require("./error");
exports.listCustomerSegmentsResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    segments: ['segments', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return customerSegment_1.customerSegmentSchema; })))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=listCustomerSegmentsResponse.js.map