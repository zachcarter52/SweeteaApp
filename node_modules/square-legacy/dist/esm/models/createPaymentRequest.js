import { boolean, lazy, object, optional, string } from '../schema';
import { addressSchema } from './address';
import { cashPaymentDetailsSchema, } from './cashPaymentDetails';
import { customerDetailsSchema } from './customerDetails';
import { externalPaymentDetailsSchema, } from './externalPaymentDetails';
import { moneySchema } from './money';
import { offlinePaymentDetailsSchema, } from './offlinePaymentDetails';
export const createPaymentRequestSchema = object({
    sourceId: ['source_id', string()],
    idempotencyKey: ['idempotency_key', string()],
    amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
    tipMoney: ['tip_money', optional(lazy(() => moneySchema))],
    appFeeMoney: ['app_fee_money', optional(lazy(() => moneySchema))],
    delayDuration: ['delay_duration', optional(string())],
    delayAction: ['delay_action', optional(string())],
    autocomplete: ['autocomplete', optional(boolean())],
    orderId: ['order_id', optional(string())],
    customerId: ['customer_id', optional(string())],
    locationId: ['location_id', optional(string())],
    teamMemberId: ['team_member_id', optional(string())],
    referenceId: ['reference_id', optional(string())],
    verificationToken: ['verification_token', optional(string())],
    acceptPartialAuthorization: [
        'accept_partial_authorization',
        optional(boolean()),
    ],
    buyerEmailAddress: ['buyer_email_address', optional(string())],
    buyerPhoneNumber: ['buyer_phone_number', optional(string())],
    billingAddress: ['billing_address', optional(lazy(() => addressSchema))],
    shippingAddress: ['shipping_address', optional(lazy(() => addressSchema))],
    note: ['note', optional(string())],
    statementDescriptionIdentifier: [
        'statement_description_identifier',
        optional(string()),
    ],
    cashDetails: ['cash_details', optional(lazy(() => cashPaymentDetailsSchema))],
    externalDetails: [
        'external_details',
        optional(lazy(() => externalPaymentDetailsSchema)),
    ],
    customerDetails: [
        'customer_details',
        optional(lazy(() => customerDetailsSchema)),
    ],
    offlinePaymentDetails: [
        'offline_payment_details',
        optional(lazy(() => offlinePaymentDetailsSchema)),
    ],
});
//# sourceMappingURL=createPaymentRequest.js.map