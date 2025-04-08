import { array, boolean, lazy, nullable, object, optional, string, } from '../schema';
import { addressSchema } from './address';
import { chargeRequestAdditionalRecipientSchema, } from './chargeRequestAdditionalRecipient';
import { moneySchema } from './money';
export const chargeRequestSchema = object({
    idempotencyKey: ['idempotency_key', string()],
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    cardNonce: ['card_nonce', optional(nullable(string()))],
    customerCardId: ['customer_card_id', optional(nullable(string()))],
    delayCapture: ['delay_capture', optional(nullable(boolean()))],
    referenceId: ['reference_id', optional(nullable(string()))],
    note: ['note', optional(nullable(string()))],
    customerId: ['customer_id', optional(nullable(string()))],
    billingAddress: ['billing_address', optional(lazy(() => addressSchema))],
    shippingAddress: ['shipping_address', optional(lazy(() => addressSchema))],
    buyerEmailAddress: ['buyer_email_address', optional(nullable(string()))],
    orderId: ['order_id', optional(nullable(string()))],
    additionalRecipients: [
        'additional_recipients',
        optional(nullable(array(lazy(() => chargeRequestAdditionalRecipientSchema)))),
    ],
    verificationToken: ['verification_token', optional(nullable(string()))],
});
//# sourceMappingURL=chargeRequest.js.map