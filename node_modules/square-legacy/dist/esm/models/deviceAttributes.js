import { nullable, object, optional, string } from '../schema';
export const deviceAttributesSchema = object({
    type: ['type', string()],
    manufacturer: ['manufacturer', string()],
    model: ['model', optional(nullable(string()))],
    name: ['name', optional(nullable(string()))],
    manufacturersId: ['manufacturers_id', optional(nullable(string()))],
    updatedAt: ['updated_at', optional(string())],
    version: ['version', optional(string())],
    merchantToken: ['merchant_token', optional(nullable(string()))],
});
//# sourceMappingURL=deviceAttributes.js.map