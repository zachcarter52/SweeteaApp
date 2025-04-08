import { array, lazy, object, optional } from '../schema';
import { cardSchema } from './card';
import { errorSchema } from './error';
export const retrieveCardResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    card: ['card', optional(lazy(() => cardSchema))],
});
//# sourceMappingURL=retrieveCardResponse.js.map