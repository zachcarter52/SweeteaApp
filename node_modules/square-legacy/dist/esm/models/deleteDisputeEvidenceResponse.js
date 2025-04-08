import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const deleteDisputeEvidenceResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=deleteDisputeEvidenceResponse.js.map