"use strict";
exports.__esModule = true;
exports.squareAccountDetailsSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
exports.squareAccountDetailsSchema = (0, schema_1.object)({
    paymentSourceToken: ['payment_source_token', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; }))))]
});
//# sourceMappingURL=squareAccountDetails.js.map