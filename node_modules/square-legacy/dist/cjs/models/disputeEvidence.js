"use strict";
exports.__esModule = true;
exports.disputeEvidenceSchema = void 0;
var schema_1 = require("../schema");
var disputeEvidenceFile_1 = require("./disputeEvidenceFile");
exports.disputeEvidenceSchema = (0, schema_1.object)({
    evidenceId: ['evidence_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    disputeId: ['dispute_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    evidenceFile: [
        'evidence_file',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return disputeEvidenceFile_1.disputeEvidenceFileSchema; })),
    ],
    evidenceText: ['evidence_text', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    uploadedAt: ['uploaded_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    evidenceType: ['evidence_type', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=disputeEvidence.js.map