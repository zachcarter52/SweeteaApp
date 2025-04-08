import { array, lazy, object, optional, string } from '../schema';
import { disputeEvidenceSchema } from './disputeEvidence';
import { errorSchema } from './error';
export const listDisputeEvidenceResponseSchema = object({
    evidence: ['evidence', optional(array(lazy(() => disputeEvidenceSchema)))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=listDisputeEvidenceResponse.js.map