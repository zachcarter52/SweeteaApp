import { array, lazy, object, optional } from '../schema';
import { disputeEvidenceSchema } from './disputeEvidence';
import { errorSchema } from './error';
export const deprecatedCreateDisputeEvidenceTextResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    evidence: ['evidence', optional(lazy(() => disputeEvidenceSchema))],
});
//# sourceMappingURL=deprecatedCreateDisputeEvidenceTextResponse.js.map