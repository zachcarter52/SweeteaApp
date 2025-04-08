import { lazy, nullable, object, optional, string } from '../schema';
import { disputeEvidenceFileSchema, } from './disputeEvidenceFile';
export const disputeEvidenceSchema = object({
    evidenceId: ['evidence_id', optional(nullable(string()))],
    id: ['id', optional(string())],
    disputeId: ['dispute_id', optional(nullable(string()))],
    evidenceFile: [
        'evidence_file',
        optional(lazy(() => disputeEvidenceFileSchema)),
    ],
    evidenceText: ['evidence_text', optional(nullable(string()))],
    uploadedAt: ['uploaded_at', optional(nullable(string()))],
    evidenceType: ['evidence_type', optional(string())],
});
//# sourceMappingURL=disputeEvidence.js.map