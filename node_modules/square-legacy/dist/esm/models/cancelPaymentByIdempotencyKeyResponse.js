import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const cancelPaymentByIdempotencyKeyResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=cancelPaymentByIdempotencyKeyResponse.js.map