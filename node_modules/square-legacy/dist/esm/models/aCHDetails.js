import { nullable, object, optional, string } from '../schema';
export const aCHDetailsSchema = object({
    routingNumber: ['routing_number', optional(nullable(string()))],
    accountNumberSuffix: ['account_number_suffix', optional(nullable(string()))],
    accountType: ['account_type', optional(nullable(string()))],
});
//# sourceMappingURL=aCHDetails.js.map