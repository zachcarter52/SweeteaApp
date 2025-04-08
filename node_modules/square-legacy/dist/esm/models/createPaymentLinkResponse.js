import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { paymentLinkSchema } from './paymentLink';
import { paymentLinkRelatedResourcesSchema, } from './paymentLinkRelatedResources';
export const createPaymentLinkResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    paymentLink: ['payment_link', optional(lazy(() => paymentLinkSchema))],
    relatedResources: [
        'related_resources',
        optional(lazy(() => paymentLinkRelatedResourcesSchema)),
    ],
});
//# sourceMappingURL=createPaymentLinkResponse.js.map