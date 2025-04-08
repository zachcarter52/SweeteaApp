import { lazy, nullable, object, optional, string } from '../schema';
import { addressSchema } from './address';
export const prePopulatedDataSchema = object({
    buyerEmail: ['buyer_email', optional(nullable(string()))],
    buyerPhoneNumber: ['buyer_phone_number', optional(nullable(string()))],
    buyerAddress: ['buyer_address', optional(lazy(() => addressSchema))],
});
//# sourceMappingURL=prePopulatedData.js.map