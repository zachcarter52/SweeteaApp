import { lazy, object, optional, string } from '../schema';
import { checkoutOptionsSchema } from './checkoutOptions';
import { orderSchema } from './order';
import { prePopulatedDataSchema } from './prePopulatedData';
import { quickPaySchema } from './quickPay';
export const createPaymentLinkRequestSchema = object({
    idempotencyKey: ['idempotency_key', optional(string())],
    description: ['description', optional(string())],
    quickPay: ['quick_pay', optional(lazy(() => quickPaySchema))],
    order: ['order', optional(lazy(() => orderSchema))],
    checkoutOptions: [
        'checkout_options',
        optional(lazy(() => checkoutOptionsSchema)),
    ],
    prePopulatedData: [
        'pre_populated_data',
        optional(lazy(() => prePopulatedDataSchema)),
    ],
    paymentNote: ['payment_note', optional(string())],
});
//# sourceMappingURL=createPaymentLinkRequest.js.map