import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { paymentLinkSchema } from './paymentLink';
export const retrievePaymentLinkResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    paymentLink: ['payment_link', optional(lazy(() => paymentLinkSchema))],
});
//# sourceMappingURL=retrievePaymentLinkResponse.js.map