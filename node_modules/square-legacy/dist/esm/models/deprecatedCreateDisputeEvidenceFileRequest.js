import { nullable, object, optional, string } from '../schema';
export const deprecatedCreateDisputeEvidenceFileRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    evidenceType: ['evidence_type', optional(string())],
    contentType: ['content_type', optional(nullable(string()))],
});
//# sourceMappingURL=deprecatedCreateDisputeEvidenceFileRequest.js.map