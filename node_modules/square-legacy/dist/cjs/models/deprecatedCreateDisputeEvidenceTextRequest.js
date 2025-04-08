"use strict";
exports.__esModule = true;
exports.deprecatedCreateDisputeEvidenceTextRequestSchema = void 0;
var schema_1 = require("../schema");
exports.deprecatedCreateDisputeEvidenceTextRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    evidenceType: ['evidence_type', (0, schema_1.optional)((0, schema_1.string)())],
    evidenceText: ['evidence_text', (0, schema_1.string)()]
});
//# sourceMappingURL=deprecatedCreateDisputeEvidenceTextRequest.js.map