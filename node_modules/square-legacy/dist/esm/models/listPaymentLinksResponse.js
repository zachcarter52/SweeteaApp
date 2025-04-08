import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { paymentLinkSchema } from './paymentLink';
export const listPaymentLinksResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    paymentLinks: [
        'payment_links',
        optional(array(lazy(() => paymentLinkSchema))),
    ],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=listPaymentLinksResponse.js.map