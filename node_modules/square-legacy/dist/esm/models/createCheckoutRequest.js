import { array, boolean, lazy, object, optional, string, } from '../schema';
import { addressSchema } from './address';
import { chargeRequestAdditionalRecipientSchema, } from './chargeRequestAdditionalRecipient';
import { createOrderRequestSchema, } from './createOrderRequest';
export const createCheckoutRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    order: ['order', lazy(() => createOrderRequestSchema)],
    askForShippingAddress: ['ask_for_shipping_address', optional(boolean())],
    merchantSupportEmail: ['merchant_support_email', optional(string())],
    prePopulateBuyerEmail: ['pre_populate_buyer_email', optional(string())],
    prePopulateShippingAddress: [
        'pre_populate_shipping_address',
        optional(lazy(() => addressSchema)),
    ],
    redirectUrl: ['redirect_url', optional(string())],
    additionalRecipients: [
        'additional_recipients',
        optional(array(lazy(() => chargeRequestAdditionalRecipientSchema))),
    ],
    note: ['note', optional(string())],
});
//# sourceMappingURL=createCheckoutRequest.js.map