import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const captureTransactionResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=captureTransactionResponse.js.map