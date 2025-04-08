import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
export const voidTransactionResponseSchema = object({ errors: ['errors', optional(array(lazy(() => errorSchema)))] });
//# sourceMappingURL=voidTransactionResponse.js.map