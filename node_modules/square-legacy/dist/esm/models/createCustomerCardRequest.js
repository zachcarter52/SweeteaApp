import { lazy, object, optional, string } from '../schema';
import { addressSchema } from './address';
export const createCustomerCardRequestSchema = object({
    cardNonce: ['card_nonce', string()],
    billingAddress: ['billing_address', optional(lazy(() => addressSchema))],
    cardholderName: ['cardholder_name', optional(string())],
    verificationToken: ['verification_token', optional(string())],
});
//# sourceMappingURL=createCustomerCardRequest.js.map