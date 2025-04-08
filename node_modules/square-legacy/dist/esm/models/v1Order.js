import { array, lazy, nullable, number, object, optional, string, } from '../schema';
import { addressSchema } from './address';
import { errorSchema } from './error';
import { v1MoneySchema } from './v1Money';
import { v1OrderHistoryEntrySchema, } from './v1OrderHistoryEntry';
import { v1TenderSchema } from './v1Tender';
export const v1OrderSchema = object({
    errors: ['errors', optional(nullable(array(lazy(() => errorSchema))))],
    id: ['id', optional(string())],
    buyerEmail: ['buyer_email', optional(nullable(string()))],
    recipientName: ['recipient_name', optional(nullable(string()))],
    recipientPhoneNumber: [
        'recipient_phone_number',
        optional(nullable(string())),
    ],
    state: ['state', optional(string())],
    shippingAddress: ['shipping_address', optional(lazy(() => addressSchema))],
    subtotalMoney: ['subtotal_money', optional(lazy(() => v1MoneySchema))],
    totalShippingMoney: [
        'total_shipping_money',
        optional(lazy(() => v1MoneySchema)),
    ],
    totalTaxMoney: ['total_tax_money', optional(lazy(() => v1MoneySchema))],
    totalPriceMoney: ['total_price_money', optional(lazy(() => v1MoneySchema))],
    totalDiscountMoney: [
        'total_discount_money',
        optional(lazy(() => v1MoneySchema)),
    ],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    expiresAt: ['expires_at', optional(nullable(string()))],
    paymentId: ['payment_id', optional(nullable(string()))],
    buyerNote: ['buyer_note', optional(nullable(string()))],
    completedNote: ['completed_note', optional(nullable(string()))],
    refundedNote: ['refunded_note', optional(nullable(string()))],
    canceledNote: ['canceled_note', optional(nullable(string()))],
    tender: ['tender', optional(lazy(() => v1TenderSchema))],
    orderHistory: [
        'order_history',
        optional(nullable(array(lazy(() => v1OrderHistoryEntrySchema)))),
    ],
    promoCode: ['promo_code', optional(nullable(string()))],
    btcReceiveAddress: ['btc_receive_address', optional(nullable(string()))],
    btcPriceSatoshi: ['btc_price_satoshi', optional(nullable(number()))],
});
//# sourceMappingURL=v1Order.js.map