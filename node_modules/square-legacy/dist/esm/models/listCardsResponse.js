import { array, lazy, object, optional, string } from '../schema';
import { cardSchema } from './card';
import { errorSchema } from './error';
export const listCardsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    cards: ['cards', optional(array(lazy(() => cardSchema)))],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=listCardsResponse.js.map