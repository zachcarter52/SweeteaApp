import { nullable, object, optional, string } from '../schema';
export const loyaltyAccountMappingSchema = object({
    id: ['id', optional(string())],
    createdAt: ['created_at', optional(string())],
    phoneNumber: ['phone_number', optional(nullable(string()))],
});
//# sourceMappingURL=loyaltyAccountMapping.js.map