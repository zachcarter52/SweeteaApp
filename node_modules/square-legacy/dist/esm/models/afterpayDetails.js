import { nullable, object, optional, string } from '../schema';
export const afterpayDetailsSchema = object({
    emailAddress: ['email_address', optional(nullable(string()))],
});
//# sourceMappingURL=afterpayDetails.js.map