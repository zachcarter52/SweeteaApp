"use strict";
exports.__esModule = true;
exports.createDisputeEvidenceFileResponseSchema = void 0;
var schema_1 = require("../schema");
var disputeEvidence_1 = require("./disputeEvidence");
var error_1 = require("./error");
exports.createDisputeEvidenceFileResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    evidence: ['evidence', (0, schema_1.optional)((0, schema_1.lazy)(function () { return disputeEvidence_1.disputeEvidenceSchema; }))]
});
//# sourceMappingURL=createDisputeEvidenceFileResponse.js.map