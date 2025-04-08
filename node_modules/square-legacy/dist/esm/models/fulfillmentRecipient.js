import { lazy, nullable, object, optional, string } from '../schema';
import { addressSchema } from './address';
export const fulfillmentRecipientSchema = object({
    customerId: ['customer_id', optional(nullable(string()))],
    displayName: ['display_name', optional(nullable(string()))],
    emailAddress: ['email_address', optional(nullable(string()))],
    phoneNumber: ['phone_number', optional(nullable(string()))],
    address: ['address', optional(lazy(() => addressSchema))],
});
//# sourceMappingURL=fulfillmentRecipient.js.map