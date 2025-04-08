import { object, optional, string } from '../schema';
export const deprecatedCreateDisputeEvidenceTextRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    evidenceType: ['evidence_type', optional(string())],
    evidenceText: ['evidence_text', string()],
});
//# sourceMappingURL=deprecatedCreateDisputeEvidenceTextRequest.js.map