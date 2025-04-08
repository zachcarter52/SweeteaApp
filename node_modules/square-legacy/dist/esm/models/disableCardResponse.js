import { array, lazy, object, optional } from '../schema';
import { cardSchema } from './card';
import { errorSchema } from './error';
export const disableCardResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    card: ['card', optional(lazy(() => cardSchema))],
});
//# sourceMappingURL=disableCardResponse.js.map