"use strict";
exports.__esModule = true;
exports.listDisputeEvidenceResponseSchema = void 0;
var schema_1 = require("../schema");
var disputeEvidence_1 = require("./disputeEvidence");
var error_1 = require("./error");
exports.listDisputeEvidenceResponseSchema = (0, schema_1.object)({
    evidence: ['evidence', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return disputeEvidence_1.disputeEvidenceSchema; })))],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=listDisputeEvidenceResponse.js.map