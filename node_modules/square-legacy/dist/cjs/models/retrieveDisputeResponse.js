"use strict";
exports.__esModule = true;
exports.retrieveDisputeResponseSchema = void 0;
var schema_1 = require("../schema");
var dispute_1 = require("./dispute");
var error_1 = require("./error");
exports.retrieveDisputeResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    dispute: ['dispute', (0, schema_1.optional)((0, schema_1.lazy)(function () { return dispute_1.disputeSchema; }))]
});
//# sourceMappingURL=retrieveDisputeResponse.js.map