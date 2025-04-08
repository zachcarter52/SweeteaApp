import { lazy, object, optional, string } from '../schema';
import { cardSchema } from './card';
export const tenderCardDetailsSchema = object({
    status: ['status', optional(string())],
    card: ['card', optional(lazy(() => cardSchema))],
    entryMethod: ['entry_method', optional(string())],
});
//# sourceMappingURL=tenderCardDetails.js.map