import { lazy, nullable, object, optional, string } from '../schema';
import { afterpayDetailsSchema } from './afterpayDetails';
import { clearpayDetailsSchema } from './clearpayDetails';
export const buyNowPayLaterDetailsSchema = object({
    brand: ['brand', optional(nullable(string()))],
    afterpayDetails: [
        'afterpay_details',
        optional(lazy(() => afterpayDetailsSchema)),
    ],
    clearpayDetails: [
        'clearpay_details',
        optional(lazy(() => clearpayDetailsSchema)),
    ],
});
//# sourceMappingURL=buyNowPayLaterDetails.js.map