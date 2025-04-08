import { boolean, nullable, object, optional } from '../schema';
export const customerDetailsSchema = object({
    customerInitiated: ['customer_initiated', optional(nullable(boolean()))],
    sellerKeyedIn: ['seller_keyed_in', optional(nullable(boolean()))],
});
//# sourceMappingURL=customerDetails.js.map