import { bigint, boolean, lazy, nullable, object, optional, string, } from '../schema';
import { addressSchema } from './address';
export const cardSchema = object({
    id: ['id', optional(string())],
    cardBrand: ['card_brand', optional(string())],
    last4: ['last_4', optional(string())],
    expMonth: ['exp_month', optional(nullable(bigint()))],
    expYear: ['exp_year', optional(nullable(bigint()))],
    cardholderName: ['cardholder_name', optional(nullable(string()))],
    billingAddress: ['billing_address', optional(lazy(() => addressSchema))],
    fingerprint: ['fingerprint', optional(string())],
    customerId: ['customer_id', optional(nullable(string()))],
    merchantId: ['merchant_id', optional(string())],
    referenceId: ['reference_id', optional(nullable(string()))],
    enabled: ['enabled', optional(boolean())],
    cardType: ['card_type', optional(string())],
    prepaidType: ['prepaid_type', optional(string())],
    bin: ['bin', optional(string())],
    version: ['version', optional(bigint())],
    cardCoBrand: ['card_co_brand', optional(string())],
});
//# sourceMappingURL=card.js.map