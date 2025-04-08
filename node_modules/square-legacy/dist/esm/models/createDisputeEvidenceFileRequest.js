import { object, optional, string } from '../schema';
export const createDisputeEvidenceFileRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    evidenceType: ['evidence_type', optional(string())],
    contentType: ['content_type', optional(string())],
});
//# sourceMappingURL=createDisputeEvidenceFileRequest.js.map