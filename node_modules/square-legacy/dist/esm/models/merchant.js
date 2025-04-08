import { nullable, object, optional, string } from '../schema';
export const merchantSchema = object({
    id: ['id', optional(string())],
    businessName: ['business_name', optional(nullable(string()))],
    country: ['country', string()],
    languageCode: ['language_code', optional(nullable(string()))],
    currency: ['currency', optional(string())],
    status: ['status', optional(string())],
    mainLocationId: ['main_location_id', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
});
//# sourceMappingURL=merchant.js.map