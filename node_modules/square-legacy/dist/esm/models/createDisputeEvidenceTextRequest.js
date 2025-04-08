import { object, optional, string } from '../schema';
export const createDisputeEvidenceTextRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    evidenceType: ['evidence_type', optional(string())],
    evidenceText: ['evidence_text', string()],
});
//# sourceMappingURL=createDisputeEvidenceTextRequest.js.map