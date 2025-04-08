import { array, lazy, object, optional } from '../schema';
import { cardSchema } from './card';
import { errorSchema } from './error';
export const createCustomerCardResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    card: ['card', optional(lazy(() => cardSchema))],
});
//# sourceMappingURL=createCustomerCardResponse.js.map