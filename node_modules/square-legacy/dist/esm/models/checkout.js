import { array, boolean, lazy, nullable, object, optional, string, } from '../schema';
import { additionalRecipientSchema, } from './additionalRecipient';
import { addressSchema } from './address';
import { orderSchema } from './order';
export const checkoutSchema = object({
    id: ['id', optional(string())],
    checkoutPageUrl: ['checkout_page_url', optional(nullable(string()))],
    askForShippingAddress: [
        'ask_for_shipping_address',
        optional(nullable(boolean())),
    ],
    merchantSupportEmail: [
        'merchant_support_email',
        optional(nullable(string())),
    ],
    prePopulateBuyerEmail: [
        'pre_populate_buyer_email',
        optional(nullable(string())),
    ],
    prePopulateShippingAddress: [
        'pre_populate_shipping_address',
        optional(lazy(() => addressSchema)),
    ],
    redirectUrl: ['redirect_url', optional(nullable(string()))],
    order: ['order', optional(lazy(() => orderSchema))],
    createdAt: ['created_at', optional(string())],
    additionalRecipients: [
        'additional_recipients',
        optional(nullable(array(lazy(() => additionalRecipientSchema)))),
    ],
});
//# sourceMappingURL=checkout.js.map