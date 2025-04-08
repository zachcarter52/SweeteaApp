"use strict";
exports.__esModule = true;
exports.createRefundResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var refund_1 = require("./refund");
exports.createRefundResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    refund: ['refund', (0, schema_1.optional)((0, schema_1.lazy)(function () { return refund_1.refundSchema; }))]
});
//# sourceMappingURL=createRefundResponse.js.map