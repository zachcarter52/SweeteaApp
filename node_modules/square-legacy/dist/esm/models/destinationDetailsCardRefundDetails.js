import { lazy, nullable, object, optional, string } from '../schema';
import { cardSchema } from './card';
export const destinationDetailsCardRefundDetailsSchema = object({
    card: ['card', optional(lazy(() => cardSchema))],
    entryMethod: ['entry_method', optional(nullable(string()))],
    authResultCode: ['auth_result_code', optional(nullable(string()))],
});
//# sourceMappingURL=destinationDetailsCardRefundDetails.js.map