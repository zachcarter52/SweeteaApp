import { nullable, object, optional, string } from '../schema';
export const clearpayDetailsSchema = object({
    emailAddress: ['email_address', optional(nullable(string()))],
});
//# sourceMappingURL=clearpayDetails.js.map