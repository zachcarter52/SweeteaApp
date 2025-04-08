import { lazy, nullable, number, object, optional, string, } from '../schema';
import { checkoutOptionsSchema } from './checkoutOptions';
import { prePopulatedDataSchema } from './prePopulatedData';
export const paymentLinkSchema = object({
    id: ['id', optional(string())],
    version: ['version', number()],
    description: ['description', optional(nullable(string()))],
    orderId: ['order_id', optional(string())],
    checkoutOptions: [
        'checkout_options',
        optional(lazy(() => checkoutOptionsSchema)),
    ],
    prePopulatedData: [
        'pre_populated_data',
        optional(lazy(() => prePopulatedDataSchema)),
    ],
    url: ['url', optional(string())],
    longUrl: ['long_url', optional(string())],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    paymentNote: ['payment_note', optional(nullable(string()))],
});
//# sourceMappingURL=paymentLink.js.map