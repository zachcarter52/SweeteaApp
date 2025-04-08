import { lazy, nullable, object, optional, string } from '../schema';
import { cashAppDetailsSchema } from './cashAppDetails';
export const digitalWalletDetailsSchema = object({
    status: ['status', optional(nullable(string()))],
    brand: ['brand', optional(nullable(string()))],
    cashAppDetails: [
        'cash_app_details',
        optional(lazy(() => cashAppDetailsSchema)),
    ],
});
//# sourceMappingURL=digitalWalletDetails.js.map